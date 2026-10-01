(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Tc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const xt={},es=[],Kn=()=>{},Ed=()=>!1,sa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ra=n=>n.startsWith("onUpdate:"),Ht=Object.assign,Ac=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Pp=Object.prototype.hasOwnProperty,ct=(n,e)=>Pp.call(n,e),$e=Array.isArray,Ii=n=>Wr(n)==="[object Map]",Vo=n=>Wr(n)==="[object Set]",Eu=n=>Wr(n)==="[object Date]",Ze=n=>typeof n=="function",Dt=n=>typeof n=="string",Zn=n=>typeof n=="symbol",_t=n=>n!==null&&typeof n=="object",wd=n=>(_t(n)||Ze(n))&&Ze(n.then)&&Ze(n.catch),Td=Object.prototype.toString,Wr=n=>Td.call(n),Ip=n=>Wr(n).slice(8,-1),Ad=n=>Wr(n)==="[object Object]",Rc=n=>Dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,gr=Tc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Dp=/-\w/g,Un=oa(n=>n.replace(Dp,e=>e.slice(1).toUpperCase())),Lp=/\B([A-Z])/g,Bi=oa(n=>n.replace(Lp,"-$1").toLowerCase()),Rd=oa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ta=oa(n=>n?`on${Rd(n)}`:""),Yn=(n,e)=>!Object.is(n,e),Lo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Cd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Cc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let wu;const aa=()=>wu||(wu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fi(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Dt(i)?Op(i):fi(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Dt(n)||_t(n))return n}const Up=/;(?![^(]*\))/g,Np=/:([^]+)/,Fp=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Op(n){const e={};return n.replace(Fp,t=>t.startsWith("/*")?"":t).split(Up).forEach(t=>{if(t){const i=t.split(Np);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function wt(n){let e="";if(Dt(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=wt(n[t]);i&&(e+=i+" ")}else if(_t(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Bp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zp=Tc(Bp);function Pd(n){return!!n||n===""}function kp(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=la(n[s],e[s],t);return i}function Tu(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&la(r,i[a],t)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Hp(n,e,t){let i=Ii(n),s=Ii(e);if(i||s||(i=Vo(n),s=Vo(e),i||s))return i&&s?Tu(n,e,t):!1;const r=Object.keys(n).length,o=Object.keys(e).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!la(n[a],e[a],t))return!1}return String(n)===String(e)}function Au(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const o=i(n,e,t);return s.delete(n),r.delete(e),o}function la(n,e,t){if(n===e)return!0;let i=Eu(n),s=Eu(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=Zn(n),s=Zn(e),i||s?n===e:(i=$e(n),s=$e(e),i||s?i&&s?Au(n,e,t,kp):!1:(i=_t(n),s=_t(e),i||s?!i||!s?!1:Au(n,e,t,Hp):String(n)===String(e))))}const Id=n=>!!(n&&n.__v_isRef===!0),oe=n=>Dt(n)?n:n==null?"":$e(n)||_t(n)&&(n.toString===Td||!Ze(n.toString))?Id(n)?oe(n.value):JSON.stringify(n,Dd,2):String(n),Dd=(n,e)=>Id(e)?Dd(n,e.value):Ii(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Aa(i,r)+" =>"]=s,t),{})}:Vo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Aa(t))}:Zn(e)?Aa(e):_t(e)&&!$e(e)&&!Ad(e)?String(e):e,Aa=(n,e="")=>{var t;return Zn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let zt;class Vp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&zt&&(zt.active?(this.parent=zt,this.index=(zt.scopes||(zt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=zt;try{return zt=this,e()}finally{zt=t}}}on(){++this._on===1&&(this.prevScope=zt,zt=this)}off(){if(this._on>0&&--this._on===0){if(zt===this)zt=this.prevScope;else{let e=zt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Gp(){return zt}let Mt;const Ra=new WeakSet;class Ld{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&(zt.active?zt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ra.has(this)&&(Ra.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ru(this),Fd(this);const e=Mt,t=Nn;Mt=this,Nn=!0;try{return this.fn()}finally{Od(this),Mt=e,Nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Dc(e);this.deps=this.depsTail=void 0,Ru(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ra.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yl(this)&&this.run()}get dirty(){return yl(this)}}let Ud=0,_r,vr;function Nd(n,e=!1){if(n.flags|=8,e){n.next=vr,vr=n;return}n.next=_r,_r=n}function Pc(){Ud++}function Ic(){if(--Ud>0)return;if(vr){let e=vr;for(vr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;_r;){let e=_r;for(_r=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Fd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Od(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Dc(i),Wp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function yl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Bd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Rr)||(n.globalVersion=Rr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!yl(n))))return;n.flags|=2;const e=n.dep,t=Mt,i=Nn;Mt=n,Nn=!0;try{Fd(n);const s=n.fn(n._value);(e.version===0||Yn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Mt=t,Nn=i,Od(n),n.flags&=-3}}function Dc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Dc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Wp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nn=!0;const zd=[];function _i(){zd.push(Nn),Nn=!1}function vi(){const n=zd.pop();Nn=n===void 0?!0:n}function Ru(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Mt;Mt=void 0;try{e()}finally{Mt=t}}}let Rr=0;class Xp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Mt||!Nn||Mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Mt)t=this.activeLink=new Xp(Mt,this),Mt.deps?(t.prevDep=Mt.depsTail,Mt.depsTail.nextDep=t,Mt.depsTail=t):Mt.deps=Mt.depsTail=t,kd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Mt.depsTail,t.nextDep=void 0,Mt.depsTail.nextDep=t,Mt.depsTail=t,Mt.deps===t&&(Mt.deps=i)}return t}trigger(e){this.version++,Rr++,this.notify(e)}notify(e){Pc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ic()}}}function kd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)kd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ml=new WeakMap,ss=Symbol(""),Sl=Symbol(""),Cr=Symbol("");function Xt(n,e,t){if(Nn&&Mt){let i=Ml.get(n);i||Ml.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Lc),s.map=i,s.key=t),s.track()}}function pi(n,e,t,i,s,r){const o=Ml.get(n);if(!o){Rr++;return}const a=l=>{l&&l.trigger()};if(Pc(),e==="clear")o.forEach(a);else{const l=$e(n),c=l&&Rc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Cr||!Zn(d)&&d>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Cr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ss)),Ii(n)&&a(o.get(Sl)));break;case"delete":l||(a(o.get(ss)),Ii(n)&&a(o.get(Sl)));break;case"set":Ii(n)&&a(o.get(ss));break}}Ic()}function ms(n){const e=at(n);return e===n||(Xt(e,"iterate",Cr),En(n))?e:Jn(n)?Di(n)?e.map(t=>Ni(Tn(t))):e.map(Ni):e.map(Tn)}function ca(n){return Xt(n=at(n),"iterate",Cr),n}function Gn(n,e){return Jn(n)?Ni(Di(n)?Tn(e):e):Tn(e)}const Yp={__proto__:null,[Symbol.iterator](){return Ca(this,Symbol.iterator,n=>Gn(this,n))},concat(...n){return ms(this).concat(...n.map(e=>$e(e)?ms(e):e))},entries(){return Ca(this,"entries",n=>(n[1]=Gn(this,n[1]),n))},every(n,e){return ii(this,"every",n,e,void 0,arguments)},filter(n,e){return ii(this,"filter",n,e,t=>t.map(i=>Gn(this,i)),arguments)},find(n,e){return ii(this,"find",n,e,t=>Gn(this,t),arguments)},findIndex(n,e){return ii(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ii(this,"findLast",n,e,t=>Gn(this,t),arguments)},findLastIndex(n,e){return ii(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ii(this,"forEach",n,e,void 0,arguments)},includes(...n){return Pa(this,"includes",n)},indexOf(...n){return Pa(this,"indexOf",n)},join(n){return ms(this).join(n)},lastIndexOf(...n){return Pa(this,"lastIndexOf",n)},map(n,e){return ii(this,"map",n,e,void 0,arguments)},pop(){return tr(this,"pop")},push(...n){return tr(this,"push",n)},reduce(n,...e){return Cu(this,"reduce",n,e)},reduceRight(n,...e){return Cu(this,"reduceRight",n,e)},shift(){return tr(this,"shift")},some(n,e){return ii(this,"some",n,e,void 0,arguments)},splice(...n){return tr(this,"splice",n)},toReversed(){return ms(this).toReversed()},toSorted(n){return ms(this).toSorted(n)},toSpliced(...n){return ms(this).toSpliced(...n)},unshift(...n){return tr(this,"unshift",n)},values(){return Ca(this,"values",n=>Gn(this,n))}};function Ca(n,e,t){const i=ca(n),s=i[e]();return i!==n&&!En(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const qp=Array.prototype;function ii(n,e,t,i,s,r){const o=ca(n),a=o!==n&&!En(n),l=o[e];if(l!==qp[e]){const h=l.apply(n,r);return a?Tn(h):h}let c=t;o!==n&&(a?c=function(h,d){return t.call(this,Gn(n,h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Cu(n,e,t,i){const s=ca(n),r=s!==n&&!En(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Gn(n,c)),t.call(this,c,Gn(n,u),h,n)}):t.length>3&&(o=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](o,...i);return a?Gn(n,l):l}function Pa(n,e,t){const i=at(n);Xt(i,"iterate",Cr);const s=i[e](...t);return(s===-1||s===!1)&&Oc(t[0])?(t[0]=at(t[0]),i[e](...t)):s}function tr(n,e,t=[]){_i(),Pc();const i=at(n)[e].apply(n,t);return Ic(),vi(),i}const $p=Tc("__proto__,__v_isRef,__isVue"),Hd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zn));function jp(n){Zn(n)||(n=String(n));const e=at(this);return Xt(e,"has",n),e.hasOwnProperty(n)}class Vd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?rm:Yd:r?Xd:Wd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!s){let l;if(o&&(l=Yp[t]))return l;if(t==="hasOwnProperty")return jp}const a=Reflect.get(e,t,Yt(e)?e:i);if((Zn(t)?Hd.has(t):$p(t))||(s||Xt(e,"get",t),r))return a;if(Yt(a)){const l=o&&Rc(t)?a:a.value;return s&&_t(l)?El(l):l}return _t(a)?s?El(a):Nc(a):a}}class Gd extends Vd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=$e(e)&&Rc(t);if(!this._isShallow){const c=Jn(r);if(!En(i)&&!Jn(i)&&(r=at(r),i=at(i)),!o&&Yt(r)&&!Yt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:ct(e,t),l=Reflect.set(e,t,i,Yt(e)?e:s);return e===at(s)&&l&&(a?Yn(i,r)&&pi(e,"set",t,i):pi(e,"add",t,i)),l}deleteProperty(e,t){const i=ct(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&pi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Zn(t)||!Hd.has(t))&&Xt(e,"has",t),i}ownKeys(e){return Xt(e,"iterate",$e(e)?"length":ss),Reflect.ownKeys(e)}}class Kp extends Vd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Zp=new Gd,Jp=new Kp,Qp=new Gd(!0);const bl=n=>n,Zr=n=>Reflect.getPrototypeOf(n);function em(n,e,t){return function(...i){const s=this.__v_raw,r=at(s),o=Ii(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?bl:e?Ni:Tn;return!e&&Xt(r,"iterate",l?Sl:ss),Ht(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function Jr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function tm(n,e){const t={get(s){const r=this.__v_raw,o=at(r),a=at(s);n||(Yn(s,a)&&Xt(o,"get",s),Xt(o,"get",a));const{has:l}=Zr(o),c=e?bl:n?Ni:Tn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Xt(at(s),"iterate",ss),s.size},has(s){const r=this.__v_raw,o=at(r),a=at(s);return n||(Yn(s,a)&&Xt(o,"has",s),Xt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=at(a),c=e?bl:n?Ni:Tn;return!n&&Xt(l,"iterate",ss),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Ht(t,n?{add:Jr("add"),set:Jr("set"),delete:Jr("delete"),clear:Jr("clear")}:{add(s){const r=at(this),o=Zr(r),a=at(s),l=!e&&!En(s)&&!Jn(s)?a:s;return o.has.call(r,l)||Yn(s,l)&&o.has.call(r,s)||Yn(a,l)&&o.has.call(r,a)||(r.add(l),pi(r,"add",l,l)),this},set(s,r){!e&&!En(r)&&!Jn(r)&&(r=at(r));const o=at(this),{has:a,get:l}=Zr(o);let c=a.call(o,s);c||(s=at(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Yn(r,u)&&pi(o,"set",s,r):pi(o,"add",s,r),this},delete(s){const r=at(this),{has:o,get:a}=Zr(r);let l=o.call(r,s);l||(s=at(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&pi(r,"delete",s,void 0),c},clear(){const s=at(this),r=s.size!==0,o=s.clear();return r&&pi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=em(s,n,e)}),t}function Uc(n,e){const t=tm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ct(t,s)&&s in i?t:i,s,r)}const nm={get:Uc(!1,!1)},im={get:Uc(!1,!0)},sm={get:Uc(!0,!1)};const Wd=new WeakMap,Xd=new WeakMap,Yd=new WeakMap,rm=new WeakMap;function om(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nc(n){return Jn(n)?n:Fc(n,!1,Zp,nm,Wd)}function am(n){return Fc(n,!1,Qp,im,Xd)}function El(n){return Fc(n,!0,Jp,sm,Yd)}function Fc(n,e,t,i,s){if(!_t(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=om(Ip(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Di(n){return Jn(n)?Di(n.__v_raw):!!(n&&n.__v_isReactive)}function Jn(n){return!!(n&&n.__v_isReadonly)}function En(n){return!!(n&&n.__v_isShallow)}function Oc(n){return n?!!n.__v_raw:!1}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function lm(n){return!ct(n,"__v_skip")&&Object.isExtensible(n)&&Cd(n,"__v_skip",!0),n}const Tn=n=>_t(n)?Nc(n):n,Ni=n=>_t(n)?El(n):n;function Yt(n){return n?n.__v_isRef===!0:!1}function At(n){return cm(n,!1)}function cm(n,e){return Yt(n)?n:new um(n,e)}class um{constructor(e,t){this.dep=new Lc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:at(e),this._value=t?e:Tn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||En(e)||Jn(e);e=i?e:at(e),Yn(e,t)&&(this._rawValue=e,this._value=i?e:Tn(e),this.dep.trigger())}}function We(n){return Yt(n)?n.value:n}const hm={get:(n,e,t)=>e==="__v_raw"?n:We(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Yt(s)&&!Yt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function qd(n){return Di(n)?n:new Proxy(n,hm)}class dm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Lc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Mt!==this)return Nd(this,!0),!0}get value(){const e=this.dep.track();return Bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fm(n,e,t=!1){let i,s;return Ze(n)?i=n:(i=n.get,s=n.set),new dm(i,s,t)}const Qr={},Go=new WeakMap;let Ki;function pm(n,e=!1,t=Ki){if(t){let i=Go.get(t);i||Go.set(t,i=[]),i.push(n)}}function mm(n,e,t=xt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=y=>s?y:En(y)||s===!1||s===0?mi(y,1):mi(y);let u,h,d,f,x=!1,S=!1;if(Yt(n)?(h=()=>n.value,x=En(n)):Di(n)?(h=()=>c(n),x=!0):$e(n)?(S=!0,x=n.some(y=>Di(y)||En(y)),h=()=>n.map(y=>{if(Yt(y))return y.value;if(Di(y))return c(y);if(Ze(y))return l?l(y,2):y()})):Ze(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){_i();try{d()}finally{vi()}}const y=Ki;Ki=u;try{return l?l(n,3,[f]):n(f)}finally{Ki=y}}:h=Kn,e&&s){const y=h,U=s===!0?1/0:s;h=()=>mi(y(),U)}const g=Gp(),m=()=>{u.stop(),g&&g.active&&Ac(g.effects,u)};if(r&&e){const y=e;e=(...U)=>{const N=y(...U);return m(),N}}let C=S?new Array(n.length).fill(Qr):Qr;const E=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const U=u.run();if(y||s||x||(S?U.some((N,F)=>Yn(N,C[F])):Yn(U,C))){d&&d();const N=Ki;Ki=u;try{const F=[U,C===Qr?void 0:S&&C[0]===Qr?[]:C,f];C=U,l?l(e,3,F):e(...F)}finally{Ki=N}}}else u.run()};return a&&a(E),u=new Ld(h),u.scheduler=o?()=>o(E,!1):E,f=y=>pm(y,!1,u),d=u.onStop=()=>{const y=Go.get(u);if(y){if(l)l(y,4);else for(const U of y)U();Go.delete(u)}},e?i?E(!0):C=u.run():o?o(E.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function mi(n,e=1/0,t){if(e<=0||!_t(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Yt(n))mi(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)mi(n[i],e,t);else if(Vo(n)||Ii(n))n.forEach(i=>{mi(i,e,t)});else if(Ad(n)){for(const i in n)mi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&mi(n[i],e,t)}return n}function Xr(n,e,t,i){try{return i?n(...i):n()}catch(s){ua(s,e,t)}}function Fn(n,e,t,i){if(Ze(n)){const s=Xr(n,e,t,i);return s&&wd(s)&&s.catch(r=>{ua(r,e,t)}),s}if($e(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Fn(n[r],e,t,i));return s}}function ua(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){_i(),Xr(r,null,10,[n,l,c]),vi();return}}gm(n,t,s,i,o)}function gm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const en=[];let Vn=-1;const Bs=[];let Ai=null,Ds=0;const $d=Promise.resolve();let Wo=null;function _m(n){const e=Wo||$d;return n?e.then(this?n.bind(this):n):e}function vm(n){let e=Vn+1,t=en.length;for(;e<t;){const i=e+t>>>1,s=en[i],r=Pr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Bc(n){if(!(n.flags&1)){const e=Pr(n),t=en[en.length-1];!t||!(n.flags&2)&&e>=Pr(t)?en.push(n):en.splice(vm(e),0,n),n.flags|=1,jd()}}function jd(){Wo||(Wo=$d.then(Zd))}function xm(n){if(!$e(n))Ai&&n.id===-1?Ai.splice(Ds+1,0,n):n.flags&1||(Bs.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)Bs.push(n[e]);jd()}function Pu(n,e,t=Vn+1){for(;t<en.length;t++){const i=en[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;en.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Kd(n){if(Bs.length){const e=[...new Set(Bs)].sort((t,i)=>Pr(t)-Pr(i));if(Bs.length=0,Ai){for(let t=0;t<e.length;t++)Ai.push(e[t]);return}for(Ai=e,Ds=0;Ds<Ai.length;Ds++){const t=Ai[Ds];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ai=null,Ds=0}}const Pr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zd(n){try{for(Vn=0;Vn<en.length;Vn++){const e=en[Vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Xr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vn<en.length;Vn++){const e=en[Vn];e&&(e.flags&=-2)}Vn=-1,en.length=0,Kd(),Wo=null,(en.length||Bs.length)&&Zd()}}let bn=null,Jd=null;function Xo(n){const e=bn;return bn=n,Jd=n&&n.type.__scopeId||null,e}function ym(n,e=bn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Hu(-1);const r=Xo(e),o=rs.length;let a;try{a=n(...s)}finally{for(let l=rs.length;l>o;l--)bf();Xo(r),i._d&&Hu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Mm(n,e){if(bn===null)return n;const t=va(bn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=xt]=e[s];r&&(Ze(r)&&(r={mounted:r,updated:r}),r.deep&&mi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Vi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(_i(),Fn(l,t,8,[n.el,a,n,e]),vi())}}function Sm(n,e){if(nn){let t=nn.provides;const i=nn.parent&&nn.parent.provides;i===t&&(t=nn.provides=Object.create(i)),t[n]=e}}function Uo(n,e,t=!1){const i=_g();if(i||zs){let s=zs?zs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ze(e)?e.call(i&&i.proxy):e}}const bm=Symbol.for("v-scx"),Em=()=>Uo(bm);function xr(n,e,t){return Qd(n,e,t)}function Qd(n,e,t=xt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ht({},t),l=e&&i||!e&&r!=="post";let c;if(Lr){if(r==="sync"){const f=Em();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Kn,f.resume=Kn,f.pause=Kn,f}}const u=nn;a.call=(f,x,S)=>Fn(f,u,x,S);let h=!1;r==="post"?a.scheduler=f=>{cn(f,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,x)=>{x?f():Bc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=mm(n,e,a);return Lr&&(c?c.push(d):l&&d()),d}function wm(n,e,t){const i=this.proxy,s=Dt(n)?n.includes(".")?ef(i,n):()=>i[n]:n.bind(i,i);let r;Ze(e)?r=e:(r=e.handler,t=e);const o=Yr(this),a=Qd(s,r.bind(i),t);return o(),a}function ef(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Tm=Symbol("_vte"),ha=n=>n.__isTeleport,Ia=Symbol("_leaveCb");function Am(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==xi){e=t;break}}return e}function tf(n){if(!kc(n))return ha(n.type)&&n.children?Am(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ze(t.default))return t.default()}}function zc(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;zc(ha(t.type)&&tf(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function da(n,e){return Ze(n)?Ht({name:n.name},e,{setup:n}):n}function nf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Iu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Yo=new WeakMap;function yr(n,e,t,i,s=!1){if($e(n)){n.forEach((S,g)=>yr(S,e&&($e(e)?e[g]:e),t,i,s));return}if(Mr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&yr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?va(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===xt?a.refs={}:a.refs,h=a.setupState,d=at(h),f=h===xt?Ed:S=>Iu(u,S)?!1:ct(d,S),x=(S,g)=>!(g&&Iu(u,g));if(c!=null&&c!==l){if(Du(e),Dt(c))u[c]=null,f(c)&&(h[c]=null);else if(Yt(c)){const S=e;x(c,S.k)&&(c.value=null),S.k&&(u[S.k]=null)}}if(Ze(l))Xr(l,a,12,[o,u]);else{const S=Dt(l),g=Yt(l);if(S||g){const m=()=>{if(n.f){const C=S?f(l)?h[l]:u[l]:x()||!n.k?l.value:u[n.k];if(s)$e(C)&&Ac(C,r);else if($e(C))C.includes(r)||C.push(r);else if(S)u[l]=[r],f(l)&&(h[l]=u[l]);else{const E=[r];x(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else S?(u[l]=o,f(l)&&(h[l]=o)):g&&(x(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const C=()=>{m(),Yo.delete(n)};C.id=-1,Yo.set(n,C),cn(C,t)}else Du(n),m()}}}function Du(n){const e=Yo.get(n);e&&(e.flags|=8,Yo.delete(n))}aa().requestIdleCallback;aa().cancelIdleCallback;const Mr=n=>!!n.type.__asyncLoader,kc=n=>n.type.__isKeepAlive;function Rm(n,e){sf(n,"a",e)}function Cm(n,e){sf(n,"da",e)}function sf(n,e,t=nn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(fa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)kc(s.parent.vnode)&&Pm(i,e,t,s),s=s.parent}}function Pm(n,e,t,i){const s=fa(e,n,i,!0);rf(()=>{Ac(i[e],s)},t)}function fa(n,e,t=nn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{_i();const a=Yr(t),l=Fn(e,t,n,o);return a(),vi(),l});return i?s.unshift(r):s.push(r),r}}const yi=n=>(e,t=nn)=>{(!Lr||n==="sp")&&fa(n,(...i)=>e(...i),t)},Im=yi("bm"),pa=yi("m"),Dm=yi("bu"),Lm=yi("u"),ma=yi("bum"),rf=yi("um"),Um=yi("sp"),Nm=yi("rtg"),Fm=yi("rtc");function Om(n,e=nn){fa("ec",n,e)}const Bm=Symbol.for("v-ndc");function Qt(n,e,t,i){let s;const r=t,o=$e(n);if(o||Dt(n)){const a=o&&Di(n);let l=!1,c=!1;a&&(l=!En(n),c=Jn(n),n=ca(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?Ni(Tn(n[u])):Tn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(_t(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const wl=n=>n?Rf(n)?va(n):wl(n.parent):null,Sr=Ht(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>wl(n.parent),$root:n=>wl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>af(n),$forceUpdate:n=>n.f||(n.f=()=>{Bc(n.update)}),$nextTick:n=>n.n||(n.n=_m.bind(n.proxy)),$watch:n=>wm.bind(n)}),Da=(n,e)=>n!==xt&&!n.__isScriptSetup&&ct(n,e),zm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Da(i,e))return o[e]=1,i[e];if(s!==xt&&ct(s,e))return o[e]=2,s[e];if(ct(r,e))return o[e]=3,r[e];if(t!==xt&&ct(t,e))return o[e]=4,t[e];Tl&&(o[e]=0)}}const c=Sr[e];let u,h;if(c)return e==="$attrs"&&Xt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==xt&&ct(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,ct(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Da(s,e)?(s[e]=t,!0):i!==xt&&ct(i,e)?(i[e]=t,!0):ct(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==xt&&a[0]!=="$"&&ct(n,a)||Da(e,a)||ct(r,a)||ct(i,a)||ct(Sr,a)||ct(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ct(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Lu(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Tl=!0;function km(n){const e=af(n),t=n.proxy,i=n.ctx;Tl=!1,e.beforeCreate&&Uu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:x,activated:S,deactivated:g,beforeDestroy:m,beforeUnmount:C,destroyed:E,unmounted:y,render:U,renderTracked:N,renderTriggered:F,errorCaptured:B,serverPrefetch:R,expose:A,inheritAttrs:H,components:K,directives:z,filters:D}=e;if(c&&Hm(c,i,null),o)for(const O in o){const L=o[O];Ze(L)&&(i[O]=L.bind(t))}if(s){const O=s.call(t,t);_t(O)&&(n.data=Nc(O))}if(Tl=!0,r)for(const O in r){const L=r[O],ne=Ze(L)?L.bind(t,t):Ze(L.get)?L.get.bind(t,t):Kn,he=!Ze(L)&&Ze(L.set)?L.set.bind(t):Kn,W=lt({get:ne,set:he});Object.defineProperty(i,O,{enumerable:!0,configurable:!0,get:()=>W.value,set:me=>W.value=me})}if(a)for(const O in a)of(a[O],i,t,O);if(l){const O=Ze(l)?l.call(t):l;Reflect.ownKeys(O).forEach(L=>{Sm(L,O[L])})}u&&Uu(u,n,"c");function I(O,L){$e(L)?L.forEach(ne=>O(ne.bind(t))):L&&O(L.bind(t))}if(I(Im,h),I(pa,d),I(Dm,f),I(Lm,x),I(Rm,S),I(Cm,g),I(Om,B),I(Fm,N),I(Nm,F),I(ma,C),I(rf,y),I(Um,R),$e(A))if(A.length){const O=n.exposed||(n.exposed={});A.forEach(L=>{Object.defineProperty(O,L,{get:()=>t[L],set:ne=>t[L]=ne,enumerable:!0})})}else n.exposed||(n.exposed={});U&&n.render===Kn&&(n.render=U),H!=null&&(n.inheritAttrs=H),K&&(n.components=K),z&&(n.directives=z),R&&nf(n)}function Hm(n,e,t=Kn){$e(n)&&(n=Al(n));for(const i in n){const s=n[i];let r;_t(s)?"default"in s?r=Uo(s.from||i,s.default,!0):r=Uo(s.from||i):r=Uo(s),Yt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Uu(n,e,t){Fn($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function of(n,e,t,i){let s=i.includes(".")?ef(t,i):()=>t[i];if(Dt(n)){const r=e[n];Ze(r)&&xr(s,r)}else if(Ze(n))xr(s,n.bind(t));else if(_t(n))if($e(n))n.forEach(r=>of(r,e,t,i));else{const r=Ze(n.handler)?n.handler.bind(t):e[n.handler];Ze(r)&&xr(s,r,n)}}function af(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>qo(l,c,o,!0)),qo(l,e,o)),_t(e)&&r.set(e,l),l}function qo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&qo(n,r,t,!0),s&&s.forEach(o=>qo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Vm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Vm={data:Nu,props:Fu,emits:Fu,methods:dr,computed:dr,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:dr,directives:dr,watch:Wm,provide:Nu,inject:Gm};function Nu(n,e){return e?n?function(){return Ht(Ze(n)?n.call(this,this):n,Ze(e)?e.call(this,this):e)}:e:n}function Gm(n,e){return dr(Al(n),Al(e))}function Al(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Kt(n,e){return n?[...new Set([].concat(n,e))]:e}function dr(n,e){return n?Ht(Object.create(null),n,e):e}function Fu(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Ht(Object.create(null),Lu(n),Lu(e??{})):e}function Wm(n,e){if(!n)return e;if(!e)return n;const t=Ht(Object.create(null),n);for(const i in e)t[i]=Kt(n[i],e[i]);return t}function lf(){return{app:null,config:{isNativeTag:Ed,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xm=0;function Ym(n,e){return function(i,s=null){Ze(i)||(i=Ht({},i)),s!=null&&!_t(s)&&(s=null);const r=lf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Xm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:bg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ze(u.install)?(o.add(u),u.install(c,...h)):Ze(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||_n(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(f,u,d),l=!0,c._container=u,u.__vue_app__=c,va(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Fn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=zs;zs=c;try{return u()}finally{zs=h}}};return c}}let zs=null;const qm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Un(e)}Modifiers`]||n[`${Bi(e)}Modifiers`];function $m(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||xt;let s=t;const r=e.startsWith("update:"),o=r&&qm(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Dt(u)?u.trim():u)),o.number&&(s=s.map(Cc)));let a,l=i[a=Ta(e)]||i[a=Ta(Un(e))];!l&&r&&(l=i[a=Ta(Bi(e))]),l&&Fn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Fn(c,n,6,s)}}const jm=new WeakMap;function cf(n,e,t=!1){const i=t?jm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ze(n)){const l=c=>{const u=cf(c,e,!0);u&&(a=!0,Ht(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(_t(n)&&i.set(n,null),null):($e(r)?r.forEach(l=>o[l]=null):Ht(o,r),_t(n)&&i.set(n,o),o)}function ga(n,e){return!n||!sa(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),ct(n,e[0].toLowerCase()+e.slice(1))||ct(n,Bi(e))||ct(n,e))}function Ou(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:x,inheritAttrs:S}=n,g=Xo(n);let m,C;try{if(t.shapeFlag&4){const y=s||i,U=y;m=Wn(c.call(U,y,u,h,f,d,x)),C=a}else{const y=e;m=Wn(y.length>1?y(h,{attrs:a,slots:o,emit:l}):y(h,null)),C=e.props?a:Km(a)}}catch(y){rs.length=0,ua(y,n,1),m=_n(xi)}let E=m;if(C&&S!==!1){const y=Object.keys(C),{shapeFlag:U}=E;y.length&&U&7&&(r&&y.some(ra)&&(C=Zm(C,r)),E=Xs(E,C,!1,!0))}if(t.dirs&&(E=Xs(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition){const y=ha(E.type)&&tf(E)||E;zc(y,t.transition)}return m=E,Xo(g),m}const Km=n=>{let e;for(const t in n)(t==="class"||t==="style"||sa(t))&&((e||(e={}))[t]=n[t]);return e},Zm=(n,e)=>{const t={};for(const i in n)(!ra(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Jm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Bu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(uf(o,i,d)&&!ga(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Bu(i,o,c):!0:!!o;return!1}function Bu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(uf(e,n,r)&&!ga(t,r))return!0}return!1}function uf(n,e,t){const i=n[t],s=e[t];return t==="style"&&_t(i)&&_t(s)?!la(i,s):i!==s}function Qm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const hf={},df=()=>Object.create(hf),ff=n=>Object.getPrototypeOf(n)===hf;function eg(n,e,t,i=!1){const s={},r=df();n.propsDefaults=Object.create(null),pf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:am(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function tg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=at(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ga(n.emitsOptions,d))continue;const f=e[d];if(l)if(ct(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const x=Un(d);s[x]=Rl(l,a,x,f,n,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{pf(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!ct(e,h)&&((u=Bi(h))===h||!ct(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Rl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ct(e,h))&&(delete r[h],c=!0)}c&&pi(n.attrs,"set","")}function pf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(gr(l))continue;const c=e[l];let u;s&&ct(s,u=Un(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ga(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=at(t),c=a||xt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Rl(s,l,h,c[h],n,!ct(c,h))}}return o}function Rl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ct(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ze(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Yr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Bi(t))&&(i=!0))}return i}const ng=new WeakMap;function mf(n,e,t=!1){const i=t?ng:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ze(n)){const u=h=>{l=!0;const[d,f]=mf(h,e,!0);Ht(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return _t(n)&&i.set(n,es),es;if($e(r))for(let u=0;u<r.length;u++){const h=Un(r[u]);zu(h)&&(o[h]=xt)}else if(r)for(const u in r){const h=Un(u);if(zu(h)){const d=r[u],f=o[h]=$e(d)||Ze(d)?{type:d}:Ht({},d),x=f.type;let S=!1,g=!0;if($e(x))for(let m=0;m<x.length;++m){const C=x[m],E=Ze(C)&&C.name;if(E==="Boolean"){S=!0;break}else E==="String"&&(g=!1)}else S=Ze(x)&&x.name==="Boolean";f[0]=S,f[1]=g,(S||ct(f,"default"))&&a.push(h)}}const c=[o,a];return _t(n)&&i.set(n,c),c}function zu(n){return n[0]!=="$"&&!gr(n)}const Hc=n=>n==="_"||n==="_ctx"||n==="$stable",Vc=n=>$e(n)?n.map(Wn):[Wn(n)],ig=(n,e,t)=>{if(e._n)return e;const i=ym((...s)=>Vc(e(...s)),t);return i._c=!1,i},gf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Hc(s))continue;const r=n[s];if(Ze(r))e[s]=ig(s,r,i);else if(r!=null){const o=Vc(r);e[s]=()=>o}}},_f=(n,e)=>{const t=Vc(e);n.slots.default=()=>t},vf=(n,e,t)=>{for(const i in e)(t||!Hc(i))&&(n[i]=e[i])},sg=(n,e,t)=>{const i=n.slots=df();if(n.vnode.shapeFlag&32){const s=e._;s?(vf(i,e,t),t&&Cd(i,"_",s,!0)):gf(e,i)}else e&&_f(n,e)},rg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=xt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:vf(s,e,t):(r=!e.$stable,gf(e,s)),o=e}else e&&(_f(n,e),o={default:1});if(r)for(const a in s)!Hc(a)&&o[a]==null&&delete s[a]},cn=ug;function og(n){return ag(n)}function ag(n,e){const t=aa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Kn,insertStaticContent:x}=n,S=(_,p,V,G=null,q=null,$=null,ae=void 0,Z=null,ie=!!p.dynamicChildren)=>{if(_===p)return;_&&!nr(_,p)&&(G=ue(_),me(_,q,$,!0),_=null),p.patchFlag===-2&&(ie=!1,p.dynamicChildren=null),p.dynamicChildren&&_&&_.dynamicChildren&&_.dynamicChildren.hasOnce&&(p.dynamicChildren===es&&(p.dynamicChildren=[]),p.dynamicChildren.hasOnce=!0);const{type:Y,ref:pe,shapeFlag:w}=p;switch(Y){case _a:g(_,p,V,G);break;case xi:m(_,p,V,G);break;case No:_==null&&C(p,V,G,ae);break;case ut:K(_,p,V,G,q,$,ae,Z,ie);break;default:w&1?U(_,p,V,G,q,$,ae,Z,ie):w&6?z(_,p,V,G,q,$,ae,Z,ie):(w&64||w&128)&&Y.process(_,p,V,G,q,$,ae,Z,ie,de)}pe!=null&&q?yr(pe,_&&_.ref,$,p||_,!p):pe==null&&_&&_.ref!=null&&yr(_.ref,null,$,_,!0)},g=(_,p,V,G)=>{if(_==null)i(p.el=a(p.children),V,G);else{const q=p.el=_.el;p.children!==_.children&&c(q,p.children)}},m=(_,p,V,G)=>{_==null?i(p.el=l(p.children||""),V,G):p.el=_.el},C=(_,p,V,G)=>{[_.el,_.anchor]=x(_.children,p,V,G,_.el,_.anchor)},E=({el:_,anchor:p},V,G)=>{let q;for(;_&&_!==p;)q=d(_),i(_,V,G),_=q;i(p,V,G)},y=({el:_,anchor:p})=>{let V;for(;_&&_!==p;)V=d(_),s(_),_=V;s(p)},U=(_,p,V,G,q,$,ae,Z,ie)=>{if(p.type==="svg"?ae="svg":p.type==="math"&&(ae="mathml"),_==null)N(p,V,G,q,$,ae,Z,ie);else{const Y=_.el&&_.el._isVueCE?_.el:null;try{Y&&Y._beginPatch(),R(_,p,q,$,ae,Z,ie)}finally{Y&&Y._endPatch()}}},N=(_,p,V,G,q,$,ae,Z)=>{let ie,Y;const{props:pe,shapeFlag:w,transition:M,dirs:X}=_;if(ie=_.el=o(_.type,$,pe&&pe.is,pe),w&8?u(ie,_.children):w&16&&B(_.children,ie,null,G,q,La(_,$),ae,Z),X&&Vi(_,null,G,"created"),F(ie,_,_.scopeId,ae,G),pe){for(const ce in pe)ce!=="value"&&!gr(ce)&&r(ie,ce,null,pe[ce],$,G);"value"in pe&&r(ie,"value",null,pe.value,$),(Y=pe.onVnodeBeforeMount)&&kn(Y,G,_)}X&&Vi(_,null,G,"beforeMount");const te=lg(q,M);te&&M.beforeEnter(ie),i(ie,p,V),((Y=pe&&pe.onVnodeMounted)||te||X)&&cn(()=>{Y&&kn(Y,G,_),te&&M.enter(ie),X&&Vi(_,null,G,"mounted")},q)},F=(_,p,V,G,q)=>{if(V&&f(_,V),G)for(let $=0;$<G.length;$++)f(_,G[$]);if(q){let $=q.subTree;if(p===$||Sf($.type)&&($.ssContent===p||$.ssFallback===p)){const ae=q.vnode;F(_,ae,ae.scopeId,ae.slotScopeIds,q.parent)}}},B=(_,p,V,G,q,$,ae,Z,ie=0)=>{for(let Y=ie;Y<_.length;Y++){const pe=_[Y]=Z?di(_[Y]):Wn(_[Y]);S(null,pe,p,V,G,q,$,ae,Z)}},R=(_,p,V,G,q,$,ae)=>{const Z=p.el=_.el;let{patchFlag:ie,dynamicChildren:Y,dirs:pe}=p;ie|=_.patchFlag&16;const w=_.props||xt,M=p.props||xt;let X;if(V&&Gi(V,!1),(X=M.onVnodeBeforeUpdate)&&kn(X,V,p,_),pe&&Vi(p,_,V,"beforeUpdate"),V&&Gi(V,!0),Y&&(!_.dynamicChildren||_.dynamicChildren.length!==Y.length)&&(ie=0,ae=!1,Y=null),(w.innerHTML&&M.innerHTML==null||w.textContent&&M.textContent==null)&&u(Z,""),Y?A(_.dynamicChildren,Y,Z,V,G,La(p,q),$):ae||L(_,p,Z,null,V,G,La(p,q),$,!1),ie>0){if(ie&16)H(Z,w,M,V,q);else if(ie&2&&w.class!==M.class&&r(Z,"class",null,M.class,q),ie&4&&r(Z,"style",w.style,M.style,q),ie&8){const te=p.dynamicProps;for(let ce=0;ce<te.length;ce++){const ee=te[ce],Me=w[ee],ge=M[ee];(ge!==Me||ee==="value")&&r(Z,ee,Me,ge,q,V)}}ie&1&&_.children!==p.children&&u(Z,p.children)}else!ae&&Y==null&&H(Z,w,M,V,q);((X=M.onVnodeUpdated)||pe)&&cn(()=>{X&&kn(X,V,p,_),pe&&Vi(p,_,V,"updated")},G)},A=(_,p,V,G,q,$,ae)=>{for(let Z=0;Z<p.length;Z++){const ie=_[Z],Y=p[Z],pe=ie.el&&(ie.type===ut||!nr(ie,Y)||ie.shapeFlag&198)?h(ie.el):V;S(ie,Y,pe,null,G,q,$,ae,!0)}},H=(_,p,V,G,q)=>{if(p!==V){if(p!==xt)for(const $ in p)!gr($)&&!($ in V)&&r(_,$,p[$],null,q,G);for(const $ in V){if(gr($))continue;const ae=V[$],Z=p[$];ae!==Z&&$!=="value"&&r(_,$,Z,ae,q,G)}"value"in V&&r(_,"value",p.value,V.value,q)}},K=(_,p,V,G,q,$,ae,Z,ie)=>{const Y=p.el=_?_.el:a(""),pe=p.anchor=_?_.anchor:a("");let{patchFlag:w,dynamicChildren:M,slotScopeIds:X}=p;X&&(Z=Z?Z.concat(X):X),_==null?(i(Y,V,G),i(pe,V,G),B(p.children||[],V,pe,q,$,ae,Z,ie)):w>0&&w&64&&M&&_.dynamicChildren&&_.dynamicChildren.length===M.length?(A(_.dynamicChildren,M,V,q,$,ae,Z),(p.key!=null||q&&p===q.subTree)&&xf(_,p,!0)):L(_,p,V,pe,q,$,ae,Z,ie)},z=(_,p,V,G,q,$,ae,Z,ie)=>{p.slotScopeIds=Z,_==null?p.shapeFlag&512?q.ctx.activate(p,V,G,ae,ie):D(p,V,G,q,$,ae,ie):b(_,p,ie)},D=(_,p,V,G,q,$,ae)=>{const Z=_.component=gg(_,G,q);if(kc(_)&&(Z.ctx.renderer=de),vg(Z,!1,ae),Z.asyncDep){if(q&&q.registerDep(Z,I,ae),!_.el){const ie=Z.subTree=_n(xi);m(null,ie,p,V),_.placeholder=ie.el}}else I(Z,_,p,V,q,$,ae)},b=(_,p,V)=>{const G=p.component=_.component;if(Jm(_,p,V))if(G.asyncDep&&!G.asyncResolved){p.el=_.el,O(G,p,V);return}else G.next=p,G.update();else p.el=_.el,G.vnode=p},I=(_,p,V,G,q,$,ae)=>{const Z=()=>{if(_.isMounted){let{next:w,bu:M,u:X,parent:te,vnode:ce}=_;{const Ie=yf(_);if(Ie){w&&(w.el=ce.el,O(_,w,ae)),Ie.asyncDep.then(()=>{cn(()=>{_.isUnmounted||Y()},q)});return}}let ee=w,Me;Gi(_,!1),w?(w.el=ce.el,O(_,w,ae)):w=ce,M&&Lo(M),(Me=w.props&&w.props.onVnodeBeforeUpdate)&&kn(Me,te,w,ce),Gi(_,!0);const ge=Ou(_),Pe=_.subTree;_.subTree=ge,S(Pe,ge,h(Pe.el),ue(Pe),_,q,$),w.el=ge.el,ee===null&&Qm(_,ge.el),X&&cn(X,q),(Me=w.props&&w.props.onVnodeUpdated)&&cn(()=>kn(Me,te,w,ce),q)}else{let w;const{el:M,props:X}=p,{bm:te,m:ce,parent:ee,root:Me,type:ge}=_,Pe=Mr(p);Gi(_,!1),te&&Lo(te),!Pe&&(w=X&&X.onVnodeBeforeMount)&&kn(w,ee,p),Gi(_,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(ge,_.parent?_.parent.type:void 0);const Ie=_.subTree=Ou(_);S(null,Ie,V,G,_,q,$),p.el=Ie.el}if(ce&&cn(ce,q),!Pe&&(w=X&&X.onVnodeMounted)){const Ie=p;cn(()=>kn(w,ee,Ie),q)}(p.shapeFlag&256||ee&&Mr(ee.vnode)&&ee.vnode.shapeFlag&256)&&_.a&&cn(_.a,q),_.isMounted=!0,p=V=G=null}};_.scope.on();const ie=_.effect=new Ld(Z);_.scope.off();const Y=_.update=ie.run.bind(ie),pe=_.job=ie.runIfDirty.bind(ie);pe.i=_,pe.id=_.uid,ie.scheduler=()=>Bc(pe),Gi(_,!0),Y()},O=(_,p,V)=>{p.component=_;const G=_.vnode.props;_.vnode=p,_.next=null,tg(_,p.props,G,V),rg(_,p.children,V),_i(),Pu(_),vi()},L=(_,p,V,G,q,$,ae,Z,ie=!1)=>{const Y=_&&_.children,pe=_?_.shapeFlag:0,w=p.children,{patchFlag:M,shapeFlag:X}=p;if(M>0){if(M&128){he(Y,w,V,G,q,$,ae,Z,ie);return}else if(M&256){ne(Y,w,V,G,q,$,ae,Z,ie);return}}X&8?(pe&16&&le(Y,q,$),w!==Y&&u(V,w)):pe&16?X&16?he(Y,w,V,G,q,$,ae,Z,ie):le(Y,q,$,!0):(pe&8&&u(V,""),X&16&&B(w,V,G,q,$,ae,Z,ie))},ne=(_,p,V,G,q,$,ae,Z,ie)=>{_=_||es,p=p||es;const Y=_.length,pe=p.length,w=Math.min(Y,pe);let M;for(M=0;M<w;M++){const X=p[M]=ie?di(p[M]):Wn(p[M]);S(_[M],X,V,null,q,$,ae,Z,ie)}Y>pe?le(_,q,$,!0,!1,w):B(p,V,G,q,$,ae,Z,ie,w)},he=(_,p,V,G,q,$,ae,Z,ie)=>{let Y=0;const pe=p.length;let w=_.length-1,M=pe-1;for(;Y<=w&&Y<=M;){const X=_[Y],te=p[Y]=ie?di(p[Y]):Wn(p[Y]);if(nr(X,te))S(X,te,V,null,q,$,ae,Z,ie);else break;Y++}for(;Y<=w&&Y<=M;){const X=_[w],te=p[M]=ie?di(p[M]):Wn(p[M]);if(nr(X,te))S(X,te,V,null,q,$,ae,Z,ie);else break;w--,M--}if(Y>w){if(Y<=M){const X=M+1,te=X<pe?p[X].el:G;for(;Y<=M;)S(null,p[Y]=ie?di(p[Y]):Wn(p[Y]),V,te,q,$,ae,Z,ie),Y++}}else if(Y>M)for(;Y<=w;)me(_[Y],q,$,!0),Y++;else{const X=Y,te=Y,ce=new Map;for(Y=te;Y<=M;Y++){const Ne=p[Y]=ie?di(p[Y]):Wn(p[Y]);Ne.key!=null&&ce.set(Ne.key,Y)}let ee,Me=0;const ge=M-te+1;let Pe=!1,Ie=0;const _e=new Array(ge);for(Y=0;Y<ge;Y++)_e[Y]=0;for(Y=X;Y<=w;Y++){const Ne=_[Y];if(Me>=ge){me(Ne,q,$,!0);continue}let De;if(Ne.key!=null)De=ce.get(Ne.key);else for(ee=te;ee<=M;ee++)if(_e[ee-te]===0&&nr(Ne,p[ee])){De=ee;break}De===void 0?me(Ne,q,$,!0):(_e[De-te]=Y+1,De>=Ie?Ie=De:Pe=!0,S(Ne,p[De],V,null,q,$,ae,Z,ie),Me++)}const Re=Pe?cg(_e):es;for(ee=Re.length-1,Y=ge-1;Y>=0;Y--){const Ne=te+Y,De=p[Ne],Te=p[Ne+1],je=Ne+1<pe?Te.el||Mf(Te):G;_e[Y]===0?S(null,De,V,je,q,$,ae,Z,ie):Pe&&(ee<0||Y!==Re[ee]?W(De,V,je,2):ee--)}}},W=(_,p,V,G,q=null)=>{const{el:$,type:ae,transition:Z,children:ie,shapeFlag:Y}=_;if(Y&6){W(_.component.subTree,p,V,G);return}if(Y&128){_.suspense.move(p,V,G);return}if(Y&64){ae.move(_,p,V,de);return}if(ae===ut){i($,p,V);for(let w=0;w<ie.length;w++)W(ie[w],p,V,G);i(_.anchor,p,V);return}if(ae===No){E(_,p,V);return}if(G!==2&&Y&1&&Z)if(G===0)Z.persisted&&!$[Ia]?i($,p,V):(Z.beforeEnter($),i($,p,V),cn(()=>Z.enter($),q));else{const{leave:w,delayLeave:M,afterLeave:X}=Z,te=()=>{_.ctx.isUnmounted?s($):i($,p,V)},ce=()=>{const ee=$._isLeaving||!!$[Ia];$._isLeaving&&$[Ia](!0),Z.persisted&&!ee?te():w($,()=>{te(),X&&X()})};M?M($,te,ce):ce()}else i($,p,V)},me=(_,p,V,G=!1,q=!1)=>{const{type:$,props:ae,ref:Z,children:ie,dynamicChildren:Y,shapeFlag:pe,patchFlag:w,dirs:M,cacheIndex:X,memo:te}=_;if((w===-2||Y&&Y.hasOnce)&&(q=!1),Z!=null&&(_i(),yr(Z,null,V,_,!0),vi()),X!=null&&(!_.ctx||_.ctx===p)&&(p.renderCache[X]=void 0),pe&256){p.ctx.deactivate(_);return}const ce=pe&1&&M,ee=!Mr(_);let Me;if(ee&&(Me=ae&&ae.onVnodeBeforeUnmount)&&kn(Me,p,_),pe&6)Xe(_.component,V,G);else{if(pe&128){_.suspense.unmount(V,G);return}ce&&Vi(_,null,p,"beforeUnmount"),pe&64?_.type.remove(_,p,V,de,G):Y&&!Y.hasOnce&&($!==ut||w>0&&w&64)?le(Y,p,V,!1,!0):($===ut&&w&384||!q&&pe&16)&&le(ie,p,V),G&&Se(_)}const ge=te!=null&&X==null;(ee&&(Me=ae&&ae.onVnodeUnmounted)||ce||ge)&&cn(()=>{Me&&kn(Me,p,_),ce&&Vi(_,null,p,"unmounted"),ge&&(_.el=null)},V)},Se=_=>{const{type:p,el:V,anchor:G,transition:q}=_;if(p===ut){ze(V,G);return}if(p===No){y(_),q&&!q.persisted&&q.afterLeave&&q.afterLeave();return}const $=()=>{s(V),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(_.shapeFlag&1&&q&&!q.persisted){const{leave:ae,delayLeave:Z}=q,ie=()=>ae(V,$);Z?Z(_.el,$,ie):ie()}else $()},ze=(_,p)=>{let V;for(;_!==p;)V=d(_),s(_),_=V;s(p)},Xe=(_,p,V)=>{const{bum:G,scope:q,job:$,subTree:ae,um:Z,m:ie,a:Y}=_;ku(ie),ku(Y),G&&Lo(G),q.stop(),$?($.flags|=8,me(ae,_,p,V)):_.vnode.el&&ae&&(ae.transition=_.vnode.transition,me(ae,_,p,V)),Z&&cn(Z,p),cn(()=>{_.isUnmounted=!0},p)},le=(_,p,V,G=!1,q=!1,$=0)=>{for(let ae=$;ae<_.length;ae++)me(_[ae],p,V,G,q)},ue=_=>{if(_.shapeFlag&6)return ue(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const p=d(_.anchor||_.el),V=p&&p[Tm];return V?d(V):p};let be=!1;const Be=(_,p,V)=>{let G;_==null?p._vnode&&(me(p._vnode,null,null,!0),G=p._vnode.component):S(p._vnode||null,_,p,null,null,null,V),p._vnode=_,be||(be=!0,Pu(G),Kd(),be=!1)},de={p:S,um:me,m:W,r:Se,mt:D,mc:B,pc:L,pbc:A,n:ue,o:n};return{render:Be,hydrate:void 0,createApp:Ym(Be)}}function La({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Gi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function lg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function xf(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&xf(o,a)),a.type===_a&&(a.patchFlag===-1&&(a=s[r]=di(a)),a.el=o.el),a.type===xi&&!a.el&&(a.el=o.el)}}function cg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function yf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yf(e)}function ku(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Mf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Mf(e.subTree):null}const Sf=n=>n.__isSuspense;function ug(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):xm(n)}const ut=Symbol.for("v-fgt"),_a=Symbol.for("v-txt"),xi=Symbol.for("v-cmt"),No=Symbol.for("v-stc"),rs=[];let gn=null;function ke(n=!1){rs.push(gn=n?null:[])}function bf(){rs.pop(),gn=rs[rs.length-1]||null}let Ir=1;function Hu(n,e=!1){Ir+=n,n<0&&gn&&e&&(gn.hasOnce=!0)}function Ef(n){return n.dynamicChildren=Ir>0?gn||es:null,bf(),Ir>0&&gn&&gn.push(n),n}function Ve(n,e,t,i,s,r){return Ef(v(n,e,t,i,s,r,!0))}function wf(n,e,t,i,s){return Ef(_n(n,e,t,i,s,!0))}function Tf(n){return n?n.__v_isVNode===!0:!1}function nr(n,e){return n.type===e.type&&n.key===e.key}const Af=({key:n})=>n??null,Fo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Dt(n)||Yt(n)||Ze(n)?{i:bn,r:n,k:e,f:!!t}:n:null);function v(n,e=null,t=null,i=0,s=null,r=n===ut?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Af(e),ref:e&&Fo(e),scopeId:Jd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bn};return a?($o(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Dt(t)?8:16),Ir>0&&!o&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const _n=hg;function hg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Bm)&&(n=xi),Tf(n)){const a=Xs(n,e,!0);return t&&$o(a,t),Ir>0&&!r&&gn&&(a.shapeFlag&6?gn[gn.indexOf(n)]=a:gn.push(a)),a.patchFlag=-2,a}if(Sg(n)&&(n=n.__vccOpts),e){e=dg(e);let{class:a,style:l}=e;a&&!Dt(a)&&(e.class=wt(a)),_t(l)&&(Oc(l)&&!$e(l)&&(l=Ht({},l)),e.style=fi(l))}const o=Dt(n)?1:Sf(n)?128:ha(n)?64:_t(n)?4:Ze(n)?2:0;return v(n,e,t,i,s,o,r,!0)}function dg(n){return n?Oc(n)||ff(n)?Ht({},n):n:null}function Xs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?fg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Af(c),ref:e&&e.ref?t&&r?$e(r)?r.concat(Fo(e)):[r,Fo(e)]:Fo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ut?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xs(n.ssContent),ssFallback:n.ssFallback&&Xs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&zc(u,l.clone(u)),u}function ft(n=" ",e=0){return _n(_a,null,n,e)}function Ri(n,e){const t=_n(No,null,n);return t.staticCount=e,t}function un(n="",e=!1){return e?(ke(),wf(xi,null,n)):_n(xi,null,n)}function Wn(n){return n==null||typeof n=="boolean"?_n(xi):$e(n)?_n(ut,null,n.slice()):Tf(n)?di(n):_n(_a,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xs(n)}function $o(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),$o(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ff(e)?e._ctx=bn:s===3&&bn&&(bn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ze(e)){if(i&65){$o(n,{default:e});return}e={default:e,_ctx:bn},t=32}else e=String(e),i&64?(t=16,e=[ft(e)]):t=8;n.children=e,n.shapeFlag|=t}function fg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=wt([e.class,i.class]));else if(s==="style")e.style=fi([e.style,i.style]);else if(sa(s)){const r=e[s],o=i[s];o&&r!==o&&!($e(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!ra(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function kn(n,e,t,i=null){Fn(n,e,7,[t,i])}const pg=lf();let mg=0;function gg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||pg,r={uid:mg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mf(i,s),emitsOptions:cf(i,s),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=$m.bind(null,r),n.ce&&n.ce(r),r}let nn=null;const _g=()=>nn||bn;let jo,Dr;{const n=aa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};jo=e("__VUE_INSTANCE_SETTERS__",t=>nn=t),Dr=e("__VUE_SSR_SETTERS__",t=>Lr=t)}const Yr=n=>{const e=nn;return jo(n),n.scope.on(),()=>{n.scope.off(),jo(e)}},Vu=()=>{nn&&nn.scope.off(),jo(null)};function Rf(n){return n.vnode.shapeFlag&4}let Lr=!1;function vg(n,e=!1,t=!1){e&&Dr(e);const{props:i,children:s}=n.vnode,r=Rf(n);eg(n,i,r,e),sg(n,s,t||e);const o=r?xg(n,e):void 0;return e&&Dr(!1),o}function xg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,zm);const{setup:i}=t;if(i){_i();const s=n.setupContext=i.length>1?Mg(n):null,r=Yr(n),o=Xr(i,n,0,[n.props,s]),a=wd(o);if(vi(),r(),(a||n.sp)&&!Mr(n)&&nf(n),a){if(o.then(Vu,Vu),e)return o.then(l=>{Dr(!0);try{Gu(n,l,e)}finally{Dr(!1)}}).catch(l=>{ua(l,n,0)});n.asyncDep=o}else Gu(n,o)}else Cf(n)}function Gu(n,e,t){Ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:_t(e)&&(n.setupState=qd(e)),Cf(n)}function Cf(n,e,t){const i=n.type;n.render||(n.render=i.render||Kn);{const s=Yr(n);_i();try{km(n)}finally{vi(),s()}}}const yg={get(n,e){return Xt(n,"get",""),n[e]}};function Mg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,yg),slots:n.slots,emit:n.emit,expose:e}}function va(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(qd(lm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Sr)return Sr[t](n)},has(e,t){return t in e||t in Sr}})):n.proxy}function Sg(n){return Ze(n)&&"__vccOpts"in n}const lt=(n,e)=>fm(n,e,Lr),bg="3.5.43";let Cl;const Wu=typeof window<"u"&&window.trustedTypes;if(Wu)try{Cl=Wu.createPolicy("vue",{createHTML:n=>n})}catch{}const Pf=Cl?n=>Cl.createHTML(n):n=>n,Eg="http://www.w3.org/2000/svg",wg="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,Xu=hi&&hi.createElement("template"),Tg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?hi.createElementNS(Eg,n):e==="mathml"?hi.createElementNS(wg,n):t?hi.createElement(n,{is:t}):hi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>hi.createTextNode(n),createComment:n=>hi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Xu.innerHTML=Pf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Xu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ag=Symbol("_vtc");function Rg(n,e,t){const i=n[Ag];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Yu=Symbol("_vod"),Cg=Symbol("_vsh"),Pg=Symbol(""),Ig=/(?:^|;)\s*display\s*:/;function Dg(n,e,t){const i=n.style,s=Dt(t);let r=!1;if(t&&!s){if(e)if(Dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&fr(i,a,"")}else for(const o in e)t[o]==null&&fr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?Ug(n,o,!Dt(e)&&e?e[o]:void 0,a)||fr(i,o,a):fr(i,o,"")}}else if(s){if(e!==t){const o=i[Pg];o&&(t+=";"+o),i.cssText=t,r=Ig.test(t)}}else e&&n.removeAttribute("style");Yu in n&&(n[Yu]=r?i.display:"",n[Cg]&&(i.display="none"))}const eo=/\s*!important$/;function fr(n,e,t){if($e(t))t.forEach(i=>fr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))eo.test(t)?n.setProperty(e,t.replace(eo,""),"important"):n.setProperty(e,t);else{const i=Lg(n,e);eo.test(t)?n.setProperty(Bi(i),t.replace(eo,""),"important"):n[i]=t}}const qu=["Webkit","Moz","ms"],Ua={};function Lg(n,e){const t=Ua[e];if(t)return t;let i=Un(e);if(i!=="filter"&&i in n)return Ua[e]=i;i=Rd(i);for(let s=0;s<qu.length;s++){const r=qu[s]+i;if(r in n)return Ua[e]=r}return e}function Ug(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Dt(i)&&t===i}const $u="http://www.w3.org/1999/xlink";function ju(n,e,t,i,s,r=zp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS($u,e.slice(6,e.length)):n.setAttributeNS($u,e,t):t==null||r&&!Pd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Zn(t)?String(t):t)}function Ku(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Pf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Pd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Ls(n,e,t,i){n.addEventListener(e,t,i)}function Ng(n,e,t,i){n.removeEventListener(e,t,i)}const Zu=Symbol("_vei");function Fg(n,e,t,i,s=null){const r=n[Zu]||(n[Zu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=zg(e);if(i){const c=r[e]=Vg(i,s);Ls(n,a,c,l)}else o&&(Ng(n,a,o,l),r[e]=void 0)}}const Og=/(Once|Passive|Capture)$/,Bg=/^on:?(?:Once|Passive|Capture)$/;function zg(n){let e,t;for(;(t=n.match(Og))&&!Bg.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Bi(n.slice(2)),e]}let Na=0;const kg=Promise.resolve(),Hg=()=>Na||(kg.then(()=>Na=0),Na=Date.now());function Vg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if($e(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Fn(c,e,5,a)}}else Fn(s,e,5,[i])};return t.value=n,t.attached=Hg(),t}const Ju=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Gg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Rg(n,i,o):e==="style"?Dg(n,t,i):sa(e)?ra(e)||Fg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wg(n,e,i,o))?(Ku(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ju(n,e,i,o,r,e!=="value")):n._isVueCE&&(Xg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Dt(i)))?Ku(n,Un(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ju(n,e,i,o))};function Wg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ju(e)&&Ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ju(e)&&Dt(t)?!1:e in n}function Xg(n,e){const t=n._def.props;if(!t)return!1;const i=Un(e);return Array.isArray(t)?t.some(s=>Un(s)===i):Object.keys(t).some(s=>Un(s)===i)}const Qu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>Lo(e,t):e};function Yg(n){n.target.composing=!0}function eh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const to=Symbol("_assign"),no=Symbol("_initialValue");function Fa(n,e,t){return e&&(n=n.trim()),t&&(n=Cc(n)),n}const qg={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[no]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[no]=n.defaultValue.replace(/\r\n?/g,`
`))),n[to]=Qu(s);const r=i||s.props&&s.props.type==="number";Ls(n,e?"change":"input",o=>{o.target.composing||n[to](Fa(n.value,t,r))}),(t||r)&&Ls(n,"change",()=>{n.value=Fa(n.value,t,r)}),e||(Ls(n,"compositionstart",Yg),Ls(n,"compositionend",eh),Ls(n,"change",eh))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[no];delete n[no],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[to](Fa(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[to]=Qu(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Cc(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},$g={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jg=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=Bi(s.key);if(e.some(o=>o===r||$g[o]===r))return n(s)}))},Kg=Ht({patchProp:Gg},Tg);let th;function Zg(){return th||(th=og(Kg))}const Jg=((...n)=>{const e=Zg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=e0(i);if(!s)return;const r=e._component;!Ze(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Qg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Qg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function e0(n){return Dt(n)?document.querySelector(n):n}const Gc="180",ks={ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t0=0,nh=1,n0=2,If=1,Wc=2,ui=3,Fi=0,rn=1,Sn=2,Li=0,Hs=1,ih=2,sh=3,rh=4,i0=5,Ji=100,s0=101,r0=102,o0=103,a0=104,l0=200,c0=201,u0=202,h0=203,Pl=204,Il=205,d0=206,f0=207,p0=208,m0=209,g0=210,_0=211,v0=212,x0=213,y0=214,Dl=0,Ll=1,Ul=2,Ys=3,Nl=4,Fl=5,Ol=6,Bl=7,Xc=0,M0=1,S0=2,Ui=0,b0=1,E0=2,w0=3,Yc=4,T0=5,A0=6,R0=7,Df=300,qs=301,$s=302,zl=303,kl=304,xa=306,Ko=1e3,ts=1001,Hl=1002,vn=1003,C0=1004,io=1005,qn=1006,Oa=1007,ns=1008,Qn=1009,Lf=1010,Uf=1011,Ur=1012,qc=1013,os=1014,$n=1015,qr=1016,$c=1017,jc=1018,Nr=1020,Nf=35902,Ff=35899,Of=1021,Bf=1022,Ln=1023,Fr=1026,Or=1027,Kc=1028,Zc=1029,zf=1030,Jc=1031,Qc=1033,Oo=33776,Bo=33777,zo=33778,ko=33779,Vl=35840,Gl=35841,Wl=35842,Xl=35843,Yl=36196,ql=37492,$l=37496,jl=37808,Kl=37809,Zl=37810,Jl=37811,Ql=37812,ec=37813,tc=37814,nc=37815,ic=37816,sc=37817,rc=37818,oc=37819,ac=37820,lc=37821,cc=36492,uc=36494,hc=36495,dc=36283,fc=36284,pc=36285,mc=36286,P0=3200,I0=3201,eu=0,D0=1,Pi="",Wt="srgb",js="srgb-linear",Zo="linear",pt="srgb",gs=7680,oh=519,L0=512,U0=513,N0=514,kf=515,F0=516,O0=517,B0=518,z0=519,ah=35044,lh="300 es",jn=2e3,Jo=2001;class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ch=1234567;const br=Math.PI/180,Br=180/Math.PI;function ds(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function tu(n,e){return(n%e+e)%e}function k0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function H0(n,e,t){return n!==e?(t-n)/(e-n):0}function Er(n,e,t){return(1-t)*n+t*e}function V0(n,e,t,i){return Er(n,e,1-Math.exp(-t*i))}function G0(n,e=1){return e-Math.abs(tu(n,e*2)-e)}function W0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function X0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Y0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function q0(n,e){return n+Math.random()*(e-n)}function $0(n){return n*(.5-Math.random())}function j0(n){n!==void 0&&(ch=n);let e=ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function K0(n){return n*br}function Z0(n){return n*Br}function J0(n){return(n&n-1)===0&&n!==0}function Q0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function e_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function t_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),x=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*x,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*x,a*c);break;case"ZYZ":n.set(l*x,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Us(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Vs={DEG2RAD:br,RAD2DEG:Br,generateUUID:ds,clamp:et,euclideanModulo:tu,mapLinear:k0,inverseLerp:H0,lerp:Er,damp:V0,pingpong:G0,smoothstep:W0,smootherstep:X0,randInt:Y0,randFloat:q0,randFloatSpread:$0,seededRandom:j0,degToRad:K0,radToDeg:Z0,isPowerOfTwo:J0,ceilPowerOfTwo:Q0,floorPowerOfTwo:e_,setQuaternionFromProperEuler:t_,normalize:Zt,denormalize:Us};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class as{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],x=r[o+2],S=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=S;return}if(h!==S||l!==d||c!==f||u!==x){let g=1-a;const m=l*d+c*f+u*x+h*S,C=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const U=Math.sqrt(E),N=Math.atan2(U,m*C);g=Math.sin(g*N)/U,a=Math.sin(a*N)/U}const y=a*C;if(l=l*g+d*y,c=c*g+f*y,u=u*g+x*y,h=h*g+S*y,g===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],x=r[o+3];return e[t]=a*x+u*h+l*f-c*d,e[t+1]=l*x+u*d+c*h-a*f,e[t+2]=c*x+u*f+a*d-l*h,e[t+3]=u*x-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h-d*f*x;break;case"YXZ":this._x=d*u*h+c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h+d*f*x;break;case"ZXY":this._x=d*u*h-c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h-d*f*x;break;case"ZYX":this._x=d*u*h-c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h+d*f*x;break;case"YZX":this._x=d*u*h+c*f*x,this._y=c*f*h+d*u*x,this._z=c*u*x-d*f*h,this._w=c*u*h-d*f*x;break;case"XZY":this._x=d*u*h-c*f*x,this._y=c*f*h-d*u*x,this._z=c*u*x+d*f*h,this._w=c*u*h+d*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new k,uh=new as;class Je{constructor(e,t,i,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],x=i[8],S=s[0],g=s[3],m=s[6],C=s[1],E=s[4],y=s[7],U=s[2],N=s[5],F=s[8];return r[0]=o*S+a*C+l*U,r[3]=o*g+a*E+l*N,r[6]=o*m+a*y+l*F,r[1]=c*S+u*C+h*U,r[4]=c*g+u*E+h*N,r[7]=c*m+u*y+h*F,r[2]=d*S+f*C+x*U,r[5]=d*g+f*E+x*N,r[8]=d*m+f*y+x*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,x=t*h+i*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=h*S,e[1]=(s*c-u*i)*S,e[2]=(a*i-s*o)*S,e[3]=d*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-a*t)*S,e[6]=f*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(za.makeScale(e,t)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,t){return this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const za=new Je;function Hf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function n_(){const n=Qo("canvas");return n.style.display="block",n}const hh={};function zr(n){n in hh||(hh[n]=!0,console.warn(n))}function i_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const dh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s_(){const n={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?Zo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[js]:{primaries:e,whitePoint:i,transfer:Zo,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}const rt=s_();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _s;class r_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=Qo("canvas")),_s.width=e.width,_s.height=e.height;const s=_s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o_=0;class nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ka(s[o].image)):r.push(ka(s[o]))}else r=ka(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ka(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?r_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a_=0;const Ha=new k;class qt extends hs{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=ts,s=ts,r=qn,o=ns,a=Ln,l=Qn,c=qt.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=ds(),this.name="",this.source=new nu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ko:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ko:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Df;qt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],x=l[9],S=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(x+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(f+1)/2,U=(m+1)/2,N=(u+d)/4,F=(h+S)/4,B=(x+g)/4;return E>y&&E>U?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=N/i,r=F/i):y>U?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=N/s,r=B/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=F/r,s=B/r),this.set(i,s,r,t),this}let C=Math.sqrt((g-x)*(g-x)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(C)<.001&&(C=1),this.x=(g-x)/C,this.y=(h-S)/C,this.z=(d-u)/C,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l_ extends hs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new qt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new nu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends l_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vf extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class c_ extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),so.copy(i.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ro.subVectors(this.max,ir),vs.subVectors(e.a,ir),xs.subVectors(e.b,ir),ys.subVectors(e.c,ir),Mi.subVectors(xs,vs),Si.subVectors(ys,xs),Wi.subVectors(vs,ys);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Wi.z,Wi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Wi.z,0,-Wi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Wi.y,Wi.x,0];return!Va(t,vs,xs,ys,ro)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,vs,xs,ys,ro))?!1:(oo.crossVectors(Mi,Si),t=[oo.x,oo.y,oo.z],Va(t,vs,xs,ys,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new k,new k,new k,new k,new k,new k,new k,new k],An=new k,so=new zi,vs=new k,xs=new k,ys=new k,Mi=new k,Si=new k,Wi=new k,ir=new k,ro=new k,oo=new k,Xi=new k;function Va(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Xi.fromArray(n,r);const a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),u=i.dot(Xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const u_=new zi,sr=new k,Ga=new k;class Js{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):u_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(Ga)),this.expandByPoint(sr.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ri=new k,Wa=new k,ao=new k,bi=new k,Xa=new k,lo=new k,Ya=new k;class ya{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Wa.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Wa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ao),a=bi.dot(this.direction),l=-bi.dot(ao),c=bi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,x;if(u>0)if(h=o*l-a,d=o*a-l,x=r*u,h>=0)if(d>=-x)if(d<=x){const S=1/u;h*=S,d*=S,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Wa).addScaledVector(ao,d),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),s=ri.dot(ri)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,s,r){Xa.subVectors(t,e),lo.subVectors(i,e),Ya.crossVectors(Xa,lo);let o=this.direction.dot(Ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(lo.crossVectors(bi,lo));if(l<0)return null;const c=a*this.direction.dot(Xa.cross(bi));if(c<0||l+c>o)return null;const u=-a*bi.dot(Ya);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,s,r,o,a,l,c,u,h,d,f,x,S,g){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,f,x,S,g)}set(e,t,i,s,r,o,a,l,c,u,h,d,f,x,S,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=x,m[11]=S,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,x=a*u,S=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+x*c,t[5]=d-S*c,t[9]=-a*l,t[2]=S-d*c,t[6]=x+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,x=c*u,S=c*h;t[0]=d+S*a,t[4]=x*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-x,t[6]=S+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,x=c*u,S=c*h;t[0]=d-S*a,t[4]=-o*h,t[8]=x+f*a,t[1]=f+x*a,t[5]=o*u,t[9]=S-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,x=a*u,S=a*h;t[0]=l*u,t[4]=x*c-f,t[8]=d*c+S,t[1]=l*h,t[5]=S*c+d,t[9]=f*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,x=a*l,S=a*c;t[0]=l*u,t[4]=S-d*h,t[8]=x*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+x,t[10]=d-S*h}else if(e.order==="XZY"){const d=o*l,f=o*c,x=a*l,S=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+S,t[5]=o*u,t[9]=f*h-x,t[2]=x*h-f,t[6]=a*u,t[10]=S*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h_,e,d_)}lookAt(e,t,i){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ei.crossVectors(i,pn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ei.crossVectors(i,pn)),Ei.normalize(),co.crossVectors(pn,Ei),s[0]=Ei.x,s[4]=co.x,s[8]=pn.x,s[1]=Ei.y,s[5]=co.y,s[9]=pn.y,s[2]=Ei.z,s[6]=co.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],x=i[2],S=i[6],g=i[10],m=i[14],C=i[3],E=i[7],y=i[11],U=i[15],N=s[0],F=s[4],B=s[8],R=s[12],A=s[1],H=s[5],K=s[9],z=s[13],D=s[2],b=s[6],I=s[10],O=s[14],L=s[3],ne=s[7],he=s[11],W=s[15];return r[0]=o*N+a*A+l*D+c*L,r[4]=o*F+a*H+l*b+c*ne,r[8]=o*B+a*K+l*I+c*he,r[12]=o*R+a*z+l*O+c*W,r[1]=u*N+h*A+d*D+f*L,r[5]=u*F+h*H+d*b+f*ne,r[9]=u*B+h*K+d*I+f*he,r[13]=u*R+h*z+d*O+f*W,r[2]=x*N+S*A+g*D+m*L,r[6]=x*F+S*H+g*b+m*ne,r[10]=x*B+S*K+g*I+m*he,r[14]=x*R+S*z+g*O+m*W,r[3]=C*N+E*A+y*D+U*L,r[7]=C*F+E*H+y*b+U*ne,r[11]=C*B+E*K+y*I+U*he,r[15]=C*R+E*z+y*O+U*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],x=e[3],S=e[7],g=e[11],m=e[15];return x*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*f-i*l*f)+S*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+g*(+t*c*h-t*a*f-r*o*h+i*o*f+r*a*u-i*c*u)+m*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],x=e[12],S=e[13],g=e[14],m=e[15],C=h*g*c-S*d*c+S*l*f-a*g*f-h*l*m+a*d*m,E=x*d*c-u*g*c-x*l*f+o*g*f+u*l*m-o*d*m,y=u*S*c-x*h*c+x*a*f-o*S*f-u*a*m+o*h*m,U=x*h*l-u*S*l-x*a*d+o*S*d+u*a*g-o*h*g,N=t*C+i*E+s*y+r*U;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=C*F,e[1]=(S*d*r-h*g*r-S*s*f+i*g*f+h*s*m-i*d*m)*F,e[2]=(a*g*r-S*l*r+S*s*c-i*g*c-a*s*m+i*l*m)*F,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*f-i*l*f)*F,e[4]=E*F,e[5]=(u*g*r-x*d*r+x*s*f-t*g*f-u*s*m+t*d*m)*F,e[6]=(x*l*r-o*g*r-x*s*c+t*g*c+o*s*m-t*l*m)*F,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*F,e[8]=y*F,e[9]=(x*h*r-u*S*r-x*i*f+t*S*f+u*i*m-t*h*m)*F,e[10]=(o*S*r-x*a*r+x*i*c-t*S*c-o*i*m+t*a*m)*F,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*f-t*a*f)*F,e[12]=U*F,e[13]=(u*S*s-x*h*s+x*i*d-t*S*d-u*i*g+t*h*g)*F,e[14]=(x*a*s-o*S*s-x*i*l+t*S*l+o*i*g-t*a*g)*F,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*F,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,x=r*h,S=o*u,g=o*h,m=a*h,C=l*c,E=l*u,y=l*h,U=i.x,N=i.y,F=i.z;return s[0]=(1-(S+m))*U,s[1]=(f+y)*U,s[2]=(x-E)*U,s[3]=0,s[4]=(f-y)*N,s[5]=(1-(d+m))*N,s[6]=(g+C)*N,s[7]=0,s[8]=(x+E)*F,s[9]=(g-C)*F,s[10]=(1-(d+S))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ms.set(s[0],s[1],s[2]).length();const o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const c=1/r,u=1/o,h=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=jn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let x,S;if(l)x=r/(o-r),S=o*r/(o-r);else if(a===jn)x=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Jo)x=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=jn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let x,S;if(l)x=1/(o-r),S=o/(o-r);else if(a===jn)x=-2/(o-r),S=-(o+r)/(o-r);else if(a===Jo)x=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ms=new k,Rn=new ht,h_=new k(0,0,0),d_=new k(1,1,1),Ei=new k,co=new k,pn=new k,ph=new ht,mh=new as;class On{constructor(e=0,t=0,i=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ph,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mh.setFromEuler(this),this.setFromQuaternion(mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class iu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let f_=0;const gh=new k,Ss=new as,oi=new ht,uo=new k,rr=new k,p_=new k,m_=new as,_h=new k(1,0,0),vh=new k(0,1,0),xh=new k(0,0,1),yh={type:"added"},g_={type:"removed"},bs={type:"childadded",child:null},qa={type:"childremoved",child:null};class Ut extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new k,t=new On,i=new as,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Je}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(_h,e)}rotateY(e){return this.rotateOnAxis(vh,e)}rotateZ(e){return this.rotateOnAxis(xh,e)}translateOnAxis(e,t){return gh.copy(e).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_h,e)}translateY(e){return this.translateOnAxis(vh,e)}translateZ(e){return this.translateOnAxis(xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?uo.copy(e):uo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(rr,uo,this.up):oi.lookAt(uo,rr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(oi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yh),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g_),qa.child=e,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yh),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,p_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,m_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new k(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new k,ai=new k,$a=new k,li=new k,Es=new k,ws=new k,Mh=new k,ja=new k,Ka=new k,Za=new k,Ja=new gt,Qa=new gt,el=new gt;class In{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),ai.subVectors(i,t),$a.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(ai),l=Cn.dot($a),c=ai.dot(ai),u=ai.dot($a),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,x=(o*u-a*l)*d;return r.set(1-f-x,x,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ja.setScalar(0),Qa.setScalar(0),el.setScalar(0),Ja.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,i),el.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ja,r.x),o.addScaledVector(Qa,r.y),o.addScaledVector(el,r.z),o}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),ai.subVectors(e,t),Cn.cross(ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Cn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return In.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Es.subVectors(s,i),ws.subVectors(r,i),ja.subVectors(e,i);const l=Es.dot(ja),c=ws.dot(ja);if(l<=0&&c<=0)return t.copy(i);Ka.subVectors(e,s);const u=Es.dot(Ka),h=ws.dot(Ka);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Es,o);Za.subVectors(e,r);const f=Es.dot(Za),x=ws.dot(Za);if(x>=0&&f<=x)return t.copy(r);const S=f*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(ws,a);const g=u*x-f*h;if(g<=0&&h-u>=0&&f-x>=0)return Mh.subVectors(r,s),a=(h-u)/(h-u+(f-x)),t.copy(s).addScaledVector(Mh,a);const m=1/(g+S+d);return o=S*m,a=d*m,t.copy(i).addScaledVector(Es,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ho={h:0,s:0,l:0};function tl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=tu(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=tl(o,r,e+1/3),this.g=tl(o,r,e),this.b=tl(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const i=Gf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return rt.workingToColorSpace(Gt.copy(this),e),Math.round(et(Gt.r*255,0,255))*65536+Math.round(et(Gt.g*255,0,255))*256+Math.round(et(Gt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Gt.copy(this),t);const i=Gt.r,s=Gt.g,r=Gt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Wt){rt.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,s=Gt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(ho);const i=Er(wi.h,ho.h,t),s=Er(wi.s,ho.s,t),r=Er(wi.l,ho.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new tt;tt.NAMES=Gf;let __=0;class fs extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=Hs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Il,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pl&&(i.blendSrc=this.blendSrc),this.blendDst!==Il&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kt extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new k,fo=new Ee;let v_=0;class wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ah,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Us(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Us(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Us(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Us(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ah&&(e.usage=this.usage),e}}class Wf extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xf extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let x_=0;const Mn=new ht,nl=new Ut,Ts=new k,mn=new zi,or=new zi,Bt=new k;class $t extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hf(e)?Xf:Wf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(mn.min,or.min),mn.expandByPoint(Bt),Bt.addVectors(mn.max,or.max),mn.expandByPoint(Bt)):(mn.expandByPoint(or.min),mn.expandByPoint(or.max))}mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),Bt.add(Ts)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new k,l[B]=new k;const c=new k,u=new k,h=new k,d=new Ee,f=new Ee,x=new Ee,S=new k,g=new k;function m(B,R,A){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,A),d.fromBufferAttribute(r,B),f.fromBufferAttribute(r,R),x.fromBufferAttribute(r,A),u.sub(c),h.sub(c),f.sub(d),x.sub(d);const H=1/(f.x*x.y-x.x*f.y);isFinite(H)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(h,-f.y).multiplyScalar(H),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(H),a[B].add(S),a[R].add(S),a[A].add(S),l[B].add(g),l[R].add(g),l[A].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let B=0,R=C.length;B<R;++B){const A=C[B],H=A.start,K=A.count;for(let z=H,D=H+K;z<D;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const E=new k,y=new k,U=new k,N=new k;function F(B){U.fromBufferAttribute(s,B),N.copy(U);const R=a[B];E.copy(R),E.sub(U.multiplyScalar(U.dot(R))).normalize(),y.crossVectors(N,R);const H=y.dot(l[B])<0?-1:1;o.setXYZW(B,E.x,E.y,E.z,H)}for(let B=0,R=C.length;B<R;++B){const A=C[B],H=A.start,K=A.count;for(let z=H,D=H+K;z<D;z+=3)F(e.getX(z+0)),F(e.getX(z+1)),F(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){const x=e.getX(d+0),S=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,x=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?f=l[S]*a.data.stride+a.offset:f=l[S]*u;for(let m=0;m<u;m++)d[x++]=c[f++]}return new wn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sh=new ht,Yi=new ya,po=new Js,bh=new k,mo=new k,go=new k,_o=new k,il=new k,vo=new k,Eh=new k,xo=new k;class it extends Ut{constructor(e=new $t,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(il.fromBufferAttribute(h,e),o?vo.addScaledVector(il,u):vo.addScaledVector(il.sub(t),u))}t.add(vo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(po.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(po,bh)===null||Yi.origin.distanceToSquared(bh)>(e.far-e.near)**2))&&(Sh.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Sh),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const g=d[x],m=o[g.materialIndex],C=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=C,U=E;y<U;y+=3){const N=a.getX(y),F=a.getX(y+1),B=a.getX(y+2);s=yo(this,m,e,i,c,u,h,N,F,B),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,f.start),S=Math.min(a.count,f.start+f.count);for(let g=x,m=S;g<m;g+=3){const C=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);s=yo(this,o,e,i,c,u,h,C,E,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=d.length;x<S;x++){const g=d[x],m=o[g.materialIndex],C=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=C,U=E;y<U;y+=3){const N=y,F=y+1,B=y+2;s=yo(this,m,e,i,c,u,h,N,F,B),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const x=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let g=x,m=S;g<m;g+=3){const C=g,E=g+1,y=g+2;s=yo(this,o,e,i,c,u,h,C,E,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function y_(n,e,t,i,s,r,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Fi,a),l===null)return null;xo.copy(a),xo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xo);return c<t.near||c>t.far?null:{distance:c,point:xo.clone(),object:n}}function yo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,mo),n.getVertexPosition(l,go),n.getVertexPosition(c,_o);const u=y_(n,e,t,i,mo,go,_o,Eh);if(u){const h=new k;In.getBarycoord(Eh,mo,go,_o,h),s&&(u.uv=In.getInterpolatedAttribute(s,a,l,c,h,new Ee)),r&&(u.uv1=In.getInterpolatedAttribute(r,a,l,c,h,new Ee)),o&&(u.normal=In.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new k,materialIndex:0};In.getNormal(mo,go,_o,d.normal),u.face=d,u.barycoord=h}return u}class ei extends $t{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function x(S,g,m,C,E,y,U,N,F,B,R){const A=y/F,H=U/B,K=y/2,z=U/2,D=N/2,b=F+1,I=B+1;let O=0,L=0;const ne=new k;for(let he=0;he<I;he++){const W=he*H-z;for(let me=0;me<b;me++){const Se=me*A-K;ne[S]=Se*C,ne[g]=W*E,ne[m]=D,c.push(ne.x,ne.y,ne.z),ne[S]=0,ne[g]=0,ne[m]=N>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(me/F),h.push(1-he/B),O+=1}}for(let he=0;he<B;he++)for(let W=0;W<F;W++){const me=d+W+b*he,Se=d+W+b*(he+1),ze=d+(W+1)+b*(he+1),Xe=d+(W+1)+b*he;l.push(me,Se,Xe),l.push(Se,ze,Xe),L+=6}a.addGroup(f,L,R),f+=L,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=Ks(n[t]);for(const s in i)e[s]=i[s]}return e}function M_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const S_={clone:Ks,merge:Jt};var b_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b_,this.fragmentShader=E_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=M_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qf extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new k,wh=new Ee,Th=new Ee;class hn extends qf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,wh,Th),t.subVectors(Th,wh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,Rs=1;class w_ extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(As,Rs,e,t);s.layers=this.layers,this.add(s);const r=new hn(As,Rs,e,t);r.layers=this.layers,this.add(r);const o=new hn(As,Rs,e,t);o.layers=this.layers,this.add(o);const a=new hn(As,Rs,e,t);a.layers=this.layers,this.add(a);const l=new hn(As,Rs,e,t);l.layers=this.layers,this.add(l);const c=new hn(As,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class $f extends qt{constructor(e=[],t=qs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class T_ extends ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new $f(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new Oi({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Li});r.uniforms.tEquirect.value=t;const o=new it(s,r),a=t.minFilter;return t.minFilter===ns&&(t.minFilter=qn),new w_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class tn extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A_={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,i),m=this._getHandJoint(c,S);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class su{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(e),this.density=t}clone(){return new su(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ru extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class R_ extends qt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=vn,u=vn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ah extends wn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new ht,Rh=new ht,Mo=[],Ch=new zi,C_=new ht,ar=new it,lr=new Js;class gc extends it{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ah(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,C_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),Ch.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Ch)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Js),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),lr.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(i),e.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Rh.multiplyMatrices(i,Cs),ar.matrixWorld=Rh,ar.raycast(e,Mo);for(let o=0,a=Mo.length;o<a;o++){const l=Mo[o];l.instanceId=r,l.object=this,t.push(l)}Mo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ah(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new R_(new Float32Array(s*this.count),s,this.count,Kc,$n));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rl=new k,P_=new k,I_=new Je;class Ci{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=rl.subVectors(i,t).cross(P_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||I_.getNormalMatrix(e),s=this.coplanarPoint(rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Js,D_=new Ee(.5,.5),So=new k;class ou{constructor(e=new Ci,t=new Ci,i=new Ci,s=new Ci,r=new Ci,o=new Ci){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],x=r[8],S=r[9],g=r[10],m=r[11],C=r[12],E=r[13],y=r[14],U=r[15];if(s[0].setComponents(c-o,f-u,m-x,U-C).normalize(),s[1].setComponents(c+o,f+u,m+x,U+C).normalize(),s[2].setComponents(c+a,f+h,m+S,U+E).normalize(),s[3].setComponents(c-a,f-h,m-S,U-E).normalize(),i)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,m-g,U-y).normalize();else if(s[4].setComponents(c-l,f-d,m-g,U-y).normalize(),t===jn)s[5].setComponents(c+l,f+d,m+g,U+y).normalize();else if(t===Jo)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);const t=D_.distanceTo(e.center);return qi.radius=.7071067811865476+t,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(So.x=s.normal.x>0?e.max.x:e.min.x,So.y=s.normal.y>0?e.max.y:e.min.y,So.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jf extends fs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ea=new k,ta=new k,Ph=new ht,cr=new ya,bo=new Js,ol=new k,Ih=new k;class Kf extends Ut{constructor(e=new $t,t=new jf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ea.fromBufferAttribute(t,s-1),ta.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ea.distanceTo(ta);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;Ph.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Ph);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let S=f,g=x-1;S<g;S+=c){const m=u.getX(S),C=u.getX(S+1),E=Eo(this,e,cr,l,m,C,S);E&&t.push(E)}if(this.isLineLoop){const S=u.getX(x-1),g=u.getX(f),m=Eo(this,e,cr,l,S,g,x-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let S=f,g=x-1;S<g;S+=c){const m=Eo(this,e,cr,l,S,S+1,S);m&&t.push(m)}if(this.isLineLoop){const S=Eo(this,e,cr,l,x-1,f,x-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Eo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(ea.fromBufferAttribute(a,s),ta.fromBufferAttribute(a,r),t.distanceSqToSegment(ea,ta,ol,Ih)>i)return;ol.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ol);if(!(c<e.near||c>e.far))return{distance:c,point:Ih.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class _c extends qt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zf extends qt{constructor(e,t,i=os,s,r,o,a=vn,l=vn,c,u=Fr,h=1){if(u!==Fr&&u!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jf extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ma extends $t{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let x=0;const S=[],g=i/2;let m=0;C(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Tt(h,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function C(){const y=new k,U=new k;let N=0;const F=(t-e)/i;for(let B=0;B<=r;B++){const R=[],A=B/r,H=A*(t-e)+e;for(let K=0;K<=s;K++){const z=K/s,D=z*l+a,b=Math.sin(D),I=Math.cos(D);U.x=H*b,U.y=-A*i+g,U.z=H*I,h.push(U.x,U.y,U.z),y.set(b,F,I).normalize(),d.push(y.x,y.y,y.z),f.push(z,1-A),R.push(x++)}S.push(R)}for(let B=0;B<s;B++)for(let R=0;R<r;R++){const A=S[R][B],H=S[R+1][B],K=S[R+1][B+1],z=S[R][B+1];(e>0||R!==0)&&(u.push(A,H,z),N+=3),(t>0||R!==r-1)&&(u.push(H,K,z),N+=3)}c.addGroup(m,N,0),m+=N}function E(y){const U=x,N=new Ee,F=new k;let B=0;const R=y===!0?e:t,A=y===!0?1:-1;for(let K=1;K<=s;K++)h.push(0,g*A,0),d.push(0,A,0),f.push(.5,.5),x++;const H=x;for(let K=0;K<=s;K++){const D=K/s*l+a,b=Math.cos(D),I=Math.sin(D);F.x=R*I,F.y=g*A,F.z=R*b,h.push(F.x,F.y,F.z),d.push(0,A,0),N.x=b*.5+.5,N.y=I*.5*A+.5,f.push(N.x,N.y),x++}for(let K=0;K<s;K++){const z=U+K,D=H+K;y===!0?u.push(D,D+1,z):u.push(D+1,D,z),B+=3}c.addGroup(m,B,y===!0?1:2),m+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class au extends $t{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(C){const E=new k,y=new k,U=new k;for(let N=0;N<t.length;N+=3)f(t[N+0],E),f(t[N+1],y),f(t[N+2],U),l(E,y,U,C)}function l(C,E,y,U){const N=U+1,F=[];for(let B=0;B<=N;B++){F[B]=[];const R=C.clone().lerp(y,B/N),A=E.clone().lerp(y,B/N),H=N-B;for(let K=0;K<=H;K++)K===0&&B===N?F[B][K]=R:F[B][K]=R.clone().lerp(A,K/H)}for(let B=0;B<N;B++)for(let R=0;R<2*(N-B)-1;R++){const A=Math.floor(R/2);R%2===0?(d(F[B][A+1]),d(F[B+1][A]),d(F[B][A])):(d(F[B][A+1]),d(F[B+1][A+1]),d(F[B+1][A]))}}function c(C){const E=new k;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(C),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function u(){const C=new k;for(let E=0;E<r.length;E+=3){C.x=r[E+0],C.y=r[E+1],C.z=r[E+2];const y=g(C)/2/Math.PI+.5,U=m(C)/Math.PI+.5;o.push(y,1-U)}x(),h()}function h(){for(let C=0;C<o.length;C+=6){const E=o[C+0],y=o[C+2],U=o[C+4],N=Math.max(E,y,U),F=Math.min(E,y,U);N>.9&&F<.1&&(E<.2&&(o[C+0]+=1),y<.2&&(o[C+2]+=1),U<.2&&(o[C+4]+=1))}}function d(C){r.push(C.x,C.y,C.z)}function f(C,E){const y=C*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function x(){const C=new k,E=new k,y=new k,U=new k,N=new Ee,F=new Ee,B=new Ee;for(let R=0,A=0;R<r.length;R+=9,A+=6){C.set(r[R+0],r[R+1],r[R+2]),E.set(r[R+3],r[R+4],r[R+5]),y.set(r[R+6],r[R+7],r[R+8]),N.set(o[A+0],o[A+1]),F.set(o[A+2],o[A+3]),B.set(o[A+4],o[A+5]),U.copy(C).add(E).add(y).divideScalar(3);const H=g(U);S(N,A+0,C,H),S(F,A+2,E,H),S(B,A+4,y,H)}}function S(C,E,y,U){U<0&&C.x===1&&(o[E]=C.x-1),y.x===0&&y.z===0&&(o[E]=U/2/Math.PI+.5)}function g(C){return Math.atan2(C.z,-C.x)}function m(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.vertices,e.indices,e.radius,e.details)}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ee:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new k,s=[],r=[],o=[],a=new k,l=new ht;for(let f=0;f<=e;f++){const x=f/e;s[f]=this.getTangentAt(x,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(et(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,x))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class lu extends ti{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ee){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class L_ extends lu{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const wo=new k,al=new cu,ll=new cu,cl=new cu;class Qf extends ti{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new k){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(wo.subVectors(s[0],s[1]).add(s[0]),c=wo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=wo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(h),f),S=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);S<1e-4&&(S=1),x<1e-4&&(x=S),g<1e-4&&(g=S),al.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,x,S,g),ll.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,x,S,g),cl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,x,S,g)}else this.curveType==="catmullrom"&&(al.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ll.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),cl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(al.calc(l),ll.calc(l),cl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Dh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function U_(n,e){const t=1-n;return t*t*e}function N_(n,e){return 2*(1-n)*n*e}function F_(n,e){return n*n*e}function wr(n,e,t,i){return U_(n,e)+N_(n,t)+F_(n,i)}function O_(n,e){const t=1-n;return t*t*t*e}function B_(n,e){const t=1-n;return 3*t*t*n*e}function z_(n,e){return 3*(1-n)*n*n*e}function k_(n,e){return n*n*n*e}function Tr(n,e,t,i,s){return O_(n,e)+B_(n,t)+z_(n,i)+k_(n,s)}class ep extends ti{constructor(e=new Ee,t=new Ee,i=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Ee){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class H_ extends ti{constructor(e=new k,t=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new k){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y),Tr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tp extends ti{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V_ extends ti{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class np extends ti{constructor(e=new Ee,t=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ee){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(wr(e,s.x,r.x,o.x),wr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ip extends ti{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(wr(e,s.x,r.x,o.x),wr(e,s.y,r.y,o.y),wr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sp extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Dh(a,l.x,c.x,u.x,h.x),Dh(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}}var vc=Object.freeze({__proto__:null,ArcCurve:L_,CatmullRomCurve3:Qf,CubicBezierCurve:ep,CubicBezierCurve3:H_,EllipseCurve:lu,LineCurve:tp,LineCurve3:V_,QuadraticBezierCurve:np,QuadraticBezierCurve3:ip,SplineCurve:sp});class G_ extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new vc[s.type]().fromJSON(s))}return this}}class Lh extends G_{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new tp(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new np(this.currentPoint.clone(),new Ee(e,t),new Ee(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new ep(this.currentPoint.clone(),new Ee(e,t),new Ee(i,s),new Ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new sp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new lu(e,t,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class rp extends Lh{constructor(e){super(e),this.uuid=ds(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Lh().fromJSON(s))}return this}}function W_(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=op(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=j_(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){const f=n[d],x=n[d+1];f<a&&(a=f),x<l&&(l=x),f>u&&(u=f),x>h&&(h=x)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return kr(r,o,t,a,l,c,0),o}function op(n,e,t,i,s){let r;if(s===ov(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Uh(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Uh(o/i|0,n[o],n[o+1],r);return r&&Zs(r,r.next)&&(Vr(r),r=r.next),r}function cs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Zs(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Vr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function kr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&ev(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Y_(n,i,s,r):X_(n)){e.push(l.i,n.i,c.i),Vr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=q_(cs(n),e),kr(n,e,t,i,s,r,2)):o===2&&$_(n,e,t,i,s,r):kr(cs(n),e,t,i,s,r,1);break}}}function X_(n){const e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let x=i.next;for(;x!==e;){if(x.x>=u&&x.x<=d&&x.y>=h&&x.y<=f&&pr(s,a,r,l,o,c,x.x,x.y)&&Pt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Y_(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Pt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),x=Math.min(u,h,d),S=Math.max(a,l,c),g=Math.max(u,h,d),m=xc(f,x,e,t,i),C=xc(S,g,e,t,i);let E=n.prevZ,y=n.nextZ;for(;E&&E.z>=m&&y&&y.z<=C;){if(E.x>=f&&E.x<=S&&E.y>=x&&E.y<=g&&E!==s&&E!==o&&pr(a,u,l,h,c,d,E.x,E.y)&&Pt(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=f&&y.x<=S&&y.y>=x&&y.y<=g&&y!==s&&y!==o&&pr(a,u,l,h,c,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=S&&E.y>=x&&E.y<=g&&E!==s&&E!==o&&pr(a,u,l,h,c,d,E.x,E.y)&&Pt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=C;){if(y.x>=f&&y.x<=S&&y.y>=x&&y.y<=g&&y!==s&&y!==o&&pr(a,u,l,h,c,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function q_(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Zs(i,s)&&lp(i,t,t.next,s)&&Hr(i,s)&&Hr(s,i)&&(e.push(i.i,t.i,s.i),Vr(t),Vr(t.next),t=n=s),t=t.next}while(t!==n);return cs(t)}function $_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&iv(o,a)){let l=cp(o,a);o=cs(o,o.next),l=cs(l,l.next),kr(o,e,t,i,s,r,0),kr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function j_(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=op(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(nv(c))}s.sort(K_);for(let r=0;r<s.length;r++)t=Z_(s[r],t);return t}function K_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Z_(n,e){const t=J_(n,e);if(!t)return e;const i=cp(t,n);return cs(i,i.next),cs(t,t.next)}function J_(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Zs(n,t))return t;do{if(Zs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&ap(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const h=Math.abs(s-t.y)/(i-t.x);Hr(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Q_(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Q_(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function ev(n,e,t,i){let s=n;do s.z===0&&(s.z=xc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,tv(s)}function tv(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function xc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function nv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ap(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function pr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&ap(n,e,t,i,s,r,o,a)}function iv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!sv(n,e)&&(Hr(n,e)&&Hr(e,n)&&rv(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||Zs(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Zs(n,e){return n.x===e.x&&n.y===e.y}function lp(n,e,t,i){const s=Ao(Pt(n,e,t)),r=Ao(Pt(n,e,i)),o=Ao(Pt(t,i,n)),a=Ao(Pt(t,i,e));return!!(s!==r&&o!==a||s===0&&To(n,t,e)||r===0&&To(n,i,e)||o===0&&To(t,n,i)||a===0&&To(t,e,i))}function To(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ao(n){return n>0?1:n<0?-1:0}function sv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&lp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Hr(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function rv(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function cp(n,e){const t=yc(n.i,n.x,n.y),i=yc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Uh(n,e,t,i){const s=yc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ov(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class av{static triangulate(e,t,i=2){return W_(e,t,i)}}class Ar{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Ar.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Nh(e),Fh(i,e);let o=e.length;t.forEach(Nh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Fh(i,t[l]);const a=av.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Nh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Fh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class na extends au{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new na(e.radius,e.detail)}}class us extends $t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],x=[],S=[],g=[];for(let m=0;m<u;m++){const C=m*d-o;for(let E=0;E<c;E++){const y=E*h-r;x.push(y,-C,0),S.push(0,0,1),g.push(E/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let C=0;C<a;C++){const E=C+c*m,y=C+c*(m+1),U=C+1+c*(m+1),N=C+1+c*m;f.push(E,y,N),f.push(y,U,N)}this.setIndex(f),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(S,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}class uu extends $t{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/s,f=new k,x=new Ee;for(let S=0;S<=s;S++){for(let g=0;g<=i;g++){const m=r+g/i*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,u.push(x.x,x.y)}h+=d}for(let S=0;S<s;S++){const g=S*(i+1);for(let m=0;m<i;m++){const C=m+g,E=C,y=C+i+1,U=C+i+2,N=C+1;a.push(E,y,N),a.push(y,U,N)}}this.setIndex(a),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hu extends $t{constructor(e=new rp([new Ee(0,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(r,3)),this.setAttribute("uv",new Tt(o,2));function c(u){const h=s.length/3,d=u.extractPoints(t);let f=d.shape;const x=d.holes;Ar.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=x.length;g<m;g++){const C=x[g];Ar.isClockWise(C)===!0&&(x[g]=C.reverse())}const S=Ar.triangulateShape(f,x);for(let g=0,m=x.length;g<m;g++){const C=x[g];f=f.concat(C)}for(let g=0,m=f.length;g<m;g++){const C=f[g];s.push(C.x,C.y,0),r.push(0,0,1),o.push(C.x,C.y)}for(let g=0,m=S.length;g<m;g++){const C=S[g],E=C[0]+h,y=C[1]+h,U=C[2]+h;i.push(E,y,U),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return lv(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new hu(i,e.curveSegments)}}function lv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class du extends $t{constructor(e=new ip(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new k,l=new k,c=new Ee;let u=new k;const h=[],d=[],f=[],x=[];S(),this.setIndex(x),this.setAttribute("position",new Tt(h,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function S(){for(let E=0;E<t;E++)g(E);g(r===!1?t:0),C(),m()}function g(E){u=e.getPointAt(E/t,u);const y=o.normals[E],U=o.binormals[E];for(let N=0;N<=s;N++){const F=N/s*Math.PI*2,B=Math.sin(F),R=-Math.cos(F);l.x=R*y.x+B*U.x,l.y=R*y.y+B*U.y,l.z=R*y.z+B*U.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let E=1;E<=t;E++)for(let y=1;y<=s;y++){const U=(s+1)*(E-1)+(y-1),N=(s+1)*E+(y-1),F=(s+1)*E+y,B=(s+1)*(E-1)+y;x.push(U,N,B),x.push(N,F,B)}}function C(){for(let E=0;E<=t;E++)for(let y=0;y<=s;y++)c.x=E/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new du(new vc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class St extends fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cv extends fs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uv extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hv extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fu extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class up extends fu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ul=new ht,Oh=new k,Bh=new k;class hp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ou,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oh),Bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bh),t.updateMatrixWorld(),ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zh=new ht,ur=new k,hl=new k;class dv extends hp{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ur.setFromMatrixPosition(e.matrixWorld),i.position.copy(ur),hl.copy(i.position),hl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(hl),i.updateMatrixWorld(),s.makeTranslation(-ur.x,-ur.y,-ur.z),zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh,i.coordinateSystem,i.reversedDepth)}}class fv extends fu{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new dv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dp extends qf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pv extends hp{constructor(){super(new dp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ia extends fu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new pv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mv extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const kh=new ht;class fp{constructor(e,t,i=0,s=1/0){this.ray=new ya(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new iu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kh),this}intersectObject(e,t=!0,i=[]){return Mc(e,this,i,t),i.sort(Hh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Mc(e[s],this,i,t);return i.sort(Hh),i}}function Hh(n,e){return n.distance-e.distance}function Mc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Mc(r[o],e,t,!0)}}class Vh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gv extends hs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Gh(n,e,t,i){const s=_v(i);switch(t){case Of:return n*e;case Kc:return n*e/s.components*s.byteLength;case Zc:return n*e/s.components*s.byteLength;case zf:return n*e*2/s.components*s.byteLength;case Jc:return n*e*2/s.components*s.byteLength;case Bf:return n*e*3/s.components*s.byteLength;case Ln:return n*e*4/s.components*s.byteLength;case Qc:return n*e*4/s.components*s.byteLength;case Oo:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zo:case ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Xl:return Math.max(n,16)*Math.max(e,8)/4;case Vl:case Wl:return Math.max(n,8)*Math.max(e,8)/2;case Yl:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cc:case uc:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dc:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pc:case mc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _v(n){switch(n){case Qn:case Lf:return{byteLength:1,components:1};case Ur:case Uf:case qr:return{byteLength:2,components:1};case $c:case jc:return{byteLength:2,components:4};case os:case qc:case $n:return{byteLength:4,components:1};case Nf:case Ff:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);function pp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function vv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<h.length;f++){const x=h[d],S=h[f];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,h[d]=S)}h.length=d+1;for(let f=0,x=h.length;f<x;f++){const S=h[f];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var xv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yv=`#ifdef USE_ALPHAHASH
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
#endif`,Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wv=`#ifdef USE_AOMAP
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
#endif`,Tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
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
#endif`,Rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dv=`#ifdef USE_IRIDESCENCE
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
#endif`,Lv=`#ifdef USE_BUMPMAP
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
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vv=`#define PI 3.141592653589793
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
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zv=`#ifdef USE_ENVMAP
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
#endif`,Jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qv=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
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
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
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
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,_x=`struct PhysicalMaterial {
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
}`,vx=`
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rx=`#if defined( USE_POINTS_UV )
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
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
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
#endif`,Nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
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
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iy=`float getShadowMask() {
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
}`,sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
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
#endif`,oy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ay=`#ifdef USE_SKINNING
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
#endif`,ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dy=`#ifdef USE_TRANSMISSION
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
#endif`,fy=`#ifdef USE_TRANSMISSION
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xy=`uniform sampler2D t2D;
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
}`,yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`#include <common>
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
}`,wy=`#if DEPTH_PACKING == 3200
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
}`,Ty=`#define DISTANCE
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
}`,Ay=`#define DISTANCE
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
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`uniform float scale;
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Dy=`#include <common>
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Uy=`#define LAMBERT
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
}`,Ny=`#define LAMBERT
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
}`,Fy=`#define MATCAP
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
}`,Oy=`#define MATCAP
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
}`,By=`#define NORMAL
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
}`,zy=`#define NORMAL
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
}`,ky=`#define PHONG
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
}`,Hy=`#define PHONG
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
}`,Vy=`#define STANDARD
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
}`,Gy=`#define STANDARD
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
}`,Wy=`#define TOON
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
}`,Xy=`#define TOON
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
}`,Yy=`uniform float size;
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
}`,qy=`uniform vec3 diffuse;
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
}`,$y=`#include <common>
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
}`,jy=`uniform vec3 color;
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
}`,Ky=`uniform float rotation;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:xv,alphahash_pars_fragment:yv,alphamap_fragment:Mv,alphamap_pars_fragment:Sv,alphatest_fragment:bv,alphatest_pars_fragment:Ev,aomap_fragment:wv,aomap_pars_fragment:Tv,batching_pars_vertex:Av,batching_vertex:Rv,begin_vertex:Cv,beginnormal_vertex:Pv,bsdfs:Iv,iridescence_fragment:Dv,bumpmap_pars_fragment:Lv,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:Nv,clipping_planes_pars_vertex:Fv,clipping_planes_vertex:Ov,color_fragment:Bv,color_pars_fragment:zv,color_pars_vertex:kv,color_vertex:Hv,common:Vv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Wv,displacementmap_pars_vertex:Xv,displacementmap_vertex:Yv,emissivemap_fragment:qv,emissivemap_pars_fragment:$v,colorspace_fragment:jv,colorspace_pars_fragment:Kv,envmap_fragment:Zv,envmap_common_pars_fragment:Jv,envmap_pars_fragment:Qv,envmap_pars_vertex:ex,envmap_physical_pars_fragment:hx,envmap_vertex:tx,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:sx,fog_pars_fragment:rx,gradientmap_pars_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:ux,lights_toon_fragment:dx,lights_toon_pars_fragment:fx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:_x,lights_fragment_begin:vx,lights_fragment_maps:xx,lights_fragment_end:yx,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:bx,logdepthbuf_vertex:Ex,map_fragment:wx,map_pars_fragment:Tx,map_particle_fragment:Ax,map_particle_pars_fragment:Rx,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Px,morphinstance_vertex:Ix,morphcolor_vertex:Dx,morphnormal_vertex:Lx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Nx,normal_fragment_begin:Fx,normal_fragment_maps:Ox,normal_pars_fragment:Bx,normal_pars_vertex:zx,normal_vertex:kx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:Yx,packing:qx,premultiplied_alpha_fragment:$x,project_vertex:jx,dithering_fragment:Kx,dithering_pars_fragment:Zx,roughnessmap_fragment:Jx,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:ey,shadowmap_pars_vertex:ty,shadowmap_vertex:ny,shadowmask_pars_fragment:iy,skinbase_vertex:sy,skinning_pars_vertex:ry,skinning_vertex:oy,skinnormal_vertex:ay,specularmap_fragment:ly,specularmap_pars_fragment:cy,tonemapping_fragment:uy,tonemapping_pars_fragment:hy,transmission_fragment:dy,transmission_pars_fragment:fy,uv_pars_fragment:py,uv_pars_vertex:my,uv_vertex:gy,worldpos_vertex:_y,background_vert:vy,background_frag:xy,backgroundCube_vert:yy,backgroundCube_frag:My,cube_vert:Sy,cube_frag:by,depth_vert:Ey,depth_frag:wy,distanceRGBA_vert:Ty,distanceRGBA_frag:Ay,equirect_vert:Ry,equirect_frag:Cy,linedashed_vert:Py,linedashed_frag:Iy,meshbasic_vert:Dy,meshbasic_frag:Ly,meshlambert_vert:Uy,meshlambert_frag:Ny,meshmatcap_vert:Fy,meshmatcap_frag:Oy,meshnormal_vert:By,meshnormal_frag:zy,meshphong_vert:ky,meshphong_frag:Hy,meshphysical_vert:Vy,meshphysical_frag:Gy,meshtoon_vert:Wy,meshtoon_frag:Xy,points_vert:Yy,points_frag:qy,shadow_vert:$y,shadow_frag:jy,sprite_vert:Ky,sprite_frag:Zy},Ae={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Xn={basic:{uniforms:Jt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Jt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Jt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Jt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Jt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Jt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Jt([Ae.points,Ae.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Jt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Jt([Ae.common,Ae.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Jt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Jt([Ae.sprite,Ae.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Jt([Ae.common,Ae.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Jt([Ae.lights,Ae.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Xn.physical={uniforms:Jt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ro={r:0,b:0,g:0},$i=new On,Jy=new ht;function Qy(n,e,t,i,s,r,o){const a=new tt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function x(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function S(E){let y=!1;const U=x(E);U===null?m(a,l):U&&U.isColor&&(m(U,1),y=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(E,y){const U=x(y);U&&(U.isCubeTexture||U.mapping===xa)?(u===void 0&&(u=new it(new ei(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Ks(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,F,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),$i.copy(y.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jy.makeRotationFromEuler($i)),u.material.toneMapped=rt.getTransfer(U.colorSpace)!==pt,(h!==U||d!==U.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=U,d=U.version,f=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new it(new us(2,2),new Oi({name:"BackgroundMaterial",uniforms:Ks(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=rt.getTransfer(U.colorSpace)!==pt,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(h!==U||d!==U.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=U,d=U.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,y){E.getRGB(Ro,Yf(n)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,y,o)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(a,l)},render:S,addToRenderList:g,dispose:C}}function eM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(A,H,K,z,D){let b=!1;const I=h(z,K,H);r!==I&&(r=I,c(r.object)),b=f(A,z,K,D),b&&x(A,z,K,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(b||o)&&(o=!1,y(A,H,K,z),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function u(A){return n.deleteVertexArray(A)}function h(A,H,K){const z=K.wireframe===!0;let D=i[A.id];D===void 0&&(D={},i[A.id]=D);let b=D[H.id];b===void 0&&(b={},D[H.id]=b);let I=b[z];return I===void 0&&(I=d(l()),b[z]=I),I}function d(A){const H=[],K=[],z=[];for(let D=0;D<t;D++)H[D]=0,K[D]=0,z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:z,object:A,attributes:{},index:null}}function f(A,H,K,z){const D=r.attributes,b=H.attributes;let I=0;const O=K.getAttributes();for(const L in O)if(O[L].location>=0){const he=D[L];let W=b[L];if(W===void 0&&(L==="instanceMatrix"&&A.instanceMatrix&&(W=A.instanceMatrix),L==="instanceColor"&&A.instanceColor&&(W=A.instanceColor)),he===void 0||he.attribute!==W||W&&he.data!==W.data)return!0;I++}return r.attributesNum!==I||r.index!==z}function x(A,H,K,z){const D={},b=H.attributes;let I=0;const O=K.getAttributes();for(const L in O)if(O[L].location>=0){let he=b[L];he===void 0&&(L==="instanceMatrix"&&A.instanceMatrix&&(he=A.instanceMatrix),L==="instanceColor"&&A.instanceColor&&(he=A.instanceColor));const W={};W.attribute=he,he&&he.data&&(W.data=he.data),D[L]=W,I++}r.attributes=D,r.attributesNum=I,r.index=z}function S(){const A=r.newAttributes;for(let H=0,K=A.length;H<K;H++)A[H]=0}function g(A){m(A,0)}function m(A,H){const K=r.newAttributes,z=r.enabledAttributes,D=r.attributeDivisors;K[A]=1,z[A]===0&&(n.enableVertexAttribArray(A),z[A]=1),D[A]!==H&&(n.vertexAttribDivisor(A,H),D[A]=H)}function C(){const A=r.newAttributes,H=r.enabledAttributes;for(let K=0,z=H.length;K<z;K++)H[K]!==A[K]&&(n.disableVertexAttribArray(K),H[K]=0)}function E(A,H,K,z,D,b,I){I===!0?n.vertexAttribIPointer(A,H,K,D,b):n.vertexAttribPointer(A,H,K,z,D,b)}function y(A,H,K,z){S();const D=z.attributes,b=K.getAttributes(),I=H.defaultAttributeValues;for(const O in b){const L=b[O];if(L.location>=0){let ne=D[O];if(ne===void 0&&(O==="instanceMatrix"&&A.instanceMatrix&&(ne=A.instanceMatrix),O==="instanceColor"&&A.instanceColor&&(ne=A.instanceColor)),ne!==void 0){const he=ne.normalized,W=ne.itemSize,me=e.get(ne);if(me===void 0)continue;const Se=me.buffer,ze=me.type,Xe=me.bytesPerElement,le=ze===n.INT||ze===n.UNSIGNED_INT||ne.gpuType===qc;if(ne.isInterleavedBufferAttribute){const ue=ne.data,be=ue.stride,Be=ne.offset;if(ue.isInstancedInterleavedBuffer){for(let de=0;de<L.locationSize;de++)m(L.location+de,ue.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<L.locationSize;de++)g(L.location+de);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let de=0;de<L.locationSize;de++)E(L.location+de,W/L.locationSize,ze,he,be*Xe,(Be+W/L.locationSize*de)*Xe,le)}else{if(ne.isInstancedBufferAttribute){for(let ue=0;ue<L.locationSize;ue++)m(L.location+ue,ne.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ue=0;ue<L.locationSize;ue++)g(L.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let ue=0;ue<L.locationSize;ue++)E(L.location+ue,W/L.locationSize,ze,he,W*Xe,W/L.locationSize*ue*Xe,le)}}else if(I!==void 0){const he=I[O];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(L.location,he);break;case 3:n.vertexAttrib3fv(L.location,he);break;case 4:n.vertexAttrib4fv(L.location,he);break;default:n.vertexAttrib1fv(L.location,he)}}}}C()}function U(){B();for(const A in i){const H=i[A];for(const K in H){const z=H[K];for(const D in z)u(z[D].object),delete z[D];delete H[K]}delete i[A]}}function N(A){if(i[A.id]===void 0)return;const H=i[A.id];for(const K in H){const z=H[K];for(const D in z)u(z[D].object),delete z[D];delete H[K]}delete i[A.id]}function F(A){for(const H in i){const K=i[H];if(K[A.id]===void 0)continue;const z=K[A.id];for(const D in z)u(z[D].object),delete z[D];delete K[A.id]}}function B(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:R,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:S,enableAttribute:g,disableUnusedAttributes:C}}function tM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let x=0;x<h;x++)f+=u[x];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<c.length;x++)o(c[x],u[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let x=0;for(let S=0;S<h;S++)x+=u[S]*d[S];t.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==Ln&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){const B=F===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Qn&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==$n&&!B)}function l(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=x>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:C,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:U,maxSamples:N}}function iM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ci,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const x=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||x===null||x.length===0||r&&!g)r?u(null):c();else{const C=r?0:i,E=C*4;let y=m.clippingState||null;l.value=y,y=u(x,d,E,f);for(let U=0;U!==E;++U)y[U]=t[U];m.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,x){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=l.value,x!==!0||g===null){const m=f+S*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,y=f;E!==S;++E,y+=4)o.copy(h[E]).applyMatrix4(C,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function sM(n){let e=new WeakMap;function t(o,a){return a===zl?o.mapping=qs:a===kl&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zl||a===kl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new T_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Fs=4,Wh=[.125,.215,.35,.446,.526,.582],Qi=20,dl=new dp,Xh=new tt;let fl=null,pl=0,ml=0,gl=!1;const Zi=(1+Math.sqrt(5))/2,Ps=1/Zi,Yh=[new k(-Zi,Ps,0),new k(Zi,Ps,0),new k(-Ps,0,Zi),new k(Ps,0,Zi),new k(0,Zi,-Ps),new k(0,Zi,Ps),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],rM=new k;class Sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=rM}=r;fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,pl,ml),this._renderer.xr.enabled=gl,e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:qr,format:Ln,colorSpace:js,depthBuffer:!1},s=qh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oM(r)),this._blurMaterial=aM(r,e,t)}return s}_compileMaterial(e){const t=new it(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,i,s,r){const l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Xh),h.toneMapping=Ui,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const S=new kt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new it(new ei,S);let m=!1;const C=e.background;C?C.isColor&&(S.color.copy(C),e.background=null,m=!0):(S.color.copy(Xh),m=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const U=this._cubeSize;Co(s,y*U,E>2?U:0,U,U),h.setRenderTarget(s),m&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=C}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===qs||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$h());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Co(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,dl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yh[(s-r-1)%Yh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new it(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),S=r/x,g=isFinite(r)?1+Math.floor(u*S):Qi;g>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qi}`);const m=[];let C=0;for(let F=0;F<Qi;++F){const B=F/S,R=Math.exp(-B*B/2);m.push(R),F===0?C+=R:F<g&&(C+=2*R)}for(let F=0;F<m.length;F++)m[F]=m[F]/C;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=x,d.mipInt.value=E-i;const y=this._sizeLods[s],U=3*y*(s>E-Fs?s-E+Fs:0),N=4*(this._cubeSize-y);Co(t,U,N,3*y,2*y),l.setRenderTarget(t),l.render(h,dl)}}function oM(n){const e=[],t=[],i=[];let s=n;const r=n-Fs+1+Wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Fs?l=Wh[o-n+Fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,x=6,S=3,g=2,m=1,C=new Float32Array(S*x*f),E=new Float32Array(g*x*f),y=new Float32Array(m*x*f);for(let N=0;N<f;N++){const F=N%3*2/3-1,B=N>2?0:-1,R=[F,B,0,F+2/3,B,0,F+2/3,B+1,0,F,B,0,F+2/3,B+1,0,F,B+1,0];C.set(R,S*x*N),E.set(d,g*x*N);const A=[N,N,N,N,N,N];y.set(A,m*x*N)}const U=new $t;U.setAttribute("position",new wn(C,S)),U.setAttribute("uv",new wn(E,g)),U.setAttribute("faceIndex",new wn(y,m)),e.push(U),s>Fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qh(n,e,t){const i=new ls(n,e,t);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Co(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function aM(n,e,t){const i=new Float32Array(Qi),s=new k(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function $h(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function jh(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}function lM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===zl||l===kl,u=l===qs||l===$s;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Sc(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Sc(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function cM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function uM(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,x=h.attributes.position;let S=0;if(f!==null){const C=f.array;S=f.version;for(let E=0,y=C.length;E<y;E+=3){const U=C[E+0],N=C[E+1],F=C[E+2];d.push(U,N,N,F,F,U)}}else if(x!==void 0){const C=x.array;S=x.version;for(let E=0,y=C.length/3-1;E<y;E+=3){const U=E+0,N=E+1,F=E+2;d.push(U,N,N,F,F,U)}}else return;const g=new(Hf(d)?Xf:Wf)(d,1);g.version=S;const m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function hM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,x){x!==0&&(n.drawElementsInstanced(i,f,r,d*o,x),t.update(f,i,x))}function u(d,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,x);let g=0;for(let m=0;m<x;m++)g+=f[m];t.update(g,i,1)}function h(d,f,x,S){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],S[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,S,0,x);let m=0;for(let C=0;C<x;C++)m+=f[C]*S[C];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function dM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function fM(n,e,t){const i=new WeakMap,s=new gt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let A=function(){B.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var f=A;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;x===!0&&(y=1),S===!0&&(y=2),g===!0&&(y=3);let U=a.attributes.position.count*y,N=1;U>e.maxTextureSize&&(N=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const F=new Float32Array(U*N*4*h),B=new Vf(F,U,N,h);B.type=$n,B.needsUpdate=!0;const R=y*4;for(let H=0;H<h;H++){const K=m[H],z=C[H],D=E[H],b=U*N*4*H;for(let I=0;I<K.count;I++){const O=I*R;x===!0&&(s.fromBufferAttribute(K,I),F[b+O+0]=s.x,F[b+O+1]=s.y,F[b+O+2]=s.z,F[b+O+3]=0),S===!0&&(s.fromBufferAttribute(z,I),F[b+O+4]=s.x,F[b+O+5]=s.y,F[b+O+6]=s.z,F[b+O+7]=0),g===!0&&(s.fromBufferAttribute(D,I),F[b+O+8]=s.x,F[b+O+9]=s.y,F[b+O+10]=s.z,F[b+O+11]=D.itemSize===4?s.w:1)}}d={count:h,texture:B,size:new Ee(U,N)},i.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const S=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function pM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const mp=new qt,Kh=new Zf(1,1),gp=new Vf,_p=new c_,vp=new $f,Zh=[],Jh=[],Qh=new Float32Array(16),ed=new Float32Array(9),td=new Float32Array(4);function Qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Zh[s];if(r===void 0&&(r=new Float32Array(s),Zh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sa(n,e){let t=Jh[e];t===void 0&&(t=new Int32Array(e),Jh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function xM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;td.set(i),n.uniformMatrix2fv(this.addr,!1,td),Ot(t,i)}}function yM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;ed.set(i),n.uniformMatrix3fv(this.addr,!1,ed),Ot(t,i)}}function MM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Qh.set(i),n.uniformMatrix4fv(this.addr,!1,Qh),Ot(t,i)}}function SM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function TM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function PM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Kh.compareFunction=kf,r=Kh):r=mp,t.setTexture2D(e||r,s)}function IM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_p,s)}function DM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||vp,s)}function LM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gp,s)}function UM(n){switch(n){case 5126:return mM;case 35664:return gM;case 35665:return _M;case 35666:return vM;case 35674:return xM;case 35675:return yM;case 35676:return MM;case 5124:case 35670:return SM;case 35667:case 35671:return bM;case 35668:case 35672:return EM;case 35669:case 35673:return wM;case 5125:return TM;case 36294:return AM;case 36295:return RM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return LM}}function NM(n,e){n.uniform1fv(this.addr,e)}function FM(n,e){const t=Qs(e,this.size,2);n.uniform2fv(this.addr,t)}function OM(n,e){const t=Qs(e,this.size,3);n.uniform3fv(this.addr,t)}function BM(n,e){const t=Qs(e,this.size,4);n.uniform4fv(this.addr,t)}function zM(n,e){const t=Qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kM(n,e){const t=Qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function HM(n,e){const t=Qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function VM(n,e){n.uniform1iv(this.addr,e)}function GM(n,e){n.uniform2iv(this.addr,e)}function WM(n,e){n.uniform3iv(this.addr,e)}function XM(n,e){n.uniform4iv(this.addr,e)}function YM(n,e){n.uniform1uiv(this.addr,e)}function qM(n,e){n.uniform2uiv(this.addr,e)}function $M(n,e){n.uniform3uiv(this.addr,e)}function jM(n,e){n.uniform4uiv(this.addr,e)}function KM(n,e,t){const i=this.cache,s=e.length,r=Sa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||mp,r[o])}function ZM(n,e,t){const i=this.cache,s=e.length,r=Sa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_p,r[o])}function JM(n,e,t){const i=this.cache,s=e.length,r=Sa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||vp,r[o])}function QM(n,e,t){const i=this.cache,s=e.length,r=Sa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||gp,r[o])}function e1(n){switch(n){case 5126:return NM;case 35664:return FM;case 35665:return OM;case 35666:return BM;case 35674:return zM;case 35675:return kM;case 35676:return HM;case 5124:case 35670:return VM;case 35667:case 35671:return GM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return YM;case 36294:return qM;case 36295:return $M;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return QM}}class t1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=UM(t.type)}}class n1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e1(t.type)}}class i1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function nd(n,e){n.seq.push(e),n.map[e.id]=e}function s1(n,e,t){const i=n.name,s=i.length;for(_l.lastIndex=0;;){const r=_l.exec(i),o=_l.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nd(t,c===void 0?new t1(a,n,e):new n1(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new i1(a),nd(t,h)),t=h}}}class Ho{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);s1(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function id(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const r1=37297;let o1=0;function a1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const sd=new Je;function l1(n){rt._getMatrix(sd,rt.workingColorSpace,n);const e=`mat3( ${sd.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Zo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+a1(n.getShaderSource(e),a)}else return r}function c1(n,e){const t=l1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function u1(n,e){let t;switch(e){case b0:t="Linear";break;case E0:t="Reinhard";break;case w0:t="Cineon";break;case Yc:t="ACESFilmic";break;case A0:t="AgX";break;case R0:t="Neutral";break;case T0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Po=new k;function h1(){rt.getLuminanceCoefficients(Po);const n=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function f1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function p1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function mr(n){return n!==""}function od(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ad(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(n){return n.replace(m1,_1)}const g1=new Map;function _1(n,e){let t=Qe[e];if(t===void 0){const i=g1.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bc(t)}const v1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(n){return n.replace(v1,x1)}function x1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function y1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===If?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function M1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qs:case $s:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function S1(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===$s&&(e="ENVMAP_MODE_REFRACTION"),e}function b1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xc:e="ENVMAP_BLENDING_MULTIPLY";break;case M0:e="ENVMAP_BLENDING_MIX";break;case S0:e="ENVMAP_BLENDING_ADD";break}return e}function E1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function w1(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=y1(t),c=M1(t),u=S1(t),h=b1(t),d=E1(t),f=d1(t),x=f1(r),S=s.createProgram();let g,m,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(mr).join(`
`),m.length>0&&(m+=`
`)):(g=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),m=[cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ui?u1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,c1("linearToOutputTexel",t.outputColorSpace),h1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=bc(o),o=od(o,t),o=ad(o,t),a=bc(a),a=od(a,t),a=ad(a,t),o=ld(o),a=ld(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=C+g+o,y=C+m+a,U=id(s,s.VERTEX_SHADER,E),N=id(s,s.FRAGMENT_SHADER,y);s.attachShader(S,U),s.attachShader(S,N),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function F(H){if(n.debug.checkShaderErrors){const K=s.getProgramInfoLog(S)||"",z=s.getShaderInfoLog(U)||"",D=s.getShaderInfoLog(N)||"",b=K.trim(),I=z.trim(),O=D.trim();let L=!0,ne=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,U,N);else{const he=rd(s,U,"vertex"),W=rd(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+b+`
`+he+`
`+W)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(I===""||O==="")&&(ne=!1);ne&&(H.diagnostics={runnable:L,programLog:b,vertexShader:{log:I,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(U),s.deleteShader(N),B=new Ho(s,S),R=p1(s,S)}let B;this.getUniforms=function(){return B===void 0&&F(this),B};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(S,r1)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o1++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=U,this.fragmentShader=N,this}let T1=0;class A1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new R1(e),t.set(e,i)),i}}class R1{constructor(e){this.id=T1++,this.code=e,this.usedTimes=0}}function C1(n,e,t,i,s,r,o){const a=new iu,l=new A1,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(R){return c.add(R),R===0?"uv":`uv${R}`}function g(R,A,H,K,z){const D=K.fog,b=z.geometry,I=R.isMeshStandardMaterial?K.environment:null,O=(R.isMeshStandardMaterial?t:e).get(R.envMap||I),L=O&&O.mapping===xa?O.image.height:null,ne=x[R.type];R.precision!==null&&(f=s.getMaxPrecision(R.precision),f!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",f,"instead."));const he=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,W=he!==void 0?he.length:0;let me=0;b.morphAttributes.position!==void 0&&(me=1),b.morphAttributes.normal!==void 0&&(me=2),b.morphAttributes.color!==void 0&&(me=3);let Se,ze,Xe,le;if(ne){const ot=Xn[ne];Se=ot.vertexShader,ze=ot.fragmentShader}else Se=R.vertexShader,ze=R.fragmentShader,l.update(R),Xe=l.getVertexShaderID(R),le=l.getFragmentShaderID(R);const ue=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Be=z.isInstancedMesh===!0,de=z.isBatchedMesh===!0,T=!!R.map,_=!!R.matcap,p=!!O,V=!!R.aoMap,G=!!R.lightMap,q=!!R.bumpMap,$=!!R.normalMap,ae=!!R.displacementMap,Z=!!R.emissiveMap,ie=!!R.metalnessMap,Y=!!R.roughnessMap,pe=R.anisotropy>0,w=R.clearcoat>0,M=R.dispersion>0,X=R.iridescence>0,te=R.sheen>0,ce=R.transmission>0,ee=pe&&!!R.anisotropyMap,Me=w&&!!R.clearcoatMap,ge=w&&!!R.clearcoatNormalMap,Pe=w&&!!R.clearcoatRoughnessMap,Ie=X&&!!R.iridescenceMap,_e=X&&!!R.iridescenceThicknessMap,Re=te&&!!R.sheenColorMap,Ne=te&&!!R.sheenRoughnessMap,De=!!R.specularMap,Te=!!R.specularColorMap,je=!!R.specularIntensityMap,j=ce&&!!R.transmissionMap,ye=ce&&!!R.thicknessMap,we=!!R.gradientMap,Ue=!!R.alphaMap,ve=R.alphaTest>0,fe=!!R.alphaHash,Oe=!!R.extensions;let Ke=Ui;R.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const yt={shaderID:ne,shaderType:R.type,shaderName:R.name,vertexShader:Se,fragmentShader:ze,defines:R.defines,customVertexShaderID:Xe,customFragmentShaderID:le,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:f,batching:de,batchingColor:de&&z._colorsTexture!==null,instancing:Be,instancingColor:Be&&z.instanceColor!==null,instancingMorph:Be&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:js,alphaToCoverage:!!R.alphaToCoverage,map:T,matcap:_,envMap:p,envMapMode:p&&O.mapping,envMapCubeUVHeight:L,aoMap:V,lightMap:G,bumpMap:q,normalMap:$,displacementMap:d&&ae,emissiveMap:Z,normalMapObjectSpace:$&&R.normalMapType===D0,normalMapTangentSpace:$&&R.normalMapType===eu,metalnessMap:ie,roughnessMap:Y,anisotropy:pe,anisotropyMap:ee,clearcoat:w,clearcoatMap:Me,clearcoatNormalMap:ge,clearcoatRoughnessMap:Pe,dispersion:M,iridescence:X,iridescenceMap:Ie,iridescenceThicknessMap:_e,sheen:te,sheenColorMap:Re,sheenRoughnessMap:Ne,specularMap:De,specularColorMap:Te,specularIntensityMap:je,transmission:ce,transmissionMap:j,thicknessMap:ye,gradientMap:we,opaque:R.transparent===!1&&R.blending===Hs&&R.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ve,alphaHash:fe,combine:R.combine,mapUv:T&&S(R.map.channel),aoMapUv:V&&S(R.aoMap.channel),lightMapUv:G&&S(R.lightMap.channel),bumpMapUv:q&&S(R.bumpMap.channel),normalMapUv:$&&S(R.normalMap.channel),displacementMapUv:ae&&S(R.displacementMap.channel),emissiveMapUv:Z&&S(R.emissiveMap.channel),metalnessMapUv:ie&&S(R.metalnessMap.channel),roughnessMapUv:Y&&S(R.roughnessMap.channel),anisotropyMapUv:ee&&S(R.anisotropyMap.channel),clearcoatMapUv:Me&&S(R.clearcoatMap.channel),clearcoatNormalMapUv:ge&&S(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&S(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&S(R.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&S(R.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&S(R.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&S(R.sheenRoughnessMap.channel),specularMapUv:De&&S(R.specularMap.channel),specularColorMapUv:Te&&S(R.specularColorMap.channel),specularIntensityMapUv:je&&S(R.specularIntensityMap.channel),transmissionMapUv:j&&S(R.transmissionMap.channel),thicknessMapUv:ye&&S(R.thicknessMap.channel),alphaMapUv:Ue&&S(R.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&($||pe),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!b.attributes.uv&&(T||Ue),fog:!!D,useFog:R.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:be,skinning:z.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:me,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:T&&R.map.isVideoTexture===!0&&rt.getTransfer(R.map.colorSpace)===pt,decodeVideoTextureEmissive:Z&&R.emissiveMap.isVideoTexture===!0&&rt.getTransfer(R.emissiveMap.colorSpace)===pt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Sn,flipSided:R.side===rn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Oe&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&R.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function m(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const H in R.defines)A.push(H),A.push(R.defines[H]);return R.isRawShaderMaterial===!1&&(C(A,R),E(A,R),A.push(n.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function C(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function E(R,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),A.gradientMap&&a.enable(22),R.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),R.push(a.mask)}function y(R){const A=x[R.type];let H;if(A){const K=Xn[A];H=S_.clone(K.uniforms)}else H=R.uniforms;return H}function U(R,A){let H;for(let K=0,z=u.length;K<z;K++){const D=u[K];if(D.cacheKey===A){H=D,++H.usedTimes;break}}return H===void 0&&(H=new w1(n,A,R,r),u.push(H)),H}function N(R){if(--R.usedTimes===0){const A=u.indexOf(R);u[A]=u[u.length-1],u.pop(),R.destroy()}}function F(R){l.remove(R)}function B(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:U,releaseProgram:N,releaseShaderCache:F,programs:u,dispose:B}}function P1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function I1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ud(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,x,S,g){let m=n[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:x,renderOrder:h.renderOrder,z:S,group:g},n[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=x,m.renderOrder=h.renderOrder,m.z=S,m.group=g),e++,m}function a(h,d,f,x,S,g){const m=o(h,d,f,x,S,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(h,d,f,x,S,g){const m=o(h,d,f,x,S,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||I1),i.length>1&&i.sort(d||ud),s.length>1&&s.sort(d||ud)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function D1(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new hd,n.set(i,[o])):s>=r.length?(o=new hd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function L1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new tt};break;case"SpotLight":t={position:new k,direction:new k,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function U1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let N1=0;function F1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function O1(n){const e=new L1,t=U1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new ht,o=new ht;function a(c){let u=0,h=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let f=0,x=0,S=0,g=0,m=0,C=0,E=0,y=0,U=0,N=0,F=0;c.sort(F1);for(let R=0,A=c.length;R<A;R++){const H=c[R],K=H.color,z=H.intensity,D=H.distance,b=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)u+=K.r*z,h+=K.g*z,d+=K.b*z;else if(H.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(H.sh.coefficients[I],z);F++}else if(H.isDirectionalLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const O=H.shadow,L=t.get(H);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,i.directionalShadow[f]=L,i.directionalShadowMap[f]=b,i.directionalShadowMatrix[f]=H.shadow.matrix,C++}i.directional[f]=I,f++}else if(H.isSpotLight){const I=e.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(K).multiplyScalar(z),I.distance=D,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,i.spot[S]=I;const O=H.shadow;if(H.map&&(i.spotLightMap[U]=H.map,U++,O.updateMatrices(H),H.castShadow&&N++),i.spotLightMatrix[S]=O.matrix,H.castShadow){const L=t.get(H);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,i.spotShadow[S]=L,i.spotShadowMap[S]=b,y++}S++}else if(H.isRectAreaLight){const I=e.get(H);I.color.copy(K).multiplyScalar(z),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),i.rectArea[g]=I,g++}else if(H.isPointLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const O=H.shadow,L=t.get(H);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,L.shadowCameraNear=O.camera.near,L.shadowCameraFar=O.camera.far,i.pointShadow[x]=L,i.pointShadowMap[x]=b,i.pointShadowMatrix[x]=H.shadow.matrix,E++}i.point[x]=I,x++}else if(H.isHemisphereLight){const I=e.get(H);I.skyColor.copy(H.color).multiplyScalar(z),I.groundColor.copy(H.groundColor).multiplyScalar(z),i.hemi[m]=I,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const B=i.hash;(B.directionalLength!==f||B.pointLength!==x||B.spotLength!==S||B.rectAreaLength!==g||B.hemiLength!==m||B.numDirectionalShadows!==C||B.numPointShadows!==E||B.numSpotShadows!==y||B.numSpotMaps!==U||B.numLightProbes!==F)&&(i.directional.length=f,i.spot.length=S,i.rectArea.length=g,i.point.length=x,i.hemi.length=m,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+U-N,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=F,B.directionalLength=f,B.pointLength=x,B.spotLength=S,B.rectAreaLength=g,B.hemiLength=m,B.numDirectionalShadows=C,B.numPointShadows=E,B.numSpotShadows=y,B.numSpotMaps=U,B.numLightProbes=F,i.version=N1++)}function l(c,u){let h=0,d=0,f=0,x=0,S=0;const g=u.matrixWorldInverse;for(let m=0,C=c.length;m<C;m++){const E=c[m];if(E.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),h++}else if(E.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(E.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),d++}else if(E.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),S++}}}return{setup:a,setupView:l,state:i}}function dd(n){const e=new O1(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function B1(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new dd(n),e.set(s,[a])):r>=o.length?(a=new dd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k1=`uniform sampler2D shadow_pass;
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
}`;function H1(n,e,t){let i=new ou;const s=new Ee,r=new Ee,o=new gt,a=new uv({depthPacking:I0}),l=new hv,c={},u=t.maxTextureSize,h={[Fi]:rn,[rn]:Fi,[Sn]:Sn},d=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:z1,fragmentShader:k1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const x=new $t;x.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new it(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=If;let m=this.type;this.render=function(N,F,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;const R=n.getRenderTarget(),A=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),K=n.state;K.setBlending(Li),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const z=m!==ui&&this.type===ui,D=m===ui&&this.type!==ui;for(let b=0,I=N.length;b<I;b++){const O=N[b],L=O.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const ne=L.getFrameExtents();if(s.multiply(ne),r.copy(L.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,L.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,L.mapSize.y=r.y)),L.map===null||z===!0||D===!0){const W=this.type!==ui?{minFilter:vn,magFilter:vn}:{};L.map!==null&&L.map.dispose(),L.map=new ls(s.x,s.y,W),L.map.texture.name=O.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const he=L.getViewportCount();for(let W=0;W<he;W++){const me=L.getViewport(W);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),K.viewport(o),L.updateMatrices(O,W),i=L.getFrustum(),y(F,B,L.camera,O,this.type)}L.isPointLightShadow!==!0&&this.type===ui&&C(L,B),L.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(R,A,H)};function C(N,F){const B=e.update(S);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,f.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ls(s.x,s.y)),d.uniforms.shadow_pass.value=N.map.texture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(F,null,B,d,S,null),f.uniforms.shadow_pass.value=N.mapPass.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(F,null,B,f,S,null)}function E(N,F,B,R){let A=null;const H=B.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)A=H;else if(A=B.isPointLight===!0?l:a,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=A.uuid,z=F.uuid;let D=c[K];D===void 0&&(D={},c[K]=D);let b=D[z];b===void 0&&(b=A.clone(),D[z]=b,F.addEventListener("dispose",U)),A=b}if(A.visible=F.visible,A.wireframe=F.wireframe,R===ui?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:h[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const K=n.properties.get(A);K.light=B}return A}function y(N,F,B,R,A){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===ui)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,N.matrixWorld);const z=e.update(N),D=N.material;if(Array.isArray(D)){const b=z.groups;for(let I=0,O=b.length;I<O;I++){const L=b[I],ne=D[L.materialIndex];if(ne&&ne.visible){const he=E(N,ne,R,A);N.onBeforeShadow(n,N,F,B,z,he,L),n.renderBufferDirect(B,null,z,he,N,L),N.onAfterShadow(n,N,F,B,z,he,L)}}}else if(D.visible){const b=E(N,D,R,A);N.onBeforeShadow(n,N,F,B,z,b,null),n.renderBufferDirect(B,null,z,b,N,null),N.onAfterShadow(n,N,F,B,z,b,null)}}const K=N.children;for(let z=0,D=K.length;z<D;z++)y(K[z],F,B,R,A)}function U(N){N.target.removeEventListener("dispose",U);for(const B in c){const R=c[B],A=N.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const V1={[Dl]:Ll,[Ul]:Ol,[Nl]:Bl,[Ys]:Fl,[Ll]:Dl,[Ol]:Ul,[Bl]:Nl,[Fl]:Ys};function G1(n,e){function t(){let j=!1;const ye=new gt;let we=null;const Ue=new gt(0,0,0,0);return{setMask:function(ve){we!==ve&&!j&&(n.colorMask(ve,ve,ve,ve),we=ve)},setLocked:function(ve){j=ve},setClear:function(ve,fe,Oe,Ke,yt){yt===!0&&(ve*=Ke,fe*=Ke,Oe*=Ke),ye.set(ve,fe,Oe,Ke),Ue.equals(ye)===!1&&(n.clearColor(ve,fe,Oe,Ke),Ue.copy(ye))},reset:function(){j=!1,we=null,Ue.set(-1,0,0,0)}}}function i(){let j=!1,ye=!1,we=null,Ue=null,ve=null;return{setReversed:function(fe){if(ye!==fe){const Oe=e.get("EXT_clip_control");fe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ye=fe;const Ke=ve;ve=null,this.setClear(Ke)}},getReversed:function(){return ye},setTest:function(fe){fe?ue(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(fe){we!==fe&&!j&&(n.depthMask(fe),we=fe)},setFunc:function(fe){if(ye&&(fe=V1[fe]),Ue!==fe){switch(fe){case Dl:n.depthFunc(n.NEVER);break;case Ll:n.depthFunc(n.ALWAYS);break;case Ul:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case Nl:n.depthFunc(n.EQUAL);break;case Fl:n.depthFunc(n.GEQUAL);break;case Ol:n.depthFunc(n.GREATER);break;case Bl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=fe}},setLocked:function(fe){j=fe},setClear:function(fe){ve!==fe&&(ye&&(fe=1-fe),n.clearDepth(fe),ve=fe)},reset:function(){j=!1,we=null,Ue=null,ve=null,ye=!1}}}function s(){let j=!1,ye=null,we=null,Ue=null,ve=null,fe=null,Oe=null,Ke=null,yt=null;return{setTest:function(ot){j||(ot?ue(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(ot){ye!==ot&&!j&&(n.stencilMask(ot),ye=ot)},setFunc:function(ot,ni,zn){(we!==ot||Ue!==ni||ve!==zn)&&(n.stencilFunc(ot,ni,zn),we=ot,Ue=ni,ve=zn)},setOp:function(ot,ni,zn){(fe!==ot||Oe!==ni||Ke!==zn)&&(n.stencilOp(ot,ni,zn),fe=ot,Oe=ni,Ke=zn)},setLocked:function(ot){j=ot},setClear:function(ot){yt!==ot&&(n.clearStencil(ot),yt=ot)},reset:function(){j=!1,ye=null,we=null,Ue=null,ve=null,fe=null,Oe=null,Ke=null,yt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],x=null,S=!1,g=null,m=null,C=null,E=null,y=null,U=null,N=null,F=new tt(0,0,0),B=0,R=!1,A=null,H=null,K=null,z=null,D=null;const b=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,O=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(L)[1]),I=O>=1):L.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),I=O>=2);let ne=null,he={};const W=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),Se=new gt().fromArray(W),ze=new gt().fromArray(me);function Xe(j,ye,we,Ue){const ve=new Uint8Array(4),fe=n.createTexture();n.bindTexture(j,fe),n.texParameteri(j,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(j,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<we;Oe++)j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ye+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return fe}const le={};le[n.TEXTURE_2D]=Xe(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=Xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=Xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=Xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(n.DEPTH_TEST),o.setFunc(Ys),q(!1),$(nh),ue(n.CULL_FACE),V(Li);function ue(j){u[j]!==!0&&(n.enable(j),u[j]=!0)}function be(j){u[j]!==!1&&(n.disable(j),u[j]=!1)}function Be(j,ye){return h[j]!==ye?(n.bindFramebuffer(j,ye),h[j]=ye,j===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ye),j===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function de(j,ye){let we=f,Ue=!1;if(j){we=d.get(ye),we===void 0&&(we=[],d.set(ye,we));const ve=j.textures;if(we.length!==ve.length||we[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,Oe=ve.length;fe<Oe;fe++)we[fe]=n.COLOR_ATTACHMENT0+fe;we.length=ve.length,Ue=!0}}else we[0]!==n.BACK&&(we[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(we)}function T(j){return x!==j?(n.useProgram(j),x=j,!0):!1}const _={[Ji]:n.FUNC_ADD,[s0]:n.FUNC_SUBTRACT,[r0]:n.FUNC_REVERSE_SUBTRACT};_[o0]=n.MIN,_[a0]=n.MAX;const p={[l0]:n.ZERO,[c0]:n.ONE,[u0]:n.SRC_COLOR,[Pl]:n.SRC_ALPHA,[g0]:n.SRC_ALPHA_SATURATE,[p0]:n.DST_COLOR,[d0]:n.DST_ALPHA,[h0]:n.ONE_MINUS_SRC_COLOR,[Il]:n.ONE_MINUS_SRC_ALPHA,[m0]:n.ONE_MINUS_DST_COLOR,[f0]:n.ONE_MINUS_DST_ALPHA,[_0]:n.CONSTANT_COLOR,[v0]:n.ONE_MINUS_CONSTANT_COLOR,[x0]:n.CONSTANT_ALPHA,[y0]:n.ONE_MINUS_CONSTANT_ALPHA};function V(j,ye,we,Ue,ve,fe,Oe,Ke,yt,ot){if(j===Li){S===!0&&(be(n.BLEND),S=!1);return}if(S===!1&&(ue(n.BLEND),S=!0),j!==i0){if(j!==g||ot!==R){if((m!==Ji||y!==Ji)&&(n.blendEquation(n.FUNC_ADD),m=Ji,y=Ji),ot)switch(j){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFunc(n.ONE,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}C=null,E=null,U=null,N=null,F.set(0,0,0),B=0,g=j,R=ot}return}ve=ve||ye,fe=fe||we,Oe=Oe||Ue,(ye!==m||ve!==y)&&(n.blendEquationSeparate(_[ye],_[ve]),m=ye,y=ve),(we!==C||Ue!==E||fe!==U||Oe!==N)&&(n.blendFuncSeparate(p[we],p[Ue],p[fe],p[Oe]),C=we,E=Ue,U=fe,N=Oe),(Ke.equals(F)===!1||yt!==B)&&(n.blendColor(Ke.r,Ke.g,Ke.b,yt),F.copy(Ke),B=yt),g=j,R=!1}function G(j,ye){j.side===Sn?be(n.CULL_FACE):ue(n.CULL_FACE);let we=j.side===rn;ye&&(we=!we),q(we),j.blending===Hs&&j.transparent===!1?V(Li):V(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);const Ue=j.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Z(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(j){A!==j&&(j?n.frontFace(n.CW):n.frontFace(n.CCW),A=j)}function $(j){j!==t0?(ue(n.CULL_FACE),j!==H&&(j===nh?n.cullFace(n.BACK):j===n0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),H=j}function ae(j){j!==K&&(I&&n.lineWidth(j),K=j)}function Z(j,ye,we){j?(ue(n.POLYGON_OFFSET_FILL),(z!==ye||D!==we)&&(n.polygonOffset(ye,we),z=ye,D=we)):be(n.POLYGON_OFFSET_FILL)}function ie(j){j?ue(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Y(j){j===void 0&&(j=n.TEXTURE0+b-1),ne!==j&&(n.activeTexture(j),ne=j)}function pe(j,ye,we){we===void 0&&(ne===null?we=n.TEXTURE0+b-1:we=ne);let Ue=he[we];Ue===void 0&&(Ue={type:void 0,texture:void 0},he[we]=Ue),(Ue.type!==j||Ue.texture!==ye)&&(ne!==we&&(n.activeTexture(we),ne=we),n.bindTexture(j,ye||le[j]),Ue.type=j,Ue.texture=ye)}function w(){const j=he[ne];j!==void 0&&j.type!==void 0&&(n.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function te(){try{n.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ce(){try{n.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{n.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(){try{n.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ie(){try{n.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{n.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Re(j){Se.equals(j)===!1&&(n.scissor(j.x,j.y,j.z,j.w),Se.copy(j))}function Ne(j){ze.equals(j)===!1&&(n.viewport(j.x,j.y,j.z,j.w),ze.copy(j))}function De(j,ye){let we=c.get(ye);we===void 0&&(we=new WeakMap,c.set(ye,we));let Ue=we.get(j);Ue===void 0&&(Ue=n.getUniformBlockIndex(ye,j.name),we.set(j,Ue))}function Te(j,ye){const Ue=c.get(ye).get(j);l.get(ye)!==Ue&&(n.uniformBlockBinding(ye,Ue,j.__bindingPointIndex),l.set(ye,Ue))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,he={},h={},d=new WeakMap,f=[],x=null,S=!1,g=null,m=null,C=null,E=null,y=null,U=null,N=null,F=new tt(0,0,0),B=0,R=!1,A=null,H=null,K=null,z=null,D=null,Se.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:be,bindFramebuffer:Be,drawBuffers:de,useProgram:T,setBlending:V,setMaterial:G,setFlipSided:q,setCullFace:$,setLineWidth:ae,setPolygonOffset:Z,setScissorTest:ie,activeTexture:Y,bindTexture:pe,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:X,texImage2D:Ie,texImage3D:_e,updateUBOMapping:De,uniformBlockBinding:Te,texStorage2D:ge,texStorage3D:Pe,texSubImage2D:te,texSubImage3D:ce,compressedTexSubImage2D:ee,compressedTexSubImage3D:Me,scissor:Re,viewport:Ne,reset:je}}function W1(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,M){return f?new OffscreenCanvas(w,M):Qo("canvas")}function S(w,M,X){let te=1;const ce=pe(w);if((ce.width>X||ce.height>X)&&(te=X/Math.max(ce.width,ce.height)),te<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ee=Math.floor(te*ce.width),Me=Math.floor(te*ce.height);h===void 0&&(h=x(ee,Me));const ge=M?x(ee,Me):h;return ge.width=ee,ge.height=Me,ge.getContext("2d").drawImage(w,0,0,ee,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ee+"x"+Me+")."),ge}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),w;return w}function g(w){return w.generateMipmaps}function m(w){n.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(w,M,X,te,ce=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ee=M;if(M===n.RED&&(X===n.FLOAT&&(ee=n.R32F),X===n.HALF_FLOAT&&(ee=n.R16F),X===n.UNSIGNED_BYTE&&(ee=n.R8)),M===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ee=n.R8UI),X===n.UNSIGNED_SHORT&&(ee=n.R16UI),X===n.UNSIGNED_INT&&(ee=n.R32UI),X===n.BYTE&&(ee=n.R8I),X===n.SHORT&&(ee=n.R16I),X===n.INT&&(ee=n.R32I)),M===n.RG&&(X===n.FLOAT&&(ee=n.RG32F),X===n.HALF_FLOAT&&(ee=n.RG16F),X===n.UNSIGNED_BYTE&&(ee=n.RG8)),M===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(ee=n.RG8UI),X===n.UNSIGNED_SHORT&&(ee=n.RG16UI),X===n.UNSIGNED_INT&&(ee=n.RG32UI),X===n.BYTE&&(ee=n.RG8I),X===n.SHORT&&(ee=n.RG16I),X===n.INT&&(ee=n.RG32I)),M===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),X===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),X===n.UNSIGNED_INT&&(ee=n.RGB32UI),X===n.BYTE&&(ee=n.RGB8I),X===n.SHORT&&(ee=n.RGB16I),X===n.INT&&(ee=n.RGB32I)),M===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),X===n.UNSIGNED_INT&&(ee=n.RGBA32UI),X===n.BYTE&&(ee=n.RGBA8I),X===n.SHORT&&(ee=n.RGBA16I),X===n.INT&&(ee=n.RGBA32I)),M===n.RGB&&(X===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),M===n.RGBA){const Me=ce?Zo:rt.getTransfer(te);X===n.FLOAT&&(ee=n.RGBA32F),X===n.HALF_FLOAT&&(ee=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ee=Me===pt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(w,M){let X;return w?M===null||M===os||M===Nr?X=n.DEPTH24_STENCIL8:M===$n?X=n.DEPTH32F_STENCIL8:M===Ur&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===os||M===Nr?X=n.DEPTH_COMPONENT24:M===$n?X=n.DEPTH_COMPONENT32F:M===Ur&&(X=n.DEPTH_COMPONENT16),X}function U(w,M){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==vn&&w.minFilter!==qn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function N(w){const M=w.target;M.removeEventListener("dispose",N),B(M),M.isVideoTexture&&u.delete(M)}function F(w){const M=w.target;M.removeEventListener("dispose",F),A(M)}function B(w){const M=i.get(w);if(M.__webglInit===void 0)return;const X=w.source,te=d.get(X);if(te){const ce=te[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&R(w),Object.keys(te).length===0&&d.delete(X)}i.remove(w)}function R(w){const M=i.get(w);n.deleteTexture(M.__webglTexture);const X=w.source,te=d.get(X);delete te[M.__cacheKey],o.memory.textures--}function A(w){const M=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let ce=0;ce<M.__webglFramebuffer[te].length;ce++)n.deleteFramebuffer(M.__webglFramebuffer[te][ce]);else n.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)n.deleteFramebuffer(M.__webglFramebuffer[te]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=w.textures;for(let te=0,ce=X.length;te<ce;te++){const ee=i.get(X[te]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(X[te])}i.remove(w)}let H=0;function K(){H=0}function z(){const w=H;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),H+=1,w}function D(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function b(w,M){const X=i.get(w);if(w.isVideoTexture&&ie(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&X.__version!==w.version){const te=w.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(X,w,M);return}}else w.isExternalTexture&&(X.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+M)}function I(w,M){const X=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){le(X,w,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+M)}function O(w,M){const X=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){le(X,w,M);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+M)}function L(w,M){const X=i.get(w);if(w.version>0&&X.__version!==w.version){ue(X,w,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+M)}const ne={[Ko]:n.REPEAT,[ts]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},he={[vn]:n.NEAREST,[C0]:n.NEAREST_MIPMAP_NEAREST,[io]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[Oa]:n.LINEAR_MIPMAP_NEAREST,[ns]:n.LINEAR_MIPMAP_LINEAR},W={[L0]:n.NEVER,[z0]:n.ALWAYS,[U0]:n.LESS,[kf]:n.LEQUAL,[N0]:n.EQUAL,[B0]:n.GEQUAL,[F0]:n.GREATER,[O0]:n.NOTEQUAL};function me(w,M){if(M.type===$n&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qn||M.magFilter===Oa||M.magFilter===io||M.magFilter===ns||M.minFilter===qn||M.minFilter===Oa||M.minFilter===io||M.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ne[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ne[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ne[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,he[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,he[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,W[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===vn||M.minFilter!==io&&M.minFilter!==ns||M.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Se(w,M){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",N));const te=M.source;let ce=d.get(te);ce===void 0&&(ce={},d.set(te,ce));const ee=D(M);if(ee!==w.__cacheKey){ce[ee]===void 0&&(ce[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ce[ee].usedTimes++;const Me=ce[w.__cacheKey];Me!==void 0&&(ce[w.__cacheKey].usedTimes--,Me.usedTimes===0&&R(M)),w.__cacheKey=ee,w.__webglTexture=ce[ee].texture}return X}function ze(w,M,X){return Math.floor(Math.floor(w/X)/M)}function Xe(w,M,X,te){const ee=w.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,X,te,M.data);else{ee.sort((_e,Re)=>_e.start-Re.start);let Me=0;for(let _e=1;_e<ee.length;_e++){const Re=ee[Me],Ne=ee[_e],De=Re.start+Re.count,Te=ze(Ne.start,M.width,4),je=ze(Re.start,M.width,4);Ne.start<=De+1&&Te===je&&ze(Ne.start+Ne.count-1,M.width,4)===Te?Re.count=Math.max(Re.count,Ne.start+Ne.count-Re.start):(++Me,ee[Me]=Ne)}ee.length=Me+1;const ge=n.getParameter(n.UNPACK_ROW_LENGTH),Pe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ie=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let _e=0,Re=ee.length;_e<Re;_e++){const Ne=ee[_e],De=Math.floor(Ne.start/4),Te=Math.ceil(Ne.count/4),je=De%M.width,j=Math.floor(De/M.width),ye=Te,we=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,j),t.texSubImage2D(n.TEXTURE_2D,0,je,j,ye,we,X,te,M.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ge),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function le(w,M,X){let te=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=n.TEXTURE_3D);const ce=Se(w,M),ee=M.source;t.bindTexture(te,w.__webglTexture,n.TEXTURE0+X);const Me=i.get(ee);if(ee.version!==Me.__version||ce===!0){t.activeTexture(n.TEXTURE0+X);const ge=rt.getPrimaries(rt.workingColorSpace),Pe=M.colorSpace===Pi?null:rt.getPrimaries(M.colorSpace),Ie=M.colorSpace===Pi||ge===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let _e=S(M.image,!1,s.maxTextureSize);_e=Y(M,_e);const Re=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type);let De=E(M.internalFormat,Re,Ne,M.colorSpace,M.isVideoTexture);me(te,M);let Te;const je=M.mipmaps,j=M.isVideoTexture!==!0,ye=Me.__version===void 0||ce===!0,we=ee.dataReady,Ue=U(M,_e);if(M.isDepthTexture)De=y(M.format===Or,M.type),ye&&(j?t.texStorage2D(n.TEXTURE_2D,1,De,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,De,_e.width,_e.height,0,Re,Ne,null));else if(M.isDataTexture)if(je.length>0){j&&ye&&t.texStorage2D(n.TEXTURE_2D,Ue,De,je[0].width,je[0].height);for(let ve=0,fe=je.length;ve<fe;ve++)Te=je[ve],j?we&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Te.width,Te.height,Re,Ne,Te.data):t.texImage2D(n.TEXTURE_2D,ve,De,Te.width,Te.height,0,Re,Ne,Te.data);M.generateMipmaps=!1}else j?(ye&&t.texStorage2D(n.TEXTURE_2D,Ue,De,_e.width,_e.height),we&&Xe(M,_e,Re,Ne)):t.texImage2D(n.TEXTURE_2D,0,De,_e.width,_e.height,0,Re,Ne,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){j&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,De,je[0].width,je[0].height,_e.depth);for(let ve=0,fe=je.length;ve<fe;ve++)if(Te=je[ve],M.format!==Ln)if(Re!==null)if(j){if(we)if(M.layerUpdates.size>0){const Oe=Gh(Te.width,Te.height,M.format,M.type);for(const Ke of M.layerUpdates){const yt=Te.data.subarray(Ke*Oe/Te.data.BYTES_PER_ELEMENT,(Ke+1)*Oe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,Ke,Te.width,Te.height,1,Re,yt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Te.width,Te.height,_e.depth,Re,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,De,Te.width,Te.height,_e.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Te.width,Te.height,_e.depth,Re,Ne,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,De,Te.width,Te.height,_e.depth,0,Re,Ne,Te.data)}else{j&&ye&&t.texStorage2D(n.TEXTURE_2D,Ue,De,je[0].width,je[0].height);for(let ve=0,fe=je.length;ve<fe;ve++)Te=je[ve],M.format!==Ln?Re!==null?j?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Te.width,Te.height,Re,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,De,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?we&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Te.width,Te.height,Re,Ne,Te.data):t.texImage2D(n.TEXTURE_2D,ve,De,Te.width,Te.height,0,Re,Ne,Te.data)}else if(M.isDataArrayTexture)if(j){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,De,_e.width,_e.height,_e.depth),we)if(M.layerUpdates.size>0){const ve=Gh(_e.width,_e.height,M.format,M.type);for(const fe of M.layerUpdates){const Oe=_e.data.subarray(fe*ve/_e.data.BYTES_PER_ELEMENT,(fe+1)*ve/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,_e.width,_e.height,1,Re,Ne,Oe)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Re,Ne,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,_e.width,_e.height,_e.depth,0,Re,Ne,_e.data);else if(M.isData3DTexture)j?(ye&&t.texStorage3D(n.TEXTURE_3D,Ue,De,_e.width,_e.height,_e.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Re,Ne,_e.data)):t.texImage3D(n.TEXTURE_3D,0,De,_e.width,_e.height,_e.depth,0,Re,Ne,_e.data);else if(M.isFramebufferTexture){if(ye)if(j)t.texStorage2D(n.TEXTURE_2D,Ue,De,_e.width,_e.height);else{let ve=_e.width,fe=_e.height;for(let Oe=0;Oe<Ue;Oe++)t.texImage2D(n.TEXTURE_2D,Oe,De,ve,fe,0,Re,Ne,null),ve>>=1,fe>>=1}}else if(je.length>0){if(j&&ye){const ve=pe(je[0]);t.texStorage2D(n.TEXTURE_2D,Ue,De,ve.width,ve.height)}for(let ve=0,fe=je.length;ve<fe;ve++)Te=je[ve],j?we&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Re,Ne,Te):t.texImage2D(n.TEXTURE_2D,ve,De,Re,Ne,Te);M.generateMipmaps=!1}else if(j){if(ye){const ve=pe(_e);t.texStorage2D(n.TEXTURE_2D,Ue,De,ve.width,ve.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Ne,_e)}else t.texImage2D(n.TEXTURE_2D,0,De,Re,Ne,_e);g(M)&&m(te),Me.__version=ee.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ue(w,M,X){if(M.image.length!==6)return;const te=Se(w,M),ce=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+X);const ee=i.get(ce);if(ce.version!==ee.__version||te===!0){t.activeTexture(n.TEXTURE0+X);const Me=rt.getPrimaries(rt.workingColorSpace),ge=M.colorSpace===Pi?null:rt.getPrimaries(M.colorSpace),Pe=M.colorSpace===Pi||Me===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,_e=M.image[0]&&M.image[0].isDataTexture,Re=[];for(let fe=0;fe<6;fe++)!Ie&&!_e?Re[fe]=S(M.image[fe],!0,s.maxCubemapSize):Re[fe]=_e?M.image[fe].image:M.image[fe],Re[fe]=Y(M,Re[fe]);const Ne=Re[0],De=r.convert(M.format,M.colorSpace),Te=r.convert(M.type),je=E(M.internalFormat,De,Te,M.colorSpace),j=M.isVideoTexture!==!0,ye=ee.__version===void 0||te===!0,we=ce.dataReady;let Ue=U(M,Ne);me(n.TEXTURE_CUBE_MAP,M);let ve;if(Ie){j&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,je,Ne.width,Ne.height);for(let fe=0;fe<6;fe++){ve=Re[fe].mipmaps;for(let Oe=0;Oe<ve.length;Oe++){const Ke=ve[Oe];M.format!==Ln?De!==null?j?we&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe,0,0,Ke.width,Ke.height,De,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe,je,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe,0,0,Ke.width,Ke.height,De,Te,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe,je,Ke.width,Ke.height,0,De,Te,Ke.data)}}}else{if(ve=M.mipmaps,j&&ye){ve.length>0&&Ue++;const fe=pe(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,je,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(_e){j?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Re[fe].width,Re[fe].height,De,Te,Re[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,je,Re[fe].width,Re[fe].height,0,De,Te,Re[fe].data);for(let Oe=0;Oe<ve.length;Oe++){const yt=ve[Oe].image[fe].image;j?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe+1,0,0,yt.width,yt.height,De,Te,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe+1,je,yt.width,yt.height,0,De,Te,yt.data)}}else{j?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,De,Te,Re[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,je,De,Te,Re[fe]);for(let Oe=0;Oe<ve.length;Oe++){const Ke=ve[Oe];j?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe+1,0,0,De,Te,Ke.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe+1,je,De,Te,Ke.image[fe])}}}g(M)&&m(n.TEXTURE_CUBE_MAP),ee.__version=ce.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function be(w,M,X,te,ce,ee){const Me=r.convert(X.format,X.colorSpace),ge=r.convert(X.type),Pe=E(X.internalFormat,Me,ge,X.colorSpace),Ie=i.get(M),_e=i.get(X);if(_e.__renderTarget=M,!Ie.__hasExternalTextures){const Re=Math.max(1,M.width>>ee),Ne=Math.max(1,M.height>>ee);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,ee,Pe,Re,Ne,M.depth,0,Me,ge,null):t.texImage2D(ce,ee,Pe,Re,Ne,0,Me,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Z(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ce,_e.__webglTexture,0,ae(M)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ce,_e.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(w,M,X){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer){const te=M.depthTexture,ce=te&&te.isDepthTexture?te.type:null,ee=y(M.stencilBuffer,ce),Me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=ae(M);Z(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,ee,M.width,M.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ee,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ee,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,w)}else{const te=M.textures;for(let ce=0;ce<te.length;ce++){const ee=te[ce],Me=r.convert(ee.format,ee.colorSpace),ge=r.convert(ee.type),Pe=E(ee.internalFormat,Me,ge,ee.colorSpace),Ie=ae(M);X&&Z(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Pe,M.width,M.height):Z(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,Pe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(M.depthTexture);te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),b(M.depthTexture,0);const ce=te.__webglTexture,ee=ae(M);if(M.depthTexture.format===Fr)Z(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(M.depthTexture.format===Or)Z(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function T(w){const M=i.get(w),X=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const te=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),te){const ce=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,te.removeEventListener("dispose",ce)};te.addEventListener("dispose",ce),M.__depthDisposeCallback=ce}M.__boundDepthTexture=te}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const te=w.texture.mipmaps;te&&te.length>0?de(M.__webglFramebuffer[0],w):de(M.__webglFramebuffer,w)}else if(X){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]===void 0)M.__webglDepthbuffer[te]=n.createRenderbuffer(),Be(M.__webglDepthbuffer[te],w,!1);else{const ce=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ee)}}else{const te=w.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Be(M.__webglDepthbuffer,w,!1);else{const ce=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _(w,M,X){const te=i.get(w);M!==void 0&&be(te.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&T(w)}function p(w){const M=w.texture,X=i.get(w),te=i.get(M);w.addEventListener("dispose",F);const ce=w.textures,ee=w.isWebGLCubeRenderTarget===!0,Me=ce.length>1;if(Me||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=M.version,o.memory.textures++),ee){X.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[ge]=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)X.__webglFramebuffer[ge][Pe]=n.createFramebuffer()}else X.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)X.__webglFramebuffer[ge]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ge=0,Pe=ce.length;ge<Pe;ge++){const Ie=i.get(ce[ge]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&Z(w)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ge=0;ge<ce.length;ge++){const Pe=ce[ge];X.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ge]);const Ie=r.convert(Pe.format,Pe.colorSpace),_e=r.convert(Pe.type),Re=E(Pe.internalFormat,Ie,_e,Pe.colorSpace,w.isXRRenderTarget===!0),Ne=ae(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Re,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,X.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(X.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),me(n.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)be(X.__webglFramebuffer[ge][Pe],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe);else be(X.__webglFramebuffer[ge],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ge=0,Pe=ce.length;ge<Pe;ge++){const Ie=ce[ge],_e=i.get(Ie);let Re=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Re=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Re,_e.__webglTexture),me(Re,Ie),be(X.__webglFramebuffer,w,Ie,n.COLOR_ATTACHMENT0+ge,Re,0),g(Ie)&&m(Re)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ge=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,te.__webglTexture),me(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)be(X.__webglFramebuffer[Pe],w,M,n.COLOR_ATTACHMENT0,ge,Pe);else be(X.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,ge,0);g(M)&&m(ge),t.unbindTexture()}w.depthBuffer&&T(w)}function V(w){const M=w.textures;for(let X=0,te=M.length;X<te;X++){const ce=M[X];if(g(ce)){const ee=C(w),Me=i.get(ce).__webglTexture;t.bindTexture(ee,Me),m(ee),t.unbindTexture()}}}const G=[],q=[];function $(w){if(w.samples>0){if(Z(w)===!1){const M=w.textures,X=w.width,te=w.height;let ce=n.COLOR_BUFFER_BIT;const ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(w),ge=M.length>1;if(ge)for(let Ie=0;Ie<M.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Pe=w.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ie=0;Ie<M.length;Ie++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ie]);const _e=i.get(M[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,X,te,0,0,X,te,ce,n.NEAREST),l===!0&&(G.length=0,q.length=0,G.push(n.COLOR_ATTACHMENT0+Ie),w.depthBuffer&&w.resolveDepthBuffer===!1&&(G.push(ee),q.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,G))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ie=0;Ie<M.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ie]);const _e=i.get(M[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ae(w){return Math.min(s.maxSamples,w.samples)}function Z(w){const M=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ie(w){const M=o.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function Y(w,M){const X=w.colorSpace,te=w.format,ce=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||X!==js&&X!==Pi&&(rt.getTransfer(X)===pt?(te!==Ln||ce!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function pe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=K,this.setTexture2D=b,this.setTexture2DArray=I,this.setTexture3D=O,this.setTextureCube=L,this.rebindTextures=_,this.setupRenderTarget=p,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=T,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Z}function X1(n,e){function t(i,s=Pi){let r;const o=rt.getTransfer(s);if(i===Qn)return n.UNSIGNED_BYTE;if(i===$c)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ff)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lf)return n.BYTE;if(i===Uf)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===qc)return n.INT;if(i===os)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===qr)return n.HALF_FLOAT;if(i===Of)return n.ALPHA;if(i===Bf)return n.RGB;if(i===Ln)return n.RGBA;if(i===Fr)return n.DEPTH_COMPONENT;if(i===Or)return n.DEPTH_STENCIL;if(i===Kc)return n.RED;if(i===Zc)return n.RED_INTEGER;if(i===zf)return n.RG;if(i===Jc)return n.RG_INTEGER;if(i===Qc)return n.RGBA_INTEGER;if(i===Oo||i===Bo||i===zo||i===ko)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Gl||i===Wl||i===Xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yl||i===ql||i===$l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yl||i===ql)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$l)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jl||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cc||i===uc||i===hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===cc)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dc||i===fc||i===pc||i===mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===dc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q1=`
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

}`;class $1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Jf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Oi({vertexShader:Y1,fragmentShader:q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new us(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j1 extends hs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,x=null;const S=typeof XRWebGLBinding<"u",g=new $1,m={},C=t.getContextAttributes();let E=null,y=null;const U=[],N=[],F=new Ee;let B=null;const R=new hn;R.viewport=new gt;const A=new hn;A.viewport=new gt;const H=[R,A],K=new mv;let z=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let ue=U[le];return ue===void 0&&(ue=new sl,U[le]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(le){let ue=U[le];return ue===void 0&&(ue=new sl,U[le]=ue),ue.getGripSpace()},this.getHand=function(le){let ue=U[le];return ue===void 0&&(ue=new sl,U[le]=ue),ue.getHandSpace()};function b(le){const ue=N.indexOf(le.inputSource);if(ue===-1)return;const be=U[ue];be!==void 0&&(be.update(le.inputSource,le.frame,c||o),be.dispatchEvent({type:le.type,data:le.inputSource}))}function I(){s.removeEventListener("select",b),s.removeEventListener("selectstart",b),s.removeEventListener("selectend",b),s.removeEventListener("squeeze",b),s.removeEventListener("squeezestart",b),s.removeEventListener("squeezeend",b),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",O);for(let le=0;le<U.length;le++){const ue=N[le];ue!==null&&(N[le]=null,U[le].disconnect(ue))}z=null,D=null,g.reset();for(const le in m)delete m[le];e.setRenderTarget(E),f=null,d=null,h=null,s=null,y=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",b),s.addEventListener("selectstart",b),s.addEventListener("selectend",b),s.addEventListener("squeeze",b),s.addEventListener("squeezestart",b),s.addEventListener("squeezeend",b),s.addEventListener("end",I),s.addEventListener("inputsourceschange",O),C.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(F),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Be=null,de=null;C.depth&&(de=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=C.stencil?Or:Fr,Be=C.stencil?Nr:os);const T={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(T),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ls(d.textureWidth,d.textureHeight,{format:Ln,type:Qn,depthTexture:new Zf(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ls(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(le){for(let ue=0;ue<le.removed.length;ue++){const be=le.removed[ue],Be=N.indexOf(be);Be>=0&&(N[Be]=null,U[Be].disconnect(be))}for(let ue=0;ue<le.added.length;ue++){const be=le.added[ue];let Be=N.indexOf(be);if(Be===-1){for(let T=0;T<U.length;T++)if(T>=N.length){N.push(be),Be=T;break}else if(N[T]===null){N[T]=be,Be=T;break}if(Be===-1)break}const de=U[Be];de&&de.connect(be)}}const L=new k,ne=new k;function he(le,ue,be){L.setFromMatrixPosition(ue.matrixWorld),ne.setFromMatrixPosition(be.matrixWorld);const Be=L.distanceTo(ne),de=ue.projectionMatrix.elements,T=be.projectionMatrix.elements,_=de[14]/(de[10]-1),p=de[14]/(de[10]+1),V=(de[9]+1)/de[5],G=(de[9]-1)/de[5],q=(de[8]-1)/de[0],$=(T[8]+1)/T[0],ae=_*q,Z=_*$,ie=Be/(-q+$),Y=ie*-q;if(ue.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Y),le.translateZ(ie),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),de[10]===-1)le.projectionMatrix.copy(ue.projectionMatrix),le.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const pe=_+ie,w=p+ie,M=ae-Y,X=Z+(Be-Y),te=V*p/w*pe,ce=G*p/w*pe;le.projectionMatrix.makePerspective(M,X,te,ce,pe,w),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function W(le,ue){ue===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(ue.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let ue=le.near,be=le.far;g.texture!==null&&(g.depthNear>0&&(ue=g.depthNear),g.depthFar>0&&(be=g.depthFar)),K.near=A.near=R.near=ue,K.far=A.far=R.far=be,(z!==K.near||D!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),z=K.near,D=K.far),K.layers.mask=le.layers.mask|6,R.layers.mask=K.layers.mask&3,A.layers.mask=K.layers.mask&5;const Be=le.parent,de=K.cameras;W(K,Be);for(let T=0;T<de.length;T++)W(de[T],Be);de.length===2?he(K,R,A):K.projectionMatrix.copy(R.projectionMatrix),me(le,K,Be)};function me(le,ue,be){be===null?le.matrix.copy(ue.matrixWorld):(le.matrix.copy(be.matrixWorld),le.matrix.invert(),le.matrix.multiply(ue.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(ue.projectionMatrix),le.projectionMatrixInverse.copy(ue.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Br*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(le){l=le,d!==null&&(d.fixedFoveation=le),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=le)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(K)},this.getCameraTexture=function(le){return m[le]};let Se=null;function ze(le,ue){if(u=ue.getViewerPose(c||o),x=ue,u!==null){const be=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Be=!1;be.length!==K.cameras.length&&(K.cameras.length=0,Be=!0);for(let p=0;p<be.length;p++){const V=be[p];let G=null;if(f!==null)G=f.getViewport(V);else{const $=h.getViewSubImage(d,V);G=$.viewport,p===0&&(e.setRenderTargetTextures(y,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(y))}let q=H[p];q===void 0&&(q=new hn,q.layers.enable(p),q.viewport=new gt,H[p]=q),q.matrix.fromArray(V.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(V.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(G.x,G.y,G.width,G.height),p===0&&(K.matrix.copy(q.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Be===!0&&K.cameras.push(q)}const de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const p=h.getDepthInformation(be[0]);p&&p.isValid&&p.texture&&g.init(p,s.renderState)}if(de&&de.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let p=0;p<be.length;p++){const V=be[p].camera;if(V){let G=m[V];G||(G=new Jf,m[V]=G);const q=h.getCameraImage(V);G.sourceTexture=q}}}}for(let be=0;be<U.length;be++){const Be=N[be],de=U[be];Be!==null&&de!==void 0&&de.update(Be,ue,c||o)}Se&&Se(le,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),x=null}const Xe=new pp;Xe.setAnimationLoop(ze),this.setAnimationLoop=function(le){Se=le},this.dispose=function(){}}}const ji=new On,K1=new ht;function Z1(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Yf(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,C,E,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),x(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),S(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,C,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const C=e.get(m),E=C.envMap,y=C.envMapRotation;E&&(g.envMap.value=E,ji.copy(y),ji.x*=-1,ji.y*=-1,ji.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),g.envMapRotation.value.setFromMatrix4(K1.makeRotationFromEuler(ji)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,C,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*C,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,C){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,m){m.matcap&&(g.matcap.value=m.matcap)}function S(g,m){const C=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function J1(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,E){const y=E.program;i.uniformBlockBinding(C,y)}function c(C,E){let y=s[C.id];y===void 0&&(x(C),y=u(C),s[C.id]=y,C.addEventListener("dispose",g));const U=E.program;i.updateUBOMapping(C,U);const N=e.render.frame;r[C.id]!==N&&(d(C),r[C.id]=N)}function u(C){const E=h();C.__bindingPointIndex=E;const y=n.createBuffer(),U=C.__size,N=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,U,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function h(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const E=s[C.id],y=C.uniforms,U=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let N=0,F=y.length;N<F;N++){const B=Array.isArray(y[N])?y[N]:[y[N]];for(let R=0,A=B.length;R<A;R++){const H=B[R];if(f(H,N,R,U)===!0){const K=H.__offset,z=Array.isArray(H.value)?H.value:[H.value];let D=0;for(let b=0;b<z.length;b++){const I=z[b],O=S(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,K+D,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,D),D+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(C,E,y,U){const N=C.value,F=E+"_"+y;if(U[F]===void 0)return typeof N=="number"||typeof N=="boolean"?U[F]=N:U[F]=N.clone(),!0;{const B=U[F];if(typeof N=="number"||typeof N=="boolean"){if(B!==N)return U[F]=N,!0}else if(B.equals(N)===!1)return B.copy(N),!0}return!1}function x(C){const E=C.uniforms;let y=0;const U=16;for(let F=0,B=E.length;F<B;F++){const R=Array.isArray(E[F])?E[F]:[E[F]];for(let A=0,H=R.length;A<H;A++){const K=R[A],z=Array.isArray(K.value)?K.value:[K.value];for(let D=0,b=z.length;D<b;D++){const I=z[D],O=S(I),L=y%U,ne=L%O.boundary,he=L+ne;y+=ne,he!==0&&U-he<O.storage&&(y+=U-he),K.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=y,y+=O.storage}}}const N=y%U;return N>0&&(y+=U-N),C.__size=y,C.__cache={},this}function S(C){const E={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(E.boundary=4,E.storage=4):C.isVector2?(E.boundary=8,E.storage=8):C.isVector3||C.isColor?(E.boundary=16,E.storage=12):C.isVector4?(E.boundary=16,E.storage=16):C.isMatrix3?(E.boundary=48,E.storage=48):C.isMatrix4?(E.boundary=64,E.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),E}function g(C){const E=C.target;E.removeEventListener("dispose",g);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const C in s)n.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class xp{constructor(e={}){const{canvas:t=n_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const x=new Uint32Array(4),S=new Int32Array(4);let g=null,m=null;const C=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let U=!1;this._outputColorSpace=Wt;let N=0,F=0,B=null,R=-1,A=null;const H=new gt,K=new gt;let z=null;const D=new tt(0);let b=0,I=t.width,O=t.height,L=1,ne=null,he=null;const W=new gt(0,0,I,O),me=new gt(0,0,I,O);let Se=!1;const ze=new ou;let Xe=!1,le=!1;const ue=new ht,be=new k,Be=new gt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let T=!1;function _(){return B===null?L:1}let p=i;function V(P,J){return t.getContext(P,J)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gc}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ve,!1),p===null){const J="webgl2";if(p=V(J,P),p===null)throw V(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let G,q,$,ae,Z,ie,Y,pe,w,M,X,te,ce,ee,Me,ge,Pe,Ie,_e,Re,Ne,De,Te,je;function j(){G=new cM(p),G.init(),De=new X1(p,G),q=new nM(p,G,e,De),$=new G1(p,G),q.reversedDepthBuffer&&d&&$.buffers.depth.setReversed(!0),ae=new dM(p),Z=new P1,ie=new W1(p,G,$,Z,q,De,ae),Y=new sM(y),pe=new lM(y),w=new vv(p),Te=new eM(p,w),M=new uM(p,w,ae,Te),X=new pM(p,M,w,ae),_e=new fM(p,q,ie),ge=new iM(Z),te=new C1(y,Y,pe,G,q,Te,ge),ce=new Z1(y,Z),ee=new D1,Me=new B1(G),Ie=new Qy(y,Y,pe,$,X,f,l),Pe=new H1(y,X,q),je=new J1(p,ae,q,$),Re=new tM(p,G,ae),Ne=new hM(p,G,ae),ae.programs=te.programs,y.capabilities=q,y.extensions=G,y.properties=Z,y.renderLists=ee,y.shadowMap=Pe,y.state=$,y.info=ae}j();const ye=new j1(y,p);this.xr=ye,this.getContext=function(){return p},this.getContextAttributes=function(){return p.getContextAttributes()},this.forceContextLoss=function(){const P=G.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=G.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(P){P!==void 0&&(L=P,this.setSize(I,O,!1))},this.getSize=function(P){return P.set(I,O)},this.setSize=function(P,J,se=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=P,O=J,t.width=Math.floor(P*L),t.height=Math.floor(J*L),se===!0&&(t.style.width=P+"px",t.style.height=J+"px"),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(I*L,O*L).floor()},this.setDrawingBufferSize=function(P,J,se){I=P,O=J,L=se,t.width=Math.floor(P*se),t.height=Math.floor(J*se),this.setViewport(0,0,P,J)},this.getCurrentViewport=function(P){return P.copy(H)},this.getViewport=function(P){return P.copy(W)},this.setViewport=function(P,J,se,re){P.isVector4?W.set(P.x,P.y,P.z,P.w):W.set(P,J,se,re),$.viewport(H.copy(W).multiplyScalar(L).round())},this.getScissor=function(P){return P.copy(me)},this.setScissor=function(P,J,se,re){P.isVector4?me.set(P.x,P.y,P.z,P.w):me.set(P,J,se,re),$.scissor(K.copy(me).multiplyScalar(L).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(P){$.setScissorTest(Se=P)},this.setOpaqueSort=function(P){ne=P},this.setTransparentSort=function(P){he=P},this.getClearColor=function(P){return P.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(P=!0,J=!0,se=!0){let re=0;if(P){let Q=!1;if(B!==null){const xe=B.texture.format;Q=xe===Qc||xe===Jc||xe===Zc}if(Q){const xe=B.texture.type,Ce=xe===Qn||xe===os||xe===Ur||xe===Nr||xe===$c||xe===jc,Fe=Ie.getClearColor(),Le=Ie.getClearAlpha(),Ye=Fe.r,qe=Fe.g,He=Fe.b;Ce?(x[0]=Ye,x[1]=qe,x[2]=He,x[3]=Le,p.clearBufferuiv(p.COLOR,0,x)):(S[0]=Ye,S[1]=qe,S[2]=He,S[3]=Le,p.clearBufferiv(p.COLOR,0,S))}else re|=p.COLOR_BUFFER_BIT}J&&(re|=p.DEPTH_BUFFER_BIT),se&&(re|=p.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),p.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ie.dispose(),ee.dispose(),Me.dispose(),Z.dispose(),Y.dispose(),pe.dispose(),X.dispose(),Te.dispose(),je.dispose(),te.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",zn),ye.removeEventListener("sessionend",vu),ki.stop()};function we(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const P=ae.autoReset,J=Pe.enabled,se=Pe.autoUpdate,re=Pe.needsUpdate,Q=Pe.type;j(),ae.autoReset=P,Pe.enabled=J,Pe.autoUpdate=se,Pe.needsUpdate=re,Pe.type=Q}function ve(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function fe(P){const J=P.target;J.removeEventListener("dispose",fe),Oe(J)}function Oe(P){Ke(P),Z.remove(P)}function Ke(P){const J=Z.get(P).programs;J!==void 0&&(J.forEach(function(se){te.releaseProgram(se)}),P.isShaderMaterial&&te.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,se,re,Q,xe){J===null&&(J=de);const Ce=Q.isMesh&&Q.matrixWorld.determinant()<0,Fe=Ep(P,J,se,re,Q);$.setMaterial(re,Ce);let Le=se.index,Ye=1;if(re.wireframe===!0){if(Le=M.getWireframeAttribute(se),Le===void 0)return;Ye=2}const qe=se.drawRange,He=se.attributes.position;let nt=qe.start*Ye,dt=(qe.start+qe.count)*Ye;xe!==null&&(nt=Math.max(nt,xe.start*Ye),dt=Math.min(dt,(xe.start+xe.count)*Ye)),Le!==null?(nt=Math.max(nt,0),dt=Math.min(dt,Le.count)):He!=null&&(nt=Math.max(nt,0),dt=Math.min(dt,He.count));const It=dt-nt;if(It<0||It===1/0)return;Te.setup(Q,re,Fe,se,Le);let bt,vt=Re;if(Le!==null&&(bt=w.get(Le),vt=Ne,vt.setIndex(bt)),Q.isMesh)re.wireframe===!0?($.setLineWidth(re.wireframeLinewidth*_()),vt.setMode(p.LINES)):vt.setMode(p.TRIANGLES);else if(Q.isLine){let Ge=re.linewidth;Ge===void 0&&(Ge=1),$.setLineWidth(Ge*_()),Q.isLineSegments?vt.setMode(p.LINES):Q.isLineLoop?vt.setMode(p.LINE_LOOP):vt.setMode(p.LINE_STRIP)}else Q.isPoints?vt.setMode(p.POINTS):Q.isSprite&&vt.setMode(p.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))vt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ge=Q._multiDrawStarts,Rt=Q._multiDrawCounts,st=Q._multiDrawCount,dn=Le?w.get(Le).bytesPerElement:1,ps=Z.get(re).currentProgram.getUniforms();for(let fn=0;fn<st;fn++)ps.setValue(p,"_gl_DrawID",fn),vt.render(Ge[fn]/dn,Rt[fn])}else if(Q.isInstancedMesh)vt.renderInstances(nt,It,Q.count);else if(se.isInstancedBufferGeometry){const Ge=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Rt=Math.min(se.instanceCount,Ge);vt.renderInstances(nt,It,Rt)}else vt.render(nt,It)};function yt(P,J,se){P.transparent===!0&&P.side===Sn&&P.forceSinglePass===!1?(P.side=rn,P.needsUpdate=!0,Kr(P,J,se),P.side=Fi,P.needsUpdate=!0,Kr(P,J,se),P.side=Sn):Kr(P,J,se)}this.compile=function(P,J,se=null){se===null&&(se=P),m=Me.get(se),m.init(J),E.push(m),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),P!==se&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights();const re=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const xe=Q.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){const Fe=xe[Ce];yt(Fe,se,Q),re.add(Fe)}else yt(xe,se,Q),re.add(xe)}),m=E.pop(),re},this.compileAsync=function(P,J,se=null){const re=this.compile(P,J,se);return new Promise(Q=>{function xe(){if(re.forEach(function(Ce){Z.get(Ce).currentProgram.isReady()&&re.delete(Ce)}),re.size===0){Q(P);return}setTimeout(xe,10)}G.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ot=null;function ni(P){ot&&ot(P)}function zn(){ki.stop()}function vu(){ki.start()}const ki=new pp;ki.setAnimationLoop(ni),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(P){ot=P,ye.setAnimationLoop(P),P===null?ki.stop():ki.start()},ye.addEventListener("sessionstart",zn),ye.addEventListener("sessionend",vu),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(J),J=ye.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,J,B),m=Me.get(P,E.length),m.init(J),E.push(m),ue.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ze.setFromProjectionMatrix(ue,jn,J.reversedDepth),le=this.localClippingEnabled,Xe=ge.init(this.clippingPlanes,le),g=ee.get(P,C.length),g.init(),C.push(g),ye.enabled===!0&&ye.isPresenting===!0){const xe=y.xr.getDepthSensingMesh();xe!==null&&Ea(xe,J,-1/0,y.sortObjects)}Ea(P,J,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ne,he),T=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,T&&Ie.addToRenderList(g,P),this.info.render.frame++,Xe===!0&&ge.beginShadows();const se=m.state.shadowsArray;Pe.render(se,P,J),Xe===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=g.opaque,Q=g.transmissive;if(m.setupLights(),J.isArrayCamera){const xe=J.cameras;if(Q.length>0)for(let Ce=0,Fe=xe.length;Ce<Fe;Ce++){const Le=xe[Ce];yu(re,Q,P,Le)}T&&Ie.render(P);for(let Ce=0,Fe=xe.length;Ce<Fe;Ce++){const Le=xe[Ce];xu(g,P,Le,Le.viewport)}}else Q.length>0&&yu(re,Q,P,J),T&&Ie.render(P),xu(g,P,J);B!==null&&F===0&&(ie.updateMultisampleRenderTarget(B),ie.updateRenderTargetMipmap(B)),P.isScene===!0&&P.onAfterRender(y,P,J),Te.resetDefaultState(),R=-1,A=null,E.pop(),E.length>0?(m=E[E.length-1],Xe===!0&&ge.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,C.pop(),C.length>0?g=C[C.length-1]:g=null};function Ea(P,J,se,re){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ze.intersectsSprite(P)){re&&Be.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ue);const Ce=X.update(P),Fe=P.material;Fe.visible&&g.push(P,Ce,Fe,se,Be.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ze.intersectsObject(P))){const Ce=X.update(P),Fe=P.material;if(re&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Be.copy(P.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Be.copy(Ce.boundingSphere.center)),Be.applyMatrix4(P.matrixWorld).applyMatrix4(ue)),Array.isArray(Fe)){const Le=Ce.groups;for(let Ye=0,qe=Le.length;Ye<qe;Ye++){const He=Le[Ye],nt=Fe[He.materialIndex];nt&&nt.visible&&g.push(P,Ce,nt,se,Be.z,He)}}else Fe.visible&&g.push(P,Ce,Fe,se,Be.z,null)}}const xe=P.children;for(let Ce=0,Fe=xe.length;Ce<Fe;Ce++)Ea(xe[Ce],J,se,re)}function xu(P,J,se,re){const Q=P.opaque,xe=P.transmissive,Ce=P.transparent;m.setupLightsView(se),Xe===!0&&ge.setGlobalState(y.clippingPlanes,se),re&&$.viewport(H.copy(re)),Q.length>0&&jr(Q,J,se),xe.length>0&&jr(xe,J,se),Ce.length>0&&jr(Ce,J,se),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function yu(P,J,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[re.id]===void 0&&(m.state.transmissionRenderTarget[re.id]=new ls(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?qr:Qn,minFilter:ns,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const xe=m.state.transmissionRenderTarget[re.id],Ce=re.viewport||H;xe.setSize(Ce.z*y.transmissionResolutionScale,Ce.w*y.transmissionResolutionScale);const Fe=y.getRenderTarget(),Le=y.getActiveCubeFace(),Ye=y.getActiveMipmapLevel();y.setRenderTarget(xe),y.getClearColor(D),b=y.getClearAlpha(),b<1&&y.setClearColor(16777215,.5),y.clear(),T&&Ie.render(se);const qe=y.toneMapping;y.toneMapping=Ui;const He=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),m.setupLightsView(re),Xe===!0&&ge.setGlobalState(y.clippingPlanes,re),jr(P,se,re),ie.updateMultisampleRenderTarget(xe),ie.updateRenderTargetMipmap(xe),G.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let dt=0,It=J.length;dt<It;dt++){const bt=J[dt],vt=bt.object,Ge=bt.geometry,Rt=bt.material,st=bt.group;if(Rt.side===Sn&&vt.layers.test(re.layers)){const dn=Rt.side;Rt.side=rn,Rt.needsUpdate=!0,Mu(vt,se,re,Ge,Rt,st),Rt.side=dn,Rt.needsUpdate=!0,nt=!0}}nt===!0&&(ie.updateMultisampleRenderTarget(xe),ie.updateRenderTargetMipmap(xe))}y.setRenderTarget(Fe,Le,Ye),y.setClearColor(D,b),He!==void 0&&(re.viewport=He),y.toneMapping=qe}function jr(P,J,se){const re=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,xe=P.length;Q<xe;Q++){const Ce=P[Q],Fe=Ce.object,Le=Ce.geometry,Ye=Ce.group;let qe=Ce.material;qe.allowOverride===!0&&re!==null&&(qe=re),Fe.layers.test(se.layers)&&Mu(Fe,J,se,Le,qe,Ye)}}function Mu(P,J,se,re,Q,xe){P.onBeforeRender(y,J,se,re,Q,xe),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(y,J,se,re,P,xe),Q.transparent===!0&&Q.side===Sn&&Q.forceSinglePass===!1?(Q.side=rn,Q.needsUpdate=!0,y.renderBufferDirect(se,J,re,Q,P,xe),Q.side=Fi,Q.needsUpdate=!0,y.renderBufferDirect(se,J,re,Q,P,xe),Q.side=Sn):y.renderBufferDirect(se,J,re,Q,P,xe),P.onAfterRender(y,J,se,re,Q,xe)}function Kr(P,J,se){J.isScene!==!0&&(J=de);const re=Z.get(P),Q=m.state.lights,xe=m.state.shadowsArray,Ce=Q.state.version,Fe=te.getParameters(P,Q.state,xe,J,se),Le=te.getProgramCacheKey(Fe);let Ye=re.programs;re.environment=P.isMeshStandardMaterial?J.environment:null,re.fog=J.fog,re.envMap=(P.isMeshStandardMaterial?pe:Y).get(P.envMap||re.environment),re.envMapRotation=re.environment!==null&&P.envMap===null?J.environmentRotation:P.envMapRotation,Ye===void 0&&(P.addEventListener("dispose",fe),Ye=new Map,re.programs=Ye);let qe=Ye.get(Le);if(qe!==void 0){if(re.currentProgram===qe&&re.lightsStateVersion===Ce)return bu(P,Fe),qe}else Fe.uniforms=te.getUniforms(P),P.onBeforeCompile(Fe,y),qe=te.acquireProgram(Fe,Le),Ye.set(Le,qe),re.uniforms=Fe.uniforms;const He=re.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(He.clippingPlanes=ge.uniform),bu(P,Fe),re.needsLights=Tp(P),re.lightsStateVersion=Ce,re.needsLights&&(He.ambientLightColor.value=Q.state.ambient,He.lightProbe.value=Q.state.probe,He.directionalLights.value=Q.state.directional,He.directionalLightShadows.value=Q.state.directionalShadow,He.spotLights.value=Q.state.spot,He.spotLightShadows.value=Q.state.spotShadow,He.rectAreaLights.value=Q.state.rectArea,He.ltc_1.value=Q.state.rectAreaLTC1,He.ltc_2.value=Q.state.rectAreaLTC2,He.pointLights.value=Q.state.point,He.pointLightShadows.value=Q.state.pointShadow,He.hemisphereLights.value=Q.state.hemi,He.directionalShadowMap.value=Q.state.directionalShadowMap,He.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,He.spotShadowMap.value=Q.state.spotShadowMap,He.spotLightMatrix.value=Q.state.spotLightMatrix,He.spotLightMap.value=Q.state.spotLightMap,He.pointShadowMap.value=Q.state.pointShadowMap,He.pointShadowMatrix.value=Q.state.pointShadowMatrix),re.currentProgram=qe,re.uniformsList=null,qe}function Su(P){if(P.uniformsList===null){const J=P.currentProgram.getUniforms();P.uniformsList=Ho.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function bu(P,J){const se=Z.get(P);se.outputColorSpace=J.outputColorSpace,se.batching=J.batching,se.batchingColor=J.batchingColor,se.instancing=J.instancing,se.instancingColor=J.instancingColor,se.instancingMorph=J.instancingMorph,se.skinning=J.skinning,se.morphTargets=J.morphTargets,se.morphNormals=J.morphNormals,se.morphColors=J.morphColors,se.morphTargetsCount=J.morphTargetsCount,se.numClippingPlanes=J.numClippingPlanes,se.numIntersection=J.numClipIntersection,se.vertexAlphas=J.vertexAlphas,se.vertexTangents=J.vertexTangents,se.toneMapping=J.toneMapping}function Ep(P,J,se,re,Q){J.isScene!==!0&&(J=de),ie.resetTextureUnits();const xe=J.fog,Ce=re.isMeshStandardMaterial?J.environment:null,Fe=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:js,Le=(re.isMeshStandardMaterial?pe:Y).get(re.envMap||Ce),Ye=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,qe=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),He=!!se.morphAttributes.position,nt=!!se.morphAttributes.normal,dt=!!se.morphAttributes.color;let It=Ui;re.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(It=y.toneMapping);const bt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,vt=bt!==void 0?bt.length:0,Ge=Z.get(re),Rt=m.state.lights;if(Xe===!0&&(le===!0||P!==A)){const jt=P===A&&re.id===R;ge.setState(re,P,jt)}let st=!1;re.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Rt.state.version||Ge.outputColorSpace!==Fe||Q.isBatchedMesh&&Ge.batching===!1||!Q.isBatchedMesh&&Ge.batching===!0||Q.isBatchedMesh&&Ge.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ge.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ge.instancing===!1||!Q.isInstancedMesh&&Ge.instancing===!0||Q.isSkinnedMesh&&Ge.skinning===!1||!Q.isSkinnedMesh&&Ge.skinning===!0||Q.isInstancedMesh&&Ge.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ge.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ge.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ge.instancingMorph===!1&&Q.morphTexture!==null||Ge.envMap!==Le||re.fog===!0&&Ge.fog!==xe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ge.numPlanes||Ge.numIntersection!==ge.numIntersection)||Ge.vertexAlphas!==Ye||Ge.vertexTangents!==qe||Ge.morphTargets!==He||Ge.morphNormals!==nt||Ge.morphColors!==dt||Ge.toneMapping!==It||Ge.morphTargetsCount!==vt)&&(st=!0):(st=!0,Ge.__version=re.version);let dn=Ge.currentProgram;st===!0&&(dn=Kr(re,J,Q));let ps=!1,fn=!1,er=!1;const Ct=dn.getUniforms(),xn=Ge.uniforms;if($.useProgram(dn.program)&&(ps=!0,fn=!0,er=!0),re.id!==R&&(R=re.id,fn=!0),ps||A!==P){$.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ct.setValue(p,"projectionMatrix",P.projectionMatrix),Ct.setValue(p,"viewMatrix",P.matrixWorldInverse);const on=Ct.map.cameraPosition;on!==void 0&&on.setValue(p,be.setFromMatrixPosition(P.matrixWorld)),q.logarithmicDepthBuffer&&Ct.setValue(p,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ct.setValue(p,"isOrthographic",P.isOrthographicCamera===!0),A!==P&&(A=P,fn=!0,er=!0)}if(Q.isSkinnedMesh){Ct.setOptional(p,Q,"bindMatrix"),Ct.setOptional(p,Q,"bindMatrixInverse");const jt=Q.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Ct.setValue(p,"boneTexture",jt.boneTexture,ie))}Q.isBatchedMesh&&(Ct.setOptional(p,Q,"batchingTexture"),Ct.setValue(p,"batchingTexture",Q._matricesTexture,ie),Ct.setOptional(p,Q,"batchingIdTexture"),Ct.setValue(p,"batchingIdTexture",Q._indirectTexture,ie),Ct.setOptional(p,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ct.setValue(p,"batchingColorTexture",Q._colorsTexture,ie));const yn=se.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&_e.update(Q,se,dn),(fn||Ge.receiveShadow!==Q.receiveShadow)&&(Ge.receiveShadow=Q.receiveShadow,Ct.setValue(p,"receiveShadow",Q.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(xn.envMap.value=Le,xn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&J.environment!==null&&(xn.envMapIntensity.value=J.environmentIntensity),fn&&(Ct.setValue(p,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&wp(xn,er),xe&&re.fog===!0&&ce.refreshFogUniforms(xn,xe),ce.refreshMaterialUniforms(xn,re,L,O,m.state.transmissionRenderTarget[P.id]),Ho.upload(p,Su(Ge),xn,ie)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Ho.upload(p,Su(Ge),xn,ie),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ct.setValue(p,"center",Q.center),Ct.setValue(p,"modelViewMatrix",Q.modelViewMatrix),Ct.setValue(p,"normalMatrix",Q.normalMatrix),Ct.setValue(p,"modelMatrix",Q.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const jt=re.uniformsGroups;for(let on=0,wa=jt.length;on<wa;on++){const Hi=jt[on];je.update(Hi,dn),je.bind(Hi,dn)}}return dn}function wp(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function Tp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(P,J,se){const re=Z.get(P);re.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Z.get(P.texture).__webglTexture=J,Z.get(P.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:se,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,J){const se=Z.get(P);se.__webglFramebuffer=J,se.__useDefaultFramebuffer=J===void 0};const Ap=p.createFramebuffer();this.setRenderTarget=function(P,J=0,se=0){B=P,N=J,F=se;let re=!0,Q=null,xe=!1,Ce=!1;if(P){const Le=Z.get(P);if(Le.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(p.FRAMEBUFFER,null),re=!1;else if(Le.__webglFramebuffer===void 0)ie.setupRenderTarget(P);else if(Le.__hasExternalTextures)ie.rebindTextures(P,Z.get(P.texture).__webglTexture,Z.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const He=P.depthTexture;if(Le.__boundDepthTexture!==He){if(He!==null&&Z.has(He)&&(P.width!==He.image.width||P.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(P)}}const Ye=P.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ce=!0);const qe=Z.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(qe[J])?Q=qe[J][se]:Q=qe[J],xe=!0):P.samples>0&&ie.useMultisampledRTT(P)===!1?Q=Z.get(P).__webglMultisampledFramebuffer:Array.isArray(qe)?Q=qe[se]:Q=qe,H.copy(P.viewport),K.copy(P.scissor),z=P.scissorTest}else H.copy(W).multiplyScalar(L).floor(),K.copy(me).multiplyScalar(L).floor(),z=Se;if(se!==0&&(Q=Ap),$.bindFramebuffer(p.FRAMEBUFFER,Q)&&re&&$.drawBuffers(P,Q),$.viewport(H),$.scissor(K),$.setScissorTest(z),xe){const Le=Z.get(P.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_CUBE_MAP_POSITIVE_X+J,Le.__webglTexture,se)}else if(Ce){const Le=J;for(let Ye=0;Ye<P.textures.length;Ye++){const qe=Z.get(P.textures[Ye]);p.framebufferTextureLayer(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0+Ye,qe.__webglTexture,se,Le)}}else if(P!==null&&se!==0){const Le=Z.get(P.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,Le.__webglTexture,se)}R=-1},this.readRenderTargetPixels=function(P,J,se,re,Q,xe,Ce,Fe=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){$.bindFramebuffer(p.FRAMEBUFFER,Le);try{const Ye=P.textures[Fe],qe=Ye.format,He=Ye.type;if(!q.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-re&&se>=0&&se<=P.height-Q&&(P.textures.length>1&&p.readBuffer(p.COLOR_ATTACHMENT0+Fe),p.readPixels(J,se,re,Q,De.convert(qe),De.convert(He),xe))}finally{const Ye=B!==null?Z.get(B).__webglFramebuffer:null;$.bindFramebuffer(p.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(P,J,se,re,Q,xe,Ce,Fe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Z.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(J>=0&&J<=P.width-re&&se>=0&&se<=P.height-Q){$.bindFramebuffer(p.FRAMEBUFFER,Le);const Ye=P.textures[Fe],qe=Ye.format,He=Ye.type;if(!q.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=p.createBuffer();p.bindBuffer(p.PIXEL_PACK_BUFFER,nt),p.bufferData(p.PIXEL_PACK_BUFFER,xe.byteLength,p.STREAM_READ),P.textures.length>1&&p.readBuffer(p.COLOR_ATTACHMENT0+Fe),p.readPixels(J,se,re,Q,De.convert(qe),De.convert(He),0);const dt=B!==null?Z.get(B).__webglFramebuffer:null;$.bindFramebuffer(p.FRAMEBUFFER,dt);const It=p.fenceSync(p.SYNC_GPU_COMMANDS_COMPLETE,0);return p.flush(),await i_(p,It,4),p.bindBuffer(p.PIXEL_PACK_BUFFER,nt),p.getBufferSubData(p.PIXEL_PACK_BUFFER,0,xe),p.deleteBuffer(nt),p.deleteSync(It),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,J=null,se=0){const re=Math.pow(2,-se),Q=Math.floor(P.image.width*re),xe=Math.floor(P.image.height*re),Ce=J!==null?J.x:0,Fe=J!==null?J.y:0;ie.setTexture2D(P,0),p.copyTexSubImage2D(p.TEXTURE_2D,se,0,0,Ce,Fe,Q,xe),$.unbindTexture()};const Rp=p.createFramebuffer(),Cp=p.createFramebuffer();this.copyTextureToTexture=function(P,J,se=null,re=null,Q=0,xe=null){xe===null&&(Q!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=Q,Q=0):xe=0);let Ce,Fe,Le,Ye,qe,He,nt,dt,It;const bt=P.isCompressedTexture?P.mipmaps[xe]:P.image;if(se!==null)Ce=se.max.x-se.min.x,Fe=se.max.y-se.min.y,Le=se.isBox3?se.max.z-se.min.z:1,Ye=se.min.x,qe=se.min.y,He=se.isBox3?se.min.z:0;else{const yn=Math.pow(2,-Q);Ce=Math.floor(bt.width*yn),Fe=Math.floor(bt.height*yn),P.isDataArrayTexture?Le=bt.depth:P.isData3DTexture?Le=Math.floor(bt.depth*yn):Le=1,Ye=0,qe=0,He=0}re!==null?(nt=re.x,dt=re.y,It=re.z):(nt=0,dt=0,It=0);const vt=De.convert(J.format),Ge=De.convert(J.type);let Rt;J.isData3DTexture?(ie.setTexture3D(J,0),Rt=p.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ie.setTexture2DArray(J,0),Rt=p.TEXTURE_2D_ARRAY):(ie.setTexture2D(J,0),Rt=p.TEXTURE_2D),p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,J.flipY),p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),p.pixelStorei(p.UNPACK_ALIGNMENT,J.unpackAlignment);const st=p.getParameter(p.UNPACK_ROW_LENGTH),dn=p.getParameter(p.UNPACK_IMAGE_HEIGHT),ps=p.getParameter(p.UNPACK_SKIP_PIXELS),fn=p.getParameter(p.UNPACK_SKIP_ROWS),er=p.getParameter(p.UNPACK_SKIP_IMAGES);p.pixelStorei(p.UNPACK_ROW_LENGTH,bt.width),p.pixelStorei(p.UNPACK_IMAGE_HEIGHT,bt.height),p.pixelStorei(p.UNPACK_SKIP_PIXELS,Ye),p.pixelStorei(p.UNPACK_SKIP_ROWS,qe),p.pixelStorei(p.UNPACK_SKIP_IMAGES,He);const Ct=P.isDataArrayTexture||P.isData3DTexture,xn=J.isDataArrayTexture||J.isData3DTexture;if(P.isDepthTexture){const yn=Z.get(P),jt=Z.get(J),on=Z.get(yn.__renderTarget),wa=Z.get(jt.__renderTarget);$.bindFramebuffer(p.READ_FRAMEBUFFER,on.__webglFramebuffer),$.bindFramebuffer(p.DRAW_FRAMEBUFFER,wa.__webglFramebuffer);for(let Hi=0;Hi<Le;Hi++)Ct&&(p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,Z.get(P).__webglTexture,Q,He+Hi),p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,Z.get(J).__webglTexture,xe,It+Hi)),p.blitFramebuffer(Ye,qe,Ce,Fe,nt,dt,Ce,Fe,p.DEPTH_BUFFER_BIT,p.NEAREST);$.bindFramebuffer(p.READ_FRAMEBUFFER,null),$.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||Z.has(P)){const yn=Z.get(P),jt=Z.get(J);$.bindFramebuffer(p.READ_FRAMEBUFFER,Rp),$.bindFramebuffer(p.DRAW_FRAMEBUFFER,Cp);for(let on=0;on<Le;on++)Ct?p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,yn.__webglTexture,Q,He+on):p.framebufferTexture2D(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,yn.__webglTexture,Q),xn?p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,jt.__webglTexture,xe,It+on):p.framebufferTexture2D(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,jt.__webglTexture,xe),Q!==0?p.blitFramebuffer(Ye,qe,Ce,Fe,nt,dt,Ce,Fe,p.COLOR_BUFFER_BIT,p.NEAREST):xn?p.copyTexSubImage3D(Rt,xe,nt,dt,It+on,Ye,qe,Ce,Fe):p.copyTexSubImage2D(Rt,xe,nt,dt,Ye,qe,Ce,Fe);$.bindFramebuffer(p.READ_FRAMEBUFFER,null),$.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else xn?P.isDataTexture||P.isData3DTexture?p.texSubImage3D(Rt,xe,nt,dt,It,Ce,Fe,Le,vt,Ge,bt.data):J.isCompressedArrayTexture?p.compressedTexSubImage3D(Rt,xe,nt,dt,It,Ce,Fe,Le,vt,bt.data):p.texSubImage3D(Rt,xe,nt,dt,It,Ce,Fe,Le,vt,Ge,bt):P.isDataTexture?p.texSubImage2D(p.TEXTURE_2D,xe,nt,dt,Ce,Fe,vt,Ge,bt.data):P.isCompressedTexture?p.compressedTexSubImage2D(p.TEXTURE_2D,xe,nt,dt,bt.width,bt.height,vt,bt.data):p.texSubImage2D(p.TEXTURE_2D,xe,nt,dt,Ce,Fe,vt,Ge,bt);p.pixelStorei(p.UNPACK_ROW_LENGTH,st),p.pixelStorei(p.UNPACK_IMAGE_HEIGHT,dn),p.pixelStorei(p.UNPACK_SKIP_PIXELS,ps),p.pixelStorei(p.UNPACK_SKIP_ROWS,fn),p.pixelStorei(p.UNPACK_SKIP_IMAGES,er),xe===0&&J.generateMipmaps&&p.generateMipmap(Rt),$.unbindTexture()},this.initRenderTarget=function(P){Z.get(P).__webglFramebuffer===void 0&&ie.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ie.setTextureCube(P,0):P.isData3DTexture?ie.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ie.setTexture2DArray(P,0):ie.setTexture2D(P,0),$.unbindTexture()},this.resetState=function(){N=0,F=0,B=null,$.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const fd={type:"change"},mu={type:"start"},yp={type:"end"},Io=new ya,pd=new Ci,Q1=Math.cos(70*Vs.DEG2RAD),Nt=new k,an=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vl=1e-6;class Mp extends gv{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ks.ROTATE,MIDDLE:ks.DOLLY,RIGHT:ks.PAN},this.touches={ONE:Ns.ROTATE,TWO:Ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new as,this._lastTargetPosition=new k,this._quat=new as().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vh,this._sphericalDelta=new Vh,this._scale=1,this._panOffset=new k,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new k,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tS.bind(this),this._onPointerDown=eS.bind(this),this._onPointerUp=nS.bind(this),this._onContextMenu=cS.bind(this),this._onMouseWheel=rS.bind(this),this._onKeyDown=oS.bind(this),this._onTouchStart=aS.bind(this),this._onTouchMove=lS.bind(this),this._onMouseDown=iS.bind(this),this._onMouseMove=sS.bind(this),this._interceptControlDown=uS.bind(this),this._interceptControlUp=hS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fd),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;Nt.copy(t).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=an:i>Math.PI&&(i-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Nt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Io.origin.copy(this.object.position),Io.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Io.direction))<Q1?this.object.lookAt(this.target):(pd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Io.intersectPlane(pd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vl||this._lastTargetPosition.distanceToSquared(this.target)>vl?(this.dispatchEvent(fd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nt.setFromMatrixColumn(t,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,t){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(t,1):(Nt.setFromMatrixColumn(t,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Nt.copy(s).sub(this.target);let r=Nt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function eS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function tS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function nS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yp),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function iS(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case ks.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case ks.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(mu)}function sS(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function rS(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(mu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(yp))}function oS(n){this.enabled!==!1&&this._handleKeyDown(n)}function aS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case Ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case Ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(mu)}function lS(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function cS(n){this.enabled!==!1&&n.preventDefault()}function uS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class dS extends ru{constructor(){super();const e=new ei;e.deleteAttribute("uv");const t=new St({side:rn}),i=new St,s=new fv(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new it(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new gc(e,i,6),a=new Ut;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new it(e,Is(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new it(e,Is(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new it(e,Is(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new it(e,Is(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const d=new it(e,Is(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new it(e,Is(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Is(n){return new cv({color:0,emissive:16777215,emissiveIntensity:n})}const fS=[{id:"company-a",name:"青源材料有限公司"},{id:"company-b",name:"蓝川装备有限公司"},{id:"company-c",name:"新桥电子有限公司"},{id:"company-d",name:"丰源科技有限公司"},{id:"company-e",name:"启衡精工有限公司"},{id:"company-f",name:"沐光智造有限公司"},{id:"park-admin",name:"园区管委会"},{id:"energy-operator",name:"园区能源服务单位"}],md=[[-37,-31],[38,-31],[38,32],[-37,32]],ln={z:-1.5,width:5.8};function ci(n,e,t,i,s,r,o,a,l){return{id:n,name:e,kind:t,entityId:i,objectId:s,x:r,z:o,width:a,depth:l,polygon:[[r-a/2,o-l/2],[r+a/2,o-l/2],[r+a/2,o+l/2],[r-a/2,o+l/2]]}}const sn=[ci("parcel-a","青源材料地块","enterprise","company-a","ent-a",-27,-15,12,18),ci("parcel-b","蓝川装备地块","enterprise","company-b","ent-b",-10,-15,11,18),ci("parcel-c","新桥电子地块","enterprise","company-c","ent-c",7,-15,12,18),ci("parcel-d","丰源科技地块","enterprise","company-d","ent-d",-27,12,12,18),ci("parcel-e","启衡精工地块","enterprise","company-e","ent-e",-10,12,11,18),ci("parcel-f","沐光智造地块","enterprise","company-f","ent-f",7,12,12,18),ci("public-plaza","公共服务区","public","park-admin","public-center",27,-15,16,18),ci("energy-yard","变配电区","energy","energy-operator","energy-sub",27,8,16,13),ci("energy-mobility","储能充电区","energy","energy-operator","energy-storage",27,21,16,9.6)],Bn=[{id:"a-production",name:"材料生产车间",zoneId:"parcel-a",objectId:"ent-a",x:-27,z:-13.8,width:9,depth:8,height:4.8,template:"production",primary:!0},{id:"a-warehouse",name:"原料仓库",zoneId:"parcel-a",objectId:"ent-a",x:-27,z:-22,width:8,depth:3,height:2.4,template:"warehouse",primary:!1},{id:"b-assembly",name:"装备装配车间",zoneId:"parcel-b",objectId:"ent-b",x:-10,z:-13.8,width:8.4,depth:8,height:3.7,template:"warehouse",primary:!0},{id:"b-office",name:"企业办公楼",zoneId:"parcel-b",objectId:"ent-b",x:-10,z:-22,width:6.4,depth:3,height:2.5,template:"utility",primary:!1},{id:"c-research",name:"电子研发与生产楼",zoneId:"parcel-c",objectId:"ent-c",x:7,z:-14.8,width:8.8,depth:9,height:5.2,template:"research",primary:!0},{id:"d-production",name:"精密生产车间",zoneId:"parcel-d",objectId:"ent-d",x:-27,z:12,width:8.8,depth:7.8,height:4.4,template:"production",primary:!0},{id:"d-utility",name:"供热与辅助用房",zoneId:"parcel-d",objectId:"ent-d",x:-27,z:5.4,width:7,depth:3,height:2.3,template:"utility",primary:!1},{id:"e-production",name:"精工制造车间",zoneId:"parcel-e",objectId:"ent-e",x:-10,z:12,width:8.5,depth:8,height:3.7,template:"warehouse",primary:!0},{id:"e-office",name:"企业办公楼",zoneId:"parcel-e",objectId:"ent-e",x:-10,z:5.3,width:6.5,depth:3,height:2.7,template:"utility",primary:!1},{id:"f-production",name:"智能制造楼",zoneId:"parcel-f",objectId:"ent-f",x:7,z:12,width:8.8,depth:9,height:4.5,template:"research",primary:!0},{id:"public-office",name:"公共服务中心",zoneId:"public-plaza",objectId:"public-center",x:27,z:-15,width:11,depth:9,height:5.3,template:"office",primary:!0},{id:"substation-main",name:"变配电站与设备院",zoneId:"energy-yard",objectId:"energy-sub",x:27,z:8,width:12.6,depth:9,height:3.2,template:"substation",primary:!0},{id:"storage-main",name:"储能及充电设施",zoneId:"energy-mobility",objectId:"energy-storage",x:27,z:21,width:12.5,depth:7,height:2.7,template:"storage",primary:!0}],Ws=[{id:"boulevard",x:-.75,z:-1.5,width:72.5,depth:4.8,horizontal:!0},{id:"north-road",x:.5,z:-28,width:68,depth:3.4,horizontal:!0},{id:"south-road",x:.5,z:28,width:68,depth:3.4,horizontal:!0},...[-18,-2,16].map((n,e)=>({id:`connector-${e}`,x:n,z:0,width:4,depth:56,horizontal:!1}))],Dn=[...sn.map((n,e)=>({id:`meter-asset-${e+1}`,name:`${n.name}计量柜`,kind:"meter",objectId:n.objectId,buildingId:Bn.find(t=>t.zoneId===n.id&&t.primary).id,sourceId:"ds-electric",meterId:`M-${String(e+1).padStart(3,"0")}`,status:"simulated"})),{id:"solar-b",name:"蓝川屋顶光伏",kind:"solar",objectId:"ent-b",buildingId:"b-assembly",sourceId:"ds-electric",status:"simulated"},{id:"solar-f",name:"沐光屋顶光伏",kind:"solar",objectId:"ent-f",buildingId:"f-production",sourceId:"ds-electric",status:"simulated"},{id:"solar-canopy",name:"公共充电光伏车棚",kind:"solar",objectId:"energy-storage",buildingId:"storage-main",sourceId:"ds-electric",status:"simulated"},{id:"heat-d",name:"丰源换热机组",kind:"heat",objectId:"ent-d",buildingId:"d-utility",sourceId:"ds-heat",status:"simulated"},{id:"transformer-1",name:"园区变压器组",kind:"transformer",objectId:"energy-sub",buildingId:"substation-main",sourceId:"ds-electric",status:"simulated"},{id:"battery-1",name:"公共储能柜组",kind:"battery",objectId:"energy-storage",buildingId:"storage-main",sourceId:"ds-electric",status:"simulated"},{id:"charger-1",name:"公共充电桩组",kind:"charger",objectId:"energy-storage",buildingId:"storage-main",sourceId:"ds-electric",status:"simulated"}],Ec=Dn.filter(n=>n.meterId).map(n=>({id:n.meterId,assetId:n.id,objectId:n.objectId,sourceId:n.sourceId,quality:n.objectId==="ent-e"?"delayed":"simulated"}));Ws.map(n=>({...n,entityId:"park-admin",zoneId:"public-circulation",kind:"public"}));function Do(n,e,t=.001){return Math.min(n.x+n.width/2,e.x+e.width/2)-Math.max(n.x-n.width/2,e.x-e.width/2)>t&&Math.min(n.z+n.depth/2,e.z+e.depth/2)-Math.max(n.z-n.depth/2,e.z-e.depth/2)>t}function pS(n=Bn){const e=[],t=Ws.map(r=>({...r,width:r.width+.7,depth:r.depth+.7})),i=new Set,s=n.map(r=>{const o=r.rotationY??0;return{...r,width:Math.abs(Math.cos(o))*r.width+Math.abs(Math.sin(o))*r.depth,depth:Math.abs(Math.sin(o))*r.width+Math.abs(Math.cos(o))*r.depth}});for(const r of s){(![r.x,r.z,r.width,r.depth,r.height,r.elevation??0].every(Number.isFinite)||r.width<=0||r.depth<=0||r.height<=0)&&e.push(`建筑尺寸或坐标无效: ${r.id}`),i.has(r.id)&&e.push(`重复建筑 ID: ${r.id}`),i.add(r.id);const o=sn.find(a=>a.id===r.zoneId);if(!o||o.objectId!==r.objectId){e.push(`建筑主体/地块关联无效: ${r.id}`);continue}(Math.abs(r.x-o.x)+r.width/2>o.width/2||Math.abs(r.z-o.z)+r.depth/2>o.depth/2)&&e.push(`建筑超出地块: ${r.id}`);for(const a of t)Do(r,a)&&e.push(`建筑与道路相交: ${r.id} / ${a.id}`)}for(let r=0;r<s.length;r++)for(let o=r+1;o<s.length;o++)Do(s[r],s[o])&&e.push(`建筑重叠: ${s[r].id} / ${s[o].id}`);for(let r=0;r<sn.length;r++){const o=sn[r];fS.some(a=>a.id===o.entityId)||e.push(`地块主体不存在: ${o.id}`);for(const a of t)Do(o,a)&&e.push(`地块与道路相交: ${o.id} / ${a.id}`);for(let a=r+1;a<sn.length;a++)Do(o,sn[a])&&e.push(`地块重叠: ${o.id}`);(o.x-o.width/2<-37||o.x+o.width/2>38||o.z-o.depth/2<-31||o.z+o.depth/2>32)&&e.push(`地块超出园区: ${o.id}`)}for(const r of Dn)n.some(o=>o.id===r.buildingId&&o.objectId===r.objectId)||e.push(`设施关联无效: ${r.id}`);return new Set(Dn.map(r=>r.id)).size!==Dn.length&&e.push("设施 ID 重复"),new Set(Ec.map(r=>r.id)).size!==Ec.length&&e.push("计量点 ID 重复"),e}const is={"a-production":650,"a-warehouse":40,"b-assembly":580,"b-office":40,"c-research":470,"d-production":550,"d-utility":35,"e-production":420,"e-office":35,"f-production":530,"public-office":120,"substation-main":42,"storage-main":88},hr=300,Sp=.8325,ba=Object.values(is).reduce((n,e)=>n+e,0),Gr={ordinaryMwh:2e3,qualifiedGreenMwh:1200,onsitePvMwh:400},gu=Sp*Gr.ordinaryMwh/ba,gd=Gr.ordinaryMwh*Sp,mS=(Gr.qualifiedGreenMwh+Gr.onsitePvMwh)/ba*100;function gS(n){return Bn.filter(e=>e.objectId===n).reduce((e,t)=>e+(is[t.id]??0),0)}function _S(n){return gS(n)*gu}const Os={boundary:"BV-DEMO-02 · 六家企业 + 公共服务 + 能源设施",electricity:"13 栋建筑年度预算合计，含充电、辅助用电及转换损耗；储能充放电不重复计入消费。",factor:"2025 试行方法普通受入电力 0.8325 kgCO₂/kWh；绿电/光伏条件与凭证均为场景假设。",allocation:"设备使用年度场景结构分配因子 0.4625 kgCO₂/kWh，仅为管理分摊示例，不代表实际时段供能。",tce:"电力须按等价值折标；系数和依据尚未核实，因此不生成综合能耗、单位能耗碳排或核心指标达标结论。"},vS={policy:{label:"国家园区核算方法（试行）",url:"https://www.ndrc.gov.cn/xxgk/zcfb/tz/202507/P020250708509043380772.pdf"},industry:{label:"苏州工业园区碳达峰试点方案",url:"https://www.suzhou.gov.cn/szsrmzf/zfwj/202405/3df5e68dcc1a4bf79947e6cbb4524968.shtml"},air:{label:"Atlas Copco 空压能效指标",url:"https://helpsmartlink.atlascopco.com/en/support/solutions/articles/47001095673-energy-efficiency-dashboard"},meter:{label:"Schneider 电表字段手册",url:"https://productinfo.se.com/pm2100/5afb1fab46e0fb00011e440d/PM2100%20series%20User%20Manual/English/BM_PM2100SeriesUserManual_0000071636.ditamap.xml/$/C_ViewingMeterData_ViewingMeterData_PM2100_0000071585"},warehouse:{label:"Prologis 仓库照明方案",url:"https://www.prologis.se/en/essentials-solutions/operations/lighting-electrical"},research:{label:"ESPEC 环境试验设备",url:"https://espec.com/na/products"},storage:{label:"Huawei 工商业光储系统资料",url:"https://e.huawei.com/marketingcloud/pep/asset/20000001/Material/3f44fe1d936a4a18b5cb06eb53ad0582/M3T1A669N1115074372528451590/FusionSolar%20C_I%20_%20Smart%20PV%20Solusion%20Brochure.pdf"}},xS=JSON.parse('[{"id":"factory","name":"厂房","buildingId":"b-assembly","subtitle":"装备加工装配 · 生产负荷与公辅能耗","layout":"入口计量 → 生产加工 → 装配测试；公辅设备分区","zones":[["生产与加工",55,90,510,425],["公辅与计量",590,90,260,425]],"assets":[{"id":"F01","name":"数控加工中心 1","x":90,"y":130,"w":190,"h":85,"buildingId":"b-assembly","scene":"factory","power":34,"energy":360,"status":"normal","role":"terminal","rule":"R01/R03","extra":"产量、加工任务、待机状态","recommendation":"核对同产品能耗与排程","source":"meter","priority":"P0","meterId":"DEMO-M-F01","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":299.7},{"id":"F02","name":"数控加工中心 2","x":340,"y":130,"w":190,"h":85,"buildingId":"b-assembly","scene":"factory","power":28,"energy":280,"status":"normal","role":"terminal","rule":"R01/R03","extra":"产量、加工任务","recommendation":"匹配同配方和良品产量","source":"meter","priority":"P0","meterId":"DEMO-M-F02","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":233.1},{"id":"F03","name":"螺杆空压机","x":620,"y":130,"w":195,"h":85,"buildingId":"b-assembly","scene":"factory","power":57,"energy":300,"status":"warning","role":"terminal","rule":"R02","extra":"压力、流量、加载/卸载","recommendation":"演示：无生产任务仍高用电；排查泄漏或控制不匹配","source":"air","priority":"P0","meterId":"DEMO-M-F03","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":249.75},{"id":"F04","name":"冷干机","x":620,"y":260,"w":195,"h":85,"buildingId":"b-assembly","scene":"factory","power":2.1,"energy":24,"status":"normal","role":"terminal","rule":"R02","extra":"露点、压差","recommendation":"关注气体质量；独立计量与系统表不重复汇总","source":"air","priority":"P1","meterId":"DEMO-M-F04","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":19.98},{"id":"F05","name":"冷却循环泵","x":90,"y":260,"w":190,"h":85,"buildingId":"b-assembly","scene":"factory","power":5.3,"energy":42,"status":"normal","role":"terminal","rule":"R01","extra":"流量、压差、频率","recommendation":"核对负荷需求与泵运行模式","source":"industry","priority":"P1","meterId":"DEMO-M-F05","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":34.97},{"id":"F06","name":"抽排风机","x":340,"y":260,"w":190,"h":85,"buildingId":"b-assembly","scene":"factory","power":3.8,"energy":30,"status":"normal","role":"terminal","rule":"R01","extra":"风量、生产状态","recommendation":"核对必要通风后再建议节能","source":"industry","priority":"P1","meterId":"DEMO-M-F06","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":24.98},{"id":"F07","name":"车间照明回路","x":90,"y":390,"w":190,"h":85,"buildingId":"b-assembly","scene":"factory","power":2.2,"energy":18,"status":"normal","role":"terminal","rule":"R04","extra":"占用、照度","recommendation":"按回路计量，不为每盏灯虚构测点","source":"meter","priority":"P1","meterId":"DEMO-M-F07","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":14.98},{"id":"F08","name":"装配与测试台","x":340,"y":390,"w":190,"h":85,"buildingId":"b-assembly","scene":"factory","power":6,"energy":48,"status":"normal","role":"terminal","rule":"R01/R03","extra":"测试任务、产量","recommendation":"识别无任务待机与产品差异","source":"industry","priority":"P1","meterId":"DEMO-M-F08","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":39.96},{"id":"F09","name":"建筑入口总表","x":620,"y":390,"w":195,"h":85,"buildingId":"b-assembly","scene":"factory","power":142,"energy":1120,"status":"normal","role":"aggregate","rule":"R07","extra":"正反向电量、覆盖范围","recommendation":"1120−1102=18 kWh 仅为样例计量差额，不能直接认定损耗","source":"meter","priority":"P0","meterId":"DEMO-M-F09","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null}]},{"id":"warehouse","name":"仓库","buildingId":"a-warehouse","subtitle":"常温原料/成品仓 · 分区照明与物流","layout":"货架与作业通道 → 收发货 → 充电回路；不设冷库","zones":[["存储与通道",55,90,415,425],["物流与用能回路",500,90,350,425]],"assets":[{"id":"W01","name":"货架与托盘区","x":90,"y":135,"w":340,"h":235,"buildingId":"a-warehouse","scene":"warehouse","power":null,"energy":null,"status":"normal","role":"passive","rule":"—","extra":"库存、作业状态（可选）","recommendation":"非用能资产，无运行碳排卡片","source":"warehouse","priority":"P2","meterId":null,"base":"资产位置、分类","dataOrigin":"模拟构造","carbon":null},{"id":"W02","name":"分区 LED 回路","x":540,"y":120,"w":265,"h":70,"buildingId":"a-warehouse","scene":"warehouse","power":5,"energy":42,"status":"warning","role":"terminal","rule":"R04","extra":"占用、调光状态","recommendation":"演示：空置区持续亮灯；核对应急照明需求","source":"warehouse","priority":"P0","meterId":"DEMO-M-W02","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":34.97},{"id":"W03","name":"通风机组","x":540,"y":210,"w":265,"h":70,"buildingId":"a-warehouse","scene":"warehouse","power":3.2,"energy":26,"status":"normal","role":"terminal","rule":"R01","extra":"温湿度、风量","recommendation":"保持必要通风，按任务与班次分析","source":"industry","priority":"P1","meterId":"DEMO-M-W03","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":21.64},{"id":"W04","name":"输送设备","x":540,"y":300,"w":265,"h":70,"buildingId":"a-warehouse","scene":"warehouse","power":4.8,"energy":38,"status":"normal","role":"terminal","rule":"R04","extra":"搬运任务、托盘数","recommendation":"无搬运任务运行可进入整改核对","source":"industry","priority":"P1","meterId":"DEMO-M-W04","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":31.64},{"id":"W05","name":"叉车充电回路","x":90,"y":420,"w":340,"h":65,"buildingId":"a-warehouse","scene":"warehouse","power":7,"energy":24,"status":"normal","role":"terminal","rule":"R04","extra":"车辆/会话 ID、SOC","recommendation":"记录充电输入，不叠加车辆端电量","source":"meter","priority":"P1","meterId":"DEMO-M-W05","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":19.98},{"id":"W06","name":"仓库总表","x":540,"y":410,"w":265,"h":70,"buildingId":"a-warehouse","scene":"warehouse","power":20,"energy":140,"status":"normal","role":"aggregate","rule":"R07","extra":"覆盖范围、进出电量","recommendation":"终端合计130，余下10 kWh 为未覆盖/计量差额示例","source":"meter","priority":"P0","meterId":"DEMO-M-W06","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null}]},{"id":"research","name":"研发楼","buildingId":"c-research","subtitle":"电子可靠性测试 · 测试设备与环境保障","layout":"测试区与机电区分开；正式原型再加入楼层切换","zones":[["试验与研发",55,90,510,425],["机电保障",590,90,260,425]],"assets":[{"id":"R01","name":"恒温恒湿试验箱","x":90,"y":130,"w":190,"h":85,"buildingId":"c-research","scene":"research","power":22,"energy":240,"status":"warning","role":"terminal","rule":"R05","extra":"温湿度设定/实测、试验任务","recommendation":"演示：任务结束仍运行；排除恢复温控与后续任务","source":"research","priority":"P0","meterId":"DEMO-M-R01","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":199.8},{"id":"R02","name":"老化测试柜","x":340,"y":130,"w":190,"h":85,"buildingId":"c-research","scene":"research","power":18,"energy":180,"status":"normal","role":"terminal","rule":"R01/R03","extra":"测试配方、样品数量、时长","recommendation":"比较同配方，不以高功率直接判异常","source":"research","priority":"P1","meterId":"DEMO-M-R02","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":149.85},{"id":"R03","name":"冷水机/热泵","x":620,"y":130,"w":195,"h":85,"buildingId":"c-research","scene":"research","power":48,"energy":420,"status":"normal","role":"terminal","rule":"R06","extra":"冷热量、流量、供回水温度","recommendation":"有冷热量才能评估 COP；位置可在屋顶/机房","source":"industry","priority":"P0","meterId":"DEMO-M-R03","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":349.65},{"id":"R04","name":"AHU 空气处理机组","x":620,"y":260,"w":195,"h":85,"buildingId":"c-research","scene":"research","power":17,"energy":150,"status":"normal","role":"terminal","rule":"R01","extra":"房间占用、温湿度、风量","recommendation":"研发停用不等于实验环境保障可停","source":"industry","priority":"P1","meterId":"DEMO-M-R04","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":124.88},{"id":"R05","name":"冷冻水循环泵","x":620,"y":390,"w":195,"h":85,"buildingId":"c-research","scene":"research","power":8,"energy":72,"status":"normal","role":"terminal","rule":"R06","extra":"流量、压差、频率","recommendation":"结合冷热负荷评估，不单看温差","source":"industry","priority":"P1","meterId":"DEMO-M-R05","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":59.94},{"id":"R06","name":"UPS 供电节点","x":90,"y":260,"w":190,"h":85,"buildingId":"c-research","scene":"research","power":42,"energy":600,"status":"normal","role":"transfer","rule":"R07","extra":"输入/输出、负载率","recommendation":"供电输入含下游负荷；仅损耗可另做归属","source":"meter","priority":"P1","meterId":"DEMO-M-R06","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"R07","name":"研发照明回路","x":340,"y":260,"w":190,"h":85,"buildingId":"c-research","scene":"research","power":3,"energy":24,"status":"normal","role":"terminal","rule":"R04","extra":"占用、班次","recommendation":"按楼层/回路控制与核对","source":"meter","priority":"P1","meterId":"DEMO-M-R07","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":19.98},{"id":"R08","name":"楼层总表","x":90,"y":390,"w":440,"h":85,"buildingId":"c-research","scene":"research","power":118,"energy":1266,"status":"delayed","role":"aggregate","rule":"R09","extra":"时间戳、质量码、覆盖范围","recommendation":"演示：超过采样周期，冻结最后值并标明延迟，不能填零","source":"meter","priority":"P0","meterId":"DEMO-M-R08","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null}]},{"id":"substation","name":"变电站","buildingId":"substation-main","subtitle":"输入输出计量 · 支路定位与损耗核对","layout":"高压进线 → 变压器 → 低压出线；与单线图联动","zones":[["高压进线/计量",55,90,240,425],["变压器区",330,90,240,425],["低压出线",610,90,240,425]],"assets":[{"id":"S01","name":"高压进线柜","x":80,"y":145,"w":190,"h":105,"buildingId":"substation-main","scene":"substation","power":420,"energy":3600,"status":"normal","role":"transfer","rule":"R07","extra":"开关状态、保护装置上报","recommendation":"展示传递电量，不再次计入用能总量","source":"meter","priority":"P0","meterId":"DEMO-M-S01","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"S02","name":"变压器 1","x":355,"y":145,"w":190,"h":105,"buildingId":"substation-main","scene":"substation","power":220,"energy":1900,"status":"normal","role":"transfer","rule":"R07","extra":"输出电量、温度、kVA","recommendation":"输入与下游重复；同期核对后才能分析损耗","source":"industry","priority":"P0","meterId":"DEMO-M-S02","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"S03","name":"变压器 2","x":355,"y":335,"w":190,"h":105,"buildingId":"substation-main","scene":"substation","power":190,"energy":1690,"status":"warning","role":"transfer","rule":"R07","extra":"输出电量、温度、覆盖范围","recommendation":"演示：计量差额偏离；先查计量与同步，不直接判设备损坏","source":"industry","priority":"P0","meterId":"DEMO-M-S03","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"S04","name":"企业出线柜组","x":635,"y":145,"w":190,"h":105,"buildingId":"substation-main","scene":"substation","power":280,"energy":2600,"status":"normal","role":"transfer","rule":"R07","extra":"企业/建筑 ID、支路表","recommendation":"异常支路 → 建筑 → 设备，不加总传递排放","source":"meter","priority":"P1","meterId":"DEMO-M-S04","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"S05","name":"公共出线柜组","x":635,"y":335,"w":190,"h":105,"buildingId":"substation-main","scene":"substation","power":110,"energy":950,"status":"normal","role":"transfer","rule":"R07","extra":"公共设施 ID、支路表","recommendation":"追踪公共区域用能归属","source":"meter","priority":"P1","meterId":"DEMO-M-S05","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"S06","name":"园区边界计量点","x":80,"y":335,"w":190,"h":105,"buildingId":"substation-main","scene":"substation","power":420,"energy":3600,"status":"normal","role":"aggregate","rule":"R07","extra":"受入/送出、能源类别、期间","recommendation":"边界测点，非设备运行排放；此页样例不与其他模板汇总","source":"policy","priority":"P0","meterId":"DEMO-M-S06","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null}]},{"id":"storage","name":"储能充电区","buildingId":"storage-main","subtitle":"能源流向与温控 · 终端充电用能","layout":"光伏与双向计量 → PCS/电池簇；充电回路独立","zones":[["电池簇",55,90,235,425],["转换与辅助系统",330,90,245,425],["充电与计量",610,90,240,425]],"assets":[{"id":"E01","name":"电池簇 A / BMS","x":80,"y":140,"w":190,"h":100,"buildingId":"storage-main","scene":"storage","power":-24,"energy":210,"status":"normal","role":"storage","rule":"R08","extra":"SOC、温度、原始告警、流向","recommendation":"电量为充电示例；充/放须分别记录，不显示独立减排","source":"storage","priority":"P0","meterId":"DEMO-BMS-E01","base":"SOC、温度、状态、告警、时间","dataOrigin":"模拟构造","carbon":null},{"id":"E02","name":"电池簇 B / BMS","x":80,"y":310,"w":190,"h":100,"buildingId":"storage-main","scene":"storage","power":-24,"energy":210,"status":"warning","role":"storage","rule":"R08","extra":"SOC、温度、原始告警、流向","recommendation":"演示 BMS 温控告警，按原始告警定位，不自创保护阈值","source":"storage","priority":"P0","meterId":"DEMO-BMS-E02","base":"SOC、温度、状态、告警、时间","dataOrigin":"模拟构造","carbon":null},{"id":"E03","name":"光伏逆变器","x":355,"y":130,"w":195,"h":80,"buildingId":"storage-main","scene":"storage","power":26,"energy":200,"status":"normal","role":"generation","rule":"—","extra":"发电量、辐照度、限发","recommendation":"发电不是负的用电排放；减排须有方法与基准","source":"storage","priority":"P1","meterId":"DEMO-M-E03","base":"发电功率、发电量、状态、时间","dataOrigin":"模拟构造","carbon":null},{"id":"E04","name":"PCS 双向转换","x":355,"y":270,"w":195,"h":80,"buildingId":"storage-main","scene":"storage","power":-48,"energy":420,"status":"normal","role":"transfer","rule":"R07","extra":"充电420/放电360、流向","recommendation":"另看库存变化与辅助回路；不能按360/420直接算往返效率","source":"storage","priority":"P0","meterId":"DEMO-M-E04","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null},{"id":"E05","name":"储能辅助温控","x":355,"y":410,"w":195,"h":70,"buildingId":"storage-main","scene":"storage","power":1.6,"energy":8,"status":"normal","role":"terminal","rule":"R08","extra":"温度、制冷状态","recommendation":"辅助用电，已含于站级输入时避免重复归属","source":"storage","priority":"P1","meterId":"DEMO-M-E05","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":6.66},{"id":"E06","name":"充电桩 1","x":635,"y":130,"w":190,"h":80,"buildingId":"storage-main","scene":"storage","power":30,"energy":96,"status":"normal","role":"terminal","rule":"R04","extra":"会话状态、会话电量","recommendation":"用电对应排放，和站级总表不能叠加","source":"meter","priority":"P0","meterId":"DEMO-M-E06","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":79.92},{"id":"E07","name":"充电桩 2","x":635,"y":270,"w":190,"h":80,"buildingId":"storage-main","scene":"storage","power":0,"energy":72,"status":"normal","role":"terminal","rule":"R04","extra":"会话状态、会话电量","recommendation":"当前空闲而当日有电量属于正常","source":"meter","priority":"P0","meterId":"DEMO-M-E07","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":59.94},{"id":"E08","name":"光储充双向表","x":635,"y":410,"w":190,"h":70,"buildingId":"storage-main","scene":"storage","power":-42.4,"energy":500,"status":"normal","role":"aggregate","rule":"R07","extra":"受入/送出、同期边界、倍率","recommendation":"正值受入、负值送出；仅示例读数，配套模型须建立完整能量平衡","source":"meter","priority":"P0","meterId":"DEMO-M-E08","base":"功率、电量、方向、状态、时间、质量","dataOrigin":"模拟构造","carbon":null}]}]'),wc={sources:vS,scenes:xS},_d={terminal:"终端用电",aggregate:"汇总计量",transfer:"能源传递",storage:"储能库存",generation:"发电资产",passive:"非用能资产"},vd={normal:"正常示例",warning:"需核对",delayed:"数据延迟"};function bp(n){return n.id==="substation-main"?"substation":n.id==="storage-main"?"storage":n.id==="a-warehouse"?"warehouse":n.id==="c-research"||n.template==="office"||n.id.endsWith("-office")?"research":"factory"}function yS(n){return n.id==="c-research"?[{id:1,name:"1F · 机电与试制"},{id:2,name:"2F · 可靠性测试"}]:[{id:1,name:"1F · 功能区"}]}function MS(n){return{F01:"cnc",F02:"cnc",F03:"compressor",F04:"dryer",F05:"pump",F06:"fan",F07:"lighting",F08:"assembly",F09:"meter",W01:"racks",W02:"lighting",W03:"fan",W04:"conveyor",W05:"forklift",W06:"meter",R01:"chamber",R02:"burnin",R03:"chiller",R04:"ahu",R05:"pump",R06:"ups",R07:"lighting",R08:"meter",S01:"switchgear",S02:"transformer",S03:"transformer",S04:"switchgear",S05:"switchgear",S06:"meter",E01:"battery",E02:"battery",E03:"inverter",E04:"pcs",E05:"chiller",E06:"charger",E07:"charger",E08:"meter"}[n]??"assembly"}function SS(n){const e=bp(n);let i=wc.scenes.find(l=>l.id===e).assets;e==="research"&&n.id!=="c-research"&&(i=i.filter(l=>!["R01","R02"].includes(l.id))),n.id==="d-utility"&&(i=wc.scenes[0].assets.filter(l=>["F03","F04","F05","F09"].includes(l.id)));const s=i.filter(l=>l.role==="terminal").reduce((l,c)=>l+(c.energy??0),0),r=(is[n.id]??0)*1e3/hr,o=s?r/s:1,a=i.filter(l=>l.role==="terminal").reduce((l,c)=>l+(c.power??0)*o,0);return i.map(l=>{const c=l.role,u=n.id+"::"+l.id;let h=l.name,d=MS(l.id);n.id==="a-production"&&["F01","F02"].includes(l.id)&&(h=l.id==="F01"?"注塑成型机":"材料成型机",d="molding"),n.id==="f-production"&&l.id==="F01"&&(h="电子贴片机",d="smt"),n.id==="f-production"&&l.id==="F02"&&(h="回流焊炉",d="reflow"),n.id==="f-production"&&l.id==="F08"&&(h="控制器老化测试台",d="burnin"),n.id==="d-utility"&&l.id==="F03"&&(h="换热机组辅助电耗",d="heat");const f=n.id==="b-assembly"&&l.id==="F03",x=n.id==="d-production"&&l.id==="F01",S=n.id==="c-research"&&l.id==="R01",g=n.id==="e-production"&&l.id==="F09",m=f||x||S||n.id==="a-warehouse"&&l.id==="W02"||n.id==="substation-main"&&l.id==="S03"||n.id==="storage-main"&&l.id==="E02",C=g?"delayed":m?"warning":"normal";let E=c==="terminal"?(l.energy??0)*o:c==="aggregate"?r:l.energy,y=l.power===null?null:c==="terminal"?l.power*o:c==="aggregate"?a:l.power;if(e==="research"&&l.id==="R06"){const B=i.filter(R=>["R01","R02","R07"].includes(R.id));E=B.reduce((R,A)=>R+(A.energy??0)*o,0),y=B.reduce((R,A)=>R+(A.power??0)*o,0)}if(e==="storage"&&l.id==="E08"&&(y=a-48-26,E=r-420-200),e==="substation"){const B=(ba-Gr.onsitePvMwh)*1e3/hr,R=(is["public-office"]+is["storage-main"])*1e3/hr,A=is["substation-main"]*1e3/hr;E=["S02","S03"].includes(l.id)?B/2:l.id==="S04"?B-R-A:l.id==="S05"?R:B,y=E/10}const U=x?"核对无任务待机和保温需求；经生产负责人确认后调整排程。":f?"疑似泄漏或控制不匹配；核对气量、压力与管路。":S?"核对试验结束、恢复温控及下一批任务。":g?"测点超过预期采样周期，核对网关和时间同步；未知不填零。":l.recommendation,N=f||x?"当前无生产任务":S?"试验任务已结束":c==="terminal"?"按模拟班次运行":"按能源角色展示",F=f?`非生产时段功率仍约 ${(Number(l.power)*o).toFixed(1)} kW；示例气量偏低，原因待现场确认。`:x?"无加工任务持续 18 分钟，待机功率高于配置基线。":S?"试验结束 20 分钟后仍处于温控运行；并非已确认故障。":g?"最后有效读数落后 3 个采样周期；相关期间碳排暂停推算。":m?"设备/计量状态触发模拟规则，需结合关联测点复核。":"未触发模拟规则；正常不代表已满足国家申报要求。";return{id:u,templateId:l.id,name:h,buildingId:n.id,objectId:n.objectId,floor:n.id==="c-research"&&["R01","R02","R07"].includes(l.id)?2:1,kind:e,x:(l.x+l.w/2-450)/900*24,z:(l.y+l.h/2-295)/550*17,width:l.w/900*24,depth:l.h/550*17,role:c,priority:l.priority,meterId:l.meterId?"DEMO-"+n.id+"-"+l.id:null,dailyKwh:E,basePower:y,state:C,rule:x?"R01":g?"R09":l.rule,extra:l.extra,recommendation:U,source:l.source,deviceType:d,annualMwh:c==="terminal"?(E??0)*hr/1e3:null,task:N,evidence:F}})}const $r=Bn.flatMap(SS);function bS(n){return $r.filter(e=>e.buildingId===n)}function ES(n,e){const t=n.id.length%7*.45,i=n.basePower===null?null:n.state==="delayed"?n.basePower:Number((n.basePower*(1+.015*Math.sin(e*.4+t))).toFixed(2)),s=n.dailyKwh===null?null:n.dailyKwh+(n.role==="terminal"&&n.state!=="delayed"&&i!==null?Math.max(0,i)*e*2.6/3600:0);return{power:i,energy:s,carbon:s===null||n.role!=="terminal"||n.state==="delayed"?null:s*gu,quality:n.state==="delayed"?"最后有效值 · 已延迟":n.role==="passive"?"空间资产 · 无能耗测点":n.role==="terminal"?"模拟活动数据 / 计算碳排":"能流或状态示例 · 不独立计碳",soc:n.role==="storage"?61:void 0,temperature:n.role==="storage"?n.state==="warning"?38:29:void 0}}function _u(n){return $r.filter(e=>e.objectId===n&&e.role==="terminal").reduce((e,t)=>e+(t.basePower??0),0)}const wS=$r.filter(n=>n.state!=="normal").map((n,e)=>({id:"IA-"+(1001+e),title:n.name+(n.state==="delayed"?"数据延迟":"需核对"),objectId:n.objectId,buildingId:n.buildingId,assetId:n.id,level:n.state==="delayed"?"offline":"warning",time:"10:"+String(20+e).padStart(2,"0"),text:n.evidence+" "+n.recommendation})),TS=wc.sources,Pn=[{id:"ent-a",name:"青源材料",type:"企业厂房",area:"enterprise",owner:"青源材料有限公司",health:"normal",description:"生产区 A · 已接入电力与天然气计量点"},{id:"ent-b",name:"蓝川装备",type:"企业厂房",area:"enterprise",owner:"蓝川装备有限公司",health:"warning",description:"生产区 B · 屋顶光伏已接入"},{id:"ent-c",name:"新桥电子",type:"企业厂房",area:"enterprise",owner:"新桥电子有限公司",health:"warning",description:"生产区 C · 近期用电波动超出演示阈值"},{id:"ent-d",name:"丰源科技",type:"企业厂房",area:"enterprise",owner:"丰源科技有限公司",health:"warning",description:"生产区 D · 已接入电、热数据"},{id:"ent-e",name:"启衡精工",type:"企业厂房",area:"enterprise",owner:"启衡精工有限公司",health:"offline",description:"生产区 E · 一个计量点超过同步时限"},{id:"ent-f",name:"沐光智造",type:"企业厂房",area:"enterprise",owner:"沐光智造有限公司",health:"normal",description:"生产区 F · 屋顶光伏与储能协同示例"},{id:"public-center",name:"园区服务中心",type:"公共建筑",area:"public",owner:"园区管委会",health:"normal",description:"公共区域 · 办公与展示中心"},{id:"energy-sub",name:"综合变电站",type:"能源设施",area:"energy",owner:"园区能源服务单位",health:"warning",description:"负责电力受入与分配；数据作为园区核算边界参考"},{id:"energy-storage",name:"储能与充电区",type:"能源设施",area:"energy",owner:"园区能源服务单位",health:"warning",description:"储能和公共充电设施 · 设备状态为演示数据"}].map(n=>{const e=sn.find(o=>o.objectId===n.id),t=Bn.filter(o=>o.objectId===n.id),i=t.find(o=>o.primary),s=$r.filter(o=>o.objectId===n.id),r=s.some(o=>o.state==="delayed")?"offline":s.some(o=>o.state==="warning")?"warning":"normal";return{...n,health:r,powerKw:n.area==="energy"?null:_u(n.id),carbonT:_S(n.id),description:{"ent-a":"材料部件加工与常温仓储 · 模拟电气化生产","ent-b":"装备加工与装配 · 生产及空压计量示例","ent-c":"电子研发与可靠性测试 · 任务状态与用能联动","ent-d":"精密加工与换热辅助用房 · 热源待配置","ent-e":"精工制造 · 建筑总表模拟数据延迟","ent-f":"新能源控制器装配与测试 · 屋顶光伏示例"}[n.id]??n.description,x:e.x,z:e.z,width:e.width,depth:e.depth,height:i.height,entityId:e.entityId,zoneId:e.id,template:i.template,buildingIds:t.map(o=>o.id),assetIds:Dn.filter(o=>o.objectId===n.id).map(o=>o.id)}}),Et={year:2025,electricityMwh:ba,energyTce:null,co2T:gd,intensity:null,target:null,cleanerEnergyPct:Number(mS.toFixed(1)),fuelT:0,conversionT:0,electricityHeatT:gd,industrialProcessT:0},xd=[{id:"core",name:"单位能耗碳排放",value:"暂不计算",target:"需匹配综合能耗规模档",status:"insufficient",evidence:Os.tce},{id:"clean",name:"清洁能源消费占比",value:Et.cleanerEnergyPct+"%",target:"≥ 90%",status:"fail",evidence:"全电场景：1200 MWh 绿电 + 400 MWh 光伏 / 3600 MWh 用电，凭证为假设"},{id:"product",name:"园区企业产出产品单位能耗",value:"待补齐",target:"达到或优于二级能耗限额标准",status:"insufficient",evidence:"两家企业尚未配置适用产品标准及产量证据"},{id:"waste",name:"工业固废综合利用率",value:"76.4%",target:"≥ 80%",status:"fail",evidence:"演示固废台账 · 与目标相差 3.6 个百分点"},{id:"heat",name:"余热/余冷/余压综合利用率",value:"46.0%",target:"≥ 50%",status:"fail",evidence:"演示回收量及可回收量台账 · 加权计算待复核"},{id:"water",name:"工业用水重复利用率",value:"83.2%",target:"≥ 80%",status:"pass",evidence:"演示用水台账"}],yd=$r.filter(n=>n.meterId&&n.role!=="storage"),xl=[{id:"ds-electric",name:"建筑与设备示例测点",type:"自动采集",count:yd.length,online:yd.filter(n=>n.state!=="delayed").length,frequency:"2.6 秒模拟",state:"partial"},{id:"ds-state",name:"BMS 状态与告警",type:"系统接口",count:2,online:2,frequency:"2.6 秒模拟",state:"normal"},{id:"ds-process",name:"生产/试验任务示例",type:"企业填报",count:6,online:6,frequency:"场景状态",state:"normal"}],Hn=wS;function AS(n=0){return Array.from({length:24},(e,t)=>{const i=t,r=sn.reduce((o,a)=>o+_u(a.objectId),0)/1e3*(.7+.22*Math.sin((i-7)*Math.PI/12)+.08*Math.sin(i*Math.PI/5));return{hour:`${String(i).padStart(2,"0")}:00`,demand:Math.max(.1,Number((r+(t===23?.012*Math.sin(n/2):0)).toFixed(2))),solar:Number(Math.max(0,.28*Math.sin((i-6)*Math.PI/12)).toFixed(2))}})}const RS={pass:"达到试行目标",fail:"未达到试行目标",insufficient:"数据不足",review:"待核实"};function CS(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new $t;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let x=0;x<f.count;++x)h.push(f.getX(x)+u);u+=n[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Md(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let S=0;S<o[u].length;++S)f.push(o[u][S][d]);const x=Md(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(x)}}return l}function Md(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new wn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=u.count;d<f;d++)for(let x=0;x<t;x++){const S=u.getComponent(d,x);a.setComponent(d+h,x,S)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}const Sd={enterprise:4180223,public:16762730,energy:5955761};function PS(){const n=[],e=new ei(1,1,1),t=new Set([e]);function i(z){const D=document.createElement("canvas");D.width=D.height=128;const b=D.getContext("2d");if(b.fillStyle=z==="panel"?"#123b62":z==="glass"?"#5c96ab":"#a5aeb4",b.fillRect(0,0,128,128),z==="stone"||z==="asphalt"){let O=7413;const L=()=>(O=Math.imul(O,1664525)+1013904223>>>0,O/4294967296);for(let ne=0;ne<1200;ne++){const he=Math.floor(85+L()*90);b.fillStyle=`rgba(${he},${he},${he},${z==="stone"?.065:.12})`,b.fillRect(L()*128,L()*128,1,1)}if(z==="stone"){b.strokeStyle="#ffffff19",b.lineWidth=1;for(let ne=0;ne<128;ne+=32)b.beginPath(),b.moveTo(0,ne),b.lineTo(128,ne),b.stroke()}}else{b.strokeStyle=z==="panel"?"#76bfe790":"#c1e5eb70",b.lineWidth=1;for(let O=0;O<=128;O+=z==="panel"?16:32)b.beginPath(),b.moveTo(O,0),b.lineTo(O,128),b.stroke();for(let O=0;O<=128;O+=z==="panel"?32:64)b.beginPath(),b.moveTo(0,O),b.lineTo(128,O),b.stroke()}const I=new _c(D);return I.colorSpace=Wt,I.wrapS=I.wrapT=Ko,I.repeat.set(z==="asphalt"?4:1,z==="asphalt"?4:1),n.push(I),I}const s={yard:new St({color:2836052,roughness:.95,map:i("stone")}),road:new St({color:2306878,roughness:.98,map:i("asphalt")}),curb:new St({color:6848911,roughness:.86}),wall:new St({color:10794687,roughness:.78,map:i("stone")}),warmWall:new St({color:11974054,roughness:.84,map:i("stone")}),white:new St({color:14017767,roughness:.55,metalness:.13}),steel:new St({color:7968422,roughness:.38,metalness:.65}),dark:new St({color:2706013,roughness:.56,metalness:.35}),roof:new St({color:5534598,roughness:.62,metalness:.4}),glass:new St({color:4290957,roughness:.23,metalness:.45,map:i("glass"),emissive:1522505,emissiveIntensity:.22}),solar:new St({color:9681629,map:i("panel"),roughness:.28,metalness:.55}),asphaltMark:new kt({color:12833750}),leaf:new St({color:3902067,roughness:1}),leaf2:new St({color:5406310,roughness:1}),trunk:new St({color:6907740,roughness:1}),hedge:new St({color:3497042,roughness:1}),cyan:new kt({color:5818607}),mint:new kt({color:6543533}),gold:new kt({color:15580524})},r=document.createElement("canvas");r.width=r.height=64;const o=r.getContext("2d"),a=o.createRadialGradient(32,32,12,32,32,32);a.addColorStop(0,"rgba(0,9,17,.5)"),a.addColorStop(1,"rgba(0,9,17,0)"),o.fillStyle=a,o.fillRect(0,0,64,64);const l=new _c(r);n.push(l);const c=new kt({map:l,transparent:!0,depthWrite:!1});function u(z,D,b,I,O=!1){const L=new it(e,I);return L.scale.set(...D),L.position.set(...b),L.castShadow=O,L.receiveShadow=!0,z.add(L),L}function h(z,D,b,I){t.add(D);const O=new gc(D,b,I.length),L=new Ut;return I.forEach((ne,he)=>{L.position.set(ne.x,ne.y,ne.z),L.rotation.set(ne.rx??0,ne.ry??0,ne.rz??0),L.updateMatrix(),O.setMatrixAt(he,L.matrix)}),O.instanceMatrix.needsUpdate=!0,O.receiveShadow=!0,z.add(O),O}function d(z,D,b,I){return h(z,new ei(...D),b,I)}function f(z,D,b,I,O){return h(z,new Ma(D,D,b,10),I,O)}function x(z,D,b){const I=new Kf(new $t().setFromPoints(D),new jf({color:b}));return z.add(I),I}function S(z,D,b,I=!1){const O=[],L=[],ne=Math.max(3,Math.floor((D.width-1)/1.25)),he=Math.max(2,Math.floor((D.depth-1.6)/1.7));for(let W=0;W<ne;W++)for(let me=0;me<he;me++){const Se=-D.width/2+1+W*(D.width-2)/(ne-1),ze=-D.depth/2+1+me*(D.depth-2)/(he-1),Xe=I?.65*(1-Math.abs(Se)/(D.width/2)):0;O.push({x:Se,y:b+.16+Xe,z:ze,rx:I?0:-.12,rz:I?Se<0?.14:-.14:0}),L.push({x:Se,y:b+.08+Xe,z:ze})}d(z,[1.08,.065,1.3],s.solar,O),d(z,[.06,.16,.9],s.steel,L)}function g(z,D,b,I){const O=[-D/2,I,-b/2,D/2,I,-b/2,0,I+.65,-b/2,-D/2,I,b/2,D/2,I,b/2,0,I+.65,b/2],L=new $t;L.setAttribute("position",new Tt(O,3)),L.setIndex([0,2,1,3,4,5,0,3,5,0,5,2,2,5,4,2,4,1,0,1,4,0,4,3]),L.computeVertexNormals(),L.setAttribute("uv",new Tt(new Array(12).fill(0),2)),t.add(L);const ne=new it(L,s.roof);ne.castShadow=!0,z.add(ne)}function m(z,D,b=!1){const I=b?Math.max(2,Math.floor(D.height/1.6)):2,O=[],L=[],ne=Math.max(4,Math.floor(D.width/1.35));for(let W=0;W<I;W++)for(let me=0;me<ne;me++){const Se={x:-D.width/2+.75+me*(D.width-1.5)/(ne-1),y:.7+(W+.6)*(D.height-.6)/I,z:D.depth/2+.045};O.push(Se),L.push({...Se,y:Se.y-.29})}d(z,[b?D.width/(ne+1):.82,b?1.08:.48,.08],s.glass,O),d(z,[b?D.width/(ne+1)+.05:.9,.045,.12],s.white,L);const he=[];for(let W=0;W<Math.floor(D.depth/1.7);W++)he.push({x:D.width/2+.04,y:D.height*.6,z:-D.depth/2+.9+W*1.6,ry:Math.PI/2});d(z,[1.1,.6,.06],s.glass,he)}function C(z,D,b,I){u(z,[b.width,b.height,b.depth],[0,b.height/2+.2,0],b.template==="warehouse"?s.warmWall:s.wall,!0),b.template==="warehouse"?g(z,b.width+.25,b.depth+.2,b.height+.2):(u(z,[b.width+.2,.15,b.depth+.2],[0,b.height+.27,0],s.white),u(z,[b.width-.2,.08,b.depth-.2],[0,b.height+.4,0],s.roof),d(D,[b.width-.9,.22,.54],s.glass,[-b.depth*.24,b.depth*.2].map(L=>({x:0,y:b.height+.55,z:L})))),m(D,b);const O=[];for(let L=0;L<=6;L++)O.push({x:-b.width/2+L*b.width/6,y:b.height/2+.2,z:b.depth/2+.09});d(D,[.075,b.height,.13],s.white,O);for(const L of[-b.width*.25,b.width*.22])u(D,[1.65,1.9,.13],[L,1.17,b.depth/2+.09],s.dark),d(D,[1.5,.045,.15],s.steel,[.5,.9,1.3,1.7].map(ne=>({x:L,y:ne,z:b.depth/2+.18}))),u(D,[2,.12,1],[L,2.2,b.depth/2+.48],s.white),u(D,[2,.1,.9],[L,.22,b.depth/2+.52],s.curb);I?S(D,b,b.height+.45,b.template==="warehouse"):(d(D,[1.3,.4,1],s.steel,[-b.width*.2,b.width*.2].map(L=>({x:L,y:b.height+.65,z:-b.depth*.18}))),f(D,.17,.55,s.steel,[-1.2,0,1.2].map(L=>({x:L,y:b.height+.72,z:b.depth*.26}))))}function E(z,D,b,I){u(z,[b.width,b.height*.66,b.depth],[0,b.height*.33+.2,0],s.wall,!0),u(z,[b.width*.68,b.height*.34,b.depth*.85],[-b.width*.14,b.height*.83+.2,-b.depth*.06],s.white,!0),u(z,[b.width+.15,.12,b.depth+.15],[0,b.height*.66+.28,0],s.white),u(D,[b.width*.3,.08,b.depth*.74],[b.width*.34,b.height*.66+.38,-.15],s.dark),m(D,b,!0),d(D,[.075,b.height*.62,.13],s.white,[-b.width*.4,-b.width*.2,0,b.width*.2,b.width*.4].map(O=>({x:O,y:b.height*.35,z:b.depth/2+.13}))),u(D,[2.3,1.75,.1],[0,1.1,b.depth/2+.15],s.glass),u(D,[3.1,.12,1.2],[0,2.24,b.depth/2+.55],s.white);for(let O=0;O<3;O++)u(D,[3.2+O*.25,.08,.35],[0,.3-O*.06,b.depth/2+.7+O*.34],s.curb);I?S(D,{...b,width:b.width*.61,depth:b.depth*.78},b.height+.3):d(D,[1.5,.3,1.2],s.steel,[-1.6,.5].map(O=>({x:O,y:b.height+.38,z:-.4})))}function y(z,D,b){u(z,[b.width,b.height*.75,b.depth],[0,b.height*.375+.2,0],s.glass,!0),u(z,[b.width+.4,.16,b.depth+.35],[0,b.height*.75+.27,0],s.white),u(z,[b.width*.65,b.height*.25,b.depth*.7],[-b.width*.14,b.height*.875+.2,-b.depth*.12],s.wall,!0),u(z,[b.width*.68,.15,b.depth*.73],[-b.width*.14,b.height+.27,-b.depth*.12],s.white),m(D,{...b,height:b.height*.75},!0),d(D,[.11,b.height*.75,.15],s.white,Array.from({length:9},(I,O)=>({x:-b.width/2+.3+O*(b.width-.6)/8,y:b.height*.375+.2,z:b.depth/2+.14}))),u(D,[4.2,.15,1.6],[0,2.5,b.depth/2+.6],s.white),d(D,[.15,2.3,.15],s.steel,[-1.8,1.8].map(I=>({x:I,y:1.35,z:b.depth/2+1.25}))),u(D,[2.2,2.1,.12],[0,1.25,b.depth/2+.17],s.dark),u(D,[4.9,.12,1.5],[0,.2,b.depth/2+.7],s.curb),d(D,[1.2,.42,.45],s.hedge,[-4,4].map(I=>({x:I,y:.38,z:b.depth/2+.8})))}function U(z,D,b){u(z,[5.5,3.2,6.4],[-3,1.8,-.4],s.wall,!0),u(z,[5.8,.18,6.7],[-3,3.5,-.4],s.white),d(D,[.55,1.45,.1],s.dark,[-4.7,-3.6,-2.5,-1.4].map(I=>({x:I,y:1.75,z:2.85})));for(const I of[-2.6,0,2.6])u(z,[2.7,.22,2],[3,.3,I],s.curb),u(z,[1.7,1.2,1.2],[3,1.03,I],s.steel,!0),d(D,[.09,.95,1.25],s.dark,[-.93,.93].map(O=>({x:3+O,y:1.1,z:I}))),f(D,.12,.64,s.white,[-.48,0,.48].map(O=>({x:3+O,y:1.94,z:I}))),f(D,.19,.08,s.steel,[-.48,0,.48].flatMap(O=>[1.75,1.9,2.05].map(L=>({x:3+O,y:L,z:I}))));d(D,[.09,2.6,.09],s.steel,[-3.8,3.8].map(I=>({x:3,y:1.58,z:I}))),u(D,[.08,.07,7.6],[3,2.8,0],s.mint),x(D,[new k(3,2.7,-3.8),new k(-.15,2.7,-3.8),new k(-.15,.5,-3.8)],7443880),u(D,[1.2,.72,.75],[-4.5,3.9,-1.4],s.steel),x(D,[new k(.6,.45,4.1),new k(5.9,.45,4.1),new k(5.9,.45,-4.1)],10599105)}function N(z,D,b){for(const I of[-4.4,-1.65,1.1])u(z,[2.25,2.15,2.2],[I,1.33,-1.65],s.white,!0),u(z,[2.3,.14,2.3],[I,2.49,-1.65],s.dark),d(D,[.13,1.55,.07],s.steel,[-.8,-.4,0,.4,.8].map(O=>({x:I+O,y:1.25,z:-.49}))),u(D,[.7,.06,.08],[I,2.08,-.43],s.mint);u(z,[1.5,1.6,2.1],[4.05,1.05,-1.65],s.steel,!0),d(D,[.15,2.7,.15],s.steel,[-5,5].map(I=>({x:I,y:1.55,z:2}))),u(z,[11.25,.14,2.4],[0,2.96,2],s.roof),d(D,[1.07,.07,2.08],s.solar,Array.from({length:9},(I,O)=>({x:-4.65+O*1.16,y:3.09,z:2})));for(const I of[-3,0,3])u(D,[.32,1.15,.36],[I,.81,.94],s.white),u(D,[.22,.24,.05],[I,1.07,1.15],s.glass),x(D,[new k(I+.22,1.2,1),new k(I+.5,.6,1.25),new k(I+.16,.7,1.25)],5270395),d(D,[.035,.015,2.2],s.asphaltMark,[{x:I-1.1,y:.135,z:2.1},{x:I+1.1,y:.135,z:2.1}]);F(D,-3,2.2,s.steel),F(D,3,2.2,s.white)}function F(z,D,b,I){u(z,[1.05,.34,1.9],[D,.42,b],I),u(z,[.88,.29,.95],[D,.72,b-.1],s.glass),d(z,[.15,.25,.35],s.dark,[-.51,.51].flatMap(O=>[-.6,.6].map(L=>({x:D+O,y:.27,z:b+L}))))}function B(z){z.updateMatrixWorld(!0);const D=z.matrixWorld.clone().invert(),b=new Map;z.traverse(I=>{if(!(I instanceof it)||I.material instanceof Array||I.material.transparent||I.userData.assetId)return;let O=I.parent;for(;O&&O!==z;){if(O.userData.keepSeparate)return;O=O.parent}const L=`${I.material.uuid}:${I.castShadow}`;let ne=b.get(L);ne||(ne={material:I.material,geometries:[],meshes:[],cast:I.castShadow},b.set(L,ne));const he=D.clone().multiply(I.matrixWorld);if(I instanceof gc){const W=new ht;for(let me=0;me<I.count;me++)I.getMatrixAt(me,W),ne.geometries.push(I.geometry.clone().applyMatrix4(he.clone().multiply(W)))}else ne.geometries.push(I.geometry.clone().applyMatrix4(he));ne.meshes.push(I)}),b.forEach(I=>{if(I.meshes.length<2){I.geometries.forEach(ne=>ne.dispose());return}const O=CS(I.geometries);if(I.geometries.forEach(ne=>ne.dispose()),!O)return;I.meshes.forEach(ne=>ne.removeFromParent());const L=new it(O,I.material);L.castShadow=I.cast,L.receiveShadow=!0,z.add(L)})}function R(z){const D=new tn;D.position.set(z.x,0,z.z),D.userData.objectId=z.id;const b=[],I=sn.find(W=>W.id===z.zoneId);u(D,[I.width-.15,.07,I.depth-.15],[0,.075,0],s.yard);const O=Bn.filter(W=>W.objectId===z.id);for(const W of O){const me=new tn;me.position.set(W.x-z.x,W.elevation??0,W.z-z.z),me.rotation.y=W.rotationY??0,me.userData.buildingId=W.id,me.userData.keepSeparate=!0,me.userData.assetIds=Dn.filter(ue=>ue.buildingId===W.id).map(ue=>ue.id),D.add(me);const Se=new tn;Se.userData.keepSeparate=!0,me.add(Se),b.push(Se);const ze=Math.min(W.width+1.5,2*(I.width/2-Math.abs(W.x-z.x))),Xe=Math.min(W.depth+1.5,2*(I.depth/2-Math.abs(W.z-z.z))),le=new it(new us(ze,Xe),c);if(le.rotation.x=-Math.PI/2,le.position.y=.118,me.add(le),W.template==="substation")U(me,Se);else if(W.template==="storage")N(me,Se);else{u(me,[W.width+.3,.12,W.depth+.3],[0,.17,0],s.curb);const ue=Dn.some(be=>be.kind==="solar"&&be.buildingId===W.id);W.template==="research"?E(me,Se,W,ue):W.template==="office"?y(me,Se,W):W.template==="utility"?(u(me,[W.width,W.height,W.depth],[0,W.height/2+.2,0],s.wall,!0),u(me,[W.width+.2,.1,W.depth+.2],[0,W.height+.25,0],s.roof),m(Se,W)):C(me,Se,W,ue)}if(Dn.some(ue=>ue.kind==="meter"&&ue.buildingId===W.id)){const ue=W.width/2-.55,be=Math.min(W.depth/2+.4,I.depth/2-(W.z-z.z)-.3),Be=u(Se,[.5,1.1,.3],[ue,.8,be],s.white);Be.userData.assetId=Dn.find(de=>de.kind==="meter"&&de.buildingId===W.id).id,u(Se,[.3,.22,.035],[ue,.97,be+.17],s.glass),u(Se,[.27,.05,.035],[ue,.6,be+.18],z.health==="normal"?s.mint:s.gold)}Dn.some(ue=>ue.kind==="heat"&&ue.buildingId===W.id)&&(d(Se,[1,.65,.65],s.steel,[-1.4,1.4].map(ue=>({x:ue,y:W.height+.58,z:0}))),x(Se,[new k(-1.4,W.height+.8,0),new k(1.4,W.height+.8,0)],14596470)),B(Se),B(me)}const L=O.find(W=>W.primary),ne=new k(L.x,L.height+(L.template==="warehouse"?1.2:1),L.z),he=new it(new uu(1.05,1.28,40),new kt({color:Sd[z.area],transparent:!0,opacity:0,depthWrite:!1,side:Sn}));return he.rotation.x=-Math.PI/2,he.position.set(L.x-z.x,.125,L.z-z.z),D.add(he),B(D),{group:D,details:b,halo:he,labelPosition:ne}}function A(z,D){const b=Ws.map(L=>({...L,width:L.width+(D?.7:0),depth:L.depth+(D?.7:0)})),I=[...new Set(b.flatMap(L=>[L.x-L.width/2,L.x+L.width/2]))].sort((L,ne)=>L-ne),O=[...new Set(b.flatMap(L=>[L.z-L.depth/2,L.z+L.depth/2]))].sort((L,ne)=>L-ne);for(let L=0;L<I.length-1;L++)for(let ne=0;ne<O.length-1;ne++){const he=(I[L]+I[L+1])/2,W=(O[ne]+O[ne+1])/2;b.some(me=>Math.abs(he-me.x)<me.width/2&&Math.abs(W-me.z)<me.depth/2)&&u(z,[I[L+1]-I[L],D?.07:.02,O[ne+1]-O[ne]],[he,D?.06:.11,W],D?s.curb:s.road)}}function H(z){const D=new tn;z.add(D),u(D,[77,.3,65],[.5,-.18,.5],s.dark),u(D,[75,.055,63],[.5,.002,.5],s.yard),A(D,!0),A(D,!1);const b=[];for(const W of Ws){const me=W.horizontal?W.width:W.depth;for(let Se=-me/2+1;Se<me/2-1;Se+=2.8){const ze=W.x+(W.horizontal?Se:0),Xe=W.z+(W.horizontal?0:Se);Ws.some(le=>le.horizontal!==W.horizontal&&Math.abs(ze-le.x)<le.width/2+.8&&Math.abs(Xe-le.z)<le.depth/2+.8)||b.push({x:ze,y:.132,z:Xe,ry:W.horizontal?0:Math.PI/2})}}d(D,[1.25,.012,.045],s.asphaltMark,b);const I=[];for(const W of[-18,-2,16])for(let me=0;me<6;me++)I.push({x:W-1.5+me*.6,y:.134,z:-4.7});d(D,[.32,.012,1.1],s.asphaltMark,I);const O=[];for(let W=-37;W<=38;W+=2.8)O.push({x:W,y:.8,z:-31},{x:W,y:.8,z:32});for(let W=-31;W<=32;W+=2.8)O.push({x:38,y:.8,z:W}),(W<ln.z-ln.width/2||W>ln.z+ln.width/2)&&O.push({x:-37,y:.8,z:W});d(D,[.075,1.4,.075],s.steel,O);for(const W of[.65,1.25]){u(D,[75,.04,.04],[.5,W,-31],s.steel),u(D,[75,.04,.04],[.5,W,32],s.steel),u(D,[.04,.04,63],[38,W,.5],s.steel);const me=[[-31,ln.z-ln.width/2],[ln.z+ln.width/2,32]];for(const[Se,ze]of me)u(D,[.04,.04,ze-Se],[-37,W,(Se+ze)/2],s.steel)}d(D,[.26,3.5,.26],s.white,[-5.8/2,ln.width/2].map(W=>({x:-36.7,y:1.87,z:ln.z+W}))),u(D,[.7,.32,ln.width+.5],[-36.7,3.5,ln.z],s.white),u(D,[.73,.06,ln.width+.5],[-36.7,3.7,ln.z],s.cyan),u(D,[2.5,1.9,2.8],[-35,1.05,4.6],s.white,!0),u(D,[.04,.7,1.8],[-33.72,1.1,4.6],s.glass),u(D,[2.8,.14,3.1],[-35,2.06,4.6],s.roof),u(D,[.09,.08,2],[-34.6,1,-2.8],s.gold);const L=[];for(let W=-33;W<35;W+=5.6)L.push({x:W,y:.8,z:-30},{x:W+.7,y:.8,z:31});for(const W of sn)L.push({x:W.x-W.width/2+.65,y:.8,z:W.z+W.depth/2-.8},{x:W.x+W.width/2-.65,y:.8,z:W.z+W.depth/2-.8}),u(D,[1.5,.25,.45],[W.x-W.width/2+1.2,.25,W.z+W.depth/2-1.8],s.hedge);f(D,.1,1.3,s.trunk,L),h(D,new na(.72,1),s.leaf,L.map(W=>({...W,y:2.03}))),h(D,new na(.5,1),s.leaf2,L.map(W=>({...W,x:W.x+.35,y:1.72,z:W.z+.2})));const ne=[];for(const W of[-31,-23,-13,-6,5,12,23,32])ne.push({x:W,y:1.45,z:1.85});d(D,[.095,2.65,.095],s.steel,ne),d(D,[.5,.12,.28],s.cyan,ne.map(W=>({...W,y:2.82})));const he=[];for(let W=0;W<6;W++)he.push({x:21+W*2,y:.137,z:-22.5});return d(D,[.05,.012,2.4],s.asphaltMark,he),F(D,22,-22.5,s.white),F(D,26,-22.5,s.steel),F(D,30,-22.5,s.white),u(D,[3.2,.95,1.35],[-29,.74,-1.5],s.white),u(D,[.95,.8,1.3],[-26.96,.68,-1.5],s.steel),d(D,[.34,.35,.18],s.dark,[-29.9,-27.9,-26.85].flatMap(W=>[-.69,.69].map(me=>({x:W,y:.34,z:-1.5+me})))),B(D),D}function K(z){const D=new tn;z.add(D);const b=new Map;for(const I of sn){const O=new tn;D.add(O);const L=Sd[I.kind],ne=new rp(I.polygon.map(([Se,ze])=>new Ee(Se,-ze))),he=new kt({color:L,opacity:.07,transparent:!0,depthWrite:!1,side:Sn}),W=new it(new hu(ne),he);W.rotation.x=-Math.PI/2,W.position.y=.126,O.add(W);const me=x(O,[...I.polygon,I.polygon[0]].map(([Se,ze])=>new k(Se,.145,ze)),L);b.set(I.id,{group:O,fill:he,line:me.material})}return x(D,[...md,md[0]].map(([I,O])=>new k(I,.15,O)),8377831),{root:D,zones:b}}return{createObject:R,addEnvironment:H,addBoundaries:K,textures:n,resources:t,materials:[...Object.values(s),c],unitBox:e,roadMaterial:s.road}}function IS(n,e){const t=pS();if(t.length)throw new Error(t.join(`
`));const i=new ru;i.background=new tt(596266),i.fog=new su(596266,.0024);const s=new hn(42,n.clientWidth/Math.max(1,n.clientHeight),.2,400),r=new xp({antialias:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio||1,n.clientWidth<650?1.25:1.5)),r.setSize(n.clientWidth,n.clientHeight),r.outputColorSpace=Wt,r.toneMapping=Yc,r.toneMappingExposure=1.25,r.shadowMap.enabled=!0,r.shadowMap.autoUpdate=!1,r.shadowMap.type=Wc;const o=r.domElement;o.className="park-canvas",n.appendChild(o);const a=new Sc(r),l=new dS,c=a.fromScene(l,.04);i.environment=c.texture,i.environmentIntensity=.36,l.dispose(),a.dispose();const u=new Mp(s,o);u.enableDamping=!0,u.dampingFactor=.12,u.minDistance=18,u.maxDistance=200,u.minPolarAngle=.25,u.maxPolarAngle=Math.PI*.43,i.add(new up(14479359,3491659,2.1));const h=new ia(16773078,3);h.position.set(-42,64,30),h.castShadow=!0,h.shadow.mapSize.set(1536,1536),h.shadow.camera.left=-55,h.shadow.camera.right=55,h.shadow.camera.top=55,h.shadow.camera.bottom=-55,h.shadow.camera.far=150,h.shadow.normalBias=.055,i.add(h);const d=new ia(10210277,1.15);d.position.set(34,22,-30),i.add(d);const f=PS();f.addEnvironment(i);const x=f.addBoundaries(i),S=new Map,g=new Map;for(const T of Pn){const _=f.createObject(T);S.set(T.id,_),i.add(_.group);const p=document.createElement("button");p.type="button",p.className=`park-label park-label--${T.area}`,p.setAttribute("aria-label",`定位 ${T.name}`);const V=document.createElement("span");V.className="park-label__dot";const G=document.createElement("span");G.textContent=T.name,p.append(V,G),p.addEventListener("click",()=>e(T.id)),n.appendChild(p),g.set(T.id,p)}const m=new kt,C=new ei(1,1,1),E=Bn.map(T=>{const _=new it(C,m);return _.scale.set(T.width,T.height+1,T.depth),_.position.set(T.x,(T.elevation??0)+(T.height+1)/2,T.z),_.rotation.y=T.rotationY??0,_.userData.objectId=T.objectId,_.updateMatrixWorld(!0),_}),y=new fp,U=new Ee,N=new k(40,43,52).normalize();let F=null,B="all",R=!0,A=!1,H=0,K=0,z=null,D=!1,b=null,I=n.clientWidth<650,O=null;function L(){!A&&!H&&(H=requestAnimationFrame(Xe))}function ne(T,_=!0){const p=new zi;for(const Y of T)p.expandByPoint(new k(Y.x-Y.width/2,0,Y.z-Y.depth/2)),p.expandByPoint(new k(Y.x+Y.width/2,5,Y.z+Y.depth/2));const V=p.getCenter(new k);V.y=T.length>2?-3:1;const G=new k(N.z,0,-N.x).normalize(),q=new k().crossVectors(N,G).normalize(),$=Math.tan(Vs.degToRad(s.fov/2)),ae=$*s.aspect;let Z=22;for(const Y of[p.min.x,p.max.x])for(const pe of[p.min.z,p.max.z]){const w=new k(Y,0,pe).sub(V),M=w.dot(N);Z=Math.max(Z,M+Math.abs(w.dot(G))/(ae*.88),M+Math.abs(w.dot(q))/($*(I?.67:.76)))}Z=Math.min(195,Z+6);const ie=V.clone().addScaledVector(N,Z);_&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches?O={start:performance.now(),fromPosition:s.position.clone(),toPosition:ie,fromTarget:u.target.clone(),toTarget:V}:(O=null,s.position.copy(ie),u.target.copy(V),u.update()),L()}function he(T=!0){const _=sn.filter(p=>B==="all"||p.kind===B);B==="public"&&_.push(...Ws),ne(_,T)}function W(){x.root.visible=R;for(const T of sn){const _=x.zones.get(T.id),p=T.objectId===F,V=B==="all"||T.kind===B;_.fill.opacity=p?.15:V?.065:.018,_.line.opacity=V?1:.3,_.line.transparent=!0}f.roadMaterial.color.setHex(B==="public"&&R?5464156:2306878)}function me(){return E.filter(T=>B==="all"||Pn.find(_=>_.id===T.userData.objectId)?.area===B)}function Se(T,_){const p=o.getBoundingClientRect();return U.set((T-p.left)/p.width*2-1,-(_-p.top)/p.height*2+1),y.setFromCamera(U,s),y.intersectObjects(me(),!1)[0]?.object.userData.objectId}function ze(){const T=[];let _=0;const p=Pn.filter(V=>B==="all"||V.area===B).sort((V,G)=>+(G.id===F)-+(V.id===F)||+(G.health==="warning")-+(V.health==="warning")||s.position.distanceToSquared(S.get(V.id).labelPosition)-s.position.distanceToSquared(S.get(G.id).labelPosition));g.forEach(V=>{V.style.display="none"});for(const V of p){const G=S.get(V.id),q=g.get(V.id),$=V.id===F;if(I&&_>=3&&!$)continue;const ae=G.labelPosition.clone().project(s);if(ae.z<-1||ae.z>1||!$&&(Math.abs(ae.x)>1.02||Math.abs(ae.y)>1.02))continue;const Z=G.labelPosition.clone().sub(s.position),ie=Z.length();if(y.set(s.position,Z.normalize()),!$&&y.intersectObjects(me().filter(ee=>ee.userData.objectId!==V.id),!1).some(ee=>ee.distance<ie-.5))continue;q.classList.toggle("is-selected",$),q.style.display="",q.style.visibility="hidden";const Y=q.offsetWidth,pe=q.offsetHeight,w=n.clientWidth,M=n.clientHeight,X=Vs.clamp((ae.x*.5+.5)*w,Y/2+10,w-Y/2-10),te=Vs.clamp((-ae.y*.5+.5)*M,I?168:130,M-(I&&F?170:65));let ce;for(const ee of[0,-28,28,-56,56]){const Me=te+ee;if(!(Me<125||Me>M-65)&&!T.some(ge=>Math.abs(X-ge.x)<(Y+ge.w)/2+5&&Math.abs(Me-ge.y)<(pe+ge.h)/2+4)){ce=Me;break}}if(ce===void 0){q.style.display="none";continue}q.style.left=`${X}px`,q.style.top=`${ce}px`,q.style.visibility="visible",T.push({x:X,y:ce,w:Y,h:pe}),_++}o.dataset.visibleLabels=String(_)}function Xe(T){if(H=0,A)return;if(O){const V=Math.min(1,(T-O.start)/560),G=1-Math.pow(1-V,3);s.position.lerpVectors(O.fromPosition,O.toPosition,G),u.target.lerpVectors(O.fromTarget,O.toTarget,G),V===1&&(O=null)}const _=u.update();for(const[V,G]of S){G.halo.material.opacity=V===F?.48:0;const q=s.position.distanceTo(G.labelPosition)<(I?220:155);G.details.forEach($=>{$.visible=q})}b&&!D&&(o.style.cursor=Se(b.x,b.y)?"pointer":"grab",b=null);const p=performance.now();r.render(i,s),ze(),K++,o.dataset.drawCalls=String(r.info.render.calls),o.dataset.triangles=String(r.info.render.triangles),o.dataset.geometries=String(r.info.memory.geometries),o.dataset.textures=String(r.info.memory.textures),o.dataset.renderCount=String(K),o.dataset.renderMs=(performance.now()-p).toFixed(2),(O||_)&&L()}function le(T){z={x:T.clientX,y:T.clientY},D=!1,O=null}function ue(T){const _=z;if(z=null,D=!1,!_||Math.hypot(T.clientX-_.x,T.clientY-_.y)>6)return;const p=Se(T.clientX,T.clientY);p&&e(p)}function be(T){D=!!(z&&Math.hypot(T.clientX-z.x,T.clientY-z.y)>6),b={x:T.clientX,y:T.clientY},L()}function Be(){z=null,D=!1,b=null}u.addEventListener("change",L),o.addEventListener("pointerdown",le),o.addEventListener("pointerup",ue),o.addEventListener("pointermove",be),o.addEventListener("pointercancel",Be);const de=new ResizeObserver(()=>{if(A)return;const T=Math.max(1,n.clientWidth),_=Math.max(1,n.clientHeight);s.aspect=T/_,s.updateProjectionMatrix(),r.setSize(T,_),r.setPixelRatio(Math.min(window.devicePixelRatio||1,T<650?1.25:1.5)),I=T<650,he(!1),L()});return de.observe(n),he(!1),W(),r.shadowMap.needsUpdate=!0,L(),{select(T,_=!1){if(F=T,W(),T&&_){const p=sn.find(V=>V.objectId===T);p&&ne([p])}L()},setFilter(T){B=T;for(const _ of Pn)S.get(_.id).group.visible=T==="all"||_.area===T;W(),r.shadowMap.needsUpdate=!0,he(),L()},setBoundaries(T){R=T,W(),L()},reset(){he(),L()},dispose(){A=!0,cancelAnimationFrame(H),de.disconnect(),u.removeEventListener("change",L),u.dispose(),o.removeEventListener("pointerdown",le),o.removeEventListener("pointerup",ue),o.removeEventListener("pointermove",be),o.removeEventListener("pointercancel",Be),g.forEach(p=>p.remove());const T=new Set([...f.resources,C]),_=new Set([...f.materials,m]);i.traverse(p=>{(p instanceof it||p instanceof Kf)&&(T.add(p.geometry),(Array.isArray(p.material)?p.material:[p.material]).forEach(V=>_.add(V)))}),T.forEach(p=>p.dispose()),_.forEach(p=>p.dispose()),f.textures.forEach(p=>p.dispose()),c.dispose(),h.shadow.dispose(),r.dispose(),o.remove()}}}const DS=da({__name:"ParkCanvas",props:{selectedId:{},filter:{},boundaries:{type:Boolean}},emits:["select"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=At(null);let o=null;pa(()=>{r.value&&(o=IS(r.value,l=>s("select",l)),o.setFilter(i.filter),o.setBoundaries(i.boundaries),o.select(i.selectedId,!!i.selectedId))}),xr(()=>[i.selectedId,i.filter],([l,c],[u,h])=>{c!==h&&o?.setFilter(c),o?.select(l,!!(l&&(l!==u||c!==h)))}),xr(()=>i.boundaries,l=>o?.setBoundaries(l)),ma(()=>o?.dispose());function a(){o?.reset()}return e({resetView:a}),(l,c)=>(ke(),Ve("div",{ref_key:"host",ref:r,class:"park-scene","aria-label":"可旋转的三维园区示意场景"},null,512))}});function LS(n,e,t,i){const s=new ru;s.background=new tt(597037);const r=new hn(40,1,.1,250),o=new xp({antialias:!0,powerPreference:"high-performance"});o.setPixelRatio(Math.min(devicePixelRatio,1.5)),o.outputColorSpace=Wt,o.toneMapping=Yc,o.toneMappingExposure=1.15,o.shadowMap.enabled=!0,o.shadowMap.type=Wc,o.shadowMap.autoUpdate=!1;const a=o.domElement;a.className="interior-canvas",n.appendChild(a);const l=new Mp(r,a);l.enableDamping=!0,l.dampingFactor=.13,l.minDistance=6,l.maxDistance=110,l.maxPolarAngle=Math.PI*.46,l.minPolarAngle=.18,s.add(new up(14808319,3756642,2.9));const c=new ia(16777215,3.4);c.position.set(-15,25,22),c.castShadow=!0,c.shadow.mapSize.set(1024,1024),Object.assign(c.shadow.camera,{left:-18,right:18,top:18,bottom:-18,far:65}),c.shadow.normalBias=.04,s.add(c);const u=new ia(7849702,1.1);u.position.set(20,15,-12),s.add(u);const h={white:new St({color:13952490,roughness:.6}),steel:new St({color:7838378,metalness:.55,roughness:.4}),blue:new St({color:2451073,roughness:.55}),dark:new St({color:2112590,roughness:.7}),glass:new St({color:6863049,transparent:!0,opacity:.26,metalness:.15,roughness:.2}),gold:new St({color:14987354,metalness:.35,roughness:.5}),green:new St({color:3904646,roughness:.7}),floor:new St({color:4810103,roughness:.95}),yellow:new kt({color:15255662}),mint:new kt({color:6022072}),screen:new kt({color:5819130}),gray:new kt({color:8624552})},d=new Set,f=new Set,x=new Set,S=new ei(1,1,1);d.add(S);function g(_,p,V,G=h.white){const q=new it(S,G);return q.scale.set(p[0],p[1],p[2]),q.position.set(V[0],V[1],V[2]),q.castShadow=!0,q.receiveShadow=!0,_.add(q),q}function m(_,p,V,G,q=h.steel,$="y"){const ae=new Ma(p,p,V,12);d.add(ae);const Z=new it(ae,q);return Z.position.set(G[0],G[1],G[2]),$==="x"&&(Z.rotation.z=Math.PI/2),$==="z"&&(Z.rotation.x=Math.PI/2),Z.castShadow=!0,_.add(Z),Z}function C(_,p,V=4968146,G=.055){const q=new Qf(p.map(Z=>new k(Z[0],Z[1],Z[2]))),$=new du(q,16,G,6,!1);d.add($);const ae=new St({color:V,roughness:.6});f.add(ae),_.add(new it($,ae))}function E(_,p,V,G,q){const $=document.createElement("canvas");$.width=512,$.height=64;const ae=$.getContext("2d");ae.fillStyle="#15344a",ae.fillRect(0,0,512,64),ae.fillStyle="#b8deea",ae.font="30px Microsoft YaHei",ae.textAlign="center",ae.fillText(p,256,44);const Z=new _c($);Z.colorSpace=Wt,x.add(Z);const ie=new kt({map:Z});f.add(ie);const Y=new us(5.5,.68);d.add(Y);const pe=new it(Y,ie);pe.position.set(V,G,q),_.add(pe)}const y=new tn;s.add(y),g(y,[25,.22,18],[0,-.18,0],h.floor),g(y,[25,.3,18],[0,-.42,0],h.dark),g(y,[25,3.3,.18],[0,1.5,-8.9],h.white),g(y,[.18,3.3,18],[-12.45,1.5,0],h.white);for(const _ of[-12,-6,0,6,12])g(y,[.18,4,.18],[_,1.9,-8.6],h.steel),g(y,[.18,4,.18],[_,1.9,8.6],h.steel);const U=new tn;y.add(U),g(U,[25,.16,18],[0,4.1,0],h.white),U.visible=!1;const N=new tn;y.add(N);for(const _ of[-12,-6,0,6,12])g(N,[.15,.2,18],[_,3.9,0],h.steel);N.visible=!1;for(const _ of[-5.1,3.4])g(y,[.055,.025,16],[_,.01,0],h.yellow);for(let _=-7;_<=7;_+=2)g(y,[.9,.025,.075],[-.7,.015,_],h.yellow);E(y,t==="factory"?"生产 / 装配 · 公辅 · 计量":t==="warehouse"?"常温仓储 · 作业通道 · 物流计量":t==="research"?"测试 / 研发 · 机电保障":t==="substation"?"进线计量 → 变压器 → 企业 / 公共出线":"电池簇 · PCS / 温控 · 光伏 / 充电",0,2.8,-8.78),t==="factory"&&(C(y,[[-10,3.6,-8],[8,3.6,-8],[8,3.6,7]],6278058,.07),C(y,[[7.5,.3,-8],[7.5,.3,7]],15317094,.07));const F=new tn;s.add(F);const B=new Map,R=new Map,A=new Map,H=new Map,K=[],z=new kt;function D(_){const p=new tn;F.add(p),p.position.set(_.x,0,_.z),p.userData.assetId=_.id,B.set(_.id,p);const V=Math.min(1.15,_.width/3.8,_.depth/2.3);p.scale.setScalar(Math.max(.6,V));const G=_.deviceType;if(G==="racks"&&p.scale.set(Math.min(1.8,_.width/3.8),1,Math.min(1.8,_.depth/2.3)),g(p,[3.7,.12,2.3],[0,.06,0],h.dark),["cnc","smt","molding"].includes(G))g(p,[3.1,.45,1.8],[0,.38,0],h.white),g(p,[.6,1.8,1.8],[-1.3,1.5,0],h.blue),g(p,[.35,1.8,1.8],[1.3,1.5,0],h.white),g(p,[2.2,.2,1.8],[.1,2.34,0],h.white),g(p,[2.15,1.5,.065],[.08,1.49,.86],h.glass),g(p,[.95,.08,.6],[0,.95,0],G==="smt"?h.green:h.steel),m(p,.1,.7,[0,1.65,0],h.steel),g(p,[.45,.6,.12],[1.5,1.65,1],h.dark),g(p,[.32,.32,.025],[1.5,1.77,1.07],h.screen),G==="molding"&&(m(p,.26,2.3,[-.6,1.25,-.25],h.steel,"x"),m(p,.38,.65,[-.6,2.35,-.25],h.gold));else if(["compressor","dryer","ups","meter","inverter"].includes(G)){const Y=G==="meter"?1.2:2.2;g(p,[Y,2.3,1.6],[0,1.25,0],h.white),g(p,[Y-.15,1.4,.04],[0,1.1,.82],h.blue);for(let pe=.55;pe<1.65;pe+=.16)g(p,[Y-.4,.05,.07],[0,pe,.85],h.steel);g(p,[.45,.36,.07],[.3,2.02,.85],h.screen),m(p,.07,.16,[-.25,2.02,.85],h.mint,"z"),G==="compressor"&&(m(p,.4,1.8,[1.3,1.1,-.1],h.steel),C(p,[[.8,1.5,0],[1.3,1.5,.5],[1.3,2.15,.5]]))}else if(G==="pump"||G==="heat"){if(m(p,.46,1.35,[-.7,.65,0],h.blue,"x"),m(p,.5,.5,[.5,.65,0],h.steel,"z"),C(p,[[.5,.7,.3],[1.1,.7,.3],[1.1,1.45,.3]],5160396,.1),G==="heat")for(let Y=0;Y<10;Y++)g(p,[.08,1.6,1.1],[Y*.12-.5,1.25,-.45],h.steel)}else if(["fan","chiller","ahu"].includes(G)){g(p,[3.1,1.8,1.65],[0,1.1,0],h.white);for(const Y of[-.8,.8]){m(p,.55,.15,[Y,1.25,.92],h.dark,"z");for(const pe of[0,Math.PI/2]){const w=g(p,[.9,.08,.06],[Y,1.25,1.02],h.steel);w.rotation.z=pe}}if(G==="chiller")for(const Y of[-.8,.8])m(p,.55,.12,[Y,2.1,0],h.dark),g(p,[.8,.04,.06],[Y,2.18,0],h.steel);G==="ahu"&&g(p,[1.8,.7,.8],[0,2.3,-.5],h.steel)}else if(G==="racks")for(let Y=0;Y<3;Y++){const pe=Y*.7-.7;for(const w of[-1.6,0,1.6])g(p,[.075,2.8,.075],[w,1.45,pe],h.blue);for(const w of[.6,1.4,2.2]){g(p,[3.25,.08,.5],[0,w,pe],h.gold);for(const M of[-.85,.85])g(p,[1.2,.55,.4],[M,w+.32,pe],h.white)}}else if(G==="conveyor"||G==="assembly"||G==="reflow"){g(p,[3.2,.22,1.1],[0,1,0],h.steel);for(const Y of[-1.2,1.2])g(p,[.12,.85,.75],[Y,.5,0],h.blue);for(let Y=-1.3;Y<1.4;Y+=.25)m(p,.055,1,[Y,1.17,0],h.dark,"z");for(const Y of[-.8,.1,.9])g(p,[.45,.07,.5],[Y,1.25,0],h.green);if(G==="reflow"){g(p,[2.7,.9,.75],[0,1.72,0],h.white);for(const Y of[-.9,0,.9])g(p,[.65,.08,.6],[Y,2.2,0],h.gold),m(p,.07,.4,[Y,2.4,-.2])}else G==="assembly"&&(g(p,[1,.4,.4],[-.4,1.5,-.35],h.white),g(p,[.6,.5,.06],[.9,1.6,-.3],h.screen))}else if(G==="forklift"){g(p,[1.5,.85,1.1],[-.5,.6,0],h.gold);for(const Y of[-1,.1])for(const pe of[-.6,.6])m(p,.25,.16,[Y,.35,pe],h.dark,"z");for(const Y of[-.4,.4])g(p,[.07,2.3,.07],[.55,1.3,Y],h.steel),g(p,[1.2,.08,.12],[1,.26,Y],h.steel);g(p,[.6,.85,.6],[-.8,1.36,0],h.glass),g(p,[.7,1.5,.55],[1.55,.9,-.65],h.white),C(p,[[1.55,1.25,-.3],[1.4,.3,-.15],[.1,.3,.3]],1121834,.05)}else if(G==="chamber"||G==="burnin"||G==="battery"||G==="pcs"){g(p,[2.8,.15,1.65],[0,.2,0],h.white),g(p,[2.8,.15,1.65],[0,2.75,0],h.white);for(const Y of[-1.35,1.35])g(p,[.14,2.55,1.65],[Y,1.45,0],h.white);g(p,[2.8,2.55,.1],[0,1.45,-.77],h.blue);for(let Y=.5;Y<2.5;Y+=.4)if(g(p,[2.5,.07,1.35],[0,Y,0],h.steel),G!=="chamber")for(const pe of[-.75,.75])g(p,[1.05,.25,1.1],[pe,Y+.16,0],h.dark),g(p,[.55,.045,.025],[pe,Y+.15,.57],h.gold);G==="chamber"&&g(p,[2.4,2.2,.035],[0,1.5,.8],h.glass),g(p,[.5,.4,.06],[1.2,2.5,.86],h.screen),(G==="battery"||G==="pcs")&&C(p,[[-1.1,.45,.65],[-1.1,2.55,.65],[1.1,2.55,.65]],15053918,.035)}else if(G==="transformer"){g(p,[2.1,1.65,1.2],[0,1.05,0],h.steel);for(const Y of[-1.25,1.25])for(let pe=-.65;pe<.7;pe+=.18)g(p,[.24,1.5,.09],[Y,1,pe],h.white);for(const Y of[-.7,0,.7]){m(p,.1,.85,[Y,2.25,0]);for(let pe=1.98;pe<2.65;pe+=.15)m(p,.18,.06,[Y,pe,0],h.white)}}else if(G==="switchgear")for(const Y of[-1,0,1])g(p,[.9,2.65,1.2],[Y,1.45,0],h.white),g(p,[.65,1.7,.04],[Y,1.35,.62],h.blue),g(p,[.36,.32,.045],[Y,2.38,.65],h.screen),m(p,.07,.07,[Y,1.4,.68],h.gold,"z");else if(G==="charger")g(p,[.8,2.1,.5],[0,1.2,0],h.white),g(p,[.55,.52,.03],[0,1.85,.27],h.screen),C(p,[[.5,1.4,0],[1,.3,0],[.8,.4,.8],[.4,1,.3]],1121575,.045),g(p,[1.15,.4,1.8],[-1,.55,-.1],h.blue),g(p,[.9,.38,.85],[-1,.92,-.15],h.glass);else if(G==="lighting")for(const Y of[-1.2,0,1.2])g(p,[.06,2.5,.06],[Y,1.4,-.7],h.steel),g(p,[.85,.12,.5],[Y,2.75,-.4],h.white),g(p,[.75,.025,.4],[Y,2.67,-.4],h.screen);const q=new kt({color:_.state==="warning"?15251541:_.state==="delayed"?9414324:5359339,transparent:!0,opacity:.32,side:Sn,depthWrite:!1});f.add(q);const $=new us(_.width+.18,_.depth+.18);d.add($);const ae=new it($,q);ae.rotation.x=-Math.PI/2,ae.position.set(_.x,.012,_.z),s.add(ae),R.set(_.id,ae);const Z=new it(S,z);Z.position.set(_.x,1.3,_.z),Z.scale.set(Math.min(_.width,4.4),2.8,Math.min(_.depth,2.8)),Z.userData.assetId=_.id,Z.updateMatrixWorld(),K.push(Z),A.set(_.id,new k(_.x,3.2*p.scale.y,_.z));const ie=document.createElement("button");ie.className="interior-label "+_.state,ie.textContent=_.name,ie.setAttribute("aria-label","定位设备 "+_.name),ie.onclick=()=>i(_.id),n.appendChild(ie),H.set(_.id,ie)}e.forEach(D);let b=!1,I=0,O=null,L=1,ne=0,he=null;const W=new fp,me=new Ee;let Se=null;function ze(){!b&&!I&&(I=requestAnimationFrame(ue))}function Xe(_=new k(0,0,0),p=!1){const V=new k(25,28,34).normalize(),G=p?18:Math.max(38,42/Math.max(.35,r.aspect)),q=_.clone().addScaledVector(V,G);matchMedia("(prefers-reduced-motion: reduce)").matches?(r.position.copy(q),l.target.copy(_),l.update()):he={start:performance.now(),from:r.position.clone(),to:q,fromTarget:l.target.clone(),target:_},ze()}function le(){const _=[],p=n.clientWidth<650;let V=0;const G=e.filter(q=>q.floor===L).sort((q,$)=>+($.id===O)-+(q.id===O)||+($.state==="warning")-+(q.state==="warning"));if(H.forEach(q=>q.style.display="none"),U.visible){a.dataset.visibleLabels="0";return}for(const q of G){if(V>=(p?2:4)&&q.id!==O)continue;const $=A.get(q.id).clone().project(r);if($.z>1||Math.abs($.x)>.98||Math.abs($.y)>.95)continue;const ae=H.get(q.id);ae.style.display="",ae.classList.toggle("selected",q.id===O);const Z=ae.offsetWidth,ie=ae.offsetHeight,Y=Vs.clamp(($.x*.5+.5)*n.clientWidth,Z/2+8,n.clientWidth-Z/2-8),pe=Vs.clamp((-.5*$.y+.5)*n.clientHeight,35,n.clientHeight-35);if(_.some(w=>Math.abs(Y-w.x)<(Z+w.w)/2+5&&Math.abs(pe-w.y)<(ie+w.h)/2+5)){ae.style.display="none";continue}ae.style.left=Y+"px",ae.style.top=pe+"px",_.push({x:Y,y:pe,w:Z,h:ie}),V++}a.dataset.visibleLabels=String(V)}function ue(_){if(I=0,b)return;if(he){const V=Math.min(1,(_-he.start)/500),G=1-(1-V)**3;r.position.lerpVectors(he.from,he.to,G),l.target.lerpVectors(he.fromTarget,he.target,G),V===1&&(he=null)}const p=l.update();o.render(s,r),le(),a.dataset.renderCount=String(++ne),a.dataset.drawCalls=String(o.info.render.calls),(he||p)&&ze()}function be(_){Se={x:_.clientX,y:_.clientY},he=null}function Be(_){if(!Se||Math.hypot(_.clientX-Se.x,_.clientY-Se.y)>6){Se=null;return}Se=null;const p=a.getBoundingClientRect();me.set((_.clientX-p.left)/p.width*2-1,-(_.clientY-p.top)/p.height*2+1),W.setFromCamera(me,r);const V=W.intersectObjects(K.filter(G=>e.find(q=>q.id===G.userData.assetId)?.floor===L),!1)[0];V&&i(V.object.userData.assetId)}function de(){Se=null}l.addEventListener("change",ze),a.addEventListener("pointerdown",be),a.addEventListener("pointerup",Be),a.addEventListener("pointercancel",de);const T=new ResizeObserver(()=>{b||(r.aspect=n.clientWidth/Math.max(1,n.clientHeight),r.updateProjectionMatrix(),o.setSize(n.clientWidth,n.clientHeight),o.setPixelRatio(Math.min(devicePixelRatio,n.clientWidth<650?1.25:1.5)),he=null,Xe(),ze())});return T.observe(n),o.shadowMap.needsUpdate=!0,{select(_,p=!1){if(O=_,R.forEach((V,G)=>{V.material.opacity=G===_?.82:.25}),_&&p){const V=e.find(G=>G.id===_);Xe(new k(V.x,.5,V.z),!0)}ze()},setFloor(_){L=_,e.forEach(p=>{B.get(p.id).visible=p.floor===_,R.get(p.id).visible=p.floor===_}),o.shadowMap.needsUpdate=!0,Xe(),ze()},roof(_){U.visible=_,N.visible=_,o.shadowMap.needsUpdate=!0,ze()},reset(){Xe()},dispose(){b=!0,cancelAnimationFrame(I),T.disconnect(),l.removeEventListener("change",ze),l.dispose(),a.removeEventListener("pointerdown",be),a.removeEventListener("pointerup",Be),a.removeEventListener("pointercancel",de),H.forEach(_=>_.remove()),d.forEach(_=>_.dispose()),Object.values(h).forEach(_=>_.dispose()),f.forEach(_=>_.dispose()),x.forEach(_=>_.dispose()),z.dispose(),c.shadow.dispose(),o.dispose(),o.forceContextLoss(),a.remove()}}}const US={class:"interior-workbench"},NS={class:"interior-heading"},FS={class:"interior-breadcrumb"},OS={class:"interior-heading-actions"},BS=["value"],zS=["value"],kS={class:"interior-grid"},HS={class:"panel interior-tree"},VS={class:"panel-heading"},GS={class:"muted"},WS={class:"interior-tree-filters"},XS=["onClick"],YS={class:"interior-asset-list"},qS=["onClick"],$S={key:0,class:"interior-empty"},jS={class:"interior-view panel"},KS={class:"interior-toolbar"},ZS={class:"interior-floor-buttons"},JS=["onClick"],QS=["aria-pressed"],eb={class:"interior-view-foot"},tb={class:"interior-inspector-title"},nb=["aria-expanded"],ib={class:"interior-inspector-body"},sb={class:"inspector-kv"},rb={class:"interior-reading"},ob={key:0,class:"interior-carbon"},ab={key:1,class:"interior-role-note"},lb={key:2,class:"interior-reading"},cb={class:"inspector-kv"},ub={class:"inspector-kv"},hb={key:3,class:"interior-spark"},db={viewBox:"0 0 250 100","aria-label":"模拟功率趋势"},fb=["points","stroke"],pb={class:"interior-evidence"},mb={class:"inspector-kv"},gb=["disabled"],_b={class:"interior-calculation"},vb=["href"],xb=da({__name:"InteriorWorkbench",props:{buildingId:{},assetId:{},tick:{},playing:{type:Boolean},orders:{}},emits:["exit","building","advance","toggle"],setup(n,{emit:e}){const t=n,i=e,s=lt(()=>Bn.find(D=>D.id===t.buildingId)),r=lt(()=>bS(t.buildingId)),o=r.value.find(D=>D.id===t.assetId)||r.value.find(D=>D.state!=="normal")||r.value[0],a=At(o.id),l=At(o.floor),c=At(!1),u=At("all"),h=At(!1),d=lt(()=>r.value.find(D=>D.id===a.value)),f=lt(()=>ES(d.value,t.tick)),x=At(null);let S=null;const g=lt(()=>r.value.filter(D=>D.floor===l.value&&(u.value==="all"||u.value==="warning"&&D.state!=="normal"||u.value==="priority"&&D.priority==="P0"||u.value==="meter"&&["aggregate","transfer"].includes(D.role)))),m=lt(()=>yS(s.value)),C={factory:"生产与公辅",warehouse:"仓储与物流",research:"测试与机电",substation:"供电与计量",storage:"光储充与温控"},E=lt(()=>bp(s.value)),y=lt(()=>TS[d.value.source]);function U(D,b=!0){const I=r.value.find(O=>O.id===D);a.value=D,l.value=I.floor,S?.setFloor(I.floor),S?.select(D,b),h.value=!1}function N(D){l.value=D,u.value="all";const b=r.value.find(I=>I.floor===D);a.value=b.id,S?.setFloor(D),S?.select(b.id),h.value=!1}function F(){c.value=!c.value,S?.roof(c.value)}function B(){S?.reset()}const R=lt(()=>E.value==="storage"&&["storage","transfer","aggregate"].includes(d.value.role)?"功率（负值放电 / 送出）":"功率 / 最后有效值"),A=lt(()=>E.value==="storage"&&d.value.role==="aggregate"?"净受入量（负值送出）":E.value==="storage"&&["storage","transfer"].includes(d.value.role)?"累计放电量示例":"当日电量示例"),H=lt(()=>(d.value.basePower,Array.from({length:25},(D,b)=>{const I=d.value.state==="warning"&&b>15?.12:0;return`${12+b*9.3},${83-(.48+.12*Math.sin(b*.6)+I)*70}`}).join(" "))),K=lt(()=>t.orders[d.value.id]||"待确认");pa(()=>{x.value&&(S=LS(x.value,r.value,E.value,D=>U(D)),S.setFloor(l.value),S.select(a.value))}),ma(()=>S?.dispose());function z(D,b=1){return D===null?"—":D.toLocaleString("zh-CN",{maximumFractionDigits:b,minimumFractionDigits:b})}return(D,b)=>(ke(),Ve("main",US,[v("div",NS,[v("div",null,[v("div",FS,[v("button",{onClick:b[0]||(b[0]=I=>i("exit"))},"园区总览"),v("span",null,"/ "+oe(s.value.name)+" / "+oe(m.value.find(I=>I.id===l.value)?.name),1)]),v("h1",null,"建筑内部 · "+oe(C[E.value]),1),v("p",null,"剖开示意 · 设备位置与读数均为模拟 · 年度用电预算 "+oe(We(is)[s.value.id])+" MWh",1)]),v("div",OS,[v("select",{"aria-label":"切换内部建筑",value:n.buildingId,onChange:b[1]||(b[1]=I=>i("building",I.target.value))},[(ke(!0),Ve(ut,null,Qt(We(Bn),I=>(ke(),Ve("option",{key:I.id,value:I.id},oe(We(Pn).find(O=>O.id===I.objectId)?.name)+" · "+oe(I.name),9,zS))),128))],40,BS),v("button",{class:"outline-button",onClick:b[2]||(b[2]=I=>i("exit"))},"返回园区")])]),v("div",kS,[v("aside",HS,[v("div",VS,[b[6]||(b[6]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"设备与计量点")],-1)),v("span",GS,oe(r.value.length)+" 个",1)]),v("div",WS,[(ke(),Ve(ut,null,Qt([["all","全部"],["priority","重点"],["warning","异常"],["meter","计量"]],I=>v("button",{key:I[0],class:wt({active:u.value===I[0]}),onClick:O=>u.value=I[0]},oe(I[1]),11,XS)),64))]),v("div",YS,[(ke(!0),Ve(ut,null,Qt(g.value,I=>(ke(),Ve("button",{key:I.id,class:wt({selected:I.id===a.value}),onClick:O=>U(I.id)},[v("span",{class:wt(["status-dot",I.state==="delayed"?"offline":I.state])},null,2),v("span",null,[v("b",null,oe(I.name),1),v("small",null,oe(We(_d)[I.role])+" · "+oe(I.templateId),1)]),v("em",null,oe(I.state==="normal"?"定位":We(vd)[I.state]),1)],10,qS))),128)),g.value.length?un("",!0):(ke(),Ve("p",$S,"此楼层没有符合筛选的对象。"))]),b[7]||(b[7]=v("div",{class:"interior-tree-note"},"生产与能源状态分别判断。高能耗不直接标为故障，缺数据不填零。",-1))]),v("section",jS,[v("div",KS,[v("div",ZS,[(ke(!0),Ve(ut,null,Qt(m.value,I=>(ke(),Ve("button",{key:I.id,class:wt({active:l.value===I.id}),onClick:O=>N(I.id)},oe(I.name),11,JS))),128))]),v("div",null,[v("button",{class:"tool-button","aria-pressed":c.value,onClick:F},oe(c.value?"隐藏屋顶":"显示屋顶"),9,QS),v("button",{class:"tool-button",onClick:B},"重置室内视角")])]),v("div",{ref_key:"host",ref:x,class:"interior-scene","aria-label":"建筑内部三维设施场景"},null,512),v("div",eb,[b[8]||(b[8]=v("span",null,"拖拽旋转 / 缩放 · 点击设备或左侧列表",-1)),v("button",{onClick:b[3]||(b[3]=I=>i("toggle"))},oe(n.playing?"暂停模拟流":"继续模拟流"),1)])]),v("aside",{class:wt(["panel interior-inspector",{"details-open":h.value}])},[v("div",tb,[v("span",{class:wt(["status-chip",d.value.state==="normal"?"review":d.value.state==="delayed"?"insufficient":"fail"])},oe(We(vd)[d.value.state]),3),v("h2",null,oe(d.value.name),1),v("small",null,oe(d.value.id),1),v("button",{class:"interior-mobile-details","aria-expanded":h.value,onClick:b[4]||(b[4]=I=>h.value=!h.value)},oe(h.value?"收起设备详情":"展开设备详情"),9,nb)]),v("div",ib,[v("div",sb,[b[9]||(b[9]=v("span",null,"能源角色",-1)),v("b",null,oe(We(_d)[d.value.role]),1)]),v("div",rb,[v("div",null,[v("span",null,oe(R.value),1),v("strong",null,[ft(oe(z(f.value.power))+" ",1),b[10]||(b[10]=v("small",null,"kW",-1))])]),v("div",null,[v("span",null,oe(A.value),1),v("strong",null,[ft(oe(z(f.value.energy))+" ",1),b[11]||(b[11]=v("small",null,"kWh",-1))])])]),d.value.role==="terminal"?(ke(),Ve("div",ob,[b[13]||(b[13]=v("span",null,"当日用电对应 CO₂ · 管理分摊",-1)),v("strong",null,[ft(oe(z(f.value.carbon))+" ",1),b[12]||(b[12]=v("small",null,"kg CO₂",-1))]),v("p",null,"年度场景分配因子 "+oe(We(gu).toFixed(4))+" kgCO₂/kWh，属于计算示例。",1)])):(ke(),Ve("div",ab,oe(d.value.role==="passive"?"非用能物体，不生成运行碳排。":"展示能流、库存或汇总；不与终端重复累加碳排。"),1)),d.value.role==="storage"?(ke(),Ve("div",lb,[v("div",null,[b[15]||(b[15]=v("span",null,"SOC 示例",-1)),v("strong",null,[ft(oe(f.value.soc)+" ",1),b[14]||(b[14]=v("small",null,"%",-1))])]),v("div",null,[b[17]||(b[17]=v("span",null,"温度示例",-1)),v("strong",null,[ft(oe(f.value.temperature)+" ",1),b[16]||(b[16]=v("small",null,"℃",-1))])])])):un("",!0),v("div",cb,[b[18]||(b[18]=v("span",null,"示例测点",-1)),v("b",null,oe(d.value.meterId||"非计量对象"),1)]),v("div",ub,[b[19]||(b[19]=v("span",null,"数据性质",-1)),v("b",null,oe(f.value.quality),1)]),f.value.power!==null?(ke(),Ve("div",hb,[b[21]||(b[21]=v("div",null,[v("b",null,"功率趋势示意"),v("span",null,"最近 30 分钟 · 构造曲线")],-1)),(ke(),Ve("svg",db,[b[20]||(b[20]=v("path",{d:"M12 25H236 M12 55H236 M12 85H236",fill:"none",stroke:"#254d67","stroke-dasharray":"3 3"},null,-1)),v("polyline",{points:H.value,fill:"none",stroke:d.value.state==="warning"?"#ffc451":"#25cfff","stroke-width":"2"},null,8,fb)]))])):un("",!0),v("div",pb,[v("h3",null,"状态与证据 · "+oe(d.value.rule),1),v("b",null,oe(d.value.task),1),v("p",null,oe(d.value.evidence),1),b[24]||(b[24]=v("h3",null,"排查与整改建议",-1)),v("p",null,oe(d.value.recommendation),1),d.value.state!=="normal"?(ke(),Ve(ut,{key:0},[v("div",mb,[b[22]||(b[22]=v("span",null,"整改状态",-1)),v("b",null,oe(K.value),1)]),v("button",{class:"primary-button",disabled:K.value==="已处理",onClick:b[5]||(b[5]=I=>i("advance",d.value.id))},oe(K.value==="待确认"?"确认并建立整改":K.value==="处理中"?"记录复核并完成":"已记录复核"),9,gb),b[23]||(b[23]=v("small",null,"当前页面的演示记录；完成不代表已验证减排效果。",-1))],64)):un("",!0)]),v("details",_b,[b[25]||(b[25]=v("summary",null,"计量与核算依据",-1)),v("p",null,oe(We(Os).allocation),1),v("p",null,"诊断增强字段："+oe(d.value.extra),1),v("p",null,"资产归属 "+oe(s.value.objectId)+" / "+oe(s.value.name)+"；时间窗口与分摊规则需后端核实。",1),y.value?(ke(),Ve("a",{key:0,href:y.value.url,target:"_blank",rel:"noopener"},"设备/字段原始参考资料",8,vb)):un("",!0)])])],2)])]))}}),yb=["d"],Mb=["d"],Sb=["d"],bb=8,bd=da({__name:"TrendChart",props:{series:{},height:{}},setup(n){const e=n,t=lt(()=>e.height??180);function i(o){return e.series.map((a,l)=>{const c=25+l*(550/Math.max(1,e.series.length-1)),u=150-a[o]/bb*125;return`${l===0?"M":"L"}${c.toFixed(1)},${u.toFixed(1)}`}).join(" ")}const s=lt(()=>i("demand")),r=lt(()=>i("solar"));return(o,a)=>(ke(),Ve("svg",{class:"trend-chart",style:fi({height:t.value+"px"}),viewBox:"0 0 600 180",preserveAspectRatio:"none",role:"img","aria-label":"园区负荷与光伏出力演示趋势图"},[a[0]||(a[0]=Ri('<defs><linearGradient id="demand-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1ac6ff" stop-opacity=".27"></stop><stop offset="1" stop-color="#1ac6ff" stop-opacity="0"></stop></linearGradient></defs><g class="chart-grid"><line x1="25" y1="25" x2="575" y2="25"></line><line x1="25" y1="66" x2="575" y2="66"></line><line x1="25" y1="108" x2="575" y2="108"></line><line x1="25" y1="150" x2="575" y2="150"></line><line x1="25" y1="25" x2="25" y2="150"></line><line x1="163" y1="25" x2="163" y2="150"></line><line x1="300" y1="25" x2="300" y2="150"></line><line x1="438" y1="25" x2="438" y2="150"></line><line x1="575" y1="25" x2="575" y2="150"></line></g>',2)),v("path",{d:`${s.value} L575,150 L25,150 Z`,fill:"url(#demand-fill)"},null,8,yb),v("path",{d:s.value,fill:"none",stroke:"#27d4ff","stroke-width":"2.4","vector-effect":"non-scaling-stroke"},null,8,Mb),v("path",{d:r.value,fill:"none",stroke:"#ffc44c","stroke-width":"2","vector-effect":"non-scaling-stroke"},null,8,Sb),a[1]||(a[1]=Ri('<g class="chart-labels"><text x="25" y="174">00:00</text><text x="157" y="174">06:00</text><text x="293" y="174">12:00</text><text x="430" y="174">18:00</text><text x="548" y="174">24:00</text></g>',1))],4))}}),Eb={class:"app-shell"},wb={class:"topbar"},Tb={class:"main-nav","aria-label":"主导航"},Ab=["onClick"],Rb={class:"topbar-meta"},Cb={class:"topbar-period"},Pb={class:"topbar-time"},Ib={key:1,class:"overview-grid"},Db={class:"left-rail"},Lb={class:"panel energy-panel"},Ub={class:"panel-heading"},Nb={class:"energy-body"},Fb={class:"energy-side"},Ob={class:"panel load-panel"},Bb={class:"panel operations-panel"},zb={class:"panel-heading"},kb={class:"metric-grid"},Hb={class:"metric-cell"},Vb={class:"metric-cell"},Gb={class:"mint"},Wb={class:"metric-cell"},Xb={class:"scene-section"},Yb={class:"scene-topline"},qb={class:"scene-tools"},$b=["aria-pressed"],jb=["aria-expanded"],Kb={class:"scene-filters",role:"group","aria-label":"园区图层筛选"},Zb=["onClick"],Jb={key:0,class:"scene-object-list","aria-label":"园区对象列表"},Qb={class:"scene-list-heading"},eE=["onClick"],tE={class:"selection-eyebrow"},nE={class:"selection-title"},iE={class:"selection-interiors"},sE=["onClick"],rE=["aria-expanded"],oE={class:"selection-scope"},aE={class:"selection-data"},lE={class:"selection-assets"},cE=["title"],uE={key:0},hE={class:"scene-bottom"},dE=["aria-label"],fE={key:0,class:"pause-icon"},pE={key:1,class:"play-icon"},mE={class:"right-rail"},gE={class:"panel core-panel"},_E={class:"panel-heading"},vE={class:"panel-footnote"},xE={class:"threshold-note"},yE={class:"panel guidance-panel"},ME={class:"panel-heading"},SE={class:"indicator-row__name"},bE={class:"panel quality-panel"},EE={class:"panel-heading"},wE={class:"quality-summary"},TE={class:"quality-ring"},AE={class:"quality-figures"},RE={class:"coral"},CE=["onClick"],PE={key:2,class:"workbench"},IE={class:"page-heading"},DE={class:"page-overline"},LE={class:"summary-strip"},UE={class:"work-grid two-columns"},NE={class:"panel wide-panel"},FE={class:"panel wide-panel"},OE={class:"object-table"},BE=["onClick"],zE={class:"summary-strip"},kE={class:"work-grid carbon-grid"},HE={class:"panel wide-panel"},VE={class:"panel-heading"},GE={class:"muted"},WE={class:"stacked-bar"},XE={class:"breakdown-row"},YE={class:"breakdown-row"},qE={class:"breakdown-row"},$E={class:"breakdown-row"},jE={class:"panel wide-panel"},KE={class:"trace-list"},ZE={class:"readiness-head"},JE={class:"panel readiness-hero"},QE={class:"panel indicator-table-panel"},ew={key:3,class:"work-grid alerts-grid"},tw={class:"panel wide-panel"},nw={class:"panel-heading"},iw={class:"muted"},sw=["onClick"],rw={class:"panel wide-panel alert-detail"},ow={class:"panel-heading"},aw={class:"status-chip review"},lw={class:"trace-list"},cw={class:"alert-actions"},uw=["disabled"],hw={class:"summary-strip"},dw={class:"work-grid sources-grid"},fw={class:"panel wide-panel"},pw={class:"source-icon"},mw={key:3,class:"toast",role:"status"},gw=da({__name:"App",setup(n){const e=[{id:"overview",label:"园区总览"},{id:"monitoring",label:"实时监测"},{id:"carbon",label:"碳排测算"},{id:"readiness",label:"达标预评估"},{id:"alerts",label:"预警与整改"},{id:"sources",label:"数据接入"}],t=At("overview"),i=At(null),s=At(null),r=At({});function o(de){t.value=de,i.value=null}function a(de,T=null){i.value=de,s.value=T,t.value="overview"}function l(de){const T=r.value[de]||"待确认";r.value[de]=T==="待确认"?"处理中":"已处理";const _=Hn.find(p=>p.assetId===de);_&&(I.value[_.id]=r.value[de]),me("已更新演示整改记录，完成不代表已验证减排效果。")}const c=At("all"),u=At(null),h=lt(()=>Pn.find(de=>de.id===u.value)??null),d=lt(()=>sn.find(de=>de.objectId===u.value)),f=lt(()=>Bn.filter(de=>de.objectId===u.value)),x=lt(()=>Dn.filter(de=>de.objectId===u.value)),S=lt(()=>Ec.filter(de=>de.objectId===u.value)),g=At(!0),m=At(!1),C=At(!1),E=At(null),y=At(!0),U=At(0),N=At(14),F=At(new Date),B=lt(()=>AS(U.value)),R=lt(()=>(Pn.reduce((de,T)=>de+_u(T.id),0)/1e3+Math.sin(U.value/2)*.07).toFixed(2)),A=lt(()=>B.value[N.value]?.solar.toFixed(2)??"0.00"),H=lt(()=>xl.reduce((de,T)=>de+T.count,0)),K=lt(()=>xl.reduce((de,T)=>de+T.online,0)),z=lt(()=>(K.value/H.value*100).toFixed(1)),D=lt(()=>F.value.toLocaleTimeString("zh-CN",{hour12:!1})),b=lt(()=>F.value.toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"})),I=At(Object.fromEntries(Hn.map(de=>[de.id,"待确认"]))),O=At(Hn[0].id),L=lt(()=>Hn.find(de=>de.id===O.value)??Hn[0]),ne=At("");let he,W;pa(()=>{he=window.setInterval(()=>{y.value&&(U.value+=1,F.value=new Date)},2600)}),ma(()=>{he&&window.clearInterval(he),W&&window.clearTimeout(W)});function me(de){ne.value=de,W&&window.clearTimeout(W),W=window.setTimeout(()=>{ne.value=""},3500)}function Se(de){const T=Pn.find(_=>_.id===de);T&&c.value!=="all"&&c.value!==T.area&&(c.value="all"),u.value=de,C.value=!1,m.value=!1}function ze(de){O.value=de;const T=Hn.find(_=>_.id===de);T&&(u.value=T.objectId),t.value="alerts"}function Xe(){l(L.value.assetId)}function le(){me("已触发模拟同步。真实接口尚未接入，原有数据状态保持不变。")}function ue(){E.value?.resetView(),u.value=null}function be(de){c.value=de,h.value&&de!=="all"&&h.value.area!==de&&(u.value=null)}function Be(de){return de.powerKw===null?"边界设施":`${(de.powerKw/1e3).toFixed(2)} MW`}return(de,T)=>(ke(),Ve("div",Eb,[v("header",wb,[v("div",{class:"brand",onClick:T[0]||(T[0]=_=>o("overview")),role:"button",tabindex:"0",onKeydown:T[1]||(T[1]=jg(_=>o("overview"),["enter"]))},[...T[19]||(T[19]=[v("div",{class:"brand-mark"},[v("span"),v("span"),v("span")],-1),v("div",{class:"brand-copy"},[v("strong",null,"零碳园区能碳管理平台"),v("small",null,"数字孪生交互原型")],-1)])],32),v("nav",Tb,[(ke(),Ve(ut,null,Qt(e,_=>v("button",{key:_.id,class:wt(["nav-item",{active:t.value===_.id}]),onClick:p=>o(_.id)},oe(_.label),11,Ab)),64))]),v("div",Rb,[v("span",Cb,oe(We(Et).year)+" 年度核算",1),v("span",{class:wt(["live-indicator",{paused:!y.value}])},[T[20]||(T[20]=v("i",null,null,-1)),ft(oe(y.value?"模拟数据流运行":"演示流已暂停"),1)],2),v("span",Pb,oe(D.value),1)])]),t.value==="overview"&&i.value?(ke(),wf(xb,{key:i.value,"building-id":i.value,"asset-id":s.value,tick:U.value,playing:y.value,orders:r.value,onExit:T[2]||(T[2]=_=>i.value=null),onBuilding:T[3]||(T[3]=_=>a(_)),onAdvance:l,onToggle:T[4]||(T[4]=_=>y.value=!y.value)},null,8,["building-id","asset-id","tick","playing","orders"])):t.value==="overview"?(ke(),Ve("main",Ib,[v("aside",Db,[v("section",Lb,[v("div",Ub,[T[21]||(T[21]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"能源结构")],-1)),v("small",null,oe(We(Et).year)+" 年度 · 演示数据",1)]),v("div",Nb,[v("div",{class:"donut",style:fi({"--percent":We(Et).cleanerEnergyPct+"%"})},[v("div",null,[T[22]||(T[22]=v("span",null,"清洁电力",-1)),v("strong",null,oe(We(Et).cleanerEnergyPct.toFixed(1))+"%",1)])],4),v("div",Fb,[v("div",null,[T[23]||(T[23]=v("span",{class:"swatch swatch-cyan"},null,-1)),T[24]||(T[24]=v("span",null,"清洁电力",-1)),v("strong",null,oe(We(Et).cleanerEnergyPct.toFixed(1))+"%",1)]),v("div",null,[T[25]||(T[25]=v("span",{class:"swatch swatch-gold"},null,-1)),T[26]||(T[26]=v("span",null,"普通受入",-1)),v("strong",null,oe((100-We(Et).cleanerEnergyPct).toFixed(1))+"%",1)]),v("p",null,[T[27]||(T[27]=ft("年度用电 ",-1)),v("b",null,oe(We(Et).electricityMwh),1),T[28]||(T[28]=ft(" MWh",-1))])])])]),v("section",Ob,[T[29]||(T[29]=Ri('<div class="panel-heading"><div><span class="heading-bar"></span><h2>园区负荷趋势</h2></div><small>当日 · MW</small></div><div class="chart-legend"><span><i class="line-cyan"></i>用电负荷</span><span><i class="line-gold"></i>光伏出力</span></div>',2)),_n(bd,{series:B.value,height:173},null,8,["series"])]),v("section",Bb,[v("div",zb,[T[30]||(T[30]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"运行监测")],-1)),v("button",{class:"text-action",onClick:T[5]||(T[5]=_=>t.value="monitoring")},"查看监测")]),v("div",kb,[v("div",Hb,[T[32]||(T[32]=v("span",null,"当前园区负荷",-1)),v("strong",null,[ft(oe(R.value),1),T[31]||(T[31]=v("em",null,"MW",-1))]),T[33]||(T[33]=v("small",null,"模拟动态数据",-1))]),v("div",Vb,[T[35]||(T[35]=v("span",null,"当前光伏出力",-1)),v("strong",Gb,[ft(oe(A.value),1),T[34]||(T[34]=v("em",null,"MW",-1))]),v("small",null,oe(String(N.value).padStart(2,"0"))+":00 时段",1)]),T[38]||(T[38]=v("div",{class:"metric-cell"},[v("span",null,"企业 / 公共设施"),v("strong",null,[ft("6 "),v("em",null,"/"),ft(" 3")]),v("small",null,"对象边界已区分")],-1)),v("div",Wb,[T[36]||(T[36]=v("span",null,"数据点接入",-1)),v("strong",null,[ft(oe(K.value),1),v("em",null,"/ "+oe(H.value),1)]),T[37]||(T[37]=v("small",null,"其中 1 个测点延迟",-1))])])])]),v("section",Xb,[v("div",Yb,[v("div",null,[T[39]||(T[39]=v("h1",null,"园区空间总览",-1)),v("span",null,"概念园区 · "+oe(We(Bn).length)+" 栋建筑 · 非真实地理数据",1)]),v("div",qb,[v("button",{class:wt(["tool-button",{"is-on":g.value}]),"aria-pressed":g.value,onClick:T[6]||(T[6]=_=>g.value=!g.value)},oe(g.value?"隐藏边界":"显示边界"),11,$b),v("button",{class:"tool-button","aria-expanded":m.value,onClick:T[7]||(T[7]=_=>m.value=!m.value)},"对象列表",8,jb),v("button",{class:"tool-button",onClick:ue,title:"重置视角"},"重置视角")])]),v("div",Kb,[(ke(),Ve(ut,null,Qt([["all","全部"],["enterprise","企业区域"],["public","公共区域"],["energy","能源设施"]],_=>v("button",{key:_[0],class:wt({active:c.value===_[0]}),onClick:p=>be(_[0])},oe(_[1]),11,Zb)),64))]),_n(DS,{ref_key:"parkCanvas",ref:E,filter:c.value,boundaries:g.value,"selected-id":u.value,onSelect:Se},null,8,["filter","boundaries","selected-id"]),m.value?(ke(),Ve("div",Jb,[v("div",Qb,[T[40]||(T[40]=v("strong",null,"定位园区对象",-1)),v("button",{"aria-label":"关闭对象列表",onClick:T[8]||(T[8]=_=>m.value=!1)},"×")]),(ke(!0),Ve(ut,null,Qt(We(Pn),_=>(ke(),Ve("button",{key:_.id,onClick:p=>Se(_.id)},[v("span",{class:wt(["status-dot",_.health])},null,2),v("span",null,[v("b",null,oe(_.name),1),v("small",null,oe(_.buildingIds.length)+" 栋建筑 · "+oe(_.area==="enterprise"?"企业地块":_.area==="public"?"公共服务":"能源设施"),1)]),T[41]||(T[41]=v("em",null,"定位 ↗",-1))],8,eE))),128)),T[42]||(T[42]=v("p",null,"公共道路由园区管理，企业地块独立显示。",-1))])):un("",!0),h.value?(ke(),Ve("div",{key:1,class:wt(["selection-card",{"is-expanded":C.value}])},[v("div",tE,[v("span",{class:wt(["status-dot",h.value.health])},null,2),ft(oe(h.value.type)+" · "+oe(h.value.health==="normal"?"正常":h.value.health==="warning"?"需关注":"数据延迟"),1)]),v("div",nE,[v("h3",null,oe(h.value.name),1),v("button",{"aria-label":"关闭对象详情",onClick:T[9]||(T[9]=_=>u.value=null)},"×")]),v("div",iE,[(ke(!0),Ve(ut,null,Qt(f.value,_=>(ke(),Ve("button",{key:_.id,onClick:p=>a(_.id)},"查看内部 · "+oe(_.name)+" ↗",9,sE))),128))]),v("button",{class:"detail-expand","aria-expanded":C.value,onClick:T[10]||(T[10]=_=>C.value=!C.value)},oe(C.value?"收起详情 −":"展开详情 +"),9,rE),v("p",null,oe(h.value.description),1),v("div",oE,[v("span",null,oe(d.value?.name)+" · 概念边界",1),v("b",null,oe(f.value.length)+" 栋建筑 / "+oe(x.value.length)+" 项设施",1)]),v("div",aE,[v("div",null,[T[43]||(T[43]=v("span",null,"当前负荷",-1)),v("strong",null,oe(Be(h.value)),1)]),v("div",null,[T[44]||(T[44]=v("span",null,"年度分摊 CO₂",-1)),v("strong",null,oe(h.value.carbonT===null?"待核算":h.value.carbonT.toFixed(1)+" 吨"),1)])]),v("small",null,"运营主体："+oe(h.value.owner)+" · 按年度用电预算分摊，已纳入园区总量",1),v("div",lE,[(ke(!0),Ve(ut,null,Qt(x.value,_=>(ke(),Ve("span",{key:_.id,title:_.id},oe(_.name),9,cE))),128))]),S.value.length?(ke(),Ve("small",uE,"计量点："+oe(S.value.map(_=>_.id).join("、"))+" · "+oe(S.value.some(_=>_.quality==="delayed")?"模拟数据延迟":"演示绑定"),1)):un("",!0)],2)):un("",!0),T[47]||(T[47]=v("div",{class:"scene-hint"},"概念四至 / 企业地块 / 公共区域 · 拖拽旋转 · 点击楼栋定位",-1)),v("div",hE,[v("button",{class:"play-button","aria-label":y.value?"暂停演示数据流":"继续演示数据流",onClick:T[11]||(T[11]=_=>y.value=!y.value)},[y.value?(ke(),Ve("span",fE)):(ke(),Ve("span",pE))],8,dE),v("span",null,oe(b.value),1),T[45]||(T[45]=v("span",{class:"scene-bottom__label"},"时段",-1)),Mm(v("input",{"onUpdate:modelValue":T[12]||(T[12]=_=>N.value=_),type:"range",min:"0",max:"23","aria-label":"查看演示时段"},null,512),[[qg,N.value,void 0,{number:!0}]]),v("strong",null,oe(String(N.value).padStart(2,"0"))+":00",1),T[46]||(T[46]=v("div",{class:"scene-legend"},[v("span",null,[v("i",{class:"legend-enterprise"}),ft("企业")]),v("span",null,[v("i",{class:"legend-public"}),ft("公共")]),v("span",null,[v("i",{class:"legend-energy"}),ft("能源设施")])],-1))])]),v("aside",mE,[v("section",gE,[v("div",_E,[T[48]||(T[48]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"国家级零碳园区核心指标")],-1)),v("button",{class:"text-action",onClick:T[13]||(T[13]=_=>t.value="readiness")},"查看依据")]),T[50]||(T[50]=v("div",{class:"core-label"},[ft("单位能耗碳排放 "),v("span",{class:"status-chip insufficient"},"待核实")],-1)),T[51]||(T[51]=v("div",{class:"core-value"},[ft("待核实"),v("span",null,"等价值折标依据尚未确认")],-1)),v("p",vE,oe(We(Os).tce),1),v("div",xE,[v("span",null,oe(We(Et).electricityMwh)+" MWh 年度用电示例",1),T[49]||(T[49]=v("b",null,"不自动判定",-1))]),T[52]||(T[52]=v("p",{class:"panel-footnote"},"内部预评估 · 依据 2025 年试行指标体系",-1))]),v("section",yE,[v("div",ME,[T[53]||(T[53]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"五项引导指标")],-1)),v("button",{class:"text-action",onClick:T[14]||(T[14]=_=>t.value="readiness")},"全部指标")]),(ke(!0),Ve(ut,null,Qt(We(xd).slice(1),_=>(ke(),Ve("button",{key:_.id,class:"indicator-row",onClick:T[15]||(T[15]=p=>t.value="readiness")},[v("span",{class:wt(["indicator-marker",_.status])},null,2),v("span",SE,oe(_.name),1),v("strong",null,oe(_.value),1),v("small",{class:wt(_.status)},oe(_.status==="pass"?"达标":_.status==="fail"?"有差距":"缺数据"),3)]))),128))]),v("section",bE,[v("div",EE,[T[54]||(T[54]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"数据质量与告警")],-1)),v("button",{class:"text-action",onClick:T[16]||(T[16]=_=>t.value="sources")},"数据接入")]),v("div",wE,[v("div",TE,[v("strong",null,oe(z.value)+"%",1),T[55]||(T[55]=v("span",null,"数据点在线",-1))]),v("div",AE,[v("div",null,[T[56]||(T[56]=v("span",null,"在线数据点",-1)),v("b",null,oe(K.value)+" / "+oe(H.value),1)]),T[58]||(T[58]=v("div",null,[v("span",null,"待补数据"),v("b",{class:"gold"},"2 项")],-1)),v("div",null,[T[57]||(T[57]=v("span",null,"活动告警",-1)),v("b",RE,oe(We(Hn).filter(_=>I.value[_.id]!=="已处理").length)+" 条",1)])])]),(ke(!0),Ve(ut,null,Qt(We(Hn),_=>(ke(),Ve("button",{key:_.id,class:"mini-alert",onClick:p=>ze(_.id)},[v("span",{class:wt(["status-dot",_.level])},null,2),v("span",null,oe(_.title),1),v("time",null,oe(_.time),1)],8,CE))),128))])])])):(ke(),Ve("main",PE,[v("div",IE,[v("div",null,[v("span",DE,"零碳园区 · "+oe(We(Et).year)+" 年度",1),v("h1",null,oe(e.find(_=>_.id===t.value)?.label),1),T[59]||(T[59]=v("p",null,"园区示意案例，所有数值与事件均为模拟数据。",-1))]),v("button",{class:"outline-button",onClick:T[17]||(T[17]=_=>o("overview"))},"返回园区总览")]),t.value==="monitoring"?(ke(),Ve(ut,{key:0},[v("div",LE,[v("div",null,[T[61]||(T[61]=v("span",null,"当前园区负荷",-1)),v("strong",null,[ft(oe(R.value)+" ",1),T[60]||(T[60]=v("small",null,"MW",-1))])]),v("div",null,[T[62]||(T[62]=v("span",null,"数据点在线",-1)),v("strong",null,[ft(oe(K.value),1),v("small",null," / "+oe(H.value),1)])]),v("div",null,[T[63]||(T[63]=v("span",null,"演示流状态",-1)),v("strong",{class:wt(y.value?"mint-text":"gold-text")},oe(y.value?"运行中":"已暂停"),3)]),v("div",null,[T[64]||(T[64]=v("span",null,"最近更新",-1)),v("strong",null,oe(D.value),1)])]),v("div",UE,[v("section",NE,[T[65]||(T[65]=Ri('<div class="panel-heading"><div><span class="heading-bar"></span><h2>用电负荷与光伏出力</h2></div><span class="muted">模拟实时序列 · MW</span></div><div class="chart-legend"><span><i class="line-cyan"></i>用电负荷</span><span><i class="line-gold"></i>光伏出力</span></div>',2)),_n(bd,{series:B.value,height:320},null,8,["series"]),T[66]||(T[66]=v("p",{class:"panel-footnote"},"当监测流暂停或计量点延迟，页面保留最后数值并明确显示状态。",-1))]),v("section",FE,[T[67]||(T[67]=v("div",{class:"panel-heading"},[v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"监测对象")]),v("span",{class:"muted"},"点击返回场景定位")],-1)),v("div",OE,[(ke(!0),Ve(ut,null,Qt(We(Pn),_=>(ke(),Ve("button",{key:_.id,class:"object-row",onClick:p=>{Se(_.id),t.value="overview"}},[v("span",{class:wt(["status-dot",_.health])},null,2),v("span",null,[v("b",null,oe(_.name),1),v("small",null,oe(_.area==="enterprise"?"企业范围":_.area==="public"?"公共区域":"能源设施"),1)]),v("strong",null,oe(Be(_)),1),v("em",null,oe(_.health==="normal"?"正常":_.health==="warning"?"关注":"延迟"),1)],8,BE))),128))])])])],64)):un("",!0),t.value==="carbon"?(ke(),Ve(ut,{key:1},[v("div",zE,[v("div",null,[T[69]||(T[69]=v("span",null,"园区年度 CO₂",-1)),v("strong",null,[ft(oe(We(Et).co2T.toLocaleString())+" ",1),T[68]||(T[68]=v("small",null,"吨",-1))])]),T[70]||(T[70]=v("div",null,[v("span",null,"综合能源消费"),v("strong",null,[ft("待核实 "),v("small",null,"等价值折标")])],-1)),T[71]||(T[71]=v("div",null,[v("span",null,"单位能耗碳排放"),v("strong",null,[ft("待核实 "),v("small",null,"暂停判定")])],-1)),T[72]||(T[72]=v("div",null,[v("span",null,"测算口径"),v("strong",{class:"small-value"},"自然年 · CO₂")],-1))]),v("div",kE,[v("section",HE,[v("div",VE,[T[73]||(T[73]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"园区碳排放分项")],-1)),v("span",GE,"合计 "+oe(We(Et).co2T.toLocaleString())+" 吨 CO₂",1)]),v("div",WE,[v("span",{style:fi({width:We(Et).fuelT/We(Et).co2T*100+"%"})},null,4),v("span",{style:fi({width:We(Et).conversionT/We(Et).co2T*100+"%"})},null,4),v("span",{style:fi({width:We(Et).electricityHeatT/We(Et).co2T*100+"%"})},null,4),v("span",{style:fi({width:We(Et).industrialProcessT/We(Et).co2T*100+"%"})},null,4)]),v("div",XE,[T[74]||(T[74]=v("i",{class:"bar-a"},null,-1)),T[75]||(T[75]=v("span",null,"化石能源用作燃料",-1)),v("strong",null,oe(We(Et).fuelT.toLocaleString())+" 吨",1)]),v("div",YE,[T[76]||(T[76]=v("i",{class:"bar-b"},null,-1)),T[77]||(T[77]=v("span",null,"能源加工转换",-1)),v("strong",null,oe(We(Et).conversionT.toLocaleString())+" 吨",1)]),v("div",qE,[T[78]||(T[78]=v("i",{class:"bar-c"},null,-1)),T[79]||(T[79]=v("span",null,"电力与热力净受入",-1)),v("strong",null,oe(We(Et).electricityHeatT.toLocaleString())+" 吨",1)]),v("div",$E,[T[80]||(T[80]=v("i",{class:"bar-d"},null,-1)),T[81]||(T[81]=v("span",null,"工业生产过程",-1)),v("strong",null,oe(We(Et).industrialProcessT.toLocaleString())+" 吨",1)])]),v("section",jE,[T[85]||(T[85]=v("div",{class:"panel-heading"},[v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"测算依据与追溯")]),v("span",{class:"status-chip review"},"演示测算")],-1)),v("div",KE,[v("div",null,[T[82]||(T[82]=v("span",null,"申报边界",-1)),v("strong",null,oe(We(Os).boundary),1)]),T[84]||(T[84]=Ri("<div><span>核算周期</span><strong>2025 自然年</strong></div><div><span>排放范围</span><strong>能源活动 + 工业过程，仅 CO₂</strong></div><div><span>指标规则</span><strong>发改环资〔2025〕910号附件 3（试行）</strong></div><div><span>核算规则</span><strong>同通知附件 4（试行）</strong></div>",4)),v("div",null,[T[83]||(T[83]=v("span",null,"因子与凭证",-1)),v("strong",null,oe(We(Os).factor),1)])])])]),T[86]||(T[86]=v("p",{class:"workspace-note"},"园区结果应按统一边界核算；企业报表直接相加可能重复计入共用能源和电热转换。监测曲线不等同于年度正式核算。当前为全电示例，燃料及过程排放为零是情景假设；绿电凭证、折标系数均待核实。",-1))],64)):un("",!0),t.value==="readiness"?(ke(),Ve(ut,{key:2},[v("div",ZE,[v("section",JE,[T[87]||(T[87]=v("span",null,"核心指标 · 内部预评估",-1)),T[88]||(T[88]=v("div",null,[v("strong",{class:"small-value"},"暂不判定"),v("small",null,"单位能耗碳排放")],-1)),v("p",null,oe(We(Os).tce)+" 年度用电预算为 "+oe(We(Et).electricityMwh)+" MWh；不能直接当作吨标准煤，也不能套用未匹配的规模档。",1),T[89]||(T[89]=v("span",{class:"status-chip insufficient"},"缺少核算依据",-1))]),T[90]||(T[90]=Ri('<section class="panel readiness-context"><div class="panel-heading"><div><span class="heading-bar"></span><h2>申报基本条件</h2></div><span class="status-chip review">人工核验</span></div><div class="check-row"><span>建设主体资质</span><b>需材料核验</b></div><div class="check-row"><span>明确四至边界</span><b>示意边界待替换</b></div><div class="check-row"><span>统计、计量和监测基础</span><b>部分数据缺口</b></div><div class="check-row"><span>近三年重大事故情况</span><b>需主管材料</b></div><p class="panel-footnote">基本条件与建设指标分开判断；本页不代表正式申报资格或官方验收。</p></section>',1))]),v("section",QE,[T[91]||(T[91]=v("div",{class:"panel-heading"},[v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"建设指标追踪")]),v("span",{class:"muted"},"1 项核心指标 · 5 项引导指标")],-1)),T[92]||(T[92]=v("div",{class:"indicator-table-head"},[v("span",null,"指标"),v("span",null,"当前值"),v("span",null,"试行目标"),v("span",null,"预评估状态"),v("span",null,"数据依据")],-1)),(ke(!0),Ve(ut,null,Qt(We(xd),_=>(ke(),Ve("div",{key:_.id,class:"indicator-table-row"},[v("b",null,oe(_.name),1),v("span",null,oe(_.value),1),v("span",null,oe(_.target),1),v("span",{class:wt(["status-chip",_.status])},oe(We(RS)[_.status]),3),v("small",null,oe(_.evidence),1)]))),128))]),T[93]||(T[93]=Ri('<section class="panel gap-panel"><div class="panel-heading"><div><span class="heading-bar"></span><h2>优先处理的差距</h2></div></div><div class="gap-list"><div><span class="gap-index">00</span><p><b>确认等价值折标与申报适用规模</b><small>核实年度能源消费、折标系数与适用规则；当前核心指标不自动判定。</small></p></div><div><span class="gap-index">01</span><p><b>补齐产品单位能耗证据</b><small>确认各企业适用产品与现行二级能耗限额标准，补充产量和单位能耗数据。</small></p></div><div><span class="gap-index">02</span><p><b>提高工业固废综合利用率</b><small>演示值 76.4%，距试行目标仍差 3.6 个百分点。</small></p></div><div><span class="gap-index">03</span><p><b>复核余热/余冷/余压利用数据</b><small>演示值 46.0%，需复核加权依据并评估回收项目。</small></p></div></div></section>',1))],64)):un("",!0),t.value==="alerts"?(ke(),Ve("div",ew,[v("section",tw,[v("div",nw,[T[94]||(T[94]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"活动告警")],-1)),v("span",iw,oe(We(Hn).length)+" 条演示事件",1)]),(ke(!0),Ve(ut,null,Qt(We(Hn),_=>(ke(),Ve("button",{key:_.id,class:wt(["alert-list-item",{selected:O.value===_.id}]),onClick:p=>{O.value=_.id,u.value=_.objectId}},[v("span",{class:wt(["status-dot",_.level])},null,2),v("span",null,[v("b",null,oe(_.title),1),v("small",null,oe(_.id)+" · "+oe(_.time)+" · "+oe(I.value[_.id]),1)])],10,sw))),128))]),v("section",rw,[v("div",ow,[T[95]||(T[95]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"事件详情")],-1)),v("span",aw,oe(I.value[O.value]),1)]),v("h3",null,oe(L.value.title),1),v("p",null,oe(L.value.text),1),v("div",lw,[v("div",null,[T[96]||(T[96]=v("span",null,"定位对象",-1)),v("strong",null,oe(We(Pn).find(_=>_.id===L.value.objectId)?.name),1)]),v("div",null,[T[97]||(T[97]=v("span",null,"触发时间",-1)),v("strong",null,oe(b.value)+" "+oe(L.value.time),1)]),T[98]||(T[98]=v("div",null,[v("span",null,"数据性质"),v("strong",null,"演示阈值 / 模拟事件")],-1)),T[99]||(T[99]=v("div",null,[v("span",null,"建议动作"),v("strong",null,"核对计量点、生产计划与原始记录")],-1))]),v("div",cw,[v("button",{class:"primary-button",disabled:I.value[O.value]==="已处理",onClick:Xe},oe(I.value[O.value]==="待确认"?"确认并开始处理":I.value[O.value]==="处理中"?"标记已处理":"已处理"),9,uw),v("button",{class:"outline-button",onClick:T[18]||(T[18]=_=>a(L.value.buildingId,L.value.assetId))},"在设备场景定位")]),T[100]||(T[100]=v("p",{class:"panel-footnote"},"演示动作保存在当前页面状态；正式系统应记录责任人、时间和审计轨迹。",-1))])])):un("",!0),t.value==="sources"?(ke(),Ve(ut,{key:4},[v("div",hw,[T[105]||(T[105]=v("div",null,[v("span",null,"接入对象"),v("strong",null,[ft("9 "),v("small",null,"个")])],-1)),v("div",null,[T[102]||(T[102]=v("span",null,"数据点总数",-1)),v("strong",null,[ft(oe(H.value)+" ",1),T[101]||(T[101]=v("small",null,"个",-1))])]),v("div",null,[T[104]||(T[104]=v("span",null,"当前在线",-1)),v("strong",null,[ft(oe(K.value)+" ",1),T[103]||(T[103]=v("small",null,"个",-1))])]),T[106]||(T[106]=v("div",null,[v("span",null,"接入方式"),v("strong",{class:"small-value"},"系统 / 仪表 / 填报")],-1))]),v("div",dw,[v("section",fw,[v("div",{class:"panel-heading"},[T[107]||(T[107]=v("div",null,[v("span",{class:"heading-bar"}),v("h2",null,"数据源连接")],-1)),v("button",{class:"text-action",onClick:le},"模拟重试同步")]),(ke(!0),Ve(ut,null,Qt(We(xl),_=>(ke(),Ve("div",{key:_.id,class:"source-row"},[v("div",pw,oe(_.type==="自动采集"?"仪":_.type==="系统接口"?"接":"填"),1),v("div",null,[v("b",null,oe(_.name),1),v("small",null,oe(_.type)+" · 更新频率 "+oe(_.frequency),1)]),v("strong",null,oe(_.online)+" / "+oe(_.count),1),v("span",{class:wt(["status-chip",_.state==="normal"?"pass":"review"])},oe(_.state==="normal"?"正常":"部分缺失"),3)]))),128))]),T[108]||(T[108]=Ri('<section class="panel wide-panel"><div class="panel-heading"><div><span class="heading-bar"></span><h2>数据需求分组</h2></div></div><div class="requirement-group"><h3>基础数据</h3><p>申报边界、企业与公共设施清单、年度分能源品种消费、受入与送出电热量、适用的工业过程数据、因子来源与凭证。</p><span>缺失时停止相关指标自动判定</span></div><div class="requirement-group"><h3>条件必备</h3><p>适用产品能耗限额、绿电与绿证凭证、特定行业工业过程和相关引导指标数据。</p><span>先判断适用条件，再要求提供证据</span></div><div class="requirement-group"><h3>额外数据</h3><p>天气、视频、设备秒级遥测、能源成本、策略推演参数等。</p><span>用于增强展示和分析</span></div></section>',1))])],64)):un("",!0)])),T[109]||(T[109]=v("footer",{class:"app-footer"},[v("span",null,"DEMO · 演示数据，非真实园区"),v("span",null,"规则参考：发改环资〔2025〕910号附件 3、4（试行）"),v("span",null,"前端交互原型 v0.4")],-1)),ne.value?(ke(),Ve("div",mw,oe(ne.value),1)):un("",!0)]))}});Jg(gw).mount("#app");
