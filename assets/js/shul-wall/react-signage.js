import Wr,{useState as q,useEffect as Qe}from"react";import zr from"react-dom/client";var ls={exports:{}},zt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=Wr,$r=Symbol.for("react.element"),Ur=Symbol.for("react.fragment"),Vr=Object.prototype.hasOwnProperty,Gr=Hr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qr={key:!0,ref:!0,__self:!0,__source:!0};function cs(n,e,t){var i,s={},r=null,o=null;t!==void 0&&(r=""+t),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Vr.call(e,i)&&!qr.hasOwnProperty(i)&&(s[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:$r,type:n,key:r,ref:o,props:s,_owner:Gr.current}}zt.Fragment=Ur;zt.jsx=cs;zt.jsxs=cs;ls.exports=zt;var c=ls.exports;function Yr(n){const e=(n||"").toLowerCase();return e.includes("shacharit")||e.includes("shaharit")?"☀️":e.includes("mincha")||e.includes("minha")?"🕐":e.includes("arvit")?"🌙":e.includes("shiur")?"📖":e.includes("selichot")||e.includes("selihot")?"🙏":e.includes("seudat")||e.includes("kiddush")?"🍷":e.includes("candle")?"🕯️":e.includes("havdala")?"✡️":"📌"}function Kr(){const[n,e]=q(null),[t,i]=q([]);return Qe(()=>{var o;function s(a){e(a.detail)}(o=window.__SHUL_DATA__)!=null&&o.ready&&e(window.__SHUL_DATA__),window.addEventListener("shul-data-ready",s);const r=document.getElementById("youth");if(r){const a=()=>{const f=Array.from(r.querySelectorAll("li")).map(u=>{var p,E,j,M;const d=u.querySelectorAll("div"),y=((E=(p=d[0])==null?void 0:p.textContent)==null?void 0:E.trim())||"",g=((M=(j=d[1])==null?void 0:j.textContent)==null?void 0:M.trim())||"";return{event:y,time:g,icon:Yr(y)}}).filter(u=>u.event&&u.time);f.length>0&&i(f)},l=new MutationObserver(a);return l.observe(r,{childList:!0,subtree:!0}),a(),()=>{l.disconnect(),window.removeEventListener("shul-data-ready",s)}}return()=>window.removeEventListener("shul-data-ready",s)},[]),{data:n,schedule:t,isLoading:!n}}function Qr(){const[n,e]=q(new Date);return Qe(()=>{const t=setInterval(()=>e(new Date),1e3);return()=>clearInterval(t)},[]),n}const Jr=()=>{};var pi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(n,e){if(!n)throw ze(e)},ze=function(n){return new Error("Firebase Database ("+hs.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Xr=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},An={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|h>>6,y=h&63;l||(y=64,o||(d=64)),i.push(t[f],t[u],t[d],t[y])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ds(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||h==null||u==null)throw new Zr;const d=r<<2|a>>4;if(i.push(d),h!==64){const y=a<<4&240|h>>2;if(i.push(y),u!==64){const g=h<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const us=function(n){const e=ds(n);return An.encodeByteArray(e,!0)},St=function(n){return us(n).replace(/\./g,"")},un=function(n){try{return An.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(n){return fs(void 0,n)}function fs(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!to(t)||(n[t]=fs(n[t],e[t]));return n}function to(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=()=>no().__FIREBASE_DEFAULTS__,so=()=>{if(typeof process>"u"||typeof pi>"u")return;const n=pi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ro=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&un(n[1]);return e&&JSON.parse(e)},ps=()=>{try{return Jr()||io()||so()||ro()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},oo=n=>{var e,t;return(t=(e=ps())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},ao=n=>{const e=oo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ms=()=>{var n;return(n=ps())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lo(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[St(JSON.stringify(t)),St(JSON.stringify(o)),""].join(".")}const Je={};function ho(){const n={prod:[],emulator:[]};for(const e of Object.keys(Je))Je[e]?n.emulator.push(e):n.prod.push(e);return n}function uo(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let mi=!1;function fo(n,e){if(typeof window>"u"||typeof document>"u"||!Dn(window.location.host)||Je[n]===e||Je[n]||mi)return;Je[n]=e;function t(d){return`__firebase__banner__${d}`}const i="__firebase__banner",r=ho().prod.length>0;function o(){const d=document.getElementById(i);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,y){d.setAttribute("width","24"),d.setAttribute("id",y),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function h(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{mi=!0,o()},d}function f(d,y){d.setAttribute("id",y),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function u(){const d=uo(i),y=t("text"),g=document.getElementById(y)||document.createElement("span"),p=t("learnmore"),E=document.getElementById(p)||document.createElement("a"),j=t("preprendIcon"),M=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const X=d.element;a(X),f(E,p);const ie=h();l(M,j),X.append(M,g,E,ie),document.body.appendChild(X)}r?(g.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(po())}function mo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function go(){return hs.NODE_ADMIN===!0}function _o(){try{return typeof indexedDB=="object"}catch{return!1}}function yo(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="FirebaseError";class ut extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=vo,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?bo(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ut(s,a,i)}}function bo(n,e){return n.replace(Co,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Co=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n){return JSON.parse(n)}function H(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=it(un(r[0])||""),t=it(un(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},xo=function(n){const e=ys(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},So=function(n){const e=ys(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Le(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function gi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Et(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function wt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(_i(r)&&_i(o)){if(!wt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function _i(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],h,f;for(let u=0;u<80;u++){u<40?u<20?(h=a^r&(o^a),f=1518500249):(h=r^o^a,f=1859775393):u<60?(h=r&o|a&(r|o),f=2400959708):(h=r^o^a,f=3395469782);const d=(s<<5|s>>>27)+h+l+f+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Pn(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,_(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},$t=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n){return n&&n._delegate?n._delegate:n}class st{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ht;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ko(e))try{this.getOrInitializeService({instanceIdentifier:be})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=be){return this.instances.has(e)}getOptions(e=be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:No(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=be){return this.component?this.component.multipleInstances?e:be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function No(n){return n===be?void 0:n}function ko(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new To(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const Ao={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Do=N.INFO,Po={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Fo=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Po[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vs{constructor(e){this.name=e,this._logLevel=Do,this._logHandler=Fo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ao[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const Mo=(n,e)=>e.some(t=>n instanceof t);let yi,vi;function Oo(){return yi||(yi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lo(){return vi||(vi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bs=new WeakMap,fn=new WeakMap,Cs=new WeakMap,Xt=new WeakMap,Fn=new WeakMap;function jo(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ue(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&bs.set(t,n)}).catch(()=>{}),Fn.set(e,n),e}function Bo(n){if(fn.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});fn.set(n,e)}let pn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return fn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cs.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ue(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Wo(n){pn=n(pn)}function zo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Zt(this),e,...t);return Cs.set(i,e.sort?e.sort():[e]),ue(i)}:Lo().includes(n)?function(...e){return n.apply(Zt(this),e),ue(bs.get(this))}:function(...e){return ue(n.apply(Zt(this),e))}}function Ho(n){return typeof n=="function"?zo(n):(n instanceof IDBTransaction&&Bo(n),Mo(n,Oo())?new Proxy(n,pn):n)}function ue(n){if(n instanceof IDBRequest)return jo(n);if(Xt.has(n))return Xt.get(n);const e=Ho(n);return e!==n&&(Xt.set(n,e),Fn.set(e,n)),e}const Zt=n=>Fn.get(n);function $o(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=ue(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ue(o.result),l.oldVersion,l.newVersion,ue(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const Uo=["get","getKey","getAll","getAllKeys","count"],Vo=["put","add","delete","clear"],en=new Map;function bi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(en.get(e))return en.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Vo.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Uo.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(a.shift())),(await Promise.all([h[t](...a),s&&l.done]))[0]};return en.set(e,r),r}Wo(n=>({...n,get:(e,t,i)=>bi(e,t)||n.get(e,t,i),has:(e,t)=>!!bi(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qo(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function qo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mn="@firebase/app",Ci="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new vs("@firebase/app"),Yo="@firebase/app-compat",Ko="@firebase/analytics-compat",Qo="@firebase/analytics",Jo="@firebase/app-check-compat",Xo="@firebase/app-check",Zo="@firebase/auth",ea="@firebase/auth-compat",ta="@firebase/database",na="@firebase/data-connect",ia="@firebase/database-compat",sa="@firebase/functions",ra="@firebase/functions-compat",oa="@firebase/installations",aa="@firebase/installations-compat",la="@firebase/messaging",ca="@firebase/messaging-compat",ha="@firebase/performance",da="@firebase/performance-compat",ua="@firebase/remote-config",fa="@firebase/remote-config-compat",pa="@firebase/storage",ma="@firebase/storage-compat",ga="@firebase/firestore",_a="@firebase/ai",ya="@firebase/firestore-compat",va="firebase",ba="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="[DEFAULT]",Ca={[mn]:"fire-core",[Yo]:"fire-core-compat",[Qo]:"fire-analytics",[Ko]:"fire-analytics-compat",[Xo]:"fire-app-check",[Jo]:"fire-app-check-compat",[Zo]:"fire-auth",[ea]:"fire-auth-compat",[ta]:"fire-rtdb",[na]:"fire-data-connect",[ia]:"fire-rtdb-compat",[sa]:"fire-fn",[ra]:"fire-fn-compat",[oa]:"fire-iid",[aa]:"fire-iid-compat",[la]:"fire-fcm",[ca]:"fire-fcm-compat",[ha]:"fire-perf",[da]:"fire-perf-compat",[ua]:"fire-rc",[fa]:"fire-rc-compat",[pa]:"fire-gcs",[ma]:"fire-gcs-compat",[ga]:"fire-fst",[ya]:"fire-fst-compat",[_a]:"fire-vertex","fire-js":"fire-js",[va]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Map,xa=new Map,_n=new Map;function xi(n,e){try{n.container.addComponent(e)}catch(t){ae.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Tt(n){const e=n.name;if(_n.has(e))return ae.debug(`There were multiple attempts to register component ${e}.`),!1;_n.set(e,n);for(const t of It.values())xi(t,n);for(const t of xa.values())xi(t,n);return!0}function Sa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ea(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fe=new _s("app","Firebase",wa);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=ba;function xs(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:gn,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw fe.create("bad-app-name",{appName:String(s)});if(t||(t=ms()),!t)throw fe.create("no-options");const r=It.get(s);if(r){if(wt(t,r.options)&&wt(i,r.config))return r;throw fe.create("duplicate-app",{appName:s})}const o=new Ro(s);for(const l of _n.values())o.addComponent(l);const a=new Ia(t,i,o);return It.set(s,a),a}function Na(n=gn){const e=It.get(n);if(!e&&n===gn&&ms())return xs();if(!e)throw fe.create("no-app",{appName:n});return e}function Pe(n,e,t){let i=Ca[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ae.warn(o.join(" "));return}Tt(new st(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="firebase-heartbeat-database",Ra=1,rt="firebase-heartbeat-store";let tn=null;function Ss(){return tn||(tn=$o(ka,Ra,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rt)}catch(t){console.warn(t)}}}}).catch(n=>{throw fe.create("idb-open",{originalErrorMessage:n.message})})),tn}async function Aa(n){try{const t=(await Ss()).transaction(rt),i=await t.objectStore(rt).get(Es(n));return await t.done,i}catch(e){if(e instanceof ut)ae.warn(e.message);else{const t=fe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ae.warn(t.message)}}}async function Si(n,e){try{const i=(await Ss()).transaction(rt,"readwrite");await i.objectStore(rt).put(e,Es(n)),await i.done}catch(t){if(t instanceof ut)ae.warn(t.message);else{const i=fe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ae.warn(i.message)}}}function Es(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=1024,Pa=30;class Fa{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Oa(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ei();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Pa){const o=La(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ae.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ei(),{heartbeatsToSend:i,unsentEntries:s}=Ma(this._heartbeatsCache.heartbeats),r=St(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ae.warn(t),""}}}function Ei(){return new Date().toISOString().substring(0,10)}function Ma(n,e=Da){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),wi(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),wi(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Oa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _o()?yo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Aa(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Si(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Si(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wi(n){return St(JSON.stringify({version:2,heartbeats:n})).length}function La(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n){Tt(new st("platform-logger",e=>new Go(e),"PRIVATE")),Tt(new st("heartbeat",e=>new Fa(e),"PRIVATE")),Pe(mn,Ci,n),Pe(mn,Ci,"esm2020"),Pe("fire-js","")}ja("");var Ba="firebase",Wa="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe(Ba,Wa,"app");var Ii={};const Ti="@firebase/database",Ni="1.1.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws="";function za(n){ws=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),H(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:it(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return he(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ha(e)}}catch{}return new $a},xe=Is("localStorage"),Ua=Is("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=new vs("@firebase/database"),Va=function(){let n=1;return function(){return n++}}(),Ts=function(n){const e=Io(n),t=new wo;t.update(e);const i=t.digest();return An.encodeByteArray(i)},pt=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=pt.apply(null,i):typeof i=="object"?e+=H(i):e+=i,e+=" "}return e};let Xe=null,ki=!0;const Ga=function(n,e){_(!0,"Can't turn on custom loggers persistently."),Fe.logLevel=N.VERBOSE,Xe=Fe.log.bind(Fe)},U=function(...n){if(ki===!0&&(ki=!1,Xe===null&&Ua.get("logging_enabled")===!0&&Ga()),Xe){const e=pt.apply(null,n);Xe(e)}},mt=function(n){return function(...e){U(n,...e)}},yn=function(...n){const e="FIREBASE INTERNAL ERROR: "+pt(...n);Fe.error(e)},le=function(...n){const e=`FIREBASE FATAL ERROR: ${pt(...n)}`;throw Fe.error(e),new Error(e)},Q=function(...n){const e="FIREBASE WARNING: "+pt(...n);Fe.warn(e)},qa=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ns=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Ya=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},je="[MIN_NAME]",Ee="[MAX_NAME]",He=function(n,e){if(n===e)return 0;if(n===je||e===Ee)return-1;if(e===je||n===Ee)return 1;{const t=Ri(n),i=Ri(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Ka=function(n,e){return n===e?0:n<e?-1:1},Ve=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+H(e))},Mn=function(n){if(typeof n!="object"||n===null)return H(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=H(e[i]),t+=":",t+=Mn(n[e[i]]);return t+="}",t},ks=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function J(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Rs=function(n){_(!Ns(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const h=[];for(l=t;l;l-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const f=h.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(f.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Qa=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ja=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Xa(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Za=new RegExp("^-?(0*)\\d{1,10}$"),el=-2147483648,tl=2147483647,Ri=function(n){if(Za.test(n)){const e=Number(n);if(e>=el&&e<=tl)return e}return null},$e=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Q("Exception was thrown by user callback.",t),e},Math.floor(0))}},nl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ze=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Ea(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Q(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(U("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Q(e)}}class xt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="5",As="v",Ds="s",Ps="r",Fs="f",Ms=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Os="ls",Ls="p",vn="ac",js="websocket",Bs="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,h=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function rl(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function zs(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let i;if(e===js)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Bs)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);rl(n)&&(t.ns=n.namespace);const s=[];return J(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.counters_={}}incrementCounter(e,t=1){he(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return eo(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn={},sn={};function Ln(n){const e=n.toString();return nn[e]||(nn[e]=new ol),nn[e]}function al(n,e){const t=n.toString();return sn[t]||(sn[t]=e()),sn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&$e(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="start",cl="close",hl="pLPCommand",dl="pRTLPCB",Hs="id",$s="pw",Us="ser",ul="cb",fl="seg",pl="ts",ml="d",gl="dframe",Vs=1870,Gs=30,_l=Vs-Gs,yl=25e3,vl=3e4;class De{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=mt(e),this.stats_=Ln(t),this.urlFn=l=>(this.appCheckToken&&(l[vn]=this.appCheckToken),zs(t,Bs,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ll(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vl)),Ya(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jn((...r)=>{const[o,a,l,h,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ai)this.id=a,this.password=l;else if(o===cl)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ai]="t",i[Us]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[ul]=this.scriptTagHolder.uniqueCallbackIdentifier),i[As]=On,this.transportSessionId&&(i[Ds]=this.transportSessionId),this.lastSessionId&&(i[Os]=this.lastSessionId),this.applicationId&&(i[Ls]=this.applicationId),this.appCheckToken&&(i[vn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ms.test(location.hostname)&&(i[Ps]=Fs);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){De.forceAllow_=!0}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){return De.forceAllow_?!0:!De.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Qa()&&!Ja()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=H(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=us(t),s=ks(i,_l);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[gl]="t",i[Hs]=e,i[$s]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=H(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class jn{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Va(),window[hl+this.uniqueCallbackIdentifier]=e,window[dl+this.uniqueCallbackIdentifier]=t,this.myIFrame=jn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){U("frame writing exception"),a.stack&&U(a.stack),U(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||U("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Hs]=this.myID,e[$s]=this.myPW,e[Us]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gs+i.length<=Vs;){const o=this.pendingSegs.shift();i=i+"&"+fl+s+"="+o.seg+"&"+pl+s+"="+o.ts+"&"+ml+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(yl)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{U("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=16384,Cl=45e3;let Nt=null;typeof MozWebSocket<"u"?Nt=MozWebSocket:typeof WebSocket<"u"&&(Nt=WebSocket);class Z{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=mt(this.connId),this.stats_=Ln(t),this.connURL=Z.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[As]=On,typeof location<"u"&&location.hostname&&Ms.test(location.hostname)&&(o[Ps]=Fs),t&&(o[Ds]=t),i&&(o[Os]=i),s&&(o[vn]=s),r&&(o[Ls]=r),zs(e,js,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xe.set("previous_websocket_failure",!0);try{let i;go(),this.mySock=new Nt(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Z.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Nt!==null&&!Z.forceDisallow_}static previouslyFailed(){return xe.isInMemoryStorage||xe.get("previous_websocket_failure")===!0}markConnectionHealthy(){xe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=it(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=H(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ks(t,bl);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Cl))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Z.responsesRequiredToBeHealthy=2;Z.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static get ALL_TRANSPORTS(){return[De,Z]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Z&&Z.isAvailable();let i=t&&!Z.previouslyFailed();if(e.webSocketOnly&&(t||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Z];else{const s=this.transports_=[];for(const r of ot.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);ot.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ot.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=6e4,Sl=5e3,El=10*1024,wl=100*1024,rn="t",Di="d",Il="s",Pi="r",Tl="e",Fi="o",Mi="a",Oi="n",Li="p",Nl="h";class kl{constructor(e,t,i,s,r,o,a,l,h,f){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=mt("c:"+this.id+":"),this.transportManager_=new ot(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ze(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wl?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>El?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rn in e){const t=e[rn];t===Mi?this.upgradeIfSecondaryHealthy_():t===Pi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Fi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ve("t",e),i=Ve("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Li,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Oi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ve("t",e),i=Ve("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ve(rn,e);if(Di in e){const i=e[Di];if(t===Nl){const s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Oi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Il?this.onConnectionShutdown_(i):t===Pi?this.onReset_(i):t===Tl?yn("Server Error: "+i):t===Fi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),On!==i&&Q("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Ze(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ze(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Sl))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Li,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Ys{static getInstance(){return new kt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=32,Bi=768;class I{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function w(){return new I("")}function C(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function me(n){return n.pieces_.length-n.pieceNum_}function k(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new I(n.pieces_,e)}function Ks(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Rl(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Qs(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Js(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new I(e,0)}function L(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof I)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new I(t,0)}function S(n){return n.pieceNum_>=n.pieces_.length}function Y(n,e){const t=C(n),i=C(e);if(t===null)return e;if(t===i)return Y(k(n),k(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Bn(n,e){if(me(n)!==me(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ee(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(me(n)>me(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Al{constructor(e,t){this.errorPrefix_=t,this.parts_=Qs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=$t(this.parts_[i]);Xs(this)}}function Dl(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=$t(e),Xs(n)}function Pl(n){const e=n.parts_.pop();n.byteLength_-=$t(e),n.parts_.length>0&&(n.byteLength_-=1)}function Xs(n){if(n.byteLength_>Bi)throw new Error(n.errorPrefix_+"has a key path longer than "+Bi+" bytes ("+n.byteLength_+").");if(n.parts_.length>ji)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ji+") or object contains a cycle "+Ce(n))}function Ce(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Ys{static getInstance(){return new Wn}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=1e3,Fl=60*5*1e3,Wi=30*1e3,Ml=1.3,Ol=3e4,Ll="server_kill",zi=3;class oe extends qs{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=oe.nextPersistentConnectionId_++,this.log_=mt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ge,this.maxReconnectDelay_=Fl,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(H(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Ht,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,h=a.s;oe.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(h,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&he(e,"w")){const i=Le(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Q(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||So(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=xo(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+H(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):yn("Unrecognized action received from server: "+H(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ge,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ge,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ol&&(this.reconnectDelay_=Ge),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ml)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+oe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},h=function(u){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?U("getToken() completed but was canceled"):(U("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new kl(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,y=>{Q(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ll)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Q(u),l())}}}interrupt(e){U("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){U("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gi(this.interruptReasons_)&&(this.reconnectDelay_=Ge,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Mn(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new I(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){U("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=zi&&(this.reconnectDelay_=Wi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){U("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=zi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ws.replace(/\./g,"-")]=1,gs()?e["framework.cordova"]=1:mo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kt.getInstance().currentlyOnline();return gi(this.interruptReasons_)&&e}}oe.nextPersistentConnectionId_=0;oe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new x(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new x(je,e),s=new x(je,t);return this.compare(i,s)!==0}minPost(){return x.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bt;class Zs extends Ut{static get __EMPTY_NODE(){return bt}static set __EMPTY_NODE(e){bt=e}compare(e,t){return He(e.name,t.name)}isDefinedOn(e){throw ze("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return x.MIN}maxPost(){return new x(Ee,bt)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new x(e,bt)}toString(){return".key"}}const Me=new Zs;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class z{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??z.RED,this.left=s??K.EMPTY_NODE,this.right=r??K.EMPTY_NODE}copy(e,t,i,s,r){return new z(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return K.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return K.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}z.RED=!0;z.BLACK=!1;class jl{copy(e,t,i,s,r){return this}insert(e,t,i){return new z(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class K{constructor(e,t=K.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new K(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,z.BLACK,null,null))}remove(e){return new K(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,z.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ct(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ct(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ct(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ct(this.root_,null,this.comparator_,!0,e)}}K.EMPTY_NODE=new jl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n,e){return He(n.name,e.name)}function zn(n,e){return He(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn;function Wl(n){bn=n}const er=function(n){return typeof n=="number"?"number:"+Rs(n):"string:"+n},tr=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&he(e,".sv"),"Priority must be a string or number.")}else _(n===bn||n.isEmpty(),"priority of unexpected type.");_(n===bn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi;class W{static set __childrenNodeConstructor(e){Hi=e}static get __childrenNodeConstructor(){return Hi}constructor(e,t=W.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),tr(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new W(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:W.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return S(e)?this:C(e)===".priority"?this.priorityNode_:W.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:W.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=C(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(_(i!==".priority"||me(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,W.__childrenNodeConstructor.EMPTY_NODE.updateChild(k(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+er(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Rs(this.value_):e+=this.value_,this.lazyHash_=Ts(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===W.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof W.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=W.VALUE_TYPE_ORDER.indexOf(t),r=W.VALUE_TYPE_ORDER.indexOf(i);return _(s>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}W.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr,ir;function zl(n){nr=n}function Hl(n){ir=n}class $l extends Ut{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?He(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return x.MIN}maxPost(){return new x(Ee,new W("[PRIORITY-POST]",ir))}makePost(e,t){const i=nr(e);return new x(t,new W("[PRIORITY-POST]",i))}toString(){return".priority"}}const P=new $l;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=Math.log(2);class Vl{constructor(e){const t=r=>parseInt(Math.log(r)/Ul,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rt=function(n,e,t,i){n.sort(e);const s=function(l,h){const f=h-l;let u,d;if(f===0)return null;if(f===1)return u=n[l],d=t?t(u):u,new z(d,u.node,z.BLACK,null,null);{const y=parseInt(f/2,10)+l,g=s(l,y),p=s(y+1,h);return u=n[y],d=t?t(u):u,new z(d,u.node,z.BLACK,g,p)}},r=function(l){let h=null,f=null,u=n.length;const d=function(g,p){const E=u-g,j=u;u-=g;const M=s(E+1,j),X=n[E],ie=t?t(X):X;y(new z(ie,X.node,p,null,M))},y=function(g){h?(h.left=g,h=g):(f=g,h=g)};for(let g=0;g<l.count;++g){const p=l.nextBitIsOne(),E=Math.pow(2,l.count-(g+1));p?d(E,z.BLACK):(d(E,z.BLACK),d(E,z.RED))}return f},o=new Vl(n.length),a=r(o);return new K(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on;const Ae={};class re{static get Default(){return _(Ae&&P,"ChildrenNode.ts has not been loaded"),on=on||new re({".priority":Ae},{".priority":P}),on}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Le(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof K?t:null}hasIndex(e){return he(this.indexSet_,e.toString())}addIndex(e,t){_(e!==Me,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(x.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Rt(i,e.getCompare()):a=Ae;const l=e.toString(),h={...this.indexSet_};h[l]=e;const f={...this.indexes_};return f[l]=a,new re(f,h)}addToIndexes(e,t){const i=Et(this.indexes_,(s,r)=>{const o=Le(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),s===Ae)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(x.Wrap);let h=l.getNext();for(;h;)h.name!==e.name&&a.push(h),h=l.getNext();return a.push(e),Rt(a,o.getCompare())}else return Ae;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new x(e.name,a))),l.insert(e,e.node)}});return new re(i,this.indexSet_)}removeFromIndexes(e,t){const i=Et(this.indexes_,s=>{if(s===Ae)return s;{const r=t.get(e.name);return r?s.remove(new x(e.name,r)):s}});return new re(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe;class v{static get EMPTY_NODE(){return qe||(qe=new v(new K(zn),null,re.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&tr(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qe}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?qe:t}}getChild(e){const t=C(e);return t===null?this:this.getImmediateChild(t).getChild(k(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new x(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?qe:this.priorityNode_;return new v(s,o,r)}}updateChild(e,t){const i=C(e);if(i===null)return t;{_(C(e)!==".priority"||me(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(k(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(P,(o,a)=>{t[o]=a.val(e),i++,r&&v.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+er(this.getPriority().val())+":"),this.forEachChild(P,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Ts(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new x(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new x(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new x(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,x.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,x.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gt?-1:0}withIndex(e){if(e===Me||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Me||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(P),s=t.getIterator(P);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Me?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Gl extends v{constructor(){super(new K(zn),v.EMPTY_NODE,re.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const gt=new Gl;Object.defineProperties(x,{MIN:{value:new x(je,v.EMPTY_NODE)},MAX:{value:new x(Ee,gt)}});Zs.__EMPTY_NODE=v.EMPTY_NODE;W.__childrenNodeConstructor=v;Wl(gt);Hl(gt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=!0;function $(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new W(t,$(e))}if(!(n instanceof Array)&&ql){const t=[];let i=!1;if(J(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=$(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new x(o,l)))}}),t.length===0)return v.EMPTY_NODE;const r=Rt(t,Bl,o=>o.name,zn);if(i){const o=Rt(t,P.getCompare());return new v(r,$(e),new re({".priority":o},{".priority":P}))}else return new v(r,$(e),re.Default)}else{let t=v.EMPTY_NODE;return J(n,(i,s)=>{if(he(n,i)&&i.substring(0,1)!=="."){const r=$(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority($(e))}}zl($);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends Ut{constructor(e){super(),this.indexPath_=e,_(!S(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?He(e.name,t.name):r}makePost(e,t){const i=$(e),s=v.EMPTY_NODE.updateChild(this.indexPath_,i);return new x(t,s)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,gt);return new x(Ee,e)}toString(){return Qs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Ut{compare(e,t){const i=e.node.compareTo(t.node);return i===0?He(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return x.MIN}maxPost(){return x.MAX}makePost(e,t){const i=$(e);return new x(t,i)}toString(){return".value"}}const Ql=new Kl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n){return{type:"value",snapshotNode:n}}function Be(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function at(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function lt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Jl(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(at(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Be(t,i)):o.trackChildChange(lt(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(P,(s,r)=>{t.hasChild(s)||i.trackChildChange(at(s,r))}),t.isLeafNode()||t.forEachChild(P,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(lt(s,r,o))}else i.trackChildChange(Be(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.indexedFilter_=new Hn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ct.getStartPost_(e),this.endPost_=ct.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new x(t,i))||(i=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=v.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(P,(o,a)=>{r.matches(new x(o,a))||(s=s.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new ct(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new x(t,i))||(i=v.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,y)=>u(y,d)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new x(t,i),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,h,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const y=d==null?1:o(d,l);if(f&&!i.isEmpty()&&y>=0)return r!=null&&r.trackChildChange(lt(t,i,u)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(at(t,u));const p=a.updateImmediateChild(t,v.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Be(d.name,d.node)),p.updateImmediateChild(d.name,d.node)):p}}else return i.isEmpty()?e:f&&o(h,l)>=0?(r!=null&&(r.trackChildChange(at(h.name,h.node)),r.trackChildChange(Be(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(h.name,v.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=P}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:je}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ee}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===P}copy(){const e=new $n;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Zl(n){return n.loadsAllData()?new Hn(n.getIndex()):n.hasLimit()?new Xl(n):new ct(n)}function $i(n){const e={};if(n.isDefault())return e;let t;if(n.index_===P?t="$priority":n.index_===Ql?t="$value":n.index_===Me?t="$key":(_(n.index_ instanceof Yl,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=H(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=H(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+H(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=H(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+H(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ui(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==P&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends qs{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=mt("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=At.getListenId_(e,i),a={};this.listens_[o]=a;const l=$i(e._queryParams);this.restRequest_(r+".json",l,(h,f)=>{let u=f;if(h===404&&(u=null,h=null),h===null&&this.onDataUpdate_(r,u,!1,i),Le(this.listens_,o)===a){let d;h?h===401?d="permission_denied":d="rest_error:"+h:d="ok",s(d,null)}})}unlisten(e,t){const i=At.getListenId_(e,t);delete this.listens_[i]}get(e){const t=$i(e._queryParams),i=e._path.toString(),s=new Ht;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Eo(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=it(a.responseText)}catch{Q("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Q("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return{value:null,children:new Map}}function rr(n,e,t){if(S(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=C(e);n.children.has(i)||n.children.set(i,Dt());const s=n.children.get(i);e=k(e),rr(s,e,t)}}function Cn(n,e,t){n.value!==null?t(e,n.value):tc(n,(i,s)=>{const r=new I(e.toString()+"/"+i);Cn(s,r,t)})}function tc(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&J(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=10*1e3,ic=30*1e3,sc=5*60*1e3;class rc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new nc(e);const i=Vi+(ic-Vi)*Math.random();Ze(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;J(e,(s,r)=>{r>0&&he(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Ze(this.reportStats_.bind(this),Math.floor(Math.random()*2*sc))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(te||(te={}));function or(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Un(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vn(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=te.ACK_USER_WRITE,this.source=or()}operationForChild(e){if(S(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new I(e));return new Pt(w(),t,this.revert)}}else return _(C(this.path)===e,"operationForChild called for unrelated child."),new Pt(k(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){this.source=e,this.path=t,this.type=te.LISTEN_COMPLETE}operationForChild(e){return S(this.path)?new ht(this.source,w()):new ht(this.source,k(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=te.OVERWRITE}operationForChild(e){return S(this.path)?new we(this.source,w(),this.snap.getImmediateChild(e)):new we(this.source,k(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=te.MERGE}operationForChild(e){if(S(this.path)){const t=this.children.subtree(new I(e));return t.isEmpty()?null:t.value?new we(this.source,w(),t.value):new dt(this.source,w(),t)}else return _(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new dt(this.source,k(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(S(e))return this.isFullyInitialized()&&!this.filtered_;const t=C(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ac(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Jl(o.childName,o.snapshotNode))}),Ye(n,s,"child_removed",e,i,t),Ye(n,s,"child_added",e,i,t),Ye(n,s,"child_moved",r,i,t),Ye(n,s,"child_changed",e,i,t),Ye(n,s,"value",e,i,t),s}function Ye(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>cc(n,a,l)),o.forEach(a=>{const l=lc(n,a,r);s.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(l,n.query_))})})}function lc(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function cc(n,e,t){if(e.childName==null||t.childName==null)throw ze("Should only compare child_ events.");const i=new x(e.childName,e.snapshotNode),s=new x(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n,e){return{eventCache:n,serverCache:e}}function et(n,e,t,i){return Vt(new Ie(e,t,i),n.serverCache)}function ar(n,e,t,i){return Vt(n.eventCache,new Ie(e,t,i))}function xn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Te(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an;const hc=()=>(an||(an=new K(Ka)),an);class R{static fromObject(e){let t=new R(null);return J(e,(i,s)=>{t=t.set(new I(i),s)}),t}constructor(e,t=hc()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:w(),value:this.value};if(S(e))return null;{const i=C(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(k(e),t);return r!=null?{path:L(new I(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(S(e))return this;{const t=C(e),i=this.children.get(t);return i!==null?i.subtree(k(e)):new R(null)}}set(e,t){if(S(e))return new R(t,this.children);{const i=C(e),r=(this.children.get(i)||new R(null)).set(k(e),t),o=this.children.insert(i,r);return new R(this.value,o)}}remove(e){if(S(e))return this.children.isEmpty()?new R(null):new R(null,this.children);{const t=C(e),i=this.children.get(t);if(i){const s=i.remove(k(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new R(null):new R(this.value,r)}else return this}}get(e){if(S(e))return this.value;{const t=C(e),i=this.children.get(t);return i?i.get(k(e)):null}}setTree(e,t){if(S(e))return t;{const i=C(e),r=(this.children.get(i)||new R(null)).setTree(k(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new R(this.value,o)}}fold(e){return this.fold_(w(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(L(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,w(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(S(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(k(e),L(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,w(),t)}foreachOnPath_(e,t,i){if(S(e))return this;{this.value&&i(t,this.value);const s=C(e),r=this.children.get(s);return r?r.foreachOnPath_(k(e),L(t,s),i):new R(null)}}foreach(e){this.foreach_(w(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(L(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.writeTree_=e}static empty(){return new ne(new R(null))}}function tt(n,e,t){if(S(e))return new ne(new R(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Y(s,e);return r=r.updateChild(o,t),new ne(n.writeTree_.set(s,r))}else{const s=new R(t),r=n.writeTree_.setTree(e,s);return new ne(r)}}}function Gi(n,e,t){let i=n;return J(t,(s,r)=>{i=tt(i,L(e,s),r)}),i}function qi(n,e){if(S(e))return ne.empty();{const t=n.writeTree_.setTree(e,new R(null));return new ne(t)}}function Sn(n,e){return ke(n,e)!=null}function ke(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Y(t.path,e)):null}function Yi(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(P,(i,s)=>{e.push(new x(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new x(i,s.value))}),e}function pe(n,e){if(S(e))return n;{const t=ke(n,e);return t!=null?new ne(new R(t)):new ne(n.writeTree_.subtree(e))}}function En(n){return n.writeTree_.isEmpty()}function We(n,e){return lr(w(),n.writeTree_,e)}function lr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=lr(L(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(L(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n,e){return ur(e,n)}function dc(n,e,t,i,s){_(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=tt(n.visibleWrites,e,t)),n.lastWriteId=i}function uc(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function fc(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&pc(a,i.path)?s=!1:ee(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return mc(n),!0;if(i.snap)n.visibleWrites=qi(n.visibleWrites,i.path);else{const a=i.children;J(a,l=>{n.visibleWrites=qi(n.visibleWrites,L(i.path,l))})}return!0}else return!1}function pc(n,e){if(n.snap)return ee(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ee(L(n.path,t),e))return!0;return!1}function mc(n){n.visibleWrites=cr(n.allWrites,gc,w()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function gc(n){return n.visible}function cr(n,e,t){let i=ne.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)ee(t,o)?(a=Y(t,o),i=tt(i,a,r.snap)):ee(o,t)&&(a=Y(o,t),i=tt(i,w(),r.snap.getChild(a)));else if(r.children){if(ee(t,o))a=Y(t,o),i=Gi(i,a,r.children);else if(ee(o,t))if(a=Y(o,t),S(a))i=Gi(i,w(),r.children);else{const l=Le(r.children,C(a));if(l){const h=l.getChild(k(a));i=tt(i,w(),h)}}}else throw ze("WriteRecord should have .snap or .children")}}return i}function hr(n,e,t,i,s){if(!i&&!s){const r=ke(n.visibleWrites,e);if(r!=null)return r;{const o=pe(n.visibleWrites,e);if(En(o))return t;if(t==null&&!Sn(o,w()))return null;{const a=t||v.EMPTY_NODE;return We(o,a)}}}else{const r=pe(n.visibleWrites,e);if(!s&&En(r))return t;if(!s&&t==null&&!Sn(r,w()))return null;{const o=function(h){return(h.visible||s)&&(!i||!~i.indexOf(h.writeId))&&(ee(h.path,e)||ee(e,h.path))},a=cr(n.allWrites,o,e),l=t||v.EMPTY_NODE;return We(a,l)}}}function _c(n,e,t){let i=v.EMPTY_NODE;const s=ke(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(P,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=pe(n.visibleWrites,e);return t.forEachChild(P,(o,a)=>{const l=We(pe(r,new I(o)),a);i=i.updateImmediateChild(o,l)}),Yi(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=pe(n.visibleWrites,e);return Yi(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function yc(n,e,t,i,s){_(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=L(e,t);if(Sn(n.visibleWrites,r))return null;{const o=pe(n.visibleWrites,r);return En(o)?s.getChild(t):We(o,s.getChild(t))}}function vc(n,e,t,i){const s=L(e,t),r=ke(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=pe(n.visibleWrites,s);return We(o,i.getNode().getImmediateChild(t))}else return null}function bc(n,e){return ke(n.visibleWrites,e)}function Cc(n,e,t,i,s,r,o){let a;const l=pe(n.visibleWrites,e),h=ke(l,w());if(h!=null)a=h;else if(t!=null)a=We(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let y=d.getNext();for(;y&&f.length<s;)u(y,i)!==0&&f.push(y),y=d.getNext();return f}else return[]}function xc(){return{visibleWrites:ne.empty(),allWrites:[],lastWriteId:-1}}function Ft(n,e,t,i){return hr(n.writeTree,n.treePath,e,t,i)}function qn(n,e){return _c(n.writeTree,n.treePath,e)}function Ki(n,e,t,i){return yc(n.writeTree,n.treePath,e,t,i)}function Mt(n,e){return bc(n.writeTree,L(n.treePath,e))}function Sc(n,e,t,i,s,r){return Cc(n.writeTree,n.treePath,e,t,i,s,r)}function Yn(n,e,t){return vc(n.writeTree,n.treePath,e,t)}function dr(n,e){return ur(L(n.treePath,e),n.writeTree)}function ur(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,lt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,at(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Be(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,lt(i,e.snapshotNode,s.oldSnap));else throw ze("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const fr=new wc;class Kn{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ie(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yn(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Te(this.viewCache_),r=Sc(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(n){return{filter:n}}function Tc(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Nc(n,e,t,i,s){const r=new Ec;let o,a;if(t.type===te.OVERWRITE){const h=t;h.source.fromUser?o=wn(n,e,h.path,h.snap,i,s,r):(_(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!S(h.path),o=Ot(n,e,h.path,h.snap,i,s,a,r))}else if(t.type===te.MERGE){const h=t;h.source.fromUser?o=Rc(n,e,h.path,h.children,i,s,r):(_(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=In(n,e,h.path,h.children,i,s,a,r))}else if(t.type===te.ACK_USER_WRITE){const h=t;h.revert?o=Pc(n,e,h.path,i,s,r):o=Ac(n,e,h.path,h.affectedTree,i,s,r)}else if(t.type===te.LISTEN_COMPLETE)o=Dc(n,e,t.path,i,r);else throw ze("Unknown operation type: "+t.type);const l=r.getChanges();return kc(e,o,l),{viewCache:o,changes:l}}function kc(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=xn(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(sr(xn(e)))}}function pr(n,e,t,i,s,r){const o=e.eventCache;if(Mt(i,t)!=null)return e;{let a,l;if(S(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Te(e),f=h instanceof v?h:v.EMPTY_NODE,u=qn(i,f);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const h=Ft(i,Te(e));a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=C(t);if(h===".priority"){_(me(t)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const u=Ki(i,t,f,l);u!=null?a=n.filter.updatePriority(f,u):a=o.getNode()}else{const f=k(t);let u;if(o.isCompleteForChild(h)){l=e.serverCache.getNode();const d=Ki(i,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(h).updateChild(f,d):u=o.getNode().getImmediateChild(h)}else u=Yn(i,h,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),h,u,f,s,r):a=o.getNode()}}return et(e,a,o.isFullyInitialized()||S(t),n.filter.filtersNodes())}}function Ot(n,e,t,i,s,r,o,a){const l=e.serverCache;let h;const f=o?n.filter:n.filter.getIndexedFilter();if(S(t))h=f.updateFullNode(l.getNode(),i,null);else if(f.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(t,i);h=f.updateFullNode(l.getNode(),y,null)}else{const y=C(t);if(!l.isCompleteForPath(t)&&me(t)>1)return e;const g=k(t),E=l.getNode().getImmediateChild(y).updateChild(g,i);y===".priority"?h=f.updatePriority(l.getNode(),E):h=f.updateChild(l.getNode(),y,E,g,fr,null)}const u=ar(e,h,l.isFullyInitialized()||S(t),f.filtersNodes()),d=new Kn(s,u,r);return pr(n,u,t,s,d,a)}function wn(n,e,t,i,s,r,o){const a=e.eventCache;let l,h;const f=new Kn(s,e,r);if(S(t))h=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=et(e,h,!0,n.filter.filtersNodes());else{const u=C(t);if(u===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),i),l=et(e,h,a.isFullyInitialized(),a.isFiltered());else{const d=k(t),y=a.getNode().getImmediateChild(u);let g;if(S(d))g=i;else{const p=f.getCompleteChild(u);p!=null?Ks(d)===".priority"&&p.getChild(Js(d)).isEmpty()?g=p:g=p.updateChild(d,i):g=v.EMPTY_NODE}if(y.equals(g))l=e;else{const p=n.filter.updateChild(a.getNode(),u,g,d,f,o);l=et(e,p,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Qi(n,e){return n.eventCache.isCompleteForChild(e)}function Rc(n,e,t,i,s,r,o){let a=e;return i.foreach((l,h)=>{const f=L(t,l);Qi(e,C(f))&&(a=wn(n,a,f,h,s,r,o))}),i.foreach((l,h)=>{const f=L(t,l);Qi(e,C(f))||(a=wn(n,a,f,h,s,r,o))}),a}function Ji(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function In(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,h;S(t)?h=i:h=new R(null).setTree(t,i);const f=e.serverCache.getNode();return h.children.inorderTraversal((u,d)=>{if(f.hasChild(u)){const y=e.serverCache.getNode().getImmediateChild(u),g=Ji(n,y,d);l=Ot(n,l,new I(u),g,s,r,o,a)}}),h.children.inorderTraversal((u,d)=>{const y=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!f.hasChild(u)&&!y){const g=e.serverCache.getNode().getImmediateChild(u),p=Ji(n,g,d);l=Ot(n,l,new I(u),p,s,r,o,a)}}),l}function Ac(n,e,t,i,s,r,o){if(Mt(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(S(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Ot(n,e,t,l.getNode().getChild(t),s,r,a,o);if(S(t)){let h=new R(null);return l.getNode().forEachChild(Me,(f,u)=>{h=h.set(new I(f),u)}),In(n,e,t,h,s,r,a,o)}else return e}else{let h=new R(null);return i.foreach((f,u)=>{const d=L(t,f);l.isCompleteForPath(d)&&(h=h.set(f,l.getNode().getChild(d)))}),In(n,e,t,h,s,r,a,o)}}function Dc(n,e,t,i,s){const r=e.serverCache,o=ar(e,r.getNode(),r.isFullyInitialized()||S(t),r.isFiltered());return pr(n,o,t,i,fr,s)}function Pc(n,e,t,i,s,r){let o;if(Mt(i,t)!=null)return e;{const a=new Kn(i,e,s),l=e.eventCache.getNode();let h;if(S(t)||C(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Ft(i,Te(e));else{const u=e.serverCache.getNode();_(u instanceof v,"serverChildren would be complete if leaf node"),f=qn(i,u)}f=f,h=n.filter.updateFullNode(l,f,r)}else{const f=C(t);let u=Yn(i,f,e.serverCache);u==null&&e.serverCache.isCompleteForChild(f)&&(u=l.getImmediateChild(f)),u!=null?h=n.filter.updateChild(l,f,u,k(t),a,r):e.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(l,f,v.EMPTY_NODE,k(t),a,r):h=l,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ft(i,Te(e)),o.isLeafNode()&&(h=n.filter.updateFullNode(h,o,r)))}return o=e.serverCache.isFullyInitialized()||Mt(i,w())!=null,et(e,h,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Hn(i.getIndex()),r=Zl(i);this.processor_=Ic(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(v.EMPTY_NODE,o.getNode(),null),h=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),f=new Ie(l,o.isFullyInitialized(),s.filtersNodes()),u=new Ie(h,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Vt(u,f),this.eventGenerator_=new oc(this.query_)}get query(){return this.query_}}function Mc(n){return n.viewCache_.serverCache.getNode()}function Oc(n,e){const t=Te(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!S(e)&&!t.getImmediateChild(C(e)).isEmpty())?t.getChild(e):null}function Xi(n){return n.eventRegistrations_.length===0}function Lc(n,e){n.eventRegistrations_.push(e)}function Zi(n,e,t){const i=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function es(n,e,t,i){e.type===te.MERGE&&e.source.queryId!==null&&(_(Te(n.viewCache_),"We should always have a full cache before handling merges"),_(xn(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Nc(n.processor_,s,e,t,i);return Tc(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,mr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function jc(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(P,(r,o)=>{i.push(Be(r,o))}),t.isFullyInitialized()&&i.push(sr(t.getNode())),mr(n,i,t.getNode(),e)}function mr(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return ac(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lt;class Bc{constructor(){this.views=new Map}}function Wc(n){_(!Lt,"__referenceConstructor has already been defined"),Lt=n}function zc(){return _(Lt,"Reference.ts has not been loaded"),Lt}function Hc(n){return n.views.size===0}function Qn(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return _(r!=null,"SyncTree gave us an op for an invalid query."),es(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(es(o,e,t,i));return r}}function $c(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Ft(t,s?i:null),l=!1;a?l=!0:i instanceof v?(a=qn(t,i),l=!1):(a=v.EMPTY_NODE,l=!1);const h=Vt(new Ie(a,l,!1),new Ie(i,s,!1));return new Fc(e,h)}return o}function Uc(n,e,t,i,s,r){const o=$c(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Lc(o,t),jc(o,t)}function Vc(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=ge(n);if(s==="default")for(const[l,h]of n.views.entries())o=o.concat(Zi(h,t,i)),Xi(h)&&(n.views.delete(l),h.query._queryParams.loadsAllData()||r.push(h.query));else{const l=n.views.get(s);l&&(o=o.concat(Zi(l,t,i)),Xi(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ge(n)&&r.push(new(zc())(e._repo,e._path)),{removed:r,events:o}}function gr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Oe(n,e){let t=null;for(const i of n.views.values())t=t||Oc(i,e);return t}function _r(n,e){if(e._queryParams.loadsAllData())return Gt(n);{const i=e._queryIdentifier;return n.views.get(i)}}function yr(n,e){return _r(n,e)!=null}function ge(n){return Gt(n)!=null}function Gt(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt;function Gc(n){_(!jt,"__referenceConstructor has already been defined"),jt=n}function qc(){return _(jt,"Reference.ts has not been loaded"),jt}let Yc=1;class ts{constructor(e){this.listenProvider_=e,this.syncPointTree_=new R(null),this.pendingWriteTree_=xc(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vr(n,e,t,i,s){return dc(n.pendingWriteTree_,e,t,i,s),s?_t(n,new we(or(),e,t)):[]}function Se(n,e,t=!1){const i=uc(n.pendingWriteTree_,e);if(fc(n.pendingWriteTree_,e)){let r=new R(null);return i.snap!=null?r=r.set(w(),!0):J(i.children,o=>{r=r.set(new I(o),!0)}),_t(n,new Pt(i.path,r,t))}else return[]}function qt(n,e,t){return _t(n,new we(Un(),e,t))}function Kc(n,e,t){const i=R.fromObject(t);return _t(n,new dt(Un(),e,i))}function Qc(n,e){return _t(n,new ht(Un(),e))}function Jc(n,e,t){const i=Xn(n,t);if(i){const s=Zn(i),r=s.path,o=s.queryId,a=Y(r,e),l=new ht(Vn(o),a);return ei(n,r,l)}else return[]}function Tn(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||yr(o,e))){const l=Vc(o,e,t,i);Hc(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const h=l.removed;if(a=l.events,!s){const f=h.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,y)=>ge(y));if(f&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const y=eh(d);for(let g=0;g<y.length;++g){const p=y[g],E=p.query,j=xr(n,p);n.listenProvider_.startListening(nt(E),Bt(n,E),j.hashFn,j.onComplete)}}}!u&&h.length>0&&!i&&(f?n.listenProvider_.stopListening(nt(e),null):h.forEach(d=>{const y=n.queryToTagMap.get(Yt(d));n.listenProvider_.stopListening(nt(d),y)}))}th(n,h)}return a}function Xc(n,e,t,i){const s=Xn(n,i);if(s!=null){const r=Zn(s),o=r.path,a=r.queryId,l=Y(o,e),h=new we(Vn(a),l,t);return ei(n,o,h)}else return[]}function Zc(n,e,t,i){const s=Xn(n,i);if(s){const r=Zn(s),o=r.path,a=r.queryId,l=Y(o,e),h=R.fromObject(t),f=new dt(Vn(a),l,h);return ei(n,o,f)}else return[]}function ns(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,y)=>{const g=Y(d,s);r=r||Oe(y,g),o=o||ge(y)});let a=n.syncPointTree_.get(s);a?(o=o||ge(a),r=r||Oe(a,w())):(a=new Bc,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((y,g)=>{const p=Oe(g,w());p&&(r=r.updateImmediateChild(y,p))}));const h=yr(a,e);if(!h&&!e._queryParams.loadsAllData()){const d=Yt(e);_(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const y=nh();n.queryToTagMap.set(d,y),n.tagToQueryMap.set(y,d)}const f=Gn(n.pendingWriteTree_,s);let u=Uc(a,e,t,f,r,l);if(!h&&!o&&!i){const d=_r(a,e);u=u.concat(ih(n,e,d))}return u}function Jn(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Y(o,e),h=Oe(a,l);if(h)return h});return hr(s,e,r,t,!0)}function _t(n,e){return br(e,n.syncPointTree_,null,Gn(n.pendingWriteTree_,w()))}function br(n,e,t,i){if(S(n.path))return Cr(n,e,t,i);{const s=e.get(w());t==null&&s!=null&&(t=Oe(s,w()));let r=[];const o=C(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const h=t?t.getImmediateChild(o):null,f=dr(i,o);r=r.concat(br(a,l,h,f))}return s&&(r=r.concat(Qn(s,n,i,t))),r}}function Cr(n,e,t,i){const s=e.get(w());t==null&&s!=null&&(t=Oe(s,w()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,h=dr(i,o),f=n.operationForChild(o);f&&(r=r.concat(Cr(f,a,l,h)))}),s&&(r=r.concat(Qn(s,n,i,t))),r}function xr(n,e){const t=e.query,i=Bt(n,t);return{hashFn:()=>(Mc(e)||v.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Jc(n,t._path,i):Qc(n,t._path);{const r=Xa(s,t);return Tn(n,t,null,r)}}}}function Bt(n,e){const t=Yt(e);return n.queryToTagMap.get(t)}function Yt(n){return n._path.toString()+"$"+n._queryIdentifier}function Xn(n,e){return n.tagToQueryMap.get(e)}function Zn(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new I(n.substr(0,e))}}function ei(n,e,t){const i=n.syncPointTree_.get(e);_(i,"Missing sync point for query tag that we're tracking");const s=Gn(n.pendingWriteTree_,e);return Qn(i,t,s,null)}function eh(n){return n.fold((e,t,i)=>{if(t&&ge(t))return[Gt(t)];{let s=[];return t&&(s=gr(t)),J(i,(r,o)=>{s=s.concat(o)}),s}})}function nt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(qc())(n._repo,n._path):n}function th(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Yt(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function nh(){return Yc++}function ih(n,e,t){const i=e._path,s=Bt(n,e),r=xr(n,t),o=n.listenProvider_.startListening(nt(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)_(!ge(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((h,f,u)=>{if(!S(h)&&f&&ge(f))return[Gt(f).query];{let d=[];return f&&(d=d.concat(gr(f).map(y=>y.query))),J(u,(y,g)=>{d=d.concat(g)}),d}});for(let h=0;h<l.length;++h){const f=l[h];n.listenProvider_.stopListening(nt(f),Bt(n,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ti(t)}node(){return this.node_}}class ni{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=L(this.path_,e);return new ni(this.syncTree_,t)}node(){return Jn(this.syncTree_,this.path_)}}const sh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},is=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return rh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return oh(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},rh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},oh=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&_(!1,"Unexpected increment value: "+i);const s=e.node();if(_(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},ah=function(n,e,t,i){return ii(e,new ni(t,n),i)},Sr=function(n,e,t){return ii(n,new ti(e),t)};function ii(n,e,t){const i=n.getPriority().val(),s=is(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=is(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new W(a,$(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new W(s))),o.forEachChild(P,(a,l)=>{const h=ii(l,e.getImmediateChild(a),t);h!==l&&(r=r.updateImmediateChild(a,h))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function ri(n,e){let t=e instanceof I?e:new I(e),i=n,s=C(t);for(;s!==null;){const r=Le(i.node.children,s)||{children:{},childCount:0};i=new si(s,i,r),t=k(t),s=C(t)}return i}function Ue(n){return n.node.value}function Er(n,e){n.node.value=e,Nn(n)}function wr(n){return n.node.childCount>0}function lh(n){return Ue(n)===void 0&&!wr(n)}function Kt(n,e){J(n.node.children,(t,i)=>{e(new si(t,n,i))})}function Ir(n,e,t,i){t&&e(n),Kt(n,s=>{Ir(s,e,!0)})}function ch(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function yt(n){return new I(n.parent===null?n.name:yt(n.parent)+"/"+n.name)}function Nn(n){n.parent!==null&&hh(n.parent,n.name,n)}function hh(n,e,t){const i=lh(t),s=he(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Nn(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Nn(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=/[\[\].#$\/\u0000-\u001F\u007F]/,uh=/[\[\].#$\u0000-\u001F\u007F]/,ln=10*1024*1024,Tr=function(n){return typeof n=="string"&&n.length!==0&&!dh.test(n)},Nr=function(n){return typeof n=="string"&&n.length!==0&&!uh.test(n)},fh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Nr(n)},ph=function(n,e,t,i){oi(Pn(n,"value"),e,t)},oi=function(n,e,t){const i=t instanceof I?new Al(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ce(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ce(i)+" with contents = "+e.toString());if(Ns(e))throw new Error(n+"contains "+e.toString()+" "+Ce(i));if(typeof e=="string"&&e.length>ln/3&&$t(e)>ln)throw new Error(n+"contains a string greater than "+ln+" utf8 bytes "+Ce(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(J(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Tr(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ce(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Dl(i,o),oi(n,a,i),Pl(i)}),s&&r)throw new Error(n+' contains ".value" child '+Ce(i)+" in addition to actual children.")}},kr=function(n,e,t,i){if(!Nr(t))throw new Error(Pn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},mh=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),kr(n,e,t)},gh=function(n,e){if(C(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},_h=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!fh(t))throw new Error(Pn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ai(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Bn(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Rr(n,e,t){ai(n,t),Ar(n,i=>Bn(i,e))}function ce(n,e,t){ai(n,t),Ar(n,i=>ee(i,e)||ee(e,i))}function Ar(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(vh(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function vh(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Xe&&U("event: "+t.toString()),$e(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="repo_interrupt",Ch=25;class xh{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dt(),this.transactionQueueTree_=new si,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Sh(n,e,t){if(n.stats_=Ln(n.repoInfo_),n.forceRestClient_||nl())n.server_=new At(n.repoInfo_,(i,s,r,o)=>{ss(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>rs(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{H(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new oe(n.repoInfo_,e,(i,s,r,o)=>{ss(n,i,s,r,o)},i=>{rs(n,i)},i=>{wh(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=al(n.repoInfo_,()=>new rc(n.stats_,n.server_)),n.infoData_=new ec,n.infoSyncTree_=new ts({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=qt(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ci(n,"connected",!1),n.serverSyncTree_=new ts({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const h=o(a,l);ce(n.eventQueue_,i._path,h)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Eh(n){const t=n.infoData_.getNode(new I(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function li(n){return sh({timestamp:Eh(n)})}function ss(n,e,t,i,s){n.dataUpdateCount++;const r=new I(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Et(t,h=>$(h));o=Zc(n.serverSyncTree_,r,l,s)}else{const l=$(t);o=Xc(n.serverSyncTree_,r,l,s)}else if(i){const l=Et(t,h=>$(h));o=Kc(n.serverSyncTree_,r,l)}else{const l=$(t);o=qt(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Qt(n,r)),ce(n.eventQueue_,a,o)}function rs(n,e){ci(n,"connected",e),e===!1&&Th(n)}function wh(n,e){J(e,(t,i)=>{ci(n,t,i)})}function ci(n,e,t){const i=new I("/.info/"+e),s=$(t);n.infoData_.updateSnapshot(i,s);const r=qt(n.infoSyncTree_,i,s);ce(n.eventQueue_,i,r)}function Dr(n){return n.nextWriteId_++}function Ih(n,e,t,i,s){hi(n,"set",{path:e.toString(),value:t,priority:i});const r=li(n),o=$(t,i),a=Jn(n.serverSyncTree_,e),l=Sr(o,a,r),h=Dr(n),f=vr(n.serverSyncTree_,e,l,h,!0);ai(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(d,y)=>{const g=d==="ok";g||Q("set at "+e+" failed: "+d);const p=Se(n.serverSyncTree_,h,!g);ce(n.eventQueue_,e,p),Rh(n,s,d,y)});const u=Lr(n,e);Qt(n,u),ce(n.eventQueue_,u,[])}function Th(n){hi(n,"onDisconnectEvents");const e=li(n),t=Dt();Cn(n.onDisconnect_,w(),(s,r)=>{const o=ah(s,r,n.serverSyncTree_,e);rr(t,s,o)});let i=[];Cn(t,w(),(s,r)=>{i=i.concat(qt(n.serverSyncTree_,s,r));const o=Lr(n,s);Qt(n,o)}),n.onDisconnect_=Dt(),ce(n.eventQueue_,w(),i)}function Nh(n,e,t){let i;C(e._path)===".info"?i=ns(n.infoSyncTree_,e,t):i=ns(n.serverSyncTree_,e,t),Rr(n.eventQueue_,e._path,i)}function os(n,e,t){let i;C(e._path)===".info"?i=Tn(n.infoSyncTree_,e,t):i=Tn(n.serverSyncTree_,e,t),Rr(n.eventQueue_,e._path,i)}function kh(n){n.persistentConnection_&&n.persistentConnection_.interrupt(bh)}function hi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),U(t,...e)}function Rh(n,e,t,i){e&&$e(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Pr(n,e,t){return Jn(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function di(n,e=n.transactionQueueTree_){if(e||Jt(n,e),Ue(e)){const t=Mr(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Ah(n,yt(e),t)}else wr(e)&&Kt(e,t=>{di(n,t)})}function Ah(n,e,t){const i=t.map(h=>h.currentWriteId),s=Pr(n,e,i);let r=s;const o=s.hash();for(let h=0;h<t.length;h++){const f=t[h];_(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const u=Y(e,f.path);r=r.updateChild(u,f.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,h=>{hi(n,"transaction put response",{path:l.toString(),status:h});let f=[];if(h==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,f=f.concat(Se(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Jt(n,ri(n.transactionQueueTree_,e)),di(n,n.transactionQueueTree_),ce(n.eventQueue_,e,f);for(let d=0;d<u.length;d++)$e(u[d])}else{if(h==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{Q("transaction at "+l.toString()+" failed: "+h);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=h}Qt(n,e)}},o)}function Qt(n,e){const t=Fr(n,e),i=yt(t),s=Mr(n,t);return Dh(n,s,i),i}function Dh(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],h=Y(t,l.path);let f=!1,u;if(_(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,u=l.abortReason,s=s.concat(Se(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ch)f=!0,u="maxretry",s=s.concat(Se(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Pr(n,l.path,o);l.currentInputSnapshot=d;const y=e[a].update(d.val());if(y!==void 0){oi("transaction failed: Data returned ",y,l.path);let g=$(y);typeof y=="object"&&y!=null&&he(y,".priority")||(g=g.updatePriority(d.getPriority()));const E=l.currentWriteId,j=li(n),M=Sr(g,d,j);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=M,l.currentWriteId=Dr(n),o.splice(o.indexOf(E),1),s=s.concat(vr(n.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),s=s.concat(Se(n.serverSyncTree_,E,!0))}else f=!0,u="nodata",s=s.concat(Se(n.serverSyncTree_,l.currentWriteId,!0))}ce(n.eventQueue_,t,s),s=[],f&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Jt(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)$e(i[a]);di(n,n.transactionQueueTree_)}function Fr(n,e){let t,i=n.transactionQueueTree_;for(t=C(e);t!==null&&Ue(i)===void 0;)i=ri(i,t),e=k(e),t=C(e);return i}function Mr(n,e){const t=[];return Or(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Or(n,e,t){const i=Ue(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Kt(e,s=>{Or(n,s,t)})}function Jt(n,e){const t=Ue(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Er(e,t.length>0?t:void 0)}Kt(e,i=>{Jt(n,i)})}function Lr(n,e){const t=yt(Fr(n,e)),i=ri(n.transactionQueueTree_,e);return ch(i,s=>{cn(n,s)}),cn(n,i),Ir(i,s=>{cn(n,s)}),t}function cn(n,e){const t=Ue(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Se(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Er(e,void 0):t.length=r+1,ce(n.eventQueue_,yt(e),s);for(let o=0;o<i.length;o++)$e(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Fh(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Q(`Invalid query segment '${t}' in query '${n}'`)}return e}const as=function(n,e){const t=Mh(n),i=t.namespace;t.domain==="firebase.com"&&le(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&le("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||qa();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ws(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new I(t.pathString)}},Mh=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(a=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(f,u)),f<u&&(s=Ph(n.substring(f,u)));const d=Fh(n.substring(Math.min(n.length,u)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(h+1),10)):h=e.length;const y=e.slice(0,h);if(y.toLowerCase()==="localhost")t="localhost";else if(y.split(".").length<=2)t=y;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+H(this.snapshot.exportVal())}}class Lh{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return S(this._path)?null:Ks(this._path)}get ref(){return new _e(this._repo,this._path)}get _queryIdentifier(){const e=Ui(this._queryParams),t=Mn(e);return t==="{}"?"default":t}get _queryObject(){return Ui(this._queryParams)}isEqual(e){if(e=ft(e),!(e instanceof ui))return!1;const t=this._repo===e._repo,i=Bn(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Rl(this._path)}}class _e extends ui{constructor(e,t){super(e,t,new $n,!1)}get parent(){const e=Js(this._path);return e===null?null:new _e(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new I(e),i=kn(this.ref,e);return new Wt(this._node.getChild(t),i,P)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Wt(s,kn(this.ref,i),P)))}hasChild(e){const t=new I(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bh(n,e){return n=ft(n),n._checkNotDeleted("ref"),kn(n._root,e)}function kn(n,e){return n=ft(n),C(n._path)===null?mh("child","path",e):kr("child","path",e),new _e(n._repo,L(n._path,e))}function Wh(n,e){n=ft(n),gh("set",n._path),ph("set",e,n._path);const t=new Ht;return Ih(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class fi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Oh("value",this,new Wt(e.snapshotNode,new _e(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Lh(this,e,t):null}matches(e){return e instanceof fi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function zh(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,h=(f,u)=>{os(n._repo,n,a),l(f,u)};h.userCallback=t.userCallback,h.context=t.context,t=h}const o=new jh(t,r||void 0),a=new fi(o);return Nh(n._repo,n,a),()=>os(n._repo,n,a)}function Hh(n,e,t,i){return zh(n,"value",e,t,i)}Wc(_e);Gc(_e);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="FIREBASE_DATABASE_EMULATOR_HOST",Rn={};let Uh=!1;function Vh(n,e,t,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=Dn(r);n.repoInfo_=new Ws(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function Gh(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||le("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),U("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=as(r,s),a=o.repoInfo,l;typeof process<"u"&&Ii&&(l=Ii[$h]),l?(r=`http://${l}?ns=${a.namespace}`,o=as(r,s),a=o.repoInfo):o.repoInfo.secure;const h=new sl(n.name,n.options,e);_h("Invalid Firebase Database URL",o),S(o.path)||le("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Yh(a,n,h,new il(n,t));return new Kh(f,n)}function qh(n,e){const t=Rn[e];(!t||t[n.key]!==n)&&le(`Database ${e}(${n.repoInfo_}) has already been deleted.`),kh(n),delete t[n.key]}function Yh(n,e,t,i){let s=Rn[e.name];s||(s={},Rn[e.name]=s);let r=s[n.toURLString()];return r&&le("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new xh(n,Uh,t,i),s[n.toURLString()]=r,r}class Kh{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Sh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _e(this._repo,w())),this._rootInternal}_delete(){return this._rootInternal!==null&&(qh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&le("Cannot call "+e+" on a deleted database.")}}function Qh(n=Na(),e){const t=Sa(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=ao("database");i&&Jh(t,...i)}return t}function Jh(n,e,t,i={}){n=ft(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&wt(i,r.repoInfo_.emulatorOptions))return;le("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&le('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new xt(xt.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:co(i.mockUserToken,n.app.options.projectId);o=new xt(a)}Dn(e)&&(lo(e),fo("Database",!0)),Vh(r,s,i,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n){za(Ta),Tt(new st("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Gh(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Pe(Ti,Ni,n),Pe(Ti,Ni,"esm2020")}oe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};oe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Xh();const Zh=["☀️","🌅","📖","🕐","🌙","🕯️","✡️","📌","🎵","🙏","📜","🍷","🔔","⭐","💫","🕊️","🏛️","📿","🎶","❤️","🌟","✨","🕎","🫓"],hn=[{label:"Cormorant Garamond",value:"'Cormorant Garamond', serif"},{label:"DM Sans",value:"'DM Sans', sans-serif"},{label:"Frank Ruhl Libre",value:"'Frank Ruhl Libre', serif"},{label:"Georgia",value:"Georgia, serif"},{label:"Playfair Display",value:"'Playfair Display', serif"}],ed=[{label:"Western Wall (Fade)",value:"/royzmanimwebsite/assets/images/shul-wall/west-wall-fade.png"},{label:"Western Wall (Photo)",value:"/royzmanimwebsite/assets/images/shul-wall/west-wall.jpg"},{label:"Jerusalem Skyline",value:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=85"},{label:"Stone Texture",value:"https://images.unsplash.com/photo-1585128792020-803d29415281?w=1920&q=85"},{label:"Dark Marble",value:"https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&q=85"},{label:"None (Solid Color)",value:""}],td=[{label:"Royal Gold",accent:"#C9A84C",bg:"#0A0E1A",text:"#F5F0E8"},{label:"Ocean Blue",accent:"#4A9BD9",bg:"#0A1628",text:"#E8F0F5"},{label:"Emerald",accent:"#4CAF7C",bg:"#0A1A14",text:"#E8F5EE"},{label:"Rose Gold",accent:"#D4A574",bg:"#1A0E14",text:"#F5EDE8"},{label:"Silver",accent:"#9CA3AF",bg:"#111318",text:"#F0F0F2"},{label:"Purple Majesty",accent:"#9B72CF",bg:"#120E1A",text:"#F0E8F5"}],Ne={shulName:"Ateret Marjan",shulNameHeb:"עטרת מרג׳ן",parasha:"ויקהל פקודי / החדש",candleLighting:"6:40 PM",havdalah:"7:32 PM",rabbeinuTam:"8:13 PM",makam:"Makam Hoseni",hebrewDate:"ראשון, י״ט אדר, תשפ״ו",adminPin:"1234",theme:{accent:"#C9A84C",bg:"#0A0E1A",text:"#F5F0E8",bgImage:"/royzmanimwebsite/assets/images/shul-wall/west-wall-fade.png",bgDim:.65,bgBlur:0,cardOpacity:.85,cardBorderRadius:16,displayFont:"'Cormorant Garamond', serif",bodyFont:"'DM Sans', sans-serif",hebrewFont:"'Frank Ruhl Libre', serif",clockSize:58,scheduleTimeSize:26,zmanimTimeSize:20,showSeconds:!0},layout:{showNextEvent:!0,showDonate:!0,showLimudim:!0,showHiloulot:!0,showMakam:!0,showHebrewDate:!0,showRabbeinuTam:!0,showBsd:!0,zmanimColumns:2,zmanimLabel:"Tomorrow's Zmanim",scheduleLabel:"Shabbat Schedule"},announcements:[],sponsors:[],schedule:[{id:"1",event:"Shaḥarit #1",time:"9:00 AM",icon:"☀️"},{id:"2",event:"Shaḥarit #2",time:"9:45 AM",icon:"☀️"},{id:"3",event:"Shiur — Rabbi Loloyan",time:"2:45 PM",icon:"📖"},{id:"4",event:"Shiur — Rabbi Kashanirokh",time:"4:30 PM",icon:"📖"},{id:"5",event:"Minḥa · Seudat Shelishit",time:"5:05 PM",icon:"🕐"},{id:"6",event:"Arvit",time:"6:23 PM",icon:"🌙"}],zmanim:[{id:"1",label:"Misheyakir",time:"6:12 AM"},{id:"2",label:"Sunrise",time:"7:12 AM"},{id:"3",label:"Shema MG״A",time:"9:32 AM"},{id:"4",label:"Shema GR״A",time:"10:08 AM"},{id:"5",label:"Latest Prayer",time:"11:07 AM"},{id:"6",label:"Midday",time:"1:04 PM"},{id:"7",label:"Early Minḥa",time:"1:35 PM"},{id:"8",label:"Plag HaMinḥa",time:"5:44 PM"},{id:"9",label:"Sunset",time:"6:57 PM"},{id:"10",label:"Nightfall",time:"7:11 PM"}],limudim:[{id:"1",study:"Babylonian Talmud",ref:"מנחות נ״ו"},{id:"2",study:"Yerushalmi (Vilna)",ref:"גיטין מ״ז"},{id:"3",study:"Psalms (Monthly)",ref:"90 – 96"},{id:"4",study:"Psalms (Weekly)",ref:"1 – 29"}],hiloulot:[{id:"1",name:"Rav David of Dinov"},{id:"2",name:"Rav Avraham Challavah"},{id:"3",name:"Rav Meir Yechiel of Ostrowiec"}],donate:{venmo:"@Ateret-Marjan",zelle:"donateateretmarjan@gmail.com",website:"AteretMarjan.org"}},nd={apiKey:"AIzaSyDYDDFxJAGRJKglNrhfmUYkB8TvE0bAxhc",authDomain:"ateret-marjan-signage.firebaseapp.com",databaseURL:"https://ateret-marjan-signage-default-rtdb.firebaseio.com",projectId:"ateret-marjan-signage",storageBucket:"ateret-marjan-signage.firebasestorage.app",messagingSenderId:"650374635159",appId:"1:650374635159:web:56837969916a201208d3d2"},id=xs(nd),sd=Qh(id),jr=Bh(sd,"signage/ateret-marjan");function rd(){try{const n=localStorage.getItem("shul-signage-full-v2");if(n)return vt(Ne,JSON.parse(n))}catch{}return JSON.parse(JSON.stringify(Ne))}function vt(n,e){const t={...n};for(const i of Object.keys(e))e[i]&&typeof e[i]=="object"&&!Array.isArray(e[i])&&n[i]?t[i]=vt(n[i],e[i]):t[i]=e[i];return t}function od(n){try{localStorage.setItem("shul-signage-full-v2",JSON.stringify(n)),Wh(jr,n).catch(e=>console.error("Firebase save failed:",e))}catch(e){console.error("Save failed:",e)}}function ad(n){return Hh(jr,t=>{const i=t.val();if(i){const s=vt(Ne,i);try{localStorage.setItem("shul-signage-full-v2",JSON.stringify(s))}catch{}n(s)}},t=>{console.error("Firebase read failed:",t)})}function ld(n,e,t){var s,r,o;if(!e)return n;const i=JSON.parse(JSON.stringify(n));return i.parasha=e.parasha||i.parasha,i.candleLighting=e.candleLighting||i.candleLighting,i.havdalah=e.havdalah||i.havdalah,i.rabbeinuTam=e.rabbeinuTam||i.rabbeinuTam,i.makam=e.makam||i.makam,i.hebrewDate=((s=e.hebrewDate)==null?void 0:s.hebrewDateFormatted)||i.hebrewDate,((r=e.zmanim)==null?void 0:r.length)>0&&(i.zmanim=e.zmanim.map((a,l)=>({id:a.id||String(l+1),label:a.label,time:a.time+(a.isNextDay,"")}))),((o=e.limudim)==null?void 0:o.length)>0&&(i.limudim=e.limudim.map((a,l)=>({id:String(l+1),study:a.study,ref:a.ref}))),e.hiloulot&&(i.hiloulot=e.hiloulot.map((a,l)=>({id:String(l+1),name:a.name}))),(t==null?void 0:t.length)>0&&(i.schedule=t.map((a,l)=>({id:String(l+1),event:a.event,time:a.time,icon:a.icon||"📌"}))),i}let cd=Date.now();function hd(){return String(++cd)}const dd=()=>c.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:[c.jsx("rect",{width:"24",height:"24",rx:"5",fill:"#3D95CE"}),c.jsx("path",{d:"M17.3 5.3c.5.8.7 1.7.7 2.7 0 3.4-2.9 7.8-5.2 10.9H8.2L6.5 6.3l3.9-.4.9 7.5c.9-1.5 2-3.8 2-5.4 0-1-.2-1.6-.4-2.2l3.4-.5z",fill:"white"})]}),ud=()=>c.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:[c.jsx("rect",{width:"24",height:"24",rx:"5",fill:"#6D1ED4"}),c.jsx("path",{d:"M6 8.5h5.2L6 15.2V17h12v-2.5h-5.5L18 7.8V6H6v2.5z",fill:"white"})]}),fd=({color:n})=>c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1.8",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("path",{d:"M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]});function G({label:n,value:e,onChange:t,type:i="text",placeholder:s="",style:r={}}){return c.jsxs("div",{style:{...r},children:[c.jsx("div",{style:{fontSize:10,fontWeight:600,color:"#C9A84C",opacity:.6,marginBottom:4,textTransform:"uppercase",letterSpacing:"0.08em"},children:n}),c.jsx("input",{type:i,value:e,onChange:o=>t(o.target.value),placeholder:s,style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid rgba(201,168,76,0.2)",background:"rgba(255,255,255,0.05)",color:"#F5F0E8",fontSize:14,fontFamily:"'DM Sans',sans-serif",outline:"none"}})]})}function se({label:n,value:e,onChange:t}){return c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 0"},onClick:()=>t(!e),children:[c.jsx("span",{style:{fontSize:14,color:"#F5F0E8"},children:n}),c.jsx("div",{style:{width:44,height:24,borderRadius:12,padding:2,cursor:"pointer",background:e?"rgba(201,168,76,0.4)":"rgba(255,255,255,0.1)",transition:"background 0.2s",display:"flex",alignItems:"center"},children:c.jsx("div",{style:{width:20,height:20,borderRadius:10,background:e?"#C9A84C":"#555",transition:"transform 0.2s, background 0.2s",transform:e?"translateX(20px)":"translateX(0)"}})})]})}function ve({label:n,value:e,onChange:t,min:i=0,max:s=100,step:r=1,suffix:o=""}){return c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[c.jsx("span",{style:{fontSize:10,fontWeight:600,color:"#C9A84C",opacity:.6,textTransform:"uppercase",letterSpacing:"0.08em"},children:n}),c.jsxs("span",{style:{fontSize:12,color:"#F5F0E8",opacity:.7},children:[e,o]})]}),c.jsx("input",{type:"range",min:i,max:s,step:r,value:e,onChange:a=>t(Number(a.target.value)),style:{width:"100%",accentColor:"#C9A84C"}})]})}function Ke({label:n,value:e,onChange:t,options:i}){return c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:10,fontWeight:600,color:"#C9A84C",opacity:.6,marginBottom:4,textTransform:"uppercase",letterSpacing:"0.08em"},children:n}),c.jsx("select",{value:e,onChange:s=>t(s.target.value),style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid rgba(201,168,76,0.2)",background:"#0F1423",color:"#F5F0E8",fontSize:14,fontFamily:"'DM Sans',sans-serif",outline:"none"},children:i.map(s=>c.jsx("option",{value:s.value,children:s.label},s.value))})]})}function dn({label:n,value:e,onChange:t}){return c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:10,fontWeight:600,color:"#C9A84C",opacity:.6,marginBottom:4,textTransform:"uppercase",letterSpacing:"0.08em"},children:n}),c.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[c.jsx("input",{type:"color",value:e,onChange:i=>t(i.target.value),style:{width:40,height:32,border:"none",borderRadius:6,cursor:"pointer",background:"transparent"}}),c.jsx("input",{value:e,onChange:i=>t(i.target.value),style:{flex:1,padding:"6px 10px",borderRadius:6,border:"1px solid rgba(201,168,76,0.15)",background:"rgba(255,255,255,0.05)",color:"#F5F0E8",fontSize:13,fontFamily:"monospace",outline:"none"}})]})]})}function pd({data:n,setData:e,onClose:t,onSave:i}){const[s,r]=q("schedule"),[o,a]=q(!1),[l,h]=q(""),[f,u]=q(""),d=[{id:"schedule",label:"📅 Schedule",icon:"📅"},{id:"zmanim",label:"🕐 Zmanim",icon:"🕐"},{id:"limudim",label:"📖 Limudim",icon:"📖"},{id:"hiloulot",label:"🕯️ Hiloulot",icon:"🕯️"},{id:"general",label:"⚙️ General",icon:"⚙️"},{id:"donate",label:"💰 Donate",icon:"💰"},{id:"announce",label:"📢 Announce",icon:"📢"},{id:"sponsors",label:"❤️ Sponsors",icon:"❤️"},{id:"theme",label:"🎨 Theme",icon:"🎨"},{id:"layout",label:"📐 Layout",icon:"📐"},{id:"data",label:"💾 Data",icon:"💾"}],y=async()=>{a(!0),await i(n),setTimeout(()=>a(!1),800)},g=(m,B)=>{e(O=>{const D=JSON.parse(JSON.stringify(O)),T=m.split(".");let F=D;for(let de=0;de<T.length-1;de++)F=F[T[de]];return F[T[T.length-1]]=B,D})},p=(m,B,O,D)=>{e(T=>{const F=JSON.parse(JSON.stringify(T)),de=F[m].find(Br=>Br.id===B);return de&&(de[O]=D),F})},E=(m,B)=>e(O=>({...O,[m]:[...O[m],{...B,id:hd()}]})),j=(m,B)=>e(O=>({...O,[m]:O[m].filter(D=>D.id!==B)})),M=(m,B,O)=>{e(D=>{const T=[...D[m]],F=T.findIndex(de=>de.id===B);return O===-1&&F===0||O===1&&F===T.length-1?D:([T[F],T[F+O]]=[T[F+O],T[F]],{...D,[m]:T})})},X={padding:"5px 10px",borderRadius:6,border:"1px solid rgba(255,107,107,0.2)",background:"rgba(255,107,107,0.1)",color:"#FF6B6B",fontSize:12,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"},ie={padding:"3px 7px",borderRadius:5,border:"1px solid rgba(201,168,76,0.15)",background:"rgba(201,168,76,0.08)",color:"#C9A84C",fontSize:10,cursor:"pointer"},ye={padding:"10px",textAlign:"center",width:"100%",borderRadius:8,border:"1px solid rgba(201,168,76,0.2)",background:"rgba(201,168,76,0.08)",color:"#C9A84C",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"},V=(m,B,O)=>c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[n[m].map(D=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"10px 12px",borderRadius:10,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(201,168,76,0.06)"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[c.jsx("button",{style:ie,onClick:()=>M(m,D.id,-1),children:"▲"}),c.jsx("button",{style:ie,onClick:()=>M(m,D.id,1),children:"▼"})]}),c.jsx("div",{style:{flex:1,display:"flex",flexWrap:"wrap",gap:6},children:B.map(T=>c.jsxs("div",{style:{flex:T.flex||1,minWidth:T.minW||80},children:[c.jsx("div",{style:{fontSize:9,color:"#C9A84C",opacity:.5,marginBottom:2,textTransform:"uppercase",letterSpacing:"0.06em"},children:T.label}),T.type==="icon"?c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:3},children:Zh.map(F=>c.jsx("span",{onClick:()=>p(m,D.id,T.key,F),style:{fontSize:16,cursor:"pointer",padding:"2px 4px",borderRadius:4,background:D[T.key]===F?"rgba(201,168,76,0.2)":"transparent",border:D[T.key]===F?"1px solid rgba(201,168,76,0.3)":"1px solid transparent"},children:F},F))}):c.jsx("input",{value:D[T.key],onChange:F=>p(m,D.id,T.key,F.target.value),placeholder:T.label,style:{width:"100%",padding:"6px 10px",borderRadius:6,border:"1px solid rgba(201,168,76,0.15)",background:"rgba(255,255,255,0.04)",color:"#F5F0E8",fontSize:13,fontFamily:"'DM Sans',sans-serif",outline:"none"}})]},T.key))}),c.jsx("button",{style:X,onClick:()=>j(m,D.id),children:"✕"})]},D.id)),c.jsx("button",{style:ye,onClick:()=>E(m,O),children:"+ Add New"})]}),Re=()=>h(JSON.stringify(n,null,2)),b=()=>{try{const m=JSON.parse(f);e(vt(Ne,m)),u(""),alert("Imported!")}catch{alert("Invalid JSON")}},A=()=>{confirm("Reset ALL settings to defaults? This cannot be undone.")&&e(JSON.parse(JSON.stringify(Ne)))};return c.jsx("div",{style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.75)",backdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsxs("div",{style:{width:"94%",maxWidth:1100,maxHeight:"92vh",background:"linear-gradient(135deg, #0F1423 0%, #0A0E1A 100%)",borderRadius:20,border:"1px solid rgba(201,168,76,0.2)",boxShadow:"0 24px 80px rgba(0,0,0,0.7)",display:"flex",flexDirection:"column",overflow:"hidden"},children:[c.jsxs("div",{style:{padding:"16px 24px",borderBottom:"1px solid rgba(201,168,76,0.1)",display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:24,fontWeight:700,color:"#F5F0E8"},children:"Signage Control Panel"}),c.jsx("div",{style:{fontSize:12,color:"#C9A84C",opacity:.5,marginTop:2},children:"Customize every aspect of your display"})]}),c.jsxs("div",{style:{display:"flex",gap:8},children:[c.jsx("button",{onClick:y,style:{padding:"10px 28px",borderRadius:10,border:"1px solid rgba(201,168,76,0.3)",background:o?"rgba(76,175,80,0.2)":"rgba(201,168,76,0.15)",color:o?"#4CAF50":"#C9A84C",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",transition:"all 0.3s"},children:o?"✓ Saved!":"💾 Save All"}),c.jsx("button",{onClick:t,style:{padding:"10px 20px",borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"#F5F0E8",fontSize:14,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"},children:"✕ Close"})]})]}),c.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[c.jsx("div",{style:{width:180,borderRight:"1px solid rgba(201,168,76,0.08)",padding:"12px 8px",overflowY:"auto",flexShrink:0},children:d.map(m=>c.jsx("button",{onClick:()=>r(m.id),style:{display:"block",width:"100%",textAlign:"left",padding:"10px 14px",borderRadius:8,border:"none",cursor:"pointer",fontSize:13,fontWeight:s===m.id?600:400,fontFamily:"'DM Sans',sans-serif",marginBottom:2,background:s===m.id?"rgba(201,168,76,0.1)":"transparent",color:s===m.id?"#C9A84C":"#F5F0E8",opacity:s===m.id?1:.6,transition:"all 0.2s"},children:m.label},m.id))}),c.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"20px 24px"},children:[s==="schedule"&&c.jsxs("div",{children:[c.jsx("h3",{style:{color:"#F5F0E8",marginBottom:4,fontFamily:"'Cormorant Garamond', serif",fontSize:20},children:"Shabbat Schedule"}),c.jsx("p",{style:{fontSize:12,color:"#E8D5A0",opacity:.4,marginBottom:16},children:"Manage prayer times and events. Click an emoji to set the icon for each row."}),V("schedule",[{key:"icon",label:"Icon",type:"icon",flex:2,minW:200},{key:"event",label:"Event Name",flex:2,minW:160},{key:"time",label:"Time",flex:1,minW:90}],{event:"",time:"",icon:"📌"})]}),s==="zmanim"&&c.jsxs("div",{children:[c.jsx("h3",{style:{color:"#F5F0E8",marginBottom:4,fontFamily:"'Cormorant Garamond', serif",fontSize:20},children:"Halachic Times (Zmanim)"}),c.jsx("p",{style:{fontSize:12,color:"#E8D5A0",opacity:.4,marginBottom:16},children:"These appear in the zmanim grid on the right side of the display."}),V("zmanim",[{key:"label",label:"Zman Name",flex:1.5,minW:130},{key:"time",label:"Time",flex:1,minW:90}],{label:"",time:""})]}),s==="limudim"&&c.jsxs("div",{children:[c.jsx("h3",{style:{color:"#F5F0E8",marginBottom:4,fontFamily:"'Cormorant Garamond', serif",fontSize:20},children:"Daily Learning (Limudim)"}),c.jsx("p",{style:{fontSize:12,color:"#E8D5A0",opacity:.4,marginBottom:16},children:"Study schedule with Hebrew/English references."}),V("limudim",[{key:"study",label:"Subject",flex:1.5,minW:150},{key:"ref",label:"Reference",flex:1,minW:100}],{study:"",ref:""})]}),s==="hiloulot"&&c.jsxs("div",{children:[c.jsx("h3",{style:{color:"#F5F0E8",marginBottom:4,fontFamily:"'Cormorant Garamond', serif",fontSize:20},children:"Hiloulot / Yahrzeits"}),c.jsx("p",{style:{fontSize:12,color:"#E8D5A0",opacity:.4,marginBottom:16},children:"Remembrances displayed on the left panel."}),V("hiloulot",[{key:"name",label:"Name",flex:1,minW:200}],{name:""})]}),s==="general"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[c.jsx("h3",{style:{color:"#F5F0E8",marginBottom:0,fontFamily:"'Cormorant Garamond', serif",fontSize:20},children:"General Settings"}),c.jsx("p",{style:{fontSize:12,color:"#E8D5A0",opacity:.4,marginBottom:4},children:"Shul identity, parasha, candle times, and access control."}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14},children:[c.jsx(G,{label:"Shul Name (English)",value:n.shulName,onChange:m=>g("shulName",m)}),c.jsx(G,{label:"Shul Name (Hebrew)",value:n.shulNameHeb,onChange:m=>g("shulNameHeb",m)}),c.jsx(G,{label:"Parasha",value:n.parasha,onChange:m=>g("parasha",m)}),c.jsx(G,{label:"Makam",value:n.makam,onChange:m=>g("makam",m)}),c.jsx(G,{label:"Hebrew Date",value:n.hebrewDate,onChange:m=>g("hebrewDate",m)}),c.jsx(G,{label:"Admin PIN",value:n.adminPin,onChange:m=>g("adminPin",m),type:"password"}),c.jsx(G,{label:"Candle Lighting",value:n.candleLighting,onChange:m=>g("candleLighting",m)}),c.jsx(G,{label:"Havdalah",value:n.havdalah,onChange:m=>g("havdalah",m)}),c.jsx(G,{label:"Rabbeinu Tam",value:n.rabbeinuTam,onChange:m=>g("rabbeinuTam",m)})]})]}),s==="donate"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[c.jsx("h3",{style:{color:"#F5F0E8",marginBottom:0,fontFamily:"'Cormorant Garamond', serif",fontSize:20},children:"Donation Info"}),c.jsx("p",{style:{fontSize:12,color:"#E8D5A0",opacity:.4,marginBottom:4},children:"Payment details shown on the signage. Leave blank to hide a method."}),c.jsx(G,{label:"Venmo Handle",value:n.donate.venmo,onChange:m=>g("donate.venmo",m)}),c.jsx(G,{label:"Zelle Email",value:n.donate.zelle,onChange:m=>g("donate.zelle",m)}),c.jsx(G,{label:"Website URL",value:n.donate.website,onChange:m=>g("donate.website",m)})]}),s==="announce"&&c.jsxs("div",{children:[c.jsx("h3",{style:{color:"#F5F0E8",marginBottom:4,fontFamily:"'Cormorant Garamond', serif",fontSize:20},children:"Announcements"}),c.jsx("p",{style:{fontSize:12,color:"#E8D5A0",opacity:.4,marginBottom:16},children:"Scrolling ticker at the bottom. Great for upcoming events, mazel tovs, etc."}),V("announcements",[{key:"text",label:"Announcement Text",flex:3,minW:300},{key:"type",label:"Type (info/urgent/simcha)",flex:1,minW:100}],{text:"",type:"info"})]}),s==="sponsors"&&c.jsxs("div",{children:[c.jsx("h3",{style:{color:"#F5F0E8",marginBottom:4,fontFamily:"'Cormorant Garamond', serif",fontSize:20},children:"Sponsors & Dedications"}),c.jsx("p",{style:{fontSize:12,color:"#E8D5A0",opacity:.4,marginBottom:16},children:"Show sponsor messages or kiddush dedications on the display."}),V("sponsors",[{key:"name",label:"Sponsor Name",flex:1,minW:140},{key:"message",label:"Dedication Message",flex:2,minW:200}],{name:"",message:""})]}),s==="theme"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[c.jsx("h3",{style:{color:"#F5F0E8",marginBottom:0,fontFamily:"'Cormorant Garamond', serif",fontSize:20},children:"Theme & Appearance"}),c.jsx("p",{style:{fontSize:12,color:"#E8D5A0",opacity:.4,marginBottom:4},children:"Customize colors, fonts, background, and sizing."}),c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:10,fontWeight:600,color:"#C9A84C",opacity:.6,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.08em"},children:"Color Presets"}),c.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:td.map(m=>c.jsxs("button",{onClick:()=>{g("theme.accent",m.accent),g("theme.bg",m.bg),g("theme.text",m.text)},style:{padding:"8px 16px",borderRadius:8,border:n.theme.accent===m.accent?`2px solid ${m.accent}`:"1px solid rgba(255,255,255,0.1)",background:m.bg,color:m.accent,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"},children:[c.jsx("span",{style:{display:"inline-block",width:10,height:10,borderRadius:"50%",background:m.accent,marginRight:6}}),m.label]},m.label))})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14},children:[c.jsx(dn,{label:"Accent Color",value:n.theme.accent,onChange:m=>g("theme.accent",m)}),c.jsx(dn,{label:"Background Color",value:n.theme.bg,onChange:m=>g("theme.bg",m)}),c.jsx(dn,{label:"Text Color",value:n.theme.text,onChange:m=>g("theme.text",m)})]}),c.jsx(Ke,{label:"Background Image",value:n.theme.bgImage,onChange:m=>g("theme.bgImage",m),options:ed}),n.theme.bgImage&&c.jsx(ve,{label:"Background Dim",value:Math.round(n.theme.bgDim*100),onChange:m=>g("theme.bgDim",m/100),min:0,max:100,suffix:"%"}),n.theme.bgImage&&c.jsx(ve,{label:"Background Blur",value:n.theme.bgBlur,onChange:m=>g("theme.bgBlur",m),min:0,max:20,suffix:"px"}),c.jsx(ve,{label:"Card Opacity",value:Math.round(n.theme.cardOpacity*100),onChange:m=>g("theme.cardOpacity",m/100),min:30,max:100,suffix:"%"}),c.jsx(ve,{label:"Card Border Radius",value:n.theme.cardBorderRadius,onChange:m=>g("theme.cardBorderRadius",m),min:0,max:30,suffix:"px"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14},children:[c.jsx(Ke,{label:"Display Font",value:n.theme.displayFont,onChange:m=>g("theme.displayFont",m),options:hn}),c.jsx(Ke,{label:"Body Font",value:n.theme.bodyFont,onChange:m=>g("theme.bodyFont",m),options:hn}),c.jsx(Ke,{label:"Hebrew Font",value:n.theme.hebrewFont,onChange:m=>g("theme.hebrewFont",m),options:hn})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14},children:[c.jsx(ve,{label:"Clock Size",value:n.theme.clockSize,onChange:m=>g("theme.clockSize",m),min:30,max:80,suffix:"px"}),c.jsx(ve,{label:"Schedule Time Size",value:n.theme.scheduleTimeSize,onChange:m=>g("theme.scheduleTimeSize",m),min:16,max:40,suffix:"px"}),c.jsx(ve,{label:"Zmanim Time Size",value:n.theme.zmanimTimeSize,onChange:m=>g("theme.zmanimTimeSize",m),min:14,max:30,suffix:"px"})]}),c.jsx(se,{label:"Show Seconds on Clock",value:n.theme.showSeconds,onChange:m=>g("theme.showSeconds",m)})]}),s==="layout"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[c.jsx("h3",{style:{color:"#F5F0E8",marginBottom:0,fontFamily:"'Cormorant Garamond', serif",fontSize:20},children:"Layout & Visibility"}),c.jsx("p",{style:{fontSize:12,color:"#E8D5A0",opacity:.4,marginBottom:4},children:"Toggle sections on/off and customize labels."}),c.jsx(se,{label:'Show "Up Next" Event Banner',value:n.layout.showNextEvent,onChange:m=>g("layout.showNextEvent",m)}),c.jsx(se,{label:"Show Donate Section",value:n.layout.showDonate,onChange:m=>g("layout.showDonate",m)}),c.jsx(se,{label:"Show Limudim",value:n.layout.showLimudim,onChange:m=>g("layout.showLimudim",m)}),c.jsx(se,{label:"Show Hiloulot",value:n.layout.showHiloulot,onChange:m=>g("layout.showHiloulot",m)}),c.jsx(se,{label:"Show Makam",value:n.layout.showMakam,onChange:m=>g("layout.showMakam",m)}),c.jsx(se,{label:"Show Hebrew Date",value:n.layout.showHebrewDate,onChange:m=>g("layout.showHebrewDate",m)}),c.jsx(se,{label:"Show Rabbeinu Tam",value:n.layout.showRabbeinuTam,onChange:m=>g("layout.showRabbeinuTam",m)}),c.jsx(se,{label:'Show בס"ד',value:n.layout.showBsd,onChange:m=>g("layout.showBsd",m)}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginTop:8},children:[c.jsx(G,{label:"Schedule Section Title",value:n.layout.scheduleLabel,onChange:m=>g("layout.scheduleLabel",m)}),c.jsx(G,{label:"Zmanim Section Title",value:n.layout.zmanimLabel,onChange:m=>g("layout.zmanimLabel",m)}),c.jsx(Ke,{label:"Zmanim Grid Columns",value:n.layout.zmanimColumns,onChange:m=>g("layout.zmanimColumns",Number(m)),options:[{label:"1 Column",value:1},{label:"2 Columns",value:2},{label:"3 Columns",value:3}]})]})]}),s==="data"&&c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[c.jsx("h3",{style:{color:"#F5F0E8",marginBottom:0,fontFamily:"'Cormorant Garamond', serif",fontSize:20},children:"Import / Export / Reset"}),c.jsx("p",{style:{fontSize:12,color:"#E8D5A0",opacity:.4,marginBottom:4},children:"Backup your settings, transfer to another display, or reset to factory defaults."}),c.jsx("button",{onClick:Re,style:ye,children:"📋 Export Current Configuration"}),l&&c.jsx("textarea",{value:l,readOnly:!0,rows:8,style:{width:"100%",padding:12,borderRadius:8,border:"1px solid rgba(201,168,76,0.15)",background:"rgba(0,0,0,0.3)",color:"#E8D5A0",fontSize:11,fontFamily:"monospace",resize:"vertical",outline:"none"}}),c.jsx("div",{style:{fontSize:10,fontWeight:600,color:"#C9A84C",opacity:.6,textTransform:"uppercase",letterSpacing:"0.08em",marginTop:8},children:"Import Configuration"}),c.jsx("textarea",{value:f,onChange:m=>u(m.target.value),rows:6,placeholder:"Paste JSON config here...",style:{width:"100%",padding:12,borderRadius:8,border:"1px solid rgba(201,168,76,0.15)",background:"rgba(0,0,0,0.3)",color:"#E8D5A0",fontSize:11,fontFamily:"monospace",resize:"vertical",outline:"none"}}),f&&c.jsx("button",{onClick:b,style:ye,children:"📥 Import Configuration"}),c.jsx("div",{style:{borderTop:"1px solid rgba(255,107,107,0.15)",paddingTop:16,marginTop:8},children:c.jsx("button",{onClick:A,style:{...ye,borderColor:"rgba(255,107,107,0.3)",background:"rgba(255,107,107,0.08)",color:"#FF6B6B"},children:"⚠️ Reset Everything to Defaults"})})]})]})]})]})})}function md({pin:n,onOk:e,onNo:t}){const[i,s]=q(""),[r,o]=q(!1),a=()=>{i===n?e():(o(!0),s(""),setTimeout(()=>o(!1),1200))};return c.jsx("div",{style:{position:"fixed",inset:0,zIndex:9998,background:"rgba(0,0,0,0.7)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsxs("div",{style:{width:340,padding:32,background:"linear-gradient(135deg, #0F1423, #0A0E1A)",borderRadius:20,border:"1px solid rgba(201,168,76,0.2)",boxShadow:"0 24px 80px rgba(0,0,0,0.6)",textAlign:"center"},children:[c.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:700,color:"#F5F0E8",marginBottom:6},children:"Admin Access"}),c.jsx("div",{style:{fontSize:13,color:"#E8D5A0",opacity:.5,marginBottom:20},children:"Enter PIN to edit signage"}),c.jsx("input",{type:"password",value:i,onChange:l=>s(l.target.value),onKeyDown:l=>l.key==="Enter"&&a(),autoFocus:!0,placeholder:"• • • •",style:{width:"100%",padding:"14px",borderRadius:10,textAlign:"center",border:r?"2px solid #FF6B6B":"1px solid rgba(201,168,76,0.2)",background:"rgba(255,255,255,0.05)",color:"#F5F0E8",fontSize:28,fontFamily:"'DM Sans',sans-serif",letterSpacing:"0.3em",outline:"none"}}),r&&c.jsx("div",{style:{color:"#FF6B6B",fontSize:13,marginTop:8},children:"Incorrect PIN"}),c.jsxs("div",{style:{display:"flex",gap:10,marginTop:18},children:[c.jsx("button",{onClick:t,style:{flex:1,padding:10,borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"#F5F0E8",fontSize:14,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"},children:"Cancel"}),c.jsx("button",{onClick:a,style:{flex:1,padding:10,borderRadius:10,border:"1px solid rgba(201,168,76,0.3)",background:"rgba(201,168,76,0.15)",color:"#C9A84C",fontSize:14,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"},children:"Enter"})]})]})})}function gd(){const[n,e]=q(Ne),[t,i]=q(!1),[s,r]=q(!1),[o,a]=q(!1),[l,h]=q(!1),f=Qr(),{data:u,schedule:d}=Kr();Qe(()=>{const b=rd();return e(b),i(!0),ad(m=>{console.log("[SignagePro] Firebase update received"),e(B=>document.querySelector("[data-admin-open]")?B:vt(Ne,m))})},[]),Qe(()=>{u&&t&&!l&&(e(b=>ld(b,u,d)),h(!0),console.log("[SignagePro] Bridge data merged:",u))},[u,t,l,d]),Qe(()=>{(d==null?void 0:d.length)>0&&t&&e(b=>{const A=JSON.parse(JSON.stringify(b));return A.schedule=d.map((m,B)=>({id:String(B+1),event:m.event,time:m.time,icon:m.icon||"📌"})),A})},[d,t]);const y=b=>{e(b),od(b)},g="/royzmanimwebsite/assets/images/shul-wall/AM-LOGO-1368x1536.png",p=n.theme,E=n.layout,j=(()=>{if(!E.showNextEvent)return null;const b=f.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"});for(const A of n.schedule){const m=new Date(`${b} ${A.time}`);if(m>f){const B=m-f,O=Math.floor(B/36e5),D=Math.floor(B%36e5/6e4);return{event:A.event,countdown:O>0?`${O}h ${D}m`:`${D}m`}}}return null})(),M=(()=>{const b=f.getHours();return{h:b%12||12,m:f.getMinutes().toString().padStart(2,"0"),s:f.getSeconds().toString().padStart(2,"0"),ampm:b>=12?"PM":"AM"}})(),X=f.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),ie=n.announcements.length>0?n.announcements.map(b=>`${b.type==="urgent"?"🔴":b.type==="simcha"?"🎉":"ℹ️"} ${b.text}`).join("     ◆     "):null,ye=n.sponsors.length>0?n.sponsors.map(b=>`${b.name}: ${b.message}`).join("  •  "):null,V=(b=!1)=>({background:b?`linear-gradient(135deg, rgba(15,20,35,${p.cardOpacity}) 0%, rgba(10,14,28,${Math.min(p.cardOpacity+.05,1)}) 100%)`:`linear-gradient(135deg, rgba(15,20,35,${p.cardOpacity-.07}) 0%, rgba(10,14,28,${p.cardOpacity}) 100%)`,backdropFilter:"blur(24px) saturate(1.4)",borderRadius:p.cardBorderRadius,border:`1px solid ${p.accent}20`,boxShadow:"0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)"}),Re=(b,A)=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:A?10:14},children:[c.jsx("div",{style:{height:1,flex:1,background:`linear-gradient(90deg, transparent, ${p.accent}55, transparent)`}}),c.jsx("span",{style:{fontFamily:p.displayFont,fontSize:A?15:17,fontWeight:700,color:p.accent,letterSpacing:"0.12em",textTransform:"uppercase",whiteSpace:"nowrap"},children:b}),c.jsx("div",{style:{height:1,flex:1,background:`linear-gradient(90deg, transparent, ${p.accent}55, transparent)`}})]});return t?c.jsxs("div",{style:{position:"relative",width:"100%",minHeight:"100vh",overflow:"hidden",fontFamily:p.bodyFont,color:p.text},children:[c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&family=Frank+Ruhl+Libre:wght@300;400;500;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        @keyframes pulseDot { 0%,100%{opacity:.3;transform:scale(.8)} 50%{opacity:1;transform:scale(1.3)} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes clockPulse { 0%,100%{text-shadow:0 0 30px ${p.accent}25} 50%{text-shadow:0 0 50px ${p.accent}55} }
        @keyframes donateGlow { 0%,100%{box-shadow:0 0 15px ${p.accent}15} 50%{box-shadow:0 0 25px ${p.accent}30} }
        @keyframes ticker { 0%{transform:translateX(100%)} 100%{transform:translateX(-100%)} }
        .si{transition:all .25s;border-radius:10px} .si:hover{background:${p.accent}0F;transform:translateX(3px)}
        .zc{transition:all .2s} .zc:hover{background:${p.accent}1F !important;border-color:${p.accent}4D !important;transform:scale(1.03)}
        .at{opacity:.15;transition:opacity .3s;cursor:pointer} .at:hover{opacity:.8}
      `}),p.bgImage&&c.jsx("div",{style:{position:"fixed",inset:0,backgroundImage:`url('${p.bgImage}')`,backgroundSize:"cover",backgroundPosition:"center 40%",filter:`brightness(${1-p.bgDim}) contrast(1.1) saturate(0.6) blur(${p.bgBlur}px)`,zIndex:0}}),c.jsx("div",{style:{position:"fixed",inset:0,background:p.bgImage?`linear-gradient(180deg, ${p.bg}B3 0%, ${p.bg}66 40%, ${p.bg}80 70%, ${p.bg}D9 100%)`:p.bg,zIndex:1}}),c.jsx("div",{style:{position:"fixed",top:0,left:"50%",transform:"translateX(-50%)",width:"80%",height:250,background:`radial-gradient(ellipse at center top, ${p.accent}0F 0%, transparent 70%)`,zIndex:1}}),c.jsxs("div",{style:{position:"relative",zIndex:3,maxWidth:1560,margin:"0 auto",padding:"14px 20px",display:"flex",flexDirection:"column",minHeight:"100vh",gap:12},children:[c.jsx("div",{style:{...V(!0),padding:"14px 28px"},children:c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[c.jsx("img",{src:g,alt:"",style:{width:62,height:62,objectFit:"contain",borderRadius:8}}),c.jsxs("div",{children:[c.jsx("div",{style:{fontFamily:p.displayFont,fontSize:30,fontWeight:700,color:p.text,lineHeight:1},children:n.shulName}),c.jsx("div",{style:{fontFamily:p.hebrewFont,fontSize:17,color:p.accent,opacity:.7,marginTop:3},children:n.shulNameHeb})]})]}),c.jsxs("div",{style:{textAlign:"center"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"center",gap:2,animation:"clockPulse 4s ease-in-out infinite"},children:[c.jsxs("span",{style:{fontFamily:p.displayFont,fontSize:p.clockSize,fontWeight:300,color:p.text,lineHeight:1},children:[M.h,":",M.m]}),p.showSeconds&&c.jsxs("span",{style:{fontFamily:p.displayFont,fontSize:p.clockSize*.45,fontWeight:300,color:p.accent,marginLeft:2,opacity:.7},children:[":",M.s]}),c.jsx("span",{style:{fontSize:15,fontWeight:600,color:p.accent,marginLeft:6},children:M.ampm})]}),c.jsx("div",{style:{fontSize:12,fontWeight:500,color:p.text,letterSpacing:"0.1em",textTransform:"uppercase",marginTop:4,opacity:.7},children:X}),E.showHebrewDate&&c.jsx("div",{style:{fontFamily:p.hebrewFont,fontSize:13,color:p.accent,opacity:.6,marginTop:2},children:n.hebrewDate})]}),c.jsxs("div",{style:{textAlign:"right"},children:[c.jsx("div",{style:{fontFamily:p.hebrewFont,fontSize:11,color:p.accent,opacity:.5,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:2},children:"פרשת השבוע"}),c.jsx("div",{style:{fontFamily:p.hebrewFont,fontSize:24,fontWeight:700,color:p.accent,direction:"rtl",lineHeight:1.2},children:n.parasha}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:6,marginTop:6,fontSize:13,color:p.text},children:[c.jsx("span",{children:"🕯️"}),c.jsx("span",{style:{fontWeight:600},children:n.candleLighting}),c.jsx("span",{style:{opacity:.2,margin:"0 4px"},children:"•"}),c.jsx("span",{children:"✡️"}),c.jsx("span",{style:{fontWeight:600},children:n.havdalah}),E.showRabbeinuTam&&c.jsxs("span",{style:{fontSize:10,opacity:.45,marginLeft:4},children:["(R״T ",n.rabbeinuTam,")"]})]})]}),E.showBsd&&c.jsx("div",{style:{fontFamily:p.hebrewFont,fontSize:40,fontWeight:700,color:p.accent,opacity:.35,direction:"rtl",lineHeight:1},children:"בס״ד"})]})}),ye&&c.jsxs("div",{style:{...V(),padding:"10px 20px",textAlign:"center"},children:[c.jsx("div",{style:{fontSize:10,color:p.accent,opacity:.5,letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:4},children:"Sponsored by"}),c.jsx("div",{style:{fontSize:14,color:p.text,fontStyle:"italic",opacity:.85},children:ye})]}),j&&c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,padding:"8px 20px",background:`linear-gradient(90deg, transparent, ${p.accent}14, ${p.accent}1F, ${p.accent}14, transparent)`,borderRadius:10,border:`1px solid ${p.accent}14`},children:[[0,.25,.5].map((b,A)=>c.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:p.accent,animation:`pulseDot 2s ease-in-out ${b}s infinite`}},A)),c.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.2em",color:p.accent,opacity:.65},children:"UP NEXT"}),c.jsx("span",{style:{fontFamily:p.displayFont,fontSize:19,fontWeight:600,color:p.text},children:j.event}),c.jsxs("span",{style:{fontSize:13,fontWeight:700,color:p.accent,background:`${p.accent}1A`,padding:"3px 14px",borderRadius:20,border:`1px solid ${p.accent}25`},children:["in ",j.countdown]}),[.5,.25,0].map((b,A)=>c.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:p.accent,animation:`pulseDot 2s ease-in-out ${b}s infinite`}},A))]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.4fr 1fr",gap:14,flex:1,minHeight:0},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[E.showLimudim&&c.jsxs("div",{style:{...V(),padding:"16px 20px"},children:[Re("Limudim"),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:n.limudim.map((b,A)=>c.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:8,animation:`fadeIn .4s ease ${A*.08}s both`},children:[c.jsx("span",{style:{fontSize:14,fontWeight:500,color:p.text,whiteSpace:"nowrap"},children:b.study}),c.jsx("span",{style:{flex:1,borderBottom:`1px dotted ${p.accent}33`,minWidth:16,alignSelf:"center",marginBottom:3}}),c.jsx("span",{style:{fontFamily:p.hebrewFont,fontSize:16,fontWeight:500,color:p.accent,whiteSpace:"nowrap"},children:b.ref})]},b.id))})]}),E.showHiloulot&&c.jsxs("div",{style:{...V(),padding:"16px 20px"},children:[Re("Hiloulot",!0),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:9},children:[n.hiloulot.length===0&&c.jsx("div",{style:{fontSize:13,color:p.text,opacity:.3,fontStyle:"italic"},children:"None today"}),n.hiloulot.map((b,A)=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,animation:`fadeIn .4s ease ${A*.1}s both`},children:[c.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:`linear-gradient(135deg, ${p.accent}, ${p.accent}88)`,boxShadow:`0 0 8px ${p.accent}4D`,flexShrink:0}}),c.jsx("span",{style:{fontSize:14,color:p.text,opacity:.9},children:b.name})]},b.id))]})]}),E.showDonate&&c.jsxs("div",{style:{...V(),padding:"16px 20px",animation:"donateGlow 4s ease-in-out infinite",border:`1px solid ${p.accent}33`},children:[Re("Support Our Shul",!0),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[c.jsxs("div",{style:{display:"flex",gap:8},children:[n.donate.venmo&&c.jsxs("a",{href:"https://venmo.com/u/ateret-marjan",target:"_blank",rel:"noopener noreferrer",style:{flex:1,display:"flex",alignItems:"center",gap:10,padding:"8px 12px",borderRadius:10,background:"rgba(61,149,206,0.06)",border:"1px solid rgba(61,149,206,0.12)",textDecoration:"none",cursor:"pointer"},children:[c.jsx(dd,{}),c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:10,fontWeight:600,color:p.text,opacity:.4,letterSpacing:"0.08em",textTransform:"uppercase"},children:"Venmo"}),c.jsx("div",{style:{fontSize:14,fontWeight:600,color:p.text,marginTop:1},children:n.donate.venmo})]})]}),n.donate.zelle&&c.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(n.donate.zelle),alert("Zelle email copied!")},style:{flex:1,display:"flex",alignItems:"center",gap:10,padding:"8px 12px",borderRadius:10,background:"rgba(109,30,212,0.06)",border:"1px solid rgba(109,30,212,0.12)",cursor:"pointer",textAlign:"left"},children:[c.jsx(ud,{}),c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:10,fontWeight:600,color:p.text,opacity:.4,letterSpacing:"0.08em",textTransform:"uppercase"},children:"Zelle"}),c.jsx("div",{style:{fontSize:12,fontWeight:500,color:p.text,marginTop:1,wordBreak:"break-all"},children:n.donate.zelle})]})]})]}),n.donate.website&&c.jsxs("a",{href:"https://ateretmarjan.org",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"9px 12px",borderRadius:10,background:`linear-gradient(135deg, ${p.accent}14, ${p.accent}0A)`,border:`1px solid ${p.accent}25`,textDecoration:"none"},children:[c.jsx(fd,{color:p.accent}),c.jsx("span",{style:{fontSize:15,fontWeight:700,color:p.accent},children:n.donate.website})]})]})]})]}),c.jsxs("div",{style:{...V(!0),padding:"20px 24px",display:"flex",flexDirection:"column"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:16},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:16,marginBottom:2},children:[c.jsx("div",{style:{width:50,height:2,borderRadius:1,background:`linear-gradient(90deg, transparent, ${p.accent}, transparent)`}}),c.jsx("span",{style:{fontFamily:p.displayFont,fontSize:32,fontWeight:700,color:p.text},children:E.scheduleLabel}),c.jsx("div",{style:{width:50,height:2,borderRadius:1,background:`linear-gradient(90deg, transparent, ${p.accent}, transparent)`}})]}),E.showMakam&&c.jsxs("div",{style:{fontSize:14,color:p.accent,fontStyle:"italic",opacity:.65},children:["♫ ",n.makam]})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:2,flex:1,justifyContent:"center"},children:n.schedule.map((b,A)=>c.jsxs("div",{className:"si",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",animation:`fadeIn .5s ease ${A*.08}s both`},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[c.jsx("span",{style:{fontSize:20,width:30,textAlign:"center"},children:b.icon}),c.jsx("span",{style:{fontSize:18,fontWeight:500,color:p.text},children:b.event})]}),c.jsx("div",{style:{flex:1,height:1,margin:"0 18px",background:`linear-gradient(90deg, transparent, ${p.accent}1F, transparent)`,minWidth:24}}),c.jsx("span",{style:{fontFamily:p.displayFont,fontSize:p.scheduleTimeSize,fontWeight:600,color:p.accent,whiteSpace:"nowrap",minWidth:100,textAlign:"right"},children:b.time})]},b.id))})]}),c.jsxs("div",{style:{...V(),padding:"16px 18px",display:"flex",flexDirection:"column"},children:[Re(E.zmanimLabel),c.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${E.zmanimColumns}, 1fr)`,gap:8,flex:1,alignContent:"start"},children:n.zmanim.map((b,A)=>c.jsxs("div",{className:"zc",style:{padding:"10px 12px",borderRadius:10,background:`${p.accent}0A`,border:`1px solid ${p.accent}14`,animation:`fadeIn .4s ease ${A*.05}s both`,cursor:"default"},children:[c.jsx("div",{style:{fontSize:10,fontWeight:600,color:p.text,opacity:.45,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:4},children:b.label}),c.jsx("div",{style:{fontFamily:p.displayFont,fontSize:p.zmanimTimeSize,fontWeight:600,color:p.text},children:b.time})]},b.id))})]})]}),ie&&c.jsx("div",{style:{overflow:"hidden",borderRadius:8,background:`${p.accent}0A`,border:`1px solid ${p.accent}14`,padding:"8px 0"},children:c.jsx("div",{style:{whiteSpace:"nowrap",animation:"ticker 30s linear infinite",fontSize:14,fontWeight:500,color:p.text},children:ie})}),c.jsxs("div",{style:{textAlign:"center",padding:"8px 0 4px",display:"flex",alignItems:"center",justifyContent:"center",gap:12},children:[c.jsxs("span",{style:{fontSize:11,color:p.text,opacity:.2,letterSpacing:"0.05em"},children:["Powered by ",c.jsx("strong",{children:"זמני יוסף"})," · Developed by Maor Na'im · All Halachic times based on Maran Ovadia Yosef zt״l"]}),c.jsx("span",{className:"at",onClick:()=>r(!0),style:{fontSize:14,color:p.accent,padding:"4px 8px",userSelect:"none"},children:"⚙️"})]})]}),s&&c.jsx(md,{pin:n.adminPin,onOk:()=>{r(!1),a(!0)},onNo:()=>r(!1)}),o&&c.jsx("div",{"data-admin-open":"true",children:c.jsx(pd,{data:n,setData:e,onClose:()=>a(!1),onSave:y})})]}):c.jsx("div",{style:{minHeight:"100vh",background:p.bg}})}const _d=zr.createRoot(document.getElementById("react-root"));_d.render(c.jsx(gd,{}));
