import{u as a}from"./index.es.4cf21787.js";import{g as R}from"./get.198c11b5.js";function h(f,e){const u=e==null?void 0:e.res,m=(e==null?void 0:e.modify)??!0,t=(...r)=>f(...r).then(s=>u?R(s,u):s),c=r=>a(t,{...e,...r});return m?c:c()}export{h as u};