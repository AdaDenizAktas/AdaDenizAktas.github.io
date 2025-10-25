const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-BepXTzMY.js","assets/About-D9JhDMdF.css","assets/Skills-Cw4YXRhM.js","assets/Skills-U0eqgj9C.css","assets/Experience-C0LU5S0s.js","assets/Experience-Ck3yc96m.css","assets/Projects-2TZUX_Zo.js","assets/Projects-DF6089F7.css","assets/Contact-3RT4Vv4x.js","assets/Contact-Bf208zMR.css","assets/RiftLayout-BdfxrGsX.js","assets/RiftLayout-BqSsf3KF.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ru(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const gt={},is=[],ti=()=>{},lp=()=>!1,Ua=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Cu=t=>t.startsWith("onUpdate:"),Bt=Object.assign,wu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},e_=Object.prototype.hasOwnProperty,lt=(t,e)=>e_.call(t,e),Be=Array.isArray,rs=t=>Oa(t)==="[object Map]",cp=t=>Oa(t)==="[object Set]",Ve=t=>typeof t=="function",wt=t=>typeof t=="string",Qi=t=>typeof t=="symbol",St=t=>t!==null&&typeof t=="object",up=t=>(St(t)||Ve(t))&&Ve(t.then)&&Ve(t.catch),fp=Object.prototype.toString,Oa=t=>fp.call(t),t_=t=>Oa(t).slice(8,-1),dp=t=>Oa(t)==="[object Object]",Pu=t=>wt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fs=Ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},n_=/-\w/g,Pn=Fa(t=>t.replace(n_,e=>e.slice(1).toUpperCase())),i_=/\B([A-Z])/g,er=Fa(t=>t.replace(i_,"-$1").toLowerCase()),ka=Fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),rl=Fa(t=>t?`on${ka(t)}`:""),Vi=(t,e)=>!Object.is(t,e),aa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},oc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},r_=t=>{const e=wt(t)?Number(t):NaN;return isNaN(e)?t:e};let Sf;const Ba=()=>Sf||(Sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Du(t){if(Be(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=wt(i)?l_(i):Du(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(wt(t)||St(t))return t}const s_=/;(?![^(]*\))/g,o_=/:([^]+)/,a_=/\/\*[^]*?\*\//g;function l_(t){const e={};return t.replace(a_,"").split(s_).forEach(n=>{if(n){const i=n.split(o_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Kn(t){let e="";if(wt(t))e=t;else if(Be(t))for(let n=0;n<t.length;n++){const i=Kn(t[n]);i&&(e+=i+" ")}else if(St(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const c_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",u_=Ru(c_);function pp(t){return!!t||t===""}const mp=t=>!!(t&&t.__v_isRef===!0),Yn=t=>wt(t)?t:t==null?"":Be(t)||St(t)&&(t.toString===fp||!Ve(t.toString))?mp(t)?Yn(t.value):JSON.stringify(t,gp,2):String(t),gp=(t,e)=>mp(e)?gp(t,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[sl(i,s)+" =>"]=r,n),{})}:cp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>sl(n))}:Qi(e)?sl(e):St(e)&&!Be(e)&&!dp(e)?String(e):e,sl=(t,e="")=>{var n;return Qi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class _p{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){++this._on===1&&(this.prevScope=on,on=this)}off(){this._on>0&&--this._on===0&&(on=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function f_(t){return new _p(t)}function d_(){return on}let vt;const ol=new WeakSet;class vp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&on.active&&on.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ol.has(this)&&(ol.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ef(this),Ep(this);const e=vt,n=Fn;vt=this,Fn=!0;try{return this.fn()}finally{yp(this),vt=e,Fn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nu(e);this.deps=this.depsTail=void 0,Ef(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ol.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ac(this)&&this.run()}get dirty(){return ac(this)}}let xp=0,ks,Bs;function Sp(t,e=!1){if(t.flags|=8,e){t.next=Bs,Bs=t;return}t.next=ks,ks=t}function Lu(){xp++}function Iu(){if(--xp>0)return;if(Bs){let e=Bs;for(Bs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ks;){let e=ks;for(ks=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Ep(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yp(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Nu(i),h_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function ac(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Mp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Mp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===js)||(t.globalVersion=js,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ac(t))))return;t.flags|=2;const e=t.dep,n=vt,i=Fn;vt=t,Fn=!0;try{Ep(t);const r=t.fn(t._value);(e.version===0||Vi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{vt=n,Fn=i,yp(t),t.flags&=-3}}function Nu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Nu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function h_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Fn=!0;const bp=[];function Ai(){bp.push(Fn),Fn=!1}function Ri(){const t=bp.pop();Fn=t===void 0?!0:t}function Ef(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=vt;vt=void 0;try{e()}finally{vt=n}}}let js=0;class p_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Uu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!vt||!Fn||vt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==vt)n=this.activeLink=new p_(vt,this),vt.deps?(n.prevDep=vt.depsTail,vt.depsTail.nextDep=n,vt.depsTail=n):vt.deps=vt.depsTail=n,Tp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=vt.depsTail,n.nextDep=void 0,vt.depsTail.nextDep=n,vt.depsTail=n,vt.deps===n&&(vt.deps=i)}return n}trigger(e){this.version++,js++,this.notify(e)}notify(e){Lu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Iu()}}}function Tp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Tp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const lc=new WeakMap,Cr=Symbol(""),cc=Symbol(""),qs=Symbol("");function jt(t,e,n){if(Fn&&vt){let i=lc.get(t);i||lc.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Uu),r.map=i,r.key=n),r.track()}}function xi(t,e,n,i,r,s){const o=lc.get(t);if(!o){js++;return}const a=l=>{l&&l.trigger()};if(Lu(),e==="clear")o.forEach(a);else{const l=Be(t),c=l&&Pu(n);if(l&&n==="length"){const f=Number(i);o.forEach((u,h)=>{(h==="length"||h===qs||!Qi(h)&&h>=f)&&a(u)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(qs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Cr)),rs(t)&&a(o.get(cc)));break;case"delete":l||(a(o.get(Cr)),rs(t)&&a(o.get(cc)));break;case"set":rs(t)&&a(o.get(Cr));break}}Iu()}function Ur(t){const e=it(t);return e===t?e:(jt(e,"iterate",qs),wn(t)?e:e.map(Ht))}function Ha(t){return jt(t=it(t),"iterate",qs),t}const m_={__proto__:null,[Symbol.iterator](){return al(this,Symbol.iterator,Ht)},concat(...t){return Ur(this).concat(...t.map(e=>Be(e)?Ur(e):e))},entries(){return al(this,"entries",t=>(t[1]=Ht(t[1]),t))},every(t,e){return ai(this,"every",t,e,void 0,arguments)},filter(t,e){return ai(this,"filter",t,e,n=>n.map(Ht),arguments)},find(t,e){return ai(this,"find",t,e,Ht,arguments)},findIndex(t,e){return ai(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ai(this,"findLast",t,e,Ht,arguments)},findLastIndex(t,e){return ai(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ai(this,"forEach",t,e,void 0,arguments)},includes(...t){return ll(this,"includes",t)},indexOf(...t){return ll(this,"indexOf",t)},join(t){return Ur(this).join(t)},lastIndexOf(...t){return ll(this,"lastIndexOf",t)},map(t,e){return ai(this,"map",t,e,void 0,arguments)},pop(){return ys(this,"pop")},push(...t){return ys(this,"push",t)},reduce(t,...e){return yf(this,"reduce",t,e)},reduceRight(t,...e){return yf(this,"reduceRight",t,e)},shift(){return ys(this,"shift")},some(t,e){return ai(this,"some",t,e,void 0,arguments)},splice(...t){return ys(this,"splice",t)},toReversed(){return Ur(this).toReversed()},toSorted(t){return Ur(this).toSorted(t)},toSpliced(...t){return Ur(this).toSpliced(...t)},unshift(...t){return ys(this,"unshift",t)},values(){return al(this,"values",Ht)}};function al(t,e,n){const i=Ha(t),r=i[e]();return i!==t&&!wn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const g_=Array.prototype;function ai(t,e,n,i,r,s){const o=Ha(t),a=o!==t&&!wn(t),l=o[e];if(l!==g_[e]){const u=l.apply(t,s);return a?Ht(u):u}let c=n;o!==t&&(a?c=function(u,h){return n.call(this,Ht(u),h,t)}:n.length>2&&(c=function(u,h){return n.call(this,u,h,t)}));const f=l.call(o,c,i);return a&&r?r(f):f}function yf(t,e,n,i){const r=Ha(t);let s=n;return r!==t&&(wn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Ht(a),l,t)}),r[e](s,...i)}function ll(t,e,n){const i=it(t);jt(i,"iterate",qs);const r=i[e](...n);return(r===-1||r===!1)&&ku(n[0])?(n[0]=it(n[0]),i[e](...n)):r}function ys(t,e,n=[]){Ai(),Lu();const i=it(t)[e].apply(t,n);return Iu(),Ri(),i}const __=Ru("__proto__,__v_isRef,__isVue"),Ap=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qi));function v_(t){Qi(t)||(t=String(t));const e=it(this);return jt(e,"has",t),e.hasOwnProperty(t)}class Rp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?C_:Dp:s?Pp:wp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!r){let l;if(o&&(l=m_[n]))return l;if(n==="hasOwnProperty")return v_}const a=Reflect.get(e,n,zt(e)?e:i);if((Qi(n)?Ap.has(n):__(n))||(r||jt(e,"get",n),s))return a;if(zt(a)){const l=o&&Pu(n)?a:a.value;return r&&St(l)?fc(l):l}return St(a)?r?fc(a):za(a):a}}class Cp extends Rp{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=qi(s);if(!wn(i)&&!qi(i)&&(s=it(s),i=it(i)),!Be(e)&&zt(s)&&!zt(i))return l||(s.value=i),!0}const o=Be(e)&&Pu(n)?Number(n)<e.length:lt(e,n),a=Reflect.set(e,n,i,zt(e)?e:r);return e===it(r)&&(o?Vi(i,s)&&xi(e,"set",n,i):xi(e,"add",n,i)),a}deleteProperty(e,n){const i=lt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&xi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Qi(n)||!Ap.has(n))&&jt(e,"has",n),i}ownKeys(e){return jt(e,"iterate",Be(e)?"length":Cr),Reflect.ownKeys(e)}}class x_ extends Rp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const S_=new Cp,E_=new x_,y_=new Cp(!0);const uc=t=>t,To=t=>Reflect.getPrototypeOf(t);function M_(t,e,n){return function(...i){const r=this.__v_raw,s=it(r),o=rs(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),f=n?uc:e?va:Ht;return!e&&jt(s,"iterate",l?cc:Cr),{next(){const{value:u,done:h}=c.next();return h?{value:u,done:h}:{value:a?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function Ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function b_(t,e){const n={get(r){const s=this.__v_raw,o=it(s),a=it(r);t||(Vi(r,a)&&jt(o,"get",r),jt(o,"get",a));const{has:l}=To(o),c=e?uc:t?va:Ht;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&jt(it(r),"iterate",Cr),r.size},has(r){const s=this.__v_raw,o=it(s),a=it(r);return t||(Vi(r,a)&&jt(o,"has",r),jt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=it(a),c=e?uc:t?va:Ht;return!t&&jt(l,"iterate",Cr),a.forEach((f,u)=>r.call(s,c(f),c(u),o))}};return Bt(n,t?{add:Ao("add"),set:Ao("set"),delete:Ao("delete"),clear:Ao("clear")}:{add(r){!e&&!wn(r)&&!qi(r)&&(r=it(r));const s=it(this);return To(s).has.call(s,r)||(s.add(r),xi(s,"add",r,r)),this},set(r,s){!e&&!wn(s)&&!qi(s)&&(s=it(s));const o=it(this),{has:a,get:l}=To(o);let c=a.call(o,r);c||(r=it(r),c=a.call(o,r));const f=l.call(o,r);return o.set(r,s),c?Vi(s,f)&&xi(o,"set",r,s):xi(o,"add",r,s),this},delete(r){const s=it(this),{has:o,get:a}=To(s);let l=o.call(s,r);l||(r=it(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&xi(s,"delete",r,void 0),c},clear(){const r=it(this),s=r.size!==0,o=r.clear();return s&&xi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=M_(r,t,e)}),n}function Ou(t,e){const n=b_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(lt(n,r)&&r in i?n:i,r,s)}const T_={get:Ou(!1,!1)},A_={get:Ou(!1,!0)},R_={get:Ou(!0,!1)};const wp=new WeakMap,Pp=new WeakMap,Dp=new WeakMap,C_=new WeakMap;function w_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function P_(t){return t.__v_skip||!Object.isExtensible(t)?0:w_(t_(t))}function za(t){return qi(t)?t:Fu(t,!1,S_,T_,wp)}function Lp(t){return Fu(t,!1,y_,A_,Pp)}function fc(t){return Fu(t,!0,E_,R_,Dp)}function Fu(t,e,n,i,r){if(!St(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=P_(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function ss(t){return qi(t)?ss(t.__v_raw):!!(t&&t.__v_isReactive)}function qi(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function ku(t){return t?!!t.__v_raw:!1}function it(t){const e=t&&t.__v_raw;return e?it(e):t}function D_(t){return!lt(t,"__v_skip")&&Object.isExtensible(t)&&hp(t,"__v_skip",!0),t}const Ht=t=>St(t)?za(t):t,va=t=>St(t)?fc(t):t;function zt(t){return t?t.__v_isRef===!0:!1}function Ys(t){return Np(t,!1)}function Ip(t){return Np(t,!0)}function Np(t,e){return zt(t)?t:new L_(t,e)}class L_{constructor(e,n){this.dep=new Uu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:it(e),this._value=n?e:Ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||wn(e)||qi(e);e=i?e:it(e),Vi(e,n)&&(this._rawValue=e,this._value=i?e:Ht(e),this.dep.trigger())}}function Nt(t){return zt(t)?t.value:t}const I_={get:(t,e,n)=>e==="__v_raw"?t:Nt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return zt(r)&&!zt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Up(t){return ss(t)?t:new Proxy(t,I_)}class N_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Uu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&vt!==this)return Sp(this,!0),!0}get value(){const e=this.dep.track();return Mp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function U_(t,e,n=!1){let i,r;return Ve(t)?i=t:(i=t.get,r=t.set),new N_(i,r,n)}const Ro={},xa=new WeakMap;let _r;function O_(t,e=!1,n=_r){if(n){let i=xa.get(n);i||xa.set(n,i=[]),i.push(t)}}function F_(t,e,n=gt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=v=>r?v:wn(v)||r===!1||r===0?Si(v,1):Si(v);let f,u,h,p,_=!1,x=!1;if(zt(t)?(u=()=>t.value,_=wn(t)):ss(t)?(u=()=>c(t),_=!0):Be(t)?(x=!0,_=t.some(v=>ss(v)||wn(v)),u=()=>t.map(v=>{if(zt(v))return v.value;if(ss(v))return c(v);if(Ve(v))return l?l(v,2):v()})):Ve(t)?e?u=l?()=>l(t,2):t:u=()=>{if(h){Ai();try{h()}finally{Ri()}}const v=_r;_r=f;try{return l?l(t,3,[p]):t(p)}finally{_r=v}}:u=ti,e&&r){const v=u,P=r===!0?1/0:r;u=()=>Si(v(),P)}const m=d_(),d=()=>{f.stop(),m&&m.active&&wu(m.effects,f)};if(s&&e){const v=e;e=(...P)=>{v(...P),d()}}let E=x?new Array(t.length).fill(Ro):Ro;const y=v=>{if(!(!(f.flags&1)||!f.dirty&&!v))if(e){const P=f.run();if(r||_||(x?P.some((T,R)=>Vi(T,E[R])):Vi(P,E))){h&&h();const T=_r;_r=f;try{const R=[P,E===Ro?void 0:x&&E[0]===Ro?[]:E,p];E=P,l?l(e,3,R):e(...R)}finally{_r=T}}}else f.run()};return a&&a(y),f=new vp(u),f.scheduler=o?()=>o(y,!1):y,p=v=>O_(v,!1,f),h=f.onStop=()=>{const v=xa.get(f);if(v){if(l)l(v,4);else for(const P of v)P();xa.delete(f)}},e?i?y(!0):E=f.run():o?o(y.bind(null,!0),!0):f.run(),d.pause=f.pause.bind(f),d.resume=f.resume.bind(f),d.stop=d,d}function Si(t,e=1/0,n){if(e<=0||!St(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,zt(t))Si(t.value,e,n);else if(Be(t))for(let i=0;i<t.length;i++)Si(t[i],e,n);else if(cp(t)||rs(t))t.forEach(i=>{Si(i,e,n)});else if(dp(t)){for(const i in t)Si(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Si(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fo(t,e,n,i){try{return i?t(...i):t()}catch(r){Va(r,e,n)}}function Hn(t,e,n,i){if(Ve(t)){const r=fo(t,e,n,i);return r&&up(r)&&r.catch(s=>{Va(s,e,n)}),r}if(Be(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Hn(t[s],e,n,i));return r}}function Va(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||gt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](t,l,c)===!1)return}a=a.parent}if(s){Ai(),fo(s,null,10,[t,l,c]),Ri();return}}k_(t,n,r,i,o)}function k_(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Qt=[];let $n=-1;const os=[];let Fi=null,Kr=0;const Op=Promise.resolve();let Sa=null;function Fp(t){const e=Sa||Op;return t?e.then(this?t.bind(this):t):e}function B_(t){let e=$n+1,n=Qt.length;for(;e<n;){const i=e+n>>>1,r=Qt[i],s=$s(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Bu(t){if(!(t.flags&1)){const e=$s(t),n=Qt[Qt.length-1];!n||!(t.flags&2)&&e>=$s(n)?Qt.push(t):Qt.splice(B_(e),0,t),t.flags|=1,kp()}}function kp(){Sa||(Sa=Op.then(Hp))}function H_(t){Be(t)?os.push(...t):Fi&&t.id===-1?Fi.splice(Kr+1,0,t):t.flags&1||(os.push(t),t.flags|=1),kp()}function Mf(t,e,n=$n+1){for(;n<Qt.length;n++){const i=Qt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Qt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Bp(t){if(os.length){const e=[...new Set(os)].sort((n,i)=>$s(n)-$s(i));if(os.length=0,Fi){Fi.push(...e);return}for(Fi=e,Kr=0;Kr<Fi.length;Kr++){const n=Fi[Kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fi=null,Kr=0}}const $s=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Hp(t){try{for($n=0;$n<Qt.length;$n++){const e=Qt[$n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$n<Qt.length;$n++){const e=Qt[$n];e&&(e.flags&=-2)}$n=-1,Qt.length=0,Bp(),Sa=null,(Qt.length||os.length)&&Hp()}}let vn=null,zp=null;function Ea(t){const e=vn;return vn=t,zp=t&&t.type.__scopeId||null,e}function Nn(t,e=vn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&ba(-1);const s=Ea(e);let o;try{o=t(...r)}finally{Ea(s),i._d&&ba(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function _w(t,e){if(vn===null)return t;const n=ja(vn),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=gt]=e[r];s&&(Ve(s)&&(s={mounted:s,updated:s}),s.deep&&Si(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function or(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ai(),Hn(l,n,8,[t.el,a,t,e]),Ri())}}const z_=Symbol("_vte"),Vp=t=>t.__isTeleport,vi=Symbol("_leaveCb"),Co=Symbol("_enterCb");function V_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return po(()=>{t.isMounted=!0}),Hu(()=>{t.isUnmounting=!0}),t}const bn=[Function,Array],Gp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bn,onEnter:bn,onAfterEnter:bn,onEnterCancelled:bn,onBeforeLeave:bn,onLeave:bn,onAfterLeave:bn,onLeaveCancelled:bn,onBeforeAppear:bn,onAppear:bn,onAfterAppear:bn,onAppearCancelled:bn},Wp=t=>{const e=t.subTree;return e.component?Wp(e.component):e},G_={name:"BaseTransition",props:Gp,setup(t,{slots:e}){const n=$i(),i=V_();return()=>{const r=e.default&&qp(e.default(),!0);if(!r||!r.length)return;const s=Xp(r),o=it(t),{mode:a}=o;if(i.isLeaving)return cl(s);const l=bf(s);if(!l)return cl(s);let c=dc(l,o,i,n,u=>c=u);l.type!==en&&Ks(l,c);let f=n.subTree&&bf(n.subTree);if(f&&f.type!==en&&!Sr(f,l)&&Wp(n).type!==en){let u=dc(f,o,i,n);if(Ks(f,u),a==="out-in"&&l.type!==en)return i.isLeaving=!0,u.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete u.afterLeave,f=void 0},cl(s);a==="in-out"&&l.type!==en?u.delayLeave=(h,p,_)=>{const x=jp(i,f);x[String(f.key)]=f,h[vi]=()=>{p(),h[vi]=void 0,delete c.delayedLeave,f=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return s}}};function Xp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==en){e=n;break}}return e}const W_=G_;function jp(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function dc(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:m,onAppear:d,onAfterAppear:E,onAppearCancelled:y}=e,v=String(t.key),P=jp(n,t),T=(b,A)=>{b&&Hn(b,i,9,A)},R=(b,A)=>{const N=A[1];T(b,A),Be(b)?b.every(U=>U.length<=1)&&N():b.length<=1&&N()},F={mode:o,persisted:a,beforeEnter(b){let A=l;if(!n.isMounted)if(s)A=m||l;else return;b[vi]&&b[vi](!0);const N=P[v];N&&Sr(t,N)&&N.el[vi]&&N.el[vi](),T(A,[b])},enter(b){let A=c,N=f,U=u;if(!n.isMounted)if(s)A=d||c,N=E||f,U=y||u;else return;let Y=!1;const ee=b[Co]=ie=>{Y||(Y=!0,ie?T(U,[b]):T(N,[b]),F.delayedLeave&&F.delayedLeave(),b[Co]=void 0)};A?R(A,[b,ee]):ee()},leave(b,A){const N=String(t.key);if(b[Co]&&b[Co](!0),n.isUnmounting)return A();T(h,[b]);let U=!1;const Y=b[vi]=ee=>{U||(U=!0,A(),ee?T(x,[b]):T(_,[b]),b[vi]=void 0,P[N]===t&&delete P[N])};P[N]=t,p?R(p,[b,Y]):Y()},clone(b){const A=dc(b,e,n,i,r);return r&&r(A),A}};return F}function cl(t){if(Ga(t))return t=Yi(t),t.children=null,t}function bf(t){if(!Ga(t))return Vp(t.type)&&t.children?Xp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ve(n.default))return n.default()}}function Ks(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ks(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qp(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===an?(o.patchFlag&128&&r++,i=i.concat(qp(o.children,e,a))):(e||o.type!==en)&&i.push(a!=null?Yi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ho(t,e){return Ve(t)?Bt({name:t.name},e,{setup:t}):t}function Yp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ya=new WeakMap;function Hs(t,e,n,i,r=!1){if(Be(t)){t.forEach((_,x)=>Hs(_,e&&(Be(e)?e[x]:e),n,i,r));return}if(zs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Hs(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?ja(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,f=a.refs===gt?a.refs={}:a.refs,u=a.setupState,h=it(u),p=u===gt?lp:_=>lt(h,_);if(c!=null&&c!==l){if(Tf(e),wt(c))f[c]=null,p(c)&&(u[c]=null);else if(zt(c)){c.value=null;const _=e;_.k&&(f[_.k]=null)}}if(Ve(l))fo(l,a,12,[o,f]);else{const _=wt(l),x=zt(l);if(_||x){const m=()=>{if(t.f){const d=_?p(l)?u[l]:f[l]:l.value;if(r)Be(d)&&wu(d,s);else if(Be(d))d.includes(s)||d.push(s);else if(_)f[l]=[s],p(l)&&(u[l]=f[l]);else{const E=[s];l.value=E,t.k&&(f[t.k]=E)}}else _?(f[l]=o,p(l)&&(u[l]=o)):x&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const d=()=>{m(),ya.delete(t)};d.id=-1,ya.set(t,d),mn(d,n)}else Tf(t),m()}}}function Tf(t){const e=ya.get(t);e&&(e.flags|=8,ya.delete(t))}Ba().requestIdleCallback;Ba().cancelIdleCallback;const zs=t=>!!t.type.__asyncLoader,Ga=t=>t.type.__isKeepAlive;function X_(t,e){$p(t,"a",e)}function j_(t,e){$p(t,"da",e)}function $p(t,e,n=qt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Wa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ga(r.parent.vnode)&&q_(i,e,n,r),r=r.parent}}function q_(t,e,n,i){const r=Wa(e,t,i,!0);zu(()=>{wu(i[e],r)},n)}function Wa(t,e,n=qt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Ai();const a=go(n),l=Hn(e,n,t,o);return a(),Ri(),l});return i?r.unshift(s):r.push(s),s}}const Ci=t=>(e,n=qt)=>{(!Qs||t==="sp")&&Wa(t,(...i)=>e(...i),n)},Y_=Ci("bm"),po=Ci("m"),$_=Ci("bu"),K_=Ci("u"),Hu=Ci("bum"),zu=Ci("um"),Z_=Ci("sp"),J_=Ci("rtg"),Q_=Ci("rtc");function ev(t,e=qt){Wa("ec",t,e)}const Kp="components";function hc(t,e){return Jp(Kp,t,!0,e)||t}const Zp=Symbol.for("v-ndc");function tv(t){return wt(t)?Jp(Kp,t,!1)||t:t||Zp}function Jp(t,e,n=!0,i=!1){const r=vn||qt;if(r){const s=r.type;{const a=Gv(s,!1);if(a&&(a===e||a===Pn(e)||a===ka(Pn(e))))return s}const o=Af(r[t]||s[t],e)||Af(r.appContext[t],e);return!o&&i?s:o}}function Af(t,e){return t&&(t[e]||t[Pn(e)]||t[ka(Pn(e))])}function nv(t,e,n,i){let r;const s=n,o=Be(t);if(o||wt(t)){const a=o&&ss(t);let l=!1,c=!1;a&&(l=!wn(t),c=qi(t),t=Ha(t)),r=new Array(t.length);for(let f=0,u=t.length;f<u;f++)r[f]=e(l?c?va(Ht(t[f])):Ht(t[f]):t[f],f,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(St(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const f=a[l];r[l]=e(t[f],f,l,s)}}else r=[];return r}const pc=t=>t?Sm(t)?ja(t):pc(t.parent):null,Vs=Bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pc(t.parent),$root:t=>pc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>em(t),$forceUpdate:t=>t.f||(t.f=()=>{Bu(t.update)}),$nextTick:t=>t.n||(t.n=Fp.bind(t.proxy)),$watch:t=>Tv.bind(t)}),ul=(t,e)=>t!==gt&&!t.__isScriptSetup&&lt(t,e),iv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(ul(i,e))return o[e]=1,i[e];if(r!==gt&&lt(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&lt(c,e))return o[e]=3,s[e];if(n!==gt&&lt(n,e))return o[e]=4,n[e];mc&&(o[e]=0)}}const f=Vs[e];let u,h;if(f)return e==="$attrs"&&jt(t.attrs,"get",""),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==gt&&lt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,lt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return ul(r,e)?(r[e]=n,!0):i!==gt&&lt(i,e)?(i[e]=n,!0):lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s,type:o}},a){let l,c;return!!(n[a]||t!==gt&&a[0]!=="$"&&lt(t,a)||ul(e,a)||(l=s[0])&&lt(l,a)||lt(i,a)||lt(Vs,a)||lt(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:lt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rv(){return sv().attrs}function sv(t){const e=$i();return e.setupContext||(e.setupContext=ym(e))}function Rf(t){return Be(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let mc=!0;function ov(t){const e=em(t),n=t.proxy,i=t.ctx;mc=!1,e.beforeCreate&&Cf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:f,beforeMount:u,mounted:h,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:E,destroyed:y,unmounted:v,render:P,renderTracked:T,renderTriggered:R,errorCaptured:F,serverPrefetch:b,expose:A,inheritAttrs:N,components:U,directives:Y,filters:ee}=e;if(c&&av(c,i,null),o)for(const oe in o){const q=o[oe];Ve(q)&&(i[oe]=q.bind(n))}if(r){const oe=r.call(n,n);St(oe)&&(t.data=za(oe))}if(mc=!0,s)for(const oe in s){const q=s[oe],ce=Ve(q)?q.bind(n,n):Ve(q.get)?q.get.bind(n,n):ti,_e=!Ve(q)&&Ve(q.set)?q.set.bind(n):ti,ye=Yt({get:ce,set:_e});Object.defineProperty(i,oe,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ue=>ye.value=Ue})}if(a)for(const oe in a)Qp(a[oe],i,n,oe);if(l){const oe=Ve(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(q=>{la(q,oe[q])})}f&&Cf(f,t,"c");function Q(oe,q){Be(q)?q.forEach(ce=>oe(ce.bind(n))):q&&oe(q.bind(n))}if(Q(Y_,u),Q(po,h),Q($_,p),Q(K_,_),Q(X_,x),Q(j_,m),Q(ev,F),Q(Q_,T),Q(J_,R),Q(Hu,E),Q(zu,v),Q(Z_,b),Be(A))if(A.length){const oe=t.exposed||(t.exposed={});A.forEach(q=>{Object.defineProperty(oe,q,{get:()=>n[q],set:ce=>n[q]=ce,enumerable:!0})})}else t.exposed||(t.exposed={});P&&t.render===ti&&(t.render=P),N!=null&&(t.inheritAttrs=N),U&&(t.components=U),Y&&(t.directives=Y),b&&Yp(t)}function av(t,e,n=ti){Be(t)&&(t=gc(t));for(const i in t){const r=t[i];let s;St(r)?"default"in r?s=kn(r.from||i,r.default,!0):s=kn(r.from||i):s=kn(r),zt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Cf(t,e,n){Hn(Be(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qp(t,e,n,i){let r=i.includes(".")?hm(n,i):()=>n[i];if(wt(t)){const s=e[t];Ve(s)&&Gi(r,s)}else if(Ve(t))Gi(r,t.bind(n));else if(St(t))if(Be(t))t.forEach(s=>Qp(s,e,n,i));else{const s=Ve(t.handler)?t.handler.bind(n):e[t.handler];Ve(s)&&Gi(r,s,t)}}function em(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ma(l,c,o,!0)),Ma(l,e,o)),St(e)&&s.set(e,l),l}function Ma(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ma(t,s,n,!0),r&&r.forEach(o=>Ma(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=lv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const lv={data:wf,props:Pf,emits:Pf,methods:Us,computed:Us,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:Us,directives:Us,watch:uv,provide:wf,inject:cv};function wf(t,e){return e?t?function(){return Bt(Ve(t)?t.call(this,this):t,Ve(e)?e.call(this,this):e)}:e:t}function cv(t,e){return Us(gc(t),gc(e))}function gc(t){if(Be(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?Bt(Object.create(null),t,e):e}function Pf(t,e){return t?Be(t)&&Be(e)?[...new Set([...t,...e])]:Bt(Object.create(null),Rf(t),Rf(e??{})):e}function uv(t,e){if(!t)return e;if(!e)return t;const n=Bt(Object.create(null),t);for(const i in e)n[i]=Kt(t[i],e[i]);return n}function tm(){return{app:null,config:{isNativeTag:lp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fv=0;function dv(t,e){return function(i,r=null){Ve(i)||(i=Bt({},i)),r!=null&&!St(r)&&(r=null);const s=tm(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:fv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Xv,get config(){return s.config},set config(f){},use(f,...u){return o.has(f)||(f&&Ve(f.install)?(o.add(f),f.install(c,...u)):Ve(f)&&(o.add(f),f(c,...u))),c},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),c},component(f,u){return u?(s.components[f]=u,c):s.components[f]},directive(f,u){return u?(s.directives[f]=u,c):s.directives[f]},mount(f,u,h){if(!l){const p=c._ceVNode||ft(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(p,f,h),l=!0,c._container=f,f.__vue_app__=c,ja(p.component)}},onUnmount(f){a.push(f)},unmount(){l&&(Hn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(f,u){return s.provides[f]=u,c},runWithContext(f){const u=as;as=c;try{return f()}finally{as=u}}};return c}}let as=null;function la(t,e){if(qt){let n=qt.provides;const i=qt.parent&&qt.parent.provides;i===n&&(n=qt.provides=Object.create(i)),n[t]=e}}function kn(t,e,n=!1){const i=$i();if(i||as){let r=as?as._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ve(e)?e.call(i&&i.proxy):e}}const nm={},im=()=>Object.create(nm),rm=t=>Object.getPrototypeOf(t)===nm;function hv(t,e,n,i=!1){const r={},s=im();t.propsDefaults=Object.create(null),sm(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Lp(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function pv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=it(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(Xa(t.emitsOptions,h))continue;const p=e[h];if(l)if(lt(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=Pn(h);r[_]=_c(l,a,_,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{sm(t,e,r,s)&&(c=!0);let f;for(const u in a)(!e||!lt(e,u)&&((f=er(u))===u||!lt(e,f)))&&(l?n&&(n[u]!==void 0||n[f]!==void 0)&&(r[u]=_c(l,a,u,void 0,t,!0)):delete r[u]);if(s!==a)for(const u in s)(!e||!lt(e,u))&&(delete s[u],c=!0)}c&&xi(t.attrs,"set","")}function sm(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fs(l))continue;const c=e[l];let f;r&&lt(r,f=Pn(l))?!s||!s.includes(f)?n[f]=c:(a||(a={}))[f]=c:Xa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=it(n),c=a||gt;for(let f=0;f<s.length;f++){const u=s[f];n[u]=_c(r,l,u,c[u],t,!lt(c,u))}}return o}function _c(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const f=go(r);i=c[n]=l.call(null,e),f()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===er(n))&&(i=!0))}return i}const mv=new WeakMap;function om(t,e,n=!1){const i=n?mv:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ve(t)){const f=u=>{l=!0;const[h,p]=om(u,e,!0);Bt(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!s&&!l)return St(t)&&i.set(t,is),is;if(Be(s))for(let f=0;f<s.length;f++){const u=Pn(s[f]);Df(u)&&(o[u]=gt)}else if(s)for(const f in s){const u=Pn(f);if(Df(u)){const h=s[f],p=o[u]=Be(h)||Ve(h)?{type:h}:Bt({},h),_=p.type;let x=!1,m=!0;if(Be(_))for(let d=0;d<_.length;++d){const E=_[d],y=Ve(E)&&E.name;if(y==="Boolean"){x=!0;break}else y==="String"&&(m=!1)}else x=Ve(_)&&_.name==="Boolean";p[0]=x,p[1]=m,(x||lt(p,"default"))&&a.push(u)}}const c=[o,a];return St(t)&&i.set(t,c),c}function Df(t){return t[0]!=="$"&&!Fs(t)}const Vu=t=>t==="_"||t==="_ctx"||t==="$stable",Gu=t=>Be(t)?t.map(Zn):[Zn(t)],gv=(t,e,n)=>{if(e._n)return e;const i=Nn((...r)=>Gu(e(...r)),n);return i._c=!1,i},am=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Vu(r))continue;const s=t[r];if(Ve(s))e[r]=gv(r,s,i);else if(s!=null){const o=Gu(s);e[r]=()=>o}}},lm=(t,e)=>{const n=Gu(e);t.slots.default=()=>n},cm=(t,e,n)=>{for(const i in e)(n||!Vu(i))&&(t[i]=e[i])},_v=(t,e,n)=>{const i=t.slots=im();if(t.vnode.shapeFlag&32){const r=e._;r?(cm(i,e,n),n&&hp(i,"_",r,!0)):am(e,i)}else e&&lm(t,e)},vv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=gt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:cm(r,e,n):(s=!e.$stable,am(e,r)),o=e}else e&&(lm(t,e),o={default:1});if(s)for(const a in r)!Vu(a)&&o[a]==null&&delete r[a]},mn=Iv;function xv(t){return Sv(t)}function Sv(t,e){const n=Ba();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:f,parentNode:u,nextSibling:h,setScopeId:p=ti,insertStaticContent:_}=t,x=(I,S,B,$=null,Z=null,G=null,D=void 0,C=null,O=!!S.dynamicChildren)=>{if(I===S)return;I&&!Sr(I,S)&&($=k(I),Ue(I,Z,G,!0),I=null),S.patchFlag===-2&&(O=!1,S.dynamicChildren=null);const{type:W,ref:de,shapeFlag:M}=S;switch(W){case mo:m(I,S,B,$);break;case en:d(I,S,B,$);break;case ca:I==null&&E(S,B,$,D);break;case an:U(I,S,B,$,Z,G,D,C,O);break;default:M&1?P(I,S,B,$,Z,G,D,C,O):M&6?Y(I,S,B,$,Z,G,D,C,O):(M&64||M&128)&&W.process(I,S,B,$,Z,G,D,C,O,le)}de!=null&&Z?Hs(de,I&&I.ref,G,S||I,!S):de==null&&I&&I.ref!=null&&Hs(I.ref,null,G,I,!0)},m=(I,S,B,$)=>{if(I==null)i(S.el=a(S.children),B,$);else{const Z=S.el=I.el;S.children!==I.children&&c(Z,S.children)}},d=(I,S,B,$)=>{I==null?i(S.el=l(S.children||""),B,$):S.el=I.el},E=(I,S,B,$)=>{[I.el,I.anchor]=_(I.children,S,B,$,I.el,I.anchor)},y=({el:I,anchor:S},B,$)=>{let Z;for(;I&&I!==S;)Z=h(I),i(I,B,$),I=Z;i(S,B,$)},v=({el:I,anchor:S})=>{let B;for(;I&&I!==S;)B=h(I),r(I),I=B;r(S)},P=(I,S,B,$,Z,G,D,C,O)=>{S.type==="svg"?D="svg":S.type==="math"&&(D="mathml"),I==null?T(S,B,$,Z,G,D,C,O):b(I,S,Z,G,D,C,O)},T=(I,S,B,$,Z,G,D,C)=>{let O,W;const{props:de,shapeFlag:M,transition:g,dirs:L}=I;if(O=I.el=o(I.type,G,de&&de.is,de),M&8?f(O,I.children):M&16&&F(I.children,O,null,$,Z,fl(I,G),D,C),L&&or(I,null,$,"created"),R(O,I,I.scopeId,D,$),de){for(const J in de)J!=="value"&&!Fs(J)&&s(O,J,null,de[J],G,$);"value"in de&&s(O,"value",null,de.value,G),(W=de.onVnodeBeforeMount)&&Wn(W,$,I)}L&&or(I,null,$,"beforeMount");const z=Ev(Z,g);z&&g.beforeEnter(O),i(O,S,B),((W=de&&de.onVnodeMounted)||z||L)&&mn(()=>{W&&Wn(W,$,I),z&&g.enter(O),L&&or(I,null,$,"mounted")},Z)},R=(I,S,B,$,Z)=>{if(B&&p(I,B),$)for(let G=0;G<$.length;G++)p(I,$[G]);if(Z){let G=Z.subTree;if(S===G||mm(G.type)&&(G.ssContent===S||G.ssFallback===S)){const D=Z.vnode;R(I,D,D.scopeId,D.slotScopeIds,Z.parent)}}},F=(I,S,B,$,Z,G,D,C,O=0)=>{for(let W=O;W<I.length;W++){const de=I[W]=C?ki(I[W]):Zn(I[W]);x(null,de,S,B,$,Z,G,D,C)}},b=(I,S,B,$,Z,G,D)=>{const C=S.el=I.el;let{patchFlag:O,dynamicChildren:W,dirs:de}=S;O|=I.patchFlag&16;const M=I.props||gt,g=S.props||gt;let L;if(B&&ar(B,!1),(L=g.onVnodeBeforeUpdate)&&Wn(L,B,S,I),de&&or(S,I,B,"beforeUpdate"),B&&ar(B,!0),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&f(C,""),W?A(I.dynamicChildren,W,C,B,$,fl(S,Z),G):D||q(I,S,C,null,B,$,fl(S,Z),G,!1),O>0){if(O&16)N(C,M,g,B,Z);else if(O&2&&M.class!==g.class&&s(C,"class",null,g.class,Z),O&4&&s(C,"style",M.style,g.style,Z),O&8){const z=S.dynamicProps;for(let J=0;J<z.length;J++){const K=z[J],xe=M[K],fe=g[K];(fe!==xe||K==="value")&&s(C,K,xe,fe,Z,B)}}O&1&&I.children!==S.children&&f(C,S.children)}else!D&&W==null&&N(C,M,g,B,Z);((L=g.onVnodeUpdated)||de)&&mn(()=>{L&&Wn(L,B,S,I),de&&or(S,I,B,"updated")},$)},A=(I,S,B,$,Z,G,D)=>{for(let C=0;C<S.length;C++){const O=I[C],W=S[C],de=O.el&&(O.type===an||!Sr(O,W)||O.shapeFlag&198)?u(O.el):B;x(O,W,de,null,$,Z,G,D,!0)}},N=(I,S,B,$,Z)=>{if(S!==B){if(S!==gt)for(const G in S)!Fs(G)&&!(G in B)&&s(I,G,S[G],null,Z,$);for(const G in B){if(Fs(G))continue;const D=B[G],C=S[G];D!==C&&G!=="value"&&s(I,G,C,D,Z,$)}"value"in B&&s(I,"value",S.value,B.value,Z)}},U=(I,S,B,$,Z,G,D,C,O)=>{const W=S.el=I?I.el:a(""),de=S.anchor=I?I.anchor:a("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:L}=S;L&&(C=C?C.concat(L):L),I==null?(i(W,B,$),i(de,B,$),F(S.children||[],B,de,Z,G,D,C,O)):M>0&&M&64&&g&&I.dynamicChildren?(A(I.dynamicChildren,g,B,Z,G,D,C),(S.key!=null||Z&&S===Z.subTree)&&um(I,S,!0)):q(I,S,B,de,Z,G,D,C,O)},Y=(I,S,B,$,Z,G,D,C,O)=>{S.slotScopeIds=C,I==null?S.shapeFlag&512?Z.ctx.activate(S,B,$,D,O):ee(S,B,$,Z,G,D,O):ie(I,S,O)},ee=(I,S,B,$,Z,G,D)=>{const C=I.component=Bv(I,$,Z);if(Ga(I)&&(C.ctx.renderer=le),Hv(C,!1,D),C.asyncDep){if(Z&&Z.registerDep(C,Q,D),!I.el){const O=C.subTree=ft(en);d(null,O,S,B),I.placeholder=O.el}}else Q(C,I,S,B,Z,G,D)},ie=(I,S,B)=>{const $=S.component=I.component;if(Dv(I,S,B))if($.asyncDep&&!$.asyncResolved){oe($,S,B);return}else $.next=S,$.update();else S.el=I.el,$.vnode=S},Q=(I,S,B,$,Z,G,D)=>{const C=()=>{if(I.isMounted){let{next:M,bu:g,u:L,parent:z,vnode:J}=I;{const Re=fm(I);if(Re){M&&(M.el=J.el,oe(I,M,D)),Re.asyncDep.then(()=>{I.isUnmounted||C()});return}}let K=M,xe;ar(I,!1),M?(M.el=J.el,oe(I,M,D)):M=J,g&&aa(g),(xe=M.props&&M.props.onVnodeBeforeUpdate)&&Wn(xe,z,M,J),ar(I,!0);const fe=If(I),Ae=I.subTree;I.subTree=fe,x(Ae,fe,u(Ae.el),k(Ae),I,Z,G),M.el=fe.el,K===null&&Lv(I,fe.el),L&&mn(L,Z),(xe=M.props&&M.props.onVnodeUpdated)&&mn(()=>Wn(xe,z,M,J),Z)}else{let M;const{el:g,props:L}=S,{bm:z,m:J,parent:K,root:xe,type:fe}=I,Ae=zs(S);ar(I,!1),z&&aa(z),!Ae&&(M=L&&L.onVnodeBeforeMount)&&Wn(M,K,S),ar(I,!0);{xe.ce&&xe.ce._def.shadowRoot!==!1&&xe.ce._injectChildStyle(fe);const Re=I.subTree=If(I);x(null,Re,B,$,I,Z,G),S.el=Re.el}if(J&&mn(J,Z),!Ae&&(M=L&&L.onVnodeMounted)){const Re=S;mn(()=>Wn(M,K,Re),Z)}(S.shapeFlag&256||K&&zs(K.vnode)&&K.vnode.shapeFlag&256)&&I.a&&mn(I.a,Z),I.isMounted=!0,S=B=$=null}};I.scope.on();const O=I.effect=new vp(C);I.scope.off();const W=I.update=O.run.bind(O),de=I.job=O.runIfDirty.bind(O);de.i=I,de.id=I.uid,O.scheduler=()=>Bu(de),ar(I,!0),W()},oe=(I,S,B)=>{S.component=I;const $=I.vnode.props;I.vnode=S,I.next=null,pv(I,S.props,$,B),vv(I,S.children,B),Ai(),Mf(I),Ri()},q=(I,S,B,$,Z,G,D,C,O=!1)=>{const W=I&&I.children,de=I?I.shapeFlag:0,M=S.children,{patchFlag:g,shapeFlag:L}=S;if(g>0){if(g&128){_e(W,M,B,$,Z,G,D,C,O);return}else if(g&256){ce(W,M,B,$,Z,G,D,C,O);return}}L&8?(de&16&&se(W,Z,G),M!==W&&f(B,M)):de&16?L&16?_e(W,M,B,$,Z,G,D,C,O):se(W,Z,G,!0):(de&8&&f(B,""),L&16&&F(M,B,$,Z,G,D,C,O))},ce=(I,S,B,$,Z,G,D,C,O)=>{I=I||is,S=S||is;const W=I.length,de=S.length,M=Math.min(W,de);let g;for(g=0;g<M;g++){const L=S[g]=O?ki(S[g]):Zn(S[g]);x(I[g],L,B,null,Z,G,D,C,O)}W>de?se(I,Z,G,!0,!1,M):F(S,B,$,Z,G,D,C,O,M)},_e=(I,S,B,$,Z,G,D,C,O)=>{let W=0;const de=S.length;let M=I.length-1,g=de-1;for(;W<=M&&W<=g;){const L=I[W],z=S[W]=O?ki(S[W]):Zn(S[W]);if(Sr(L,z))x(L,z,B,null,Z,G,D,C,O);else break;W++}for(;W<=M&&W<=g;){const L=I[M],z=S[g]=O?ki(S[g]):Zn(S[g]);if(Sr(L,z))x(L,z,B,null,Z,G,D,C,O);else break;M--,g--}if(W>M){if(W<=g){const L=g+1,z=L<de?S[L].el:$;for(;W<=g;)x(null,S[W]=O?ki(S[W]):Zn(S[W]),B,z,Z,G,D,C,O),W++}}else if(W>g)for(;W<=M;)Ue(I[W],Z,G,!0),W++;else{const L=W,z=W,J=new Map;for(W=z;W<=g;W++){const Le=S[W]=O?ki(S[W]):Zn(S[W]);Le.key!=null&&J.set(Le.key,W)}let K,xe=0;const fe=g-z+1;let Ae=!1,Re=0;const he=new Array(fe);for(W=0;W<fe;W++)he[W]=0;for(W=L;W<=M;W++){const Le=I[W];if(xe>=fe){Ue(Le,Z,G,!0);continue}let Ce;if(Le.key!=null)Ce=J.get(Le.key);else for(K=z;K<=g;K++)if(he[K-z]===0&&Sr(Le,S[K])){Ce=K;break}Ce===void 0?Ue(Le,Z,G,!0):(he[Ce-z]=W+1,Ce>=Re?Re=Ce:Ae=!0,x(Le,S[Ce],B,null,Z,G,D,C,O),xe++)}const Me=Ae?yv(he):is;for(K=Me.length-1,W=fe-1;W>=0;W--){const Le=z+W,Ce=S[Le],Se=S[Le+1],ze=Le+1<de?Se.el||Se.placeholder:$;he[W]===0?x(null,Ce,B,ze,Z,G,D,C,O):Ae&&(K<0||W!==Me[K]?ye(Ce,B,ze,2):K--)}}},ye=(I,S,B,$,Z=null)=>{const{el:G,type:D,transition:C,children:O,shapeFlag:W}=I;if(W&6){ye(I.component.subTree,S,B,$);return}if(W&128){I.suspense.move(S,B,$);return}if(W&64){D.move(I,S,B,le);return}if(D===an){i(G,S,B);for(let M=0;M<O.length;M++)ye(O[M],S,B,$);i(I.anchor,S,B);return}if(D===ca){y(I,S,B);return}if($!==2&&W&1&&C)if($===0)C.beforeEnter(G),i(G,S,B),mn(()=>C.enter(G),Z);else{const{leave:M,delayLeave:g,afterLeave:L}=C,z=()=>{I.ctx.isUnmounted?r(G):i(G,S,B)},J=()=>{G._isLeaving&&G[vi](!0),M(G,()=>{z(),L&&L()})};g?g(G,z,J):J()}else i(G,S,B)},Ue=(I,S,B,$=!1,Z=!1)=>{const{type:G,props:D,ref:C,children:O,dynamicChildren:W,shapeFlag:de,patchFlag:M,dirs:g,cacheIndex:L}=I;if(M===-2&&(Z=!1),C!=null&&(Ai(),Hs(C,null,B,I,!0),Ri()),L!=null&&(S.renderCache[L]=void 0),de&256){S.ctx.deactivate(I);return}const z=de&1&&g,J=!zs(I);let K;if(J&&(K=D&&D.onVnodeBeforeUnmount)&&Wn(K,S,I),de&6)Xe(I.component,B,$);else{if(de&128){I.suspense.unmount(B,$);return}z&&or(I,null,S,"beforeUnmount"),de&64?I.type.remove(I,S,B,le,$):W&&!W.hasOnce&&(G!==an||M>0&&M&64)?se(W,S,B,!1,!0):(G===an&&M&384||!Z&&de&16)&&se(O,S,B),$&&Ye(I)}(J&&(K=D&&D.onVnodeUnmounted)||z)&&mn(()=>{K&&Wn(K,S,I),z&&or(I,null,S,"unmounted")},B)},Ye=I=>{const{type:S,el:B,anchor:$,transition:Z}=I;if(S===an){Qe(B,$);return}if(S===ca){v(I);return}const G=()=>{r(B),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(I.shapeFlag&1&&Z&&!Z.persisted){const{leave:D,delayLeave:C}=Z,O=()=>D(B,G);C?C(I.el,G,O):O()}else G()},Qe=(I,S)=>{let B;for(;I!==S;)B=h(I),r(I),I=B;r(S)},Xe=(I,S,B)=>{const{bum:$,scope:Z,job:G,subTree:D,um:C,m:O,a:W}=I;Lf(O),Lf(W),$&&aa($),Z.stop(),G&&(G.flags|=8,Ue(D,I,S,B)),C&&mn(C,S),mn(()=>{I.isUnmounted=!0},S)},se=(I,S,B,$=!1,Z=!1,G=0)=>{for(let D=G;D<I.length;D++)Ue(I[D],S,B,$,Z)},k=I=>{if(I.shapeFlag&6)return k(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const S=h(I.anchor||I.el),B=S&&S[z_];return B?h(B):S};let re=!1;const ae=(I,S,B)=>{I==null?S._vnode&&Ue(S._vnode,null,null,!0):x(S._vnode||null,I,S,null,null,null,B),S._vnode=I,re||(re=!0,Mf(),Bp(),re=!1)},le={p:x,um:Ue,m:ye,r:Ye,mt:ee,mc:F,pc:q,pbc:A,n:k,o:t};return{render:ae,hydrate:void 0,createApp:dv(ae)}}function fl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ar({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ev(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function um(t,e,n=!1){const i=t.children,r=e.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ki(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&um(o,a)),a.type===mo&&a.patchFlag!==-1&&(a.el=o.el),a.type===en&&!a.el&&(a.el=o.el)}}function yv(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function fm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fm(e)}function Lf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Mv=Symbol.for("v-scx"),bv=()=>kn(Mv);function Gi(t,e,n){return dm(t,e,n)}function dm(t,e,n=gt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Bt({},n),l=e&&i||!e&&s!=="post";let c;if(Qs){if(s==="sync"){const p=bv();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ti,p.resume=ti,p.pause=ti,p}}const f=qt;a.call=(p,_,x)=>Hn(p,f,_,x);let u=!1;s==="post"?a.scheduler=p=>{mn(p,f&&f.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(p,_)=>{_?p():Bu(p)}),a.augmentJob=p=>{e&&(p.flags|=4),u&&(p.flags|=2,f&&(p.id=f.uid,p.i=f))};const h=F_(t,e,a);return Qs&&(c?c.push(h):l&&h()),h}function Tv(t,e,n){const i=this.proxy,r=wt(t)?t.includes(".")?hm(i,t):()=>i[t]:t.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,n=e);const o=go(this),a=dm(r,s.bind(i),n);return o(),a}function hm(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Av=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Pn(e)}Modifiers`]||t[`${er(e)}Modifiers`];function Rv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||gt;let r=n;const s=e.startsWith("update:"),o=s&&Av(i,e.slice(7));o&&(o.trim&&(r=n.map(f=>wt(f)?f.trim():f)),o.number&&(r=n.map(oc)));let a,l=i[a=rl(e)]||i[a=rl(Pn(e))];!l&&s&&(l=i[a=rl(er(e))]),l&&Hn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Hn(c,t,6,r)}}const Cv=new WeakMap;function pm(t,e,n=!1){const i=n?Cv:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ve(t)){const l=c=>{const f=pm(c,e,!0);f&&(a=!0,Bt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(St(t)&&i.set(t,null),null):(Be(s)?s.forEach(l=>o[l]=null):Bt(o,s),St(t)&&i.set(t,o),o)}function Xa(t,e){return!t||!Ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(t,e[0].toLowerCase()+e.slice(1))||lt(t,er(e))||lt(t,e))}function If(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:f,props:u,data:h,setupState:p,ctx:_,inheritAttrs:x}=t,m=Ea(t);let d,E;try{if(n.shapeFlag&4){const v=r||i,P=v;d=Zn(c.call(P,v,f,u,p,h,_)),E=a}else{const v=e;d=Zn(v.length>1?v(u,{attrs:a,slots:o,emit:l}):v(u,null)),E=e.props?a:wv(a)}}catch(v){Gs.length=0,Va(v,t,1),d=ft(en)}let y=d;if(E&&x!==!1){const v=Object.keys(E),{shapeFlag:P}=y;v.length&&P&7&&(s&&v.some(Cu)&&(E=Pv(E,s)),y=Yi(y,E,!1,!0))}return n.dirs&&(y=Yi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Ks(y,n.transition),d=y,Ea(m),d}const wv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ua(n))&&((e||(e={}))[n]=t[n]);return e},Pv=(t,e)=>{const n={};for(const i in t)(!Cu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Dv(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Nf(i,o,c):!!o;if(l&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(o[h]!==i[h]&&!Xa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Nf(i,o,c):!0:!!o;return!1}function Nf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Xa(n,s))return!0}return!1}function Lv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const mm=t=>t.__isSuspense;function Iv(t,e){e&&e.pendingBranch?Be(t)?e.effects.push(...t):e.effects.push(t):H_(t)}const an=Symbol.for("v-fgt"),mo=Symbol.for("v-txt"),en=Symbol.for("v-cmt"),ca=Symbol.for("v-stc"),Gs=[];let xn=null;function _n(t=!1){Gs.push(xn=t?null:[])}function Nv(){Gs.pop(),xn=Gs[Gs.length-1]||null}let Zs=1;function ba(t,e=!1){Zs+=t,t<0&&xn&&e&&(xn.hasOnce=!0)}function gm(t){return t.dynamicChildren=Zs>0?xn||is:null,Nv(),Zs>0&&xn&&xn.push(t),t}function Wi(t,e,n,i,r,s){return gm(yt(t,e,n,i,r,s,!0))}function Js(t,e,n,i,r){return gm(ft(t,e,n,i,r,!0))}function Ta(t){return t?t.__v_isVNode===!0:!1}function Sr(t,e){return t.type===e.type&&t.key===e.key}const _m=({key:t})=>t??null,ua=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?wt(t)||zt(t)||Ve(t)?{i:vn,r:t,k:e,f:!!n}:t:null);function yt(t,e=null,n=null,i=0,r=null,s=t===an?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_m(e),ref:e&&ua(e),scopeId:zp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:vn};return a?(Wu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=wt(n)?8:16),Zs>0&&!o&&xn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&xn.push(l),l}const ft=Uv;function Uv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Zp)&&(t=en),Ta(t)){const a=Yi(t,e,!0);return n&&Wu(a,n),Zs>0&&!s&&xn&&(a.shapeFlag&6?xn[xn.indexOf(t)]=a:xn.push(a)),a.patchFlag=-2,a}if(Wv(t)&&(t=t.__vccOpts),e){e=Ov(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=Kn(a)),St(l)&&(ku(l)&&!Be(l)&&(l=Bt({},l)),e.style=Du(l))}const o=wt(t)?1:mm(t)?128:Vp(t)?64:St(t)?4:Ve(t)?2:0;return yt(t,e,n,i,r,o,s,!0)}function Ov(t){return t?ku(t)||rm(t)?Bt({},t):t:null}function Yi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?xm(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&_m(c),ref:e&&e.ref?n&&s?Be(s)?s.concat(ua(e)):[s,ua(e)]:ua(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==an?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yi(t.ssContent),ssFallback:t.ssFallback&&Yi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ks(f,l.clone(f)),f}function vr(t=" ",e=0){return ft(mo,null,t,e)}function vw(t,e){const n=ft(ca,null,t);return n.staticCount=e,n}function vm(t="",e=!1){return e?(_n(),Js(en,null,t)):ft(en,null,t)}function Zn(t){return t==null||typeof t=="boolean"?ft(en):Be(t)?ft(an,null,t.slice()):Ta(t)?ki(t):ft(mo,null,String(t))}function ki(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yi(t)}function Wu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Be(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Wu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!rm(e)?e._ctx=vn:r===3&&vn&&(vn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:vn},n=32):(e=String(e),i&64?(n=16,e=[vr(e)]):n=8);t.children=e,t.shapeFlag|=n}function xm(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Kn([e.class,i.class]));else if(r==="style")e.style=Du([e.style,i.style]);else if(Ua(r)){const s=e[r],o=i[r];o&&s!==o&&!(Be(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Wn(t,e,n,i=null){Hn(t,e,7,[n,i])}const Fv=tm();let kv=0;function Bv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Fv,s={uid:kv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _p(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:om(i,r),emitsOptions:pm(i,r),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Rv.bind(null,s),t.ce&&t.ce(s),s}let qt=null;const $i=()=>qt||vn;let Aa,vc;{const t=Ba(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Aa=e("__VUE_INSTANCE_SETTERS__",n=>qt=n),vc=e("__VUE_SSR_SETTERS__",n=>Qs=n)}const go=t=>{const e=qt;return Aa(t),t.scope.on(),()=>{t.scope.off(),Aa(e)}},Uf=()=>{qt&&qt.scope.off(),Aa(null)};function Sm(t){return t.vnode.shapeFlag&4}let Qs=!1;function Hv(t,e=!1,n=!1){e&&vc(e);const{props:i,children:r}=t.vnode,s=Sm(t);hv(t,i,s,e),_v(t,r,n||e);const o=s?zv(t,e):void 0;return e&&vc(!1),o}function zv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,iv);const{setup:i}=n;if(i){Ai();const r=t.setupContext=i.length>1?ym(t):null,s=go(t),o=fo(i,t,0,[t.props,r]),a=up(o);if(Ri(),s(),(a||t.sp)&&!zs(t)&&Yp(t),a){if(o.then(Uf,Uf),e)return o.then(l=>{Of(t,l)}).catch(l=>{Va(l,t,0)});t.asyncDep=o}else Of(t,o)}else Em(t)}function Of(t,e,n){Ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:St(e)&&(t.setupState=Up(e)),Em(t)}function Em(t,e,n){const i=t.type;t.render||(t.render=i.render||ti);{const r=go(t);Ai();try{ov(t)}finally{Ri(),r()}}}const Vv={get(t,e){return jt(t,"get",""),t[e]}};function ym(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Vv),slots:t.slots,emit:t.emit,expose:e}}function ja(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Up(D_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vs)return Vs[n](t)},has(e,n){return n in e||n in Vs}})):t.proxy}function Gv(t,e=!0){return Ve(t)?t.displayName||t.name:t.name||e&&t.__name}function Wv(t){return Ve(t)&&"__vccOpts"in t}const Yt=(t,e)=>U_(t,e,Qs);function _o(t,e,n){try{ba(-1);const i=arguments.length;return i===2?St(e)&&!Be(e)?Ta(e)?ft(t,null,[e]):ft(t,e):ft(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ta(n)&&(n=[n]),ft(t,e,n))}finally{ba(1)}}const Xv="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xc;const Ff=typeof window<"u"&&window.trustedTypes;if(Ff)try{xc=Ff.createPolicy("vue",{createHTML:t=>t})}catch{}const Mm=xc?t=>xc.createHTML(t):t=>t,jv="http://www.w3.org/2000/svg",qv="http://www.w3.org/1998/Math/MathML",_i=typeof document<"u"?document:null,kf=_i&&_i.createElement("template"),Yv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?_i.createElementNS(jv,t):e==="mathml"?_i.createElementNS(qv,t):n?_i.createElement(t,{is:n}):_i.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>_i.createTextNode(t),createComment:t=>_i.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_i.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{kf.innerHTML=Mm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=kf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wi="transition",Ms="animation",eo=Symbol("_vtc"),bm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$v=Bt({},Gp,bm),Kv=t=>(t.displayName="Transition",t.props=$v,t),Bf=Kv((t,{slots:e})=>_o(W_,Zv(t),e)),lr=(t,e=[])=>{Be(t)?t.forEach(n=>n(...e)):t&&t(...e)},Hf=t=>t?Be(t)?t.some(e=>e.length>1):t.length>1:!1;function Zv(t){const e={};for(const U in t)U in bm||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:f=a,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,_=Jv(r),x=_&&_[0],m=_&&_[1],{onBeforeEnter:d,onEnter:E,onEnterCancelled:y,onLeave:v,onLeaveCancelled:P,onBeforeAppear:T=d,onAppear:R=E,onAppearCancelled:F=y}=e,b=(U,Y,ee,ie)=>{U._enterCancelled=ie,cr(U,Y?f:a),cr(U,Y?c:o),ee&&ee()},A=(U,Y)=>{U._isLeaving=!1,cr(U,u),cr(U,p),cr(U,h),Y&&Y()},N=U=>(Y,ee)=>{const ie=U?R:E,Q=()=>b(Y,U,ee);lr(ie,[Y,Q]),zf(()=>{cr(Y,U?l:s),li(Y,U?f:a),Hf(ie)||Vf(Y,i,x,Q)})};return Bt(e,{onBeforeEnter(U){lr(d,[U]),li(U,s),li(U,o)},onBeforeAppear(U){lr(T,[U]),li(U,l),li(U,c)},onEnter:N(!1),onAppear:N(!0),onLeave(U,Y){U._isLeaving=!0;const ee=()=>A(U,Y);li(U,u),U._enterCancelled?(li(U,h),Xf(U)):(Xf(U),li(U,h)),zf(()=>{U._isLeaving&&(cr(U,u),li(U,p),Hf(v)||Vf(U,i,m,ee))}),lr(v,[U,ee])},onEnterCancelled(U){b(U,!1,void 0,!0),lr(y,[U])},onAppearCancelled(U){b(U,!0,void 0,!0),lr(F,[U])},onLeaveCancelled(U){A(U),lr(P,[U])}})}function Jv(t){if(t==null)return null;if(St(t))return[dl(t.enter),dl(t.leave)];{const e=dl(t);return[e,e]}}function dl(t){return r_(t)}function li(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[eo]||(t[eo]=new Set)).add(e)}function cr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[eo];n&&(n.delete(e),n.size||(t[eo]=void 0))}function zf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Qv=0;function Vf(t,e,n,i){const r=t._endId=++Qv,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=e0(t,e);if(!o)return i();const c=o+"end";let f=0;const u=()=>{t.removeEventListener(c,h),s()},h=p=>{p.target===t&&++f>=l&&u()};setTimeout(()=>{f<l&&u()},a+1),t.addEventListener(c,h)}function e0(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),r=i(`${wi}Delay`),s=i(`${wi}Duration`),o=Gf(r,s),a=i(`${Ms}Delay`),l=i(`${Ms}Duration`),c=Gf(a,l);let f=null,u=0,h=0;e===wi?o>0&&(f=wi,u=o,h=s.length):e===Ms?c>0&&(f=Ms,u=c,h=l.length):(u=Math.max(o,c),f=u>0?o>c?wi:Ms:null,h=f?f===wi?s.length:l.length:0);const p=f===wi&&/\b(?:transform|all)(?:,|$)/.test(i(`${wi}Property`).toString());return{type:f,timeout:u,propCount:h,hasTransform:p}}function Gf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Wf(n)+Wf(t[i])))}function Wf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Xf(t){return(t?t.ownerDocument:document).body.offsetHeight}function t0(t,e,n){const i=t[eo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ra=Symbol("_vod"),Tm=Symbol("_vsh"),xw={name:"show",beforeMount(t,{value:e},{transition:n}){t[Ra]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):bs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),bs(t,!0),i.enter(t)):i.leave(t,()=>{bs(t,!1)}):bs(t,e))},beforeUnmount(t,{value:e}){bs(t,e)}};function bs(t,e){t.style.display=e?t[Ra]:"none",t[Tm]=!e}const n0=Symbol(""),i0=/(?:^|;)\s*display\s*:/;function r0(t,e,n){const i=t.style,r=wt(n);let s=!1;if(n&&!r){if(e)if(wt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&fa(i,a,"")}else for(const o in e)n[o]==null&&fa(i,o,"");for(const o in n)o==="display"&&(s=!0),fa(i,o,n[o])}else if(r){if(e!==n){const o=i[n0];o&&(n+=";"+o),i.cssText=n,s=i0.test(n)}}else e&&t.removeAttribute("style");Ra in t&&(t[Ra]=s?i.display:"",t[Tm]&&(i.display="none"))}const jf=/\s*!important$/;function fa(t,e,n){if(Be(n))n.forEach(i=>fa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=s0(t,e);jf.test(n)?t.setProperty(er(i),n.replace(jf,""),"important"):t[i]=n}}const qf=["Webkit","Moz","ms"],hl={};function s0(t,e){const n=hl[e];if(n)return n;let i=Pn(e);if(i!=="filter"&&i in t)return hl[e]=i;i=ka(i);for(let r=0;r<qf.length;r++){const s=qf[r]+i;if(s in t)return hl[e]=s}return e}const Yf="http://www.w3.org/1999/xlink";function $f(t,e,n,i,r,s=u_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yf,e.slice(6,e.length)):t.setAttributeNS(Yf,e,n):n==null||s&&!pp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Qi(n)?String(n):n)}function Kf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Mm(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=pp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Zr(t,e,n,i){t.addEventListener(e,n,i)}function o0(t,e,n,i){t.removeEventListener(e,n,i)}const Zf=Symbol("_vei");function a0(t,e,n,i,r=null){const s=t[Zf]||(t[Zf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=l0(e);if(i){const c=s[e]=f0(i,r);Zr(t,a,c,l)}else o&&(o0(t,a,o,l),s[e]=void 0)}}const Jf=/(?:Once|Passive|Capture)$/;function l0(t){let e;if(Jf.test(t)){e={};let i;for(;i=t.match(Jf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):er(t.slice(2)),e]}let pl=0;const c0=Promise.resolve(),u0=()=>pl||(c0.then(()=>pl=0),pl=Date.now());function f0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Hn(d0(i,n.value),e,5,[i])};return n.value=t,n.attached=u0(),n}function d0(t,e){if(Be(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Qf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,h0=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?t0(t,i,o):e==="style"?r0(t,n,i):Ua(e)?Cu(e)||a0(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):p0(t,e,i,o))?(Kf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$f(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!wt(i))?Kf(t,Pn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),$f(t,e,i,o))};function p0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qf(e)&&Ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Qf(e)&&wt(n)?!1:e in t}const ed=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Be(e)?n=>aa(e,n):e};function m0(t){t.target.composing=!0}function td(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ml=Symbol("_assign"),Sw={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[ml]=ed(r);const s=i||r.props&&r.props.type==="number";Zr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=oc(a)),t[ml](a)}),n&&Zr(t,"change",()=>{t.value=t.value.trim()}),e||(Zr(t,"compositionstart",m0),Zr(t,"compositionend",td),Zr(t,"change",td))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[ml]=ed(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?oc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},g0=["ctrl","shift","alt","meta"],_0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>g0.some(n=>t[`${n}Key`]&&!e.includes(n))},Ew=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=_0[e[o]];if(a&&a(r,e))return}return t(r,...s)}))},v0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yw=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(r=>{if(!("key"in r))return;const s=er(r.key);if(e.some(o=>o===s||v0[o]===s))return t(r)}))},x0=Bt({patchProp:h0},Yv);let nd;function S0(){return nd||(nd=xv(x0))}const E0=((...t)=>{const e=S0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=M0(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,y0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function y0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function M0(t){return wt(t)?document.querySelector(t):t}/*!
  * shared v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function b0(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Ca=typeof window<"u",tr=(t,e=!1)=>e?Symbol.for(t):Symbol(t),T0=(t,e,n)=>A0({l:t,k:e,s:n}),A0=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Dt=t=>typeof t=="number"&&isFinite(t),R0=t=>Xu(t)==="[object Date]",fs=t=>Xu(t)==="[object RegExp]",qa=t=>Ke(t)&&Object.keys(t).length===0,Ut=Object.assign,C0=Object.create,pt=(t=null)=>C0(t);let id;const Mr=()=>id||(id=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:pt());function rd(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function sd(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function w0(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,r,s)=>`${r}="${sd(s)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,r,s)=>`${r}='${sd(s)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const P0=Object.prototype.hasOwnProperty;function Un(t,e){return P0.call(t,e)}const Ct=Array.isArray,Mt=t=>typeof t=="function",we=t=>typeof t=="string",nt=t=>typeof t=="boolean",rt=t=>t!==null&&typeof t=="object",D0=t=>rt(t)&&Mt(t.then)&&Mt(t.catch),Am=Object.prototype.toString,Xu=t=>Am.call(t),Ke=t=>Xu(t)==="[object Object]",L0=t=>t==null?"":Ct(t)||Ke(t)&&t.toString===Am?JSON.stringify(t,null,2):String(t);function ju(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const wo=t=>!rt(t)||Ct(t);function da(t,e){if(wo(t)||wo(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(rt(i[s])&&!rt(r[s])&&(r[s]=Array.isArray(i[s])?[]:pt()),wo(r[s])||wo(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function I0(t,e,n){return{line:t,column:e,offset:n}}function Sc(t,e,n){return{start:t,end:e}}const at={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},N0=17;function Ya(t,e,n={}){const{domain:i,messages:r,args:s}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=i,a}function U0(t){throw t}const Xn=" ",O0="\r",Xt=`
`,F0="\u2028",k0="\u2029";function B0(t){const e=t;let n=0,i=1,r=1,s=0;const o=R=>e[R]===O0&&e[R+1]===Xt,a=R=>e[R]===Xt,l=R=>e[R]===k0,c=R=>e[R]===F0,f=R=>o(R)||a(R)||l(R)||c(R),u=()=>n,h=()=>i,p=()=>r,_=()=>s,x=R=>o(R)||l(R)||c(R)?Xt:e[R],m=()=>x(n),d=()=>x(n+s);function E(){return s=0,f(n)&&(i++,r=0),o(n)&&n++,n++,r++,e[n]}function y(){return o(n+s)&&s++,s++,e[n+s]}function v(){n=0,i=1,r=1,s=0}function P(R=0){s=R}function T(){const R=n+s;for(;R!==n;)E();s=0}return{index:u,line:h,column:p,peekOffset:_,charAt:x,currentChar:m,currentPeek:d,next:E,peek:y,reset:v,resetPeek:P,skipToPeek:T}}const ci=void 0,H0=".",od="'",z0="tokenizer";function V0(t,e={}){const n=e.location!==!1,i=B0(t),r=()=>i.index(),s=()=>I0(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:f}=e;function u(D,C,O,...W){const de=c();if(C.column+=O,C.offset+=O,f){const M=n?Sc(de.startLoc,C):null,g=Ya(D,M,{domain:z0,args:W});f(g)}}function h(D,C,O){D.endLoc=s(),D.currentType=C;const W={type:C};return n&&(W.loc=Sc(D.startLoc,D.endLoc)),O!=null&&(W.value=O),W}const p=D=>h(D,13);function _(D,C){return D.currentChar()===C?(D.next(),C):(u(at.EXPECTED_TOKEN,s(),0,C),"")}function x(D){let C="";for(;D.currentPeek()===Xn||D.currentPeek()===Xt;)C+=D.currentPeek(),D.peek();return C}function m(D){const C=x(D);return D.skipToPeek(),C}function d(D){if(D===ci)return!1;const C=D.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C===95}function E(D){if(D===ci)return!1;const C=D.charCodeAt(0);return C>=48&&C<=57}function y(D,C){const{currentType:O}=C;if(O!==2)return!1;x(D);const W=d(D.currentPeek());return D.resetPeek(),W}function v(D,C){const{currentType:O}=C;if(O!==2)return!1;x(D);const W=D.currentPeek()==="-"?D.peek():D.currentPeek(),de=E(W);return D.resetPeek(),de}function P(D,C){const{currentType:O}=C;if(O!==2)return!1;x(D);const W=D.currentPeek()===od;return D.resetPeek(),W}function T(D,C){const{currentType:O}=C;if(O!==7)return!1;x(D);const W=D.currentPeek()===".";return D.resetPeek(),W}function R(D,C){const{currentType:O}=C;if(O!==8)return!1;x(D);const W=d(D.currentPeek());return D.resetPeek(),W}function F(D,C){const{currentType:O}=C;if(!(O===7||O===11))return!1;x(D);const W=D.currentPeek()===":";return D.resetPeek(),W}function b(D,C){const{currentType:O}=C;if(O!==9)return!1;const W=()=>{const M=D.currentPeek();return M==="{"?d(D.peek()):M==="@"||M==="|"||M===":"||M==="."||M===Xn||!M?!1:M===Xt?(D.peek(),W()):N(D,!1)},de=W();return D.resetPeek(),de}function A(D){x(D);const C=D.currentPeek()==="|";return D.resetPeek(),C}function N(D,C=!0){const O=(de=!1,M="")=>{const g=D.currentPeek();return g==="{"||g==="@"||!g?de:g==="|"?!(M===Xn||M===Xt):g===Xn?(D.peek(),O(!0,Xn)):g===Xt?(D.peek(),O(!0,Xt)):!0},W=O();return C&&D.resetPeek(),W}function U(D,C){const O=D.currentChar();return O===ci?ci:C(O)?(D.next(),O):null}function Y(D){const C=D.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36}function ee(D){return U(D,Y)}function ie(D){const C=D.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36||C===45}function Q(D){return U(D,ie)}function oe(D){const C=D.charCodeAt(0);return C>=48&&C<=57}function q(D){return U(D,oe)}function ce(D){const C=D.charCodeAt(0);return C>=48&&C<=57||C>=65&&C<=70||C>=97&&C<=102}function _e(D){return U(D,ce)}function ye(D){let C="",O="";for(;C=q(D);)O+=C;return O}function Ue(D){let C="";for(;;){const O=D.currentChar();if(O==="{"||O==="}"||O==="@"||O==="|"||!O)break;if(O===Xn||O===Xt)if(N(D))C+=O,D.next();else{if(A(D))break;C+=O,D.next()}else C+=O,D.next()}return C}function Ye(D){m(D);let C="",O="";for(;C=Q(D);)O+=C;const W=D.currentChar();if(W&&W!=="}"&&W!==ci&&W!==Xn&&W!==Xt&&W!=="　"){const de=le(D);return u(at.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,O+de),O+de}return D.currentChar()===ci&&u(at.UNTERMINATED_CLOSING_BRACE,s(),0),O}function Qe(D){m(D);let C="";return D.currentChar()==="-"?(D.next(),C+=`-${ye(D)}`):C+=ye(D),D.currentChar()===ci&&u(at.UNTERMINATED_CLOSING_BRACE,s(),0),C}function Xe(D){return D!==od&&D!==Xt}function se(D){m(D),_(D,"'");let C="",O="";for(;C=U(D,Xe);)C==="\\"?O+=k(D):O+=C;const W=D.currentChar();return W===Xt||W===ci?(u(at.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),W===Xt&&(D.next(),_(D,"'")),O):(_(D,"'"),O)}function k(D){const C=D.currentChar();switch(C){case"\\":case"'":return D.next(),`\\${C}`;case"u":return re(D,C,4);case"U":return re(D,C,6);default:return u(at.UNKNOWN_ESCAPE_SEQUENCE,s(),0,C),""}}function re(D,C,O){_(D,C);let W="";for(let de=0;de<O;de++){const M=_e(D);if(!M){u(at.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${C}${W}${D.currentChar()}`);break}W+=M}return`\\${C}${W}`}function ae(D){return D!=="{"&&D!=="}"&&D!==Xn&&D!==Xt}function le(D){m(D);let C="",O="";for(;C=U(D,ae);)O+=C;return O}function be(D){let C="",O="";for(;C=ee(D);)O+=C;return O}function I(D){const C=O=>{const W=D.currentChar();return W==="{"||W==="@"||W==="|"||W==="("||W===")"||!W||W===Xn?O:(O+=W,D.next(),C(O))};return C("")}function S(D){m(D);const C=_(D,"|");return m(D),C}function B(D,C){let O=null;switch(D.currentChar()){case"{":return C.braceNest>=1&&u(at.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),D.next(),O=h(C,2,"{"),m(D),C.braceNest++,O;case"}":return C.braceNest>0&&C.currentType===2&&u(at.EMPTY_PLACEHOLDER,s(),0),D.next(),O=h(C,3,"}"),C.braceNest--,C.braceNest>0&&m(D),C.inLinked&&C.braceNest===0&&(C.inLinked=!1),O;case"@":return C.braceNest>0&&u(at.UNTERMINATED_CLOSING_BRACE,s(),0),O=$(D,C)||p(C),C.braceNest=0,O;default:{let de=!0,M=!0,g=!0;if(A(D))return C.braceNest>0&&u(at.UNTERMINATED_CLOSING_BRACE,s(),0),O=h(C,1,S(D)),C.braceNest=0,C.inLinked=!1,O;if(C.braceNest>0&&(C.currentType===4||C.currentType===5||C.currentType===6))return u(at.UNTERMINATED_CLOSING_BRACE,s(),0),C.braceNest=0,Z(D,C);if(de=y(D,C))return O=h(C,4,Ye(D)),m(D),O;if(M=v(D,C))return O=h(C,5,Qe(D)),m(D),O;if(g=P(D,C))return O=h(C,6,se(D)),m(D),O;if(!de&&!M&&!g)return O=h(C,12,le(D)),u(at.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,O.value),m(D),O;break}}return O}function $(D,C){const{currentType:O}=C;let W=null;const de=D.currentChar();switch((O===7||O===8||O===11||O===9)&&(de===Xt||de===Xn)&&u(at.INVALID_LINKED_FORMAT,s(),0),de){case"@":return D.next(),W=h(C,7,"@"),C.inLinked=!0,W;case".":return m(D),D.next(),h(C,8,".");case":":return m(D),D.next(),h(C,9,":");default:return A(D)?(W=h(C,1,S(D)),C.braceNest=0,C.inLinked=!1,W):T(D,C)||F(D,C)?(m(D),$(D,C)):R(D,C)?(m(D),h(C,11,be(D))):b(D,C)?(m(D),de==="{"?B(D,C)||W:h(C,10,I(D))):(O===7&&u(at.INVALID_LINKED_FORMAT,s(),0),C.braceNest=0,C.inLinked=!1,Z(D,C))}}function Z(D,C){let O={type:13};if(C.braceNest>0)return B(D,C)||p(C);if(C.inLinked)return $(D,C)||p(C);switch(D.currentChar()){case"{":return B(D,C)||p(C);case"}":return u(at.UNBALANCED_CLOSING_BRACE,s(),0),D.next(),h(C,3,"}");case"@":return $(D,C)||p(C);default:{if(A(D))return O=h(C,1,S(D)),C.braceNest=0,C.inLinked=!1,O;if(N(D))return h(C,0,Ue(D));break}}return O}function G(){const{currentType:D,offset:C,startLoc:O,endLoc:W}=l;return l.lastType=D,l.lastOffset=C,l.lastStartLoc=O,l.lastEndLoc=W,l.offset=r(),l.startLoc=s(),i.currentChar()===ci?h(l,13):Z(i,l)}return{nextToken:G,currentOffset:r,currentPosition:s,context:c}}const G0="parser",W0=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function X0(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function j0(t={}){const e=t.location!==!1,{onError:n}=t;function i(d,E,y,v,...P){const T=d.currentPosition();if(T.offset+=v,T.column+=v,n){const R=e?Sc(y,T):null,F=Ya(E,R,{domain:G0,args:P});n(F)}}function r(d,E,y){const v={type:d};return e&&(v.start=E,v.end=E,v.loc={start:y,end:y}),v}function s(d,E,y,v){e&&(d.end=E,d.loc&&(d.loc.end=y))}function o(d,E){const y=d.context(),v=r(3,y.offset,y.startLoc);return v.value=E,s(v,d.currentOffset(),d.currentPosition()),v}function a(d,E){const y=d.context(),{lastOffset:v,lastStartLoc:P}=y,T=r(5,v,P);return T.index=parseInt(E,10),d.nextToken(),s(T,d.currentOffset(),d.currentPosition()),T}function l(d,E){const y=d.context(),{lastOffset:v,lastStartLoc:P}=y,T=r(4,v,P);return T.key=E,d.nextToken(),s(T,d.currentOffset(),d.currentPosition()),T}function c(d,E){const y=d.context(),{lastOffset:v,lastStartLoc:P}=y,T=r(9,v,P);return T.value=E.replace(W0,X0),d.nextToken(),s(T,d.currentOffset(),d.currentPosition()),T}function f(d){const E=d.nextToken(),y=d.context(),{lastOffset:v,lastStartLoc:P}=y,T=r(8,v,P);return E.type!==11?(i(d,at.UNEXPECTED_EMPTY_LINKED_MODIFIER,y.lastStartLoc,0),T.value="",s(T,v,P),{nextConsumeToken:E,node:T}):(E.value==null&&i(d,at.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,jn(E)),T.value=E.value||"",s(T,d.currentOffset(),d.currentPosition()),{node:T})}function u(d,E){const y=d.context(),v=r(7,y.offset,y.startLoc);return v.value=E,s(v,d.currentOffset(),d.currentPosition()),v}function h(d){const E=d.context(),y=r(6,E.offset,E.startLoc);let v=d.nextToken();if(v.type===8){const P=f(d);y.modifier=P.node,v=P.nextConsumeToken||d.nextToken()}switch(v.type!==9&&i(d,at.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,jn(v)),v=d.nextToken(),v.type===2&&(v=d.nextToken()),v.type){case 10:v.value==null&&i(d,at.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,jn(v)),y.key=u(d,v.value||"");break;case 4:v.value==null&&i(d,at.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,jn(v)),y.key=l(d,v.value||"");break;case 5:v.value==null&&i(d,at.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,jn(v)),y.key=a(d,v.value||"");break;case 6:v.value==null&&i(d,at.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,jn(v)),y.key=c(d,v.value||"");break;default:{i(d,at.UNEXPECTED_EMPTY_LINKED_KEY,E.lastStartLoc,0);const P=d.context(),T=r(7,P.offset,P.startLoc);return T.value="",s(T,P.offset,P.startLoc),y.key=T,s(y,P.offset,P.startLoc),{nextConsumeToken:v,node:y}}}return s(y,d.currentOffset(),d.currentPosition()),{node:y}}function p(d){const E=d.context(),y=E.currentType===1?d.currentOffset():E.offset,v=E.currentType===1?E.endLoc:E.startLoc,P=r(2,y,v);P.items=[];let T=null;do{const b=T||d.nextToken();switch(T=null,b.type){case 0:b.value==null&&i(d,at.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,jn(b)),P.items.push(o(d,b.value||""));break;case 5:b.value==null&&i(d,at.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,jn(b)),P.items.push(a(d,b.value||""));break;case 4:b.value==null&&i(d,at.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,jn(b)),P.items.push(l(d,b.value||""));break;case 6:b.value==null&&i(d,at.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,jn(b)),P.items.push(c(d,b.value||""));break;case 7:{const A=h(d);P.items.push(A.node),T=A.nextConsumeToken||null;break}}}while(E.currentType!==13&&E.currentType!==1);const R=E.currentType===1?E.lastOffset:d.currentOffset(),F=E.currentType===1?E.lastEndLoc:d.currentPosition();return s(P,R,F),P}function _(d,E,y,v){const P=d.context();let T=v.items.length===0;const R=r(1,E,y);R.cases=[],R.cases.push(v);do{const F=p(d);T||(T=F.items.length===0),R.cases.push(F)}while(P.currentType!==13);return T&&i(d,at.MUST_HAVE_MESSAGES_IN_PLURAL,y,0),s(R,d.currentOffset(),d.currentPosition()),R}function x(d){const E=d.context(),{offset:y,startLoc:v}=E,P=p(d);return E.currentType===13?P:_(d,y,v,P)}function m(d){const E=V0(d,Ut({},t)),y=E.context(),v=r(0,y.offset,y.startLoc);return e&&v.loc&&(v.loc.source=d),v.body=x(E),t.onCacheKey&&(v.cacheKey=t.onCacheKey(d)),y.currentType!==13&&i(E,at.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,d[y.offset]||""),s(v,E.currentOffset(),E.currentPosition()),v}return{parse:m}}function jn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function q0(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function ad(t,e){for(let n=0;n<t.length;n++)qu(t[n],e)}function qu(t,e){switch(t.type){case 1:ad(t.cases,e),e.helper("plural");break;case 2:ad(t.items,e);break;case 6:{qu(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Y0(t,e={}){const n=q0(t);n.helper("normalize"),t.body&&qu(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function $0(t){const e=t.body;return e.type===2?ld(e):e.cases.forEach(n=>ld(n)),t}function ld(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=ju(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function Jr(t){switch(t.t=t.type,t.type){case 0:{const e=t;Jr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)Jr(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)Jr(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Jr(e.key),e.k=e.key,delete e.key,e.modifier&&(Jr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function K0(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(o.source=t.loc.source);const a=()=>o;function l(x,m){o.code+=x}function c(x,m=!0){const d=m?i:"";l(r?d+"  ".repeat(x):d)}function f(x=!0){const m=++o.indentLevel;x&&c(m)}function u(x=!0){const m=--o.indentLevel;x&&c(m)}function h(){c(o.indentLevel)}return{context:a,push:l,indent:f,deindent:u,newline:h,helper:x=>`_${x}`,needIndent:()=>o.needIndent}}function Z0(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),ds(t,e.key),e.modifier?(t.push(", "),ds(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function J0(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(ds(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function Q0(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(ds(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function ex(t,e){e.body?ds(t,e.body):t.push("null")}function ds(t,e){const{helper:n}=t;switch(e.type){case 0:ex(t,e);break;case 1:Q0(t,e);break;case 2:J0(t,e);break;case 6:Z0(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const tx=(t,e={})=>{const n=we(e.mode)?e.mode:"normal",i=we(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],a=K0(t,{filename:i,breakLineCode:r,needIndent:s});a.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(s),o.length>0&&(a.push(`const { ${ju(o.map(f=>`${f}: _${f}`),", ")} } = ctx`),a.newline()),a.push("return "),ds(a,t),a.deindent(s),a.push("}"),delete t.helpers;const{code:l,map:c}=a.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function nx(t,e={}){const n=Ut({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,a=j0(n).parse(t);return i?(s&&$0(a),r&&Jr(a),{ast:a,code:""}):(Y0(a,n),tx(a,n))}/*!
  * core-base v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function ix(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Mr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Mr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function ni(t){return rt(t)&&Yu(t)===0&&(Un(t,"b")||Un(t,"body"))}const Rm=["b","body"];function rx(t){return nr(t,Rm)}const Cm=["c","cases"];function sx(t){return nr(t,Cm,[])}const wm=["s","static"];function ox(t){return nr(t,wm)}const Pm=["i","items"];function ax(t){return nr(t,Pm,[])}const Dm=["t","type"];function Yu(t){return nr(t,Dm)}const Lm=["v","value"];function Po(t,e){const n=nr(t,Lm);if(n!=null)return n;throw to(e)}const Im=["m","modifier"];function lx(t){return nr(t,Im)}const Nm=["k","key"];function cx(t){const e=nr(t,Nm);if(e)return e;throw to(6)}function nr(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(Un(t,r)&&t[r]!=null)return t[r]}return n}const Um=[...Rm,...Cm,...wm,...Pm,...Nm,...Im,...Lm,...Dm];function to(t){return new Error(`unhandled node type: ${t}`)}function gl(t){return n=>ux(n,t)}function ux(t,e){const n=rx(e);if(n==null)throw to(0);if(Yu(n)===1){const s=sx(n);return t.plural(s.reduce((o,a)=>[...o,cd(t,a)],[]))}else return cd(t,n)}function cd(t,e){const n=ox(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=ax(e).reduce((r,s)=>[...r,Ec(t,s)],[]);return t.normalize(i)}}function Ec(t,e){const n=Yu(e);switch(n){case 3:return Po(e,n);case 9:return Po(e,n);case 4:{const i=e;if(Un(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Un(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw to(n)}case 5:{const i=e;if(Un(i,"i")&&Dt(i.i))return t.interpolate(t.list(i.i));if(Un(i,"index")&&Dt(i.index))return t.interpolate(t.list(i.index));throw to(n)}case 6:{const i=e,r=lx(i),s=cx(i);return t.linked(Ec(t,s),r?Ec(t,r):void 0,t.type)}case 7:return Po(e,n);case 8:return Po(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const fx=t=>t;let Do=pt();function dx(t,e={}){let n=!1;const i=e.onError||U0;return e.onError=r=>{n=!0,i(r)},{...nx(t,e),detectError:n}}function hx(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&we(t)){nt(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||fx)(t),r=Do[i];if(r)return r;const{ast:s,detectError:o}=dx(t,{...e,location:!1,jit:!0}),a=gl(s);return o?a:Do[i]=a}else{const n=t.cacheKey;if(n){const i=Do[n];return i||(Do[n]=gl(t))}else return gl(t)}}let no=null;function px(t){no=t}function mx(t,e,n){no&&no.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const gx=_x("function:translate");function _x(t){return e=>no&&no.emit(t,e)}const yi={INVALID_ARGUMENT:N0,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},vx=24;function Mi(t){return Ya(t,null,void 0)}function $u(t,e){return e.locale!=null?ud(e.locale):ud(t.locale)}let _l;function ud(t){if(we(t))return t;if(Mt(t)){if(t.resolvedOnce&&_l!=null)return _l;if(t.constructor.name==="Function"){const e=t();if(D0(e))throw Mi(yi.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return _l=e}else throw Mi(yi.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Mi(yi.NOT_SUPPORT_LOCALE_TYPE)}function xx(t,e,n){return[...new Set([n,...Ct(e)?e:rt(e)?Object.keys(e):we(e)?[e]:[n]])]}function Om(t,e,n){const i=we(n)?n:io,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[n];for(;Ct(o);)o=fd(s,o,e);const a=Ct(e)||!Ke(e)?e:e.default?e.default:null;o=we(a)?[a]:a,Ct(o)&&fd(s,o,!1),r.__localeChainCache.set(i,s)}return s}function fd(t,e,n){let i=!0;for(let r=0;r<e.length&&nt(i);r++){const s=e[r];we(s)&&(i=Sx(t,e[r],n))}return i}function Sx(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=Ex(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function Ex(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(Ct(n)||Ke(n))&&n[r]&&(i=n[r])}return i}const ir=[];ir[0]={w:[0],i:[3,0],"[":[4],o:[7]};ir[1]={w:[1],".":[2],"[":[4],o:[7]};ir[2]={w:[2],i:[3,0],0:[3,0]};ir[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ir[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ir[5]={"'":[4,0],o:8,l:[5,0]};ir[6]={'"':[4,0],o:8,l:[6,0]};const yx=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Mx(t){return yx.test(t)}function bx(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function Tx(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Ax(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:Mx(e)?bx(e):"*"+e}function Rx(t){const e=[];let n=-1,i=0,r=0,s,o,a,l,c,f,u;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,o===void 0||(o=Ax(o),o===!1))return!1;h[1]()}};function p(){const _=t[n+1];if(i===5&&_==="'"||i===6&&_==='"')return n++,a="\\"+_,h[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=Tx(s),u=ir[i],c=u[l]||u.l||8,c===8||(i=c[0],c[1]!==void 0&&(f=h[c[1]],f&&(a=s,f()===!1))))return;if(i===7)return e}}const dd=new Map;function Cx(t,e){return rt(t)?t[e]:null}function wx(t,e){if(!rt(t))return null;let n=dd.get(e);if(n||(n=Rx(e),n&&dd.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const o=n[s];if(Um.includes(o)&&ni(r))return null;const a=r[o];if(a===void 0||Mt(r))return null;r=a,s++}return r}const Px="11.1.12",$a=-1,io="en-US",hd="",pd=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Dx(){return{upper:(t,e)=>e==="text"&&we(t)?t.toUpperCase():e==="vnode"&&rt(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&we(t)?t.toLowerCase():e==="vnode"&&rt(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&we(t)?pd(t):e==="vnode"&&rt(t)&&"__v_isVNode"in t?pd(t.children):t}}let Fm;function Lx(t){Fm=t}let km;function Ix(t){km=t}let Bm;function Nx(t){Bm=t}let Hm=null;const Ux=t=>{Hm=t},Ox=()=>Hm;let zm=null;const md=t=>{zm=t},Fx=()=>zm;let gd=0;function kx(t={}){const e=Mt(t.onWarn)?t.onWarn:b0,n=we(t.version)?t.version:Px,i=we(t.locale)||Mt(t.locale)?t.locale:io,r=Mt(i)?io:i,s=Ct(t.fallbackLocale)||Ke(t.fallbackLocale)||we(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=Ke(t.messages)?t.messages:vl(r),a=Ke(t.datetimeFormats)?t.datetimeFormats:vl(r),l=Ke(t.numberFormats)?t.numberFormats:vl(r),c=Ut(pt(),t.modifiers,Dx()),f=t.pluralRules||pt(),u=Mt(t.missing)?t.missing:null,h=nt(t.missingWarn)||fs(t.missingWarn)?t.missingWarn:!0,p=nt(t.fallbackWarn)||fs(t.fallbackWarn)?t.fallbackWarn:!0,_=!!t.fallbackFormat,x=!!t.unresolving,m=Mt(t.postTranslation)?t.postTranslation:null,d=Ke(t.processor)?t.processor:null,E=nt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,y=!!t.escapeParameter,v=Mt(t.messageCompiler)?t.messageCompiler:Fm,P=Mt(t.messageResolver)?t.messageResolver:km||Cx,T=Mt(t.localeFallbacker)?t.localeFallbacker:Bm||xx,R=rt(t.fallbackContext)?t.fallbackContext:void 0,F=t,b=rt(F.__datetimeFormatters)?F.__datetimeFormatters:new Map,A=rt(F.__numberFormatters)?F.__numberFormatters:new Map,N=rt(F.__meta)?F.__meta:{};gd++;const U={version:n,cid:gd,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:f,missing:u,missingWarn:h,fallbackWarn:p,fallbackFormat:_,unresolving:x,postTranslation:m,processor:d,warnHtmlMessage:E,escapeParameter:y,messageCompiler:v,messageResolver:P,localeFallbacker:T,fallbackContext:R,onWarn:e,__meta:N};return U.datetimeFormats=a,U.numberFormats=l,U.__datetimeFormatters=b,U.__numberFormatters=A,__INTLIFY_PROD_DEVTOOLS__&&mx(U,n,N),U}const vl=t=>({[t]:pt()});function Ku(t,e,n,i,r){const{missing:s,onWarn:o}=t;if(s!==null){const a=s(t,n,e,r);return we(a)?a:e}else return e}function Ts(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function Bx(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Hx(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(Bx(t,e[i]))return!0;return!1}function _d(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,f,u]=yc(...e),h=nt(f.missingWarn)?f.missingWarn:t.missingWarn;nt(f.fallbackWarn)?f.fallbackWarn:t.fallbackWarn;const p=!!f.part,_=$u(t,f),x=o(t,r,_);if(!we(l)||l==="")return new Intl.DateTimeFormat(_,u).format(c);let m={},d,E=null;const y="datetime format";for(let T=0;T<x.length&&(d=x[T],m=n[d]||{},E=m[l],!Ke(E));T++)Ku(t,l,d,h,y);if(!Ke(E)||!we(d))return i?$a:l;let v=`${d}__${l}`;qa(u)||(v=`${v}__${JSON.stringify(u)}`);let P=a.get(v);return P||(P=new Intl.DateTimeFormat(d,Ut({},E,u)),a.set(v,P)),p?P.formatToParts(c):P.format(c)}const Vm=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function yc(...t){const[e,n,i,r]=t,s=pt();let o=pt(),a;if(we(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Mi(yi.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Mi(yi.INVALID_ISO_DATE_ARGUMENT)}}else if(R0(e)){if(isNaN(e.getTime()))throw Mi(yi.INVALID_DATE_ARGUMENT);a=e}else if(Dt(e))a=e;else throw Mi(yi.INVALID_ARGUMENT);return we(n)?s.key=n:Ke(n)&&Object.keys(n).forEach(l=>{Vm.includes(l)?o[l]=n[l]:s[l]=n[l]}),we(i)?s.locale=i:Ke(i)&&(o=i),Ke(r)&&(o=r),[s.key||"",a,s,o]}function vd(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function xd(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,f,u]=Mc(...e),h=nt(f.missingWarn)?f.missingWarn:t.missingWarn;nt(f.fallbackWarn)?f.fallbackWarn:t.fallbackWarn;const p=!!f.part,_=$u(t,f),x=o(t,r,_);if(!we(l)||l==="")return new Intl.NumberFormat(_,u).format(c);let m={},d,E=null;const y="number format";for(let T=0;T<x.length&&(d=x[T],m=n[d]||{},E=m[l],!Ke(E));T++)Ku(t,l,d,h,y);if(!Ke(E)||!we(d))return i?$a:l;let v=`${d}__${l}`;qa(u)||(v=`${v}__${JSON.stringify(u)}`);let P=a.get(v);return P||(P=new Intl.NumberFormat(d,Ut({},E,u)),a.set(v,P)),p?P.formatToParts(c):P.format(c)}const Gm=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Mc(...t){const[e,n,i,r]=t,s=pt();let o=pt();if(!Dt(e))throw Mi(yi.INVALID_ARGUMENT);const a=e;return we(n)?s.key=n:Ke(n)&&Object.keys(n).forEach(l=>{Gm.includes(l)?o[l]=n[l]:s[l]=n[l]}),we(i)?s.locale=i:Ke(i)&&(o=i),Ke(r)&&(o=r),[s.key||"",a,s,o]}function Sd(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const zx=t=>t,Vx=t=>"",Gx="text",Wx=t=>t.length===0?"":ju(t),Xx=L0;function Ed(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function jx(t){const e=Dt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Dt(t.named.count)||Dt(t.named.n))?Dt(t.named.count)?t.named.count:Dt(t.named.n)?t.named.n:e:e}function qx(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Yx(t={}){const e=t.locale,n=jx(t),i=rt(t.pluralRules)&&we(e)&&Mt(t.pluralRules[e])?t.pluralRules[e]:Ed,r=rt(t.pluralRules)&&we(e)&&Mt(t.pluralRules[e])?Ed:void 0,s=d=>d[i(n,d.length,r)],o=t.list||[],a=d=>o[d],l=t.named||pt();Dt(t.pluralIndex)&&qx(n,l);const c=d=>l[d];function f(d,E){const y=Mt(t.messages)?t.messages(d,!!E):rt(t.messages)?t.messages[d]:!1;return y||(t.parent?t.parent.message(d):Vx)}const u=d=>t.modifiers?t.modifiers[d]:zx,h=Ke(t.processor)&&Mt(t.processor.normalize)?t.processor.normalize:Wx,p=Ke(t.processor)&&Mt(t.processor.interpolate)?t.processor.interpolate:Xx,_=Ke(t.processor)&&we(t.processor.type)?t.processor.type:Gx,m={list:a,named:c,plural:s,linked:(d,...E)=>{const[y,v]=E;let P="text",T="";E.length===1?rt(y)?(T=y.modifier||T,P=y.type||P):we(y)&&(T=y||T):E.length===2&&(we(y)&&(T=y||T),we(v)&&(P=v||P));const R=f(d,!0)(m),F=P==="vnode"&&Ct(R)&&T?R[0]:R;return T?u(T)(F,P):F},message:f,type:_,interpolate:p,normalize:h,values:Ut(pt(),o,l)};return m}const yd=()=>"",Rn=t=>Mt(t);function Md(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=t,[l,c]=bc(...e),f=nt(c.missingWarn)?c.missingWarn:t.missingWarn,u=nt(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,h=nt(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,_=we(c.default)||nt(c.default)?nt(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:null,x=n||_!=null&&(we(_)||Mt(_)),m=$u(t,c);h&&$x(c);let[d,E,y]=p?[l,m,a[m]||pt()]:Wm(t,l,m,o,u,f),v=d,P=l;if(!p&&!(we(v)||ni(v)||Rn(v))&&x&&(v=_,P=v),!p&&(!(we(v)||ni(v)||Rn(v))||!we(E)))return r?$a:l;let T=!1;const R=()=>{T=!0},F=Rn(v)?v:Xm(t,l,E,v,P,R);if(T)return v;const b=Jx(t,E,y,c),A=Yx(b),N=Kx(t,F,A);let U=i?i(N,l):N;if(h&&we(U)&&(U=w0(U)),__INTLIFY_PROD_DEVTOOLS__){const Y={timestamp:Date.now(),key:we(l)?l:Rn(v)?v.key:"",locale:E||(Rn(v)?v.locale:""),format:we(v)?v:Rn(v)?v.source:"",message:U};Y.meta=Ut({},t.__meta,Ox()||{}),gx(Y)}return U}function $x(t){Ct(t.list)?t.list=t.list.map(e=>we(e)?rd(e):e):rt(t.named)&&Object.keys(t.named).forEach(e=>{we(t.named[e])&&(t.named[e]=rd(t.named[e]))})}function Wm(t,e,n,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,f=c(t,i,n);let u=pt(),h,p=null;const _="translate";for(let x=0;x<f.length&&(h=f[x],u=o[h]||pt(),(p=l(u,e))===null&&(p=u[e]),!(we(p)||ni(p)||Rn(p)));x++)if(!Hx(h,f)){const m=Ku(t,e,h,s,_);m!==e&&(p=m)}return[p,h,u]}function Xm(t,e,n,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(Rn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=(()=>i);return c.locale=n,c.key=e,c}const l=o(i,Zx(t,n,r,i,a,s));return l.locale=n,l.key=e,l.source=i,l}function Kx(t,e,n){return e(n)}function bc(...t){const[e,n,i]=t,r=pt();if(!we(e)&&!Dt(e)&&!Rn(e)&&!ni(e))throw Mi(yi.INVALID_ARGUMENT);const s=Dt(e)?String(e):(Rn(e),e);return Dt(n)?r.plural=n:we(n)?r.default=n:Ke(n)&&!qa(n)?r.named=n:Ct(n)&&(r.list=n),Dt(i)?r.plural=i:we(i)?r.default=i:Ke(i)&&Ut(r,i),[s,r]}function Zx(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>T0(e,n,o)}}function Jx(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:f}=t,h={locale:e,modifiers:r,pluralRules:s,messages:(p,_)=>{let x=o(n,p);if(x==null&&(f||_)){const[,,m]=Wm(f||t,p,e,a,l,c);x=o(m,p)}if(we(x)||ni(x)){let m=!1;const E=Xm(t,p,e,x,p,()=>{m=!0});return m?yd:E}else return Rn(x)?x:yd}};return t.processor&&(h.processor=t.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),Dt(i.plural)&&(h.pluralIndex=i.plural),h}ix();/*!
  * vue-i18n v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const Qx="11.1.12";function eS(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Mr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Mr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Mr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Mr().__INTLIFY_PROD_DEVTOOLS__=!1)}const un={UNEXPECTED_RETURN_TYPE:vx,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function En(t,...e){return Ya(t,null,void 0)}const Tc=tr("__translateVNode"),Ac=tr("__datetimeParts"),Rc=tr("__numberParts"),jm=tr("__setPluralRules"),qm=tr("__injectWithOption"),Cc=tr("__dispose");function ro(t){if(!rt(t)||ni(t))return t;for(const e in t)if(Un(t,e))if(!e.includes("."))rt(t[e])&&ro(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let o=0;o<i;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in r||(r[n[o]]=pt()),!rt(r[n[o]])){s=!0;break}r=r[n[o]]}if(s||(ni(r)?Um.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!ni(r)){const o=r[n[i]];rt(o)&&ro(o)}}return t}function Zu(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,o=Ke(n)?n:Ct(i)?pt():{[t]:pt()};if(Ct(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||pt(),da(c,o[l])):da(c,o)}else we(a)&&da(JSON.parse(a),o)}),r==null&&s)for(const a in o)Un(o,a)&&ro(o[a]);return o}function Ym(t){return t.type}function $m(t,e,n){let i=rt(e.messages)?e.messages:pt();"__i18nGlobal"in n&&(i=Zu(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(rt(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(rt(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function bd(t){return ft(mo,null,t,0)}const Td="__INTLIFY_META__",Ad=()=>[],tS=()=>!1;let Rd=0;function Cd(t){return((e,n,i,r)=>t(n,i,$i()||void 0,r))}const nS=()=>{const t=$i();let e=null;return t&&(e=Ym(t)[Td])?{[Td]:e}:null};function Ju(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,r=t.flatJson,s=Ca?Ys:Ip;let o=nt(t.inheritLocale)?t.inheritLocale:!0;const a=s(e&&o?e.locale.value:we(t.locale)?t.locale:io),l=s(e&&o?e.fallbackLocale.value:we(t.fallbackLocale)||Ct(t.fallbackLocale)||Ke(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),c=s(Zu(a.value,t)),f=s(Ke(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),u=s(Ke(t.numberFormats)?t.numberFormats:{[a.value]:{}});let h=e?e.missingWarn:nt(t.missingWarn)||fs(t.missingWarn)?t.missingWarn:!0,p=e?e.fallbackWarn:nt(t.fallbackWarn)||fs(t.fallbackWarn)?t.fallbackWarn:!0,_=e?e.fallbackRoot:nt(t.fallbackRoot)?t.fallbackRoot:!0,x=!!t.fallbackFormat,m=Mt(t.missing)?t.missing:null,d=Mt(t.missing)?Cd(t.missing):null,E=Mt(t.postTranslation)?t.postTranslation:null,y=e?e.warnHtmlMessage:nt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,v=!!t.escapeParameter;const P=e?e.modifiers:Ke(t.modifiers)?t.modifiers:{};let T=t.pluralRules||e&&e.pluralRules,R;R=(()=>{i&&md(null);const g={version:Qx,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:P,pluralRules:T,missing:d===null?void 0:d,missingWarn:h,fallbackWarn:p,fallbackFormat:x,unresolving:!0,postTranslation:E===null?void 0:E,warnHtmlMessage:y,escapeParameter:v,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};g.datetimeFormats=f.value,g.numberFormats=u.value,g.__datetimeFormatters=Ke(R)?R.__datetimeFormatters:void 0,g.__numberFormatters=Ke(R)?R.__numberFormatters:void 0;const L=kx(g);return i&&md(L),L})(),Ts(R,a.value,l.value);function b(){return[a.value,l.value,c.value,f.value,u.value]}const A=Yt({get:()=>a.value,set:g=>{R.locale=g,a.value=g}}),N=Yt({get:()=>l.value,set:g=>{R.fallbackLocale=g,l.value=g,Ts(R,a.value,g)}}),U=Yt(()=>c.value),Y=Yt(()=>f.value),ee=Yt(()=>u.value);function ie(){return Mt(E)?E:null}function Q(g){E=g,R.postTranslation=g}function oe(){return m}function q(g){g!==null&&(d=Cd(g)),m=g,R.missing=d}const ce=(g,L,z,J,K,xe)=>{b();let fe;try{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=e?Fx():void 0),fe=g(R)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=void 0)}if(z!=="translate exists"&&Dt(fe)&&fe===$a||z==="translate exists"&&!fe){const[Ae,Re]=L();return e&&_?J(e):K(Ae)}else{if(xe(fe))return fe;throw En(un.UNEXPECTED_RETURN_TYPE)}};function _e(...g){return ce(L=>Reflect.apply(Md,null,[L,...g]),()=>bc(...g),"translate",L=>Reflect.apply(L.t,L,[...g]),L=>L,L=>we(L))}function ye(...g){const[L,z,J]=g;if(J&&!rt(J))throw En(un.INVALID_ARGUMENT);return _e(L,z,Ut({resolvedMessage:!0},J||{}))}function Ue(...g){return ce(L=>Reflect.apply(_d,null,[L,...g]),()=>yc(...g),"datetime format",L=>Reflect.apply(L.d,L,[...g]),()=>hd,L=>we(L)||Ct(L))}function Ye(...g){return ce(L=>Reflect.apply(xd,null,[L,...g]),()=>Mc(...g),"number format",L=>Reflect.apply(L.n,L,[...g]),()=>hd,L=>we(L)||Ct(L))}function Qe(g){return g.map(L=>we(L)||Dt(L)||nt(L)?bd(String(L)):L)}const se={normalize:Qe,interpolate:g=>g,type:"vnode"};function k(...g){return ce(L=>{let z;const J=L;try{J.processor=se,z=Reflect.apply(Md,null,[J,...g])}finally{J.processor=null}return z},()=>bc(...g),"translate",L=>L[Tc](...g),L=>[bd(L)],L=>Ct(L))}function re(...g){return ce(L=>Reflect.apply(xd,null,[L,...g]),()=>Mc(...g),"number format",L=>L[Rc](...g),Ad,L=>we(L)||Ct(L))}function ae(...g){return ce(L=>Reflect.apply(_d,null,[L,...g]),()=>yc(...g),"datetime format",L=>L[Ac](...g),Ad,L=>we(L)||Ct(L))}function le(g){T=g,R.pluralRules=T}function be(g,L){return ce(()=>{if(!g)return!1;const z=we(L)?L:a.value,J=B(z),K=R.messageResolver(J,g);return ni(K)||Rn(K)||we(K)},()=>[g],"translate exists",z=>Reflect.apply(z.te,z,[g,L]),tS,z=>nt(z))}function I(g){let L=null;const z=Om(R,l.value,a.value);for(let J=0;J<z.length;J++){const K=c.value[z[J]]||{},xe=R.messageResolver(K,g);if(xe!=null){L=xe;break}}return L}function S(g){const L=I(g);return L??(e?e.tm(g)||{}:{})}function B(g){return c.value[g]||{}}function $(g,L){if(r){const z={[g]:L};for(const J in z)Un(z,J)&&ro(z[J]);L=z[g]}c.value[g]=L,R.messages=c.value}function Z(g,L){c.value[g]=c.value[g]||{};const z={[g]:L};if(r)for(const J in z)Un(z,J)&&ro(z[J]);L=z[g],da(L,c.value[g]),R.messages=c.value}function G(g){return f.value[g]||{}}function D(g,L){f.value[g]=L,R.datetimeFormats=f.value,vd(R,g,L)}function C(g,L){f.value[g]=Ut(f.value[g]||{},L),R.datetimeFormats=f.value,vd(R,g,L)}function O(g){return u.value[g]||{}}function W(g,L){u.value[g]=L,R.numberFormats=u.value,Sd(R,g,L)}function de(g,L){u.value[g]=Ut(u.value[g]||{},L),R.numberFormats=u.value,Sd(R,g,L)}Rd++,e&&Ca&&(Gi(e.locale,g=>{o&&(a.value=g,R.locale=g,Ts(R,a.value,l.value))}),Gi(e.fallbackLocale,g=>{o&&(l.value=g,R.fallbackLocale=g,Ts(R,a.value,l.value))}));const M={id:Rd,locale:A,fallbackLocale:N,get inheritLocale(){return o},set inheritLocale(g){o=g,g&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,Ts(R,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:U,get modifiers(){return P},get pluralRules(){return T||{}},get isGlobal(){return i},get missingWarn(){return h},set missingWarn(g){h=g,R.missingWarn=h},get fallbackWarn(){return p},set fallbackWarn(g){p=g,R.fallbackWarn=p},get fallbackRoot(){return _},set fallbackRoot(g){_=g},get fallbackFormat(){return x},set fallbackFormat(g){x=g,R.fallbackFormat=x},get warnHtmlMessage(){return y},set warnHtmlMessage(g){y=g,R.warnHtmlMessage=g},get escapeParameter(){return v},set escapeParameter(g){v=g,R.escapeParameter=g},t:_e,getLocaleMessage:B,setLocaleMessage:$,mergeLocaleMessage:Z,getPostTranslationHandler:ie,setPostTranslationHandler:Q,getMissingHandler:oe,setMissingHandler:q,[jm]:le};return M.datetimeFormats=Y,M.numberFormats=ee,M.rt=ye,M.te=be,M.tm=S,M.d=Ue,M.n=Ye,M.getDateTimeFormat=G,M.setDateTimeFormat=D,M.mergeDateTimeFormat=C,M.getNumberFormat=O,M.setNumberFormat=W,M.mergeNumberFormat=de,M[qm]=n,M[Tc]=k,M[Ac]=ae,M[Rc]=re,M}function iS(t){const e=we(t.locale)?t.locale:io,n=we(t.fallbackLocale)||Ct(t.fallbackLocale)||Ke(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=Mt(t.missing)?t.missing:void 0,r=nt(t.silentTranslationWarn)||fs(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=nt(t.silentFallbackWarn)||fs(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=nt(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=Ke(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,f=Mt(t.postTranslation)?t.postTranslation:void 0,u=we(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,h=!!t.escapeParameterHtml,p=nt(t.sync)?t.sync:!0;let _=t.messages;if(Ke(t.sharedMessages)){const P=t.sharedMessages;_=Object.keys(P).reduce((R,F)=>{const b=R[F]||(R[F]={});return Ut(b,P[F]),R},_||{})}const{__i18n:x,__root:m,__injectWithOption:d}=t,E=t.datetimeFormats,y=t.numberFormats,v=t.flatJson;return{locale:e,fallbackLocale:n,messages:_,flatJson:v,datetimeFormats:E,numberFormats:y,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:f,warnHtmlMessage:u,escapeParameter:h,messageResolver:t.messageResolver,inheritLocale:p,__i18n:x,__root:m,__injectWithOption:d}}function wc(t={}){const e=Ju(iS(t)),{__extender:n}=t,i={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return nt(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=nt(r)?!r:r},get silentFallbackWarn(){return nt(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=nt(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},te(r,s){return e.te(r,s)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,s){e.setLocaleMessage(r,s)},mergeLocaleMessage(r,s){e.mergeLocaleMessage(r,s)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,s){e.setDateTimeFormat(r,s)},mergeDateTimeFormat(r,s){e.mergeDateTimeFormat(r,s)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,s){e.setNumberFormat(r,s)},mergeNumberFormat(r,s){e.mergeNumberFormat(r,s)}};return i.__extender=n,i}function rS(t,e,n){return{beforeCreate(){const i=$i();if(!i)throw En(un.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=wd(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=wc(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=wd(t,r);else{this.$i18n=wc({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&$m(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=$i();if(!i)throw En(un.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function wd(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[jm](e.pluralizationRules||t.pluralizationRules);const n=Zu(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const Qu={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function sS({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===an?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},pt())}function Km(){return an}const oS=ho({name:"i18n-t",props:Ut({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Dt(t)||!isNaN(t)}},Qu),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||Ka({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(u=>u[0]!=="_"),o=pt();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=we(t.plural)?+t.plural:t.plural);const a=sS(e,s),l=r[Tc](t.keypath,a,o),c=Ut(pt(),i),f=we(t.tag)||rt(t.tag)?t.tag:Km();return _o(f,c,l)}}}),Pd=oS;function aS(t){return Ct(t)&&!we(t[0])}function Zm(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a=pt();t.locale&&(o.locale=t.locale),we(t.format)?o.key=t.format:rt(t.format)&&(we(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((h,p)=>n.includes(p)?Ut(pt(),h,{[p]:t.format[p]}):h,pt()));const l=i(t.value,o,a);let c=[o.key];Ct(l)?c=l.map((h,p)=>{const _=r[h.type],x=_?_({[h.type]:h.value,index:p,parts:l}):[h.value];return aS(x)&&(x[0].key=`${h.type}-${p}`),x}):we(l)&&(c=[l]);const f=Ut(pt(),s),u=we(t.tag)||rt(t.tag)?t.tag:Km();return _o(u,f,c)}}const lS=ho({name:"i18n-n",props:Ut({value:{type:Number,required:!0},format:{type:[String,Object]}},Qu),setup(t,e){const n=t.i18n||Ka({useScope:t.scope,__useComponent:!0});return Zm(t,e,Gm,(...i)=>n[Rc](...i))}}),Dd=lS;function cS(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function uS(t){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw En(un.UNEXPECTED_ERROR);const c=cS(t,a.$),f=Ld(l);return[Reflect.apply(c.t,c,[...Id(f)]),c]};return{created:(o,a)=>{const[l,c]=e(a);Ca&&t.global===c&&(o.__i18nWatcher=Gi(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{Ca&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=Ld(a);o.textContent=Reflect.apply(l.t,l,[...Id(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function Ld(t){if(we(t))return{path:t};if(Ke(t)){if(!("path"in t))throw En(un.REQUIRED_VALUE,"path");return t}else throw En(un.INVALID_VALUE)}function Id(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,o={},a=i||{};return we(n)&&(o.locale=n),Dt(r)&&(o.plural=r),Dt(s)&&(o.plural=s),[e,a,o]}function fS(t,e,...n){const i=Ke(n[0])?n[0]:{};(nt(i.globalInstall)?i.globalInstall:!0)&&([Pd.name,"I18nT"].forEach(s=>t.component(s,Pd)),[Dd.name,"I18nN"].forEach(s=>t.component(s,Dd)),[Ud.name,"I18nD"].forEach(s=>t.component(s,Ud))),t.directive("t",uS(e))}const dS=tr("global-vue-i18n");function hS(t={}){const e=__VUE_I18N_LEGACY_API__&&nt(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=nt(t.globalInjection)?t.globalInjection:!0,i=new Map,[r,s]=pS(t,e),o=tr("");function a(u){return i.get(u)||null}function l(u,h){i.set(u,h)}function c(u){i.delete(u)}const f={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(u,...h){if(u.__VUE_I18N_SYMBOL__=o,u.provide(u.__VUE_I18N_SYMBOL__,f),Ke(h[0])){const x=h[0];f.__composerExtend=x.__composerExtend,f.__vueI18nExtend=x.__vueI18nExtend}let p=null;!e&&n&&(p=yS(u,f.global)),__VUE_I18N_FULL_INSTALL__&&fS(u,f,...h),__VUE_I18N_LEGACY_API__&&e&&u.mixin(rS(s,s.__composer,f));const _=u.unmount;u.unmount=()=>{p&&p(),f.dispose(),_()}},get global(){return s},dispose(){r.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return f}function Ka(t={}){const e=$i();if(e==null)throw En(un.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw En(un.NOT_INSTALLED);const n=mS(e),i=_S(n),r=Ym(e),s=gS(t,r);if(s==="global")return $m(i,t,r),i;if(s==="parent"){let l=vS(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Ut({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=Ju(l),o.__composerExtend&&(a[Cc]=o.__composerExtend(a)),SS(o,e,a),o.__setInstance(e,a)}return a}function pS(t,e){const n=f_(),i=__VUE_I18N_LEGACY_API__&&e?n.run(()=>wc(t)):n.run(()=>Ju(t));if(i==null)throw En(un.UNEXPECTED_ERROR);return[n,i]}function mS(t){const e=kn(t.isCE?dS:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw En(t.isCE?un.NOT_INSTALLED_WITH_PROVIDE:un.UNEXPECTED_ERROR);return e}function gS(t,e){return qa(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function _S(t){return t.mode==="composition"?t.global:t.global.__composer}function vS(t,e,n=!1){let i=null;const r=e.root;let s=xS(e,n);for(;s!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(i=a.__composer,n&&i&&!i[qm]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function xS(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function SS(t,e,n){po(()=>{},e),zu(()=>{const i=n;t.__deleteInstance(e);const r=i[Cc];r&&(r(),delete i[Cc])},e)}const ES=["locale","fallbackLocale","availableLocales"],Nd=["t","rt","d","n","tm","te"];function yS(t,e){const n=Object.create(null);return ES.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw En(un.UNEXPECTED_ERROR);const o=zt(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,Nd.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw En(un.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,Nd.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const MS=ho({name:"i18n-d",props:Ut({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Qu),setup(t,e){const n=t.i18n||Ka({useScope:t.scope,__useComponent:!0});return Zm(t,e,Vm,(...i)=>n[Ac](...i))}}),Ud=MS;eS();Lx(hx);Ix(wx);Nx(Om);if(__INTLIFY_PROD_DEVTOOLS__){const t=Mr();t.__INTLIFY__=!0,px(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ef="180",ls={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bS=0,Od=1,TS=2,Jm=1,AS=2,gi=3,Ki=0,cn=1,Ei=2,Xi=0,cs=1,Pc=2,Fd=3,kd=4,RS=5,Er=100,CS=101,wS=102,PS=103,DS=104,LS=200,IS=201,NS=202,US=203,Dc=204,Lc=205,OS=206,FS=207,kS=208,BS=209,HS=210,zS=211,VS=212,GS=213,WS=214,Ic=0,Nc=1,Uc=2,hs=3,Oc=4,Fc=5,kc=6,Bc=7,Qm=0,XS=1,jS=2,ji=0,qS=1,YS=2,$S=3,KS=4,ZS=5,JS=6,QS=7,eg=300,ps=301,ms=302,Hc=303,zc=304,Za=306,Vc=1e3,br=1001,Gc=1002,Bn=1003,eE=1004,Lo=1005,Qn=1006,xl=1007,Tr=1008,ri=1009,tg=1010,ng=1011,so=1012,tf=1013,wr=1014,bi=1015,vo=1016,nf=1017,rf=1018,oo=1020,ig=35902,rg=35899,sg=1021,og=1022,On=1023,ao=1026,lo=1027,ag=1028,sf=1029,lg=1030,of=1031,af=1033,ha=33776,pa=33777,ma=33778,ga=33779,Wc=35840,Xc=35841,jc=35842,qc=35843,Yc=36196,$c=37492,Kc=37496,Zc=37808,Jc=37809,Qc=37810,eu=37811,tu=37812,nu=37813,iu=37814,ru=37815,su=37816,ou=37817,au=37818,lu=37819,cu=37820,uu=37821,fu=36492,du=36494,hu=36495,pu=36283,mu=36284,gu=36285,_u=36286,tE=3200,nE=3201,cg=0,iE=1,zi="",An="srgb",gs="srgb-linear",wa="linear",ut="srgb",Or=7680,Bd=519,rE=512,sE=513,oE=514,ug=515,aE=516,lE=517,cE=518,uE=519,Hd=35044,zd="300 es",ei=2e3,Pa=2001;class Dr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ws=Math.PI/180,vu=180/Math.PI;function xo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function fE(t,e){return(t%e+e)%e}function Sl(t,e,n){return(1-n)*t+n*e}function As(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const dE={DEG2RAD:Ws};class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zi{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],u=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(u!==x||l!==h||c!==p||f!==_){let m=1-a;const d=l*h+c*p+f*_+u*x,E=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const P=Math.sqrt(y),T=Math.atan2(P,d*E);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}const v=a*E;if(l=l*m+h*v,c=c*m+p*v,f=f*m+_*v,u=u*m+x*v,m===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=P,c*=P,f*=P,u*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],u=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+f*u+l*p-c*h,e[n+1]=l*_+f*h+c*u-a*p,e[n+2]=c*_+f*p+a*h-l*u,e[n+3]=f*_-a*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),u=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*u+c*p*_,this._y=c*p*u-h*f*_,this._z=c*f*_+h*p*u,this._w=c*f*u-h*p*_;break;case"YXZ":this._x=h*f*u+c*p*_,this._y=c*p*u-h*f*_,this._z=c*f*_-h*p*u,this._w=c*f*u+h*p*_;break;case"ZXY":this._x=h*f*u-c*p*_,this._y=c*p*u+h*f*_,this._z=c*f*_+h*p*u,this._w=c*f*u-h*p*_;break;case"ZYX":this._x=h*f*u-c*p*_,this._y=c*p*u+h*f*_,this._z=c*f*_-h*p*u,this._w=c*f*u+h*p*_;break;case"YZX":this._x=h*f*u+c*p*_,this._y=c*p*u+h*f*_,this._z=c*f*_-h*p*u,this._w=c*f*u-h*p*_;break;case"XZY":this._x=h*f*u-c*p*_,this._y=c*p*u-h*f*_,this._z=c*f*_+h*p*u,this._w=c*f*u+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],u=n[10],h=i+a+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),u=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),u=2*(s*i-o*n);return this.x=n+l*c+o*u-a*f,this.y=i+l*f+a*c-s*u,this.z=r+l*u+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return El.copy(this).projectOnVector(e),this.sub(El)}reflect(e){return this.sub(El.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const El=new V,Vd=new Zi;class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],u=i[7],h=i[2],p=i[5],_=i[8],x=r[0],m=r[3],d=r[6],E=r[1],y=r[4],v=r[7],P=r[2],T=r[5],R=r[8];return s[0]=o*x+a*E+l*P,s[3]=o*m+a*y+l*T,s[6]=o*d+a*v+l*R,s[1]=c*x+f*E+u*P,s[4]=c*m+f*y+u*T,s[7]=c*d+f*v+u*R,s[2]=h*x+p*E+_*P,s[5]=h*m+p*y+_*T,s[8]=h*d+p*v+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=f*o-a*c,h=a*l-f*s,p=c*s-o*l,_=n*u+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=u*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yl.makeScale(e,n)),this}rotate(e){return this.premultiply(yl.makeRotation(-e)),this}translate(e,n){return this.premultiply(yl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yl=new je;function fg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Da(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hE(){const t=Da("canvas");return t.style.display="block",t}const Gd={};function co(t){t in Gd||(Gd[t]=!0,console.warn(t))}function pE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Wd=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mE(){const t={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=us(r.r),r.g=us(r.g),r.b=us(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zi?wa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return co("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return co("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[gs]:{primaries:e,whitePoint:i,transfer:wa,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),t}const tt=mE();function Ti(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function us(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fr;class gE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fr===void 0&&(Fr=Da("canvas")),Fr.width=e.width,Fr.height=e.height;const r=Fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Fr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Da("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ti(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ti(n[i]/255)*255):n[i]=Ti(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _E=0;class lf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ml(r[o].image)):s.push(Ml(r[o]))}else s=Ml(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ml(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?gE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vE=0;const bl=new V;class tn extends Dr{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=br,r=br,s=Qn,o=Tr,a=On,l=ri,c=tn.DEFAULT_ANISOTROPY,f=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=xo(),this.name="",this.source=new lf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bl).x}get height(){return this.source.getSize(bl).y}get depth(){return this.source.getSize(bl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vc:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case Gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vc:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case Gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=eg;tn.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,n=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,v=(p+1)/2,P=(d+1)/2,T=(f+h)/4,R=(u+x)/4,F=(_+m)/4;return y>v&&y>P?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=R/i):v>P?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=T/r,s=F/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=R/s,r=F/s),this.set(i,r,s,n),this}let E=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(h-f)*(h-f));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(u-x)/E,this.z=(h-f)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xE extends Dr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new ht(0,0,e,n),this.scissorTest=!1,this.viewport=new ht(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new tn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new lf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends xE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dg extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SE extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class So{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),No.subVectors(this.max,Rs),kr.subVectors(e.a,Rs),Br.subVectors(e.b,Rs),Hr.subVectors(e.c,Rs),Pi.subVectors(Br,kr),Di.subVectors(Hr,Br),ur.subVectors(kr,Hr);let n=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-ur.z,ur.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,ur.z,0,-ur.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-ur.y,ur.x,0];return!Tl(n,kr,Br,Hr,No)||(n=[1,0,0,0,1,0,0,0,1],!Tl(n,kr,Br,Hr,No))?!1:(Uo.crossVectors(Pi,Di),n=[Uo.x,Uo.y,Uo.z],Tl(n,kr,Br,Hr,No))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ui=[new V,new V,new V,new V,new V,new V,new V,new V],Dn=new V,Io=new So,kr=new V,Br=new V,Hr=new V,Pi=new V,Di=new V,ur=new V,Rs=new V,No=new V,Uo=new V,fr=new V;function Tl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){fr.fromArray(t,s);const a=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),c=n.dot(fr),f=i.dot(fr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const EE=new So,Cs=new V,Al=new V;class Eo{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):EE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const n=Cs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(Al)),this.expandByPoint(Cs.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fi=new V,Rl=new V,Oo=new V,Li=new V,Cl=new V,Fo=new V,wl=new V;class Ja{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Rl.copy(e).add(n).multiplyScalar(.5),Oo.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(Rl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Oo),a=Li.dot(this.direction),l=-Li.dot(Oo),c=Li.lengthSq(),f=Math.abs(1-o*o);let u,h,p,_;if(f>0)if(u=o*l-a,h=o*a-l,_=s*f,u>=0)if(h>=-_)if(h<=_){const x=1/f;u*=x,h*=x,p=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h<=-_?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c):h<=_?(u=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Rl).addScaledVector(Oo,h),p}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){Cl.subVectors(n,e),Fo.subVectors(i,e),wl.crossVectors(Cl,Fo);let o=this.direction.dot(wl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(Fo.crossVectors(Li,Fo));if(l<0)return null;const c=a*this.direction.dot(Cl.cross(Li));if(c<0||l+c>o)return null;const f=-a*Li.dot(wl);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,c,f,u,h,p,_,x,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,u,h,p,_,x,m)}set(e,n,i,r,s,o,a,l,c,f,u,h,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=h,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),o=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*u,_=a*f,x=a*u;n[0]=l*f,n[4]=-l*u,n[8]=c,n[1]=p+_*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*u,_=c*f,x=c*u;n[0]=h+x*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*u,n[5]=o*f,n[9]=-a,n[2]=p*a-_,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*u,_=c*f,x=c*u;n[0]=h-x*a,n[4]=-o*u,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*u,_=a*f,x=a*u;n[0]=l*f,n[4]=_*c-p,n[8]=h*c+x,n[1]=l*u,n[5]=x*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*f,n[4]=x-h*u,n[8]=_*u+p,n[1]=u,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*u+_,n[10]=h-x*u}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*f,n[4]=-u,n[8]=c*f,n[1]=h*u+x,n[5]=o*f,n[9]=p*u-_,n[2]=_*u-p,n[6]=a*f,n[10]=x*u+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yE,e,ME)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ii.crossVectors(i,hn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ii.crossVectors(i,hn)),Ii.normalize(),ko.crossVectors(hn,Ii),r[0]=Ii.x,r[4]=ko.x,r[8]=hn.x,r[1]=Ii.y,r[5]=ko.y,r[9]=hn.y,r[2]=Ii.z,r[6]=ko.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],u=i[5],h=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],E=i[3],y=i[7],v=i[11],P=i[15],T=r[0],R=r[4],F=r[8],b=r[12],A=r[1],N=r[5],U=r[9],Y=r[13],ee=r[2],ie=r[6],Q=r[10],oe=r[14],q=r[3],ce=r[7],_e=r[11],ye=r[15];return s[0]=o*T+a*A+l*ee+c*q,s[4]=o*R+a*N+l*ie+c*ce,s[8]=o*F+a*U+l*Q+c*_e,s[12]=o*b+a*Y+l*oe+c*ye,s[1]=f*T+u*A+h*ee+p*q,s[5]=f*R+u*N+h*ie+p*ce,s[9]=f*F+u*U+h*Q+p*_e,s[13]=f*b+u*Y+h*oe+p*ye,s[2]=_*T+x*A+m*ee+d*q,s[6]=_*R+x*N+m*ie+d*ce,s[10]=_*F+x*U+m*Q+d*_e,s[14]=_*b+x*Y+m*oe+d*ye,s[3]=E*T+y*A+v*ee+P*q,s[7]=E*R+y*N+v*ie+P*ce,s[11]=E*F+y*U+v*Q+P*_e,s[15]=E*b+y*Y+v*oe+P*ye,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+s*l*u-r*c*u-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+m*(+n*c*u-n*a*p-s*o*u+i*o*p+s*a*f-i*c*f)+d*(-r*a*f-n*l*u+n*a*h+r*o*u-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],E=u*m*c-x*h*c+x*l*p-a*m*p-u*l*d+a*h*d,y=_*h*c-f*m*c-_*l*p+o*m*p+f*l*d-o*h*d,v=f*x*c-_*u*c+_*a*p-o*x*p-f*a*d+o*u*d,P=_*u*l-f*x*l-_*a*h+o*x*h+f*a*m-o*u*m,T=n*E+i*y+r*v+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=E*R,e[1]=(x*h*s-u*m*s-x*r*p+i*m*p+u*r*d-i*h*d)*R,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*R,e[3]=(u*l*s-a*h*s-u*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=y*R,e[5]=(f*m*s-_*h*s+_*r*p-n*m*p-f*r*d+n*h*d)*R,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*d-n*l*d)*R,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*R,e[8]=v*R,e[9]=(_*u*s-f*x*s-_*i*p+n*x*p+f*i*d-n*u*d)*R,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*d+n*a*d)*R,e[11]=(f*a*s-o*u*s-f*i*c+n*u*c+o*i*p-n*a*p)*R,e[12]=P*R,e[13]=(f*x*r-_*u*r+_*i*h-n*x*h-f*i*m+n*u*m)*R,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*m-n*a*m)*R,e[15]=(o*u*r-f*a*r+f*i*l-n*u*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,u=a+a,h=s*c,p=s*f,_=s*u,x=o*f,m=o*u,d=a*u,E=l*c,y=l*f,v=l*u,P=i.x,T=i.y,R=i.z;return r[0]=(1-(x+d))*P,r[1]=(p+v)*P,r[2]=(_-y)*P,r[3]=0,r[4]=(p-v)*T,r[5]=(1-(h+d))*T,r[6]=(m+E)*T,r[7]=0,r[8]=(_+y)*R,r[9]=(m-E)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=zr.set(r[0],r[1],r[2]).length();const o=zr.set(r[4],r[5],r[6]).length(),a=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/s,f=1/o,u=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,n.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ei,l=!1){const c=this.elements,f=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,x;if(l)_=s/(o-s),x=o*s/(o-s);else if(a===ei)_=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Pa)_=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ei,l=!1){const c=this.elements,f=2/(n-e),u=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,x;if(l)_=1/(o-s),x=o/(o-s);else if(a===ei)_=-2/(o-s),x=-(o+s)/(o-s);else if(a===Pa)_=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const zr=new V,Ln=new xt,yE=new V(0,0,0),ME=new V(1,1,1),Ii=new V,ko=new V,hn=new V,jd=new xt,qd=new Zi;class si{constructor(e=0,n=0,i=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qd.setFromEuler(this),this.setFromQuaternion(qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class hg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bE=0;const Yd=new V,Vr=new Zi,di=new xt,Bo=new V,ws=new V,TE=new V,AE=new Zi,$d=new V(1,0,0),Kd=new V(0,1,0),Zd=new V(0,0,1),Jd={type:"added"},RE={type:"removed"},Gr={type:"childadded",child:null},Pl={type:"childremoved",child:null};class Vt extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new V,n=new si,i=new Zi,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new je}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis($d,e)}rotateY(e){return this.rotateOnAxis(Kd,e)}rotateZ(e){return this.rotateOnAxis(Zd,e)}translateOnAxis(e,n){return Yd.copy(e).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($d,e)}translateY(e){return this.translateOnAxis(Kd,e)}translateZ(e){return this.translateOnAxis(Zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Bo.copy(e):Bo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ws,Bo,this.up):di.lookAt(Bo,ws,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(di),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jd),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(RE),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jd),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,TE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,AE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new V(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new V,hi=new V,Dl=new V,pi=new V,Wr=new V,Xr=new V,Qd=new V,Ll=new V,Il=new V,Nl=new V,Ul=new ht,Ol=new ht,Fl=new ht;class Cn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),hi.subVectors(i,n),Dl.subVectors(e,n);const o=In.dot(In),a=In.dot(hi),l=In.dot(Dl),c=hi.dot(hi),f=hi.dot(Dl),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,p=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ul.setScalar(0),Ol.setScalar(0),Fl.setScalar(0),Ul.fromBufferAttribute(e,n),Ol.fromBufferAttribute(e,i),Fl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ul,s.x),o.addScaledVector(Ol,s.y),o.addScaledVector(Fl,s.z),o}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),hi.subVectors(e,n),In.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),In.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Cn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Wr.subVectors(r,i),Xr.subVectors(s,i),Ll.subVectors(e,i);const l=Wr.dot(Ll),c=Xr.dot(Ll);if(l<=0&&c<=0)return n.copy(i);Il.subVectors(e,r);const f=Wr.dot(Il),u=Xr.dot(Il);if(f>=0&&u<=f)return n.copy(r);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Wr,o);Nl.subVectors(e,s);const p=Wr.dot(Nl),_=Xr.dot(Nl);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Xr,a);const m=f*_-p*u;if(m<=0&&u-f>=0&&p-_>=0)return Qd.subVectors(s,r),a=(u-f)/(u-f+(p-_)),n.copy(r).addScaledVector(Qd,a);const d=1/(m+x+h);return o=x*d,a=h*d,n.copy(i).addScaledVector(Wr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function kl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=fE(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=kl(o,s,e+1/3),this.g=kl(o,s,e),this.b=kl(o,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,n=An){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const i=pg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return tt.workingToColorSpace(Wt.copy(this),e),Math.round($e(Wt.r*255,0,255))*65536+Math.round($e(Wt.g*255,0,255))*256+Math.round($e(Wt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.workingToColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=tt.workingColorSpace){return tt.workingToColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=An){tt.workingToColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==An?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+n,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ni),e.getHSL(Ho);const i=Sl(Ni.h,Ho.h,n),r=Sl(Ni.s,Ho.s,n),s=Sl(Ni.l,Ho.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Je;Je.NAMES=pg;let CE=0;class Lr extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=cs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Lc,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dc&&(i.blendSrc=this.blendSrc),this.blendDst!==Lc&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ar extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Qm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new V,zo=new We;let wE=0;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hd,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zo.fromBufferAttribute(this,n),zo.applyMatrix3(e),this.setXY(n,zo.x,zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=As(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=As(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=As(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=As(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=As(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hd&&(e.usage=this.usage),e}}class mg extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class gg extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Sn extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let PE=0;const Tn=new xt,Bl=new Vt,jr=new V,pn=new So,Ps=new So,kt=new V;class Vn extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fg(e)?gg:mg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Sn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(pn.min,Ps.min),pn.expandByPoint(kt),kt.addVectors(pn.max,Ps.max),pn.expandByPoint(kt)):(pn.expandByPoint(Ps.min),pn.expandByPoint(Ps.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)kt.fromBufferAttribute(a,c),l&&(jr.fromBufferAttribute(e,c),kt.add(jr)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new V,l[F]=new V;const c=new V,f=new V,u=new V,h=new We,p=new We,_=new We,x=new V,m=new V;function d(F,b,A){c.fromBufferAttribute(i,F),f.fromBufferAttribute(i,b),u.fromBufferAttribute(i,A),h.fromBufferAttribute(s,F),p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,A),f.sub(c),u.sub(c),p.sub(h),_.sub(h);const N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(N),m.copy(u).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(N),a[F].add(x),a[b].add(x),a[A].add(x),l[F].add(m),l[b].add(m),l[A].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,b=E.length;F<b;++F){const A=E[F],N=A.start,U=A.count;for(let Y=N,ee=N+U;Y<ee;Y+=3)d(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const y=new V,v=new V,P=new V,T=new V;function R(F){P.fromBufferAttribute(r,F),T.copy(P);const b=a[F];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),v.crossVectors(T,b);const N=v.dot(l[F])<0?-1:1;o.setXYZW(F,y.x,y.y,y.z,N)}for(let F=0,b=E.length;F<b;++F){const A=E[F],N=A.start,U=A.count;for(let Y=N,ee=N+U;Y<ee;Y+=3)R(e.getX(Y+0)),R(e.getX(Y+1)),R(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,f=new V,u=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let d=0;d<f;d++)h[_++]=c[p++]}return new ii(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,u=c.length;f<u;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,p=u.length;h<p;h++)f.push(u[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eh=new xt,dr=new Ja,Vo=new Eo,th=new V,Go=new V,Wo=new V,Xo=new V,Hl=new V,jo=new V,nh=new V,qo=new V;class ln extends Vt{constructor(e=new Vn,n=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){jo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],u=s[l];f!==0&&(Hl.fromBufferAttribute(u,e),o?jo.addScaledVector(Hl,f):jo.addScaledVector(Hl.sub(n),f))}n.add(jo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),dr.copy(e.ray).recast(e.near),!(Vo.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Vo,th)===null||dr.origin.distanceToSquared(th)>(e.far-e.near)**2))&&(eh.copy(s).invert(),dr.copy(e.ray).applyMatrix4(eh),!(i.boundingBox!==null&&dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,P=y;v<P;v+=3){const T=a.getX(v),R=a.getX(v+1),F=a.getX(v+2);r=Yo(this,d,e,i,c,f,u,T,R,F),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const E=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=Yo(this,o,e,i,c,f,u,E,y,v),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,P=y;v<P;v+=3){const T=v,R=v+1,F=v+2;r=Yo(this,d,e,i,c,f,u,T,R,F),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const E=m,y=m+1,v=m+2;r=Yo(this,o,e,i,c,f,u,E,y,v),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function DE(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ki,a),l===null)return null;qo.copy(a),qo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(qo);return c<n.near||c>n.far?null:{distance:c,point:qo.clone(),object:t}}function Yo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Go),t.getVertexPosition(l,Wo),t.getVertexPosition(c,Xo);const f=DE(t,e,n,i,Go,Wo,Xo,nh);if(f){const u=new V;Cn.getBarycoord(nh,Go,Wo,Xo,u),r&&(f.uv=Cn.getInterpolatedAttribute(r,a,l,c,u,new We)),s&&(f.uv1=Cn.getInterpolatedAttribute(s,a,l,c,u,new We)),o&&(f.normal=Cn.getInterpolatedAttribute(o,a,l,c,u,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new V,materialIndex:0};Cn.getNormal(Go,Wo,Xo,h.normal),f.face=h,f.barycoord=u}return f}class Ir extends Vn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],u=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(f,3)),this.setAttribute("uv",new Sn(u,2));function _(x,m,d,E,y,v,P,T,R,F,b){const A=v/R,N=P/F,U=v/2,Y=P/2,ee=T/2,ie=R+1,Q=F+1;let oe=0,q=0;const ce=new V;for(let _e=0;_e<Q;_e++){const ye=_e*N-Y;for(let Ue=0;Ue<ie;Ue++){const Ye=Ue*A-U;ce[x]=Ye*E,ce[m]=ye*y,ce[d]=ee,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[m]=0,ce[d]=T>0?1:-1,f.push(ce.x,ce.y,ce.z),u.push(Ue/R),u.push(1-_e/F),oe+=1}}for(let _e=0;_e<F;_e++)for(let ye=0;ye<R;ye++){const Ue=h+ye+ie*_e,Ye=h+ye+ie*(_e+1),Qe=h+(ye+1)+ie*(_e+1),Xe=h+(ye+1)+ie*_e;l.push(Ue,Ye,Xe),l.push(Ye,Qe,Xe),q+=6}a.addGroup(p,q,b),p+=q,h+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=_s(t[n]);for(const r in i)e[r]=i[r]}return e}function LE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _g(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const IE={clone:_s,merge:Zt};var NE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NE,this.fragmentShader=UE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=LE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class vg extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new V,ih=new We,rh=new We;class gn extends vg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vu*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,n){return this.getViewBounds(e,ih,rh),n.subVectors(rh,ih)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qr=-90,Yr=1;class OE extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(qr,Yr,e,n);r.layers=this.layers,this.add(r);const s=new gn(qr,Yr,e,n);s.layers=this.layers,this.add(s);const o=new gn(qr,Yr,e,n);o.layers=this.layers,this.add(o);const a=new gn(qr,Yr,e,n);a.layers=this.layers,this.add(a);const l=new gn(qr,Yr,e,n);l.layers=this.layers,this.add(l);const c=new gn(qr,Yr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(u,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class xg extends tn{constructor(e=[],n=ps,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FE extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ir(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Xi});s.uniforms.tEquirect.value=n;const o=new ln(r,s),a=n.minFilter;return n.minFilter===Tr&&(n.minFilter=Qn),new OE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class ts extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ts;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Sg{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Je(e),this.density=n}clone(){return new Sg(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Eg extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vl=new V,BE=new V,HE=new je;class Bi{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Vl.subVectors(i,n).cross(BE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Vl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||HE.getNormalMatrix(e),r=this.coplanarPoint(Vl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Eo,zE=new We(.5,.5),$o=new V;class cf{constructor(e=new Bi,n=new Bi,i=new Bi,r=new Bi,s=new Bi,o=new Bi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ei,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],u=s[5],h=s[6],p=s[7],_=s[8],x=s[9],m=s[10],d=s[11],E=s[12],y=s[13],v=s[14],P=s[15];if(r[0].setComponents(c-o,p-f,d-_,P-E).normalize(),r[1].setComponents(c+o,p+f,d+_,P+E).normalize(),r[2].setComponents(c+a,p+u,d+x,P+y).normalize(),r[3].setComponents(c-a,p-u,d-x,P-y).normalize(),i)r[4].setComponents(l,h,m,v).normalize(),r[5].setComponents(c-l,p-h,d-m,P-v).normalize();else if(r[4].setComponents(c-l,p-h,d-m,P-v).normalize(),n===ei)r[5].setComponents(c+l,p+h,d+m,P+v).normalize();else if(n===Pa)r[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){hr.center.set(0,0,0);const n=zE.distanceTo(e.center);return hr.radius=.7071067811865476+n,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if($o.x=r.normal.x>0?e.max.x:e.min.x,$o.y=r.normal.y>0?e.max.y:e.min.y,$o.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class La extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ia=new V,Na=new V,sh=new xt,Ds=new Ja,Ko=new Eo,Gl=new V,oh=new V;class VE extends Vt{constructor(e=new Vn,n=new La){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ia.fromBufferAttribute(n,r-1),Na.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ia.distanceTo(Na);e.setAttribute("lineDistance",new Sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(r),Ko.radius+=s,e.ray.intersectsSphere(Ko)===!1)return;sh.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(sh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const d=f.getX(x),E=f.getX(x+1),y=Zo(this,e,Ds,l,d,E,x);y&&n.push(y)}if(this.isLineLoop){const x=f.getX(_-1),m=f.getX(p),d=Zo(this,e,Ds,l,x,m,_-1);d&&n.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=p,m=_-1;x<m;x+=c){const d=Zo(this,e,Ds,l,x,x+1,x);d&&n.push(d)}if(this.isLineLoop){const x=Zo(this,e,Ds,l,_-1,p,_-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zo(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Ia.fromBufferAttribute(a,r),Na.fromBufferAttribute(a,s),n.distanceSqToSegment(Ia,Na,Gl,oh)>i)return;Gl.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Gl);if(!(c<e.near||c>e.far))return{distance:c,point:oh.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const ah=new V,lh=new V;class xu extends VE{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)ah.fromBufferAttribute(n,r),lh.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ah.distanceTo(lh);e.setAttribute("lineDistance",new Sn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class GE extends Lr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ch=new xt,Su=new Ja,Jo=new Eo,Qo=new V;class Mw extends Vt{constructor(e=new Vn,n=new GE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(r),Jo.radius+=s,e.ray.intersectsSphere(Jo)===!1)return;ch.copy(r).invert(),Su.copy(e.ray).applyMatrix4(ch);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=h,x=p;_<x;_++){const m=c.getX(_);Qo.fromBufferAttribute(u,m),uh(Qo,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,x=p;_<x;_++)Qo.fromBufferAttribute(u,_),uh(Qo,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function uh(t,e,n,i,r,s,o){const a=Su.distanceSqToPoint(t);if(a<n){const l=new V;Su.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Wl extends tn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yg extends tn{constructor(e,n,i=wr,r,s,o,a=Bn,l=Bn,c,f=ao,u=1){if(f!==ao&&f!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:u};super(h,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Mg extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const ea=new V,ta=new V,Xl=new V,na=new Cn;class Eu extends Vn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Ws*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],u=new Array(3),h={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:x,b:m,c:d}=na;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),na.getNormal(Xl),u[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const y=(E+1)%3,v=u[E],P=u[y],T=na[f[E]],R=na[f[y]],F=`${v}_${P}`,b=`${P}_${v}`;b in h&&h[b]?(Xl.dot(h[b].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(R.x,R.y,R.z)),h[b]=null):F in h||(h[F]={index0:c[E],index1:c[y],normal:Xl.clone()})}}for(const _ in h)if(h[_]){const{index0:x,index1:m}=h[_];ea.fromBufferAttribute(a,x),ta.fromBufferAttribute(a,m),p.push(ea.x,ea.y,ea.z),p.push(ta.x,ta.y,ta.z)}this.setAttribute("position",new Sn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class yo extends Vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,u=e/a,h=n/l,p=[],_=[],x=[],m=[];for(let d=0;d<f;d++){const E=d*h-o;for(let y=0;y<c;y++){const v=y*u-s;_.push(v,-E,0),x.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const y=E+c*d,v=E+c*(d+1),P=E+1+c*(d+1),T=E+1+c*d;p.push(y,v,T),p.push(v,P,T)}this.setIndex(p),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(x,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class bg extends Vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],u=new V,h=new V,p=[],_=[],x=[],m=[];for(let d=0;d<=i;d++){const E=[],y=d/i;let v=0;d===0&&o===0?v=.5/n:d===i&&l===Math.PI&&(v=-.5/n);for(let P=0;P<=n;P++){const T=P/n;u.x=-e*Math.cos(r+T*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(r+T*s)*Math.sin(o+y*a),_.push(u.x,u.y,u.z),h.copy(u).normalize(),x.push(h.x,h.y,h.z),m.push(T+v,1-y),E.push(c++)}f.push(E)}for(let d=0;d<i;d++)for(let E=0;E<n;E++){const y=f[d][E+1],v=f[d][E],P=f[d+1][E],T=f[d+1][E+1];(d!==0||o>0)&&p.push(y,v,T),(d!==i-1||l<Math.PI)&&p.push(v,P,T)}this.setIndex(p),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(x,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bg(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bw extends Lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cg,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class WE extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XE extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tg extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const jl=new xt,fh=new V,dh=new V;class jE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cf,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;fh.setFromMatrixPosition(e.matrixWorld),n.position.copy(fh),dh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dh),n.updateMatrixWorld(),jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hh=new xt,Ls=new V,ql=new V;class qE extends jE{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ls.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ls),ql.copy(i.position),ql.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ql),i.updateMatrixWorld(),r.makeTranslation(-Ls.x,-Ls.y,-Ls.z),hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh,i.coordinateSystem,i.reversedDepth)}}class Tw extends Tg{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new qE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ag extends vg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Aw extends Tg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class YE extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ph{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $E extends Dr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function mh(t,e,n,i){const r=KE(i);switch(n){case sg:return t*e;case ag:return t*e/r.components*r.byteLength;case sf:return t*e/r.components*r.byteLength;case lg:return t*e*2/r.components*r.byteLength;case of:return t*e*2/r.components*r.byteLength;case og:return t*e*3/r.components*r.byteLength;case On:return t*e*4/r.components*r.byteLength;case af:return t*e*4/r.components*r.byteLength;case ha:case pa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ma:case ga:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xc:case qc:return Math.max(t,16)*Math.max(e,8)/4;case Wc:case jc:return Math.max(t,8)*Math.max(e,8)/2;case Yc:case $c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case eu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case tu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case nu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case iu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ru:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case su:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ou:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case au:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case lu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case cu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case uu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case fu:case du:case hu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case pu:case mu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case gu:case _u:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function KE(t){switch(t){case ri:case tg:return{byteLength:1,components:1};case so:case ng:case vo:return{byteLength:2,components:1};case nf:case rf:return{byteLength:2,components:4};case wr:case tf:case bi:return{byteLength:4,components:1};case ig:case rg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ef);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ZE(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,u=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const f=l.array,u=l.updateRanges;if(t.bindBuffer(c,a),u.length===0)t.bufferSubData(c,0,f);else{u.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<u.length;p++){const _=u[h],x=u[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,u[h]=x)}u.length=h+1;for(let p=0,_=u.length;p<_;p++){const x=u[p];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var JE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ey=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ty=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ry=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ay=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ly=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ey=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,My=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Py=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ly=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,By=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$y=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ky=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,KM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ob=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:JE,alphahash_pars_fragment:QE,alphamap_fragment:ey,alphamap_pars_fragment:ty,alphatest_fragment:ny,alphatest_pars_fragment:iy,aomap_fragment:ry,aomap_pars_fragment:sy,batching_pars_vertex:oy,batching_vertex:ay,begin_vertex:ly,beginnormal_vertex:cy,bsdfs:uy,iridescence_fragment:fy,bumpmap_pars_fragment:dy,clipping_planes_fragment:hy,clipping_planes_pars_fragment:py,clipping_planes_pars_vertex:my,clipping_planes_vertex:gy,color_fragment:_y,color_pars_fragment:vy,color_pars_vertex:xy,color_vertex:Sy,common:Ey,cube_uv_reflection_fragment:yy,defaultnormal_vertex:My,displacementmap_pars_vertex:by,displacementmap_vertex:Ty,emissivemap_fragment:Ay,emissivemap_pars_fragment:Ry,colorspace_fragment:Cy,colorspace_pars_fragment:wy,envmap_fragment:Py,envmap_common_pars_fragment:Dy,envmap_pars_fragment:Ly,envmap_pars_vertex:Iy,envmap_physical_pars_fragment:Wy,envmap_vertex:Ny,fog_vertex:Uy,fog_pars_vertex:Oy,fog_fragment:Fy,fog_pars_fragment:ky,gradientmap_pars_fragment:By,lightmap_pars_fragment:Hy,lights_lambert_fragment:zy,lights_lambert_pars_fragment:Vy,lights_pars_begin:Gy,lights_toon_fragment:Xy,lights_toon_pars_fragment:jy,lights_phong_fragment:qy,lights_phong_pars_fragment:Yy,lights_physical_fragment:$y,lights_physical_pars_fragment:Ky,lights_fragment_begin:Zy,lights_fragment_maps:Jy,lights_fragment_end:Qy,logdepthbuf_fragment:eM,logdepthbuf_pars_fragment:tM,logdepthbuf_pars_vertex:nM,logdepthbuf_vertex:iM,map_fragment:rM,map_pars_fragment:sM,map_particle_fragment:oM,map_particle_pars_fragment:aM,metalnessmap_fragment:lM,metalnessmap_pars_fragment:cM,morphinstance_vertex:uM,morphcolor_vertex:fM,morphnormal_vertex:dM,morphtarget_pars_vertex:hM,morphtarget_vertex:pM,normal_fragment_begin:mM,normal_fragment_maps:gM,normal_pars_fragment:_M,normal_pars_vertex:vM,normal_vertex:xM,normalmap_pars_fragment:SM,clearcoat_normal_fragment_begin:EM,clearcoat_normal_fragment_maps:yM,clearcoat_pars_fragment:MM,iridescence_pars_fragment:bM,opaque_fragment:TM,packing:AM,premultiplied_alpha_fragment:RM,project_vertex:CM,dithering_fragment:wM,dithering_pars_fragment:PM,roughnessmap_fragment:DM,roughnessmap_pars_fragment:LM,shadowmap_pars_fragment:IM,shadowmap_pars_vertex:NM,shadowmap_vertex:UM,shadowmask_pars_fragment:OM,skinbase_vertex:FM,skinning_pars_vertex:kM,skinning_vertex:BM,skinnormal_vertex:HM,specularmap_fragment:zM,specularmap_pars_fragment:VM,tonemapping_fragment:GM,tonemapping_pars_fragment:WM,transmission_fragment:XM,transmission_pars_fragment:jM,uv_pars_fragment:qM,uv_pars_vertex:YM,uv_vertex:$M,worldpos_vertex:KM,background_vert:ZM,background_frag:JM,backgroundCube_vert:QM,backgroundCube_frag:eb,cube_vert:tb,cube_frag:nb,depth_vert:ib,depth_frag:rb,distanceRGBA_vert:sb,distanceRGBA_frag:ob,equirect_vert:ab,equirect_frag:lb,linedashed_vert:cb,linedashed_frag:ub,meshbasic_vert:fb,meshbasic_frag:db,meshlambert_vert:hb,meshlambert_frag:pb,meshmatcap_vert:mb,meshmatcap_frag:gb,meshnormal_vert:_b,meshnormal_frag:vb,meshphong_vert:xb,meshphong_frag:Sb,meshphysical_vert:Eb,meshphysical_frag:yb,meshtoon_vert:Mb,meshtoon_frag:bb,points_vert:Tb,points_frag:Ab,shadow_vert:Rb,shadow_frag:Cb,sprite_vert:wb,sprite_frag:Pb},Ee={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Jn={basic:{uniforms:Zt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Zt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Zt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Zt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Zt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Zt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Zt([Ee.points,Ee.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Zt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Zt([Ee.common,Ee.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Zt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Zt([Ee.sprite,Ee.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Zt([Ee.common,Ee.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Zt([Ee.lights,Ee.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Jn.physical={uniforms:Zt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ia={r:0,b:0,g:0},pr=new si,Db=new xt;function Lb(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,f,u=null,h=0,p=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:e).get(v)),v}function x(y){let v=!1;const P=_(y);P===null?d(a,l):P&&P.isColor&&(d(P,1),v=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,v){const P=_(v);P&&(P.isCubeTexture||P.mapping===Za)?(f===void 0&&(f=new ln(new Ir(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:_s(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),pr.copy(v.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),f.material.uniforms.envMap.value=P,f.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Db.makeRotationFromEuler(pr)),f.material.toneMapped=tt.getTransfer(P.colorSpace)!==ut,(u!==P||h!==P.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,u=P,h=P.version,p=t.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new ln(new yo(2,2),new Ji({name:"BackgroundMaterial",uniforms:_s(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=tt.getTransfer(P.colorSpace)!==ut,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||h!==P.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=P,h=P.version,p=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,v){y.getRGB(ia,_g(t)),i.buffers.color.setClear(ia.r,ia.g,ia.b,v,o)}function E(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:x,addToRenderList:m,dispose:E}}function Ib(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(A,N,U,Y,ee){let ie=!1;const Q=u(Y,U,N);s!==Q&&(s=Q,c(s.object)),ie=p(A,Y,U,ee),ie&&_(A,Y,U,ee),ee!==null&&e.update(ee,t.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,v(A,N,U,Y),ee!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return t.createVertexArray()}function c(A){return t.bindVertexArray(A)}function f(A){return t.deleteVertexArray(A)}function u(A,N,U){const Y=U.wireframe===!0;let ee=i[A.id];ee===void 0&&(ee={},i[A.id]=ee);let ie=ee[N.id];ie===void 0&&(ie={},ee[N.id]=ie);let Q=ie[Y];return Q===void 0&&(Q=h(l()),ie[Y]=Q),Q}function h(A){const N=[],U=[],Y=[];for(let ee=0;ee<n;ee++)N[ee]=0,U[ee]=0,Y[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:Y,object:A,attributes:{},index:null}}function p(A,N,U,Y){const ee=s.attributes,ie=N.attributes;let Q=0;const oe=U.getAttributes();for(const q in oe)if(oe[q].location>=0){const _e=ee[q];let ye=ie[q];if(ye===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(ye=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(ye=A.instanceColor)),_e===void 0||_e.attribute!==ye||ye&&_e.data!==ye.data)return!0;Q++}return s.attributesNum!==Q||s.index!==Y}function _(A,N,U,Y){const ee={},ie=N.attributes;let Q=0;const oe=U.getAttributes();for(const q in oe)if(oe[q].location>=0){let _e=ie[q];_e===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(_e=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(_e=A.instanceColor));const ye={};ye.attribute=_e,_e&&_e.data&&(ye.data=_e.data),ee[q]=ye,Q++}s.attributes=ee,s.attributesNum=Q,s.index=Y}function x(){const A=s.newAttributes;for(let N=0,U=A.length;N<U;N++)A[N]=0}function m(A){d(A,0)}function d(A,N){const U=s.newAttributes,Y=s.enabledAttributes,ee=s.attributeDivisors;U[A]=1,Y[A]===0&&(t.enableVertexAttribArray(A),Y[A]=1),ee[A]!==N&&(t.vertexAttribDivisor(A,N),ee[A]=N)}function E(){const A=s.newAttributes,N=s.enabledAttributes;for(let U=0,Y=N.length;U<Y;U++)N[U]!==A[U]&&(t.disableVertexAttribArray(U),N[U]=0)}function y(A,N,U,Y,ee,ie,Q){Q===!0?t.vertexAttribIPointer(A,N,U,ee,ie):t.vertexAttribPointer(A,N,U,Y,ee,ie)}function v(A,N,U,Y){x();const ee=Y.attributes,ie=U.getAttributes(),Q=N.defaultAttributeValues;for(const oe in ie){const q=ie[oe];if(q.location>=0){let ce=ee[oe];if(ce===void 0&&(oe==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),oe==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ce!==void 0){const _e=ce.normalized,ye=ce.itemSize,Ue=e.get(ce);if(Ue===void 0)continue;const Ye=Ue.buffer,Qe=Ue.type,Xe=Ue.bytesPerElement,se=Qe===t.INT||Qe===t.UNSIGNED_INT||ce.gpuType===tf;if(ce.isInterleavedBufferAttribute){const k=ce.data,re=k.stride,ae=ce.offset;if(k.isInstancedInterleavedBuffer){for(let le=0;le<q.locationSize;le++)d(q.location+le,k.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let le=0;le<q.locationSize;le++)m(q.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let le=0;le<q.locationSize;le++)y(q.location+le,ye/q.locationSize,Qe,_e,re*Xe,(ae+ye/q.locationSize*le)*Xe,se)}else{if(ce.isInstancedBufferAttribute){for(let k=0;k<q.locationSize;k++)d(q.location+k,ce.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let k=0;k<q.locationSize;k++)m(q.location+k);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let k=0;k<q.locationSize;k++)y(q.location+k,ye/q.locationSize,Qe,_e,ye*Xe,ye/q.locationSize*k*Xe,se)}}else if(Q!==void 0){const _e=Q[oe];if(_e!==void 0)switch(_e.length){case 2:t.vertexAttrib2fv(q.location,_e);break;case 3:t.vertexAttrib3fv(q.location,_e);break;case 4:t.vertexAttrib4fv(q.location,_e);break;default:t.vertexAttrib1fv(q.location,_e)}}}}E()}function P(){F();for(const A in i){const N=i[A];for(const U in N){const Y=N[U];for(const ee in Y)f(Y[ee].object),delete Y[ee];delete N[U]}delete i[A]}}function T(A){if(i[A.id]===void 0)return;const N=i[A.id];for(const U in N){const Y=N[U];for(const ee in Y)f(Y[ee].object),delete Y[ee];delete N[U]}delete i[A.id]}function R(A){for(const N in i){const U=i[N];if(U[A.id]===void 0)continue;const Y=U[A.id];for(const ee in Y)f(Y[ee].object),delete Y[ee];delete U[A.id]}}function F(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Nb(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,u){u!==0&&(t.drawArraysInstanced(i,c,f,u),n.update(f,i,u))}function a(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=f[_];n.update(p,i,1)}function l(c,f,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],f[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,u);let _=0;for(let x=0;x<u;x++)_+=f[x]*h[x];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ub(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==On&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const F=R===vo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ri&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==bi&&!F)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:P,maxSamples:T}}function Ob(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Bi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||i!==0||r;return r=h,i=u.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){n=f(u,h,0)},this.setState=function(u,h,p){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=t.get(u);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const E=s?0:i,y=E*4;let v=d.clippingState||null;l.value=v,v=f(_,h,y,p);for(let P=0;P!==y;++P)v[P]=n[P];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,p,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,v=p;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Fb(t){let e=new WeakMap;function n(o,a){return a===Hc?o.mapping=ps:a===zc&&(o.mapping=ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hc||a===zc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new FE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ns=4,gh=[.125,.215,.35,.446,.526,.582],yr=20,Yl=new Ag,_h=new Je;let $l=null,Kl=0,Zl=0,Jl=!1;const xr=(1+Math.sqrt(5))/2,$r=1/xr,vh=[new V(-xr,$r,0),new V(xr,$r,0),new V(-$r,0,xr),new V($r,0,xr),new V(0,xr,-$r),new V(0,xr,$r),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],kb=new V;class xh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=kb}=s;$l=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l,Kl,Zl),this._renderer.xr.enabled=Jl,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:vo,format:On,colorSpace:gs,depthBuffer:!1},r=Sh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bb(s)),this._blurMaterial=Hb(s,e,n)}return r}_compileMaterial(e){const n=new ln(this._lodPlanes[0],e);this._renderer.compile(n,Yl)}_sceneToCubeUV(e,n,i,r,s){const l=new gn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(_h),u.toneMapping=ji,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const x=new Ar({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),m=new ln(new Ir,x);let d=!1;const E=e.background;E?E.isColor&&(x.color.copy(E),e.background=null,d=!0):(x.color.copy(_h),d=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const P=this._cubeSize;ra(r,v*P,y>2?P:0,P,P),u.setRenderTarget(r),d&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=E}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ps||e.mapping===ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ln(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ra(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Yl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vh[(r-s-1)%vh.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new ln(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yr-1),x=s/_,m=isFinite(s)?1+Math.floor(f*x):yr;m>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const d=[];let E=0;for(let R=0;R<yr;++R){const F=R/x,b=Math.exp(-F*F/2);d.push(b),R===0?E+=b:R<m&&(E+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const v=this._sizeLods[r],P=3*v*(r>y-ns?r-y+ns:0),T=4*(this._cubeSize-v);ra(n,P,T,3*v,2*v),l.setRenderTarget(n),l.render(u,Yl)}}function Bb(t){const e=[],n=[],i=[];let r=t;const s=t-ns+1+gh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ns?l=gh[o-t+ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],p=6,_=6,x=3,m=2,d=1,E=new Float32Array(x*_*p),y=new Float32Array(m*_*p),v=new Float32Array(d*_*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,F=T>2?0:-1,b=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];E.set(b,x*_*T),y.set(h,m*_*T);const A=[T,T,T,T,T,T];v.set(A,d*_*T)}const P=new Vn;P.setAttribute("position",new ii(E,x)),P.setAttribute("uv",new ii(y,m)),P.setAttribute("faceIndex",new ii(v,d)),e.push(P),r>ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Sh(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ra(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Hb(t,e,n){const i=new Float32Array(yr),r=new V(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Eh(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function yh(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hc||l===zc,f=l===ps||l===ms;if(c||f){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new xh(t)),u=c?n.fromEquirectangular(a,u):n.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new xh(t)),u=c?n.fromEquirectangular(a):n.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Vb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&co("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Gb(t,e,n,i){const r={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(u){const h=u.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(u){const h=[],p=u.index,_=u.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let y=0,v=E.length;y<v;y+=3){const P=E[y+0],T=E[y+1],R=E[y+2];h.push(P,T,T,R,R,P)}}else if(_!==void 0){const E=_.array;x=_.version;for(let y=0,v=E.length/3-1;y<v;y+=3){const P=y+0,T=y+1,R=y+2;h.push(P,T,T,R,R,P)}}else return;const m=new(fg(h)?gg:mg)(h,1);m.version=x;const d=s.get(u);d&&e.remove(d),s.set(u,m)}function f(u){const h=s.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function Wb(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function u(h,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,_);let d=0;for(let E=0;E<_;E++)d+=p[E]*x[E];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function Xb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jb(t,e,n){const i=new WeakMap,r=new ht;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==u){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,P=1;v>e.maxTextureSize&&(P=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*P*4*u),R=new dg(T,v,P,u);R.type=bi,R.needsUpdate=!0;const F=y*4;for(let A=0;A<u;A++){const N=m[A],U=d[A],Y=E[A],ee=v*P*4*A;for(let ie=0;ie<N.count;ie++){const Q=ie*F;p===!0&&(r.fromBufferAttribute(N,ie),T[ee+Q+0]=r.x,T[ee+Q+1]=r.y,T[ee+Q+2]=r.z,T[ee+Q+3]=0),_===!0&&(r.fromBufferAttribute(U,ie),T[ee+Q+4]=r.x,T[ee+Q+5]=r.y,T[ee+Q+6]=r.z,T[ee+Q+7]=0),x===!0&&(r.fromBufferAttribute(Y,ie),T[ee+Q+8]=r.x,T[ee+Q+9]=r.y,T[ee+Q+10]=r.z,T[ee+Q+11]=Y.itemSize===4?r.w:1)}}h={count:u,texture:R,size:new We(v,P)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function qb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Cg=new tn,Mh=new yg(1,1),wg=new dg,Pg=new SE,Dg=new xg,bh=[],Th=[],Ah=new Float32Array(16),Rh=new Float32Array(9),Ch=new Float32Array(4);function Ss(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bh[r];if(s===void 0&&(s=new Float32Array(r),bh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Qa(t,e){let n=Th[e];n===void 0&&(n=new Int32Array(e),Th[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Yb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function Kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function Zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function Jb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;Ch.set(i),t.uniformMatrix2fv(this.addr,!1,Ch),Ft(n,i)}}function Qb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;Rh.set(i),t.uniformMatrix3fv(this.addr,!1,Rh),Ft(n,i)}}function eT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;Ah.set(i),t.uniformMatrix4fv(this.addr,!1,Ah),Ft(n,i)}}function tT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function sT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function cT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Mh.compareFunction=ug,s=Mh):s=Cg,n.setTexture2D(e||s,r)}function uT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Pg,r)}function fT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Dg,r)}function dT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||wg,r)}function hT(t){switch(t){case 5126:return Yb;case 35664:return $b;case 35665:return Kb;case 35666:return Zb;case 35674:return Jb;case 35675:return Qb;case 35676:return eT;case 5124:case 35670:return tT;case 35667:case 35671:return nT;case 35668:case 35672:return iT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return oT;case 36295:return aT;case 36296:return lT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return uT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return dT}}function pT(t,e){t.uniform1fv(this.addr,e)}function mT(t,e){const n=Ss(e,this.size,2);t.uniform2fv(this.addr,n)}function gT(t,e){const n=Ss(e,this.size,3);t.uniform3fv(this.addr,n)}function _T(t,e){const n=Ss(e,this.size,4);t.uniform4fv(this.addr,n)}function vT(t,e){const n=Ss(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xT(t,e){const n=Ss(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ST(t,e){const n=Ss(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ET(t,e){t.uniform1iv(this.addr,e)}function yT(t,e){t.uniform2iv(this.addr,e)}function MT(t,e){t.uniform3iv(this.addr,e)}function bT(t,e){t.uniform4iv(this.addr,e)}function TT(t,e){t.uniform1uiv(this.addr,e)}function AT(t,e){t.uniform2uiv(this.addr,e)}function RT(t,e){t.uniform3uiv(this.addr,e)}function CT(t,e){t.uniform4uiv(this.addr,e)}function wT(t,e,n){const i=this.cache,r=e.length,s=Qa(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Cg,s[o])}function PT(t,e,n){const i=this.cache,r=e.length,s=Qa(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Pg,s[o])}function DT(t,e,n){const i=this.cache,r=e.length,s=Qa(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Dg,s[o])}function LT(t,e,n){const i=this.cache,r=e.length,s=Qa(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||wg,s[o])}function IT(t){switch(t){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return _T;case 35674:return vT;case 35675:return xT;case 35676:return ST;case 5124:case 35670:return ET;case 35667:case 35671:return yT;case 35668:case 35672:return MT;case 35669:case 35673:return bT;case 5125:return TT;case 36294:return AT;case 36295:return RT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return LT}}class NT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hT(n.type)}}class UT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=IT(n.type)}}class OT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ql=/(\w+)(\])?(\[|\.)?/g;function wh(t,e){t.seq.push(e),t.map[e.id]=e}function FT(t,e,n){const i=t.name,r=i.length;for(Ql.lastIndex=0;;){const s=Ql.exec(i),o=Ql.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wh(n,c===void 0?new NT(a,t,e):new UT(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new OT(a),wh(n,u)),n=u}}}class _a{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);FT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Ph(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kT=37297;let BT=0;function HT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Dh=new je;function zT(t){tt._getMatrix(Dh,tt.workingColorSpace,t);const e=`mat3( ${Dh.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case wa:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Lh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+HT(t.getShaderSource(e),a)}else return s}function VT(t,e){const n=zT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function GT(t,e){let n;switch(e){case qS:n="Linear";break;case YS:n="Reinhard";break;case $S:n="Cineon";break;case KS:n="ACESFilmic";break;case JS:n="AgX";break;case QS:n="Neutral";break;case ZS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const sa=new V;function WT(){tt.getLuminanceCoefficients(sa);const t=sa.x.toFixed(4),e=sa.y.toFixed(4),n=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function jT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function qT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Os(t){return t!==""}function Ih(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YT=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(t){return t.replace(YT,KT)}const $T=new Map;function KT(t,e){let n=qe[e];if(n===void 0){const i=$T.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yu(n)}const ZT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(t){return t.replace(ZT,JT)}function JT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Oh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Jm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===AS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function eA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function nA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Qm:e="ENVMAP_BLENDING_MULTIPLY";break;case XS:e="ENVMAP_BLENDING_MIX";break;case jS:e="ENVMAP_BLENDING_ADD";break}return e}function iA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function rA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=QT(n),c=eA(n),f=tA(n),u=nA(n),h=iA(n),p=XT(n),_=jT(s),x=r.createProgram();let m,d,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Os).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Os).join(`
`),d.length>0&&(d+=`
`)):(m=[Oh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),d=[Oh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ji?"#define TONE_MAPPING":"",n.toneMapping!==ji?qe.tonemapping_pars_fragment:"",n.toneMapping!==ji?GT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,VT("linearToOutputTexel",n.outputColorSpace),WT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Os).join(`
`)),o=yu(o),o=Ih(o,n),o=Nh(o,n),a=yu(a),a=Ih(a,n),a=Nh(a,n),o=Uh(o),a=Uh(a),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=E+m+o,v=E+d+a,P=Ph(r,r.VERTEX_SHADER,y),T=Ph(r,r.FRAGMENT_SHADER,v);r.attachShader(x,P),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(N){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(x)||"",Y=r.getShaderInfoLog(P)||"",ee=r.getShaderInfoLog(T)||"",ie=U.trim(),Q=Y.trim(),oe=ee.trim();let q=!0,ce=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,T);else{const _e=Lh(r,P,"vertex"),ye=Lh(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ie+`
`+_e+`
`+ye)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(Q===""||oe==="")&&(ce=!1);ce&&(N.diagnostics={runnable:q,programLog:ie,vertexShader:{log:Q,prefix:m},fragmentShader:{log:oe,prefix:d}})}r.deleteShader(P),r.deleteShader(T),F=new _a(r,x),b=qT(r,x)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(x,kT)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}let sA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aA(e),n.set(e,i)),i}}class aA{constructor(e){this.id=sA++,this.code=e,this.usedTimes=0}}function lA(t,e,n,i,r,s,o){const a=new hg,l=new oA,c=new Set,f=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,A,N,U,Y){const ee=U.fog,ie=Y.geometry,Q=b.isMeshStandardMaterial?U.environment:null,oe=(b.isMeshStandardMaterial?n:e).get(b.envMap||Q),q=oe&&oe.mapping===Za?oe.image.height:null,ce=_[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const _e=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ye=_e!==void 0?_e.length:0;let Ue=0;ie.morphAttributes.position!==void 0&&(Ue=1),ie.morphAttributes.normal!==void 0&&(Ue=2),ie.morphAttributes.color!==void 0&&(Ue=3);let Ye,Qe,Xe,se;if(ce){const st=Jn[ce];Ye=st.vertexShader,Qe=st.fragmentShader}else Ye=b.vertexShader,Qe=b.fragmentShader,l.update(b),Xe=l.getVertexShaderID(b),se=l.getFragmentShaderID(b);const k=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),ae=Y.isInstancedMesh===!0,le=Y.isBatchedMesh===!0,be=!!b.map,I=!!b.matcap,S=!!oe,B=!!b.aoMap,$=!!b.lightMap,Z=!!b.bumpMap,G=!!b.normalMap,D=!!b.displacementMap,C=!!b.emissiveMap,O=!!b.metalnessMap,W=!!b.roughnessMap,de=b.anisotropy>0,M=b.clearcoat>0,g=b.dispersion>0,L=b.iridescence>0,z=b.sheen>0,J=b.transmission>0,K=de&&!!b.anisotropyMap,xe=M&&!!b.clearcoatMap,fe=M&&!!b.clearcoatNormalMap,Ae=M&&!!b.clearcoatRoughnessMap,Re=L&&!!b.iridescenceMap,he=L&&!!b.iridescenceThicknessMap,Me=z&&!!b.sheenColorMap,Le=z&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,Se=!!b.specularColorMap,ze=!!b.specularIntensityMap,H=J&&!!b.transmissionMap,ge=J&&!!b.thicknessMap,ve=!!b.gradientMap,De=!!b.alphaMap,pe=b.alphaTest>0,ue=!!b.alphaHash,Ne=!!b.extensions;let Ge=ji;b.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ge=t.toneMapping);const _t={shaderID:ce,shaderType:b.type,shaderName:b.name,vertexShader:Ye,fragmentShader:Qe,defines:b.defines,customVertexShaderID:Xe,customFragmentShaderID:se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:le,batchingColor:le&&Y._colorsTexture!==null,instancing:ae,instancingColor:ae&&Y.instanceColor!==null,instancingMorph:ae&&Y.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:k===null?t.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:gs,alphaToCoverage:!!b.alphaToCoverage,map:be,matcap:I,envMap:S,envMapMode:S&&oe.mapping,envMapCubeUVHeight:q,aoMap:B,lightMap:$,bumpMap:Z,normalMap:G,displacementMap:h&&D,emissiveMap:C,normalMapObjectSpace:G&&b.normalMapType===iE,normalMapTangentSpace:G&&b.normalMapType===cg,metalnessMap:O,roughnessMap:W,anisotropy:de,anisotropyMap:K,clearcoat:M,clearcoatMap:xe,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ae,dispersion:g,iridescence:L,iridescenceMap:Re,iridescenceThicknessMap:he,sheen:z,sheenColorMap:Me,sheenRoughnessMap:Le,specularMap:Ce,specularColorMap:Se,specularIntensityMap:ze,transmission:J,transmissionMap:H,thicknessMap:ge,gradientMap:ve,opaque:b.transparent===!1&&b.blending===cs&&b.alphaToCoverage===!1,alphaMap:De,alphaTest:pe,alphaHash:ue,combine:b.combine,mapUv:be&&x(b.map.channel),aoMapUv:B&&x(b.aoMap.channel),lightMapUv:$&&x(b.lightMap.channel),bumpMapUv:Z&&x(b.bumpMap.channel),normalMapUv:G&&x(b.normalMap.channel),displacementMapUv:D&&x(b.displacementMap.channel),emissiveMapUv:C&&x(b.emissiveMap.channel),metalnessMapUv:O&&x(b.metalnessMap.channel),roughnessMapUv:W&&x(b.roughnessMap.channel),anisotropyMapUv:K&&x(b.anisotropyMap.channel),clearcoatMapUv:xe&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(b.sheenRoughnessMap.channel),specularMapUv:Ce&&x(b.specularMap.channel),specularColorMapUv:Se&&x(b.specularColorMap.channel),specularIntensityMapUv:ze&&x(b.specularIntensityMap.channel),transmissionMapUv:H&&x(b.transmissionMap.channel),thicknessMapUv:ge&&x(b.thicknessMap.channel),alphaMapUv:De&&x(b.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(G||de),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ie.attributes.uv&&(be||De),fog:!!ee,useFog:b.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:re,skinning:Y.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ue,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ge,decodeVideoTexture:be&&b.map.isVideoTexture===!0&&tt.getTransfer(b.map.colorSpace)===ut,decodeVideoTextureEmissive:C&&b.emissiveMap.isVideoTexture===!0&&tt.getTransfer(b.emissiveMap.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ei,flipSided:b.side===cn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ne&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&b.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function d(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)A.push(N),A.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(E(A,b),y(A,b),A.push(t.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function E(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function y(b,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),A.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const A=_[b.type];let N;if(A){const U=Jn[A];N=IE.clone(U.uniforms)}else N=b.uniforms;return N}function P(b,A){let N;for(let U=0,Y=f.length;U<Y;U++){const ee=f[U];if(ee.cacheKey===A){N=ee,++N.usedTimes;break}}return N===void 0&&(N=new rA(t,A,b,s),f.push(N)),N}function T(b){if(--b.usedTimes===0){const A=f.indexOf(b);f[A]=f[f.length-1],f.pop(),b.destroy()}}function R(b){l.remove(b)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:P,releaseProgram:T,releaseShaderCache:R,programs:f,dispose:F}}function cA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function uA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Fh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function kh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u,h,p,_,x,m){let d=t[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:p,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},t[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function a(u,h,p,_,x,m){const d=o(u,h,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(u,h,p,_,x,m){const d=o(u,h,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(u,h){n.length>1&&n.sort(u||uA),i.length>1&&i.sort(h||Fh),r.length>1&&r.sort(h||Fh)}function f(){for(let u=e,h=t.length;u<h;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function fA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new kh,t.set(i,[o])):r>=s.length?(o=new kh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function dA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Je};break;case"SpotLight":n={position:new V,direction:new V,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function hA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pA=0;function mA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gA(t){const e=new dA,n=hA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new xt,o=new xt;function a(c){let f=0,u=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,E=0,y=0,v=0,P=0,T=0,R=0;c.sort(mA);for(let b=0,A=c.length;b<A;b++){const N=c[b],U=N.color,Y=N.intensity,ee=N.distance,ie=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=U.r*Y,u+=U.g*Y,h+=U.b*Y;else if(N.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(N.sh.coefficients[Q],Y);R++}else if(N.isDirectionalLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const oe=N.shadow,q=n.get(N);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=N.shadow.matrix,E++}i.directional[p]=Q,p++}else if(N.isSpotLight){const Q=e.get(N);Q.position.setFromMatrixPosition(N.matrixWorld),Q.color.copy(U).multiplyScalar(Y),Q.distance=ee,Q.coneCos=Math.cos(N.angle),Q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Q.decay=N.decay,i.spot[x]=Q;const oe=N.shadow;if(N.map&&(i.spotLightMap[P]=N.map,P++,oe.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[x]=oe.matrix,N.castShadow){const q=n.get(N);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=ie,v++}x++}else if(N.isRectAreaLight){const Q=e.get(N);Q.color.copy(U).multiplyScalar(Y),Q.halfWidth.set(N.width*.5,0,0),Q.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=Q,m++}else if(N.isPointLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),Q.distance=N.distance,Q.decay=N.decay,N.castShadow){const oe=N.shadow,q=n.get(N);q.shadowIntensity=oe.intensity,q.shadowBias=oe.bias,q.shadowNormalBias=oe.normalBias,q.shadowRadius=oe.radius,q.shadowMapSize=oe.mapSize,q.shadowCameraNear=oe.camera.near,q.shadowCameraFar=oe.camera.far,i.pointShadow[_]=q,i.pointShadowMap[_]=ie,i.pointShadowMatrix[_]=N.shadow.matrix,y++}i.point[_]=Q,_++}else if(N.isHemisphereLight){const Q=e.get(N);Q.skyColor.copy(N.color).multiplyScalar(Y),Q.groundColor.copy(N.groundColor).multiplyScalar(Y),i.hemi[d]=Q,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=h;const F=i.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==m||F.hemiLength!==d||F.numDirectionalShadows!==E||F.numPointShadows!==y||F.numSpotShadows!==v||F.numSpotMaps!==P||F.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,F.directionalLength=p,F.pointLength=_,F.spotLength=x,F.rectAreaLength=m,F.hemiLength=d,F.numDirectionalShadows=E,F.numPointShadows=y,F.numSpotShadows=v,F.numSpotMaps=P,F.numLightProbes=R,i.version=pA++)}function l(c,f){let u=0,h=0,p=0,_=0,x=0;const m=f.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const y=c[d];if(y.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Bh(t){const e=new gA(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function _A(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Bh(t),e.set(r,[a])):s>=o.length?(a=new Bh(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const vA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SA(t,e,n){let i=new cf;const r=new We,s=new We,o=new ht,a=new WE({depthPacking:nE}),l=new XE,c={},f=n.maxTextureSize,u={[Ki]:cn,[cn]:Ki,[Ei]:Ei},h=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:vA,fragmentShader:xA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Vn;_.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ln(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jm;let d=this.type;this.render=function(T,R,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=t.getRenderTarget(),A=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Xi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const Y=d!==gi&&this.type===gi,ee=d===gi&&this.type!==gi;for(let ie=0,Q=T.length;ie<Q;ie++){const oe=T[ie],q=oe.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ce=q.getFrameExtents();if(r.multiply(ce),s.copy(q.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ce.x),r.x=s.x*ce.x,q.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ce.y),r.y=s.y*ce.y,q.mapSize.y=s.y)),q.map===null||Y===!0||ee===!0){const ye=this.type!==gi?{minFilter:Bn,magFilter:Bn}:{};q.map!==null&&q.map.dispose(),q.map=new Pr(r.x,r.y,ye),q.map.texture.name=oe.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const _e=q.getViewportCount();for(let ye=0;ye<_e;ye++){const Ue=q.getViewport(ye);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),U.viewport(o),q.updateMatrices(oe,ye),i=q.getFrustum(),v(R,F,q.camera,oe,this.type)}q.isPointLightShadow!==!0&&this.type===gi&&E(q,F),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(b,A,N)};function E(T,R){const F=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Pr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,F,h,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,F,p,x,null)}function y(T,R,F,b){let A=null;const N=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)A=N;else if(A=F.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=A.uuid,Y=R.uuid;let ee=c[U];ee===void 0&&(ee={},c[U]=ee);let ie=ee[Y];ie===void 0&&(ie=A.clone(),ee[Y]=ie,R.addEventListener("dispose",P)),A=ie}if(A.visible=R.visible,A.wireframe=R.wireframe,b===gi?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:u[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,F.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const U=t.properties.get(A);U.light=F}return A}function v(T,R,F,b,A){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===gi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const Y=e.update(T),ee=T.material;if(Array.isArray(ee)){const ie=Y.groups;for(let Q=0,oe=ie.length;Q<oe;Q++){const q=ie[Q],ce=ee[q.materialIndex];if(ce&&ce.visible){const _e=y(T,ce,b,A);T.onBeforeShadow(t,T,R,F,Y,_e,q),t.renderBufferDirect(F,null,Y,_e,T,q),T.onAfterShadow(t,T,R,F,Y,_e,q)}}}else if(ee.visible){const ie=y(T,ee,b,A);T.onBeforeShadow(t,T,R,F,Y,ie,null),t.renderBufferDirect(F,null,Y,ie,T,null),T.onAfterShadow(t,T,R,F,Y,ie,null)}}const U=T.children;for(let Y=0,ee=U.length;Y<ee;Y++)v(U[Y],R,F,b,A)}function P(T){T.target.removeEventListener("dispose",P);for(const F in c){const b=c[F],A=T.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const EA={[Ic]:Nc,[Uc]:kc,[Oc]:Bc,[hs]:Fc,[Nc]:Ic,[kc]:Uc,[Bc]:Oc,[Fc]:hs};function yA(t,e){function n(){let H=!1;const ge=new ht;let ve=null;const De=new ht(0,0,0,0);return{setMask:function(pe){ve!==pe&&!H&&(t.colorMask(pe,pe,pe,pe),ve=pe)},setLocked:function(pe){H=pe},setClear:function(pe,ue,Ne,Ge,_t){_t===!0&&(pe*=Ge,ue*=Ge,Ne*=Ge),ge.set(pe,ue,Ne,Ge),De.equals(ge)===!1&&(t.clearColor(pe,ue,Ne,Ge),De.copy(ge))},reset:function(){H=!1,ve=null,De.set(-1,0,0,0)}}}function i(){let H=!1,ge=!1,ve=null,De=null,pe=null;return{setReversed:function(ue){if(ge!==ue){const Ne=e.get("EXT_clip_control");ue?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ge=ue;const Ge=pe;pe=null,this.setClear(Ge)}},getReversed:function(){return ge},setTest:function(ue){ue?k(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(ue){ve!==ue&&!H&&(t.depthMask(ue),ve=ue)},setFunc:function(ue){if(ge&&(ue=EA[ue]),De!==ue){switch(ue){case Ic:t.depthFunc(t.NEVER);break;case Nc:t.depthFunc(t.ALWAYS);break;case Uc:t.depthFunc(t.LESS);break;case hs:t.depthFunc(t.LEQUAL);break;case Oc:t.depthFunc(t.EQUAL);break;case Fc:t.depthFunc(t.GEQUAL);break;case kc:t.depthFunc(t.GREATER);break;case Bc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=ue}},setLocked:function(ue){H=ue},setClear:function(ue){pe!==ue&&(ge&&(ue=1-ue),t.clearDepth(ue),pe=ue)},reset:function(){H=!1,ve=null,De=null,pe=null,ge=!1}}}function r(){let H=!1,ge=null,ve=null,De=null,pe=null,ue=null,Ne=null,Ge=null,_t=null;return{setTest:function(st){H||(st?k(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(st){ge!==st&&!H&&(t.stencilMask(st),ge=st)},setFunc:function(st,oi,Gn){(ve!==st||De!==oi||pe!==Gn)&&(t.stencilFunc(st,oi,Gn),ve=st,De=oi,pe=Gn)},setOp:function(st,oi,Gn){(ue!==st||Ne!==oi||Ge!==Gn)&&(t.stencilOp(st,oi,Gn),ue=st,Ne=oi,Ge=Gn)},setLocked:function(st){H=st},setClear:function(st){_t!==st&&(t.clearStencil(st),_t=st)},reset:function(){H=!1,ge=null,ve=null,De=null,pe=null,ue=null,Ne=null,Ge=null,_t=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},u={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,E=null,y=null,v=null,P=null,T=null,R=new Je(0,0,0),F=0,b=!1,A=null,N=null,U=null,Y=null,ee=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,oe=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=oe>=1):q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=oe>=2);let ce=null,_e={};const ye=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),Ye=new ht().fromArray(ye),Qe=new ht().fromArray(Ue);function Xe(H,ge,ve,De){const pe=new Uint8Array(4),ue=t.createTexture();t.bindTexture(H,ue),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<ve;Ne++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ge+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return ue}const se={};se[t.TEXTURE_2D]=Xe(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=Xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=Xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=Xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(t.DEPTH_TEST),o.setFunc(hs),Z(!1),G(Od),k(t.CULL_FACE),B(Xi);function k(H){f[H]!==!0&&(t.enable(H),f[H]=!0)}function re(H){f[H]!==!1&&(t.disable(H),f[H]=!1)}function ae(H,ge){return u[H]!==ge?(t.bindFramebuffer(H,ge),u[H]=ge,H===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ge),H===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function le(H,ge){let ve=p,De=!1;if(H){ve=h.get(ge),ve===void 0&&(ve=[],h.set(ge,ve));const pe=H.textures;if(ve.length!==pe.length||ve[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Ne=pe.length;ue<Ne;ue++)ve[ue]=t.COLOR_ATTACHMENT0+ue;ve.length=pe.length,De=!0}}else ve[0]!==t.BACK&&(ve[0]=t.BACK,De=!0);De&&t.drawBuffers(ve)}function be(H){return _!==H?(t.useProgram(H),_=H,!0):!1}const I={[Er]:t.FUNC_ADD,[CS]:t.FUNC_SUBTRACT,[wS]:t.FUNC_REVERSE_SUBTRACT};I[PS]=t.MIN,I[DS]=t.MAX;const S={[LS]:t.ZERO,[IS]:t.ONE,[NS]:t.SRC_COLOR,[Dc]:t.SRC_ALPHA,[HS]:t.SRC_ALPHA_SATURATE,[kS]:t.DST_COLOR,[OS]:t.DST_ALPHA,[US]:t.ONE_MINUS_SRC_COLOR,[Lc]:t.ONE_MINUS_SRC_ALPHA,[BS]:t.ONE_MINUS_DST_COLOR,[FS]:t.ONE_MINUS_DST_ALPHA,[zS]:t.CONSTANT_COLOR,[VS]:t.ONE_MINUS_CONSTANT_COLOR,[GS]:t.CONSTANT_ALPHA,[WS]:t.ONE_MINUS_CONSTANT_ALPHA};function B(H,ge,ve,De,pe,ue,Ne,Ge,_t,st){if(H===Xi){x===!0&&(re(t.BLEND),x=!1);return}if(x===!1&&(k(t.BLEND),x=!0),H!==RS){if(H!==m||st!==b){if((d!==Er||v!==Er)&&(t.blendEquation(t.FUNC_ADD),d=Er,v=Er),st)switch(H){case cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pc:t.blendFunc(t.ONE,t.ONE);break;case Fd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case kd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pc:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Fd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}E=null,y=null,P=null,T=null,R.set(0,0,0),F=0,m=H,b=st}return}pe=pe||ge,ue=ue||ve,Ne=Ne||De,(ge!==d||pe!==v)&&(t.blendEquationSeparate(I[ge],I[pe]),d=ge,v=pe),(ve!==E||De!==y||ue!==P||Ne!==T)&&(t.blendFuncSeparate(S[ve],S[De],S[ue],S[Ne]),E=ve,y=De,P=ue,T=Ne),(Ge.equals(R)===!1||_t!==F)&&(t.blendColor(Ge.r,Ge.g,Ge.b,_t),R.copy(Ge),F=_t),m=H,b=!1}function $(H,ge){H.side===Ei?re(t.CULL_FACE):k(t.CULL_FACE);let ve=H.side===cn;ge&&(ve=!ve),Z(ve),H.blending===cs&&H.transparent===!1?B(Xi):B(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const De=H.stencilWrite;a.setTest(De),De&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),C(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?k(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Z(H){A!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),A=H)}function G(H){H!==bS?(k(t.CULL_FACE),H!==N&&(H===Od?t.cullFace(t.BACK):H===TS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),N=H}function D(H){H!==U&&(Q&&t.lineWidth(H),U=H)}function C(H,ge,ve){H?(k(t.POLYGON_OFFSET_FILL),(Y!==ge||ee!==ve)&&(t.polygonOffset(ge,ve),Y=ge,ee=ve)):re(t.POLYGON_OFFSET_FILL)}function O(H){H?k(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function W(H){H===void 0&&(H=t.TEXTURE0+ie-1),ce!==H&&(t.activeTexture(H),ce=H)}function de(H,ge,ve){ve===void 0&&(ce===null?ve=t.TEXTURE0+ie-1:ve=ce);let De=_e[ve];De===void 0&&(De={type:void 0,texture:void 0},_e[ve]=De),(De.type!==H||De.texture!==ge)&&(ce!==ve&&(t.activeTexture(ve),ce=ve),t.bindTexture(H,ge||se[H]),De.type=H,De.texture=ge)}function M(){const H=_e[ce];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function L(){try{t.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function z(){try{t.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function J(){try{t.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{t.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{t.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{t.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{t.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{t.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(H){Ye.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),Ye.copy(H))}function Le(H){Qe.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),Qe.copy(H))}function Ce(H,ge){let ve=c.get(ge);ve===void 0&&(ve=new WeakMap,c.set(ge,ve));let De=ve.get(H);De===void 0&&(De=t.getUniformBlockIndex(ge,H.name),ve.set(H,De))}function Se(H,ge){const De=c.get(ge).get(H);l.get(ge)!==De&&(t.uniformBlockBinding(ge,De,H.__bindingPointIndex),l.set(ge,De))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},ce=null,_e={},u={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,E=null,y=null,v=null,P=null,T=null,R=new Je(0,0,0),F=0,b=!1,A=null,N=null,U=null,Y=null,ee=null,Ye.set(0,0,t.canvas.width,t.canvas.height),Qe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:k,disable:re,bindFramebuffer:ae,drawBuffers:le,useProgram:be,setBlending:B,setMaterial:$,setFlipSided:Z,setCullFace:G,setLineWidth:D,setPolygonOffset:C,setScissorTest:O,activeTexture:W,bindTexture:de,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Re,texImage3D:he,updateUBOMapping:Ce,uniformBlockBinding:Se,texStorage2D:fe,texStorage3D:Ae,texSubImage2D:z,texSubImage3D:J,compressedTexSubImage2D:K,compressedTexSubImage3D:xe,scissor:Me,viewport:Le,reset:ze}}function MA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,f=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return p?new OffscreenCanvas(M,g):Da("canvas")}function x(M,g,L){let z=1;const J=de(M);if((J.width>L||J.height>L)&&(z=L/Math.max(J.width,J.height)),z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const K=Math.floor(z*J.width),xe=Math.floor(z*J.height);u===void 0&&(u=_(K,xe));const fe=g?_(K,xe):u;return fe.width=K,fe.height=xe,fe.getContext("2d").drawImage(M,0,0,K,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+xe+")."),fe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),M;return M}function m(M){return M.generateMipmaps}function d(M){t.generateMipmap(M)}function E(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(M,g,L,z,J=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let K=g;if(g===t.RED&&(L===t.FLOAT&&(K=t.R32F),L===t.HALF_FLOAT&&(K=t.R16F),L===t.UNSIGNED_BYTE&&(K=t.R8)),g===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(K=t.R8UI),L===t.UNSIGNED_SHORT&&(K=t.R16UI),L===t.UNSIGNED_INT&&(K=t.R32UI),L===t.BYTE&&(K=t.R8I),L===t.SHORT&&(K=t.R16I),L===t.INT&&(K=t.R32I)),g===t.RG&&(L===t.FLOAT&&(K=t.RG32F),L===t.HALF_FLOAT&&(K=t.RG16F),L===t.UNSIGNED_BYTE&&(K=t.RG8)),g===t.RG_INTEGER&&(L===t.UNSIGNED_BYTE&&(K=t.RG8UI),L===t.UNSIGNED_SHORT&&(K=t.RG16UI),L===t.UNSIGNED_INT&&(K=t.RG32UI),L===t.BYTE&&(K=t.RG8I),L===t.SHORT&&(K=t.RG16I),L===t.INT&&(K=t.RG32I)),g===t.RGB_INTEGER&&(L===t.UNSIGNED_BYTE&&(K=t.RGB8UI),L===t.UNSIGNED_SHORT&&(K=t.RGB16UI),L===t.UNSIGNED_INT&&(K=t.RGB32UI),L===t.BYTE&&(K=t.RGB8I),L===t.SHORT&&(K=t.RGB16I),L===t.INT&&(K=t.RGB32I)),g===t.RGBA_INTEGER&&(L===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),L===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),L===t.UNSIGNED_INT&&(K=t.RGBA32UI),L===t.BYTE&&(K=t.RGBA8I),L===t.SHORT&&(K=t.RGBA16I),L===t.INT&&(K=t.RGBA32I)),g===t.RGB&&(L===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),L===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),g===t.RGBA){const xe=J?wa:tt.getTransfer(z);L===t.FLOAT&&(K=t.RGBA32F),L===t.HALF_FLOAT&&(K=t.RGBA16F),L===t.UNSIGNED_BYTE&&(K=xe===ut?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(M,g){let L;return M?g===null||g===wr||g===oo?L=t.DEPTH24_STENCIL8:g===bi?L=t.DEPTH32F_STENCIL8:g===so&&(L=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===wr||g===oo?L=t.DEPTH_COMPONENT24:g===bi?L=t.DEPTH_COMPONENT32F:g===so&&(L=t.DEPTH_COMPONENT16),L}function P(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Bn&&M.minFilter!==Qn?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function T(M){const g=M.target;g.removeEventListener("dispose",T),F(g),g.isVideoTexture&&f.delete(g)}function R(M){const g=M.target;g.removeEventListener("dispose",R),A(g)}function F(M){const g=i.get(M);if(g.__webglInit===void 0)return;const L=M.source,z=h.get(L);if(z){const J=z[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(M),Object.keys(z).length===0&&h.delete(L)}i.remove(M)}function b(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const L=M.source,z=h.get(L);delete z[g.__cacheKey],o.memory.textures--}function A(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let J=0;J<g.__webglFramebuffer[z].length;J++)t.deleteFramebuffer(g.__webglFramebuffer[z][J]);else t.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)t.deleteFramebuffer(g.__webglFramebuffer[z]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=M.textures;for(let z=0,J=L.length;z<J;z++){const K=i.get(L[z]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(L[z])}i.remove(M)}let N=0;function U(){N=0}function Y(){const M=N;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),N+=1,M}function ee(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function ie(M,g){const L=i.get(M);if(M.isVideoTexture&&O(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&L.__version!==M.version){const z=M.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(L,M,g);return}}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+g)}function Q(M,g){const L=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){se(L,M,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+g)}function oe(M,g){const L=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){se(L,M,g);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+g)}function q(M,g){const L=i.get(M);if(M.version>0&&L.__version!==M.version){k(L,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+g)}const ce={[Vc]:t.REPEAT,[br]:t.CLAMP_TO_EDGE,[Gc]:t.MIRRORED_REPEAT},_e={[Bn]:t.NEAREST,[eE]:t.NEAREST_MIPMAP_NEAREST,[Lo]:t.NEAREST_MIPMAP_LINEAR,[Qn]:t.LINEAR,[xl]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},ye={[rE]:t.NEVER,[uE]:t.ALWAYS,[sE]:t.LESS,[ug]:t.LEQUAL,[oE]:t.EQUAL,[cE]:t.GEQUAL,[aE]:t.GREATER,[lE]:t.NOTEQUAL};function Ue(M,g){if(g.type===bi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Qn||g.magFilter===xl||g.magFilter===Lo||g.magFilter===Tr||g.minFilter===Qn||g.minFilter===xl||g.minFilter===Lo||g.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,ce[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,ce[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,ce[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,_e[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,_e[g.minFilter]),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,ye[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Bn||g.minFilter!==Lo&&g.minFilter!==Tr||g.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(M,g){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",T));const z=g.source;let J=h.get(z);J===void 0&&(J={},h.set(z,J));const K=ee(g);if(K!==M.__cacheKey){J[K]===void 0&&(J[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,L=!0),J[K].usedTimes++;const xe=J[M.__cacheKey];xe!==void 0&&(J[M.__cacheKey].usedTimes--,xe.usedTimes===0&&b(g)),M.__cacheKey=K,M.__webglTexture=J[K].texture}return L}function Qe(M,g,L){return Math.floor(Math.floor(M/L)/g)}function Xe(M,g,L,z){const K=M.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,L,z,g.data);else{K.sort((he,Me)=>he.start-Me.start);let xe=0;for(let he=1;he<K.length;he++){const Me=K[xe],Le=K[he],Ce=Me.start+Me.count,Se=Qe(Le.start,g.width,4),ze=Qe(Me.start,g.width,4);Le.start<=Ce+1&&Se===ze&&Qe(Le.start+Le.count-1,g.width,4)===Se?Me.count=Math.max(Me.count,Le.start+Le.count-Me.start):(++xe,K[xe]=Le)}K.length=xe+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Ae=t.getParameter(t.UNPACK_SKIP_PIXELS),Re=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let he=0,Me=K.length;he<Me;he++){const Le=K[he],Ce=Math.floor(Le.start/4),Se=Math.ceil(Le.count/4),ze=Ce%g.width,H=Math.floor(Ce/g.width),ge=Se,ve=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,H),n.texSubImage2D(t.TEXTURE_2D,0,ze,H,ge,ve,L,z,g.data)}M.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(t.UNPACK_SKIP_ROWS,Re)}}function se(M,g,L){let z=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=t.TEXTURE_3D);const J=Ye(M,g),K=g.source;n.bindTexture(z,M.__webglTexture,t.TEXTURE0+L);const xe=i.get(K);if(K.version!==xe.__version||J===!0){n.activeTexture(t.TEXTURE0+L);const fe=tt.getPrimaries(tt.workingColorSpace),Ae=g.colorSpace===zi?null:tt.getPrimaries(g.colorSpace),Re=g.colorSpace===zi||fe===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let he=x(g.image,!1,r.maxTextureSize);he=W(g,he);const Me=s.convert(g.format,g.colorSpace),Le=s.convert(g.type);let Ce=y(g.internalFormat,Me,Le,g.colorSpace,g.isVideoTexture);Ue(z,g);let Se;const ze=g.mipmaps,H=g.isVideoTexture!==!0,ge=xe.__version===void 0||J===!0,ve=K.dataReady,De=P(g,he);if(g.isDepthTexture)Ce=v(g.format===lo,g.type),ge&&(H?n.texStorage2D(t.TEXTURE_2D,1,Ce,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,Ce,he.width,he.height,0,Me,Le,null));else if(g.isDataTexture)if(ze.length>0){H&&ge&&n.texStorage2D(t.TEXTURE_2D,De,Ce,ze[0].width,ze[0].height);for(let pe=0,ue=ze.length;pe<ue;pe++)Se=ze[pe],H?ve&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Se.width,Se.height,Me,Le,Se.data):n.texImage2D(t.TEXTURE_2D,pe,Ce,Se.width,Se.height,0,Me,Le,Se.data);g.generateMipmaps=!1}else H?(ge&&n.texStorage2D(t.TEXTURE_2D,De,Ce,he.width,he.height),ve&&Xe(g,he,Me,Le)):n.texImage2D(t.TEXTURE_2D,0,Ce,he.width,he.height,0,Me,Le,he.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){H&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ce,ze[0].width,ze[0].height,he.depth);for(let pe=0,ue=ze.length;pe<ue;pe++)if(Se=ze[pe],g.format!==On)if(Me!==null)if(H){if(ve)if(g.layerUpdates.size>0){const Ne=mh(Se.width,Se.height,g.format,g.type);for(const Ge of g.layerUpdates){const _t=Se.data.subarray(Ge*Ne/Se.data.BYTES_PER_ELEMENT,(Ge+1)*Ne/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,Ge,Se.width,Se.height,1,Me,_t)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Se.width,Se.height,he.depth,Me,Se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,pe,Ce,Se.width,Se.height,he.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ve&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Se.width,Se.height,he.depth,Me,Le,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,pe,Ce,Se.width,Se.height,he.depth,0,Me,Le,Se.data)}else{H&&ge&&n.texStorage2D(t.TEXTURE_2D,De,Ce,ze[0].width,ze[0].height);for(let pe=0,ue=ze.length;pe<ue;pe++)Se=ze[pe],g.format!==On?Me!==null?H?ve&&n.compressedTexSubImage2D(t.TEXTURE_2D,pe,0,0,Se.width,Se.height,Me,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,pe,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ve&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Se.width,Se.height,Me,Le,Se.data):n.texImage2D(t.TEXTURE_2D,pe,Ce,Se.width,Se.height,0,Me,Le,Se.data)}else if(g.isDataArrayTexture)if(H){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ce,he.width,he.height,he.depth),ve)if(g.layerUpdates.size>0){const pe=mh(he.width,he.height,g.format,g.type);for(const ue of g.layerUpdates){const Ne=he.data.subarray(ue*pe/he.data.BYTES_PER_ELEMENT,(ue+1)*pe/he.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,he.width,he.height,1,Me,Le,Ne)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Me,Le,he.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,he.width,he.height,he.depth,0,Me,Le,he.data);else if(g.isData3DTexture)H?(ge&&n.texStorage3D(t.TEXTURE_3D,De,Ce,he.width,he.height,he.depth),ve&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Me,Le,he.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,he.width,he.height,he.depth,0,Me,Le,he.data);else if(g.isFramebufferTexture){if(ge)if(H)n.texStorage2D(t.TEXTURE_2D,De,Ce,he.width,he.height);else{let pe=he.width,ue=he.height;for(let Ne=0;Ne<De;Ne++)n.texImage2D(t.TEXTURE_2D,Ne,Ce,pe,ue,0,Me,Le,null),pe>>=1,ue>>=1}}else if(ze.length>0){if(H&&ge){const pe=de(ze[0]);n.texStorage2D(t.TEXTURE_2D,De,Ce,pe.width,pe.height)}for(let pe=0,ue=ze.length;pe<ue;pe++)Se=ze[pe],H?ve&&n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Me,Le,Se):n.texImage2D(t.TEXTURE_2D,pe,Ce,Me,Le,Se);g.generateMipmaps=!1}else if(H){if(ge){const pe=de(he);n.texStorage2D(t.TEXTURE_2D,De,Ce,pe.width,pe.height)}ve&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Le,he)}else n.texImage2D(t.TEXTURE_2D,0,Ce,Me,Le,he);m(g)&&d(z),xe.__version=K.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function k(M,g,L){if(g.image.length!==6)return;const z=Ye(M,g),J=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+L);const K=i.get(J);if(J.version!==K.__version||z===!0){n.activeTexture(t.TEXTURE0+L);const xe=tt.getPrimaries(tt.workingColorSpace),fe=g.colorSpace===zi?null:tt.getPrimaries(g.colorSpace),Ae=g.colorSpace===zi||xe===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Re=g.isCompressedTexture||g.image[0].isCompressedTexture,he=g.image[0]&&g.image[0].isDataTexture,Me=[];for(let ue=0;ue<6;ue++)!Re&&!he?Me[ue]=x(g.image[ue],!0,r.maxCubemapSize):Me[ue]=he?g.image[ue].image:g.image[ue],Me[ue]=W(g,Me[ue]);const Le=Me[0],Ce=s.convert(g.format,g.colorSpace),Se=s.convert(g.type),ze=y(g.internalFormat,Ce,Se,g.colorSpace),H=g.isVideoTexture!==!0,ge=K.__version===void 0||z===!0,ve=J.dataReady;let De=P(g,Le);Ue(t.TEXTURE_CUBE_MAP,g);let pe;if(Re){H&&ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,ze,Le.width,Le.height);for(let ue=0;ue<6;ue++){pe=Me[ue].mipmaps;for(let Ne=0;Ne<pe.length;Ne++){const Ge=pe[Ne];g.format!==On?Ce!==null?H?ve&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne,0,0,Ge.width,Ge.height,Ce,Ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne,ze,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne,0,0,Ge.width,Ge.height,Ce,Se,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne,ze,Ge.width,Ge.height,0,Ce,Se,Ge.data)}}}else{if(pe=g.mipmaps,H&&ge){pe.length>0&&De++;const ue=de(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,ze,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(he){H?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Me[ue].width,Me[ue].height,Ce,Se,Me[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,Me[ue].width,Me[ue].height,0,Ce,Se,Me[ue].data);for(let Ne=0;Ne<pe.length;Ne++){const _t=pe[Ne].image[ue].image;H?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne+1,0,0,_t.width,_t.height,Ce,Se,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne+1,ze,_t.width,_t.height,0,Ce,Se,_t.data)}}else{H?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ce,Se,Me[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,Ce,Se,Me[ue]);for(let Ne=0;Ne<pe.length;Ne++){const Ge=pe[Ne];H?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne+1,0,0,Ce,Se,Ge.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne+1,ze,Ce,Se,Ge.image[ue])}}}m(g)&&d(t.TEXTURE_CUBE_MAP),K.__version=J.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function re(M,g,L,z,J,K){const xe=s.convert(L.format,L.colorSpace),fe=s.convert(L.type),Ae=y(L.internalFormat,xe,fe,L.colorSpace),Re=i.get(g),he=i.get(L);if(he.__renderTarget=g,!Re.__hasExternalTextures){const Me=Math.max(1,g.width>>K),Le=Math.max(1,g.height>>K);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,K,Ae,Me,Le,g.depth,0,xe,fe,null):n.texImage2D(J,K,Ae,Me,Le,0,xe,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,z,J,he.__webglTexture,0,D(g)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,z,J,he.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(M,g,L){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){const z=g.depthTexture,J=z&&z.isDepthTexture?z.type:null,K=v(g.stencilBuffer,J),xe=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=D(g);C(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,K,g.width,g.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,K,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,K,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,M)}else{const z=g.textures;for(let J=0;J<z.length;J++){const K=z[J],xe=s.convert(K.format,K.colorSpace),fe=s.convert(K.type),Ae=y(K.internalFormat,xe,fe,K.colorSpace),Re=D(g);L&&C(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,Ae,g.width,g.height):C(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,Ae,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(g.depthTexture);z.__renderTarget=g,(!z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ie(g.depthTexture,0);const J=z.__webglTexture,K=D(g);if(g.depthTexture.format===ao)C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(g.depthTexture.format===lo)C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function be(M){const g=i.get(M),L=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const z=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",J)};z.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=z}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const z=M.texture.mipmaps;z&&z.length>0?le(g.__webglFramebuffer[0],M):le(g.__webglFramebuffer,M)}else if(L){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=t.createRenderbuffer(),ae(g.__webglDepthbuffer[z],M,!1);else{const J=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer[z];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,K)}}else{const z=M.texture.mipmaps;if(z&&z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),ae(g.__webglDepthbuffer,M,!1);else{const J=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(M,g,L){const z=i.get(M);g!==void 0&&re(z.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&be(M)}function S(M){const g=M.texture,L=i.get(M),z=i.get(g);M.addEventListener("dispose",R);const J=M.textures,K=M.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture()),z.__version=g.version,o.memory.textures++),K){L.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[fe]=[];for(let Ae=0;Ae<g.mipmaps.length;Ae++)L.__webglFramebuffer[fe][Ae]=t.createFramebuffer()}else L.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let fe=0;fe<g.mipmaps.length;fe++)L.__webglFramebuffer[fe]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(xe)for(let fe=0,Ae=J.length;fe<Ae;fe++){const Re=i.get(J[fe]);Re.__webglTexture===void 0&&(Re.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&C(M)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let fe=0;fe<J.length;fe++){const Ae=J[fe];L.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[fe]);const Re=s.convert(Ae.format,Ae.colorSpace),he=s.convert(Ae.type),Me=y(Ae.internalFormat,Re,he,Ae.colorSpace,M.isXRRenderTarget===!0),Le=D(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Me,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,L.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(L.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,g);for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ae=0;Ae<g.mipmaps.length;Ae++)re(L.__webglFramebuffer[fe][Ae],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae);else re(L.__webglFramebuffer[fe],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(g)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let fe=0,Ae=J.length;fe<Ae;fe++){const Re=J[fe],he=i.get(Re);let Me=t.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Me=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Me,he.__webglTexture),Ue(Me,Re),re(L.__webglFramebuffer,M,Re,t.COLOR_ATTACHMENT0+fe,Me,0),m(Re)&&d(Me)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(fe=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,z.__webglTexture),Ue(fe,g),g.mipmaps&&g.mipmaps.length>0)for(let Ae=0;Ae<g.mipmaps.length;Ae++)re(L.__webglFramebuffer[Ae],M,g,t.COLOR_ATTACHMENT0,fe,Ae);else re(L.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,fe,0);m(g)&&d(fe),n.unbindTexture()}M.depthBuffer&&be(M)}function B(M){const g=M.textures;for(let L=0,z=g.length;L<z;L++){const J=g[L];if(m(J)){const K=E(M),xe=i.get(J).__webglTexture;n.bindTexture(K,xe),d(K),n.unbindTexture()}}}const $=[],Z=[];function G(M){if(M.samples>0){if(C(M)===!1){const g=M.textures,L=M.width,z=M.height;let J=t.COLOR_BUFFER_BIT;const K=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(M),fe=g.length>1;if(fe)for(let Re=0;Re<g.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ae=M.texture.mipmaps;Ae&&Ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Re=0;Re<g.length;Re++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Re]);const he=i.get(g[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,L,z,0,0,L,z,J,t.NEAREST),l===!0&&($.length=0,Z.length=0,$.push(t.COLOR_ATTACHMENT0+Re),M.depthBuffer&&M.resolveDepthBuffer===!1&&($.push(K),Z.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,$))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Re=0;Re<g.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Re]);const he=i.get(g[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,he,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function D(M){return Math.min(r.maxSamples,M.samples)}function C(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function O(M){const g=o.render.frame;f.get(M)!==g&&(f.set(M,g),M.update())}function W(M,g){const L=M.colorSpace,z=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==gs&&L!==zi&&(tt.getTransfer(L)===ut?(z!==On||J!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function de(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=U,this.setTexture2D=ie,this.setTexture2DArray=Q,this.setTexture3D=oe,this.setTextureCube=q,this.rebindTextures=I,this.setupRenderTarget=S,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=re,this.useMultisampledRTT=C}function bA(t,e){function n(i,r=zi){let s;const o=tt.getTransfer(r);if(i===ri)return t.UNSIGNED_BYTE;if(i===nf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ig)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===rg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===tg)return t.BYTE;if(i===ng)return t.SHORT;if(i===so)return t.UNSIGNED_SHORT;if(i===tf)return t.INT;if(i===wr)return t.UNSIGNED_INT;if(i===bi)return t.FLOAT;if(i===vo)return t.HALF_FLOAT;if(i===sg)return t.ALPHA;if(i===og)return t.RGB;if(i===On)return t.RGBA;if(i===ao)return t.DEPTH_COMPONENT;if(i===lo)return t.DEPTH_STENCIL;if(i===ag)return t.RED;if(i===sf)return t.RED_INTEGER;if(i===lg)return t.RG;if(i===of)return t.RG_INTEGER;if(i===af)return t.RGBA_INTEGER;if(i===ha||i===pa||i===ma||i===ga)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wc||i===Xc||i===jc||i===qc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yc||i===$c||i===Kc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yc||i===$c)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zc||i===Jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===ou||i===au||i===lu||i===cu||i===uu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===eu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===iu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ru)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===su)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ou)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===au)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uu)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fu||i===du||i===hu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fu)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===du)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pu||i===mu||i===gu||i===_u)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===pu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_u)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const TA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Mg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ji({vertexShader:TA,fragmentShader:AA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ln(new yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CA extends Dr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new RA,d={},E=n.getContextAttributes();let y=null,v=null;const P=[],T=[],R=new We;let F=null;const b=new gn;b.viewport=new ht;const A=new gn;A.viewport=new ht;const N=[b,A],U=new YE;let Y=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let k=P[se];return k===void 0&&(k=new zl,P[se]=k),k.getTargetRaySpace()},this.getControllerGrip=function(se){let k=P[se];return k===void 0&&(k=new zl,P[se]=k),k.getGripSpace()},this.getHand=function(se){let k=P[se];return k===void 0&&(k=new zl,P[se]=k),k.getHandSpace()};function ie(se){const k=T.indexOf(se.inputSource);if(k===-1)return;const re=P[k];re!==void 0&&(re.update(se.inputSource,se.frame,c||o),re.dispatchEvent({type:se.type,data:se.inputSource}))}function Q(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",oe);for(let se=0;se<P.length;se++){const k=T[se];k!==null&&(T[se]=null,P[se].disconnect(k))}Y=null,ee=null,m.reset();for(const se in d)delete d[se];e.setRenderTarget(y),p=null,h=null,u=null,r=null,v=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,n)),u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",oe),E.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ae=null,le=null;E.depth&&(le=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=E.stencil?lo:ao,ae=E.stencil?oo:wr);const be={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Pr(h.textureWidth,h.textureHeight,{format:On,type:ri,depthTexture:new yg(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Pr(p.framebufferWidth,p.framebufferHeight,{format:On,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(se){for(let k=0;k<se.removed.length;k++){const re=se.removed[k],ae=T.indexOf(re);ae>=0&&(T[ae]=null,P[ae].disconnect(re))}for(let k=0;k<se.added.length;k++){const re=se.added[k];let ae=T.indexOf(re);if(ae===-1){for(let be=0;be<P.length;be++)if(be>=T.length){T.push(re),ae=be;break}else if(T[be]===null){T[be]=re,ae=be;break}if(ae===-1)break}const le=P[ae];le&&le.connect(re)}}const q=new V,ce=new V;function _e(se,k,re){q.setFromMatrixPosition(k.matrixWorld),ce.setFromMatrixPosition(re.matrixWorld);const ae=q.distanceTo(ce),le=k.projectionMatrix.elements,be=re.projectionMatrix.elements,I=le[14]/(le[10]-1),S=le[14]/(le[10]+1),B=(le[9]+1)/le[5],$=(le[9]-1)/le[5],Z=(le[8]-1)/le[0],G=(be[8]+1)/be[0],D=I*Z,C=I*G,O=ae/(-Z+G),W=O*-Z;if(k.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(W),se.translateZ(O),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),le[10]===-1)se.projectionMatrix.copy(k.projectionMatrix),se.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const de=I+O,M=S+O,g=D-W,L=C+(ae-W),z=B*S/M*de,J=$*S/M*de;se.projectionMatrix.makePerspective(g,L,z,J,de,M),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ye(se,k){k===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(k.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let k=se.near,re=se.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(re=m.depthFar)),U.near=A.near=b.near=k,U.far=A.far=b.far=re,(Y!==U.near||ee!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),Y=U.near,ee=U.far),U.layers.mask=se.layers.mask|6,b.layers.mask=U.layers.mask&3,A.layers.mask=U.layers.mask&5;const ae=se.parent,le=U.cameras;ye(U,ae);for(let be=0;be<le.length;be++)ye(le[be],ae);le.length===2?_e(U,b,A):U.projectionMatrix.copy(b.projectionMatrix),Ue(se,U,ae)};function Ue(se,k,re){re===null?se.matrix.copy(k.matrixWorld):(se.matrix.copy(re.matrixWorld),se.matrix.invert(),se.matrix.multiply(k.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(k.projectionMatrix),se.projectionMatrixInverse.copy(k.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=vu*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(se){return d[se]};let Ye=null;function Qe(se,k){if(f=k.getViewerPose(c||o),_=k,f!==null){const re=f.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ae=!1;re.length!==U.cameras.length&&(U.cameras.length=0,ae=!0);for(let S=0;S<re.length;S++){const B=re[S];let $=null;if(p!==null)$=p.getViewport(B);else{const G=u.getViewSubImage(h,B);$=G.viewport,S===0&&(e.setRenderTargetTextures(v,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(v))}let Z=N[S];Z===void 0&&(Z=new gn,Z.layers.enable(S),Z.viewport=new ht,N[S]=Z),Z.matrix.fromArray(B.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(B.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set($.x,$.y,$.width,$.height),S===0&&(U.matrix.copy(Z.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ae===!0&&U.cameras.push(Z)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const S=u.getDepthInformation(re[0]);S&&S.isValid&&S.texture&&m.init(S,r.renderState)}if(le&&le.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let S=0;S<re.length;S++){const B=re[S].camera;if(B){let $=d[B];$||($=new Mg,d[B]=$);const Z=u.getCameraImage(B);$.sourceTexture=Z}}}}for(let re=0;re<P.length;re++){const ae=T[re],le=P[re];ae!==null&&le!==void 0&&le.update(ae,k,c||o)}Ye&&Ye(se,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),_=null}const Xe=new Rg;Xe.setAnimationLoop(Qe),this.setAnimationLoop=function(se){Ye=se},this.dispose=function(){}}}const mr=new si,wA=new xt;function PA(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,_g(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===cn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===cn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d),y=E.envMap,v=E.envMapRotation;y&&(m.envMap.value=y,mr.copy(v),mr.x*=-1,mr.y*=-1,mr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(wA.makeRotationFromEuler(mr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=y*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const v=y.program;i.uniformBlockBinding(E,v)}function c(E,y){let v=r[E.id];v===void 0&&(_(E),v=f(E),r[E.id]=v,E.addEventListener("dispose",m));const P=y.program;i.updateUBOMapping(E,P);const T=e.render.frame;s[E.id]!==T&&(h(E),s[E.id]=T)}function f(E){const y=u();E.__bindingPointIndex=y;const v=t.createBuffer(),P=E.__size,T=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,P,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const y=r[E.id],v=E.uniforms,P=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let T=0,R=v.length;T<R;T++){const F=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,A=F.length;b<A;b++){const N=F[b];if(p(N,T,b,P)===!0){const U=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value];let ee=0;for(let ie=0;ie<Y.length;ie++){const Q=Y[ie],oe=x(Q);typeof Q=="number"||typeof Q=="boolean"?(N.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,U+ee,N.__data)):Q.isMatrix3?(N.__data[0]=Q.elements[0],N.__data[1]=Q.elements[1],N.__data[2]=Q.elements[2],N.__data[3]=0,N.__data[4]=Q.elements[3],N.__data[5]=Q.elements[4],N.__data[6]=Q.elements[5],N.__data[7]=0,N.__data[8]=Q.elements[6],N.__data[9]=Q.elements[7],N.__data[10]=Q.elements[8],N.__data[11]=0):(Q.toArray(N.__data,ee),ee+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(E,y,v,P){const T=E.value,R=y+"_"+v;if(P[R]===void 0)return typeof T=="number"||typeof T=="boolean"?P[R]=T:P[R]=T.clone(),!0;{const F=P[R];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return P[R]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function _(E){const y=E.uniforms;let v=0;const P=16;for(let R=0,F=y.length;R<F;R++){const b=Array.isArray(y[R])?y[R]:[y[R]];for(let A=0,N=b.length;A<N;A++){const U=b[A],Y=Array.isArray(U.value)?U.value:[U.value];for(let ee=0,ie=Y.length;ee<ie;ee++){const Q=Y[ee],oe=x(Q),q=v%P,ce=q%oe.boundary,_e=q+ce;v+=ce,_e!==0&&P-_e<oe.storage&&(v+=P-_e),U.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=oe.storage}}}const T=v%P;return T>0&&(v+=P-T),E.__size=v,E.__cache={},this}function x(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const E in r)t.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Lg{constructor(e={}){const{canvas:n=hE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const E=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let P=!1;this._outputColorSpace=An;let T=0,R=0,F=null,b=-1,A=null;const N=new ht,U=new ht;let Y=null;const ee=new Je(0);let ie=0,Q=n.width,oe=n.height,q=1,ce=null,_e=null;const ye=new ht(0,0,Q,oe),Ue=new ht(0,0,Q,oe);let Ye=!1;const Qe=new cf;let Xe=!1,se=!1;const k=new xt,re=new V,ae=new ht,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function I(){return F===null?q:1}let S=i;function B(w,X){return n.getContext(w,X)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ef}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",pe,!1),S===null){const X="webgl2";if(S=B(X,w),S===null)throw B(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $,Z,G,D,C,O,W,de,M,g,L,z,J,K,xe,fe,Ae,Re,he,Me,Le,Ce,Se,ze;function H(){$=new Vb(S),$.init(),Ce=new bA(S,$),Z=new Ub(S,$,e,Ce),G=new yA(S,$),Z.reversedDepthBuffer&&h&&G.buffers.depth.setReversed(!0),D=new Xb(S),C=new cA,O=new MA(S,$,G,C,Z,Ce,D),W=new Fb(v),de=new zb(v),M=new ZE(S),Se=new Ib(S,M),g=new Gb(S,M,D,Se),L=new qb(S,g,M,D),he=new jb(S,Z,O),fe=new Ob(C),z=new lA(v,W,de,$,Z,Se,fe),J=new PA(v,C),K=new fA,xe=new _A($),Re=new Lb(v,W,de,G,L,p,l),Ae=new SA(v,L,Z),ze=new DA(S,D,Z,G),Me=new Nb(S,$,D),Le=new Wb(S,$,D),D.programs=z.programs,v.capabilities=Z,v.extensions=$,v.properties=C,v.renderLists=K,v.shadowMap=Ae,v.state=G,v.info=D}H();const ge=new CA(v,S);this.xr=ge,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const w=$.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=$.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(Q,oe,!1))},this.getSize=function(w){return w.set(Q,oe)},this.setSize=function(w,X,te=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=w,oe=X,n.width=Math.floor(w*q),n.height=Math.floor(X*q),te===!0&&(n.style.width=w+"px",n.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(Q*q,oe*q).floor()},this.setDrawingBufferSize=function(w,X,te){Q=w,oe=X,q=te,n.width=Math.floor(w*te),n.height=Math.floor(X*te),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,X,te,ne){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,X,te,ne),G.viewport(N.copy(ye).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Ue)},this.setScissor=function(w,X,te,ne){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,X,te,ne),G.scissor(U.copy(Ue).multiplyScalar(q).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(w){G.setScissorTest(Ye=w)},this.setOpaqueSort=function(w){ce=w},this.setTransparentSort=function(w){_e=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,te=!0){let ne=0;if(w){let j=!1;if(F!==null){const me=F.texture.format;j=me===af||me===of||me===sf}if(j){const me=F.texture.type,Te=me===ri||me===wr||me===so||me===oo||me===nf||me===rf,Ie=Re.getClearColor(),Pe=Re.getClearAlpha(),ke=Ie.r,He=Ie.g,Oe=Ie.b;Te?(_[0]=ke,_[1]=He,_[2]=Oe,_[3]=Pe,S.clearBufferuiv(S.COLOR,0,_)):(x[0]=ke,x[1]=He,x[2]=Oe,x[3]=Pe,S.clearBufferiv(S.COLOR,0,x))}else ne|=S.COLOR_BUFFER_BIT}X&&(ne|=S.DEPTH_BUFFER_BIT),te&&(ne|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),Re.dispose(),K.dispose(),xe.dispose(),C.dispose(),W.dispose(),de.dispose(),L.dispose(),Se.dispose(),ze.dispose(),z.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Gn),ge.removeEventListener("sessionend",pf),rr.stop()};function ve(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=D.autoReset,X=Ae.enabled,te=Ae.autoUpdate,ne=Ae.needsUpdate,j=Ae.type;H(),D.autoReset=w,Ae.enabled=X,Ae.autoUpdate=te,Ae.needsUpdate=ne,Ae.type=j}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ue(w){const X=w.target;X.removeEventListener("dispose",ue),Ne(X)}function Ne(w){Ge(w),C.remove(w)}function Ge(w){const X=C.get(w).programs;X!==void 0&&(X.forEach(function(te){z.releaseProgram(te)}),w.isShaderMaterial&&z.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,te,ne,j,me){X===null&&(X=le);const Te=j.isMesh&&j.matrixWorld.determinant()<0,Ie=Yg(w,X,te,ne,j);G.setMaterial(ne,Te);let Pe=te.index,ke=1;if(ne.wireframe===!0){if(Pe=g.getWireframeAttribute(te),Pe===void 0)return;ke=2}const He=te.drawRange,Oe=te.attributes.position;let Ze=He.start*ke,ct=(He.start+He.count)*ke;me!==null&&(Ze=Math.max(Ze,me.start*ke),ct=Math.min(ct,(me.start+me.count)*ke)),Pe!==null?(Ze=Math.max(Ze,0),ct=Math.min(ct,Pe.count)):Oe!=null&&(Ze=Math.max(Ze,0),ct=Math.min(ct,Oe.count));const At=ct-Ze;if(At<0||At===1/0)return;Se.setup(j,ne,Ie,te,Pe);let Et,mt=Me;if(Pe!==null&&(Et=M.get(Pe),mt=Le,mt.setIndex(Et)),j.isMesh)ne.wireframe===!0?(G.setLineWidth(ne.wireframeLinewidth*I()),mt.setMode(S.LINES)):mt.setMode(S.TRIANGLES);else if(j.isLine){let Fe=ne.linewidth;Fe===void 0&&(Fe=1),G.setLineWidth(Fe*I()),j.isLineSegments?mt.setMode(S.LINES):j.isLineLoop?mt.setMode(S.LINE_LOOP):mt.setMode(S.LINE_STRIP)}else j.isPoints?mt.setMode(S.POINTS):j.isSprite&&mt.setMode(S.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)co("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if($.get("WEBGL_multi_draw"))mt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Fe=j._multiDrawStarts,bt=j._multiDrawCounts,et=j._multiDrawCount,fn=Pe?M.get(Pe).bytesPerElement:1,Nr=C.get(ne).currentProgram.getUniforms();for(let dn=0;dn<et;dn++)Nr.setValue(S,"_gl_DrawID",dn),mt.render(Fe[dn]/fn,bt[dn])}else if(j.isInstancedMesh)mt.renderInstances(Ze,At,j.count);else if(te.isInstancedBufferGeometry){const Fe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,bt=Math.min(te.instanceCount,Fe);mt.renderInstances(Ze,At,bt)}else mt.render(Ze,At)};function _t(w,X,te){w.transparent===!0&&w.side===Ei&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,bo(w,X,te),w.side=Ki,w.needsUpdate=!0,bo(w,X,te),w.side=Ei):bo(w,X,te)}this.compile=function(w,X,te=null){te===null&&(te=w),d=xe.get(te),d.init(X),y.push(d),te.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),w!==te&&w.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),d.setupLights();const ne=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const me=j.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const Ie=me[Te];_t(Ie,te,j),ne.add(Ie)}else _t(me,te,j),ne.add(me)}),d=y.pop(),ne},this.compileAsync=function(w,X,te=null){const ne=this.compile(w,X,te);return new Promise(j=>{function me(){if(ne.forEach(function(Te){C.get(Te).currentProgram.isReady()&&ne.delete(Te)}),ne.size===0){j(w);return}setTimeout(me,10)}$.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let st=null;function oi(w){st&&st(w)}function Gn(){rr.stop()}function pf(){rr.start()}const rr=new Rg;rr.setAnimationLoop(oi),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(w){st=w,ge.setAnimationLoop(w),w===null?rr.stop():rr.start()},ge.addEventListener("sessionstart",Gn),ge.addEventListener("sessionend",pf),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(X),X=ge.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,X,F),d=xe.get(w,y.length),d.init(X),y.push(d),k.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Qe.setFromProjectionMatrix(k,ei,X.reversedDepth),se=this.localClippingEnabled,Xe=fe.init(this.clippingPlanes,se),m=K.get(w,E.length),m.init(),E.push(m),ge.enabled===!0&&ge.isPresenting===!0){const me=v.xr.getDepthSensingMesh();me!==null&&nl(me,X,-1/0,v.sortObjects)}nl(w,X,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ce,_e),be=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,be&&Re.addToRenderList(m,w),this.info.render.frame++,Xe===!0&&fe.beginShadows();const te=d.state.shadowsArray;Ae.render(te,w,X),Xe===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=m.opaque,j=m.transmissive;if(d.setupLights(),X.isArrayCamera){const me=X.cameras;if(j.length>0)for(let Te=0,Ie=me.length;Te<Ie;Te++){const Pe=me[Te];gf(ne,j,w,Pe)}be&&Re.render(w);for(let Te=0,Ie=me.length;Te<Ie;Te++){const Pe=me[Te];mf(m,w,Pe,Pe.viewport)}}else j.length>0&&gf(ne,j,w,X),be&&Re.render(w),mf(m,w,X);F!==null&&R===0&&(O.updateMultisampleRenderTarget(F),O.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(v,w,X),Se.resetDefaultState(),b=-1,A=null,y.pop(),y.length>0?(d=y[y.length-1],Xe===!0&&fe.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function nl(w,X,te,ne){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Qe.intersectsSprite(w)){ne&&ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(k);const Te=L.update(w),Ie=w.material;Ie.visible&&m.push(w,Te,Ie,te,ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Qe.intersectsObject(w))){const Te=L.update(w),Ie=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ae.copy(w.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ae.copy(Te.boundingSphere.center)),ae.applyMatrix4(w.matrixWorld).applyMatrix4(k)),Array.isArray(Ie)){const Pe=Te.groups;for(let ke=0,He=Pe.length;ke<He;ke++){const Oe=Pe[ke],Ze=Ie[Oe.materialIndex];Ze&&Ze.visible&&m.push(w,Te,Ze,te,ae.z,Oe)}}else Ie.visible&&m.push(w,Te,Ie,te,ae.z,null)}}const me=w.children;for(let Te=0,Ie=me.length;Te<Ie;Te++)nl(me[Te],X,te,ne)}function mf(w,X,te,ne){const j=w.opaque,me=w.transmissive,Te=w.transparent;d.setupLightsView(te),Xe===!0&&fe.setGlobalState(v.clippingPlanes,te),ne&&G.viewport(N.copy(ne)),j.length>0&&Mo(j,X,te),me.length>0&&Mo(me,X,te),Te.length>0&&Mo(Te,X,te),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function gf(w,X,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ne.id]===void 0&&(d.state.transmissionRenderTarget[ne.id]=new Pr(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?vo:ri,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const me=d.state.transmissionRenderTarget[ne.id],Te=ne.viewport||N;me.setSize(Te.z*v.transmissionResolutionScale,Te.w*v.transmissionResolutionScale);const Ie=v.getRenderTarget(),Pe=v.getActiveCubeFace(),ke=v.getActiveMipmapLevel();v.setRenderTarget(me),v.getClearColor(ee),ie=v.getClearAlpha(),ie<1&&v.setClearColor(16777215,.5),v.clear(),be&&Re.render(te);const He=v.toneMapping;v.toneMapping=ji;const Oe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),d.setupLightsView(ne),Xe===!0&&fe.setGlobalState(v.clippingPlanes,ne),Mo(w,te,ne),O.updateMultisampleRenderTarget(me),O.updateRenderTargetMipmap(me),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ct=0,At=X.length;ct<At;ct++){const Et=X[ct],mt=Et.object,Fe=Et.geometry,bt=Et.material,et=Et.group;if(bt.side===Ei&&mt.layers.test(ne.layers)){const fn=bt.side;bt.side=cn,bt.needsUpdate=!0,_f(mt,te,ne,Fe,bt,et),bt.side=fn,bt.needsUpdate=!0,Ze=!0}}Ze===!0&&(O.updateMultisampleRenderTarget(me),O.updateRenderTargetMipmap(me))}v.setRenderTarget(Ie,Pe,ke),v.setClearColor(ee,ie),Oe!==void 0&&(ne.viewport=Oe),v.toneMapping=He}function Mo(w,X,te){const ne=X.isScene===!0?X.overrideMaterial:null;for(let j=0,me=w.length;j<me;j++){const Te=w[j],Ie=Te.object,Pe=Te.geometry,ke=Te.group;let He=Te.material;He.allowOverride===!0&&ne!==null&&(He=ne),Ie.layers.test(te.layers)&&_f(Ie,X,te,Pe,He,ke)}}function _f(w,X,te,ne,j,me){w.onBeforeRender(v,X,te,ne,j,me),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(v,X,te,ne,w,me),j.transparent===!0&&j.side===Ei&&j.forceSinglePass===!1?(j.side=cn,j.needsUpdate=!0,v.renderBufferDirect(te,X,ne,j,w,me),j.side=Ki,j.needsUpdate=!0,v.renderBufferDirect(te,X,ne,j,w,me),j.side=Ei):v.renderBufferDirect(te,X,ne,j,w,me),w.onAfterRender(v,X,te,ne,j,me)}function bo(w,X,te){X.isScene!==!0&&(X=le);const ne=C.get(w),j=d.state.lights,me=d.state.shadowsArray,Te=j.state.version,Ie=z.getParameters(w,j.state,me,X,te),Pe=z.getProgramCacheKey(Ie);let ke=ne.programs;ne.environment=w.isMeshStandardMaterial?X.environment:null,ne.fog=X.fog,ne.envMap=(w.isMeshStandardMaterial?de:W).get(w.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",ue),ke=new Map,ne.programs=ke);let He=ke.get(Pe);if(He!==void 0){if(ne.currentProgram===He&&ne.lightsStateVersion===Te)return xf(w,Ie),He}else Ie.uniforms=z.getUniforms(w),w.onBeforeCompile(Ie,v),He=z.acquireProgram(Ie,Pe),ke.set(Pe,He),ne.uniforms=Ie.uniforms;const Oe=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=fe.uniform),xf(w,Ie),ne.needsLights=Kg(w),ne.lightsStateVersion=Te,ne.needsLights&&(Oe.ambientLightColor.value=j.state.ambient,Oe.lightProbe.value=j.state.probe,Oe.directionalLights.value=j.state.directional,Oe.directionalLightShadows.value=j.state.directionalShadow,Oe.spotLights.value=j.state.spot,Oe.spotLightShadows.value=j.state.spotShadow,Oe.rectAreaLights.value=j.state.rectArea,Oe.ltc_1.value=j.state.rectAreaLTC1,Oe.ltc_2.value=j.state.rectAreaLTC2,Oe.pointLights.value=j.state.point,Oe.pointLightShadows.value=j.state.pointShadow,Oe.hemisphereLights.value=j.state.hemi,Oe.directionalShadowMap.value=j.state.directionalShadowMap,Oe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Oe.spotShadowMap.value=j.state.spotShadowMap,Oe.spotLightMatrix.value=j.state.spotLightMatrix,Oe.spotLightMap.value=j.state.spotLightMap,Oe.pointShadowMap.value=j.state.pointShadowMap,Oe.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=He,ne.uniformsList=null,He}function vf(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=_a.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function xf(w,X){const te=C.get(w);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Yg(w,X,te,ne,j){X.isScene!==!0&&(X=le),O.resetTextureUnits();const me=X.fog,Te=ne.isMeshStandardMaterial?X.environment:null,Ie=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:gs,Pe=(ne.isMeshStandardMaterial?de:W).get(ne.envMap||Te),ke=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,He=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Oe=!!te.morphAttributes.position,Ze=!!te.morphAttributes.normal,ct=!!te.morphAttributes.color;let At=ji;ne.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(At=v.toneMapping);const Et=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,mt=Et!==void 0?Et.length:0,Fe=C.get(ne),bt=d.state.lights;if(Xe===!0&&(se===!0||w!==A)){const $t=w===A&&ne.id===b;fe.setState(ne,w,$t)}let et=!1;ne.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==bt.state.version||Fe.outputColorSpace!==Ie||j.isBatchedMesh&&Fe.batching===!1||!j.isBatchedMesh&&Fe.batching===!0||j.isBatchedMesh&&Fe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Fe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Fe.instancing===!1||!j.isInstancedMesh&&Fe.instancing===!0||j.isSkinnedMesh&&Fe.skinning===!1||!j.isSkinnedMesh&&Fe.skinning===!0||j.isInstancedMesh&&Fe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Fe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Fe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Fe.instancingMorph===!1&&j.morphTexture!==null||Fe.envMap!==Pe||ne.fog===!0&&Fe.fog!==me||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==fe.numPlanes||Fe.numIntersection!==fe.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==He||Fe.morphTargets!==Oe||Fe.morphNormals!==Ze||Fe.morphColors!==ct||Fe.toneMapping!==At||Fe.morphTargetsCount!==mt)&&(et=!0):(et=!0,Fe.__version=ne.version);let fn=Fe.currentProgram;et===!0&&(fn=bo(ne,X,j));let Nr=!1,dn=!1,Es=!1;const Tt=fn.getUniforms(),yn=Fe.uniforms;if(G.useProgram(fn.program)&&(Nr=!0,dn=!0,Es=!0),ne.id!==b&&(b=ne.id,dn=!0),Nr||A!==w){G.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Tt.setValue(S,"projectionMatrix",w.projectionMatrix),Tt.setValue(S,"viewMatrix",w.matrixWorldInverse);const nn=Tt.map.cameraPosition;nn!==void 0&&nn.setValue(S,re.setFromMatrixPosition(w.matrixWorld)),Z.logarithmicDepthBuffer&&Tt.setValue(S,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Tt.setValue(S,"isOrthographic",w.isOrthographicCamera===!0),A!==w&&(A=w,dn=!0,Es=!0)}if(j.isSkinnedMesh){Tt.setOptional(S,j,"bindMatrix"),Tt.setOptional(S,j,"bindMatrixInverse");const $t=j.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Tt.setValue(S,"boneTexture",$t.boneTexture,O))}j.isBatchedMesh&&(Tt.setOptional(S,j,"batchingTexture"),Tt.setValue(S,"batchingTexture",j._matricesTexture,O),Tt.setOptional(S,j,"batchingIdTexture"),Tt.setValue(S,"batchingIdTexture",j._indirectTexture,O),Tt.setOptional(S,j,"batchingColorTexture"),j._colorsTexture!==null&&Tt.setValue(S,"batchingColorTexture",j._colorsTexture,O));const Mn=te.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&he.update(j,te,fn),(dn||Fe.receiveShadow!==j.receiveShadow)&&(Fe.receiveShadow=j.receiveShadow,Tt.setValue(S,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(yn.envMap.value=Pe,yn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&X.environment!==null&&(yn.envMapIntensity.value=X.environmentIntensity),dn&&(Tt.setValue(S,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&$g(yn,Es),me&&ne.fog===!0&&J.refreshFogUniforms(yn,me),J.refreshMaterialUniforms(yn,ne,q,oe,d.state.transmissionRenderTarget[w.id]),_a.upload(S,vf(Fe),yn,O)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(_a.upload(S,vf(Fe),yn,O),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Tt.setValue(S,"center",j.center),Tt.setValue(S,"modelViewMatrix",j.modelViewMatrix),Tt.setValue(S,"normalMatrix",j.normalMatrix),Tt.setValue(S,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const $t=ne.uniformsGroups;for(let nn=0,il=$t.length;nn<il;nn++){const sr=$t[nn];ze.update(sr,fn),ze.bind(sr,fn)}}return fn}function $g(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Kg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,X,te){const ne=C.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),C.get(w.texture).__webglTexture=X,C.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:te,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const te=C.get(w);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0};const Zg=S.createFramebuffer();this.setRenderTarget=function(w,X=0,te=0){F=w,T=X,R=te;let ne=!0,j=null,me=!1,Te=!1;if(w){const Pe=C.get(w);if(Pe.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(S.FRAMEBUFFER,null),ne=!1;else if(Pe.__webglFramebuffer===void 0)O.setupRenderTarget(w);else if(Pe.__hasExternalTextures)O.rebindTextures(w,C.get(w.texture).__webglTexture,C.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Oe=w.depthTexture;if(Pe.__boundDepthTexture!==Oe){if(Oe!==null&&C.has(Oe)&&(w.width!==Oe.image.width||w.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(w)}}const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Te=!0);const He=C.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[X])?j=He[X][te]:j=He[X],me=!0):w.samples>0&&O.useMultisampledRTT(w)===!1?j=C.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?j=He[te]:j=He,N.copy(w.viewport),U.copy(w.scissor),Y=w.scissorTest}else N.copy(ye).multiplyScalar(q).floor(),U.copy(Ue).multiplyScalar(q).floor(),Y=Ye;if(te!==0&&(j=Zg),G.bindFramebuffer(S.FRAMEBUFFER,j)&&ne&&G.drawBuffers(w,j),G.viewport(N),G.scissor(U),G.setScissorTest(Y),me){const Pe=C.get(w.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pe.__webglTexture,te)}else if(Te){const Pe=X;for(let ke=0;ke<w.textures.length;ke++){const He=C.get(w.textures[ke]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+ke,He.__webglTexture,te,Pe)}}else if(w!==null&&te!==0){const Pe=C.get(w.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Pe.__webglTexture,te)}b=-1},this.readRenderTargetPixels=function(w,X,te,ne,j,me,Te,Ie=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=C.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){G.bindFramebuffer(S.FRAMEBUFFER,Pe);try{const ke=w.textures[Ie],He=ke.format,Oe=ke.type;if(!Z.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-ne&&te>=0&&te<=w.height-j&&(w.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ie),S.readPixels(X,te,ne,j,Ce.convert(He),Ce.convert(Oe),me))}finally{const ke=F!==null?C.get(F).__webglFramebuffer:null;G.bindFramebuffer(S.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(w,X,te,ne,j,me,Te,Ie=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=C.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe)if(X>=0&&X<=w.width-ne&&te>=0&&te<=w.height-j){G.bindFramebuffer(S.FRAMEBUFFER,Pe);const ke=w.textures[Ie],He=ke.format,Oe=ke.type;if(!Z.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ze),S.bufferData(S.PIXEL_PACK_BUFFER,me.byteLength,S.STREAM_READ),w.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ie),S.readPixels(X,te,ne,j,Ce.convert(He),Ce.convert(Oe),0);const ct=F!==null?C.get(F).__webglFramebuffer:null;G.bindFramebuffer(S.FRAMEBUFFER,ct);const At=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await pE(S,At,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Ze),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,me),S.deleteBuffer(Ze),S.deleteSync(At),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,te=0){const ne=Math.pow(2,-te),j=Math.floor(w.image.width*ne),me=Math.floor(w.image.height*ne),Te=X!==null?X.x:0,Ie=X!==null?X.y:0;O.setTexture2D(w,0),S.copyTexSubImage2D(S.TEXTURE_2D,te,0,0,Te,Ie,j,me),G.unbindTexture()};const Jg=S.createFramebuffer(),Qg=S.createFramebuffer();this.copyTextureToTexture=function(w,X,te=null,ne=null,j=0,me=null){me===null&&(j!==0?(co("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=j,j=0):me=0);let Te,Ie,Pe,ke,He,Oe,Ze,ct,At;const Et=w.isCompressedTexture?w.mipmaps[me]:w.image;if(te!==null)Te=te.max.x-te.min.x,Ie=te.max.y-te.min.y,Pe=te.isBox3?te.max.z-te.min.z:1,ke=te.min.x,He=te.min.y,Oe=te.isBox3?te.min.z:0;else{const Mn=Math.pow(2,-j);Te=Math.floor(Et.width*Mn),Ie=Math.floor(Et.height*Mn),w.isDataArrayTexture?Pe=Et.depth:w.isData3DTexture?Pe=Math.floor(Et.depth*Mn):Pe=1,ke=0,He=0,Oe=0}ne!==null?(Ze=ne.x,ct=ne.y,At=ne.z):(Ze=0,ct=0,At=0);const mt=Ce.convert(X.format),Fe=Ce.convert(X.type);let bt;X.isData3DTexture?(O.setTexture3D(X,0),bt=S.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(O.setTexture2DArray(X,0),bt=S.TEXTURE_2D_ARRAY):(O.setTexture2D(X,0),bt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,X.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,X.unpackAlignment);const et=S.getParameter(S.UNPACK_ROW_LENGTH),fn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Nr=S.getParameter(S.UNPACK_SKIP_PIXELS),dn=S.getParameter(S.UNPACK_SKIP_ROWS),Es=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Et.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Et.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,ke),S.pixelStorei(S.UNPACK_SKIP_ROWS,He),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Oe);const Tt=w.isDataArrayTexture||w.isData3DTexture,yn=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const Mn=C.get(w),$t=C.get(X),nn=C.get(Mn.__renderTarget),il=C.get($t.__renderTarget);G.bindFramebuffer(S.READ_FRAMEBUFFER,nn.__webglFramebuffer),G.bindFramebuffer(S.DRAW_FRAMEBUFFER,il.__webglFramebuffer);for(let sr=0;sr<Pe;sr++)Tt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,C.get(w).__webglTexture,j,Oe+sr),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,C.get(X).__webglTexture,me,At+sr)),S.blitFramebuffer(ke,He,Te,Ie,Ze,ct,Te,Ie,S.DEPTH_BUFFER_BIT,S.NEAREST);G.bindFramebuffer(S.READ_FRAMEBUFFER,null),G.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||C.has(w)){const Mn=C.get(w),$t=C.get(X);G.bindFramebuffer(S.READ_FRAMEBUFFER,Jg),G.bindFramebuffer(S.DRAW_FRAMEBUFFER,Qg);for(let nn=0;nn<Pe;nn++)Tt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Mn.__webglTexture,j,Oe+nn):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Mn.__webglTexture,j),yn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,$t.__webglTexture,me,At+nn):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,$t.__webglTexture,me),j!==0?S.blitFramebuffer(ke,He,Te,Ie,Ze,ct,Te,Ie,S.COLOR_BUFFER_BIT,S.NEAREST):yn?S.copyTexSubImage3D(bt,me,Ze,ct,At+nn,ke,He,Te,Ie):S.copyTexSubImage2D(bt,me,Ze,ct,ke,He,Te,Ie);G.bindFramebuffer(S.READ_FRAMEBUFFER,null),G.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else yn?w.isDataTexture||w.isData3DTexture?S.texSubImage3D(bt,me,Ze,ct,At,Te,Ie,Pe,mt,Fe,Et.data):X.isCompressedArrayTexture?S.compressedTexSubImage3D(bt,me,Ze,ct,At,Te,Ie,Pe,mt,Et.data):S.texSubImage3D(bt,me,Ze,ct,At,Te,Ie,Pe,mt,Fe,Et):w.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,me,Ze,ct,Te,Ie,mt,Fe,Et.data):w.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,me,Ze,ct,Et.width,Et.height,mt,Et.data):S.texSubImage2D(S.TEXTURE_2D,me,Ze,ct,Te,Ie,mt,Fe,Et);S.pixelStorei(S.UNPACK_ROW_LENGTH,et),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,fn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Nr),S.pixelStorei(S.UNPACK_SKIP_ROWS,dn),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Es),me===0&&X.generateMipmaps&&S.generateMipmap(bt),G.unbindTexture()},this.initRenderTarget=function(w){C.get(w).__webglFramebuffer===void 0&&O.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?O.setTextureCube(w,0):w.isData3DTexture?O.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?O.setTexture2DArray(w,0):O.setTexture2D(w,0),G.unbindTexture()},this.resetState=function(){T=0,R=0,F=null,G.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const Hh={type:"change"},ff={type:"start"},Ig={type:"end"},oa=new Ja,zh=new Bi,LA=Math.cos(70*dE.DEG2RAD),Lt=new V,sn=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ec=1e-6;class IA extends $E{constructor(e,n=null){super(e,n),this.state=dt.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Zi,this._lastTargetPosition=new V,this._quat=new Zi().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ph,this._sphericalDelta=new ph,this._scale=1,this._panOffset=new V,this._rotateStart=new We,this._rotateEnd=new We,this._rotateDelta=new We,this._panStart=new We,this._panEnd=new We,this._panDelta=new We,this._dollyStart=new We,this._dollyEnd=new We,this._dollyDelta=new We,this._dollyDirection=new V,this._mouse=new We,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UA.bind(this),this._onPointerDown=NA.bind(this),this._onPointerUp=OA.bind(this),this._onContextMenu=GA.bind(this),this._onMouseWheel=BA.bind(this),this._onKeyDown=HA.bind(this),this._onTouchStart=zA.bind(this),this._onTouchMove=VA.bind(this),this._onMouseDown=FA.bind(this),this._onMouseMove=kA.bind(this),this._interceptControlDown=WA.bind(this),this._interceptControlUp=XA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hh),this.update(),this.state=dt.NONE}update(e=null){const n=this.object.position;Lt.copy(n).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),r<-Math.PI?r+=sn:r>Math.PI&&(r-=sn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Lt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(oa.origin.copy(this.object.position),oa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oa.direction))<LA?this.object.lookAt(this.target):(zh.setFromNormalAndCoplanarPoint(this.object.up,this.target),oa.intersectPlane(zh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ec||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ec||this._lastTargetPosition.distanceToSquared(this.target)>ec?(this.dispatchEvent(Hh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Lt.setFromMatrixColumn(n,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,n){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(n,1):(Lt.setFromMatrixColumn(n,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Lt.copy(r).sub(this.target);let s=Lt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new We,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function NA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function UA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function OA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ig),this.state=dt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function FA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=dt.DOLLY;break;case ls.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=dt.ROTATE}break;case ls.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(ff)}function kA(t){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function BA(t){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(t.preventDefault(),this.dispatchEvent(ff),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Ig))}function HA(t){this.enabled!==!1&&this._handleKeyDown(t)}function zA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=dt.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=dt.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(ff)}function VA(t){switch(this._trackPointer(t),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=dt.NONE}}function GA(t){this.enabled!==!1&&t.preventDefault()}function WA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function XA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Vh=new V,jA=new Zi,Gh=new V;class qA extends Vt{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(n){n.element instanceof n.element.ownerDocument.defaultView.Element&&n.element.parentNode!==null&&n.element.remove()})})}copy(e,n){return super.copy(e,n),this.element=e.element.cloneNode(!0),this}}const qn=new xt,YA=new xt;class $A{constructor(e={}){const n=this;let i,r,s,o;const a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const f=document.createElement("div");f.style.transformStyle="preserve-3d",c.appendChild(f),this.getSize=function(){return{width:i,height:r}},this.render=function(m,d){const E=d.projectionMatrix.elements[5]*o;d.view&&d.view.enabled?(c.style.transform=`translate( ${-d.view.offsetX*(i/d.view.width)}px, ${-d.view.offsetY*(r/d.view.height)}px )`,c.style.transform+=`scale( ${d.view.fullWidth/d.view.width}, ${d.view.fullHeight/d.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),d.parent===null&&d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld();let y,v;d.isOrthographicCamera&&(y=-(d.right+d.left)/2,v=(d.top+d.bottom)/2);const P=d.view&&d.view.enabled?d.view.height/d.view.fullHeight:1,T=d.isOrthographicCamera?`scale( ${P} )scale(`+E+")translate("+u(y)+"px,"+u(v)+"px)"+h(d.matrixWorldInverse):`scale( ${P} )translateZ(`+E+"px)"+h(d.matrixWorldInverse),F=(d.isPerspectiveCamera?"perspective("+E+"px) ":"")+T+"translate("+s+"px,"+o+"px)";a.camera.style!==F&&(f.style.transform=F,a.camera.style=F),x(m,m,d)},this.setSize=function(m,d){i=m,r=d,s=i/2,o=r/2,l.style.width=m+"px",l.style.height=d+"px",c.style.width=m+"px",c.style.height=d+"px",f.style.width=m+"px",f.style.height=d+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function h(m){const d=m.elements;return"matrix3d("+u(d[0])+","+u(-d[1])+","+u(d[2])+","+u(d[3])+","+u(d[4])+","+u(-d[5])+","+u(d[6])+","+u(d[7])+","+u(d[8])+","+u(-d[9])+","+u(d[10])+","+u(d[11])+","+u(d[12])+","+u(-d[13])+","+u(d[14])+","+u(d[15])+")"}function p(m){const d=m.elements;return"translate(-50%,-50%)"+("matrix3d("+u(d[0])+","+u(d[1])+","+u(d[2])+","+u(d[3])+","+u(-d[4])+","+u(-d[5])+","+u(-d[6])+","+u(-d[7])+","+u(d[8])+","+u(d[9])+","+u(d[10])+","+u(d[11])+","+u(d[12])+","+u(d[13])+","+u(d[14])+","+u(d[15])+")")}function _(m){m.isCSS3DObject&&(m.element.style.display="none");for(let d=0,E=m.children.length;d<E;d++)_(m.children[d])}function x(m,d,E,y){if(m.visible===!1){_(m);return}if(m.isCSS3DObject){const v=m.layers.test(E.layers)===!0,P=m.element;if(P.style.display=v===!0?"":"none",v===!0){m.onBeforeRender(n,d,E);let T;m.isCSS3DSprite?(qn.copy(E.matrixWorldInverse),qn.transpose(),m.rotation2D!==0&&qn.multiply(YA.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(Vh,jA,Gh),qn.setPosition(Vh),qn.scale(Gh),qn.elements[3]=0,qn.elements[7]=0,qn.elements[11]=0,qn.elements[15]=1,T=p(qn)):T=p(m.matrixWorld);const R=a.objects.get(m);if(R===void 0||R.style!==T){P.style.transform=T;const F={style:T};a.objects.set(m,F)}P.parentNode!==f&&f.appendChild(P),m.onAfterRender(n,d,E)}}for(let v=0,P=m.children.length;v<P;v++)x(m.children[v],d,E)}}}const Ng=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},tc=30,Is=1,KA={__name:"Website3DView",setup(t){const e=Ys(null);let n,i,r,s;po(()=>u());function o(h){for(const p of h.childNodes)if(p.nodeType===Node.TEXT_NODE&&p.textContent.trim().length>0)return!0;return!1}const a=new Set(["STRONG","B","EM","I","U","SPAN","SMALL","CODE","MARK","KBD","SAMP","ABBR","SUB","SUP"]);function l(h){if(h.children.length===0)return!0;for(const p of h.children){const _=p.tagName?.toUpperCase?.()||"";if(["IMG","SVG","CANVAS","VIDEO","PICTURE","SOURCE"].includes(_))return!1;if(a.has(_))continue;const x=window.getComputedStyle(p).display;if(!["inline","inline-block","inline-flex"].includes(x))return!1}return!0}function c(h=document.body,p=0){const _=[],x=new Set(["STRONG","B","EM","I","U","SPAN","SMALL","CODE","MARK","KBD","SAMP","ABBR","SUB","SUP"]),m=T=>{const R=window.getComputedStyle(T).display;return R==="inline"||R==="inline-block"||R==="inline-flex"},d=T=>{const R=T.tagName?.toUpperCase?.()||"";return x.has(R)?!0:m(T)},E=T=>Array.from(T.childNodes).some(R=>R.nodeType===Node.TEXT_NODE&&R.textContent.trim().length>0),y=T=>{const R=Array.from(T.children);if(R.length===0)return!0;for(const F of R){const b=F.tagName?.toUpperCase?.()||"";if(["IMG","SVG","CANVAS","VIDEO","PICTURE","SOURCE"].includes(b)||!d(F))return!1}return!0},v=T=>{const R=Array.from(T.childNodes);let F=!1;for(const b of R)if(b.nodeType===Node.ELEMENT_NODE){const A=b.tagName?.toUpperCase?.();(A==="STRONG"||A==="B")&&(F=!0)}else if(b.nodeType===Node.TEXT_NODE&&b.textContent.trim().length>0&&F)return!0;return!1},P=(T,R)=>{if(T.nodeType!==1||T.closest(".exclude-3d"))return;const F=T.tagName.toUpperCase(),A=window.getComputedStyle(T).position,N=m(T),U=["IMG","SVG","CANVAS","VIDEO","PICTURE","SOURCE"].includes(F);if(A==="fixed")return;if(F==="A"&&T.querySelector("svg")){_.push({el:T,z:R});return}if(F==="SPAN"&&T.parentElement?.tagName?.toUpperCase()==="A")return;if(F==="SVG"){_.push({el:T,z:R});return}const Y=E(T)&&y(T)&&!N,ee=!N&&v(T);if(Y||ee){_.push({el:T,z:R});return}(!N||U)&&_.push({el:T,z:R});const ie=R+tc;for(const Q of T.children)P(Q,ie)};for(const T of h.children)P(T,p);return _}function f(h){const p=h.style.animation,_=h.style.transition;h.style.animation="none",h.style.transition="none";let x;if(h instanceof SVGElement){x=h.cloneNode(!0),x.style.position="absolute",x.style.transform="",x.removeAttribute("transform");const m=h.getBoundingClientRect();x.getAttribute("width")||x.setAttribute("width",m.width||0),x.getAttribute("height")||x.setAttribute("height",m.height||0);const d=["opacity","fill","stroke","stroke-width","mix-blend-mode","filter"],E=window.getComputedStyle(h);d.forEach(y=>{const v=E.getPropertyValue(y);v&&x.style.setProperty(y,v,E.getPropertyPriority(y))}),x instanceof SVGElement||(x.className=h.className||"")}else{x=h.cloneNode(!1),x.style.position="absolute",x.style.transform="";const m=window.getComputedStyle(h);for(let v=0;v<m.length;v++){const P=m[v];x.style.setProperty(P,m.getPropertyValue(P),m.getPropertyPriority(P))}const d=(h.tagName||"").toUpperCase(),E=["P","H1","H2","H3","H4","H5","H6","A","BUTTON","LABEL","LI"].includes(d),y=o(h)&&l(h);(E||y||h.childElementCount===0)&&(x.innerHTML=h.innerHTML),x instanceof SVGElement||(x.className=h.className||"")}return h.style.animation=p,h.style.transition=_,x}function u(){const h=e.value;if(!h)return;n=new Eg;const p=document.body.getBoundingClientRect();let _;i=new gn(45,h.clientWidth/h.clientHeight,1,5e3),i.position.set(0,0,1500),i.lookAt(0,0,0),_=new Lg({alpha:!0}),_.setSize(h.clientWidth,h.clientHeight),_.domElement.style.position="absolute",_.domElement.style.top="0",h.appendChild(_.domElement),r=new $A,r.setSize(h.clientWidth,h.clientHeight),r.domElement.style.opacity="0",h.appendChild(r.domElement),s=new IA(i,r.domElement),s.enableDamping=!0,s.dampingFactor=.1,c().forEach(({el:d,z:E})=>{const y=f(d),v=d.getBoundingClientRect(),P=(v.left+v.width/2-(p.left+p.width/2))*Is,T=-(v.top+v.height/2-(p.top+p.height/2))*Is,R=new qA(y);R.position.set(P,T,E),R.scale.set(Is,Is,Is),n.add(R);let b=window.getComputedStyle(d).backgroundColor,A=new Je(10066329),N=!0;if(b&&b!=="rgba(0, 0, 0, 0)"&&b!=="transparent"){const ce=b.match(/rgba?\((\d+), (\d+), (\d+)(?:, ([0-9.]+))?\)/);ce&&(A=new Je(parseInt(ce[1])/255,parseInt(ce[2])/255,parseInt(ce[3])/255),N=ce[4]!==void 0?parseFloat(ce[4])<1:!1)}const U=.05,Y=new Ir(v.width,v.height,tc),ee=new Ar({color:A,opacity:N?.2:.9,transparent:!0,blending:Pc,depthWrite:!0}),ie=new ln(Y,ee);ie.position.set(P,T,E-tc/2-U),n.add(ie);const Q=new Eu(Y),oe=new La({color:3900150,opacity:.15,transparent:!0}),q=new xu(Q,oe);q.position.copy(ie.position),n.add(q)}),r.domElement.style.transition="opacity 0.3s",r.domElement.style.opacity="1";const m=()=>{requestAnimationFrame(m),s.update(),_.render(n,i),r.render(n,i)};m()}return(h,p)=>(_n(),Wi("div",null,[yt("div",{ref_key:"container",ref:e,class:"absolute inset-0 z-50 bg-darkBg"},null,512)]))}},ZA=Ng(KA,[["__scopeId","data-v-d6171968"]]),JA={__name:"Website3DButton",setup(t){const e=rv(),n=Ys(!1),i=Ys(null);let r,s,o,a,l,c;function f(){n.value=!n.value}return po(()=>{const u=i.value;if(!u)return;s=new Eg,o=new Ag(-1,1,1,-1,.1,10),o.position.z=2,r=new Lg({antialias:!0,alpha:!0}),r.setClearColor(0,0),r.setSize(u.clientWidth,u.clientHeight),u.appendChild(r.domElement);const p=(()=>{const ce=document.createElement("canvas"),_e=ce.getContext("2d");ce.width=ce.height=256;const ye=_e.createLinearGradient(0,0,256,256);return ye.addColorStop(0,"rgba(0,255,255,0.12)"),ye.addColorStop(1,"rgba(0,200,255,0.08)"),_e.fillStyle=ye,_e.fillRect(0,0,256,256),new Wl(ce)})();a=new ts;const _=new Ir(.8,.8,.8),x=new Ar({map:p,transparent:!0,opacity:.85}),m=new ln(_,x),d=new Eu(_),E=new xu(d,new La({color:65535,opacity:.6,transparent:!0}));m.add(E);const y=document.createElement("canvas");y.width=y.height=128;const v=y.getContext("2d");v.font="bold 64px sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillStyle="rgba(0,255,255,0.8)",v.fillText("3D",64,64);const P=new Wl(y),T=new Ar({map:P,transparent:!0}),R=new ln(_,Array(6).fill(T));a.add(m),a.add(R),s.add(a),l=new ts;const F=new yo(.8,.8),b=new Ar({map:p,transparent:!0,opacity:.85}),A=new ln(F,b),N=document.createElement("canvas");N.width=N.height=128;const U=N.getContext("2d");U.font="bold 64px sans-serif",U.textAlign="center",U.textBaseline="middle",U.fillStyle="rgba(0,255,255,0.8)",U.fillText("2D",64,64);const Y=new Wl(N),ee=new Ar({map:Y,transparent:!0}),ie=new ln(F,ee);ie.position.z=.01;const Q=new Eu(F),oe=new xu(Q,new La({color:65535,opacity:.6,transparent:!0}));oe.position.z=.02,l.add(A),l.add(ie),l.add(oe),l.visible=!1,s.add(l);const q=()=>{n.value||(a.rotation.x+=.002,a.rotation.y+=.003),r.render(s,o),c=requestAnimationFrame(q)};q(),Gi(n,ce=>{a.visible=!ce,l.visible=ce})}),Hu(()=>cancelAnimationFrame(c)),(u,h)=>(_n(),Wi(an,null,[yt("div",xm({ref_key:"btnContainer",ref:i},Nt(e),{class:"fixed bottom-8 right-24 z-[1000] w-24 h-24 cursor-pointer",onClick:f}),null,16),n.value?(_n(),Js(ZA,{key:0,onClose:h[0]||(h[0]=p=>n.value=!1)})):vm("",!0)],64))}},QA=Ng(JA,[["__scopeId","data-v-e5a8d9ee"]]);/*!
 * vue-router v4.6.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Qr=typeof document<"u";function Ug(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function eR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ug(t.default)}const ot=Object.assign;function nc(t,e){const n={};for(const i in e){const r=e[i];n[i]=zn(r)?r.map(t):t(r)}return n}const Xs=()=>{},zn=Array.isArray;function Wh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const Og=/#/g,tR=/&/g,nR=/\//g,iR=/=/g,rR=/\?/g,Fg=/\+/g,sR=/%5B/g,oR=/%5D/g,kg=/%5E/g,aR=/%60/g,Bg=/%7B/g,lR=/%7C/g,Hg=/%7D/g,cR=/%20/g;function df(t){return t==null?"":encodeURI(""+t).replace(lR,"|").replace(sR,"[").replace(oR,"]")}function uR(t){return df(t).replace(Bg,"{").replace(Hg,"}").replace(kg,"^")}function Mu(t){return df(t).replace(Fg,"%2B").replace(cR,"+").replace(Og,"%23").replace(tR,"%26").replace(aR,"`").replace(Bg,"{").replace(Hg,"}").replace(kg,"^")}function fR(t){return Mu(t).replace(iR,"%3D")}function dR(t){return df(t).replace(Og,"%23").replace(rR,"%3F")}function hR(t){return dR(t).replace(nR,"%2F")}function uo(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const pR=/\/$/,mR=t=>t.replace(pR,"");function ic(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=t(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=xR(i??e,n),{fullPath:i+s+o,path:i,query:r,hash:uo(o)}}function gR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _R(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&vs(e.matched[i],n.matched[r])&&zg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vR(t[n],e[n]))return!1;return!0}function vR(t,e){return zn(t)?jh(t,e):zn(e)?jh(e,t):t===e}function jh(t,e){return zn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function xR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Oi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let bu=(function(t){return t.pop="pop",t.push="push",t})({}),rc=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function SR(t){if(!t)if(Qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mR(t)}const ER=/^[^#]+#/;function yR(t,e){return t.replace(ER,"#")+e}function MR(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const el=()=>({left:window.scrollX,top:window.scrollY});function bR(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=MR(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qh(t,e){return(history.state?history.state.position-e:-1)+t}const Tu=new Map;function TR(t,e){Tu.set(t,e)}function AR(t){const e=Tu.get(t);return Tu.delete(t),e}function RR(t){return typeof t=="string"||t&&typeof t=="object"}function Vg(t){return typeof t=="string"||typeof t=="symbol"}let Rt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Gg=Symbol("");Rt.MATCHER_NOT_FOUND+"",Rt.NAVIGATION_GUARD_REDIRECT+"",Rt.NAVIGATION_ABORTED+"",Rt.NAVIGATION_CANCELLED+"",Rt.NAVIGATION_DUPLICATED+"";function xs(t,e){return ot(new Error,{type:t,[Gg]:!0},e)}function mi(t,e){return t instanceof Error&&Gg in t&&(e==null||!!(t.type&e))}const CR=["params","query","hash"];function wR(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of CR)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function PR(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(Fg," "),s=r.indexOf("="),o=uo(s<0?r:r.slice(0,s)),a=s<0?null:uo(r.slice(s+1));if(o in e){let l=e[o];zn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function Yh(t){let e="";for(let n in t){const i=t[n];if(n=fR(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(zn(i)?i.map(r=>r&&Mu(r)):[i&&Mu(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function DR(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=zn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const LR=Symbol(""),$h=Symbol(""),tl=Symbol(""),Wg=Symbol(""),Au=Symbol("");function Ns(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Hi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(xs(Rt.NAVIGATION_ABORTED,{from:n,to:e})):h instanceof Error?l(h):RR(h)?l(xs(Rt.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},f=s(()=>t.call(i&&i.instances[r],e,n,c));let u=Promise.resolve(f);t.length<3&&(u=u.then(c)),u.catch(h=>l(h))})}function sc(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Ug(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Hi(c,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const u=eR(f)?f.default:f;o.mods[a]=f,o.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&Hi(h,n,i,o,a,r)()}))}}return s}function IR(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>vs(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>vs(c,l))||r.push(l))}return[n,i,r]}/*!
 * vue-router v4.6.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let NR=()=>location.protocol+"//"+location.host;function Xg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Xh(a,"")}return Xh(n,t)+i+r}function UR(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=Xg(t,location),_=n.value,x=e.value;let m=0;if(h){if(n.value=p,e.value=h,o&&o===_){o=null;return}m=x?h.position-x.position:0}else i(p);r.forEach(d=>{d(n.value,_,{delta:m,type:bu.pop,direction:m?m>0?rc.forward:rc.back:rc.unknown})})};function l(){o=n.value}function c(h){r.push(h);const p=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(p),p}function f(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ot({},h.state,{scroll:el()}),"")}}function u(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:c,destroy:u}}function Kh(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?el():null}}function OR(t){const{history:e,location:n}=window,i={value:Xg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,f){const u=t.indexOf("#"),h=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+l:NR()+t+l;try{e[f?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[f?"replace":"assign"](h)}}function o(l,c){s(l,ot({},e.state,Kh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const f=ot({},r.value,e.state,{forward:l,scroll:el()});s(f.current,f,!0),s(l,ot({},Kh(i.value,l,null),{position:f.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function FR(t){t=SR(t);const e=OR(t),n=UR(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ot({location:"",base:t,go:i,createHref:yR.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Rr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var It=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(It||{});const kR={type:Rr.Static,value:""},BR=/[a-zA-Z0-9_]/;function HR(t){if(!t)return[[]];if(t==="/")return[[kR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=It.Static,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",f="";function u(){c&&(n===It.Static?s.push({type:Rr.Static,value:c}):n===It.Param||n===It.ParamRegExp||n===It.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Rr.Param,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==It.ParamRegExp){i=n,n=It.EscapeNext;continue}switch(n){case It.Static:l==="/"?(c&&u(),o()):l===":"?(u(),n=It.Param):h();break;case It.EscapeNext:h(),n=i;break;case It.Param:l==="("?n=It.ParamRegExp:BR.test(l)?h():(u(),n=It.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case It.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=It.ParamRegExpEnd:f+=l;break;case It.ParamRegExpEnd:u(),n=It.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===It.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),r}const Zh="[^/]+?",zR={sensitive:!1,strict:!1,start:!0,end:!0};var Jt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Jt||{});const VR=/[.+*?^${}()[\]/\\]/g;function GR(t,e){const n=ot({},zR,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const f=c.length?[]:[Jt.Root];n.strict&&!c.length&&(r+="/");for(let u=0;u<c.length;u++){const h=c[u];let p=Jt.Segment+(n.sensitive?Jt.BonusCaseSensitive:0);if(h.type===Rr.Static)u||(r+="/"),r+=h.value.replace(VR,"\\$&"),p+=Jt.Static;else if(h.type===Rr.Param){const{value:_,repeatable:x,optional:m,regexp:d}=h;s.push({name:_,repeatable:x,optional:m});const E=d||Zh;if(E!==Zh){p+=Jt.BonusCustomRegExp;try{`${E}`}catch(v){throw new Error(`Invalid custom RegExp for param "${_}" (${E}): `+v.message)}}let y=x?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;u||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,p+=Jt.Dynamic,m&&(p+=Jt.BonusOptional),x&&(p+=Jt.BonusRepeatable),E===".*"&&(p+=Jt.BonusWildcard)}f.push(p)}i.push(f)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Jt.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const f=c.match(o),u={};if(!f)return null;for(let h=1;h<f.length;h++){const p=f[h]||"",_=s[h-1];u[_.name]=p&&_.repeatable?p.split("/"):p}return u}function l(c){let f="",u=!1;for(const h of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const p of h)if(p.type===Rr.Static)f+=p.value;else if(p.type===Rr.Param){const{value:_,repeatable:x,optional:m}=p,d=_ in c?c[_]:"";if(zn(d)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const E=zn(d)?d.join("/"):d;if(!E)if(m)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);f+=E}}return f||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function WR(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Jt.Static+Jt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Jt.Static+Jt.Segment?1:-1:0}function jg(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=WR(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Jh(i))return 1;if(Jh(r))return-1}return r.length-i.length}function Jh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const XR={strict:!1,end:!0,sensitive:!1};function jR(t,e,n){const i=GR(HR(t.path),n),r=ot(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function qR(t,e){const n=[],i=new Map;e=Wh(XR,e);function r(u){return i.get(u)}function s(u,h,p){const _=!p,x=ep(u);x.aliasOf=p&&p.record;const m=Wh(e,u),d=[x];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of v)d.push(ep(ot({},x,{components:p?p.record.components:x.components,path:P,aliasOf:p?p.record:x})))}let E,y;for(const v of d){const{path:P}=v;if(h&&P[0]!=="/"){const T=h.record.path,R=T[T.length-1]==="/"?"":"/";v.path=h.record.path+(P&&R+P)}if(E=jR(v,h,m),p?p.alias.push(E):(y=y||E,y!==E&&y.alias.push(E),_&&u.name&&!tp(E)&&o(u.name)),qg(E)&&l(E),x.children){const T=x.children;for(let R=0;R<T.length;R++)s(T[R],E,p&&p.children[R])}p=p||E}return y?()=>{o(y)}:Xs}function o(u){if(Vg(u)){const h=i.get(u);h&&(i.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){const h=KR(u,n);n.splice(h,0,u),u.record.name&&!tp(u)&&i.set(u.record.name,u)}function c(u,h){let p,_={},x,m;if("name"in u&&u.name){if(p=i.get(u.name),!p)throw xs(Rt.MATCHER_NOT_FOUND,{location:u});m=p.record.name,_=ot(Qh(h.params,p.keys.filter(y=>!y.optional).concat(p.parent?p.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),u.params&&Qh(u.params,p.keys.map(y=>y.name))),x=p.stringify(_)}else if(u.path!=null)x=u.path,p=n.find(y=>y.re.test(x)),p&&(_=p.parse(x),m=p.record.name);else{if(p=h.name?i.get(h.name):n.find(y=>y.re.test(h.path)),!p)throw xs(Rt.MATCHER_NOT_FOUND,{location:u,currentLocation:h});m=p.record.name,_=ot({},h.params,u.params),x=p.stringify(_)}const d=[];let E=p;for(;E;)d.unshift(E.record),E=E.parent;return{name:m,path:x,params:_,matched:d,meta:$R(d)}}t.forEach(u=>s(u));function f(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:r}}function Qh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function ep(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:YR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function YR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function tp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $R(t){return t.reduce((e,n)=>ot(e,n.meta),{})}function KR(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;jg(t,e[s])<0?i=s:n=s+1}const r=ZR(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function ZR(t){let e=t;for(;e=e.parent;)if(qg(e)&&jg(t,e)===0)return e}function qg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function np(t){const e=kn(tl),n=kn(Wg),i=Yt(()=>{const l=Nt(t.to);return e.resolve(l)}),r=Yt(()=>{const{matched:l}=i.value,{length:c}=l,f=l[c-1],u=n.matched;if(!f||!u.length)return-1;const h=u.findIndex(vs.bind(null,f));if(h>-1)return h;const p=ip(l[c-2]);return c>1&&ip(f)===p&&u[u.length-1].path!==p?u.findIndex(vs.bind(null,l[c-2])):h}),s=Yt(()=>r.value>-1&&nC(n.params,i.value.params)),o=Yt(()=>r.value>-1&&r.value===n.matched.length-1&&zg(n.params,i.value.params));function a(l={}){if(tC(l)){const c=e[Nt(t.replace)?"replace":"push"](Nt(t.to)).catch(Xs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Yt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function JR(t){return t.length===1?t[0]:t}const QR=ho({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:np,setup(t,{slots:e}){const n=za(np(t)),{options:i}=kn(tl),r=Yt(()=>({[rp(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[rp(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&JR(e.default(n));return t.custom?s:_o("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),eC=QR;function tC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nC(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!zn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function ip(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const rp=(t,e,n)=>t??e??n,iC=ho({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=kn(Au),r=Yt(()=>t.route||i.value),s=kn($h,0),o=Yt(()=>{let c=Nt(s);const{matched:f}=r.value;let u;for(;(u=f[c])&&!u.components;)c++;return c}),a=Yt(()=>r.value.matched[o.value]);la($h,Yt(()=>o.value+1)),la(LR,a),la(Au,r);const l=Ys();return Gi(()=>[l.value,a.value,t.name],([c,f,u],[h,p,_])=>{f&&(f.instances[u]=c,p&&p!==f&&c&&c===h&&(f.leaveGuards.size||(f.leaveGuards=p.leaveGuards),f.updateGuards.size||(f.updateGuards=p.updateGuards))),c&&f&&(!p||!vs(f,p)||!h)&&(f.enterCallbacks[u]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,f=t.name,u=a.value,h=u&&u.components[f];if(!h)return sp(n.default,{Component:h,route:c});const p=u.props[f],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=_o(h,ot({},_,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(u.instances[f]=null)},ref:l}));return sp(n.default,{Component:m,route:c})||m}}});function sp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rC=iC;function sC(t){const e=qR(t.routes,t),n=t.parseQuery||PR,i=t.stringifyQuery||Yh,r=t.history,s=Ns(),o=Ns(),a=Ns(),l=Ip(Oi);let c=Oi;Qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=nc.bind(null,k=>""+k),u=nc.bind(null,hR),h=nc.bind(null,uo);function p(k,re){let ae,le;return Vg(k)?(ae=e.getRecordMatcher(k),le=re):le=k,e.addRoute(le,ae)}function _(k){const re=e.getRecordMatcher(k);re&&e.removeRoute(re)}function x(){return e.getRoutes().map(k=>k.record)}function m(k){return!!e.getRecordMatcher(k)}function d(k,re){if(re=ot({},re||l.value),typeof k=="string"){const B=ic(n,k,re.path),$=e.resolve({path:B.path},re),Z=r.createHref(B.fullPath);return ot(B,$,{params:h($.params),hash:uo(B.hash),redirectedFrom:void 0,href:Z})}let ae;if(k.path!=null)ae=ot({},k,{path:ic(n,k.path,re.path).path});else{const B=ot({},k.params);for(const $ in B)B[$]==null&&delete B[$];ae=ot({},k,{params:u(B)}),re.params=u(re.params)}const le=e.resolve(ae,re),be=k.hash||"";le.params=f(h(le.params));const I=gR(i,ot({},k,{hash:uR(be),path:le.path})),S=r.createHref(I);return ot({fullPath:I,hash:be,query:i===Yh?DR(k.query):k.query||{}},le,{redirectedFrom:void 0,href:S})}function E(k){return typeof k=="string"?ic(n,k,l.value.path):ot({},k)}function y(k,re){if(c!==k)return xs(Rt.NAVIGATION_CANCELLED,{from:re,to:k})}function v(k){return R(k)}function P(k){return v(ot(E(k),{replace:!0}))}function T(k,re){const ae=k.matched[k.matched.length-1];if(ae&&ae.redirect){const{redirect:le}=ae;let be=typeof le=="function"?le(k,re):le;return typeof be=="string"&&(be=be.includes("?")||be.includes("#")?be=E(be):{path:be},be.params={}),ot({query:k.query,hash:k.hash,params:be.path!=null?{}:k.params},be)}}function R(k,re){const ae=c=d(k),le=l.value,be=k.state,I=k.force,S=k.replace===!0,B=T(ae,le);if(B)return R(ot(E(B),{state:typeof B=="object"?ot({},be,B.state):be,force:I,replace:S}),re||ae);const $=ae;$.redirectedFrom=re;let Z;return!I&&_R(i,le,ae)&&(Z=xs(Rt.NAVIGATION_DUPLICATED,{to:$,from:le}),ye(le,le,!0,!1)),(Z?Promise.resolve(Z):A($,le)).catch(G=>mi(G)?mi(G,Rt.NAVIGATION_GUARD_REDIRECT)?G:_e(G):q(G,$,le)).then(G=>{if(G){if(mi(G,Rt.NAVIGATION_GUARD_REDIRECT))return R(ot({replace:S},E(G.to),{state:typeof G.to=="object"?ot({},be,G.to.state):be,force:I}),re||$)}else G=U($,le,!0,S,be);return N($,le,G),G})}function F(k,re){const ae=y(k,re);return ae?Promise.reject(ae):Promise.resolve()}function b(k){const re=Qe.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(k):k()}function A(k,re){let ae;const[le,be,I]=IR(k,re);ae=sc(le.reverse(),"beforeRouteLeave",k,re);for(const B of le)B.leaveGuards.forEach($=>{ae.push(Hi($,k,re))});const S=F.bind(null,k,re);return ae.push(S),se(ae).then(()=>{ae=[];for(const B of s.list())ae.push(Hi(B,k,re));return ae.push(S),se(ae)}).then(()=>{ae=sc(be,"beforeRouteUpdate",k,re);for(const B of be)B.updateGuards.forEach($=>{ae.push(Hi($,k,re))});return ae.push(S),se(ae)}).then(()=>{ae=[];for(const B of I)if(B.beforeEnter)if(zn(B.beforeEnter))for(const $ of B.beforeEnter)ae.push(Hi($,k,re));else ae.push(Hi(B.beforeEnter,k,re));return ae.push(S),se(ae)}).then(()=>(k.matched.forEach(B=>B.enterCallbacks={}),ae=sc(I,"beforeRouteEnter",k,re,b),ae.push(S),se(ae))).then(()=>{ae=[];for(const B of o.list())ae.push(Hi(B,k,re));return ae.push(S),se(ae)}).catch(B=>mi(B,Rt.NAVIGATION_CANCELLED)?B:Promise.reject(B))}function N(k,re,ae){a.list().forEach(le=>b(()=>le(k,re,ae)))}function U(k,re,ae,le,be){const I=y(k,re);if(I)return I;const S=re===Oi,B=Qr?history.state:{};ae&&(le||S?r.replace(k.fullPath,ot({scroll:S&&B&&B.scroll},be)):r.push(k.fullPath,be)),l.value=k,ye(k,re,ae,S),_e()}let Y;function ee(){Y||(Y=r.listen((k,re,ae)=>{if(!Xe.listening)return;const le=d(k),be=T(le,Xe.currentRoute.value);if(be){R(ot(be,{replace:!0,force:!0}),le).catch(Xs);return}c=le;const I=l.value;Qr&&TR(qh(I.fullPath,ae.delta),el()),A(le,I).catch(S=>mi(S,Rt.NAVIGATION_ABORTED|Rt.NAVIGATION_CANCELLED)?S:mi(S,Rt.NAVIGATION_GUARD_REDIRECT)?(R(ot(E(S.to),{force:!0}),le).then(B=>{mi(B,Rt.NAVIGATION_ABORTED|Rt.NAVIGATION_DUPLICATED)&&!ae.delta&&ae.type===bu.pop&&r.go(-1,!1)}).catch(Xs),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),q(S,le,I))).then(S=>{S=S||U(le,I,!1),S&&(ae.delta&&!mi(S,Rt.NAVIGATION_CANCELLED)?r.go(-ae.delta,!1):ae.type===bu.pop&&mi(S,Rt.NAVIGATION_ABORTED|Rt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),N(le,I,S)}).catch(Xs)}))}let ie=Ns(),Q=Ns(),oe;function q(k,re,ae){_e(k);const le=Q.list();return le.length?le.forEach(be=>be(k,re,ae)):console.error(k),Promise.reject(k)}function ce(){return oe&&l.value!==Oi?Promise.resolve():new Promise((k,re)=>{ie.add([k,re])})}function _e(k){return oe||(oe=!k,ee(),ie.list().forEach(([re,ae])=>k?ae(k):re()),ie.reset()),k}function ye(k,re,ae,le){const{scrollBehavior:be}=t;if(!Qr||!be)return Promise.resolve();const I=!ae&&AR(qh(k.fullPath,0))||(le||!ae)&&history.state&&history.state.scroll||null;return Fp().then(()=>be(k,re,I)).then(S=>S&&bR(S)).catch(S=>q(S,k,re))}const Ue=k=>r.go(k);let Ye;const Qe=new Set,Xe={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:d,options:t,push:v,replace:P,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:ce,install(k){k.component("RouterLink",eC),k.component("RouterView",rC),k.config.globalProperties.$router=Xe,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Nt(l)}),Qr&&!Ye&&l.value===Oi&&(Ye=!0,v(r.location).catch(le=>{}));const re={};for(const le in Oi)Object.defineProperty(re,le,{get:()=>l.value[le],enumerable:!0});k.provide(tl,Xe),k.provide(Wg,Lp(re)),k.provide(Au,l);const ae=k.unmount;Qe.add(k),k.unmount=function(){Qe.delete(k),Qe.size<1&&(c=Oi,Y&&Y(),Y=null,l.value=Oi,Ye=!1,oe=!1),ae()}}};function se(k){return k.reduce((re,ae)=>re.then(()=>b(ae)),Promise.resolve())}return Xe}function Rw(){return kn(tl)}function oC(t,e){return _n(),Wi("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[yt("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"})])}function aC(t,e){return _n(),Wi("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[yt("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),yt("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"})])}function lC(t,e){return _n(),Wi("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[yt("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"})])}const cC={class:"min-h-screen flex flex-col items-center bg-gradient-to-b from-[#0b0b15] via-[#101020] to-black text-slate-300 font-sans relative overflow-hidden"},uC={class:"w-full py-6 text-center border-b border-slate-600/30 backdrop-blur-md bg-black/40 shadow-inner shadow-slate-700/10 flex flex-col items-center"},fC={class:"mt-4 flex flex-col sm:flex-row sm:justify-center gap-4 text-slate-400 text-sm"},dC={href:"mailto:Ada.deniz.aktas0@gmail.com",class:"flex items-center gap-2 hover:text-blue-400 transition-colors"},hC={href:"tel:+905541177404",class:"flex items-center gap-2 hover:text-blue-400 transition-colors"},pC={href:"https://www.google.com/maps/place/Kayseri,+Turkey",target:"_blank",class:"flex items-center gap-2 hover:text-blue-400 transition-colors"},mC={class:"mt-6 flex gap-3 text-xs uppercase tracking-widest"},gC=["onClick"],_C={id:"website-content",class:"relative w-11/12 max-w-6xl flex-1 backdrop-blur-sm bg-black/40 border border-slate-700/40 rounded-lg p-8 shadow-inner shadow-slate-800/50 overflow-hidden"},vC={class:"w-full py-4 mt-8 text-center text-xs tracking-widest text-slate-500 border-t border-slate-700/40 bg-black/30 backdrop-blur-md shadow-inner shadow-slate-800/20"},xC={class:"fixed inset-0 pointer-events-none z-50"},SC={class:"pointer-events-auto"},EC={__name:"MainLayout",setup(t){const{t:e,locale:n}=Ka(),i=r=>{n.value=r.toLowerCase(),localStorage.setItem("locale",r)};return(r,s)=>{const o=hc("router-link"),a=hc("router-view");return _n(),Wi("div",cC,[yt("header",uC,[s[2]||(s[2]=yt("h1",{class:"text-5xl font-extrabold tracking-widest uppercase text-white"},"A.D.A.",-1)),s[3]||(s[3]=yt("p",{class:"text-lg text-slate-500 mt-1 tracking-wide"},"Ada Deniz Aktaş",-1)),yt("div",fC,[yt("a",dC,[ft(Nt(oC),{class:"h-5 w-5 text-blue-500 flex-shrink-0"}),s[0]||(s[0]=yt("span",null,"Ada.deniz.aktas0@gmail.com",-1))]),yt("a",hC,[ft(Nt(lC),{class:"h-5 w-5 text-blue-500 flex-shrink-0"}),s[1]||(s[1]=yt("span",null,"+905541177404",-1))]),yt("a",pC,[ft(Nt(aC),{class:"h-5 w-5 text-blue-500 flex-shrink-0"}),yt("span",null,Yn(Nt(e)("header.location")),1)])]),yt("div",mC,[(_n(),Wi(an,null,nv(["EN","FR","DE","ES"],l=>yt("button",{key:l,onClick:c=>i(l.toLowerCase()),class:Kn(["px-3 py-1 rounded-md border backdrop-blur-sm transition-all duration-300 select-none",Nt(n)===l.toLowerCase()?"border-slate-400 text-white bg-slate-700/40 shadow-inner":"border-slate-600 text-slate-400 hover:text-white hover:border-slate-400 hover:bg-slate-700/30"])},Yn(l),11,gC)),64))])]),ft(Bf,{name:"lang-phase",mode:"out-in"},{default:Nn(()=>[(_n(),Wi("nav",{key:Nt(n),class:"flex gap-8 my-6 text-lg uppercase tracking-widest"},[ft(o,{to:"/",class:Kn(["nav-link",{"nav-active":r.$route.path==="/"}])},{default:Nn(()=>[vr(Yn(Nt(e)("nav.home")),1)]),_:1},8,["class"]),ft(o,{to:"/about",class:Kn(["nav-link",{"nav-active":r.$route.path==="/about"}])},{default:Nn(()=>[vr(Yn(Nt(e)("nav.about")),1)]),_:1},8,["class"]),ft(o,{to:"/skills",class:Kn(["nav-link",{"nav-active":r.$route.path==="/skills"}])},{default:Nn(()=>[vr(Yn(Nt(e)("nav.skills")),1)]),_:1},8,["class"]),ft(o,{to:"/experience",class:Kn(["nav-link",{"nav-active":r.$route.path==="/experience"}])},{default:Nn(()=>[vr(Yn(Nt(e)("nav.experience")),1)]),_:1},8,["class"]),ft(o,{to:"/projects",class:Kn(["nav-link",{"nav-active":r.$route.path==="/projects"}])},{default:Nn(()=>[vr(Yn(Nt(e)("nav.projects")),1)]),_:1},8,["class"]),ft(o,{to:"/contact",class:Kn(["nav-link",{"nav-active":r.$route.path==="/contact"}])},{default:Nn(()=>[vr(Yn(Nt(e)("nav.contact")),1)]),_:1},8,["class"])]))]),_:1}),yt("main",_C,[ft(a,null,{default:Nn(({Component:l})=>[ft(Bf,{name:"page-fade",mode:"out-in"},{default:Nn(()=>[(_n(),Js(tv(l)))]),_:2},1024)]),_:1}),yt("footer",vC," © "+Yn(new Date().getFullYear())+" Whitestone R&D — A.D.A. | All Rights Reserved. ",1)]),s[4]||(s[4]=yt("div",{class:"absolute inset-0 -z-10 overflow-hidden"},null,-1)),yt("div",xC,[yt("div",SC,[r.$route.path!=="/contact"?(_n(),Js(QA,{key:0,class:"exclude-3d bottom-8 right-8"})):vm("",!0)])])])}}},yC={__name:"App",setup(t){return(e,n)=>{const i=hc("router-view");return _n(),Js(EC,null,{default:Nn(()=>[ft(i)]),_:1})}}},MC="modulepreload",bC=function(t){return"/"+t},op={},gr=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=l(n.map(c=>{if(c=bC(c),c in op)return;op[c]=!0;const f=c.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":MC,f||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),f)return new Promise((p,_)=>{h.addEventListener("load",p),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},TC=[{path:"/",name:"Home",component:()=>gr(()=>import("./Home-BLnkDQjr.js"),[])},{path:"/about",name:"About",component:()=>gr(()=>import("./About-BepXTzMY.js"),__vite__mapDeps([0,1]))},{path:"/skills",name:"Skills",component:()=>gr(()=>import("./Skills-Cw4YXRhM.js"),__vite__mapDeps([2,3]))},{path:"/experience",name:"Experience",component:()=>gr(()=>import("./Experience-C0LU5S0s.js"),__vite__mapDeps([4,5]))},{path:"/projects",name:"Projects",component:()=>gr(()=>import("./Projects-2TZUX_Zo.js"),__vite__mapDeps([6,7]))},{path:"/contact",name:"Contact",component:()=>gr(()=>import("./Contact-3RT4Vv4x.js"),__vite__mapDeps([8,9]))},{path:"/rift",name:"Rift",component:()=>gr(()=>import("./RiftLayout-BdfxrGsX.js"),__vite__mapDeps([10,11]))}],AC=sC({history:FR(),routes:TC}),RC={location:"Current location: Kayseri, Turkey"},CC={home:"Home",about:"About",skills:"Skills",experience:"Experience",projects:"Projects",contact:"Contact"},wC={title:"Fullstack Engineer",summary:{part1:"Over a decade of experience delivering enterprise-grade systems in",medical:"medical",industrial:"industrial",and:"and",ai:"AI-driven",part2:"domains. Specialized in",part3:"microservices,",part4:"pipelines, and scalable backend architecture."},cta:{projects:"View Projects",contact:"Contact Me"}},PC={title:"About Me",summary:"Fullstack Software Engineer with 10+ years of experience building scalable enterprise systems across medical, industrial, and marketing domains — unifying architecture, team leadership, and delivery focus.",expertise:[{title:"Backend & Architecture",text:"C# .NET Core microservices, REST & SignalR, CQRS, SOLID, Clean Architecture, event-driven systems."},{title:"Frontend & Web",text:"Blazor, SPA lifecycle, TypeScript, responsive design, and complex enterprise UI frameworks."},{title:"DevOps & Cloud",text:"Docker, Azure DevOps, GitHub Actions, cloud-native CI/CD, observability and automation pipelines."},{title:"Testing & QA",text:"xUnit, NUnit, Selenium, Playwright, Postman, and strong TDD/BDD coverage and traceability."},{title:"Databases",text:"SQL Server, PostgreSQL, MySQL, Firebase; optimized query design and concurrency performance."},{title:"Leadership & Delivery",text:"Agile/Scrum leadership, product vision alignment, mentoring, and enterprise-scale delivery."}]},DC={labels:{practices:"Practices",best:"Best",improvable:"Improvable",bad:"Bad"},title:"Core Competencies",items:[{title:"Backend Engineering",description:"C# .NET Core, Microservices, REST APIs, CQRS, Clean Architecture, SignalR",best:"Stateless services, clear separation of command/query logic, domain-driven modularization, and async event-driven flow.",improvable:"Tight coupling between APIs and DB models — adopt contracts + interfaces. Roadmap: isolate business logic, introduce message brokers, add failover patterns.",bad:"Massive service controllers, logic in controllers, circular dependencies, synchronous I/O in production flows."},{title:"Frontend Engineering",description:"Vue 3, TypeScript, Blazor, UI Composition, SPA Lifecycle, Progressive Enhancement",best:"Composable architecture, reactive state control, consistent component APIs, minimal DOM footprint.",improvable:"Overusing watchers and deep reactivity — move to computed pipelines. Roadmap: refactor heavy components into slots and composables.",bad:"Direct DOM manipulation, global state pollution, tight coupling between UI and logic."},{title:"Cloud & DevOps",description:"Docker, Azure DevOps, GitHub Actions, CI/CD, Cloud Deployment, Observability",best:"Immutable builds, declarative IaC, least privilege secrets handling, and pipeline versioning.",improvable:"Manual container linking — use Compose networking or service discovery. Roadmap: integrate environment matrix testing and ephemeral staging.",bad:"Storing secrets in YAML, building images on live agents, SSHing into production containers."},{title:"Databases & Persistence",description:"SQL Server, PostgreSQL, MySQL, MongoDB, Firebase, Query Optimization",best:"Index-aware schema design, transaction safety, CQRS split reads/writes, caching hot paths.",improvable:"Lack of monitoring — introduce slow query logs. Roadmap: shard by domain, apply read replicas, test migrations under load.",bad:"ORM misuse, raw concatenated queries, unbounded result sets, schema drift in CI/CD."},{title:"Quality & Automation",description:"xUnit, NUnit, Playwright, Selenium, Postman, Automated QA, Integration Testing",best:"Pipeline-based validation, isolated mocks, and test-driven infrastructure consistency.",improvable:"Low coverage on async code paths. Roadmap: enforce integration test gates, add mutation testing for logic coverage.",bad:"Manual testing reliance, test order dependency, shared state across tests."},{title:"Architecture & Leadership",description:"System Design, Team Leadership, Agile, CI/CD-first Culture, Fortune 500 Delivery",best:"Lead by demonstration, establish architectural standards, teach reasoning not obedience.",improvable:"Reactive leadership — build proactive mentorship cadence. Roadmap: define team-level autonomy layers and measurable trust metrics.",bad:"Code policing, gatekeeping reviews, emotional decisions over systemic evidence."}]},LC={title:"Experience",items:[{role:"Freelancing",company:"Independent Projects",period:"Jul 2025 – Present",description:"Working on diverse small-scale AI, web, and automation projects — exploring creative problem-solving and rapid prototyping."},{role:"Career Gap",company:"Health Recovery",period:"Nov 2024 – Jul 2025",description:"Focused on recovery, AI-assisted prototyping, and cloud-native architecture experiments."},{role:"Senior Fullstack Engineer",company:"Proxify – Getinge Medical AB",period:"Nov 2021 – Nov 2024",description:"Operated SimulationHub for hospital sterilization automation using C# .NET Core microservices, REST coordination, and Azure DevOps pipelines."},{role:"DevOps Manager",company:"Proxify – Shell Global R&D",period:"Feb 2022 – Mar 2022",description:"Managed CI/CD pipelines, automated dashboards, and secure analytics for R&D operations as a short-term concurrent assignment."},{role:"Fullstack Engineer / Media Manager",company:"One Ingage Marketing Inc.",period:"Feb 2021 – Oct 2021",description:"Developed analytics dashboards, CMS integrations, and Blazor-based marketing automation tools with reusable UI components."},{role:"Fullstack Engineer",company:"Indis Software Inc.",period:"Dec 2019 – Feb 2021",description:"Built scalable SaaS backends, optimized SQL Server queries, and enhanced QA automation pipelines using Selenium and Postman."},{role:"Fullstack Engineer",company:"Joker Software Inc.",period:"Jan 2019 – Sep 2019",description:"Developed ERP systems, implemented hardware automation logic, and maintained .NET-based legacy platforms."},{role:"Fullstack Engineer",company:"Safa Informatics",period:"Aug 2017 – Dec 2018",description:"Led ERP integration projects, managed API architecture, and improved backend reliability with optimized SQL structures."}]},IC={present:"Present",urgency:{immediate:"Immediate",high:"High",normal:"Normal",research:"Research-only"}},NC={title:"Projects",items:[{title:"Simulation Hub",companyName:"Getinge Medical AB",period:"Nov 2021 - Nov 2024 (3 years)",description:"Medical device simulation platform for hospital sterilization automation, built with C# .NET Core microservices and REST coordination."},{title:"Automation Hub",companyName:"Getinge Medical AB",period:"Oct 2021 - Oct 2024 (3 years)",description:"Advanced hospital sterilization automation system with simulation and integration modules, automated xUnit test suites, and Dockerized deployment."},{title:"KolayCar",companyName:"INDIS Software INC",period:"Dec 2019 - Feb 2021 (1.5 years)",description:"Rental car management system with C# backend, SQL Server optimizations, and legacy WebForms frontends."},{title:"Joker ERP",companyName:"Joker Software INC",period:"Jan 2019 - Sep 2019 (0.75 years)",description:"End-to-end ERP system for manufacturing to retail, including Windows Forms interfaces and SQL Server optimization."},{title:"Epsilon",companyName:"Safa Informatics",period:"Aug 2017 - Dec 2018 (1.5 years)",description:"ERP integration system for major marketplaces, with backend in C# and Python, and microservice APIs."},{title:"Smart House",companyName:"Personal Project",period:"2022 - 2024 (2 years)",description:"Home automation system with IoT sensors, voice control, and remote monitoring using JavaScript, Python, and MQTT."},{title:"Smart Garage",companyName:"Personal Project",period:"2021 - 2022 (1 year)",description:"Garage automation system with motorized doors, sensors, and cloud logging using Python and microcontrollers."},{title:"AI Drone System",companyName:"Personal Project",period:"2020 - 2021 (1 year)",description:"Autonomous drones with computer vision and AI navigation using Python, OpenCV, and TensorFlow Lite."}]},UC={title:"Contact",tabs:{contact:"Contact Info",project:"Project Request"},form:{name:"Your Name",email:"Your Email",message:"Message",send:"Send Message",sending:"Sending...",sent:"TRANSMISSION SENT — CONFIRMED.",project:{title:"Project Title",objective:"One-Sentence Objective",scope:"Project Description / Scope",logic:"Core Logic / Technical Principle",dependencies:"Dependencies / Tools",performance:"Performance Goals (speed, accuracy, etc.)",budgetLabel:"Estimated Budget (USD):",urgencyLabel:"Urgency:",notes:"Additional Notes or Constraints",submit:"Submit Project Request",submitting:"Submitting...",sent:"REQUEST RECEIVED — PROCESSING."}},urgency:{immediate:"Immediate",high:"High",normal:"Normal",research:"Research-only"},info:{email:"Email",phone:"Phone",location:"Current: Kayseri, Turkey"}},OC={header:RC,nav:CC,home:wC,about:PC,skills:DC,experience:LC,common:IC,projects:NC,contact:UC},FC={location:"Localisation actuelle : Kayseri, Turquie"},kC={home:"Accueil",about:"À propos",skills:"Compétences",experience:"Expérience",projects:"Projets",contact:"Contact"},BC={title:"Ingénieure Fullstack",summary:{part1:"Plus de dix ans d’expérience dans la livraison de systèmes de niveau entreprise dans les domaines",medical:"médical",industrial:"industriel",and:"et",ai:"pilotés par l’IA",part2:". Spécialisée en",part3:"microservices C# .NET Core,",part4:"pipelines CI/CD cloud-native et architecture backend évolutive."},cta:{projects:"Voir les projets",contact:"Me contacter"}},HC={title:"À propos de moi",summary:"Ingénieure logicielle Fullstack avec plus de dix ans d’expérience dans la création de systèmes d’entreprise évolutifs dans les domaines médical, industriel et marketing — alliant architecture, direction d’équipe et orientation résultats.",expertise:[{title:"Backend & Architecture",text:"Microservices C# .NET Core, REST & SignalR, CQRS, SOLID, architecture propre, systèmes pilotés par événements."},{title:"Frontend & Web",text:"Blazor, cycle de vie SPA, TypeScript, design réactif et frameworks d’interface complexes."},{title:"DevOps & Cloud",text:"Docker, Azure DevOps, GitHub Actions, pipelines CI/CD cloud-native, observabilité et automatisation."},{title:"Testing & QA",text:"xUnit, NUnit, Selenium, Playwright, Postman, couverture TDD/BDD complète et traçabilité."},{title:"Bases de données",text:"SQL Server, PostgreSQL, MySQL, Firebase ; conception de requêtes optimisées et performance de concurrence."},{title:"Leadership & Livraison",text:"Leadership Agile/Scrum, alignement de la vision produit, mentorat et livraison à grande échelle."}]},zC={labels:{practices:"Pratiques",best:"Meilleures",improvable:"Améliorables",bad:"À éviter"},title:"Compétences principales",items:[{title:"Ingénierie Backend",description:"C# .NET Core, Microservices, APIs REST, CQRS, Architecture propre, SignalR",best:"Services sans état, séparation claire de la logique commande/requête, modularisation orientée domaine et flux asynchrones pilotés par événements.",improvable:"Couplage étroit entre APIs et modèles de base de données — adopter des contrats et interfaces. Feuille de route : isoler la logique métier, introduire des courtiers de messages et ajouter des modèles de basculement.",bad:"Contrôleurs massifs, logique contenue dans les contrôleurs, dépendances circulaires, I/O synchrones en production."},{title:"Ingénierie Frontend",description:"Vue 3, TypeScript, Blazor, Composition d’interface, Cycle de vie SPA, Amélioration progressive",best:"Architecture composable, contrôle d’état réactif, API de composants cohérentes, empreinte DOM minimale.",improvable:"Utilisation excessive de watchers et de réactivité profonde — migrer vers des pipelines calculés. Feuille de route : refactoriser les composants lourds en slots et composables.",bad:"Manipulation directe du DOM, pollution de l’état global, couplage fort entre interface et logique."},{title:"Cloud & DevOps",description:"Docker, Azure DevOps, GitHub Actions, CI/CD, Déploiement cloud, Observabilité",best:"Builds immuables, IaC déclaratif, gestion des secrets à privilège minimal et versionnage des pipelines.",improvable:"Liaison manuelle de conteneurs — utiliser le réseau Compose ou la découverte de services. Feuille de route : intégrer des tests matriciels d’environnement et des mises en scène éphémères.",bad:"Secrets dans les fichiers YAML, builds sur agents actifs, connexions SSH dans des conteneurs de production."},{title:"Bases de données & Persistance",description:"SQL Server, PostgreSQL, MySQL, MongoDB, Firebase, Optimisation de requêtes",best:"Conception de schéma sensible aux index, sécurité transactionnelle, séparation CQRS lecture/écriture, mise en cache des chemins critiques.",improvable:"Manque de surveillance — activer les journaux de requêtes lentes. Feuille de route : partitionner par domaine, ajouter des réplicas en lecture, tester les migrations sous charge.",bad:"Mauvais usage des ORM, requêtes concaténées brutes, ensembles de résultats non limités, dérive de schéma dans CI/CD."},{title:"Qualité & Automatisation",description:"xUnit, NUnit, Playwright, Selenium, Postman, QA automatisé, Tests d’intégration",best:"Validation basée sur pipeline, mocks isolés et cohérence d’infrastructure pilotée par les tests.",improvable:"Faible couverture des chemins asynchrones. Feuille de route : appliquer des seuils d’intégration, ajouter des tests de mutation pour la logique métier.",bad:"Dépendance aux tests manuels, ordre d’exécution des tests, état partagé entre cas de test."},{title:"Architecture & Leadership",description:"Conception de systèmes, Leadership d’équipe, Agile, Culture CI/CD, Livraison à grande échelle",best:"Diriger par l’exemple, définir des standards architecturaux, enseigner la logique plutôt que la conformité.",improvable:"Leadership réactif — instaurer un mentorat proactif. Feuille de route : définir des couches d’autonomie d’équipe et des indicateurs de confiance mesurables.",bad:"Contrôle excessif du code, révisions fermées, décisions émotionnelles plutôt qu’objectives."}]},VC={title:"Expérience",items:[{role:"Freelance",company:"Projets indépendants",period:"juil. 2025 – présent",description:"Travail sur divers projets d’IA, de web et d’automatisation à petite échelle — axé sur la résolution créative de problèmes et le prototypage rapide."},{role:"Pause de carrière",company:"Rétablissement de santé",period:"nov. 2024 – juil. 2025",description:"Concentration sur la récupération, le prototypage assisté par IA et les expérimentations d’architecture cloud-native."},{role:"Ingénieur Fullstack Senior",company:"Proxify – Getinge Medical AB",period:"nov. 2021 – nov. 2024",description:"Exploitation du SimulationHub pour l’automatisation de la stérilisation hospitalière en C# .NET Core, microservices et pipelines Azure DevOps."},{role:"Responsable DevOps",company:"Proxify – Shell Global R&D",period:"févr. 2022 – mars 2022",description:"Gestion des pipelines CI/CD, tableaux de bord automatisés et analyses sécurisées pour les opérations de R&D."},{role:"Ingénieur Fullstack / Media Manager",company:"One Ingage Marketing Inc.",period:"févr. 2021 – oct. 2021",description:"Développement de tableaux de bord analytiques, intégrations CMS et outils d’automatisation marketing basés sur Blazor."},{role:"Ingénieur Fullstack",company:"Indis Software Inc.",period:"déc. 2019 – févr. 2021",description:"Création de backends SaaS évolutifs, optimisation des requêtes SQL Server et automatisation QA avec Selenium et Postman."},{role:"Ingénieur Fullstack",company:"Joker Software Inc.",period:"janv. 2019 – sept. 2019",description:"Développement de systèmes ERP, automatisation matérielle et maintenance de plateformes .NET héritées."},{role:"Ingénieur Fullstack",company:"Safa Informatics",period:"août 2017 – déc. 2018",description:"Direction de projets d’intégration ERP, gestion d’API et amélioration de la fiabilité du backend."}]},GC={present:"Présent",urgency:{immediate:"Immédiate",high:"Haute",normal:"Normale",research:"Recherche uniquement"}},WC={title:"Projets",items:[{title:"Simulation Hub",companyName:"Getinge Medical AB",period:"Nov 2021 - Nov 2024 (3 ans)",description:"Plateforme de simulation pour dispositifs médicaux, dédiée à l’automatisation de la stérilisation hospitalière, développée en C# .NET Core et REST."},{title:"Automation Hub",companyName:"Getinge Medical AB",period:"Oct 2021 - Oct 2024 (3 ans)",description:"Système d’automatisation hospitalière avancé avec modules de simulation et d’intégration, tests automatisés xUnit et déploiement Docker."},{title:"KolayCar",companyName:"INDIS Software INC",period:"Dec 2019 - Feb 2021 (1,5 an)",description:"Système de gestion de location de voitures avec backend C#, optimisation SQL Server et interfaces WebForms héritées."},{title:"Joker ERP",companyName:"Joker Software INC",period:"Jan 2019 - Sep 2019 (0,75 an)",description:"ERP complet pour la fabrication et la vente au détail, avec interfaces Windows Forms et optimisation SQL Server."},{title:"Epsilon",companyName:"Safa Informatics",period:"Août 2017 - Déc 2018 (1,5 an)",description:"Système d’intégration ERP pour grandes places de marché, utilisant un backend C# et Python, et des API microservices."},{title:"Smart House",companyName:"Projet personnel",period:"2022 - 2024 (2 ans)",description:"Système domotique avec capteurs IoT, commande vocale et supervision à distance via JavaScript, Python et MQTT."},{title:"Smart Garage",companyName:"Projet personnel",period:"2021 - 2022 (1 an)",description:"Automatisation de garage motorisé avec capteurs et journalisation cloud, basé sur Python et microcontrôleurs."},{title:"AI Drone System",companyName:"Projet personnel",period:"2020 - 2021 (1 an)",description:"Drones autonomes avec vision par ordinateur et navigation IA, développés en Python, OpenCV et TensorFlow Lite."}]},XC={title:"Contact",tabs:{contact:"Informations de contact",project:"Demande de projet"},form:{name:"Votre nom",email:"Votre e-mail",message:"Message",send:"Envoyer le message",sending:"Envoi...",sent:"TRANSMISSION ENVOYÉE — CONFIRMÉE.",project:{title:"Titre du projet",objective:"Objectif en une phrase",scope:"Description / portée du projet",logic:"Logique de base / principe technique",dependencies:"Dépendances / outils",performance:"Objectifs de performance (vitesse, précision, etc.)",budgetLabel:"Budget estimé (USD) :",urgencyLabel:"Urgence :",notes:"Notes ou contraintes supplémentaires",submit:"Soumettre la demande de projet",submitting:"Soumission...",sent:"DEMANDE REÇUE — EN TRAITEMENT."}},urgency:{immediate:"Immédiate",high:"Haute",normal:"Normale",research:"Recherche uniquement"},info:{email:"E-mail",phone:"Téléphone",location:"Actuellement : Kayseri, Turquie"}},jC={header:FC,nav:kC,home:BC,about:HC,skills:zC,experience:VC,common:GC,projects:WC,contact:XC},qC={location:"Aktueller Standort: Kayseri, Türkei"},YC={home:"Startseite",about:"Über mich",skills:"Fähigkeiten",experience:"Erfahrung",projects:"Projekte",contact:"Kontakt"},$C={title:"Fullstack-Entwicklerin",summary:{part1:"Über ein Jahrzehnt Erfahrung in der Bereitstellung von Unternehmenssystemen in den Bereichen",medical:"Medizin",industrial:"Industrie",and:"und",ai:"KI-gestützt",part2:". Spezialisiert auf",part3:"C# .NET Core-Microservices,",part4:"Cloud-native CI/CD-Pipelines und skalierbare Backend-Architektur."},cta:{projects:"Projekte ansehen",contact:"Kontakt aufnehmen"}},KC={title:"Über mich",summary:"Fullstack-Softwareentwicklerin mit über 10 Jahren Erfahrung im Aufbau skalierbarer Unternehmenssysteme in den Bereichen Medizin, Industrie und Marketing – vereint Architektur, Teamleitung und Liefertreue.",expertise:[{title:"Backend & Architektur",text:"C# .NET Core Microservices, REST & SignalR, CQRS, SOLID, Clean Architecture, ereignisgesteuerte Systeme."},{title:"Frontend & Web",text:"Blazor, SPA-Lebenszyklus, TypeScript, responsives Design und komplexe UI-Frameworks."},{title:"DevOps & Cloud",text:"Docker, Azure DevOps, GitHub Actions, cloud-native CI/CD, Observability und Automatisierung."},{title:"Testing & QA",text:"xUnit, NUnit, Selenium, Playwright, Postman, starke TDD/BDD-Abdeckung und Nachverfolgbarkeit."},{title:"Datenbanken",text:"SQL Server, PostgreSQL, MySQL, Firebase; optimiertes Query-Design und Parallelleistung."},{title:"Führung & Lieferung",text:"Agile/Scrum-Leitung, Produktvision, Mentoring und Lieferung im Unternehmensmaßstab."}]},ZC={labels:{practices:"Praktiken",best:"Beste",improvable:"Verbesserbar",bad:"Schlecht"},title:"Kernkompetenzen",items:[{title:"Backend-Entwicklung",description:"C# .NET Core, Microservices, REST-APIs, CQRS, Clean Architecture, SignalR",best:"Zustandslose Services, klare Trennung von Befehls- und Abfragelogik, domänengetriebene Modularisierung und asynchrone ereignisbasierte Abläufe.",improvable:"Enge Kopplung zwischen APIs und Datenbankmodellen — Verträge und Schnittstellen einführen. Fahrplan: Geschäftslogik isolieren, Message-Broker einbinden, Failover-Muster ergänzen.",bad:"Massive Controller, Logik in Controllern, zirkuläre Abhängigkeiten, synchrones I/O in Produktionspfaden."},{title:"Frontend-Entwicklung",description:"Vue 3, TypeScript, Blazor, UI-Komposition, SPA-Lebenszyklus, Progressive Enhancement",best:"Komponierbare Architektur, reaktive Zustandskontrolle, konsistente Komponenten-APIs, minimale DOM-Belastung.",improvable:"Übermäßiger Einsatz von Watchern und tiefer Reaktivität — Wechsel zu berechneten Pipelines. Fahrplan: schwere Komponenten in Slots und Composables aufteilen.",bad:"Direkte DOM-Manipulation, globale Zustandsverschmutzung, starke Kopplung zwischen UI und Logik."},{title:"Cloud & DevOps",description:"Docker, Azure DevOps, GitHub Actions, CI/CD, Cloud Deployment, Observability",best:"Unveränderliche Builds, deklaratives IaC, minimale Rechte für Secrets, versionierte Pipelines.",improvable:"Manuelle Container-Verknüpfung — Compose-Netzwerke oder Service Discovery nutzen. Fahrplan: Umgebungsmatrix-Tests und temporäre Staging-Umgebungen integrieren.",bad:"Secrets in YAML-Dateien, Builds auf Live-Agenten, SSH in Produktionscontainer."},{title:"Datenbanken & Persistenz",description:"SQL Server, PostgreSQL, MySQL, MongoDB, Firebase, Abfrageoptimierung",best:"Indexbewusstes Schema-Design, Transaktionssicherheit, CQRS-Lese-/Schreibtrennung, Caching heißer Pfade.",improvable:"Fehlendes Monitoring — langsame Abfragen protokollieren. Fahrplan: nach Domäne sharden, Lesereplikas hinzufügen, Migrationen unter Last testen.",bad:"Fehlerhafte ORM-Nutzung, rohe verkettete Abfragen, unbegrenzte Ergebnismengen, Schemaabweichungen in CI/CD."},{title:"Qualität & Automatisierung",description:"xUnit, NUnit, Playwright, Selenium, Postman, Automatisierte QA, Integrationstests",best:"Pipeline-basierte Validierung, isolierte Mocks und testgetriebene Infrastrukturkonsistenz.",improvable:"Geringe Abdeckung asynchroner Codepfade. Fahrplan: Integrations-Test-Gates erzwingen, Mutationstests für Logikabdeckung hinzufügen.",bad:"Manuelles Testen, Abhängigkeit von Testreihenfolge, gemeinsamer Zustand zwischen Tests."},{title:"Architektur & Führung",description:"Systemdesign, Teamleitung, Agile, CI/CD-Kultur, Großkundenlieferung",best:"Durch Vorbild führen, Architekturstandards festlegen, logisches Denken lehren statt blinden Gehorsam.",improvable:"Reaktives Führen — proaktive Mentoring-Struktur aufbauen. Fahrplan: Teamautonomieebenen und messbare Vertrauensmetriken definieren.",bad:"Code-Policing, Gatekeeping-Reviews, emotionale statt datenbasierte Entscheidungen."}]},JC={title:"Erfahrung",items:[{role:"Freelancing",company:"Unabhängige Projekte",period:"Juli 2025 – Gegenwart",description:"Arbeit an verschiedenen kleinen KI-, Web- und Automatisierungsprojekten — kreative Problemlösung und schnelles Prototyping."},{role:"Karrierepause",company:"Gesundheitserholung",period:"Nov. 2024 – Juli 2025",description:"Fokus auf Erholung, KI-gestütztes Prototyping und cloud-native Architektur-Experimente."},{role:"Senior Fullstack Engineer",company:"Proxify – Getinge Medical AB",period:"Nov. 2021 – Nov. 2024",description:"Betrieb des SimulationHub zur Krankenhaussterilisationsautomatisierung mit C# .NET Core, Microservices und Azure DevOps."},{role:"DevOps Manager",company:"Proxify – Shell Global R&D",period:"Feb. 2022 – März 2022",description:"Verwaltung von CI/CD-Pipelines, automatisierten Dashboards und sicherer Analytik für F&E-Prozesse."},{role:"Fullstack Engineer / Media Manager",company:"One Ingage Marketing Inc.",period:"Feb. 2021 – Okt. 2021",description:"Entwicklung von Analysetools, CMS-Integrationen und Blazor-basierten Marketing-Automatisierungssystemen."},{role:"Fullstack Engineer",company:"Indis Software Inc.",period:"Dez. 2019 – Feb. 2021",description:"Entwicklung skalierbarer SaaS-Backends, Optimierung von SQL-Abfragen und QA-Automatisierung mit Selenium und Postman."},{role:"Fullstack Engineer",company:"Joker Software Inc.",period:"Jan. 2019 – Sep. 2019",description:"Entwicklung von ERP-Systemen, Hardware-Automatisierungslogik und Wartung älterer .NET-Plattformen."},{role:"Fullstack Engineer",company:"Safa Informatics",period:"Aug. 2017 – Dez. 2018",description:"Leitung von ERP-Integrationsprojekten, Verwaltung der API-Architektur und Verbesserung der Backend-Zuverlässigkeit."}]},QC={present:"Gegenwart",urgency:{immediate:"Sofort",high:"Hoch",normal:"Normal",research:"Nur Forschung"}},ew={title:"Projekte",items:[{title:"Simulation Hub",companyName:"Getinge Medical AB",period:"Nov 2021 - Nov 2024 (3 Jahre)",description:"Simulationsplattform für medizinische Geräte zur Automatisierung der Krankenhaussterilisation, entwickelt mit C# .NET Core und REST-Mikrodiensten."},{title:"Automation Hub",companyName:"Getinge Medical AB",period:"Okt 2021 - Okt 2024 (3 Jahre)",description:"Fortgeschrittenes Automatisierungssystem für Krankenhaussterilisation mit Simulations- und Integrationsmodulen, automatisierten xUnit-Tests und Docker-Bereitstellung."},{title:"KolayCar",companyName:"INDIS Software INC",period:"Dez 2019 - Feb 2021 (1,5 Jahre)",description:"Mietwagenmanagementsystem mit C# Backend, SQL Server Optimierung und WebForms-Oberflächen."},{title:"Joker ERP",companyName:"Joker Software INC",period:"Jan 2019 - Sep 2019 (0,75 Jahre)",description:"Umfassendes ERP-System von der Fertigung bis zum Einzelhandel, einschließlich Windows Forms und SQL-Optimierung."},{title:"Epsilon",companyName:"Safa Informatics",period:"Aug 2017 - Dez 2018 (1,5 Jahre)",description:"ERP-Integrationssystem für große Marktplätze mit Backend in C# und Python sowie Microservice-APIs."},{title:"Smart House",companyName:"Persönliches Projekt",period:"2022 - 2024 (2 Jahre)",description:"Hausautomationssystem mit IoT-Sensoren, Sprachsteuerung und Fernüberwachung unter Verwendung von JavaScript, Python und MQTT."},{title:"Smart Garage",companyName:"Persönliches Projekt",period:"2021 - 2022 (1 Jahr)",description:"Garagenautomationssystem mit motorisierten Türen, Sensoren und Cloud-Protokollierung in Python und Mikrocontrollern."},{title:"AI Drone System",companyName:"Persönliches Projekt",period:"2020 - 2021 (1 Jahr)",description:"Autonome Drohnen mit Computer Vision und KI-Navigation unter Verwendung von Python, OpenCV und TensorFlow Lite."}]},tw={title:"Kontakt",tabs:{contact:"Kontaktinformationen",project:"Projektanfrage"},form:{name:"Ihr Name",email:"Ihre E-Mail",message:"Nachricht",send:"Nachricht senden",sending:"Senden...",sent:"ÜBERTRAGUNG GESENDET — BESTÄTIGT.",project:{title:"Projekttitel",objective:"Ziel in einem Satz",scope:"Projektbeschreibung / Umfang",logic:"Kernlogik / technisches Prinzip",dependencies:"Abhängigkeiten / Werkzeuge",performance:"Leistungsziele (Geschwindigkeit, Genauigkeit usw.)",budgetLabel:"Geschätztes Budget (USD):",urgencyLabel:"Dringlichkeit:",notes:"Zusätzliche Anmerkungen oder Einschränkungen",submit:"Projektanfrage senden",submitting:"Übermittlung...",sent:"ANFRAGE ERHALTEN — IN BEARBEITUNG."}},urgency:{immediate:"Sofort",high:"Hoch",normal:"Normal",research:"Nur Forschung"},info:{email:"E-Mail",phone:"Telefon",location:"Aktuell: Kayseri, Türkei"}},nw={header:qC,nav:YC,home:$C,about:KC,skills:ZC,experience:JC,common:QC,projects:ew,contact:tw},iw={location:"Ubicación actual: Kayseri, Turquía"},rw={home:"Inicio",about:"Acerca de mí",skills:"Habilidades",experience:"Experiencia",projects:"Proyectos",contact:"Contacto"},sw={title:"Desarrolladora Fullstack",summary:{part1:"Más de una década de experiencia creando sistemas empresariales en los sectores",medical:"médico",industrial:"industrial",and:"y",ai:"impulsados por IA",part2:". Especializada en",part3:"microservicios C# .NET Core,",part4:"canales CI/CD nativos en la nube y arquitectura backend escalable."},cta:{projects:"Ver proyectos",contact:"Contáctame"}},ow={title:"Acerca de mí",summary:"Ingeniera de software Fullstack con más de 10 años de experiencia construyendo sistemas empresariales escalables en los sectores médico, industrial y de marketing — combinando arquitectura, liderazgo de equipo y enfoque en la entrega.",expertise:[{title:"Backend y Arquitectura",text:"Microservicios C# .NET Core, REST y SignalR, CQRS, SOLID, arquitectura limpia, sistemas basados en eventos."},{title:"Frontend y Web",text:"Blazor, ciclo de vida SPA, TypeScript, diseño responsivo y frameworks de interfaz complejos."},{title:"DevOps y Nube",text:"Docker, Azure DevOps, GitHub Actions, CI/CD nativo en la nube, observabilidad y automatización."},{title:"Testing y QA",text:"xUnit, NUnit, Selenium, Playwright, Postman y amplia cobertura TDD/BDD con trazabilidad."},{title:"Bases de Datos",text:"SQL Server, PostgreSQL, MySQL, Firebase; diseño de consultas optimizado y rendimiento concurrente."},{title:"Liderazgo y Entrega",text:"Liderazgo Agile/Scrum, alineación de la visión del producto, mentoría y entrega a escala empresarial."}]},aw={labels:{practices:"Prácticas",best:"Mejor",improvable:"Mejorable",bad:"Mala"},title:"Competencias principales",items:[{title:"Ingeniería Backend",description:"C# .NET Core, Microservicios, APIs REST, CQRS, Arquitectura limpia, SignalR",best:"Servicios sin estado, separación clara entre lógica de comandos y consultas, modularización basada en dominio y flujo asíncrono impulsado por eventos.",improvable:"Acoplamiento estrecho entre APIs y modelos de base de datos — adoptar contratos e interfaces. Hoja de ruta: aislar la lógica de negocio, introducir brokers de mensajes y agregar patrones de conmutación por error.",bad:"Controladores masivos, lógica en controladores, dependencias circulares, E/S sincrónica en producción."},{title:"Ingeniería Frontend",description:"Vue 3, TypeScript, Blazor, Composición UI, Ciclo de vida SPA, Mejora progresiva",best:"Arquitectura componible, control de estado reactivo, APIs de componentes coherentes, mínima huella en el DOM.",improvable:"Uso excesivo de watchers y reactividad profunda — migrar a canalizaciones calculadas. Hoja de ruta: refactorizar componentes pesados en slots y composables.",bad:"Manipulación directa del DOM, contaminación del estado global, acoplamiento fuerte entre interfaz y lógica."},{title:"Cloud & DevOps",description:"Docker, Azure DevOps, GitHub Actions, CI/CD, Implementación en la nube, Observabilidad",best:"Compilaciones inmutables, IaC declarativa, manejo seguro de secretos con privilegios mínimos y versionado de pipelines.",improvable:"Enlaces manuales de contenedores — usar redes Compose o descubrimiento de servicios. Hoja de ruta: integrar pruebas de matriz de entornos y entornos temporales de staging.",bad:"Guardar secretos en YAML, compilar imágenes en agentes activos, acceder por SSH a contenedores de producción."},{title:"Bases de datos y persistencia",description:"SQL Server, PostgreSQL, MySQL, MongoDB, Firebase, Optimización de consultas",best:"Diseño de esquemas consciente de índices, seguridad transaccional, separación CQRS lectura/escritura, almacenamiento en caché de rutas críticas.",improvable:"Falta de monitoreo — habilitar registros de consultas lentas. Hoja de ruta: particionar por dominio, agregar réplicas de lectura, probar migraciones bajo carga.",bad:"Uso inadecuado de ORM, consultas concatenadas, resultados no limitados, desviación de esquema en CI/CD."},{title:"Calidad y Automatización",description:"xUnit, NUnit, Playwright, Selenium, Postman, QA automatizado, Pruebas de integración",best:"Validación basada en pipeline, mocks aislados y consistencia de infraestructura impulsada por pruebas.",improvable:"Baja cobertura en rutas de código asíncrono. Hoja de ruta: aplicar puertas de integración, añadir pruebas de mutación para cobertura lógica.",bad:"Dependencia de pruebas manuales, orden de ejecución de pruebas, estado compartido entre casos."},{title:"Arquitectura y Liderazgo",description:"Diseño de sistemas, Liderazgo de equipo, Agile, Cultura CI/CD, Entrega a gran escala",best:"Liderar con el ejemplo, establecer estándares arquitectónicos, enseñar razonamiento en lugar de obediencia.",improvable:"Liderazgo reactivo — construir una cadencia de mentoría proactiva. Hoja de ruta: definir niveles de autonomía de equipo y métricas de confianza medibles.",bad:"Policía de código, revisiones cerradas, decisiones emocionales en lugar de evidencias sistémicas."}]},lw={title:"Experiencia",items:[{role:"Freelance",company:"Proyectos independientes",period:"jul. 2025 – presente",description:"Trabajo en diversos proyectos pequeños de IA, web y automatización — explorando la resolución creativa de problemas y el prototipado rápido."},{role:"Pausa profesional",company:"Recuperación de salud",period:"nov. 2024 – jul. 2025",description:"Enfocado en la recuperación, el prototipado asistido por IA y los experimentos de arquitectura nativa en la nube."},{role:"Ingeniero Fullstack Senior",company:"Proxify – Getinge Medical AB",period:"nov. 2021 – nov. 2024",description:"Operación del SimulationHub para automatización de esterilización hospitalaria con microservicios C# .NET Core y coordinación REST."},{role:"Gerente DevOps",company:"Proxify – Shell Global R&D",period:"feb. 2022 – mar. 2022",description:"Gestión de pipelines CI/CD, paneles automatizados y análisis seguro para operaciones de I+D."},{role:"Ingeniero Fullstack / Media Manager",company:"One Ingage Marketing Inc.",period:"feb. 2021 – oct. 2021",description:"Desarrollo de paneles analíticos, integraciones CMS y herramientas de automatización de marketing basadas en Blazor."},{role:"Ingeniero Fullstack",company:"Indis Software Inc.",period:"dic. 2019 – feb. 2021",description:"Desarrollo de backends SaaS escalables, optimización de consultas SQL Server y automatización QA con Selenium y Postman."},{role:"Ingeniero Fullstack",company:"Joker Software Inc.",period:"ene. 2019 – sep. 2019",description:"Desarrollo de sistemas ERP, lógica de automatización de hardware y mantenimiento de plataformas .NET heredadas."},{role:"Ingeniero Fullstack",company:"Safa Informatics",period:"ago. 2017 – dic. 2018",description:"Liderazgo en proyectos de integración ERP, gestión de arquitectura API y mejora de la fiabilidad del backend."}]},cw={present:"Presente",urgency:{immediate:"Inmediata",high:"Alta",normal:"Normal",research:"Solo investigación"}},uw={title:"Proyectos",items:[{title:"Simulation Hub",companyName:"Getinge Medical AB",period:"Nov 2021 - Nov 2024 (3 años)",description:"Plataforma de simulación médica para automatización de esterilización hospitalaria, desarrollada con microservicios C# .NET Core y REST."},{title:"Automation Hub",companyName:"Getinge Medical AB",period:"Oct 2021 - Oct 2024 (3 años)",description:"Sistema avanzado de automatización hospitalaria con módulos de simulación e integración, pruebas automatizadas xUnit y despliegue Docker."},{title:"KolayCar",companyName:"INDIS Software INC",period:"Dic 2019 - Feb 2021 (1,5 años)",description:"Sistema de gestión de alquiler de vehículos con backend en C#, optimización de SQL Server y frontends heredados WebForms."},{title:"Joker ERP",companyName:"Joker Software INC",period:"Ene 2019 - Sep 2019 (0,75 años)",description:"Sistema ERP integral de fabricación a venta minorista, con interfaces Windows Forms y optimización de SQL Server."},{title:"Epsilon",companyName:"Safa Informatics",period:"Ago 2017 - Dic 2018 (1,5 años)",description:"Sistema de integración ERP para grandes mercados, con backend en C# y Python y APIs de microservicios."},{title:"Smart House",companyName:"Proyecto personal",period:"2022 - 2024 (2 años)",description:"Sistema de automatización del hogar con sensores IoT, control por voz y monitoreo remoto usando JavaScript, Python y MQTT."},{title:"Smart Garage",companyName:"Proyecto personal",period:"2021 - 2022 (1 año)",description:"Sistema de automatización de garaje con puertas motorizadas, sensores y registro en la nube usando Python y microcontroladores."},{title:"AI Drone System",companyName:"Proyecto personal",period:"2020 - 2021 (1 año)",description:"Drones autónomos con visión por computadora y navegación por IA, desarrollados en Python, OpenCV y TensorFlow Lite."}]},fw={title:"Contacto",tabs:{contact:"Información de contacto",project:"Solicitud de proyecto"},form:{name:"Tu nombre",email:"Tu correo electrónico",message:"Mensaje",send:"Enviar mensaje",sending:"Enviando...",sent:"TRANSMISIÓN ENVIADA — CONFIRMADA.",project:{title:"Título del proyecto",objective:"Objetivo en una frase",scope:"Descripción / alcance del proyecto",logic:"Lógica principal / principio técnico",dependencies:"Dependencias / herramientas",performance:"Objetivos de rendimiento (velocidad, precisión, etc.)",budgetLabel:"Presupuesto estimado (USD):",urgencyLabel:"Urgencia:",notes:"Notas o limitaciones adicionales",submit:"Enviar solicitud de proyecto",submitting:"Enviando...",sent:"SOLICITUD RECIBIDA — EN PROCESO."}},urgency:{immediate:"Inmediata",high:"Alta",normal:"Normal",research:"Solo investigación"},info:{email:"Correo electrónico",phone:"Teléfono",location:"Actual: Kayseri, Turquía"}},dw={header:iw,nav:rw,home:sw,about:ow,skills:aw,experience:lw,common:cw,projects:uw,contact:fw},hw=localStorage.getItem("locale")?.toLowerCase(),ap=navigator.language?.split("-")[0]?.toLowerCase(),pw=["en","fr","de","es"],mw=hw||(pw.includes(ap)?ap:"en"),gw=hS({legacy:!1,locale:mw,fallbackLocale:"en",messages:{en:OC,fr:jC,de:nw,es:dw}}),hf=E0(yC);hf.use(AC);hf.use(gw);hf.mount("#app");export{Pc as A,Vn as B,Je as C,ii as D,vw as E,Sn as F,vm as G,Sw as H,Aw as I,Tw as J,bg as K,ln as L,bw as M,Rw as N,IA as O,gn as P,Eg as S,Bf as T,Lg as W,Ng as _,GE as a,Mw as b,Wi as c,yt as d,ft as e,hc as f,_n as g,Nt as h,vr as i,an as j,nv as k,Js as l,tv as m,Kn as n,po as o,Yt as p,Hu as q,Ys as r,_w as s,Yn as t,Ka as u,xw as v,Nn as w,yw as x,Ew as y,Sg as z};
