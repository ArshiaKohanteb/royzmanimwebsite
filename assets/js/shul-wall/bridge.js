// ═══════════════════════════════════════════════════════════════
// bridge.js — Connects royzmanim's KosherZmanim engine to our React UI
// Place this file at: assets/js/shul-wall/bridge.js
// ═══════════════════════════════════════════════════════════════

import * as KosherZmanim from "../../libraries/kosherZmanim/kosher-zmanim.js";
import { Temporal } from "../../libraries/kosherZmanim/kosher-zmanim.js";
import { zDTFromFunc } from "../ROYZmanim.js";
import WebsiteLimudCalendar from "../WebsiteLimudCalendar.js";
import { scheduleSettings, geoLocation, getCurrentZDT, getJCal, getZmanCalc, dtF } from "./base.js";
import n2wordsOrdinal from "../misc/n2wordsOrdinal.js";

// ─── MAIN CALCULATION FUNCTION — runs every 60 seconds ───
async function calculate() {
  // Fresh values on every call — correct after midnight without page reload
  const currentZDT = getCurrentZDT();
  const jCal       = getJCal();
  const zmanCalc   = getZmanCalc();

  // ─── 1. HEBREW DATE ───
  const hebrewDate = {
    dayOfWeek: jCal.getDayOfWeek(),
    dayOfWeekEN: jCal.getDayOfTheWeek().en,
    englishDate: jCal.dateRenderer('en').primary.text,
    hebrewDateFormatted: (jCal.getDayOfWeek() == 7 ? "שבת" : n2wordsOrdinal[jCal.getDayOfWeek()])
      + ", " + jCal.formatJewishFullDate().hebrew,
    fullEnglishDate: jCal.getDayOfTheWeek().en + ", " + jCal.dateRenderer('en').primary.text,
  };

  // ─── 2. PARASHA & CANDLE LIGHTING ───
  let melakhaJCal = jCal.shabbat();
  for (const loopJCal = jCal.clone(); !loopJCal.getDate().equals(melakhaJCal.getDate()); loopJCal.forward(5, 1)) {
    if (loopJCal.isAssurBemelacha()) {
      melakhaJCal = loopJCal.clone();
      break;
    }
  }

  const parashaName = jCal.getHebrewParasha().join(" / ")
    + (melakhaJCal.isChanukah() ? " (חנוכה)" : "");

  const jCalErev = melakhaJCal.clone();
  jCalErev.back();
  const candleLightingZDT = zDTFromFunc(
    zmanCalc.chainDate(jCalErev.getDate())
      [((jCalErev.getDayOfWeek() == 6 || !jCalErev.isAssurBemelacha())
        ? 'getCandleLighting'
        : jCalErev.getDayOfWeek() == 7
          ? 'getTzetMelakha'
          : 'getTzetHumra')]()
  );
  const candleLightingTime = candleLightingZDT.toLocaleString(...dtF);

  const tzet = melakhaJCal.clone();
  do { tzet.forward(5, 1); } while (tzet.isAssurBemelacha());
  tzet.back();
  tzet.back();
  tzet.forward(5, 1);

  let tzetIkar = zDTFromFunc(zmanCalc.chainDate(tzet.getDate()).getTzetMelakha());
  let tzetRT   = zmanCalc.chainDate(tzet.getDate()).getTzetRT();

  if (tzetIkar.second > 20) tzetIkar = tzetIkar.add({ minutes: 1 }).with({ second: 0 });
  if (tzetRT.second    > 20) tzetRT   = tzetRT.add({ minutes: 1 }).with({ second: 0 });

  const havdalahTime    = tzetIkar.toLocaleString(...dtF);
  const rabbeinuTamTime = tzetRT.toLocaleString(...dtF);

  // ─── 3. ZMANIM ───
  const zmanimConfig = [
    { id: "alot",                 getter: "getAlotHashahar",             label: "Dawn",          round: "earlier" },
    { id: "earliestTefilin",      getter: "getMisheyakir",               label: "Misheyakir",    round: "later"   },
    { id: "sunrise",              getter: "getNetz",                     label: "Sunrise",       round: "later"   },
    { id: "latestShmaMGA",        getter: "getSofZemanShemaMGA",         label: 'Shema MG"A',    round: "earlier" },
    { id: "latestShmaGRA",        getter: "getSofZemanShemaGRA",         label: 'Shema GR"A',    round: "earlier" },
    { id: "latestBrachotShmaGRA", getter: "getSofZemanBerakhothShema",   label: "Latest Prayer", round: "earlier" },
    { id: "hatzoth",              getter: "getHatzoth",                  label: "Midday",        round: "earlier" },
    { id: "minhaGedola",          getter: "getMinhaGedolah",             label: "Early Mincha",  round: "later"   },
    { id: "plagHaminhaHB",        getter: "getPlagHaminhaHalachaBrurah", label: "Plag Hamincha", round: "later"   },
    { id: "sunset",               getter: "getShkiya",                   label: "Sunset",        round: "earlier" },
    { id: "tzeit",                getter: "getTzet",                     label: "Nightfall",     round: "later"   },
    { id: "chatzotLayla",         getter: "getSolarMidnight",            label: "Midnight",      round: "later"   },
  ];

  const computedZmanim = [];
  const tempJCal = jCal.clone();
  tempJCal.back();

  const collectedIds = new Set();
  for (let i = 0; i < 3; i++) {
    const calcForDay = zmanCalc.chainDate(tempJCal.getDate());
    for (const zConfig of zmanimConfig) {
      if (collectedIds.has(zConfig.id)) continue;
      try {
        const zdt = zDTFromFunc(calcForDay[zConfig.getter]());
        if (zdt && Temporal.ZonedDateTime.compare(zdt, currentZDT) === 1) {
          const isNextDay = Temporal.PlainDate.compare(zdt.toPlainDate(), currentZDT.toPlainDate()) === 1;
          computedZmanim.push({
            id: zConfig.id,
            label: zConfig.label,
            time: zdt.toLocaleString(...dtF),
            isNextDay,
            epochMs: zdt.epochMilliseconds,
          });
          collectedIds.add(zConfig.id);
        }
      } catch (e) { /* some zmanim may not apply today */ }
    }
    tempJCal.forward(5, 1);
  }

  computedZmanim.sort((a, b) => a.epochMs - b.epochMs);

  // ─── 4. LIMUDIM ───
  const allLearning = jCal.getAllLearning();
  const computedLimudim = [
    { study: "Babylonian Talmud",  ref: allLearning.dafBavli      || "" },
    { study: "Yerushalmi (Vilna)", ref: allLearning.DafYerushalmi || "" },
    { study: "Psalms (Monthly)",   ref: allLearning.TehilimHodshi || "" },
    { study: "Psalms (Weekly)",    ref: allLearning.TehilimShvui  || "" },
  ];

  // ─── 5. HILOULOT ───
  const hiloulahIndex = new KosherZmanim.HiloulahYomiCalculator();
  await hiloulahIndex.init();
  const hiloulahData     = hiloulahIndex.getHiloulah(jCal);
  const computedHiloulot = hiloulahData.en.map(h => ({ name: h.name }));

  // ─── 6. MAKAM ───
  let computedMakam = "";
  try {
    const makamObj   = await (await fetch("/assets/js/makamObj.json")).json();
    const makamIndex = new KosherZmanim.Makam(makamObj.sefarimList);
    const makam      = makamIndex.getTodayMakam(melakhaJCal);
    computedMakam    = "Makam " + makam.makam
      .map(mak => (typeof mak === "number" ? makamObj.makamNameMapEng[mak] : mak))
      .join(" / ");
  } catch (e) {
    computedMakam = "";
  }

  // ─── 7. EXPOSE & DISPATCH ───
  window.__SHUL_DATA__ = {
    ready: true,
    calculatedAt: Date.now(),
    location:       scheduleSettings.location,
    timezone:       scheduleSettings.location.timezone,
    hebrewDate,
    parasha:        parashaName,
    candleLighting: candleLightingTime,
    havdalah:       havdalahTime,
    rabbeinuTam:    rabbeinuTamTime,
    makam:          computedMakam,
    zmanim:         computedZmanim,
    limudim:        computedLimudim,
    hiloulot:       computedHiloulot,
  };

  window.dispatchEvent(new CustomEvent("shul-data-ready", {
    detail: window.__SHUL_DATA__
  }));

  console.log(
    "[bridge.js] Recalculated at", new Date().toLocaleTimeString(),
    "| next zman:", computedZmanim[0]?.label, computedZmanim[0]?.time
  );
}

// ─── Run immediately, then every 60 seconds ───
calculate().catch(e => console.error("[bridge.js] Initial calculation failed:", e));

setInterval(() => {
  calculate().catch(e => console.error("[bridge.js] Recalculation failed:", e));
}, 60_000);
