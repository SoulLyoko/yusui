import{i as y,f as T,g as w,a as _,k as A,h as I,j as L,l as m,S as M}from"./baseSet.84292f44.js";import{i as O,g as P,h as S,j as G,e as b,k as R}from"./baseGet.f3f2ab16.js";import{c as $,a as q,b as x,d as B,i as D}from"./initCloneObject.fb0a9e5d.js";import{s as V,o as j,i as E}from"./basePickBy.40d88517.js";function H(n,e){return V(j(n,e,E),n+"")}function J(n,e,r){if(!O(r))return!1;var o=typeof e;return(o=="number"?y(r)&&T(e,r.length):o=="string"&&e in r)?P(r[e],n):!1}function K(n){return H(function(e,r){var o=-1,f=r.length,i=f>1?r[f-1]:void 0,s=f>2?r[2]:void 0;for(i=n.length>3&&typeof i=="function"?(f--,i):void 0,s&&J(r[0],r[1],s)&&(i=f<3?void 0:i,f=1),e=Object(e);++o<f;){var t=r[o];t&&n(e,t,o,i)}return e})}var N="[object Object]",Q=Function.prototype,U=Object.prototype,C=Q.toString,W=U.hasOwnProperty,X=C.call(Object);function Y(n){if(!S(n)||G(n)!=N)return!1;var e=w(n);if(e===null)return!0;var r=W.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r instanceof r&&C.call(r)==X}function Z(n){return function(e,r,o){for(var f=-1,i=Object(e),s=o(e),t=s.length;t--;){var a=s[n?t:++f];if(r(i[a],a,i)===!1)break}return e}}var z=Z();const k=z;function p(n,e,r){(r!==void 0&&!P(n[e],r)||r===void 0&&!(e in n))&&_(n,e,r)}function nn(n){return S(n)&&y(n)}function c(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}function en(n){return $(n,A(n))}function rn(n,e,r,o,f,i,s){var t=c(n,r),a=c(e,r),v=s.get(a);if(v){p(n,r,v);return}var u=i?i(t,a,r+"",n,e,s):void 0,l=u===void 0;if(l){var d=b(a),g=!d&&I(a),h=!d&&!g&&L(a);u=a,d||g||h?b(t)?u=t:nn(t)?u=q(t):g?(l=!1,u=x(a,!0)):h?(l=!1,u=B(a,!0)):u=[]:Y(a)||m(a)?(u=t,m(t)?u=en(t):(!O(t)||R(t))&&(u=D(a))):l=!1}l&&(s.set(a,u),f(u,a,o,i,s),s.delete(a)),p(n,r,u)}function F(n,e,r,o,f){n!==e&&k(e,function(i,s){if(f||(f=new M),O(i))rn(n,e,s,r,F,o,f);else{var t=o?o(c(n,s),i,s+"",n,e,f):void 0;t===void 0&&(t=i),p(n,s,t)}},A)}var tn=K(function(n,e,r){F(n,e,r)});const un=tn;export{H as a,k as b,nn as c,K as d,J as e,F as f,Z as g,Y as i,un as m,en as t};
