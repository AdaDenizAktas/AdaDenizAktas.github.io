import{c as Pt,d as M,g as Vt,_ as Xo,r as Rt,p as Jo,o as Yo,q as Ql,s as At,t as bt,n as Wn,v as Xl,j as Jl,k as Yl,x as On,y as Ye,u as Zl,S as tc,C as qi,z as ec,P as nc,W as rc,B as sc,D as zi,b as ic,a as oc,A as ac,E as lc,h as J,G as Hi,e as Mn,H as St}from"./index-FZ176Kw0.js";function cc(n,t){return Vt(),Pt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[M("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),M("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"})])}function uc(n,t){return Vt(),Pt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[M("path",{"fill-rule":"evenodd",d:"m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","clip-rule":"evenodd"})])}function hc(n,t){return Vt(),Pt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[M("path",{"fill-rule":"evenodd",d:"M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z","clip-rule":"evenodd"})])}const fc=()=>{};var Gi={};/**
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
 */const Zo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},dc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],h=n[e++],f=((i&7)<<18|(o&63)<<12|(l&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},ta={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,h=l?n[i+1]:0,f=i+2<n.length,d=f?n[i+2]:0,E=o>>2,I=(o&3)<<4|h>>4;let b=(h&15)<<2|d>>6,P=d&63;f||(P=64,l||(b=64)),r.push(e[E],e[I],e[b],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Zo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):dc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],h=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const I=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||h==null||d==null||I==null)throw new pc;const b=o<<2|h>>4;if(r.push(b),d!==64){const P=h<<4&240|d>>2;if(r.push(P),I!==64){const k=d<<6&192|I;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mc=function(n){const t=Zo(n);return ta.encodeByteArray(t,!0)},Qn=function(n){return mc(n).replace(/\./g,"")},gc=function(n){try{return ta.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function _c(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yc=()=>_c().__FIREBASE_DEFAULTS__,Ec=()=>{if(typeof process>"u"||typeof Gi>"u")return;const n=Gi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&gc(n[1]);return t&&JSON.parse(t)},ps=()=>{try{return fc()||yc()||Ec()||vc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Tc=n=>ps()?.emulatorHosts?.[n],wc=n=>{const t=Tc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ea=()=>ps()?.config;/**
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
 */class Ic{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function ms(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ac(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function bc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Qn(JSON.stringify(e)),Qn(JSON.stringify(l)),""].join(".")}const Ze={};function Rc(){const n={prod:[],emulator:[]};for(const t of Object.keys(Ze))Ze[t]?n.emulator.push(t):n.prod.push(t);return n}function Sc(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Ki=!1;function Cc(n,t){if(typeof window>"u"||typeof document>"u"||!ms(window.location.host)||Ze[n]===t||Ze[n]||Ki)return;Ze[n]=t;function e(b){return`__firebase__banner__${b}`}const r="__firebase__banner",o=Rc().prod.length>0;function l(){const b=document.getElementById(r);b&&b.remove()}function h(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function f(b,P){b.setAttribute("width","24"),b.setAttribute("id",P),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function d(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{Ki=!0,l()},b}function E(b,P){b.setAttribute("id",P),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function I(){const b=Sc(r),P=e("text"),k=document.getElementById(P)||document.createElement("span"),O=e("learnmore"),V=document.getElementById(O)||document.createElement("a"),z=e("preprendIcon"),j=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const H=b.element;h(H),E(V,O);const K=d();f(j,z),H.append(j,k,V,K),document.body.appendChild(H)}o?(k.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
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
 */function Pc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vc(){const n=ps()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dc(){return!Vc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nc(){try{return typeof indexedDB=="object"}catch{return!1}}function xc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}/**
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
 */const kc="FirebaseError";class De extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=kc,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,na.prototype.create)}}class na{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?Oc(o,r):"Error",h=`${this.serviceName}: ${l} (${i}).`;return new De(i,h,r)}}function Oc(n,t){return n.replace(Mc,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Mc=/\{\$([^}]+)}/g;function Xn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(Wi(o)&&Wi(l)){if(!Xn(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Wi(n){return n!==null&&typeof n=="object"}/**
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
 */function on(n){return n&&n._delegate?n._delegate:n}class an{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const le="[DEFAULT]";/**
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
 */class Lc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ic;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Uc(t))try{this.getOrInitializeService({instanceIdentifier:le})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=le){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=le){return this.instances.has(t)}getOptions(t=le){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&l.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=le){return this.component?this.component.multipleInstances?t:le:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fc(n){return n===le?void 0:n}function Uc(n){return n.instantiationMode==="EAGER"}/**
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
 */class Bc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Lc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const jc={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},$c=q.INFO,qc={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},zc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=qc[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ra{constructor(t){this.name=t,this._logLevel=$c,this._logHandler=zc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}const Hc=(n,t)=>t.some(e=>n instanceof e);let Qi,Xi;function Gc(){return Qi||(Qi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kc(){return Xi||(Xi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sa=new WeakMap,Jr=new WeakMap,ia=new WeakMap,qr=new WeakMap,gs=new WeakMap;function Wc(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(Qt(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&sa.set(e,n)}).catch(()=>{}),gs.set(t,n),t}function Qc(n){if(Jr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Jr.set(n,t)}let Yr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Jr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ia.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Xc(n){Yr=n(Yr)}function Jc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(zr(this),t,...e);return ia.set(r,t.sort?t.sort():[t]),Qt(r)}:Kc().includes(n)?function(...t){return n.apply(zr(this),t),Qt(sa.get(this))}:function(...t){return Qt(n.apply(zr(this),t))}}function Yc(n){return typeof n=="function"?Jc(n):(n instanceof IDBTransaction&&Qc(n),Hc(n,Gc())?new Proxy(n,Yr):n)}function Qt(n){if(n instanceof IDBRequest)return Wc(n);if(qr.has(n))return qr.get(n);const t=Yc(n);return t!==n&&(qr.set(n,t),gs.set(t,n)),t}const zr=n=>gs.get(n);function Zc(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,t),h=Qt(l);return r&&l.addEventListener("upgradeneeded",f=>{r(Qt(l.result),f.oldVersion,f.newVersion,Qt(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),h}const tu=["get","getKey","getAll","getAllKeys","count"],eu=["put","add","delete","clear"],Hr=new Map;function Ji(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Hr.get(t))return Hr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=eu.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tu.includes(e)))return;const o=async function(l,...h){const f=this.transaction(l,i?"readwrite":"readonly");let d=f.store;return r&&(d=d.index(h.shift())),(await Promise.all([d[e](...h),i&&f.done]))[0]};return Hr.set(t,o),o}Xc(n=>({...n,get:(t,e,r)=>Ji(t,e)||n.get(t,e,r),has:(t,e)=>!!Ji(t,e)||n.has(t,e)}));/**
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
 */class nu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ru(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ru(n){return n.getComponent()?.type==="VERSION"}const Zr="@firebase/app",Yi="0.14.4";/**
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
 */const $t=new ra("@firebase/app"),su="@firebase/app-compat",iu="@firebase/analytics-compat",ou="@firebase/analytics",au="@firebase/app-check-compat",lu="@firebase/app-check",cu="@firebase/auth",uu="@firebase/auth-compat",hu="@firebase/database",fu="@firebase/data-connect",du="@firebase/database-compat",pu="@firebase/functions",mu="@firebase/functions-compat",gu="@firebase/installations",_u="@firebase/installations-compat",yu="@firebase/messaging",Eu="@firebase/messaging-compat",vu="@firebase/performance",Tu="@firebase/performance-compat",wu="@firebase/remote-config",Iu="@firebase/remote-config-compat",Au="@firebase/storage",bu="@firebase/storage-compat",Ru="@firebase/firestore",Su="@firebase/ai",Cu="@firebase/firestore-compat",Pu="firebase",Vu="12.4.0";/**
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
 */const ts="[DEFAULT]",Du={[Zr]:"fire-core",[su]:"fire-core-compat",[ou]:"fire-analytics",[iu]:"fire-analytics-compat",[lu]:"fire-app-check",[au]:"fire-app-check-compat",[cu]:"fire-auth",[uu]:"fire-auth-compat",[hu]:"fire-rtdb",[fu]:"fire-data-connect",[du]:"fire-rtdb-compat",[pu]:"fire-fn",[mu]:"fire-fn-compat",[gu]:"fire-iid",[_u]:"fire-iid-compat",[yu]:"fire-fcm",[Eu]:"fire-fcm-compat",[vu]:"fire-perf",[Tu]:"fire-perf-compat",[wu]:"fire-rc",[Iu]:"fire-rc-compat",[Au]:"fire-gcs",[bu]:"fire-gcs-compat",[Ru]:"fire-fst",[Cu]:"fire-fst-compat",[Su]:"fire-vertex","fire-js":"fire-js",[Pu]:"fire-js-all"};/**
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
 */const Jn=new Map,Nu=new Map,es=new Map;function Zi(n,t){try{n.container.addComponent(t)}catch(e){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Yn(n){const t=n.name;if(es.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;es.set(t,n);for(const e of Jn.values())Zi(e,n);for(const e of Nu.values())Zi(e,n);return!0}function xu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function ku(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ou={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new na("app","Firebase",Ou);/**
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
 */class Mu{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
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
 */const Lu=Vu;function oa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:ts,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Xt.create("bad-app-name",{appName:String(i)});if(e||(e=ea()),!e)throw Xt.create("no-options");const o=Jn.get(i);if(o){if(Xn(e,o.options)&&Xn(r,o.config))return o;throw Xt.create("duplicate-app",{appName:i})}const l=new Bc(i);for(const f of es.values())l.addComponent(f);const h=new Mu(e,r,l);return Jn.set(i,h),h}function Fu(n=ts){const t=Jn.get(n);if(!t&&n===ts&&ea())return oa();if(!t)throw Xt.create("no-app",{appName:n});return t}function Ie(n,t,e){let r=Du[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${t}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(l.join(" "));return}Yn(new an(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Uu="firebase-heartbeat-database",Bu=1,ln="firebase-heartbeat-store";let Gr=null;function aa(){return Gr||(Gr=Zc(Uu,Bu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ln)}catch(e){console.warn(e)}}}}).catch(n=>{throw Xt.create("idb-open",{originalErrorMessage:n.message})})),Gr}async function ju(n){try{const e=(await aa()).transaction(ln),r=await e.objectStore(ln).get(la(n));return await e.done,r}catch(t){if(t instanceof De)$t.warn(t.message);else{const e=Xt.create("idb-get",{originalErrorMessage:t?.message});$t.warn(e.message)}}}async function to(n,t){try{const r=(await aa()).transaction(ln,"readwrite");await r.objectStore(ln).put(t,la(n)),await r.done}catch(e){if(e instanceof De)$t.warn(e.message);else{const r=Xt.create("idb-set",{originalErrorMessage:e?.message});$t.warn(r.message)}}}function la(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $u=1024,qu=30;class zu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gu(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=eo();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>qu){const i=Ku(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){$t.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=eo(),{heartbeatsToSend:e,unsentEntries:r}=Hu(this._heartbeatsCache.heartbeats),i=Qn(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return $t.warn(t),""}}}function eo(){return new Date().toISOString().substring(0,10)}function Hu(n,t=$u){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),no(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),no(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Gu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nc()?xc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await ju(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return to(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return to(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function no(n){return Qn(JSON.stringify({version:2,heartbeats:n})).length}function Ku(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Wu(n){Yn(new an("platform-logger",t=>new nu(t),"PRIVATE")),Yn(new an("heartbeat",t=>new zu(t),"PRIVATE")),Ie(Zr,Yi,n),Ie(Zr,Yi,"esm2020"),Ie("fire-js","")}Wu("");var Qu="firebase",Xu="12.4.0";/**
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
 */Ie(Qu,Xu,"app");var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _s;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,p){function g(){}g.prototype=p.prototype,y.F=p.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(v,_,T){for(var m=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)m[vt-2]=arguments[vt];return p.prototype[_].apply(v,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,p,g){g||(g=0);const v=Array(16);if(typeof p=="string")for(var _=0;_<16;++_)v[_]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(_=0;_<16;++_)v[_]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=y.g[0],g=y.g[1],_=y.g[2];let T=y.g[3],m;m=p+(T^g&(_^T))+v[0]+3614090360&4294967295,p=g+(m<<7&4294967295|m>>>25),m=T+(_^p&(g^_))+v[1]+3905402710&4294967295,T=p+(m<<12&4294967295|m>>>20),m=_+(g^T&(p^g))+v[2]+606105819&4294967295,_=T+(m<<17&4294967295|m>>>15),m=g+(p^_&(T^p))+v[3]+3250441966&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(T^g&(_^T))+v[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=T+(_^p&(g^_))+v[5]+1200080426&4294967295,T=p+(m<<12&4294967295|m>>>20),m=_+(g^T&(p^g))+v[6]+2821735955&4294967295,_=T+(m<<17&4294967295|m>>>15),m=g+(p^_&(T^p))+v[7]+4249261313&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(T^g&(_^T))+v[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=T+(_^p&(g^_))+v[9]+2336552879&4294967295,T=p+(m<<12&4294967295|m>>>20),m=_+(g^T&(p^g))+v[10]+4294925233&4294967295,_=T+(m<<17&4294967295|m>>>15),m=g+(p^_&(T^p))+v[11]+2304563134&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(T^g&(_^T))+v[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=T+(_^p&(g^_))+v[13]+4254626195&4294967295,T=p+(m<<12&4294967295|m>>>20),m=_+(g^T&(p^g))+v[14]+2792965006&4294967295,_=T+(m<<17&4294967295|m>>>15),m=g+(p^_&(T^p))+v[15]+1236535329&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(_^T&(g^_))+v[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^_&(p^g))+v[6]+3225465664&4294967295,T=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(T^p))+v[11]+643717713&4294967295,_=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(_^T))+v[0]+3921069994&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^T&(g^_))+v[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^_&(p^g))+v[10]+38016083&4294967295,T=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(T^p))+v[15]+3634488961&4294967295,_=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(_^T))+v[4]+3889429448&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^T&(g^_))+v[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^_&(p^g))+v[14]+3275163606&4294967295,T=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(T^p))+v[3]+4107603335&4294967295,_=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(_^T))+v[8]+1163531501&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^T&(g^_))+v[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^_&(p^g))+v[2]+4243563512&4294967295,T=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(T^p))+v[7]+1735328473&4294967295,_=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(_^T))+v[12]+2368359562&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(g^_^T)+v[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^_)+v[8]+2272392833&4294967295,T=p+(m<<11&4294967295|m>>>21),m=_+(T^p^g)+v[11]+1839030562&4294967295,_=T+(m<<16&4294967295|m>>>16),m=g+(_^T^p)+v[14]+4259657740&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^T)+v[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^_)+v[4]+1272893353&4294967295,T=p+(m<<11&4294967295|m>>>21),m=_+(T^p^g)+v[7]+4139469664&4294967295,_=T+(m<<16&4294967295|m>>>16),m=g+(_^T^p)+v[10]+3200236656&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^T)+v[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^_)+v[0]+3936430074&4294967295,T=p+(m<<11&4294967295|m>>>21),m=_+(T^p^g)+v[3]+3572445317&4294967295,_=T+(m<<16&4294967295|m>>>16),m=g+(_^T^p)+v[6]+76029189&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^T)+v[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^_)+v[12]+3873151461&4294967295,T=p+(m<<11&4294967295|m>>>21),m=_+(T^p^g)+v[15]+530742520&4294967295,_=T+(m<<16&4294967295|m>>>16),m=g+(_^T^p)+v[2]+3299628645&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(_^(g|~T))+v[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~_))+v[7]+1126891415&4294967295,T=p+(m<<10&4294967295|m>>>22),m=_+(p^(T|~g))+v[14]+2878612391&4294967295,_=T+(m<<15&4294967295|m>>>17),m=g+(T^(_|~p))+v[5]+4237533241&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~T))+v[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~_))+v[3]+2399980690&4294967295,T=p+(m<<10&4294967295|m>>>22),m=_+(p^(T|~g))+v[10]+4293915773&4294967295,_=T+(m<<15&4294967295|m>>>17),m=g+(T^(_|~p))+v[1]+2240044497&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~T))+v[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~_))+v[15]+4264355552&4294967295,T=p+(m<<10&4294967295|m>>>22),m=_+(p^(T|~g))+v[6]+2734768916&4294967295,_=T+(m<<15&4294967295|m>>>17),m=g+(T^(_|~p))+v[13]+1309151649&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~T))+v[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~_))+v[11]+3174756917&4294967295,T=p+(m<<10&4294967295|m>>>22),m=_+(p^(T|~g))+v[2]+718787259&4294967295,_=T+(m<<15&4294967295|m>>>17),m=g+(T^(_|~p))+v[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(_+(m<<21&4294967295|m>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+T&4294967295}r.prototype.v=function(y,p){p===void 0&&(p=y.length);const g=p-this.blockSize,v=this.C;let _=this.h,T=0;for(;T<p;){if(_==0)for(;T<=g;)i(this,y,T),T+=this.blockSize;if(typeof y=="string"){for(;T<p;)if(v[_++]=y.charCodeAt(T++),_==this.blockSize){i(this,v),_=0;break}}else for(;T<p;)if(v[_++]=y[T++],_==this.blockSize){i(this,v),_=0;break}}this.h=_,this.o+=p},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;p=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=p&255,p/=256;for(this.v(y),y=Array(16),p=0,g=0;g<4;++g)for(let v=0;v<32;v+=8)y[p++]=this.g[g]>>>v&255;return y};function o(y,p){var g=h;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=p(y)}function l(y,p){this.h=p;const g=[];let v=!0;for(let _=y.length-1;_>=0;_--){const T=y[_]|0;v&&T==p||(g[_]=T,v=!1)}this.g=g}var h={};function f(y){return-128<=y&&y<128?o(y,function(p){return new l([p|0],p<0?-1:0)}):new l([y|0],y<0?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return I;if(y<0)return V(d(-y));const p=[];let g=1;for(let v=0;y>=g;v++)p[v]=y/g|0,g*=4294967296;return new l(p,0)}function E(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return V(E(y.substring(1),p));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=d(Math.pow(p,8));let v=I;for(let T=0;T<y.length;T+=8){var _=Math.min(8,y.length-T);const m=parseInt(y.substring(T,T+_),p);_<8?(_=d(Math.pow(p,_)),v=v.j(_).add(d(m))):(v=v.j(g),v=v.add(d(m)))}return v}var I=f(0),b=f(1),P=f(16777216);n=l.prototype,n.m=function(){if(O(this))return-V(this).m();let y=0,p=1;for(let g=0;g<this.g.length;g++){const v=this.i(g);y+=(v>=0?v:4294967296+v)*p,p*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(k(this))return"0";if(O(this))return"-"+V(this).toString(y);const p=d(Math.pow(y,6));var g=this;let v="";for(;;){const _=K(g,p).g;g=z(g,_.j(p));let T=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=_,k(g))return T+v;for(;T.length<6;)T="0"+T;v=T+v}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function k(y){if(y.h!=0)return!1;for(let p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function O(y){return y.h==-1}n.l=function(y){return y=z(this,y),O(y)?-1:k(y)?0:1};function V(y){const p=y.g.length,g=[];for(let v=0;v<p;v++)g[v]=~y.g[v];return new l(g,~y.h).add(b)}n.abs=function(){return O(this)?V(this):this},n.add=function(y){const p=Math.max(this.g.length,y.g.length),g=[];let v=0;for(let _=0;_<=p;_++){let T=v+(this.i(_)&65535)+(y.i(_)&65535),m=(T>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);v=m>>>16,T&=65535,m&=65535,g[_]=m<<16|T}return new l(g,g[g.length-1]&-2147483648?-1:0)};function z(y,p){return y.add(V(p))}n.j=function(y){if(k(this)||k(y))return I;if(O(this))return O(y)?V(this).j(V(y)):V(V(this).j(y));if(O(y))return V(this.j(V(y)));if(this.l(P)<0&&y.l(P)<0)return d(this.m()*y.m());const p=this.g.length+y.g.length,g=[];for(var v=0;v<2*p;v++)g[v]=0;for(v=0;v<this.g.length;v++)for(let _=0;_<y.g.length;_++){const T=this.i(v)>>>16,m=this.i(v)&65535,vt=y.i(_)>>>16,ne=y.i(_)&65535;g[2*v+2*_]+=m*ne,j(g,2*v+2*_),g[2*v+2*_+1]+=T*ne,j(g,2*v+2*_+1),g[2*v+2*_+1]+=m*vt,j(g,2*v+2*_+1),g[2*v+2*_+2]+=T*vt,j(g,2*v+2*_+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new l(g,0)};function j(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function H(y,p){this.g=y,this.h=p}function K(y,p){if(k(p))throw Error("division by zero");if(k(y))return new H(I,I);if(O(y))return p=K(V(y),p),new H(V(p.g),V(p.h));if(O(p))return p=K(y,V(p)),new H(V(p.g),p.h);if(y.g.length>30){if(O(y)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var g=b,v=p;v.l(y)<=0;)g=N(g),v=N(v);var _=L(g,1),T=L(v,1);for(v=L(v,2),g=L(g,2);!k(v);){var m=T.add(v);m.l(y)<=0&&(_=_.add(g),T=m),v=L(v,1),g=L(g,1)}return p=z(y,_.j(p)),new H(_,p)}for(_=I;y.l(p)>=0;){for(g=Math.max(1,Math.floor(y.m()/p.m())),v=Math.ceil(Math.log(g)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),T=d(g),m=T.j(p);O(m)||m.l(y)>0;)g-=v,T=d(g),m=T.j(p);k(T)&&(T=b),_=_.add(T),y=z(y,m)}return new H(_,y)}n.B=function(y){return K(this,y).h},n.and=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let v=0;v<p;v++)g[v]=this.i(v)&y.i(v);return new l(g,this.h&y.h)},n.or=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let v=0;v<p;v++)g[v]=this.i(v)|y.i(v);return new l(g,this.h|y.h)},n.xor=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let v=0;v<p;v++)g[v]=this.i(v)^y.i(v);return new l(g,this.h^y.h)};function N(y){const p=y.g.length+1,g=[];for(let v=0;v<p;v++)g[v]=y.i(v)<<1|y.i(v-1)>>>31;return new l(g,y.h)}function L(y,p){const g=p>>5;p%=32;const v=y.g.length-g,_=[];for(let T=0;T<v;T++)_[T]=p>0?y.i(T+g)>>>p|y.i(T+g+1)<<32-p:y.i(T+g);return new l(_,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=E,_s=l}).apply(typeof ro<"u"?ro:typeof self<"u"?self:typeof window<"u"?window:{});var Ln=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ca,Je,ua,qn,ns,ha,fa,da;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ln=="object"&&Ln];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var u=0;u<s.length-1;u++){var w=s[u];if(!(w in c))break t;c=c[w]}s=s[s.length-1],u=c[s],a=a(u),a!=u&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var c=[],u;for(u in a)Object.prototype.hasOwnProperty.call(a,u)&&c.push([u,a[u]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function h(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function f(s,a,c){return s.call.apply(s.bind,arguments)}function d(s,a,c){return d=f,d.apply(null,arguments)}function E(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var u=c.slice();return u.push.apply(u,arguments),s.apply(this,u)}}function I(s,a){function c(){}c.prototype=a.prototype,s.Z=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Ob=function(u,w,A){for(var C=Array(arguments.length-2),U=2;U<arguments.length;U++)C[U-2]=arguments[U];return a.prototype[w].apply(u,C)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function P(s){const a=s.length;if(a>0){const c=Array(a);for(let u=0;u<a;u++)c[u]=s[u];return c}return[]}function k(s,a){for(let u=1;u<arguments.length;u++){const w=arguments[u];var c=typeof w;if(c=c!="object"?c:w?Array.isArray(w)?"array":c:"null",c=="array"||c=="object"&&typeof w.length=="number"){c=s.length||0;const A=w.length||0;s.length=c+A;for(let C=0;C<A;C++)s[c+C]=w[C]}else s.push(w)}}class O{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function V(s){l.setTimeout(()=>{throw s},0)}function z(){var s=y;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class j{constructor(){this.h=this.g=null}add(a,c){const u=H.get();u.set(a,c),this.h?this.h.next=u:this.g=u,this.h=u}}var H=new O(()=>new K,s=>s.reset());class K{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let N,L=!1,y=new j,p=()=>{const s=Promise.resolve(void 0);N=()=>{s.then(g)}};function g(){for(var s;s=z();){try{s.h.call(s.g)}catch(c){V(c)}var a=H;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}L=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var T=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return s})();function m(s){return/^[\s\xa0]*$/.test(s)}function vt(s,a){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}I(vt,_),vt.prototype.init=function(s,a){const c=this.type=s.type,u=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&vt.Z.h.call(this)},vt.prototype.h=function(){vt.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),_l=0;function yl(s,a,c,u,w){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!u,this.ha=w,this.key=++_l,this.da=this.fa=!1}function vn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Tn(s,a,c){for(const u in s)a.call(c,s[u],u,s)}function El(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function $s(s){const a={};for(const c in s)a[c]=s[c];return a}const qs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zs(s,a){let c,u;for(let w=1;w<arguments.length;w++){u=arguments[w];for(c in u)s[c]=u[c];for(let A=0;A<qs.length;A++)c=qs[A],Object.prototype.hasOwnProperty.call(u,c)&&(s[c]=u[c])}}function wn(s){this.src=s,this.g={},this.h=0}wn.prototype.add=function(s,a,c,u,w){const A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);const C=vr(s,a,u,w);return C>-1?(a=s[C],c||(a.fa=!1)):(a=new yl(a,this.src,A,!!u,w),a.fa=c,s.push(a)),a};function Er(s,a){const c=a.type;if(c in s.g){var u=s.g[c],w=Array.prototype.indexOf.call(u,a,void 0),A;(A=w>=0)&&Array.prototype.splice.call(u,w,1),A&&(vn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function vr(s,a,c,u){for(let w=0;w<s.length;++w){const A=s[w];if(!A.da&&A.listener==a&&A.capture==!!c&&A.ha==u)return w}return-1}var Tr="closure_lm_"+(Math.random()*1e6|0),wr={};function Hs(s,a,c,u,w){if(Array.isArray(a)){for(let A=0;A<a.length;A++)Hs(s,a[A],c,u,w);return null}return c=Ws(c),s&&s[ne]?s.J(a,c,h(u)?!!u.capture:!1,w):vl(s,a,c,!1,u,w)}function vl(s,a,c,u,w,A){if(!a)throw Error("Invalid event type");const C=h(w)?!!w.capture:!!w;let U=Ar(s);if(U||(s[Tr]=U=new wn(s)),c=U.add(a,c,u,C,A),c.proxy)return c;if(u=Tl(),c.proxy=u,u.src=s,u.listener=c,s.addEventListener)T||(w=C),w===void 0&&(w=!1),s.addEventListener(a.toString(),u,w);else if(s.attachEvent)s.attachEvent(Ks(a.toString()),u);else if(s.addListener&&s.removeListener)s.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Tl(){function s(c){return a.call(s.src,s.listener,c)}const a=wl;return s}function Gs(s,a,c,u,w){if(Array.isArray(a))for(var A=0;A<a.length;A++)Gs(s,a[A],c,u,w);else u=h(u)?!!u.capture:!!u,c=Ws(c),s&&s[ne]?(s=s.i,A=String(a).toString(),A in s.g&&(a=s.g[A],c=vr(a,c,u,w),c>-1&&(vn(a[c]),Array.prototype.splice.call(a,c,1),a.length==0&&(delete s.g[A],s.h--)))):s&&(s=Ar(s))&&(a=s.g[a.toString()],s=-1,a&&(s=vr(a,c,u,w)),(c=s>-1?a[s]:null)&&Ir(c))}function Ir(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[ne])Er(a.i,s);else{var c=s.type,u=s.proxy;a.removeEventListener?a.removeEventListener(c,u,s.capture):a.detachEvent?a.detachEvent(Ks(c),u):a.addListener&&a.removeListener&&a.removeListener(u),(c=Ar(a))?(Er(c,s),c.h==0&&(c.src=null,a[Tr]=null)):vn(s)}}}function Ks(s){return s in wr?wr[s]:wr[s]="on"+s}function wl(s,a){if(s.da)s=!0;else{a=new vt(a,this);const c=s.listener,u=s.ha||s.src;s.fa&&Ir(s),s=c.call(u,a)}return s}function Ar(s){return s=s[Tr],s instanceof wn?s:null}var br="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ws(s){return typeof s=="function"?s:(s[br]||(s[br]=function(a){return s.handleEvent(a)}),s[br])}function dt(){v.call(this),this.i=new wn(this),this.M=this,this.G=null}I(dt,v),dt.prototype[ne]=!0,dt.prototype.removeEventListener=function(s,a,c,u){Gs(this,s,a,c,u)};function yt(s,a){var c,u=s.G;if(u)for(c=[];u;u=u.G)c.push(u);if(s=s.M,u=a.type||a,typeof a=="string")a=new _(a,s);else if(a instanceof _)a.target=a.target||s;else{var w=a;a=new _(u,s),zs(a,w)}w=!0;let A,C;if(c)for(C=c.length-1;C>=0;C--)A=a.g=c[C],w=In(A,u,!0,a)&&w;if(A=a.g=s,w=In(A,u,!0,a)&&w,w=In(A,u,!1,a)&&w,c)for(C=0;C<c.length;C++)A=a.g=c[C],w=In(A,u,!1,a)&&w}dt.prototype.N=function(){if(dt.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const c=s.g[a];for(let u=0;u<c.length;u++)vn(c[u]);delete s.g[a],s.h--}}this.G=null},dt.prototype.J=function(s,a,c,u){return this.i.add(String(s),a,!1,c,u)},dt.prototype.K=function(s,a,c,u){return this.i.add(String(s),a,!0,c,u)};function In(s,a,c,u){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let w=!0;for(let A=0;A<a.length;++A){const C=a[A];if(C&&!C.da&&C.capture==c){const U=C.listener,it=C.ha||C.src;C.fa&&Er(s.i,C),w=U.call(it,u)!==!1&&w}}return w&&!u.defaultPrevented}function Il(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:l.setTimeout(s,a||0)}function Qs(s){s.g=Il(()=>{s.g=null,s.i&&(s.i=!1,Qs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Al extends v{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Qs(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ke(s){v.call(this),this.h=s,this.g={}}I(ke,v);var Xs=[];function Js(s){Tn(s.g,function(a,c){this.g.hasOwnProperty(c)&&Ir(a)},s),s.g={}}ke.prototype.N=function(){ke.Z.N.call(this),Js(this)},ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rr=l.JSON.stringify,bl=l.JSON.parse,Rl=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Ys(){}function Zs(){}var Oe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Sr(){_.call(this,"d")}I(Sr,_);function Cr(){_.call(this,"c")}I(Cr,_);var re={},ti=null;function An(){return ti=ti||new dt}re.Ia="serverreachability";function ei(s){_.call(this,re.Ia,s)}I(ei,_);function Me(s){const a=An();yt(a,new ei(a))}re.STAT_EVENT="statevent";function ni(s,a){_.call(this,re.STAT_EVENT,s),this.stat=a}I(ni,_);function Et(s){const a=An();yt(a,new ni(a,s))}re.Ja="timingevent";function ri(s,a){_.call(this,re.Ja,s),this.size=a}I(ri,_);function Le(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function Fe(){this.g=!0}Fe.prototype.ua=function(){this.g=!1};function Sl(s,a,c,u,w,A){s.info(function(){if(s.g)if(A){var C="",U=A.split("&");for(let W=0;W<U.length;W++){var it=U[W].split("=");if(it.length>1){const ot=it[0];it=it[1];const Ot=ot.split("_");C=Ot.length>=2&&Ot[1]=="type"?C+(ot+"="+it+"&"):C+(ot+"=redacted&")}}}else C=null;else C=A;return"XMLHTTP REQ ("+u+") [attempt "+w+"]: "+a+`
`+c+`
`+C})}function Cl(s,a,c,u,w,A,C){s.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+w+"]: "+a+`
`+c+`
`+A+" "+C})}function ye(s,a,c,u){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Vl(s,c)+(u?" "+u:"")})}function Pl(s,a){s.info(function(){return"TIMEOUT: "+a})}Fe.prototype.info=function(){};function Vl(s,a){if(!s.g)return a;if(!a)return null;try{const A=JSON.parse(a);if(A){for(s=0;s<A.length;s++)if(Array.isArray(A[s])){var c=A[s];if(!(c.length<2)){var u=c[1];if(Array.isArray(u)&&!(u.length<1)){var w=u[0];if(w!="noop"&&w!="stop"&&w!="close")for(let C=1;C<u.length;C++)u[C]=""}}}}return Rr(A)}catch{return a}}var bn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},si={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ii;function Pr(){}I(Pr,Ys),Pr.prototype.g=function(){return new XMLHttpRequest},ii=new Pr;function Ue(s){return encodeURIComponent(String(s))}function Dl(s){var a=1;s=s.split(":");const c=[];for(;a>0&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function qt(s,a,c,u){this.j=s,this.i=a,this.l=c,this.S=u||1,this.V=new ke(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new oi}function oi(){this.i=null,this.g="",this.h=!1}var ai={},Vr={};function Dr(s,a,c){s.M=1,s.A=Sn(kt(a)),s.u=c,s.R=!0,li(s,null)}function li(s,a){s.F=Date.now(),Rn(s),s.B=kt(s.A);var c=s.B,u=s.S;Array.isArray(u)||(u=[String(u)]),Ti(c.i,"t",u),s.C=0,c=s.j.L,s.h=new oi,s.g=Ui(s.j,c?a:null,!s.u),s.P>0&&(s.O=new Al(d(s.Y,s,s.g),s.P)),a=s.V,c=s.g,u=s.ba;var w="readystatechange";Array.isArray(w)||(w&&(Xs[0]=w.toString()),w=Xs);for(let A=0;A<w.length;A++){const C=Hs(c,w[A],u||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.J?$s(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),Me(),Sl(s.i,s.v,s.B,s.l,s.S,s.u)}qt.prototype.ba=function(s){s=s.target;const a=this.O;a&&Gt(s)==3?a.j():this.Y(s)},qt.prototype.Y=function(s){try{if(s==this.g)t:{const U=Gt(this.g),it=this.g.ya(),W=this.g.ca();if(!(U<3)&&(U!=3||this.g&&(this.h.h||this.g.la()||Ci(this.g)))){this.K||U!=4||it==7||(it==8||W<=0?Me(3):Me(2)),Nr(this);var a=this.g.ca();this.X=a;var c=Nl(this);if(this.o=a==200,Cl(this.i,this.v,this.B,this.l,this.S,U,a),this.o){if(this.U&&!this.L){e:{if(this.g){var u,w=this.g;if((u=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(u)){var A=u;break e}}A=null}if(s=A)ye(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,xr(this,s);else{this.o=!1,this.m=3,Et(12),se(this),Be(this);break t}}if(this.R){s=!0;let ot;for(;!this.K&&this.C<c.length;)if(ot=xl(this,c),ot==Vr){U==4&&(this.m=4,Et(14),s=!1),ye(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==ai){this.m=4,Et(15),ye(this.i,this.l,c,"[Invalid Chunk]"),s=!1;break}else ye(this.i,this.l,ot,null),xr(this,ot);if(ci(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||c.length!=0||this.h.h||(this.m=1,Et(16),s=!1),this.o=this.o&&s,!s)ye(this.i,this.l,c,"[Invalid Chunked Response]"),se(this),Be(this);else if(c.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),jr(C),C.P=!0,Et(11))}}else ye(this.i,this.l,c,null),xr(this,c);U==4&&se(this),this.o&&!this.K&&(U==4?Oi(this.j,this):(this.o=!1,Rn(this)))}else Kl(this.g),a==400&&c.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),se(this),Be(this)}}}catch{}finally{}};function Nl(s){if(!ci(s))return s.g.la();const a=Ci(s.g);if(a==="")return"";let c="";const u=a.length,w=Gt(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return se(s),Be(s),"";s.h.i=new l.TextDecoder}for(let A=0;A<u;A++)s.h.h=!0,c+=s.h.i.decode(a[A],{stream:!(w&&A==u-1)});return a.length=0,s.h.g+=c,s.C=0,s.h.g}function ci(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function xl(s,a){var c=s.C,u=a.indexOf(`
`,c);return u==-1?Vr:(c=Number(a.substring(c,u)),isNaN(c)?ai:(u+=1,u+c>a.length?Vr:(a=a.slice(u,u+c),s.C=u+c,a)))}qt.prototype.cancel=function(){this.K=!0,se(this)};function Rn(s){s.T=Date.now()+s.H,ui(s,s.H)}function ui(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=Le(d(s.aa,s),a)}function Nr(s){s.D&&(l.clearTimeout(s.D),s.D=null)}qt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(Pl(this.i,this.B),this.M!=2&&(Me(),Et(17)),se(this),this.m=2,Be(this)):ui(this,this.T-s)};function Be(s){s.j.I==0||s.K||Oi(s.j,s)}function se(s){Nr(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,Js(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function xr(s,a){try{var c=s.j;if(c.I!=0&&(c.g==s||kr(c.h,s))){if(!s.L&&kr(c.h,s)&&c.I==3){try{var u=c.Ba.g.parse(a)}catch{u=null}if(Array.isArray(u)&&u.length==3){var w=u;if(w[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<s.F)Nn(c),Vn(c);else break t;Br(c),Et(18)}}else c.xa=w[1],0<c.xa-c.K&&w[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=Le(d(c.Va,c),6e3));di(c.h)<=1&&c.ta&&(c.ta=void 0)}else oe(c,11)}else if((s.L||c.g==s)&&Nn(c),!m(a))for(w=c.Ba.g.parse(a),a=0;a<w.length;a++){let W=w[a];const ot=W[0];if(!(ot<=c.K))if(c.K=ot,W=W[1],c.I==2)if(W[0]=="c"){c.M=W[1],c.ba=W[2];const Ot=W[3];Ot!=null&&(c.ka=Ot,c.j.info("VER="+c.ka));const ae=W[4];ae!=null&&(c.za=ae,c.j.info("SVER="+c.za));const Kt=W[5];Kt!=null&&typeof Kt=="number"&&Kt>0&&(u=1.5*Kt,c.O=u,c.j.info("backChannelRequestTimeoutMs_="+u)),u=c;const Wt=s.g;if(Wt){const kn=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kn){var A=u.h;A.g||kn.indexOf("spdy")==-1&&kn.indexOf("quic")==-1&&kn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Or(A,A.h),A.h=null))}if(u.G){const $r=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;$r&&(u.wa=$r,X(u.J,u.G,$r))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-s.F,c.j.info("Handshake RTT: "+c.T+"ms")),u=c;var C=s;if(u.na=Fi(u,u.L?u.ba:null,u.W),C.L){pi(u.h,C);var U=C,it=u.O;it&&(U.H=it),U.D&&(Nr(U),Rn(U)),u.g=C}else xi(u);c.i.length>0&&Dn(c)}else W[0]!="stop"&&W[0]!="close"||oe(c,7);else c.I==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?oe(c,7):Ur(c):W[0]!="noop"&&c.l&&c.l.qa(W),c.A=0)}}Me(4)}catch{}}var kl=class{constructor(s,a){this.g=s,this.map=a}};function hi(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function di(s){return s.h?1:s.g?s.g.size:0}function kr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Or(s,a){s.g?s.g.add(a):s.h=a}function pi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}hi.prototype.cancel=function(){if(this.i=mi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function mi(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.G);return a}return P(s.i)}var gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ol(s,a){if(s){s=s.split("&");for(let c=0;c<s.length;c++){const u=s[c].indexOf("=");let w,A=null;u>=0?(w=s[c].substring(0,u),A=s[c].substring(u+1)):w=s[c],a(w,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function zt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof zt?(this.l=s.l,je(this,s.j),this.o=s.o,this.g=s.g,$e(this,s.u),this.h=s.h,Mr(this,wi(s.i)),this.m=s.m):s&&(a=String(s).match(gi))?(this.l=!1,je(this,a[1]||"",!0),this.o=qe(a[2]||""),this.g=qe(a[3]||"",!0),$e(this,a[4]),this.h=qe(a[5]||"",!0),Mr(this,a[6]||"",!0),this.m=qe(a[7]||"")):(this.l=!1,this.i=new He(null,this.l))}zt.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(ze(a,_i,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(ze(a,_i,!0),"@"),s.push(Ue(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&s.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(ze(c,c.charAt(0)=="/"?Fl:Ll,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",ze(c,Bl)),s.join("")},zt.prototype.resolve=function(s){const a=kt(this);let c=!!s.j;c?je(a,s.j):c=!!s.o,c?a.o=s.o:c=!!s.g,c?a.g=s.g:c=s.u!=null;var u=s.h;if(c)$e(a,s.u);else if(c=!!s.h){if(u.charAt(0)!="/")if(this.g&&!this.h)u="/"+u;else{var w=a.h.lastIndexOf("/");w!=-1&&(u=a.h.slice(0,w+1)+u)}if(w=u,w==".."||w==".")u="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){u=w.lastIndexOf("/",0)==0,w=w.split("/");const A=[];for(let C=0;C<w.length;){const U=w[C++];U=="."?u&&C==w.length&&A.push(""):U==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),u&&C==w.length&&A.push("")):(A.push(U),u=!0)}u=A.join("/")}else u=w}return c?a.h=u:c=s.i.toString()!=="",c?Mr(a,wi(s.i)):c=!!s.m,c&&(a.m=s.m),a};function kt(s){return new zt(s)}function je(s,a,c){s.j=c?qe(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function $e(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function Mr(s,a,c){a instanceof He?(s.i=a,jl(s.i,s.l)):(c||(a=ze(a,Ul)),s.i=new He(a,s.l))}function X(s,a,c){s.i.set(a,c)}function Sn(s){return X(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function qe(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function ze(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Ml),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ml(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var _i=/[#\/\?@]/g,Ll=/[#\?:]/g,Fl=/[#\?]/g,Ul=/[#\?@]/g,Bl=/#/g;function He(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function ie(s){s.g||(s.g=new Map,s.h=0,s.i&&Ol(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=He.prototype,n.add=function(s,a){ie(this),this.i=null,s=Ee(this,s);let c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function yi(s,a){ie(s),a=Ee(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Ei(s,a){return ie(s),a=Ee(s,a),s.g.has(a)}n.forEach=function(s,a){ie(this),this.g.forEach(function(c,u){c.forEach(function(w){s.call(a,w,u,this)},this)},this)};function vi(s,a){ie(s);let c=[];if(typeof a=="string")Ei(s,a)&&(c=c.concat(s.g.get(Ee(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)c=c.concat(s[a]);return c}n.set=function(s,a){return ie(this),this.i=null,s=Ee(this,s),Ei(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=vi(this,s),s.length>0?String(s[0]):a):a};function Ti(s,a,c){yi(s,a),c.length>0&&(s.i=null,s.g.set(Ee(s,a),P(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let u=0;u<a.length;u++){var c=a[u];const w=Ue(c);c=vi(this,c);for(let A=0;A<c.length;A++){let C=w;c[A]!==""&&(C+="="+Ue(c[A])),s.push(C)}}return this.i=s.join("&")};function wi(s){const a=new He;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function Ee(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function jl(s,a){a&&!s.j&&(ie(s),s.i=null,s.g.forEach(function(c,u){const w=u.toLowerCase();u!=w&&(yi(this,u),Ti(this,w,c))},s)),s.j=a}function $l(s,a){const c=new Fe;if(l.Image){const u=new Image;u.onload=E(Ht,c,"TestLoadImage: loaded",!0,a,u),u.onerror=E(Ht,c,"TestLoadImage: error",!1,a,u),u.onabort=E(Ht,c,"TestLoadImage: abort",!1,a,u),u.ontimeout=E(Ht,c,"TestLoadImage: timeout",!1,a,u),l.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=s}else a(!1)}function ql(s,a){const c=new Fe,u=new AbortController,w=setTimeout(()=>{u.abort(),Ht(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:u.signal}).then(A=>{clearTimeout(w),A.ok?Ht(c,"TestPingServer: ok",!0,a):Ht(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(w),Ht(c,"TestPingServer: error",!1,a)})}function Ht(s,a,c,u,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),u(c)}catch{}}function zl(){this.g=new Rl}function Lr(s){this.i=s.Sb||null,this.h=s.ab||!1}I(Lr,Ys),Lr.prototype.g=function(){return new Cn(this.i,this.h)};function Cn(s,a){dt.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Cn,dt),n=Cn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,Ke(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||l).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ge(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ke(this)),this.g&&(this.readyState=3,Ke(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ii(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ii(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Ge(this):Ke(this),this.readyState==3&&Ii(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Ge(this))},n.Na=function(s){this.g&&(this.response=s,Ge(this))},n.ga=function(){this.g&&Ge(this)};function Ge(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Ke(s)}n.setRequestHeader=function(s,a){this.A.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function Ke(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ai(s){let a="";return Tn(s,function(c,u){a+=u,a+=":",a+=c,a+=`\r
`}),a}function Fr(s,a,c){t:{for(u in c){var u=!1;break t}u=!0}u||(c=Ai(c),typeof s=="string"?c!=null&&Ue(c):X(s,a,c))}function et(s){dt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(et,dt);var Hl=/^https?$/i,Gl=["POST","PUT"];n=et.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,a,c,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ii.g(),this.g.onreadystatechange=b(d(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){bi(this,A);return}if(s=c||"",c=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var w in u)c.set(w,u[w]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const A of u.keys())c.set(A,u.get(A));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),w=l.FormData&&s instanceof l.FormData,!(Array.prototype.indexOf.call(Gl,a,void 0)>=0)||u||w||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of c)this.g.setRequestHeader(A,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(A){bi(this,A)}};function bi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,Ri(s),Pn(s)}function Ri(s){s.A||(s.A=!0,yt(s,"complete"),yt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,yt(this,"complete"),yt(this,"abort"),Pn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pn(this,!0)),et.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Si(this):this.Xa())},n.Xa=function(){Si(this)};function Si(s){if(s.h&&typeof o<"u"){if(s.v&&Gt(s)==4)setTimeout(s.Ca.bind(s),0);else if(yt(s,"readystatechange"),Gt(s)==4){s.h=!1;try{const A=s.ca();t:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var u;if(u=A===0){let C=String(s.D).match(gi)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),u=!Hl.test(C?C.toLowerCase():"")}c=u}if(c)yt(s,"complete"),yt(s,"success");else{s.o=6;try{var w=Gt(s)>2?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.ca()+"]",Ri(s)}}finally{Pn(s)}}}}function Pn(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const c=s.g;s.g=null,a||yt(s,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Gt(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Gt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),bl(a)}};function Ci(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Kl(s){const a={};s=(s.g&&Gt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<s.length;u++){if(m(s[u]))continue;var c=Dl(s[u]);const w=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=a[w]||[];a[w]=A,A.push(c)}El(a,function(u){return u.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function We(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Pi(s){this.za=0,this.i=[],this.j=new Fe,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=We("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=We("baseRetryDelayMs",5e3,s),this.Za=We("retryDelaySeedMs",1e4,s),this.Ta=We("forwardChannelMaxRetries",2,s),this.va=We("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new hi(s&&s.concurrentRequestLimit),this.Ba=new zl,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Pi.prototype,n.ka=8,n.I=1,n.connect=function(s,a,c,u){Et(0),this.W=s,this.H=a||{},c&&u!==void 0&&(this.H.OSID=c,this.H.OAID=u),this.F=this.X,this.J=Fi(this,null,this.W),Dn(this)};function Ur(s){if(Vi(s),s.I==3){var a=s.V++,c=kt(s.J);if(X(c,"SID",s.M),X(c,"RID",a),X(c,"TYPE","terminate"),Qe(s,c),a=new qt(s,s.j,a),a.M=2,a.A=Sn(kt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.A.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.A,c=!0),c||(a.g=Ui(a.j,null),a.g.ea(a.A)),a.F=Date.now(),Rn(a)}Li(s)}function Vn(s){s.g&&(jr(s),s.g.cancel(),s.g=null)}function Vi(s){Vn(s),s.v&&(l.clearTimeout(s.v),s.v=null),Nn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&l.clearTimeout(s.m),s.m=null)}function Dn(s){if(!fi(s.h)&&!s.m){s.m=!0;var a=s.Ea;N||p(),L||(N(),L=!0),y.add(a,s),s.D=0}}function Wl(s,a){return di(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=Le(d(s.Ea,s,a),Mi(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const w=new qt(this,this.j,s);let A=this.o;if(this.U&&(A?(A=$s(A),zs(A,this.U)):A=this.U),this.u!==null||this.R||(w.J=A,A=null),this.S)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var u=this.i[c];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break e}u=void 0}if(u===void 0)break;if(a+=u,a>4096){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Ni(this,w,a),c=kt(this.J),X(c,"RID",s),X(c,"CVER",22),this.G&&X(c,"X-HTTP-Session-Id",this.G),Qe(this,c),A&&(this.R?a="headers="+Ue(Ai(A))+"&"+a:this.u&&Fr(c,this.u,A)),Or(this.h,w),this.Ra&&X(c,"TYPE","init"),this.S?(X(c,"$req",a),X(c,"SID","null"),w.U=!0,Dr(w,c,null)):Dr(w,c,a),this.I=2}}else this.I==3&&(s?Di(this,s):this.i.length==0||fi(this.h)||Di(this))};function Di(s,a){var c;a?c=a.l:c=s.V++;const u=kt(s.J);X(u,"SID",s.M),X(u,"RID",c),X(u,"AID",s.K),Qe(s,u),s.u&&s.o&&Fr(u,s.u,s.o),c=new qt(s,s.j,c,s.D+1),s.u===null&&(c.J=s.o),a&&(s.i=a.G.concat(s.i)),a=Ni(s,c,1e3),c.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Or(s.h,c),Dr(c,u,a)}function Qe(s,a){s.H&&Tn(s.H,function(c,u){X(a,u,c)}),s.l&&Tn({},function(c,u){X(a,u,c)})}function Ni(s,a,c){c=Math.min(s.i.length,c);const u=s.l?d(s.l.Ka,s.l,s):null;t:{var w=s.i;let U=-1;for(;;){const it=["count="+c];U==-1?c>0?(U=w[0].g,it.push("ofs="+U)):U=0:it.push("ofs="+U);let W=!0;for(let ot=0;ot<c;ot++){var A=w[ot].g;const Ot=w[ot].map;if(A-=U,A<0)U=Math.max(0,w[ot].g-100),W=!1;else try{A="req"+A+"_"||"";try{var C=Ot instanceof Map?Ot:Object.entries(Ot);for(const[ae,Kt]of C){let Wt=Kt;h(Kt)&&(Wt=Rr(Kt)),it.push(A+ae+"="+encodeURIComponent(Wt))}}catch(ae){throw it.push(A+"type="+encodeURIComponent("_badmap")),ae}}catch{u&&u(Ot)}}if(W){C=it.join("&");break t}}C=void 0}return s=s.i.splice(0,c),a.G=s,C}function xi(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;N||p(),L||(N(),L=!0),y.add(a,s),s.A=0}}function Br(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=Le(d(s.Da,s),Mi(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,ki(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=Le(d(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),Vn(this),ki(this))};function jr(s){s.B!=null&&(l.clearTimeout(s.B),s.B=null)}function ki(s){s.g=new qt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=kt(s.na);X(a,"RID","rpc"),X(a,"SID",s.M),X(a,"AID",s.K),X(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&X(a,"TO",s.ia),X(a,"TYPE","xmlhttp"),Qe(s,a),s.u&&s.o&&Fr(a,s.u,s.o),s.O&&(s.g.H=s.O);var c=s.g;s=s.ba,c.M=1,c.A=Sn(kt(a)),c.u=null,c.R=!0,li(c,s)}n.Va=function(){this.C!=null&&(this.C=null,Vn(this),Br(this),Et(19))};function Nn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Oi(s,a){var c=null;if(s.g==a){Nn(s),jr(s),s.g=null;var u=2}else if(kr(s.h,a))c=a.G,pi(s.h,a),u=1;else return;if(s.I!=0){if(a.o)if(u==1){c=a.u?a.u.length:0,a=Date.now()-a.F;var w=s.D;u=An(),yt(u,new ri(u,c)),Dn(s)}else xi(s);else if(w=a.m,w==3||w==0&&a.X>0||!(u==1&&Wl(s,a)||u==2&&Br(s)))switch(c&&c.length>0&&(a=s.h,a.i=a.i.concat(c)),w){case 1:oe(s,5);break;case 4:oe(s,10);break;case 3:oe(s,6);break;default:oe(s,2)}}}function Mi(s,a){let c=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(c*=2),c*a}function oe(s,a){if(s.j.info("Error code "+a),a==2){var c=d(s.bb,s),u=s.Ua;const w=!u;u=new zt(u||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||je(u,"https"),Sn(u),w?$l(u.toString(),c):ql(u.toString(),c)}else Et(2);s.I=0,s.l&&s.l.pa(a),Li(s),Vi(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Li(s){if(s.I=0,s.ja=[],s.l){const a=mi(s.h);(a.length!=0||s.i.length!=0)&&(k(s.ja,a),k(s.ja,s.i),s.h.i.length=0,P(s.i),s.i.length=0),s.l.oa()}}function Fi(s,a,c){var u=c instanceof zt?kt(c):new zt(c);if(u.g!="")a&&(u.g=a+"."+u.g),$e(u,u.u);else{var w=l.location;u=w.protocol,a=a?a+"."+w.hostname:w.hostname,w=+w.port;const A=new zt(null);u&&je(A,u),a&&(A.g=a),w&&$e(A,w),c&&(A.h=c),u=A}return c=s.G,a=s.wa,c&&a&&X(u,c,a),X(u,"VER",s.ka),Qe(s,u),u}function Ui(s,a,c){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new et(new Lr({ab:c})):new et(s.ma),a.Fa(s.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bi(){}n=Bi.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function xn(){}xn.prototype.g=function(s,a){return new It(s,a)};function It(s,a){dt.call(this),this.g=new Pi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!m(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!m(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ve(this)}I(It,dt),It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Ur(this.g)},It.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.v&&(c={},c.__data__=Rr(s),s=c);a.i.push(new kl(a.Ya++,s)),a.I==3&&Dn(a)},It.prototype.N=function(){this.g.l=null,delete this.j,Ur(this.g),delete this.g,It.Z.N.call(this)};function ji(s){Sr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}I(ji,Sr);function $i(){Cr.call(this),this.status=1}I($i,Cr);function ve(s){this.g=s}I(ve,Bi),ve.prototype.ra=function(){yt(this.g,"a")},ve.prototype.qa=function(s){yt(this.g,new ji(s))},ve.prototype.pa=function(s){yt(this.g,new $i)},ve.prototype.oa=function(){yt(this.g,"b")},xn.prototype.createWebChannel=xn.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,da=function(){return new xn},fa=function(){return An()},ha=re,ns={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},bn.NO_ERROR=0,bn.TIMEOUT=8,bn.HTTP_ERROR=6,qn=bn,si.COMPLETE="complete",ua=si,Zs.EventType=Oe,Oe.OPEN="a",Oe.CLOSE="b",Oe.ERROR="c",Oe.MESSAGE="d",dt.prototype.listen=dt.prototype.J,Je=Zs,et.prototype.listenOnce=et.prototype.K,et.prototype.getLastError=et.prototype.Ha,et.prototype.getLastErrorCode=et.prototype.ya,et.prototype.getStatus=et.prototype.ca,et.prototype.getResponseJson=et.prototype.La,et.prototype.getResponseText=et.prototype.la,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Fa,ca=et}).apply(typeof Ln<"u"?Ln:typeof self<"u"?self:typeof window<"u"?window:{});const so="@firebase/firestore",io="4.9.2";/**
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
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let Ne="12.3.0";/**
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
 */const fe=new ra("@firebase/firestore");function Te(){return fe.logLevel}function D(n,...t){if(fe.logLevel<=q.DEBUG){const e=t.map(ys);fe.debug(`Firestore (${Ne}): ${n}`,...e)}}function de(n,...t){if(fe.logLevel<=q.ERROR){const e=t.map(ys);fe.error(`Firestore (${Ne}): ${n}`,...e)}}function ur(n,...t){if(fe.logLevel<=q.WARN){const e=t.map(ys);fe.warn(`Firestore (${Ne}): ${n}`,...e)}}function ys(n){if(typeof n=="string")return n;try{/**
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
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function B(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,pa(n,r,e)}function pa(n,t,e){let r=`FIRESTORE (${Ne}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw de(r),new Error(r)}function nt(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||pa(t,i,r)}function Q(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends De{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ue{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class ma{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ju{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(mt.UNAUTHENTICATED)))}shutdown(){}}class Yu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Zu{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){nt(this.o===void 0,42304);let r=this.i;const i=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new ue;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ue,t.enqueueRetryable((()=>i(this.currentUser)))};const l=()=>{const f=o;t.enqueueRetryable((async()=>{await f.promise,await i(this.currentUser)}))},h=f=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((f=>h(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ue)}}),0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string",31837,{l:r}),new ma(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string",2055,{h:t}),new mt(t)}}class th{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eh{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new th(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(mt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class oo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ku(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){nt(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new oo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(nt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new oo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Es{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=rh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function G(n,t){return n<t?-1:n>t?1:0}function rs(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return Kr(i)===Kr(o)?G(i,o):Kr(i)?1:-1}return G(n.length,t.length)}const sh=55296,ih=57343;function Kr(n){const t=n.charCodeAt(0);return t>=sh&&t<=ih}function Re(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
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
 */const ao="__name__";class Mt{constructor(t,e,r){e===void 0?e=0:e>t.length&&B(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&B(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Mt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Mt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Mt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return G(t.length,e.length)}static compareSegments(t,e){const r=Mt.isNumericId(t),i=Mt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Mt.extractNumericId(t).compare(Mt.extractNumericId(e)):rs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return _s.fromString(t.substring(4,t.length-2))}}class tt extends Mt{construct(t,e,r){return new tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new tt(e)}static emptyPath(){return new tt([])}}const oh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Mt{construct(t,e,r){return new ht(t,e,r)}static isValidIdentifier(t){return oh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ao}static keyField(){return new ht([ao])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new x(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new x(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,i+=2}else h==="`"?(l=!l,i++):h!=="."||l?(r+=h,i++):(o(),i++)}if(o(),l)throw new x(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(e)}static emptyPath(){return new ht([])}}/**
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
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(tt.fromString(t))}static fromName(t){return new F(tt.fromString(t).popFirst(5))}static empty(){return new F(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new tt(t.slice()))}}/**
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
 */function ga(n,t,e){if(!e)throw new x(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function ah(n,t,e,r){if(t===!0&&r===!0)throw new x(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function lo(n){if(!F.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function co(n){if(F.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _a(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function vs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function ya(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=vs(n);throw new x(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function st(n,t){const e={typeString:n};return t&&(e.value=t),e}function pn(n,t){if(!_a(n))throw new x(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const l=n[r];if(i&&typeof l!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&l!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new x(S.INVALID_ARGUMENT,e);return!0}/**
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
 */const uo=-62135596800,ho=1e6;class Z{static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ho);return new Z(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<uo)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ho}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(pn(t,Z._jsonSchema))return new Z(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-uo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Z._jsonSchemaVersion="firestore/timestamp/1.0",Z._jsonSchema={type:st("string",Z._jsonSchemaVersion),seconds:st("number"),nanoseconds:st("number")};/**
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
 */class Y{static fromTimestamp(t){return new Y(t)}static min(){return new Y(new Z(0,0))}static max(){return new Y(new Z(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const cn=-1;function lh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Z(e+1,0):new Z(e,r));return new Yt(i,F.empty(),t)}function ch(n){return new Yt(n.readTime,n.key,cn)}class Yt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Yt(Y.min(),F.empty(),cn)}static max(){return new Yt(Y.max(),F.empty(),cn)}}function uh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:G(n.largestBatchId,t.largestBatchId))}/**
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
 */const hh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function Ts(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==hh)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):R.reject(e)}static resolve(t){return new R(((e,r)=>{e(t)}))}static reject(t){return new R(((e,r)=>{r(t)}))}static waitFor(t){return new R(((e,r)=>{let i=0,o=0,l=!1;t.forEach((h=>{++i,h.next((()=>{++o,l&&o===i&&e()}),(f=>r(f)))})),l=!0,o===i&&e()}))}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next((i=>i?R.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new R(((r,i)=>{const o=t.length,l=new Array(o);let h=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next((E=>{l[d]=E,++h,h===o&&r(l)}),(E=>i(E)))}}))}static doWhile(t,e){return new R(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function dh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function mn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ws{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}ws.ce=-1;/**
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
 */const Is=-1;function As(n){return n==null}function Zn(n){return n===0&&1/n==-1/0}function ph(n){return typeof n=="number"&&Number.isInteger(n)&&!Zn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ea="";function mh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=fo(t)),t=gh(n.get(e),t);return fo(t)}function gh(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Ea:e+="";break;default:e+=o}}return e}function fo(n){return n+Ea+""}/**
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
 */function po(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function xe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function va(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class wt{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new wt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new wt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fn(this.root,t,this.comparator,!0)}}class Fn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ct(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw B(27949);return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(t){this.comparator=t,this.data=new wt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new mo(this.data.getIterator())}getIteratorFrom(t){return new mo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}}class mo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xt{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new xt([])}unionWith(t){let e=new ft(ht.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Re(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class _h extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new _h("Invalid base64 string: "+o):o}})(t);return new Lt(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o})(t);return new Lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const yh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pe(n){if(nt(!!n,39018),typeof n=="string"){let t=0;const e=yh.exec(n);if(nt(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Se(n){return typeof n=="string"?Lt.fromBase64String(n):Lt.fromUint8Array(n)}/**
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
 */const Ta="server_timestamp",wa="__type__",Ia="__previous_value__",Aa="__local_write_time__";function bs(n){return(n?.mapValue?.fields||{})[wa]?.stringValue===Ta}function Rs(n){const t=n.mapValue.fields[Ia];return bs(t)?Rs(t):t}function tr(n){const t=pe(n.mapValue.fields[Aa].timestampValue);return new Z(t.seconds,t.nanos)}/**
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
 */class Eh{constructor(t,e,r,i,o,l,h,f,d,E){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=d,this.isUsingEmulator=E}}const er="(default)";class nr{constructor(t,e){this.projectId=t,this.database=e||er}static empty(){return new nr("","")}get isDefaultDatabase(){return this.database===er}isEqual(t){return t instanceof nr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ba="__type__",vh="__max__",Un={mapValue:{}},Ra="__vector__",ss="value";function me(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bs(n)?4:wh(n)?9007199254740991:Th(n)?10:11:B(28295,{value:n})}function Ft(n,t){if(n===t)return!0;const e=me(n);if(e!==me(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return tr(n).isEqual(tr(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=pe(i.timestampValue),h=pe(o.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return Se(i.bytesValue).isEqual(Se(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return ut(i.geoPointValue.latitude)===ut(o.geoPointValue.latitude)&&ut(i.geoPointValue.longitude)===ut(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return ut(i.integerValue)===ut(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=ut(i.doubleValue),h=ut(o.doubleValue);return l===h?Zn(l)===Zn(h):isNaN(l)&&isNaN(h)}return!1})(n,t);case 9:return Re(n.arrayValue.values||[],t.arrayValue.values||[],Ft);case 10:case 11:return(function(i,o){const l=i.mapValue.fields||{},h=o.mapValue.fields||{};if(po(l)!==po(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!Ft(l[f],h[f])))return!1;return!0})(n,t);default:return B(52216,{left:n})}}function un(n,t){return(n.values||[]).find((e=>Ft(e,t)))!==void 0}function Ce(n,t){if(n===t)return 0;const e=me(n),r=me(t);if(e!==r)return G(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,t.booleanValue);case 2:return(function(o,l){const h=ut(o.integerValue||o.doubleValue),f=ut(l.integerValue||l.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1})(n,t);case 3:return go(n.timestampValue,t.timestampValue);case 4:return go(tr(n),tr(t));case 5:return rs(n.stringValue,t.stringValue);case 6:return(function(o,l){const h=Se(o),f=Se(l);return h.compareTo(f)})(n.bytesValue,t.bytesValue);case 7:return(function(o,l){const h=o.split("/"),f=l.split("/");for(let d=0;d<h.length&&d<f.length;d++){const E=G(h[d],f[d]);if(E!==0)return E}return G(h.length,f.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,l){const h=G(ut(o.latitude),ut(l.latitude));return h!==0?h:G(ut(o.longitude),ut(l.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return _o(n.arrayValue,t.arrayValue);case 10:return(function(o,l){const h=o.fields||{},f=l.fields||{},d=h[ss]?.arrayValue,E=f[ss]?.arrayValue,I=G(d?.values?.length||0,E?.values?.length||0);return I!==0?I:_o(d,E)})(n.mapValue,t.mapValue);case 11:return(function(o,l){if(o===Un.mapValue&&l===Un.mapValue)return 0;if(o===Un.mapValue)return 1;if(l===Un.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),d=l.fields||{},E=Object.keys(d);f.sort(),E.sort();for(let I=0;I<f.length&&I<E.length;++I){const b=rs(f[I],E[I]);if(b!==0)return b;const P=Ce(h[f[I]],d[E[I]]);if(P!==0)return P}return G(f.length,E.length)})(n.mapValue,t.mapValue);default:throw B(23264,{he:e})}}function go(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return G(n,t);const e=pe(n),r=pe(t),i=G(e.seconds,r.seconds);return i!==0?i:G(e.nanos,r.nanos)}function _o(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ce(e[i],r[i]);if(o)return o}return G(e.length,r.length)}function Pe(n){return is(n)}function is(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=pe(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Se(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return F.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=is(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${is(e.fields[l])}`;return i+"}"})(n.mapValue):B(61005,{value:n})}function zn(n){switch(me(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Rs(n);return t?16+zn(t):16;case 5:return 2*n.stringValue.length;case 6:return Se(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+zn(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return xe(r.fields,((o,l)=>{i+=o.length+zn(l)})),i})(n.mapValue);default:throw B(13486,{value:n})}}function os(n){return!!n&&"integerValue"in n}function Ss(n){return!!n&&"arrayValue"in n}function Hn(n){return!!n&&"mapValue"in n}function Th(n){return(n?.mapValue?.fields||{})[ba]?.stringValue===Ra}function tn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return xe(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=tn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=tn(n.arrayValue.values[e]);return t}return{...n}}function wh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===vh}/**
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
 */class Dt{constructor(t){this.value=t}static empty(){return new Dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Hn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=tn(e)}setAll(t){let e=ht.emptyPath(),r={},i=[];t.forEach(((l,h)=>{if(!e.isImmediateParentOf(h)){const f=this.getFieldsMap(e);this.applyChanges(f,r,i),r={},i=[],e=h.popLast()}l?r[h.lastSegment()]=tn(l):i.push(h.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Hn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ft(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Hn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){xe(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new Dt(tn(this.value))}}function Sa(n){const t=[];return xe(n.fields,((e,r)=>{const i=new ht([e]);if(Hn(r)){const o=Sa(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)})),new xt(t)}/**
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
 */class Ct{constructor(t,e,r,i,o,l,h){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=h}static newInvalidDocument(t){return new Ct(t,0,Y.min(),Y.min(),Y.min(),Dt.empty(),0)}static newFoundDocument(t,e,r,i){return new Ct(t,1,e,Y.min(),r,i,0)}static newNoDocument(t,e){return new Ct(t,2,e,Y.min(),Y.min(),Dt.empty(),0)}static newUnknownDocument(t,e){return new Ct(t,3,e,Y.min(),Y.min(),Dt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rr{constructor(t,e){this.position=t,this.inclusive=e}}function yo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=F.comparator(F.fromName(l.referenceValue),e.key):r=Ce(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Eo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ft(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class sr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ih(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ca{}class lt extends Ca{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new bh(t,e,r):e==="array-contains"?new Ch(t,r):e==="in"?new Ph(t,r):e==="not-in"?new Vh(t,r):e==="array-contains-any"?new Dh(t,r):new lt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Rh(t,r):new Sh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ce(e,this.value)):e!==null&&me(this.value)===me(e)&&this.matchesComparison(Ce(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends Ca{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Zt(t,e)}matches(t){return Pa(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Pa(n){return n.op==="and"}function Va(n){return Ah(n)&&Pa(n)}function Ah(n){for(const t of n.filters)if(t instanceof Zt)return!1;return!0}function as(n){if(n instanceof lt)return n.field.canonicalString()+n.op.toString()+Pe(n.value);if(Va(n))return n.filters.map((t=>as(t))).join(",");{const t=n.filters.map((e=>as(e))).join(",");return`${n.op}(${t})`}}function Da(n,t){return n instanceof lt?(function(r,i){return i instanceof lt&&r.op===i.op&&r.field.isEqual(i.field)&&Ft(r.value,i.value)})(n,t):n instanceof Zt?(function(r,i){return i instanceof Zt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,l,h)=>o&&Da(l,i.filters[h])),!0):!1})(n,t):void B(19439)}function Na(n){return n instanceof lt?(function(e){return`${e.field.canonicalString()} ${e.op} ${Pe(e.value)}`})(n):n instanceof Zt?(function(e){return e.op.toString()+" {"+e.getFilters().map(Na).join(" ,")+"}"})(n):"Filter"}class bh extends lt{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class Rh extends lt{constructor(t,e){super(t,"in",e),this.keys=xa("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Sh extends lt{constructor(t,e){super(t,"not-in",e),this.keys=xa("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function xa(n,t){return(t.arrayValue?.values||[]).map((e=>F.fromName(e.referenceValue)))}class Ch extends lt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ss(e)&&un(e.arrayValue,this.value)}}class Ph extends lt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&un(this.value.arrayValue,e)}}class Vh extends lt{constructor(t,e){super(t,"not-in",e)}matches(t){if(un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!un(this.value.arrayValue,e)}}class Dh extends lt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ss(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>un(this.value.arrayValue,r)))}}/**
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
 */class Nh{constructor(t,e=null,r=[],i=[],o=null,l=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=h,this.Te=null}}function vo(n,t=null,e=[],r=[],i=null,o=null,l=null){return new Nh(n,t,e,r,i,o,l)}function Cs(n){const t=Q(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>as(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),As(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Pe(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Pe(r))).join(",")),t.Te=e}return t.Te}function Ps(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ih(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Da(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Eo(n.startAt,t.startAt)&&Eo(n.endAt,t.endAt)}/**
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
 */class hr{constructor(t,e=null,r=[],i=[],o=null,l="F",h=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=h,this.endAt=f,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function xh(n,t,e,r,i,o,l,h){return new hr(n,t,e,r,i,o,l,h)}function kh(n){return new hr(n)}function To(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Oh(n){return n.collectionGroup!==null}function en(n){const t=Q(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new ft(ht.comparator);return l.filters.forEach((f=>{f.getFlattenedFilters().forEach((d=>{d.isInequality()&&(h=h.add(d.field))}))})),h})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new sr(o,r))})),e.has(ht.keyField().canonicalString())||t.Ie.push(new sr(ht.keyField(),r))}return t.Ie}function he(n){const t=Q(n);return t.Ee||(t.Ee=Mh(t,en(n))),t.Ee}function Mh(n,t){if(n.limitType==="F")return vo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new sr(i.field,o)}));const e=n.endAt?new rr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new rr(n.startAt.position,n.startAt.inclusive):null;return vo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ls(n,t,e){return new hr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ka(n,t){return Ps(he(n),he(t))&&n.limitType===t.limitType}function Oa(n){return`${Cs(he(n))}|lt:${n.limitType}`}function Xe(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>Na(i))).join(", ")}]`),As(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(l){return`${l.field.canonicalString()} (${l.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>Pe(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>Pe(i))).join(",")),`Target(${r})`})(he(n))}; limitType=${n.limitType})`}function Vs(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of en(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(l,h,f){const d=yo(l,h,f);return l.inclusive?d<=0:d<0})(r.startAt,en(r),i)||r.endAt&&!(function(l,h,f){const d=yo(l,h,f);return l.inclusive?d>=0:d>0})(r.endAt,en(r),i))})(n,t)}function Lh(n){return(t,e)=>{let r=!1;for(const i of en(n)){const o=Fh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Fh(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):(function(o,l,h){const f=l.data.field(o),d=h.data.field(o);return f!==null&&d!==null?Ce(f,d):B(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
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
 */class ge{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){xe(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return va(this.inner)}size(){return this.innerSize}}/**
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
 */const Uh=new wt(F.comparator);function ir(){return Uh}const Ma=new wt(F.comparator);function Bn(...n){let t=Ma;for(const e of n)t=t.insert(e.key,e);return t}function La(n){let t=Ma;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function ce(){return nn()}function Fa(){return nn()}function nn(){return new ge((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Bh=new wt(F.comparator),jh=new ft(F.comparator);function gt(...n){let t=jh;for(const e of n)t=t.add(e);return t}const $h=new ft(G);function qh(){return $h}/**
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
 */function Ds(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zn(t)?"-0":t}}function Ua(n){return{integerValue:""+n}}function zh(n,t){return ph(t)?Ua(t):Ds(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class fr{constructor(){this._=void 0}}function Hh(n,t,e){return n instanceof hn?(function(i,o){const l={fields:{[wa]:{stringValue:Ta},[Aa]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&bs(o)&&(o=Rs(o)),o&&(l.fields[Ia]=o),{mapValue:l}})(e,t):n instanceof fn?ja(n,t):n instanceof dn?$a(n,t):(function(i,o){const l=Ba(i,o),h=wo(l)+wo(i.Ae);return os(l)&&os(i.Ae)?Ua(h):Ds(i.serializer,h)})(n,t)}function Gh(n,t,e){return n instanceof fn?ja(n,t):n instanceof dn?$a(n,t):e}function Ba(n,t){return n instanceof or?(function(r){return os(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class hn extends fr{}class fn extends fr{constructor(t){super(),this.elements=t}}function ja(n,t){const e=qa(t);for(const r of n.elements)e.some((i=>Ft(i,r)))||e.push(r);return{arrayValue:{values:e}}}class dn extends fr{constructor(t){super(),this.elements=t}}function $a(n,t){let e=qa(t);for(const r of n.elements)e=e.filter((i=>!Ft(i,r)));return{arrayValue:{values:e}}}class or extends fr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function wo(n){return ut(n.integerValue||n.doubleValue)}function qa(n){return Ss(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Kh{constructor(t,e){this.field=t,this.transform=e}}function Wh(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof fn&&i instanceof fn||r instanceof dn&&i instanceof dn?Re(r.elements,i.elements,Ft):r instanceof or&&i instanceof or?Ft(r.Ae,i.Ae):r instanceof hn&&i instanceof hn})(n.transform,t.transform)}class Qh{constructor(t,e){this.version=t,this.transformResults=e}}class Ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ut}static exists(t){return new Ut(void 0,t)}static updateTime(t){return new Ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class dr{}function za(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ga(n.key,Ut.none()):new gn(n.key,n.data,Ut.none());{const e=n.data,r=Dt.empty();let i=new ft(ht.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new _e(n.key,r,new xt(i.toArray()),Ut.none())}}function Xh(n,t,e){n instanceof gn?(function(i,o,l){const h=i.value.clone(),f=Ao(i.fieldTransforms,o,l.transformResults);h.setAll(f),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()})(n,t,e):n instanceof _e?(function(i,o,l){if(!Gn(i.precondition,o))return void o.convertToUnknownDocument(l.version);const h=Ao(i.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(Ha(i)),f.setAll(h),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()})(n,t,e):(function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()})(0,t,e)}function rn(n,t,e,r){return n instanceof gn?(function(o,l,h,f){if(!Gn(o.precondition,l))return h;const d=o.value.clone(),E=bo(o.fieldTransforms,f,l);return d.setAll(E),l.convertToFoundDocument(l.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof _e?(function(o,l,h,f){if(!Gn(o.precondition,l))return h;const d=bo(o.fieldTransforms,f,l),E=l.data;return E.setAll(Ha(o)),E.setAll(d),l.convertToFoundDocument(l.version,E).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((I=>I.field)))})(n,t,e,r):(function(o,l,h){return Gn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h})(n,t,e)}function Jh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Ba(r.transform,i||null);o!=null&&(e===null&&(e=Dt.empty()),e.set(r.field,o))}return e||null}function Io(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Re(r,i,((o,l)=>Wh(o,l)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class gn extends dr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _e extends dr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ha(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Ao(n,t,e){const r=new Map;nt(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,h=t.data.field(o.field);r.set(o.field,Gh(l,h,e[i]))}return r}function bo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,Hh(o,l,t))}return r}class Ga extends dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yh extends dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Zh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Xh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=rn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=rn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Fa();return this.mutations.forEach((i=>{const o=t.get(i.key),l=o.overlayedDocument;let h=this.applyToLocalView(l,o.mutatedFields);h=e.has(i.key)?null:h;const f=za(l,h);f!==null&&r.set(i.key,f),l.isValidDocument()||l.convertToNoDocument(Y.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),gt())}isEqual(t){return this.batchId===t.batchId&&Re(this.mutations,t.mutations,((e,r)=>Io(e,r)))&&Re(this.baseMutations,t.baseMutations,((e,r)=>Io(e,r)))}}class Ns{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){nt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=(function(){return Bh})();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Ns(t,e,r,i)}}/**
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
 */class tf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var rt,$;function ef(n){switch(n){case S.OK:return B(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function nf(n){if(n===void 0)return de("GRPC error has no .code"),S.UNKNOWN;switch(n){case rt.OK:return S.OK;case rt.CANCELLED:return S.CANCELLED;case rt.UNKNOWN:return S.UNKNOWN;case rt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case rt.INTERNAL:return S.INTERNAL;case rt.UNAVAILABLE:return S.UNAVAILABLE;case rt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case rt.NOT_FOUND:return S.NOT_FOUND;case rt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case rt.ABORTED:return S.ABORTED;case rt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case rt.DATA_LOSS:return S.DATA_LOSS;default:return B(39323,{code:n})}}($=rt||(rt={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new _s([4294967295,4294967295],0);class rf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function cs(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function sf(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function of(n,t){return cs(n,t.toTimestamp())}function Ae(n){return nt(!!n,49232),Y.fromTimestamp((function(e){const r=pe(e);return new Z(r.seconds,r.nanos)})(n))}function Ka(n,t){return us(n,t).canonicalString()}function us(n,t){const e=(function(i){return new tt(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function af(n){const t=tt.fromString(n);return nt(mf(t),10190,{key:t.toString()}),t}function hs(n,t){return Ka(n.databaseId,t.path)}function lf(n){const t=af(n);return t.length===4?tt.emptyPath():uf(t)}function cf(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function uf(n){return nt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ro(n,t,e){return{name:hs(n,t),fields:e.value.mapValue.fields}}function hf(n,t){let e;if(t instanceof gn)e={update:Ro(n,t.key,t.value)};else if(t instanceof Ga)e={delete:hs(n,t.key)};else if(t instanceof _e)e={update:Ro(n,t.key,t.data),updateMask:pf(t.fieldMask)};else{if(!(t instanceof Yh))return B(16599,{Vt:t.type});e={verify:hs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,l){const h=l.transform;if(h instanceof hn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof fn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof dn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof or)return{fieldPath:l.field.canonicalString(),increment:h.Ae};throw B(20930,{transform:l.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:of(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:B(27497)})(n,t.precondition)),e}function ff(n,t){return n&&n.length>0?(nt(t!==void 0,14353),n.map((e=>(function(i,o){let l=i.updateTime?Ae(i.updateTime):Ae(o);return l.isEqual(Y.min())&&(l=Ae(o)),new Qh(l,i.transformResults||[])})(e,t)))):[]}function df(n){let t=lf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){nt(r===1,65062);const E=e.from[0];E.allDescendants?i=E.collectionId:t=t.child(E.collectionId)}let o=[];e.where&&(o=(function(I){const b=Wa(I);return b instanceof Zt&&Va(b)?b.getFilters():[b]})(e.where));let l=[];e.orderBy&&(l=(function(I){return I.map((b=>(function(k){return new sr(we(k.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(b)))})(e.orderBy));let h=null;e.limit&&(h=(function(I){let b;return b=typeof I=="object"?I.value:I,As(b)?null:b})(e.limit));let f=null;e.startAt&&(f=(function(I){const b=!!I.before,P=I.values||[];return new rr(P,b)})(e.startAt));let d=null;return e.endAt&&(d=(function(I){const b=!I.before,P=I.values||[];return new rr(P,b)})(e.endAt)),xh(t,i,l,o,h,"F",f,d)}function Wa(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=we(e.unaryFilter.field);return lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=we(e.unaryFilter.field);return lt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=we(e.unaryFilter.field);return lt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=we(e.unaryFilter.field);return lt.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}})(n):n.fieldFilter!==void 0?(function(e){return lt.create(we(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Zt.create(e.compositeFilter.filters.map((r=>Wa(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return B(1026)}})(e.compositeFilter.op))})(n):B(30097,{filter:n})}function we(n){return ht.fromServerFormat(n.fieldPath)}function pf(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function mf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class gf{constructor(t){this.yt=t}}function _f(n){const t=df({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ls(t,t.limit,"L"):t}/**
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
 */class yf{constructor(){this.Cn=new Ef}addToCollectionParentIndex(t,e){return this.Cn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Yt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Yt.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Ef{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ft(tt.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ft(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const So={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qa=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(Qa,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
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
 */class Ve{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Ve(0)}static cr(){return new Ve(-1)}}/**
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
 */const Co="LruGarbageCollector",vf=1048576;function Po([n,t],[e,r]){const i=G(n,e);return i===0?G(t,r):i}class Tf{constructor(t){this.Ir=t,this.buffer=new ft(Po),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Po(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class wf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){D(Co,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){mn(e)?D(Co,"Ignoring IndexedDB error during garbage collection: ",e):await Ts(e)}await this.Vr(3e5)}))}}class If{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return R.resolve(ws.ce);const r=new Tf(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(So)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),So):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,l,h,f,d;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,l=Date.now(),this.nthSequenceNumber(t,i)))).next((I=>(r=I,h=Date.now(),this.removeTargets(t,r,e)))).next((I=>(o=I,f=Date.now(),this.removeOrphanedDocuments(t,r)))).next((I=>(d=Date.now(),Te()<=q.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-E}ms
	Determined least recently used ${i} in `+(h-l)+`ms
	Removed ${o} targets in `+(f-h)+`ms
	Removed ${I} documents in `+(d-f)+`ms
Total Duration: ${d-E}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I}))))}}function Af(n,t){return new If(n,t)}/**
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
 */class bf{constructor(){this.changes=new ge((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ct.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class Rf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Sf{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&rn(r.mutation,i,xt.empty(),Z.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,gt()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=gt()){const i=ce();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let l=Bn();return o.forEach(((h,f)=>{l=l.insert(h,f.overlayedDocument)})),l}))))}getOverlayedDocuments(t,e){const r=ce();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,gt())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((l,h)=>{e.set(l,h)}))}))}computeViews(t,e,r,i){let o=ir();const l=nn(),h=(function(){return nn()})();return e.forEach(((f,d)=>{const E=r.get(d.key);i.has(d.key)&&(E===void 0||E.mutation instanceof _e)?o=o.insert(d.key,d):E!==void 0?(l.set(d.key,E.mutation.getFieldMask()),rn(E.mutation,d,E.mutation.getFieldMask(),Z.now())):l.set(d.key,xt.empty())})),this.recalculateAndSaveOverlays(t,o).next((f=>(f.forEach(((d,E)=>l.set(d,E))),e.forEach(((d,E)=>h.set(d,new Rf(E,l.get(d)??null)))),h)))}recalculateAndSaveOverlays(t,e){const r=nn();let i=new wt(((l,h)=>l-h)),o=gt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((l=>{for(const h of l)h.keys().forEach((f=>{const d=e.get(f);if(d===null)return;let E=r.get(f)||xt.empty();E=h.applyToLocalView(d,E),r.set(f,E);const I=(i.get(h.batchId)||gt()).add(f);i=i.insert(h.batchId,I)}))})).next((()=>{const l=[],h=i.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),d=f.key,E=f.value,I=Fa();E.forEach((b=>{if(!o.has(b)){const P=za(e.get(b),r.get(b));P!==null&&I.set(b,P),o=o.add(b)}})),l.push(this.documentOverlayCache.saveOverlays(t,d,I))}return R.waitFor(l)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(l){return F.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Oh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(ce());let h=cn,f=o;return l.next((d=>R.forEach(d,((E,I)=>(h<I.largestBatchId&&(h=I.largestBatchId),o.get(E)?R.resolve():this.remoteDocumentCache.getEntry(t,E).next((b=>{f=f.insert(E,b)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,f,d,gt()))).next((E=>({batchId:h,changes:La(E)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next((r=>{let i=Bn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=Bn();return this.indexManager.getCollectionParents(t,o).next((h=>R.forEach(h,(f=>{const d=(function(I,b){return new hr(b,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next((E=>{E.forEach(((I,b)=>{l=l.insert(I,b)}))}))})).next((()=>l))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((l=>{o.forEach(((f,d)=>{const E=d.getKey();l.get(E)===null&&(l=l.insert(E,Ct.newInvalidDocument(E)))}));let h=Bn();return l.forEach(((f,d)=>{const E=o.get(f);E!==void 0&&rn(E.mutation,d,xt.empty(),Z.now()),Vs(e,d)&&(h=h.insert(f,d))})),h}))}}/**
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
 */class Cf{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return R.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Ae(i.createTime)}})(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:_f(i.bundledQuery),readTime:Ae(i.readTime)}})(e)),R.resolve()}}/**
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
 */class Pf{constructor(){this.overlays=new wt(F.comparator),this.qr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ce();return R.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=ce(),o=e.length+1,l=new F(e.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const f=h.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>r&&i.set(f.getKey(),f)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new wt(((d,E)=>d-E));const l=this.overlays.getIterator();for(;l.hasNext();){const d=l.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let E=o.get(d.largestBatchId);E===null&&(E=ce(),o=o.insert(d.largestBatchId,E)),E.set(d.getKey(),d)}}const h=ce(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((d,E)=>h.set(d,E))),!(h.size()>=i)););return R.resolve(h)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new tf(e,r));let o=this.qr.get(e);o===void 0&&(o=gt(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Vf{constructor(){this.sessionToken=Lt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class xs{constructor(){this.Qr=new ft(at.$r),this.Ur=new ft(at.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new at(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new F(new tt([])),r=new at(e,t),i=new at(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(l=>{this.Gr(l),o.push(l.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new F(new tt([])),r=new at(e,t),i=new at(e,t+1);let o=gt();return this.Ur.forEachInRange([r,i],(l=>{o=o.add(l.key)})),o}containsKey(t){const e=new at(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return F.comparator(t.key,e.key)||G(t.Yr,e.Yr)}static Kr(t,e){return G(t.Yr,e.Yr)||F.comparator(t.key,e.key)}}/**
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
 */class Df{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new ft(at.$r)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Zh(o,e,r,i);this.mutationQueue.push(l);for(const h of i)this.Zr=this.Zr.add(new at(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Is:this.tr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(l=>{const h=this.Xr(l.Yr);o.push(h)})),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ft(G);return e.forEach((i=>{const o=new at(i,0),l=new at(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,l],(h=>{r=r.add(h.Yr)}))})),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;F.isDocumentKey(o)||(o=o.child(""));const l=new at(new F(o),0);let h=new ft(G);return this.Zr.forEachWhile((f=>{const d=f.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(h=h.add(f.Yr)),!0)}),l),R.resolve(this.ti(h))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){nt(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(e.mutations,(i=>{const o=new at(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new at(e,0),i=this.Zr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Nf{constructor(t){this.ri=t,this.docs=(function(){return new wt(F.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(e))}getEntries(t,e){let r=ir();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ct.newInvalidDocument(i))})),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=ir();const l=e.path,h=new F(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:d,value:{document:E}}=f.getNext();if(!l.isPrefixOf(d.path))break;d.path.length>l.length+1||uh(ch(E),r)<=0||(i.has(E.key)||Vs(e,E))&&(o=o.insert(E.key,E.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){B(9500)}ii(t,e){return R.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new xf(this)}getSize(t){return R.resolve(this.size)}}class xf extends bf{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),R.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class kf{constructor(t){this.persistence=t,this.si=new ge((e=>Cs(e)),Ps),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new xs,this.targetCount=0,this.ai=Ve.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),R.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Ve(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Pr(e),R.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((l,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.si.delete(l),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)})),R.waitFor(o).next((()=>i))}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((l=>{o.push(i.markPotentiallyOrphaned(t,l))})),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this._i.containsKey(e))}}/**
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
 */class Xa{constructor(t,e){this.ui={},this.overlays={},this.ci=new ws(0),this.li=!1,this.li=!0,this.hi=new Vf,this.referenceDelegate=t(this),this.Pi=new kf(this),this.indexManager=new yf,this.remoteDocumentCache=(function(i){return new Nf(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new gf(e),this.Ii=new Cf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Pf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new Df(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new Of(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return R.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class Of extends fh{constructor(t){super(),this.currentSequenceNumber=t}}class ks{constructor(t){this.persistence=t,this.Ri=new xs,this.Vi=null}static mi(t){return new ks(t)}get fi(){if(this.Vi)return this.Vi;throw B(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(r=>{const i=F.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,Y.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class ar{constructor(t,e){this.persistence=t,this.pi=new ge((r=>mh(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Af(this,e)}static mi(t,e){return new ar(t,e)}Ei(){}di(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return R.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?R.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(l=>this.br(t,l,e).next((h=>{h||(r++,o.removeEntry(l,Y.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=zn(t.data.value)),e}br(t,e,r){return R.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Os{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=gt(),i=gt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Os(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Mf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Lf{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Dc()?8:dh(Pc())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((l=>{o.result=l})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((l=>{o.result=l}))})).next((()=>{if(o.result)return;const l=new Mf;return this.Ss(t,e,l).next((h=>{if(o.result=h,this.Vs)return this.bs(t,e,l,h.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(Te()<=q.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Xe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(Te()<=q.DEBUG&&D("QueryEngine","Query:",Xe(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Te()<=q.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Xe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,he(e))):R.resolve())}ys(t,e){if(To(e))return R.resolve(null);let r=he(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=ls(e,null,"F"),r=he(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const l=gt(...o);return this.ps.getDocuments(t,l).next((h=>this.indexManager.getMinOffset(t,r).next((f=>{const d=this.Ds(e,h);return this.Cs(e,d,l,f.readTime)?this.ys(t,ls(e,null,"F")):this.vs(t,d,e,f)}))))})))))}ws(t,e,r,i){return To(e)||i.isEqual(Y.min())?R.resolve(null):this.ps.getDocuments(t,r).next((o=>{const l=this.Ds(e,o);return this.Cs(e,l,r,i)?R.resolve(null):(Te()<=q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xe(e)),this.vs(t,l,e,lh(i,cn)).next((h=>h)))}))}Ds(t,e){let r=new ft(Lh(t));return e.forEach(((i,o)=>{Vs(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return Te()<=q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Xe(e)),this.ps.getDocumentsMatchingQuery(t,e,Yt.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((l=>{o=o.insert(l.key,l)})),o)))}}/**
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
 */const Ff="LocalStore";class Uf{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new wt(G),this.xs=new ge((o=>Cs(o)),Ps),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sf(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Bf(n,t,e,r){return new Uf(n,t,e,r)}async function Ja(n,t){const e=Q(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const l=[],h=[];let f=gt();for(const d of i){l.push(d.batchId);for(const E of d.mutations)f=f.add(E.key)}for(const d of o){h.push(d.batchId);for(const E of d.mutations)f=f.add(E.key)}return e.localDocuments.getDocuments(r,f).next((d=>({Ls:d,removedBatchIds:l,addedBatchIds:h})))}))}))}function jf(n,t){const e=Q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(h,f,d,E){const I=d.batch,b=I.keys();let P=R.resolve();return b.forEach((k=>{P=P.next((()=>E.getEntry(f,k))).next((O=>{const V=d.docVersions.get(k);nt(V!==null,48541),O.version.compareTo(V)<0&&(I.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),E.addEntry(O)))}))})),P.next((()=>h.mutationQueue.removeMutationBatch(f,I)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(h){let f=gt();for(let d=0;d<h.mutationResults.length;++d)h.mutationResults[d].transformResults.length>0&&(f=f.add(h.batch.mutations[d].key));return f})(t)))).next((()=>e.localDocuments.getDocuments(r,i)))}))}function $f(n){const t=Q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function qf(n,t){const e=Q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Is),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}class Vo{constructor(){this.activeTargetIds=qh()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zf{constructor(){this.Mo=new Vo,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Vo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Hf{Oo(t){}shutdown(){}}/**
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
 */const Do="ConnectivityMonitor";class No{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(Do,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){D(Do,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let jn=null;function fs(){return jn===null?jn=(function(){return 268435456+Math.round(2147483648*Math.random())})():jn++,"0x"+jn.toString(16)}/**
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
 */const Wr="RestConnection",Gf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Kf{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===er?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const l=fs(),h=this.zo(t,e.toUriEncodedString());D(Wr,`Sending RPC '${t}' ${l}:`,h,r);const f={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(f,i,o);const{host:d}=new URL(h),E=ms(d);return this.Jo(t,h,f,r,E).then((I=>(D(Wr,`Received RPC '${t}' ${l}: `,I),I)),(I=>{throw ur(Wr,`RPC '${t}' ${l} failed with error: `,I,"url: ",h,"request:",r),I}))}Ho(t,e,r,i,o,l){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ne})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=Gf[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
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
 */class Wf{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const pt="WebChannelConnection";class Qf extends Kf{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const l=fs();return new Promise(((h,f)=>{const d=new ca;d.setWithCredentials(!0),d.listenOnce(ua.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case qn.NO_ERROR:const I=d.getResponseJson();D(pt,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(I)),h(I);break;case qn.TIMEOUT:D(pt,`RPC '${t}' ${l} timed out`),f(new x(S.DEADLINE_EXCEEDED,"Request time out"));break;case qn.HTTP_ERROR:const b=d.getStatus();if(D(pt,`RPC '${t}' ${l} failed with status:`,b,"response text:",d.getResponseText()),b>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const k=P?.error;if(k&&k.status&&k.message){const O=(function(z){const j=z.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(j)>=0?j:S.UNKNOWN})(k.status);f(new x(O,k.message))}else f(new x(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else f(new x(S.UNAVAILABLE,"Connection failed."));break;default:B(9055,{l_:t,streamId:l,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{D(pt,`RPC '${t}' ${l} completed.`)}}));const E=JSON.stringify(i);D(pt,`RPC '${t}' ${l} sending request:`,i),d.send(e,"POST",E,r,15)}))}T_(t,e,r){const i=fs(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=da(),h=fa(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.useFetchStreams=!0),this.jo(f.initMessageHeaders,e,r),f.encodeInitMessageHeaders=!0;const E=o.join("");D(pt,`Creating RPC '${t}' stream ${i}: ${E}`,f);const I=l.createWebChannel(E,f);this.I_(I);let b=!1,P=!1;const k=new Wf({Yo:V=>{P?D(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,V):(b||(D(pt,`Opening RPC '${t}' stream ${i} transport.`),I.open(),b=!0),D(pt,`RPC '${t}' stream ${i} sending:`,V),I.send(V))},Zo:()=>I.close()}),O=(V,z,j)=>{V.listen(z,(H=>{try{j(H)}catch(K){setTimeout((()=>{throw K}),0)}}))};return O(I,Je.EventType.OPEN,(()=>{P||(D(pt,`RPC '${t}' stream ${i} transport opened.`),k.o_())})),O(I,Je.EventType.CLOSE,(()=>{P||(P=!0,D(pt,`RPC '${t}' stream ${i} transport closed`),k.a_(),this.E_(I))})),O(I,Je.EventType.ERROR,(V=>{P||(P=!0,ur(pt,`RPC '${t}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),k.a_(new x(S.UNAVAILABLE,"The operation could not be completed")))})),O(I,Je.EventType.MESSAGE,(V=>{if(!P){const z=V.data[0];nt(!!z,16349);const j=z,H=j?.error||j[0]?.error;if(H){D(pt,`RPC '${t}' stream ${i} received error:`,H);const K=H.status;let N=(function(p){const g=rt[p];if(g!==void 0)return nf(g)})(K),L=H.message;N===void 0&&(N=S.INTERNAL,L="Unknown error status: "+K+" with message "+H.message),P=!0,k.a_(new x(N,L)),I.close()}else D(pt,`RPC '${t}' stream ${i} received:`,z),k.u_(z)}})),O(h,ha.STAT_EVENT,(V=>{V.stat===ns.PROXY?D(pt,`RPC '${t}' stream ${i} detected buffering proxy`):V.stat===ns.NOPROXY&&D(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{k.__()}),0),k}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function Qr(){return typeof document<"u"?document:null}/**
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
 */function pr(n){return new rf(n,!0)}/**
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
 */class Ya{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const xo="PersistentStream";class Xf{constructor(t,e,r,i,o,l,h,f){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ya(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(de(e.toString()),de("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new x(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return D(xo,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(D(xo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Jf extends Xf{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return nt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,nt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){nt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=ff(t.writeResults,t.commitTime),r=Ae(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=cf(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>hf(this.serializer,r)))};this.q_(e)}}/**
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
 */class Yf{}class Zf extends Yf{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Go(t,us(e,r),i,o,l))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(S.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Ho(t,us(e,r),i,l,h,o))).catch((l=>{throw l.name==="FirebaseError"?(l.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new x(S.UNKNOWN,l.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class td{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(de(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const _n="RemoteStore";class ed{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((l=>{r.enqueueAndForget((async()=>{En(this)&&(D(_n,"Restarting streams for network reachability change."),await(async function(f){const d=Q(f);d.Ea.add(4),await yn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await mr(d)})(this))}))})),this.Ra=new td(r,i)}}async function mr(n){if(En(n))for(const t of n.da)await t(!0)}async function yn(n){for(const t of n.da)await t(!1)}function En(n){return Q(n).Ea.size===0}async function Za(n,t,e){if(!mn(t))throw t;n.Ea.add(1),await yn(n),n.Ra.set("Offline"),e||(e=()=>$f(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{D(_n,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await mr(n)}))}function tl(n,t){return t().catch((e=>Za(n,e,t)))}async function gr(n){const t=Q(n),e=te(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Is;for(;nd(t);)try{const i=await qf(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,rd(t,i)}catch(i){await Za(t,i)}el(t)&&nl(t)}function nd(n){return En(n)&&n.Ta.length<10}function rd(n,t){n.Ta.push(t);const e=te(n);e.O_()&&e.X_&&e.ea(t.mutations)}function el(n){return En(n)&&!te(n).x_()&&n.Ta.length>0}function nl(n){te(n).start()}async function sd(n){te(n).ra()}async function id(n){const t=te(n);for(const e of n.Ta)t.ea(e.mutations)}async function od(n,t,e){const r=n.Ta.shift(),i=Ns.from(r,t,e);await tl(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await gr(n)}async function ad(n,t){t&&te(n).X_&&await(async function(r,i){if((function(l){return ef(l)&&l!==S.ABORTED})(i.code)){const o=r.Ta.shift();te(r).B_(),await tl(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await gr(r)}})(n,t),el(n)&&nl(n)}async function ko(n,t){const e=Q(n);e.asyncQueue.verifyOperationInProgress(),D(_n,"RemoteStore received new credentials");const r=En(e);e.Ea.add(3),await yn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await mr(e)}async function ld(n,t){const e=Q(n);t?(e.Ea.delete(2),await mr(e)):t||(e.Ea.add(2),await yn(e),e.Ra.set("Unknown"))}function te(n){return n.fa||(n.fa=(function(e,r,i){const o=Q(e);return o.sa(),new Jf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:sd.bind(null,n),r_:ad.bind(null,n),ta:id.bind(null,n),na:od.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await gr(n)):(await n.fa.stop(),n.Ta.length>0&&(D(_n,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Ms{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,h=new Ms(t,e,l,i,o);return h.start(r),h}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rl(n,t){if(de("AsyncQueue",`${t}: ${n}`),mn(n))return new x(S.UNAVAILABLE,`${t}: ${n}`);throw n}class cd{constructor(){this.queries=Oo(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=Q(e),o=i.queries;i.queries=Oo(),o.forEach(((l,h)=>{for(const f of h.Sa)f.onError(r)}))})(this,new x(S.ABORTED,"Firestore shutting down"))}}function Oo(){return new ge((n=>Oa(n)),ka)}function ud(n){n.Ca.forEach((t=>{t.next()}))}var Mo,Lo;(Lo=Mo||(Mo={})).Ma="default",Lo.Cache="cache";const hd="SyncEngine";class fd{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new ge((h=>Oa(h)),ka),this.Iu=new Map,this.Eu=new Set,this.du=new wt(F.comparator),this.Au=new Map,this.Ru=new xs,this.Vu={},this.mu=new Map,this.fu=Ve.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function dd(n,t,e){const r=_d(n);try{const i=await(function(l,h){const f=Q(l),d=Z.now(),E=h.reduce(((P,k)=>P.add(k.key)),gt());let I,b;return f.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let k=ir(),O=gt();return f.Ns.getEntries(P,E).next((V=>{k=V,k.forEach(((z,j)=>{j.isValidDocument()||(O=O.add(z))}))})).next((()=>f.localDocuments.getOverlayedDocuments(P,k))).next((V=>{I=V;const z=[];for(const j of h){const H=Jh(j,I.get(j.key).overlayedDocument);H!=null&&z.push(new _e(j.key,H,Sa(H.value.mapValue),Ut.exists(!0)))}return f.mutationQueue.addMutationBatch(P,d,z,h)})).next((V=>{b=V;const z=V.applyToLocalDocumentSet(I,O);return f.documentOverlayCache.saveOverlays(P,V.batchId,z)}))})).then((()=>({batchId:b.batchId,changes:La(I)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),(function(l,h,f){let d=l.Vu[l.currentUser.toKey()];d||(d=new wt(G)),d=d.insert(h,f),l.Vu[l.currentUser.toKey()]=d})(r,i.batchId,e),await _r(r,i.changes),await gr(r.remoteStore)}catch(i){const o=rl(i,"Failed to persist write");e.reject(o)}}function Fo(n,t,e){const r=Q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,l)=>{const h=l.view.va(t);h.snapshot&&i.push(h.snapshot)})),(function(l,h){const f=Q(l);f.onlineState=h;let d=!1;f.queries.forEach(((E,I)=>{for(const b of I.Sa)b.va(h)&&(d=!0)})),d&&ud(f)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function pd(n,t){const e=Q(n),r=t.batch.batchId;try{const i=await jf(e.localStore,t);il(e,r,null),sl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await _r(e,i)}catch(i){await Ts(i)}}async function md(n,t,e){const r=Q(n);try{const i=await(function(l,h){const f=Q(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let E;return f.mutationQueue.lookupMutationBatch(d,h).next((I=>(nt(I!==null,37113),E=I.keys(),f.mutationQueue.removeMutationBatch(d,I)))).next((()=>f.mutationQueue.performConsistencyCheck(d))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(d,E,h))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,E))).next((()=>f.localDocuments.getDocuments(d,E)))}))})(r.localStore,t);il(r,t,e),sl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await _r(r,i)}catch(i){await Ts(i)}}function sl(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function il(n,t,e){const r=Q(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}async function _r(n,t,e){const r=Q(n),i=[],o=[],l=[];r.Tu.isEmpty()||(r.Tu.forEach(((h,f)=>{l.push(r.pu(f,t,e).then((d=>{if((d||e)&&r.isPrimaryClient){const E=d?!d.fromCache:e?.targetChanges.get(f.targetId)?.current;r.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(d){i.push(d);const E=Os.As(f.targetId,d);o.push(E)}})))})),await Promise.all(l),r.Pu.H_(i),await(async function(f,d){const E=Q(f);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>R.forEach(d,(b=>R.forEach(b.Es,(P=>E.persistence.referenceDelegate.addReference(I,b.targetId,P))).next((()=>R.forEach(b.ds,(P=>E.persistence.referenceDelegate.removeReference(I,b.targetId,P)))))))))}catch(I){if(!mn(I))throw I;D(Ff,"Failed to update sequence numbers: "+I)}for(const I of d){const b=I.targetId;if(!I.fromCache){const P=E.Ms.get(b),k=P.snapshotVersion,O=P.withLastLimboFreeSnapshotVersion(k);E.Ms=E.Ms.insert(b,O)}}})(r.localStore,o))}async function gd(n,t){const e=Q(n);if(!e.currentUser.isEqual(t)){D(hd,"User change. New user:",t.toKey());const r=await Ja(e.localStore,t);e.currentUser=t,(function(o,l){o.mu.forEach((h=>{h.forEach((f=>{f.reject(new x(S.CANCELLED,l))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await _r(e,r.Ls)}}function _d(n){const t=Q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=pd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=md.bind(null,t),t}class lr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=pr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Bf(this.persistence,new Lf,t.initialUser,this.serializer)}Cu(t){return new Xa(ks.mi,this.serializer)}Du(t){return new zf}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lr.provider={build:()=>new lr};class yd extends lr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){nt(this.persistence.referenceDelegate instanceof ar,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new wf(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new Xa((r=>ar.mi(r,e)),this.serializer)}}class ds{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gd.bind(null,this.syncEngine),await ld(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new cd})()}createDatastore(t){const e=pr(t.databaseInfo.databaseId),r=(function(o){return new Qf(o)})(t.databaseInfo);return(function(o,l,h,f){return new Zf(o,l,h,f)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,l,h){return new ed(r,i,o,l,h)})(this.localStore,this.datastore,t.asyncQueue,(e=>Fo(this.syncEngine,e,0)),(function(){return No.v()?new No:new Hf})())}createSyncEngine(t,e){return(function(i,o,l,h,f,d,E){const I=new fd(i,o,l,h,f,d);return E&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=Q(e);D(_n,"RemoteStore shutting down."),r.Ea.add(5),await yn(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ds.provider={build:()=>new ds};/**
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
 */const ee="FirestoreClient";class Ed{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=Es.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async l=>{D(ee,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l})),this.appCheckCredentials.start(r,(l=>(D(ee,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=rl(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Xr(n,t){n.asyncQueue.verifyOperationInProgress(),D(ee,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Ja(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Uo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await vd(n);D(ee,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>ko(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>ko(t.remoteStore,i))),n._onlineComponents=t}async function vd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(ee,"Using user provided OfflineComponentProvider");try{await Xr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;ur("Error using user provided cache. Falling back to memory cache: "+e),await Xr(n,new lr)}}else D(ee,"Using default OfflineComponentProvider"),await Xr(n,new yd(void 0));return n._offlineComponents}async function Td(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(ee,"Using user provided OnlineComponentProvider"),await Uo(n,n._uninitializedComponentsProvider._online)):(D(ee,"Using default OnlineComponentProvider"),await Uo(n,new ds))),n._onlineComponents}function wd(n){return Td(n).then((t=>t.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function ol(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Bo=new Map;/**
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
 */const al="firestore.googleapis.com",jo=!0;class $o{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new x(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=al,this.ssl=jo}else this.host=t.host,this.ssl=t.ssl??jo;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Qa;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<vf)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ah("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ol(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $o({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $o(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ju;switch(r.type){case"firstParty":return new eh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Bo.get(e);r&&(D("ComponentProvider","Removing Datastore"),Bo.delete(e),r.terminate())})(this),Promise.resolve()}}function Id(n,t,e,r={}){n=ya(n,yr);const i=ms(t),o=n._getSettings(),l={...o,emulatorOptions:n._getEmulatorOptions()},h=`${t}:${e}`;i&&(Ac(`https://${h}`),Cc("Firestore",!0)),o.host!==al&&o.host!==h&&ur("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:h,ssl:i,emulatorOptions:r};if(!Xn(f,l)&&(n._setSettings(f),r.mockUserToken)){let d,E;if(typeof r.mockUserToken=="string")d=r.mockUserToken,E=mt.MOCK_USER;else{d=bc(r.mockUserToken,n._app?.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new x(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new mt(I)}n._authCredentials=new Yu(new ma(d,E))}}/**
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
 */class Ls{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ls(this.firestore,t,this._query)}}class _t{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _t(this.firestore,t,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(pn(e,_t._jsonSchema))return new _t(t,r||null,new F(tt.fromString(e.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:st("string",_t._jsonSchemaVersion),referencePath:st("string")};class Jt extends Ls{constructor(t,e,r){super(t,e,kh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new F(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function qo(n,t,...e){if(n=on(n),ga("collection","path",t),n instanceof yr){const r=tt.fromString(t,...e);return co(r),new Jt(n,null,r)}{if(!(n instanceof _t||n instanceof Jt))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return co(r),new Jt(n.firestore,null,r)}}function Ad(n,t,...e){if(n=on(n),arguments.length===1&&(t=Es.newId()),ga("doc","path",t),n instanceof yr){const r=tt.fromString(t,...e);return lo(r),new _t(n,null,new F(r))}{if(!(n instanceof _t||n instanceof Jt))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return lo(r),new _t(n.firestore,n instanceof Jt?n.converter:null,new F(r))}}/**
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
 */const zo="AsyncQueue";class Ho{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ya(this,"async_queue_retry"),this._c=()=>{const r=Qr();r&&D(zo,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Qr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Qr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new ue;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!mn(t))throw t;D(zo,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,de("INTERNAL UNHANDLED ERROR: ",Go(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Ms.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&B(47125,{Pc:Go(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Go(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class ll extends yr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Ho,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ho(t),this._firestoreClient=void 0,await t}}}function bd(n,t){const e=typeof n=="object"?n:Fu(),r=typeof n=="string"?n:er,i=xu(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=wc("firestore");o&&Id(i,...o)}return i}function Rd(n){if(n._terminated)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Sd(n),n._firestoreClient}function Sd(n){const t=n._freezeSettings(),e=(function(i,o,l,h){return new Eh(i,o,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ol(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Ed(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(n._componentsProvider))}/**
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
 */class Nt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Nt(Lt.fromBase64String(t))}catch(e){throw new x(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Nt(Lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(pn(t,Nt._jsonSchema))return Nt.fromBase64String(t.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:st("string",Nt._jsonSchemaVersion),bytes:st("string")};/**
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
 */class Fs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Us{constructor(t){this._methodName=t}}/**
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
 */class Bt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Bt._jsonSchemaVersion}}static fromJSON(t){if(pn(t,Bt._jsonSchema))return new Bt(t.latitude,t.longitude)}}Bt._jsonSchemaVersion="firestore/geoPoint/1.0",Bt._jsonSchema={type:st("string",Bt._jsonSchemaVersion),latitude:st("number"),longitude:st("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class jt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:jt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(pn(t,jt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new jt(t.vectorValues);throw new x(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jt._jsonSchemaVersion="firestore/vectorValue/1.0",jt._jsonSchema={type:st("string",jt._jsonSchemaVersion),vectorValues:st("object")};/**
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
 */const Cd=/^__.*__$/;class Pd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new _e(t,this.data,this.fieldMask,e,this.fieldTransforms):new gn(t,this.data,e,this.fieldTransforms)}}function cl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{Ac:n})}}class Bs{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Bs({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return cr(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(cl(this.Ac)&&Cd.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class Vd{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||pr(t)}Cc(t,e,r,i=!1){return new Bs({Ac:t,methodName:e,Dc:r,path:ht.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dd(n){const t=n._freezeSettings(),e=pr(n._databaseId);return new Vd(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Nd(n,t,e,r,i,o={}){const l=n.Cc(o.merge||o.mergeFields?2:0,t,e,i);dl("Data must be an object, but it was:",l,r);const h=hl(r,l);let f,d;if(o.merge)f=new xt(l.fieldMask),d=l.fieldTransforms;else if(o.mergeFields){const E=[];for(const I of o.mergeFields){const b=xd(t,I,e);if(!l.contains(b))throw new x(S.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);Od(E,b)||E.push(b)}f=new xt(E),d=l.fieldTransforms.filter((I=>f.covers(I.field)))}else f=null,d=l.fieldTransforms;return new Pd(new Dt(h),f,d)}class js extends Us{_toFieldTransform(t){return new Kh(t.path,new hn)}isEqual(t){return t instanceof js}}function ul(n,t){if(fl(n=on(n)))return dl("Unsupported field value:",t,n),hl(n,t);if(n instanceof Us)return(function(r,i){if(!cl(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let l=0;for(const h of r){let f=ul(h,i.wc(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}})(n,t)}return(function(r,i){if((r=on(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Z.fromDate(r);return{timestampValue:cs(i.serializer,o)}}if(r instanceof Z){const o=new Z(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cs(i.serializer,o)}}if(r instanceof Bt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nt)return{bytesValue:sf(i.serializer,r._byteString)};if(r instanceof _t){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Sc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ka(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof jt)return(function(l,h){return{mapValue:{fields:{[ba]:{stringValue:Ra},[ss]:{arrayValue:{values:l.toArray().map((d=>{if(typeof d!="number")throw h.Sc("VectorValues must only contain numeric values.");return Ds(h.serializer,d)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${vs(r)}`)})(n,t)}function hl(n,t){const e={};return va(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xe(n,((r,i)=>{const o=ul(i,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function fl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Z||n instanceof Bt||n instanceof Nt||n instanceof _t||n instanceof Us||n instanceof jt)}function dl(n,t,e){if(!fl(e)||!_a(e)){const r=vs(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function xd(n,t,e){if((t=on(t))instanceof Fs)return t._internalPath;if(typeof t=="string")return pl(n,t);throw cr("Field path arguments must be of type string or ",n,!1,void 0,e)}const kd=new RegExp("[~\\*/\\[\\]]");function pl(n,t,e){if(t.search(kd)>=0)throw cr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Fs(...t.split("."))._internalPath}catch{throw cr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function cr(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${r}`),l&&(f+=` in document ${i}`),f+=")"),new x(S.INVALID_ARGUMENT,h+n+f)}function Od(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class ml{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Md(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(gl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Md extends ml{data(){return super.data()}}function gl(n,t){return typeof t=="string"?pl(n,t):t instanceof Fs?t._internalPath:t._delegate._internalPath}/**
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
 */function Ld(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class $n{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class be extends ml{constructor(t,e,r,i,o,l){super(t,e,r,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Kn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(gl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=be._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}be._jsonSchemaVersion="firestore/documentSnapshot/1.0",be._jsonSchema={type:st("string",be._jsonSchemaVersion),bundleSource:st("string","DocumentSnapshot"),bundleName:st("string"),bundle:st("string")};class Kn extends be{data(t={}){return super.data(t)}}class sn{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new $n(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Kn(this._firestore,this._userDataWriter,r.key,r,new $n(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map((h=>{const f=new Kn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new $n(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}}))}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((h=>o||h.type!==3)).map((h=>{const f=new Kn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new $n(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,E=-1;return h.type!==0&&(d=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),E=l.indexOf(h.doc.key)),{type:Fd(h.type),doc:f,oldIndex:d,newIndex:E}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=sn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Es.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Fd(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}sn._jsonSchemaVersion="firestore/querySnapshot/1.0",sn._jsonSchema={type:st("string",sn._jsonSchemaVersion),bundleSource:st("string","QuerySnapshot"),bundleName:st("string"),bundle:st("string")};function Ko(n,t){const e=ya(n.firestore,ll),r=Ad(n),i=Ld(n.converter,t);return Ud(e,[Nd(Dd(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then((()=>r))}function Ud(n,t){return(function(r,i){const o=new ue;return r.asyncQueue.enqueueAndForget((async()=>dd(await wd(r),i,o))),o.promise})(Rd(n),t)}function Wo(){return new js("serverTimestamp")}(function(t,e=!0){(function(i){Ne=i})(Lu),Yn(new an("firestore",((r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),h=new ll(new Zu(r.getProvider("auth-internal")),new nh(l,r.getProvider("app-check-internal")),(function(d,E){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nr(d.options.projectId,E)})(l,i),l);return o={useFetchStreams:e,...o},h._setSettings(o),h}),"PUBLIC").setMultipleInstances(!0)),Ie(so,io,t),Ie(so,io,"esm2020")})();const Bd={apiKey:"AIzaSyBBEaY16YTuPcSscp0J2PKiXD6p6xjj7rE",authDomain:"mysite-6d48f.firebaseapp.com",projectId:"mysite-6d48f",storageBucket:"mysite-6d48f.firebasestorage.app",messagingSenderId:"981490289313",appId:"1:981490289313:web:55a3a9c19e9499ff713ee0"},jd=oa(Bd),Qo=bd(jd),$d=["onKeydown"],qd={class:"absolute z-50 mt-1 w-full bg-black/40 backdrop-blur-sm border border-slate-700/40 rounded-lg max-h-60 overflow-auto text-white shadow-lg"},zd=["onClick","onMouseenter"],Hd={__name:"CustomSelect",props:{modelValue:[String,Number],options:{type:Array,required:!0}},emits:["update:modelValue"],setup(n,{emit:t}){const e=n,r=t,i=Rt(!1),o=Rt(-1),l=Jo(()=>{const O=e.options.find(V=>V.value===e.modelValue);return O?O.label:"Select..."});function h(){i.value=!i.value,i.value&&(o.value=e.options.findIndex(O=>O.value===e.modelValue))}function f(){i.value=!1}function d(O){r("update:modelValue",O.value),i.value=!1}function E(){if(!i.value)return h();o.value=(o.value+1)%e.options.length}function I(){if(!i.value)return h();o.value=(o.value-1+e.options.length)%e.options.length}function b(){o.value>=0&&d(e.options[o.value])}const P=Rt(null);function k(O){P.value&&!P.value.contains(O.target)&&(i.value=!1)}return Yo(()=>{document.addEventListener("click",k)}),Ql(()=>{document.removeEventListener("click",k)}),(O,V)=>(Vt(),Pt("div",{ref_key:"dropdownRef",ref:P,class:"relative w-full",onKeydown:[On(Ye(E,["prevent"]),["down"]),On(Ye(I,["prevent"]),["up"]),On(Ye(b,["prevent"]),["enter"]),On(f,["esc"])]},[M("div",{class:Wn(["input flex justify-between items-center cursor-pointer",{"ring-2 ring-blue-500":i.value}]),onClick:h},[M("span",null,bt(l.value),1),V[0]||(V[0]=M("svg",{class:"w-5 h-5 text-white ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))],2),At(M("ul",qd,[(Vt(!0),Pt(Jl,null,Yl(n.options,(z,j)=>(Vt(),Pt("li",{key:z.value,onClick:H=>d(z),onMouseenter:H=>o.value=j,class:Wn(["exclude-3d cursor-pointer px-3 py-2 transition-colors duration-150",o.value===j?"bg-blue-500/40":""])},bt(z.label),43,zd))),128))],512),[[Xl,i.value]])],40,$d))}},Gd=Xo(Hd,[["__scopeId","data-v-0079491c"]]),Kd={class:"text-4xl sm:text-5xl font-bold uppercase tracking-widest mb-10"},Wd={class:"max-w-5xl w-full px-6"},Qd={class:"flex justify-center gap-6 mb-8 border-b border-slate-700/40"},Xd={key:"contact",class:"glass-panel shadow-glass bg-slateGlass p-6 rounded-xl space-y-6 max-w-xl mx-auto",style:{"background-color":"rgba(30, 41, 59, 0.4)"}},Jd={href:"mailto:Ada.deniz.aktas0@gmail.com",class:"flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors"},Yd={href:"tel:+905541177404",class:"flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors"},Zd={class:"flex items-center gap-3 text-slate-300"},tp=["placeholder"],ep=["placeholder"],np={class:"themed-textarea-wrapper"},rp=["placeholder"],sp=["disabled"],ip={key:0,class:"text-green-400 text-sm mt-2 text-center"},op={key:"project",class:"glass-panel shadow-glass bg-slateGlass p-6 rounded-xl space-y-6 max-w-xl mx-auto"},ap=["placeholder"],lp=["placeholder"],cp=["placeholder"],up=["placeholder"],hp=["placeholder"],fp=["placeholder"],dp={class:"flex flex-col sm:flex-row items-center gap-3"},pp={class:"text-slate-400 w-40"},mp={class:"relative flex-1"},gp={class:"absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center text-blue-400/70 hover:text-blue-300 transition-all"},_p={class:"flex flex-col sm:flex-row items-center gap-3 w-full"},yp={class:"text-slate-400 w-40"},Ep={class:"flex-1"},vp=["placeholder"],Tp=["disabled"],wp={key:0,class:"text-green-400 text-sm mt-2 text-center"},Ip={__name:"Contact",setup(n){const{t}=Zl(),e=Rt("contact"),r=Rt(!1),i=Rt(!1),o=Rt(!1),l=Rt(!1),h=Rt(null),f=Rt(null),d=Rt({name:"",email:"",message:""}),E=Rt({title:"",objective:"",scope:"",logic:"",dependencies:"",performance:"",budget:null,urgency:"Normal",notes:""}),I=Jo(()=>[{value:"Immediate",label:t("common.urgency.immediate")},{value:"High",label:t("common.urgency.high")},{value:"Normal",label:t("common.urgency.normal")},{value:"Research-only",label:t("common.urgency.research")}]);function b(K){return["pb-2 px-4 text-lg font-semibold border-b-2 transition-all duration-300",e.value===K?"border-blue-500 text-blue-400":"border-transparent text-slate-400 hover:text-blue-300"]}async function P(){if(!(!d.value.name||!d.value.email||!d.value.message)){r.value=!0;try{await Ko(qo(Qo,"contactMessages"),{name:d.value.name,email:d.value.email,message:d.value.message,createdAt:Wo()}),d.value={name:"",email:"",message:""},i.value=!0,setTimeout(()=>i.value=!1,3e3)}catch(K){console.error("❌ Error sending contact:",K),alert("Error sending message. Please try again later.")}finally{r.value=!1}}}async function k(){if(!(!E.value.title||!E.value.objective)){o.value=!0;try{await Ko(qo(Qo,"projectRequests"),{title:E.value.title,objective:E.value.objective,scope:E.value.scope,logic:E.value.logic,dependencies:E.value.dependencies,performance:E.value.performance,budget:E.value.budget,urgency:E.value.urgency,notes:E.value.notes,createdAt:Wo()}),E.value={title:"",objective:"",scope:"",logic:"",dependencies:"",performance:"",budget:null,urgency:"Normal",notes:""},l.value=!0,setTimeout(()=>l.value=!1,3e3)}catch(K){console.error("❌ Error sending project:",K),alert("Error submitting project. Please try again later.")}finally{o.value=!1}}}function O(K){e.value=K}let V,z,j,H;return Yo(()=>{const K=f.value;j=new tc,j.background=new qi(197642),j.fog=new ec(132631,.002),z=new nc(75,K.clientWidth/K.clientHeight,.1,1e3),V=new rc({canvas:K,antialias:!0}),V.setPixelRatio(window.devicePixelRatio),z.position.z=3;const N=window.innerWidth<768?400:900,L=new sc,y=new Float32Array(N*3),p=new Float32Array(N*3),g=new qi;for(let _=0;_<N;_++){const T=_*3;y[T]=(Math.random()-.5)*400,y[T+1]=(Math.random()-.5)*400,y[T+2]=(Math.random()-.5)*400,g.setHSL(.6+Math.random()*.1,.6,.9+Math.random()*.05),p[T]=g.r,p[T+1]=g.g,p[T+2]=g.b}L.setAttribute("position",new zi(y,3)),L.setAttribute("color",new zi(p,3)),H=new ic(L,new oc({vertexColors:!0,size:.07,transparent:!0,opacity:.8,blending:ac})),j.add(H),V.setSize(K.clientWidth,h.value.offsetHeight),window.addEventListener("resize",()=>V.setSize(K.clientWidth,h.value.offsetHeight));const v=()=>{requestAnimationFrame(v),H.rotation.y+=4e-4,H.rotation.x+=2e-4,V.render(j,z)};v()}),(K,N)=>(Vt(),Pt("section",{ref_key:"rootEl",ref:h,class:"relative overflow-hidden py-20 text-white flex flex-col items-center select-none"},[M("canvas",{ref_key:"bgCanvas",ref:f,class:"absolute inset-0 w-full -z-10"},null,512),N[20]||(N[20]=lc('<svg class="absolute inset-0 -z-5 opacity-40 pointer-events-none" data-v-ae7a1190><defs data-v-ae7a1190><linearGradient id="lineGrad" x1="0" x2="1" data-v-ae7a1190><stop offset="0%" stop-color="#1e293b" stop-opacity="0" data-v-ae7a1190></stop><stop offset="100%" stop-color="#1e40af" stop-opacity="0.25" data-v-ae7a1190></stop></linearGradient></defs><path d="M0 200 C260 120, 480 320, 1200 200" stroke="url(#lineGrad)" stroke-width="1" fill="none" class="animate-pulse-slow" data-v-ae7a1190></path><path d="M30 10 C200 40, 340 0, 900 60" stroke="url(#lineGrad)" stroke-width="1" fill="none" class="animate-pulse-slow" data-v-ae7a1190></path></svg>',1)),M("h2",Kd,bt(J(t)("contact.title")),1),M("div",Wd,[M("div",Qd,[M("button",{class:Wn(b("contact")),onClick:N[0]||(N[0]=()=>O("contact"))},bt(J(t)("contact.tabs.contact")),3),M("button",{class:Wn(b("project")),onClick:N[1]||(N[1]=()=>O("project"))},bt(J(t)("contact.tabs.project")),3)]),e.value==="contact"?(Vt(),Pt("div",Xd,[M("a",Jd,[Mn(J(cc),{class:"h-6 w-6 text-blue-400"}),N[16]||(N[16]=M("span",null,"Ada.deniz.aktas0@gmail.com",-1))]),M("a",Yd,[Mn(J(hc),{class:"h-6 w-6 text-blue-400"}),N[17]||(N[17]=M("span",null,"+90 554 117 7404",-1))]),M("div",Zd,[Mn(J(uc),{class:"h-6 w-6 text-blue-400"}),M("span",null,bt(J(t)("contact.info.location")),1)]),M("form",{onSubmit:Ye(P,["prevent"]),class:"mt-4 flex flex-col gap-4"},[At(M("input",{"onUpdate:modelValue":N[2]||(N[2]=L=>d.value.name=L),type:"text",placeholder:J(t)("contact.form.name"),required:"",class:"input"},null,8,tp),[[St,d.value.name]]),At(M("input",{"onUpdate:modelValue":N[3]||(N[3]=L=>d.value.email=L),type:"email",placeholder:J(t)("contact.form.email"),required:"",class:"input"},null,8,ep),[[St,d.value.email]]),M("div",np,[At(M("textarea",{"onUpdate:modelValue":N[4]||(N[4]=L=>d.value.message=L),placeholder:J(t)("contact.form.message"),rows:"4",required:"",class:"input themed-textarea scrollbar-glass"},null,8,rp),[[St,d.value.message]])]),M("button",{type:"submit",class:"btn",disabled:r.value},bt(r.value?J(t)("contact.form.sending"):J(t)("contact.form.send")),9,sp)],32),i.value?(Vt(),Pt("p",ip,bt(J(t)("contact.form.sent")),1)):Hi("",!0)])):(Vt(),Pt("div",op,[M("form",{onSubmit:Ye(k,["prevent"]),class:"grid gap-3"},[At(M("input",{"onUpdate:modelValue":N[5]||(N[5]=L=>E.value.title=L),placeholder:J(t)("contact.form.project.title"),required:"",class:"input"},null,8,ap),[[St,E.value.title]]),At(M("input",{"onUpdate:modelValue":N[6]||(N[6]=L=>E.value.objective=L),placeholder:J(t)("contact.form.project.objective"),required:"",class:"input"},null,8,lp),[[St,E.value.objective]]),At(M("textarea",{"onUpdate:modelValue":N[7]||(N[7]=L=>E.value.scope=L),placeholder:J(t)("contact.form.project.scope"),rows:"3",class:"input themed-textarea scrollbar-glass"},null,8,cp),[[St,E.value.scope]]),At(M("textarea",{"onUpdate:modelValue":N[8]||(N[8]=L=>E.value.logic=L),placeholder:J(t)("contact.form.project.logic"),rows:"3",class:"input themed-textarea scrollbar-glass"},null,8,up),[[St,E.value.logic]]),At(M("input",{"onUpdate:modelValue":N[9]||(N[9]=L=>E.value.dependencies=L),placeholder:J(t)("contact.form.project.dependencies"),class:"input"},null,8,hp),[[St,E.value.dependencies]]),At(M("input",{"onUpdate:modelValue":N[10]||(N[10]=L=>E.value.performance=L),placeholder:J(t)("contact.form.project.performance"),class:"input"},null,8,fp),[[St,E.value.performance]]),M("div",dp,[M("label",pp,bt(J(t)("contact.form.project.budgetLabel")),1),M("div",mp,[At(M("input",{"onUpdate:modelValue":N[11]||(N[11]=L=>E.value.budget=L),type:"number",min:"0",step:"50",class:"input w-full pr-12 appearance-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"},null,512),[[St,E.value.budget,void 0,{number:!0}]]),M("div",gp,[M("button",{type:"button",onClick:N[12]||(N[12]=L=>E.value.budget+=50),class:"hover:scale-110"},[...N[18]||(N[18]=[M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-3 h-3"},[M("path",{"fill-rule":"evenodd",d:"M10 4l4 6H6l4-6z","clip-rule":"evenodd"})],-1)])]),M("button",{type:"button",onClick:N[13]||(N[13]=L=>E.value.budget=Math.max(0,E.value.budget-50)),class:"hover:scale-110 mt-1"},[...N[19]||(N[19]=[M("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-3 h-3 rotate-180"},[M("path",{"fill-rule":"evenodd",d:"M10 4l4 6H6l4-6z","clip-rule":"evenodd"})],-1)])])])])]),M("div",_p,[M("label",yp,bt(J(t)("contact.form.project.urgencyLabel")),1),M("div",Ep,[Mn(Gd,{modelValue:E.value.urgency,"onUpdate:modelValue":N[14]||(N[14]=L=>E.value.urgency=L),options:I.value},null,8,["modelValue","options"])])]),At(M("textarea",{"onUpdate:modelValue":N[15]||(N[15]=L=>E.value.notes=L),placeholder:J(t)("contact.form.project.notes"),rows:"3",class:"input"},null,8,vp),[[St,E.value.notes]]),M("button",{type:"submit",class:"btn",disabled:o.value},bt(o.value?J(t)("contact.form.project.submitting"):J(t)("contact.form.project.submit")),9,Tp)],32),l.value?(Vt(),Pt("p",wp,bt(J(t)("contact.form.project.sent")),1)):Hi("",!0)]))])],512))}},Rp=Xo(Ip,[["__scopeId","data-v-ae7a1190"]]);export{Rp as default};
