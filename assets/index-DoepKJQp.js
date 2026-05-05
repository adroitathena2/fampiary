(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function Yo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qo={exports:{}},Ol={},Xo={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=Symbol.for("react.element"),zd=Symbol.for("react.portal"),_d=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Rd=Symbol.for("react.context"),Dd=Symbol.for("react.forward_ref"),Id=Symbol.for("react.suspense"),Od=Symbol.for("react.memo"),Ad=Symbol.for("react.lazy"),Es=Symbol.iterator;function Fd(e){return e===null||typeof e!="object"?null:(e=Es&&e[Es]||e["@@iterator"],typeof e=="function"?e:null)}var Ko={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Go=Object.assign,Zo={};function Rt(e,n,t){this.props=e,this.context=n,this.refs=Zo,this.updater=t||Ko}Rt.prototype.isReactComponent={};Rt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Rt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jo(){}Jo.prototype=Rt.prototype;function Na(e,n,t){this.props=e,this.context=n,this.refs=Zo,this.updater=t||Ko}var Ca=Na.prototype=new Jo;Ca.constructor=Na;Go(Ca,Rt.prototype);Ca.isPureReactComponent=!0;var Ps=Array.isArray,qo=Object.prototype.hasOwnProperty,Ea={current:null},eu={key:!0,ref:!0,__self:!0,__source:!0};function nu(e,n,t){var r,l={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)qo.call(n,r)&&!eu.hasOwnProperty(r)&&(l[r]=n[r]);var u=arguments.length-2;if(u===1)l.children=t;else if(1<u){for(var o=Array(u),c=0;c<u;c++)o[c]=arguments[c+2];l.children=o}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Pr,type:e,key:i,ref:a,props:l,_owner:Ea.current}}function Ud(e,n){return{$$typeof:Pr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pr}function $d(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ms=/\/+/g;function ql(e,n){return typeof e=="object"&&e!==null&&e.key!=null?$d(""+e.key):n.toString(36)}function qr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Pr:case zd:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+ql(a,0):r,Ps(l)?(t="",e!=null&&(t=e.replace(Ms,"$&/")+"/"),qr(l,n,t,"",function(c){return c})):l!=null&&(Pa(l)&&(l=Ud(l,t+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Ms,"$&/")+"/")+e)),n.push(l)),1;if(a=0,r=r===""?".":r+":",Ps(e))for(var u=0;u<e.length;u++){i=e[u];var o=r+ql(i,u);a+=qr(i,n,t,o,l)}else if(o=Fd(e),typeof o=="function")for(e=o.call(e),u=0;!(i=e.next()).done;)i=i.value,o=r+ql(i,u++),a+=qr(i,n,t,o,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Dr(e,n,t){if(e==null)return e;var r=[],l=0;return qr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function Bd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},el={transition:null},Hd={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:el,ReactCurrentOwner:Ea};function tu(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Dr,forEach:function(e,n,t){Dr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Dr(e,function(){n++}),n},toArray:function(e){return Dr(e,function(n){return n})||[]},only:function(e){if(!Pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Rt;B.Fragment=_d;B.Profiler=Ld;B.PureComponent=Na;B.StrictMode=bd;B.Suspense=Id;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hd;B.act=tu;B.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Go({},e.props),l=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Ea.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(o in n)qo.call(n,o)&&!eu.hasOwnProperty(o)&&(r[o]=n[o]===void 0&&u!==void 0?u[o]:n[o])}var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){u=Array(o);for(var c=0;c<o;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Pr,type:e.type,key:l,ref:i,props:r,_owner:a}};B.createContext=function(e){return e={$$typeof:Rd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Td,_context:e},e.Consumer=e};B.createElement=nu;B.createFactory=function(e){var n=nu.bind(null,e);return n.type=e,n};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Dd,render:e}};B.isValidElement=Pa;B.lazy=function(e){return{$$typeof:Ad,_payload:{_status:-1,_result:e},_init:Bd}};B.memo=function(e,n){return{$$typeof:Od,type:e,compare:n===void 0?null:n}};B.startTransition=function(e){var n=el.transition;el.transition={};try{e()}finally{el.transition=n}};B.unstable_act=tu;B.useCallback=function(e,n){return ze.current.useCallback(e,n)};B.useContext=function(e){return ze.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};B.useEffect=function(e,n){return ze.current.useEffect(e,n)};B.useId=function(){return ze.current.useId()};B.useImperativeHandle=function(e,n,t){return ze.current.useImperativeHandle(e,n,t)};B.useInsertionEffect=function(e,n){return ze.current.useInsertionEffect(e,n)};B.useLayoutEffect=function(e,n){return ze.current.useLayoutEffect(e,n)};B.useMemo=function(e,n){return ze.current.useMemo(e,n)};B.useReducer=function(e,n,t){return ze.current.useReducer(e,n,t)};B.useRef=function(e){return ze.current.useRef(e)};B.useState=function(e){return ze.current.useState(e)};B.useSyncExternalStore=function(e,n,t){return ze.current.useSyncExternalStore(e,n,t)};B.useTransition=function(){return ze.current.useTransition()};B.version="18.3.1";Xo.exports=B;var w=Xo.exports;const Qt=Yo(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd=w,Wd=Symbol.for("react.element"),Yd=Symbol.for("react.fragment"),Qd=Object.prototype.hasOwnProperty,Xd=Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kd={key:!0,ref:!0,__self:!0,__source:!0};function ru(e,n,t){var r,l={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Qd.call(n,r)&&!Kd.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Wd,type:e,key:i,ref:a,props:l,_owner:Xd.current}}Ol.Fragment=Yd;Ol.jsx=ru;Ol.jsxs=ru;Qo.exports=Ol;var s=Qo.exports,zi={},lu={exports:{}},$e={},iu={exports:{}},au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,I){var $=E.length;E.push(I);e:for(;0<$;){var Z=$-1>>>1,oe=E[Z];if(0<l(oe,I))E[Z]=I,E[$]=oe,$=Z;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var I=E[0],$=E.pop();if($!==I){E[0]=$;e:for(var Z=0,oe=E.length,He=oe>>>1;Z<He;){var Se=2*(Z+1)-1,Hn=E[Se],fn=Se+1,be=E[fn];if(0>l(Hn,$))fn<oe&&0>l(be,Hn)?(E[Z]=be,E[fn]=$,Z=fn):(E[Z]=Hn,E[Se]=$,Z=Se);else if(fn<oe&&0>l(be,$))E[Z]=be,E[fn]=$,Z=fn;else break e}}return I}function l(E,I){var $=E.sortIndex-I.sortIndex;return $!==0?$:E.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var o=[],c=[],v=1,f=null,h=3,k=!1,j=!1,P=!1,U=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var I=t(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=E)r(c),I.sortIndex=I.expirationTime,n(o,I);else break;I=t(c)}}function y(E){if(P=!1,m(E),!j)if(t(o)!==null)j=!0,ie(M);else{var I=t(c);I!==null&&de(y,I.startTime-E)}}function M(E,I){j=!1,P&&(P=!1,p(S),S=-1),k=!0;var $=h;try{for(m(I),f=t(o);f!==null&&(!(f.expirationTime>I)||E&&!Q());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var oe=Z(f.expirationTime<=I);I=e.unstable_now(),typeof oe=="function"?f.callback=oe:f===t(o)&&r(o),m(I)}else r(o);f=t(o)}if(f!==null)var He=!0;else{var Se=t(c);Se!==null&&de(y,Se.startTime-I),He=!1}return He}finally{f=null,h=$,k=!1}}var N=!1,g=null,S=-1,_=5,R=-1;function Q(){return!(e.unstable_now()-R<_)}function X(){if(g!==null){var E=e.unstable_now();R=E;var I=!0;try{I=g(!0,E)}finally{I?z():(N=!1,g=null)}}else N=!1}var z;if(typeof d=="function")z=function(){d(X)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,b=K.port2;K.port1.onmessage=X,z=function(){b.postMessage(null)}}else z=function(){U(X,0)};function ie(E){g=E,N||(N=!0,z())}function de(E,I){S=U(function(){E(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){j||k||(j=!0,ie(M))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var $=h;h=I;try{return E()}finally{h=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,I){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var $=h;h=E;try{return I()}finally{h=$}},e.unstable_scheduleCallback=function(E,I,$){var Z=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Z+$:Z):$=Z,E){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=$+oe,E={id:v++,callback:I,priorityLevel:E,startTime:$,expirationTime:oe,sortIndex:-1},$>Z?(E.sortIndex=$,n(c,E),t(o)===null&&E===t(c)&&(P?(p(S),S=-1):P=!0,de(y,$-Z))):(E.sortIndex=oe,n(o,E),j||k||(j=!0,ie(M))),E},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(E){var I=h;return function(){var $=h;h=I;try{return E.apply(this,arguments)}finally{h=$}}}})(au);iu.exports=au;var Gd=iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=w,Ue=Gd;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var su=new Set,or={};function tt(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(or[e]=n,e=0;e<n.length;e++)su.add(n[e])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_i=Object.prototype.hasOwnProperty,Jd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zs={},_s={};function qd(e){return _i.call(_s,e)?!0:_i.call(zs,e)?!1:Jd.test(e)?_s[e]=!0:(zs[e]=!0,!1)}function ef(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nf(e,n,t,r){if(n===null||typeof n>"u"||ef(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _e(e,n,t,r,l,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];we[n]=new _e(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ma=/[\-:]([a-z])/g;function za(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ma,za);we[n]=new _e(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ma,za);we[n]=new _e(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ma,za);we[n]=new _e(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function _a(e,n,t,r){var l=we.hasOwnProperty(n)?we[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(nf(n,t,l,r)&&(t=null),r||l===null?qd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Sn=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ir=Symbol.for("react.element"),ot=Symbol.for("react.portal"),ut=Symbol.for("react.fragment"),ba=Symbol.for("react.strict_mode"),bi=Symbol.for("react.profiler"),ou=Symbol.for("react.provider"),uu=Symbol.for("react.context"),La=Symbol.for("react.forward_ref"),Li=Symbol.for("react.suspense"),Ti=Symbol.for("react.suspense_list"),Ta=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),cu=Symbol.for("react.offscreen"),bs=Symbol.iterator;function At(e){return e===null||typeof e!="object"?null:(e=bs&&e[bs]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,ei;function Xt(e){if(ei===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ei=n&&n[1]||""}return`
`+ei+e}var ni=!1;function ti(e,n){if(!e||ni)return"";ni=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,u=i.length-1;1<=a&&0<=u&&l[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(l[a]!==i[u]){if(a!==1||u!==1)do if(a--,u--,0>u||l[a]!==i[u]){var o=`
`+l[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=u);break}}}finally{ni=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Xt(e):""}function tf(e){switch(e.tag){case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 2:case 15:return e=ti(e.type,!1),e;case 11:return e=ti(e.type.render,!1),e;case 1:return e=ti(e.type,!0),e;default:return""}}function Ri(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ut:return"Fragment";case ot:return"Portal";case bi:return"Profiler";case ba:return"StrictMode";case Li:return"Suspense";case Ti:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uu:return(e.displayName||"Context")+".Consumer";case ou:return(e._context.displayName||"Context")+".Provider";case La:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ta:return n=e.displayName||null,n!==null?n:Ri(e.type)||"Memo";case Nn:n=e._payload,e=e._init;try{return Ri(e(n))}catch{}}return null}function rf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ri(n);case 8:return n===ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function du(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function lf(e){var n=du(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Or(e){e._valueTracker||(e._valueTracker=lf(e))}function fu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=du(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function fl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Di(e,n){var t=n.checked;return le({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ls(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=An(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function pu(e,n){n=n.checked,n!=null&&_a(e,"checked",n,!1)}function Ii(e,n){pu(e,n);var t=An(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Oi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Oi(e,n.type,An(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ts(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Oi(e,n,t){(n!=="number"||fl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Kt=Array.isArray;function kt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+An(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Ai(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return le({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(Kt(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:An(t)}}function hu(e,n){var t=An(n.value),r=An(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ds(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function mu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?mu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ar,gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ur(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},af=["Webkit","ms","Moz","O"];Object.keys(Jt).forEach(function(e){af.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Jt[n]=Jt[e]})});function vu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Jt.hasOwnProperty(e)&&Jt[e]?(""+n).trim():n+"px"}function yu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=vu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var sf=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ui(e,n){if(n){if(sf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function $i(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function Ra(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,wt=null,St=null;function Is(e){if(e=_r(e)){if(typeof Hi!="function")throw Error(C(280));var n=e.stateNode;n&&(n=Bl(n),Hi(e.stateNode,e.type,n))}}function xu(e){wt?St?St.push(e):St=[e]:wt=e}function ku(){if(wt){var e=wt,n=St;if(St=wt=null,Is(e),n)for(e=0;e<n.length;e++)Is(n[e])}}function wu(e,n){return e(n)}function Su(){}var ri=!1;function ju(e,n,t){if(ri)return e(n,t);ri=!0;try{return wu(e,n,t)}finally{ri=!1,(wt!==null||St!==null)&&(Su(),ku())}}function cr(e,n){var t=e.stateNode;if(t===null)return null;var r=Bl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var Vi=!1;if(yn)try{var Ft={};Object.defineProperty(Ft,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",Ft,Ft),window.removeEventListener("test",Ft,Ft)}catch{Vi=!1}function of(e,n,t,r,l,i,a,u,o){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(v){this.onError(v)}}var qt=!1,pl=null,hl=!1,Wi=null,uf={onError:function(e){qt=!0,pl=e}};function cf(e,n,t,r,l,i,a,u,o){qt=!1,pl=null,of.apply(uf,arguments)}function df(e,n,t,r,l,i,a,u,o){if(cf.apply(this,arguments),qt){if(qt){var c=pl;qt=!1,pl=null}else throw Error(C(198));hl||(hl=!0,Wi=c)}}function rt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Nu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Os(e){if(rt(e)!==e)throw Error(C(188))}function ff(e){var n=e.alternate;if(!n){if(n=rt(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Os(l),e;if(i===r)return Os(l),n;i=i.sibling}throw Error(C(188))}if(t.return!==r.return)t=l,r=i;else{for(var a=!1,u=l.child;u;){if(u===t){a=!0,t=l,r=i;break}if(u===r){a=!0,r=l,t=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===t){a=!0,t=i,r=l;break}if(u===r){a=!0,r=i,t=l;break}u=u.sibling}if(!a)throw Error(C(189))}}if(t.alternate!==r)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function Cu(e){return e=ff(e),e!==null?Eu(e):null}function Eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Eu(e);if(n!==null)return n;e=e.sibling}return null}var Pu=Ue.unstable_scheduleCallback,As=Ue.unstable_cancelCallback,pf=Ue.unstable_shouldYield,hf=Ue.unstable_requestPaint,se=Ue.unstable_now,mf=Ue.unstable_getCurrentPriorityLevel,Da=Ue.unstable_ImmediatePriority,Mu=Ue.unstable_UserBlockingPriority,ml=Ue.unstable_NormalPriority,gf=Ue.unstable_LowPriority,zu=Ue.unstable_IdlePriority,Al=null,cn=null;function vf(e){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Al,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:kf,yf=Math.log,xf=Math.LN2;function kf(e){return e>>>=0,e===0?32:31-(yf(e)/xf|0)|0}var Fr=64,Ur=4194304;function Gt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gl(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var u=a&~l;u!==0?r=Gt(u):(i&=a,i!==0&&(r=Gt(i)))}else a=t&~l,a!==0?r=Gt(a):i!==0&&(r=Gt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-rn(n),l=1<<t,r|=e[t],n&=~l;return r}function wf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-rn(i),u=1<<a,o=l[a];o===-1?(!(u&t)||u&r)&&(l[a]=wf(u,n)):o<=n&&(e.expiredLanes|=u),i&=~u}}function Yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _u(){var e=Fr;return Fr<<=1,!(Fr&4194240)&&(Fr=64),e}function li(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Mr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-rn(n),e[n]=t}function jf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-rn(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Ia(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-rn(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var G=0;function bu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lu,Oa,Tu,Ru,Du,Qi=!1,$r=[],_n=null,bn=null,Ln=null,dr=new Map,fr=new Map,En=[],Nf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fs(e,n){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":dr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(n.pointerId)}}function Ut(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=_r(n),n!==null&&Oa(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Cf(e,n,t,r,l){switch(n){case"focusin":return _n=Ut(_n,e,n,t,r,l),!0;case"dragenter":return bn=Ut(bn,e,n,t,r,l),!0;case"mouseover":return Ln=Ut(Ln,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return dr.set(i,Ut(dr.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,fr.set(i,Ut(fr.get(i)||null,e,n,t,r,l)),!0}return!1}function Iu(e){var n=Yn(e.target);if(n!==null){var t=rt(n);if(t!==null){if(n=t.tag,n===13){if(n=Nu(t),n!==null){e.blockedOn=n,Du(e.priority,function(){Tu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Xi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Bi=r,t.target.dispatchEvent(r),Bi=null}else return n=_r(t),n!==null&&Oa(n),e.blockedOn=t,!1;n.shift()}return!0}function Us(e,n,t){nl(e)&&t.delete(n)}function Ef(){Qi=!1,_n!==null&&nl(_n)&&(_n=null),bn!==null&&nl(bn)&&(bn=null),Ln!==null&&nl(Ln)&&(Ln=null),dr.forEach(Us),fr.forEach(Us)}function $t(e,n){e.blockedOn===n&&(e.blockedOn=null,Qi||(Qi=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,Ef)))}function pr(e){function n(l){return $t(l,e)}if(0<$r.length){$t($r[0],e);for(var t=1;t<$r.length;t++){var r=$r[t];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&$t(_n,e),bn!==null&&$t(bn,e),Ln!==null&&$t(Ln,e),dr.forEach(n),fr.forEach(n),t=0;t<En.length;t++)r=En[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(t=En[0],t.blockedOn===null);)Iu(t),t.blockedOn===null&&En.shift()}var jt=Sn.ReactCurrentBatchConfig,vl=!0;function Pf(e,n,t,r){var l=G,i=jt.transition;jt.transition=null;try{G=1,Aa(e,n,t,r)}finally{G=l,jt.transition=i}}function Mf(e,n,t,r){var l=G,i=jt.transition;jt.transition=null;try{G=4,Aa(e,n,t,r)}finally{G=l,jt.transition=i}}function Aa(e,n,t,r){if(vl){var l=Xi(e,n,t,r);if(l===null)hi(e,n,r,yl,t),Fs(e,r);else if(Cf(l,e,n,t,r))r.stopPropagation();else if(Fs(e,r),n&4&&-1<Nf.indexOf(e)){for(;l!==null;){var i=_r(l);if(i!==null&&Lu(i),i=Xi(e,n,t,r),i===null&&hi(e,n,r,yl,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else hi(e,n,r,null,t)}}var yl=null;function Xi(e,n,t,r){if(yl=null,e=Ra(r),e=Yn(e),e!==null)if(n=rt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Nu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return yl=e,null}function Ou(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mf()){case Da:return 1;case Mu:return 4;case ml:case gf:return 16;case zu:return 536870912;default:return 16}default:return 16}}var Mn=null,Fa=null,tl=null;function Au(){if(tl)return tl;var e,n=Fa,t=n.length,r,l="value"in Mn?Mn.value:Mn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===l[i-r];r++);return tl=l.slice(e,1<r?1-r:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function $s(){return!1}function Be(e){function n(t,r,l,i,a){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Br:$s,this.isPropagationStopped=$s,this}return le(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),n}var Dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ua=Be(Dt),zr=le({},Dt,{view:0,detail:0}),zf=Be(zr),ii,ai,Bt,Fl=le({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bt&&(Bt&&e.type==="mousemove"?(ii=e.screenX-Bt.screenX,ai=e.screenY-Bt.screenY):ai=ii=0,Bt=e),ii)},movementY:function(e){return"movementY"in e?e.movementY:ai}}),Bs=Be(Fl),_f=le({},Fl,{dataTransfer:0}),bf=Be(_f),Lf=le({},zr,{relatedTarget:0}),si=Be(Lf),Tf=le({},Dt,{animationName:0,elapsedTime:0,pseudoElement:0}),Rf=Be(Tf),Df=le({},Dt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),If=Be(Df),Of=le({},Dt,{data:0}),Hs=Be(Of),Af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $f(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Uf[e])?!!n[e]:!1}function $a(){return $f}var Bf=le({},zr,{key:function(e){if(e.key){var n=Af[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$a,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hf=Be(Bf),Vf=le({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vs=Be(Vf),Wf=le({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$a}),Yf=Be(Wf),Qf=le({},Dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xf=Be(Qf),Kf=le({},Fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gf=Be(Kf),Zf=[9,13,27,32],Ba=yn&&"CompositionEvent"in window,er=null;yn&&"documentMode"in document&&(er=document.documentMode);var Jf=yn&&"TextEvent"in window&&!er,Fu=yn&&(!Ba||er&&8<er&&11>=er),Ws=" ",Ys=!1;function Uu(e,n){switch(e){case"keyup":return Zf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $u(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ct=!1;function qf(e,n){switch(e){case"compositionend":return $u(n);case"keypress":return n.which!==32?null:(Ys=!0,Ws);case"textInput":return e=n.data,e===Ws&&Ys?null:e;default:return null}}function ep(e,n){if(ct)return e==="compositionend"||!Ba&&Uu(e,n)?(e=Au(),tl=Fa=Mn=null,ct=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fu&&n.locale!=="ko"?null:n.data;default:return null}}var np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!np[e.type]:n==="textarea"}function Bu(e,n,t,r){xu(r),n=xl(n,"onChange"),0<n.length&&(t=new Ua("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var nr=null,hr=null;function tp(e){qu(e,0)}function Ul(e){var n=pt(e);if(fu(n))return e}function rp(e,n){if(e==="change")return n}var Hu=!1;if(yn){var oi;if(yn){var ui="oninput"in document;if(!ui){var Xs=document.createElement("div");Xs.setAttribute("oninput","return;"),ui=typeof Xs.oninput=="function"}oi=ui}else oi=!1;Hu=oi&&(!document.documentMode||9<document.documentMode)}function Ks(){nr&&(nr.detachEvent("onpropertychange",Vu),hr=nr=null)}function Vu(e){if(e.propertyName==="value"&&Ul(hr)){var n=[];Bu(n,hr,e,Ra(e)),ju(tp,n)}}function lp(e,n,t){e==="focusin"?(Ks(),nr=n,hr=t,nr.attachEvent("onpropertychange",Vu)):e==="focusout"&&Ks()}function ip(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ul(hr)}function ap(e,n){if(e==="click")return Ul(n)}function sp(e,n){if(e==="input"||e==="change")return Ul(n)}function op(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var an=typeof Object.is=="function"?Object.is:op;function mr(e,n){if(an(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!_i.call(n,l)||!an(e[l],n[l]))return!1}return!0}function Gs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zs(e,n){var t=Gs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Gs(t)}}function Wu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yu(){for(var e=window,n=fl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=fl(e.document)}return n}function Ha(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function up(e){var n=Yu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wu(t.ownerDocument.documentElement,t)){if(r!==null&&Ha(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Zs(t,i);var a=Zs(t,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cp=yn&&"documentMode"in document&&11>=document.documentMode,dt=null,Ki=null,tr=null,Gi=!1;function Js(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Gi||dt==null||dt!==fl(r)||(r=dt,"selectionStart"in r&&Ha(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),tr&&mr(tr,r)||(tr=r,r=xl(Ki,"onSelect"),0<r.length&&(n=new Ua("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=dt)))}function Hr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ft={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionend:Hr("Transition","TransitionEnd")},ci={},Qu={};yn&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete ft.animationend.animation,delete ft.animationiteration.animation,delete ft.animationstart.animation),"TransitionEvent"in window||delete ft.transitionend.transition);function $l(e){if(ci[e])return ci[e];if(!ft[e])return e;var n=ft[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Qu)return ci[e]=n[t];return e}var Xu=$l("animationend"),Ku=$l("animationiteration"),Gu=$l("animationstart"),Zu=$l("transitionend"),Ju=new Map,qs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,n){Ju.set(e,n),tt(n,[e])}for(var di=0;di<qs.length;di++){var fi=qs[di],dp=fi.toLowerCase(),fp=fi[0].toUpperCase()+fi.slice(1);Un(dp,"on"+fp)}Un(Xu,"onAnimationEnd");Un(Ku,"onAnimationIteration");Un(Gu,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(Zu,"onTransitionEnd");Pt("onMouseEnter",["mouseout","mouseover"]);Pt("onMouseLeave",["mouseout","mouseover"]);Pt("onPointerEnter",["pointerout","pointerover"]);Pt("onPointerLeave",["pointerout","pointerover"]);tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zt));function eo(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,df(r,n,void 0,e),e.currentTarget=null}function qu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var u=r[a],o=u.instance,c=u.currentTarget;if(u=u.listener,o!==i&&l.isPropagationStopped())break e;eo(l,u,c),i=o}else for(a=0;a<r.length;a++){if(u=r[a],o=u.instance,c=u.currentTarget,u=u.listener,o!==i&&l.isPropagationStopped())break e;eo(l,u,c),i=o}}}if(hl)throw e=Wi,hl=!1,Wi=null,e}function q(e,n){var t=n[na];t===void 0&&(t=n[na]=new Set);var r=e+"__bubble";t.has(r)||(ec(n,e,2,!1),t.add(r))}function pi(e,n,t){var r=0;n&&(r|=4),ec(t,e,r,n)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function gr(e){if(!e[Vr]){e[Vr]=!0,su.forEach(function(t){t!=="selectionchange"&&(pp.has(t)||pi(t,!1,e),pi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vr]||(n[Vr]=!0,pi("selectionchange",!1,n))}}function ec(e,n,t,r){switch(Ou(n)){case 1:var l=Pf;break;case 4:l=Mf;break;default:l=Aa}t=l.bind(null,n,t,e),l=void 0,!Vi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function hi(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===l||o.nodeType===8&&o.parentNode===l))return;a=a.return}for(;u!==null;){if(a=Yn(u),a===null)return;if(o=a.tag,o===5||o===6){r=i=a;continue e}u=u.parentNode}}r=r.return}ju(function(){var c=i,v=Ra(t),f=[];e:{var h=Ju.get(e);if(h!==void 0){var k=Ua,j=e;switch(e){case"keypress":if(rl(t)===0)break e;case"keydown":case"keyup":k=Hf;break;case"focusin":j="focus",k=si;break;case"focusout":j="blur",k=si;break;case"beforeblur":case"afterblur":k=si;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=bf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Yf;break;case Xu:case Ku:case Gu:k=Rf;break;case Zu:k=Xf;break;case"scroll":k=zf;break;case"wheel":k=Gf;break;case"copy":case"cut":case"paste":k=If;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Vs}var P=(n&4)!==0,U=!P&&e==="scroll",p=P?h!==null?h+"Capture":null:h;P=[];for(var d=c,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=cr(d,p),y!=null&&P.push(vr(d,y,m)))),U)break;d=d.return}0<P.length&&(h=new k(h,j,null,t,v),f.push({event:h,listeners:P}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&t!==Bi&&(j=t.relatedTarget||t.fromElement)&&(Yn(j)||j[xn]))break e;if((k||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,k?(j=t.relatedTarget||t.toElement,k=c,j=j?Yn(j):null,j!==null&&(U=rt(j),j!==U||j.tag!==5&&j.tag!==6)&&(j=null)):(k=null,j=c),k!==j)){if(P=Bs,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(P=Vs,y="onPointerLeave",p="onPointerEnter",d="pointer"),U=k==null?h:pt(k),m=j==null?h:pt(j),h=new P(y,d+"leave",k,t,v),h.target=U,h.relatedTarget=m,y=null,Yn(v)===c&&(P=new P(p,d+"enter",j,t,v),P.target=m,P.relatedTarget=U,y=P),U=y,k&&j)n:{for(P=k,p=j,d=0,m=P;m;m=st(m))d++;for(m=0,y=p;y;y=st(y))m++;for(;0<d-m;)P=st(P),d--;for(;0<m-d;)p=st(p),m--;for(;d--;){if(P===p||p!==null&&P===p.alternate)break n;P=st(P),p=st(p)}P=null}else P=null;k!==null&&no(f,h,k,P,!1),j!==null&&U!==null&&no(f,U,j,P,!0)}}e:{if(h=c?pt(c):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var M=rp;else if(Qs(h))if(Hu)M=sp;else{M=ip;var N=lp}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=ap);if(M&&(M=M(e,c))){Bu(f,M,t,v);break e}N&&N(e,h,c),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Oi(h,"number",h.value)}switch(N=c?pt(c):window,e){case"focusin":(Qs(N)||N.contentEditable==="true")&&(dt=N,Ki=c,tr=null);break;case"focusout":tr=Ki=dt=null;break;case"mousedown":Gi=!0;break;case"contextmenu":case"mouseup":case"dragend":Gi=!1,Js(f,t,v);break;case"selectionchange":if(cp)break;case"keydown":case"keyup":Js(f,t,v)}var g;if(Ba)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else ct?Uu(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(Fu&&t.locale!=="ko"&&(ct||S!=="onCompositionStart"?S==="onCompositionEnd"&&ct&&(g=Au()):(Mn=v,Fa="value"in Mn?Mn.value:Mn.textContent,ct=!0)),N=xl(c,S),0<N.length&&(S=new Hs(S,e,null,t,v),f.push({event:S,listeners:N}),g?S.data=g:(g=$u(t),g!==null&&(S.data=g)))),(g=Jf?qf(e,t):ep(e,t))&&(c=xl(c,"onBeforeInput"),0<c.length&&(v=new Hs("onBeforeInput","beforeinput",null,t,v),f.push({event:v,listeners:c}),v.data=g))}qu(f,n)})}function vr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function xl(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=cr(e,t),i!=null&&r.unshift(vr(e,i,l)),i=cr(e,n),i!=null&&r.push(vr(e,i,l))),e=e.return}return r}function st(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function no(e,n,t,r,l){for(var i=n._reactName,a=[];t!==null&&t!==r;){var u=t,o=u.alternate,c=u.stateNode;if(o!==null&&o===r)break;u.tag===5&&c!==null&&(u=c,l?(o=cr(t,i),o!=null&&a.unshift(vr(t,o,u))):l||(o=cr(t,i),o!=null&&a.push(vr(t,o,u)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var hp=/\r\n?/g,mp=/\u0000|\uFFFD/g;function to(e){return(typeof e=="string"?e:""+e).replace(hp,`
`).replace(mp,"")}function Wr(e,n,t){if(n=to(n),to(e)!==n&&t)throw Error(C(425))}function kl(){}var Zi=null,Ji=null;function qi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ea=typeof setTimeout=="function"?setTimeout:void 0,gp=typeof clearTimeout=="function"?clearTimeout:void 0,ro=typeof Promise=="function"?Promise:void 0,vp=typeof queueMicrotask=="function"?queueMicrotask:typeof ro<"u"?function(e){return ro.resolve(null).then(e).catch(yp)}:ea;function yp(e){setTimeout(function(){throw e})}function mi(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),pr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);pr(n)}function Tn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function lo(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var It=Math.random().toString(36).slice(2),un="__reactFiber$"+It,yr="__reactProps$"+It,xn="__reactContainer$"+It,na="__reactEvents$"+It,xp="__reactListeners$"+It,kp="__reactHandles$"+It;function Yn(e){var n=e[un];if(n)return n;for(var t=e.parentNode;t;){if(n=t[xn]||t[un]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=lo(e);e!==null;){if(t=e[un])return t;e=lo(e)}return n}e=t,t=e.parentNode}return null}function _r(e){return e=e[un]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Bl(e){return e[yr]||null}var ta=[],ht=-1;function $n(e){return{current:e}}function ee(e){0>ht||(e.current=ta[ht],ta[ht]=null,ht--)}function J(e,n){ht++,ta[ht]=e.current,e.current=n}var Fn={},Ee=$n(Fn),Re=$n(!1),Zn=Fn;function Mt(e,n){var t=e.type.contextTypes;if(!t)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function De(e){return e=e.childContextTypes,e!=null}function wl(){ee(Re),ee(Ee)}function io(e,n,t){if(Ee.current!==Fn)throw Error(C(168));J(Ee,n),J(Re,t)}function nc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(C(108,rf(e)||"Unknown",l));return le({},t,r)}function Sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,Zn=Ee.current,J(Ee,e),J(Re,Re.current),!0}function ao(e,n,t){var r=e.stateNode;if(!r)throw Error(C(169));t?(e=nc(e,n,Zn),r.__reactInternalMemoizedMergedChildContext=e,ee(Re),ee(Ee),J(Ee,e)):ee(Re),J(Re,t)}var hn=null,Hl=!1,gi=!1;function tc(e){hn===null?hn=[e]:hn.push(e)}function wp(e){Hl=!0,tc(e)}function Bn(){if(!gi&&hn!==null){gi=!0;var e=0,n=G;try{var t=hn;for(G=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}hn=null,Hl=!1}catch(l){throw hn!==null&&(hn=hn.slice(e+1)),Pu(Da,Bn),l}finally{G=n,gi=!1}}return null}var mt=[],gt=0,jl=null,Nl=0,Ve=[],We=0,Jn=null,mn=1,gn="";function Vn(e,n){mt[gt++]=Nl,mt[gt++]=jl,jl=e,Nl=n}function rc(e,n,t){Ve[We++]=mn,Ve[We++]=gn,Ve[We++]=Jn,Jn=e;var r=mn;e=gn;var l=32-rn(r)-1;r&=~(1<<l),t+=1;var i=32-rn(n)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,mn=1<<32-rn(n)+l|t<<l|r,gn=i+e}else mn=1<<i|t<<l|r,gn=e}function Va(e){e.return!==null&&(Vn(e,1),rc(e,1,0))}function Wa(e){for(;e===jl;)jl=mt[--gt],mt[gt]=null,Nl=mt[--gt],mt[gt]=null;for(;e===Jn;)Jn=Ve[--We],Ve[We]=null,gn=Ve[--We],Ve[We]=null,mn=Ve[--We],Ve[We]=null}var Fe=null,Ae=null,ne=!1,tn=null;function lc(e,n){var t=Ye(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function so(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Fe=e,Ae=Tn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Fe=e,Ae=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Jn!==null?{id:mn,overflow:gn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ye(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Fe=e,Ae=null,!0):!1;default:return!1}}function ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function la(e){if(ne){var n=Ae;if(n){var t=n;if(!so(e,n)){if(ra(e))throw Error(C(418));n=Tn(t.nextSibling);var r=Fe;n&&so(e,n)?lc(r,t):(e.flags=e.flags&-4097|2,ne=!1,Fe=e)}}else{if(ra(e))throw Error(C(418));e.flags=e.flags&-4097|2,ne=!1,Fe=e}}}function oo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function Yr(e){if(e!==Fe)return!1;if(!ne)return oo(e),ne=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!qi(e.type,e.memoizedProps)),n&&(n=Ae)){if(ra(e))throw ic(),Error(C(418));for(;n;)lc(e,n),n=Tn(n.nextSibling)}if(oo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ae=Tn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ae=null}}else Ae=Fe?Tn(e.stateNode.nextSibling):null;return!0}function ic(){for(var e=Ae;e;)e=Tn(e.nextSibling)}function zt(){Ae=Fe=null,ne=!1}function Ya(e){tn===null?tn=[e]:tn.push(e)}var Sp=Sn.ReactCurrentBatchConfig;function Ht(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var r=t.stateNode}if(!r)throw Error(C(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var u=l.refs;a===null?delete u[i]:u[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function Qr(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function uo(e){var n=e._init;return n(e._payload)}function ac(e){function n(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function l(p,d){return p=On(p,d),p.index=0,p.sibling=null,p}function i(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function u(p,d,m,y){return d===null||d.tag!==6?(d=ji(m,p.mode,y),d.return=p,d):(d=l(d,m),d.return=p,d)}function o(p,d,m,y){var M=m.type;return M===ut?v(p,d,m.props.children,y,m.key):d!==null&&(d.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Nn&&uo(M)===d.type)?(y=l(d,m.props),y.ref=Ht(p,d,m),y.return=p,y):(y=cl(m.type,m.key,m.props,null,p.mode,y),y.ref=Ht(p,d,m),y.return=p,y)}function c(p,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Ni(m,p.mode,y),d.return=p,d):(d=l(d,m.children||[]),d.return=p,d)}function v(p,d,m,y,M){return d===null||d.tag!==7?(d=Gn(m,p.mode,y,M),d.return=p,d):(d=l(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ji(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ir:return m=cl(d.type,d.key,d.props,null,p.mode,m),m.ref=Ht(p,null,d),m.return=p,m;case ot:return d=Ni(d,p.mode,m),d.return=p,d;case Nn:var y=d._init;return f(p,y(d._payload),m)}if(Kt(d)||At(d))return d=Gn(d,p.mode,m,null),d.return=p,d;Qr(p,d)}return null}function h(p,d,m,y){var M=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return M!==null?null:u(p,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ir:return m.key===M?o(p,d,m,y):null;case ot:return m.key===M?c(p,d,m,y):null;case Nn:return M=m._init,h(p,d,M(m._payload),y)}if(Kt(m)||At(m))return M!==null?null:v(p,d,m,y,null);Qr(p,m)}return null}function k(p,d,m,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,u(d,p,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ir:return p=p.get(y.key===null?m:y.key)||null,o(d,p,y,M);case ot:return p=p.get(y.key===null?m:y.key)||null,c(d,p,y,M);case Nn:var N=y._init;return k(p,d,m,N(y._payload),M)}if(Kt(y)||At(y))return p=p.get(m)||null,v(d,p,y,M,null);Qr(d,y)}return null}function j(p,d,m,y){for(var M=null,N=null,g=d,S=d=0,_=null;g!==null&&S<m.length;S++){g.index>S?(_=g,g=null):_=g.sibling;var R=h(p,g,m[S],y);if(R===null){g===null&&(g=_);break}e&&g&&R.alternate===null&&n(p,g),d=i(R,d,S),N===null?M=R:N.sibling=R,N=R,g=_}if(S===m.length)return t(p,g),ne&&Vn(p,S),M;if(g===null){for(;S<m.length;S++)g=f(p,m[S],y),g!==null&&(d=i(g,d,S),N===null?M=g:N.sibling=g,N=g);return ne&&Vn(p,S),M}for(g=r(p,g);S<m.length;S++)_=k(g,p,S,m[S],y),_!==null&&(e&&_.alternate!==null&&g.delete(_.key===null?S:_.key),d=i(_,d,S),N===null?M=_:N.sibling=_,N=_);return e&&g.forEach(function(Q){return n(p,Q)}),ne&&Vn(p,S),M}function P(p,d,m,y){var M=At(m);if(typeof M!="function")throw Error(C(150));if(m=M.call(m),m==null)throw Error(C(151));for(var N=M=null,g=d,S=d=0,_=null,R=m.next();g!==null&&!R.done;S++,R=m.next()){g.index>S?(_=g,g=null):_=g.sibling;var Q=h(p,g,R.value,y);if(Q===null){g===null&&(g=_);break}e&&g&&Q.alternate===null&&n(p,g),d=i(Q,d,S),N===null?M=Q:N.sibling=Q,N=Q,g=_}if(R.done)return t(p,g),ne&&Vn(p,S),M;if(g===null){for(;!R.done;S++,R=m.next())R=f(p,R.value,y),R!==null&&(d=i(R,d,S),N===null?M=R:N.sibling=R,N=R);return ne&&Vn(p,S),M}for(g=r(p,g);!R.done;S++,R=m.next())R=k(g,p,S,R.value,y),R!==null&&(e&&R.alternate!==null&&g.delete(R.key===null?S:R.key),d=i(R,d,S),N===null?M=R:N.sibling=R,N=R);return e&&g.forEach(function(X){return n(p,X)}),ne&&Vn(p,S),M}function U(p,d,m,y){if(typeof m=="object"&&m!==null&&m.type===ut&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ir:e:{for(var M=m.key,N=d;N!==null;){if(N.key===M){if(M=m.type,M===ut){if(N.tag===7){t(p,N.sibling),d=l(N,m.props.children),d.return=p,p=d;break e}}else if(N.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Nn&&uo(M)===N.type){t(p,N.sibling),d=l(N,m.props),d.ref=Ht(p,N,m),d.return=p,p=d;break e}t(p,N);break}else n(p,N);N=N.sibling}m.type===ut?(d=Gn(m.props.children,p.mode,y,m.key),d.return=p,p=d):(y=cl(m.type,m.key,m.props,null,p.mode,y),y.ref=Ht(p,d,m),y.return=p,p=y)}return a(p);case ot:e:{for(N=m.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){t(p,d.sibling),d=l(d,m.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=Ni(m,p.mode,y),d.return=p,p=d}return a(p);case Nn:return N=m._init,U(p,d,N(m._payload),y)}if(Kt(m))return j(p,d,m,y);if(At(m))return P(p,d,m,y);Qr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(t(p,d.sibling),d=l(d,m),d.return=p,p=d):(t(p,d),d=ji(m,p.mode,y),d.return=p,p=d),a(p)):t(p,d)}return U}var _t=ac(!0),sc=ac(!1),Cl=$n(null),El=null,vt=null,Qa=null;function Xa(){Qa=vt=El=null}function Ka(e){var n=Cl.current;ee(Cl),e._currentValue=n}function ia(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Nt(e,n){El=e,Qa=vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Te=!0),e.firstContext=null)}function Xe(e){var n=e._currentValue;if(Qa!==e)if(e={context:e,memoizedValue:n,next:null},vt===null){if(El===null)throw Error(C(308));vt=e,El.dependencies={lanes:0,firstContext:e}}else vt=vt.next=e;return n}var Qn=null;function Ga(e){Qn===null?Qn=[e]:Qn.push(e)}function oc(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Ga(n)):(t.next=l.next,l.next=t),n.interleaved=t,kn(e,r)}function kn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Cn=!1;function Za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Rn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,kn(e,t)}return l=r.interleaved,l===null?(n.next=n,Ga(r)):(n.next=l.next,l.next=n),r.interleaved=n,kn(e,t)}function ll(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ia(e,t)}}function co(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Pl(e,n,t,r){var l=e.updateQueue;Cn=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var o=u,c=o.next;o.next=null,a===null?i=c:a.next=c,a=o;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==a&&(u===null?v.firstBaseUpdate=c:u.next=c,v.lastBaseUpdate=o))}if(i!==null){var f=l.baseState;a=0,v=c=o=null,u=i;do{var h=u.lane,k=u.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:k,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var j=e,P=u;switch(h=n,k=t,P.tag){case 1:if(j=P.payload,typeof j=="function"){f=j.call(k,f,h);break e}f=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=P.payload,h=typeof j=="function"?j.call(k,f,h):j,h==null)break e;f=le({},f,h);break e;case 2:Cn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[u]:h.push(u))}else k={eventTime:k,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(c=v=k,o=f):v=v.next=k,a|=h;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;h=u,u=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(v===null&&(o=f),l.baseState=o,l.firstBaseUpdate=c,l.lastBaseUpdate=v,n=l.shared.interleaved,n!==null){l=n;do a|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);et|=a,e.lanes=a,e.memoizedState=f}}function fo(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(C(191,l));l.call(r)}}}var br={},dn=$n(br),xr=$n(br),kr=$n(br);function Xn(e){if(e===br)throw Error(C(174));return e}function Ja(e,n){switch(J(kr,n),J(xr,e),J(dn,br),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Fi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Fi(n,e)}ee(dn),J(dn,n)}function bt(){ee(dn),ee(xr),ee(kr)}function cc(e){Xn(kr.current);var n=Xn(dn.current),t=Fi(n,e.type);n!==t&&(J(xr,e),J(dn,t))}function qa(e){xr.current===e&&(ee(dn),ee(xr))}var te=$n(0);function Ml(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var vi=[];function es(){for(var e=0;e<vi.length;e++)vi[e]._workInProgressVersionPrimary=null;vi.length=0}var il=Sn.ReactCurrentDispatcher,yi=Sn.ReactCurrentBatchConfig,qn=0,re=null,fe=null,ge=null,zl=!1,rr=!1,wr=0,jp=0;function je(){throw Error(C(321))}function ns(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!an(e[t],n[t]))return!1;return!0}function ts(e,n,t,r,l,i){if(qn=i,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,il.current=e===null||e.memoizedState===null?Pp:Mp,e=t(r,l),rr){i=0;do{if(rr=!1,wr=0,25<=i)throw Error(C(301));i+=1,ge=fe=null,n.updateQueue=null,il.current=zp,e=t(r,l)}while(rr)}if(il.current=_l,n=fe!==null&&fe.next!==null,qn=0,ge=fe=re=null,zl=!1,n)throw Error(C(300));return e}function rs(){var e=wr!==0;return wr=0,e}function on(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?re.memoizedState=ge=e:ge=ge.next=e,ge}function Ke(){if(fe===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var n=ge===null?re.memoizedState:ge.next;if(n!==null)ge=n,fe=e;else{if(e===null)throw Error(C(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ge===null?re.memoizedState=ge=e:ge=ge.next=e}return ge}function Sr(e,n){return typeof n=="function"?n(e):n}function xi(e){var n=Ke(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=fe,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=a=null,o=null,c=i;do{var v=c.lane;if((qn&v)===v)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(u=o=f,a=r):o=o.next=f,re.lanes|=v,et|=v}c=c.next}while(c!==null&&c!==i);o===null?a=r:o.next=u,an(r,n.memoizedState)||(Te=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=o,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,re.lanes|=i,et|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ki(e){var n=Ke(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);an(i,n.memoizedState)||(Te=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function dc(){}function fc(e,n){var t=re,r=Ke(),l=n(),i=!an(r.memoizedState,l);if(i&&(r.memoizedState=l,Te=!0),r=r.queue,ls(mc.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ge!==null&&ge.memoizedState.tag&1){if(t.flags|=2048,jr(9,hc.bind(null,t,r,l,n),void 0,null),ve===null)throw Error(C(349));qn&30||pc(t,n,l)}return l}function pc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=re.updateQueue,n===null?(n={lastEffect:null,stores:null},re.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function hc(e,n,t,r){n.value=t,n.getSnapshot=r,gc(n)&&vc(e)}function mc(e,n,t){return t(function(){gc(n)&&vc(e)})}function gc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!an(e,t)}catch{return!0}}function vc(e){var n=kn(e,1);n!==null&&ln(n,e,1,-1)}function po(e){var n=on();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},n.queue=e,e=e.dispatch=Ep.bind(null,re,e),[n.memoizedState,e]}function jr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=re.updateQueue,n===null?(n={lastEffect:null,stores:null},re.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function yc(){return Ke().memoizedState}function al(e,n,t,r){var l=on();re.flags|=e,l.memoizedState=jr(1|n,t,void 0,r===void 0?null:r)}function Vl(e,n,t,r){var l=Ke();r=r===void 0?null:r;var i=void 0;if(fe!==null){var a=fe.memoizedState;if(i=a.destroy,r!==null&&ns(r,a.deps)){l.memoizedState=jr(n,t,i,r);return}}re.flags|=e,l.memoizedState=jr(1|n,t,i,r)}function ho(e,n){return al(8390656,8,e,n)}function ls(e,n){return Vl(2048,8,e,n)}function xc(e,n){return Vl(4,2,e,n)}function kc(e,n){return Vl(4,4,e,n)}function wc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Sc(e,n,t){return t=t!=null?t.concat([e]):null,Vl(4,4,wc.bind(null,n,e),t)}function is(){}function jc(e,n){var t=Ke();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ns(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Nc(e,n){var t=Ke();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ns(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Cc(e,n,t){return qn&21?(an(t,n)||(t=_u(),re.lanes|=t,et|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=t)}function Np(e,n){var t=G;G=t!==0&&4>t?t:4,e(!0);var r=yi.transition;yi.transition={};try{e(!1),n()}finally{G=t,yi.transition=r}}function Ec(){return Ke().memoizedState}function Cp(e,n,t){var r=In(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Pc(e))Mc(n,t);else if(t=oc(e,n,t,r),t!==null){var l=Me();ln(t,e,r,l),zc(t,n,r)}}function Ep(e,n,t){var r=In(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Pc(e))Mc(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,u=i(a,t);if(l.hasEagerState=!0,l.eagerState=u,an(u,a)){var o=n.interleaved;o===null?(l.next=l,Ga(n)):(l.next=o.next,o.next=l),n.interleaved=l;return}}catch{}finally{}t=oc(e,n,l,r),t!==null&&(l=Me(),ln(t,e,r,l),zc(t,n,r))}}function Pc(e){var n=e.alternate;return e===re||n!==null&&n===re}function Mc(e,n){rr=zl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function zc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ia(e,t)}}var _l={readContext:Xe,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Pp={readContext:Xe,useCallback:function(e,n){return on().memoizedState=[e,n===void 0?null:n],e},useContext:Xe,useEffect:ho,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,al(4194308,4,wc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return al(4194308,4,e,n)},useInsertionEffect:function(e,n){return al(4,2,e,n)},useMemo:function(e,n){var t=on();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=on();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Cp.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var n=on();return e={current:e},n.memoizedState=e},useState:po,useDebugValue:is,useDeferredValue:function(e){return on().memoizedState=e},useTransition:function(){var e=po(!1),n=e[0];return e=Np.bind(null,e[1]),on().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=re,l=on();if(ne){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),ve===null)throw Error(C(349));qn&30||pc(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,ho(mc.bind(null,r,i,e),[e]),r.flags|=2048,jr(9,hc.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=on(),n=ve.identifierPrefix;if(ne){var t=gn,r=mn;t=(r&~(1<<32-rn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=wr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=jp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Mp={readContext:Xe,useCallback:jc,useContext:Xe,useEffect:ls,useImperativeHandle:Sc,useInsertionEffect:xc,useLayoutEffect:kc,useMemo:Nc,useReducer:xi,useRef:yc,useState:function(){return xi(Sr)},useDebugValue:is,useDeferredValue:function(e){var n=Ke();return Cc(n,fe.memoizedState,e)},useTransition:function(){var e=xi(Sr)[0],n=Ke().memoizedState;return[e,n]},useMutableSource:dc,useSyncExternalStore:fc,useId:Ec,unstable_isNewReconciler:!1},zp={readContext:Xe,useCallback:jc,useContext:Xe,useEffect:ls,useImperativeHandle:Sc,useInsertionEffect:xc,useLayoutEffect:kc,useMemo:Nc,useReducer:ki,useRef:yc,useState:function(){return ki(Sr)},useDebugValue:is,useDeferredValue:function(e){var n=Ke();return fe===null?n.memoizedState=e:Cc(n,fe.memoizedState,e)},useTransition:function(){var e=ki(Sr)[0],n=Ke().memoizedState;return[e,n]},useMutableSource:dc,useSyncExternalStore:fc,useId:Ec,unstable_isNewReconciler:!1};function qe(e,n){if(e&&e.defaultProps){n=le({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function aa(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:le({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Wl={isMounted:function(e){return(e=e._reactInternals)?rt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Me(),l=In(e),i=vn(r,l);i.payload=n,t!=null&&(i.callback=t),n=Rn(e,i,l),n!==null&&(ln(n,e,l,r),ll(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Me(),l=In(e),i=vn(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Rn(e,i,l),n!==null&&(ln(n,e,l,r),ll(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Me(),r=In(e),l=vn(t,r);l.tag=2,n!=null&&(l.callback=n),n=Rn(e,l,r),n!==null&&(ln(n,e,r,t),ll(n,e,r))}};function mo(e,n,t,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!mr(t,r)||!mr(l,i):!0}function _c(e,n,t){var r=!1,l=Fn,i=n.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(l=De(n)?Zn:Ee.current,r=n.contextTypes,i=(r=r!=null)?Mt(e,l):Fn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Wl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function go(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Wl.enqueueReplaceState(n,n.state,null)}function sa(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Za(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=Xe(i):(i=De(n)?Zn:Ee.current,l.context=Mt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(aa(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Wl.enqueueReplaceState(l,l.state,null),Pl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Lt(e,n){try{var t="",r=n;do t+=tf(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function wi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function oa(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var _p=typeof WeakMap=="function"?WeakMap:Map;function bc(e,n,t){t=vn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ll||(Ll=!0,ya=r),oa(e,n)},t}function Lc(e,n,t){t=vn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){oa(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){oa(e,n),typeof r!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function vo(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new _p;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Vp.bind(null,e,n,t),n.then(e,e))}function yo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function xo(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=vn(-1,1),n.tag=2,Rn(t,n,1))),t.lanes|=1),e)}var bp=Sn.ReactCurrentOwner,Te=!1;function Pe(e,n,t,r){n.child=e===null?sc(n,null,t,r):_t(n,e.child,t,r)}function ko(e,n,t,r,l){t=t.render;var i=n.ref;return Nt(n,l),r=ts(e,n,t,r,i,l),t=rs(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,wn(e,n,l)):(ne&&t&&Va(n),n.flags|=1,Pe(e,n,r,l),n.child)}function wo(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!ps(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Tc(e,n,i,r,l)):(e=cl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:mr,t(a,r)&&e.ref===n.ref)return wn(e,n,l)}return n.flags|=1,e=On(i,r),e.ref=n.ref,e.return=n,n.child=e}function Tc(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(mr(i,r)&&e.ref===n.ref)if(Te=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Te=!0);else return n.lanes=e.lanes,wn(e,n,l)}return ua(e,n,t,r,l)}function Rc(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(xt,Oe),Oe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,J(xt,Oe),Oe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,J(xt,Oe),Oe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,J(xt,Oe),Oe|=r;return Pe(e,n,l,t),n.child}function Dc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ua(e,n,t,r,l){var i=De(t)?Zn:Ee.current;return i=Mt(n,i),Nt(n,l),t=ts(e,n,t,r,i,l),r=rs(),e!==null&&!Te?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,wn(e,n,l)):(ne&&r&&Va(n),n.flags|=1,Pe(e,n,t,l),n.child)}function So(e,n,t,r,l){if(De(t)){var i=!0;Sl(n)}else i=!1;if(Nt(n,l),n.stateNode===null)sl(e,n),_c(n,t,r),sa(n,t,r,l),r=!0;else if(e===null){var a=n.stateNode,u=n.memoizedProps;a.props=u;var o=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Xe(c):(c=De(t)?Zn:Ee.current,c=Mt(n,c));var v=t.getDerivedStateFromProps,f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||o!==c)&&go(n,a,r,c),Cn=!1;var h=n.memoizedState;a.state=h,Pl(n,r,a,l),o=n.memoizedState,u!==r||h!==o||Re.current||Cn?(typeof v=="function"&&(aa(n,t,v,r),o=n.memoizedState),(u=Cn||mo(n,t,u,r,h,o,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=o),a.props=r,a.state=o,a.context=c,r=u):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,uc(e,n),u=n.memoizedProps,c=n.type===n.elementType?u:qe(n.type,u),a.props=c,f=n.pendingProps,h=a.context,o=t.contextType,typeof o=="object"&&o!==null?o=Xe(o):(o=De(t)?Zn:Ee.current,o=Mt(n,o));var k=t.getDerivedStateFromProps;(v=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==f||h!==o)&&go(n,a,r,o),Cn=!1,h=n.memoizedState,a.state=h,Pl(n,r,a,l);var j=n.memoizedState;u!==f||h!==j||Re.current||Cn?(typeof k=="function"&&(aa(n,t,k,r),j=n.memoizedState),(c=Cn||mo(n,t,c,r,h,j,o)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,j,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,j,o)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=j),a.props=r,a.state=j,a.context=o,r=c):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return ca(e,n,t,r,i,l)}function ca(e,n,t,r,l,i){Dc(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return l&&ao(n,t,!1),wn(e,n,i);r=n.stateNode,bp.current=n;var u=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=_t(n,e.child,null,i),n.child=_t(n,null,u,i)):Pe(e,n,u,i),n.memoizedState=r.state,l&&ao(n,t,!0),n.child}function Ic(e){var n=e.stateNode;n.pendingContext?io(e,n.pendingContext,n.pendingContext!==n.context):n.context&&io(e,n.context,!1),Ja(e,n.containerInfo)}function jo(e,n,t,r,l){return zt(),Ya(l),n.flags|=256,Pe(e,n,t,r),n.child}var da={dehydrated:null,treeContext:null,retryLane:0};function fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Oc(e,n,t){var r=n.pendingProps,l=te.current,i=!1,a=(n.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),J(te,l&1),e===null)return la(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Xl(a,r,0,null),e=Gn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=fa(t),n.memoizedState=da,e):as(n,a));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return Lp(e,n,a,r,u,l,t);if(i){i=r.fallback,a=n.mode,l=e.child,u=l.sibling;var o={mode:"hidden",children:r.children};return!(a&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=o,n.deletions=null):(r=On(l,o),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=On(u,i):(i=Gn(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?fa(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=da,r}return i=e.child,e=i.sibling,r=On(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function as(e,n){return n=Xl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Xr(e,n,t,r){return r!==null&&Ya(r),_t(n,e.child,null,t),e=as(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Lp(e,n,t,r,l,i,a){if(t)return n.flags&256?(n.flags&=-257,r=wi(Error(C(422))),Xr(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=Xl({mode:"visible",children:r.children},l,0,null),i=Gn(i,l,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&_t(n,e.child,null,a),n.child.memoizedState=fa(a),n.memoizedState=da,i);if(!(n.mode&1))return Xr(e,n,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(C(419)),r=wi(i,r,void 0),Xr(e,n,a,r)}if(u=(a&e.childLanes)!==0,Te||u){if(r=ve,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,kn(e,l),ln(r,e,l,-1))}return fs(),r=wi(Error(C(421))),Xr(e,n,a,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Wp.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,Ae=Tn(l.nextSibling),Fe=n,ne=!0,tn=null,e!==null&&(Ve[We++]=mn,Ve[We++]=gn,Ve[We++]=Jn,mn=e.id,gn=e.overflow,Jn=n),n=as(n,r.children),n.flags|=4096,n)}function No(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ia(e.return,n,t)}function Si(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Ac(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(Pe(e,n,r.children,t),r=te.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&No(e,t,n);else if(e.tag===19)No(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(te,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Ml(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Si(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Ml(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Si(n,!0,t,null,i);break;case"together":Si(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function sl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function wn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),et|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=On(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=On(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Tp(e,n,t){switch(n.tag){case 3:Ic(n),zt();break;case 5:cc(n);break;case 1:De(n.type)&&Sl(n);break;case 4:Ja(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;J(Cl,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(J(te,te.current&1),n.flags|=128,null):t&n.child.childLanes?Oc(e,n,t):(J(te,te.current&1),e=wn(e,n,t),e!==null?e.sibling:null);J(te,te.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ac(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(te,te.current),r)break;return null;case 22:case 23:return n.lanes=0,Rc(e,n,t)}return wn(e,n,t)}var Fc,pa,Uc,$c;Fc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};pa=function(){};Uc=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Xn(dn.current);var i=null;switch(t){case"input":l=Di(e,l),r=Di(e,r),i=[];break;case"select":l=le({},l,{value:void 0}),r=le({},r,{value:void 0}),i=[];break;case"textarea":l=Ai(e,l),r=Ai(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=kl)}Ui(t,r);var a;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(a in u)u.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(or.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var o=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&o!==u&&(o!=null||u!=null))if(c==="style")if(u){for(a in u)!u.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in o)o.hasOwnProperty(a)&&u[a]!==o[a]&&(t||(t={}),t[a]=o[a])}else t||(i||(i=[]),i.push(c,t)),t=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,u=u?u.__html:void 0,o!=null&&u!==o&&(i=i||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(or.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&q("scroll",e),i||u===o||(i=[])):(i=i||[]).push(c,o))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};$c=function(e,n,t,r){t!==r&&(n.flags|=4)};function Vt(e,n){if(!ne)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Rp(e,n,t){var r=n.pendingProps;switch(Wa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(n),null;case 1:return De(n.type)&&wl(),Ne(n),null;case 3:return r=n.stateNode,bt(),ee(Re),ee(Ee),es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,tn!==null&&(wa(tn),tn=null))),pa(e,n),Ne(n),null;case 5:qa(n);var l=Xn(kr.current);if(t=n.type,e!==null&&n.stateNode!=null)Uc(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(C(166));return Ne(n),null}if(e=Xn(dn.current),Yr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[un]=n,r[yr]=i,e=(n.mode&1)!==0,t){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(l=0;l<Zt.length;l++)q(Zt[l],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Ls(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":Rs(r,i),q("invalid",r)}Ui(t,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Wr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Wr(r.textContent,u,e),l=["children",""+u]):or.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&q("scroll",r)}switch(t){case"input":Or(r),Ts(r,i,!0);break;case"textarea":Or(r),Ds(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=kl)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[un]=n,e[yr]=r,Fc(e,n,!1,!1),n.stateNode=e;e:{switch(a=$i(t,r),t){case"dialog":q("cancel",e),q("close",e),l=r;break;case"iframe":case"object":case"embed":q("load",e),l=r;break;case"video":case"audio":for(l=0;l<Zt.length;l++)q(Zt[l],e);l=r;break;case"source":q("error",e),l=r;break;case"img":case"image":case"link":q("error",e),q("load",e),l=r;break;case"details":q("toggle",e),l=r;break;case"input":Ls(e,r),l=Di(e,r),q("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=le({},r,{value:void 0}),q("invalid",e);break;case"textarea":Rs(e,r),l=Ai(e,r),q("invalid",e);break;default:l=r}Ui(t,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var o=u[i];i==="style"?yu(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&gu(e,o)):i==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&ur(e,o):typeof o=="number"&&ur(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(or.hasOwnProperty(i)?o!=null&&i==="onScroll"&&q("scroll",e):o!=null&&_a(e,i,o,a))}switch(t){case"input":Or(e),Ts(e,r,!1);break;case"textarea":Or(e),Ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?kt(e,!!r.multiple,i,!1):r.defaultValue!=null&&kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=kl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ne(n),null;case 6:if(e&&n.stateNode!=null)$c(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(C(166));if(t=Xn(kr.current),Xn(dn.current),Yr(n)){if(r=n.stateNode,t=n.memoizedProps,r[un]=n,(i=r.nodeValue!==t)&&(e=Fe,e!==null))switch(e.tag){case 3:Wr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[un]=n,n.stateNode=r}return Ne(n),null;case 13:if(ee(te),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Ae!==null&&n.mode&1&&!(n.flags&128))ic(),zt(),n.flags|=98560,i=!1;else if(i=Yr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[un]=n}else zt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ne(n),i=!1}else tn!==null&&(wa(tn),tn=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||te.current&1?pe===0&&(pe=3):fs())),n.updateQueue!==null&&(n.flags|=4),Ne(n),null);case 4:return bt(),pa(e,n),e===null&&gr(n.stateNode.containerInfo),Ne(n),null;case 10:return Ka(n.type._context),Ne(n),null;case 17:return De(n.type)&&wl(),Ne(n),null;case 19:if(ee(te),i=n.memoizedState,i===null)return Ne(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)Vt(i,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Ml(e),a!==null){for(n.flags|=128,Vt(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return J(te,te.current&1|2),n.child}e=e.sibling}i.tail!==null&&se()>Tt&&(n.flags|=128,r=!0,Vt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Ml(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Vt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ne)return Ne(n),null}else 2*se()-i.renderingStartTime>Tt&&t!==1073741824&&(n.flags|=128,r=!0,Vt(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=se(),n.sibling=null,t=te.current,J(te,r?t&1|2:t&1),n):(Ne(n),null);case 22:case 23:return ds(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Oe&1073741824&&(Ne(n),n.subtreeFlags&6&&(n.flags|=8192)):Ne(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function Dp(e,n){switch(Wa(n),n.tag){case 1:return De(n.type)&&wl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return bt(),ee(Re),ee(Ee),es(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return qa(n),null;case 13:if(ee(te),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));zt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ee(te),null;case 4:return bt(),null;case 10:return Ka(n.type._context),null;case 22:case 23:return ds(),null;case 24:return null;default:return null}}var Kr=!1,Ce=!1,Ip=typeof WeakSet=="function"?WeakSet:Set,L=null;function yt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ae(e,n,r)}else t.current=null}function ha(e,n,t){try{t()}catch(r){ae(e,n,r)}}var Co=!1;function Op(e,n){if(Zi=vl,e=Yu(),Ha(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,u=-1,o=-1,c=0,v=0,f=e,h=null;n:for(;;){for(var k;f!==t||l!==0&&f.nodeType!==3||(u=a+l),f!==i||r!==0&&f.nodeType!==3||(o=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(k=f.firstChild)!==null;)h=f,f=k;for(;;){if(f===e)break n;if(h===t&&++c===l&&(u=a),h===i&&++v===r&&(o=a),(k=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=k}t=u===-1||o===-1?null:{start:u,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ji={focusedElem:e,selectionRange:t},vl=!1,L=n;L!==null;)if(n=L,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,L=e;else for(;L!==null;){n=L;try{var j=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var P=j.memoizedProps,U=j.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?P:qe(n.type,P),U);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(y){ae(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,L=e;break}L=n.return}return j=Co,Co=!1,j}function lr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ha(n,t,i)}l=l.next}while(l!==r)}}function Yl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ma(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Bc(e){var n=e.alternate;n!==null&&(e.alternate=null,Bc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[un],delete n[yr],delete n[na],delete n[xp],delete n[kp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hc(e){return e.tag===5||e.tag===3||e.tag===4}function Eo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ga(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=kl));else if(r!==4&&(e=e.child,e!==null))for(ga(e,n,t),e=e.sibling;e!==null;)ga(e,n,t),e=e.sibling}function va(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(va(e,n,t),e=e.sibling;e!==null;)va(e,n,t),e=e.sibling}var ye=null,nn=!1;function jn(e,n,t){for(t=t.child;t!==null;)Vc(e,n,t),t=t.sibling}function Vc(e,n,t){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Al,t)}catch{}switch(t.tag){case 5:Ce||yt(t,n);case 6:var r=ye,l=nn;ye=null,jn(e,n,t),ye=r,nn=l,ye!==null&&(nn?(e=ye,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ye.removeChild(t.stateNode));break;case 18:ye!==null&&(nn?(e=ye,t=t.stateNode,e.nodeType===8?mi(e.parentNode,t):e.nodeType===1&&mi(e,t),pr(e)):mi(ye,t.stateNode));break;case 4:r=ye,l=nn,ye=t.stateNode.containerInfo,nn=!0,jn(e,n,t),ye=r,nn=l;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ha(t,n,a),l=l.next}while(l!==r)}jn(e,n,t);break;case 1:if(!Ce&&(yt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){ae(t,n,u)}jn(e,n,t);break;case 21:jn(e,n,t);break;case 22:t.mode&1?(Ce=(r=Ce)||t.memoizedState!==null,jn(e,n,t),Ce=r):jn(e,n,t);break;default:jn(e,n,t)}}function Po(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ip),n.forEach(function(r){var l=Yp.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ze(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,a=n,u=a;e:for(;u!==null;){switch(u.tag){case 5:ye=u.stateNode,nn=!1;break e;case 3:ye=u.stateNode.containerInfo,nn=!0;break e;case 4:ye=u.stateNode.containerInfo,nn=!0;break e}u=u.return}if(ye===null)throw Error(C(160));Vc(i,a,l),ye=null,nn=!1;var o=l.alternate;o!==null&&(o.return=null),l.return=null}catch(c){ae(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Wc(n,e),n=n.sibling}function Wc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(n,e),sn(e),r&4){try{lr(3,e,e.return),Yl(3,e)}catch(P){ae(e,e.return,P)}try{lr(5,e,e.return)}catch(P){ae(e,e.return,P)}}break;case 1:Ze(n,e),sn(e),r&512&&t!==null&&yt(t,t.return);break;case 5:if(Ze(n,e),sn(e),r&512&&t!==null&&yt(t,t.return),e.flags&32){var l=e.stateNode;try{ur(l,"")}catch(P){ae(e,e.return,P)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,u=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&pu(l,i),$i(u,a);var c=$i(u,i);for(a=0;a<o.length;a+=2){var v=o[a],f=o[a+1];v==="style"?yu(l,f):v==="dangerouslySetInnerHTML"?gu(l,f):v==="children"?ur(l,f):_a(l,v,f,c)}switch(u){case"input":Ii(l,i);break;case"textarea":hu(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?kt(l,!!i.multiple,k,!1):h!==!!i.multiple&&(i.defaultValue!=null?kt(l,!!i.multiple,i.defaultValue,!0):kt(l,!!i.multiple,i.multiple?[]:"",!1))}l[yr]=i}catch(P){ae(e,e.return,P)}}break;case 6:if(Ze(n,e),sn(e),r&4){if(e.stateNode===null)throw Error(C(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(P){ae(e,e.return,P)}}break;case 3:if(Ze(n,e),sn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(P){ae(e,e.return,P)}break;case 4:Ze(n,e),sn(e);break;case 13:Ze(n,e),sn(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(us=se())),r&4&&Po(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(Ce=(c=Ce)||v,Ze(n,e),Ce=c):Ze(n,e),sn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(L=e,v=e.child;v!==null;){for(f=L=v;L!==null;){switch(h=L,k=h.child,h.tag){case 0:case 11:case 14:case 15:lr(4,h,h.return);break;case 1:yt(h,h.return);var j=h.stateNode;if(typeof j.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,j.props=n.memoizedProps,j.state=n.memoizedState,j.componentWillUnmount()}catch(P){ae(r,t,P)}}break;case 5:yt(h,h.return);break;case 22:if(h.memoizedState!==null){zo(f);continue}}k!==null?(k.return=h,L=k):zo(f)}v=v.sibling}e:for(v=null,f=e;;){if(f.tag===5){if(v===null){v=f;try{l=f.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=f.stateNode,o=f.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,u.style.display=vu("display",a))}catch(P){ae(e,e.return,P)}}}else if(f.tag===6){if(v===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){ae(e,e.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;v===f&&(v=null),f=f.return}v===f&&(v=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ze(n,e),sn(e),r&4&&Po(e);break;case 21:break;default:Ze(n,e),sn(e)}}function sn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Hc(t)){var r=t;break e}t=t.return}throw Error(C(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(ur(l,""),r.flags&=-33);var i=Eo(e);va(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,u=Eo(e);ga(e,u,a);break;default:throw Error(C(161))}}catch(o){ae(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ap(e,n,t){L=e,Yc(e)}function Yc(e,n,t){for(var r=(e.mode&1)!==0;L!==null;){var l=L,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Kr;if(!a){var u=l.alternate,o=u!==null&&u.memoizedState!==null||Ce;u=Kr;var c=Ce;if(Kr=a,(Ce=o)&&!c)for(L=l;L!==null;)a=L,o=a.child,a.tag===22&&a.memoizedState!==null?_o(l):o!==null?(o.return=a,L=o):_o(l);for(;i!==null;)L=i,Yc(i),i=i.sibling;L=l,Kr=u,Ce=c}Mo(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,L=i):Mo(e)}}function Mo(e){for(;L!==null;){var n=L;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ce||Yl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ce)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:qe(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&fo(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}fo(n,a,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var f=v.dehydrated;f!==null&&pr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ce||n.flags&512&&ma(n)}catch(h){ae(n,n.return,h)}}if(n===e){L=null;break}if(t=n.sibling,t!==null){t.return=n.return,L=t;break}L=n.return}}function zo(e){for(;L!==null;){var n=L;if(n===e){L=null;break}var t=n.sibling;if(t!==null){t.return=n.return,L=t;break}L=n.return}}function _o(e){for(;L!==null;){var n=L;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Yl(4,n)}catch(o){ae(n,t,o)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(o){ae(n,l,o)}}var i=n.return;try{ma(n)}catch(o){ae(n,i,o)}break;case 5:var a=n.return;try{ma(n)}catch(o){ae(n,a,o)}}}catch(o){ae(n,n.return,o)}if(n===e){L=null;break}var u=n.sibling;if(u!==null){u.return=n.return,L=u;break}L=n.return}}var Fp=Math.ceil,bl=Sn.ReactCurrentDispatcher,ss=Sn.ReactCurrentOwner,Qe=Sn.ReactCurrentBatchConfig,W=0,ve=null,ce=null,ke=0,Oe=0,xt=$n(0),pe=0,Nr=null,et=0,Ql=0,os=0,ir=null,Le=null,us=0,Tt=1/0,pn=null,Ll=!1,ya=null,Dn=null,Gr=!1,zn=null,Tl=0,ar=0,xa=null,ol=-1,ul=0;function Me(){return W&6?se():ol!==-1?ol:ol=se()}function In(e){return e.mode&1?W&2&&ke!==0?ke&-ke:Sp.transition!==null?(ul===0&&(ul=_u()),ul):(e=G,e!==0||(e=window.event,e=e===void 0?16:Ou(e.type)),e):1}function ln(e,n,t,r){if(50<ar)throw ar=0,xa=null,Error(C(185));Mr(e,t,r),(!(W&2)||e!==ve)&&(e===ve&&(!(W&2)&&(Ql|=t),pe===4&&Pn(e,ke)),Ie(e,r),t===1&&W===0&&!(n.mode&1)&&(Tt=se()+500,Hl&&Bn()))}function Ie(e,n){var t=e.callbackNode;Sf(e,n);var r=gl(e,e===ve?ke:0);if(r===0)t!==null&&As(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&As(t),n===1)e.tag===0?wp(bo.bind(null,e)):tc(bo.bind(null,e)),vp(function(){!(W&6)&&Bn()}),t=null;else{switch(bu(r)){case 1:t=Da;break;case 4:t=Mu;break;case 16:t=ml;break;case 536870912:t=zu;break;default:t=ml}t=ed(t,Qc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Qc(e,n){if(ol=-1,ul=0,W&6)throw Error(C(327));var t=e.callbackNode;if(Ct()&&e.callbackNode!==t)return null;var r=gl(e,e===ve?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Rl(e,r);else{n=r;var l=W;W|=2;var i=Kc();(ve!==e||ke!==n)&&(pn=null,Tt=se()+500,Kn(e,n));do try{Bp();break}catch(u){Xc(e,u)}while(!0);Xa(),bl.current=i,W=l,ce!==null?n=0:(ve=null,ke=0,n=pe)}if(n!==0){if(n===2&&(l=Yi(e),l!==0&&(r=l,n=ka(e,l))),n===1)throw t=Nr,Kn(e,0),Pn(e,r),Ie(e,se()),t;if(n===6)Pn(e,r);else{if(l=e.current.alternate,!(r&30)&&!Up(l)&&(n=Rl(e,r),n===2&&(i=Yi(e),i!==0&&(r=i,n=ka(e,i))),n===1))throw t=Nr,Kn(e,0),Pn(e,r),Ie(e,se()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(C(345));case 2:Wn(e,Le,pn);break;case 3:if(Pn(e,r),(r&130023424)===r&&(n=us+500-se(),10<n)){if(gl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ea(Wn.bind(null,e,Le,pn),n);break}Wn(e,Le,pn);break;case 4:if(Pn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var a=31-rn(r);i=1<<a,a=n[a],a>l&&(l=a),r&=~i}if(r=l,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fp(r/1960))-r,10<r){e.timeoutHandle=ea(Wn.bind(null,e,Le,pn),r);break}Wn(e,Le,pn);break;case 5:Wn(e,Le,pn);break;default:throw Error(C(329))}}}return Ie(e,se()),e.callbackNode===t?Qc.bind(null,e):null}function ka(e,n){var t=ir;return e.current.memoizedState.isDehydrated&&(Kn(e,n).flags|=256),e=Rl(e,n),e!==2&&(n=Le,Le=t,n!==null&&wa(n)),e}function wa(e){Le===null?Le=e:Le.push.apply(Le,e)}function Up(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!an(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pn(e,n){for(n&=~os,n&=~Ql,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-rn(n),r=1<<t;e[t]=-1,n&=~r}}function bo(e){if(W&6)throw Error(C(327));Ct();var n=gl(e,0);if(!(n&1))return Ie(e,se()),null;var t=Rl(e,n);if(e.tag!==0&&t===2){var r=Yi(e);r!==0&&(n=r,t=ka(e,r))}if(t===1)throw t=Nr,Kn(e,0),Pn(e,n),Ie(e,se()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Wn(e,Le,pn),Ie(e,se()),null}function cs(e,n){var t=W;W|=1;try{return e(n)}finally{W=t,W===0&&(Tt=se()+500,Hl&&Bn())}}function nt(e){zn!==null&&zn.tag===0&&!(W&6)&&Ct();var n=W;W|=1;var t=Qe.transition,r=G;try{if(Qe.transition=null,G=1,e)return e()}finally{G=r,Qe.transition=t,W=n,!(W&6)&&Bn()}}function ds(){Oe=xt.current,ee(xt)}function Kn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,gp(t)),ce!==null)for(t=ce.return;t!==null;){var r=t;switch(Wa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wl();break;case 3:bt(),ee(Re),ee(Ee),es();break;case 5:qa(r);break;case 4:bt();break;case 13:ee(te);break;case 19:ee(te);break;case 10:Ka(r.type._context);break;case 22:case 23:ds()}t=t.return}if(ve=e,ce=e=On(e.current,null),ke=Oe=n,pe=0,Nr=null,os=Ql=et=0,Le=ir=null,Qn!==null){for(n=0;n<Qn.length;n++)if(t=Qn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}t.pending=r}Qn=null}return e}function Xc(e,n){do{var t=ce;try{if(Xa(),il.current=_l,zl){for(var r=re.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}zl=!1}if(qn=0,ge=fe=re=null,rr=!1,wr=0,ss.current=null,t===null||t.return===null){pe=1,Nr=n,ce=null;break}e:{var i=e,a=t.return,u=t,o=n;if(n=ke,u.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,v=u,f=v.tag;if(!(v.mode&1)&&(f===0||f===11||f===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var k=yo(a);if(k!==null){k.flags&=-257,xo(k,a,u,i,n),k.mode&1&&vo(i,c,n),n=k,o=c;var j=n.updateQueue;if(j===null){var P=new Set;P.add(o),n.updateQueue=P}else j.add(o);break e}else{if(!(n&1)){vo(i,c,n),fs();break e}o=Error(C(426))}}else if(ne&&u.mode&1){var U=yo(a);if(U!==null){!(U.flags&65536)&&(U.flags|=256),xo(U,a,u,i,n),Ya(Lt(o,u));break e}}i=o=Lt(o,u),pe!==4&&(pe=2),ir===null?ir=[i]:ir.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=bc(i,o,n);co(i,p);break e;case 1:u=o;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Dn===null||!Dn.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var y=Lc(i,u,n);co(i,y);break e}}i=i.return}while(i!==null)}Zc(t)}catch(M){n=M,ce===t&&t!==null&&(ce=t=t.return);continue}break}while(!0)}function Kc(){var e=bl.current;return bl.current=_l,e===null?_l:e}function fs(){(pe===0||pe===3||pe===2)&&(pe=4),ve===null||!(et&268435455)&&!(Ql&268435455)||Pn(ve,ke)}function Rl(e,n){var t=W;W|=2;var r=Kc();(ve!==e||ke!==n)&&(pn=null,Kn(e,n));do try{$p();break}catch(l){Xc(e,l)}while(!0);if(Xa(),W=t,bl.current=r,ce!==null)throw Error(C(261));return ve=null,ke=0,pe}function $p(){for(;ce!==null;)Gc(ce)}function Bp(){for(;ce!==null&&!pf();)Gc(ce)}function Gc(e){var n=qc(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,n===null?Zc(e):ce=n,ss.current=null}function Zc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Dp(t,n),t!==null){t.flags&=32767,ce=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}else if(t=Rp(t,n,Oe),t!==null){ce=t;return}if(n=n.sibling,n!==null){ce=n;return}ce=n=e}while(n!==null);pe===0&&(pe=5)}function Wn(e,n,t){var r=G,l=Qe.transition;try{Qe.transition=null,G=1,Hp(e,n,t,r)}finally{Qe.transition=l,G=r}return null}function Hp(e,n,t,r){do Ct();while(zn!==null);if(W&6)throw Error(C(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(jf(e,i),e===ve&&(ce=ve=null,ke=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Gr||(Gr=!0,ed(ml,function(){return Ct(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Qe.transition,Qe.transition=null;var a=G;G=1;var u=W;W|=4,ss.current=null,Op(e,t),Wc(t,e),up(Ji),vl=!!Zi,Ji=Zi=null,e.current=t,Ap(t),hf(),W=u,G=a,Qe.transition=i}else e.current=t;if(Gr&&(Gr=!1,zn=e,Tl=l),i=e.pendingLanes,i===0&&(Dn=null),vf(t.stateNode),Ie(e,se()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ll)throw Ll=!1,e=ya,ya=null,e;return Tl&1&&e.tag!==0&&Ct(),i=e.pendingLanes,i&1?e===xa?ar++:(ar=0,xa=e):ar=0,Bn(),null}function Ct(){if(zn!==null){var e=bu(Tl),n=Qe.transition,t=G;try{if(Qe.transition=null,G=16>e?16:e,zn===null)var r=!1;else{if(e=zn,zn=null,Tl=0,W&6)throw Error(C(331));var l=W;for(W|=4,L=e.current;L!==null;){var i=L,a=i.child;if(L.flags&16){var u=i.deletions;if(u!==null){for(var o=0;o<u.length;o++){var c=u[o];for(L=c;L!==null;){var v=L;switch(v.tag){case 0:case 11:case 15:lr(8,v,i)}var f=v.child;if(f!==null)f.return=v,L=f;else for(;L!==null;){v=L;var h=v.sibling,k=v.return;if(Bc(v),v===c){L=null;break}if(h!==null){h.return=k,L=h;break}L=k}}}var j=i.alternate;if(j!==null){var P=j.child;if(P!==null){j.child=null;do{var U=P.sibling;P.sibling=null,P=U}while(P!==null)}}L=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,L=a;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:lr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,L=p;break e}L=i.return}}var d=e.current;for(L=d;L!==null;){a=L;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,L=m;else e:for(a=d;L!==null;){if(u=L,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Yl(9,u)}}catch(M){ae(u,u.return,M)}if(u===a){L=null;break e}var y=u.sibling;if(y!==null){y.return=u.return,L=y;break e}L=u.return}}if(W=l,Bn(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Al,e)}catch{}r=!0}return r}finally{G=t,Qe.transition=n}}return!1}function Lo(e,n,t){n=Lt(t,n),n=bc(e,n,1),e=Rn(e,n,1),n=Me(),e!==null&&(Mr(e,1,n),Ie(e,n))}function ae(e,n,t){if(e.tag===3)Lo(e,e,t);else for(;n!==null;){if(n.tag===3){Lo(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dn===null||!Dn.has(r))){e=Lt(t,e),e=Lc(n,e,1),n=Rn(n,e,1),e=Me(),n!==null&&(Mr(n,1,e),Ie(n,e));break}}n=n.return}}function Vp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Me(),e.pingedLanes|=e.suspendedLanes&t,ve===e&&(ke&t)===t&&(pe===4||pe===3&&(ke&130023424)===ke&&500>se()-us?Kn(e,0):os|=t),Ie(e,n)}function Jc(e,n){n===0&&(e.mode&1?(n=Ur,Ur<<=1,!(Ur&130023424)&&(Ur=4194304)):n=1);var t=Me();e=kn(e,n),e!==null&&(Mr(e,n,t),Ie(e,t))}function Wp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Jc(e,t)}function Yp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(n),Jc(e,t)}var qc;qc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Re.current)Te=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Te=!1,Tp(e,n,t);Te=!!(e.flags&131072)}else Te=!1,ne&&n.flags&1048576&&rc(n,Nl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;sl(e,n),e=n.pendingProps;var l=Mt(n,Ee.current);Nt(n,t),l=ts(null,n,r,e,l,t);var i=rs();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,De(r)?(i=!0,Sl(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Za(n),l.updater=Wl,n.stateNode=l,l._reactInternals=n,sa(n,r,e,t),n=ca(null,n,r,!0,i,t)):(n.tag=0,ne&&i&&Va(n),Pe(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(sl(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Xp(r),e=qe(r,e),l){case 0:n=ua(null,n,r,e,t);break e;case 1:n=So(null,n,r,e,t);break e;case 11:n=ko(null,n,r,e,t);break e;case 14:n=wo(null,n,r,qe(r.type,e),t);break e}throw Error(C(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:qe(r,l),ua(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:qe(r,l),So(e,n,r,l,t);case 3:e:{if(Ic(n),e===null)throw Error(C(387));r=n.pendingProps,i=n.memoizedState,l=i.element,uc(e,n),Pl(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=Lt(Error(C(423)),n),n=jo(e,n,r,t,l);break e}else if(r!==l){l=Lt(Error(C(424)),n),n=jo(e,n,r,t,l);break e}else for(Ae=Tn(n.stateNode.containerInfo.firstChild),Fe=n,ne=!0,tn=null,t=sc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(zt(),r===l){n=wn(e,n,t);break e}Pe(e,n,r,t)}n=n.child}return n;case 5:return cc(n),e===null&&la(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,qi(r,l)?a=null:i!==null&&qi(r,i)&&(n.flags|=32),Dc(e,n),Pe(e,n,a,t),n.child;case 6:return e===null&&la(n),null;case 13:return Oc(e,n,t);case 4:return Ja(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=_t(n,null,r,t):Pe(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:qe(r,l),ko(e,n,r,l,t);case 7:return Pe(e,n,n.pendingProps,t),n.child;case 8:return Pe(e,n,n.pendingProps.children,t),n.child;case 12:return Pe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,a=l.value,J(Cl,r._currentValue),r._currentValue=a,i!==null)if(an(i.value,a)){if(i.children===l.children&&!Re.current){n=wn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var u=i.dependencies;if(u!==null){a=i.child;for(var o=u.firstContext;o!==null;){if(o.context===r){if(i.tag===1){o=vn(-1,t&-t),o.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?o.next=o:(o.next=v.next,v.next=o),c.pending=o}}i.lanes|=t,o=i.alternate,o!==null&&(o.lanes|=t),ia(i.return,t,n),u.lanes|=t;break}o=o.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(C(341));a.lanes|=t,u=a.alternate,u!==null&&(u.lanes|=t),ia(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Pe(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Nt(n,t),l=Xe(l),r=r(l),n.flags|=1,Pe(e,n,r,t),n.child;case 14:return r=n.type,l=qe(r,n.pendingProps),l=qe(r.type,l),wo(e,n,r,l,t);case 15:return Tc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:qe(r,l),sl(e,n),n.tag=1,De(r)?(e=!0,Sl(n)):e=!1,Nt(n,t),_c(n,r,l),sa(n,r,l,t),ca(null,n,r,!0,e,t);case 19:return Ac(e,n,t);case 22:return Rc(e,n,t)}throw Error(C(156,n.tag))};function ed(e,n){return Pu(e,n)}function Qp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,n,t,r){return new Qp(e,n,t,r)}function ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xp(e){if(typeof e=="function")return ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===La)return 11;if(e===Ta)return 14}return 2}function On(e,n){var t=e.alternate;return t===null?(t=Ye(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function cl(e,n,t,r,l,i){var a=2;if(r=e,typeof e=="function")ps(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ut:return Gn(t.children,l,i,n);case ba:a=8,l|=8;break;case bi:return e=Ye(12,t,n,l|2),e.elementType=bi,e.lanes=i,e;case Li:return e=Ye(13,t,n,l),e.elementType=Li,e.lanes=i,e;case Ti:return e=Ye(19,t,n,l),e.elementType=Ti,e.lanes=i,e;case cu:return Xl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ou:a=10;break e;case uu:a=9;break e;case La:a=11;break e;case Ta:a=14;break e;case Nn:a=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=Ye(a,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Gn(e,n,t,r){return e=Ye(7,e,r,n),e.lanes=t,e}function Xl(e,n,t,r){return e=Ye(22,e,r,n),e.elementType=cu,e.lanes=t,e.stateNode={isHidden:!1},e}function ji(e,n,t){return e=Ye(6,e,null,n),e.lanes=t,e}function Ni(e,n,t){return n=Ye(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Kp(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=li(0),this.expirationTimes=li(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=li(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function hs(e,n,t,r,l,i,a,u,o){return e=new Kp(e,n,t,u,o),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ye(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Za(i),e}function Gp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ot,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function nd(e){if(!e)return Fn;e=e._reactInternals;e:{if(rt(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(De(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(De(t))return nc(e,t,n)}return n}function td(e,n,t,r,l,i,a,u,o){return e=hs(t,r,!0,e,l,i,a,u,o),e.context=nd(null),t=e.current,r=Me(),l=In(t),i=vn(r,l),i.callback=n??null,Rn(t,i,l),e.current.lanes=l,Mr(e,l,r),Ie(e,r),e}function Kl(e,n,t,r){var l=n.current,i=Me(),a=In(l);return t=nd(t),n.context===null?n.context=t:n.pendingContext=t,n=vn(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Rn(l,n,a),e!==null&&(ln(e,l,a,i),ll(e,l,a)),a}function Dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function To(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ms(e,n){To(e,n),(e=e.alternate)&&To(e,n)}function Zp(){return null}var rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function gs(e){this._internalRoot=e}Gl.prototype.render=gs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));Kl(e,n,null,null)};Gl.prototype.unmount=gs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;nt(function(){Kl(null,e,null,null)}),n[xn]=null}};function Gl(e){this._internalRoot=e}Gl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ru();e={blockedOn:null,target:e,priority:n};for(var t=0;t<En.length&&n!==0&&n<En[t].priority;t++);En.splice(t,0,e),t===0&&Iu(e)}};function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ro(){}function Jp(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Dl(a);i.call(c)}}var a=td(n,r,e,0,null,!1,!1,"",Ro);return e._reactRootContainer=a,e[xn]=a.current,gr(e.nodeType===8?e.parentNode:e),nt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=Dl(o);u.call(c)}}var o=hs(e,0,!1,null,null,!1,!1,"",Ro);return e._reactRootContainer=o,e[xn]=o.current,gr(e.nodeType===8?e.parentNode:e),nt(function(){Kl(n,o,t,r)}),o}function Jl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var u=l;l=function(){var o=Dl(a);u.call(o)}}Kl(n,a,e,l)}else a=Jp(t,n,e,l,r);return Dl(a)}Lu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Gt(n.pendingLanes);t!==0&&(Ia(n,t|1),Ie(n,se()),!(W&6)&&(Tt=se()+500,Bn()))}break;case 13:nt(function(){var r=kn(e,1);if(r!==null){var l=Me();ln(r,e,1,l)}}),ms(e,1)}};Oa=function(e){if(e.tag===13){var n=kn(e,134217728);if(n!==null){var t=Me();ln(n,e,134217728,t)}ms(e,134217728)}};Tu=function(e){if(e.tag===13){var n=In(e),t=kn(e,n);if(t!==null){var r=Me();ln(t,e,n,r)}ms(e,n)}};Ru=function(){return G};Du=function(e,n){var t=G;try{return G=e,n()}finally{G=t}};Hi=function(e,n,t){switch(n){case"input":if(Ii(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Bl(r);if(!l)throw Error(C(90));fu(r),Ii(r,l)}}}break;case"textarea":hu(e,t);break;case"select":n=t.value,n!=null&&kt(e,!!t.multiple,n,!1)}};wu=cs;Su=nt;var qp={usingClientEntryPoint:!1,Events:[_r,pt,Bl,xu,ku,cs]},Wt={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eh={bundleType:Wt.bundleType,version:Wt.version,rendererPackageName:Wt.rendererPackageName,rendererConfig:Wt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cu(e),e===null?null:e.stateNode},findFiberByHostInstance:Wt.findFiberByHostInstance||Zp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{Al=Zr.inject(eh),cn=Zr}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qp;$e.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vs(n))throw Error(C(200));return Gp(e,n,null,t)};$e.createRoot=function(e,n){if(!vs(e))throw Error(C(299));var t=!1,r="",l=rd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=hs(e,1,!1,null,null,t,!1,r,l),e[xn]=n.current,gr(e.nodeType===8?e.parentNode:e),new gs(n)};$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Cu(n),e=e===null?null:e.stateNode,e};$e.flushSync=function(e){return nt(e)};$e.hydrate=function(e,n,t){if(!Zl(n))throw Error(C(200));return Jl(null,e,n,!0,t)};$e.hydrateRoot=function(e,n,t){if(!vs(e))throw Error(C(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",a=rd;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=td(n,null,e,1,t??null,l,!1,i,a),e[xn]=n.current,gr(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Gl(n)};$e.render=function(e,n,t){if(!Zl(n))throw Error(C(200));return Jl(null,e,n,!1,t)};$e.unmountComponentAtNode=function(e){if(!Zl(e))throw Error(C(40));return e._reactRootContainer?(nt(function(){Jl(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};$e.unstable_batchedUpdates=cs;$e.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Zl(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Jl(e,n,t,!1,r)};$e.version="18.3.1-next-f1338f8080-20240426";function ld(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ld)}catch(e){console.error(e)}}ld(),lu.exports=$e;var id=lu.exports;const nh=Yo(id);var Do=id;zi.createRoot=Do.createRoot,zi.hydrateRoot=Do.hydrateRoot;/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ad=(...e)=>e.filter((n,t,r)=>!!n&&r.indexOf(n)===t).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=w.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:a,...u},o)=>w.createElement("svg",{ref:o,...rh,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:ad("lucide",l),...u},[...a.map(([c,v])=>w.createElement(c,v)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(e,n)=>{const t=w.forwardRef(({className:r,...l},i)=>w.createElement(lh,{ref:i,iconNode:n,className:ad(`lucide-${th(e)}`,r),...l}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=Y("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=Y("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=Y("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=Y("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=Y("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=Y("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=Y("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=Y("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=Y("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=Y("GitGraph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=Y("Hexagon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=Y("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=Y("LocateFixed",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=Y("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=Y("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=Y("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=Y("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=Y("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=Y("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=Y("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=Y("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=Y("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=Y("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=Y("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=Y("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=Y("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=Y("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=Y("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=Y("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=Y("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=Y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=Y("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=Y("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),xs="/fampiary/assets/appbanner-BO2DZG40.png";function Nh({activeTab:e,onTabChange:n}){const t=[{id:"hive",icon:dh,label:"Hive"},{id:"search",icon:fd,label:"Search"},{id:"tree",icon:ch,label:"Tree"},{id:"swarm",icon:cd,label:"Swarm"},{id:"profile",icon:kh,label:"Profile"}];return s.jsxs("nav",{className:"navigation glass",children:[s.jsx("div",{className:"nav-brand",children:s.jsx("img",{src:xs,alt:"Fampiary",style:{height:"96px",borderRadius:"8px"}})}),s.jsx("div",{className:"nav-items",children:t.map(r=>{const l=r.icon,i=e===r.id;return s.jsxs("button",{className:`nav-button ${i?"active":""}`,onClick:()=>n(r.id),children:[s.jsx(l,{className:"nav-icon"}),s.jsx("span",{className:"nav-label",children:r.label})]},r.id)})})]})}const Fo=e=>{let n;const t=new Set,r=(c,v)=>{const f=typeof c=="function"?c(n):c;if(!Object.is(f,n)){const h=n;n=v??(typeof f!="object"||f===null)?f:Object.assign({},n,f),t.forEach(k=>k(n,h))}},l=()=>n,u={setState:r,getState:l,getInitialState:()=>o,subscribe:c=>(t.add(c),()=>t.delete(c))},o=n=e(r,l,u);return u},Ch=e=>e?Fo(e):Fo,Eh=e=>e;function Ph(e,n=Eh){const t=Qt.useSyncExternalStore(e.subscribe,Qt.useCallback(()=>n(e.getState()),[e,n]),Qt.useCallback(()=>n(e.getInitialState()),[e,n]));return Qt.useDebugValue(t),t}const Uo=e=>{const n=Ch(e),t=r=>Ph(n,r);return Object.assign(t,n),t},Mh=e=>e?Uo(e):Uo,zh="/fampiary/assets/male-DESfEOI2.jpg",_h="/fampiary/assets/female-TbdSCvoZ.jpg",bh=[zh],Lh=[_h],Th=new Set(["mother","grandmother","great-grandmother","daughter","sister","wife","aunt","niece","granddaughter","daughter-in-law","mother-in-law","sister-in-law","chachi","tai","mami","mausi","bua","nani","dadi","didi","bhabhi","sali","great-aunt","second aunt","distant aunt","paternal aunt","paternal aunt (aatya)"]),Rh=new Set(["usha","bhavna","aparna","sonali","kavita","suman","sunanda","chalanabai","vibhavari","pratibha","sashikala","kasturi","varsha","shaila","pooja","madhuri","swapna","sampada","sneha","acham","dodal","sita","sunita","geeta","savitri","kamla","sharda","savita","nisha","kriti","divya","pooja","tanvi","pushpa","lata","ritu","ankita","meena","sarla","nandini","ishita","ananya","kavita","neha","priya","sneha","anjali","sudha","rekha","hema","uma","lavanya","sarita","shraddha","kiran","tanya","rukmini","isha","sunanda","neelam","manju","prachi","radha","padmavathi","swapna","meenakshi","devaki","sreelakshmi","hiral","diya","sulochana","lipsa","protima","priti","vrinda","gauri","simran","harpreet","roshni","shruti","pallavi","mahi","tara","chandra","sonal","aditi","meera","pinki","priyanka","naina","rhea","leela","kavya","anika","sunaina","preethi","santosh"]),Dh=new Set(["rajendrakumar","rajeshwar","kamlesh","deepak","abhay","shravan","arya","shaurya","shlok","keyur","rambhau","jaykumar","padmakar","shitalchand","vishnukumar","suhas","rukhoba","nirmal","sadanand","nemichand","suresh","sanjay","kailash","snehal","ankush","rohan","pratik","ramesh","anil","rajesh","rahul","rohan","amit","vikram","hariram","mohan","suresh","deepak","manish","arjun","jagdish","pramod","ramakant","hemant","dinesh","gaurav","harsh","kabir","vishwanath","kunal","siddharth","rakesh","kartik","yash","varun","aarav","vivaan","bharat","girish","sahil","tejas","naresh","akash","ritesh","prakash","dev","neel","ishan","santosh","alok","umesh","rohit","karan","pranav","chirag","vinay","advaith","ashok","aryan","saurabh","pratik","gopal","karthik","mahaveer","raj","sumer","biswajit","anup","bhavesh","parth","venkat","aditya","krishnadas","nikhil","rajan","tarun","omkar","swaraj","manpreet","gurpreet","dilip","rabindra","subhranshu","baldev","veer","mihir","gopinath","jitendra","kamlesh","sanjay","hemant"]);function Ih(e,n){const t=n.toLowerCase().trim();if(Th.has(t))return"female";const r=["mother","grandmother","daughter","sister","wife","aunt","niece","granddaughter","chachi","tai","mami","mausi","bua","nani","dadi","didi","bhabhi","sali","daughter-in-law","daughter in law","sister-in-law","sister in law"];for(const a of r)if(t.includes(a))return"female";const l=["father","grandfather","son","brother","husband","uncle","nephew","grandson","chacha","tau","mama","mausa","fufa","nana","dada","bhaiya","jija","sala","self","father-in-law","brother-in-law","son-in-law","son in law","brother in law"];for(const a of l)if(t.includes(a))return"male";const i=e.split(" ")[0].toLowerCase();return Rh.has(i)?"female":(Dh.has(i),"male")}function Oh(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t)|0;return Math.abs(n)}function pd(e,n,t){const l=Ih(n,t)==="female"?Lh:bh,i=Oh(e)%l.length;return l[i]}const $o=9,Er=[{id:"3",name:"Rajeshwar Sitalaji Dodal",relation:"Father",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:1,children:["1","s1","s2","s3","s4","s5","s6","s7","s8"],isDeceased:!1},{id:"4",name:"Dodal",relation:"Mother",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:1,children:["1","s1","s2","s3","s4","s5","s6","s7","s8"],isDeceased:!1},{id:"pu1",name:"Rambhau Dodal",relation:"Paternal Uncle",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:1},{id:"pu2",name:"Jaykumar Dodal",relation:"Paternal Uncle",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:1},{id:"pu3",name:"Padmakar Dodal",relation:"Paternal Uncle",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:1},{id:"pa1",name:"Acham",relation:"Paternal Aunt (Aatya)",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:1},{id:"paw1",name:"Sashikala Rambhau Dodal",relation:"Paternal Aunt",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:1},{id:"paw2",name:"Jaykumar Dodal",relation:"Paternal Aunt",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:1},{id:"paw3",name:"Kasturi Padmakar Dodal",relation:"Paternal Aunt",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:1},{id:"1",name:"Usha Paratwar",relation:"Self",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0,children:["d1","d2","d3","son1"],isLocal:!0,isAdmin:!0},{id:"2",name:"Rajendrakumar Paratwar",relation:"Husband",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0,children:["d1","d2","d3","son1"]},{id:"s1",name:"Suman Saktepar",relation:"Sister",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0},{id:"s2",name:"Sunanda Kandi",relation:"Sister",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0},{id:"s3",name:"Chalanabai Saktepar",relation:"Sister",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0},{id:"s4",name:"Shitalchand Dodal",relation:"Brother",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0,children:["n1","n2","nw4","nw5"]},{id:"s5",name:"Vishnukumar Dodal",relation:"Brother",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0,children:["nw1","n3"]},{id:"s6",name:"Vibhavari Acham",relation:"Sister",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0},{id:"s7",name:"Suhas Dodal",relation:"Brother",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0,children:["nw6","nw7"]},{id:"s8",name:"Pratibha Yambal",relation:"Sister",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0},{id:"sil1",name:"Varsha Shitalchand Dodal",relation:"Sister-in-law",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0,children:["n1","n2","nw4","nw5"]},{id:"sil2",name:"Shaila Vishnukumar Dodal",relation:"Sister-in-law",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0,children:["nw1","n3"]},{id:"sil3",name:"Pooja Suhas Dodal",relation:"Sister-in-law",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0,children:["nw6","nw7"]},{id:"bil1",name:"Rukhoba Saktepar",relation:"Brother-in-law",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0},{id:"bil2",name:"Nirmal Kandi",relation:"Brother-in-law",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0,children:["nw8"]},{id:"bil3",name:"Sadanand Saktepar",relation:"Brother-in-law",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0},{id:"bil4",name:"Nemichand Acham",relation:"Brother-in-law",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0},{id:"bil5",name:"Suresh Yambal",relation:"Brother-in-law",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:0},{id:"d1",name:"Bhavna Ambudkar",relation:"Daughter",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1,children:["gs1"]},{id:"d2",name:"Aparna Ambhure",relation:"Daughter",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1,children:["gs2"]},{id:"d3",name:"Sonali Mehta",relation:"Daughter",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1,children:["gs3","gs4"]},{id:"son1",name:"Kamlesh Paratwar",relation:"Son",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1,children:["gs5"]},{id:"sil_d1",name:"Deepak Ambudkar",relation:"Son-in-law",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1,children:["gs1"]},{id:"sil_d2",name:"Abhay Ambhure",relation:"Son-in-law",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1,children:["gs2"]},{id:"sil_d3",name:"Abhay Mehta",relation:"Son-in-law",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1,children:["gs3","gs4"]},{id:"dil1",name:"Kavita Paratwar",relation:"Daughter-in-law",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1,children:["gs5"]},{id:"n1",name:"Madhuri Kale",relation:"Niece",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1},{id:"n2",name:"Swapna Dhobale",relation:"Niece",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1},{id:"n3",name:"Sampada Jain",relation:"Niece",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1},{id:"nw1",name:"Kailash Vishnukumar Dodal",relation:"Nephew",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1},{id:"nw4",name:"Snehal Shitalchand Dodal",relation:"Nephew",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1},{id:"nw5",name:"Ankush Shitalchand Dodal",relation:"Nephew",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1},{id:"nw6",name:"Rohan Suhas Dodal",relation:"Nephew",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1},{id:"nw7",name:"Pratik Suhas Dodal",relation:"Nephew",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1},{id:"nw8",name:"Sanjay Nirmal Kandi",relation:"Nephew",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1,children:[]},{id:"dil2",name:"Sneha Sanjay Kandi",relation:"Daughter-in-law",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-1},{id:"gs1",name:"Shravan Deepak Ambudkar",relation:"Grandson",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-2},{id:"gs2",name:"Arya Ambhure",relation:"Grandson",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-2},{id:"gs3",name:"Shaurya Mehta",relation:"Grandson",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-2},{id:"gs4",name:"Shlok Mehta",relation:"Grandson",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-2},{id:"gs5",name:"Keyur Paratwar",relation:"Grandson",city:"",phone:"",profession:"",skills:[],avatar:"",branch:"Paternal",generation:-2}];Er.forEach(e=>{e.avatar=pd(e.id,e.name,e.relation)});const Ah=[],Fh=["Paternal"],Uh=Array.from(new Set(Er.map(e=>e.city).filter(Boolean))),$h=Array.from(new Set(Er.map(e=>e.profession).filter(Boolean))),hd=["Father","Mother","Son","Daughter","Brother","Sister","Husband","Wife","Grandfather","Grandmother","Grandson","Granddaughter","Uncle","Aunt","Nephew","Niece","Cousin","Second Cousin","Father-in-law","Mother-in-law","Son-in-law","Daughter-in-law","Brother-in-law","Sister-in-law","Paternal Uncle","Paternal Aunt","Paternal Aunt (Aatya)","Chacha","Chachi","Tau","Tai","Mama","Mami","Mausi","Mausa","Bua","Fufa","Nana","Nani","Dada","Dadi","Bhaiya","Didi","Jija","Bhabhi","Sala","Sali","Self"],Bh=()=>{try{const e=localStorage.getItem("fampiary_data_version"),n=localStorage.getItem("fampiary_members");if(n&&e&&parseInt(e)===$o){const t=JSON.parse(n);if(Array.isArray(t)&&t.length>0)return t}}catch(e){console.error("Failed to parse local storage members",e)}return localStorage.setItem("fampiary_members",JSON.stringify(Er)),localStorage.setItem("fampiary_data_version",String($o)),Er},Yt=e=>{localStorage.setItem("fampiary_members",JSON.stringify(e))},Et=(e,n)=>e.filter(t=>{var r;return(r=t.children)==null?void 0:r.includes(n)}),ja=(e,n)=>{const t=Et(e,n),r=new Set;return t.forEach(l=>{(l.children||[]).forEach(i=>{i!==n&&r.add(i)})}),e.filter(l=>r.has(l.id))},sr=(e,n)=>{const t=e.find(r=>r.id===n);return t!=null&&t.children?t.children.map(r=>e.find(l=>l.id===r)).filter(r=>!!r):[]},xe=Mh((e,n)=>({currentUser:null,members:Bh(),login:t=>{const r=n().members.find(l=>l.id===t);r&&e({currentUser:r})},logout:()=>e({currentUser:null}),updateProfile:t=>{const{currentUser:r,members:l}=n();if(!r)return;const i={...r,...t},a=l.map(u=>u.id===r.id?i:u);Yt(a),e({currentUser:i,members:a})},updateMember:(t,r)=>{const{members:l,currentUser:i}=n(),a=l.map(u=>u.id===t?{...u,...r}:u);Yt(a),e({members:a,currentUser:(i==null?void 0:i.id)===t?{...i,...r}:i})},addMember:(t,r)=>{const{members:l,currentUser:i}=n(),a=`m${Date.now()}`;let u={...t,id:a},o=[...l];if(u.generation<0){const v=Math.abs(u.generation);o=o.map(f=>({...f,generation:f.generation+v})),u={...u,generation:0}}o.push(u),r&&(o=o.map(v=>v.id===r?{...v,children:[...v.children||[],a]}:v)),Yt(o);const c=i&&o.find(v=>v.id===i.id)||null;return e({members:o,currentUser:c}),a},removeMember:t=>{const{members:r,currentUser:l}=n(),i=r.find(o=>o.id===t),a=(i==null?void 0:i.children)||[];let u=r.filter(o=>o.id!==t).map(o=>{var c;if((c=o.children)!=null&&c.includes(t)){const v=(o.children||[]).filter(f=>f!==t).concat(a);return{...o,children:[...new Set(v)]}}return o});Yt(u),e({members:u,currentUser:(l==null?void 0:l.id)===t?null:l})},addTag:(t,r)=>{const{members:l,currentUser:i}=n();if(!i)return;const a=l.map(u=>{if(u.id===t){const o=u.userTags||{},c=o[i.id]||[];if(!c.includes(r))return{...u,userTags:{...o,[i.id]:[...c,r]}}}return u});Yt(a),e({members:a})},activeSignals:Ah,addSignal:t=>e(r=>({activeSignals:[{...t,id:`s${Date.now()}`,timestamp:"Just now"},...r.activeSignals]})),privacyMode:!1,togglePrivacyMode:()=>e(t=>({privacyMode:!t.privacyMode}))}));function ks({memberId:e,onClose:n,onAddChild:t,onRequestRemove:r}){var N;const{members:l,currentUser:i,updateMember:a,addTag:u}=xe(),o=l.find(g=>g.id===e),[c,v]=w.useState(!1),[f,h]=w.useState({name:(o==null?void 0:o.name)||"",relation:(o==null?void 0:o.relation)||"",city:(o==null?void 0:o.city)||"",phone:(o==null?void 0:o.phone)||"",profession:(o==null?void 0:o.profession)||"",branch:(o==null?void 0:o.branch)||""}),[k,j]=w.useState("");if(!o||!i)return null;const P=i.isAdmin,U=i.id===e,p=((N=o.userTags)==null?void 0:N[i.id])||[],d=Et(l,e),m=sr(l,e),y=()=>{a(e,f),v(!1)},M=g=>{g.preventDefault(),k.trim()&&(u(e,k.trim()),j(""))};return nh.createPortal(s.jsx("div",{className:"popup-overlay animate-fade-in",onClick:n,children:s.jsxs("div",{className:"popup-card glass",onClick:g=>g.stopPropagation(),children:[s.jsx("button",{className:"close-button",onClick:n,children:s.jsx(ys,{size:24})}),s.jsxs("div",{className:"popup-header",children:[s.jsx("img",{src:o.avatar,alt:o.name,className:"popup-avatar"}),c?s.jsxs("div",{className:"edit-form",children:[s.jsx("input",{value:f.name,onChange:g=>h({...f,name:g.target.value}),placeholder:"Name",className:"edit-input popup-input"}),s.jsx("input",{value:f.relation,onChange:g=>h({...f,relation:g.target.value}),placeholder:"Relation",className:"edit-input popup-input"}),s.jsx("input",{value:f.city,onChange:g=>h({...f,city:g.target.value}),placeholder:"City",className:"edit-input popup-input"}),s.jsx("input",{value:f.profession,onChange:g=>h({...f,profession:g.target.value}),placeholder:"Profession",className:"edit-input popup-input"}),s.jsx("input",{value:f.phone,onChange:g=>h({...f,phone:g.target.value}),placeholder:"Phone",className:"edit-input popup-input"}),s.jsx("input",{value:f.branch,onChange:g=>h({...f,branch:g.target.value}),placeholder:"Branch",className:"edit-input popup-input"})]}):s.jsxs("div",{className:"popup-info",children:[s.jsx("h2",{children:o.name}),o.isDeceased&&s.jsx("span",{className:"popup-deceased-badge",children:"✝ Late"}),s.jsx("p",{className:"relation-text",children:o.relation}),s.jsxs("div",{className:"info-grid",children:[s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"City"}),s.jsx("span",{className:"info-value",children:o.city})]}),s.jsxs("div",{className:"info-item",children:[s.jsxs("span",{className:"info-label",children:[s.jsx(vh,{size:14,style:{marginRight:4,verticalAlign:"middle"}}),"Phone"]}),s.jsx("span",{className:"info-value",children:o.phone})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Profession"}),s.jsx("span",{className:"info-value",children:o.profession})]}),s.jsxs("div",{className:"info-item",children:[s.jsx("span",{className:"info-label",children:"Branch"}),s.jsx("span",{className:"info-value",children:o.branch})]})]})]})]}),(d.length>0||m.length>0)&&s.jsxs("div",{className:"relations-section",children:[s.jsxs("h3",{children:[s.jsx(wh,{size:16})," Relations"]}),d.length>0&&s.jsxs("div",{className:"relation-group",children:[s.jsxs("span",{className:"relation-group-label",children:[s.jsx(ah,{size:12})," Parent",d.length>1?"s":""]}),s.jsx("div",{className:"relation-chips",children:d.map(g=>s.jsxs("span",{className:"relation-chip",children:[s.jsx("img",{src:g.avatar,alt:g.name,className:"relation-chip-avatar"}),s.jsx("span",{children:g.name})]},g.id))})]}),m.length>0&&s.jsxs("div",{className:"relation-group",children:[s.jsxs("span",{className:"relation-group-label",children:[s.jsx(ih,{size:12})," Children"]}),s.jsx("div",{className:"relation-chips",children:m.map(g=>s.jsxs("span",{className:"relation-chip",children:[s.jsx("img",{src:g.avatar,alt:g.name,className:"relation-chip-avatar"}),s.jsx("span",{children:g.name})]},g.id))})]})]}),P&&s.jsx("div",{className:"admin-actions",children:c?s.jsxs("button",{className:"action-btn save-btn",onClick:y,children:[s.jsx(dd,{size:18})," Save Changes"]}):s.jsxs("div",{className:"admin-actions-grid",children:[s.jsxs("button",{className:"action-btn edit-btn",onClick:()=>v(!0),children:[s.jsx(od,{size:18})," Edit Profile"]}),s.jsxs("button",{className:`action-btn ${o.isDeceased?"unmark-deceased-btn":"mark-deceased-btn"}`,onClick:()=>a(e,{isDeceased:!o.isDeceased}),children:["✝ ",o.isDeceased?"Unmark Late":"Mark as Late"]}),t&&s.jsxs("button",{className:"action-btn add-child-btn",onClick:()=>t(e),children:[s.jsx(Cr,{size:18})," Add Child"]}),r&&!U&&s.jsxs("button",{className:"action-btn remove-btn",onClick:()=>r(e),children:[s.jsx(dl,{size:18})," Remove"]})]})}),s.jsxs("div",{className:"tags-section",children:[s.jsxs("h3",{children:[s.jsx(xh,{size:16})," Personal Tags"]}),s.jsx("p",{className:"tags-desc",children:"Only visible to you"}),s.jsxs("div",{className:"tags-list",children:[p.map((g,S)=>s.jsx("span",{className:"tag-pill",children:g},S)),p.length===0&&s.jsx("span",{className:"no-tags",children:"No tags yet."})]}),s.jsxs("form",{onSubmit:M,className:"add-tag-form",children:[s.jsx("input",{type:"text",value:k,onChange:g=>j(g.target.value),placeholder:"Add a tag...",className:"tag-input"}),s.jsx("button",{type:"submit",className:"add-tag-btn",children:"Add"})]})]})]})}),document.body)}function Hh(e={}){const{minScale:n=.05,maxScale:t=2.5,initial:r}=e,[l,i]=w.useState(r??{x:0,y:0,scale:1}),a=w.useRef(l);a.current=l;const u=w.useRef(null),o=w.useRef(null),[c,v]=w.useState(!1),f=w.useRef(!1),h=w.useRef(null),k=w.useRef(null),j=w.useCallback(p=>Math.min(t,Math.max(n,p)),[n,t]);w.useEffect(()=>{const p=u.current;if(!p)return;const d=m=>{m.preventDefault();const y=p.getBoundingClientRect(),M=m.clientX-y.left,N=m.clientY-y.top,g=-m.deltaY*.001;i(S=>{const _=j(S.scale+g),R=_/S.scale;return{scale:_,x:M-R*(M-S.x),y:N-R*(N-S.y)}})};return p.addEventListener("wheel",d,{passive:!1}),()=>p.removeEventListener("wheel",d)},[j]),w.useEffect(()=>{const p=m=>{if(!o.current)return;const y=m.clientX-o.current.sx,M=m.clientY-o.current.sy,N=o.current.tx,g=o.current.ty;(Math.abs(y)>3||Math.abs(M)>3)&&(f.current=!0),i(()=>({scale:a.current.scale,x:N+y,y:g+M}))},d=()=>{o.current&&(o.current=null,v(!1))};return document.addEventListener("mousemove",p),document.addEventListener("mouseup",d),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",d)}},[]);const P=w.useCallback(p=>{p.target===p.currentTarget&&p.button===0&&(o.current={sx:p.clientX,sy:p.clientY,tx:a.current.x,ty:a.current.y},f.current=!1,v(!0))},[]);w.useEffect(()=>{const p=u.current;if(!p)return;const d=(g,S)=>Math.hypot(g.clientX-S.clientX,g.clientY-S.clientY),m=(g,S)=>({x:(g.clientX+S.clientX)/2,y:(g.clientY+S.clientY)/2}),y=g=>{if(g.touches.length===1){const S=g.touches[0],_=a.current;o.current={sx:S.clientX,sy:S.clientY,tx:_.x,ty:_.y},f.current=!1,v(!0)}else if(g.touches.length===2){o.current=null,h.current=d(g.touches[0],g.touches[1]);const S=p.getBoundingClientRect(),_=m(g.touches[0],g.touches[1]);k.current={x:_.x-S.left,y:_.y-S.top}}},M=g=>{if(g.preventDefault(),g.touches.length===1&&o.current){const S=g.touches[0],_=S.clientX-o.current.sx,R=S.clientY-o.current.sy;(Math.abs(_)>3||Math.abs(R)>3)&&(f.current=!0);const Q=o.current.tx,X=o.current.ty;i(z=>({...z,x:Q+_,y:X+R}))}else if(g.touches.length===2&&h.current!==null&&k.current!==null){const S=d(g.touches[0],g.touches[1]),_=S/h.current,R=p.getBoundingClientRect(),Q=m(g.touches[0],g.touches[1]),X=Q.x-R.left,z=Q.y-R.top,K=X-k.current.x,b=z-k.current.y;i(ie=>{const de=j(ie.scale*_),E=de/ie.scale;return{scale:de,x:X-E*(X-ie.x)+K,y:z-E*(z-ie.y)+b}}),h.current=S,k.current={x:X,y:z},f.current=!0}},N=g=>{if(g.touches.length<2&&(h.current=null,k.current=null),g.touches.length===0&&(o.current=null,v(!1)),g.touches.length===1){const S=g.touches[0],_=a.current;o.current={sx:S.clientX,sy:S.clientY,tx:_.x,ty:_.y}}};return p.addEventListener("touchstart",y,{passive:!1}),p.addEventListener("touchmove",M,{passive:!1}),p.addEventListener("touchend",N),p.addEventListener("touchcancel",N),()=>{p.removeEventListener("touchstart",y),p.removeEventListener("touchmove",M),p.removeEventListener("touchend",N),p.removeEventListener("touchcancel",N)}},[n,t,j]);const U=w.useCallback((p,d)=>{if(f.current){p.stopPropagation(),p.preventDefault();return}d()},[]);return{containerRef:u,transform:l,setTransform:i,isPanning:c,clickGuard:U,containerProps:{ref:u,onMouseDown:P},transformStyle:{transform:`translate(${l.x}px, ${l.y}px) scale(${l.scale})`,transformOrigin:"0 0"}}}const Vh=new Set(["Father","Mother","Son","Daughter","Brother","Sister","Husband","Wife","Bhaiya","Didi"]);function Wh(e,n){var c,v;const t=e.find(f=>f.id===n);if(!t)return[];const r=[],l=new Set,i=f=>{!l.has(f.id)&&f.id!==n&&(l.add(f.id),r.push(f))};if(Et(e,n).forEach(i),ja(e,n).forEach(i),(c=t.children)!=null&&c.length)for(const f of e)f.id!==n&&(v=f.children)!=null&&v.some(h=>t.children.includes(h))&&i(f);sr(e,n).forEach(i);for(const f of e)Vh.has(f.relation)&&i(f);return r}function Bo(e,n,t,r){const l=[],i=new Set,a=c=>{!i.has(c.id)&&c.id!==n&&c.id!==t&&!r.has(c.id)&&(i.add(c.id),l.push(c))};return Et(e,n).forEach(a),sr(e,n).forEach(a),ja(e,n).forEach(a),Et(e,n).forEach(c=>{Et(e,c.id).forEach(a),ja(e,c.id).forEach(a)}),sr(e,n).forEach(c=>{sr(e,c.id).forEach(a)}),l}function Yh(e,n,t,r,l=-90){const i=[];for(let a=0;a<t;a++){const u=(l+360/t*a)*(Math.PI/180);i.push({x:e+r*Math.cos(u),y:n+r*Math.sin(u)})}return i}function Qh(e,n,t,r,l,i){const a=e-t,u=n-r,o=Math.atan2(u,a)*(180/Math.PI),c=6,v=[];let f=0;for(let h=0;f<l;h++){const k=l-f,j=Math.min(k,c),P=i+h*135,U=Math.min(160,25*j);for(let p=0;p<j;p++){const d=j===1?0:-U/2+U/(j-1)*p,m=(o+d)*(Math.PI/180);v.push({x:e+P*Math.cos(m),y:n+P*Math.sin(m)}),f++}}return v}const Xh=110,Kh=122,Gh=90,Zh=100,Jh=66,qh=74;function Ho(){var X;const{currentUser:e,members:n}=xe(),[t,r]=w.useState(null),[l,i]=w.useState(null),a=(e==null?void 0:e.id)??((X=n.find(z=>z.relation==="Self"))==null?void 0:X.id)??"",u=n.find(z=>z.id===a),o=w.useMemo(()=>Wh(n,a),[n,a]),c=w.useMemo(()=>new Set(o.map(z=>z.id)),[o]),v=w.useMemo(()=>t?Bo(n,t,a,c):[],[n,t,a,c]),f=o.length,h=Math.max(160,60*f/Math.PI),k=500,j=420,P=210,U=w.useMemo(()=>{const z=new Map;for(const K of o)z.set(K.id,Bo(n,K.id,a,c).length);return z},[n,o,a,c]),p=w.useMemo(()=>Yh(k,j,o.length,h),[o.length,h]),d=t?o.findIndex(z=>z.id===t):-1,m=d>=0?p[d]:null,y=w.useMemo(()=>!m||v.length===0?[]:Qh(m.x,m.y,k,j,v.length,P),[m,v.length]),{containerProps:M,transformStyle:N,isPanning:g}=Hh({minScale:.1,maxScale:3,initial:{x:0,y:0,scale:.85}}),S=w.useCallback(z=>{z!==a&&r(K=>K===z?null:z)},[a]),_=w.useCallback(z=>{i(z)},[]),R=w.useCallback(z=>{i(z)},[]),Q=w.useCallback(()=>{r(null)},[]);return u?s.jsxs("div",{className:"hive-screen",children:[s.jsx("div",{className:"hive-bg"}),s.jsx("div",{className:"hive-dots"}),s.jsxs("header",{className:"hive-header animate-fiu",children:[s.jsxs("div",{className:"hive-header-left",children:[s.jsxs("h2",{children:["Your ",s.jsx("span",{children:"Hive"})]}),s.jsx("p",{children:"Tap a family member to explore their branch"})]}),s.jsx("div",{className:"hive-hint",children:"⬡ Tap to expand · Double-click for details"})]}),t&&s.jsx("div",{className:"hive-close-overlay",onClick:Q}),s.jsx("div",{className:`hive-canvas${g?" dragging":""}`,...M,children:s.jsxs("div",{className:"hive-world",style:N,children:[s.jsxs("svg",{className:"hive-svg",overflow:"visible",children:[o.map((z,K)=>{const b=p[K];if(!b)return null;const ie=z.branch==="Maternal";return s.jsx("line",{className:"conn-line",x1:k,y1:j,x2:b.x,y2:b.y,stroke:ie?"#06b6d4":"#f59e0b",strokeOpacity:"0.35",strokeWidth:"1.5"},`line-${z.id}`)}),m&&v.map((z,K)=>{const b=y[K];return b?s.jsx("line",{className:"branch-line",x1:m.x,y1:m.y,x2:b.x,y2:b.y,stroke:"#a78bfa",strokeOpacity:"0.3",strokeWidth:"1",strokeDasharray:"4 3"},`branch-line-${z.id}`):null})]}),s.jsxs("div",{className:"hex-node self-node animate-fiu",style:{left:k-Xh/2,top:j-Kh/2},onClick:()=>i(a),children:[s.jsx("div",{className:"hex-pulse"}),s.jsx("div",{className:"hex-glow self-glow"}),s.jsx("div",{className:"hex-border self-border"}),s.jsx("div",{className:"hex-shape",children:s.jsx("img",{src:u.avatar,alt:u.name})}),s.jsx("div",{className:"hex-self-badge",children:"You"}),s.jsxs("div",{className:"hex-label",children:[s.jsx("span",{className:"hex-name",children:u.name}),s.jsx("span",{className:"hex-relation",children:u.profession})]})]}),o.map((z,K)=>{const b=p[K];if(!b)return null;const ie=t===z.id,E=z.branch==="Maternal"?"maternal":"paternal",I=U.get(z.id)??0;return s.jsxs("div",{className:`hex-node animate-fiu${z.isDeceased?" deceased":""}`,style:{left:b.x-Gh/2,top:b.y-Zh/2,animationDelay:`${.1+K*.06}s`,zIndex:ie?15:2},onClick:()=>S(z.id),onContextMenu:$=>{$.preventDefault(),_(z.id)},onDoubleClick:()=>_(z.id),children:[s.jsx("div",{className:`hex-glow ${E}`}),s.jsx("div",{className:`hex-border ${E}`}),s.jsx("div",{className:"hex-shape",children:s.jsx("img",{src:z.avatar,alt:z.name})}),I>0&&s.jsx("div",{className:"hex-count",children:I}),I>0&&s.jsx("div",{className:`hex-expand-dot${ie?" expanded":""}`,children:s.jsx(ud,{size:10})}),s.jsxs("div",{className:"hex-label",children:[s.jsx("span",{className:"hex-name",children:z.name}),s.jsx("span",{className:"hex-relation",children:z.relation})]}),z.isDeceased&&s.jsx("div",{className:"hex-deceased-badge",children:"✝ Late"})]},z.id)}),t&&m&&v.length>0&&s.jsx("div",{className:"branch-cluster",children:v.map((z,K)=>{const b=y[K];if(!b)return null;const de=z.branch==="Maternal"?"maternal":"paternal";return s.jsxs("div",{className:`branch-node${z.isDeceased?" deceased":""}`,style:{left:b.x-Jh/2,top:b.y-qh/2,animationDelay:`${K*.05}s`},onClick:()=>R(z.id),children:[s.jsx("div",{className:`branch-hex-border ${de}`}),s.jsx("div",{className:"branch-hex-shape",children:s.jsx("img",{src:z.avatar,alt:z.name})}),s.jsxs("div",{className:"branch-label",children:[s.jsx("span",{className:"branch-name",children:z.name}),s.jsx("span",{className:"branch-relation",children:z.relation})]}),z.isDeceased&&s.jsx("div",{className:"branch-deceased-badge",children:"✝ Late"})]},z.id)})})]})}),l&&s.jsx(ks,{memberId:l,onClose:()=>i(null)})]}):null}function em(){const e=xe(h=>h.members),[n,t]=w.useState(""),[r,l]=w.useState(null),[i,a]=w.useState(null),[u,o]=w.useState(!1),[c,v]=w.useState(null),f=w.useMemo(()=>e.filter(h=>{const k=h.name.toLowerCase().includes(n.toLowerCase())||h.relation.toLowerCase().includes(n.toLowerCase()),j=r?h.city===r:!0,P=i?h.profession===i:!0;return k&&j&&P}),[e,n,r,i]);return s.jsxs("div",{className:"search-screen animate-fade-in",children:[s.jsxs("header",{className:"screen-header",children:[s.jsx("h2",{children:"Directory"}),s.jsx("p",{children:"Find family members"})]}),s.jsxs("div",{className:"search-container glass",children:[s.jsxs("div",{className:"search-bar",children:[s.jsx(fd,{className:"search-icon"}),s.jsx("input",{type:"text",placeholder:"Search by name or relation...",value:n,onChange:h=>t(h.target.value),className:"search-input"}),s.jsx("button",{className:`filter-toggle ${u?"active":""}`,onClick:()=>o(!u),children:s.jsx(uh,{className:"filter-icon"})})]}),u&&s.jsxs("div",{className:"filters-panel",children:[s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"City"}),s.jsxs("div",{className:"select-wrapper",children:[s.jsxs("select",{value:r||"",onChange:h=>l(h.target.value||null),children:[s.jsx("option",{value:"",children:"All Cities"}),Uh.map(h=>s.jsx("option",{value:h,children:h},h))]}),s.jsx(Sa,{className:"select-icon"})]})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Profession"}),s.jsxs("div",{className:"select-wrapper",children:[s.jsxs("select",{value:i||"",onChange:h=>a(h.target.value||null),children:[s.jsx("option",{value:"",children:"All Professions"}),$h.map(h=>s.jsx("option",{value:h,children:h},h))]}),s.jsx(Sa,{className:"select-icon"})]})]})]})]}),s.jsxs("div",{className:"results-list",children:[f.map(h=>s.jsxs("div",{className:"member-card glass",onClick:()=>v(h.id),style:{cursor:"pointer"},children:[s.jsx("img",{src:h.avatar,alt:h.name,className:"member-avatar"}),s.jsxs("div",{className:"member-info",children:[s.jsxs("div",{className:"member-header",children:[s.jsx("h3",{children:h.name}),h.isDeceased&&s.jsx("span",{className:"search-deceased-badge",children:"✝"}),s.jsx("span",{className:"member-relation-badge",children:h.relation})]}),s.jsxs("div",{className:"member-details",children:[s.jsxs("div",{className:"detail-item",children:[s.jsx(Il,{className:"detail-icon"}),s.jsx("span",{children:h.city})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx(sd,{className:"detail-icon"}),s.jsx("span",{children:h.profession})]})]}),s.jsx("div",{className:"member-skills",children:h.skills.map(k=>s.jsx("span",{className:"skill-badge",children:k},k))})]})]},h.id)),f.length===0&&s.jsx("div",{className:"no-results",children:s.jsx("p",{children:"No family members found matching your criteria."})})]}),c&&s.jsx(ks,{memberId:c,onClose:()=>v(null)})]})}function nm(){const e=xe(a=>a.currentUser),n=xe(a=>a.activeSignals),t=xe(a=>a.addSignal),[r,l]=w.useState("");if(!e)return null;const i=()=>{r.trim()&&(t({memberId:e.id,message:r,city:e.city,active:!0}),l(""))};return s.jsxs("div",{className:"swarm-screen animate-fade-in",children:[s.jsxs("header",{className:"screen-header",style:{position:"relative"},children:[s.jsx("h2",{children:"Swarm Signals"}),s.jsx("p",{children:"Location-based family alerts"}),s.jsxs("div",{className:"swarm-location-badge",children:[s.jsx(Il,{size:16}),s.jsx("span",{children:e.city})]})]}),s.jsxs("div",{className:"broadcast-card glass",children:[s.jsxs("div",{className:"broadcast-header",children:[s.jsx(cd,{className:"broadcast-icon"}),s.jsx("h3",{children:"Broadcast a Signal"})]}),s.jsxs("p",{className:"broadcast-subtitle",children:["Let family know you're in ",e.city," or nearby!"]}),s.jsxs("div",{className:"broadcast-input-wrapper",children:[s.jsx("input",{type:"text",value:r,onChange:a=>l(a.target.value),placeholder:"E.g., Visiting Pune for 2 days!",className:"broadcast-input",onKeyDown:a=>a.key==="Enter"&&i()}),s.jsxs("button",{className:"broadcast-button",onClick:i,disabled:!r.trim(),children:[s.jsx(yh,{className:"send-icon"}),s.jsx("span",{children:"Send"})]})]})]}),s.jsxs("div",{className:"signals-list",children:[s.jsx("h3",{className:"section-title",children:"Active Signals"}),n.map(a=>s.jsxs("div",{className:"signal-card glass",children:[s.jsxs("div",{className:"signal-header",children:[s.jsxs("span",{className:"signal-city",children:[s.jsx(Il,{className:"signal-icon"}),a.city]}),s.jsxs("span",{className:"signal-time",children:[s.jsx(oh,{className:"signal-icon"}),a.timestamp]})]}),s.jsx("p",{className:"signal-message",children:a.message})]},a.id)),n.length===0&&s.jsx("div",{className:"no-signals",children:s.jsx("p",{children:"No active signals in your network."})})]})]})}function tm(){const{currentUser:e,updateProfile:n,privacyMode:t,togglePrivacyMode:r,logout:l}=xe(),[i,a]=w.useState(!1),[u,o]=w.useState({name:(e==null?void 0:e.name)||"",city:(e==null?void 0:e.city)||"",profession:(e==null?void 0:e.profession)||""});if(w.useEffect(()=>{e&&!i&&o({name:e.name,city:e.city,profession:e.profession})},[e,i]),!e)return null;const c=()=>{n(u),a(!1)};return s.jsxs("div",{className:"profile-screen animate-fade-in",children:[s.jsxs("header",{className:"screen-header",children:[s.jsx("h2",{children:"My Profile"}),s.jsx("p",{children:"Manage your identity"})]}),s.jsxs("div",{className:"profile-card glass",children:[s.jsxs("div",{className:"profile-header-section",children:[s.jsx("img",{src:e.avatar,alt:"Profile",className:"profile-avatar-large"}),i?s.jsx("input",{type:"text",className:"edit-input name-input",value:u.name,onChange:v=>o({...u,name:v.target.value})}):s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:e.name}),e.isDeceased&&s.jsx("span",{className:"profile-deceased-badge",children:"✝ Late"})]}),s.jsxs("span",{className:"branch-badge",children:[e.branch," Branch • Generation ",e.generation]})]}),s.jsxs("div",{className:"profile-details-section",children:[s.jsxs("div",{className:"detail-row",children:[s.jsx(Il,{className:"row-icon"}),s.jsxs("div",{className:"row-content",children:[s.jsx("label",{children:"City"}),i?s.jsx("input",{type:"text",className:"edit-input",value:u.city,onChange:v=>o({...u,city:v.target.value})}):s.jsx("span",{children:e.city})]})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx(sd,{className:"row-icon"}),s.jsxs("div",{className:"row-content",children:[s.jsx("label",{children:"Profession"}),i?s.jsx("input",{type:"text",className:"edit-input",value:u.profession,onChange:v=>o({...u,profession:v.target.value})}):s.jsx("span",{children:e.profession})]})]})]}),s.jsx("div",{className:"profile-actions",children:i?s.jsxs("button",{className:"action-button save-button",onClick:c,children:[s.jsx(dd,{className:"button-icon"}),"Save Changes"]}):s.jsxs("button",{className:"action-button edit-button",onClick:()=>a(!0),children:[s.jsx(od,{className:"button-icon"}),"Edit Profile"]})})]}),s.jsxs("div",{className:"privacy-card glass",children:[s.jsxs("div",{className:"privacy-info",children:[s.jsxs("div",{className:"privacy-header",children:[s.jsx(ph,{className:"privacy-icon"}),s.jsx("h3",{children:"Privacy Mode"})]}),s.jsx("p",{children:"When enabled, only close family can see your exact location signals."})]}),s.jsx("button",{className:`toggle-button ${t?"active":""}`,onClick:r,children:s.jsx("div",{className:"toggle-thumb"})})]}),s.jsx("div",{className:"logout-section",children:s.jsxs("button",{className:"action-button logout-button",onClick:l,children:[s.jsx(mh,{className:"button-icon"}),"Sign Out"]})})]})}const Ci="login-screen-styles",rm=`
/* ── Login Screen ─────────────────────────────────────────────── */

.login-screen {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 35%, #fef9ee 70%, #fff7ed 100%);
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  position: relative;
  overflow: hidden;
}

.login-screen::before {
  content: '';
  position: absolute;
  top: -120px; right: -80px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(251,191,36,0.22) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.login-screen::after {
  content: '';
  position: absolute;
  bottom: -100px; left: -60px;
  width: 320px; height: 320px;
  background: radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.login-card {
  width: 100%;
  max-width: 400px;
  position: relative;
  z-index: 1;
}

.glass {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 24px;
  box-shadow: 0 8px 40px rgba(180,120,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06);
  padding: 40px 32px 32px;
}

.animate-fade-in {
  animation: login-fade-in 0.4s ease;
}

@keyframes login-fade-in {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

.login-header {
  text-align: center;
  margin-bottom: 32px;
}

.logo-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  border-radius: 16px;
  margin-bottom: 14px;
  box-shadow: 0 4px 16px rgba(245,158,11,0.35);
}

.hexagon-shape {
  width: 28px;
  height: 28px;
  background: #fff;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.login-header h1 {
  font-size: 28px;
  font-weight: 800;
  color: #111827;
  margin: 0 0 6px;
  letter-spacing: -0.5px;
}

.login-header p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 12px;
  font-weight: 600;
  color: #374151;
  letter-spacing: 0.2px;
}

.user-input {
  padding: 11px 14px;
  border: 1.5px solid rgba(0,0,0,0.10);
  border-radius: 10px;
  font-size: 14px;
  color: #111827;
  background: rgba(255,255,255,0.8);
  outline: none;
  font-family: inherit;
  transition: border-color 0.15s, box-shadow 0.15s;
  box-sizing: border-box;
  width: 100%;
}

.user-input::placeholder { color: #9ca3af; font-size: 13px; }

.user-input:focus {
  border-color: #f59e0b;
  box-shadow: 0 0 0 3px rgba(245,158,11,0.12);
  background: #fff;
}

.error-message {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
}

.login-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 13px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(245,158,11,0.3);
  transition: transform 0.12s, box-shadow 0.12s, filter 0.12s;
  margin-top: 4px;
  letter-spacing: 0.2px;
  font-family: inherit;
}

.login-button:hover {
  filter: brightness(1.05);
  box-shadow: 0 6px 22px rgba(245,158,11,0.38);
  transform: translateY(-1px);
}

.login-button:active { transform: scale(0.98); }

.button-icon { flex-shrink: 0; }

/* ── Profile Screen ────────────────────────────────────────────── */

.profile-screen {
  padding: 24px;
  min-height: 100%;
}

.profile-card {
  padding: 32px;
  border-radius: 16px;
  background: var(--surface);
  margin-bottom: 24px;
  box-shadow: var(--shadow-sm);
}

.profile-header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}

.profile-avatar-large {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--primary);
  margin-bottom: 16px;
}

.profile-header-section h3 {
  font-size: 1.5rem;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.name-input {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 8px;
  width: 100%;
  max-width: 300px;
}

.branch-badge {
  background: var(--bg-color);
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.875rem;
  color: var(--text-muted);
  border: 1px solid var(--border-color);
}

.profile-details-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.detail-row {
  display: flex;
  align-items: flex-start;
}

.row-icon {
  width: 24px;
  height: 24px;
  color: var(--primary);
  margin-right: 16px;
  margin-top: 4px;
}

.row-content {
  flex: 1;
}

.row-content label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.row-content span {
  font-size: 1rem;
  color: var(--text-dark);
}

.edit-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  background: var(--bg-color);
  box-sizing: border-box;
}

.edit-input:focus {
  border-color: var(--primary);
}

.profile-actions {
  display: flex;
  justify-content: center;
}

.action-button {
  display: flex;
  align-items: center;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  border: none;
}

.edit-button {
  background: var(--bg-color);
  color: var(--text-dark);
  border: 1px solid var(--border-color);
}

.edit-button:hover {
  background: var(--border-color);
}

.save-button {
  background: var(--primary);
  color: white;
}

.save-button:hover {
  background: var(--primary-dark);
}

/* Privacy Card */
.privacy-card {
  padding: 24px;
  border-radius: 12px;
  background: var(--surface);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow-sm);
}

.privacy-header {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.privacy-icon {
  width: 20px;
  height: 20px;
  color: var(--text-dark);
  margin-right: 8px;
}

.privacy-header h3 {
  font-size: 1.125rem;
}

.privacy-info p {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.toggle-button {
  width: 52px;
  height: 32px;
  background: var(--border-color);
  border-radius: 9999px;
  position: relative;
  transition: background 0.3s ease;
  margin-left: 16px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
}

.toggle-button.active {
  background: var(--primary);
}

.toggle-thumb {
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.toggle-button.active .toggle-thumb {
  transform: translateX(20px);
}

.logout-section {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}

.logout-button {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
  width: 100%;
}

.logout-button:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.4);
}
`;function lm(){w.useEffect(()=>{if(document.getElementById(Ci))return;const e=document.createElement("style");return e.id=Ci,e.textContent=rm,document.head.appendChild(e),()=>{var n;(n=document.getElementById(Ci))==null||n.remove()}},[])}function im({onSwitchToSignUp:e}){lm();const{login:n,members:t}=xe(),[r,l]=w.useState(""),[i,a]=w.useState(""),[u,o]=w.useState(""),c=f=>f.toLowerCase().replace(/[^a-z]+/g," ").trim().replace(/\s+/g,"."),v=f=>{f.preventDefault(),o("");const h=t.find(k=>c(k.name)===r.toLowerCase().trim());h&&i==="password"?n(h.id):o("Invalid username or password")};return s.jsx("div",{className:"login-screen",children:s.jsxs("div",{className:"login-card glass animate-fade-in",children:[s.jsxs("div",{className:"login-header",children:[s.jsx("img",{src:xs,alt:"Fampiary",style:{width:"100%",maxWidth:"280px",margin:"0 auto 16px",display:"block",borderRadius:"16px"}}),s.jsx("p",{children:"Your family hive awaits"})]}),s.jsxs("form",{onSubmit:v,className:"login-form",children:[u&&s.jsx("div",{className:"error-message",children:u}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"username",children:"Username"}),s.jsx("input",{type:"text",id:"username",value:r,onChange:f=>l(f.target.value),className:"user-input",placeholder:"firstname.lastname",required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",value:i,onChange:f=>a(f.target.value),className:"user-input",placeholder:"password",required:!0})]}),s.jsxs("button",{type:"submit",className:"login-button",children:[s.jsx(hh,{className:"button-icon",size:20}),s.jsx("span",{children:"Enter Hive"})]})]}),s.jsxs("p",{style:{textAlign:"center",fontSize:13,color:"#6b7280",margin:"16px 0 0"},children:["New to Fampiary?"," ",s.jsx("button",{type:"button",onClick:e,style:{background:"none",border:"none",color:"#d97706",fontWeight:700,fontSize:13,cursor:"pointer",padding:0,fontFamily:"inherit"},children:"Create an account →"})]})]})})}const md="fampiary_passwords";function Ei(){try{return JSON.parse(localStorage.getItem(md)??"{}")}catch{return{}}}function am(e){localStorage.setItem(md,JSON.stringify(e))}const sm={set(e,n){const t=Ei();t[e]=n,am(t)},verify(e,n){const r=Ei()[e];return r!==void 0?r===n:n==="password"},has(e){return Ei()[e]!==void 0}},Pi="signup-screen-styles",om=`
  .signup-screen {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 16px;
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 35%, #fef9ee 70%, #fff7ed 100%);
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    position: relative;
    overflow: hidden;
  }

  /* Decorative blobs */
  .signup-screen::before {
    content: '';
    position: absolute;
    top: -120px; right: -80px;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(251,191,36,0.22) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
  .signup-screen::after {
    content: '';
    position: absolute;
    bottom: -100px; left: -60px;
    width: 320px; height: 320px;
    background: radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  /* Card */
  .signup-card {
    background: rgba(255,255,255,0.82);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 24px;
    box-shadow: 0 8px 40px rgba(180,120,0,0.10), 0 1.5px 6px rgba(0,0,0,0.06);
    padding: 36px 32px 28px;
    width: 100%;
    max-width: 480px;
    position: relative;
    z-index: 1;
    animation: su-fade-in 0.4s ease;
  }

  @keyframes su-fade-in {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Header */
  .signup-header {
    text-align: center;
    margin-bottom: 28px;
  }
  .signup-logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px; height: 52px;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    border-radius: 14px;
    margin-bottom: 12px;
    box-shadow: 0 4px 16px rgba(245,158,11,0.35);
  }
  .signup-logo svg { color: #fff; }
  .signup-header h1 {
    font-size: 26px;
    font-weight: 800;
    color: #111827;
    margin: 0 0 4px;
    letter-spacing: -0.5px;
  }
  .signup-header p {
    font-size: 13px;
    color: #6b7280;
    margin: 0;
  }

  /* Mode switch tabs */
  .auth-tabs {
    display: flex;
    background: #f3f4f6;
    border-radius: 10px;
    padding: 3px;
    margin-bottom: 24px;
  }
  .auth-tab {
    flex: 1;
    padding: 8px;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    background: transparent;
    color: #6b7280;
    transition: all 0.18s;
  }
  .auth-tab.active {
    background: #fff;
    color: #d97706;
    box-shadow: 0 1px 4px rgba(0,0,0,0.10);
  }
  .auth-tab:hover:not(.active) { color: #374151; }

  /* Form */
  .signup-form { display: flex; flex-direction: column; gap: 14px; }

  .su-field {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .su-field label {
    font-size: 12px;
    font-weight: 600;
    color: #374151;
    letter-spacing: 0.2px;
  }
  .su-field label span.req { color: #f59e0b; margin-left: 2px; }

  .su-input-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }
  .su-input {
    width: 100%;
    padding: 10px 14px;
    border: 1.5px solid rgba(0,0,0,0.10);
    border-radius: 10px;
    font-size: 14px;
    color: #111827;
    background: rgba(255,255,255,0.8);
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
    font-family: inherit;
    box-sizing: border-box;
  }
  .su-input::placeholder { color: #9ca3af; font-size: 13px; }
  .su-input:focus {
    border-color: #f59e0b;
    box-shadow: 0 0 0 3px rgba(245,158,11,0.12);
    background: #fff;
  }
  .su-input.has-icon { padding-right: 42px; }
  .su-input.readonly {
    background: #fef3c7;
    color: #92400e;
    font-weight: 600;
    border-color: rgba(245,158,11,0.3);
    cursor: default;
  }

  /* Eye toggle */
  .su-eye-btn {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    cursor: pointer;
    color: #9ca3af;
    display: flex;
    align-items: center;
    padding: 0;
    transition: color 0.12s;
  }
  .su-eye-btn:hover { color: #374151; }

  /* Username hint */
  .su-username-hint {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: #6b7280;
    margin-top: -6px;
  }
  .su-username-pill {
    background: #fef3c7;
    color: #92400e;
    font-weight: 700;
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 20px;
    border: 1px solid rgba(245,158,11,0.3);
  }

  /* Password strength */
  .su-strength-bar {
    display: flex;
    gap: 3px;
    margin-top: -6px;
  }
  .su-strength-bar span {
    flex: 1;
    height: 3px;
    border-radius: 2px;
    background: #e5e7eb;
    transition: background 0.2s;
  }
  .su-strength-bar span.weak   { background: #ef4444; }
  .su-strength-bar span.medium { background: #f59e0b; }
  .su-strength-bar span.strong { background: #10b981; }
  .su-strength-label {
    font-size: 11px;
    margin-top: -4px;
  }
  .su-strength-label.weak   { color: #ef4444; }
  .su-strength-label.medium { color: #f59e0b; }
  .su-strength-label.strong { color: #10b981; }

  /* Two-column row */
  .su-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  /* Optional section toggle */
  .su-optional-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 0 2px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    color: #d97706;
    width: 100%;
    text-align: left;
  }
  .su-optional-toggle:hover { color: #b45309; }
  .su-optional-section {
    display: flex;
    flex-direction: column;
    gap: 14px;
    animation: su-expand 0.2s ease;
  }
  @keyframes su-expand {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Select */
  .su-select {
    width: 100%;
    padding: 10px 14px;
    border: 1.5px solid rgba(0,0,0,0.10);
    border-radius: 10px;
    font-size: 14px;
    color: #111827;
    background: rgba(255,255,255,0.8);
    outline: none;
    font-family: inherit;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 36px;
    cursor: pointer;
    transition: border-color 0.15s;
    box-sizing: border-box;
  }
  .su-select:focus { border-color: #f59e0b; box-shadow: 0 0 0 3px rgba(245,158,11,0.12); }

  /* Error */
  .su-error {
    background: #fef2f2;
    border: 1px solid #fecaca;
    color: #dc2626;
    padding: 10px 14px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* Submit button */
  .su-submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 13px;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(245,158,11,0.3);
    transition: transform 0.12s, box-shadow 0.12s, filter 0.12s;
    margin-top: 6px;
    letter-spacing: 0.2px;
  }
  .su-submit-btn:hover {
    filter: brightness(1.05);
    box-shadow: 0 6px 22px rgba(245,158,11,0.38);
    transform: translateY(-1px);
  }
  .su-submit-btn:active { transform: scale(0.98); }
  .su-submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    filter: none;
  }

  /* Switch link */
  .su-switch {
    text-align: center;
    font-size: 13px;
    color: #6b7280;
    margin-top: 8px;
  }
  .su-switch button {
    background: none;
    border: none;
    color: #d97706;
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;
    padding: 0;
    margin-left: 4px;
    font-family: inherit;
  }
  .su-switch button:hover { color: #b45309; text-decoration: underline; }

  @media (max-width: 480px) {
    .signup-card { padding: 28px 18px 22px; }
    .su-row { grid-template-columns: 1fr; }
  }
`;function um(){w.useEffect(()=>{if(document.getElementById(Pi))return;const e=document.createElement("style");return e.id=Pi,e.textContent=om,document.head.appendChild(e),()=>{var n;(n=document.getElementById(Pi))==null||n.remove()}},[])}function Vo(e){return e.toLowerCase().replace(/[^a-z]+/g," ").trim().replace(/\s+/g,".")}function cm(e){if(e.length===0)return 0;let n=0;return e.length>=8&&n++,/[A-Z]/.test(e)&&n++,/[0-9!@#$%^&*]/.test(e)&&n++,n}const dm=["","Weak","Medium","Strong"],Jr=["","weak","medium","strong"];function fm({onSwitchToLogin:e}){um();const n=xe(b=>b.addMember),t=xe(b=>b.login),r=xe(b=>b.members),[l,i]=w.useState(""),[a,u]=w.useState(""),[o,c]=w.useState(""),[v,f]=w.useState(!1),[h,k]=w.useState(!1),[j,P]=w.useState(!1),[U,p]=w.useState(""),[d,m]=w.useState(""),[y,M]=w.useState(""),[N,g]=w.useState("Self"),[S,_]=w.useState("Paternal"),[R,Q]=w.useState(""),X=w.useMemo(()=>Vo(l),[l]),z=cm(a),K=b=>{if(b.preventDefault(),Q(""),!l.trim()){Q("Please enter your full name.");return}if(X.length<3){Q("Name must be at least 3 characters.");return}if(a.length<6){Q("Password must be at least 6 characters.");return}if(a!==o){Q("Passwords do not match.");return}if(r.some(I=>Vo(I.name)===X)){Q("A member with this name already exists. Try logging in instead.");return}const de={name:l.trim(),relation:N,city:U.trim()||"Unknown",phone:d.trim()||"",profession:y.trim()||"",skills:[],avatar:pd("signup_"+Date.now(),l.trim(),N),branch:S,generation:0,isLocal:!0},E=n(de);sm.set(E,a),t(E)};return s.jsx("div",{className:"signup-screen",children:s.jsxs("div",{className:"signup-card",children:[s.jsxs("div",{className:"signup-header",children:[s.jsx("img",{src:xs,alt:"Fampiary",style:{width:"100%",maxWidth:"280px",margin:"0 auto 16px",display:"block",borderRadius:"16px"}}),s.jsx("p",{children:"Create your account and join the hive"})]}),s.jsxs("div",{className:"auth-tabs",children:[s.jsx("button",{className:"auth-tab",onClick:e,children:"Login"}),s.jsx("button",{className:"auth-tab active",children:"Sign Up"})]}),s.jsxs("form",{onSubmit:K,className:"signup-form",noValidate:!0,children:[R&&s.jsxs("div",{className:"su-error",children:[s.jsx("span",{children:"⚠"})," ",R]}),s.jsxs("div",{className:"su-field",children:[s.jsxs("label",{children:["Full Name ",s.jsx("span",{className:"req",children:"*"})]}),s.jsx("div",{className:"su-input-wrap",children:s.jsx("input",{className:"su-input",type:"text",placeholder:"e.g. Rahul Sharma",value:l,onChange:b=>i(b.target.value),autoComplete:"name",required:!0})})]}),X.length>0&&s.jsxs("div",{className:"su-username-hint",children:["Your username will be:",s.jsx("span",{className:"su-username-pill",children:X})]}),s.jsxs("div",{className:"su-field",children:[s.jsxs("label",{children:["Password ",s.jsx("span",{className:"req",children:"*"})]}),s.jsxs("div",{className:"su-input-wrap",children:[s.jsx("input",{className:"su-input has-icon",type:v?"text":"password",placeholder:"Min. 6 characters",value:a,onChange:b=>u(b.target.value),autoComplete:"new-password",required:!0}),s.jsx("button",{type:"button",className:"su-eye-btn",onClick:()=>f(b=>!b),tabIndex:-1,children:v?s.jsx(Io,{size:16}):s.jsx(Oo,{size:16})})]}),a.length>0&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"su-strength-bar",children:[s.jsx("span",{className:z>=1?Jr[z]:""}),s.jsx("span",{className:z>=2?Jr[z]:""}),s.jsx("span",{className:z>=3?Jr[z]:""})]}),s.jsx("span",{className:`su-strength-label ${Jr[z]}`,children:dm[z]})]})]}),s.jsxs("div",{className:"su-field",children:[s.jsxs("label",{children:["Confirm Password ",s.jsx("span",{className:"req",children:"*"})]}),s.jsxs("div",{className:"su-input-wrap",children:[s.jsx("input",{className:"su-input has-icon",type:h?"text":"password",placeholder:"Re-enter your password",value:o,onChange:b=>c(b.target.value),autoComplete:"new-password",required:!0}),s.jsx("button",{type:"button",className:"su-eye-btn",onClick:()=>k(b=>!b),tabIndex:-1,children:h?s.jsx(Io,{size:16}):s.jsx(Oo,{size:16})})]}),o.length>0&&a!==o&&s.jsx("span",{style:{fontSize:11,color:"#ef4444"},children:"Passwords don't match"}),o.length>0&&a===o&&s.jsx("span",{style:{fontSize:11,color:"#10b981"},children:"✓ Passwords match"})]}),s.jsxs("button",{type:"button",className:"su-optional-toggle",onClick:()=>P(b=>!b),children:[j?s.jsx(sh,{size:14}):s.jsx(Sa,{size:14}),j?"Hide":"Add"," profile details (optional)"]}),j&&s.jsxs("div",{className:"su-optional-section",children:[s.jsxs("div",{className:"su-row",children:[s.jsxs("div",{className:"su-field",children:[s.jsx("label",{children:"City"}),s.jsx("div",{className:"su-input-wrap",children:s.jsx("input",{className:"su-input",type:"text",placeholder:"e.g. Pune",value:U,onChange:b=>p(b.target.value)})})]}),s.jsxs("div",{className:"su-field",children:[s.jsx("label",{children:"Phone"}),s.jsx("div",{className:"su-input-wrap",children:s.jsx("input",{className:"su-input",type:"tel",placeholder:"+91 ...",value:d,onChange:b=>m(b.target.value)})})]})]}),s.jsxs("div",{className:"su-field",children:[s.jsx("label",{children:"Profession"}),s.jsx("div",{className:"su-input-wrap",children:s.jsx("input",{className:"su-input",type:"text",placeholder:"e.g. Software Engineer",value:y,onChange:b=>M(b.target.value)})})]}),s.jsxs("div",{className:"su-row",children:[s.jsxs("div",{className:"su-field",children:[s.jsx("label",{children:"Relation"}),s.jsx("select",{className:"su-select",value:N,onChange:b=>g(b.target.value),children:hd.map(b=>s.jsx("option",{value:b,children:b},b))})]}),s.jsxs("div",{className:"su-field",children:[s.jsx("label",{children:"Branch"}),s.jsx("select",{className:"su-select",value:S,onChange:b=>_(b.target.value),children:Fh.map(b=>s.jsx("option",{value:b,children:b},b))})]})]})]}),s.jsxs("button",{type:"submit",className:"su-submit-btn",disabled:!l.trim()||a.length<6||a!==o,children:[s.jsx(Cr,{size:18}),"Join the Hive"]})]}),s.jsxs("div",{className:"su-switch",children:["Already have an account?",s.jsx("button",{type:"button",onClick:e,children:"Login"})]})]})})}function pm({parentId:e,onClose:n}){const{members:t,addMember:r}=xe(),l=e?t.find(f=>f.id===e):null,i=()=>{var k;if(!l)return"";const f=l.generation,h=((k=l.relation)==null?void 0:k.toLowerCase())||"";return f>=2?"Uncle":f===1&&(h==="father"||h==="mother")?"Sibling":f===1?"Cousin":"Son"},[a,u]=w.useState({name:"",relation:i(),customRelation:"",city:(l==null?void 0:l.city)||"",phone:"",profession:"",branch:(l==null?void 0:l.branch)||"Paternal"}),o=a.relation==="__custom__",c=o?a.customRelation:a.relation,v=f=>{if(f.preventDefault(),!a.name.trim()||!c.trim())return;const h={name:a.name.trim(),relation:c.trim(),city:a.city.trim(),phone:a.phone.trim(),profession:a.profession.trim(),skills:[],avatar:`https://i.pravatar.cc/150?u=${Date.now()}`,branch:a.branch,generation:l?l.generation-1:0};r(h,e),n()};return s.jsx("div",{className:"popup-overlay animate-fade-in",onClick:n,children:s.jsxs("div",{className:"popup-card add-member-card",onClick:f=>f.stopPropagation(),children:[s.jsx("button",{className:"close-button",onClick:n,children:s.jsx(ys,{size:24})}),s.jsxs("div",{className:"popup-header",style:{marginBottom:24},children:[s.jsx("div",{className:"add-member-icon-wrapper",children:s.jsx(Cr,{size:36})}),s.jsx("h2",{style:{fontSize:"1.5rem",color:"var(--text-dark)",marginTop:16},children:l?`Add child of ${l.name}`:"Add Family Member"}),l&&s.jsxs("p",{className:"relation-text",style:{fontSize:"0.95rem"},children:["Branch: ",l.branch," · Generation ",l.generation-1]})]}),s.jsxs("form",{onSubmit:v,className:"edit-form",children:[s.jsxs("div",{className:"form-field",children:[s.jsx("label",{className:"field-label",children:"Name *"}),s.jsx("input",{value:a.name,onChange:f=>u({...a,name:f.target.value}),placeholder:"Full name",className:"popup-input",required:!0})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{className:"field-label",children:"Relation *"}),s.jsxs("select",{value:a.relation,onChange:f=>u({...a,relation:f.target.value}),className:"popup-input",required:!0,children:[s.jsx("option",{value:"",disabled:!0,children:"Select relation..."}),hd.map(f=>s.jsx("option",{value:f,children:f},f)),s.jsx("option",{value:"__custom__",children:"Other (type your own)"})]}),o&&s.jsx("input",{value:a.customRelation,onChange:f=>u({...a,customRelation:f.target.value}),placeholder:"Type custom relation...",className:"popup-input",style:{marginTop:8},required:!0,autoFocus:!0})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-field",children:[s.jsx("label",{className:"field-label",children:"City"}),s.jsx("input",{value:a.city,onChange:f=>u({...a,city:f.target.value}),placeholder:"City",className:"popup-input"})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{className:"field-label",children:"Phone"}),s.jsx("input",{value:a.phone,onChange:f=>u({...a,phone:f.target.value}),placeholder:"+91 ...",className:"popup-input"})]})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{className:"field-label",children:"Profession"}),s.jsx("input",{value:a.profession,onChange:f=>u({...a,profession:f.target.value}),placeholder:"Profession",className:"popup-input"})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{className:"field-label",children:"Branch"}),s.jsxs("select",{value:a.branch,onChange:f=>u({...a,branch:f.target.value}),className:"popup-input",children:[s.jsx("option",{value:"Paternal",children:"Paternal"}),s.jsx("option",{value:"Maternal",children:"Maternal"})]})]}),s.jsxs("button",{type:"submit",className:"action-btn save-btn",style:{marginTop:8},children:[s.jsx(Cr,{size:18})," Add Member"]})]})]})})}const Mi="tree-screen-styles",hm=`
.ts-screen {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background: #fafaf7;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

/* Header */
.ts-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: #fff;
  border-bottom: 1px solid rgba(0,0,0,0.07);
  flex-shrink: 0;
  gap: 8px;
  flex-wrap: wrap;
  z-index: 10;
}
.ts-header-left h2 {
  font-size: 17px;
  font-weight: 700;
  color: #d97706;
  margin: 0;
  line-height: 1.2;
}
.ts-header-left p {
  font-size: 11px;
  color: #9ca3af;
  margin: 1px 0 0;
}
.ts-header-right {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
}

/* Segmented control */
.ts-seg {
  display: flex;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 7px;
  overflow: hidden;
  margin-right: 4px;
}
.ts-seg-btn {
  padding: 5px 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 11px;
  font-weight: 500;
  color: #6b7280;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;
}
.ts-seg-btn:hover { background: #f3f4f6; }
.ts-seg-btn.active { background: #f59e0b; color: #fff; }

/* Buttons */
.ts-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 9px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 7px;
  background: #fff;
  cursor: pointer;
  color: #374151;
  font-size: 12px;
  font-weight: 500;
  transition: background 0.12s;
  white-space: nowrap;
}
.ts-btn:hover { background: #f9fafb; }
.ts-btn.active { background: #eef2ff; border-color: #6366f1; color: #4f46e5; }
.ts-btn-add {
  background: #f59e0b;
  color: #fff;
  border-color: #f59e0b;
  font-weight: 600;
}
.ts-btn-add:hover { background: #d97706; border-color: #d97706; }

/* Connect banner */
.ts-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: #eef2ff;
  border-bottom: 1px solid #c7d2fe;
  font-size: 12px;
  color: #4338ca;
  flex-shrink: 0;
}
.ts-banner-close {
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
  color: #4338ca;
  display: flex;
  align-items: center;
  padding: 0;
}

/* Canvas */
.ts-canvas-wrap {
  flex: 1;
  position: relative;
  overflow: hidden;
  background-color: #f5f4f0;
  background-image: radial-gradient(circle, #d1cfc4 1px, transparent 1px);
  background-size: 24px 24px;
}
.ts-canvas {
  position: absolute;
  inset: 0;
  user-select: none;
  touch-action: none;
  cursor: grab;
}
.ts-canvas.panning  { cursor: grabbing; }
.ts-canvas.connect-idle  { cursor: cell; }
.ts-canvas.connect-ready { cursor: crosshair; }
.ts-canvas-inner {
  position: absolute;
  top: 0;
  left: 0;
  will-change: transform;
}
.ts-svg {
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
  pointer-events: none;
  /* z-index below cards so edges render behind them */
  z-index: 0;
}

/* Cards */
.ts-card {
  position: absolute;
  width: 130px;
  background: #fff;
  border: 1.5px solid rgba(0,0,0,0.10);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 8px 6px;
  gap: 3px;
  will-change: left, top;
  overflow: visible;
  transition: box-shadow 0.12s, border-color 0.12s;
  cursor: grab;
  z-index: 1;
}
.ts-card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
  z-index: 5;
}
.ts-card.self {
  border-color: #f59e0b;
  border-width: 2.5px;
  box-shadow: 0 0 0 4px rgba(245,158,11,0.15), 0 4px 16px rgba(245,158,11,0.12);
  z-index: 2;
}
.ts-card.connect-src {
  border-color: #6366f1;
  border-width: 2px;
  box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
}
.ts-card.maternal { border-color: rgba(14,165,233,0.3); }

/* Card top bar */
.ts-card-bar {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 10px 10px 0 0;
}
.ts-card-bar.paternal { background: #f59e0b; }
.ts-card-bar.maternal { background: #0ea5e9; }
.ts-card-bar.self-bar { background: linear-gradient(90deg, #f59e0b, #ef4444); }

/* Avatar */
.ts-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}

/* Card text */
.ts-card-name {
  font-size: 11px;
  font-weight: 600;
  color: #111827;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
}
.ts-card-role {
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
}
.ts-card-role.paternal { color: #b45309; }
.ts-card-role.maternal { color: #0284c7; }
.ts-card-role.self-role { color: #92400e; font-weight: 600; }

/* "You" badge */
.ts-self-badge {
  position: absolute;
  top: -9px;
  right: -5px;
  background: #f59e0b;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 6px;
  pointer-events: none;
  letter-spacing: 0.3px;
}

/* Action buttons (visible on hover) */
.ts-card-actions {
  position: absolute;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s;
  z-index: 10;
}
.ts-card:hover .ts-card-actions {
  opacity: 1;
  pointer-events: auto;
}
.ts-act-btn {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.12);
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #6b7280;
  transition: background 0.1s;
}
.ts-act-btn:hover { background: #f3f4f6; }
.ts-act-btn.del { color: #ef4444; border-color: #fca5a5; }
.ts-act-btn.del:hover { background: #fef2f2; }

/* HUD overlays */
.ts-zoom-badge {
  position: absolute;
  bottom: 14px;
  right: 14px;
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 11px;
  color: #6b7280;
  pointer-events: none;
}
.ts-legend {
  position: absolute;
  bottom: 14px;
  right: 62px;
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(0,0,0,0.07);
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 11px;
  color: #6b7280;
  pointer-events: none;
}
.ts-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  display: inline-block;
}
.ts-dot.p { background: #f59e0b; }
.ts-dot.m { background: #0ea5e9; }
.ts-dot.s { background: #a78bfa; }

/* Minimap */
.ts-minimap {
  position: absolute;
  bottom: 46px;
  left: 14px;
  background: rgba(255,255,255,0.9);
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 8px;
  padding: 6px;
}
.ts-minimap-title {
  font-size: 9px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-bottom: 4px;
  text-align: center;
}

/* Find Me button */
.ts-find-me {
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  background: rgba(245,158,11,0.92);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.12s, transform 0.1s;
  box-shadow: 0 2px 8px rgba(245,158,11,0.3);
}
.ts-find-me:hover { background: rgba(217,119,6,0.95); transform: scale(1.02); }

/* Confirm dialog */
.ts-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}
.ts-dialog {
  background: #fff;
  border-radius: 16px;
  padding: 24px 24px 20px;
  max-width: 300px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}
.ts-dialog h3 { font-size: 15px; font-weight: 600; color: #111; margin: 8px 0 4px; }
.ts-dialog .ts-dialog-member-name { font-size: 13px; color: #d97706; font-weight: 500; margin: 0 0 8px; }
.ts-dialog .ts-dialog-desc { font-size: 12px; color: #6b7280; margin: 0 0 16px; line-height: 1.5; }
.ts-dialog-btns { display: flex; gap: 8px; justify-content: center; }
.ts-btn-cancel {
  padding: 7px 16px;
  border-radius: 7px;
  border: 1px solid rgba(0,0,0,0.1);
  background: #fff;
  cursor: pointer;
  font-size: 13px;
  color: #374151;
}
.ts-btn-cancel:hover { background: #f9fafb; }
.ts-btn-del {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 7px 16px;
  border-radius: 7px;
  border: none;
  background: #ef4444;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
}
.ts-btn-del:hover { background: #dc2626; }

/* Deceased indicator */
.ts-deceased-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 9px;
  color: #9ca3af;
  pointer-events: none;
  line-height: 1;
  opacity: 0.7;
  letter-spacing: 0.2px;
}
.ts-card.deceased {
  opacity: 0.72;
}
.ts-card.deceased .ts-avatar {
  filter: grayscale(0.5);
}
`;function mm(){w.useEffect(()=>{if(document.getElementById(Mi))return;const e=document.createElement("style");return e.id=Mi,e.textContent=hm,document.head.appendChild(e),()=>{var n;(n=document.getElementById(Mi))==null||n.remove()}},[])}const me=130,en=78,Je=44,gm=80,vm=100,Wo=.72;function ym(e){const n=new Map;for(const t of e)n.set(t.id,t.children??[]);return n}function xm(e){const n=new Map;for(const t of e)for(const r of t.children??[])n.has(r)||n.set(r,t.id);return n}function km(e){const n=new Map;for(let t=0;t<e.length;t++){const r=e[t];if(!n.has(r.id))for(let l=t+1;l<e.length;l++){const i=e[l];if(!n.has(i.id)&&(r.children??[]).some(a=>(i.children??[]).includes(a))){n.set(r.id,i.id),n.set(i.id,r.id);break}}}return n}function wm(e,n){if(!e.length)return new Map;const t=ym(e);xm(e);const r=km(e),l=Math.max(...e.map(g=>g.generation)),i=g=>(l-g)*(en+gm),a=new Map;function u(g){if(a.has(g))return a.get(g);const S=r.get(g),_=S?me*2+Je:me,R=t.get(g)??[],Q=S?t.get(S)??[]:[],X=[...new Set([...R,...Q])];if(!X.length)return a.set(g,_),_;const z=X.reduce((b,ie)=>b+u(ie)+Je,-Je),K=Math.max(_,z);return a.set(g,K),K}const o=new Map,c=new Set;function v(g,S){var de;if(c.has(g))return;c.add(g);const _=r.get(g),R=u(g),Q=((de=e.find(E=>E.id===g))==null?void 0:de.generation)??0,X=i(Q);if(_&&!c.has(_)){c.add(_);const E=S+R/2;o.set(g,{x:E-Je/2-me,y:X}),o.set(_,{x:E+Je/2,y:X})}else o.has(g)||o.set(g,{x:S+R/2-me/2,y:X});const z=t.get(g)??[],K=_?t.get(_)??[]:[],b=[...new Set([...z,...K])];let ie=S;for(const E of b)c.has(E)||(v(E,ie),ie+=u(E)+Je)}const f=new Set(e.flatMap(g=>g.children??[])),h=e.filter(g=>!f.has(g.id)),k=new Set,j=[];for(const g of h){if(k.has(g.id))continue;k.add(g.id);const S=r.get(g.id);S&&!k.has(S)&&h.some(_=>_.id===S)?(k.add(S),j.push({type:"couple",a:g.id,b:S})):j.push({type:"solo",id:g.id})}const P=g=>{var S;return((S=e.find(_=>_.id===g))==null?void 0:S.branch)??"Paternal"},U=g=>P(g.type==="couple"?g.a:g.id)==="Maternal",p=j.filter(U),d=j.filter(g=>!U(g)),m=g=>g.type==="couple"?u(g.a):u(g.id);let y=0;for(const g of p)v(g.type==="couple"?g.a:g.id,y),y+=m(g)+Je*2;p.length>0&&d.length>0&&(y+=Je*2);for(const g of d)v(g.type==="couple"?g.a:g.id,y),y+=m(g)+Je*2;let M=y+Je*4;for(const g of e)o.has(g.id)||(o.set(g.id,{x:M,y:i(g.generation)}),M+=me+Je);const N=o.get(n);if(N){const g=N.x+me/2;for(const[S,_]of o)o.set(S,{x:_.x-g,y:_.y})}return o}function Sm(e){const n=[],t=new Set;for(let r=0;r<e.length;r++){const l=e[r];if(!t.has(l.id))for(let i=r+1;i<e.length;i++){const a=e[i];if(!t.has(a.id)&&(l.children??[]).some(u=>(a.children??[]).includes(u))){t.add(l.id),t.add(a.id),n.push([l.id,a.id]);break}}}return n}function jm(e){return e&&e.split(" ").map(n=>n[0]??"").join("").slice(0,2).toUpperCase()||"??"}function Nm(e){let n=0;for(let t=0;t<e.length;t++)n=(n*31+e.charCodeAt(t))%360;return n}function Cm(e,n,t,r){const l=n+(r-n)*.55;return`M ${e} ${n} C ${e} ${l}, ${t} ${l}, ${t} ${r}`}function Em(){var Ss,js;mm();const e=xe(x=>x.members),n=xe(x=>x.currentUser),t=xe(x=>x.removeMember),r=xe(x=>x.updateMember),l=w.useCallback((x,T)=>{const D=e.find(H=>H.id===T);if(!D)return;const F=D.children??[];F.includes(x)||r(T,{children:[...F,x]})},[e,r]),i=w.useMemo(()=>e.slice(0,vm),[e]),a=w.useMemo(()=>{var x,T;return(n==null?void 0:n.id)??((x=i.find(D=>D.relation==="Self"))==null?void 0:x.id)??((T=i[0])==null?void 0:T.id)},[n,i]),[u,o]=w.useState(()=>new Map),c=w.useMemo(()=>wm(i,a??""),[i,a]),v=w.useMemo(()=>{const x=new Map(c);for(const[T,D]of u)x.set(T,D);return x},[c,u]),[f,h]=w.useState({x:0,y:0,scale:Wo}),k=w.useRef(f);k.current=f;const j=w.useRef(null),P=w.useRef(null),U=w.useRef(!1),p=w.useRef(null),d=w.useRef(null),m=w.useRef(!1),[y,M]=w.useState(!1),[N,g]=w.useState(null),[S,_]=w.useState(null),[R,Q]=w.useState(null),[X,z]=w.useState(void 0),[K,b]=w.useState(null),[ie,de]=w.useState(!1),[E,I]=w.useState("All"),[$,Z]=w.useState(!1),oe=w.useMemo(()=>Sm(i),[i]),He=w.useMemo(()=>E==="All"?i:E==="Paternal"?i.filter(x=>x.branch!=="Maternal"):i.filter(x=>x.branch==="Maternal"),[i,E]),Se=w.useMemo(()=>new Set(He.map(x=>x.id)),[He]),Hn=w.useCallback(x=>{const T=j.current;if(!T||!a)return;const D=v.get(a);if(!D)return;const F=T.clientWidth,H=T.clientHeight,V=x??f.scale,A=F/2-(D.x+me/2)*V,O=H/2-(D.y+en/2)*V+60;h({x:A,y:O,scale:V})},[v,a,f.scale]);w.useLayoutEffect(()=>{U.current||!a||v.size===0||(U.current=!0,Hn(Wo))}),w.useEffect(()=>{U.current&&Hn()},[E]);const fn=w.useCallback(()=>{const x=j.current;if(!x)return;let T=1/0,D=1/0,F=-1/0,H=-1/0;for(const[it,Ge]of v)Se.has(it)&&(T=Math.min(T,Ge.x),D=Math.min(D,Ge.y),F=Math.max(F,Ge.x+me),H=Math.max(H,Ge.y+en));if(T===1/0)return;const V=x.clientWidth,A=x.clientHeight,O=F-T+100,ue=H-D+100,he=Math.min(.9,V/O,A/ue);h({scale:he,x:(V-O*he)/2-T*he+50*he,y:(A-ue*he)/2-D*he+50*he})},[v,Se]);w.useEffect(()=>{const x=j.current;if(!x)return;const T=D=>{D.preventDefault();const F=x.getBoundingClientRect(),H=D.clientX-F.left,V=D.clientY-F.top,A=-D.deltaY*.001;h(O=>{const ue=Math.min(2.5,Math.max(.05,O.scale+A)),he=ue/O.scale;return{scale:ue,x:H-he*(H-O.x),y:V-he*(V-O.y)}})};return x.addEventListener("wheel",T,{passive:!1}),()=>x.removeEventListener("wheel",T)},[]);const be=w.useRef(null),Ot=w.useRef(null),lt=w.useRef(null);w.useEffect(()=>{const x=j.current;if(!x)return;const T=(A,O)=>Math.hypot(A.clientX-O.clientX,A.clientY-O.clientY),D=(A,O)=>({x:(A.clientX+O.clientX)/2,y:(A.clientY+O.clientY)/2}),F=A=>{if(A.touches.length===1){const O=A.touches[0],ue=k.current;be.current={sx:O.clientX,sy:O.clientY,tx:ue.x,ty:ue.y},Z(!0)}else if(A.touches.length===2){be.current=null,Ot.current=T(A.touches[0],A.touches[1]);const O=x.getBoundingClientRect(),ue=D(A.touches[0],A.touches[1]);lt.current={x:ue.x-O.left,y:ue.y-O.top}}},H=A=>{if(A.preventDefault(),A.touches.length===1&&be.current){const O=A.touches[0],ue=O.clientX-be.current.sx,he=O.clientY-be.current.sy,it=be.current.tx,Ge=be.current.ty;h(at=>({...at,x:it+ue,y:Ge+he}))}else if(A.touches.length===2&&Ot.current!==null&&lt.current!==null){const O=T(A.touches[0],A.touches[1]),ue=O/Ot.current,he=x.getBoundingClientRect(),it=D(A.touches[0],A.touches[1]),Ge=it.x-he.left,at=it.y-he.top,Pd=Ge-lt.current.x,Md=at-lt.current.y;h(Rr=>{const Ns=Math.min(2.5,Math.max(.05,Rr.scale*ue)),Cs=Ns/Rr.scale;return{scale:Ns,x:Ge-Cs*(Ge-Rr.x)+Pd,y:at-Cs*(at-Rr.y)+Md}}),Ot.current=O,lt.current={x:Ge,y:at}}},V=A=>{if(A.touches.length<2&&(Ot.current=null,lt.current=null),A.touches.length===0&&(be.current=null,Z(!1)),A.touches.length===1){const O=A.touches[0],ue=k.current;be.current={sx:O.clientX,sy:O.clientY,tx:ue.x,ty:ue.y}}};return x.addEventListener("touchstart",F,{passive:!1}),x.addEventListener("touchmove",H,{passive:!1}),x.addEventListener("touchend",V),x.addEventListener("touchcancel",V),()=>{x.removeEventListener("touchstart",F),x.removeEventListener("touchmove",H),x.removeEventListener("touchend",V),x.removeEventListener("touchcancel",V)}},[]);const ws=x=>h(T=>({...T,scale:Math.min(2.5,Math.max(.05,T.scale+x))})),gd=w.useCallback(x=>{if(x.target.closest("[data-nid]"))return;m.current=!0,Z(!0);const T=k.current;d.current={sx:x.clientX,sy:x.clientY,tx:T.x,ty:T.y},x.currentTarget.setPointerCapture(x.pointerId)},[]),vd=w.useCallback(x=>{if(p.current){const{id:T,smx:D,smy:F,sx:H,sy:V}=p.current,A=(x.clientX-D)/f.scale,O=(x.clientY-F)/f.scale;o(ue=>{const he=new Map(ue);return he.set(T,{x:H+A,y:V+O}),he});return}if(m.current&&d.current){const{sx:T,sy:D,tx:F,ty:H}=d.current;h(V=>({...V,x:F+x.clientX-T,y:H+x.clientY-D}));return}if(y&&N){const T=j.current;if(!T)return;const D=T.getBoundingClientRect(),F=(x.clientX-D.left-f.x)/f.scale,H=(x.clientY-D.top-f.y)/f.scale,V=v.get(N);V&&_({x1:V.x+me/2,y1:V.y+en,x2:F,y2:H})}},[f,y,N,v]),yd=w.useCallback(()=>{p.current=null,m.current=!1,Z(!1),d.current=null},[]),xd=w.useCallback(()=>{y&&N&&(g(null),_(null))},[y,N]),kd=w.useCallback((x,T)=>{if(x.stopPropagation(),y){if(!N){g(T);const F=v.get(T);F&&_({x1:F.x+me/2,y1:F.y+en,x2:F.x+me/2,y2:F.y+en+1})}return}const D=v.get(T)??{x:0,y:0};p.current={id:T,smx:x.clientX,smy:x.clientY,sx:D.x,sy:D.y},x.currentTarget.setPointerCapture(x.pointerId)},[y,N,v]),wd=w.useCallback((x,T)=>{if(x.stopPropagation(),y&&N&&N!==T){l(N,T),g(null),_(null);return}p.current=null},[y,N,l]),Sd=w.useCallback((x,T)=>{x.stopPropagation(),!y&&(Q(T),de(!0))},[y]),jd=w.useMemo(()=>{const x=[];for(const T of He)for(const D of T.children??[])Se.has(D)&&x.push({p:T.id,c:D,mat:T.branch==="Maternal"});return x},[He,Se]),Lr=w.useMemo(()=>{let x=0,T=0,D=1,F=1;for(const[H,V]of v)Se.has(H)&&(x=Math.min(x,V.x),T=Math.min(T,V.y),D=Math.max(D,V.x+me),F=Math.max(F,V.y+en));return{minX:0,minY:0,w:Math.max(1,D-x),h:Math.max(1,F-T)}},[v,Se]),Tr=i.find(x=>x.id===K),Nd=i.filter(x=>x.branch!=="Maternal").length,Cd=i.filter(x=>x.branch==="Maternal").length,Ed=`ts-canvas${$?" panning":""}${y?N?" connect-ready":" connect-idle":""}`;return s.jsxs("div",{className:"ts-screen",children:[s.jsxs("header",{className:"ts-header",children:[s.jsxs("div",{className:"ts-header-left",children:[s.jsx("h2",{children:"Family Tree"}),s.jsxs("p",{children:[He.length," shown · ",Nd," paternal · ",Cd," maternal"]})]}),s.jsxs("div",{className:"ts-header-right",children:[s.jsx("div",{className:"ts-seg",children:["All","Paternal","Maternal"].map(x=>s.jsx("button",{className:`ts-seg-btn${E===x?" active":""}`,onClick:()=>I(x),children:x},x))}),s.jsx("button",{className:`ts-btn${y?" active":""}`,title:"Connect mode",onClick:()=>{M(x=>!x),g(null),_(null)},children:s.jsx(Ao,{size:14})}),s.jsx("button",{className:"ts-btn",title:"Zoom in",onClick:()=>ws(.15),children:s.jsx(Sh,{size:14})}),s.jsx("button",{className:"ts-btn",title:"Zoom out",onClick:()=>ws(-.15),children:s.jsx(jh,{size:14})}),s.jsx("button",{className:"ts-btn",title:"Fit all",onClick:fn,children:s.jsx(gh,{size:14})}),s.jsxs("button",{className:"ts-btn ts-btn-add",onClick:()=>z(null),children:[s.jsx(Cr,{size:14}),s.jsx("span",{children:"Add"})]})]})]}),y&&s.jsxs("div",{className:"ts-banner",children:[s.jsx(Ao,{size:13}),N?`Now click the new parent of "${((Ss=i.find(x=>x.id===N))==null?void 0:Ss.name)??""}"`:"Click the child node first, then click its new parent",s.jsx("button",{className:"ts-banner-close",onClick:()=>{M(!1),g(null),_(null)},children:s.jsx(ys,{size:13})})]}),s.jsxs("div",{ref:j,className:"ts-canvas-wrap",children:[s.jsx("div",{ref:P,className:Ed,onPointerDown:gd,onPointerMove:vd,onPointerUp:yd,onClick:xd,children:s.jsxs("div",{className:"ts-canvas-inner",style:{transform:`translate(${f.x}px,${f.y}px) scale(${f.scale})`,transformOrigin:"0 0"},children:[s.jsxs("svg",{className:"ts-svg",viewBox:`0 0 ${Lr.w} ${Lr.h}`,width:Lr.w,height:Lr.h,overflow:"visible",children:[s.jsxs("defs",{children:[s.jsx("marker",{id:"ap",markerWidth:"6",markerHeight:"5",refX:"6",refY:"2.5",orient:"auto",children:s.jsx("polygon",{points:"0 0,6 2.5,0 5",fill:"#d97706",opacity:"0.55"})}),s.jsx("marker",{id:"am",markerWidth:"6",markerHeight:"5",refX:"6",refY:"2.5",orient:"auto",children:s.jsx("polygon",{points:"0 0,6 2.5,0 5",fill:"#0ea5e9",opacity:"0.55"})})]}),jd.map(({p:x,c:T,mat:D})=>{const F=v.get(x),H=v.get(T);return!F||!H?null:s.jsx("path",{d:Cm(F.x+me/2,F.y+en,H.x+me/2,H.y),fill:"none",stroke:D?"#0ea5e9":"#d97706",strokeWidth:"1.5",strokeOpacity:"0.4",markerEnd:`url(#a${D?"m":"p"})`},`${x}-${T}`)}),oe.map(([x,T])=>{if(!Se.has(x)||!Se.has(T))return null;const D=v.get(x),F=v.get(T);if(!D||!F)return null;const H=Math.min(D.y,F.y)+en/2,V=D.x<F.x?D.x+me:F.x+me,A=D.x<F.x?F.x:D.x;return s.jsxs("g",{children:[s.jsx("line",{x1:V,y1:H,x2:A,y2:H,stroke:"#a78bfa",strokeWidth:"1.5",strokeDasharray:"4 3",strokeOpacity:"0.6"}),s.jsx("text",{x:(V+A)/2,y:H-4,textAnchor:"middle",fontSize:"8",fill:"#a78bfa",fillOpacity:"0.75",children:"♥"})]},`s-${x}-${T}`)}),S&&s.jsx("line",{x1:S.x1,y1:S.y1,x2:S.x2,y2:S.y2,stroke:"#6366f1",strokeWidth:"2",strokeDasharray:"5 4",strokeOpacity:"0.9"})]}),He.map(x=>{const T=v.get(x.id);if(!T)return null;const D=x.id===a,F=x.id===N,H=x.branch==="Maternal",V=Nm(x.id);let A="ts-card";return D&&(A+=" self"),F&&(A+=" connect-src"),H&&!D&&!F&&(A+=" maternal"),x.isDeceased&&(A+=" deceased"),s.jsxs("div",{"data-nid":x.id,className:A,style:{left:T.x,top:T.y,cursor:y?"pointer":"grab"},onPointerDown:O=>kd(O,x.id),onPointerUp:O=>wd(O,x.id),onClick:O=>Sd(O,x.id),children:[s.jsx("div",{className:`ts-card-bar ${D?"self-bar":H?"maternal":"paternal"}`}),s.jsx("div",{className:"ts-avatar",style:{background:`hsl(${V},55%,88%)`,color:`hsl(${V},45%,35%)`},children:jm(x.name)}),s.jsx("div",{className:"ts-card-name",title:x.name,children:x.name}),s.jsx("div",{className:`ts-card-role ${D?"self-role":H?"maternal":"paternal"}`,children:x.relation}),D&&s.jsx("div",{className:"ts-self-badge",children:"You"}),x.isDeceased&&s.jsx("div",{className:"ts-deceased-badge",children:"✝ Late"}),s.jsxs("div",{className:"ts-card-actions",onClick:O=>O.stopPropagation(),children:[s.jsx("button",{className:"ts-act-btn",title:"Add child",onPointerDown:O=>O.stopPropagation(),onClick:O=>{O.stopPropagation(),z(x.id)},children:s.jsx(ud,{size:10})}),!D&&s.jsx("button",{className:"ts-act-btn del",title:"Remove",onPointerDown:O=>O.stopPropagation(),onClick:O=>{O.stopPropagation(),b(x.id)},children:s.jsx(dl,{size:10})})]})]},x.id)})]})}),s.jsxs("button",{className:"ts-find-me",onClick:()=>Hn(),children:[s.jsx(fh,{size:14}),"Find Me"]}),s.jsxs("div",{className:"ts-zoom-badge",children:[Math.round(f.scale*100),"%"]}),s.jsxs("div",{className:"ts-legend",children:[s.jsx("span",{className:"ts-dot p"}),s.jsx("span",{children:"Paternal"}),s.jsx("span",{className:"ts-dot m",style:{marginLeft:6}}),s.jsx("span",{children:"Maternal"}),s.jsx("span",{className:"ts-dot s",style:{marginLeft:6}}),s.jsx("span",{children:"Couple"})]}),s.jsx(Pm,{members:He,positions:v,selfId:a})]}),ie&&R&&s.jsx(ks,{memberId:R,onClose:()=>{de(!1),Q(null)},onAddChild:x=>{de(!1),z(x)},onRequestRemove:x=>{de(!1),b(x)}}),X!==void 0&&s.jsx(pm,{parentId:X??void 0,onClose:()=>z(void 0)}),K&&Tr&&s.jsx("div",{className:"ts-overlay",onClick:()=>b(null),children:s.jsxs("div",{className:"ts-dialog",onClick:x=>x.stopPropagation(),children:[s.jsx(dl,{size:22,color:"#ef4444"}),s.jsx("h3",{children:"Remove member?"}),s.jsx("p",{className:"ts-dialog-member-name",children:Tr.name}),s.jsx("p",{className:"ts-dialog-desc",children:(((js=Tr.children)==null?void 0:js.length)??0)>0?`Their ${Tr.children.length} child(ren) will be unlinked.`:"This member will be permanently removed."}),s.jsxs("div",{className:"ts-dialog-btns",children:[s.jsx("button",{className:"ts-btn-cancel",onClick:()=>b(null),children:"Cancel"}),s.jsxs("button",{className:"ts-btn-del",onClick:()=>{t(K),b(null)},children:[s.jsx(dl,{size:12})," Remove"]})]})]})})]})}function Pm({members:e,positions:n,selfId:t}){const i=w.useMemo(()=>{let o=1/0,c=1/0,v=-1/0,f=-1/0;for(const h of e){const k=n.get(h.id);k&&(o=Math.min(o,k.x),c=Math.min(c,k.y),v=Math.max(v,k.x+me),f=Math.max(f,k.y+en))}return o===1/0?{minX:0,minY:0,tw:800,th:500}:{minX:o,minY:c,tw:v-o+30,th:f-c+30}},[e,n]),a=140/i.tw,u=80/i.th;return s.jsxs("div",{className:"ts-minimap",children:[s.jsx("div",{className:"ts-minimap-title",children:"Overview"}),s.jsx("svg",{width:140,height:80,style:{display:"block"},children:e.map(o=>{const c=n.get(o.id);if(!c)return null;const v=o.id===t;return s.jsx("rect",{x:(c.x-i.minX)*a,y:(c.y-i.minY)*u,width:Math.max(3,me*a),height:Math.max(2,en*u),rx:"1",fill:v?"#ef4444":o.branch==="Maternal"?"#0ea5e9":"#f59e0b",opacity:v?1:.6},o.id)})})]})}function Mm(){const e=xe(u=>u.currentUser),[n,t]=w.useState("hive"),[r,l]=w.useState("signup"),i=w.useRef(null);w.useEffect(()=>{i.current&&(i.current.scrollTop=0)},[n]);const a=()=>{switch(n){case"hive":return s.jsx(Ho,{});case"search":return s.jsx(em,{});case"swarm":return s.jsx(nm,{});case"profile":return s.jsx(tm,{});case"tree":return s.jsx(Em,{});default:return s.jsx(Ho,{})}};return e?s.jsxs("div",{className:"app-container",children:[s.jsx(Nh,{activeTab:n,onTabChange:t}),s.jsx("main",{className:"main-content",ref:i,children:a()},n)]}):r==="signup"?s.jsx(fm,{onSwitchToLogin:()=>l("login")}):s.jsx(im,{onSwitchToSignUp:()=>l("signup")})}zi.createRoot(document.getElementById("root")).render(s.jsx(Qt.StrictMode,{children:s.jsx(Mm,{})}));
