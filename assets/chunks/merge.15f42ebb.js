import{a as y,g as T,k as A,c as w,d as _,e as b,S as I}from"./Uint8Array.39e9cc9e.js";import{i as L,a as M}from"./baseSet.d668f401.js";import{i as m,e as P,j as S,k as G,f as h,l as R}from"./baseGet.e83040d0.js";import{c as $,a as q,b as x,d as B,i as D}from"./initCloneObject.aeaec503.js";import{s as V,o as E,i as H}from"./basePickBy.d0280f3c.js";function J(n,e){return V(E(n,e,H),n+"")}function K(n,e,r){if(!m(r))return!1;var o=typeof e;return(o=="number"?y(r)&&L(e,r.length):o=="string"&&e in r)?P(r[e],n):!1}function N(n){return J(function(e,r){var o=-1,f=r.length,i=f>1?r[f-1]:void 0,s=f>2?r[2]:void 0;for(i=n.length>3&&typeof i=="function"?(f--,i):void 0,s&&K(r[0],r[1],s)&&(i=f<3?void 0:i,f=1),e=Object(e);++o<f;){var t=r[o];t&&n(e,t,o,i)}return e})}var Q="[object Object]",U=Function.prototype,W=Object.prototype,C=U.toString,X=W.hasOwnProperty,Y=C.call(Object);function Z(n){if(!S(n)||G(n)!=Q)return!1;var e=T(n);if(e===null)return!0;var r=X.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&C.call(r)==Y}function j(n){return function(e,r,o){for(var f=-1,i=Object(e),s=o(e),t=s.length;t--;){var a=s[n?t:++f];if(r(i[a],a,i)===!1)break}return e}}var z=j();const k=z;function p(n,e,r){(r!==void 0&&!P(n[e],r)||r===void 0&&!(e in n))&&M(n,e,r)}function nn(n){return S(n)&&y(n)}function c(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}function en(n){return $(n,A(n))}function rn(n,e,r,o,f,i,s){var t=c(n,r),a=c(e,r),O=s.get(a);if(O){p(n,r,O);return}var u=i?i(t,a,r+"",n,e,s):void 0,l=u===void 0;if(l){var d=h(a),g=!d&&w(a),v=!d&&!g&&_(a);u=a,d||g||v?h(t)?u=t:nn(t)?u=q(t):g?(l=!1,u=x(a,!0)):v?(l=!1,u=B(a,!0)):u=[]:Z(a)||b(a)?(u=t,b(t)?u=en(t):(!m(t)||R(t))&&(u=D(a))):l=!1}l&&(s.set(a,u),f(u,a,o,i,s),s.delete(a)),p(n,r,u)}function F(n,e,r,o,f){n!==e&&k(e,function(i,s){if(f||(f=new I),m(i))rn(n,e,s,r,F,o,f);else{var t=o?o(c(n,s),i,s+"",n,e,f):void 0;t===void 0&&(t=i),p(n,s,t)}},A)}var tn=N(function(n,e,r){F(n,e,r)});const ln=tn;export{k as a,J as b,nn as c,N as d,K as e,F as f,j as g,Z as i,ln as m,en as t};
