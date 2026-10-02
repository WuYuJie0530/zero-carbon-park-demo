(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Dc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Mt={},ns=[],Qn=()=>{},Nd=()=>!1,ha=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),da=n=>n.startsWith("onUpdate:"),Wt=Object.assign,Lc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},kp=Object.prototype.hasOwnProperty,dt=(n,e)=>kp.call(n,e),qe=Array.isArray,Li=n=>Kr(n)==="[object Map]",qo=n=>Kr(n)==="[object Set]",Du=n=>Kr(n)==="[object Date]",Ze=n=>typeof n=="function",Lt=n=>typeof n=="string",On=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",Fd=n=>(xt(n)||Ze(n))&&Ze(n.then)&&Ze(n.catch),Od=Object.prototype.toString,Kr=n=>Od.call(n),Hp=n=>Kr(n).slice(8,-1),Bd=n=>Kr(n)==="[object Object]",Uc=n=>Lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Er=Dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Vp=/-\w/g,Nn=fa(n=>n.replace(Vp,e=>e.slice(1).toUpperCase())),Gp=/\B([A-Z])/g,ki=fa(n=>n.replace(Gp,"-$1").toLowerCase()),zd=fa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Pa=fa(n=>n?`on${zd(n)}`:""),qn=(n,e)=>!Object.is(n,e),zo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},kd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Nc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Lu;const pa=()=>Lu||(Lu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jn(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Lt(i)?Yp(i):jn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Lt(n)||xt(n))return n}const Wp=/;(?![^(]*\))/g,Xp=/:([^]+)/,$p=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Yp(n){const e={};return n.replace($p,t=>t.startsWith("/*")?"":t).split(Wp).forEach(t=>{if(t){const i=t.split(Xp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function wt(n){let e="";if(Lt(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=wt(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const qp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jp=Dc(qp);function Hd(n){return!!n||n===""}function Kp(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=ma(n[s],e[s],t);return i}function Uu(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&ma(r,i[a],t)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Zp(n,e,t){let i=Li(n),s=Li(e);if(i||s||(i=qo(n),s=qo(e),i||s))return i&&s?Uu(n,e,t):!1;const r=Object.keys(n).length,o=Object.keys(e).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!ma(n[a],e[a],t))return!1}return String(n)===String(e)}function Nu(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const o=i(n,e,t);return s.delete(n),r.delete(e),o}function ma(n,e,t){if(n===e)return!0;let i=Du(n),s=Du(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=On(n),s=On(e),i||s?n===e:(i=qe(n),s=qe(e),i||s?i&&s?Nu(n,e,t,Kp):!1:(i=xt(n),s=xt(e),i||s?!i||!s?!1:Nu(n,e,t,Zp):String(n)===String(e))))}const Vd=n=>!!(n&&n.__v_isRef===!0),se=n=>Lt(n)?n:n==null?"":qe(n)||xt(n)&&(n.toString===Od||!Ze(n.toString))?Vd(n)?se(n.value):JSON.stringify(n,Gd,2):String(n),Gd=(n,e)=>Vd(e)?Gd(n,e.value):Li(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ia(i,r)+" =>"]=s,t),{})}:qo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ia(t))}:On(e)?Ia(e):xt(e)&&!qe(e)&&!Bd(e)?String(e):e,Ia=(n,e="")=>{var t;return On(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Ht;class Jp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ht&&(Ht.active?(this.parent=Ht,this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Ht;try{return Ht=this,e()}finally{Ht=t}}}on(){++this._on===1&&(this.prevScope=Ht,Ht=this)}off(){if(this._on>0&&--this._on===0){if(Ht===this)Ht=this.prevScope;else{let e=Ht;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qp(){return Ht}let bt;const Da=new WeakSet;class Wd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&(Ht.active?Ht.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Da.has(this)&&(Da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$d(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fu(this),Yd(this);const e=bt,t=Fn;bt=this,Fn=!0;try{return this.fn()}finally{qd(this),bt=e,Fn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bc(e);this.deps=this.depsTail=void 0,Fu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wl(this)&&this.run()}get dirty(){return wl(this)}}let Xd=0,wr,Tr;function $d(n,e=!1){if(n.flags|=8,e){n.next=Tr,Tr=n;return}n.next=wr,wr=n}function Fc(){Xd++}function Oc(){if(--Xd>0)return;if(Tr){let e=Tr;for(Tr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;wr;){let e=wr;for(wr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Yd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Bc(i),em(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function wl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function jd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ur)||(n.globalVersion=Ur,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!wl(n))))return;n.flags|=2;const e=n.dep,t=bt,i=Fn;bt=n,Fn=!0;try{Yd(n);const s=n.fn(n._value);(e.version===0||qn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{bt=t,Fn=i,qd(n),n.flags&=-3}}function Bc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Bc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function em(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Fn=!0;const Kd=[];function Mi(){Kd.push(Fn),Fn=!1}function Si(){const n=Kd.pop();Fn=n===void 0?!0:n}function Fu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=bt;bt=void 0;try{e()}finally{bt=t}}}let Ur=0;class tm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!bt||!Fn||bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==bt)t=this.activeLink=new tm(bt,this),bt.deps?(t.prevDep=bt.depsTail,bt.depsTail.nextDep=t,bt.depsTail=t):bt.deps=bt.depsTail=t,Zd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=bt.depsTail,t.nextDep=void 0,bt.depsTail.nextDep=t,bt.depsTail=t,bt.deps===t&&(bt.deps=i)}return t}trigger(e){this.version++,Ur++,this.notify(e)}notify(e){Fc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Oc()}}}function Zd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Zd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Tl=new WeakMap,os=Symbol(""),Al=Symbol(""),Nr=Symbol("");function qt(n,e,t){if(Fn&&bt){let i=Tl.get(n);i||Tl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new zc),s.map=i,s.key=t),s.track()}}function _i(n,e,t,i,s,r){const o=Tl.get(n);if(!o){Ur++;return}const a=l=>{l&&l.trigger()};if(Fc(),e==="clear")o.forEach(a);else{const l=qe(n),c=l&&Uc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Nr||!On(d)&&d>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Nr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(os)),Li(n)&&a(o.get(Al)));break;case"delete":l||(a(o.get(os)),Li(n)&&a(o.get(Al)));break;case"set":Li(n)&&a(o.get(os));break}}Oc()}function vs(n){const e=ht(n);return e===n||(qt(e,"iterate",Nr),En(n))?e:ei(n)?Ui(n)?e.map(t=>Oi(Tn(t))):e.map(Oi):e.map(Tn)}function ga(n){return qt(n=ht(n),"iterate",Nr),n}function Xn(n,e){return ei(n)?Oi(Ui(n)?Tn(e):e):Tn(e)}const nm={__proto__:null,[Symbol.iterator](){return La(this,Symbol.iterator,n=>Xn(this,n))},concat(...n){return vs(this).concat(...n.map(e=>qe(e)?vs(e):e))},entries(){return La(this,"entries",n=>(n[1]=Xn(this,n[1]),n))},every(n,e){return oi(this,"every",n,e,void 0,arguments)},filter(n,e){return oi(this,"filter",n,e,t=>t.map(i=>Xn(this,i)),arguments)},find(n,e){return oi(this,"find",n,e,t=>Xn(this,t),arguments)},findIndex(n,e){return oi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return oi(this,"findLast",n,e,t=>Xn(this,t),arguments)},findLastIndex(n,e){return oi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return oi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ua(this,"includes",n)},indexOf(...n){return Ua(this,"indexOf",n)},join(n){return vs(this).join(n)},lastIndexOf(...n){return Ua(this,"lastIndexOf",n)},map(n,e){return oi(this,"map",n,e,void 0,arguments)},pop(){return lr(this,"pop")},push(...n){return lr(this,"push",n)},reduce(n,...e){return Ou(this,"reduce",n,e)},reduceRight(n,...e){return Ou(this,"reduceRight",n,e)},shift(){return lr(this,"shift")},some(n,e){return oi(this,"some",n,e,void 0,arguments)},splice(...n){return lr(this,"splice",n)},toReversed(){return vs(this).toReversed()},toSorted(n){return vs(this).toSorted(n)},toSpliced(...n){return vs(this).toSpliced(...n)},unshift(...n){return lr(this,"unshift",n)},values(){return La(this,"values",n=>Xn(this,n))}};function La(n,e,t){const i=ga(n),s=i[e]();return i!==n&&!En(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const im=Array.prototype;function oi(n,e,t,i,s,r){const o=ga(n),a=o!==n&&!En(n),l=o[e];if(l!==im[e]){const h=l.apply(n,r);return a?Tn(h):h}let c=t;o!==n&&(a?c=function(h,d){return t.call(this,Xn(n,h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ou(n,e,t,i){const s=ga(n),r=s!==n&&!En(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Xn(n,c)),t.call(this,c,Xn(n,u),h,n)}):t.length>3&&(o=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](o,...i);return a?Xn(n,l):l}function Ua(n,e,t){const i=ht(n);qt(i,"iterate",Nr);const s=i[e](...t);return(s===-1||s===!1)&&Gc(t[0])?(t[0]=ht(t[0]),i[e](...t)):s}function lr(n,e,t=[]){Mi(),Fc();const i=ht(n)[e].apply(n,t);return Oc(),Si(),i}const sm=Dc("__proto__,__v_isRef,__isVue"),Jd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(On));function rm(n){On(n)||(n=String(n));const e=ht(this);return qt(e,"has",n),e.hasOwnProperty(n)}class Qd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?mm:sf:r?nf:tf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=qe(e);if(!s){let l;if(o&&(l=nm[t]))return l;if(t==="hasOwnProperty")return rm}const a=Reflect.get(e,t,Kt(e)?e:i);if((On(t)?Jd.has(t):sm(t))||(s||qt(e,"get",t),r))return a;if(Kt(a)){const l=o&&Uc(t)?a:a.value;return s&&xt(l)?Cl(l):l}return xt(a)?s?Cl(a):Hc(a):a}}class ef extends Qd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=qe(e)&&Uc(t);if(!this._isShallow){const c=ei(r);if(!En(i)&&!ei(i)&&(r=ht(r),i=ht(i)),!o&&Kt(r)&&!Kt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:dt(e,t),l=Reflect.set(e,t,i,Kt(e)?e:s);return e===ht(s)&&l&&(a?qn(i,r)&&_i(e,"set",t,i):_i(e,"add",t,i)),l}deleteProperty(e,t){const i=dt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&_i(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!On(t)||!Jd.has(t))&&qt(e,"has",t),i}ownKeys(e){return qt(e,"iterate",qe(e)?"length":os),Reflect.ownKeys(e)}}class om extends Qd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const am=new ef,lm=new om,cm=new ef(!0);const Rl=n=>n,io=n=>Reflect.getPrototypeOf(n);function um(n,e,t){return function(...i){const s=this.__v_raw,r=ht(s),o=Li(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Rl:e?Oi:Tn;return!e&&qt(r,"iterate",l?Al:os),Wt(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function so(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function hm(n,e){const t={get(s){const r=this.__v_raw,o=ht(r),a=ht(s);n||(qn(s,a)&&qt(o,"get",s),qt(o,"get",a));const{has:l}=io(o),c=e?Rl:n?Oi:Tn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&qt(ht(s),"iterate",os),s.size},has(s){const r=this.__v_raw,o=ht(r),a=ht(s);return n||(qn(s,a)&&qt(o,"has",s),qt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ht(a),c=e?Rl:n?Oi:Tn;return!n&&qt(l,"iterate",os),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Wt(t,n?{add:so("add"),set:so("set"),delete:so("delete"),clear:so("clear")}:{add(s){const r=ht(this),o=io(r),a=ht(s),l=!e&&!En(s)&&!ei(s)?a:s;return o.has.call(r,l)||qn(s,l)&&o.has.call(r,s)||qn(a,l)&&o.has.call(r,a)||(r.add(l),_i(r,"add",l,l)),this},set(s,r){!e&&!En(r)&&!ei(r)&&(r=ht(r));const o=ht(this),{has:a,get:l}=io(o);let c=a.call(o,s);c||(s=ht(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?qn(r,u)&&_i(o,"set",s,r):_i(o,"add",s,r),this},delete(s){const r=ht(this),{has:o,get:a}=io(r);let l=o.call(r,s);l||(s=ht(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&_i(r,"delete",s,void 0),c},clear(){const s=ht(this),r=s.size!==0,o=s.clear();return r&&_i(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=um(s,n,e)}),t}function kc(n,e){const t=hm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(dt(t,s)&&s in i?t:i,s,r)}const dm={get:kc(!1,!1)},fm={get:kc(!1,!0)},pm={get:kc(!0,!1)};const tf=new WeakMap,nf=new WeakMap,sf=new WeakMap,mm=new WeakMap;function gm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hc(n){return ei(n)?n:Vc(n,!1,am,dm,tf)}function _m(n){return Vc(n,!1,cm,fm,nf)}function Cl(n){return Vc(n,!0,lm,pm,sf)}function Vc(n,e,t,i,s){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=gm(Hp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Ui(n){return ei(n)?Ui(n.__v_raw):!!(n&&n.__v_isReactive)}function ei(n){return!!(n&&n.__v_isReadonly)}function En(n){return!!(n&&n.__v_isShallow)}function Gc(n){return n?!!n.__v_raw:!1}function ht(n){const e=n&&n.__v_raw;return e?ht(e):n}function vm(n){return!dt(n,"__v_skip")&&Object.isExtensible(n)&&kd(n,"__v_skip",!0),n}const Tn=n=>xt(n)?Hc(n):n,Oi=n=>xt(n)?Cl(n):n;function Kt(n){return n?n.__v_isRef===!0:!1}function ot(n){return xm(n,!1)}function xm(n,e){return Kt(n)?n:new ym(n,e)}class ym{constructor(e,t){this.dep=new zc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ht(e),this._value=t?e:Tn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||En(e)||ei(e);e=i?e:ht(e),qn(e,t)&&(this._rawValue=e,this._value=i?e:Tn(e),this.dep.trigger())}}function Ge(n){return Kt(n)?n.value:n}const Mm={get:(n,e,t)=>e==="__v_raw"?n:Ge(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Kt(s)&&!Kt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function rf(n){return Ui(n)?n:new Proxy(n,Mm)}class Sm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new zc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return $d(this,!0),!0}get value(){const e=this.dep.track();return jd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function bm(n,e,t=!1){let i,s;return Ze(n)?i=n:(i=n.get,s=n.set),new Sm(i,s,t)}const ro={},jo=new WeakMap;let Ji;function Em(n,e=!1,t=Ji){if(t){let i=jo.get(t);i||jo.set(t,i=[]),i.push(n)}}function wm(n,e,t=Mt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=x=>s?x:En(x)||s===!1||s===0?vi(x,1):vi(x);let u,h,d,f,y=!1,S=!1;if(Kt(n)?(h=()=>n.value,y=En(n)):Ui(n)?(h=()=>c(n),y=!0):qe(n)?(S=!0,y=n.some(x=>Ui(x)||En(x)),h=()=>n.map(x=>{if(Kt(x))return x.value;if(Ui(x))return c(x);if(Ze(x))return l?l(x,2):x()})):Ze(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){Mi();try{d()}finally{Si()}}const x=Ji;Ji=u;try{return l?l(n,3,[f]):n(f)}finally{Ji=x}}:h=Qn,e&&s){const x=h,F=s===!0?1/0:s;h=()=>vi(x(),F)}const g=Qp(),m=()=>{u.stop(),g&&g.active&&Lc(g.effects,u)};if(r&&e){const x=e;e=(...F)=>{const N=x(...F);return m(),N}}let R=S?new Array(n.length).fill(ro):ro;const b=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const F=u.run();if(x||s||y||(S?F.some((N,O)=>qn(N,R[O])):qn(F,R))){d&&d();const N=Ji;Ji=u;try{const O=[F,R===ro?void 0:S&&R[0]===ro?[]:R,f];R=F,l?l(e,3,O):e(...O)}finally{Ji=N}}}else u.run()};return a&&a(b),u=new Wd(h),u.scheduler=o?()=>o(b,!1):b,f=x=>Em(x,!1,u),d=u.onStop=()=>{const x=jo.get(u);if(x){if(l)l(x,4);else for(const F of x)F();jo.delete(u)}},e?i?b(!0):R=u.run():o?o(b.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function vi(n,e=1/0,t){if(e<=0||!xt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Kt(n))vi(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)vi(n[i],e,t);else if(qo(n)||Li(n))n.forEach(i=>{vi(i,e,t)});else if(Bd(n)){for(const i in n)vi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&vi(n[i],e,t)}return n}function Zr(n,e,t,i){try{return i?n(...i):n()}catch(s){_a(s,e,t)}}function Bn(n,e,t,i){if(Ze(n)){const s=Zr(n,e,t,i);return s&&Fd(s)&&s.catch(r=>{_a(r,e,t)}),s}if(qe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Bn(n[r],e,t,i));return s}}function _a(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Mt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Mi(),Zr(r,null,10,[n,l,c]),Si();return}}Tm(n,t,s,i,o)}function Tm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const sn=[];let Wn=-1;const Hs=[];let Pi=null,Ns=0;const of=Promise.resolve();let Ko=null;function js(n){const e=Ko||of;return n?e.then(this?n.bind(this):n):e}function Am(n){let e=Wn+1,t=sn.length;for(;e<t;){const i=e+t>>>1,s=sn[i],r=Fr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Wc(n){if(!(n.flags&1)){const e=Fr(n),t=sn[sn.length-1];!t||!(n.flags&2)&&e>=Fr(t)?sn.push(n):sn.splice(Am(e),0,n),n.flags|=1,af()}}function af(){Ko||(Ko=of.then(cf))}function Rm(n){if(!qe(n))Pi&&n.id===-1?Pi.splice(Ns+1,0,n):n.flags&1||(Hs.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Hs.push(n[e]);af()}function Bu(n,e,t=Wn+1){for(;t<sn.length;t++){const i=sn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;sn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function lf(n){if(Hs.length){const e=[...new Set(Hs)].sort((t,i)=>Fr(t)-Fr(i));if(Hs.length=0,Pi){for(let t=0;t<e.length;t++)Pi.push(e[t]);return}for(Pi=e,Ns=0;Ns<Pi.length;Ns++){const t=Pi[Ns];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Pi=null,Ns=0}}const Fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function cf(n){try{for(Wn=0;Wn<sn.length;Wn++){const e=sn[Wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Wn<sn.length;Wn++){const e=sn[Wn];e&&(e.flags&=-2)}Wn=-1,sn.length=0,lf(),Ko=null,(sn.length||Hs.length)&&cf()}}let jt=null,uf=null;function Zo(n){const e=jt;return jt=n,uf=n&&n.type.__scopeId||null,e}function Pl(n,e=jt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ju(-1);const r=Zo(e),o=xi.length;let a;try{a=n(...s)}finally{for(let l=xi.length;l>o;l--)jc();Zo(r),i._d&&ju(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Cm(n,e){if(jt===null)return n;const t=Sa(jt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Mt]=e[s];r&&(Ze(r)&&(r={mounted:r,updated:r}),r.deep&&vi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Wi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Mi(),Bn(l,t,8,[n.el,a,n,e]),Si())}}function Pm(n,e){if(on){let t=on.provides;const i=on.parent&&on.parent.provides;i===t&&(t=on.provides=Object.create(i)),t[n]=e}}function ko(n,e,t=!1){const i=Of();if(i||Gs){let s=Gs?Gs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ze(e)?e.call(i&&i.proxy):e}}const Im=Symbol.for("v-scx"),Dm=()=>ko(Im);function as(n,e,t){return hf(n,e,t)}function hf(n,e,t=Mt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Wt({},t),l=e&&i||!e&&r!=="post";let c;if(zr){if(r==="sync"){const f=Dm();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Qn,f.resume=Qn,f.pause=Qn,f}}const u=on;a.call=(f,y,S)=>Bn(f,u,y,S);let h=!1;r==="post"?a.scheduler=f=>{dn(f,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,y)=>{y?f():Wc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=wm(n,e,a);return zr&&(c?c.push(d):l&&d()),d}function Lm(n,e,t){const i=this.proxy,s=Lt(n)?n.includes(".")?df(i,n):()=>i[n]:n.bind(i,i);let r;Ze(e)?r=e:(r=e.handler,t=e);const o=Jr(this),a=hf(s,r.bind(i),t);return o(),a}function df(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Um=Symbol("_vte"),va=n=>n.__isTeleport,Na=Symbol("_leaveCb");function Nm(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==ti){e=t;break}}return e}function ff(n){if(!$c(n))return va(n.type)&&n.children?Nm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ze(t.default))return t.default()}}function Xc(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Xc(va(t.type)&&ff(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function fs(n,e){return Ze(n)?Wt({name:n.name},e,{setup:n}):n}function Fm(){const n=Of();return n?(n.appContext.config.idPrefix||"v")+"-"+n.ids[0]+n.ids[1]++:""}function pf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function zu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Jo=new WeakMap;function Ar(n,e,t,i,s=!1){if(qe(n)){n.forEach((S,g)=>Ar(S,e&&(qe(e)?e[g]:e),t,i,s));return}if(Vs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ar(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Sa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Mt?a.refs={}:a.refs,h=a.setupState,d=ht(h),f=h===Mt?Nd:S=>zu(u,S)?!1:dt(d,S),y=(S,g)=>!(g&&zu(u,g));if(c!=null&&c!==l){if(ku(e),Lt(c))u[c]=null,f(c)&&(h[c]=null);else if(Kt(c)){const S=e;y(c,S.k)&&(c.value=null),S.k&&(u[S.k]=null)}}if(Ze(l))Zr(l,a,12,[o,u]);else{const S=Lt(l),g=Kt(l);if(S||g){const m=()=>{if(n.f){const R=S?f(l)?h[l]:u[l]:y()||!n.k?l.value:u[n.k];if(s)qe(R)&&Lc(R,r);else if(qe(R))R.includes(r)||R.push(r);else if(S)u[l]=[r],f(l)&&(h[l]=u[l]);else{const b=[r];y(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else S?(u[l]=o,f(l)&&(h[l]=o)):g&&(y(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const R=()=>{m(),Jo.delete(n)};R.id=-1,Jo.set(n,R),dn(R,t)}else ku(n),m()}}}function ku(n){const e=Jo.get(n);e&&(e.flags|=8,Jo.delete(n))}pa().requestIdleCallback;pa().cancelIdleCallback;const Vs=n=>!!n.type.__asyncLoader,$c=n=>n.type.__isKeepAlive;function Om(n,e){mf(n,"a",e)}function Bm(n,e){mf(n,"da",e)}function mf(n,e,t=on){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(xa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)$c(s.parent.vnode)&&zm(i,e,t,s),s=s.parent}}function zm(n,e,t,i){const s=xa(e,n,i,!0);gf(()=>{Lc(i[e],s)},t)}function xa(n,e,t=on,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Mi();const a=Jr(t),l=Bn(e,t,n,o);return a(),Si(),l});return i?s.unshift(r):s.push(r),r}}const bi=n=>(e,t=on)=>{(!zr||n==="sp")&&xa(n,(...i)=>e(...i),t)},km=bi("bm"),ir=bi("m"),Hm=bi("bu"),Vm=bi("u"),sr=bi("bum"),gf=bi("um"),Gm=bi("sp"),Wm=bi("rtg"),Xm=bi("rtc");function $m(n,e=on){xa("ec",n,e)}const Ym=Symbol.for("v-ndc");function kt(n,e,t,i){let s;const r=t,o=qe(n);if(o||Lt(n)){const a=o&&Ui(n);let l=!1,c=!1;a&&(l=!En(n),c=ei(n),n=ga(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?Oi(Tn(n[u])):Tn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(xt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function qm(n,e,t,i,s,r){if(t==null&&(t={}),jt.ce||jt.parent&&Vs(jt.parent)&&jt.parent.ce){const c=t,u=Object.keys(c).length>0;return Le(),ea(st,null,[gt("slot",c,i)],u?-2:64)}let o=n[e];o&&o._c&&(o._d=!1);const a=xi.length;Le();let l;try{const c=o&&_f(o(t)),u=t.key||r||c&&c.key;l=ea(st,{key:(u&&!On(u)?u:`_${e}`)+(!c&&i?"_fb":"")},c||(i?i():[]),c&&n._===1?64:-2)}catch(c){for(let u=xi.length;u>a;u--)jc();throw c}finally{o&&o._c&&(o._d=!0)}return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function _f(n){return n.some(e=>Kc(e)?!(e.type===ti||e.type===st&&!_f(e.children)):!0)?n:null}const Il=n=>n?Bf(n)?Sa(n):Il(n.parent):null,Rr=Wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Il(n.parent),$root:n=>Il(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>xf(n),$forceUpdate:n=>n.f||(n.f=()=>{Wc(n.update)}),$nextTick:n=>n.n||(n.n=js.bind(n.proxy)),$watch:n=>Lm.bind(n)}),Fa=(n,e)=>n!==Mt&&!n.__isScriptSetup&&dt(n,e),jm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Fa(i,e))return o[e]=1,i[e];if(s!==Mt&&dt(s,e))return o[e]=2,s[e];if(dt(r,e))return o[e]=3,r[e];if(t!==Mt&&dt(t,e))return o[e]=4,t[e];Dl&&(o[e]=0)}}const c=Rr[e];let u,h;if(c)return e==="$attrs"&&qt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Mt&&dt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,dt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Fa(s,e)?(s[e]=t,!0):i!==Mt&&dt(i,e)?(i[e]=t,!0):dt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Mt&&a[0]!=="$"&&dt(n,a)||Fa(e,a)||dt(r,a)||dt(i,a)||dt(Rr,a)||dt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:dt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hu(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Dl=!0;function Km(n){const e=xf(n),t=n.proxy,i=n.ctx;Dl=!1,e.beforeCreate&&Vu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:y,activated:S,deactivated:g,beforeDestroy:m,beforeUnmount:R,destroyed:b,unmounted:x,render:F,renderTracked:N,renderTriggered:O,errorCaptured:B,serverPrefetch:A,expose:T,inheritAttrs:H,components:K,directives:k,filters:U}=e;if(c&&Zm(c,i,null),o)for(const D in o){const I=o[D];Ze(I)&&(i[D]=I.bind(t))}if(s){const D=s.call(t,t);xt(D)&&(n.data=Hc(D))}if(Dl=!0,r)for(const D in r){const I=r[D],ee=Ze(I)?I.bind(t,t):Ze(I.get)?I.get.bind(t,t):Qn,he=!Ze(I)&&Ze(I.set)?I.set.bind(t):Qn,G=rt({get:ee,set:he});Object.defineProperty(i,D,{enumerable:!0,configurable:!0,get:()=>G.value,set:pe=>G.value=pe})}if(a)for(const D in a)vf(a[D],i,t,D);if(l){const D=Ze(l)?l.call(t):l;Reflect.ownKeys(D).forEach(I=>{Pm(I,D[I])})}u&&Vu(u,n,"c");function L(D,I){qe(I)?I.forEach(ee=>D(ee.bind(t))):I&&D(I.bind(t))}if(L(km,h),L(ir,d),L(Hm,f),L(Vm,y),L(Om,S),L(Bm,g),L($m,B),L(Xm,N),L(Wm,O),L(sr,R),L(gf,x),L(Gm,A),qe(T))if(T.length){const D=n.exposed||(n.exposed={});T.forEach(I=>{Object.defineProperty(D,I,{get:()=>t[I],set:ee=>t[I]=ee,enumerable:!0})})}else n.exposed||(n.exposed={});F&&n.render===Qn&&(n.render=F),H!=null&&(n.inheritAttrs=H),K&&(n.components=K),k&&(n.directives=k),A&&pf(n)}function Zm(n,e,t=Qn){qe(n)&&(n=Ll(n));for(const i in n){const s=n[i];let r;xt(s)?"default"in s?r=ko(s.from||i,s.default,!0):r=ko(s.from||i):r=ko(s),Kt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Vu(n,e,t){Bn(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function vf(n,e,t,i){let s=i.includes(".")?df(t,i):()=>t[i];if(Lt(n)){const r=e[n];Ze(r)&&as(s,r)}else if(Ze(n))as(s,n.bind(t));else if(xt(n))if(qe(n))n.forEach(r=>vf(r,e,t,i));else{const r=Ze(n.handler)?n.handler.bind(t):e[n.handler];Ze(r)&&as(s,r,n)}}function xf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Qo(l,c,o,!0)),Qo(l,e,o)),xt(e)&&r.set(e,l),l}function Qo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Qo(n,r,t,!0),s&&s.forEach(o=>Qo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Jm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Jm={data:Gu,props:Wu,emits:Wu,methods:yr,computed:yr,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:yr,directives:yr,watch:eg,provide:Gu,inject:Qm};function Gu(n,e){return e?n?function(){return Wt(Ze(n)?n.call(this,this):n,Ze(e)?e.call(this,this):e)}:e:n}function Qm(n,e){return yr(Ll(n),Ll(e))}function Ll(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function en(n,e){return n?[...new Set([].concat(n,e))]:e}function yr(n,e){return n?Wt(Object.create(null),n,e):e}function Wu(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:Wt(Object.create(null),Hu(n),Hu(e??{})):e}function eg(n,e){if(!n)return e;if(!e)return n;const t=Wt(Object.create(null),n);for(const i in e)t[i]=en(n[i],e[i]);return t}function yf(){return{app:null,config:{isNativeTag:Nd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tg=0;function ng(n,e){return function(i,s=null){Ze(i)||(i=Wt({},i)),s!=null&&!xt(s)&&(s=null);const r=yf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:tg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Dg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ze(u.install)?(o.add(u),u.install(c,...h)):Ze(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||gt(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(f,u,d),l=!0,c._container=u,u.__vue_app__=c,Sa(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Bn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Gs;Gs=c;try{return u()}finally{Gs=h}}};return c}}let Gs=null;const ig=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Nn(e)}Modifiers`]||n[`${ki(e)}Modifiers`];function sg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Mt;let s=t;const r=e.startsWith("update:"),o=r&&ig(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Lt(u)?u.trim():u)),o.number&&(s=s.map(Nc)));let a,l=i[a=Pa(e)]||i[a=Pa(Nn(e))];!l&&r&&(l=i[a=Pa(ki(e))]),l&&Bn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Bn(c,n,6,s)}}const rg=new WeakMap;function Mf(n,e,t=!1){const i=t?rg:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ze(n)){const l=c=>{const u=Mf(c,e,!0);u&&(a=!0,Wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(xt(n)&&i.set(n,null),null):(qe(r)?r.forEach(l=>o[l]=null):Wt(o,r),xt(n)&&i.set(n,o),o)}function ya(n,e){return!n||!ha(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),dt(n,e[0].toLowerCase()+e.slice(1))||dt(n,ki(e))||dt(n,e))}function Xu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:y,inheritAttrs:S}=n,g=Zo(n);let m,R;try{if(t.shapeFlag&4){const x=s||i,F=x;m=$n(c.call(F,x,u,h,f,d,y)),R=a}else{const x=e;m=$n(x.length>1?x(h,{attrs:a,slots:o,emit:l}):x(h,null)),R=e.props?a:og(a)}}catch(x){xi.length=0,_a(x,n,1),m=gt(ti)}let b=m;if(R&&S!==!1){const x=Object.keys(R),{shapeFlag:F}=b;x.length&&F&7&&(r&&x.some(da)&&(R=ag(R,r)),b=Ks(b,R,!1,!0))}if(t.dirs&&(b=Ks(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition){const x=va(b.type)&&ff(b)||b;Xc(x,t.transition)}return m=b,Zo(g),m}const og=n=>{let e;for(const t in n)(t==="class"||t==="style"||ha(t))&&((e||(e={}))[t]=n[t]);return e},ag=(n,e)=>{const t={};for(const i in n)(!da(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function lg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?$u(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(Sf(o,i,d)&&!ya(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$u(i,o,c):!0:!!o;return!1}function $u(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Sf(e,n,r)&&!ya(t,r))return!0}return!1}function Sf(n,e,t){const i=n[t],s=e[t];return t==="style"&&xt(i)&&xt(s)?!ma(i,s):i!==s}function cg({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const bf={},Ef=()=>Object.create(bf),wf=n=>Object.getPrototypeOf(n)===bf;function ug(n,e,t,i=!1){const s={},r=Ef();n.propsDefaults=Object.create(null),Tf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:_m(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function hg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ht(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ya(n.emitsOptions,d))continue;const f=e[d];if(l)if(dt(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const y=Nn(d);s[y]=Ul(l,a,y,f,n,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{Tf(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!dt(e,h)&&((u=ki(h))===h||!dt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Ul(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!dt(e,h))&&(delete r[h],c=!0)}c&&_i(n.attrs,"set","")}function Tf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Er(l))continue;const c=e[l];let u;s&&dt(s,u=Nn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ya(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ht(t),c=a||Mt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Ul(s,l,h,c[h],n,!dt(c,h))}}return o}function Ul(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ze(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Jr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ki(t))&&(i=!0))}return i}const dg=new WeakMap;function Af(n,e,t=!1){const i=t?dg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ze(n)){const u=h=>{l=!0;const[d,f]=Af(h,e,!0);Wt(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return xt(n)&&i.set(n,ns),ns;if(qe(r))for(let u=0;u<r.length;u++){const h=Nn(r[u]);Yu(h)&&(o[h]=Mt)}else if(r)for(const u in r){const h=Nn(u);if(Yu(h)){const d=r[u],f=o[h]=qe(d)||Ze(d)?{type:d}:Wt({},d),y=f.type;let S=!1,g=!0;if(qe(y))for(let m=0;m<y.length;++m){const R=y[m],b=Ze(R)&&R.name;if(b==="Boolean"){S=!0;break}else b==="String"&&(g=!1)}else S=Ze(y)&&y.name==="Boolean";f[0]=S,f[1]=g,(S||dt(f,"default"))&&a.push(h)}}const c=[o,a];return xt(n)&&i.set(n,c),c}function Yu(n){return n[0]!=="$"&&!Er(n)}const Yc=n=>n==="_"||n==="_ctx"||n==="$stable",qc=n=>qe(n)?n.map($n):[$n(n)],fg=(n,e,t)=>{if(e._n)return e;const i=Pl((...s)=>qc(e(...s)),t);return i._c=!1,i},Rf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Yc(s))continue;const r=n[s];if(Ze(r))e[s]=fg(s,r,i);else if(r!=null){const o=qc(r);e[s]=()=>o}}},Cf=(n,e)=>{const t=qc(e);n.slots.default=()=>t},Pf=(n,e,t)=>{for(const i in e)(t||!Yc(i))&&(n[i]=e[i])},pg=(n,e,t)=>{const i=n.slots=Ef();if(n.vnode.shapeFlag&32){const s=e._;s?(Pf(i,e,t),t&&kd(i,"_",s,!0)):Rf(e,i)}else e&&Cf(n,e)},mg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Mt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Pf(s,e,t):(r=!e.$stable,Rf(e,s)),o=e}else e&&(Cf(n,e),o={default:1});if(r)for(const a in s)!Yc(a)&&o[a]==null&&delete s[a]},dn=yg;function gg(n){return _g(n)}function _g(n,e){const t=pa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Qn,insertStaticContent:y}=n,S=(_,p,W,V=null,$=null,q=null,re=void 0,Z=null,ie=!!p.dynamicChildren)=>{if(_===p)return;_&&!cr(_,p)&&(V=ue(_),pe(_,$,q,!0),_=null),p.patchFlag===-2&&(ie=!1,p.dynamicChildren=null),p.dynamicChildren&&_&&_.dynamicChildren&&_.dynamicChildren.hasOnce&&(p.dynamicChildren===ns&&(p.dynamicChildren=[]),p.dynamicChildren.hasOnce=!0);const{type:Y,ref:me,shapeFlag:E}=p;switch(Y){case Ma:g(_,p,W,V);break;case ti:m(_,p,W,V);break;case Ho:_==null&&R(p,W,V,re);break;case st:K(_,p,W,V,$,q,re,Z,ie);break;default:E&1?F(_,p,W,V,$,q,re,Z,ie):E&6?k(_,p,W,V,$,q,re,Z,ie):(E&64||E&128)&&Y.process(_,p,W,V,$,q,re,Z,ie,de)}me!=null&&$?Ar(me,_&&_.ref,q,p||_,!p):me==null&&_&&_.ref!=null&&Ar(_.ref,null,q,_,!0)},g=(_,p,W,V)=>{if(_==null)i(p.el=a(p.children),W,V);else{const $=p.el=_.el;p.children!==_.children&&c($,p.children)}},m=(_,p,W,V)=>{_==null?i(p.el=l(p.children||""),W,V):p.el=_.el},R=(_,p,W,V)=>{[_.el,_.anchor]=y(_.children,p,W,V,_.el,_.anchor)},b=({el:_,anchor:p},W,V)=>{let $;for(;_&&_!==p;)$=d(_),i(_,W,V),_=$;i(p,W,V)},x=({el:_,anchor:p})=>{let W;for(;_&&_!==p;)W=d(_),s(_),_=W;s(p)},F=(_,p,W,V,$,q,re,Z,ie)=>{if(p.type==="svg"?re="svg":p.type==="math"&&(re="mathml"),_==null)N(p,W,V,$,q,re,Z,ie);else{const Y=_.el&&_.el._isVueCE?_.el:null;try{Y&&Y._beginPatch(),A(_,p,$,q,re,Z,ie)}finally{Y&&Y._endPatch()}}},N=(_,p,W,V,$,q,re,Z)=>{let ie,Y;const{props:me,shapeFlag:E,transition:M,dirs:X}=_;if(ie=_.el=o(_.type,q,me&&me.is,me),E&8?u(ie,_.children):E&16&&B(_.children,ie,null,V,$,Oa(_,q),re,Z),X&&Wi(_,null,V,"created"),O(ie,_,_.scopeId,re,V),me){for(const ce in me)ce!=="value"&&!Er(ce)&&r(ie,ce,null,me[ce],q,V);"value"in me&&r(ie,"value",null,me.value,q),(Y=me.onVnodeBeforeMount)&&Vn(Y,V,_)}X&&Wi(_,null,V,"beforeMount");const te=vg($,M);te&&M.beforeEnter(ie),i(ie,p,W),((Y=me&&me.onVnodeMounted)||te||X)&&dn(()=>{Y&&Vn(Y,V,_),te&&M.enter(ie),X&&Wi(_,null,V,"mounted")},$)},O=(_,p,W,V,$)=>{if(W&&f(_,W),V)for(let q=0;q<V.length;q++)f(_,V[q]);if($){let q=$.subTree;if(p===q||Uf(q.type)&&(q.ssContent===p||q.ssFallback===p)){const re=$.vnode;O(_,re,re.scopeId,re.slotScopeIds,$.parent)}}},B=(_,p,W,V,$,q,re,Z,ie=0)=>{for(let Y=ie;Y<_.length;Y++){const me=_[Y]=Z?gi(_[Y]):$n(_[Y]);S(null,me,p,W,V,$,q,re,Z)}},A=(_,p,W,V,$,q,re)=>{const Z=p.el=_.el;let{patchFlag:ie,dynamicChildren:Y,dirs:me}=p;ie|=_.patchFlag&16;const E=_.props||Mt,M=p.props||Mt;let X;if(W&&Xi(W,!1),(X=M.onVnodeBeforeUpdate)&&Vn(X,W,p,_),me&&Wi(p,_,W,"beforeUpdate"),W&&Xi(W,!0),Y&&(!_.dynamicChildren||_.dynamicChildren.length!==Y.length)&&(ie=0,re=!1,Y=null),(E.innerHTML&&M.innerHTML==null||E.textContent&&M.textContent==null)&&u(Z,""),Y?T(_.dynamicChildren,Y,Z,W,V,Oa(p,$),q):re||I(_,p,Z,null,W,V,Oa(p,$),q,!1),ie>0){if(ie&16)H(Z,E,M,W,$);else if(ie&2&&E.class!==M.class&&r(Z,"class",null,M.class,$),ie&4&&r(Z,"style",E.style,M.style,$),ie&8){const te=p.dynamicProps;for(let ce=0;ce<te.length;ce++){const ne=te[ce],Ee=E[ne],ge=M[ne];(ge!==Ee||ne==="value")&&r(Z,ne,Ee,ge,$,W)}}ie&1&&_.children!==p.children&&u(Z,p.children)}else!re&&Y==null&&H(Z,E,M,W,$);((X=M.onVnodeUpdated)||me)&&dn(()=>{X&&Vn(X,W,p,_),me&&Wi(p,_,W,"updated")},V)},T=(_,p,W,V,$,q,re)=>{for(let Z=0;Z<p.length;Z++){const ie=_[Z],Y=p[Z],me=ie.el&&(ie.type===st||!cr(ie,Y)||ie.shapeFlag&198)?h(ie.el):W;S(ie,Y,me,null,V,$,q,re,!0)}},H=(_,p,W,V,$)=>{if(p!==W){if(p!==Mt)for(const q in p)!Er(q)&&!(q in W)&&r(_,q,p[q],null,$,V);for(const q in W){if(Er(q))continue;const re=W[q],Z=p[q];re!==Z&&q!=="value"&&r(_,q,Z,re,$,V)}"value"in W&&r(_,"value",p.value,W.value,$)}},K=(_,p,W,V,$,q,re,Z,ie)=>{const Y=p.el=_?_.el:a(""),me=p.anchor=_?_.anchor:a("");let{patchFlag:E,dynamicChildren:M,slotScopeIds:X}=p;X&&(Z=Z?Z.concat(X):X),_==null?(i(Y,W,V),i(me,W,V),B(p.children||[],W,me,$,q,re,Z,ie)):E>0&&E&64&&M&&_.dynamicChildren&&_.dynamicChildren.length===M.length?(T(_.dynamicChildren,M,W,$,q,re,Z),(p.key!=null||$&&p===$.subTree)&&If(_,p,!0)):I(_,p,W,me,$,q,re,Z,ie)},k=(_,p,W,V,$,q,re,Z,ie)=>{p.slotScopeIds=Z,_==null?p.shapeFlag&512?$.ctx.activate(p,W,V,re,ie):U(p,W,V,$,q,re,ie):P(_,p,ie)},U=(_,p,W,V,$,q,re)=>{const Z=_.component=Tg(_,V,$);if($c(_)&&(Z.ctx.renderer=de),Ag(Z,!1,re),Z.asyncDep){if($&&$.registerDep(Z,L,re),!_.el){const ie=Z.subTree=gt(ti);m(null,ie,p,W),_.placeholder=ie.el}}else L(Z,_,p,W,$,q,re)},P=(_,p,W)=>{const V=p.component=_.component;if(lg(_,p,W))if(V.asyncDep&&!V.asyncResolved){p.el=_.el,D(V,p,W);return}else V.next=p,V.update();else p.el=_.el,V.vnode=p},L=(_,p,W,V,$,q,re)=>{const Z=()=>{if(_.isMounted){let{next:E,bu:M,u:X,parent:te,vnode:ce}=_;{const Pe=Df(_);if(Pe){E&&(E.el=ce.el,D(_,E,re)),Pe.asyncDep.then(()=>{dn(()=>{_.isUnmounted||Y()},$)});return}}let ne=E,Ee;Xi(_,!1),E?(E.el=ce.el,D(_,E,re)):E=ce,M&&zo(M),(Ee=E.props&&E.props.onVnodeBeforeUpdate)&&Vn(Ee,te,E,ce),Xi(_,!0);const ge=Xu(_),Ae=_.subTree;_.subTree=ge,S(Ae,ge,h(Ae.el),ue(Ae),_,$,q),E.el=ge.el,ne===null&&cg(_,ge.el),X&&dn(X,$),(Ee=E.props&&E.props.onVnodeUpdated)&&dn(()=>Vn(Ee,te,E,ce),$)}else{let E;const{el:M,props:X}=p,{bm:te,m:ce,parent:ne,root:Ee,type:ge}=_,Ae=Vs(p);Xi(_,!1),te&&zo(te),!Ae&&(E=X&&X.onVnodeBeforeMount)&&Vn(E,ne,p),Xi(_,!0);{Ee.ce&&Ee.ce._hasShadowRoot()&&Ee.ce._injectChildStyle(ge,_.parent?_.parent.type:void 0);const Pe=_.subTree=Xu(_);S(null,Pe,W,V,_,$,q),p.el=Pe.el}if(ce&&dn(ce,$),!Ae&&(E=X&&X.onVnodeMounted)){const Pe=p;dn(()=>Vn(E,ne,Pe),$)}(p.shapeFlag&256||ne&&Vs(ne.vnode)&&ne.vnode.shapeFlag&256)&&_.a&&dn(_.a,$),_.isMounted=!0,p=W=V=null}};_.scope.on();const ie=_.effect=new Wd(Z);_.scope.off();const Y=_.update=ie.run.bind(ie),me=_.job=ie.runIfDirty.bind(ie);me.i=_,me.id=_.uid,ie.scheduler=()=>Wc(me),Xi(_,!0),Y()},D=(_,p,W)=>{p.component=_;const V=_.vnode.props;_.vnode=p,_.next=null,hg(_,p.props,V,W),mg(_,p.children,W),Mi(),Bu(_),Si()},I=(_,p,W,V,$,q,re,Z,ie=!1)=>{const Y=_&&_.children,me=_?_.shapeFlag:0,E=p.children,{patchFlag:M,shapeFlag:X}=p;if(M>0){if(M&128){he(Y,E,W,V,$,q,re,Z,ie);return}else if(M&256){ee(Y,E,W,V,$,q,re,Z,ie);return}}X&8?(me&16&&le(Y,$,q),E!==Y&&u(W,E)):me&16?X&16?he(Y,E,W,V,$,q,re,Z,ie):le(Y,$,q,!0):(me&8&&u(W,""),X&16&&B(E,W,V,$,q,re,Z,ie))},ee=(_,p,W,V,$,q,re,Z,ie)=>{_=_||ns,p=p||ns;const Y=_.length,me=p.length,E=Math.min(Y,me);let M;for(M=0;M<E;M++){const X=p[M]=ie?gi(p[M]):$n(p[M]);S(_[M],X,W,null,$,q,re,Z,ie)}Y>me?le(_,$,q,!0,!1,E):B(p,W,V,$,q,re,Z,ie,E)},he=(_,p,W,V,$,q,re,Z,ie)=>{let Y=0;const me=p.length;let E=_.length-1,M=me-1;for(;Y<=E&&Y<=M;){const X=_[Y],te=p[Y]=ie?gi(p[Y]):$n(p[Y]);if(cr(X,te))S(X,te,W,null,$,q,re,Z,ie);else break;Y++}for(;Y<=E&&Y<=M;){const X=_[E],te=p[M]=ie?gi(p[M]):$n(p[M]);if(cr(X,te))S(X,te,W,null,$,q,re,Z,ie);else break;E--,M--}if(Y>E){if(Y<=M){const X=M+1,te=X<me?p[X].el:V;for(;Y<=M;)S(null,p[Y]=ie?gi(p[Y]):$n(p[Y]),W,te,$,q,re,Z,ie),Y++}}else if(Y>M)for(;Y<=E;)pe(_[Y],$,q,!0),Y++;else{const X=Y,te=Y,ce=new Map;for(Y=te;Y<=M;Y++){const Oe=p[Y]=ie?gi(p[Y]):$n(p[Y]);Oe.key!=null&&ce.set(Oe.key,Y)}let ne,Ee=0;const ge=M-te+1;let Ae=!1,Pe=0;const _e=new Array(ge);for(Y=0;Y<ge;Y++)_e[Y]=0;for(Y=X;Y<=E;Y++){const Oe=_[Y];if(Ee>=ge){pe(Oe,$,q,!0);continue}let De;if(Oe.key!=null)De=ce.get(Oe.key);else for(ne=te;ne<=M;ne++)if(_e[ne-te]===0&&cr(Oe,p[ne])){De=ne;break}De===void 0?pe(Oe,$,q,!0):(_e[De-te]=Y+1,De>=Pe?Pe=De:Ae=!0,S(Oe,p[De],W,null,$,q,re,Z,ie),Ee++)}const Ce=Ae?xg(_e):ns;for(ne=Ce.length-1,Y=ge-1;Y>=0;Y--){const Oe=te+Y,De=p[Oe],Te=p[Oe+1],je=Oe+1<me?Te.el||Lf(Te):V;_e[Y]===0?S(null,De,W,je,$,q,re,Z,ie):Ae&&(ne<0||Y!==Ce[ne]?G(De,W,je,2):ne--)}}},G=(_,p,W,V,$=null)=>{const{el:q,type:re,transition:Z,children:ie,shapeFlag:Y}=_;if(Y&6){G(_.component.subTree,p,W,V);return}if(Y&128){_.suspense.move(p,W,V);return}if(Y&64){re.move(_,p,W,de);return}if(re===st){i(q,p,W);for(let E=0;E<ie.length;E++)G(ie[E],p,W,V);i(_.anchor,p,W);return}if(re===Ho){b(_,p,W);return}if(V!==2&&Y&1&&Z)if(V===0)Z.persisted&&!q[Na]?i(q,p,W):(Z.beforeEnter(q),i(q,p,W),dn(()=>Z.enter(q),$));else{const{leave:E,delayLeave:M,afterLeave:X}=Z,te=()=>{_.ctx.isUnmounted?s(q):i(q,p,W)},ce=()=>{const ne=q._isLeaving||!!q[Na];q._isLeaving&&q[Na](!0),Z.persisted&&!ne?te():E(q,()=>{te(),X&&X()})};M?M(q,te,ce):ce()}else i(q,p,W)},pe=(_,p,W,V=!1,$=!1)=>{const{type:q,props:re,ref:Z,children:ie,dynamicChildren:Y,shapeFlag:me,patchFlag:E,dirs:M,cacheIndex:X,memo:te}=_;if((E===-2||Y&&Y.hasOnce)&&($=!1),Z!=null&&(Mi(),Ar(Z,null,W,_,!0),Si()),X!=null&&(!_.ctx||_.ctx===p)&&(p.renderCache[X]=void 0),me&256){p.ctx.deactivate(_);return}const ce=me&1&&M,ne=!Vs(_);let Ee;if(ne&&(Ee=re&&re.onVnodeBeforeUnmount)&&Vn(Ee,p,_),me&6)Xe(_.component,W,V);else{if(me&128){_.suspense.unmount(W,V);return}ce&&Wi(_,null,p,"beforeUnmount"),me&64?_.type.remove(_,p,W,de,V):Y&&!Y.hasOnce&&(q!==st||E>0&&E&64)?le(Y,p,W,!1,!0):(q===st&&E&384||!$&&me&16)&&le(ie,p,W),V&&Me(_)}const ge=te!=null&&X==null;(ne&&(Ee=re&&re.onVnodeUnmounted)||ce||ge)&&dn(()=>{Ee&&Vn(Ee,p,_),ce&&Wi(_,null,p,"unmounted"),ge&&(_.el=null)},W)},Me=_=>{const{type:p,el:W,anchor:V,transition:$}=_;if(p===st){He(W,V);return}if(p===Ho){x(_),$&&!$.persisted&&$.afterLeave&&$.afterLeave();return}const q=()=>{s(W),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(_.shapeFlag&1&&$&&!$.persisted){const{leave:re,delayLeave:Z}=$,ie=()=>re(W,q);Z?Z(_.el,q,ie):ie()}else q()},He=(_,p)=>{let W;for(;_!==p;)W=d(_),s(_),_=W;s(p)},Xe=(_,p,W)=>{const{bum:V,scope:$,job:q,subTree:re,um:Z,m:ie,a:Y}=_;qu(ie),qu(Y),V&&zo(V),$.stop(),q?(q.flags|=8,pe(re,_,p,W)):_.vnode.el&&re&&(re.transition=_.vnode.transition,pe(re,_,p,W)),Z&&dn(Z,p),dn(()=>{_.isUnmounted=!0},p)},le=(_,p,W,V=!1,$=!1,q=0)=>{for(let re=q;re<_.length;re++)pe(_[re],p,W,V,$)},ue=_=>{if(_.shapeFlag&6)return ue(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const p=d(_.anchor||_.el),W=p&&p[Um];return W?d(W):p};let Se=!1;const ke=(_,p,W)=>{let V;_==null?p._vnode&&(pe(p._vnode,null,null,!0),V=p._vnode.component):S(p._vnode||null,_,p,null,null,null,W),p._vnode=_,Se||(Se=!0,Bu(V),lf(),Se=!1)},de={p:S,um:pe,m:G,r:Me,mt:U,mc:B,pc:I,pbc:T,n:ue,o:n};return{render:ke,hydrate:void 0,createApp:ng(ke)}}function Oa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Xi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function vg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function If(n,e,t=!1){const i=n.children,s=e.children;if(qe(i)&&qe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=gi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&If(o,a)),a.type===Ma&&(a.patchFlag===-1&&(a=s[r]=gi(a)),a.el=o.el),a.type===ti&&!a.el&&(a.el=o.el)}}function xg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Df(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Df(e)}function qu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Lf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Lf(e.subTree):null}const Uf=n=>n.__isSuspense;function yg(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):Rm(n)}const st=Symbol.for("v-fgt"),Ma=Symbol.for("v-txt"),ti=Symbol.for("v-cmt"),Ho=Symbol.for("v-stc"),xi=[];let vn=null;function Le(n=!1){xi.push(vn=n?null:[])}function jc(){xi.pop(),vn=xi[xi.length-1]||null}let Or=1;function ju(n,e=!1){Or+=n,n<0&&vn&&e&&(vn.hasOnce=!0)}function Nf(n){return n.dynamicChildren=Or>0?vn||ns:null,jc(),Or>0&&vn&&vn.push(n),n}function Fe(n,e,t,i,s,r){return Nf(v(n,e,t,i,s,r,!0))}function ea(n,e,t,i,s){return Nf(gt(n,e,t,i,s,!0))}function Kc(n){return n?n.__v_isVNode===!0:!1}function cr(n,e){return n.type===e.type&&n.key===e.key}const Ff=({key:n})=>n??null,Vo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Lt(n)||Kt(n)||Ze(n)?{i:jt,r:n,k:e,f:!!t}:n:null);function v(n,e=null,t=null,i=0,s=null,r=n===st?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ff(e),ref:e&&Vo(e),scopeId:uf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:jt};return a?(ta(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Lt(t)?8:16),Or>0&&!o&&vn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&vn.push(l),l}const gt=Mg;function Mg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Ym)&&(n=ti),Kc(n)){const a=Ks(n,e,!0);return t&&ta(a,t),Or>0&&!r&&vn&&(a.shapeFlag&6?vn[vn.indexOf(n)]=a:vn.push(a)),a.patchFlag=-2,a}if(Ig(n)&&(n=n.__vccOpts),e){e=Sg(e);let{class:a,style:l}=e;a&&!Lt(a)&&(e.class=wt(a)),xt(l)&&(Gc(l)&&!qe(l)&&(l=Wt({},l)),e.style=jn(l))}const o=Lt(n)?1:Uf(n)?128:va(n)?64:xt(n)?4:Ze(n)?2:0;return v(n,e,t,i,s,o,r,!0)}function Sg(n){return n?Gc(n)||wf(n)?Wt({},n):n:null}function Ks(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?bg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ff(c),ref:e&&e.ref?t&&r?qe(r)?r.concat(Vo(e)):[r,Vo(e)]:Vo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==st?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ks(n.ssContent),ssFallback:n.ssFallback&&Ks(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Xc(u,l.clone(u)),u}function nt(n=" ",e=0){return gt(Ma,null,n,e)}function ur(n,e){const t=gt(Ho,null,n);return t.staticCount=e,t}function Vt(n="",e=!1){return e?(Le(),ea(ti,null,n)):gt(ti,null,n)}function $n(n){return n==null||typeof n=="boolean"?gt(ti):qe(n)?gt(st,null,n.slice()):Kc(n)?gi(n):gt(Ma,null,String(n))}function gi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ks(n)}function ta(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ta(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!wf(e)?e._ctx=jt:s===3&&jt&&(jt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ze(e)){if(i&65){ta(n,{default:e});return}e={default:e,_ctx:jt},t=32}else e=String(e),i&64?(t=16,e=[nt(e)]):t=8;n.children=e,n.shapeFlag|=t}function bg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=wt([e.class,i.class]));else if(s==="style")e.style=jn([e.style,i.style]);else if(ha(s)){const r=e[s],o=i[s];o&&r!==o&&!(qe(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!da(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Vn(n,e,t,i=null){Bn(n,e,7,[t,i])}const Eg=yf();let wg=0;function Tg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Eg,r={uid:wg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Af(i,s),emitsOptions:Mf(i,s),emit:null,emitted:null,propsDefaults:Mt,inheritAttrs:i.inheritAttrs,ctx:Mt,data:Mt,props:Mt,attrs:Mt,slots:Mt,refs:Mt,setupState:Mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=sg.bind(null,r),n.ce&&n.ce(r),r}let on=null;const Of=()=>on||jt;let na,Br;{const n=pa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};na=e("__VUE_INSTANCE_SETTERS__",t=>on=t),Br=e("__VUE_SSR_SETTERS__",t=>zr=t)}const Jr=n=>{const e=on;return na(n),n.scope.on(),()=>{n.scope.off(),na(e)}},Ku=()=>{on&&on.scope.off(),na(null)};function Bf(n){return n.vnode.shapeFlag&4}let zr=!1;function Ag(n,e=!1,t=!1){e&&Br(e);const{props:i,children:s}=n.vnode,r=Bf(n);ug(n,i,r,e),pg(n,s,t||e);const o=r?Rg(n,e):void 0;return e&&Br(!1),o}function Rg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,jm);const{setup:i}=t;if(i){Mi();const s=n.setupContext=i.length>1?Pg(n):null,r=Jr(n),o=Zr(i,n,0,[n.props,s]),a=Fd(o);if(Si(),r(),(a||n.sp)&&!Vs(n)&&pf(n),a){if(o.then(Ku,Ku),e)return o.then(l=>{Br(!0);try{Zu(n,l,e)}finally{Br(!1)}}).catch(l=>{_a(l,n,0)});n.asyncDep=o}else Zu(n,o)}else zf(n)}function Zu(n,e,t){Ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=rf(e)),zf(n)}function zf(n,e,t){const i=n.type;n.render||(n.render=i.render||Qn);{const s=Jr(n);Mi();try{Km(n)}finally{Si(),s()}}}const Cg={get(n,e){return qt(n,"get",""),n[e]}};function Pg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Cg),slots:n.slots,emit:n.emit,expose:e}}function Sa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(rf(vm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Rr)return Rr[t](n)},has(e,t){return t in e||t in Rr}})):n.proxy}function Ig(n){return Ze(n)&&"__vccOpts"in n}const rt=(n,e)=>bm(n,e,zr),Dg="3.5.43";let Nl;const Ju=typeof window<"u"&&window.trustedTypes;if(Ju)try{Nl=Ju.createPolicy("vue",{createHTML:n=>n})}catch{}const kf=Nl?n=>Nl.createHTML(n):n=>n,Lg="http://www.w3.org/2000/svg",Ug="http://www.w3.org/1998/Math/MathML",mi=typeof document<"u"?document:null,Qu=mi&&mi.createElement("template"),Ng={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?mi.createElementNS(Lg,n):e==="mathml"?mi.createElementNS(Ug,n):t?mi.createElement(n,{is:t}):mi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>mi.createTextNode(n),createComment:n=>mi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>mi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Qu.innerHTML=kf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Fg=Symbol("_vtc");function Og(n,e,t){const i=n[Fg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const eh=Symbol("_vod"),Bg=Symbol("_vsh"),zg=Symbol(""),kg=/(?:^|;)\s*display\s*:/;function Hg(n,e,t){const i=n.style,s=Lt(t);let r=!1;if(t&&!s){if(e)if(Lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Mr(i,a,"")}else for(const o in e)t[o]==null&&Mr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?Gg(n,o,!Lt(e)&&e?e[o]:void 0,a)||Mr(i,o,a):Mr(i,o,"")}}else if(s){if(e!==t){const o=i[zg];o&&(t+=";"+o),i.cssText=t,r=kg.test(t)}}else e&&n.removeAttribute("style");eh in n&&(n[eh]=r?i.display:"",n[Bg]&&(i.display="none"))}const oo=/\s*!important$/;function Mr(n,e,t){if(qe(t))t.forEach(i=>Mr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))oo.test(t)?n.setProperty(e,t.replace(oo,""),"important"):n.setProperty(e,t);else{const i=Vg(n,e);oo.test(t)?n.setProperty(ki(i),t.replace(oo,""),"important"):n[i]=t}}const th=["Webkit","Moz","ms"],Ba={};function Vg(n,e){const t=Ba[e];if(t)return t;let i=Nn(e);if(i!=="filter"&&i in n)return Ba[e]=i;i=zd(i);for(let s=0;s<th.length;s++){const r=th[s]+i;if(r in n)return Ba[e]=r}return e}function Gg(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Lt(i)&&t===i}const nh="http://www.w3.org/1999/xlink";function ih(n,e,t,i,s,r=jp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(nh,e.slice(6,e.length)):n.setAttributeNS(nh,e,t):t==null||r&&!Hd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":On(t)?String(t):t)}function sh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?kf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Hd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Fs(n,e,t,i){n.addEventListener(e,t,i)}function Wg(n,e,t,i){n.removeEventListener(e,t,i)}const rh=Symbol("_vei");function Xg(n,e,t,i,s=null){const r=n[rh]||(n[rh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=qg(e);if(i){const c=r[e]=Zg(i,s);Fs(n,a,c,l)}else o&&(Wg(n,a,o,l),r[e]=void 0)}}const $g=/(Once|Passive|Capture)$/,Yg=/^on:?(?:Once|Passive|Capture)$/;function qg(n){let e,t;for(;(t=n.match($g))&&!Yg.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ki(n.slice(2)),e]}let za=0;const jg=Promise.resolve(),Kg=()=>za||(jg.then(()=>za=0),za=Date.now());function Zg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(qe(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Bn(c,e,5,a)}}else Bn(s,e,5,[i])};return t.value=n,t.attached=Kg(),t}const oh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Og(n,i,o):e==="style"?Hg(n,t,i):ha(e)?da(e)||Xg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qg(n,e,i,o))?(sh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ih(n,e,i,o,r,e!=="value")):n._isVueCE&&(e0(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Lt(i)))?sh(n,Nn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ih(n,e,i,o))};function Qg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&oh(e)&&Ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return oh(e)&&Lt(t)?!1:e in n}function e0(n,e){const t=n._def.props;if(!t)return!1;const i=Nn(e);return Array.isArray(t)?t.some(s=>Nn(s)===i):Object.keys(t).some(s=>Nn(s)===i)}const ah=n=>{const e=n.props["onUpdate:modelValue"]||!1;return qe(e)?t=>zo(e,t):e};function t0(n){n.target.composing=!0}function lh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ao=Symbol("_assign"),lo=Symbol("_initialValue");function ka(n,e,t){return e&&(n=n.trim()),t&&(n=Nc(n)),n}const n0={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[lo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[lo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[ao]=ah(s);const r=i||s.props&&s.props.type==="number";Fs(n,e?"change":"input",o=>{o.target.composing||n[ao](ka(n.value,t,r))}),(t||r)&&Fs(n,"change",()=>{n.value=ka(n.value,t,r)}),e||(Fs(n,"compositionstart",t0),Fs(n,"compositionend",lh),Fs(n,"change",lh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[lo];delete n[lo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[ao](ka(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[ao]=ah(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Nc(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},i0=["ctrl","shift","alt","meta"],s0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>i0.some(t=>n[`${t}Key`]&&!e.includes(t))},ch=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=s0[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},r0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ha=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=ki(s.key);if(e.some(o=>o===r||r0[o]===r))return n(s)}))},o0=Wt({patchProp:Jg},Ng);let uh;function a0(){return uh||(uh=gg(o0))}const l0=((...n)=>{const e=a0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=u0(i);if(!s)return;const r=e._component;!Ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,c0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function c0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function u0(n){return Lt(n)?document.querySelector(n):n}const h0={class:"ui-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},d0=["d"],Pn=fs({__name:"UiIcon",props:{name:{}},setup(n){const e={meter:"M4 18a8 8 0 1 1 16 0M7 18h10M12 14l4-5M5 12l2 1M7 7l1 2M12 5v2M17 7l-1 2",api:"M8 8H5v8h3M16 8h3v8h-3M9 5l-2 2M15 5l2 2M10 15l4-6",form:"M9 4H5v17h14V4h-4M9 3h6v4H9zM8 12h8M8 16h5",boundary:"M8 4H4v4M16 4h4v4M20 16v4h-4M8 20H4v-4M8 8h8v8H8z",list:"M9 6h11M9 12h11M9 18h11M4 6h1M4 12h1M4 18h1",reset:"M5 8a8 8 0 1 1-1 7M5 3v5h5",back:"M10 5l-7 7 7 7M3 12h18",arrow:"M5 19L19 5M7 5h12v12",close:"M6 6l12 12M18 6L6 18",chevron:"M9 5l7 7-7 7"};return(t,i)=>(Le(),Fe("svg",h0,[v("path",{d:e[n.name]||e.arrow},null,8,d0)]))}}),f0={class:"topbar"},p0={class:"topbar-meta"},m0={class:"topbar-period"},g0={class:"topbar-time"},_0=["aria-current","onClick"],v0=["aria-label"],x0=fs({__name:"AppHeader",props:{tabs:{},active:{},year:{},playing:{type:Boolean},updated:{}},emits:["navigate"],setup(n,{emit:e}){const t=n,i=e,s=ot(null),r=ot(!1);function o(){s.value&&(r.value=s.value.scrollLeft+s.value.clientWidth>=s.value.scrollWidth-2)}function a(){s.value?.scrollBy({left:(r.value?-1:1)*(s.value.clientWidth*.65),behavior:"instant"}),o()}return as(()=>t.active,async()=>{await js();const l=s.value?.querySelector('[aria-current="page"]');l&&s.value&&s.value.scrollTo({left:l.offsetLeft-(s.value.clientWidth-l.offsetWidth)/2,behavior:"instant"})}),(l,c)=>(Le(),Fe("header",f0,[v("button",{class:"brand","aria-label":"返回园区总览",onClick:c[0]||(c[0]=u=>i("navigate","overview"))},[...c[1]||(c[1]=[v("span",{class:"brand-mark"},[v("span"),v("span"),v("span")],-1),v("span",{class:"brand-context"},"数字孪生交互原型",-1)])]),c[3]||(c[3]=v("div",{class:"product-title"},"零碳园区能碳管理平台",-1)),v("div",p0,[v("span",m0,se(n.year)+" 年度核算",1),v("span",{class:wt(["live-indicator",{paused:!n.playing}])},[c[2]||(c[2]=v("i",null,null,-1)),nt(se(n.playing?"模拟数据流运行":"演示流已暂停"),1)],2),v("time",g0,se(n.updated),1)]),v("nav",{ref_key:"nav",ref:s,class:"main-nav","aria-label":"主导航",onScroll:o},[(Le(!0),Fe(st,null,kt(n.tabs,u=>(Le(),Fe("button",{key:u.id,class:wt(["nav-item",{active:n.active===u.id}]),"aria-current":n.active===u.id?"page":void 0,onClick:h=>i("navigate",u.id)},se(u.label),11,_0))),128))],544),v("button",{class:wt(["nav-more",{reverse:r.value}]),"aria-label":r.value?"查看前面的导航":"查看后续导航",onClick:a},[gt(Pn,{name:"chevron"})],10,v0)]))}}),y0={class:"scrollable-rail"},M0=["aria-label"],S0=["aria-label"],hh=fs({__name:"ScrollableRail",props:{label:{}},setup(n){const e=ot(null),t=ot(null),i=ot(!1);let s;function r(){const a=e.value;a&&(i.value=a.scrollHeight-a.clientHeight-a.scrollTop>4)}function o(){const a=e.value;a?.scrollBy({top:a.clientHeight*.65,behavior:"instant"}),r()}return ir(async()=>{await js(),s=new ResizeObserver(r),e.value&&s.observe(e.value),t.value&&s.observe(t.value),r()}),sr(()=>s?.disconnect()),(a,l)=>(Le(),Fe("aside",y0,[v("div",{ref_key:"viewport",ref:e,class:"rail-viewport","aria-label":n.label,tabindex:"0",onScroll:r},[v("div",{ref_key:"content",ref:t,class:"rail-content"},[qm(a.$slots,"default")],512)],40,M0),i.value?(Le(),Fe("button",{key:0,class:"rail-scroll-cue","aria-label":n.label+"，继续向下查看",onClick:o},[l[0]||(l[0]=nt("向下查看更多数据 ",-1)),gt(Pn,{name:"chevron"})],8,S0)):Vt("",!0)]))}});const Zc="180",Ws={ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},b0=0,dh=1,E0=2,Hf=1,Jc=2,pi=3,Bi=0,ln=1,bn=2,Ni=0,Xs=1,fh=2,ph=3,mh=4,w0=5,es=100,T0=101,A0=102,R0=103,C0=104,P0=200,I0=201,D0=202,L0=203,Fl=204,Ol=205,U0=206,N0=207,F0=208,O0=209,B0=210,z0=211,k0=212,H0=213,V0=214,Bl=0,zl=1,kl=2,Zs=3,Hl=4,Vl=5,Gl=6,Wl=7,Qc=0,G0=1,W0=2,Fi=0,X0=1,$0=2,Y0=3,eu=4,q0=5,j0=6,K0=7,Vf=300,Js=301,Qs=302,Xl=303,$l=304,ba=306,ia=1e3,is=1001,Yl=1002,xn=1003,Z0=1004,co=1005,Kn=1006,Va=1007,ss=1008,ni=1009,Gf=1010,Wf=1011,kr=1012,tu=1013,ls=1014,Zn=1015,Qr=1016,nu=1017,iu=1018,Hr=1020,Xf=35902,$f=35899,Yf=1021,qf=1022,Un=1023,Vr=1026,Gr=1027,su=1028,ru=1029,jf=1030,ou=1031,au=1033,Go=33776,Wo=33777,Xo=33778,$o=33779,ql=35840,jl=35841,Kl=35842,Zl=35843,Jl=36196,Ql=37492,ec=37496,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,uc=37817,hc=37818,dc=37819,fc=37820,pc=37821,mc=36492,gc=36494,_c=36495,vc=36283,xc=36284,yc=36285,Mc=36286,J0=3200,Q0=3201,lu=0,e_=1,Di="",Yt="srgb",er="srgb-linear",sa="linear",mt="srgb",xs=7680,gh=519,t_=512,n_=513,i_=514,Kf=515,s_=516,r_=517,o_=518,a_=519,_h=35044,vh="300 es",Jn=2e3,ra=2001;class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xh=1234567;const Cr=Math.PI/180,Wr=180/Math.PI;function ms(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function cu(n,e){return(n%e+e)%e}function l_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function c_(n,e,t){return n!==e?(t-n)/(e-n):0}function Pr(n,e,t){return(1-t)*n+t*e}function u_(n,e,t,i){return Pr(n,e,1-Math.exp(-t*i))}function h_(n,e=1){return e-Math.abs(cu(n,e*2)-e)}function d_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function f_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function p_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function m_(n,e){return n+Math.random()*(e-n)}function g_(n){return n*(.5-Math.random())}function __(n){n!==void 0&&(xh=n);let e=xh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v_(n){return n*Cr}function x_(n){return n*Wr}function y_(n){return(n&n-1)===0&&n!==0}function M_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function S_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function b_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),y=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*y,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*y,a*c);break;case"ZYZ":n.set(l*y,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Os(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $s={DEG2RAD:Cr,RAD2DEG:Wr,generateUUID:ms,clamp:et,euclideanModulo:cu,mapLinear:l_,inverseLerp:c_,lerp:Pr,damp:u_,pingpong:h_,smoothstep:d_,smootherstep:f_,randInt:p_,randFloat:m_,randFloatSpread:g_,seededRandom:__,degToRad:v_,radToDeg:x_,isPowerOfTwo:y_,ceilPowerOfTwo:M_,floorPowerOfTwo:S_,setQuaternionFromProperEuler:b_,normalize:tn,denormalize:Os};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],y=r[o+2],S=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=y,e[t+3]=S;return}if(h!==S||l!==d||c!==f||u!==y){let g=1-a;const m=l*d+c*f+u*y+h*S,R=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const F=Math.sqrt(b),N=Math.atan2(F,m*R);g=Math.sin(g*N)/F,a=Math.sin(a*N)/F}const x=a*R;if(l=l*g+d*x,c=c*g+f*x,u=u*g+y*x,h=h*g+S*x,g===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=F,c*=F,u*=F,h*=F}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],y=r[o+3];return e[t]=a*y+u*h+l*f-c*d,e[t+1]=l*y+u*d+c*h-a*f,e[t+2]=c*y+u*f+a*d-l*h,e[t+3]=u*y-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),y=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*y,this._y=c*f*h-d*u*y,this._z=c*u*y+d*f*h,this._w=c*u*h-d*f*y;break;case"YXZ":this._x=d*u*h+c*f*y,this._y=c*f*h-d*u*y,this._z=c*u*y-d*f*h,this._w=c*u*h+d*f*y;break;case"ZXY":this._x=d*u*h-c*f*y,this._y=c*f*h+d*u*y,this._z=c*u*y+d*f*h,this._w=c*u*h-d*f*y;break;case"ZYX":this._x=d*u*h-c*f*y,this._y=c*f*h+d*u*y,this._z=c*u*y-d*f*h,this._w=c*u*h+d*f*y;break;case"YZX":this._x=d*u*h+c*f*y,this._y=c*f*h+d*u*y,this._z=c*u*y-d*f*h,this._w=c*u*h-d*f*y;break;case"XZY":this._x=d*u*h-c*f*y,this._y=c*f*h-d*u*y,this._z=c*u*y+d*f*h,this._w=c*u*h+d*f*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new z,yh=new cs;class Je{constructor(e,t,i,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],y=i[8],S=s[0],g=s[3],m=s[6],R=s[1],b=s[4],x=s[7],F=s[2],N=s[5],O=s[8];return r[0]=o*S+a*R+l*F,r[3]=o*g+a*b+l*N,r[6]=o*m+a*x+l*O,r[1]=c*S+u*R+h*F,r[4]=c*g+u*b+h*N,r[7]=c*m+u*x+h*O,r[2]=d*S+f*R+y*F,r[5]=d*g+f*b+y*N,r[8]=d*m+f*x+y*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,y=t*h+i*d+s*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=h*S,e[1]=(s*c-u*i)*S,e[2]=(a*i-s*o)*S,e[3]=d*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-a*t)*S,e[6]=f*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new Je;function Zf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function E_(){const n=oa("canvas");return n.style.display="block",n}const Mh={};function Xr(n){n in Mh||(Mh[n]=!0,console.warn(n))}function w_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Sh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T_(){const n={enabled:!0,workingColorSpace:er,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=yi(s.r),s.g=yi(s.g),s.b=yi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[er]:{primaries:e,whitePoint:i,transfer:sa,toXYZ:Sh,fromXYZ:bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Sh,fromXYZ:bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}const ct=T_();function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ys;class A_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ys===void 0&&(ys=oa("canvas")),ys.width=e.width,ys.height=e.height;const s=ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ys}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(yi(t[i]/255)*255):t[i]=yi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R_=0;class uu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xa(s[o].image)):r.push(Xa(s[o]))}else r=Xa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?A_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C_=0;const $a=new z;class Zt extends ps{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=is,s=is,r=Kn,o=ss,a=Un,l=ni,c=Zt.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=ms(),this.name="",this.source=new uu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($a).x}get height(){return this.source.getSize($a).y}get depth(){return this.source.getSize($a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case Yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case Yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Vf;Zt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],y=l[9],S=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(y+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(f+1)/2,F=(m+1)/2,N=(u+d)/4,O=(h+S)/4,B=(y+g)/4;return b>x&&b>F?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=N/i,r=O/i):x>F?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=N/s,r=B/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=O/r,s=B/r),this.set(i,s,r,t),this}let R=Math.sqrt((g-y)*(g-y)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(g-y)/R,this.y=(h-S)/R,this.z=(d-u)/R,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P_ extends ps{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Zt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new uu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends P_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jf extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I_ extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),ho.subVectors(this.max,hr),Ms.subVectors(e.a,hr),Ss.subVectors(e.b,hr),bs.subVectors(e.c,hr),Ei.subVectors(Ss,Ms),wi.subVectors(bs,Ss),$i.subVectors(Ms,bs);let t=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-$i.z,$i.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,$i.z,0,-$i.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-$i.y,$i.x,0];return!Ya(t,Ms,Ss,bs,ho)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,Ms,Ss,bs,ho))?!1:(fo.crossVectors(Ei,wi),t=[fo.x,fo.y,fo.z],Ya(t,Ms,Ss,bs,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ai=[new z,new z,new z,new z,new z,new z,new z,new z],An=new z,uo=new Hi,Ms=new z,Ss=new z,bs=new z,Ei=new z,wi=new z,$i=new z,hr=new z,ho=new z,fo=new z,Yi=new z;function Ya(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Yi.fromArray(n,r);const a=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const D_=new Hi,dr=new z,qa=new z;class rr{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):D_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(dr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(qa)),this.expandByPoint(dr.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const li=new z,ja=new z,po=new z,Ti=new z,Ka=new z,mo=new z,Za=new z;class Ea{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ja.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(ja);const r=e.distanceTo(t)*.5,o=-this.direction.dot(po),a=Ti.dot(this.direction),l=-Ti.dot(po),c=Ti.lengthSq(),u=Math.abs(1-o*o);let h,d,f,y;if(u>0)if(h=o*l-a,d=o*a-l,y=r*u,h>=0)if(d>=-y)if(d<=y){const S=1/u;h*=S,d*=S,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-y?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=y?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ja).addScaledVector(po,d),f}intersectSphere(e,t){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),s=li.dot(li)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,i,s,r){Ka.subVectors(t,e),mo.subVectors(i,e),Za.crossVectors(Ka,mo);let o=this.direction.dot(Za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);const l=a*this.direction.dot(mo.crossVectors(Ti,mo));if(l<0)return null;const c=a*this.direction.dot(Ka.cross(Ti));if(c<0||l+c>o)return null;const u=-a*Ti.dot(Za);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,s,r,o,a,l,c,u,h,d,f,y,S,g){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,f,y,S,g)}set(e,t,i,s,r,o,a,l,c,u,h,d,f,y,S,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=y,m[11]=S,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,y=a*u,S=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+y*c,t[5]=d-S*c,t[9]=-a*l,t[2]=S-d*c,t[6]=y+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,y=c*u,S=c*h;t[0]=d+S*a,t[4]=y*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-y,t[6]=S+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,y=c*u,S=c*h;t[0]=d-S*a,t[4]=-o*h,t[8]=y+f*a,t[1]=f+y*a,t[5]=o*u,t[9]=S-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,y=a*u,S=a*h;t[0]=l*u,t[4]=y*c-f,t[8]=d*c+S,t[1]=l*h,t[5]=S*c+d,t[9]=f*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,y=a*l,S=a*c;t[0]=l*u,t[4]=S-d*h,t[8]=y*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+y,t[10]=d-S*h}else if(e.order==="XZY"){const d=o*l,f=o*c,y=a*l,S=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+S,t[5]=o*u,t[9]=f*h-y,t[2]=y*h-f,t[6]=a*u,t[10]=S*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L_,e,U_)}lookAt(e,t,i){const s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ai.crossVectors(i,gn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ai.crossVectors(i,gn)),Ai.normalize(),go.crossVectors(gn,Ai),s[0]=Ai.x,s[4]=go.x,s[8]=gn.x,s[1]=Ai.y,s[5]=go.y,s[9]=gn.y,s[2]=Ai.z,s[6]=go.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],y=i[2],S=i[6],g=i[10],m=i[14],R=i[3],b=i[7],x=i[11],F=i[15],N=s[0],O=s[4],B=s[8],A=s[12],T=s[1],H=s[5],K=s[9],k=s[13],U=s[2],P=s[6],L=s[10],D=s[14],I=s[3],ee=s[7],he=s[11],G=s[15];return r[0]=o*N+a*T+l*U+c*I,r[4]=o*O+a*H+l*P+c*ee,r[8]=o*B+a*K+l*L+c*he,r[12]=o*A+a*k+l*D+c*G,r[1]=u*N+h*T+d*U+f*I,r[5]=u*O+h*H+d*P+f*ee,r[9]=u*B+h*K+d*L+f*he,r[13]=u*A+h*k+d*D+f*G,r[2]=y*N+S*T+g*U+m*I,r[6]=y*O+S*H+g*P+m*ee,r[10]=y*B+S*K+g*L+m*he,r[14]=y*A+S*k+g*D+m*G,r[3]=R*N+b*T+x*U+F*I,r[7]=R*O+b*H+x*P+F*ee,r[11]=R*B+b*K+x*L+F*he,r[15]=R*A+b*k+x*D+F*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],y=e[3],S=e[7],g=e[11],m=e[15];return y*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*f-i*l*f)+S*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+g*(+t*c*h-t*a*f-r*o*h+i*o*f+r*a*u-i*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],y=e[12],S=e[13],g=e[14],m=e[15],R=h*g*c-S*d*c+S*l*f-a*g*f-h*l*m+a*d*m,b=y*d*c-u*g*c-y*l*f+o*g*f+u*l*m-o*d*m,x=u*S*c-y*h*c+y*a*f-o*S*f-u*a*m+o*h*m,F=y*h*l-u*S*l-y*a*d+o*S*d+u*a*g-o*h*g,N=t*R+i*b+s*x+r*F;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/N;return e[0]=R*O,e[1]=(S*d*r-h*g*r-S*s*f+i*g*f+h*s*m-i*d*m)*O,e[2]=(a*g*r-S*l*r+S*s*c-i*g*c-a*s*m+i*l*m)*O,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*f-i*l*f)*O,e[4]=b*O,e[5]=(u*g*r-y*d*r+y*s*f-t*g*f-u*s*m+t*d*m)*O,e[6]=(y*l*r-o*g*r-y*s*c+t*g*c+o*s*m-t*l*m)*O,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*O,e[8]=x*O,e[9]=(y*h*r-u*S*r-y*i*f+t*S*f+u*i*m-t*h*m)*O,e[10]=(o*S*r-y*a*r+y*i*c-t*S*c-o*i*m+t*a*m)*O,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*f-t*a*f)*O,e[12]=F*O,e[13]=(u*S*s-y*h*s+y*i*d-t*S*d-u*i*g+t*h*g)*O,e[14]=(y*a*s-o*S*s-y*i*l+t*S*l+o*i*g-t*a*g)*O,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,y=r*h,S=o*u,g=o*h,m=a*h,R=l*c,b=l*u,x=l*h,F=i.x,N=i.y,O=i.z;return s[0]=(1-(S+m))*F,s[1]=(f+x)*F,s[2]=(y-b)*F,s[3]=0,s[4]=(f-x)*N,s[5]=(1-(d+m))*N,s[6]=(g+R)*N,s[7]=0,s[8]=(y+b)*O,s[9]=(g-R)*O,s[10]=(1-(d+S))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Es.set(s[0],s[1],s[2]).length();const o=Es.set(s[4],s[5],s[6]).length(),a=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const c=1/r,u=1/o,h=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Jn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let y,S;if(l)y=r/(o-r),S=o*r/(o-r);else if(a===Jn)y=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===ra)y=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Jn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let y,S;if(l)y=1/(o-r),S=o/(o-r);else if(a===Jn)y=-2/(o-r),S=-(o+r)/(o-r);else if(a===ra)y=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=y,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Es=new z,Rn=new ft,L_=new z(0,0,0),U_=new z(1,1,1),Ai=new z,go=new z,gn=new z,Eh=new ft,wh=new cs;class zn{constructor(e=0,t=0,i=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N_=0;const Th=new z,ws=new cs,ci=new ft,_o=new z,fr=new z,F_=new z,O_=new cs,Ah=new z(1,0,0),Rh=new z(0,1,0),Ch=new z(0,0,1),Ph={type:"added"},B_={type:"removed"},Ts={type:"childadded",child:null},Ja={type:"childremoved",child:null};class Nt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new z,t=new zn,i=new cs,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Je}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_o.copy(e):_o.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(fr,_o,this.up):ci.lookAt(_o,fr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(ci),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ph),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B_),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ph),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,F_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,O_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),y.length>0&&(i.nodes=y)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new z(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new z,ui=new z,Qa=new z,hi=new z,As=new z,Rs=new z,Ih=new z,el=new z,tl=new z,nl=new z,il=new vt,sl=new vt,rl=new vt;class Dn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),ui.subVectors(i,t),Qa.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(ui),l=Cn.dot(Qa),c=ui.dot(ui),u=ui.dot(Qa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,y=(o*u-a*l)*d;return r.set(1-f-y,y,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return il.setScalar(0),sl.setScalar(0),rl.setScalar(0),il.fromBufferAttribute(e,t),sl.fromBufferAttribute(e,i),rl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(il,r.x),o.addScaledVector(sl,r.y),o.addScaledVector(rl,r.z),o}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),ui.subVectors(e,t),Cn.cross(ui).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Cn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;As.subVectors(s,i),Rs.subVectors(r,i),el.subVectors(e,i);const l=As.dot(el),c=Rs.dot(el);if(l<=0&&c<=0)return t.copy(i);tl.subVectors(e,s);const u=As.dot(tl),h=Rs.dot(tl);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(As,o);nl.subVectors(e,r);const f=As.dot(nl),y=Rs.dot(nl);if(y>=0&&f<=y)return t.copy(r);const S=f*c-l*y;if(S<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(i).addScaledVector(Rs,a);const g=u*y-f*h;if(g<=0&&h-u>=0&&f-y>=0)return Ih.subVectors(r,s),a=(h-u)/(h-u+(f-y)),t.copy(s).addScaledVector(Ih,a);const m=1/(g+S+d);return o=S*m,a=d*m,t.copy(i).addScaledVector(As,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},vo={h:0,s:0,l:0};function ol(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=cu(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ol(o,r,e+1/3),this.g=ol(o,r,e),this.b=ol(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=Qf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return ct.workingToColorSpace($t.copy(this),e),Math.round(et($t.r*255,0,255))*65536+Math.round(et($t.g*255,0,255))*256+Math.round(et($t.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace($t.copy(this),t);const i=$t.r,s=$t.g,r=$t.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Yt){ct.workingToColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,s=$t.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(vo);const i=Pr(Ri.h,vo.h,t),s=Pr(Ri.s,vo.s,t),r=Pr(Ri.l,vo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new tt;tt.NAMES=Qf;let z_=0;class gs extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=Xs,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Ol,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ol&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gt extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new z,xo=new be;let k_=0;class wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_h,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Os(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Os(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Os(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}}class ep extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tp extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rt extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let H_=0;const Sn=new ft,al=new Nt,Cs=new z,_n=new Hi,pr=new Hi,zt=new z;class Jt extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zf(e)?tp:ep)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(_n.min,pr.min),_n.expandByPoint(zt),zt.addVectors(_n.max,pr.max),_n.expandByPoint(zt)):(_n.expandByPoint(pr.min),_n.expandByPoint(pr.max))}_n.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(e,c),zt.add(Cs)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new z,l[B]=new z;const c=new z,u=new z,h=new z,d=new be,f=new be,y=new be,S=new z,g=new z;function m(B,A,T){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,T),d.fromBufferAttribute(r,B),f.fromBufferAttribute(r,A),y.fromBufferAttribute(r,T),u.sub(c),h.sub(c),f.sub(d),y.sub(d);const H=1/(f.x*y.y-y.x*f.y);isFinite(H)&&(S.copy(u).multiplyScalar(y.y).addScaledVector(h,-f.y).multiplyScalar(H),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-y.x).multiplyScalar(H),a[B].add(S),a[A].add(S),a[T].add(S),l[B].add(g),l[A].add(g),l[T].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let B=0,A=R.length;B<A;++B){const T=R[B],H=T.start,K=T.count;for(let k=H,U=H+K;k<U;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const b=new z,x=new z,F=new z,N=new z;function O(B){F.fromBufferAttribute(s,B),N.copy(F);const A=a[B];b.copy(A),b.sub(F.multiplyScalar(F.dot(A))).normalize(),x.crossVectors(N,A);const H=x.dot(l[B])<0?-1:1;o.setXYZW(B,b.x,b.y,b.z,H)}for(let B=0,A=R.length;B<A;++B){const T=R[B],H=T.start,K=T.count;for(let k=H,U=H+K;k<U;k+=3)O(e.getX(k+0)),O(e.getX(k+1)),O(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){const y=e.getX(d+0),S=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,y=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?f=l[S]*a.data.stride+a.offset:f=l[S]*u;for(let m=0;m<u;m++)d[y++]=c[f++]}return new wn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dh=new ft,qi=new Ea,yo=new rr,Lh=new z,Mo=new z,So=new z,bo=new z,ll=new z,Eo=new z,Uh=new z,wo=new z;class at extends Nt{constructor(e=new Jt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ll.fromBufferAttribute(h,e),o?Eo.addScaledVector(ll,u):Eo.addScaledVector(ll.sub(t),u))}t.add(Eo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(yo.containsPoint(qi.origin)===!1&&(qi.intersectSphere(yo,Lh)===null||qi.origin.distanceToSquared(Lh)>(e.far-e.near)**2))&&(Dh.copy(r).invert(),qi.copy(e.ray).applyMatrix4(Dh),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,S=d.length;y<S;y++){const g=d[y],m=o[g.materialIndex],R=Math.max(g.start,f.start),b=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=R,F=b;x<F;x+=3){const N=a.getX(x),O=a.getX(x+1),B=a.getX(x+2);s=To(this,m,e,i,c,u,h,N,O,B),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const y=Math.max(0,f.start),S=Math.min(a.count,f.start+f.count);for(let g=y,m=S;g<m;g+=3){const R=a.getX(g),b=a.getX(g+1),x=a.getX(g+2);s=To(this,o,e,i,c,u,h,R,b,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,S=d.length;y<S;y++){const g=d[y],m=o[g.materialIndex],R=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=R,F=b;x<F;x+=3){const N=x,O=x+1,B=x+2;s=To(this,m,e,i,c,u,h,N,O,B),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const y=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let g=y,m=S;g<m;g+=3){const R=g,b=g+1,x=g+2;s=To(this,o,e,i,c,u,h,R,b,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function V_(n,e,t,i,s,r,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Bi,a),l===null)return null;wo.copy(a),wo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(wo);return c<t.near||c>t.far?null:{distance:c,point:wo.clone(),object:n}}function To(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Mo),n.getVertexPosition(l,So),n.getVertexPosition(c,bo);const u=V_(n,e,t,i,Mo,So,bo,Uh);if(u){const h=new z;Dn.getBarycoord(Uh,Mo,So,bo,h),s&&(u.uv=Dn.getInterpolatedAttribute(s,a,l,c,h,new be)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,l,c,h,new be)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};Dn.getNormal(Mo,So,bo,d.normal),u.face=d,u.barycoord=h}return u}class ii extends Jt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;y("z","y","x",-1,-1,i,t,e,o,r,0),y("z","y","x",1,-1,i,t,-e,o,r,1),y("x","z","y",1,1,e,i,t,s,o,2),y("x","z","y",1,-1,e,i,-t,s,o,3),y("x","y","z",1,-1,e,t,i,s,r,4),y("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(h,2));function y(S,g,m,R,b,x,F,N,O,B,A){const T=x/O,H=F/B,K=x/2,k=F/2,U=N/2,P=O+1,L=B+1;let D=0,I=0;const ee=new z;for(let he=0;he<L;he++){const G=he*H-k;for(let pe=0;pe<P;pe++){const Me=pe*T-K;ee[S]=Me*R,ee[g]=G*b,ee[m]=U,c.push(ee.x,ee.y,ee.z),ee[S]=0,ee[g]=0,ee[m]=N>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(pe/O),h.push(1-he/B),D+=1}}for(let he=0;he<B;he++)for(let G=0;G<O;G++){const pe=d+G+P*he,Me=d+G+P*(he+1),He=d+(G+1)+P*(he+1),Xe=d+(G+1)+P*he;l.push(pe,Me,Xe),l.push(Me,He,Xe),I+=6}a.addGroup(f,I,A),f+=I,d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=tr(n[t]);for(const s in i)e[s]=i[s]}return e}function G_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function np(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const W_={clone:tr,merge:nn};var X_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X_,this.fragmentShader=$_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=G_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ip extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new z,Nh=new be,Fh=new be;class fn extends ip{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wr*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,Nh,Fh),t.subVectors(Fh,Nh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ps=-90,Is=1;class Y_ extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Ps,Is,e,t);s.layers=this.layers,this.add(s);const r=new fn(Ps,Is,e,t);r.layers=this.layers,this.add(r);const o=new fn(Ps,Is,e,t);o.layers=this.layers,this.add(o);const a=new fn(Ps,Is,e,t);a.layers=this.layers,this.add(a);const l=new fn(Ps,Is,e,t);l.layers=this.layers,this.add(l);const c=new fn(Ps,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class sp extends Zt{constructor(e=[],t=Js,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class q_ extends us{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new sp(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ii(5,5,5),r=new zi({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Ni});r.uniforms.tEquirect.value=t;const o=new at(s,r),a=t.minFilter;return t.minFilter===ss&&(t.minFilter=Kn),new Y_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class rn extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,i),m=this._getHandJoint(c,S);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,y=.005;c.inputState.pinching&&d>f+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class du{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(e),this.density=t}clone(){return new du(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fu extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class K_ extends Zt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=xn,u=xn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oh extends wn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ds=new ft,Bh=new ft,Ao=[],zh=new Hi,Z_=new ft,mr=new at,gr=new rr;class Sc extends at{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Z_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),zh.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(zh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ds),gr.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(i),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),Bh.multiplyMatrices(i,Ds),mr.matrixWorld=Bh,mr.raycast(e,Ao);for(let o=0,a=Ao.length;o<a;o++){const l=Ao[o];l.instanceId=r,l.object=this,t.push(l)}Ao.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Oh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new K_(new Float32Array(s*this.count),s,this.count,su,Zn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ul=new z,J_=new z,Q_=new Je;class Ii{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ul.subVectors(i,t).cross(J_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ul),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Q_.getNormalMatrix(e),s=this.coplanarPoint(ul).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new rr,ev=new be(.5,.5),Ro=new z;class pu{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],y=r[8],S=r[9],g=r[10],m=r[11],R=r[12],b=r[13],x=r[14],F=r[15];if(s[0].setComponents(c-o,f-u,m-y,F-R).normalize(),s[1].setComponents(c+o,f+u,m+y,F+R).normalize(),s[2].setComponents(c+a,f+h,m+S,F+b).normalize(),s[3].setComponents(c-a,f-h,m-S,F-b).normalize(),i)s[4].setComponents(l,d,g,x).normalize(),s[5].setComponents(c-l,f-d,m-g,F-x).normalize();else if(s[4].setComponents(c-l,f-d,m-g,F-x).normalize(),t===Jn)s[5].setComponents(c+l,f+d,m+g,F+x).normalize();else if(t===ra)s[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const t=ev.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ro.x=s.normal.x>0?e.max.x:e.min.x,Ro.y=s.normal.y>0?e.max.y:e.min.y,Ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rp extends gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const aa=new z,la=new z,kh=new ft,_r=new Ea,Co=new rr,hl=new z,Hh=new z;class op extends Nt{constructor(e=new Jt,t=new rp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)aa.fromBufferAttribute(t,s-1),la.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=aa.distanceTo(la);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(s),Co.radius+=r,e.ray.intersectsSphere(Co)===!1)return;kh.copy(s).invert(),_r.copy(e.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),y=Math.min(u.count,o.start+o.count);for(let S=f,g=y-1;S<g;S+=c){const m=u.getX(S),R=u.getX(S+1),b=Po(this,e,_r,l,m,R,S);b&&t.push(b)}if(this.isLineLoop){const S=u.getX(y-1),g=u.getX(f),m=Po(this,e,_r,l,S,g,y-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let S=f,g=y-1;S<g;S+=c){const m=Po(this,e,_r,l,S,S+1,S);m&&t.push(m)}if(this.isLineLoop){const S=Po(this,e,_r,l,y-1,f,y-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Po(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(aa.fromBufferAttribute(a,s),la.fromBufferAttribute(a,r),t.distanceSqToSegment(aa,la,hl,Hh)>i)return;hl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(hl);if(!(c<e.near||c>e.far))return{distance:c,point:Hh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class bc extends Zt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ap extends Zt{constructor(e,t,i=ls,s,r,o,a=xn,l=xn,c,u=Vr,h=1){if(u!==Vr&&u!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lp extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wa extends Jt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let y=0;const S=[],g=i/2;let m=0;R(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(f,2));function R(){const x=new z,F=new z;let N=0;const O=(t-e)/i;for(let B=0;B<=r;B++){const A=[],T=B/r,H=T*(t-e)+e;for(let K=0;K<=s;K++){const k=K/s,U=k*l+a,P=Math.sin(U),L=Math.cos(U);F.x=H*P,F.y=-T*i+g,F.z=H*L,h.push(F.x,F.y,F.z),x.set(P,O,L).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-T),A.push(y++)}S.push(A)}for(let B=0;B<s;B++)for(let A=0;A<r;A++){const T=S[A][B],H=S[A+1][B],K=S[A+1][B+1],k=S[A][B+1];(e>0||A!==0)&&(u.push(T,H,k),N+=3),(t>0||A!==r-1)&&(u.push(H,K,k),N+=3)}c.addGroup(m,N,0),m+=N}function b(x){const F=y,N=new be,O=new z;let B=0;const A=x===!0?e:t,T=x===!0?1:-1;for(let K=1;K<=s;K++)h.push(0,g*T,0),d.push(0,T,0),f.push(.5,.5),y++;const H=y;for(let K=0;K<=s;K++){const U=K/s*l+a,P=Math.cos(U),L=Math.sin(U);O.x=A*L,O.y=g*T,O.z=A*P,h.push(O.x,O.y,O.z),d.push(0,T,0),N.x=P*.5+.5,N.y=L*.5*T+.5,f.push(N.x,N.y),y++}for(let K=0;K<s;K++){const k=F+K,U=H+K;x===!0?u.push(U,U+1,k):u.push(U+1,U,k),B+=3}c.addGroup(m,B,x===!0?1:2),m+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mu extends Jt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Rt(r,3)),this.setAttribute("normal",new Rt(r.slice(),3)),this.setAttribute("uv",new Rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(R){const b=new z,x=new z,F=new z;for(let N=0;N<t.length;N+=3)f(t[N+0],b),f(t[N+1],x),f(t[N+2],F),l(b,x,F,R)}function l(R,b,x,F){const N=F+1,O=[];for(let B=0;B<=N;B++){O[B]=[];const A=R.clone().lerp(x,B/N),T=b.clone().lerp(x,B/N),H=N-B;for(let K=0;K<=H;K++)K===0&&B===N?O[B][K]=A:O[B][K]=A.clone().lerp(T,K/H)}for(let B=0;B<N;B++)for(let A=0;A<2*(N-B)-1;A++){const T=Math.floor(A/2);A%2===0?(d(O[B][T+1]),d(O[B+1][T]),d(O[B][T])):(d(O[B][T+1]),d(O[B+1][T+1]),d(O[B+1][T]))}}function c(R){const b=new z;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(R),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function u(){const R=new z;for(let b=0;b<r.length;b+=3){R.x=r[b+0],R.y=r[b+1],R.z=r[b+2];const x=g(R)/2/Math.PI+.5,F=m(R)/Math.PI+.5;o.push(x,1-F)}y(),h()}function h(){for(let R=0;R<o.length;R+=6){const b=o[R+0],x=o[R+2],F=o[R+4],N=Math.max(b,x,F),O=Math.min(b,x,F);N>.9&&O<.1&&(b<.2&&(o[R+0]+=1),x<.2&&(o[R+2]+=1),F<.2&&(o[R+4]+=1))}}function d(R){r.push(R.x,R.y,R.z)}function f(R,b){const x=R*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function y(){const R=new z,b=new z,x=new z,F=new z,N=new be,O=new be,B=new be;for(let A=0,T=0;A<r.length;A+=9,T+=6){R.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),x.set(r[A+6],r[A+7],r[A+8]),N.set(o[T+0],o[T+1]),O.set(o[T+2],o[T+3]),B.set(o[T+4],o[T+5]),F.copy(R).add(b).add(x).divideScalar(3);const H=g(F);S(N,T+0,R,H),S(O,T+2,b,H),S(B,T+4,x,H)}}function S(R,b,x,F){F<0&&R.x===1&&(o[b]=R.x-1),x.x===0&&x.z===0&&(o[b]=F/2/Math.PI+.5)}function g(R){return Math.atan2(R.z,-R.x)}function m(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.vertices,e.indices,e.radius,e.details)}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new be:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new z,s=[],r=[],o=[],a=new z,l=new ft;for(let f=0;f<=e;f++){const y=f/e;s[f]=this.getTangentAt(y,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(et(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,y))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],f*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gu extends si{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new be){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class tv extends gu{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _u(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Io=new z,dl=new _u,fl=new _u,pl=new _u;class cp extends si{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new z){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Io.subVectors(s[0],s[1]).add(s[0]),c=Io);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Io.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Io),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(h),f),S=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);S<1e-4&&(S=1),y<1e-4&&(y=S),g<1e-4&&(g=S),dl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,y,S,g),fl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,y,S,g),pl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,y,S,g)}else this.curveType==="catmullrom"&&(dl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),fl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),pl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(dl.calc(l),fl.calc(l),pl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function nv(n,e){const t=1-n;return t*t*e}function iv(n,e){return 2*(1-n)*n*e}function sv(n,e){return n*n*e}function Ir(n,e,t,i){return nv(n,e)+iv(n,t)+sv(n,i)}function rv(n,e){const t=1-n;return t*t*t*e}function ov(n,e){const t=1-n;return 3*t*t*n*e}function av(n,e){return 3*(1-n)*n*n*e}function lv(n,e){return n*n*n*e}function Dr(n,e,t,i,s){return rv(n,e)+ov(n,t)+av(n,i)+lv(n,s)}class up extends si{constructor(e=new be,t=new be,i=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new be){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Dr(e,s.x,r.x,o.x,a.x),Dr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cv extends si{constructor(e=new z,t=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new z){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Dr(e,s.x,r.x,o.x,a.x),Dr(e,s.y,r.y,o.y,a.y),Dr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hp extends si{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uv extends si{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dp extends si{constructor(e=new be,t=new be,i=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new be){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ir(e,s.x,r.x,o.x),Ir(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fp extends si{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ir(e,s.x,r.x,o.x),Ir(e,s.y,r.y,o.y),Ir(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pp extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Vh(a,l.x,c.x,u.x,h.x),Vh(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new be().fromArray(s))}return this}}var Ec=Object.freeze({__proto__:null,ArcCurve:tv,CatmullRomCurve3:cp,CubicBezierCurve:up,CubicBezierCurve3:cv,EllipseCurve:gu,LineCurve:hp,LineCurve3:uv,QuadraticBezierCurve:dp,QuadraticBezierCurve3:fp,SplineCurve:pp});class hv extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ec[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Ec[s.type]().fromJSON(s))}return this}}class Gh extends hv{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new hp(this.currentPoint.clone(),new be(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new dp(this.currentPoint.clone(),new be(e,t),new be(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new up(this.currentPoint.clone(),new be(e,t),new be(i,s),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new pp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new gu(e,t,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class mp extends Gh{constructor(e){super(e),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Gh().fromJSON(s))}return this}}function dv(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=gp(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=_v(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){const f=n[d],y=n[d+1];f<a&&(a=f),y<l&&(l=y),f>u&&(u=f),y>h&&(h=y)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return $r(r,o,t,a,l,c,0),o}function gp(n,e,t,i,s){let r;if(s===Rv(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Wh(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Wh(o/i|0,n[o],n[o+1],r);return r&&nr(r,r.next)&&(qr(r),r=r.next),r}function hs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(nr(t,t.next)||It(t.prev,t,t.next)===0)){if(qr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function $r(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Sv(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?pv(n,i,s,r):fv(n)){e.push(l.i,n.i,c.i),qr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=mv(hs(n),e),$r(n,e,t,i,s,r,2)):o===2&&gv(n,e,t,i,s,r):$r(hs(n),e,t,i,s,r,1);break}}}function fv(n){const e=n.prev,t=n,i=n.next;if(It(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let y=i.next;for(;y!==e;){if(y.x>=u&&y.x<=d&&y.y>=h&&y.y<=f&&Sr(s,a,r,l,o,c,y.x,y.y)&&It(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function pv(n,e,t,i){const s=n.prev,r=n,o=n.next;if(It(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),y=Math.min(u,h,d),S=Math.max(a,l,c),g=Math.max(u,h,d),m=wc(f,y,e,t,i),R=wc(S,g,e,t,i);let b=n.prevZ,x=n.nextZ;for(;b&&b.z>=m&&x&&x.z<=R;){if(b.x>=f&&b.x<=S&&b.y>=y&&b.y<=g&&b!==s&&b!==o&&Sr(a,u,l,h,c,d,b.x,b.y)&&It(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=f&&x.x<=S&&x.y>=y&&x.y<=g&&x!==s&&x!==o&&Sr(a,u,l,h,c,d,x.x,x.y)&&It(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=S&&b.y>=y&&b.y<=g&&b!==s&&b!==o&&Sr(a,u,l,h,c,d,b.x,b.y)&&It(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=R;){if(x.x>=f&&x.x<=S&&x.y>=y&&x.y<=g&&x!==s&&x!==o&&Sr(a,u,l,h,c,d,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function mv(n,e){let t=n;do{const i=t.prev,s=t.next.next;!nr(i,s)&&vp(i,t,t.next,s)&&Yr(i,s)&&Yr(s,i)&&(e.push(i.i,t.i,s.i),qr(t),qr(t.next),t=n=s),t=t.next}while(t!==n);return hs(t)}function gv(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wv(o,a)){let l=xp(o,a);o=hs(o,o.next),l=hs(l,l.next),$r(o,e,t,i,s,r,0),$r(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function _v(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=gp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Ev(c))}s.sort(vv);for(let r=0;r<s.length;r++)t=xv(s[r],t);return t}function vv(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function xv(n,e){const t=yv(n,e);if(!t)return e;const i=xp(t,n);return hs(i,i.next),hs(t,t.next)}function yv(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(nr(n,t))return t;do{if(nr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&_p(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const h=Math.abs(s-t.y)/(i-t.x);Yr(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Mv(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Mv(n,e){return It(n.prev,n,e.prev)<0&&It(e.next,n,n.next)<0}function Sv(n,e,t,i){let s=n;do s.z===0&&(s.z=wc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,bv(s)}function bv(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function wc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ev(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function _p(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Sr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&_p(n,e,t,i,s,r,o,a)}function wv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Tv(n,e)&&(Yr(n,e)&&Yr(e,n)&&Av(n,e)&&(It(n.prev,n,e.prev)||It(n,e.prev,e))||nr(n,e)&&It(n.prev,n,n.next)>0&&It(e.prev,e,e.next)>0)}function It(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function nr(n,e){return n.x===e.x&&n.y===e.y}function vp(n,e,t,i){const s=Lo(It(n,e,t)),r=Lo(It(n,e,i)),o=Lo(It(t,i,n)),a=Lo(It(t,i,e));return!!(s!==r&&o!==a||s===0&&Do(n,t,e)||r===0&&Do(n,i,e)||o===0&&Do(t,n,i)||a===0&&Do(t,e,i))}function Do(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Lo(n){return n>0?1:n<0?-1:0}function Tv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&vp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Yr(n,e){return It(n.prev,n,n.next)<0?It(n,e,n.next)>=0&&It(n,n.prev,e)>=0:It(n,e,n.prev)<0||It(n,n.next,e)<0}function Av(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function xp(n,e){const t=Tc(n.i,n.x,n.y),i=Tc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Wh(n,e,t,i){const s=Tc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function qr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Cv{static triangulate(e,t,i=2){return dv(e,t,i)}}class Lr{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Lr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Xh(e),$h(i,e);let o=e.length;t.forEach(Xh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,$h(i,t[l]);const a=Cv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Xh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $h(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ca extends mu{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ca(e.radius,e.detail)}}class ds extends Jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],y=[],S=[],g=[];for(let m=0;m<u;m++){const R=m*d-o;for(let b=0;b<c;b++){const x=b*h-r;y.push(x,-R,0),S.push(0,0,1),g.push(b/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let R=0;R<a;R++){const b=R+c*m,x=R+c*(m+1),F=R+1+c*(m+1),N=R+1+c*m;f.push(b,x,N),f.push(x,F,N)}this.setIndex(f),this.setAttribute("position",new Rt(y,3)),this.setAttribute("normal",new Rt(S,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.widthSegments,e.heightSegments)}}class vu extends Jt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,f=new z,y=new be;for(let S=0;S<=s;S++){for(let g=0;g<=i;g++){const m=r+g/i*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),y.x=(f.x/t+1)/2,y.y=(f.y/t+1)/2,u.push(y.x,y.y)}h+=d}for(let S=0;S<s;S++){const g=S*(i+1);for(let m=0;m<i;m++){const R=m+g,b=R,x=R+i+1,F=R+i+2,N=R+1;a.push(b,x,N),a.push(x,F,N)}}this.setIndex(a),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xu extends Jt{constructor(e=new mp([new be(0,.5),new be(-.5,-.5),new be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(r,3)),this.setAttribute("uv",new Rt(o,2));function c(u){const h=s.length/3,d=u.extractPoints(t);let f=d.shape;const y=d.holes;Lr.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=y.length;g<m;g++){const R=y[g];Lr.isClockWise(R)===!0&&(y[g]=R.reverse())}const S=Lr.triangulateShape(f,y);for(let g=0,m=y.length;g<m;g++){const R=y[g];f=f.concat(R)}for(let g=0,m=f.length;g<m;g++){const R=f[g];s.push(R.x,R.y,0),r.push(0,0,1),o.push(R.x,R.y)}for(let g=0,m=S.length;g<m;g++){const R=S[g],b=R[0]+h,x=R[1]+h,F=R[2]+h;i.push(b,x,F),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Pv(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new xu(i,e.curveSegments)}}function Pv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class yu extends Jt{constructor(e=new fp(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new z,l=new z,c=new be;let u=new z;const h=[],d=[],f=[],y=[];S(),this.setIndex(y),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(f,2));function S(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),R(),m()}function g(b){u=e.getPointAt(b/t,u);const x=o.normals[b],F=o.binormals[b];for(let N=0;N<=s;N++){const O=N/s*Math.PI*2,B=Math.sin(O),A=-Math.cos(O);l.x=A*x.x+B*F.x,l.y=A*x.y+B*F.y,l.z=A*x.z+B*F.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=t;b++)for(let x=1;x<=s;x++){const F=(s+1)*(b-1)+(x-1),N=(s+1)*b+(x-1),O=(s+1)*b+x,B=(s+1)*(b-1)+x;y.push(F,N,B),y.push(N,O,B)}}function R(){for(let b=0;b<=t;b++)for(let x=0;x<=s;x++)c.x=b/t,c.y=x/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new yu(new Ec[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Et extends gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Iv extends gs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dv extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lv extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mu extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class yp extends Mu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ml=new ft,Yh=new z,qh=new z;class Mp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pu,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qh),t.updateMatrixWorld(),ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jh=new ft,vr=new z,gl=new z;class Uv extends Mp{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),vr.setFromMatrixPosition(e.matrixWorld),i.position.copy(vr),gl.copy(i.position),gl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(gl),i.updateMatrixWorld(),s.makeTranslation(-vr.x,-vr.y,-vr.z),jh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh,i.coordinateSystem,i.reversedDepth)}}class Nv extends Mu{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Uv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sp extends ip{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fv extends Mp{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ua extends Mu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Fv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ov extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Kh=new ft;class bp{constructor(e,t,i=0,s=1/0){this.ray=new Ea(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new hu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kh),this}intersectObject(e,t=!0,i=[]){return Ac(e,this,i,t),i.sort(Zh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ac(e[s],this,i,t);return i.sort(Zh),i}}function Zh(n,e){return n.distance-e.distance}function Ac(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ac(r[o],e,t,!0)}}class Jh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bv extends ps{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Qh(n,e,t,i){const s=zv(i);switch(t){case Yf:return n*e;case su:return n*e/s.components*s.byteLength;case ru:return n*e/s.components*s.byteLength;case jf:return n*e*2/s.components*s.byteLength;case ou:return n*e*2/s.components*s.byteLength;case qf:return n*e*3/s.components*s.byteLength;case Un:return n*e*4/s.components*s.byteLength;case au:return n*e*4/s.components*s.byteLength;case Go:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:case Zl:return Math.max(n,16)*Math.max(e,8)/4;case ql:case Kl:return Math.max(n,8)*Math.max(e,8)/2;case Jl:case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mc:case gc:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vc:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yc:case Mc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zv(n){switch(n){case ni:case Gf:return{byteLength:1,components:1};case kr:case Wf:case Qr:return{byteLength:2,components:1};case nu:case iu:return{byteLength:2,components:4};case ls:case tu:case Zn:return{byteLength:4,components:1};case Xf:case $f:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);function Ep(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function kv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,y)=>f.start-y.start);let d=0;for(let f=1;f<h.length;f++){const y=h[d],S=h[f];S.start<=y.start+y.count+1?y.count=Math.max(y.count,S.start+S.count-y.start):(++d,h[d]=S)}h.length=d+1;for(let f=0,y=h.length;f<y;f++){const S=h[f];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Hv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vv=`#ifdef USE_ALPHAHASH
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
#endif`,Gv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yv=`#ifdef USE_AOMAP
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
#endif`,qv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jv=`#ifdef USE_BATCHING
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
#endif`,Kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ex=`#ifdef USE_IRIDESCENCE
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
#endif`,tx=`#ifdef USE_BUMPMAP
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ux=`#define PI 3.141592653589793
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
} // validated`,hx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dx=`vec3 transformedNormal = objectNormal;
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
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_x="gl_FragColor = linearToOutputTexel( gl_FragColor );",vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rx=`#ifdef USE_GRADIENTMAP
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
}`,Cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Px=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dx=`uniform bool receiveShadow;
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
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bx=`PhysicalMaterial material;
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
#endif`,zx=`struct PhysicalMaterial {
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
}`,kx=`
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
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kx=`#if defined( USE_POINTS_UV )
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
#endif`,Zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ey=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`#ifdef USE_MORPHTARGETS
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
#endif`,iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cy=`#ifdef USE_NORMALMAP
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
#endif`,uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,my=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,My=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ey=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wy=`float getShadowMask() {
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
}`,Ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ay=`#ifdef USE_SKINNING
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
#endif`,Ry=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cy=`#ifdef USE_SKINNING
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
#endif`,Py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uy=`#ifdef USE_TRANSMISSION
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
#endif`,Ny=`#ifdef USE_TRANSMISSION
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hy=`uniform sampler2D t2D;
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`#include <common>
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
}`,Yy=`#if DEPTH_PACKING == 3200
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
}`,qy=`#define DISTANCE
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
}`,jy=`#define DISTANCE
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`uniform float scale;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,eM=`#include <common>
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
}`,tM=`uniform vec3 diffuse;
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
}`,nM=`#define LAMBERT
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
}`,iM=`#define LAMBERT
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
}`,sM=`#define MATCAP
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
}`,rM=`#define MATCAP
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
}`,oM=`#define NORMAL
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
}`,aM=`#define NORMAL
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
}`,lM=`#define PHONG
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
}`,cM=`#define PHONG
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
}`,uM=`#define STANDARD
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
}`,hM=`#define STANDARD
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
}`,dM=`#define TOON
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
}`,fM=`#define TOON
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
}`,pM=`uniform float size;
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
}`,mM=`uniform vec3 diffuse;
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
}`,gM=`#include <common>
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
}`,_M=`uniform vec3 color;
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
}`,vM=`uniform float rotation;
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
}`,xM=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Hv,alphahash_pars_fragment:Vv,alphamap_fragment:Gv,alphamap_pars_fragment:Wv,alphatest_fragment:Xv,alphatest_pars_fragment:$v,aomap_fragment:Yv,aomap_pars_fragment:qv,batching_pars_vertex:jv,batching_vertex:Kv,begin_vertex:Zv,beginnormal_vertex:Jv,bsdfs:Qv,iridescence_fragment:ex,bumpmap_pars_fragment:tx,clipping_planes_fragment:nx,clipping_planes_pars_fragment:ix,clipping_planes_pars_vertex:sx,clipping_planes_vertex:rx,color_fragment:ox,color_pars_fragment:ax,color_pars_vertex:lx,color_vertex:cx,common:ux,cube_uv_reflection_fragment:hx,defaultnormal_vertex:dx,displacementmap_pars_vertex:fx,displacementmap_vertex:px,emissivemap_fragment:mx,emissivemap_pars_fragment:gx,colorspace_fragment:_x,colorspace_pars_fragment:vx,envmap_fragment:xx,envmap_common_pars_fragment:yx,envmap_pars_fragment:Mx,envmap_pars_vertex:Sx,envmap_physical_pars_fragment:Lx,envmap_vertex:bx,fog_vertex:Ex,fog_pars_vertex:wx,fog_fragment:Tx,fog_pars_fragment:Ax,gradientmap_pars_fragment:Rx,lightmap_pars_fragment:Cx,lights_lambert_fragment:Px,lights_lambert_pars_fragment:Ix,lights_pars_begin:Dx,lights_toon_fragment:Ux,lights_toon_pars_fragment:Nx,lights_phong_fragment:Fx,lights_phong_pars_fragment:Ox,lights_physical_fragment:Bx,lights_physical_pars_fragment:zx,lights_fragment_begin:kx,lights_fragment_maps:Hx,lights_fragment_end:Vx,logdepthbuf_fragment:Gx,logdepthbuf_pars_fragment:Wx,logdepthbuf_pars_vertex:Xx,logdepthbuf_vertex:$x,map_fragment:Yx,map_pars_fragment:qx,map_particle_fragment:jx,map_particle_pars_fragment:Kx,metalnessmap_fragment:Zx,metalnessmap_pars_fragment:Jx,morphinstance_vertex:Qx,morphcolor_vertex:ey,morphnormal_vertex:ty,morphtarget_pars_vertex:ny,morphtarget_vertex:iy,normal_fragment_begin:sy,normal_fragment_maps:ry,normal_pars_fragment:oy,normal_pars_vertex:ay,normal_vertex:ly,normalmap_pars_fragment:cy,clearcoat_normal_fragment_begin:uy,clearcoat_normal_fragment_maps:hy,clearcoat_pars_fragment:dy,iridescence_pars_fragment:fy,opaque_fragment:py,packing:my,premultiplied_alpha_fragment:gy,project_vertex:_y,dithering_fragment:vy,dithering_pars_fragment:xy,roughnessmap_fragment:yy,roughnessmap_pars_fragment:My,shadowmap_pars_fragment:Sy,shadowmap_pars_vertex:by,shadowmap_vertex:Ey,shadowmask_pars_fragment:wy,skinbase_vertex:Ty,skinning_pars_vertex:Ay,skinning_vertex:Ry,skinnormal_vertex:Cy,specularmap_fragment:Py,specularmap_pars_fragment:Iy,tonemapping_fragment:Dy,tonemapping_pars_fragment:Ly,transmission_fragment:Uy,transmission_pars_fragment:Ny,uv_pars_fragment:Fy,uv_pars_vertex:Oy,uv_vertex:By,worldpos_vertex:zy,background_vert:ky,background_frag:Hy,backgroundCube_vert:Vy,backgroundCube_frag:Gy,cube_vert:Wy,cube_frag:Xy,depth_vert:$y,depth_frag:Yy,distanceRGBA_vert:qy,distanceRGBA_frag:jy,equirect_vert:Ky,equirect_frag:Zy,linedashed_vert:Jy,linedashed_frag:Qy,meshbasic_vert:eM,meshbasic_frag:tM,meshlambert_vert:nM,meshlambert_frag:iM,meshmatcap_vert:sM,meshmatcap_frag:rM,meshnormal_vert:oM,meshnormal_frag:aM,meshphong_vert:lM,meshphong_frag:cM,meshphysical_vert:uM,meshphysical_frag:hM,meshtoon_vert:dM,meshtoon_frag:fM,points_vert:pM,points_frag:mM,shadow_vert:gM,shadow_frag:_M,sprite_vert:vM,sprite_frag:xM},Re={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Yn={basic:{uniforms:nn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:nn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new tt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:nn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:nn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:nn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new tt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:nn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:nn([Re.points,Re.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:nn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:nn([Re.common,Re.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:nn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:nn([Re.sprite,Re.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:nn([Re.common,Re.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:nn([Re.lights,Re.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Yn.physical={uniforms:nn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Uo={r:0,b:0,g:0},Ki=new zn,yM=new ft;function MM(n,e,t,i,s,r,o){const a=new tt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function y(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function S(b){let x=!1;const F=y(b);F===null?m(a,l):F&&F.isColor&&(m(F,1),x=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,x){const F=y(x);F&&(F.isCubeTexture||F.mapping===ba)?(u===void 0&&(u=new at(new ii(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:tr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ki.copy(x.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=F,u.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yM.makeRotationFromEuler(Ki)),u.material.toneMapped=ct.getTransfer(F.colorSpace)!==mt,(h!==F||d!==F.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=F,d=F.version,f=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):F&&F.isTexture&&(c===void 0&&(c=new at(new ds(2,2),new zi({name:"BackgroundMaterial",uniforms:tr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=F,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ct.getTransfer(F.colorSpace)!==mt,F.matrixAutoUpdate===!0&&F.updateMatrix(),c.material.uniforms.uvTransform.value.copy(F.matrix),(h!==F||d!==F.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=F,d=F.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,x){b.getRGB(Uo,np(n)),i.buffers.color.setClear(Uo.r,Uo.g,Uo.b,x,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:S,addToRenderList:g,dispose:R}}function SM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(T,H,K,k,U){let P=!1;const L=h(k,K,H);r!==L&&(r=L,c(r.object)),P=f(T,k,K,U),P&&y(T,k,K,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(P||o)&&(o=!1,x(T,H,K,k),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function h(T,H,K){const k=K.wireframe===!0;let U=i[T.id];U===void 0&&(U={},i[T.id]=U);let P=U[H.id];P===void 0&&(P={},U[H.id]=P);let L=P[k];return L===void 0&&(L=d(l()),P[k]=L),L}function d(T){const H=[],K=[],k=[];for(let U=0;U<t;U++)H[U]=0,K[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:k,object:T,attributes:{},index:null}}function f(T,H,K,k){const U=r.attributes,P=H.attributes;let L=0;const D=K.getAttributes();for(const I in D)if(D[I].location>=0){const he=U[I];let G=P[I];if(G===void 0&&(I==="instanceMatrix"&&T.instanceMatrix&&(G=T.instanceMatrix),I==="instanceColor"&&T.instanceColor&&(G=T.instanceColor)),he===void 0||he.attribute!==G||G&&he.data!==G.data)return!0;L++}return r.attributesNum!==L||r.index!==k}function y(T,H,K,k){const U={},P=H.attributes;let L=0;const D=K.getAttributes();for(const I in D)if(D[I].location>=0){let he=P[I];he===void 0&&(I==="instanceMatrix"&&T.instanceMatrix&&(he=T.instanceMatrix),I==="instanceColor"&&T.instanceColor&&(he=T.instanceColor));const G={};G.attribute=he,he&&he.data&&(G.data=he.data),U[I]=G,L++}r.attributes=U,r.attributesNum=L,r.index=k}function S(){const T=r.newAttributes;for(let H=0,K=T.length;H<K;H++)T[H]=0}function g(T){m(T,0)}function m(T,H){const K=r.newAttributes,k=r.enabledAttributes,U=r.attributeDivisors;K[T]=1,k[T]===0&&(n.enableVertexAttribArray(T),k[T]=1),U[T]!==H&&(n.vertexAttribDivisor(T,H),U[T]=H)}function R(){const T=r.newAttributes,H=r.enabledAttributes;for(let K=0,k=H.length;K<k;K++)H[K]!==T[K]&&(n.disableVertexAttribArray(K),H[K]=0)}function b(T,H,K,k,U,P,L){L===!0?n.vertexAttribIPointer(T,H,K,U,P):n.vertexAttribPointer(T,H,K,k,U,P)}function x(T,H,K,k){S();const U=k.attributes,P=K.getAttributes(),L=H.defaultAttributeValues;for(const D in P){const I=P[D];if(I.location>=0){let ee=U[D];if(ee===void 0&&(D==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),D==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor)),ee!==void 0){const he=ee.normalized,G=ee.itemSize,pe=e.get(ee);if(pe===void 0)continue;const Me=pe.buffer,He=pe.type,Xe=pe.bytesPerElement,le=He===n.INT||He===n.UNSIGNED_INT||ee.gpuType===tu;if(ee.isInterleavedBufferAttribute){const ue=ee.data,Se=ue.stride,ke=ee.offset;if(ue.isInstancedInterleavedBuffer){for(let de=0;de<I.locationSize;de++)m(I.location+de,ue.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<I.locationSize;de++)g(I.location+de);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let de=0;de<I.locationSize;de++)b(I.location+de,G/I.locationSize,He,he,Se*Xe,(ke+G/I.locationSize*de)*Xe,le)}else{if(ee.isInstancedBufferAttribute){for(let ue=0;ue<I.locationSize;ue++)m(I.location+ue,ee.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ue=0;ue<I.locationSize;ue++)g(I.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ue=0;ue<I.locationSize;ue++)b(I.location+ue,G/I.locationSize,He,he,G*Xe,G/I.locationSize*ue*Xe,le)}}else if(L!==void 0){const he=L[D];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(I.location,he);break;case 3:n.vertexAttrib3fv(I.location,he);break;case 4:n.vertexAttrib4fv(I.location,he);break;default:n.vertexAttrib1fv(I.location,he)}}}}R()}function F(){B();for(const T in i){const H=i[T];for(const K in H){const k=H[K];for(const U in k)u(k[U].object),delete k[U];delete H[K]}delete i[T]}}function N(T){if(i[T.id]===void 0)return;const H=i[T.id];for(const K in H){const k=H[K];for(const U in k)u(k[U].object),delete k[U];delete H[K]}delete i[T.id]}function O(T){for(const H in i){const K=i[H];if(K[T.id]===void 0)continue;const k=K[T.id];for(const U in k)u(k[U].object),delete k[U];delete K[T.id]}}function B(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:A,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfProgram:O,initAttributes:S,enableAttribute:g,disableUnusedAttributes:R}}function bM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let y=0;y<h;y++)f+=u[y];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let y=0;y<c.length;y++)o(c[y],u[y],d[y]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let y=0;for(let S=0;S<h;S++)y+=u[S]*d[S];t.update(y,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function EM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(O){return!(O!==Un&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(O){const B=O===Qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ni&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Zn&&!B)}function l(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=y>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:R,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:F,maxSamples:N}}function wM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ii,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const y=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||y===null||y.length===0||r&&!g)r?u(null):c();else{const R=r?0:i,b=R*4;let x=m.clippingState||null;l.value=x,x=u(y,d,b,f);for(let F=0;F!==b;++F)x[F]=t[F];m.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,y){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=l.value,y!==!0||g===null){const m=f+S*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,x=f;b!==S;++b,x+=4)o.copy(h[b]).applyMatrix4(R,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function TM(n){let e=new WeakMap;function t(o,a){return a===Xl?o.mapping=Js:a===$l&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xl||a===$l)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new q_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const zs=4,ed=[.125,.215,.35,.446,.526,.582],ts=20,_l=new Sp,td=new tt;let vl=null,xl=0,yl=0,Ml=!1;const Qi=(1+Math.sqrt(5))/2,Ls=1/Qi,nd=[new z(-Qi,Ls,0),new z(Qi,Ls,0),new z(-Ls,0,Qi),new z(Ls,0,Qi),new z(0,Qi,-Ls),new z(0,Qi,Ls),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],AM=new z;class Rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=AM}=r;vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,xl,yl),this._renderer.xr.enabled=Ml,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Qr,format:Un,colorSpace:er,depthBuffer:!1},s=id(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RM(r)),this._blurMaterial=CM(r,e,t)}return s}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,_l)}_sceneToCubeUV(e,t,i,s,r){const l=new fn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(td),h.toneMapping=Fi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const S=new Gt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new at(new ii,S);let m=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,m=!0):(S.color.copy(td),m=!0);for(let b=0;b<6;b++){const x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const F=this._cubeSize;No(s,x*F,b>2?F:0,F,F),h.setRenderTarget(s),m&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Js||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;No(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,_l)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nd[(s-r-1)%nd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new at(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,y=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ts-1),S=r/y,g=isFinite(r)?1+Math.floor(u*S):ts;g>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ts}`);const m=[];let R=0;for(let O=0;O<ts;++O){const B=O/S,A=Math.exp(-B*B/2);m.push(A),O===0?R+=A:O<g&&(R+=2*A)}for(let O=0;O<m.length;O++)m[O]=m[O]/R;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=y,d.mipInt.value=b-i;const x=this._sizeLods[s],F=3*x*(s>b-zs?s-b+zs:0),N=4*(this._cubeSize-x);No(t,F,N,3*x,2*x),l.setRenderTarget(t),l.render(h,_l)}}function RM(n){const e=[],t=[],i=[];let s=n;const r=n-zs+1+ed.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-zs?l=ed[o-n+zs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,y=6,S=3,g=2,m=1,R=new Float32Array(S*y*f),b=new Float32Array(g*y*f),x=new Float32Array(m*y*f);for(let N=0;N<f;N++){const O=N%3*2/3-1,B=N>2?0:-1,A=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];R.set(A,S*y*N),b.set(d,g*y*N);const T=[N,N,N,N,N,N];x.set(T,m*y*N)}const F=new Jt;F.setAttribute("position",new wn(R,S)),F.setAttribute("uv",new wn(b,g)),F.setAttribute("faceIndex",new wn(x,m)),e.push(F),s>zs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function id(n,e,t){const i=new us(n,e,t);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function No(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function CM(n,e,t){const i=new Float32Array(ts),s=new z(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function sd(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function rd(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}function PM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xl||l===$l,u=l===Js||l===Qs;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Rc(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Rc(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function IM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Xr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function DM(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,y=h.attributes.position;let S=0;if(f!==null){const R=f.array;S=f.version;for(let b=0,x=R.length;b<x;b+=3){const F=R[b+0],N=R[b+1],O=R[b+2];d.push(F,N,N,O,O,F)}}else if(y!==void 0){const R=y.array;S=y.version;for(let b=0,x=R.length/3-1;b<x;b+=3){const F=b+0,N=b+1,O=b+2;d.push(F,N,N,O,O,F)}}else return;const g=new(Zf(d)?tp:ep)(d,1);g.version=S;const m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function LM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,y){y!==0&&(n.drawElementsInstanced(i,f,r,d*o,y),t.update(f,i,y))}function u(d,f,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,y);let g=0;for(let m=0;m<y;m++)g+=f[m];t.update(g,i,1)}function h(d,f,y,S){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],S[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,S,0,y);let m=0;for(let R=0;R<y;R++)m+=f[R]*S[R];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function UM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function NM(n,e,t){const i=new WeakMap,s=new vt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let T=function(){B.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var f=T;d!==void 0&&d.texture.dispose();const y=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;y===!0&&(x=1),S===!0&&(x=2),g===!0&&(x=3);let F=a.attributes.position.count*x,N=1;F>e.maxTextureSize&&(N=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const O=new Float32Array(F*N*4*h),B=new Jf(O,F,N,h);B.type=Zn,B.needsUpdate=!0;const A=x*4;for(let H=0;H<h;H++){const K=m[H],k=R[H],U=b[H],P=F*N*4*H;for(let L=0;L<K.count;L++){const D=L*A;y===!0&&(s.fromBufferAttribute(K,L),O[P+D+0]=s.x,O[P+D+1]=s.y,O[P+D+2]=s.z,O[P+D+3]=0),S===!0&&(s.fromBufferAttribute(k,L),O[P+D+4]=s.x,O[P+D+5]=s.y,O[P+D+6]=s.z,O[P+D+7]=0),g===!0&&(s.fromBufferAttribute(U,L),O[P+D+8]=s.x,O[P+D+9]=s.y,O[P+D+10]=s.z,O[P+D+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:B,size:new be(F,N)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let y=0;for(let g=0;g<c.length;g++)y+=c[g];const S=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function FM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const wp=new Zt,od=new ap(1,1),Tp=new Jf,Ap=new I_,Rp=new sp,ad=[],ld=[],cd=new Float32Array(16),ud=new Float32Array(9),hd=new Float32Array(4);function or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ad[s];if(r===void 0&&(r=new Float32Array(s),ad[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ta(n,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function OM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function HM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;hd.set(i),n.uniformMatrix2fv(this.addr,!1,hd),Bt(t,i)}}function VM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;ud.set(i),n.uniformMatrix3fv(this.addr,!1,ud),Bt(t,i)}}function GM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;cd.set(i),n.uniformMatrix4fv(this.addr,!1,cd),Bt(t,i)}}function WM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function XM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function qM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function JM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(od.compareFunction=Kf,r=od):r=wp,t.setTexture2D(e||r,s)}function QM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ap,s)}function e1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Rp,s)}function t1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Tp,s)}function n1(n){switch(n){case 5126:return OM;case 35664:return BM;case 35665:return zM;case 35666:return kM;case 35674:return HM;case 35675:return VM;case 35676:return GM;case 5124:case 35670:return WM;case 35667:case 35671:return XM;case 35668:case 35672:return $M;case 35669:case 35673:return YM;case 5125:return qM;case 36294:return jM;case 36295:return KM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return t1}}function i1(n,e){n.uniform1fv(this.addr,e)}function s1(n,e){const t=or(e,this.size,2);n.uniform2fv(this.addr,t)}function r1(n,e){const t=or(e,this.size,3);n.uniform3fv(this.addr,t)}function o1(n,e){const t=or(e,this.size,4);n.uniform4fv(this.addr,t)}function a1(n,e){const t=or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function l1(n,e){const t=or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function c1(n,e){const t=or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function u1(n,e){n.uniform1iv(this.addr,e)}function h1(n,e){n.uniform2iv(this.addr,e)}function d1(n,e){n.uniform3iv(this.addr,e)}function f1(n,e){n.uniform4iv(this.addr,e)}function p1(n,e){n.uniform1uiv(this.addr,e)}function m1(n,e){n.uniform2uiv(this.addr,e)}function g1(n,e){n.uniform3uiv(this.addr,e)}function _1(n,e){n.uniform4uiv(this.addr,e)}function v1(n,e,t){const i=this.cache,s=e.length,r=Ta(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||wp,r[o])}function x1(n,e,t){const i=this.cache,s=e.length,r=Ta(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ap,r[o])}function y1(n,e,t){const i=this.cache,s=e.length,r=Ta(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Rp,r[o])}function M1(n,e,t){const i=this.cache,s=e.length,r=Ta(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Tp,r[o])}function S1(n){switch(n){case 5126:return i1;case 35664:return s1;case 35665:return r1;case 35666:return o1;case 35674:return a1;case 35675:return l1;case 35676:return c1;case 5124:case 35670:return u1;case 35667:case 35671:return h1;case 35668:case 35672:return d1;case 35669:case 35673:return f1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return M1}}class b1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=n1(t.type)}}class E1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S1(t.type)}}class w1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function dd(n,e){n.seq.push(e),n.map[e.id]=e}function T1(n,e,t){const i=n.name,s=i.length;for(Sl.lastIndex=0;;){const r=Sl.exec(i),o=Sl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){dd(t,c===void 0?new b1(a,n,e):new E1(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new w1(a),dd(t,h)),t=h}}}class Yo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);T1(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function fd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const A1=37297;let R1=0;function C1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const pd=new Je;function P1(n){ct._getMatrix(pd,ct.workingColorSpace,n);const e=`mat3( ${pd.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case sa:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function md(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+C1(n.getShaderSource(e),a)}else return r}function I1(n,e){const t=P1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function D1(n,e){let t;switch(e){case X0:t="Linear";break;case $0:t="Reinhard";break;case Y0:t="Cineon";break;case eu:t="ACESFilmic";break;case j0:t="AgX";break;case K0:t="Neutral";break;case q0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fo=new z;function L1(){ct.getLuminanceCoefficients(Fo);const n=Fo.x.toFixed(4),e=Fo.y.toFixed(4),t=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function N1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function F1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function br(n){return n!==""}function gd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(n){return n.replace(O1,z1)}const B1=new Map;function z1(n,e){let t=Qe[e];if(t===void 0){const i=B1.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cc(t)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(n){return n.replace(k1,H1)}function H1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function G1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Js:case Qs:e="ENVMAP_TYPE_CUBE";break;case ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W1(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Qs&&(e="ENVMAP_MODE_REFRACTION"),e}function X1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qc:e="ENVMAP_BLENDING_MULTIPLY";break;case G0:e="ENVMAP_BLENDING_MIX";break;case W0:e="ENVMAP_BLENDING_ADD";break}return e}function $1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Y1(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=V1(t),c=G1(t),u=W1(t),h=X1(t),d=$1(t),f=U1(t),y=N1(r),S=s.createProgram();let g,m,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(br).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(br).join(`
`),m.length>0&&(m+=`
`)):(g=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),m=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Fi?D1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,I1("linearToOutputTexel",t.outputColorSpace),L1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=Cc(o),o=gd(o,t),o=_d(o,t),a=Cc(a),a=gd(a,t),a=_d(a,t),o=vd(o),a=vd(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=R+g+o,x=R+m+a,F=fd(s,s.VERTEX_SHADER,b),N=fd(s,s.FRAGMENT_SHADER,x);s.attachShader(S,F),s.attachShader(S,N),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function O(H){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(S)||"",k=s.getShaderInfoLog(F)||"",U=s.getShaderInfoLog(N)||"",P=K.trim(),L=k.trim(),D=U.trim();let I=!0,ee=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,F,N);else{const he=md(s,F,"vertex"),G=md(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+P+`
`+he+`
`+G)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(L===""||D==="")&&(ee=!1);ee&&(H.diagnostics={runnable:I,programLog:P,vertexShader:{log:L,prefix:g},fragmentShader:{log:D,prefix:m}})}s.deleteShader(F),s.deleteShader(N),B=new Yo(s,S),A=F1(s,S)}let B;this.getUniforms=function(){return B===void 0&&O(this),B};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(S,A1)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R1++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=F,this.fragmentShader=N,this}let q1=0;class j1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new K1(e),t.set(e,i)),i}}class K1{constructor(e){this.id=q1++,this.code=e,this.usedTimes=0}}function Z1(n,e,t,i,s,r,o){const a=new hu,l=new j1,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return c.add(A),A===0?"uv":`uv${A}`}function g(A,T,H,K,k){const U=K.fog,P=k.geometry,L=A.isMeshStandardMaterial?K.environment:null,D=(A.isMeshStandardMaterial?t:e).get(A.envMap||L),I=D&&D.mapping===ba?D.image.height:null,ee=y[A.type];A.precision!==null&&(f=s.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));const he=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,G=he!==void 0?he.length:0;let pe=0;P.morphAttributes.position!==void 0&&(pe=1),P.morphAttributes.normal!==void 0&&(pe=2),P.morphAttributes.color!==void 0&&(pe=3);let Me,He,Xe,le;if(ee){const ut=Yn[ee];Me=ut.vertexShader,He=ut.fragmentShader}else Me=A.vertexShader,He=A.fragmentShader,l.update(A),Xe=l.getVertexShaderID(A),le=l.getFragmentShaderID(A);const ue=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),ke=k.isInstancedMesh===!0,de=k.isBatchedMesh===!0,w=!!A.map,_=!!A.matcap,p=!!D,W=!!A.aoMap,V=!!A.lightMap,$=!!A.bumpMap,q=!!A.normalMap,re=!!A.displacementMap,Z=!!A.emissiveMap,ie=!!A.metalnessMap,Y=!!A.roughnessMap,me=A.anisotropy>0,E=A.clearcoat>0,M=A.dispersion>0,X=A.iridescence>0,te=A.sheen>0,ce=A.transmission>0,ne=me&&!!A.anisotropyMap,Ee=E&&!!A.clearcoatMap,ge=E&&!!A.clearcoatNormalMap,Ae=E&&!!A.clearcoatRoughnessMap,Pe=X&&!!A.iridescenceMap,_e=X&&!!A.iridescenceThicknessMap,Ce=te&&!!A.sheenColorMap,Oe=te&&!!A.sheenRoughnessMap,De=!!A.specularMap,Te=!!A.specularColorMap,je=!!A.specularIntensityMap,j=ce&&!!A.transmissionMap,ye=ce&&!!A.thicknessMap,we=!!A.gradientMap,Ne=!!A.alphaMap,ve=A.alphaTest>0,fe=!!A.alphaHash,ze=!!A.extensions;let Ke=Fi;A.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const St={shaderID:ee,shaderType:A.type,shaderName:A.name,vertexShader:Me,fragmentShader:He,defines:A.defines,customVertexShaderID:Xe,customFragmentShaderID:le,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:de,batchingColor:de&&k._colorsTexture!==null,instancing:ke,instancingColor:ke&&k.instanceColor!==null,instancingMorph:ke&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:er,alphaToCoverage:!!A.alphaToCoverage,map:w,matcap:_,envMap:p,envMapMode:p&&D.mapping,envMapCubeUVHeight:I,aoMap:W,lightMap:V,bumpMap:$,normalMap:q,displacementMap:d&&re,emissiveMap:Z,normalMapObjectSpace:q&&A.normalMapType===e_,normalMapTangentSpace:q&&A.normalMapType===lu,metalnessMap:ie,roughnessMap:Y,anisotropy:me,anisotropyMap:ne,clearcoat:E,clearcoatMap:Ee,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ae,dispersion:M,iridescence:X,iridescenceMap:Pe,iridescenceThicknessMap:_e,sheen:te,sheenColorMap:Ce,sheenRoughnessMap:Oe,specularMap:De,specularColorMap:Te,specularIntensityMap:je,transmission:ce,transmissionMap:j,thicknessMap:ye,gradientMap:we,opaque:A.transparent===!1&&A.blending===Xs&&A.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:fe,combine:A.combine,mapUv:w&&S(A.map.channel),aoMapUv:W&&S(A.aoMap.channel),lightMapUv:V&&S(A.lightMap.channel),bumpMapUv:$&&S(A.bumpMap.channel),normalMapUv:q&&S(A.normalMap.channel),displacementMapUv:re&&S(A.displacementMap.channel),emissiveMapUv:Z&&S(A.emissiveMap.channel),metalnessMapUv:ie&&S(A.metalnessMap.channel),roughnessMapUv:Y&&S(A.roughnessMap.channel),anisotropyMapUv:ne&&S(A.anisotropyMap.channel),clearcoatMapUv:Ee&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:ge&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&S(A.sheenRoughnessMap.channel),specularMapUv:De&&S(A.specularMap.channel),specularColorMapUv:Te&&S(A.specularColorMap.channel),specularIntensityMapUv:je&&S(A.specularIntensityMap.channel),transmissionMapUv:j&&S(A.transmissionMap.channel),thicknessMapUv:ye&&S(A.thicknessMap.channel),alphaMapUv:Ne&&S(A.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(q||me),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!P.attributes.uv&&(w||Ne),fog:!!U,useFog:A.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:k.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:pe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:w&&A.map.isVideoTexture===!0&&ct.getTransfer(A.map.colorSpace)===mt,decodeVideoTextureEmissive:Z&&A.emissiveMap.isVideoTexture===!0&&ct.getTransfer(A.emissiveMap.colorSpace)===mt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===bn,flipSided:A.side===ln,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ze&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&A.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function m(A){const T=[];if(A.shaderID?T.push(A.shaderID):(T.push(A.customVertexShaderID),T.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)T.push(H),T.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(R(T,A),b(T,A),T.push(n.outputColorSpace)),T.push(A.customProgramCacheKey),T.join()}function R(A,T){A.push(T.precision),A.push(T.outputColorSpace),A.push(T.envMapMode),A.push(T.envMapCubeUVHeight),A.push(T.mapUv),A.push(T.alphaMapUv),A.push(T.lightMapUv),A.push(T.aoMapUv),A.push(T.bumpMapUv),A.push(T.normalMapUv),A.push(T.displacementMapUv),A.push(T.emissiveMapUv),A.push(T.metalnessMapUv),A.push(T.roughnessMapUv),A.push(T.anisotropyMapUv),A.push(T.clearcoatMapUv),A.push(T.clearcoatNormalMapUv),A.push(T.clearcoatRoughnessMapUv),A.push(T.iridescenceMapUv),A.push(T.iridescenceThicknessMapUv),A.push(T.sheenColorMapUv),A.push(T.sheenRoughnessMapUv),A.push(T.specularMapUv),A.push(T.specularColorMapUv),A.push(T.specularIntensityMapUv),A.push(T.transmissionMapUv),A.push(T.thicknessMapUv),A.push(T.combine),A.push(T.fogExp2),A.push(T.sizeAttenuation),A.push(T.morphTargetsCount),A.push(T.morphAttributeCount),A.push(T.numDirLights),A.push(T.numPointLights),A.push(T.numSpotLights),A.push(T.numSpotLightMaps),A.push(T.numHemiLights),A.push(T.numRectAreaLights),A.push(T.numDirLightShadows),A.push(T.numPointLightShadows),A.push(T.numSpotLightShadows),A.push(T.numSpotLightShadowsWithMaps),A.push(T.numLightProbes),A.push(T.shadowMapType),A.push(T.toneMapping),A.push(T.numClippingPlanes),A.push(T.numClipIntersection),A.push(T.depthPacking)}function b(A,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),A.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),A.push(a.mask)}function x(A){const T=y[A.type];let H;if(T){const K=Yn[T];H=W_.clone(K.uniforms)}else H=A.uniforms;return H}function F(A,T){let H;for(let K=0,k=u.length;K<k;K++){const U=u[K];if(U.cacheKey===T){H=U,++H.usedTimes;break}}return H===void 0&&(H=new Y1(n,T,A,r),u.push(H)),H}function N(A){if(--A.usedTimes===0){const T=u.indexOf(A);u[T]=u[u.length-1],u.pop(),A.destroy()}}function O(A){l.remove(A)}function B(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:F,releaseProgram:N,releaseShaderCache:O,programs:u,dispose:B}}function J1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Q1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Md(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,y,S,g){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:y,renderOrder:h.renderOrder,z:S,group:g},n[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=y,m.renderOrder=h.renderOrder,m.z=S,m.group=g),e++,m}function a(h,d,f,y,S,g){const m=o(h,d,f,y,S,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(h,d,f,y,S,g){const m=o(h,d,f,y,S,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||Q1),i.length>1&&i.sort(d||yd),s.length>1&&s.sort(d||yd)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function eS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Md,n.set(i,[o])):s>=r.length?(o=new Md,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function tS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new tt};break;case"SpotLight":t={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function nS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let iS=0;function sS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rS(n){const e=new tS,t=nS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new ft,o=new ft;function a(c){let u=0,h=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let f=0,y=0,S=0,g=0,m=0,R=0,b=0,x=0,F=0,N=0,O=0;c.sort(sS);for(let A=0,T=c.length;A<T;A++){const H=c[A],K=H.color,k=H.intensity,U=H.distance,P=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)u+=K.r*k,h+=K.g*k,d+=K.b*k;else if(H.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(H.sh.coefficients[L],k);O++}else if(H.isDirectionalLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const D=H.shadow,I=t.get(H);I.shadowIntensity=D.intensity,I.shadowBias=D.bias,I.shadowNormalBias=D.normalBias,I.shadowRadius=D.radius,I.shadowMapSize=D.mapSize,i.directionalShadow[f]=I,i.directionalShadowMap[f]=P,i.directionalShadowMatrix[f]=H.shadow.matrix,R++}i.directional[f]=L,f++}else if(H.isSpotLight){const L=e.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy(K).multiplyScalar(k),L.distance=U,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,i.spot[S]=L;const D=H.shadow;if(H.map&&(i.spotLightMap[F]=H.map,F++,D.updateMatrices(H),H.castShadow&&N++),i.spotLightMatrix[S]=D.matrix,H.castShadow){const I=t.get(H);I.shadowIntensity=D.intensity,I.shadowBias=D.bias,I.shadowNormalBias=D.normalBias,I.shadowRadius=D.radius,I.shadowMapSize=D.mapSize,i.spotShadow[S]=I,i.spotShadowMap[S]=P,x++}S++}else if(H.isRectAreaLight){const L=e.get(H);L.color.copy(K).multiplyScalar(k),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),i.rectArea[g]=L,g++}else if(H.isPointLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),L.distance=H.distance,L.decay=H.decay,H.castShadow){const D=H.shadow,I=t.get(H);I.shadowIntensity=D.intensity,I.shadowBias=D.bias,I.shadowNormalBias=D.normalBias,I.shadowRadius=D.radius,I.shadowMapSize=D.mapSize,I.shadowCameraNear=D.camera.near,I.shadowCameraFar=D.camera.far,i.pointShadow[y]=I,i.pointShadowMap[y]=P,i.pointShadowMatrix[y]=H.shadow.matrix,b++}i.point[y]=L,y++}else if(H.isHemisphereLight){const L=e.get(H);L.skyColor.copy(H.color).multiplyScalar(k),L.groundColor.copy(H.groundColor).multiplyScalar(k),i.hemi[m]=L,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const B=i.hash;(B.directionalLength!==f||B.pointLength!==y||B.spotLength!==S||B.rectAreaLength!==g||B.hemiLength!==m||B.numDirectionalShadows!==R||B.numPointShadows!==b||B.numSpotShadows!==x||B.numSpotMaps!==F||B.numLightProbes!==O)&&(i.directional.length=f,i.spot.length=S,i.rectArea.length=g,i.point.length=y,i.hemi.length=m,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+F-N,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=O,B.directionalLength=f,B.pointLength=y,B.spotLength=S,B.rectAreaLength=g,B.hemiLength=m,B.numDirectionalShadows=R,B.numPointShadows=b,B.numSpotShadows=x,B.numSpotMaps=F,B.numLightProbes=O,i.version=iS++)}function l(c,u){let h=0,d=0,f=0,y=0,S=0;const g=u.matrixWorldInverse;for(let m=0,R=c.length;m<R;m++){const b=c[m];if(b.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(b.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(b.isRectAreaLight){const x=i.rectArea[y];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const x=i.hemi[S];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(g),S++}}}return{setup:a,setupView:l,state:i}}function Sd(n){const e=new rS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function oS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Sd(n),e.set(s,[a])):r>=o.length?(a=new Sd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const aS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lS=`uniform sampler2D shadow_pass;
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
}`;function cS(n,e,t){let i=new pu;const s=new be,r=new be,o=new vt,a=new Dv({depthPacking:Q0}),l=new Lv,c={},u=t.maxTextureSize,h={[Bi]:ln,[ln]:Bi,[bn]:bn},d=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:aS,fragmentShader:lS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const y=new Jt;y.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new at(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hf;let m=this.type;this.render=function(N,O,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;const A=n.getRenderTarget(),T=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Ni),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const k=m!==pi&&this.type===pi,U=m===pi&&this.type!==pi;for(let P=0,L=N.length;P<L;P++){const D=N[P],I=D.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const ee=I.getFrameExtents();if(s.multiply(ee),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ee.x),s.x=r.x*ee.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ee.y),s.y=r.y*ee.y,I.mapSize.y=r.y)),I.map===null||k===!0||U===!0){const G=this.type!==pi?{minFilter:xn,magFilter:xn}:{};I.map!==null&&I.map.dispose(),I.map=new us(s.x,s.y,G),I.map.texture.name=D.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const he=I.getViewportCount();for(let G=0;G<he;G++){const pe=I.getViewport(G);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),K.viewport(o),I.updateMatrices(D,G),i=I.getFrustum(),x(O,B,I.camera,D,this.type)}I.isPointLightShadow!==!0&&this.type===pi&&R(I,B),I.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(A,T,H)};function R(N,O){const B=e.update(S);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,f.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new us(s.x,s.y)),d.uniforms.shadow_pass.value=N.map.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(O,null,B,d,S,null),f.uniforms.shadow_pass.value=N.mapPass.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(O,null,B,f,S,null)}function b(N,O,B,A){let T=null;const H=B.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)T=H;else if(T=B.isPointLight===!0?l:a,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const K=T.uuid,k=O.uuid;let U=c[K];U===void 0&&(U={},c[K]=U);let P=U[k];P===void 0&&(P=T.clone(),U[k]=P,O.addEventListener("dispose",F)),T=P}if(T.visible=O.visible,T.wireframe=O.wireframe,A===pi?T.side=O.shadowSide!==null?O.shadowSide:O.side:T.side=O.shadowSide!==null?O.shadowSide:h[O.side],T.alphaMap=O.alphaMap,T.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,T.map=O.map,T.clipShadows=O.clipShadows,T.clippingPlanes=O.clippingPlanes,T.clipIntersection=O.clipIntersection,T.displacementMap=O.displacementMap,T.displacementScale=O.displacementScale,T.displacementBias=O.displacementBias,T.wireframeLinewidth=O.wireframeLinewidth,T.linewidth=O.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const K=n.properties.get(T);K.light=B}return T}function x(N,O,B,A,T){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===pi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,N.matrixWorld);const k=e.update(N),U=N.material;if(Array.isArray(U)){const P=k.groups;for(let L=0,D=P.length;L<D;L++){const I=P[L],ee=U[I.materialIndex];if(ee&&ee.visible){const he=b(N,ee,A,T);N.onBeforeShadow(n,N,O,B,k,he,I),n.renderBufferDirect(B,null,k,he,N,I),N.onAfterShadow(n,N,O,B,k,he,I)}}}else if(U.visible){const P=b(N,U,A,T);N.onBeforeShadow(n,N,O,B,k,P,null),n.renderBufferDirect(B,null,k,P,N,null),N.onAfterShadow(n,N,O,B,k,P,null)}}const K=N.children;for(let k=0,U=K.length;k<U;k++)x(K[k],O,B,A,T)}function F(N){N.target.removeEventListener("dispose",F);for(const B in c){const A=c[B],T=N.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}const uS={[Bl]:zl,[kl]:Gl,[Hl]:Wl,[Zs]:Vl,[zl]:Bl,[Gl]:kl,[Wl]:Hl,[Vl]:Zs};function hS(n,e){function t(){let j=!1;const ye=new vt;let we=null;const Ne=new vt(0,0,0,0);return{setMask:function(ve){we!==ve&&!j&&(n.colorMask(ve,ve,ve,ve),we=ve)},setLocked:function(ve){j=ve},setClear:function(ve,fe,ze,Ke,St){St===!0&&(ve*=Ke,fe*=Ke,ze*=Ke),ye.set(ve,fe,ze,Ke),Ne.equals(ye)===!1&&(n.clearColor(ve,fe,ze,Ke),Ne.copy(ye))},reset:function(){j=!1,we=null,Ne.set(-1,0,0,0)}}}function i(){let j=!1,ye=!1,we=null,Ne=null,ve=null;return{setReversed:function(fe){if(ye!==fe){const ze=e.get("EXT_clip_control");fe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ye=fe;const Ke=ve;ve=null,this.setClear(Ke)}},getReversed:function(){return ye},setTest:function(fe){fe?ue(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(fe){we!==fe&&!j&&(n.depthMask(fe),we=fe)},setFunc:function(fe){if(ye&&(fe=uS[fe]),Ne!==fe){switch(fe){case Bl:n.depthFunc(n.NEVER);break;case zl:n.depthFunc(n.ALWAYS);break;case kl:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case Hl:n.depthFunc(n.EQUAL);break;case Vl:n.depthFunc(n.GEQUAL);break;case Gl:n.depthFunc(n.GREATER);break;case Wl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=fe}},setLocked:function(fe){j=fe},setClear:function(fe){ve!==fe&&(ye&&(fe=1-fe),n.clearDepth(fe),ve=fe)},reset:function(){j=!1,we=null,Ne=null,ve=null,ye=!1}}}function s(){let j=!1,ye=null,we=null,Ne=null,ve=null,fe=null,ze=null,Ke=null,St=null;return{setTest:function(ut){j||(ut?ue(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(ut){ye!==ut&&!j&&(n.stencilMask(ut),ye=ut)},setFunc:function(ut,ri,Hn){(we!==ut||Ne!==ri||ve!==Hn)&&(n.stencilFunc(ut,ri,Hn),we=ut,Ne=ri,ve=Hn)},setOp:function(ut,ri,Hn){(fe!==ut||ze!==ri||Ke!==Hn)&&(n.stencilOp(ut,ri,Hn),fe=ut,ze=ri,Ke=Hn)},setLocked:function(ut){j=ut},setClear:function(ut){St!==ut&&(n.clearStencil(ut),St=ut)},reset:function(){j=!1,ye=null,we=null,Ne=null,ve=null,fe=null,ze=null,Ke=null,St=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],y=null,S=!1,g=null,m=null,R=null,b=null,x=null,F=null,N=null,O=new tt(0,0,0),B=0,A=!1,T=null,H=null,K=null,k=null,U=null;const P=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,D=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(I)[1]),L=D>=1):I.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),L=D>=2);let ee=null,he={};const G=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),Me=new vt().fromArray(G),He=new vt().fromArray(pe);function Xe(j,ye,we,Ne){const ve=new Uint8Array(4),fe=n.createTexture();n.bindTexture(j,fe),n.texParameteri(j,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(j,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<we;ze++)j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ye+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return fe}const le={};le[n.TEXTURE_2D]=Xe(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=Xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=Xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=Xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(Zs),$(!1),q(dh),ue(n.CULL_FACE),W(Ni);function ue(j){u[j]!==!0&&(n.enable(j),u[j]=!0)}function Se(j){u[j]!==!1&&(n.disable(j),u[j]=!1)}function ke(j,ye){return h[j]!==ye?(n.bindFramebuffer(j,ye),h[j]=ye,j===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ye),j===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function de(j,ye){let we=f,Ne=!1;if(j){we=d.get(ye),we===void 0&&(we=[],d.set(ye,we));const ve=j.textures;if(we.length!==ve.length||we[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,ze=ve.length;fe<ze;fe++)we[fe]=n.COLOR_ATTACHMENT0+fe;we.length=ve.length,Ne=!0}}else we[0]!==n.BACK&&(we[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(we)}function w(j){return y!==j?(n.useProgram(j),y=j,!0):!1}const _={[es]:n.FUNC_ADD,[T0]:n.FUNC_SUBTRACT,[A0]:n.FUNC_REVERSE_SUBTRACT};_[R0]=n.MIN,_[C0]=n.MAX;const p={[P0]:n.ZERO,[I0]:n.ONE,[D0]:n.SRC_COLOR,[Fl]:n.SRC_ALPHA,[B0]:n.SRC_ALPHA_SATURATE,[F0]:n.DST_COLOR,[U0]:n.DST_ALPHA,[L0]:n.ONE_MINUS_SRC_COLOR,[Ol]:n.ONE_MINUS_SRC_ALPHA,[O0]:n.ONE_MINUS_DST_COLOR,[N0]:n.ONE_MINUS_DST_ALPHA,[z0]:n.CONSTANT_COLOR,[k0]:n.ONE_MINUS_CONSTANT_COLOR,[H0]:n.CONSTANT_ALPHA,[V0]:n.ONE_MINUS_CONSTANT_ALPHA};function W(j,ye,we,Ne,ve,fe,ze,Ke,St,ut){if(j===Ni){S===!0&&(Se(n.BLEND),S=!1);return}if(S===!1&&(ue(n.BLEND),S=!0),j!==w0){if(j!==g||ut!==A){if((m!==es||x!==es)&&(n.blendEquation(n.FUNC_ADD),m=es,x=es),ut)switch(j){case Xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fh:n.blendFunc(n.ONE,n.ONE);break;case ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ph:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}R=null,b=null,F=null,N=null,O.set(0,0,0),B=0,g=j,A=ut}return}ve=ve||ye,fe=fe||we,ze=ze||Ne,(ye!==m||ve!==x)&&(n.blendEquationSeparate(_[ye],_[ve]),m=ye,x=ve),(we!==R||Ne!==b||fe!==F||ze!==N)&&(n.blendFuncSeparate(p[we],p[Ne],p[fe],p[ze]),R=we,b=Ne,F=fe,N=ze),(Ke.equals(O)===!1||St!==B)&&(n.blendColor(Ke.r,Ke.g,Ke.b,St),O.copy(Ke),B=St),g=j,A=!1}function V(j,ye){j.side===bn?Se(n.CULL_FACE):ue(n.CULL_FACE);let we=j.side===ln;ye&&(we=!we),$(we),j.blending===Xs&&j.transparent===!1?W(Ni):W(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);const Ne=j.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Z(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(j){T!==j&&(j?n.frontFace(n.CW):n.frontFace(n.CCW),T=j)}function q(j){j!==b0?(ue(n.CULL_FACE),j!==H&&(j===dh?n.cullFace(n.BACK):j===E0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),H=j}function re(j){j!==K&&(L&&n.lineWidth(j),K=j)}function Z(j,ye,we){j?(ue(n.POLYGON_OFFSET_FILL),(k!==ye||U!==we)&&(n.polygonOffset(ye,we),k=ye,U=we)):Se(n.POLYGON_OFFSET_FILL)}function ie(j){j?ue(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Y(j){j===void 0&&(j=n.TEXTURE0+P-1),ee!==j&&(n.activeTexture(j),ee=j)}function me(j,ye,we){we===void 0&&(ee===null?we=n.TEXTURE0+P-1:we=ee);let Ne=he[we];Ne===void 0&&(Ne={type:void 0,texture:void 0},he[we]=Ne),(Ne.type!==j||Ne.texture!==ye)&&(ee!==we&&(n.activeTexture(we),ee=we),n.bindTexture(j,ye||le[j]),Ne.type=j,Ne.texture=ye)}function E(){const j=he[ee];j!==void 0&&j.type!==void 0&&(n.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function te(){try{n.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ce(){try{n.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ne(){try{n.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{n.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ae(){try{n.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(){try{n.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{n.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(j){Me.equals(j)===!1&&(n.scissor(j.x,j.y,j.z,j.w),Me.copy(j))}function Oe(j){He.equals(j)===!1&&(n.viewport(j.x,j.y,j.z,j.w),He.copy(j))}function De(j,ye){let we=c.get(ye);we===void 0&&(we=new WeakMap,c.set(ye,we));let Ne=we.get(j);Ne===void 0&&(Ne=n.getUniformBlockIndex(ye,j.name),we.set(j,Ne))}function Te(j,ye){const Ne=c.get(ye).get(j);l.get(ye)!==Ne&&(n.uniformBlockBinding(ye,Ne,j.__bindingPointIndex),l.set(ye,Ne))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ee=null,he={},h={},d=new WeakMap,f=[],y=null,S=!1,g=null,m=null,R=null,b=null,x=null,F=null,N=null,O=new tt(0,0,0),B=0,A=!1,T=null,H=null,K=null,k=null,U=null,Me.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:Se,bindFramebuffer:ke,drawBuffers:de,useProgram:w,setBlending:W,setMaterial:V,setFlipSided:$,setCullFace:q,setLineWidth:re,setPolygonOffset:Z,setScissorTest:ie,activeTexture:Y,bindTexture:me,unbindTexture:E,compressedTexImage2D:M,compressedTexImage3D:X,texImage2D:Pe,texImage3D:_e,updateUBOMapping:De,uniformBlockBinding:Te,texStorage2D:ge,texStorage3D:Ae,texSubImage2D:te,texSubImage3D:ce,compressedTexSubImage2D:ne,compressedTexSubImage3D:Ee,scissor:Ce,viewport:Oe,reset:je}}function dS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,M){return f?new OffscreenCanvas(E,M):oa("canvas")}function S(E,M,X){let te=1;const ce=me(E);if((ce.width>X||ce.height>X)&&(te=X/Math.max(ce.width,ce.height)),te<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ne=Math.floor(te*ce.width),Ee=Math.floor(te*ce.height);h===void 0&&(h=y(ne,Ee));const ge=M?y(ne,Ee):h;return ge.width=ne,ge.height=Ee,ge.getContext("2d").drawImage(E,0,0,ne,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ne+"x"+Ee+")."),ge}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){n.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,M,X,te,ce=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ne=M;if(M===n.RED&&(X===n.FLOAT&&(ne=n.R32F),X===n.HALF_FLOAT&&(ne=n.R16F),X===n.UNSIGNED_BYTE&&(ne=n.R8)),M===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ne=n.R8UI),X===n.UNSIGNED_SHORT&&(ne=n.R16UI),X===n.UNSIGNED_INT&&(ne=n.R32UI),X===n.BYTE&&(ne=n.R8I),X===n.SHORT&&(ne=n.R16I),X===n.INT&&(ne=n.R32I)),M===n.RG&&(X===n.FLOAT&&(ne=n.RG32F),X===n.HALF_FLOAT&&(ne=n.RG16F),X===n.UNSIGNED_BYTE&&(ne=n.RG8)),M===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(ne=n.RG8UI),X===n.UNSIGNED_SHORT&&(ne=n.RG16UI),X===n.UNSIGNED_INT&&(ne=n.RG32UI),X===n.BYTE&&(ne=n.RG8I),X===n.SHORT&&(ne=n.RG16I),X===n.INT&&(ne=n.RG32I)),M===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),X===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),X===n.UNSIGNED_INT&&(ne=n.RGB32UI),X===n.BYTE&&(ne=n.RGB8I),X===n.SHORT&&(ne=n.RGB16I),X===n.INT&&(ne=n.RGB32I)),M===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),X===n.UNSIGNED_INT&&(ne=n.RGBA32UI),X===n.BYTE&&(ne=n.RGBA8I),X===n.SHORT&&(ne=n.RGBA16I),X===n.INT&&(ne=n.RGBA32I)),M===n.RGB&&(X===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),M===n.RGBA){const Ee=ce?sa:ct.getTransfer(te);X===n.FLOAT&&(ne=n.RGBA32F),X===n.HALF_FLOAT&&(ne=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ne=Ee===mt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(E,M){let X;return E?M===null||M===ls||M===Hr?X=n.DEPTH24_STENCIL8:M===Zn?X=n.DEPTH32F_STENCIL8:M===kr&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ls||M===Hr?X=n.DEPTH_COMPONENT24:M===Zn?X=n.DEPTH_COMPONENT32F:M===kr&&(X=n.DEPTH_COMPONENT16),X}function F(E,M){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==xn&&E.minFilter!==Kn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function N(E){const M=E.target;M.removeEventListener("dispose",N),B(M),M.isVideoTexture&&u.delete(M)}function O(E){const M=E.target;M.removeEventListener("dispose",O),T(M)}function B(E){const M=i.get(E);if(M.__webglInit===void 0)return;const X=E.source,te=d.get(X);if(te){const ce=te[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&A(E),Object.keys(te).length===0&&d.delete(X)}i.remove(E)}function A(E){const M=i.get(E);n.deleteTexture(M.__webglTexture);const X=E.source,te=d.get(X);delete te[M.__cacheKey],o.memory.textures--}function T(E){const M=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let ce=0;ce<M.__webglFramebuffer[te].length;ce++)n.deleteFramebuffer(M.__webglFramebuffer[te][ce]);else n.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)n.deleteFramebuffer(M.__webglFramebuffer[te]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=E.textures;for(let te=0,ce=X.length;te<ce;te++){const ne=i.get(X[te]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(X[te])}i.remove(E)}let H=0;function K(){H=0}function k(){const E=H;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),H+=1,E}function U(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function P(E,M){const X=i.get(E);if(E.isVideoTexture&&ie(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&X.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(X,E,M);return}}else E.isExternalTexture&&(X.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+M)}function L(E,M){const X=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&X.__version!==E.version){le(X,E,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+M)}function D(E,M){const X=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&X.__version!==E.version){le(X,E,M);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+M)}function I(E,M){const X=i.get(E);if(E.version>0&&X.__version!==E.version){ue(X,E,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+M)}const ee={[ia]:n.REPEAT,[is]:n.CLAMP_TO_EDGE,[Yl]:n.MIRRORED_REPEAT},he={[xn]:n.NEAREST,[Z0]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[Kn]:n.LINEAR,[Va]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},G={[t_]:n.NEVER,[a_]:n.ALWAYS,[n_]:n.LESS,[Kf]:n.LEQUAL,[i_]:n.EQUAL,[o_]:n.GEQUAL,[s_]:n.GREATER,[r_]:n.NOTEQUAL};function pe(E,M){if(M.type===Zn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Kn||M.magFilter===Va||M.magFilter===co||M.magFilter===ss||M.minFilter===Kn||M.minFilter===Va||M.minFilter===co||M.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ee[M.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ee[M.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ee[M.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,he[M.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,he[M.minFilter]),M.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,G[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===xn||M.minFilter!==co&&M.minFilter!==ss||M.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Me(E,M){let X=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",N));const te=M.source;let ce=d.get(te);ce===void 0&&(ce={},d.set(te,ce));const ne=U(M);if(ne!==E.__cacheKey){ce[ne]===void 0&&(ce[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ce[ne].usedTimes++;const Ee=ce[E.__cacheKey];Ee!==void 0&&(ce[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&A(M)),E.__cacheKey=ne,E.__webglTexture=ce[ne].texture}return X}function He(E,M,X){return Math.floor(Math.floor(E/X)/M)}function Xe(E,M,X,te){const ne=E.updateRanges;if(ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,X,te,M.data);else{ne.sort((_e,Ce)=>_e.start-Ce.start);let Ee=0;for(let _e=1;_e<ne.length;_e++){const Ce=ne[Ee],Oe=ne[_e],De=Ce.start+Ce.count,Te=He(Oe.start,M.width,4),je=He(Ce.start,M.width,4);Oe.start<=De+1&&Te===je&&He(Oe.start+Oe.count-1,M.width,4)===Te?Ce.count=Math.max(Ce.count,Oe.start+Oe.count-Ce.start):(++Ee,ne[Ee]=Oe)}ne.length=Ee+1;const ge=n.getParameter(n.UNPACK_ROW_LENGTH),Ae=n.getParameter(n.UNPACK_SKIP_PIXELS),Pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let _e=0,Ce=ne.length;_e<Ce;_e++){const Oe=ne[_e],De=Math.floor(Oe.start/4),Te=Math.ceil(Oe.count/4),je=De%M.width,j=Math.floor(De/M.width),ye=Te,we=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,j),t.texSubImage2D(n.TEXTURE_2D,0,je,j,ye,we,X,te,M.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ge),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ae),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function le(E,M,X){let te=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=n.TEXTURE_3D);const ce=Me(E,M),ne=M.source;t.bindTexture(te,E.__webglTexture,n.TEXTURE0+X);const Ee=i.get(ne);if(ne.version!==Ee.__version||ce===!0){t.activeTexture(n.TEXTURE0+X);const ge=ct.getPrimaries(ct.workingColorSpace),Ae=M.colorSpace===Di?null:ct.getPrimaries(M.colorSpace),Pe=M.colorSpace===Di||ge===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let _e=S(M.image,!1,s.maxTextureSize);_e=Y(M,_e);const Ce=r.convert(M.format,M.colorSpace),Oe=r.convert(M.type);let De=b(M.internalFormat,Ce,Oe,M.colorSpace,M.isVideoTexture);pe(te,M);let Te;const je=M.mipmaps,j=M.isVideoTexture!==!0,ye=Ee.__version===void 0||ce===!0,we=ne.dataReady,Ne=F(M,_e);if(M.isDepthTexture)De=x(M.format===Gr,M.type),ye&&(j?t.texStorage2D(n.TEXTURE_2D,1,De,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,De,_e.width,_e.height,0,Ce,Oe,null));else if(M.isDataTexture)if(je.length>0){j&&ye&&t.texStorage2D(n.TEXTURE_2D,Ne,De,je[0].width,je[0].height);for(let ve=0,fe=je.length;ve<fe;ve++)Te=je[ve],j?we&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Te.width,Te.height,Ce,Oe,Te.data):t.texImage2D(n.TEXTURE_2D,ve,De,Te.width,Te.height,0,Ce,Oe,Te.data);M.generateMipmaps=!1}else j?(ye&&t.texStorage2D(n.TEXTURE_2D,Ne,De,_e.width,_e.height),we&&Xe(M,_e,Ce,Oe)):t.texImage2D(n.TEXTURE_2D,0,De,_e.width,_e.height,0,Ce,Oe,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){j&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,De,je[0].width,je[0].height,_e.depth);for(let ve=0,fe=je.length;ve<fe;ve++)if(Te=je[ve],M.format!==Un)if(Ce!==null)if(j){if(we)if(M.layerUpdates.size>0){const ze=Qh(Te.width,Te.height,M.format,M.type);for(const Ke of M.layerUpdates){const St=Te.data.subarray(Ke*ze/Te.data.BYTES_PER_ELEMENT,(Ke+1)*ze/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Ke,Te.width,Te.height,1,Ce,St)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Te.width,Te.height,_e.depth,Ce,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,De,Te.width,Te.height,_e.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Te.width,Te.height,_e.depth,Ce,Oe,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,De,Te.width,Te.height,_e.depth,0,Ce,Oe,Te.data)}else{j&&ye&&t.texStorage2D(n.TEXTURE_2D,Ne,De,je[0].width,je[0].height);for(let ve=0,fe=je.length;ve<fe;ve++)Te=je[ve],M.format!==Un?Ce!==null?j?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Te.width,Te.height,Ce,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,De,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?we&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Te.width,Te.height,Ce,Oe,Te.data):t.texImage2D(n.TEXTURE_2D,ve,De,Te.width,Te.height,0,Ce,Oe,Te.data)}else if(M.isDataArrayTexture)if(j){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,De,_e.width,_e.height,_e.depth),we)if(M.layerUpdates.size>0){const ve=Qh(_e.width,_e.height,M.format,M.type);for(const fe of M.layerUpdates){const ze=_e.data.subarray(fe*ve/_e.data.BYTES_PER_ELEMENT,(fe+1)*ve/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,_e.width,_e.height,1,Ce,Oe,ze)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Oe,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,_e.width,_e.height,_e.depth,0,Ce,Oe,_e.data);else if(M.isData3DTexture)j?(ye&&t.texStorage3D(n.TEXTURE_3D,Ne,De,_e.width,_e.height,_e.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Oe,_e.data)):t.texImage3D(n.TEXTURE_3D,0,De,_e.width,_e.height,_e.depth,0,Ce,Oe,_e.data);else if(M.isFramebufferTexture){if(ye)if(j)t.texStorage2D(n.TEXTURE_2D,Ne,De,_e.width,_e.height);else{let ve=_e.width,fe=_e.height;for(let ze=0;ze<Ne;ze++)t.texImage2D(n.TEXTURE_2D,ze,De,ve,fe,0,Ce,Oe,null),ve>>=1,fe>>=1}}else if(je.length>0){if(j&&ye){const ve=me(je[0]);t.texStorage2D(n.TEXTURE_2D,Ne,De,ve.width,ve.height)}for(let ve=0,fe=je.length;ve<fe;ve++)Te=je[ve],j?we&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Ce,Oe,Te):t.texImage2D(n.TEXTURE_2D,ve,De,Ce,Oe,Te);M.generateMipmaps=!1}else if(j){if(ye){const ve=me(_e);t.texStorage2D(n.TEXTURE_2D,Ne,De,ve.width,ve.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,Oe,_e)}else t.texImage2D(n.TEXTURE_2D,0,De,Ce,Oe,_e);g(M)&&m(te),Ee.__version=ne.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ue(E,M,X){if(M.image.length!==6)return;const te=Me(E,M),ce=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+X);const ne=i.get(ce);if(ce.version!==ne.__version||te===!0){t.activeTexture(n.TEXTURE0+X);const Ee=ct.getPrimaries(ct.workingColorSpace),ge=M.colorSpace===Di?null:ct.getPrimaries(M.colorSpace),Ae=M.colorSpace===Di||Ee===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Pe=M.isCompressedTexture||M.image[0].isCompressedTexture,_e=M.image[0]&&M.image[0].isDataTexture,Ce=[];for(let fe=0;fe<6;fe++)!Pe&&!_e?Ce[fe]=S(M.image[fe],!0,s.maxCubemapSize):Ce[fe]=_e?M.image[fe].image:M.image[fe],Ce[fe]=Y(M,Ce[fe]);const Oe=Ce[0],De=r.convert(M.format,M.colorSpace),Te=r.convert(M.type),je=b(M.internalFormat,De,Te,M.colorSpace),j=M.isVideoTexture!==!0,ye=ne.__version===void 0||te===!0,we=ce.dataReady;let Ne=F(M,Oe);pe(n.TEXTURE_CUBE_MAP,M);let ve;if(Pe){j&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,je,Oe.width,Oe.height);for(let fe=0;fe<6;fe++){ve=Ce[fe].mipmaps;for(let ze=0;ze<ve.length;ze++){const Ke=ve[ze];M.format!==Un?De!==null?j?we&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,0,0,Ke.width,Ke.height,De,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,je,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,0,0,Ke.width,Ke.height,De,Te,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,je,Ke.width,Ke.height,0,De,Te,Ke.data)}}}else{if(ve=M.mipmaps,j&&ye){ve.length>0&&Ne++;const fe=me(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,je,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(_e){j?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ce[fe].width,Ce[fe].height,De,Te,Ce[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,je,Ce[fe].width,Ce[fe].height,0,De,Te,Ce[fe].data);for(let ze=0;ze<ve.length;ze++){const St=ve[ze].image[fe].image;j?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,0,0,St.width,St.height,De,Te,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,je,St.width,St.height,0,De,Te,St.data)}}else{j?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,De,Te,Ce[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,je,De,Te,Ce[fe]);for(let ze=0;ze<ve.length;ze++){const Ke=ve[ze];j?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,0,0,De,Te,Ke.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,je,De,Te,Ke.image[fe])}}}g(M)&&m(n.TEXTURE_CUBE_MAP),ne.__version=ce.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Se(E,M,X,te,ce,ne){const Ee=r.convert(X.format,X.colorSpace),ge=r.convert(X.type),Ae=b(X.internalFormat,Ee,ge,X.colorSpace),Pe=i.get(M),_e=i.get(X);if(_e.__renderTarget=M,!Pe.__hasExternalTextures){const Ce=Math.max(1,M.width>>ne),Oe=Math.max(1,M.height>>ne);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,ne,Ae,Ce,Oe,M.depth,0,Ee,ge,null):t.texImage2D(ce,ne,Ae,Ce,Oe,0,Ee,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Z(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ce,_e.__webglTexture,0,re(M)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ce,_e.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(E,M,X){if(n.bindRenderbuffer(n.RENDERBUFFER,E),M.depthBuffer){const te=M.depthTexture,ce=te&&te.isDepthTexture?te.type:null,ne=x(M.stencilBuffer,ce),Ee=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=re(M);Z(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,ne,M.width,M.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ne,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ne,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,E)}else{const te=M.textures;for(let ce=0;ce<te.length;ce++){const ne=te[ce],Ee=r.convert(ne.format,ne.colorSpace),ge=r.convert(ne.type),Ae=b(ne.internalFormat,Ee,ge,ne.colorSpace),Pe=re(M);X&&Z(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Ae,M.width,M.height):Z(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,Ae,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(M.depthTexture);te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),P(M.depthTexture,0);const ce=te.__webglTexture,ne=re(M);if(M.depthTexture.format===Vr)Z(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(M.depthTexture.format===Gr)Z(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function w(E){const M=i.get(E),X=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const te=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),te){const ce=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,te.removeEventListener("dispose",ce)};te.addEventListener("dispose",ce),M.__depthDisposeCallback=ce}M.__boundDepthTexture=te}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const te=E.texture.mipmaps;te&&te.length>0?de(M.__webglFramebuffer[0],E):de(M.__webglFramebuffer,E)}else if(X){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]===void 0)M.__webglDepthbuffer[te]=n.createRenderbuffer(),ke(M.__webglDepthbuffer[te],E,!1);else{const ce=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ne)}}else{const te=E.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ke(M.__webglDepthbuffer,E,!1);else{const ce=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ne)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(E,M,X){const te=i.get(E);M!==void 0&&Se(te.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&w(E)}function p(E){const M=E.texture,X=i.get(E),te=i.get(M);E.addEventListener("dispose",O);const ce=E.textures,ne=E.isWebGLCubeRenderTarget===!0,Ee=ce.length>1;if(Ee||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=M.version,o.memory.textures++),ne){X.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[ge]=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)X.__webglFramebuffer[ge][Ae]=n.createFramebuffer()}else X.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)X.__webglFramebuffer[ge]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ge=0,Ae=ce.length;ge<Ae;ge++){const Pe=i.get(ce[ge]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&Z(E)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ge=0;ge<ce.length;ge++){const Ae=ce[ge];X.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ge]);const Pe=r.convert(Ae.format,Ae.colorSpace),_e=r.convert(Ae.type),Ce=b(Ae.internalFormat,Pe,_e,Ae.colorSpace,E.isXRRenderTarget===!0),Oe=re(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Ce,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,X.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(X.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),pe(n.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Se(X.__webglFramebuffer[ge][Ae],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ae);else Se(X.__webglFramebuffer[ge],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ge=0,Ae=ce.length;ge<Ae;ge++){const Pe=ce[ge],_e=i.get(Pe);let Ce=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ce=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,_e.__webglTexture),pe(Ce,Pe),Se(X.__webglFramebuffer,E,Pe,n.COLOR_ATTACHMENT0+ge,Ce,0),g(Pe)&&m(Ce)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ge=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,te.__webglTexture),pe(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)Se(X.__webglFramebuffer[Ae],E,M,n.COLOR_ATTACHMENT0,ge,Ae);else Se(X.__webglFramebuffer,E,M,n.COLOR_ATTACHMENT0,ge,0);g(M)&&m(ge),t.unbindTexture()}E.depthBuffer&&w(E)}function W(E){const M=E.textures;for(let X=0,te=M.length;X<te;X++){const ce=M[X];if(g(ce)){const ne=R(E),Ee=i.get(ce).__webglTexture;t.bindTexture(ne,Ee),m(ne),t.unbindTexture()}}}const V=[],$=[];function q(E){if(E.samples>0){if(Z(E)===!1){const M=E.textures,X=E.width,te=E.height;let ce=n.COLOR_BUFFER_BIT;const ne=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(E),ge=M.length>1;if(ge)for(let Pe=0;Pe<M.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Ae=E.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Pe=0;Pe<M.length;Pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Pe]);const _e=i.get(M[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,X,te,0,0,X,te,ce,n.NEAREST),l===!0&&(V.length=0,$.length=0,V.push(n.COLOR_ATTACHMENT0+Pe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(V.push(ne),$.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Pe=0;Pe<M.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[Pe]);const _e=i.get(M[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const M=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function re(E){return Math.min(s.maxSamples,E.samples)}function Z(E){const M=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ie(E){const M=o.render.frame;u.get(E)!==M&&(u.set(E,M),E.update())}function Y(E,M){const X=E.colorSpace,te=E.format,ce=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||X!==er&&X!==Di&&(ct.getTransfer(X)===mt?(te!==Un||ce!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function me(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=K,this.setTexture2D=P,this.setTexture2DArray=L,this.setTexture3D=D,this.setTextureCube=I,this.rebindTextures=_,this.setupRenderTarget=p,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Z}function fS(n,e){function t(i,s=Di){let r;const o=ct.getTransfer(s);if(i===ni)return n.UNSIGNED_BYTE;if(i===nu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===iu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$f)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gf)return n.BYTE;if(i===Wf)return n.SHORT;if(i===kr)return n.UNSIGNED_SHORT;if(i===tu)return n.INT;if(i===ls)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===Qr)return n.HALF_FLOAT;if(i===Yf)return n.ALPHA;if(i===qf)return n.RGB;if(i===Un)return n.RGBA;if(i===Vr)return n.DEPTH_COMPONENT;if(i===Gr)return n.DEPTH_STENCIL;if(i===su)return n.RED;if(i===ru)return n.RED_INTEGER;if(i===jf)return n.RG;if(i===ou)return n.RG_INTEGER;if(i===au)return n.RGBA_INTEGER;if(i===Go||i===Wo||i===Xo||i===$o)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ql||i===jl||i===Kl||i===Zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jl||i===Ql||i===ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Jl||i===Ql)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ec)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===dc||i===fc||i===pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ic)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ac)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mc||i===gc||i===_c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===mc)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vc||i===xc||i===yc||i===Mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===vc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const pS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mS=`
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

}`;class gS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new lp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zi({vertexShader:pS,fragmentShader:mS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new ds(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _S extends ps{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,y=null;const S=typeof XRWebGLBinding<"u",g=new gS,m={},R=t.getContextAttributes();let b=null,x=null;const F=[],N=[],O=new be;let B=null;const A=new fn;A.viewport=new vt;const T=new fn;T.viewport=new vt;const H=[A,T],K=new Ov;let k=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let ue=F[le];return ue===void 0&&(ue=new cl,F[le]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(le){let ue=F[le];return ue===void 0&&(ue=new cl,F[le]=ue),ue.getGripSpace()},this.getHand=function(le){let ue=F[le];return ue===void 0&&(ue=new cl,F[le]=ue),ue.getHandSpace()};function P(le){const ue=N.indexOf(le.inputSource);if(ue===-1)return;const Se=F[ue];Se!==void 0&&(Se.update(le.inputSource,le.frame,c||o),Se.dispatchEvent({type:le.type,data:le.inputSource}))}function L(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",D);for(let le=0;le<F.length;le++){const ue=N[le];ue!==null&&(N[le]=null,F[le].disconnect(ue))}k=null,U=null,g.reset();for(const le in m)delete m[le];e.setRenderTarget(b),f=null,d=null,h=null,s=null,x=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",L),s.addEventListener("inputsourceschange",D),R.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(O),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ke=null,de=null;R.depth&&(de=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=R.stencil?Gr:Vr,ke=R.stencil?Hr:ls);const w={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(w),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new us(d.textureWidth,d.textureHeight,{format:Un,type:ni,depthTexture:new ap(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Se={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new us(f.framebufferWidth,f.framebufferHeight,{format:Un,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D(le){for(let ue=0;ue<le.removed.length;ue++){const Se=le.removed[ue],ke=N.indexOf(Se);ke>=0&&(N[ke]=null,F[ke].disconnect(Se))}for(let ue=0;ue<le.added.length;ue++){const Se=le.added[ue];let ke=N.indexOf(Se);if(ke===-1){for(let w=0;w<F.length;w++)if(w>=N.length){N.push(Se),ke=w;break}else if(N[w]===null){N[w]=Se,ke=w;break}if(ke===-1)break}const de=F[ke];de&&de.connect(Se)}}const I=new z,ee=new z;function he(le,ue,Se){I.setFromMatrixPosition(ue.matrixWorld),ee.setFromMatrixPosition(Se.matrixWorld);const ke=I.distanceTo(ee),de=ue.projectionMatrix.elements,w=Se.projectionMatrix.elements,_=de[14]/(de[10]-1),p=de[14]/(de[10]+1),W=(de[9]+1)/de[5],V=(de[9]-1)/de[5],$=(de[8]-1)/de[0],q=(w[8]+1)/w[0],re=_*$,Z=_*q,ie=ke/(-$+q),Y=ie*-$;if(ue.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Y),le.translateZ(ie),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),de[10]===-1)le.projectionMatrix.copy(ue.projectionMatrix),le.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const me=_+ie,E=p+ie,M=re-Y,X=Z+(ke-Y),te=W*p/E*me,ce=V*p/E*me;le.projectionMatrix.makePerspective(M,X,te,ce,me,E),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function G(le,ue){ue===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(ue.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let ue=le.near,Se=le.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),K.near=T.near=A.near=ue,K.far=T.far=A.far=Se,(k!==K.near||U!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),k=K.near,U=K.far),K.layers.mask=le.layers.mask|6,A.layers.mask=K.layers.mask&3,T.layers.mask=K.layers.mask&5;const ke=le.parent,de=K.cameras;G(K,ke);for(let w=0;w<de.length;w++)G(de[w],ke);de.length===2?he(K,A,T):K.projectionMatrix.copy(A.projectionMatrix),pe(le,K,ke)};function pe(le,ue,Se){Se===null?le.matrix.copy(ue.matrixWorld):(le.matrix.copy(Se.matrixWorld),le.matrix.invert(),le.matrix.multiply(ue.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(ue.projectionMatrix),le.projectionMatrixInverse.copy(ue.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Wr*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(le){l=le,d!==null&&(d.fixedFoveation=le),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=le)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(K)},this.getCameraTexture=function(le){return m[le]};let Me=null;function He(le,ue){if(u=ue.getViewerPose(c||o),y=ue,u!==null){const Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ke=!1;Se.length!==K.cameras.length&&(K.cameras.length=0,ke=!0);for(let p=0;p<Se.length;p++){const W=Se[p];let V=null;if(f!==null)V=f.getViewport(W);else{const q=h.getViewSubImage(d,W);V=q.viewport,p===0&&(e.setRenderTargetTextures(x,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(x))}let $=H[p];$===void 0&&($=new fn,$.layers.enable(p),$.viewport=new vt,H[p]=$),$.matrix.fromArray(W.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(W.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(V.x,V.y,V.width,V.height),p===0&&(K.matrix.copy($.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),ke===!0&&K.cameras.push($)}const de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const p=h.getDepthInformation(Se[0]);p&&p.isValid&&p.texture&&g.init(p,s.renderState)}if(de&&de.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let p=0;p<Se.length;p++){const W=Se[p].camera;if(W){let V=m[W];V||(V=new lp,m[W]=V);const $=h.getCameraImage(W);V.sourceTexture=$}}}}for(let Se=0;Se<F.length;Se++){const ke=N[Se],de=F[Se];ke!==null&&de!==void 0&&de.update(ke,ue,c||o)}Me&&Me(le,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),y=null}const Xe=new Ep;Xe.setAnimationLoop(He),this.setAnimationLoop=function(le){Me=le},this.dispose=function(){}}}const Zi=new zn,vS=new ft;function xS(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,np(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,R,b,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),y(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),S(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,R,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ln&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ln&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const R=e.get(m),b=R.envMap,x=R.envMapRotation;b&&(g.envMap.value=b,Zi.copy(x),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),g.envMapRotation.value.setFromMatrix4(vS.makeRotationFromEuler(Zi)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,R,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*R,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,R){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,m){m.matcap&&(g.matcap.value=m.matcap)}function S(g,m){const R=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,b){const x=b.program;i.uniformBlockBinding(R,x)}function c(R,b){let x=s[R.id];x===void 0&&(y(R),x=u(R),s[R.id]=x,R.addEventListener("dispose",g));const F=b.program;i.updateUBOMapping(R,F);const N=e.render.frame;r[R.id]!==N&&(d(R),r[R.id]=N)}function u(R){const b=h();R.__bindingPointIndex=b;const x=n.createBuffer(),F=R.__size,N=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,F,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const b=s[R.id],x=R.uniforms,F=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let N=0,O=x.length;N<O;N++){const B=Array.isArray(x[N])?x[N]:[x[N]];for(let A=0,T=B.length;A<T;A++){const H=B[A];if(f(H,N,A,F)===!0){const K=H.__offset,k=Array.isArray(H.value)?H.value:[H.value];let U=0;for(let P=0;P<k.length;P++){const L=k[P],D=S(L);typeof L=="number"||typeof L=="boolean"?(H.__data[0]=L,n.bufferSubData(n.UNIFORM_BUFFER,K+U,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=0,H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=0,H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=0):(L.toArray(H.__data,U),U+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(R,b,x,F){const N=R.value,O=b+"_"+x;if(F[O]===void 0)return typeof N=="number"||typeof N=="boolean"?F[O]=N:F[O]=N.clone(),!0;{const B=F[O];if(typeof N=="number"||typeof N=="boolean"){if(B!==N)return F[O]=N,!0}else if(B.equals(N)===!1)return B.copy(N),!0}return!1}function y(R){const b=R.uniforms;let x=0;const F=16;for(let O=0,B=b.length;O<B;O++){const A=Array.isArray(b[O])?b[O]:[b[O]];for(let T=0,H=A.length;T<H;T++){const K=A[T],k=Array.isArray(K.value)?K.value:[K.value];for(let U=0,P=k.length;U<P;U++){const L=k[U],D=S(L),I=x%F,ee=I%D.boundary,he=I+ee;x+=ee,he!==0&&F-he<D.storage&&(x+=F-he),K.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=x,x+=D.storage}}}const N=x%F;return N>0&&(x+=F-N),R.__size=x,R.__cache={},this}function S(R){const b={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(b.boundary=4,b.storage=4):R.isVector2?(b.boundary=8,b.storage=8):R.isVector3||R.isColor?(b.boundary=16,b.storage=12):R.isVector4?(b.boundary=16,b.storage=16):R.isMatrix3?(b.boundary=48,b.storage=48):R.isMatrix4?(b.boundary=64,b.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),b}function g(R){const b=R.target;b.removeEventListener("dispose",g);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Cp{constructor(e={}){const{canvas:t=E_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const y=new Uint32Array(4),S=new Int32Array(4);let g=null,m=null;const R=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let F=!1;this._outputColorSpace=Yt;let N=0,O=0,B=null,A=-1,T=null;const H=new vt,K=new vt;let k=null;const U=new tt(0);let P=0,L=t.width,D=t.height,I=1,ee=null,he=null;const G=new vt(0,0,L,D),pe=new vt(0,0,L,D);let Me=!1;const He=new pu;let Xe=!1,le=!1;const ue=new ft,Se=new z,ke=new vt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function _(){return B===null?I:1}let p=i;function W(C,J){return t.getContext(C,J)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zc}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ve,!1),p===null){const J="webgl2";if(p=W(J,C),p===null)throw W(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let V,$,q,re,Z,ie,Y,me,E,M,X,te,ce,ne,Ee,ge,Ae,Pe,_e,Ce,Oe,De,Te,je;function j(){V=new IM(p),V.init(),De=new fS(p,V),$=new EM(p,V,e,De),q=new hS(p,V),$.reversedDepthBuffer&&d&&q.buffers.depth.setReversed(!0),re=new UM(p),Z=new J1,ie=new dS(p,V,q,Z,$,De,re),Y=new TM(x),me=new PM(x),E=new kv(p),Te=new SM(p,E),M=new DM(p,E,re,Te),X=new FM(p,M,E,re),_e=new NM(p,$,ie),ge=new wM(Z),te=new Z1(x,Y,me,V,$,Te,ge),ce=new xS(x,Z),ne=new eS,Ee=new oS(V),Pe=new MM(x,Y,me,q,X,f,l),Ae=new cS(x,X,$),je=new yS(p,re,$,q),Ce=new bM(p,V,re),Oe=new LM(p,V,re),re.programs=te.programs,x.capabilities=$,x.extensions=V,x.properties=Z,x.renderLists=ne,x.shadowMap=Ae,x.state=q,x.info=re}j();const ye=new _S(x,p);this.xr=ye,this.getContext=function(){return p},this.getContextAttributes=function(){return p.getContextAttributes()},this.forceContextLoss=function(){const C=V.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=V.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(C){C!==void 0&&(I=C,this.setSize(L,D,!1))},this.getSize=function(C){return C.set(L,D)},this.setSize=function(C,J,oe=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=C,D=J,t.width=Math.floor(C*I),t.height=Math.floor(J*I),oe===!0&&(t.style.width=C+"px",t.style.height=J+"px"),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(L*I,D*I).floor()},this.setDrawingBufferSize=function(C,J,oe){L=C,D=J,I=oe,t.width=Math.floor(C*oe),t.height=Math.floor(J*oe),this.setViewport(0,0,C,J)},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(G)},this.setViewport=function(C,J,oe,ae){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,J,oe,ae),q.viewport(H.copy(G).multiplyScalar(I).round())},this.getScissor=function(C){return C.copy(pe)},this.setScissor=function(C,J,oe,ae){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,J,oe,ae),q.scissor(K.copy(pe).multiplyScalar(I).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(C){q.setScissorTest(Me=C)},this.setOpaqueSort=function(C){ee=C},this.setTransparentSort=function(C){he=C},this.getClearColor=function(C){return C.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(C=!0,J=!0,oe=!0){let ae=0;if(C){let Q=!1;if(B!==null){const xe=B.texture.format;Q=xe===au||xe===ou||xe===ru}if(Q){const xe=B.texture.type,Ie=xe===ni||xe===ls||xe===kr||xe===Hr||xe===nu||xe===iu,Be=Pe.getClearColor(),Ue=Pe.getClearAlpha(),$e=Be.r,Ye=Be.g,Ve=Be.b;Ie?(y[0]=$e,y[1]=Ye,y[2]=Ve,y[3]=Ue,p.clearBufferuiv(p.COLOR,0,y)):(S[0]=$e,S[1]=Ye,S[2]=Ve,S[3]=Ue,p.clearBufferiv(p.COLOR,0,S))}else ae|=p.COLOR_BUFFER_BIT}J&&(ae|=p.DEPTH_BUFFER_BIT),oe&&(ae|=p.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),p.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Pe.dispose(),ne.dispose(),Ee.dispose(),Z.dispose(),Y.dispose(),me.dispose(),X.dispose(),Te.dispose(),je.dispose(),te.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Hn),ye.removeEventListener("sessionend",Tu),Vi.stop()};function we(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const C=re.autoReset,J=Ae.enabled,oe=Ae.autoUpdate,ae=Ae.needsUpdate,Q=Ae.type;j(),re.autoReset=C,Ae.enabled=J,Ae.autoUpdate=oe,Ae.needsUpdate=ae,Ae.type=Q}function ve(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function fe(C){const J=C.target;J.removeEventListener("dispose",fe),ze(J)}function ze(C){Ke(C),Z.remove(C)}function Ke(C){const J=Z.get(C).programs;J!==void 0&&(J.forEach(function(oe){te.releaseProgram(oe)}),C.isShaderMaterial&&te.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,oe,ae,Q,xe){J===null&&(J=de);const Ie=Q.isMesh&&Q.matrixWorld.determinant()<0,Be=Up(C,J,oe,ae,Q);q.setMaterial(ae,Ie);let Ue=oe.index,$e=1;if(ae.wireframe===!0){if(Ue=M.getWireframeAttribute(oe),Ue===void 0)return;$e=2}const Ye=oe.drawRange,Ve=oe.attributes.position;let it=Ye.start*$e,pt=(Ye.start+Ye.count)*$e;xe!==null&&(it=Math.max(it,xe.start*$e),pt=Math.min(pt,(xe.start+xe.count)*$e)),Ue!==null?(it=Math.max(it,0),pt=Math.min(pt,Ue.count)):Ve!=null&&(it=Math.max(it,0),pt=Math.min(pt,Ve.count));const Dt=pt-it;if(Dt<0||Dt===1/0)return;Te.setup(Q,ae,Be,oe,Ue);let Tt,yt=Ce;if(Ue!==null&&(Tt=E.get(Ue),yt=Oe,yt.setIndex(Tt)),Q.isMesh)ae.wireframe===!0?(q.setLineWidth(ae.wireframeLinewidth*_()),yt.setMode(p.LINES)):yt.setMode(p.TRIANGLES);else if(Q.isLine){let We=ae.linewidth;We===void 0&&(We=1),q.setLineWidth(We*_()),Q.isLineSegments?yt.setMode(p.LINES):Q.isLineLoop?yt.setMode(p.LINE_LOOP):yt.setMode(p.LINE_STRIP)}else Q.isPoints?yt.setMode(p.POINTS):Q.isSprite&&yt.setMode(p.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))yt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const We=Q._multiDrawStarts,Ct=Q._multiDrawCounts,lt=Q._multiDrawCount,pn=Ue?E.get(Ue).bytesPerElement:1,_s=Z.get(ae).currentProgram.getUniforms();for(let mn=0;mn<lt;mn++)_s.setValue(p,"_gl_DrawID",mn),yt.render(We[mn]/pn,Ct[mn])}else if(Q.isInstancedMesh)yt.renderInstances(it,Dt,Q.count);else if(oe.isInstancedBufferGeometry){const We=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ct=Math.min(oe.instanceCount,We);yt.renderInstances(it,Dt,Ct)}else yt.render(it,Dt)};function St(C,J,oe){C.transparent===!0&&C.side===bn&&C.forceSinglePass===!1?(C.side=ln,C.needsUpdate=!0,no(C,J,oe),C.side=Bi,C.needsUpdate=!0,no(C,J,oe),C.side=bn):no(C,J,oe)}this.compile=function(C,J,oe=null){oe===null&&(oe=C),m=Ee.get(oe),m.init(J),b.push(m),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),C!==oe&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights();const ae=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const xe=Q.material;if(xe)if(Array.isArray(xe))for(let Ie=0;Ie<xe.length;Ie++){const Be=xe[Ie];St(Be,oe,Q),ae.add(Be)}else St(xe,oe,Q),ae.add(xe)}),m=b.pop(),ae},this.compileAsync=function(C,J,oe=null){const ae=this.compile(C,J,oe);return new Promise(Q=>{function xe(){if(ae.forEach(function(Ie){Z.get(Ie).currentProgram.isReady()&&ae.delete(Ie)}),ae.size===0){Q(C);return}setTimeout(xe,10)}V.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ut=null;function ri(C){ut&&ut(C)}function Hn(){Vi.stop()}function Tu(){Vi.start()}const Vi=new Ep;Vi.setAnimationLoop(ri),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(C){ut=C,ye.setAnimationLoop(C),C===null?Vi.stop():Vi.start()},ye.addEventListener("sessionstart",Hn),ye.addEventListener("sessionend",Tu),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(J),J=ye.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,J,B),m=Ee.get(C,b.length),m.init(J),b.push(m),ue.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),He.setFromProjectionMatrix(ue,Jn,J.reversedDepth),le=this.localClippingEnabled,Xe=ge.init(this.clippingPlanes,le),g=ne.get(C,R.length),g.init(),R.push(g),ye.enabled===!0&&ye.isPresenting===!0){const xe=x.xr.getDepthSensingMesh();xe!==null&&Ra(xe,J,-1/0,x.sortObjects)}Ra(C,J,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ee,he),w=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,w&&Pe.addToRenderList(g,C),this.info.render.frame++,Xe===!0&&ge.beginShadows();const oe=m.state.shadowsArray;Ae.render(oe,C,J),Xe===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=g.opaque,Q=g.transmissive;if(m.setupLights(),J.isArrayCamera){const xe=J.cameras;if(Q.length>0)for(let Ie=0,Be=xe.length;Ie<Be;Ie++){const Ue=xe[Ie];Ru(ae,Q,C,Ue)}w&&Pe.render(C);for(let Ie=0,Be=xe.length;Ie<Be;Ie++){const Ue=xe[Ie];Au(g,C,Ue,Ue.viewport)}}else Q.length>0&&Ru(ae,Q,C,J),w&&Pe.render(C),Au(g,C,J);B!==null&&O===0&&(ie.updateMultisampleRenderTarget(B),ie.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(x,C,J),Te.resetDefaultState(),A=-1,T=null,b.pop(),b.length>0?(m=b[b.length-1],Xe===!0&&ge.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,R.pop(),R.length>0?g=R[R.length-1]:g=null};function Ra(C,J,oe,ae){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||He.intersectsSprite(C)){ae&&ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);const Ie=X.update(C),Be=C.material;Be.visible&&g.push(C,Ie,Be,oe,ke.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||He.intersectsObject(C))){const Ie=X.update(C),Be=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ke.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ke.copy(Ie.boundingSphere.center)),ke.applyMatrix4(C.matrixWorld).applyMatrix4(ue)),Array.isArray(Be)){const Ue=Ie.groups;for(let $e=0,Ye=Ue.length;$e<Ye;$e++){const Ve=Ue[$e],it=Be[Ve.materialIndex];it&&it.visible&&g.push(C,Ie,it,oe,ke.z,Ve)}}else Be.visible&&g.push(C,Ie,Be,oe,ke.z,null)}}const xe=C.children;for(let Ie=0,Be=xe.length;Ie<Be;Ie++)Ra(xe[Ie],J,oe,ae)}function Au(C,J,oe,ae){const Q=C.opaque,xe=C.transmissive,Ie=C.transparent;m.setupLightsView(oe),Xe===!0&&ge.setGlobalState(x.clippingPlanes,oe),ae&&q.viewport(H.copy(ae)),Q.length>0&&to(Q,J,oe),xe.length>0&&to(xe,J,oe),Ie.length>0&&to(Ie,J,oe),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Ru(C,J,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ae.id]===void 0&&(m.state.transmissionRenderTarget[ae.id]=new us(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?Qr:ni,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const xe=m.state.transmissionRenderTarget[ae.id],Ie=ae.viewport||H;xe.setSize(Ie.z*x.transmissionResolutionScale,Ie.w*x.transmissionResolutionScale);const Be=x.getRenderTarget(),Ue=x.getActiveCubeFace(),$e=x.getActiveMipmapLevel();x.setRenderTarget(xe),x.getClearColor(U),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear(),w&&Pe.render(oe);const Ye=x.toneMapping;x.toneMapping=Fi;const Ve=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),m.setupLightsView(ae),Xe===!0&&ge.setGlobalState(x.clippingPlanes,ae),to(C,oe,ae),ie.updateMultisampleRenderTarget(xe),ie.updateRenderTargetMipmap(xe),V.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let pt=0,Dt=J.length;pt<Dt;pt++){const Tt=J[pt],yt=Tt.object,We=Tt.geometry,Ct=Tt.material,lt=Tt.group;if(Ct.side===bn&&yt.layers.test(ae.layers)){const pn=Ct.side;Ct.side=ln,Ct.needsUpdate=!0,Cu(yt,oe,ae,We,Ct,lt),Ct.side=pn,Ct.needsUpdate=!0,it=!0}}it===!0&&(ie.updateMultisampleRenderTarget(xe),ie.updateRenderTargetMipmap(xe))}x.setRenderTarget(Be,Ue,$e),x.setClearColor(U,P),Ve!==void 0&&(ae.viewport=Ve),x.toneMapping=Ye}function to(C,J,oe){const ae=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,xe=C.length;Q<xe;Q++){const Ie=C[Q],Be=Ie.object,Ue=Ie.geometry,$e=Ie.group;let Ye=Ie.material;Ye.allowOverride===!0&&ae!==null&&(Ye=ae),Be.layers.test(oe.layers)&&Cu(Be,J,oe,Ue,Ye,$e)}}function Cu(C,J,oe,ae,Q,xe){C.onBeforeRender(x,J,oe,ae,Q,xe),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(x,J,oe,ae,C,xe),Q.transparent===!0&&Q.side===bn&&Q.forceSinglePass===!1?(Q.side=ln,Q.needsUpdate=!0,x.renderBufferDirect(oe,J,ae,Q,C,xe),Q.side=Bi,Q.needsUpdate=!0,x.renderBufferDirect(oe,J,ae,Q,C,xe),Q.side=bn):x.renderBufferDirect(oe,J,ae,Q,C,xe),C.onAfterRender(x,J,oe,ae,Q,xe)}function no(C,J,oe){J.isScene!==!0&&(J=de);const ae=Z.get(C),Q=m.state.lights,xe=m.state.shadowsArray,Ie=Q.state.version,Be=te.getParameters(C,Q.state,xe,J,oe),Ue=te.getProgramCacheKey(Be);let $e=ae.programs;ae.environment=C.isMeshStandardMaterial?J.environment:null,ae.fog=J.fog,ae.envMap=(C.isMeshStandardMaterial?me:Y).get(C.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&C.envMap===null?J.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",fe),$e=new Map,ae.programs=$e);let Ye=$e.get(Ue);if(Ye!==void 0){if(ae.currentProgram===Ye&&ae.lightsStateVersion===Ie)return Iu(C,Be),Ye}else Be.uniforms=te.getUniforms(C),C.onBeforeCompile(Be,x),Ye=te.acquireProgram(Be,Ue),$e.set(Ue,Ye),ae.uniforms=Be.uniforms;const Ve=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=ge.uniform),Iu(C,Be),ae.needsLights=Fp(C),ae.lightsStateVersion=Ie,ae.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.directionalShadowMap.value=Q.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotShadowMap.value=Q.state.spotShadowMap,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMap.value=Q.state.pointShadowMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),ae.currentProgram=Ye,ae.uniformsList=null,Ye}function Pu(C){if(C.uniformsList===null){const J=C.currentProgram.getUniforms();C.uniformsList=Yo.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function Iu(C,J){const oe=Z.get(C);oe.outputColorSpace=J.outputColorSpace,oe.batching=J.batching,oe.batchingColor=J.batchingColor,oe.instancing=J.instancing,oe.instancingColor=J.instancingColor,oe.instancingMorph=J.instancingMorph,oe.skinning=J.skinning,oe.morphTargets=J.morphTargets,oe.morphNormals=J.morphNormals,oe.morphColors=J.morphColors,oe.morphTargetsCount=J.morphTargetsCount,oe.numClippingPlanes=J.numClippingPlanes,oe.numIntersection=J.numClipIntersection,oe.vertexAlphas=J.vertexAlphas,oe.vertexTangents=J.vertexTangents,oe.toneMapping=J.toneMapping}function Up(C,J,oe,ae,Q){J.isScene!==!0&&(J=de),ie.resetTextureUnits();const xe=J.fog,Ie=ae.isMeshStandardMaterial?J.environment:null,Be=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:er,Ue=(ae.isMeshStandardMaterial?me:Y).get(ae.envMap||Ie),$e=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ye=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ve=!!oe.morphAttributes.position,it=!!oe.morphAttributes.normal,pt=!!oe.morphAttributes.color;let Dt=Fi;ae.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Dt=x.toneMapping);const Tt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,yt=Tt!==void 0?Tt.length:0,We=Z.get(ae),Ct=m.state.lights;if(Xe===!0&&(le===!0||C!==T)){const Qt=C===T&&ae.id===A;ge.setState(ae,C,Qt)}let lt=!1;ae.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ct.state.version||We.outputColorSpace!==Be||Q.isBatchedMesh&&We.batching===!1||!Q.isBatchedMesh&&We.batching===!0||Q.isBatchedMesh&&We.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&We.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&We.instancing===!1||!Q.isInstancedMesh&&We.instancing===!0||Q.isSkinnedMesh&&We.skinning===!1||!Q.isSkinnedMesh&&We.skinning===!0||Q.isInstancedMesh&&We.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&We.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&We.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&We.instancingMorph===!1&&Q.morphTexture!==null||We.envMap!==Ue||ae.fog===!0&&We.fog!==xe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ge.numPlanes||We.numIntersection!==ge.numIntersection)||We.vertexAlphas!==$e||We.vertexTangents!==Ye||We.morphTargets!==Ve||We.morphNormals!==it||We.morphColors!==pt||We.toneMapping!==Dt||We.morphTargetsCount!==yt)&&(lt=!0):(lt=!0,We.__version=ae.version);let pn=We.currentProgram;lt===!0&&(pn=no(ae,J,Q));let _s=!1,mn=!1,ar=!1;const Pt=pn.getUniforms(),yn=We.uniforms;if(q.useProgram(pn.program)&&(_s=!0,mn=!0,ar=!0),ae.id!==A&&(A=ae.id,mn=!0),_s||T!==C){q.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Pt.setValue(p,"projectionMatrix",C.projectionMatrix),Pt.setValue(p,"viewMatrix",C.matrixWorldInverse);const cn=Pt.map.cameraPosition;cn!==void 0&&cn.setValue(p,Se.setFromMatrixPosition(C.matrixWorld)),$.logarithmicDepthBuffer&&Pt.setValue(p,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Pt.setValue(p,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,mn=!0,ar=!0)}if(Q.isSkinnedMesh){Pt.setOptional(p,Q,"bindMatrix"),Pt.setOptional(p,Q,"bindMatrixInverse");const Qt=Q.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Pt.setValue(p,"boneTexture",Qt.boneTexture,ie))}Q.isBatchedMesh&&(Pt.setOptional(p,Q,"batchingTexture"),Pt.setValue(p,"batchingTexture",Q._matricesTexture,ie),Pt.setOptional(p,Q,"batchingIdTexture"),Pt.setValue(p,"batchingIdTexture",Q._indirectTexture,ie),Pt.setOptional(p,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Pt.setValue(p,"batchingColorTexture",Q._colorsTexture,ie));const Mn=oe.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&_e.update(Q,oe,pn),(mn||We.receiveShadow!==Q.receiveShadow)&&(We.receiveShadow=Q.receiveShadow,Pt.setValue(p,"receiveShadow",Q.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(yn.envMap.value=Ue,yn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&J.environment!==null&&(yn.envMapIntensity.value=J.environmentIntensity),mn&&(Pt.setValue(p,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&Np(yn,ar),xe&&ae.fog===!0&&ce.refreshFogUniforms(yn,xe),ce.refreshMaterialUniforms(yn,ae,I,D,m.state.transmissionRenderTarget[C.id]),Yo.upload(p,Pu(We),yn,ie)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Yo.upload(p,Pu(We),yn,ie),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Pt.setValue(p,"center",Q.center),Pt.setValue(p,"modelViewMatrix",Q.modelViewMatrix),Pt.setValue(p,"normalMatrix",Q.normalMatrix),Pt.setValue(p,"modelMatrix",Q.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Qt=ae.uniformsGroups;for(let cn=0,Ca=Qt.length;cn<Ca;cn++){const Gi=Qt[cn];je.update(Gi,pn),je.bind(Gi,pn)}}return pn}function Np(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function Fp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,J,oe){const ae=Z.get(C);ae.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Z.get(C.texture).__webglTexture=J,Z.get(C.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:oe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,J){const oe=Z.get(C);oe.__webglFramebuffer=J,oe.__useDefaultFramebuffer=J===void 0};const Op=p.createFramebuffer();this.setRenderTarget=function(C,J=0,oe=0){B=C,N=J,O=oe;let ae=!0,Q=null,xe=!1,Ie=!1;if(C){const Ue=Z.get(C);if(Ue.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(p.FRAMEBUFFER,null),ae=!1;else if(Ue.__webglFramebuffer===void 0)ie.setupRenderTarget(C);else if(Ue.__hasExternalTextures)ie.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ve=C.depthTexture;if(Ue.__boundDepthTexture!==Ve){if(Ve!==null&&Z.has(Ve)&&(C.width!==Ve.image.width||C.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ie=!0);const Ye=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[J])?Q=Ye[J][oe]:Q=Ye[J],xe=!0):C.samples>0&&ie.useMultisampledRTT(C)===!1?Q=Z.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?Q=Ye[oe]:Q=Ye,H.copy(C.viewport),K.copy(C.scissor),k=C.scissorTest}else H.copy(G).multiplyScalar(I).floor(),K.copy(pe).multiplyScalar(I).floor(),k=Me;if(oe!==0&&(Q=Op),q.bindFramebuffer(p.FRAMEBUFFER,Q)&&ae&&q.drawBuffers(C,Q),q.viewport(H),q.scissor(K),q.setScissorTest(k),xe){const Ue=Z.get(C.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ue.__webglTexture,oe)}else if(Ie){const Ue=J;for(let $e=0;$e<C.textures.length;$e++){const Ye=Z.get(C.textures[$e]);p.framebufferTextureLayer(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0+$e,Ye.__webglTexture,oe,Ue)}}else if(C!==null&&oe!==0){const Ue=Z.get(C.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,Ue.__webglTexture,oe)}A=-1},this.readRenderTargetPixels=function(C,J,oe,ae,Q,xe,Ie,Be=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){q.bindFramebuffer(p.FRAMEBUFFER,Ue);try{const $e=C.textures[Be],Ye=$e.format,Ve=$e.type;if(!$.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-ae&&oe>=0&&oe<=C.height-Q&&(C.textures.length>1&&p.readBuffer(p.COLOR_ATTACHMENT0+Be),p.readPixels(J,oe,ae,Q,De.convert(Ye),De.convert(Ve),xe))}finally{const $e=B!==null?Z.get(B).__webglFramebuffer:null;q.bindFramebuffer(p.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(C,J,oe,ae,Q,xe,Ie,Be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue)if(J>=0&&J<=C.width-ae&&oe>=0&&oe<=C.height-Q){q.bindFramebuffer(p.FRAMEBUFFER,Ue);const $e=C.textures[Be],Ye=$e.format,Ve=$e.type;if(!$.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=p.createBuffer();p.bindBuffer(p.PIXEL_PACK_BUFFER,it),p.bufferData(p.PIXEL_PACK_BUFFER,xe.byteLength,p.STREAM_READ),C.textures.length>1&&p.readBuffer(p.COLOR_ATTACHMENT0+Be),p.readPixels(J,oe,ae,Q,De.convert(Ye),De.convert(Ve),0);const pt=B!==null?Z.get(B).__webglFramebuffer:null;q.bindFramebuffer(p.FRAMEBUFFER,pt);const Dt=p.fenceSync(p.SYNC_GPU_COMMANDS_COMPLETE,0);return p.flush(),await w_(p,Dt,4),p.bindBuffer(p.PIXEL_PACK_BUFFER,it),p.getBufferSubData(p.PIXEL_PACK_BUFFER,0,xe),p.deleteBuffer(it),p.deleteSync(Dt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,J=null,oe=0){const ae=Math.pow(2,-oe),Q=Math.floor(C.image.width*ae),xe=Math.floor(C.image.height*ae),Ie=J!==null?J.x:0,Be=J!==null?J.y:0;ie.setTexture2D(C,0),p.copyTexSubImage2D(p.TEXTURE_2D,oe,0,0,Ie,Be,Q,xe),q.unbindTexture()};const Bp=p.createFramebuffer(),zp=p.createFramebuffer();this.copyTextureToTexture=function(C,J,oe=null,ae=null,Q=0,xe=null){xe===null&&(Q!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=Q,Q=0):xe=0);let Ie,Be,Ue,$e,Ye,Ve,it,pt,Dt;const Tt=C.isCompressedTexture?C.mipmaps[xe]:C.image;if(oe!==null)Ie=oe.max.x-oe.min.x,Be=oe.max.y-oe.min.y,Ue=oe.isBox3?oe.max.z-oe.min.z:1,$e=oe.min.x,Ye=oe.min.y,Ve=oe.isBox3?oe.min.z:0;else{const Mn=Math.pow(2,-Q);Ie=Math.floor(Tt.width*Mn),Be=Math.floor(Tt.height*Mn),C.isDataArrayTexture?Ue=Tt.depth:C.isData3DTexture?Ue=Math.floor(Tt.depth*Mn):Ue=1,$e=0,Ye=0,Ve=0}ae!==null?(it=ae.x,pt=ae.y,Dt=ae.z):(it=0,pt=0,Dt=0);const yt=De.convert(J.format),We=De.convert(J.type);let Ct;J.isData3DTexture?(ie.setTexture3D(J,0),Ct=p.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ie.setTexture2DArray(J,0),Ct=p.TEXTURE_2D_ARRAY):(ie.setTexture2D(J,0),Ct=p.TEXTURE_2D),p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,J.flipY),p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),p.pixelStorei(p.UNPACK_ALIGNMENT,J.unpackAlignment);const lt=p.getParameter(p.UNPACK_ROW_LENGTH),pn=p.getParameter(p.UNPACK_IMAGE_HEIGHT),_s=p.getParameter(p.UNPACK_SKIP_PIXELS),mn=p.getParameter(p.UNPACK_SKIP_ROWS),ar=p.getParameter(p.UNPACK_SKIP_IMAGES);p.pixelStorei(p.UNPACK_ROW_LENGTH,Tt.width),p.pixelStorei(p.UNPACK_IMAGE_HEIGHT,Tt.height),p.pixelStorei(p.UNPACK_SKIP_PIXELS,$e),p.pixelStorei(p.UNPACK_SKIP_ROWS,Ye),p.pixelStorei(p.UNPACK_SKIP_IMAGES,Ve);const Pt=C.isDataArrayTexture||C.isData3DTexture,yn=J.isDataArrayTexture||J.isData3DTexture;if(C.isDepthTexture){const Mn=Z.get(C),Qt=Z.get(J),cn=Z.get(Mn.__renderTarget),Ca=Z.get(Qt.__renderTarget);q.bindFramebuffer(p.READ_FRAMEBUFFER,cn.__webglFramebuffer),q.bindFramebuffer(p.DRAW_FRAMEBUFFER,Ca.__webglFramebuffer);for(let Gi=0;Gi<Ue;Gi++)Pt&&(p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,Z.get(C).__webglTexture,Q,Ve+Gi),p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,Z.get(J).__webglTexture,xe,Dt+Gi)),p.blitFramebuffer($e,Ye,Ie,Be,it,pt,Ie,Be,p.DEPTH_BUFFER_BIT,p.NEAREST);q.bindFramebuffer(p.READ_FRAMEBUFFER,null),q.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Z.has(C)){const Mn=Z.get(C),Qt=Z.get(J);q.bindFramebuffer(p.READ_FRAMEBUFFER,Bp),q.bindFramebuffer(p.DRAW_FRAMEBUFFER,zp);for(let cn=0;cn<Ue;cn++)Pt?p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,Mn.__webglTexture,Q,Ve+cn):p.framebufferTexture2D(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,Mn.__webglTexture,Q),yn?p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,Qt.__webglTexture,xe,Dt+cn):p.framebufferTexture2D(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,Qt.__webglTexture,xe),Q!==0?p.blitFramebuffer($e,Ye,Ie,Be,it,pt,Ie,Be,p.COLOR_BUFFER_BIT,p.NEAREST):yn?p.copyTexSubImage3D(Ct,xe,it,pt,Dt+cn,$e,Ye,Ie,Be):p.copyTexSubImage2D(Ct,xe,it,pt,$e,Ye,Ie,Be);q.bindFramebuffer(p.READ_FRAMEBUFFER,null),q.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else yn?C.isDataTexture||C.isData3DTexture?p.texSubImage3D(Ct,xe,it,pt,Dt,Ie,Be,Ue,yt,We,Tt.data):J.isCompressedArrayTexture?p.compressedTexSubImage3D(Ct,xe,it,pt,Dt,Ie,Be,Ue,yt,Tt.data):p.texSubImage3D(Ct,xe,it,pt,Dt,Ie,Be,Ue,yt,We,Tt):C.isDataTexture?p.texSubImage2D(p.TEXTURE_2D,xe,it,pt,Ie,Be,yt,We,Tt.data):C.isCompressedTexture?p.compressedTexSubImage2D(p.TEXTURE_2D,xe,it,pt,Tt.width,Tt.height,yt,Tt.data):p.texSubImage2D(p.TEXTURE_2D,xe,it,pt,Ie,Be,yt,We,Tt);p.pixelStorei(p.UNPACK_ROW_LENGTH,lt),p.pixelStorei(p.UNPACK_IMAGE_HEIGHT,pn),p.pixelStorei(p.UNPACK_SKIP_PIXELS,_s),p.pixelStorei(p.UNPACK_SKIP_ROWS,mn),p.pixelStorei(p.UNPACK_SKIP_IMAGES,ar),xe===0&&J.generateMipmaps&&p.generateMipmap(Ct),q.unbindTexture()},this.initRenderTarget=function(C){Z.get(C).__webglFramebuffer===void 0&&ie.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ie.setTextureCube(C,0):C.isData3DTexture?ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ie.setTexture2DArray(C,0):ie.setTexture2D(C,0),q.unbindTexture()},this.resetState=function(){N=0,O=0,B=null,q.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const bd={type:"change"},bu={type:"start"},Pp={type:"end"},Oo=new Ea,Ed=new Ii,MS=Math.cos(70*$s.DEG2RAD),Ft=new z,un=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bl=1e-6;class Ip extends Bv{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new cs,this._lastTargetPosition=new z,this._quat=new cs().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jh,this._sphericalDelta=new Jh,this._scale=1,this._panOffset=new z,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new z,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bS.bind(this),this._onPointerDown=SS.bind(this),this._onPointerUp=ES.bind(this),this._onContextMenu=IS.bind(this),this._onMouseWheel=AS.bind(this),this._onKeyDown=RS.bind(this),this._onTouchStart=CS.bind(this),this._onTouchMove=PS.bind(this),this._onMouseDown=wS.bind(this),this._onMouseMove=TS.bind(this),this._interceptControlDown=DS.bind(this),this._interceptControlUp=LS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bd),this.update(),this.state=_t.NONE}update(e=null){const t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Oo.origin.copy(this.object.position),Oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oo.direction))<MS?this.object.lookAt(this.target):(Ed.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oo.intersectPlane(Ed,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bl||this._lastTargetPosition.distanceToSquared(this.target)>bl?(this.dispatchEvent(bd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function SS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function bS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ES(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pp),this.state=_t.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function wS(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_t.DOLLY;break;case Ws.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}break;case Ws.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(bu)}function TS(n){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function AS(n){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(n.preventDefault(),this.dispatchEvent(bu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Pp))}function RS(n){this.enabled!==!1&&this._handleKeyDown(n)}function CS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_t.TOUCH_ROTATE;break;case Bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case Bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_t.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(bu)}function PS(n){switch(this._trackPointer(n),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_t.NONE}}function IS(n){this.enabled!==!1&&n.preventDefault()}function DS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class US extends fu{constructor(){super();const e=new ii;e.deleteAttribute("uv");const t=new Et({side:ln}),i=new Et,s=new Nv(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new at(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Sc(e,i,6),a=new Nt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new at(e,Us(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new at(e,Us(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new at(e,Us(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new at(e,Us(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const d=new at(e,Us(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new at(e,Us(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Us(n){return new Iv({color:0,emissive:16777215,emissiveIntensity:n})}const NS=[{id:"company-a",name:"青源材料有限公司"},{id:"company-b",name:"蓝川装备有限公司"},{id:"company-c",name:"新桥电子有限公司"},{id:"company-d",name:"丰源科技有限公司"},{id:"company-e",name:"启衡精工有限公司"},{id:"company-f",name:"沐光智造有限公司"},{id:"park-admin",name:"园区管委会"},{id:"energy-operator",name:"园区能源服务单位"}],wd=[[-37,-31],[38,-31],[38,32],[-37,32]],hn={z:-1.5,width:5.8};function di(n,e,t,i,s,r,o,a,l){return{id:n,name:e,kind:t,entityId:i,objectId:s,x:r,z:o,width:a,depth:l,polygon:[[r-a/2,o-l/2],[r+a/2,o-l/2],[r+a/2,o+l/2],[r-a/2,o+l/2]]}}const an=[di("parcel-a","青源材料地块","enterprise","company-a","ent-a",-27,-15,12,18),di("parcel-b","蓝川装备地块","enterprise","company-b","ent-b",-10,-15,11,18),di("parcel-c","新桥电子地块","enterprise","company-c","ent-c",7,-15,12,18),di("parcel-d","丰源科技地块","enterprise","company-d","ent-d",-27,12,12,18),di("parcel-e","启衡精工地块","enterprise","company-e","ent-e",-10,12,11,18),di("parcel-f","沐光智造地块","enterprise","company-f","ent-f",7,12,12,18),di("public-plaza","公共服务区","public","park-admin","public-center",27,-15,16,18),di("energy-yard","变配电区","energy","energy-operator","energy-sub",27,8,16,13),di("energy-mobility","储能充电区","energy","energy-operator","energy-storage",27,21,16,9.6)],kn=[{id:"a-production",name:"材料生产车间",zoneId:"parcel-a",objectId:"ent-a",x:-27,z:-13.8,width:9,depth:8,height:4.8,template:"production",primary:!0},{id:"a-warehouse",name:"原料仓库",zoneId:"parcel-a",objectId:"ent-a",x:-27,z:-22,width:8,depth:3,height:2.4,template:"warehouse",primary:!1},{id:"b-assembly",name:"装备装配车间",zoneId:"parcel-b",objectId:"ent-b",x:-10,z:-13.8,width:8.4,depth:8,height:3.7,template:"warehouse",primary:!0},{id:"b-office",name:"企业办公楼",zoneId:"parcel-b",objectId:"ent-b",x:-10,z:-22,width:6.4,depth:3,height:2.5,template:"utility",primary:!1},{id:"c-research",name:"电子研发与生产楼",zoneId:"parcel-c",objectId:"ent-c",x:7,z:-14.8,width:8.8,depth:9,height:5.2,template:"research",primary:!0},{id:"d-production",name:"精密生产车间",zoneId:"parcel-d",objectId:"ent-d",x:-27,z:12,width:8.8,depth:7.8,height:4.4,template:"production",primary:!0},{id:"d-utility",name:"供热与辅助用房",zoneId:"parcel-d",objectId:"ent-d",x:-27,z:5.4,width:7,depth:3,height:2.3,template:"utility",primary:!1},{id:"e-production",name:"精工制造车间",zoneId:"parcel-e",objectId:"ent-e",x:-10,z:12,width:8.5,depth:8,height:3.7,template:"warehouse",primary:!0},{id:"e-office",name:"企业办公楼",zoneId:"parcel-e",objectId:"ent-e",x:-10,z:5.3,width:6.5,depth:3,height:2.7,template:"utility",primary:!1},{id:"f-production",name:"智能制造楼",zoneId:"parcel-f",objectId:"ent-f",x:7,z:12,width:8.8,depth:9,height:4.5,template:"research",primary:!0},{id:"public-office",name:"公共服务中心",zoneId:"public-plaza",objectId:"public-center",x:27,z:-15,width:11,depth:9,height:5.3,template:"office",primary:!0},{id:"substation-main",name:"变配电站与设备院",zoneId:"energy-yard",objectId:"energy-sub",x:27,z:8,width:12.6,depth:9,height:3.2,template:"substation",primary:!0},{id:"storage-main",name:"储能及充电设施",zoneId:"energy-mobility",objectId:"energy-storage",x:27,z:21,width:12.5,depth:7,height:2.7,template:"storage",primary:!0}],qs=[{id:"boulevard",x:-.75,z:-1.5,width:72.5,depth:4.8,horizontal:!0},{id:"north-road",x:.5,z:-28,width:68,depth:3.4,horizontal:!0},{id:"south-road",x:.5,z:28,width:68,depth:3.4,horizontal:!0},...[-18,-2,16].map((n,e)=>({id:`connector-${e}`,x:n,z:0,width:4,depth:56,horizontal:!1}))],Ln=[...an.map((n,e)=>({id:`meter-asset-${e+1}`,name:`${n.name}计量柜`,kind:"meter",objectId:n.objectId,buildingId:kn.find(t=>t.zoneId===n.id&&t.primary).id,sourceId:"ds-electric",meterId:`M-${String(e+1).padStart(3,"0")}`,status:"simulated"})),{id:"solar-b",name:"蓝川屋顶光伏",kind:"solar",objectId:"ent-b",buildingId:"b-assembly",sourceId:"ds-electric",status:"simulated"},{id:"solar-f",name:"沐光屋顶光伏",kind:"solar",objectId:"ent-f",buildingId:"f-production",sourceId:"ds-electric",status:"simulated"},{id:"solar-canopy",name:"公共充电光伏车棚",kind:"solar",objectId:"energy-storage",buildingId:"storage-main",sourceId:"ds-electric",status:"simulated"},{id:"heat-d",name:"丰源换热机组",kind:"heat",objectId:"ent-d",buildingId:"d-utility",sourceId:"ds-heat",status:"simulated"},{id:"transformer-1",name:"园区变压器组",kind:"transformer",objectId:"energy-sub",buildingId:"substation-main",sourceId:"ds-electric",status:"simulated"},{id:"battery-1",name:"公共储能柜组",kind:"battery",objectId:"energy-storage",buildingId:"storage-main",sourceId:"ds-electric",status:"simulated"},{id:"charger-1",name:"公共充电桩组",kind:"charger",objectId:"energy-storage",buildingId:"storage-main",sourceId:"ds-electric",status:"simulated"}],Pc=Ln.filter(n=>n.meterId).map(n=>({id:n.meterId,assetId:n.id,objectId:n.objectId,sourceId:n.sourceId,quality:n.objectId==="ent-e"?"delayed":"simulated"}));qs.map(n=>({...n,entityId:"park-admin",zoneId:"public-circulation",kind:"public"}));function Bo(n,e,t=.001){return Math.min(n.x+n.width/2,e.x+e.width/2)-Math.max(n.x-n.width/2,e.x-e.width/2)>t&&Math.min(n.z+n.depth/2,e.z+e.depth/2)-Math.max(n.z-n.depth/2,e.z-e.depth/2)>t}function FS(n=kn){const e=[],t=qs.map(r=>({...r,width:r.width+.7,depth:r.depth+.7})),i=new Set,s=n.map(r=>{const o=r.rotationY??0;return{...r,width:Math.abs(Math.cos(o))*r.width+Math.abs(Math.sin(o))*r.depth,depth:Math.abs(Math.sin(o))*r.width+Math.abs(Math.cos(o))*r.depth}});for(const r of s){(![r.x,r.z,r.width,r.depth,r.height,r.elevation??0].every(Number.isFinite)||r.width<=0||r.depth<=0||r.height<=0)&&e.push(`建筑尺寸或坐标无效: ${r.id}`),i.has(r.id)&&e.push(`重复建筑 ID: ${r.id}`),i.add(r.id);const o=an.find(a=>a.id===r.zoneId);if(!o||o.objectId!==r.objectId){e.push(`建筑主体/地块关联无效: ${r.id}`);continue}(Math.abs(r.x-o.x)+r.width/2>o.width/2||Math.abs(r.z-o.z)+r.depth/2>o.depth/2)&&e.push(`建筑超出地块: ${r.id}`);for(const a of t)Bo(r,a)&&e.push(`建筑与道路相交: ${r.id} / ${a.id}`)}for(let r=0;r<s.length;r++)for(let o=r+1;o<s.length;o++)Bo(s[r],s[o])&&e.push(`建筑重叠: ${s[r].id} / ${s[o].id}`);for(let r=0;r<an.length;r++){const o=an[r];NS.some(a=>a.id===o.entityId)||e.push(`地块主体不存在: ${o.id}`);for(const a of t)Bo(o,a)&&e.push(`地块与道路相交: ${o.id} / ${a.id}`);for(let a=r+1;a<an.length;a++)Bo(o,an[a])&&e.push(`地块重叠: ${o.id}`);(o.x-o.width/2<-37||o.x+o.width/2>38||o.z-o.depth/2<-31||o.z+o.depth/2>32)&&e.push(`地块超出园区: ${o.id}`)}for(const r of Ln)n.some(o=>o.id===r.buildingId&&o.objectId===r.objectId)||e.push(`设施关联无效: ${r.id}`);return new Set(Ln.map(r=>r.id)).size!==Ln.length&&e.push("设施 ID 重复"),new Set(Pc.map(r=>r.id)).size!==Pc.length&&e.push("计量点 ID 重复"),e}const rs={"a-production":650,"a-warehouse":40,"b-assembly":580,"b-office":40,"c-research":470,"d-production":550,"d-utility":35,"e-production":420,"e-office":35,"f-production":530,"public-office":120,"substation-main":42,"storage-main":88},xr=300,Dp=.8325,Aa=Object.values(rs).reduce((n,e)=>n+e,0),jr={ordinaryMwh:2e3,qualifiedGreenMwh:1200,onsitePvMwh:400},Eu=Dp*jr.ordinaryMwh/Aa,Td=jr.ordinaryMwh*Dp,OS=(jr.qualifiedGreenMwh+jr.onsitePvMwh)/Aa*100;function BS(n){return kn.filter(e=>e.objectId===n).reduce((e,t)=>e+(rs[t.id]??0),0)}function zS(n){return BS(n)*Eu}const ks={boundary:"BV-DEMO-02 · 六家企业 + 公共服务 + 能源设施",electricity:"13 栋建筑年度预算合计，含充电、辅助用电及转换损耗；储能充放电不重复计入消费。",factor:"2025 试行方法普通受入电力 0.8325 kgCO₂/kWh；绿电/光伏条件与凭证均为场景假设。",allocation:"设备使用年度场景结构分配因子 0.4625 kgCO₂/kWh，仅为管理分摊示例，不代表实际时段供能。",tce:"电力须按等价值折标；系数和依据尚未核实，因此不生成综合能耗、单位能耗碳排或核心指标达标结论。"},kS={policy:{label:"国家园区核算方法（试行）",url:"https://www.ndrc.gov.cn/xxgk/zcfb/tz/202507/P020250708509043380772.pdf"},industry:{label:"苏州工业园区碳达峰试点方案",url:"https://www.suzhou.gov.cn/szsrmzf/zfwj/202405/3df5e68dcc1a4bf79947e6cbb4524968.shtml"},air:{label:"Atlas Copco 空压能效指标",url:"https://helpsmartlink.atlascopco.com/en/support/solutions/articles/47001095673-energy-efficiency-dashboard"},meter:{label:"Schneider 电表字段手册",url:"https://productinfo.se.com/pm2100/5afb1fab46e0fb00011e440d/PM2100%20series%20User%20Manual/English/BM_PM2100SeriesUserManual_0000071636.ditamap.xml/$/C_ViewingMeterData_ViewingMeterData_PM2100_0000071585"},warehouse:{label:"Prologis 仓库照明方案",url:"https://www.prologis.se/en/essentials-solutions/operations/lighting-electrical"},research:{label:"ESPEC 环境试验设备",url:"https://espec.com/na/products"},storage:{label:"Huawei 工商业光储系统资料",url:"https://e.huawei.com/marketingcloud/pep/asset/20000001/Material/3f44fe1d936a4a18b5cb06eb53ad0582/M3T1A669N1115074372528451590/FusionSolar%20C_I%20_%20Smart%20PV%20Solusion%20Brochure.pdf"}},HS=JSON.parse('[{"id":"factory","name":"厂房","buildingId":"b-assembly","subtitle":"装备加工装配 · 生产负荷与公辅能耗","layout":"入口计量 → 生产加工 → 装配测试；公辅设备分区","zones":[["生产与加工",55,90,510,425],["公辅与计量",590,90,260,425]],"assets":[{"id":"F01","name":"数控加工中心 1","x":90,"y":130,"w":190,"h":85,"buildingId":"b-assembly","scene":"factory","power":34,"energy":360,"status":"normal","role":"terminal","rule":"R01/R03","extra":"产量、加工任务、待机状态","recommendation":"核对同产品能耗与排程","source":"meter","priority":"P0","meterId":"DEMO-M-F01","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":299.7},{"id":"F02","name":"数控加工中心 2","x":340,"y":130,"w":190,"h":85,"buildingId":"b-assembly","scene":"factory","power":28,"energy":280,"status":"normal","role":"terminal","rule":"R01/R03","extra":"产量、加工任务","recommendation":"匹配同配方和良品产量","source":"meter","priority":"P0","meterId":"DEMO-M-F02","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":233.1},{"id":"F03","name":"螺杆空压机","x":620,"y":130,"w":195,"h":85,"buildingId":"b-assembly","scene":"factory","power":57,"energy":300,"status":"warning","role":"terminal","rule":"R02","extra":"压力、流量、加载/卸载","recommendation":"演示：无生产任务仍高用电；排查泄漏或控制不匹配","source":"air","priority":"P0","meterId":"DEMO-M-F03","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":249.75},{"id":"F04","name":"冷干机","x":620,"y":260,"w":195,"h":85,"buildingId":"b-assembly","scene":"factory","power":2.1,"energy":24,"status":"normal","role":"terminal","rule":"R02","extra":"露点、压差","recommendation":"关注气体质量；独立计量与系统表不重复汇总","source":"air","priority":"P1","meterId":"DEMO-M-F04","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":19.98},{"id":"F05","name":"冷却循环泵","x":90,"y":260,"w":190,"h":85,"buildingId":"b-assembly","scene":"factory","power":5.3,"energy":42,"status":"normal","role":"terminal","rule":"R01","extra":"流量、压差、频率","recommendation":"核对负荷需求与泵运行模式","source":"industry","priority":"P1","meterId":"DEMO-M-F05","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":34.97},{"id":"F06","name":"抽排风机","x":340,"y":260,"w":190,"h":85,"buildingId":"b-assembly","scene":"factory","power":3.8,"energy":30,"status":"normal","role":"terminal","rule":"R01","extra":"风量、生产状态","recommendation":"核对必要通风后再建议节能","source":"industry","priority":"P1","meterId":"DEMO-M-F06","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":24.98},{"id":"F07","name":"车间照明回路","x":90,"y":390,"w":190,"h":85,"buildingId":"b-assembly","scene":"factory","power":2.2,"energy":18,"status":"normal","role":"terminal","rule":"R04","extra":"占用、照度","recommendation":"按回路计量，不为每盏灯虚构测点","source":"meter","priority":"P1","meterId":"DEMO-M-F07","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":14.98},{"id":"F08","name":"装配与测试台","x":340,"y":390,"w":190,"h":85,"buildingId":"b-assembly","scene":"factory","power":6,"energy":48,"status":"normal","role":"terminal","rule":"R01/R03","extra":"测试任务、产量","recommendation":"识别无任务待机与产品差异","source":"industry","priority":"P1","meterId":"DEMO-M-F08","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":39.96},{"id":"F09","name":"建筑入口总表","x":620,"y":390,"w":195,"h":85,"buildingId":"b-assembly","scene":"factory","power":142,"energy":1120,"status":"normal","role":"aggregate","rule":"R07","extra":"正反向电量、覆盖范围","recommendation":"1120−1102=18 kWh 仅为样例计量差额，不能直接认定损耗","source":"meter","priority":"P0","meterId":"DEMO-M-F09","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null}]},{"id":"warehouse","name":"仓库","buildingId":"a-warehouse","subtitle":"常温原料/成品仓 · 分区照明与物流","layout":"货架与作业通道 → 收发货 → 充电回路；不设冷库","zones":[["存储与通道",55,90,415,425],["物流与用能回路",500,90,350,425]],"assets":[{"id":"W01","name":"货架与托盘区","x":90,"y":135,"w":340,"h":235,"buildingId":"a-warehouse","scene":"warehouse","power":null,"energy":null,"status":"normal","role":"passive","rule":"—","extra":"库存、作业状态（可选）","recommendation":"非用能资产，无运行碳排卡片","source":"warehouse","priority":"P2","meterId":null,"base":"资产位置、分类","dataOrigin":"模拟构造","carbon":null},{"id":"W02","name":"分区 LED 回路","x":540,"y":120,"w":265,"h":70,"buildingId":"a-warehouse","scene":"warehouse","power":5,"energy":42,"status":"warning","role":"terminal","rule":"R04","extra":"占用、调光状态","recommendation":"演示：空置区持续亮灯；核对应急照明需求","source":"warehouse","priority":"P0","meterId":"DEMO-M-W02","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":34.97},{"id":"W03","name":"通风机组","x":540,"y":210,"w":265,"h":70,"buildingId":"a-warehouse","scene":"warehouse","power":3.2,"energy":26,"status":"normal","role":"terminal","rule":"R01","extra":"温湿度、风量","recommendation":"保持必要通风，按任务与班次分析","source":"industry","priority":"P1","meterId":"DEMO-M-W03","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":21.64},{"id":"W04","name":"输送设备","x":540,"y":300,"w":265,"h":70,"buildingId":"a-warehouse","scene":"warehouse","power":4.8,"energy":38,"status":"normal","role":"terminal","rule":"R04","extra":"搬运任务、托盘数","recommendation":"无搬运任务运行可进入整改核对","source":"industry","priority":"P1","meterId":"DEMO-M-W04","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":31.64},{"id":"W05","name":"叉车充电回路","x":90,"y":420,"w":340,"h":65,"buildingId":"a-warehouse","scene":"warehouse","power":7,"energy":24,"status":"normal","role":"terminal","rule":"R04","extra":"车辆/会话 ID、SOC","recommendation":"记录充电输入，不叠加车辆端电量","source":"meter","priority":"P1","meterId":"DEMO-M-W05","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":19.98},{"id":"W06","name":"仓库总表","x":540,"y":410,"w":265,"h":70,"buildingId":"a-warehouse","scene":"warehouse","power":20,"energy":140,"status":"normal","role":"aggregate","rule":"R07","extra":"覆盖范围、进出电量","recommendation":"终端合计130，余下10 kWh 为未覆盖/计量差额示例","source":"meter","priority":"P0","meterId":"DEMO-M-W06","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null}]},{"id":"research","name":"研发楼","buildingId":"c-research","subtitle":"电子可靠性测试 · 测试设备与环境保障","layout":"测试区与机电区分开；正式原型再加入楼层切换","zones":[["试验与研发",55,90,510,425],["机电保障",590,90,260,425]],"assets":[{"id":"R01","name":"恒温恒湿试验箱","x":90,"y":130,"w":190,"h":85,"buildingId":"c-research","scene":"research","power":22,"energy":240,"status":"warning","role":"terminal","rule":"R05","extra":"温湿度设定/实测、试验任务","recommendation":"演示：任务结束仍运行；排除恢复温控与后续任务","source":"research","priority":"P0","meterId":"DEMO-M-R01","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":199.8},{"id":"R02","name":"老化测试柜","x":340,"y":130,"w":190,"h":85,"buildingId":"c-research","scene":"research","power":18,"energy":180,"status":"normal","role":"terminal","rule":"R01/R03","extra":"测试配方、样品数量、时长","recommendation":"比较同配方，不以高功率直接判异常","source":"research","priority":"P1","meterId":"DEMO-M-R02","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":149.85},{"id":"R03","name":"冷水机/热泵","x":620,"y":130,"w":195,"h":85,"buildingId":"c-research","scene":"research","power":48,"energy":420,"status":"normal","role":"terminal","rule":"R06","extra":"冷热量、流量、供回水温度","recommendation":"有冷热量才能评估 COP；位置可在屋顶/机房","source":"industry","priority":"P0","meterId":"DEMO-M-R03","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":349.65},{"id":"R04","name":"AHU 空气处理机组","x":620,"y":260,"w":195,"h":85,"buildingId":"c-research","scene":"research","power":17,"energy":150,"status":"normal","role":"terminal","rule":"R01","extra":"房间占用、温湿度、风量","recommendation":"研发停用不等于实验环境保障可停","source":"industry","priority":"P1","meterId":"DEMO-M-R04","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":124.88},{"id":"R05","name":"冷冻水循环泵","x":620,"y":390,"w":195,"h":85,"buildingId":"c-research","scene":"research","power":8,"energy":72,"status":"normal","role":"terminal","rule":"R06","extra":"流量、压差、频率","recommendation":"结合冷热负荷评估，不单看温差","source":"industry","priority":"P1","meterId":"DEMO-M-R05","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":59.94},{"id":"R06","name":"UPS 供电节点","x":90,"y":260,"w":190,"h":85,"buildingId":"c-research","scene":"research","power":42,"energy":600,"status":"normal","role":"transfer","rule":"R07","extra":"输入/输出、负载率","recommendation":"供电输入含下游负荷；仅损耗可另做归属","source":"meter","priority":"P1","meterId":"DEMO-M-R06","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"R07","name":"研发照明回路","x":340,"y":260,"w":190,"h":85,"buildingId":"c-research","scene":"research","power":3,"energy":24,"status":"normal","role":"terminal","rule":"R04","extra":"占用、班次","recommendation":"按楼层/回路控制与核对","source":"meter","priority":"P1","meterId":"DEMO-M-R07","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":19.98},{"id":"R08","name":"楼层总表","x":90,"y":390,"w":440,"h":85,"buildingId":"c-research","scene":"research","power":118,"energy":1266,"status":"delayed","role":"aggregate","rule":"R09","extra":"时间戳、质量码、覆盖范围","recommendation":"演示：超过采样周期，冻结最后值并标明延迟，不能填零","source":"meter","priority":"P0","meterId":"DEMO-M-R08","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null}]},{"id":"substation","name":"变电站","buildingId":"substation-main","subtitle":"输入输出计量 · 支路定位与损耗核对","layout":"高压进线 → 变压器 → 低压出线；与单线图联动","zones":[["高压进线/计量",55,90,240,425],["变压器区",330,90,240,425],["低压出线",610,90,240,425]],"assets":[{"id":"S01","name":"高压进线柜","x":80,"y":145,"w":190,"h":105,"buildingId":"substation-main","scene":"substation","power":420,"energy":3600,"status":"normal","role":"transfer","rule":"R07","extra":"开关状态、保护装置上报","recommendation":"展示传递电量，不再次计入用能总量","source":"meter","priority":"P0","meterId":"DEMO-M-S01","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"S02","name":"变压器 1","x":355,"y":145,"w":190,"h":105,"buildingId":"substation-main","scene":"substation","power":220,"energy":1900,"status":"normal","role":"transfer","rule":"R07","extra":"输出电量、温度、kVA","recommendation":"输入与下游重复；同期核对后才能分析损耗","source":"industry","priority":"P0","meterId":"DEMO-M-S02","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"S03","name":"变压器 2","x":355,"y":335,"w":190,"h":105,"buildingId":"substation-main","scene":"substation","power":190,"energy":1690,"status":"warning","role":"transfer","rule":"R07","extra":"输出电量、温度、覆盖范围","recommendation":"演示：计量差额偏离；先查计量与同步，不直接判设备损坏","source":"industry","priority":"P0","meterId":"DEMO-M-S03","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"S04","name":"企业出线柜组","x":635,"y":145,"w":190,"h":105,"buildingId":"substation-main","scene":"substation","power":280,"energy":2600,"status":"normal","role":"transfer","rule":"R07","extra":"企业/建筑 ID、支路表","recommendation":"异常支路 → 建筑 → 设备，不加总传递排放","source":"meter","priority":"P1","meterId":"DEMO-M-S04","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"S05","name":"公共出线柜组","x":635,"y":335,"w":190,"h":105,"buildingId":"substation-main","scene":"substation","power":110,"energy":950,"status":"normal","role":"transfer","rule":"R07","extra":"公共设施 ID、支路表","recommendation":"追踪公共区域用能归属","source":"meter","priority":"P1","meterId":"DEMO-M-S05","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"S06","name":"园区边界计量点","x":80,"y":335,"w":190,"h":105,"buildingId":"substation-main","scene":"substation","power":420,"energy":3600,"status":"normal","role":"aggregate","rule":"R07","extra":"受入/送出、能源类别、期间","recommendation":"边界测点，非设备运行排放；此页样例不与其他模板汇总","source":"policy","priority":"P0","meterId":"DEMO-M-S06","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null}]},{"id":"storage","name":"储能充电区","buildingId":"storage-main","subtitle":"能源流向与温控 · 终端充电用能","layout":"光伏与双向计量 → PCS/电池簇；充电回路独立","zones":[["电池簇",55,90,235,425],["转换与辅助系统",330,90,245,425],["充电与计量",610,90,240,425]],"assets":[{"id":"E01","name":"电池簇 A / BMS","x":80,"y":140,"w":190,"h":100,"buildingId":"storage-main","scene":"storage","power":-24,"energy":210,"status":"normal","role":"storage","rule":"R08","extra":"SOC、温度、原始告警、流向","recommendation":"电量为充电示例；充/放须分别记录，不显示独立减排","source":"storage","priority":"P0","meterId":"DEMO-BMS-E01","base":"SOC、温度、状态、告警、时间","dataOrigin":"模拟构造","carbon":null},{"id":"E02","name":"电池簇 B / BMS","x":80,"y":310,"w":190,"h":100,"buildingId":"storage-main","scene":"storage","power":-24,"energy":210,"status":"warning","role":"storage","rule":"R08","extra":"SOC、温度、原始告警、流向","recommendation":"演示 BMS 温控告警，按原始告警定位，不自创保护阈值","source":"storage","priority":"P0","meterId":"DEMO-BMS-E02","base":"SOC、温度、状态、告警、时间","dataOrigin":"模拟构造","carbon":null},{"id":"E03","name":"光伏逆变器","x":355,"y":130,"w":195,"h":80,"buildingId":"storage-main","scene":"storage","power":26,"energy":200,"status":"normal","role":"generation","rule":"—","extra":"发电量、辐照度、限发","recommendation":"发电不是负的用电排放；减排须有方法与基准","source":"storage","priority":"P1","meterId":"DEMO-M-E03","base":"发电功率、发电量、状态、时间","dataOrigin":"模拟构造","carbon":null},{"id":"E04","name":"PCS 双向转换","x":355,"y":270,"w":195,"h":80,"buildingId":"storage-main","scene":"storage","power":-48,"energy":420,"status":"normal","role":"transfer","rule":"R07","extra":"充电420/放电360、流向","recommendation":"另看库存变化与辅助回路；不能按360/420直接算往返效率","source":"storage","priority":"P0","meterId":"DEMO-M-E04","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"E05","name":"储能辅助温控","x":355,"y":410,"w":195,"h":70,"buildingId":"storage-main","scene":"storage","power":1.6,"energy":8,"status":"normal","role":"terminal","rule":"R08","extra":"温度、制冷状态","recommendation":"辅助用电，已含于站级输入时避免重复归属","source":"storage","priority":"P1","meterId":"DEMO-M-E05","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":6.66},{"id":"E06","name":"充电桩 1","x":635,"y":130,"w":190,"h":80,"buildingId":"storage-main","scene":"storage","power":30,"energy":96,"status":"normal","role":"terminal","rule":"R04","extra":"会话状态、会话电量","recommendation":"用电对应排放，和站级总表不能叠加","source":"meter","priority":"P0","meterId":"DEMO-M-E06","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":79.92},{"id":"E07","name":"充电桩 2","x":635,"y":270,"w":190,"h":80,"buildingId":"storage-main","scene":"storage","power":0,"energy":72,"status":"normal","role":"terminal","rule":"R04","extra":"会话状态、会话电量","recommendation":"当前空闲而当日有电量属于正常","source":"meter","priority":"P0","meterId":"DEMO-M-E07","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":59.94},{"id":"E08","name":"光储充双向表","x":635,"y":410,"w":190,"h":70,"buildingId":"storage-main","scene":"storage","power":-42.4,"energy":500,"status":"normal","role":"aggregate","rule":"R07","extra":"受入/送出、同期边界、倍率","recommendation":"正值受入、负值送出；仅示例读数，配套模型须建立完整能量平衡","source":"meter","priority":"P0","meterId":"DEMO-M-E08","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null}]}]'),Ic={sources:kS,scenes:HS},Ad={terminal:"终端用电",aggregate:"汇总计量",transfer:"能源传递",storage:"储能库存",generation:"发电资产",passive:"非用能资产"},Rd={normal:"正常示例",warning:"需核对",delayed:"数据延迟"};function Lp(n){return n.id==="substation-main"?"substation":n.id==="storage-main"?"storage":n.id==="a-warehouse"?"warehouse":n.id==="c-research"||n.template==="office"||n.id.endsWith("-office")?"research":"factory"}function VS(n){return n.id==="c-research"?[{id:1,name:"1F · 机电与试制"},{id:2,name:"2F · 可靠性测试"}]:[{id:1,name:"1F · 功能区"}]}function GS(n){return{F01:"cnc",F02:"cnc",F03:"compressor",F04:"dryer",F05:"pump",F06:"fan",F07:"lighting",F08:"assembly",F09:"meter",W01:"racks",W02:"lighting",W03:"fan",W04:"conveyor",W05:"forklift",W06:"meter",R01:"chamber",R02:"burnin",R03:"chiller",R04:"ahu",R05:"pump",R06:"ups",R07:"lighting",R08:"meter",S01:"switchgear",S02:"transformer",S03:"transformer",S04:"switchgear",S05:"switchgear",S06:"meter",E01:"battery",E02:"battery",E03:"inverter",E04:"pcs",E05:"chiller",E06:"charger",E07:"charger",E08:"meter"}[n]??"assembly"}function WS(n){const e=Lp(n);let i=Ic.scenes.find(l=>l.id===e).assets;e==="research"&&n.id!=="c-research"&&(i=i.filter(l=>!["R01","R02"].includes(l.id))),n.id==="d-utility"&&(i=Ic.scenes[0].assets.filter(l=>["F03","F04","F05","F09"].includes(l.id)));const s=i.filter(l=>l.role==="terminal").reduce((l,c)=>l+(c.energy??0),0),r=(rs[n.id]??0)*1e3/xr,o=s?r/s:1,a=i.filter(l=>l.role==="terminal").reduce((l,c)=>l+(c.power??0)*o,0);return i.map(l=>{const c=l.role,u=n.id+"::"+l.id;let h=l.name,d=GS(l.id);n.id==="a-production"&&["F01","F02"].includes(l.id)&&(h=l.id==="F01"?"注塑成型机":"材料成型机",d="molding"),n.id==="f-production"&&l.id==="F01"&&(h="电子贴片机",d="smt"),n.id==="f-production"&&l.id==="F02"&&(h="回流焊炉",d="reflow"),n.id==="f-production"&&l.id==="F08"&&(h="控制器老化测试台",d="burnin"),n.id==="d-utility"&&l.id==="F03"&&(h="换热机组辅助电耗",d="heat");const f=n.id==="b-assembly"&&l.id==="F03",y=n.id==="d-production"&&l.id==="F01",S=n.id==="c-research"&&l.id==="R01",g=n.id==="e-production"&&l.id==="F09",m=f||y||S||n.id==="a-warehouse"&&l.id==="W02"||n.id==="substation-main"&&l.id==="S03"||n.id==="storage-main"&&l.id==="E02",R=g?"delayed":m?"warning":"normal";let b=c==="terminal"?(l.energy??0)*o:c==="aggregate"?r:l.energy,x=l.power===null?null:c==="terminal"?l.power*o:c==="aggregate"?a:l.power;if(e==="research"&&l.id==="R06"){const B=i.filter(A=>["R01","R02","R07"].includes(A.id));b=B.reduce((A,T)=>A+(T.energy??0)*o,0),x=B.reduce((A,T)=>A+(T.power??0)*o,0)}if(e==="storage"&&l.id==="E08"&&(x=a-48-26,b=r-420-200),e==="substation"){const B=(Aa-jr.onsitePvMwh)*1e3/xr,A=(rs["public-office"]+rs["storage-main"])*1e3/xr,T=rs["substation-main"]*1e3/xr;b=["S02","S03"].includes(l.id)?B/2:l.id==="S04"?B-A-T:l.id==="S05"?A:B,x=b/10}const F=y?"核对无任务待机和保温需求；经生产负责人确认后调整排程。":f?"疑似泄漏或控制不匹配；核对气量、压力与管路。":S?"核对试验结束、恢复温控及下一批任务。":g?"测点超过预期采样周期，核对网关和时间同步；未知不填零。":l.recommendation,N=f||y?"当前无生产任务":S?"试验任务已结束":c==="terminal"?"按模拟班次运行":"按能源角色展示",O=f?`非生产时段功率仍约 ${(Number(l.power)*o).toFixed(1)} kW；示例气量偏低，原因待现场确认。`:y?"无加工任务持续 18 分钟，待机功率高于配置基线。":S?"试验结束 20 分钟后仍处于温控运行；并非已确认故障。":g?"最后有效读数落后 3 个采样周期；相关期间碳排暂停推算。":m?"设备/计量状态触发模拟规则，需结合关联测点复核。":"未触发模拟规则；正常不代表已满足国家申报要求。";return{id:u,templateId:l.id,name:h,buildingId:n.id,objectId:n.objectId,floor:n.id==="c-research"&&["R01","R02","R07"].includes(l.id)?2:1,kind:e,x:(l.x+l.w/2-450)/900*24,z:(l.y+l.h/2-295)/550*17,width:l.w/900*24,depth:l.h/550*17,role:c,priority:l.priority,meterId:l.meterId?"DEMO-"+n.id+"-"+l.id:null,dailyKwh:b,basePower:x,state:R,rule:y?"R01":g?"R09":l.rule,extra:l.extra,recommendation:F,source:l.source,deviceType:d,annualMwh:c==="terminal"?(b??0)*xr/1e3:null,task:N,evidence:O}})}const eo=kn.flatMap(WS);function XS(n){return eo.filter(e=>e.buildingId===n)}function $S(n,e){const t=n.id.length%7*.45,i=n.basePower===null?null:n.state==="delayed"?n.basePower:Number((n.basePower*(1+.015*Math.sin(e*.4+t))).toFixed(2)),s=n.dailyKwh===null?null:n.dailyKwh+(n.role==="terminal"&&n.state!=="delayed"&&i!==null?Math.max(0,i)*e*2.6/3600:0);return{power:i,energy:s,carbon:s===null||n.role!=="terminal"||n.state==="delayed"?null:s*Eu,quality:n.state==="delayed"?"最后有效值 · 已延迟":n.role==="passive"?"空间资产 · 无能耗测点":n.role==="terminal"?"模拟活动数据 / 计算碳排":"能流或状态示例 · 不独立计碳",soc:n.role==="storage"?61:void 0,temperature:n.role==="storage"?n.state==="warning"?38:29:void 0}}function wu(n){return eo.filter(e=>e.objectId===n&&e.role==="terminal").reduce((e,t)=>e+(t.basePower??0),0)}const YS=eo.filter(n=>n.state!=="normal").map((n,e)=>({id:"IA-"+(1001+e),title:n.name+(n.state==="delayed"?"数据延迟":"需核对"),objectId:n.objectId,buildingId:n.buildingId,assetId:n.id,level:n.state==="delayed"?"offline":"warning",time:"10:"+String(20+e).padStart(2,"0"),text:n.evidence+" "+n.recommendation})),qS=Ic.sources,In=[{id:"ent-a",name:"青源材料",type:"企业厂房",area:"enterprise",owner:"青源材料有限公司",health:"normal",description:"生产区 A · 已接入电力与天然气计量点"},{id:"ent-b",name:"蓝川装备",type:"企业厂房",area:"enterprise",owner:"蓝川装备有限公司",health:"warning",description:"生产区 B · 屋顶光伏已接入"},{id:"ent-c",name:"新桥电子",type:"企业厂房",area:"enterprise",owner:"新桥电子有限公司",health:"warning",description:"生产区 C · 近期用电波动超出演示阈值"},{id:"ent-d",name:"丰源科技",type:"企业厂房",area:"enterprise",owner:"丰源科技有限公司",health:"warning",description:"生产区 D · 已接入电、热数据"},{id:"ent-e",name:"启衡精工",type:"企业厂房",area:"enterprise",owner:"启衡精工有限公司",health:"offline",description:"生产区 E · 一个计量点超过同步时限"},{id:"ent-f",name:"沐光智造",type:"企业厂房",area:"enterprise",owner:"沐光智造有限公司",health:"normal",description:"生产区 F · 屋顶光伏与储能协同示例"},{id:"public-center",name:"园区服务中心",type:"公共建筑",area:"public",owner:"园区管委会",health:"normal",description:"公共区域 · 办公与展示中心"},{id:"energy-sub",name:"综合变电站",type:"能源设施",area:"energy",owner:"园区能源服务单位",health:"warning",description:"负责电力受入与分配；数据作为园区核算边界参考"},{id:"energy-storage",name:"储能与充电区",type:"能源设施",area:"energy",owner:"园区能源服务单位",health:"warning",description:"储能和公共充电设施 · 设备状态为演示数据"}].map(n=>{const e=an.find(o=>o.objectId===n.id),t=kn.filter(o=>o.objectId===n.id),i=t.find(o=>o.primary),s=eo.filter(o=>o.objectId===n.id),r=s.some(o=>o.state==="delayed")?"offline":s.some(o=>o.state==="warning")?"warning":"normal";return{...n,health:r,powerKw:n.area==="energy"?null:wu(n.id),carbonT:zS(n.id),description:{"ent-a":"材料部件加工与常温仓储 · 模拟电气化生产","ent-b":"装备加工与装配 · 生产及空压计量示例","ent-c":"电子研发与可靠性测试 · 任务状态与用能联动","ent-d":"精密加工与换热辅助用房 · 热源待配置","ent-e":"精工制造 · 建筑总表模拟数据延迟","ent-f":"新能源控制器装配与测试 · 屋顶光伏示例"}[n.id]??n.description,x:e.x,z:e.z,width:e.width,depth:e.depth,height:i.height,entityId:e.entityId,zoneId:e.id,template:i.template,buildingIds:t.map(o=>o.id),assetIds:Ln.filter(o=>o.objectId===n.id).map(o=>o.id)}}),At={year:2025,electricityMwh:Aa,energyTce:null,co2T:Td,intensity:null,target:null,cleanerEnergyPct:Number(OS.toFixed(1)),fuelT:0,conversionT:0,electricityHeatT:Td,industrialProcessT:0},Cd=[{id:"core",name:"单位能耗碳排放",value:"暂不计算",target:"需匹配综合能耗规模档",status:"insufficient",evidence:ks.tce},{id:"clean",name:"清洁能源消费占比",value:At.cleanerEnergyPct+"%",target:"≥ 90%",status:"fail",evidence:"全电场景：1200 MWh 绿电 + 400 MWh 光伏 / 3600 MWh 用电，凭证为假设"},{id:"product",name:"园区企业产出产品单位能耗",value:"待补齐",target:"达到或优于二级能耗限额标准",status:"insufficient",evidence:"两家企业尚未配置适用产品标准及产量证据"},{id:"waste",name:"工业固废综合利用率",value:"76.4%",target:"≥ 80%",status:"fail",evidence:"演示固废台账 · 与目标相差 3.6 个百分点"},{id:"heat",name:"余热/余冷/余压综合利用率",value:"46.0%",target:"≥ 50%",status:"fail",evidence:"演示回收量及可回收量台账 · 加权计算待复核"},{id:"water",name:"工业用水重复利用率",value:"83.2%",target:"≥ 80%",status:"pass",evidence:"演示用水台账"}],Pd=eo.filter(n=>n.meterId&&n.role!=="storage"),El=[{id:"ds-electric",name:"建筑与设备示例测点",type:"自动采集",count:Pd.length,online:Pd.filter(n=>n.state!=="delayed").length,frequency:"2.6 秒模拟",state:"partial"},{id:"ds-state",name:"BMS 状态与告警",type:"系统接口",count:2,online:2,frequency:"2.6 秒模拟",state:"normal"},{id:"ds-process",name:"生产/试验任务示例",type:"企业填报",count:6,online:6,frequency:"场景状态",state:"normal"}],Gn=YS;function jS(n=0){return Array.from({length:24},(e,t)=>{const i=t,r=an.reduce((o,a)=>o+wu(a.objectId),0)/1e3*(.7+.22*Math.sin((i-7)*Math.PI/12)+.08*Math.sin(i*Math.PI/5));return{hour:`${String(i).padStart(2,"0")}:00`,demand:Math.max(.1,Number((r+(t===23?.012*Math.sin(n/2):0)).toFixed(2))),solar:Number(Math.max(0,.28*Math.sin((i-6)*Math.PI/12)).toFixed(2))}})}const KS={pass:"达到试行目标",fail:"未达到试行目标",insufficient:"数据不足",review:"待核实"};function ZS(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Jt;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let y=0;y<f.count;++y)h.push(f.getX(y)+u);u+=n[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Id(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let S=0;S<o[u].length;++S)f.push(o[u][S][d]);const y=Id(f);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(y)}}return l}function Id(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new wn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let y=0;y<t;y++){const S=u.getComponent(d,y);a.setComponent(d+h,y,S)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}const Dd={enterprise:6072575,public:15776853,energy:10400197};function JS(){const n=[],e=new ii(1,1,1),t=new Set([e]);function i(k){const U=document.createElement("canvas");U.width=U.height=128;const P=U.getContext("2d");if(P.fillStyle=k==="panel"?"#123b62":k==="glass"?"#5c96ab":"#a5aeb4",P.fillRect(0,0,128,128),k==="stone"||k==="asphalt"){let D=7413;const I=()=>(D=Math.imul(D,1664525)+1013904223>>>0,D/4294967296);for(let ee=0;ee<1200;ee++){const he=Math.floor(85+I()*90);P.fillStyle=`rgba(${he},${he},${he},${k==="stone"?.065:.12})`,P.fillRect(I()*128,I()*128,1,1)}if(k==="stone"){P.strokeStyle="#ffffff19",P.lineWidth=1;for(let ee=0;ee<128;ee+=32)P.beginPath(),P.moveTo(0,ee),P.lineTo(128,ee),P.stroke()}}else{P.strokeStyle=k==="panel"?"#76bfe790":"#c1e5eb70",P.lineWidth=1;for(let D=0;D<=128;D+=k==="panel"?16:32)P.beginPath(),P.moveTo(D,0),P.lineTo(D,128),P.stroke();for(let D=0;D<=128;D+=k==="panel"?32:64)P.beginPath(),P.moveTo(0,D),P.lineTo(128,D),P.stroke()}const L=new bc(U);return L.colorSpace=Yt,L.wrapS=L.wrapT=ia,L.repeat.set(k==="asphalt"?4:1,k==="asphalt"?4:1),n.push(L),L}const s={yard:new Et({color:4541523,roughness:.95,map:i("stone")}),road:new Et({color:3159356,roughness:.98,map:i("asphalt")}),curb:new Et({color:9607326,roughness:.86}),wall:new Et({color:13159376,roughness:.78,map:i("stone")}),warmWall:new Et({color:13684679,roughness:.84,map:i("stone")}),white:new Et({color:15001320,roughness:.55,metalness:.13}),steel:new Et({color:10002344,roughness:.38,metalness:.65}),dark:new Et({color:3489355,roughness:.56,metalness:.35}),roof:new Et({color:6911104,roughness:.62,metalness:.4}),glass:new Et({color:4353167,roughness:.23,metalness:.45,map:i("glass"),emissive:1385269,emissiveIntensity:.08}),solar:new Et({color:9681629,map:i("panel"),roughness:.28,metalness:.55}),asphaltMark:new Gt({color:12833750}),leaf:new Et({color:6391144,roughness:1}),leaf2:new Et({color:7636579,roughness:1}),trunk:new Et({color:6907740,roughness:1}),hedge:new Et({color:4611658,roughness:1}),cyan:new Gt({color:6072575}),mint:new Gt({color:10400197}),gold:new Gt({color:15776853})},r=document.createElement("canvas");r.width=r.height=64;const o=r.getContext("2d"),a=o.createRadialGradient(32,32,12,32,32,32);a.addColorStop(0,"rgba(0,9,17,.5)"),a.addColorStop(1,"rgba(0,9,17,0)"),o.fillStyle=a,o.fillRect(0,0,64,64);const l=new bc(r);n.push(l);const c=new Gt({map:l,transparent:!0,depthWrite:!1});function u(k,U,P,L,D=!1){const I=new at(e,L);return I.scale.set(...U),I.position.set(...P),I.castShadow=D,I.receiveShadow=!0,k.add(I),I}function h(k,U,P,L){t.add(U);const D=new Sc(U,P,L.length),I=new Nt;return L.forEach((ee,he)=>{I.position.set(ee.x,ee.y,ee.z),I.rotation.set(ee.rx??0,ee.ry??0,ee.rz??0),I.updateMatrix(),D.setMatrixAt(he,I.matrix)}),D.instanceMatrix.needsUpdate=!0,D.receiveShadow=!0,k.add(D),D}function d(k,U,P,L){return h(k,new ii(...U),P,L)}function f(k,U,P,L,D){return h(k,new wa(U,U,P,10),L,D)}function y(k,U,P){const L=new op(new Jt().setFromPoints(U),new rp({color:P}));return k.add(L),L}function S(k,U,P,L=!1){const D=[],I=[],ee=Math.max(3,Math.floor((U.width-1)/1.25)),he=Math.max(2,Math.floor((U.depth-1.6)/1.7));for(let G=0;G<ee;G++)for(let pe=0;pe<he;pe++){const Me=-U.width/2+1+G*(U.width-2)/(ee-1),He=-U.depth/2+1+pe*(U.depth-2)/(he-1),Xe=L?.65*(1-Math.abs(Me)/(U.width/2)):0;D.push({x:Me,y:P+.16+Xe,z:He,rx:L?0:-.12,rz:L?Me<0?.14:-.14:0}),I.push({x:Me,y:P+.08+Xe,z:He})}d(k,[1.08,.065,1.3],s.solar,D),d(k,[.06,.16,.9],s.steel,I)}function g(k,U,P,L){const D=[-U/2,L,-P/2,U/2,L,-P/2,0,L+.65,-P/2,-U/2,L,P/2,U/2,L,P/2,0,L+.65,P/2],I=new Jt;I.setAttribute("position",new Rt(D,3)),I.setIndex([0,2,1,3,4,5,0,3,5,0,5,2,2,5,4,2,4,1,0,1,4,0,4,3]),I.computeVertexNormals(),I.setAttribute("uv",new Rt(new Array(12).fill(0),2)),t.add(I);const ee=new at(I,s.roof);ee.castShadow=!0,k.add(ee)}function m(k,U,P=!1){const L=P?Math.max(2,Math.floor(U.height/1.6)):2,D=[],I=[],ee=Math.max(4,Math.floor(U.width/1.35));for(let G=0;G<L;G++)for(let pe=0;pe<ee;pe++){const Me={x:-U.width/2+.75+pe*(U.width-1.5)/(ee-1),y:.7+(G+.6)*(U.height-.6)/L,z:U.depth/2+.045};D.push(Me),I.push({...Me,y:Me.y-.29})}d(k,[P?U.width/(ee+1):.82,P?1.08:.48,.08],s.glass,D),d(k,[P?U.width/(ee+1)+.05:.9,.045,.12],s.white,I);const he=[];for(let G=0;G<Math.floor(U.depth/1.7);G++)he.push({x:U.width/2+.04,y:U.height*.6,z:-U.depth/2+.9+G*1.6,ry:Math.PI/2});d(k,[1.1,.6,.06],s.glass,he)}function R(k,U,P,L){u(k,[P.width,P.height,P.depth],[0,P.height/2+.2,0],P.template==="warehouse"?s.warmWall:s.wall,!0),P.template==="warehouse"?g(k,P.width+.25,P.depth+.2,P.height+.2):(u(k,[P.width+.2,.15,P.depth+.2],[0,P.height+.27,0],s.white),u(k,[P.width-.2,.08,P.depth-.2],[0,P.height+.4,0],s.roof),d(U,[P.width-.9,.22,.54],s.glass,[-P.depth*.24,P.depth*.2].map(I=>({x:0,y:P.height+.55,z:I})))),m(U,P);const D=[];for(let I=0;I<=6;I++)D.push({x:-P.width/2+I*P.width/6,y:P.height/2+.2,z:P.depth/2+.09});d(U,[.075,P.height,.13],s.white,D);for(const I of[-P.width*.25,P.width*.22])u(U,[1.65,1.9,.13],[I,1.17,P.depth/2+.09],s.dark),d(U,[1.5,.045,.15],s.steel,[.5,.9,1.3,1.7].map(ee=>({x:I,y:ee,z:P.depth/2+.18}))),u(U,[2,.12,1],[I,2.2,P.depth/2+.48],s.white),u(U,[2,.1,.9],[I,.22,P.depth/2+.52],s.curb);L?S(U,P,P.height+.45,P.template==="warehouse"):(d(U,[1.3,.4,1],s.steel,[-P.width*.2,P.width*.2].map(I=>({x:I,y:P.height+.65,z:-P.depth*.18}))),f(U,.17,.55,s.steel,[-1.2,0,1.2].map(I=>({x:I,y:P.height+.72,z:P.depth*.26}))))}function b(k,U,P,L){u(k,[P.width,P.height*.66,P.depth],[0,P.height*.33+.2,0],s.wall,!0),u(k,[P.width*.68,P.height*.34,P.depth*.85],[-P.width*.14,P.height*.83+.2,-P.depth*.06],s.white,!0),u(k,[P.width+.15,.12,P.depth+.15],[0,P.height*.66+.28,0],s.white),u(U,[P.width*.3,.08,P.depth*.74],[P.width*.34,P.height*.66+.38,-.15],s.dark),m(U,P,!0),d(U,[.075,P.height*.62,.13],s.white,[-P.width*.4,-P.width*.2,0,P.width*.2,P.width*.4].map(D=>({x:D,y:P.height*.35,z:P.depth/2+.13}))),u(U,[2.3,1.75,.1],[0,1.1,P.depth/2+.15],s.glass),u(U,[3.1,.12,1.2],[0,2.24,P.depth/2+.55],s.white);for(let D=0;D<3;D++)u(U,[3.2+D*.25,.08,.35],[0,.3-D*.06,P.depth/2+.7+D*.34],s.curb);L?S(U,{...P,width:P.width*.61,depth:P.depth*.78},P.height+.3):d(U,[1.5,.3,1.2],s.steel,[-1.6,.5].map(D=>({x:D,y:P.height+.38,z:-.4})))}function x(k,U,P){u(k,[P.width,P.height*.75,P.depth],[0,P.height*.375+.2,0],s.glass,!0),u(k,[P.width+.4,.16,P.depth+.35],[0,P.height*.75+.27,0],s.white),u(k,[P.width*.65,P.height*.25,P.depth*.7],[-P.width*.14,P.height*.875+.2,-P.depth*.12],s.wall,!0),u(k,[P.width*.68,.15,P.depth*.73],[-P.width*.14,P.height+.27,-P.depth*.12],s.white),m(U,{...P,height:P.height*.75},!0),d(U,[.11,P.height*.75,.15],s.white,Array.from({length:9},(L,D)=>({x:-P.width/2+.3+D*(P.width-.6)/8,y:P.height*.375+.2,z:P.depth/2+.14}))),u(U,[4.2,.15,1.6],[0,2.5,P.depth/2+.6],s.white),d(U,[.15,2.3,.15],s.steel,[-1.8,1.8].map(L=>({x:L,y:1.35,z:P.depth/2+1.25}))),u(U,[2.2,2.1,.12],[0,1.25,P.depth/2+.17],s.dark),u(U,[4.9,.12,1.5],[0,.2,P.depth/2+.7],s.curb),d(U,[1.2,.42,.45],s.hedge,[-4,4].map(L=>({x:L,y:.38,z:P.depth/2+.8})))}function F(k,U,P){u(k,[5.5,3.2,6.4],[-3,1.8,-.4],s.wall,!0),u(k,[5.8,.18,6.7],[-3,3.5,-.4],s.white),d(U,[.55,1.45,.1],s.dark,[-4.7,-3.6,-2.5,-1.4].map(L=>({x:L,y:1.75,z:2.85})));for(const L of[-2.6,0,2.6])u(k,[2.7,.22,2],[3,.3,L],s.curb),u(k,[1.7,1.2,1.2],[3,1.03,L],s.steel,!0),d(U,[.09,.95,1.25],s.dark,[-.93,.93].map(D=>({x:3+D,y:1.1,z:L}))),f(U,.12,.64,s.white,[-.48,0,.48].map(D=>({x:3+D,y:1.94,z:L}))),f(U,.19,.08,s.steel,[-.48,0,.48].flatMap(D=>[1.75,1.9,2.05].map(I=>({x:3+D,y:I,z:L}))));d(U,[.09,2.6,.09],s.steel,[-3.8,3.8].map(L=>({x:3,y:1.58,z:L}))),u(U,[.08,.07,7.6],[3,2.8,0],s.mint),y(U,[new z(3,2.7,-3.8),new z(-.15,2.7,-3.8),new z(-.15,.5,-3.8)],7443880),u(U,[1.2,.72,.75],[-4.5,3.9,-1.4],s.steel),y(U,[new z(.6,.45,4.1),new z(5.9,.45,4.1),new z(5.9,.45,-4.1)],10599105)}function N(k,U,P){for(const L of[-4.4,-1.65,1.1])u(k,[2.25,2.15,2.2],[L,1.33,-1.65],s.white,!0),u(k,[2.3,.14,2.3],[L,2.49,-1.65],s.dark),d(U,[.13,1.55,.07],s.steel,[-.8,-.4,0,.4,.8].map(D=>({x:L+D,y:1.25,z:-.49}))),u(U,[.7,.06,.08],[L,2.08,-.43],s.mint);u(k,[1.5,1.6,2.1],[4.05,1.05,-1.65],s.steel,!0),d(U,[.15,2.7,.15],s.steel,[-5,5].map(L=>({x:L,y:1.55,z:2}))),u(k,[11.25,.14,2.4],[0,2.96,2],s.roof),d(U,[1.07,.07,2.08],s.solar,Array.from({length:9},(L,D)=>({x:-4.65+D*1.16,y:3.09,z:2})));for(const L of[-3,0,3])u(U,[.32,1.15,.36],[L,.81,.94],s.white),u(U,[.22,.24,.05],[L,1.07,1.15],s.glass),y(U,[new z(L+.22,1.2,1),new z(L+.5,.6,1.25),new z(L+.16,.7,1.25)],5270395),d(U,[.035,.015,2.2],s.asphaltMark,[{x:L-1.1,y:.135,z:2.1},{x:L+1.1,y:.135,z:2.1}]);O(U,-3,2.2,s.steel),O(U,3,2.2,s.white)}function O(k,U,P,L){u(k,[1.05,.34,1.9],[U,.42,P],L),u(k,[.88,.29,.95],[U,.72,P-.1],s.glass),d(k,[.15,.25,.35],s.dark,[-.51,.51].flatMap(D=>[-.6,.6].map(I=>({x:U+D,y:.27,z:P+I}))))}function B(k){k.updateMatrixWorld(!0);const U=k.matrixWorld.clone().invert(),P=new Map;k.traverse(L=>{if(!(L instanceof at)||L.material instanceof Array||L.material.transparent||L.userData.assetId)return;let D=L.parent;for(;D&&D!==k;){if(D.userData.keepSeparate)return;D=D.parent}const I=`${L.material.uuid}:${L.castShadow}`;let ee=P.get(I);ee||(ee={material:L.material,geometries:[],meshes:[],cast:L.castShadow},P.set(I,ee));const he=U.clone().multiply(L.matrixWorld);if(L instanceof Sc){const G=new ft;for(let pe=0;pe<L.count;pe++)L.getMatrixAt(pe,G),ee.geometries.push(L.geometry.clone().applyMatrix4(he.clone().multiply(G)))}else ee.geometries.push(L.geometry.clone().applyMatrix4(he));ee.meshes.push(L)}),P.forEach(L=>{if(L.meshes.length<2){L.geometries.forEach(ee=>ee.dispose());return}const D=ZS(L.geometries);if(L.geometries.forEach(ee=>ee.dispose()),!D)return;L.meshes.forEach(ee=>ee.removeFromParent());const I=new at(D,L.material);I.castShadow=L.cast,I.receiveShadow=!0,k.add(I)})}function A(k){const U=new rn;U.position.set(k.x,0,k.z),U.userData.objectId=k.id;const P=[],L=an.find(G=>G.id===k.zoneId);u(U,[L.width-.15,.07,L.depth-.15],[0,.075,0],s.yard);const D=kn.filter(G=>G.objectId===k.id);for(const G of D){const pe=new rn;pe.position.set(G.x-k.x,G.elevation??0,G.z-k.z),pe.rotation.y=G.rotationY??0,pe.userData.buildingId=G.id,pe.userData.keepSeparate=!0,pe.userData.assetIds=Ln.filter(ue=>ue.buildingId===G.id).map(ue=>ue.id),U.add(pe);const Me=new rn;Me.userData.keepSeparate=!0,pe.add(Me),P.push(Me);const He=Math.min(G.width+1.5,2*(L.width/2-Math.abs(G.x-k.x))),Xe=Math.min(G.depth+1.5,2*(L.depth/2-Math.abs(G.z-k.z))),le=new at(new ds(He,Xe),c);if(le.rotation.x=-Math.PI/2,le.position.y=.118,pe.add(le),G.template==="substation")F(pe,Me);else if(G.template==="storage")N(pe,Me);else{u(pe,[G.width+.3,.12,G.depth+.3],[0,.17,0],s.curb);const ue=Ln.some(Se=>Se.kind==="solar"&&Se.buildingId===G.id);G.template==="research"?b(pe,Me,G,ue):G.template==="office"?x(pe,Me,G):G.template==="utility"?(u(pe,[G.width,G.height,G.depth],[0,G.height/2+.2,0],s.wall,!0),u(pe,[G.width+.2,.1,G.depth+.2],[0,G.height+.25,0],s.roof),m(Me,G)):R(pe,Me,G,ue)}if(Ln.some(ue=>ue.kind==="meter"&&ue.buildingId===G.id)){const ue=G.width/2-.55,Se=Math.min(G.depth/2+.4,L.depth/2-(G.z-k.z)-.3),ke=u(Me,[.5,1.1,.3],[ue,.8,Se],s.white);ke.userData.assetId=Ln.find(de=>de.kind==="meter"&&de.buildingId===G.id).id,u(Me,[.3,.22,.035],[ue,.97,Se+.17],s.glass),u(Me,[.27,.05,.035],[ue,.6,Se+.18],k.health==="normal"?s.mint:s.gold)}Ln.some(ue=>ue.kind==="heat"&&ue.buildingId===G.id)&&(d(Me,[1,.65,.65],s.steel,[-1.4,1.4].map(ue=>({x:ue,y:G.height+.58,z:0}))),y(Me,[new z(-1.4,G.height+.8,0),new z(1.4,G.height+.8,0)],14596470)),B(Me),B(pe)}const I=D.find(G=>G.primary),ee=new z(I.x,I.height+(I.template==="warehouse"?1.2:1),I.z),he=new at(new vu(1.05,1.28,40),new Gt({color:Dd[k.area],transparent:!0,opacity:0,depthWrite:!1,side:bn}));return he.rotation.x=-Math.PI/2,he.position.set(I.x-k.x,.125,I.z-k.z),U.add(he),B(U),{group:U,details:P,halo:he,labelPosition:ee}}function T(k,U){const P=qs.map(I=>({...I,width:I.width+(U?.7:0),depth:I.depth+(U?.7:0)})),L=[...new Set(P.flatMap(I=>[I.x-I.width/2,I.x+I.width/2]))].sort((I,ee)=>I-ee),D=[...new Set(P.flatMap(I=>[I.z-I.depth/2,I.z+I.depth/2]))].sort((I,ee)=>I-ee);for(let I=0;I<L.length-1;I++)for(let ee=0;ee<D.length-1;ee++){const he=(L[I]+L[I+1])/2,G=(D[ee]+D[ee+1])/2;P.some(pe=>Math.abs(he-pe.x)<pe.width/2&&Math.abs(G-pe.z)<pe.depth/2)&&u(k,[L[I+1]-L[I],U?.07:.02,D[ee+1]-D[ee]],[he,U?.06:.11,G],U?s.curb:s.road)}}function H(k){const U=new rn;k.add(U),u(U,[77,.3,65],[.5,-.18,.5],s.dark),u(U,[75,.055,63],[.5,.002,.5],s.yard),T(U,!0),T(U,!1);const P=[];for(const G of qs){const pe=G.horizontal?G.width:G.depth;for(let Me=-pe/2+1;Me<pe/2-1;Me+=2.8){const He=G.x+(G.horizontal?Me:0),Xe=G.z+(G.horizontal?0:Me);qs.some(le=>le.horizontal!==G.horizontal&&Math.abs(He-le.x)<le.width/2+.8&&Math.abs(Xe-le.z)<le.depth/2+.8)||P.push({x:He,y:.132,z:Xe,ry:G.horizontal?0:Math.PI/2})}}d(U,[1.25,.012,.045],s.asphaltMark,P);const L=[];for(const G of[-18,-2,16])for(let pe=0;pe<6;pe++)L.push({x:G-1.5+pe*.6,y:.134,z:-4.7});d(U,[.32,.012,1.1],s.asphaltMark,L);const D=[];for(let G=-37;G<=38;G+=2.8)D.push({x:G,y:.8,z:-31},{x:G,y:.8,z:32});for(let G=-31;G<=32;G+=2.8)D.push({x:38,y:.8,z:G}),(G<hn.z-hn.width/2||G>hn.z+hn.width/2)&&D.push({x:-37,y:.8,z:G});d(U,[.075,1.4,.075],s.steel,D);for(const G of[.65,1.25]){u(U,[75,.04,.04],[.5,G,-31],s.steel),u(U,[75,.04,.04],[.5,G,32],s.steel),u(U,[.04,.04,63],[38,G,.5],s.steel);const pe=[[-31,hn.z-hn.width/2],[hn.z+hn.width/2,32]];for(const[Me,He]of pe)u(U,[.04,.04,He-Me],[-37,G,(Me+He)/2],s.steel)}d(U,[.26,3.5,.26],s.white,[-5.8/2,hn.width/2].map(G=>({x:-36.7,y:1.87,z:hn.z+G}))),u(U,[.7,.32,hn.width+.5],[-36.7,3.5,hn.z],s.white),u(U,[.73,.06,hn.width+.5],[-36.7,3.7,hn.z],s.cyan),u(U,[2.5,1.9,2.8],[-35,1.05,4.6],s.white,!0),u(U,[.04,.7,1.8],[-33.72,1.1,4.6],s.glass),u(U,[2.8,.14,3.1],[-35,2.06,4.6],s.roof),u(U,[.09,.08,2],[-34.6,1,-2.8],s.gold);const I=[];for(let G=-33;G<35;G+=5.6)I.push({x:G,y:.8,z:-30},{x:G+.7,y:.8,z:31});for(const G of an)I.push({x:G.x-G.width/2+.65,y:.8,z:G.z+G.depth/2-.8},{x:G.x+G.width/2-.65,y:.8,z:G.z+G.depth/2-.8}),u(U,[1.5,.25,.45],[G.x-G.width/2+1.2,.25,G.z+G.depth/2-1.8],s.hedge);f(U,.1,1.3,s.trunk,I),h(U,new ca(.72,1),s.leaf,I.map(G=>({...G,y:2.03}))),h(U,new ca(.5,1),s.leaf2,I.map(G=>({...G,x:G.x+.35,y:1.72,z:G.z+.2})));const ee=[];for(const G of[-31,-23,-13,-6,5,12,23,32])ee.push({x:G,y:1.45,z:1.85});d(U,[.095,2.65,.095],s.steel,ee),d(U,[.5,.12,.28],s.cyan,ee.map(G=>({...G,y:2.82})));const he=[];for(let G=0;G<6;G++)he.push({x:21+G*2,y:.137,z:-22.5});return d(U,[.05,.012,2.4],s.asphaltMark,he),O(U,22,-22.5,s.white),O(U,26,-22.5,s.steel),O(U,30,-22.5,s.white),u(U,[3.2,.95,1.35],[-29,.74,-1.5],s.white),u(U,[.95,.8,1.3],[-26.96,.68,-1.5],s.steel),d(U,[.34,.35,.18],s.dark,[-29.9,-27.9,-26.85].flatMap(G=>[-.69,.69].map(pe=>({x:G,y:.34,z:-1.5+pe})))),B(U),U}function K(k){const U=new rn;k.add(U);const P=new Map;for(const L of an){const D=new rn;U.add(D);const I=Dd[L.kind],ee=new mp(L.polygon.map(([Me,He])=>new be(Me,-He))),he=new Gt({color:I,opacity:.07,transparent:!0,depthWrite:!1,side:bn}),G=new at(new xu(ee),he);G.rotation.x=-Math.PI/2,G.position.y=.126,D.add(G);const pe=y(D,[...L.polygon,L.polygon[0]].map(([Me,He])=>new z(Me,.145,He)),I);P.set(L.id,{group:D,fill:he,line:pe.material})}return y(U,[...wd,wd[0]].map(([L,D])=>new z(L,.15,D)),8377831),{root:U,zones:P}}return{createObject:A,addEnvironment:H,addBoundaries:K,textures:n,resources:t,materials:[...Object.values(s),c],unitBox:e,roadMaterial:s.road}}function QS(n,e){const t=FS();if(t.length)throw new Error(t.join(`
`));const i=new fu;i.background=new tt(1646375),i.fog=new du(1646375,.0024);const s=new fn(42,n.clientWidth/Math.max(1,n.clientHeight),.2,400),r=new Cp({antialias:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio||1,n.clientWidth<650?1.25:1.5)),r.setSize(n.clientWidth,n.clientHeight),r.outputColorSpace=Yt,r.toneMapping=eu,r.toneMappingExposure=1.12,r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!1,r.shadowMap.type=Jc;const o=r.domElement;o.className="park-canvas",n.appendChild(o);const a=new Rc(r),l=new US,c=a.fromScene(l,.04);i.environment=c.texture,i.environmentIntensity=.36,l.dispose(),a.dispose();const u=new Ip(s,o);u.enableDamping=!0,u.dampingFactor=.12,u.minDistance=18,u.maxDistance=200,u.minPolarAngle=.25,u.maxPolarAngle=Math.PI*.43,i.add(new yp(15922423,4277579,2.15));const h=new ua(16775147,2.7);h.position.set(-42,64,30),h.castShadow=!0,h.shadow.mapSize.set(1536,1536),h.shadow.camera.left=-55,h.shadow.camera.right=55,h.shadow.camera.top=55,h.shadow.camera.bottom=-55,h.shadow.camera.far=150,h.shadow.normalBias=.055,i.add(h);const d=new ua(14279408,.8);d.position.set(34,22,-30),i.add(d);const f=JS();f.addEnvironment(i);const y=f.addBoundaries(i),S=new Map,g=new Map;for(const w of In){const _=f.createObject(w);S.set(w.id,_),i.add(_.group);const p=document.createElement("button");p.type="button",p.className=`park-label park-label--${w.area}`,p.setAttribute("aria-label",`定位 ${w.name}`);const W=document.createElement("span");W.className="park-label__dot";const V=document.createElement("span");V.textContent=w.name,p.append(W,V),p.addEventListener("click",()=>e(w.id)),n.appendChild(p),g.set(w.id,p)}const m=new Gt,R=new ii(1,1,1),b=kn.map(w=>{const _=new at(R,m);return _.scale.set(w.width,w.height+1,w.depth),_.position.set(w.x,(w.elevation??0)+(w.height+1)/2,w.z),_.rotation.y=w.rotationY??0,_.userData.objectId=w.objectId,_.updateMatrixWorld(!0),_}),x=new bp,F=new be,N=new z(40,43,52).normalize();let O=null,B="all",A=!0,T=!1,H=0,K=0,k=null,U=!1,P=null,L=n.clientWidth<650,D=null;function I(){!T&&!H&&(H=requestAnimationFrame(Xe))}function ee(w,_=!0){const p=new Hi;for(const Y of w)p.expandByPoint(new z(Y.x-Y.width/2,0,Y.z-Y.depth/2)),p.expandByPoint(new z(Y.x+Y.width/2,5,Y.z+Y.depth/2));const W=p.getCenter(new z);W.y=w.length>2?-3:1;const V=new z(N.z,0,-N.x).normalize(),$=new z().crossVectors(N,V).normalize(),q=Math.tan($s.degToRad(s.fov/2)),re=q*s.aspect;let Z=22;for(const Y of[p.min.x,p.max.x])for(const me of[p.min.z,p.max.z]){const E=new z(Y,0,me).sub(W),M=E.dot(N);Z=Math.max(Z,M+Math.abs(E.dot(V))/(re*.88),M+Math.abs(E.dot($))/(q*(L?.67:.76)))}Z=Math.min(195,Z+6);const ie=W.clone().addScaledVector(N,Z);_&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches?D={start:performance.now(),fromPosition:s.position.clone(),toPosition:ie,fromTarget:u.target.clone(),toTarget:W}:(D=null,s.position.copy(ie),u.target.copy(W),u.update()),I()}function he(w=!0){const _=an.filter(p=>B==="all"||p.kind===B);B==="public"&&_.push(...qs),ee(_,w)}function G(){y.root.visible=A;for(const w of an){const _=y.zones.get(w.id),p=w.objectId===O,W=B==="all"||w.kind===B;_.fill.opacity=p?.08:W?.025:.01,_.line.opacity=p?.9:W?.4:.15,_.line.transparent=!0}f.roadMaterial.color.setHex(B==="public"&&A?5396829:3159356)}function pe(){return b.filter(w=>B==="all"||In.find(_=>_.id===w.userData.objectId)?.area===B)}function Me(w,_){const p=o.getBoundingClientRect();return F.set((w-p.left)/p.width*2-1,-(_-p.top)/p.height*2+1),x.setFromCamera(F,s),x.intersectObjects(pe(),!1)[0]?.object.userData.objectId}function He(){const w=[];let _=0;const p=n.parentElement?.querySelector(".scene-filters"),W=(p?p.offsetTop+p.offsetHeight:130)+18,V=In.filter($=>B==="all"||$.area===B).sort(($,q)=>+(q.id===O)-+($.id===O)||+(q.health==="warning")-+($.health==="warning")||s.position.distanceToSquared(S.get($.id).labelPosition)-s.position.distanceToSquared(S.get(q.id).labelPosition));g.forEach($=>{$.style.display="none"});for(const $ of V){const q=S.get($.id),re=g.get($.id),Z=$.id===O;if(L&&_>=3&&!Z)continue;const ie=q.labelPosition.clone().project(s);if(ie.z<-1||ie.z>1||!Z&&(Math.abs(ie.x)>1.02||Math.abs(ie.y)>1.02))continue;const Y=q.labelPosition.clone().sub(s.position),me=Y.length();if(x.set(s.position,Y.normalize()),!Z&&x.intersectObjects(pe().filter(Ae=>Ae.userData.objectId!==$.id),!1).some(Ae=>Ae.distance<me-.5))continue;re.classList.toggle("is-selected",Z),re.style.display="",re.style.visibility="hidden";const E=re.offsetWidth,M=re.offsetHeight,X=n.clientWidth,te=n.clientHeight,ce=$s.clamp((ie.x*.5+.5)*X,E/2+10,X-E/2-10),ne=(-ie.y*.5+.5)*te;if(!Z&&ne<W){re.style.display="none";continue}const Ee=$s.clamp(ne,W,te-(L&&O?170:65));let ge;for(const Ae of[0,-28,28,-56,56]){const Pe=Ee+Ae;if(!(Pe<W||Pe>te-65)&&!w.some(_e=>Math.abs(ce-_e.x)<(E+_e.w)/2+5&&Math.abs(Pe-_e.y)<(M+_e.h)/2+4)){ge=Pe;break}}if(ge===void 0){re.style.display="none";continue}re.style.left=`${ce}px`,re.style.top=`${ge}px`,re.style.visibility="visible",w.push({x:ce,y:ge,w:E,h:M}),_++}o.dataset.visibleLabels=String(_)}function Xe(w){if(H=0,T)return;if(D){const W=Math.min(1,(w-D.start)/560),V=1-Math.pow(1-W,3);s.position.lerpVectors(D.fromPosition,D.toPosition,V),u.target.lerpVectors(D.fromTarget,D.toTarget,V),W===1&&(D=null)}const _=u.update();for(const[W,V]of S){V.halo.material.opacity=W===O?.48:0;const $=s.position.distanceTo(V.labelPosition)<(L?220:155);V.details.forEach(q=>{q.visible=$})}P&&!U&&(o.style.cursor=Me(P.x,P.y)?"pointer":"grab",P=null);const p=performance.now();r.render(i,s),He(),K++,o.dataset.drawCalls=String(r.info.render.calls),o.dataset.triangles=String(r.info.render.triangles),o.dataset.geometries=String(r.info.memory.geometries),o.dataset.textures=String(r.info.memory.textures),o.dataset.renderCount=String(K),o.dataset.renderMs=(performance.now()-p).toFixed(2),(D||_)&&I()}function le(w){k={x:w.clientX,y:w.clientY},U=!1,D=null}function ue(w){const _=k;if(k=null,U=!1,!_||Math.hypot(w.clientX-_.x,w.clientY-_.y)>6)return;const p=Me(w.clientX,w.clientY);p&&e(p)}function Se(w){U=!!(k&&Math.hypot(w.clientX-k.x,w.clientY-k.y)>6),P={x:w.clientX,y:w.clientY},I()}function ke(){k=null,U=!1,P=null}u.addEventListener("change",I),o.addEventListener("pointerdown",le),o.addEventListener("pointerup",ue),o.addEventListener("pointermove",Se),o.addEventListener("pointercancel",ke);const de=new ResizeObserver(()=>{if(T)return;const w=Math.max(1,n.clientWidth),_=Math.max(1,n.clientHeight);s.aspect=w/_,s.updateProjectionMatrix(),r.setSize(w,_),r.setPixelRatio(Math.min(window.devicePixelRatio||1,w<650?1.25:1.5)),L=w<650,he(!1),I()});return de.observe(n),he(!1),G(),r.shadowMap.needsUpdate=!0,I(),{select(w,_=!1){if(O=w,G(),w&&_){const p=an.find(W=>W.objectId===w);p&&ee([p])}I()},setFilter(w){B=w;for(const _ of In)S.get(_.id).group.visible=w==="all"||_.area===w;G(),r.shadowMap.needsUpdate=!0,he(),I()},setBoundaries(w){A=w,G(),I()},reset(){he(),I()},dispose(){T=!0,cancelAnimationFrame(H),de.disconnect(),u.removeEventListener("change",I),u.dispose(),o.removeEventListener("pointerdown",le),o.removeEventListener("pointerup",ue),o.removeEventListener("pointermove",Se),o.removeEventListener("pointercancel",ke),g.forEach(p=>p.remove());const w=new Set([...f.resources,R]),_=new Set([...f.materials,m]);i.traverse(p=>{(p instanceof at||p instanceof op)&&(w.add(p.geometry),(Array.isArray(p.material)?p.material:[p.material]).forEach(W=>_.add(W)))}),w.forEach(p=>p.dispose()),_.forEach(p=>p.dispose()),f.textures.forEach(p=>p.dispose()),c.dispose(),h.shadow.dispose(),r.dispose(),o.remove()}}}const eb=fs({__name:"ParkCanvas",props:{selectedId:{},filter:{},boundaries:{type:Boolean}},emits:["select"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=ot(null);let o=null;ir(()=>{r.value&&(o=QS(r.value,l=>s("select",l)),o.setFilter(i.filter),o.setBoundaries(i.boundaries),o.select(i.selectedId,!!i.selectedId))}),as(()=>[i.selectedId,i.filter],([l,c],[u,h])=>{c!==h&&o?.setFilter(c),o?.select(l,!!(l&&(l!==u||c!==h)))}),as(()=>i.boundaries,l=>o?.setBoundaries(l)),sr(()=>o?.dispose());function a(){o?.reset()}return e({resetView:a}),(l,c)=>(Le(),Fe("div",{ref_key:"host",ref:r,class:"park-scene","aria-label":"可旋转的三维园区示意场景"},null,512))}});function tb(n,e,t,i){const s=new fu;s.background=new tt(1646375);const r=new fn(40,1,.1,250),o=new Cp({antialias:!0,powerPreference:"high-performance"});o.setPixelRatio(Math.min(devicePixelRatio,1.5)),o.outputColorSpace=Yt,o.toneMapping=eu,o.toneMappingExposure=1.04,o.shadowMap.enabled=!0,o.shadowMap.type=Jc,o.shadowMap.autoUpdate=!1;const a=o.domElement;a.className="interior-canvas",n.appendChild(a);const l=new Ip(r,a);l.enableDamping=!0,l.dampingFactor=.13,l.minDistance=6,l.maxDistance=110,l.maxPolarAngle=Math.PI*.46,l.minPolarAngle=.18,s.add(new yp(15922423,4474702,2.6));const c=new ua(16775664,2.8);c.position.set(-15,25,22),c.castShadow=!0,c.shadow.mapSize.set(1024,1024),Object.assign(c.shadow.camera,{left:-18,right:18,top:18,bottom:-18,far:65}),c.shadow.normalBias=.04,s.add(c);const u=new ua(14147822,.85);u.position.set(20,15,-12),s.add(u);const h={white:new Et({color:14935528,roughness:.6}),steel:new Et({color:10002344,metalness:.55,roughness:.4}),blue:new Et({color:3565210,roughness:.55}),dark:new Et({color:3160388,roughness:.7}),glass:new Et({color:8955580,transparent:!0,opacity:.26,metalness:.15,roughness:.2}),gold:new Et({color:14987354,metalness:.35,roughness:.5}),green:new Et({color:6587252,roughness:.7}),floor:new Et({color:7830658,roughness:.95}),yellow:new Gt({color:15255662}),mint:new Gt({color:9548192}),screen:new Gt({color:6072575}),gray:new Gt({color:8624552})},d=new Set,f=new Set,y=new Set,S=new ii(1,1,1);d.add(S);function g(_,p,W,V=h.white){const $=new at(S,V);return $.scale.set(p[0],p[1],p[2]),$.position.set(W[0],W[1],W[2]),$.castShadow=!0,$.receiveShadow=!0,_.add($),$}function m(_,p,W,V,$=h.steel,q="y"){const re=new wa(p,p,W,12);d.add(re);const Z=new at(re,$);return Z.position.set(V[0],V[1],V[2]),q==="x"&&(Z.rotation.z=Math.PI/2),q==="z"&&(Z.rotation.x=Math.PI/2),Z.castShadow=!0,_.add(Z),Z}function R(_,p,W=9611703,V=.055){const $=new cp(p.map(Z=>new z(Z[0],Z[1],Z[2]))),q=new yu($,16,V,6,!1);d.add(q);const re=new Et({color:W,roughness:.6});f.add(re),_.add(new at(q,re))}function b(_,p,W,V,$){const q=document.createElement("canvas");q.width=512,q.height=64;const re=q.getContext("2d");re.fillStyle="#28333f",re.fillRect(0,0,512,64),re.fillStyle="#d8e0e8",re.font="30px Microsoft YaHei",re.textAlign="center",re.fillText(p,256,44);const Z=new bc(q);Z.colorSpace=Yt,y.add(Z);const ie=new Gt({map:Z});f.add(ie);const Y=new ds(5.5,.68);d.add(Y);const me=new at(Y,ie);me.position.set(W,V,$),_.add(me)}const x=new rn;s.add(x),g(x,[25,.22,18],[0,-.18,0],h.floor),g(x,[25,.3,18],[0,-.42,0],h.dark),g(x,[25,3.3,.18],[0,1.5,-8.9],h.white),g(x,[.18,3.3,18],[-12.45,1.5,0],h.white);for(const _ of[-12,-6,0,6,12])g(x,[.18,4,.18],[_,1.9,-8.6],h.steel),g(x,[.18,4,.18],[_,1.9,8.6],h.steel);const F=new rn;x.add(F),g(F,[25,.16,18],[0,4.1,0],h.white),F.visible=!1;const N=new rn;x.add(N);for(const _ of[-12,-6,0,6,12])g(N,[.15,.2,18],[_,3.9,0],h.steel);N.visible=!1;for(const _ of[-5.1,3.4])g(x,[.055,.025,16],[_,.01,0],h.yellow);for(let _=-7;_<=7;_+=2)g(x,[.9,.025,.075],[-.7,.015,_],h.yellow);b(x,t==="factory"?"生产 / 装配 · 公辅 · 计量":t==="warehouse"?"常温仓储 · 作业通道 · 物流计量":t==="research"?"测试 / 研发 · 机电保障":t==="substation"?"进线计量 → 变压器 → 企业 / 公共出线":"电池簇 · PCS / 温控 · 光伏 / 充电",0,2.8,-8.78),t==="factory"&&(R(x,[[-10,3.6,-8],[8,3.6,-8],[8,3.6,7]],6278058,.07),R(x,[[7.5,.3,-8],[7.5,.3,7]],15317094,.07));const O=new rn;s.add(O);const B=new Map,A=new Map,T=new Map,H=new Map,K=[],k=new Gt;function U(_){const p=new rn;O.add(p),p.position.set(_.x,0,_.z),p.userData.assetId=_.id,B.set(_.id,p);const W=Math.min(1.15,_.width/3.8,_.depth/2.3);p.scale.setScalar(Math.max(.6,W));const V=_.deviceType;if(V==="racks"&&p.scale.set(Math.min(1.8,_.width/3.8),1,Math.min(1.8,_.depth/2.3)),g(p,[3.7,.12,2.3],[0,.06,0],h.dark),["cnc","smt","molding"].includes(V))g(p,[3.1,.45,1.8],[0,.38,0],h.white),g(p,[.6,1.8,1.8],[-1.3,1.5,0],h.blue),g(p,[.35,1.8,1.8],[1.3,1.5,0],h.white),g(p,[2.2,.2,1.8],[.1,2.34,0],h.white),g(p,[2.15,1.5,.065],[.08,1.49,.86],h.glass),g(p,[.95,.08,.6],[0,.95,0],V==="smt"?h.green:h.steel),m(p,.1,.7,[0,1.65,0],h.steel),g(p,[.45,.6,.12],[1.5,1.65,1],h.dark),g(p,[.32,.32,.025],[1.5,1.77,1.07],h.screen),V==="molding"&&(m(p,.26,2.3,[-.6,1.25,-.25],h.steel,"x"),m(p,.38,.65,[-.6,2.35,-.25],h.gold));else if(["compressor","dryer","ups","meter","inverter"].includes(V)){const Y=V==="meter"?1.2:2.2;g(p,[Y,2.3,1.6],[0,1.25,0],h.white),g(p,[Y-.15,1.4,.04],[0,1.1,.82],h.blue);for(let me=.55;me<1.65;me+=.16)g(p,[Y-.4,.05,.07],[0,me,.85],h.steel);g(p,[.45,.36,.07],[.3,2.02,.85],h.screen),m(p,.07,.16,[-.25,2.02,.85],h.mint,"z"),V==="compressor"&&(m(p,.4,1.8,[1.3,1.1,-.1],h.steel),R(p,[[.8,1.5,0],[1.3,1.5,.5],[1.3,2.15,.5]]))}else if(V==="pump"||V==="heat"){if(m(p,.46,1.35,[-.7,.65,0],h.blue,"x"),m(p,.5,.5,[.5,.65,0],h.steel,"z"),R(p,[[.5,.7,.3],[1.1,.7,.3],[1.1,1.45,.3]],5160396,.1),V==="heat")for(let Y=0;Y<10;Y++)g(p,[.08,1.6,1.1],[Y*.12-.5,1.25,-.45],h.steel)}else if(["fan","chiller","ahu"].includes(V)){g(p,[3.1,1.8,1.65],[0,1.1,0],h.white);for(const Y of[-.8,.8]){m(p,.55,.15,[Y,1.25,.92],h.dark,"z");for(const me of[0,Math.PI/2]){const E=g(p,[.9,.08,.06],[Y,1.25,1.02],h.steel);E.rotation.z=me}}if(V==="chiller")for(const Y of[-.8,.8])m(p,.55,.12,[Y,2.1,0],h.dark),g(p,[.8,.04,.06],[Y,2.18,0],h.steel);V==="ahu"&&g(p,[1.8,.7,.8],[0,2.3,-.5],h.steel)}else if(V==="racks")for(let Y=0;Y<3;Y++){const me=Y*.7-.7;for(const E of[-1.6,0,1.6])g(p,[.075,2.8,.075],[E,1.45,me],h.blue);for(const E of[.6,1.4,2.2]){g(p,[3.25,.08,.5],[0,E,me],h.gold);for(const M of[-.85,.85])g(p,[1.2,.55,.4],[M,E+.32,me],h.white)}}else if(V==="conveyor"||V==="assembly"||V==="reflow"){g(p,[3.2,.22,1.1],[0,1,0],h.steel);for(const Y of[-1.2,1.2])g(p,[.12,.85,.75],[Y,.5,0],h.blue);for(let Y=-1.3;Y<1.4;Y+=.25)m(p,.055,1,[Y,1.17,0],h.dark,"z");for(const Y of[-.8,.1,.9])g(p,[.45,.07,.5],[Y,1.25,0],h.green);if(V==="reflow"){g(p,[2.7,.9,.75],[0,1.72,0],h.white);for(const Y of[-.9,0,.9])g(p,[.65,.08,.6],[Y,2.2,0],h.gold),m(p,.07,.4,[Y,2.4,-.2])}else V==="assembly"&&(g(p,[1,.4,.4],[-.4,1.5,-.35],h.white),g(p,[.6,.5,.06],[.9,1.6,-.3],h.screen))}else if(V==="forklift"){g(p,[1.5,.85,1.1],[-.5,.6,0],h.gold);for(const Y of[-1,.1])for(const me of[-.6,.6])m(p,.25,.16,[Y,.35,me],h.dark,"z");for(const Y of[-.4,.4])g(p,[.07,2.3,.07],[.55,1.3,Y],h.steel),g(p,[1.2,.08,.12],[1,.26,Y],h.steel);g(p,[.6,.85,.6],[-.8,1.36,0],h.glass),g(p,[.7,1.5,.55],[1.55,.9,-.65],h.white),R(p,[[1.55,1.25,-.3],[1.4,.3,-.15],[.1,.3,.3]],1121834,.05)}else if(V==="chamber"||V==="burnin"||V==="battery"||V==="pcs"){g(p,[2.8,.15,1.65],[0,.2,0],h.white),g(p,[2.8,.15,1.65],[0,2.75,0],h.white);for(const Y of[-1.35,1.35])g(p,[.14,2.55,1.65],[Y,1.45,0],h.white);g(p,[2.8,2.55,.1],[0,1.45,-.77],h.blue);for(let Y=.5;Y<2.5;Y+=.4)if(g(p,[2.5,.07,1.35],[0,Y,0],h.steel),V!=="chamber")for(const me of[-.75,.75])g(p,[1.05,.25,1.1],[me,Y+.16,0],h.dark),g(p,[.55,.045,.025],[me,Y+.15,.57],h.gold);V==="chamber"&&g(p,[2.4,2.2,.035],[0,1.5,.8],h.glass),g(p,[.5,.4,.06],[1.2,2.5,.86],h.screen),(V==="battery"||V==="pcs")&&R(p,[[-1.1,.45,.65],[-1.1,2.55,.65],[1.1,2.55,.65]],15053918,.035)}else if(V==="transformer"){g(p,[2.1,1.65,1.2],[0,1.05,0],h.steel);for(const Y of[-1.25,1.25])for(let me=-.65;me<.7;me+=.18)g(p,[.24,1.5,.09],[Y,1,me],h.white);for(const Y of[-.7,0,.7]){m(p,.1,.85,[Y,2.25,0]);for(let me=1.98;me<2.65;me+=.15)m(p,.18,.06,[Y,me,0],h.white)}}else if(V==="switchgear")for(const Y of[-1,0,1])g(p,[.9,2.65,1.2],[Y,1.45,0],h.white),g(p,[.65,1.7,.04],[Y,1.35,.62],h.blue),g(p,[.36,.32,.045],[Y,2.38,.65],h.screen),m(p,.07,.07,[Y,1.4,.68],h.gold,"z");else if(V==="charger")g(p,[.8,2.1,.5],[0,1.2,0],h.white),g(p,[.55,.52,.03],[0,1.85,.27],h.screen),R(p,[[.5,1.4,0],[1,.3,0],[.8,.4,.8],[.4,1,.3]],1121575,.045),g(p,[1.15,.4,1.8],[-1,.55,-.1],h.blue),g(p,[.9,.38,.85],[-1,.92,-.15],h.glass);else if(V==="lighting")for(const Y of[-1.2,0,1.2])g(p,[.06,2.5,.06],[Y,1.4,-.7],h.steel),g(p,[.85,.12,.5],[Y,2.75,-.4],h.white),g(p,[.75,.025,.4],[Y,2.67,-.4],h.screen);const $=new Gt({color:_.state==="warning"?15776853:_.state==="delayed"?9414324:6072575,transparent:!0,opacity:.1,side:bn,depthWrite:!1});f.add($);const q=new ds(_.width+.18,_.depth+.18);d.add(q);const re=new at(q,$);re.rotation.x=-Math.PI/2,re.position.set(_.x,.012,_.z),s.add(re),A.set(_.id,re);const Z=new at(S,k);Z.position.set(_.x,1.3,_.z),Z.scale.set(Math.min(_.width,4.4),2.8,Math.min(_.depth,2.8)),Z.userData.assetId=_.id,Z.updateMatrixWorld(),K.push(Z),T.set(_.id,new z(_.x,3.2*p.scale.y,_.z));const ie=document.createElement("button");ie.className="interior-label "+_.state,ie.textContent=_.name,ie.setAttribute("aria-label","定位设备 "+_.name),ie.onclick=()=>i(_.id),n.appendChild(ie),H.set(_.id,ie)}e.forEach(U);let P=!1,L=0,D=null,I=1,ee=0,he=null;const G=new bp,pe=new be;let Me=null;function He(){!P&&!L&&(L=requestAnimationFrame(ue))}function Xe(_=new z(0,0,0),p=!1){const W=new z(25,28,34).normalize(),V=p?18:Math.max(38,42/Math.max(.35,r.aspect)),$=_.clone().addScaledVector(W,V);matchMedia("(prefers-reduced-motion: reduce)").matches?(r.position.copy($),l.target.copy(_),l.update()):he={start:performance.now(),from:r.position.clone(),to:$,fromTarget:l.target.clone(),target:_},He()}function le(){const _=[],p=n.clientWidth<650;let W=0;const V=e.filter($=>$.floor===I).sort(($,q)=>+(q.id===D)-+($.id===D)||+(q.state==="warning")-+($.state==="warning"));if(H.forEach($=>$.style.display="none"),F.visible){a.dataset.visibleLabels="0";return}for(const $ of V){if(W>=(p?2:4)&&$.id!==D)continue;const q=T.get($.id).clone().project(r);if(q.z>1||Math.abs(q.x)>.98||Math.abs(q.y)>.95)continue;const re=H.get($.id);re.style.display="",re.classList.toggle("selected",$.id===D);const Z=re.offsetWidth,ie=re.offsetHeight,Y=$s.clamp((q.x*.5+.5)*n.clientWidth,Z/2+8,n.clientWidth-Z/2-8),me=$s.clamp((-.5*q.y+.5)*n.clientHeight,35,n.clientHeight-35);if(_.some(E=>Math.abs(Y-E.x)<(Z+E.w)/2+5&&Math.abs(me-E.y)<(ie+E.h)/2+5)){re.style.display="none";continue}re.style.left=Y+"px",re.style.top=me+"px",_.push({x:Y,y:me,w:Z,h:ie}),W++}a.dataset.visibleLabels=String(W)}function ue(_){if(L=0,P)return;if(he){const W=Math.min(1,(_-he.start)/500),V=1-(1-W)**3;r.position.lerpVectors(he.from,he.to,V),l.target.lerpVectors(he.fromTarget,he.target,V),W===1&&(he=null)}const p=l.update();o.render(s,r),le(),a.dataset.renderCount=String(++ee),a.dataset.drawCalls=String(o.info.render.calls),(he||p)&&He()}function Se(_){Me={x:_.clientX,y:_.clientY},he=null}function ke(_){if(!Me||Math.hypot(_.clientX-Me.x,_.clientY-Me.y)>6){Me=null;return}Me=null;const p=a.getBoundingClientRect();pe.set((_.clientX-p.left)/p.width*2-1,-(_.clientY-p.top)/p.height*2+1),G.setFromCamera(pe,r);const W=G.intersectObjects(K.filter(V=>e.find($=>$.id===V.userData.assetId)?.floor===I),!1)[0];W&&i(W.object.userData.assetId)}function de(){Me=null}l.addEventListener("change",He),a.addEventListener("pointerdown",Se),a.addEventListener("pointerup",ke),a.addEventListener("pointercancel",de);const w=new ResizeObserver(()=>{P||(r.aspect=n.clientWidth/Math.max(1,n.clientHeight),r.updateProjectionMatrix(),o.setSize(n.clientWidth,n.clientHeight),o.setPixelRatio(Math.min(devicePixelRatio,n.clientWidth<650?1.25:1.5)),he=null,Xe(),He())});return w.observe(n),o.shadowMap.needsUpdate=!0,{select(_,p=!1){if(D=_,A.forEach((W,V)=>{W.material.opacity=V===_?.25:.045}),_&&p){const W=e.find(V=>V.id===_);Xe(new z(W.x,.5,W.z),!0)}He()},setFloor(_){I=_,e.forEach(p=>{B.get(p.id).visible=p.floor===_,A.get(p.id).visible=p.floor===_}),o.shadowMap.needsUpdate=!0,Xe(),He()},roof(_){F.visible=_,N.visible=_,o.shadowMap.needsUpdate=!0,He()},reset(){Xe()},dispose(){P=!0,cancelAnimationFrame(L),w.disconnect(),l.removeEventListener("change",He),l.dispose(),a.removeEventListener("pointerdown",Se),a.removeEventListener("pointerup",ke),a.removeEventListener("pointercancel",de),H.forEach(_=>_.remove()),d.forEach(_=>_.dispose()),Object.values(h).forEach(_=>_.dispose()),f.forEach(_=>_.dispose()),y.forEach(_=>_.dispose()),k.dispose(),c.shadow.dispose(),o.dispose(),o.forceContextLoss(),a.remove()}}}const nb={class:"interior-workbench"},ib={class:"interior-heading"},sb={class:"interior-breadcrumb"},rb={class:"interior-heading-actions"},ob=["value"],ab=["value"],lb={class:"interior-grid"},cb={class:"panel interior-tree"},ub={class:"panel-heading"},hb={class:"muted"},db={class:"interior-tree-filters"},fb=["onClick"],pb={class:"interior-asset-list"},mb=["onClick"],gb={key:0,class:"interior-empty"},_b={class:"interior-view panel"},vb={class:"interior-toolbar"},xb={class:"interior-floor-buttons"},yb=["onClick"],Mb=["aria-pressed"],Sb={class:"interior-view-foot"},bb={class:"interior-inspector-title"},Eb={"aria-live":"polite"},wb={class:"interior-compact-reading"},Tb=["aria-expanded"],Ab={id:"device-details",class:"interior-inspector-body"},Rb={class:"inspector-kv"},Cb={class:"interior-reading"},Pb={key:0,class:"interior-carbon"},Ib={key:1,class:"interior-role-note"},Db={key:2,class:"interior-reading"},Lb={class:"inspector-kv"},Ub={class:"inspector-kv"},Nb={key:3,class:"interior-spark"},Fb={viewBox:"0 0 250 100","aria-label":"模拟功率趋势"},Ob=["points","stroke"],Bb={class:"interior-evidence"},zb={class:"inspector-kv"},kb=["disabled"],Hb={class:"interior-calculation"},Vb=["href"],Gb=fs({__name:"InteriorWorkbench",props:{buildingId:{},assetId:{},tick:{},playing:{type:Boolean},orders:{}},emits:["exit","building","advance","toggle"],setup(n,{emit:e}){const t=n,i=e,s=rt(()=>kn.find(L=>L.id===t.buildingId)),r=rt(()=>XS(t.buildingId)),o=r.value.find(L=>L.id===t.assetId)||r.value.find(L=>L.state!=="normal")||r.value[0],a=ot(o.id),l=ot(o.floor),c=ot(!1),u=ot("all"),h=ot(!1),d=rt(()=>r.value.find(L=>L.id===a.value)),f=rt(()=>$S(d.value,t.tick)),y=ot(null);let S=null;const g=ot(null),m=rt(()=>r.value.filter(L=>L.floor===l.value&&(u.value==="all"||u.value==="warning"&&L.state!=="normal"||u.value==="priority"&&L.priority==="P0"||u.value==="meter"&&["aggregate","transfer"].includes(L.role)))),R=rt(()=>VS(s.value)),b={factory:"生产与公辅",warehouse:"仓储与物流",research:"测试与机电",substation:"供电与计量",storage:"光储充与温控"},x=rt(()=>Lp(s.value)),F=rt(()=>qS[d.value.source]);async function N(L,D=!0){const I=r.value.find(ee=>ee.id===L);a.value=L,l.value=I.floor,S?.setFloor(I.floor),S?.select(L,D),h.value=!1,await js(),g.value&&(g.value.scrollTop=0,window.matchMedia("(max-width:700px)").matches&&g.value.scrollIntoView({block:"nearest",behavior:"instant"}))}function O(L){l.value=L,u.value="all";const D=r.value.find(I=>I.floor===L);a.value=D.id,S?.setFloor(L),S?.select(D.id),h.value=!1}function B(){c.value=!c.value,S?.roof(c.value)}function A(){S?.reset()}async function T(){h.value=!h.value,await js(),window.matchMedia("(max-width:700px)").matches&&g.value?.scrollIntoView({block:h.value?"start":"nearest",behavior:"instant"})}const H=rt(()=>x.value==="storage"&&["storage","transfer","aggregate"].includes(d.value.role)?"功率（负值放电 / 送出）":"功率 / 最后有效值"),K=rt(()=>x.value==="storage"&&d.value.role==="aggregate"?"净受入量（负值送出）":x.value==="storage"&&["storage","transfer"].includes(d.value.role)?"累计放电量示例":"当日电量示例"),k=rt(()=>(d.value.basePower,Array.from({length:25},(L,D)=>{const I=d.value.state==="warning"&&D>15?.12:0;return`${12+D*9.3},${83-(.48+.12*Math.sin(D*.6)+I)*70}`}).join(" "))),U=rt(()=>t.orders[d.value.id]||"待确认");ir(()=>{y.value&&(S=tb(y.value,r.value,x.value,L=>N(L)),S.setFloor(l.value),S.select(a.value))}),sr(()=>S?.dispose());function P(L,D=1){return L===null?"—":L.toLocaleString("zh-CN",{maximumFractionDigits:D,minimumFractionDigits:D})}return(L,D)=>(Le(),Fe("main",nb,[v("div",ib,[v("div",null,[v("div",sb,[v("button",{onClick:D[0]||(D[0]=I=>i("exit"))},"园区总览"),v("span",null,"/ "+se(s.value.name)+" / "+se(R.value.find(I=>I.id===l.value)?.name),1)]),v("h1",null,"建筑内部 · "+se(b[x.value]),1),v("p",null,"剖开示意 · 设备位置与读数均为模拟 · 年度用电预算 "+se(Ge(rs)[s.value.id])+" MWh",1)]),v("div",rb,[v("select",{"aria-label":"切换内部建筑",value:n.buildingId,onChange:D[1]||(D[1]=I=>i("building",I.target.value))},[(Le(!0),Fe(st,null,kt(Ge(kn),I=>(Le(),Fe("option",{key:I.id,value:I.id},se(Ge(In).find(ee=>ee.id===I.objectId)?.name)+" · "+se(I.name),9,ab))),128))],40,ob),v("button",{class:"outline-button",onClick:D[2]||(D[2]=I=>i("exit"))},[gt(Pn,{name:"back"}),D[5]||(D[5]=nt("返回园区",-1))])])]),v("div",lb,[v("aside",cb,[v("div",ub,[D[6]||(D[6]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"设备与计量点")],-1)),v("span",hb,se(r.value.length)+" 个",1)]),v("div",db,[(Le(),Fe(st,null,kt([["all","全部"],["priority","重点"],["warning","异常"],["meter","计量"]],I=>v("button",{key:I[0],class:wt({active:u.value===I[0]}),onClick:ee=>u.value=I[0]},se(I[1]),11,fb)),64))]),v("div",pb,[(Le(!0),Fe(st,null,kt(m.value,I=>(Le(),Fe("button",{key:I.id,class:wt({selected:I.id===a.value}),onClick:ee=>N(I.id)},[v("span",{class:wt(["status-dot",I.state==="delayed"?"offline":I.state])},null,2),v("span",null,[v("b",null,se(I.name),1),v("small",null,se(Ge(Ad)[I.role])+" · "+se(I.templateId),1)]),v("em",null,se(I.state==="normal"?"定位":Ge(Rd)[I.state]),1)],10,mb))),128)),m.value.length?Vt("",!0):(Le(),Fe("p",gb,"此楼层没有符合筛选的对象。"))]),D[7]||(D[7]=v("div",{class:"interior-tree-note"},"生产与能源状态分别判断。高能耗不直接标为故障，缺数据不填零。",-1))]),v("section",_b,[v("div",vb,[v("div",xb,[(Le(!0),Fe(st,null,kt(R.value,I=>(Le(),Fe("button",{key:I.id,class:wt({active:l.value===I.id}),onClick:ee=>O(I.id)},se(I.name),11,yb))),128))]),v("div",null,[v("button",{class:"tool-button","aria-pressed":c.value,onClick:B},se(c.value?"隐藏屋顶":"显示屋顶"),9,Mb),v("button",{class:"tool-button",onClick:A},[gt(Pn,{name:"reset"}),D[8]||(D[8]=nt("重置室内视角",-1))])])]),v("div",{ref_key:"host",ref:y,class:"interior-scene","aria-label":"建筑内部三维设施场景"},null,512),v("div",Sb,[D[9]||(D[9]=v("span",null,"拖拽旋转 / 缩放 · 点击设备或左侧列表",-1)),v("button",{onClick:D[3]||(D[3]=I=>i("toggle"))},se(n.playing?"暂停模拟流":"继续模拟流"),1)])]),v("aside",{ref_key:"inspector",ref:g,class:wt(["panel interior-inspector",{"details-open":h.value}])},[v("div",bb,[v("span",{class:wt(["status-chip",d.value.state==="normal"?"pass":d.value.state==="delayed"?"insufficient":"review"])},se(Ge(Rd)[d.value.state]),3),v("h2",Eb,se(d.value.name),1),v("small",null,se(d.value.id),1),v("div",wb,[v("div",null,[v("span",null,se(H.value),1),v("strong",null,[nt(se(P(f.value.power))+" ",1),D[10]||(D[10]=v("small",null,"kW",-1))])]),v("div",null,[v("span",null,se(K.value),1),v("strong",null,[nt(se(P(f.value.energy))+" ",1),D[11]||(D[11]=v("small",null,"kWh",-1))])])]),v("button",{class:"interior-mobile-details","aria-expanded":h.value,"aria-controls":"device-details",onClick:T},se(h.value?"收起设备详情":"查看碳数据、证据与整改"),9,Tb)]),v("div",Ab,[v("div",Rb,[D[12]||(D[12]=v("span",null,"能源角色",-1)),v("b",null,se(Ge(Ad)[d.value.role]),1)]),v("div",Cb,[v("div",null,[v("span",null,se(H.value),1),v("strong",null,[nt(se(P(f.value.power))+" ",1),D[13]||(D[13]=v("small",null,"kW",-1))])]),v("div",null,[v("span",null,se(K.value),1),v("strong",null,[nt(se(P(f.value.energy))+" ",1),D[14]||(D[14]=v("small",null,"kWh",-1))])])]),d.value.role==="terminal"?(Le(),Fe("div",Pb,[D[16]||(D[16]=v("span",null,"当日用电对应 CO₂ · 管理分摊",-1)),v("strong",null,[nt(se(P(f.value.carbon))+" ",1),D[15]||(D[15]=v("small",null,"kg CO₂",-1))]),v("p",null,"年度场景分配因子 "+se(Ge(Eu).toFixed(4))+" kgCO₂/kWh，属于计算示例。",1)])):(Le(),Fe("div",Ib,se(d.value.role==="passive"?"非用能物体，不生成运行碳排。":"展示能流、库存或汇总；不与终端重复累加碳排。"),1)),d.value.role==="storage"?(Le(),Fe("div",Db,[v("div",null,[D[18]||(D[18]=v("span",null,"SOC 示例",-1)),v("strong",null,[nt(se(f.value.soc)+" ",1),D[17]||(D[17]=v("small",null,"%",-1))])]),v("div",null,[D[20]||(D[20]=v("span",null,"温度示例",-1)),v("strong",null,[nt(se(f.value.temperature)+" ",1),D[19]||(D[19]=v("small",null,"℃",-1))])])])):Vt("",!0),v("div",Lb,[D[21]||(D[21]=v("span",null,"示例测点",-1)),v("b",null,se(d.value.meterId||"非计量对象"),1)]),v("div",Ub,[D[22]||(D[22]=v("span",null,"数据性质",-1)),v("b",null,se(f.value.quality),1)]),f.value.power!==null?(Le(),Fe("div",Nb,[D[24]||(D[24]=v("div",null,[v("b",null,"功率趋势示意"),v("span",null,"最近 30 分钟 · 构造曲线")],-1)),(Le(),Fe("svg",Fb,[D[23]||(D[23]=v("path",{d:"M12 25H236 M12 55H236 M12 85H236",fill:"none",stroke:"#3b4857","stroke-dasharray":"3 3"},null,-1)),v("polyline",{points:k.value,fill:"none",stroke:d.value.state==="warning"?"#f0bc55":"#5ca8ff","stroke-width":"2"},null,8,Ob)]))])):Vt("",!0),v("div",Bb,[v("h3",null,"状态与证据 · "+se(d.value.rule),1),v("b",null,se(d.value.task),1),v("p",null,se(d.value.evidence),1),D[27]||(D[27]=v("h3",null,"排查与整改建议",-1)),v("p",null,se(d.value.recommendation),1),d.value.state!=="normal"?(Le(),Fe(st,{key:0},[v("div",zb,[D[25]||(D[25]=v("span",null,"整改状态",-1)),v("b",null,se(U.value),1)]),v("button",{class:"primary-button",disabled:U.value==="已处理",onClick:D[4]||(D[4]=I=>i("advance",d.value.id))},se(U.value==="待确认"?"确认并建立整改":U.value==="处理中"?"记录复核并完成":"已记录复核"),9,kb),D[26]||(D[26]=v("small",null,"当前页面的演示记录；完成不代表已验证减排效果。",-1))],64)):Vt("",!0)]),v("details",Hb,[D[28]||(D[28]=v("summary",null,"计量与核算依据",-1)),v("p",null,se(Ge(ks).allocation),1),v("p",null,"诊断增强字段："+se(d.value.extra),1),v("p",null,"资产归属 "+se(s.value.objectId)+" / "+se(s.value.name)+"；时间窗口与分摊规则需后端核实。",1),F.value?(Le(),Fe("a",{key:0,href:F.value.url,target:"_blank",rel:"noopener"},"设备/字段原始参考资料",8,Vb)):Vt("",!0)])])],2)])]))}}),Wb=["viewBox"],Xb=["id"],$b={class:"chart-grid"},Yb=["y1","x2","y2"],qb=["d","fill"],jb=["d"],Kb=["d"],Zb={class:"chart-labels"},Jb=["y"],Qb=["x","y","text-anchor"],eE={key:0},tE=["x1","x2","y2"],nE=["cx","cy"],iE={class:"demand"},sE={class:"solar"},rE=8,fi=30,Ld=14,Ud=fs({__name:"TrendChart",props:{series:{},height:{}},setup(n){const e=n,t=rt(()=>e.height??180),i=ot(null),s=ot(320),r=ot(null),o=Fm();let a;ir(()=>{a=new ResizeObserver(()=>{s.value=Math.max(100,(i.value?.clientWidth??344)-24)}),i.value&&a.observe(i.value)}),sr(()=>a?.disconnect());const l=rt(()=>s.value-16),c=rt(()=>t.value-38),u=rt(()=>Math.max(30,c.value-Ld)),h=[0,2,4,6,8];function d(x){return fi+x*(l.value-fi)/Math.max(1,e.series.length-1)}function f(x){return c.value-x/rE*u.value}function y(x){return e.series.map((F,N)=>`${N===0?"M":"L"}${d(N).toFixed(1)},${f(F[x]).toFixed(1)}`).join(" ")}const S=rt(()=>y("demand")),g=rt(()=>y("solar")),m=rt(()=>r.value===null?null:e.series[r.value]);function R(x){const F=x.currentTarget.getBoundingClientRect(),N=Math.max(fi,Math.min(l.value,x.clientX-F.left));r.value=Math.round((N-fi)/Math.max(1,l.value-fi)*(e.series.length-1))}function b(x){r.value=Math.max(0,Math.min(e.series.length-1,(r.value??0)+x))}return(x,F)=>(Le(),Fe("div",{ref_key:"host",ref:i,class:"trend-chart",style:jn({height:t.value+"px"})},[(Le(),Fe("svg",{viewBox:`0 0 ${s.value} ${t.value-12}`,role:"img",tabindex:"0","aria-label":"园区负荷与光伏出力演示趋势图，单位 MW。左右方向键查看时段，Esc 收起读数。",onPointermove:R,onPointerleave:F[0]||(F[0]=N=>r.value=null),onKeydown:[F[1]||(F[1]=Ha(ch(N=>b(-1),["prevent"]),["left"])),F[2]||(F[2]=Ha(ch(N=>b(1),["prevent"]),["right"])),F[3]||(F[3]=Ha(N=>r.value=null,["esc"]))],onBlur:F[4]||(F[4]=N=>r.value=null)},[v("defs",null,[v("linearGradient",{id:Ge(o),x1:"0",y1:"0",x2:"0",y2:"1"},[...F[5]||(F[5]=[v("stop",{offset:"0","stop-color":"#5ca8ff","stop-opacity":".12"},null,-1),v("stop",{offset:"1","stop-color":"#5ca8ff","stop-opacity":"0"},null,-1)])],8,Xb)]),v("g",$b,[(Le(),Fe(st,null,kt(h,N=>v("line",{key:N,x1:fi,y1:f(N),x2:l.value,y2:f(N)},null,8,Yb)),64))]),v("path",{d:`${S.value} L${l.value},${c.value} L${fi},${c.value} Z`,fill:`url(#${Ge(o)})`},null,8,qb),v("path",{d:S.value,fill:"none",stroke:"#5ca8ff","stroke-width":"2"},null,8,jb),v("path",{d:g.value,fill:"none",stroke:"#f0bc55","stroke-width":"1.8"},null,8,Kb),v("g",Zb,[(Le(),Fe(st,null,kt(h,N=>v("text",{key:N,x:"22",y:f(N)+4,"text-anchor":"end"},se(N),9,Jb)),64)),(Le(),Fe(st,null,kt(["00:00","06:00","12:00","18:00","24:00"],(N,O)=>v("text",{key:N,x:fi+(l.value-fi)*O/4,y:c.value+24,"text-anchor":O===0?"start":O===4?"end":"middle"},se(N),9,Qb)),64))]),m.value&&r.value!==null?(Le(),Fe("g",eE,[v("line",{x1:d(r.value),x2:d(r.value),y1:Ld,y2:c.value,stroke:"#9aa8b7","stroke-dasharray":"3 3"},null,8,tE),v("circle",{cx:d(r.value),cy:f(m.value.demand),r:"3",fill:"#5ca8ff"},null,8,nE)])):Vt("",!0)],40,Wb)),m.value?(Le(),Fe("div",{key:0,class:"chart-readout",style:jn({left:Math.min(s.value-146,Math.max(12,d(r.value??0)-68))+"px"})},[v("b",null,se(m.value.hour),1),v("span",iE,"用电负荷 "+se(m.value.demand.toFixed(2))+" MW",1),v("span",sE,"光伏出力 "+se(m.value.solar.toFixed(2))+" MW",1)],4)):Vt("",!0)],4))}}),oE={class:"app-shell"},aE={key:1,class:"overview-grid"},lE={class:"panel energy-panel"},cE={class:"panel-heading"},uE={class:"energy-body"},hE={class:"energy-side"},dE={class:"energy-total"},fE={class:"panel load-panel"},pE={class:"panel operations-panel"},mE={class:"panel-heading"},gE={class:"metric-grid"},_E={class:"metric-cell"},vE={class:"metric-cell"},xE={class:"mint"},yE={class:"metric-cell"},ME={class:"scene-section"},SE={class:"scene-topline"},bE={class:"scene-tools"},EE=["aria-pressed"],wE=["aria-expanded"],TE={class:"scene-filters",role:"group","aria-label":"园区图层筛选"},AE=["onClick"],RE={key:0,class:"scene-object-list","aria-label":"园区对象列表"},CE={class:"scene-list-heading"},PE=["onClick"],IE={class:"selection-eyebrow"},DE={class:"selection-title"},LE={class:"selection-interiors"},UE=["onClick"],NE=["aria-expanded"],FE={class:"selection-scope"},OE={class:"selection-data"},BE={class:"selection-assets"},zE=["title"],kE={key:0},HE={class:"scene-bottom"},VE=["aria-label"],GE={key:0,class:"pause-icon"},WE={key:1,class:"play-icon"},XE={class:"panel core-panel"},$E={class:"panel-heading"},YE={class:"panel-footnote"},qE={class:"threshold-note"},jE={class:"panel guidance-panel"},KE={class:"panel-heading"},ZE={class:"indicator-row__name"},JE={class:"panel quality-panel"},QE={class:"panel-heading"},ew={class:"quality-summary"},tw={class:"quality-ring"},nw={class:"quality-figures"},iw={class:"coral"},sw=["onClick"],rw={key:2,class:"workbench"},ow={class:"page-heading"},aw={class:"page-overline"},lw={class:"summary-strip"},cw={class:"work-grid two-columns"},uw={class:"panel wide-panel"},hw={class:"panel wide-panel"},dw={class:"object-table"},fw=["onClick"],pw={class:"summary-strip"},mw={class:"work-grid carbon-grid"},gw={class:"panel wide-panel"},_w={class:"panel-heading"},vw={class:"muted"},xw={class:"stacked-bar"},yw={class:"breakdown-row"},Mw={class:"breakdown-row"},Sw={class:"breakdown-row"},bw={class:"breakdown-row"},Ew={class:"panel wide-panel"},ww={class:"trace-list"},Tw={class:"readiness-head"},Aw={class:"panel readiness-hero"},Rw={class:"panel indicator-table-panel"},Cw={key:3,class:"work-grid alerts-grid"},Pw={class:"panel wide-panel"},Iw={class:"panel-heading"},Dw={class:"muted"},Lw=["onClick"],Uw={class:"panel wide-panel alert-detail"},Nw={class:"panel-heading"},Fw={class:"status-chip review"},Ow={class:"trace-list"},Bw={class:"alert-actions"},zw=["disabled"],kw={class:"summary-strip"},Hw={class:"work-grid sources-grid"},Vw={class:"panel wide-panel"},Gw={class:"source-icon"},Ww={key:3,class:"toast",role:"status"},Xw=fs({__name:"App",setup(n){const e=[{id:"overview",label:"园区总览"},{id:"monitoring",label:"实时监测"},{id:"carbon",label:"碳排测算"},{id:"readiness",label:"达标预评估"},{id:"alerts",label:"预警与整改"},{id:"sources",label:"数据接入"}],t=ot("overview"),i=ot(null),s=ot(null),r=ot({});function o(de){t.value=de,i.value=null}as([t,i],async()=>{await js(),window.scrollTo({top:0,behavior:"instant"});const de=document.querySelector("main h1, .scene-topline h1");de?.setAttribute("tabindex","-1"),de?.focus({preventScroll:!0})});function a(de,w=null){i.value=de,s.value=w,t.value="overview"}function l(de){const w=r.value[de]||"待确认";r.value[de]=w==="待确认"?"处理中":"已处理";const _=Gn.find(p=>p.assetId===de);_&&(L.value[_.id]=r.value[de]),pe("已更新演示整改记录，完成不代表已验证减排效果。")}const c=ot("all"),u=ot(null),h=rt(()=>In.find(de=>de.id===u.value)??null),d=rt(()=>an.find(de=>de.objectId===u.value)),f=rt(()=>kn.filter(de=>de.objectId===u.value)),y=rt(()=>Ln.filter(de=>de.objectId===u.value)),S=rt(()=>Pc.filter(de=>de.objectId===u.value)),g=ot(!0),m=ot(!1),R=ot(!1),b=ot(null),x=ot(!0),F=ot(0),N=ot(14),O=ot(new Date),B=rt(()=>jS(F.value)),A=rt(()=>(In.reduce((de,w)=>de+wu(w.id),0)/1e3+Math.sin(F.value/2)*.07).toFixed(2)),T=rt(()=>B.value[N.value]?.solar.toFixed(2)??"0.00"),H=rt(()=>El.reduce((de,w)=>de+w.count,0)),K=rt(()=>El.reduce((de,w)=>de+w.online,0)),k=rt(()=>(K.value/H.value*100).toFixed(1)),U=rt(()=>O.value.toLocaleTimeString("zh-CN",{hour12:!1})),P=rt(()=>O.value.toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"})),L=ot(Object.fromEntries(Gn.map(de=>[de.id,"待确认"]))),D=ot(Gn[0].id),I=rt(()=>Gn.find(de=>de.id===D.value)??Gn[0]),ee=ot("");let he,G;ir(()=>{he=window.setInterval(()=>{x.value&&(F.value+=1,O.value=new Date)},2600)}),sr(()=>{he&&window.clearInterval(he),G&&window.clearTimeout(G)});function pe(de){ee.value=de,G&&window.clearTimeout(G),G=window.setTimeout(()=>{ee.value=""},3500)}function Me(de){const w=In.find(_=>_.id===de);w&&c.value!=="all"&&c.value!==w.area&&(c.value="all"),u.value=de,R.value=!1,m.value=!1}function He(de){D.value=de;const w=Gn.find(_=>_.id===de);w&&(u.value=w.objectId),t.value="alerts"}function Xe(){l(I.value.assetId)}function le(){pe("已触发模拟同步。真实接口尚未接入，原有数据状态保持不变。")}function ue(){b.value?.resetView(),u.value=null}function Se(de){c.value=de,h.value&&de!=="all"&&h.value.area!==de&&(u.value=null)}function ke(de){return de.powerKw===null?"边界设施":`${(de.powerKw/1e3).toFixed(2)} MW`}return(de,w)=>(Le(),Fe("div",oE,[gt(x0,{tabs:e,active:t.value,year:Ge(At).year,playing:x.value,updated:U.value,onNavigate:w[0]||(w[0]=_=>o(_))},null,8,["active","year","playing","updated"]),t.value==="overview"&&i.value?(Le(),ea(Gb,{key:i.value,"building-id":i.value,"asset-id":s.value,tick:F.value,playing:x.value,orders:r.value,onExit:w[1]||(w[1]=_=>i.value=null),onBuilding:w[2]||(w[2]=_=>a(_)),onAdvance:l,onToggle:w[3]||(w[3]=_=>x.value=!x.value)},null,8,["building-id","asset-id","tick","playing","orders"])):t.value==="overview"?(Le(),Fe("main",aE,[gt(hh,{class:"left-rail",label:"能源与运行数据"},{default:Pl(()=>[v("section",lE,[v("div",cE,[w[18]||(w[18]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"能源结构")],-1)),v("small",null,se(Ge(At).year)+" 年度 · 演示数据",1)]),v("div",uE,[v("div",{class:"donut",style:jn({"--percent":Ge(At).cleanerEnergyPct+"%"})},[v("div",null,[w[19]||(w[19]=v("span",null,"清洁电力",-1)),v("strong",null,se(Ge(At).cleanerEnergyPct.toFixed(1))+"%",1)])],4),v("div",hE,[v("div",null,[w[20]||(w[20]=v("span",{class:"swatch swatch-cyan"},null,-1)),w[21]||(w[21]=v("span",null,"清洁电力",-1)),v("strong",null,se(Ge(At).cleanerEnergyPct.toFixed(1))+"%",1)]),v("div",null,[w[22]||(w[22]=v("span",{class:"swatch swatch-gold"},null,-1)),w[23]||(w[23]=v("span",null,"普通受入",-1)),v("strong",null,se((100-Ge(At).cleanerEnergyPct).toFixed(1))+"%",1)]),v("p",null,[w[25]||(w[25]=v("span",null,"年度用电",-1)),v("span",dE,[v("b",null,se(Ge(At).electricityMwh),1),w[24]||(w[24]=nt(" MWh",-1))])])])])]),v("section",fE,[w[26]||(w[26]=v("div",{class:"panel-heading"},[v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"园区负荷趋势")]),v("small",null,"当日 · MW")],-1)),w[27]||(w[27]=v("div",{class:"chart-legend"},[v("span",null,[v("i",{class:"line-cyan"}),nt("用电负荷")]),v("span",null,[v("i",{class:"line-gold"}),nt("光伏出力")])],-1)),gt(Ud,{series:B.value,height:173},null,8,["series"])]),v("section",pE,[v("div",mE,[w[28]||(w[28]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"运行监测")],-1)),v("button",{class:"text-action",onClick:w[4]||(w[4]=_=>t.value="monitoring")},"查看监测")]),v("div",gE,[v("div",_E,[w[30]||(w[30]=v("span",null,"当前园区负荷",-1)),v("strong",null,[nt(se(A.value),1),w[29]||(w[29]=v("em",null,"MW",-1))]),w[31]||(w[31]=v("small",null,"模拟动态数据",-1))]),v("div",vE,[w[33]||(w[33]=v("span",null,"当前光伏出力",-1)),v("strong",xE,[nt(se(T.value),1),w[32]||(w[32]=v("em",null,"MW",-1))]),v("small",null,se(String(N.value).padStart(2,"0"))+":00 时段",1)]),w[36]||(w[36]=v("div",{class:"metric-cell"},[v("span",null,"企业 / 公共设施"),v("strong",null,[nt("6 "),v("em",null,"/"),nt(" 3")]),v("small",null,"对象边界已区分")],-1)),v("div",yE,[w[34]||(w[34]=v("span",null,"数据点接入",-1)),v("strong",null,[nt(se(K.value),1),v("em",null,"/ "+se(H.value),1)]),w[35]||(w[35]=v("small",null,"其中 1 个测点延迟",-1))])])])]),_:1}),v("section",ME,[v("div",SE,[v("div",null,[w[37]||(w[37]=v("h1",null,"园区空间总览",-1)),v("span",null,"概念园区 · "+se(Ge(kn).length)+" 栋建筑 · 非真实地理数据",1)]),v("div",bE,[v("button",{class:wt(["tool-button",{"is-on":g.value}]),"aria-pressed":g.value,onClick:w[5]||(w[5]=_=>g.value=!g.value)},[gt(Pn,{name:"boundary"}),nt(se(g.value?"隐藏边界":"显示边界"),1)],10,EE),v("button",{class:"tool-button","aria-expanded":m.value,onClick:w[6]||(w[6]=_=>m.value=!m.value)},[gt(Pn,{name:"list"}),w[38]||(w[38]=nt("对象列表",-1))],8,wE),v("button",{class:"tool-button",onClick:ue,title:"重置视角"},[gt(Pn,{name:"reset"}),w[39]||(w[39]=nt("重置视角",-1))])])]),v("div",TE,[(Le(),Fe(st,null,kt([["all","全部"],["enterprise","企业区域"],["public","公共区域"],["energy","能源设施"]],_=>v("button",{key:_[0],class:wt({active:c.value===_[0]}),onClick:p=>Se(_[0])},se(_[1]),11,AE)),64))]),gt(eb,{ref_key:"parkCanvas",ref:b,filter:c.value,boundaries:g.value,"selected-id":u.value,onSelect:Me},null,8,["filter","boundaries","selected-id"]),m.value?(Le(),Fe("div",RE,[v("div",CE,[w[40]||(w[40]=v("strong",null,"定位园区对象",-1)),v("button",{"aria-label":"关闭对象列表",onClick:w[7]||(w[7]=_=>m.value=!1)},[gt(Pn,{name:"close"})])]),(Le(!0),Fe(st,null,kt(Ge(In),_=>(Le(),Fe("button",{key:_.id,onClick:p=>Me(_.id)},[v("span",{class:wt(["status-dot",_.health])},null,2),v("span",null,[v("b",null,se(_.name),1),v("small",null,se(_.buildingIds.length)+" 栋建筑 · "+se(_.area==="enterprise"?"企业地块":_.area==="public"?"公共服务":"能源设施"),1)]),w[41]||(w[41]=v("em",null,"定位 ↗",-1))],8,PE))),128)),w[42]||(w[42]=v("p",null,"公共道路由园区管理，企业地块独立显示。",-1))])):Vt("",!0),h.value?(Le(),Fe("div",{key:1,class:wt(["selection-card",{"is-expanded":R.value}])},[v("div",IE,[v("span",{class:wt(["status-dot",h.value.health])},null,2),nt(se(h.value.type)+" · "+se(h.value.health==="normal"?"正常":h.value.health==="warning"?"需关注":"数据延迟"),1)]),v("div",DE,[v("h3",null,se(h.value.name),1),v("button",{"aria-label":"关闭对象详情",onClick:w[8]||(w[8]=_=>u.value=null)},[gt(Pn,{name:"close"})])]),v("div",LE,[(Le(!0),Fe(st,null,kt(f.value,_=>(Le(),Fe("button",{key:_.id,onClick:p=>a(_.id)},[v("span",null,"查看内部 · "+se(_.name),1),gt(Pn,{name:"arrow"})],8,UE))),128))]),v("button",{class:"detail-expand","aria-expanded":R.value,onClick:w[9]||(w[9]=_=>R.value=!R.value)},se(R.value?"收起详情 −":"展开详情 +"),9,NE),v("p",null,se(h.value.description),1),v("div",FE,[v("span",null,se(d.value?.name)+" · 概念边界",1),v("b",null,se(f.value.length)+" 栋建筑 / "+se(y.value.length)+" 项设施",1)]),v("div",OE,[v("div",null,[w[43]||(w[43]=v("span",null,"当前负荷",-1)),v("strong",null,se(ke(h.value)),1)]),v("div",null,[w[44]||(w[44]=v("span",null,"年度分摊 CO₂",-1)),v("strong",null,se(h.value.carbonT===null?"待核算":h.value.carbonT.toFixed(1)+" 吨"),1)])]),v("small",null,"运营主体："+se(h.value.owner)+" · 按年度用电预算分摊，已纳入园区总量",1),v("div",BE,[(Le(!0),Fe(st,null,kt(y.value,_=>(Le(),Fe("span",{key:_.id,title:_.id},se(_.name),9,zE))),128))]),S.value.length?(Le(),Fe("small",kE,"计量点："+se(S.value.map(_=>_.id).join("、"))+" · "+se(S.value.some(_=>_.quality==="delayed")?"模拟数据延迟":"演示绑定"),1)):Vt("",!0)],2)):Vt("",!0),w[47]||(w[47]=v("div",{class:"scene-hint"},"概念四至 / 企业地块 / 公共区域 · 拖拽旋转 · 点击楼栋定位",-1)),v("div",HE,[v("button",{class:"play-button","aria-label":x.value?"暂停演示数据流":"继续演示数据流",onClick:w[10]||(w[10]=_=>x.value=!x.value)},[x.value?(Le(),Fe("span",GE)):(Le(),Fe("span",WE))],8,VE),v("span",null,se(P.value),1),w[45]||(w[45]=v("span",{class:"scene-bottom__label"},"时段",-1)),Cm(v("input",{"onUpdate:modelValue":w[11]||(w[11]=_=>N.value=_),type:"range",min:"0",max:"23","aria-label":"查看演示时段"},null,512),[[n0,N.value,void 0,{number:!0}]]),v("strong",null,se(String(N.value).padStart(2,"0"))+":00",1),w[46]||(w[46]=v("div",{class:"scene-legend"},[v("span",null,[v("i",{class:"legend-enterprise"}),nt("企业")]),v("span",null,[v("i",{class:"legend-public"}),nt("公共")]),v("span",null,[v("i",{class:"legend-energy"}),nt("能源设施")])],-1))])]),gt(hh,{class:"right-rail",label:"指标与告警数据"},{default:Pl(()=>[v("section",XE,[v("div",$E,[w[48]||(w[48]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"国家级零碳园区核心指标")],-1)),v("button",{class:"text-action",onClick:w[12]||(w[12]=_=>t.value="readiness")},"查看依据")]),w[50]||(w[50]=v("div",{class:"core-label"},[nt("单位能耗碳排放 "),v("span",{class:"status-chip insufficient"},"待核实")],-1)),w[51]||(w[51]=v("div",{class:"core-value"},[nt("待核实"),v("span",null,"等价值折标依据尚未确认")],-1)),v("p",YE,se(Ge(ks).tce),1),v("div",qE,[v("span",null,se(Ge(At).electricityMwh)+" MWh 年度用电示例",1),w[49]||(w[49]=v("b",null,"不自动判定",-1))]),w[52]||(w[52]=v("p",{class:"panel-footnote"},"内部预评估 · 依据 2025 年试行指标体系",-1))]),v("section",jE,[v("div",KE,[w[53]||(w[53]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"五项引导指标")],-1)),v("button",{class:"text-action",onClick:w[13]||(w[13]=_=>t.value="readiness")},"全部指标")]),(Le(!0),Fe(st,null,kt(Ge(Cd).slice(1),_=>(Le(),Fe("button",{key:_.id,class:"indicator-row",onClick:w[14]||(w[14]=p=>t.value="readiness")},[v("span",{class:wt(["indicator-marker",_.status])},null,2),v("span",ZE,se(_.name),1),v("strong",null,se(_.value),1),v("small",{class:wt(_.status)},se(_.status==="pass"?"达标":_.status==="fail"?"有差距":"缺数据"),3)]))),128))]),v("section",JE,[v("div",QE,[w[54]||(w[54]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"数据质量与告警")],-1)),v("button",{class:"text-action",onClick:w[15]||(w[15]=_=>t.value="sources")},"数据接入")]),v("div",ew,[v("div",tw,[v("strong",null,se(k.value)+"%",1),w[55]||(w[55]=v("span",null,"数据点在线",-1))]),v("div",nw,[v("div",null,[w[56]||(w[56]=v("span",null,"在线数据点",-1)),v("b",null,se(K.value)+" / "+se(H.value),1)]),w[58]||(w[58]=v("div",null,[v("span",null,"待补数据"),v("b",{class:"gold"},"2 项")],-1)),v("div",null,[w[57]||(w[57]=v("span",null,"活动告警",-1)),v("b",iw,se(Ge(Gn).filter(_=>L.value[_.id]!=="已处理").length)+" 条",1)])])]),(Le(!0),Fe(st,null,kt(Ge(Gn),_=>(Le(),Fe("button",{key:_.id,class:"mini-alert",onClick:p=>He(_.id)},[v("span",{class:wt(["status-dot",_.level])},null,2),v("span",null,se(_.title),1),v("time",null,se(_.time),1)],8,sw))),128))])]),_:1})])):(Le(),Fe("main",rw,[v("div",ow,[v("div",null,[v("span",aw,"零碳园区 · "+se(Ge(At).year)+" 年度",1),v("h1",null,se(e.find(_=>_.id===t.value)?.label),1),w[59]||(w[59]=v("p",null,"园区示意案例，所有数值与事件均为模拟数据。",-1))]),v("button",{class:"outline-button",onClick:w[16]||(w[16]=_=>o("overview"))},"返回园区总览")]),t.value==="monitoring"?(Le(),Fe(st,{key:0},[v("div",lw,[v("div",null,[w[61]||(w[61]=v("span",null,"当前园区负荷",-1)),v("strong",null,[nt(se(A.value)+" ",1),w[60]||(w[60]=v("small",null,"MW",-1))])]),v("div",null,[w[62]||(w[62]=v("span",null,"数据点在线",-1)),v("strong",null,[nt(se(K.value),1),v("small",null," / "+se(H.value),1)])]),v("div",null,[w[63]||(w[63]=v("span",null,"演示流状态",-1)),v("strong",{class:wt(x.value?"mint-text":"gold-text")},se(x.value?"运行中":"已暂停"),3)]),v("div",null,[w[64]||(w[64]=v("span",null,"最近更新",-1)),v("strong",null,se(U.value),1)])]),v("div",cw,[v("section",uw,[w[65]||(w[65]=ur('<div class="panel-heading"><div><span class="heading-bar"></span><h2>用电负荷与光伏出力</h2></div><span class="muted">模拟实时序列 · MW</span></div><div class="chart-legend"><span><i class="line-cyan"></i>用电负荷</span><span><i class="line-gold"></i>光伏出力</span></div>',2)),gt(Ud,{series:B.value,height:320},null,8,["series"]),w[66]||(w[66]=v("p",{class:"panel-footnote"},"当监测流暂停或计量点延迟，页面保留最后数值并明确显示状态。",-1))]),v("section",hw,[w[67]||(w[67]=v("div",{class:"panel-heading"},[v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"监测对象")]),v("span",{class:"muted"},"点击返回场景定位")],-1)),v("div",dw,[(Le(!0),Fe(st,null,kt(Ge(In),_=>(Le(),Fe("button",{key:_.id,class:"object-row",onClick:p=>{Me(_.id),t.value="overview"}},[v("span",{class:wt(["status-dot",_.health])},null,2),v("span",null,[v("b",null,se(_.name),1),v("small",null,se(_.area==="enterprise"?"企业范围":_.area==="public"?"公共区域":"能源设施"),1)]),v("strong",null,se(ke(_)),1),v("em",null,se(_.health==="normal"?"正常":_.health==="warning"?"关注":"延迟"),1)],8,fw))),128))])])])],64)):Vt("",!0),t.value==="carbon"?(Le(),Fe(st,{key:1},[v("div",pw,[v("div",null,[w[69]||(w[69]=v("span",null,"园区年度 CO₂",-1)),v("strong",null,[nt(se(Ge(At).co2T.toLocaleString())+" ",1),w[68]||(w[68]=v("small",null,"吨",-1))])]),w[70]||(w[70]=v("div",null,[v("span",null,"综合能源消费"),v("strong",null,[nt("待核实 "),v("small",null,"等价值折标")])],-1)),w[71]||(w[71]=v("div",null,[v("span",null,"单位能耗碳排放"),v("strong",null,[nt("待核实 "),v("small",null,"暂停判定")])],-1)),w[72]||(w[72]=v("div",null,[v("span",null,"测算口径"),v("strong",{class:"small-value"},"自然年 · CO₂")],-1))]),v("div",mw,[v("section",gw,[v("div",_w,[w[73]||(w[73]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"园区碳排放分项")],-1)),v("span",vw,"合计 "+se(Ge(At).co2T.toLocaleString())+" 吨 CO₂",1)]),v("div",xw,[v("span",{style:jn({width:Ge(At).fuelT/Ge(At).co2T*100+"%"})},null,4),v("span",{style:jn({width:Ge(At).conversionT/Ge(At).co2T*100+"%"})},null,4),v("span",{style:jn({width:Ge(At).electricityHeatT/Ge(At).co2T*100+"%"})},null,4),v("span",{style:jn({width:Ge(At).industrialProcessT/Ge(At).co2T*100+"%"})},null,4)]),v("div",yw,[w[74]||(w[74]=v("i",{class:"bar-a"},null,-1)),w[75]||(w[75]=v("span",null,"化石能源用作燃料",-1)),v("strong",null,se(Ge(At).fuelT.toLocaleString())+" 吨",1)]),v("div",Mw,[w[76]||(w[76]=v("i",{class:"bar-b"},null,-1)),w[77]||(w[77]=v("span",null,"能源加工转换",-1)),v("strong",null,se(Ge(At).conversionT.toLocaleString())+" 吨",1)]),v("div",Sw,[w[78]||(w[78]=v("i",{class:"bar-c"},null,-1)),w[79]||(w[79]=v("span",null,"电力与热力净受入",-1)),v("strong",null,se(Ge(At).electricityHeatT.toLocaleString())+" 吨",1)]),v("div",bw,[w[80]||(w[80]=v("i",{class:"bar-d"},null,-1)),w[81]||(w[81]=v("span",null,"工业生产过程",-1)),v("strong",null,se(Ge(At).industrialProcessT.toLocaleString())+" 吨",1)])]),v("section",Ew,[w[85]||(w[85]=v("div",{class:"panel-heading"},[v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"测算依据与追溯")]),v("span",{class:"status-chip review"},"演示测算")],-1)),v("div",ww,[v("div",null,[w[82]||(w[82]=v("span",null,"申报边界",-1)),v("strong",null,se(Ge(ks).boundary),1)]),w[84]||(w[84]=ur("<div><span>核算周期</span><strong>2025 自然年</strong></div><div><span>排放范围</span><strong>能源活动 + 工业过程，仅 CO₂</strong></div><div><span>指标规则</span><strong>发改环资〔2025〕910号附件 3（试行）</strong></div><div><span>核算规则</span><strong>同通知附件 4（试行）</strong></div>",4)),v("div",null,[w[83]||(w[83]=v("span",null,"因子与凭证",-1)),v("strong",null,se(Ge(ks).factor),1)])])])]),w[86]||(w[86]=v("p",{class:"workspace-note"},"园区结果应按统一边界核算；企业报表直接相加可能重复计入共用能源和电热转换。监测曲线不等同于年度正式核算。当前为全电示例，燃料及过程排放为零是情景假设；绿电凭证、折标系数均待核实。",-1))],64)):Vt("",!0),t.value==="readiness"?(Le(),Fe(st,{key:2},[v("div",Tw,[v("section",Aw,[w[87]||(w[87]=v("span",null,"核心指标 · 内部预评估",-1)),w[88]||(w[88]=v("div",null,[v("strong",{class:"small-value"},"暂不判定"),v("small",null,"单位能耗碳排放")],-1)),v("p",null,se(Ge(ks).tce)+" 年度用电预算为 "+se(Ge(At).electricityMwh)+" MWh；不能直接当作吨标准煤，也不能套用未匹配的规模档。",1),w[89]||(w[89]=v("span",{class:"status-chip insufficient"},"缺少核算依据",-1))]),w[90]||(w[90]=ur('<section class="panel readiness-context"><div class="panel-heading"><div><span class="heading-bar"></span><h2>申报基本条件</h2></div><span class="status-chip review">人工核验</span></div><div class="check-row"><span>建设主体资质</span><b>需材料核验</b></div><div class="check-row"><span>明确四至边界</span><b>示意边界待替换</b></div><div class="check-row"><span>统计、计量和监测基础</span><b>部分数据缺口</b></div><div class="check-row"><span>近三年重大事故情况</span><b>需主管材料</b></div><p class="panel-footnote">基本条件与建设指标分开判断；本页不代表正式申报资格或官方验收。</p></section>',1))]),v("section",Rw,[w[91]||(w[91]=v("div",{class:"panel-heading"},[v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"建设指标追踪")]),v("span",{class:"muted"},"1 项核心指标 · 5 项引导指标")],-1)),w[92]||(w[92]=v("div",{class:"indicator-table-head"},[v("span",null,"指标"),v("span",null,"当前值"),v("span",null,"试行目标"),v("span",null,"预评估状态"),v("span",null,"数据依据")],-1)),(Le(!0),Fe(st,null,kt(Ge(Cd),_=>(Le(),Fe("div",{key:_.id,class:"indicator-table-row"},[v("b",null,se(_.name),1),v("span",null,se(_.value),1),v("span",null,se(_.target),1),v("span",{class:wt(["status-chip",_.status])},se(Ge(KS)[_.status]),3),v("small",null,se(_.evidence),1)]))),128))]),w[93]||(w[93]=ur('<section class="panel gap-panel"><div class="panel-heading"><div><span class="heading-bar"></span><h2>优先处理的差距</h2></div></div><div class="gap-list"><div><span class="gap-index">00</span><p><b>确认等价值折标与申报适用规模</b><small>核实年度能源消费、折标系数与适用规则；当前核心指标不自动判定。</small></p></div><div><span class="gap-index">01</span><p><b>补齐产品单位能耗证据</b><small>确认各企业适用产品与现行二级能耗限额标准，补充产量和单位能耗数据。</small></p></div><div><span class="gap-index">02</span><p><b>提高工业固废综合利用率</b><small>演示值 76.4%，距试行目标仍差 3.6 个百分点。</small></p></div><div><span class="gap-index">03</span><p><b>复核余热/余冷/余压利用数据</b><small>演示值 46.0%，需复核加权依据并评估回收项目。</small></p></div></div></section>',1))],64)):Vt("",!0),t.value==="alerts"?(Le(),Fe("div",Cw,[v("section",Pw,[v("div",Iw,[w[94]||(w[94]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"活动告警")],-1)),v("span",Dw,se(Ge(Gn).length)+" 条演示事件",1)]),(Le(!0),Fe(st,null,kt(Ge(Gn),_=>(Le(),Fe("button",{key:_.id,class:wt(["alert-list-item",{selected:D.value===_.id}]),onClick:p=>{D.value=_.id,u.value=_.objectId}},[v("span",{class:wt(["status-dot",_.level])},null,2),v("span",null,[v("b",null,se(_.title),1),v("small",null,se(_.id)+" · "+se(_.time)+" · "+se(L.value[_.id]),1)])],10,Lw))),128))]),v("section",Uw,[v("div",Nw,[w[95]||(w[95]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"事件详情")],-1)),v("span",Fw,se(L.value[D.value]),1)]),v("h3",null,se(I.value.title),1),v("p",null,se(I.value.text),1),v("div",Ow,[v("div",null,[w[96]||(w[96]=v("span",null,"定位对象",-1)),v("strong",null,se(Ge(In).find(_=>_.id===I.value.objectId)?.name),1)]),v("div",null,[w[97]||(w[97]=v("span",null,"触发时间",-1)),v("strong",null,se(P.value)+" "+se(I.value.time),1)]),w[98]||(w[98]=v("div",null,[v("span",null,"数据性质"),v("strong",null,"演示阈值 / 模拟事件")],-1)),w[99]||(w[99]=v("div",null,[v("span",null,"建议动作"),v("strong",null,"核对计量点、生产计划与原始记录")],-1))]),v("div",Bw,[v("button",{class:"primary-button",disabled:L.value[D.value]==="已处理",onClick:Xe},se(L.value[D.value]==="待确认"?"确认并开始处理":L.value[D.value]==="处理中"?"标记已处理":"已处理"),9,zw),v("button",{class:"outline-button",onClick:w[17]||(w[17]=_=>a(I.value.buildingId,I.value.assetId))},"在设备场景定位")]),w[100]||(w[100]=v("p",{class:"panel-footnote"},"演示动作保存在当前页面状态；正式系统应记录责任人、时间和审计轨迹。",-1))])])):Vt("",!0),t.value==="sources"?(Le(),Fe(st,{key:4},[v("div",kw,[w[105]||(w[105]=v("div",null,[v("span",null,"接入对象"),v("strong",null,[nt("9 "),v("small",null,"个")])],-1)),v("div",null,[w[102]||(w[102]=v("span",null,"数据点总数",-1)),v("strong",null,[nt(se(H.value)+" ",1),w[101]||(w[101]=v("small",null,"个",-1))])]),v("div",null,[w[104]||(w[104]=v("span",null,"当前在线",-1)),v("strong",null,[nt(se(K.value)+" ",1),w[103]||(w[103]=v("small",null,"个",-1))])]),w[106]||(w[106]=v("div",null,[v("span",null,"接入方式"),v("strong",{class:"small-value"},"系统 / 仪表 / 填报")],-1))]),v("div",Hw,[v("section",Vw,[v("div",{class:"panel-heading"},[w[107]||(w[107]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"数据源连接")],-1)),v("button",{class:"text-action",onClick:le},"模拟重试同步")]),(Le(!0),Fe(st,null,kt(Ge(El),_=>(Le(),Fe("div",{key:_.id,class:"source-row"},[v("div",Gw,[gt(Pn,{name:_.type==="自动采集"?"meter":_.type==="系统接口"?"api":"form"},null,8,["name"])]),v("div",null,[v("b",null,se(_.name),1),v("small",null,se(_.type)+" · 更新频率 "+se(_.frequency),1)]),v("strong",null,se(_.online)+" / "+se(_.count),1),v("span",{class:wt(["status-chip",_.state==="normal"?"pass":"review"])},se(_.state==="normal"?"正常":"部分缺失"),3)]))),128))]),w[108]||(w[108]=ur('<section class="panel wide-panel"><div class="panel-heading"><div><span class="heading-bar"></span><h2>数据需求分组</h2></div></div><div class="requirement-group"><h3>基础数据</h3><p>申报边界、企业与公共设施清单、年度分能源品种消费、受入与送出电热量、适用的工业过程数据、因子来源与凭证。</p><span>缺失时停止相关指标自动判定</span></div><div class="requirement-group"><h3>条件必备</h3><p>适用产品能耗限额、绿电与绿证凭证、特定行业工业过程和相关引导指标数据。</p><span>先判断适用条件，再要求提供证据</span></div><div class="requirement-group"><h3>额外数据</h3><p>天气、视频、设备秒级遥测、能源成本、策略推演参数等。</p><span>用于增强展示和分析</span></div></section>',1))])],64)):Vt("",!0)])),w[109]||(w[109]=v("footer",{class:"app-footer"},[v("span",null,"DEMO · 演示数据，非真实园区"),v("span",null,"规则参考：发改环资〔2025〕910号附件 3、4（试行）"),v("span",null,"前端交互原型 v0.5")],-1)),ee.value?(Le(),Fe("div",Ww,se(ee.value),1)):Vt("",!0)]))}});l0(Xw).mount("#app");
