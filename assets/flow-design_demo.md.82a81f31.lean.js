import{h as F,Z as C,d as A,J as i,o as y,b as g,l as c,B as E,g as D,c as d,N as r,K as h,p as _,m as b,k as l,_ as v,a as B,V as f}from"./chunks/framework.6b67ac47.js";function m(){const n=F({});return C(()=>import("./chunks/index.8ee869d7.js"),["assets/chunks/index.8ee869d7.js","assets/chunks/data.09f78ca9.js","assets/chunks/form.07a7ad88.js","assets/chunks/zipWith.9574e409.js","assets/chunks/union.a37b7994.js","assets/chunks/baseSet.c6f802bb.js","assets/chunks/cloneDeep.707d050f.js","assets/chunks/initCloneObject.52366613.js","assets/chunks/getTag.0b794599.js","assets/chunks/pickBy.ee766c69.js","assets/chunks/basePickBy.93df484a.js","assets/chunks/baseMap.4525a961.js","assets/chunks/merge.0f72b880.js","assets/chunks/createCompounder.21553c6c.js","assets/chunks/omitBy.e7ddedc3.js","assets/chunks/snakeCase.6293e677.js","assets/chunks/pick.3451ca24.js","assets/chunks/set.d1d08ef6.js","assets/chunks/isEqual.d232753d.js","assets/chunks/isNil.990ccdb3.js","assets/chunks/kebabCase.9388dd24.js","assets/chunks/theme.01a3663e.js"]).then(s=>{n.value=s.defaultGraphData()}),n}function w(){const n=F({});return C(()=>import("./chunks/index.890785ab.js").then(s=>s.B),["assets/chunks/index.890785ab.js","assets/chunks/index.63550f19.js","assets/chunks/framework.6b67ac47.js","assets/chunks/index.013eb64a.js","assets/chunks/index.0246ace1.js","assets/chunks/index.af03a1c8.js","assets/chunks/cloneDeep.707d050f.js","assets/chunks/baseSet.c6f802bb.js","assets/chunks/initCloneObject.52366613.js","assets/chunks/getTag.0b794599.js","assets/chunks/form.07a7ad88.js","assets/chunks/zipWith.9574e409.js","assets/chunks/union.a37b7994.js","assets/chunks/pickBy.ee766c69.js","assets/chunks/basePickBy.93df484a.js","assets/chunks/baseMap.4525a961.js","assets/chunks/merge.0f72b880.js","assets/chunks/createCompounder.21553c6c.js","assets/chunks/omitBy.e7ddedc3.js","assets/chunks/snakeCase.6293e677.js","assets/chunks/pick.3451ca24.js","assets/chunks/set.d1d08ef6.js","assets/chunks/isEqual.d232753d.js","assets/chunks/isNil.990ccdb3.js","assets/chunks/kebabCase.9388dd24.js"]).then(s=>{n.value=s.defaultOptions}),n}const x=A({__name:"designer",setup(n){const s=m(),o=w(),t={buttonList:[{name:"保存草稿",buttonKey:"flow_draft"},{name:"发送",buttonKey:"flow_pass"}],formPropertyList:[{label:"字段1",prop:"field1"},{label:"字段2",prop:"field2"},{label:"审批表单",prop:"formTab"},{label:"附件资料",prop:"fileTab"},{label:"流程跟踪",prop:"trackTab"}],fieldsDic:[{label:"字段1",value:"field1"},{label:"字段2",value:"field2"}]};return(p,a)=>{const e=i("FlowDesign");return y(),g(e,{modelValue:c(s),"onUpdate:modelValue":a[0]||(a[0]=u=>E(s)?s.value=u:null),"form-options":c(o),"data-options":t,style:{height:"800px"}},null,8,["modelValue","form-options"])}}}),I=n=>(_("data-v-632c264d"),n=n(),b(),n),T=I(()=>l("div",{class:"flow-status-legend"},[l("div",{class:"legend-item"},[l("div",{class:"legend-color"}),l("span",{class:"legend-text"},"已办")])],-1)),q=A({__name:"viewer",setup(n){const s=m(),o=D(()=>{var p;return(p=s.value.flowElementList)==null?void 0:p.map(a=>({id:a.key,style:{fill:"lightgreen"}}))}),t=D(()=>{var p;return(p=s.value.flowElementList)==null?void 0:p.map(a=>({id:a.key,content:`<div>${a.key}</div>`}))});return(p,a)=>{const e=i("FlowDesign");return y(),d(h,null,[T,r(e,{"model-value":c(s),type:"viewer",styles:o.value,tooltips:t.value,style:{height:"400px"}},null,8,["model-value","styles","tooltips"])],64)}}});const k=v(q,[["__scopeId","data-v-632c264d"]]),P=l("h1",{id:"flowdesign",tabindex:"-1"},[B("FlowDesign "),l("a",{class:"header-anchor",href:"#flowdesign","aria-label":'Permalink to "FlowDesign"'},"​")],-1),L=l("h2",{id:"基础用法",tabindex:"-1"},[B("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),O=f("",2),S=f("",7),R=JSON.parse('{"title":"FlowDesign","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"flow-design/demo.md","filePath":"flow-design/demo.md"}'),V={name:"flow-design/demo.md"},G=Object.assign(V,{setup(n){return(s,o)=>(y(),d("div",null,[P,L,r(x),O,r(k),S]))}});export{R as __pageData,G as default};
