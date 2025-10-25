const Sl=()=>{};var Di={};/**
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
 */const Do=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Cl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],h=n[e++],f=((i&7)<<18|(o&63)<<12|(l&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},No={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,h=l?n[i+1]:0,f=i+2<n.length,p=f?n[i+2]:0,I=o>>2,A=(o&3)<<4|h>>4;let S=(h&15)<<2|p>>6,b=p&63;f||(b=64,l||(S=64)),r.push(e[I],e[A],e[S],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Do(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Cl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],h=i<n.length?e[n.charAt(i)]:0;++i;const p=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||h==null||p==null||A==null)throw new Pl;const S=o<<2|h>>4;if(r.push(S),p!==64){const b=h<<4&240|p>>2;if(r.push(b),A!==64){const O=p<<6&192|A;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bl=function(n){const t=Do(n);return No.encodeByteArray(t,!0)},Ln=function(n){return bl(n).replace(/\./g,"")},Vl=function(n){try{return No.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Dl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nl=()=>Dl().__FIREBASE_DEFAULTS__,Ol=()=>{if(typeof process>"u"||typeof Di>"u")return;const n=Di.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Vl(n[1]);return t&&JSON.parse(t)},ns=()=>{try{return Sl()||Nl()||Ol()||kl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ml=n=>ns()?.emulatorHosts?.[n],xl=n=>{const t=Ml(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Oo=()=>ns()?.config;/**
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
 */class Ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function rs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fl(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ul(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ln(JSON.stringify(e)),Ln(JSON.stringify(l)),""].join(".")}const ze={};function Bl(){const n={prod:[],emulator:[]};for(const t of Object.keys(ze))ze[t]?n.emulator.push(t):n.prod.push(t);return n}function jl(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Ni=!1;function $l(n,t){if(typeof window>"u"||typeof document>"u"||!rs(window.location.host)||ze[n]===t||ze[n]||Ni)return;ze[n]=t;function e(S){return`__firebase__banner__${S}`}const r="__firebase__banner",o=Bl().prod.length>0;function l(){const S=document.getElementById(r);S&&S.remove()}function h(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function f(S,b){S.setAttribute("width","24"),S.setAttribute("id",b),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function p(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Ni=!0,l()},S}function I(S,b){S.setAttribute("id",b),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function A(){const S=jl(r),b=e("text"),O=document.getElementById(b)||document.createElement("span"),L=e("learnmore"),N=document.getElementById(L)||document.createElement("a"),q=e("preprendIcon"),z=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const G=S.element;h(G),I(N,L);const Et=p();f(z,q),G.append(z,O,N,Et),document.body.appendChild(G)}o?(O.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function ql(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zl(){const n=ns()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hl(){return!zl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gl(){try{return typeof indexedDB=="object"}catch{return!1}}function Kl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}/**
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
 */const Wl="FirebaseError";class Ae extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Wl,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ko.prototype.create)}}class ko{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?Ql(o,r):"Error",h=`${this.serviceName}: ${l} (${i}).`;return new Ae(i,h,r)}}function Ql(n,t){return n.replace(Xl,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Xl=/\{\$([^}]+)}/g;function Fn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(Oi(o)&&Oi(l)){if(!Fn(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Oi(n){return n!==null&&typeof n=="object"}/**
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
 */function Xe(n){return n&&n._delegate?n._delegate:n}class Je{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const te="[DEFAULT]";/**
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
 */class Jl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ll;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Zl(t))try{this.getOrInitializeService({instanceIdentifier:te})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=te){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=te){return this.instances.has(t)}getOptions(t=te){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&l.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=te){return this.component?this.component.multipleInstances?t:te:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yl(n){return n===te?void 0:n}function Zl(n){return n.instantiationMode==="EAGER"}/**
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
 */class tc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Jl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const ec={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},nc=U.INFO,rc={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},sc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=rc[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Mo{constructor(t){this.name=t,this._logLevel=nc,this._logHandler=sc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ec[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const ic=(n,t)=>t.some(e=>n instanceof e);let ki,Mi;function oc(){return ki||(ki=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ac(){return Mi||(Mi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xo=new WeakMap,Ur=new WeakMap,Lo=new WeakMap,Dr=new WeakMap,ss=new WeakMap;function lc(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(jt(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&xo.set(e,n)}).catch(()=>{}),ss.set(t,n),t}function cc(n){if(Ur.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Ur.set(n,t)}let Br={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ur.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Lo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function uc(n){Br=n(Br)}function hc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Nr(this),t,...e);return Lo.set(r,t.sort?t.sort():[t]),jt(r)}:ac().includes(n)?function(...t){return n.apply(Nr(this),t),jt(xo.get(this))}:function(...t){return jt(n.apply(Nr(this),t))}}function fc(n){return typeof n=="function"?hc(n):(n instanceof IDBTransaction&&cc(n),ic(n,oc())?new Proxy(n,Br):n)}function jt(n){if(n instanceof IDBRequest)return lc(n);if(Dr.has(n))return Dr.get(n);const t=fc(n);return t!==n&&(Dr.set(n,t),ss.set(t,n)),t}const Nr=n=>ss.get(n);function dc(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,t),h=jt(l);return r&&l.addEventListener("upgradeneeded",f=>{r(jt(l.result),f.oldVersion,f.newVersion,jt(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),i&&f.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const pc=["get","getKey","getAll","getAllKeys","count"],mc=["put","add","delete","clear"],Or=new Map;function xi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Or.get(t))return Or.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=mc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pc.includes(e)))return;const o=async function(l,...h){const f=this.transaction(l,i?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(h.shift())),(await Promise.all([p[e](...h),i&&f.done]))[0]};return Or.set(t,o),o}uc(n=>({...n,get:(t,e,r)=>xi(t,e)||n.get(t,e,r),has:(t,e)=>!!xi(t,e)||n.has(t,e)}));/**
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
 */class gc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(_c(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function _c(n){return n.getComponent()?.type==="VERSION"}const jr="@firebase/app",Li="0.14.4";/**
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
 */const kt=new Mo("@firebase/app"),yc="@firebase/app-compat",Ec="@firebase/analytics-compat",Tc="@firebase/analytics",vc="@firebase/app-check-compat",Ic="@firebase/app-check",Ac="@firebase/auth",wc="@firebase/auth-compat",Rc="@firebase/database",Sc="@firebase/data-connect",Cc="@firebase/database-compat",Pc="@firebase/functions",bc="@firebase/functions-compat",Vc="@firebase/installations",Dc="@firebase/installations-compat",Nc="@firebase/messaging",Oc="@firebase/messaging-compat",kc="@firebase/performance",Mc="@firebase/performance-compat",xc="@firebase/remote-config",Lc="@firebase/remote-config-compat",Fc="@firebase/storage",Uc="@firebase/storage-compat",Bc="@firebase/firestore",jc="@firebase/ai",$c="@firebase/firestore-compat",qc="firebase",zc="12.4.0";/**
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
 */const $r="[DEFAULT]",Hc={[jr]:"fire-core",[yc]:"fire-core-compat",[Tc]:"fire-analytics",[Ec]:"fire-analytics-compat",[Ic]:"fire-app-check",[vc]:"fire-app-check-compat",[Ac]:"fire-auth",[wc]:"fire-auth-compat",[Rc]:"fire-rtdb",[Sc]:"fire-data-connect",[Cc]:"fire-rtdb-compat",[Pc]:"fire-fn",[bc]:"fire-fn-compat",[Vc]:"fire-iid",[Dc]:"fire-iid-compat",[Nc]:"fire-fcm",[Oc]:"fire-fcm-compat",[kc]:"fire-perf",[Mc]:"fire-perf-compat",[xc]:"fire-rc",[Lc]:"fire-rc-compat",[Fc]:"fire-gcs",[Uc]:"fire-gcs-compat",[Bc]:"fire-fst",[$c]:"fire-fst-compat",[jc]:"fire-vertex","fire-js":"fire-js",[qc]:"fire-js-all"};/**
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
 */const Un=new Map,Gc=new Map,qr=new Map;function Fi(n,t){try{n.container.addComponent(t)}catch(e){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Bn(n){const t=n.name;if(qr.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;qr.set(t,n);for(const e of Un.values())Fi(e,n);for(const e of Gc.values())Fi(e,n);return!0}function Kc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Wc(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Qc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new ko("app","Firebase",Qc);/**
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
 */class Xc{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const Jc=zc;function Yc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:$r,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(e||(e=Oo()),!e)throw $t.create("no-options");const o=Un.get(i);if(o){if(Fn(e,o.options)&&Fn(r,o.config))return o;throw $t.create("duplicate-app",{appName:i})}const l=new tc(i);for(const f of qr.values())l.addComponent(f);const h=new Xc(e,r,l);return Un.set(i,h),h}function Zc(n=$r){const t=Un.get(n);if(!t&&n===$r&&Oo())return Yc();if(!t)throw $t.create("no-app",{appName:n});return t}function me(n,t,e){let r=Hc[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${t}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(l.join(" "));return}Bn(new Je(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const tu="firebase-heartbeat-database",eu=1,Ye="firebase-heartbeat-store";let kr=null;function Fo(){return kr||(kr=dc(tu,eu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ye)}catch(e){console.warn(e)}}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),kr}async function nu(n){try{const e=(await Fo()).transaction(Ye),r=await e.objectStore(Ye).get(Uo(n));return await e.done,r}catch(t){if(t instanceof Ae)kt.warn(t.message);else{const e=$t.create("idb-get",{originalErrorMessage:t?.message});kt.warn(e.message)}}}async function Ui(n,t){try{const r=(await Fo()).transaction(Ye,"readwrite");await r.objectStore(Ye).put(t,Uo(n)),await r.done}catch(e){if(e instanceof Ae)kt.warn(e.message);else{const r=$t.create("idb-set",{originalErrorMessage:e?.message});kt.warn(r.message)}}}function Uo(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ru=1024,su=30;class iu{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new au(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bi();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>su){const i=lu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){kt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bi(),{heartbeatsToSend:e,unsentEntries:r}=ou(this._heartbeatsCache.heartbeats),i=Ln(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return kt.warn(t),""}}}function Bi(){return new Date().toISOString().substring(0,10)}function ou(n,t=ru){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),ji(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ji(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class au{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gl()?Kl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await nu(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ui(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ui(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ji(n){return Ln(JSON.stringify({version:2,heartbeats:n})).length}function lu(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function cu(n){Bn(new Je("platform-logger",t=>new gc(t),"PRIVATE")),Bn(new Je("heartbeat",t=>new iu(t),"PRIVATE")),me(jr,Li,n),me(jr,Li,"esm2020"),me("fire-js","")}cu("");var uu="firebase",hu="12.4.0";/**
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
 */me(uu,hu,"app");var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,d){function g(){}g.prototype=d.prototype,y.F=d.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(E,_,v){for(var m=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)m[gt-2]=arguments[gt];return d.prototype[_].apply(E,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,d,g){g||(g=0);const E=Array(16);if(typeof d=="string")for(var _=0;_<16;++_)E[_]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(_=0;_<16;++_)E[_]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=y.g[0],g=y.g[1],_=y.g[2];let v=y.g[3],m;m=d+(v^g&(_^v))+E[0]+3614090360&4294967295,d=g+(m<<7&4294967295|m>>>25),m=v+(_^d&(g^_))+E[1]+3905402710&4294967295,v=d+(m<<12&4294967295|m>>>20),m=_+(g^v&(d^g))+E[2]+606105819&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(d^_&(v^d))+E[3]+3250441966&4294967295,g=_+(m<<22&4294967295|m>>>10),m=d+(v^g&(_^v))+E[4]+4118548399&4294967295,d=g+(m<<7&4294967295|m>>>25),m=v+(_^d&(g^_))+E[5]+1200080426&4294967295,v=d+(m<<12&4294967295|m>>>20),m=_+(g^v&(d^g))+E[6]+2821735955&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(d^_&(v^d))+E[7]+4249261313&4294967295,g=_+(m<<22&4294967295|m>>>10),m=d+(v^g&(_^v))+E[8]+1770035416&4294967295,d=g+(m<<7&4294967295|m>>>25),m=v+(_^d&(g^_))+E[9]+2336552879&4294967295,v=d+(m<<12&4294967295|m>>>20),m=_+(g^v&(d^g))+E[10]+4294925233&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(d^_&(v^d))+E[11]+2304563134&4294967295,g=_+(m<<22&4294967295|m>>>10),m=d+(v^g&(_^v))+E[12]+1804603682&4294967295,d=g+(m<<7&4294967295|m>>>25),m=v+(_^d&(g^_))+E[13]+4254626195&4294967295,v=d+(m<<12&4294967295|m>>>20),m=_+(g^v&(d^g))+E[14]+2792965006&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(d^_&(v^d))+E[15]+1236535329&4294967295,g=_+(m<<22&4294967295|m>>>10),m=d+(_^v&(g^_))+E[1]+4129170786&4294967295,d=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(d^g))+E[6]+3225465664&4294967295,v=d+(m<<9&4294967295|m>>>23),m=_+(d^g&(v^d))+E[11]+643717713&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^d&(_^v))+E[0]+3921069994&4294967295,g=_+(m<<20&4294967295|m>>>12),m=d+(_^v&(g^_))+E[5]+3593408605&4294967295,d=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(d^g))+E[10]+38016083&4294967295,v=d+(m<<9&4294967295|m>>>23),m=_+(d^g&(v^d))+E[15]+3634488961&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^d&(_^v))+E[4]+3889429448&4294967295,g=_+(m<<20&4294967295|m>>>12),m=d+(_^v&(g^_))+E[9]+568446438&4294967295,d=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(d^g))+E[14]+3275163606&4294967295,v=d+(m<<9&4294967295|m>>>23),m=_+(d^g&(v^d))+E[3]+4107603335&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^d&(_^v))+E[8]+1163531501&4294967295,g=_+(m<<20&4294967295|m>>>12),m=d+(_^v&(g^_))+E[13]+2850285829&4294967295,d=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(d^g))+E[2]+4243563512&4294967295,v=d+(m<<9&4294967295|m>>>23),m=_+(d^g&(v^d))+E[7]+1735328473&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^d&(_^v))+E[12]+2368359562&4294967295,g=_+(m<<20&4294967295|m>>>12),m=d+(g^_^v)+E[5]+4294588738&4294967295,d=g+(m<<4&4294967295|m>>>28),m=v+(d^g^_)+E[8]+2272392833&4294967295,v=d+(m<<11&4294967295|m>>>21),m=_+(v^d^g)+E[11]+1839030562&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^d)+E[14]+4259657740&4294967295,g=_+(m<<23&4294967295|m>>>9),m=d+(g^_^v)+E[1]+2763975236&4294967295,d=g+(m<<4&4294967295|m>>>28),m=v+(d^g^_)+E[4]+1272893353&4294967295,v=d+(m<<11&4294967295|m>>>21),m=_+(v^d^g)+E[7]+4139469664&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^d)+E[10]+3200236656&4294967295,g=_+(m<<23&4294967295|m>>>9),m=d+(g^_^v)+E[13]+681279174&4294967295,d=g+(m<<4&4294967295|m>>>28),m=v+(d^g^_)+E[0]+3936430074&4294967295,v=d+(m<<11&4294967295|m>>>21),m=_+(v^d^g)+E[3]+3572445317&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^d)+E[6]+76029189&4294967295,g=_+(m<<23&4294967295|m>>>9),m=d+(g^_^v)+E[9]+3654602809&4294967295,d=g+(m<<4&4294967295|m>>>28),m=v+(d^g^_)+E[12]+3873151461&4294967295,v=d+(m<<11&4294967295|m>>>21),m=_+(v^d^g)+E[15]+530742520&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^d)+E[2]+3299628645&4294967295,g=_+(m<<23&4294967295|m>>>9),m=d+(_^(g|~v))+E[0]+4096336452&4294967295,d=g+(m<<6&4294967295|m>>>26),m=v+(g^(d|~_))+E[7]+1126891415&4294967295,v=d+(m<<10&4294967295|m>>>22),m=_+(d^(v|~g))+E[14]+2878612391&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~d))+E[5]+4237533241&4294967295,g=_+(m<<21&4294967295|m>>>11),m=d+(_^(g|~v))+E[12]+1700485571&4294967295,d=g+(m<<6&4294967295|m>>>26),m=v+(g^(d|~_))+E[3]+2399980690&4294967295,v=d+(m<<10&4294967295|m>>>22),m=_+(d^(v|~g))+E[10]+4293915773&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~d))+E[1]+2240044497&4294967295,g=_+(m<<21&4294967295|m>>>11),m=d+(_^(g|~v))+E[8]+1873313359&4294967295,d=g+(m<<6&4294967295|m>>>26),m=v+(g^(d|~_))+E[15]+4264355552&4294967295,v=d+(m<<10&4294967295|m>>>22),m=_+(d^(v|~g))+E[6]+2734768916&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~d))+E[13]+1309151649&4294967295,g=_+(m<<21&4294967295|m>>>11),m=d+(_^(g|~v))+E[4]+4149444226&4294967295,d=g+(m<<6&4294967295|m>>>26),m=v+(g^(d|~_))+E[11]+3174756917&4294967295,v=d+(m<<10&4294967295|m>>>22),m=_+(d^(v|~g))+E[2]+718787259&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~d))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+d&4294967295,y.g[1]=y.g[1]+(_+(m<<21&4294967295|m>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+v&4294967295}r.prototype.v=function(y,d){d===void 0&&(d=y.length);const g=d-this.blockSize,E=this.C;let _=this.h,v=0;for(;v<d;){if(_==0)for(;v<=g;)i(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<d;)if(E[_++]=y.charCodeAt(v++),_==this.blockSize){i(this,E),_=0;break}}else for(;v<d;)if(E[_++]=y[v++],_==this.blockSize){i(this,E),_=0;break}}this.h=_,this.o+=d},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var d=1;d<y.length-8;++d)y[d]=0;d=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=d&255,d/=256;for(this.v(y),y=Array(16),d=0,g=0;g<4;++g)for(let E=0;E<32;E+=8)y[d++]=this.g[g]>>>E&255;return y};function o(y,d){var g=h;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=d(y)}function l(y,d){this.h=d;const g=[];let E=!0;for(let _=y.length-1;_>=0;_--){const v=y[_]|0;E&&v==d||(g[_]=v,E=!1)}this.g=g}var h={};function f(y){return-128<=y&&y<128?o(y,function(d){return new l([d|0],d<0?-1:0)}):new l([y|0],y<0?-1:0)}function p(y){if(isNaN(y)||!isFinite(y))return A;if(y<0)return N(p(-y));const d=[];let g=1;for(let E=0;y>=g;E++)d[E]=y/g|0,g*=4294967296;return new l(d,0)}function I(y,d){if(y.length==0)throw Error("number format error: empty string");if(d=d||10,d<2||36<d)throw Error("radix out of range: "+d);if(y.charAt(0)=="-")return N(I(y.substring(1),d));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=p(Math.pow(d,8));let E=A;for(let v=0;v<y.length;v+=8){var _=Math.min(8,y.length-v);const m=parseInt(y.substring(v,v+_),d);_<8?(_=p(Math.pow(d,_)),E=E.j(_).add(p(m))):(E=E.j(g),E=E.add(p(m)))}return E}var A=f(0),S=f(1),b=f(16777216);n=l.prototype,n.m=function(){if(L(this))return-N(this).m();let y=0,d=1;for(let g=0;g<this.g.length;g++){const E=this.i(g);y+=(E>=0?E:4294967296+E)*d,d*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(O(this))return"0";if(L(this))return"-"+N(this).toString(y);const d=p(Math.pow(y,6));var g=this;let E="";for(;;){const _=Et(g,d).g;g=q(g,_.j(d));let v=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=_,O(g))return v+E;for(;v.length<6;)v="0"+v;E=v+E}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function O(y){if(y.h!=0)return!1;for(let d=0;d<y.g.length;d++)if(y.g[d]!=0)return!1;return!0}function L(y){return y.h==-1}n.l=function(y){return y=q(this,y),L(y)?-1:O(y)?0:1};function N(y){const d=y.g.length,g=[];for(let E=0;E<d;E++)g[E]=~y.g[E];return new l(g,~y.h).add(S)}n.abs=function(){return L(this)?N(this):this},n.add=function(y){const d=Math.max(this.g.length,y.g.length),g=[];let E=0;for(let _=0;_<=d;_++){let v=E+(this.i(_)&65535)+(y.i(_)&65535),m=(v>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);E=m>>>16,v&=65535,m&=65535,g[_]=m<<16|v}return new l(g,g[g.length-1]&-2147483648?-1:0)};function q(y,d){return y.add(N(d))}n.j=function(y){if(O(this)||O(y))return A;if(L(this))return L(y)?N(this).j(N(y)):N(N(this).j(y));if(L(y))return N(this.j(N(y)));if(this.l(b)<0&&y.l(b)<0)return p(this.m()*y.m());const d=this.g.length+y.g.length,g=[];for(var E=0;E<2*d;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(let _=0;_<y.g.length;_++){const v=this.i(E)>>>16,m=this.i(E)&65535,gt=y.i(_)>>>16,Wt=y.i(_)&65535;g[2*E+2*_]+=m*Wt,z(g,2*E+2*_),g[2*E+2*_+1]+=v*Wt,z(g,2*E+2*_+1),g[2*E+2*_+1]+=m*gt,z(g,2*E+2*_+1),g[2*E+2*_+2]+=v*gt,z(g,2*E+2*_+2)}for(y=0;y<d;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=d;y<2*d;y++)g[y]=0;return new l(g,0)};function z(y,d){for(;(y[d]&65535)!=y[d];)y[d+1]+=y[d]>>>16,y[d]&=65535,d++}function G(y,d){this.g=y,this.h=d}function Et(y,d){if(O(d))throw Error("division by zero");if(O(y))return new G(A,A);if(L(y))return d=Et(N(y),d),new G(N(d.g),N(d.h));if(L(d))return d=Et(y,N(d)),new G(N(d.g),d.h);if(y.g.length>30){if(L(y)||L(d))throw Error("slowDivide_ only works with positive integers.");for(var g=S,E=d;E.l(y)<=0;)g=vt(g),E=vt(E);var _=dt(g,1),v=dt(E,1);for(E=dt(E,2),g=dt(g,2);!O(E);){var m=v.add(E);m.l(y)<=0&&(_=_.add(g),v=m),E=dt(E,1),g=dt(g,1)}return d=q(y,_.j(d)),new G(_,d)}for(_=A;y.l(d)>=0;){for(g=Math.max(1,Math.floor(y.m()/d.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),v=p(g),m=v.j(d);L(m)||m.l(y)>0;)g-=E,v=p(g),m=v.j(d);O(v)&&(v=S),_=_.add(v),y=q(y,m)}return new G(_,y)}n.B=function(y){return Et(this,y).h},n.and=function(y){const d=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)&y.i(E);return new l(g,this.h&y.h)},n.or=function(y){const d=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)|y.i(E);return new l(g,this.h|y.h)},n.xor=function(y){const d=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)^y.i(E);return new l(g,this.h^y.h)};function vt(y){const d=y.g.length+1,g=[];for(let E=0;E<d;E++)g[E]=y.i(E)<<1|y.i(E-1)>>>31;return new l(g,y.h)}function dt(y,d){const g=d>>5;d%=32;const E=y.g.length-g,_=[];for(let v=0;v<E;v++)_[v]=d>0?y.i(v+g)>>>d|y.i(v+g+1)<<32-d:y.i(v+g);return new l(_,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=I,is=l}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});var Sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bo,qe,jo,Nn,zr,$o,qo,zo;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sn=="object"&&Sn];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var u=0;u<s.length-1;u++){var T=s[u];if(!(T in c))break t;c=c[T]}s=s[s.length-1],u=c[s],a=a(u),a!=u&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var c=[],u;for(u in a)Object.prototype.hasOwnProperty.call(a,u)&&c.push([u,a[u]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function h(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function f(s,a,c){return s.call.apply(s.bind,arguments)}function p(s,a,c){return p=f,p.apply(null,arguments)}function I(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var u=c.slice();return u.push.apply(u,arguments),s.apply(this,u)}}function A(s,a){function c(){}c.prototype=a.prototype,s.Z=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Ob=function(u,T,w){for(var P=Array(arguments.length-2),M=2;M<arguments.length;M++)P[M-2]=arguments[M];return a.prototype[T].apply(u,P)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function b(s){const a=s.length;if(a>0){const c=Array(a);for(let u=0;u<a;u++)c[u]=s[u];return c}return[]}function O(s,a){for(let u=1;u<arguments.length;u++){const T=arguments[u];var c=typeof T;if(c=c!="object"?c:T?Array.isArray(T)?"array":c:"null",c=="array"||c=="object"&&typeof T.length=="number"){c=s.length||0;const w=T.length||0;s.length=c+w;for(let P=0;P<w;P++)s[c+P]=T[P]}else s.push(T)}}class L{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function N(s){l.setTimeout(()=>{throw s},0)}function q(){var s=y;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class z{constructor(){this.h=this.g=null}add(a,c){const u=G.get();u.set(a,c),this.h?this.h.next=u:this.g=u,this.h=u}}var G=new L(()=>new Et,s=>s.reset());class Et{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let vt,dt=!1,y=new z,d=()=>{const s=Promise.resolve(void 0);vt=()=>{s.then(g)}};function g(){for(var s;s=q();){try{s.h.call(s.g)}catch(c){N(c)}var a=G;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}dt=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return s})();function m(s){return/^[\s\xa0]*$/.test(s)}function gt(s,a){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}A(gt,_),gt.prototype.init=function(s,a){const c=this.type=s.type,u=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&gt.Z.h.call(this)},gt.prototype.h=function(){gt.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Wt="closure_listenable_"+(Math.random()*1e6|0),Wa=0;function Qa(s,a,c,u,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!u,this.ha=T,this.key=++Wa,this.da=this.fa=!1}function hn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function fn(s,a,c){for(const u in s)a.call(c,s[u],u,s)}function Xa(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function Vs(s){const a={};for(const c in s)a[c]=s[c];return a}const Ds="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ns(s,a){let c,u;for(let T=1;T<arguments.length;T++){u=arguments[T];for(c in u)s[c]=u[c];for(let w=0;w<Ds.length;w++)c=Ds[w],Object.prototype.hasOwnProperty.call(u,c)&&(s[c]=u[c])}}function dn(s){this.src=s,this.g={},this.h=0}dn.prototype.add=function(s,a,c,u,T){const w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);const P=lr(s,a,u,T);return P>-1?(a=s[P],c||(a.fa=!1)):(a=new Qa(a,this.src,w,!!u,T),a.fa=c,s.push(a)),a};function ar(s,a){const c=a.type;if(c in s.g){var u=s.g[c],T=Array.prototype.indexOf.call(u,a,void 0),w;(w=T>=0)&&Array.prototype.splice.call(u,T,1),w&&(hn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function lr(s,a,c,u){for(let T=0;T<s.length;++T){const w=s[T];if(!w.da&&w.listener==a&&w.capture==!!c&&w.ha==u)return T}return-1}var cr="closure_lm_"+(Math.random()*1e6|0),ur={};function Os(s,a,c,u,T){if(Array.isArray(a)){for(let w=0;w<a.length;w++)Os(s,a[w],c,u,T);return null}return c=xs(c),s&&s[Wt]?s.J(a,c,h(u)?!!u.capture:!1,T):Ja(s,a,c,!1,u,T)}function Ja(s,a,c,u,T,w){if(!a)throw Error("Invalid event type");const P=h(T)?!!T.capture:!!T;let M=fr(s);if(M||(s[cr]=M=new dn(s)),c=M.add(a,c,u,P,w),c.proxy)return c;if(u=Ya(),c.proxy=u,u.src=s,u.listener=c,s.addEventListener)v||(T=P),T===void 0&&(T=!1),s.addEventListener(a.toString(),u,T);else if(s.attachEvent)s.attachEvent(Ms(a.toString()),u);else if(s.addListener&&s.removeListener)s.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Ya(){function s(c){return a.call(s.src,s.listener,c)}const a=Za;return s}function ks(s,a,c,u,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)ks(s,a[w],c,u,T);else u=h(u)?!!u.capture:!!u,c=xs(c),s&&s[Wt]?(s=s.i,w=String(a).toString(),w in s.g&&(a=s.g[w],c=lr(a,c,u,T),c>-1&&(hn(a[c]),Array.prototype.splice.call(a,c,1),a.length==0&&(delete s.g[w],s.h--)))):s&&(s=fr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=lr(a,c,u,T)),(c=s>-1?a[s]:null)&&hr(c))}function hr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Wt])ar(a.i,s);else{var c=s.type,u=s.proxy;a.removeEventListener?a.removeEventListener(c,u,s.capture):a.detachEvent?a.detachEvent(Ms(c),u):a.addListener&&a.removeListener&&a.removeListener(u),(c=fr(a))?(ar(c,s),c.h==0&&(c.src=null,a[cr]=null)):hn(s)}}}function Ms(s){return s in ur?ur[s]:ur[s]="on"+s}function Za(s,a){if(s.da)s=!0;else{a=new gt(a,this);const c=s.listener,u=s.ha||s.src;s.fa&&hr(s),s=c.call(u,a)}return s}function fr(s){return s=s[cr],s instanceof dn?s:null}var dr="__closure_events_fn_"+(Math.random()*1e9>>>0);function xs(s){return typeof s=="function"?s:(s[dr]||(s[dr]=function(a){return s.handleEvent(a)}),s[dr])}function lt(){E.call(this),this.i=new dn(this),this.M=this,this.G=null}A(lt,E),lt.prototype[Wt]=!0,lt.prototype.removeEventListener=function(s,a,c,u){ks(this,s,a,c,u)};function pt(s,a){var c,u=s.G;if(u)for(c=[];u;u=u.G)c.push(u);if(s=s.M,u=a.type||a,typeof a=="string")a=new _(a,s);else if(a instanceof _)a.target=a.target||s;else{var T=a;a=new _(u,s),Ns(a,T)}T=!0;let w,P;if(c)for(P=c.length-1;P>=0;P--)w=a.g=c[P],T=pn(w,u,!0,a)&&T;if(w=a.g=s,T=pn(w,u,!0,a)&&T,T=pn(w,u,!1,a)&&T,c)for(P=0;P<c.length;P++)w=a.g=c[P],T=pn(w,u,!1,a)&&T}lt.prototype.N=function(){if(lt.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const c=s.g[a];for(let u=0;u<c.length;u++)hn(c[u]);delete s.g[a],s.h--}}this.G=null},lt.prototype.J=function(s,a,c,u){return this.i.add(String(s),a,!1,c,u)},lt.prototype.K=function(s,a,c,u){return this.i.add(String(s),a,!0,c,u)};function pn(s,a,c,u){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let T=!0;for(let w=0;w<a.length;++w){const P=a[w];if(P&&!P.da&&P.capture==c){const M=P.listener,tt=P.ha||P.src;P.fa&&ar(s.i,P),T=M.call(tt,u)!==!1&&T}}return T&&!u.defaultPrevented}function tl(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=p(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:l.setTimeout(s,a||0)}function Ls(s){s.g=tl(()=>{s.g=null,s.i&&(s.i=!1,Ls(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class el extends E{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ls(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Se(s){E.call(this),this.h=s,this.g={}}A(Se,E);var Fs=[];function Us(s){fn(s.g,function(a,c){this.g.hasOwnProperty(c)&&hr(a)},s),s.g={}}Se.prototype.N=function(){Se.Z.N.call(this),Us(this)},Se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pr=l.JSON.stringify,nl=l.JSON.parse,rl=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Bs(){}function js(){}var Ce={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function mr(){_.call(this,"d")}A(mr,_);function gr(){_.call(this,"c")}A(gr,_);var Qt={},$s=null;function mn(){return $s=$s||new lt}Qt.Ia="serverreachability";function qs(s){_.call(this,Qt.Ia,s)}A(qs,_);function Pe(s){const a=mn();pt(a,new qs(a))}Qt.STAT_EVENT="statevent";function zs(s,a){_.call(this,Qt.STAT_EVENT,s),this.stat=a}A(zs,_);function mt(s){const a=mn();pt(a,new zs(a,s))}Qt.Ja="timingevent";function Hs(s,a){_.call(this,Qt.Ja,s),this.size=a}A(Hs,_);function be(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function Ve(){this.g=!0}Ve.prototype.ua=function(){this.g=!1};function sl(s,a,c,u,T,w){s.info(function(){if(s.g)if(w){var P="",M=w.split("&");for(let j=0;j<M.length;j++){var tt=M[j].split("=");if(tt.length>1){const et=tt[0];tt=tt[1];const Ct=et.split("_");P=Ct.length>=2&&Ct[1]=="type"?P+(et+"="+tt+"&"):P+(et+"=redacted&")}}}else P=null;else P=w;return"XMLHTTP REQ ("+u+") [attempt "+T+"]: "+a+`
`+c+`
`+P})}function il(s,a,c,u,T,w,P){s.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+T+"]: "+a+`
`+c+`
`+w+" "+P})}function ue(s,a,c,u){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+al(s,c)+(u?" "+u:"")})}function ol(s,a){s.info(function(){return"TIMEOUT: "+a})}Ve.prototype.info=function(){};function al(s,a){if(!s.g)return a;if(!a)return null;try{const w=JSON.parse(a);if(w){for(s=0;s<w.length;s++)if(Array.isArray(w[s])){var c=w[s];if(!(c.length<2)){var u=c[1];if(Array.isArray(u)&&!(u.length<1)){var T=u[0];if(T!="noop"&&T!="stop"&&T!="close")for(let P=1;P<u.length;P++)u[P]=""}}}}return pr(w)}catch{return a}}var gn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ks;function _r(){}A(_r,Bs),_r.prototype.g=function(){return new XMLHttpRequest},Ks=new _r;function De(s){return encodeURIComponent(String(s))}function ll(s){var a=1;s=s.split(":");const c=[];for(;a>0&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function Mt(s,a,c,u){this.j=s,this.i=a,this.l=c,this.S=u||1,this.V=new Se(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ws}function Ws(){this.i=null,this.g="",this.h=!1}var Qs={},yr={};function Er(s,a,c){s.M=1,s.A=yn(St(a)),s.u=c,s.R=!0,Xs(s,null)}function Xs(s,a){s.F=Date.now(),_n(s),s.B=St(s.A);var c=s.B,u=s.S;Array.isArray(u)||(u=[String(u)]),ci(c.i,"t",u),s.C=0,c=s.j.L,s.h=new Ws,s.g=Ci(s.j,c?a:null,!s.u),s.P>0&&(s.O=new el(p(s.Y,s,s.g),s.P)),a=s.V,c=s.g,u=s.ba;var T="readystatechange";Array.isArray(T)||(T&&(Fs[0]=T.toString()),T=Fs);for(let w=0;w<T.length;w++){const P=Os(c,T[w],u||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.J?Vs(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),Pe(),sl(s.i,s.v,s.B,s.l,s.S,s.u)}Mt.prototype.ba=function(s){s=s.target;const a=this.O;a&&Ft(s)==3?a.j():this.Y(s)},Mt.prototype.Y=function(s){try{if(s==this.g)t:{const M=Ft(this.g),tt=this.g.ya(),j=this.g.ca();if(!(M<3)&&(M!=3||this.g&&(this.h.h||this.g.la()||gi(this.g)))){this.K||M!=4||tt==7||(tt==8||j<=0?Pe(3):Pe(2)),Tr(this);var a=this.g.ca();this.X=a;var c=cl(this);if(this.o=a==200,il(this.i,this.v,this.B,this.l,this.S,M,a),this.o){if(this.U&&!this.L){e:{if(this.g){var u,T=this.g;if((u=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(u)){var w=u;break e}}w=null}if(s=w)ue(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,vr(this,s);else{this.o=!1,this.m=3,mt(12),Xt(this),Ne(this);break t}}if(this.R){s=!0;let et;for(;!this.K&&this.C<c.length;)if(et=ul(this,c),et==yr){M==4&&(this.m=4,mt(14),s=!1),ue(this.i,this.l,null,"[Incomplete Response]");break}else if(et==Qs){this.m=4,mt(15),ue(this.i,this.l,c,"[Invalid Chunk]"),s=!1;break}else ue(this.i,this.l,et,null),vr(this,et);if(Js(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),M!=4||c.length!=0||this.h.h||(this.m=1,mt(16),s=!1),this.o=this.o&&s,!s)ue(this.i,this.l,c,"[Invalid Chunked Response]"),Xt(this),Ne(this);else if(c.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),br(P),P.P=!0,mt(11))}}else ue(this.i,this.l,c,null),vr(this,c);M==4&&Xt(this),this.o&&!this.K&&(M==4?Ai(this.j,this):(this.o=!1,_n(this)))}else wl(this.g),a==400&&c.indexOf("Unknown SID")>0?(this.m=3,mt(12)):(this.m=0,mt(13)),Xt(this),Ne(this)}}}catch{}finally{}};function cl(s){if(!Js(s))return s.g.la();const a=gi(s.g);if(a==="")return"";let c="";const u=a.length,T=Ft(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return Xt(s),Ne(s),"";s.h.i=new l.TextDecoder}for(let w=0;w<u;w++)s.h.h=!0,c+=s.h.i.decode(a[w],{stream:!(T&&w==u-1)});return a.length=0,s.h.g+=c,s.C=0,s.h.g}function Js(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function ul(s,a){var c=s.C,u=a.indexOf(`
`,c);return u==-1?yr:(c=Number(a.substring(c,u)),isNaN(c)?Qs:(u+=1,u+c>a.length?yr:(a=a.slice(u,u+c),s.C=u+c,a)))}Mt.prototype.cancel=function(){this.K=!0,Xt(this)};function _n(s){s.T=Date.now()+s.H,Ys(s,s.H)}function Ys(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=be(p(s.aa,s),a)}function Tr(s){s.D&&(l.clearTimeout(s.D),s.D=null)}Mt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(ol(this.i,this.B),this.M!=2&&(Pe(),mt(17)),Xt(this),this.m=2,Ne(this)):Ys(this,this.T-s)};function Ne(s){s.j.I==0||s.K||Ai(s.j,s)}function Xt(s){Tr(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,Us(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function vr(s,a){try{var c=s.j;if(c.I!=0&&(c.g==s||Ir(c.h,s))){if(!s.L&&Ir(c.h,s)&&c.I==3){try{var u=c.Ba.g.parse(a)}catch{u=null}if(Array.isArray(u)&&u.length==3){var T=u;if(T[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<s.F)An(c),vn(c);else break t;Pr(c),mt(18)}}else c.xa=T[1],0<c.xa-c.K&&T[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=be(p(c.Va,c),6e3));ei(c.h)<=1&&c.ta&&(c.ta=void 0)}else Yt(c,11)}else if((s.L||c.g==s)&&An(c),!m(a))for(T=c.Ba.g.parse(a),a=0;a<T.length;a++){let j=T[a];const et=j[0];if(!(et<=c.K))if(c.K=et,j=j[1],c.I==2)if(j[0]=="c"){c.M=j[1],c.ba=j[2];const Ct=j[3];Ct!=null&&(c.ka=Ct,c.j.info("VER="+c.ka));const Zt=j[4];Zt!=null&&(c.za=Zt,c.j.info("SVER="+c.za));const Ut=j[5];Ut!=null&&typeof Ut=="number"&&Ut>0&&(u=1.5*Ut,c.O=u,c.j.info("backChannelRequestTimeoutMs_="+u)),u=c;const Bt=s.g;if(Bt){const Rn=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rn){var w=u.h;w.g||Rn.indexOf("spdy")==-1&&Rn.indexOf("quic")==-1&&Rn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Ar(w,w.h),w.h=null))}if(u.G){const Vr=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Vr&&(u.wa=Vr,H(u.J,u.G,Vr))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-s.F,c.j.info("Handshake RTT: "+c.T+"ms")),u=c;var P=s;if(u.na=Si(u,u.L?u.ba:null,u.W),P.L){ni(u.h,P);var M=P,tt=u.O;tt&&(M.H=tt),M.D&&(Tr(M),_n(M)),u.g=P}else vi(u);c.i.length>0&&In(c)}else j[0]!="stop"&&j[0]!="close"||Yt(c,7);else c.I==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Yt(c,7):Cr(c):j[0]!="noop"&&c.l&&c.l.qa(j),c.A=0)}}Pe(4)}catch{}}var hl=class{constructor(s,a){this.g=s,this.map=a}};function Zs(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ti(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ei(s){return s.h?1:s.g?s.g.size:0}function Ir(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Ar(s,a){s.g?s.g.add(a):s.h=a}function ni(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Zs.prototype.cancel=function(){if(this.i=ri(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ri(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.G);return a}return b(s.i)}var si=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fl(s,a){if(s){s=s.split("&");for(let c=0;c<s.length;c++){const u=s[c].indexOf("=");let T,w=null;u>=0?(T=s[c].substring(0,u),w=s[c].substring(u+1)):T=s[c],a(T,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function xt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof xt?(this.l=s.l,Oe(this,s.j),this.o=s.o,this.g=s.g,ke(this,s.u),this.h=s.h,wr(this,ui(s.i)),this.m=s.m):s&&(a=String(s).match(si))?(this.l=!1,Oe(this,a[1]||"",!0),this.o=Me(a[2]||""),this.g=Me(a[3]||"",!0),ke(this,a[4]),this.h=Me(a[5]||"",!0),wr(this,a[6]||"",!0),this.m=Me(a[7]||"")):(this.l=!1,this.i=new Le(null,this.l))}xt.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(xe(a,ii,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(xe(a,ii,!0),"@"),s.push(De(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&s.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(xe(c,c.charAt(0)=="/"?ml:pl,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",xe(c,_l)),s.join("")},xt.prototype.resolve=function(s){const a=St(this);let c=!!s.j;c?Oe(a,s.j):c=!!s.o,c?a.o=s.o:c=!!s.g,c?a.g=s.g:c=s.u!=null;var u=s.h;if(c)ke(a,s.u);else if(c=!!s.h){if(u.charAt(0)!="/")if(this.g&&!this.h)u="/"+u;else{var T=a.h.lastIndexOf("/");T!=-1&&(u=a.h.slice(0,T+1)+u)}if(T=u,T==".."||T==".")u="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){u=T.lastIndexOf("/",0)==0,T=T.split("/");const w=[];for(let P=0;P<T.length;){const M=T[P++];M=="."?u&&P==T.length&&w.push(""):M==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),u&&P==T.length&&w.push("")):(w.push(M),u=!0)}u=w.join("/")}else u=T}return c?a.h=u:c=s.i.toString()!=="",c?wr(a,ui(s.i)):c=!!s.m,c&&(a.m=s.m),a};function St(s){return new xt(s)}function Oe(s,a,c){s.j=c?Me(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function ke(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function wr(s,a,c){a instanceof Le?(s.i=a,yl(s.i,s.l)):(c||(a=xe(a,gl)),s.i=new Le(a,s.l))}function H(s,a,c){s.i.set(a,c)}function yn(s){return H(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Me(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function xe(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,dl),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function dl(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ii=/[#\/\?@]/g,pl=/[#\?:]/g,ml=/[#\?]/g,gl=/[#\?@]/g,_l=/#/g;function Le(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Jt(s){s.g||(s.g=new Map,s.h=0,s.i&&fl(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=Le.prototype,n.add=function(s,a){Jt(this),this.i=null,s=he(this,s);let c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function oi(s,a){Jt(s),a=he(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function ai(s,a){return Jt(s),a=he(s,a),s.g.has(a)}n.forEach=function(s,a){Jt(this),this.g.forEach(function(c,u){c.forEach(function(T){s.call(a,T,u,this)},this)},this)};function li(s,a){Jt(s);let c=[];if(typeof a=="string")ai(s,a)&&(c=c.concat(s.g.get(he(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)c=c.concat(s[a]);return c}n.set=function(s,a){return Jt(this),this.i=null,s=he(this,s),ai(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=li(this,s),s.length>0?String(s[0]):a):a};function ci(s,a,c){oi(s,a),c.length>0&&(s.i=null,s.g.set(he(s,a),b(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let u=0;u<a.length;u++){var c=a[u];const T=De(c);c=li(this,c);for(let w=0;w<c.length;w++){let P=T;c[w]!==""&&(P+="="+De(c[w])),s.push(P)}}return this.i=s.join("&")};function ui(s){const a=new Le;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function he(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function yl(s,a){a&&!s.j&&(Jt(s),s.i=null,s.g.forEach(function(c,u){const T=u.toLowerCase();u!=T&&(oi(this,u),ci(this,T,c))},s)),s.j=a}function El(s,a){const c=new Ve;if(l.Image){const u=new Image;u.onload=I(Lt,c,"TestLoadImage: loaded",!0,a,u),u.onerror=I(Lt,c,"TestLoadImage: error",!1,a,u),u.onabort=I(Lt,c,"TestLoadImage: abort",!1,a,u),u.ontimeout=I(Lt,c,"TestLoadImage: timeout",!1,a,u),l.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=s}else a(!1)}function Tl(s,a){const c=new Ve,u=new AbortController,T=setTimeout(()=>{u.abort(),Lt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:u.signal}).then(w=>{clearTimeout(T),w.ok?Lt(c,"TestPingServer: ok",!0,a):Lt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Lt(c,"TestPingServer: error",!1,a)})}function Lt(s,a,c,u,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),u(c)}catch{}}function vl(){this.g=new rl}function Rr(s){this.i=s.Sb||null,this.h=s.ab||!1}A(Rr,Bs),Rr.prototype.g=function(){return new En(this.i,this.h)};function En(s,a){lt.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(En,lt),n=En.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,Ue(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||l).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fe(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ue(this)),this.g&&(this.readyState=3,Ue(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hi(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function hi(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Fe(this):Ue(this),this.readyState==3&&hi(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Fe(this))},n.Na=function(s){this.g&&(this.response=s,Fe(this))},n.ga=function(){this.g&&Fe(this)};function Fe(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Ue(s)}n.setRequestHeader=function(s,a){this.A.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function Ue(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(En.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function fi(s){let a="";return fn(s,function(c,u){a+=u,a+=":",a+=c,a+=`\r
`}),a}function Sr(s,a,c){t:{for(u in c){var u=!1;break t}u=!0}u||(c=fi(c),typeof s=="string"?c!=null&&De(c):H(s,a,c))}function X(s){lt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(X,lt);var Il=/^https?$/i,Al=["POST","PUT"];n=X.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,a,c,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ks.g(),this.g.onreadystatechange=S(p(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){di(this,w);return}if(s=c||"",c=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var T in u)c.set(T,u[T]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const w of u.keys())c.set(w,u.get(w));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(c.keys()).find(w=>w.toLowerCase()=="content-type"),T=l.FormData&&s instanceof l.FormData,!(Array.prototype.indexOf.call(Al,a,void 0)>=0)||u||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,P]of c)this.g.setRequestHeader(w,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(w){di(this,w)}};function di(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,pi(s),Tn(s)}function pi(s){s.A||(s.A=!0,pt(s,"complete"),pt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,pt(this,"complete"),pt(this,"abort"),Tn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tn(this,!0)),X.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?mi(this):this.Xa())},n.Xa=function(){mi(this)};function mi(s){if(s.h&&typeof o<"u"){if(s.v&&Ft(s)==4)setTimeout(s.Ca.bind(s),0);else if(pt(s,"readystatechange"),Ft(s)==4){s.h=!1;try{const w=s.ca();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var u;if(u=w===0){let P=String(s.D).match(si)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),u=!Il.test(P?P.toLowerCase():"")}c=u}if(c)pt(s,"complete"),pt(s,"success");else{s.o=6;try{var T=Ft(s)>2?s.g.statusText:""}catch{T=""}s.l=T+" ["+s.ca()+"]",pi(s)}}finally{Tn(s)}}}}function Tn(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const c=s.g;s.g=null,a||pt(s,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ft(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Ft(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),nl(a)}};function gi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function wl(s){const a={};s=(s.g&&Ft(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<s.length;u++){if(m(s[u]))continue;var c=ll(s[u]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const w=a[T]||[];a[T]=w,w.push(c)}Xa(a,function(u){return u.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Be(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function _i(s){this.za=0,this.i=[],this.j=new Ve,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Be("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Be("baseRetryDelayMs",5e3,s),this.Za=Be("retryDelaySeedMs",1e4,s),this.Ta=Be("forwardChannelMaxRetries",2,s),this.va=Be("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Zs(s&&s.concurrentRequestLimit),this.Ba=new vl,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=_i.prototype,n.ka=8,n.I=1,n.connect=function(s,a,c,u){mt(0),this.W=s,this.H=a||{},c&&u!==void 0&&(this.H.OSID=c,this.H.OAID=u),this.F=this.X,this.J=Si(this,null,this.W),In(this)};function Cr(s){if(yi(s),s.I==3){var a=s.V++,c=St(s.J);if(H(c,"SID",s.M),H(c,"RID",a),H(c,"TYPE","terminate"),je(s,c),a=new Mt(s,s.j,a),a.M=2,a.A=yn(St(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.A.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.A,c=!0),c||(a.g=Ci(a.j,null),a.g.ea(a.A)),a.F=Date.now(),_n(a)}Ri(s)}function vn(s){s.g&&(br(s),s.g.cancel(),s.g=null)}function yi(s){vn(s),s.v&&(l.clearTimeout(s.v),s.v=null),An(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&l.clearTimeout(s.m),s.m=null)}function In(s){if(!ti(s.h)&&!s.m){s.m=!0;var a=s.Ea;vt||d(),dt||(vt(),dt=!0),y.add(a,s),s.D=0}}function Rl(s,a){return ei(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=be(p(s.Ea,s,a),wi(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const T=new Mt(this,this.j,s);let w=this.o;if(this.U&&(w?(w=Vs(w),Ns(w,this.U)):w=this.U),this.u!==null||this.R||(T.J=w,w=null),this.S)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var u=this.i[c];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break e}u=void 0}if(u===void 0)break;if(a+=u,a>4096){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Ti(this,T,a),c=St(this.J),H(c,"RID",s),H(c,"CVER",22),this.G&&H(c,"X-HTTP-Session-Id",this.G),je(this,c),w&&(this.R?a="headers="+De(fi(w))+"&"+a:this.u&&Sr(c,this.u,w)),Ar(this.h,T),this.Ra&&H(c,"TYPE","init"),this.S?(H(c,"$req",a),H(c,"SID","null"),T.U=!0,Er(T,c,null)):Er(T,c,a),this.I=2}}else this.I==3&&(s?Ei(this,s):this.i.length==0||ti(this.h)||Ei(this))};function Ei(s,a){var c;a?c=a.l:c=s.V++;const u=St(s.J);H(u,"SID",s.M),H(u,"RID",c),H(u,"AID",s.K),je(s,u),s.u&&s.o&&Sr(u,s.u,s.o),c=new Mt(s,s.j,c,s.D+1),s.u===null&&(c.J=s.o),a&&(s.i=a.G.concat(s.i)),a=Ti(s,c,1e3),c.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Ar(s.h,c),Er(c,u,a)}function je(s,a){s.H&&fn(s.H,function(c,u){H(a,u,c)}),s.l&&fn({},function(c,u){H(a,u,c)})}function Ti(s,a,c){c=Math.min(s.i.length,c);const u=s.l?p(s.l.Ka,s.l,s):null;t:{var T=s.i;let M=-1;for(;;){const tt=["count="+c];M==-1?c>0?(M=T[0].g,tt.push("ofs="+M)):M=0:tt.push("ofs="+M);let j=!0;for(let et=0;et<c;et++){var w=T[et].g;const Ct=T[et].map;if(w-=M,w<0)M=Math.max(0,T[et].g-100),j=!1;else try{w="req"+w+"_"||"";try{var P=Ct instanceof Map?Ct:Object.entries(Ct);for(const[Zt,Ut]of P){let Bt=Ut;h(Ut)&&(Bt=pr(Ut)),tt.push(w+Zt+"="+encodeURIComponent(Bt))}}catch(Zt){throw tt.push(w+"type="+encodeURIComponent("_badmap")),Zt}}catch{u&&u(Ct)}}if(j){P=tt.join("&");break t}}P=void 0}return s=s.i.splice(0,c),a.G=s,P}function vi(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;vt||d(),dt||(vt(),dt=!0),y.add(a,s),s.A=0}}function Pr(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=be(p(s.Da,s),wi(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,Ii(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=be(p(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,mt(10),vn(this),Ii(this))};function br(s){s.B!=null&&(l.clearTimeout(s.B),s.B=null)}function Ii(s){s.g=new Mt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=St(s.na);H(a,"RID","rpc"),H(a,"SID",s.M),H(a,"AID",s.K),H(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&H(a,"TO",s.ia),H(a,"TYPE","xmlhttp"),je(s,a),s.u&&s.o&&Sr(a,s.u,s.o),s.O&&(s.g.H=s.O);var c=s.g;s=s.ba,c.M=1,c.A=yn(St(a)),c.u=null,c.R=!0,Xs(c,s)}n.Va=function(){this.C!=null&&(this.C=null,vn(this),Pr(this),mt(19))};function An(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Ai(s,a){var c=null;if(s.g==a){An(s),br(s),s.g=null;var u=2}else if(Ir(s.h,a))c=a.G,ni(s.h,a),u=1;else return;if(s.I!=0){if(a.o)if(u==1){c=a.u?a.u.length:0,a=Date.now()-a.F;var T=s.D;u=mn(),pt(u,new Hs(u,c)),In(s)}else vi(s);else if(T=a.m,T==3||T==0&&a.X>0||!(u==1&&Rl(s,a)||u==2&&Pr(s)))switch(c&&c.length>0&&(a=s.h,a.i=a.i.concat(c)),T){case 1:Yt(s,5);break;case 4:Yt(s,10);break;case 3:Yt(s,6);break;default:Yt(s,2)}}}function wi(s,a){let c=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(c*=2),c*a}function Yt(s,a){if(s.j.info("Error code "+a),a==2){var c=p(s.bb,s),u=s.Ua;const T=!u;u=new xt(u||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Oe(u,"https"),yn(u),T?El(u.toString(),c):Tl(u.toString(),c)}else mt(2);s.I=0,s.l&&s.l.pa(a),Ri(s),yi(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Ri(s){if(s.I=0,s.ja=[],s.l){const a=ri(s.h);(a.length!=0||s.i.length!=0)&&(O(s.ja,a),O(s.ja,s.i),s.h.i.length=0,b(s.i),s.i.length=0),s.l.oa()}}function Si(s,a,c){var u=c instanceof xt?St(c):new xt(c);if(u.g!="")a&&(u.g=a+"."+u.g),ke(u,u.u);else{var T=l.location;u=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;const w=new xt(null);u&&Oe(w,u),a&&(w.g=a),T&&ke(w,T),c&&(w.h=c),u=w}return c=s.G,a=s.wa,c&&a&&H(u,c,a),H(u,"VER",s.ka),je(s,u),u}function Ci(s,a,c){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new X(new Rr({ab:c})):new X(s.ma),a.Fa(s.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pi(){}n=Pi.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function wn(){}wn.prototype.g=function(s,a){return new Tt(s,a)};function Tt(s,a){lt.call(this),this.g=new _i(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!m(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!m(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new fe(this)}A(Tt,lt),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Cr(this.g)},Tt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.v&&(c={},c.__data__=pr(s),s=c);a.i.push(new hl(a.Ya++,s)),a.I==3&&In(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Cr(this.g),delete this.g,Tt.Z.N.call(this)};function bi(s){mr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}A(bi,mr);function Vi(){gr.call(this),this.status=1}A(Vi,gr);function fe(s){this.g=s}A(fe,Pi),fe.prototype.ra=function(){pt(this.g,"a")},fe.prototype.qa=function(s){pt(this.g,new bi(s))},fe.prototype.pa=function(s){pt(this.g,new Vi)},fe.prototype.oa=function(){pt(this.g,"b")},wn.prototype.createWebChannel=wn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,zo=function(){return new wn},qo=function(){return mn()},$o=Qt,zr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},gn.NO_ERROR=0,gn.TIMEOUT=8,gn.HTTP_ERROR=6,Nn=gn,Gs.COMPLETE="complete",jo=Gs,js.EventType=Ce,Ce.OPEN="a",Ce.CLOSE="b",Ce.ERROR="c",Ce.MESSAGE="d",lt.prototype.listen=lt.prototype.J,qe=js,X.prototype.listenOnce=X.prototype.K,X.prototype.getLastError=X.prototype.Ha,X.prototype.getLastErrorCode=X.prototype.ya,X.prototype.getStatus=X.prototype.ca,X.prototype.getResponseJson=X.prototype.La,X.prototype.getResponseText=X.prototype.la,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Fa,Bo=X}).apply(typeof Sn<"u"?Sn:typeof self<"u"?self:typeof window<"u"?window:{});const qi="@firebase/firestore",zi="4.9.2";/**
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
 */class ut{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let we="12.3.0";/**
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
 */const se=new Mo("@firebase/firestore");function de(){return se.logLevel}function V(n,...t){if(se.logLevel<=U.DEBUG){const e=t.map(os);se.debug(`Firestore (${we}): ${n}`,...e)}}function ie(n,...t){if(se.logLevel<=U.ERROR){const e=t.map(os);se.error(`Firestore (${we}): ${n}`,...e)}}function Yn(n,...t){if(se.logLevel<=U.WARN){const e=t.map(os);se.warn(`Firestore (${we}): ${n}`,...e)}}function os(n){if(typeof n=="string")return n;try{/**
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
 */function x(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Ho(n,r,e)}function Ho(n,t,e){let r=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw ie(r),new Error(r)}function J(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Ho(t,i,r)}function $(n,t){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Ae{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ne{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class Go{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ut.UNAUTHENTICATED)))}shutdown(){}}class du{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class pu{constructor(t){this.t=t,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){J(this.o===void 0,42304);let r=this.i;const i=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new ne;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ne,t.enqueueRetryable((()=>i(this.currentUser)))};const l=()=>{const f=o;t.enqueueRetryable((async()=>{await f.promise,await i(this.currentUser)}))},h=f=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((f=>h(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ne)}}),0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new Go(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string",2055,{h:t}),new ut(t)}}class mu{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gu{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new mu(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _u{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Wc(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){J(this.o===void 0,3512);const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Hi(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(J(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Hi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class as{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=yu(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Hr(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return Mr(i)===Mr(o)?B(i,o):Mr(i)?1:-1}return B(n.length,t.length)}const Eu=55296,Tu=57343;function Mr(n){const t=n.charCodeAt(0);return t>=Eu&&t<=Tu}function ye(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
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
 */const Gi="__name__";class Pt{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&x(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Pt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Pt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=Pt.isNumericId(t),i=Pt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Pt.extractNumericId(t).compare(Pt.extractNumericId(e)):Hr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return is.fromString(t.substring(4,t.length-2))}}class Q extends Pt{construct(t,e,r){return new Q(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new Q(e)}static emptyPath(){return new Q([])}}const vu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Pt{construct(t,e,r){return new ot(t,e,r)}static isValidIdentifier(t){return vu.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gi}static keyField(){return new ot([Gi])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new D(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new D(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,i+=2}else h==="`"?(l=!l,i++):h!=="."||l?(r+=h,i++):(o(),i++)}if(o(),l)throw new D(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
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
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(Q.fromString(t))}static fromName(t){return new k(Q.fromString(t).popFirst(5))}static empty(){return new k(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new Q(t.slice()))}}/**
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
 */function Ko(n,t,e){if(!e)throw new D(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Iu(n,t,e,r){if(t===!0&&r===!0)throw new D(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ki(n){if(!k.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wi(n){if(k.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Wo(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ls(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function Qo(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ls(n);throw new D(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function Z(n,t){const e={typeString:n};return t&&(e.value=t),e}function sn(n,t){if(!Wo(n))throw new D(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const l=n[r];if(i&&typeof l!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&l!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new D(C.INVALID_ARGUMENT,e);return!0}/**
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
 */const Qi=-62135596800,Xi=1e6;class W{static now(){return W.fromMillis(Date.now())}static fromDate(t){return W.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Xi);return new W(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Qi)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xi}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:W._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(sn(t,W._jsonSchema))return new W(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Qi;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}W._jsonSchemaVersion="firestore/timestamp/1.0",W._jsonSchema={type:Z("string",W._jsonSchemaVersion),seconds:Z("number"),nanoseconds:Z("number")};/**
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
 */class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new W(0,0))}static max(){return new K(new W(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ze=-1;function Au(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new W(e+1,0):new W(e,r));return new zt(i,k.empty(),t)}function wu(n){return new zt(n.readTime,n.key,Ze)}class zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new zt(K.min(),k.empty(),Ze)}static max(){return new zt(K.max(),k.empty(),Ze)}}function Ru(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
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
 */const Su="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function cs(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Su)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):R.reject(e)}static resolve(t){return new R(((e,r)=>{e(t)}))}static reject(t){return new R(((e,r)=>{r(t)}))}static waitFor(t){return new R(((e,r)=>{let i=0,o=0,l=!1;t.forEach((h=>{++i,h.next((()=>{++o,l&&o===i&&e()}),(f=>r(f)))})),l=!0,o===i&&e()}))}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next((i=>i?R.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new R(((r,i)=>{const o=t.length,l=new Array(o);let h=0;for(let f=0;f<o;f++){const p=f;e(t[p]).next((I=>{l[p]=I,++h,h===o&&r(l)}),(I=>i(I)))}}))}static doWhile(t,e){return new R(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function Pu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function on(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class us{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}us.ce=-1;/**
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
 */const hs=-1;function fs(n){return n==null}function jn(n){return n===0&&1/n==-1/0}function bu(n){return typeof n=="number"&&Number.isInteger(n)&&!jn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Xo="";function Vu(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ji(t)),t=Du(n.get(e),t);return Ji(t)}function Du(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Xo:e+="";break;default:e+=o}}return e}function Ji(n){return n+Xo+""}/**
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
 */function Yi(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Re(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Jo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class yt{constructor(t,e){this.comparator=t,this.root=e||st.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,st.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,st.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cn(this.root,t,this.comparator,!0)}}class Cn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class st{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=o??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new st(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw x(27949);return t+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Zi(this.data.getIterator())}getIteratorFrom(t){return new Zi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class Zi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new Rt([])}unionWith(t){let e=new at(ot.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Rt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ye(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class Nu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Nu("Invalid base64 string: "+o):o}})(t);return new bt(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o})(t);return new bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const Ou=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oe(n){if(J(!!n,39018),typeof n=="string"){let t=0;const e=Ou.exec(n);if(J(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ee(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
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
 */const Yo="server_timestamp",Zo="__type__",ta="__previous_value__",ea="__local_write_time__";function ds(n){return(n?.mapValue?.fields||{})[Zo]?.stringValue===Yo}function ps(n){const t=n.mapValue.fields[ta];return ds(t)?ps(t):t}function $n(n){const t=oe(n.mapValue.fields[ea].timestampValue);return new W(t.seconds,t.nanos)}/**
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
 */class ku{constructor(t,e,r,i,o,l,h,f,p,I){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=p,this.isUsingEmulator=I}}const qn="(default)";class zn{constructor(t,e){this.projectId=t,this.database=e||qn}static empty(){return new zn("","")}get isDefaultDatabase(){return this.database===qn}isEqual(t){return t instanceof zn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const na="__type__",Mu="__max__",Pn={mapValue:{}},ra="__vector__",Gr="value";function ae(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ds(n)?4:Lu(n)?9007199254740991:xu(n)?10:11:x(28295,{value:n})}function Vt(n,t){if(n===t)return!0;const e=ae(n);if(e!==ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return $n(n).isEqual($n(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=oe(i.timestampValue),h=oe(o.timestampValue);return l.seconds===h.seconds&&l.nanos===h.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return Ee(i.bytesValue).isEqual(Ee(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return it(i.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return it(i.integerValue)===it(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=it(i.doubleValue),h=it(o.doubleValue);return l===h?jn(l)===jn(h):isNaN(l)&&isNaN(h)}return!1})(n,t);case 9:return ye(n.arrayValue.values||[],t.arrayValue.values||[],Vt);case 10:case 11:return(function(i,o){const l=i.mapValue.fields||{},h=o.mapValue.fields||{};if(Yi(l)!==Yi(h))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(h[f]===void 0||!Vt(l[f],h[f])))return!1;return!0})(n,t);default:return x(52216,{left:n})}}function tn(n,t){return(n.values||[]).find((e=>Vt(e,t)))!==void 0}function Te(n,t){if(n===t)return 0;const e=ae(n),r=ae(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return(function(o,l){const h=it(o.integerValue||o.doubleValue),f=it(l.integerValue||l.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1})(n,t);case 3:return to(n.timestampValue,t.timestampValue);case 4:return to($n(n),$n(t));case 5:return Hr(n.stringValue,t.stringValue);case 6:return(function(o,l){const h=Ee(o),f=Ee(l);return h.compareTo(f)})(n.bytesValue,t.bytesValue);case 7:return(function(o,l){const h=o.split("/"),f=l.split("/");for(let p=0;p<h.length&&p<f.length;p++){const I=B(h[p],f[p]);if(I!==0)return I}return B(h.length,f.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,l){const h=B(it(o.latitude),it(l.latitude));return h!==0?h:B(it(o.longitude),it(l.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return eo(n.arrayValue,t.arrayValue);case 10:return(function(o,l){const h=o.fields||{},f=l.fields||{},p=h[Gr]?.arrayValue,I=f[Gr]?.arrayValue,A=B(p?.values?.length||0,I?.values?.length||0);return A!==0?A:eo(p,I)})(n.mapValue,t.mapValue);case 11:return(function(o,l){if(o===Pn.mapValue&&l===Pn.mapValue)return 0;if(o===Pn.mapValue)return 1;if(l===Pn.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),p=l.fields||{},I=Object.keys(p);f.sort(),I.sort();for(let A=0;A<f.length&&A<I.length;++A){const S=Hr(f[A],I[A]);if(S!==0)return S;const b=Te(h[f[A]],p[I[A]]);if(b!==0)return b}return B(f.length,I.length)})(n.mapValue,t.mapValue);default:throw x(23264,{he:e})}}function to(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=oe(n),r=oe(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function eo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Te(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function ve(n){return Kr(n)}function Kr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=oe(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Ee(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return k.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Kr(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${Kr(e.fields[l])}`;return i+"}"})(n.mapValue):x(61005,{value:n})}function On(n){switch(ae(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ps(n);return t?16+On(t):16;case 5:return 2*n.stringValue.length;case 6:return Ee(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+On(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Re(r.fields,((o,l)=>{i+=o.length+On(l)})),i})(n.mapValue);default:throw x(13486,{value:n})}}function Wr(n){return!!n&&"integerValue"in n}function ms(n){return!!n&&"arrayValue"in n}function kn(n){return!!n&&"mapValue"in n}function xu(n){return(n?.mapValue?.fields||{})[na]?.stringValue===ra}function He(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Re(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=He(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=He(n.arrayValue.values[e]);return t}return{...n}}function Lu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Mu}/**
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
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!kn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=He(e)}setAll(t){let e=ot.emptyPath(),r={},i=[];t.forEach(((l,h)=>{if(!e.isImmediateParentOf(h)){const f=this.getFieldsMap(e);this.applyChanges(f,r,i),r={},i=[],e=h.popLast()}l?r[h.lastSegment()]=He(l):i.push(h.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());kn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];kn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Re(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new At(He(this.value))}}function sa(n){const t=[];return Re(n.fields,((e,r)=>{const i=new ot([e]);if(kn(r)){const o=sa(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)})),new Rt(t)}/**
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
 */class It{constructor(t,e,r,i,o,l,h){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=h}static newInvalidDocument(t){return new It(t,0,K.min(),K.min(),K.min(),At.empty(),0)}static newFoundDocument(t,e,r,i){return new It(t,1,e,K.min(),r,i,0)}static newNoDocument(t,e){return new It(t,2,e,K.min(),K.min(),At.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,K.min(),K.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hn{constructor(t,e){this.position=t,this.inclusive=e}}function no(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=k.comparator(k.fromName(l.referenceValue),e.key):r=Te(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ro(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Vt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Gn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Fu(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ia{}class rt extends ia{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Bu(t,e,r):e==="array-contains"?new qu(t,r):e==="in"?new zu(t,r):e==="not-in"?new Hu(t,r):e==="array-contains-any"?new Gu(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ju(t,r):new $u(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Te(e,this.value)):e!==null&&ae(this.value)===ae(e)&&this.matchesComparison(Te(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends ia{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ht(t,e)}matches(t){return oa(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function oa(n){return n.op==="and"}function aa(n){return Uu(n)&&oa(n)}function Uu(n){for(const t of n.filters)if(t instanceof Ht)return!1;return!0}function Qr(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+ve(n.value);if(aa(n))return n.filters.map((t=>Qr(t))).join(",");{const t=n.filters.map((e=>Qr(e))).join(",");return`${n.op}(${t})`}}function la(n,t){return n instanceof rt?(function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&Vt(r.value,i.value)})(n,t):n instanceof Ht?(function(r,i){return i instanceof Ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,l,h)=>o&&la(l,i.filters[h])),!0):!1})(n,t):void x(19439)}function ca(n){return n instanceof rt?(function(e){return`${e.field.canonicalString()} ${e.op} ${ve(e.value)}`})(n):n instanceof Ht?(function(e){return e.op.toString()+" {"+e.getFilters().map(ca).join(" ,")+"}"})(n):"Filter"}class Bu extends rt{constructor(t,e,r){super(t,e,r),this.key=k.fromName(r.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class ju extends rt{constructor(t,e){super(t,"in",e),this.keys=ua("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class $u extends rt{constructor(t,e){super(t,"not-in",e),this.keys=ua("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ua(n,t){return(t.arrayValue?.values||[]).map((e=>k.fromName(e.referenceValue)))}class qu extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ms(e)&&tn(e.arrayValue,this.value)}}class zu extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&tn(this.value.arrayValue,e)}}class Hu extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!tn(this.value.arrayValue,e)}}class Gu extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ms(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>tn(this.value.arrayValue,r)))}}/**
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
 */class Ku{constructor(t,e=null,r=[],i=[],o=null,l=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=h,this.Te=null}}function so(n,t=null,e=[],r=[],i=null,o=null,l=null){return new Ku(n,t,e,r,i,o,l)}function gs(n){const t=$(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Qr(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),fs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>ve(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>ve(r))).join(",")),t.Te=e}return t.Te}function _s(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Fu(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!la(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ro(n.startAt,t.startAt)&&ro(n.endAt,t.endAt)}/**
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
 */class Zn{constructor(t,e=null,r=[],i=[],o=null,l="F",h=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=h,this.endAt=f,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Wu(n,t,e,r,i,o,l,h){return new Zn(n,t,e,r,i,o,l,h)}function Qu(n){return new Zn(n)}function io(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Xu(n){return n.collectionGroup!==null}function Ge(n){const t=$(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let h=new at(ot.comparator);return l.filters.forEach((f=>{f.getFlattenedFilters().forEach((p=>{p.isInequality()&&(h=h.add(p.field))}))})),h})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new Gn(o,r))})),e.has(ot.keyField().canonicalString())||t.Ie.push(new Gn(ot.keyField(),r))}return t.Ie}function re(n){const t=$(n);return t.Ee||(t.Ee=Ju(t,Ge(n))),t.Ee}function Ju(n,t){if(n.limitType==="F")return so(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new Gn(i.field,o)}));const e=n.endAt?new Hn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Hn(n.startAt.position,n.startAt.inclusive):null;return so(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Xr(n,t,e){return new Zn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ha(n,t){return _s(re(n),re(t))&&n.limitType===t.limitType}function fa(n){return`${gs(re(n))}|lt:${n.limitType}`}function $e(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>ca(i))).join(", ")}]`),fs(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(l){return`${l.field.canonicalString()} (${l.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>ve(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>ve(i))).join(",")),`Target(${r})`})(re(n))}; limitType=${n.limitType})`}function ys(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):k.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of Ge(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(l,h,f){const p=no(l,h,f);return l.inclusive?p<=0:p<0})(r.startAt,Ge(r),i)||r.endAt&&!(function(l,h,f){const p=no(l,h,f);return l.inclusive?p>=0:p>0})(r.endAt,Ge(r),i))})(n,t)}function Yu(n){return(t,e)=>{let r=!1;for(const i of Ge(n)){const o=Zu(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Zu(n,t,e){const r=n.field.isKeyField()?k.comparator(t.key,e.key):(function(o,l,h){const f=l.data.field(o),p=h.data.field(o);return f!==null&&p!==null?Te(f,p):x(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
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
 */class le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Re(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return Jo(this.inner)}size(){return this.innerSize}}/**
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
 */const th=new yt(k.comparator);function Kn(){return th}const da=new yt(k.comparator);function bn(...n){let t=da;for(const e of n)t=t.insert(e.key,e);return t}function pa(n){let t=da;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function ee(){return Ke()}function ma(){return Ke()}function Ke(){return new le((n=>n.toString()),((n,t)=>n.isEqual(t)))}const eh=new yt(k.comparator),nh=new at(k.comparator);function ht(...n){let t=nh;for(const e of n)t=t.add(e);return t}const rh=new at(B);function sh(){return rh}/**
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
 */function Es(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jn(t)?"-0":t}}function ga(n){return{integerValue:""+n}}function ih(n,t){return bu(t)?ga(t):Es(n,t)}/**
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
 */class tr{constructor(){this._=void 0}}function oh(n,t,e){return n instanceof en?(function(i,o){const l={fields:{[Zo]:{stringValue:Yo},[ea]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ds(o)&&(o=ps(o)),o&&(l.fields[ta]=o),{mapValue:l}})(e,t):n instanceof nn?ya(n,t):n instanceof rn?Ea(n,t):(function(i,o){const l=_a(i,o),h=oo(l)+oo(i.Ae);return Wr(l)&&Wr(i.Ae)?ga(h):Es(i.serializer,h)})(n,t)}function ah(n,t,e){return n instanceof nn?ya(n,t):n instanceof rn?Ea(n,t):e}function _a(n,t){return n instanceof Wn?(function(r){return Wr(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class en extends tr{}class nn extends tr{constructor(t){super(),this.elements=t}}function ya(n,t){const e=Ta(t);for(const r of n.elements)e.some((i=>Vt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class rn extends tr{constructor(t){super(),this.elements=t}}function Ea(n,t){let e=Ta(t);for(const r of n.elements)e=e.filter((i=>!Vt(i,r)));return{arrayValue:{values:e}}}class Wn extends tr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function oo(n){return it(n.integerValue||n.doubleValue)}function Ta(n){return ms(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class lh{constructor(t,e){this.field=t,this.transform=e}}function ch(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof nn&&i instanceof nn||r instanceof rn&&i instanceof rn?ye(r.elements,i.elements,Vt):r instanceof Wn&&i instanceof Wn?Vt(r.Ae,i.Ae):r instanceof en&&i instanceof en})(n.transform,t.transform)}class uh{constructor(t,e){this.version=t,this.transformResults=e}}class Dt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Dt}static exists(t){return new Dt(void 0,t)}static updateTime(t){return new Dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class er{}function va(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Aa(n.key,Dt.none()):new an(n.key,n.data,Dt.none());{const e=n.data,r=At.empty();let i=new at(ot.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new ce(n.key,r,new Rt(i.toArray()),Dt.none())}}function hh(n,t,e){n instanceof an?(function(i,o,l){const h=i.value.clone(),f=lo(i.fieldTransforms,o,l.transformResults);h.setAll(f),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()})(n,t,e):n instanceof ce?(function(i,o,l){if(!Mn(i.precondition,o))return void o.convertToUnknownDocument(l.version);const h=lo(i.fieldTransforms,o,l.transformResults),f=o.data;f.setAll(Ia(i)),f.setAll(h),o.convertToFoundDocument(l.version,f).setHasCommittedMutations()})(n,t,e):(function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()})(0,t,e)}function We(n,t,e,r){return n instanceof an?(function(o,l,h,f){if(!Mn(o.precondition,l))return h;const p=o.value.clone(),I=co(o.fieldTransforms,f,l);return p.setAll(I),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null})(n,t,e,r):n instanceof ce?(function(o,l,h,f){if(!Mn(o.precondition,l))return h;const p=co(o.fieldTransforms,f,l),I=l.data;return I.setAll(Ia(o)),I.setAll(p),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((A=>A.field)))})(n,t,e,r):(function(o,l,h){return Mn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):h})(n,t,e)}function fh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=_a(r.transform,i||null);o!=null&&(e===null&&(e=At.empty()),e.set(r.field,o))}return e||null}function ao(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ye(r,i,((o,l)=>ch(o,l)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class an extends er{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ce extends er{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ia(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function lo(n,t,e){const r=new Map;J(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,h=t.data.field(o.field);r.set(o.field,ah(l,h,e[i]))}return r}function co(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,oh(o,l,t))}return r}class Aa extends er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dh extends er{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ph{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&hh(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=We(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=We(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ma();return this.mutations.forEach((i=>{const o=t.get(i.key),l=o.overlayedDocument;let h=this.applyToLocalView(l,o.mutatedFields);h=e.has(i.key)?null:h;const f=va(l,h);f!==null&&r.set(i.key,f),l.isValidDocument()||l.convertToNoDocument(K.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ht())}isEqual(t){return this.batchId===t.batchId&&ye(this.mutations,t.mutations,((e,r)=>ao(e,r)))&&ye(this.baseMutations,t.baseMutations,((e,r)=>ao(e,r)))}}class Ts{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){J(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=(function(){return eh})();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Ts(t,e,r,i)}}/**
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
 */class mh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var Y,F;function gh(n){switch(n){case C.OK:return x(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function _h(n){if(n===void 0)return ie("GRPC error has no .code"),C.UNKNOWN;switch(n){case Y.OK:return C.OK;case Y.CANCELLED:return C.CANCELLED;case Y.UNKNOWN:return C.UNKNOWN;case Y.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Y.INTERNAL:return C.INTERNAL;case Y.UNAVAILABLE:return C.UNAVAILABLE;case Y.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Y.NOT_FOUND:return C.NOT_FOUND;case Y.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Y.ABORTED:return C.ABORTED;case Y.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Y.DATA_LOSS:return C.DATA_LOSS;default:return x(39323,{code:n})}}(F=Y||(Y={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new is([4294967295,4294967295],0);class yh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Jr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Eh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Th(n,t){return Jr(n,t.toTimestamp())}function ge(n){return J(!!n,49232),K.fromTimestamp((function(e){const r=oe(e);return new W(r.seconds,r.nanos)})(n))}function wa(n,t){return Yr(n,t).canonicalString()}function Yr(n,t){const e=(function(i){return new Q(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function vh(n){const t=Q.fromString(n);return J(bh(t),10190,{key:t.toString()}),t}function Zr(n,t){return wa(n.databaseId,t.path)}function Ih(n){const t=vh(n);return t.length===4?Q.emptyPath():wh(t)}function Ah(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wh(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function uo(n,t,e){return{name:Zr(n,t),fields:e.value.mapValue.fields}}function Rh(n,t){let e;if(t instanceof an)e={update:uo(n,t.key,t.value)};else if(t instanceof Aa)e={delete:Zr(n,t.key)};else if(t instanceof ce)e={update:uo(n,t.key,t.data),updateMask:Ph(t.fieldMask)};else{if(!(t instanceof dh))return x(16599,{Vt:t.type});e={verify:Zr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,l){const h=l.transform;if(h instanceof en)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof nn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof rn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Wn)return{fieldPath:l.field.canonicalString(),increment:h.Ae};throw x(20930,{transform:l.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:Th(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)})(n,t.precondition)),e}function Sh(n,t){return n&&n.length>0?(J(t!==void 0,14353),n.map((e=>(function(i,o){let l=i.updateTime?ge(i.updateTime):ge(o);return l.isEqual(K.min())&&(l=ge(o)),new uh(l,i.transformResults||[])})(e,t)))):[]}function Ch(n){let t=Ih(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){J(r===1,65062);const I=e.from[0];I.allDescendants?i=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=(function(A){const S=Ra(A);return S instanceof Ht&&aa(S)?S.getFilters():[S]})(e.where));let l=[];e.orderBy&&(l=(function(A){return A.map((S=>(function(O){return new Gn(pe(O.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(S)))})(e.orderBy));let h=null;e.limit&&(h=(function(A){let S;return S=typeof A=="object"?A.value:A,fs(S)?null:S})(e.limit));let f=null;e.startAt&&(f=(function(A){const S=!!A.before,b=A.values||[];return new Hn(b,S)})(e.startAt));let p=null;return e.endAt&&(p=(function(A){const S=!A.before,b=A.values||[];return new Hn(b,S)})(e.endAt)),Wu(t,i,l,o,h,"F",f,p)}function Ra(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=pe(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pe(e.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=pe(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=pe(e.unaryFilter.field);return rt.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}})(n):n.fieldFilter!==void 0?(function(e){return rt.create(pe(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Ht.create(e.compositeFilter.filters.map((r=>Ra(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x(1026)}})(e.compositeFilter.op))})(n):x(30097,{filter:n})}function pe(n){return ot.fromServerFormat(n.fieldPath)}function Ph(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function bh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Vh{constructor(t){this.yt=t}}function Dh(n){const t=Ch({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xr(t,t.limit,"L"):t}/**
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
 */class Nh{constructor(){this.Cn=new Oh}addToCollectionParentIndex(t,e){return this.Cn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(zt.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Oh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new at(Q.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new at(Q.comparator)).toArray()}}/**
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
 */const ho={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sa=41943040;class _t{static withCacheSize(t){return new _t(t,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(Sa,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
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
 */class Ie{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Ie(0)}static cr(){return new Ie(-1)}}/**
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
 */const fo="LruGarbageCollector",kh=1048576;function po([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class Mh{constructor(t){this.Ir=t,this.buffer=new at(po),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();po(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class xh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){V(fo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){on(e)?V(fo,"Ignoring IndexedDB error during garbage collection: ",e):await cs(e)}await this.Vr(3e5)}))}}class Lh{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return R.resolve(us.ce);const r=new Mh(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(ho)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ho):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,l,h,f,p;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,l=Date.now(),this.nthSequenceNumber(t,i)))).next((A=>(r=A,h=Date.now(),this.removeTargets(t,r,e)))).next((A=>(o=A,f=Date.now(),this.removeOrphanedDocuments(t,r)))).next((A=>(p=Date.now(),de()<=U.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-I}ms
	Determined least recently used ${i} in `+(h-l)+`ms
	Removed ${o} targets in `+(f-h)+`ms
	Removed ${A} documents in `+(p-f)+`ms
Total Duration: ${p-I}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A}))))}}function Fh(n,t){return new Lh(n,t)}/**
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
 */class Uh{constructor(){this.changes=new le((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,It.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Bh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class jh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&We(r.mutation,i,Rt.empty(),W.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,ht()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=ht()){const i=ee();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let l=bn();return o.forEach(((h,f)=>{l=l.insert(h,f.overlayedDocument)})),l}))))}getOverlayedDocuments(t,e){const r=ee();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,ht())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((l,h)=>{e.set(l,h)}))}))}computeViews(t,e,r,i){let o=Kn();const l=Ke(),h=(function(){return Ke()})();return e.forEach(((f,p)=>{const I=r.get(p.key);i.has(p.key)&&(I===void 0||I.mutation instanceof ce)?o=o.insert(p.key,p):I!==void 0?(l.set(p.key,I.mutation.getFieldMask()),We(I.mutation,p,I.mutation.getFieldMask(),W.now())):l.set(p.key,Rt.empty())})),this.recalculateAndSaveOverlays(t,o).next((f=>(f.forEach(((p,I)=>l.set(p,I))),e.forEach(((p,I)=>h.set(p,new Bh(I,l.get(p)??null)))),h)))}recalculateAndSaveOverlays(t,e){const r=Ke();let i=new yt(((l,h)=>l-h)),o=ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((l=>{for(const h of l)h.keys().forEach((f=>{const p=e.get(f);if(p===null)return;let I=r.get(f)||Rt.empty();I=h.applyToLocalView(p,I),r.set(f,I);const A=(i.get(h.batchId)||ht()).add(f);i=i.insert(h.batchId,A)}))})).next((()=>{const l=[],h=i.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),p=f.key,I=f.value,A=ma();I.forEach((S=>{if(!o.has(S)){const b=va(e.get(S),r.get(S));b!==null&&A.set(S,b),o=o.add(S)}})),l.push(this.documentOverlayCache.saveOverlays(t,p,A))}return R.waitFor(l)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(l){return k.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Xu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(ee());let h=Ze,f=o;return l.next((p=>R.forEach(p,((I,A)=>(h<A.largestBatchId&&(h=A.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next((S=>{f=f.insert(I,S)}))))).next((()=>this.populateOverlays(t,p,o))).next((()=>this.computeViews(t,f,p,ht()))).next((I=>({batchId:h,changes:pa(I)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next((r=>{let i=bn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=bn();return this.indexManager.getCollectionParents(t,o).next((h=>R.forEach(h,(f=>{const p=(function(A,S){return new Zn(S,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,p,r,i).next((I=>{I.forEach(((A,S)=>{l=l.insert(A,S)}))}))})).next((()=>l))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((l=>{o.forEach(((f,p)=>{const I=p.getKey();l.get(I)===null&&(l=l.insert(I,It.newInvalidDocument(I)))}));let h=bn();return l.forEach(((f,p)=>{const I=o.get(f);I!==void 0&&We(I.mutation,p,Rt.empty(),W.now()),ys(e,p)&&(h=h.insert(f,p))})),h}))}}/**
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
 */class $h{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return R.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:ge(i.createTime)}})(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:Dh(i.bundledQuery),readTime:ge(i.readTime)}})(e)),R.resolve()}}/**
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
 */class qh{constructor(){this.overlays=new yt(k.comparator),this.qr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ee();return R.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=ee(),o=e.length+1,l=new k(e.child("")),h=this.overlays.getIteratorFrom(l);for(;h.hasNext();){const f=h.getNext().value,p=f.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===o&&f.largestBatchId>r&&i.set(f.getKey(),f)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new yt(((p,I)=>p-I));const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>r){let I=o.get(p.largestBatchId);I===null&&(I=ee(),o=o.insert(p.largestBatchId,I)),I.set(p.getKey(),p)}}const h=ee(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((p,I)=>h.set(p,I))),!(h.size()>=i)););return R.resolve(h)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new mh(e,r));let o=this.qr.get(e);o===void 0&&(o=ht(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
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
 */class zh{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class vs{constructor(){this.Qr=new at(nt.$r),this.Ur=new at(nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new nt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new nt(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new k(new Q([])),r=new nt(e,t),i=new nt(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(l=>{this.Gr(l),o.push(l.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new k(new Q([])),r=new nt(e,t),i=new nt(e,t+1);let o=ht();return this.Ur.forEachInRange([r,i],(l=>{o=o.add(l.key)})),o}containsKey(t){const e=new nt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class nt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return k.comparator(t.key,e.key)||B(t.Yr,e.Yr)}static Kr(t,e){return B(t.Yr,e.Yr)||k.comparator(t.key,e.key)}}/**
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
 */class Hh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new at(nt.$r)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new ph(o,e,r,i);this.mutationQueue.push(l);for(const h of i)this.Zr=this.Zr.add(new nt(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?hs:this.tr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new nt(e,0),i=new nt(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(l=>{const h=this.Xr(l.Yr);o.push(h)})),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new at(B);return e.forEach((i=>{const o=new nt(i,0),l=new nt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,l],(h=>{r=r.add(h.Yr)}))})),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;k.isDocumentKey(o)||(o=o.child(""));const l=new nt(new k(o),0);let h=new at(B);return this.Zr.forEachWhile((f=>{const p=f.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(h=h.add(f.Yr)),!0)}),l),R.resolve(this.ti(h))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){J(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(e.mutations,(i=>{const o=new nt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new nt(e,0),i=this.Zr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Gh{constructor(t){this.ri=t,this.docs=(function(){return new yt(k.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():It.newInvalidDocument(e))}getEntries(t,e){let r=Kn();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():It.newInvalidDocument(i))})),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Kn();const l=e.path,h=new k(l.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:p,value:{document:I}}=f.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||Ru(wu(I),r)<=0||(i.has(I.key)||ys(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){x(9500)}ii(t,e){return R.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Kh(this)}getSize(t){return R.resolve(this.size)}}class Kh extends Uh{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),R.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class Wh{constructor(t){this.persistence=t,this.si=new le((e=>gs(e)),_s),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.oi=0,this._i=new vs,this.targetCount=0,this.ai=Ie.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),R.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Ie(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Pr(e),R.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((l,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.si.delete(l),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)})),R.waitFor(o).next((()=>i))}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((l=>{o.push(i.markPotentiallyOrphaned(t,l))})),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this._i.containsKey(e))}}/**
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
 */class Ca{constructor(t,e){this.ui={},this.overlays={},this.ci=new us(0),this.li=!1,this.li=!0,this.hi=new zh,this.referenceDelegate=t(this),this.Pi=new Wh(this),this.indexManager=new Nh,this.remoteDocumentCache=(function(i){return new Gh(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Vh(e),this.Ii=new $h(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new qh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new Hh(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new Qh(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return R.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class Qh extends Cu{constructor(t){super(),this.currentSequenceNumber=t}}class Is{constructor(t){this.persistence=t,this.Ri=new vs,this.Vi=null}static mi(t){return new Is(t)}get fi(){if(this.Vi)return this.Vi;throw x(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(r=>{const i=k.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,K.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Qn{constructor(t,e){this.persistence=t,this.pi=new le((r=>Vu(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Fh(this,e)}static mi(t,e){return new Qn(t,e)}Ei(){}di(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return R.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?R.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(l=>this.br(t,l,e).next((h=>{h||(r++,o.removeEntry(l,K.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=On(t.data.value)),e}br(t,e,r){return R.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class As{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=ht(),i=ht();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new As(t,e.fromCache,r,i)}}/**
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
 */class Xh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Jh{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Hl()?8:Pu(ql())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((l=>{o.result=l})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((l=>{o.result=l}))})).next((()=>{if(o.result)return;const l=new Xh;return this.Ss(t,e,l).next((h=>{if(o.result=h,this.Vs)return this.bs(t,e,l,h.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(de()<=U.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",$e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(de()<=U.DEBUG&&V("QueryEngine","Query:",$e(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(de()<=U.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",$e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,re(e))):R.resolve())}ys(t,e){if(io(e))return R.resolve(null);let r=re(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Xr(e,null,"F"),r=re(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const l=ht(...o);return this.ps.getDocuments(t,l).next((h=>this.indexManager.getMinOffset(t,r).next((f=>{const p=this.Ds(e,h);return this.Cs(e,p,l,f.readTime)?this.ys(t,Xr(e,null,"F")):this.vs(t,p,e,f)}))))})))))}ws(t,e,r,i){return io(e)||i.isEqual(K.min())?R.resolve(null):this.ps.getDocuments(t,r).next((o=>{const l=this.Ds(e,o);return this.Cs(e,l,r,i)?R.resolve(null):(de()<=U.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$e(e)),this.vs(t,l,e,Au(i,Ze)).next((h=>h)))}))}Ds(t,e){let r=new at(Yu(t));return e.forEach(((i,o)=>{ys(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return de()<=U.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",$e(e)),this.ps.getDocumentsMatchingQuery(t,e,zt.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((l=>{o=o.insert(l.key,l)})),o)))}}/**
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
 */const Yh="LocalStore";class Zh{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new yt(B),this.xs=new le((o=>gs(o)),_s),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jh(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function tf(n,t,e,r){return new Zh(n,t,e,r)}async function Pa(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const l=[],h=[];let f=ht();for(const p of i){l.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}for(const p of o){h.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(r,f).next((p=>({Ls:p,removedBatchIds:l,addedBatchIds:h})))}))}))}function ef(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(h,f,p,I){const A=p.batch,S=A.keys();let b=R.resolve();return S.forEach((O=>{b=b.next((()=>I.getEntry(f,O))).next((L=>{const N=p.docVersions.get(O);J(N!==null,48541),L.version.compareTo(N)<0&&(A.applyToRemoteDocument(L,p),L.isValidDocument()&&(L.setReadTime(p.commitVersion),I.addEntry(L)))}))})),b.next((()=>h.mutationQueue.removeMutationBatch(f,A)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(h){let f=ht();for(let p=0;p<h.mutationResults.length;++p)h.mutationResults[p].transformResults.length>0&&(f=f.add(h.batch.mutations[p].key));return f})(t)))).next((()=>e.localDocuments.getDocuments(r,i)))}))}function nf(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function rf(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=hs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}class mo{constructor(){this.activeTargetIds=sh()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class sf{constructor(){this.Mo=new mo,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new mo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class of{Oo(t){}shutdown(){}}/**
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
 */const go="ConnectivityMonitor";class _o{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){V(go,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){V(go,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vn=null;function ts(){return Vn===null?Vn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vn++,"0x"+Vn.toString(16)}/**
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
 */const xr="RestConnection",af={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class lf{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===qn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const l=ts(),h=this.zo(t,e.toUriEncodedString());V(xr,`Sending RPC '${t}' ${l}:`,h,r);const f={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(f,i,o);const{host:p}=new URL(h),I=rs(p);return this.Jo(t,h,f,r,I).then((A=>(V(xr,`Received RPC '${t}' ${l}: `,A),A)),(A=>{throw Yn(xr,`RPC '${t}' ${l} failed with error: `,A,"url: ",h,"request:",r),A}))}Ho(t,e,r,i,o,l){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+we})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=af[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
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
 */class cf{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const ct="WebChannelConnection";class uf extends lf{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const l=ts();return new Promise(((h,f)=>{const p=new Bo;p.setWithCredentials(!0),p.listenOnce(jo.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case Nn.NO_ERROR:const A=p.getResponseJson();V(ct,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(A)),h(A);break;case Nn.TIMEOUT:V(ct,`RPC '${t}' ${l} timed out`),f(new D(C.DEADLINE_EXCEEDED,"Request time out"));break;case Nn.HTTP_ERROR:const S=p.getStatus();if(V(ct,`RPC '${t}' ${l} failed with status:`,S,"response text:",p.getResponseText()),S>0){let b=p.getResponseJson();Array.isArray(b)&&(b=b[0]);const O=b?.error;if(O&&O.status&&O.message){const L=(function(q){const z=q.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(z)>=0?z:C.UNKNOWN})(O.status);f(new D(L,O.message))}else f(new D(C.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new D(C.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:t,streamId:l,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{V(ct,`RPC '${t}' ${l} completed.`)}}));const I=JSON.stringify(i);V(ct,`RPC '${t}' ${l} sending request:`,i),p.send(e,"POST",I,r,15)}))}T_(t,e,r){const i=ts(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=zo(),h=qo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.jo(f.initMessageHeaders,e,r),f.encodeInitMessageHeaders=!0;const I=o.join("");V(ct,`Creating RPC '${t}' stream ${i}: ${I}`,f);const A=l.createWebChannel(I,f);this.I_(A);let S=!1,b=!1;const O=new cf({Yo:N=>{b?V(ct,`Not sending because RPC '${t}' stream ${i} is closed:`,N):(S||(V(ct,`Opening RPC '${t}' stream ${i} transport.`),A.open(),S=!0),V(ct,`RPC '${t}' stream ${i} sending:`,N),A.send(N))},Zo:()=>A.close()}),L=(N,q,z)=>{N.listen(q,(G=>{try{z(G)}catch(Et){setTimeout((()=>{throw Et}),0)}}))};return L(A,qe.EventType.OPEN,(()=>{b||(V(ct,`RPC '${t}' stream ${i} transport opened.`),O.o_())})),L(A,qe.EventType.CLOSE,(()=>{b||(b=!0,V(ct,`RPC '${t}' stream ${i} transport closed`),O.a_(),this.E_(A))})),L(A,qe.EventType.ERROR,(N=>{b||(b=!0,Yn(ct,`RPC '${t}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),O.a_(new D(C.UNAVAILABLE,"The operation could not be completed")))})),L(A,qe.EventType.MESSAGE,(N=>{if(!b){const q=N.data[0];J(!!q,16349);const z=q,G=z?.error||z[0]?.error;if(G){V(ct,`RPC '${t}' stream ${i} received error:`,G);const Et=G.status;let vt=(function(d){const g=Y[d];if(g!==void 0)return _h(g)})(Et),dt=G.message;vt===void 0&&(vt=C.INTERNAL,dt="Unknown error status: "+Et+" with message "+G.message),b=!0,O.a_(new D(vt,dt)),A.close()}else V(ct,`RPC '${t}' stream ${i} received:`,q),O.u_(q)}})),L(h,$o.STAT_EVENT,(N=>{N.stat===zr.PROXY?V(ct,`RPC '${t}' stream ${i} detected buffering proxy`):N.stat===zr.NOPROXY&&V(ct,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function Lr(){return typeof document<"u"?document:null}/**
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
 */function nr(n){return new yh(n,!0)}/**
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
 */class ba{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const yo="PersistentStream";class hf{constructor(t,e,r,i,o,l,h,f){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ba(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(ie(e.toString()),ie("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new D(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return V(yo,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(V(yo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ff extends hf{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return J(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,J(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){J(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Sh(t.writeResults,t.commitTime),r=ge(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Ah(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Rh(this.serializer,r)))};this.q_(e)}}/**
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
 */class df{}class pf extends df{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Go(t,Yr(e,r),i,o,l))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(C.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Ho(t,Yr(e,r),i,l,h,o))).catch((l=>{throw l.name==="FirebaseError"?(l.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new D(C.UNKNOWN,l.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class mf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ie(e),this.aa=!1):V("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ln="RemoteStore";class gf{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((l=>{r.enqueueAndForget((async()=>{un(this)&&(V(ln,"Restarting streams for network reachability change."),await(async function(f){const p=$(f);p.Ea.add(4),await cn(p),p.Ra.set("Unknown"),p.Ea.delete(4),await rr(p)})(this))}))})),this.Ra=new mf(r,i)}}async function rr(n){if(un(n))for(const t of n.da)await t(!0)}async function cn(n){for(const t of n.da)await t(!1)}function un(n){return $(n).Ea.size===0}async function Va(n,t,e){if(!on(t))throw t;n.Ea.add(1),await cn(n),n.Ra.set("Offline"),e||(e=()=>nf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(ln,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await rr(n)}))}function Da(n,t){return t().catch((e=>Va(n,e,t)))}async function sr(n){const t=$(n),e=Gt(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:hs;for(;_f(t);)try{const i=await rf(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,yf(t,i)}catch(i){await Va(t,i)}Na(t)&&Oa(t)}function _f(n){return un(n)&&n.Ta.length<10}function yf(n,t){n.Ta.push(t);const e=Gt(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Na(n){return un(n)&&!Gt(n).x_()&&n.Ta.length>0}function Oa(n){Gt(n).start()}async function Ef(n){Gt(n).ra()}async function Tf(n){const t=Gt(n);for(const e of n.Ta)t.ea(e.mutations)}async function vf(n,t,e){const r=n.Ta.shift(),i=Ts.from(r,t,e);await Da(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await sr(n)}async function If(n,t){t&&Gt(n).X_&&await(async function(r,i){if((function(l){return gh(l)&&l!==C.ABORTED})(i.code)){const o=r.Ta.shift();Gt(r).B_(),await Da(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await sr(r)}})(n,t),Na(n)&&Oa(n)}async function Eo(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),V(ln,"RemoteStore received new credentials");const r=un(e);e.Ea.add(3),await cn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await rr(e)}async function Af(n,t){const e=$(n);t?(e.Ea.delete(2),await rr(e)):t||(e.Ea.add(2),await cn(e),e.Ra.set("Unknown"))}function Gt(n){return n.fa||(n.fa=(function(e,r,i){const o=$(e);return o.sa(),new ff(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Ef.bind(null,n),r_:If.bind(null,n),ta:Tf.bind(null,n),na:vf.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await sr(n)):(await n.fa.stop(),n.Ta.length>0&&(V(ln,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class ws{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,h=new ws(t,e,l,i,o);return h.start(r),h}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ka(n,t){if(ie("AsyncQueue",`${t}: ${n}`),on(n))return new D(C.UNAVAILABLE,`${t}: ${n}`);throw n}class wf{constructor(){this.queries=To(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=$(e),o=i.queries;i.queries=To(),o.forEach(((l,h)=>{for(const f of h.Sa)f.onError(r)}))})(this,new D(C.ABORTED,"Firestore shutting down"))}}function To(){return new le((n=>fa(n)),ha)}function Rf(n){n.Ca.forEach((t=>{t.next()}))}var vo,Io;(Io=vo||(vo={})).Ma="default",Io.Cache="cache";const Sf="SyncEngine";class Cf{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new le((h=>fa(h)),ha),this.Iu=new Map,this.Eu=new Set,this.du=new yt(k.comparator),this.Au=new Map,this.Ru=new vs,this.Vu={},this.mu=new Map,this.fu=Ie.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Pf(n,t,e){const r=Nf(n);try{const i=await(function(l,h){const f=$(l),p=W.now(),I=h.reduce(((b,O)=>b.add(O.key)),ht());let A,S;return f.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let O=Kn(),L=ht();return f.Ns.getEntries(b,I).next((N=>{O=N,O.forEach(((q,z)=>{z.isValidDocument()||(L=L.add(q))}))})).next((()=>f.localDocuments.getOverlayedDocuments(b,O))).next((N=>{A=N;const q=[];for(const z of h){const G=fh(z,A.get(z.key).overlayedDocument);G!=null&&q.push(new ce(z.key,G,sa(G.value.mapValue),Dt.exists(!0)))}return f.mutationQueue.addMutationBatch(b,p,q,h)})).next((N=>{S=N;const q=N.applyToLocalDocumentSet(A,L);return f.documentOverlayCache.saveOverlays(b,N.batchId,q)}))})).then((()=>({batchId:S.batchId,changes:pa(A)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),(function(l,h,f){let p=l.Vu[l.currentUser.toKey()];p||(p=new yt(B)),p=p.insert(h,f),l.Vu[l.currentUser.toKey()]=p})(r,i.batchId,e),await ir(r,i.changes),await sr(r.remoteStore)}catch(i){const o=ka(i,"Failed to persist write");e.reject(o)}}function Ao(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,l)=>{const h=l.view.va(t);h.snapshot&&i.push(h.snapshot)})),(function(l,h){const f=$(l);f.onlineState=h;let p=!1;f.queries.forEach(((I,A)=>{for(const S of A.Sa)S.va(h)&&(p=!0)})),p&&Rf(f)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function bf(n,t){const e=$(n),r=t.batch.batchId;try{const i=await ef(e.localStore,t);xa(e,r,null),Ma(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await ir(e,i)}catch(i){await cs(i)}}async function Vf(n,t,e){const r=$(n);try{const i=await(function(l,h){const f=$(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",(p=>{let I;return f.mutationQueue.lookupMutationBatch(p,h).next((A=>(J(A!==null,37113),I=A.keys(),f.mutationQueue.removeMutationBatch(p,A)))).next((()=>f.mutationQueue.performConsistencyCheck(p))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(p,I,h))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,I))).next((()=>f.localDocuments.getDocuments(p,I)))}))})(r.localStore,t);xa(r,t,e),Ma(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await ir(r,i)}catch(i){await cs(i)}}function Ma(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function xa(n,t,e){const r=$(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}async function ir(n,t,e){const r=$(n),i=[],o=[],l=[];r.Tu.isEmpty()||(r.Tu.forEach(((h,f)=>{l.push(r.pu(f,t,e).then((p=>{if((p||e)&&r.isPrimaryClient){const I=p?!p.fromCache:e?.targetChanges.get(f.targetId)?.current;r.sharedClientState.updateQueryState(f.targetId,I?"current":"not-current")}if(p){i.push(p);const I=As.As(f.targetId,p);o.push(I)}})))})),await Promise.all(l),r.Pu.H_(i),await(async function(f,p){const I=$(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>R.forEach(p,(S=>R.forEach(S.Es,(b=>I.persistence.referenceDelegate.addReference(A,S.targetId,b))).next((()=>R.forEach(S.ds,(b=>I.persistence.referenceDelegate.removeReference(A,S.targetId,b)))))))))}catch(A){if(!on(A))throw A;V(Yh,"Failed to update sequence numbers: "+A)}for(const A of p){const S=A.targetId;if(!A.fromCache){const b=I.Ms.get(S),O=b.snapshotVersion,L=b.withLastLimboFreeSnapshotVersion(O);I.Ms=I.Ms.insert(S,L)}}})(r.localStore,o))}async function Df(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){V(Sf,"User change. New user:",t.toKey());const r=await Pa(e.localStore,t);e.currentUser=t,(function(o,l){o.mu.forEach((h=>{h.forEach((f=>{f.reject(new D(C.CANCELLED,l))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ir(e,r.Ls)}}function Nf(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=bf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Vf.bind(null,t),t}class Xn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=nr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return tf(this.persistence,new Jh,t.initialUser,this.serializer)}Cu(t){return new Ca(Is.mi,this.serializer)}Du(t){return new sf}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xn.provider={build:()=>new Xn};class Of extends Xn{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){J(this.persistence.referenceDelegate instanceof Qn,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xh(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new Ca((r=>Qn.mi(r,e)),this.serializer)}}class es{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ao(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Df.bind(null,this.syncEngine),await Af(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new wf})()}createDatastore(t){const e=nr(t.databaseInfo.databaseId),r=(function(o){return new uf(o)})(t.databaseInfo);return(function(o,l,h,f){return new pf(o,l,h,f)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,l,h){return new gf(r,i,o,l,h)})(this.localStore,this.datastore,t.asyncQueue,(e=>Ao(this.syncEngine,e,0)),(function(){return _o.v()?new _o:new of})())}createSyncEngine(t,e){return(function(i,o,l,h,f,p,I){const A=new Cf(i,o,l,h,f,p);return I&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=$(e);V(ln,"RemoteStore shutting down."),r.Ea.add(5),await cn(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}es.provider={build:()=>new es};/**
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
 */const Kt="FirestoreClient";class kf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=as.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async l=>{V(Kt,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l})),this.appCheckCredentials.start(r,(l=>(V(Kt,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ka(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Fr(n,t){n.asyncQueue.verifyOperationInProgress(),V(Kt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Pa(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function wo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Mf(n);V(Kt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Eo(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Eo(t.remoteStore,i))),n._onlineComponents=t}async function Mf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Kt,"Using user provided OfflineComponentProvider");try{await Fr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Yn("Error using user provided cache. Falling back to memory cache: "+e),await Fr(n,new Xn)}}else V(Kt,"Using default OfflineComponentProvider"),await Fr(n,new Of(void 0));return n._offlineComponents}async function xf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Kt,"Using user provided OnlineComponentProvider"),await wo(n,n._uninitializedComponentsProvider._online)):(V(Kt,"Using default OnlineComponentProvider"),await wo(n,new es))),n._onlineComponents}function Lf(n){return xf(n).then((t=>t.syncEngine))}/**
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
 */function La(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Ro=new Map;/**
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
 */const Fa="firestore.googleapis.com",So=!0;class Co{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new D(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fa,this.ssl=So}else this.host=t.host,this.ssl=t.ssl??So;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Sa;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<kh)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Iu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=La(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class or{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Co({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Co(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new fu;switch(r.type){case"firstParty":return new gu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Ro.get(e);r&&(V("ComponentProvider","Removing Datastore"),Ro.delete(e),r.terminate())})(this),Promise.resolve()}}function Ff(n,t,e,r={}){n=Qo(n,or);const i=rs(t),o=n._getSettings(),l={...o,emulatorOptions:n._getEmulatorOptions()},h=`${t}:${e}`;i&&(Fl(`https://${h}`),$l("Firestore",!0)),o.host!==Fa&&o.host!==h&&Yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:h,ssl:i,emulatorOptions:r};if(!Fn(f,l)&&(n._setSettings(f),r.mockUserToken)){let p,I;if(typeof r.mockUserToken=="string")p=r.mockUserToken,I=ut.MOCK_USER;else{p=Ul(r.mockUserToken,n._app?.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new D(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new ut(A)}n._authCredentials=new du(new Go(p,I))}}/**
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
 */class Rs{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Rs(this.firestore,t,this._query)}}class ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(sn(e,ft._jsonSchema))return new ft(t,r||null,new k(Q.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:Z("string",ft._jsonSchemaVersion),referencePath:Z("string")};class qt extends Rs{constructor(t,e,r){super(t,e,Qu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new k(t))}withConverter(t){return new qt(this.firestore,t,this._path)}}function ed(n,t,...e){if(n=Xe(n),Ko("collection","path",t),n instanceof or){const r=Q.fromString(t,...e);return Wi(r),new qt(n,null,r)}{if(!(n instanceof ft||n instanceof qt))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return Wi(r),new qt(n.firestore,null,r)}}function Uf(n,t,...e){if(n=Xe(n),arguments.length===1&&(t=as.newId()),Ko("doc","path",t),n instanceof or){const r=Q.fromString(t,...e);return Ki(r),new ft(n,null,new k(r))}{if(!(n instanceof ft||n instanceof qt))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return Ki(r),new ft(n.firestore,n instanceof qt?n.converter:null,new k(r))}}/**
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
 */const Po="AsyncQueue";class bo{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ba(this,"async_queue_retry"),this._c=()=>{const r=Lr();r&&V(Po,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Lr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Lr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new ne;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!on(t))throw t;V(Po,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,ie("INTERNAL UNHANDLED ERROR: ",Vo(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=ws.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&x(47125,{Pc:Vo(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Vo(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Ua extends or{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new bo,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new bo(t),this._firestoreClient=void 0,await t}}}function nd(n,t){const e=typeof n=="object"?n:Zc(),r=typeof n=="string"?n:qn,i=Kc(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=xl("firestore");o&&Ff(i,...o)}return i}function Bf(n){if(n._terminated)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||jf(n),n._firestoreClient}function jf(n){const t=n._freezeSettings(),e=(function(i,o,l,h){return new ku(i,o,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,La(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new kf(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(n._componentsProvider))}/**
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
 */class wt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new wt(bt.fromBase64String(t))}catch(e){throw new D(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new wt(bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(sn(t,wt._jsonSchema))return wt.fromBase64String(t.bytes)}}wt._jsonSchemaVersion="firestore/bytes/1.0",wt._jsonSchema={type:Z("string",wt._jsonSchemaVersion),bytes:Z("string")};/**
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
 */class Ss{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Cs{constructor(t){this._methodName=t}}/**
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
 */class Nt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nt._jsonSchemaVersion}}static fromJSON(t){if(sn(t,Nt._jsonSchema))return new Nt(t.latitude,t.longitude)}}Nt._jsonSchemaVersion="firestore/geoPoint/1.0",Nt._jsonSchema={type:Z("string",Nt._jsonSchemaVersion),latitude:Z("number"),longitude:Z("number")};/**
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
 */class Ot{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ot._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(sn(t,Ot._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ot(t.vectorValues);throw new D(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ot._jsonSchemaVersion="firestore/vectorValue/1.0",Ot._jsonSchema={type:Z("string",Ot._jsonSchemaVersion),vectorValues:Z("object")};/**
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
 */const $f=/^__.*__$/;class qf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new an(t,this.data,e,this.fieldTransforms)}}function Ba(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ac:n})}}class Ps{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Ps({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Jn(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Ba(this.Ac)&&$f.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class zf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||nr(t)}Cc(t,e,r,i=!1){return new Ps({Ac:t,methodName:e,Dc:r,path:ot.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hf(n){const t=n._freezeSettings(),e=nr(n._databaseId);return new zf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Gf(n,t,e,r,i,o={}){const l=n.Cc(o.merge||o.mergeFields?2:0,t,e,i);za("Data must be an object, but it was:",l,r);const h=$a(r,l);let f,p;if(o.merge)f=new Rt(l.fieldMask),p=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const S=Kf(t,A,e);if(!l.contains(S))throw new D(C.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Qf(I,S)||I.push(S)}f=new Rt(I),p=l.fieldTransforms.filter((A=>f.covers(A.field)))}else f=null,p=l.fieldTransforms;return new qf(new At(h),f,p)}class bs extends Cs{_toFieldTransform(t){return new lh(t.path,new en)}isEqual(t){return t instanceof bs}}function ja(n,t){if(qa(n=Xe(n)))return za("Unsupported field value:",t,n),$a(n,t);if(n instanceof Cs)return(function(r,i){if(!Ba(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let l=0;for(const h of r){let f=ja(h,i.wc(l));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),l++}return{arrayValue:{values:o}}})(n,t)}return(function(r,i){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ih(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=W.fromDate(r);return{timestampValue:Jr(i.serializer,o)}}if(r instanceof W){const o=new W(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jr(i.serializer,o)}}if(r instanceof Nt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wt)return{bytesValue:Eh(i.serializer,r._byteString)};if(r instanceof ft){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Sc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:wa(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ot)return(function(l,h){return{mapValue:{fields:{[na]:{stringValue:ra},[Gr]:{arrayValue:{values:l.toArray().map((p=>{if(typeof p!="number")throw h.Sc("VectorValues must only contain numeric values.");return Es(h.serializer,p)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${ls(r)}`)})(n,t)}function $a(n,t){const e={};return Jo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Re(n,((r,i)=>{const o=ja(i,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function qa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof W||n instanceof Nt||n instanceof wt||n instanceof ft||n instanceof Cs||n instanceof Ot)}function za(n,t,e){if(!qa(e)||!Wo(e)){const r=ls(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function Kf(n,t,e){if((t=Xe(t))instanceof Ss)return t._internalPath;if(typeof t=="string")return Ha(n,t);throw Jn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Wf=new RegExp("[~\\*/\\[\\]]");function Ha(n,t,e){if(t.search(Wf)>=0)throw Jn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ss(...t.split("."))._internalPath}catch{throw Jn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Jn(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||l)&&(f+=" (found",o&&(f+=` in field ${r}`),l&&(f+=` in document ${i}`),f+=")"),new D(C.INVALID_ARGUMENT,h+n+f)}function Qf(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class Ga{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Xf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ka("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Xf extends Ga{data(){return super.data()}}function Ka(n,t){return typeof t=="string"?Ha(n,t):t instanceof Ss?t._internalPath:t._delegate._internalPath}/**
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
 */function Jf(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Dn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _e extends Ga{constructor(t,e,r,i,o,l){super(t,e,r,i,l),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new xn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ka("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=_e._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}_e._jsonSchemaVersion="firestore/documentSnapshot/1.0",_e._jsonSchema={type:Z("string",_e._jsonSchemaVersion),bundleSource:Z("string","DocumentSnapshot"),bundleName:Z("string"),bundle:Z("string")};class xn extends _e{data(t={}){return super.data(t)}}class Qe{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Dn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new xn(this._firestore,this._userDataWriter,r.key,r,new Dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map((h=>{const f=new xn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Dn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}}))}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((h=>o||h.type!==3)).map((h=>{const f=new xn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Dn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let p=-1,I=-1;return h.type!==0&&(p=l.indexOf(h.doc.key),l=l.delete(h.doc.key)),h.type!==1&&(l=l.add(h.doc),I=l.indexOf(h.doc.key)),{type:Yf(h.type),doc:f,oldIndex:p,newIndex:I}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Qe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=as.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Yf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}Qe._jsonSchemaVersion="firestore/querySnapshot/1.0",Qe._jsonSchema={type:Z("string",Qe._jsonSchemaVersion),bundleSource:Z("string","QuerySnapshot"),bundleName:Z("string"),bundle:Z("string")};function rd(n,t){const e=Qo(n.firestore,Ua),r=Uf(n),i=Jf(n.converter,t);return Zf(e,[Gf(Hf(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then((()=>r))}function Zf(n,t){return(function(r,i){const o=new ne;return r.asyncQueue.enqueueAndForget((async()=>Pf(await Lf(r),i,o))),o.promise})(Bf(n),t)}function sd(){return new bs("serverTimestamp")}(function(t,e=!0){(function(i){we=i})(Jc),Bn(new Je("firestore",((r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),h=new Ua(new pu(r.getProvider("auth-internal")),new _u(l,r.getProvider("app-check-internal")),(function(p,I){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new D(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zn(p.options.projectId,I)})(l,i),l);return o={useFetchStreams:e,...o},h._setSettings(o),h}),"PUBLIC").setMultipleInstances(!0)),me(qi,zi,t),me(qi,zi,"esm2020")})();export{rd as a,ed as c,nd as g,Yc as i,sd as s};
