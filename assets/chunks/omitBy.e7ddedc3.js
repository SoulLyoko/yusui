import{f as u,h as s,t as a,j as o}from"./baseSet.c6f802bb.js";import{b as f}from"./cloneDeep.707d050f.js";import{c as m}from"./initCloneObject.52366613.js";import{i as c}from"./merge.0f72b880.js";import{f as g}from"./basePickBy.93df484a.js";import{a as h}from"./getTag.0b794599.js";import{p as v,a as E}from"./pickBy.ee766c69.js";function L(r,n,e){var i=-1,t=r.length;n<0&&(n=-n>t?0:t+n),e=e>t?t:e,e<0&&(e+=t),t=n>e?0:e-n>>>0,n>>>=0;for(var l=Array(t);++i<t;)l[i]=r[i+n];return l}function O(r){var n=r==null?0:r.length;return n?r[n-1]:void 0}function _(r,n){return n.length<2?r:u(r,L(n,0,-1))}var y="Expected a function";function A(r){if(typeof r!="function")throw new TypeError(y);return function(){var n=arguments;switch(n.length){case 0:return!r.call(this);case 1:return!r.call(this,n[0]);case 2:return!r.call(this,n[0],n[1]);case 3:return!r.call(this,n[0],n[1],n[2])}return!r.apply(this,n)}}function C(r,n){return n=s(n,r),r=_(r,n),r==null||delete r[a(O(n))]}function p(r){return c(r)?void 0:r}var w=1,F=2,G=4,N=g(function(r,n){var e={};if(r==null)return e;var i=!1;n=o(n,function(l){return l=s(l,r),i||(i=l.length>1),l}),m(r,h(r),e),i&&(e=f(e,w|F|G,p));for(var t=n.length;t--;)C(e,n[t]);return e});const I=N;function K(r,n){return v(r,A(E(n)))}export{K as a,L as b,C as c,O as l,A as n,I as o,_ as p};
