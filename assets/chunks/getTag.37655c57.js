import{p as d,i as A,e as I,q as K,n as P,g as C,k as V}from"./baseSet.af584b72.js";import{l as o,r as i,d as j,m as n,j as k,M as u}from"./baseGet.de748d67.js";var W=o(i,"WeakMap");const c=W;var D=d(Object.keys,Object);const G=D;var x=Object.prototype,E=x.hasOwnProperty;function L(r){if(!A(r))return G(r);var e=[];for(var t in Object(r))E.call(r,t)&&t!="constructor"&&e.push(t);return e}function q(r){return I(r)?K(r):L(r)}function B(r,e){for(var t=-1,a=r==null?0:r.length,T=0,y=[];++t<a;){var v=r[t];e(v,t,r)&&(y[T++]=v)}return y}function $(){return[]}var F=Object.prototype,N=F.propertyIsEnumerable,f=Object.getOwnPropertySymbols,z=f?function(r){return r==null?[]:(r=Object(r),B(f(r),function(e){return N.call(r,e)}))}:$;const h=z;var H=Object.getOwnPropertySymbols,J=H?function(r){for(var e=[];r;)P(e,h(r)),r=C(r);return e}:$;const Q=J;function M(r,e,t){var a=e(r);return j(r)?a:P(a,t(r))}function nr(r){return M(r,q,h)}function or(r){return M(r,V,Q)}var R=o(i,"DataView");const l=R;var U=o(i,"Promise");const g=U;var X=o(i,"Set");const p=X;var m="[object Map]",Y="[object Object]",w="[object Promise]",S="[object Set]",b="[object WeakMap]",O="[object DataView]",Z=n(l),_=n(u),rr=n(g),er=n(p),tr=n(c),s=k;(l&&s(new l(new ArrayBuffer(1)))!=O||u&&s(new u)!=m||g&&s(g.resolve())!=w||p&&s(new p)!=S||c&&s(new c)!=b)&&(s=function(r){var e=k(r),t=e==Y?r.constructor:void 0,a=t?n(t):"";if(a)switch(a){case Z:return O;case _:return m;case rr:return w;case er:return S;case tr:return b}return e});const ir=s;export{p as S,c as W,h as a,Q as b,ir as c,nr as d,B as e,L as f,or as g,q as k,$ as s};