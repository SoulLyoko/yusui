var Z=Object.defineProperty;var ee=(n,e,t)=>e in n?Z(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var M=(n,e,t)=>(ee(n,typeof e!="symbol"?e+"":e,t),t);import{d as te,m as A,u as oe}from"./index.5B_NMU4o.js";import{A as At,c as $t,e as zt,f as Jt,g as Kt,b as Ht,h as Wt,z as Qt,j as Xt,k as Yt,i as Zt,x as eo,y as to,l as oo,n as so,p as no,o as ao,s as io,q as lo,r as co,t as ro,v as uo,a as po,w as mo}from"./index.5B_NMU4o.js";import{g as se,R as K,l as L,u as ne,a as ae,E as ie,b as $,T as B,s as le,e as ce,p as re,c as ue,d as pe,m as de,C as me,f as ye,M as ge,D as he,h as ve,i as fe,I as ke}from"./form.o6KC_1qt.js";import{j as go}from"./form.o6KC_1qt.js";import{S as xe,N as we}from"./index.cMPhMb2R.js";import{i as U,u as be}from"./zipWith.cDKToSoU.js";import{o as j}from"./omit.pAQ7TWyz.js";import{defaultTheme as z}from"./index.lN-tfA7_.js";import{P as H,y as J,d as W,A as Ne,h as Te,z as _e,g as Ee,D as _,o as F,b as G,w,I as T,a as S,M as Me,m as N,a5 as V,k as De,j as Ce,c as Pe}from"./framework.9dEYo5Bo.js";import{a as Ie}from"./index.DT9FHtDl.js";import{useMonaco as Oe,Editor as Se}from"./index.9cJsAPUu.js";import{d as vo}from"./data.qFFybvHa.js";import"./index.o5MRxqVR.js";import"./index.kqOif1Uk.js";import"./index.qJIJBhna.js";import"./cloneDeep.r1x5-OIa.js";import"./Uint8Array.fNwniHUy.js";import"./arrayPush.9gUpYHDz.js";import"./baseGet.aXQPWsrt.js";import"./baseSet.mp4sGx_T.js";import"./initCloneObject.MjDVq9Sj.js";import"./getTag.9nUBxPXw.js";import"./pickBy.firGk55j.js";import"./get.ibBWnMyK.js";import"./basePickBy.r2fGlmFx.js";import"./merge.etFcUWJt.js";import"./omitBy.5Vl3Jw6n.js";import"./union.yiA3EQr_.js";import"./pick.hwSZBMEn.js";import"./set.trCNu2cT.js";import"./snakeCase.a9RyInPp.js";import"./createCompounder.UcKAPtLe.js";import"./isEqual.GBRS_oe3.js";import"./isNil.-q_uwI5T.js";import"./fromPairs.E3iD47Fd.js";import"./kebabCase.e_ZWS89_.js";function Fe({lf:n,graphData:e,elementData:t,formData:a,formLoading:o,formOption:c,formOptions:r,editorVisible:u}){var p,y,g,h,v,d,m;async function i({data:l,isForce:f}={data:{},isForce:!1}){var I,O,D,E,k,C,P;const b=(I=n.value)==null?void 0:I.graphModel.nodes.find(s=>s.type==="process");!l&&(b!=null&&b.id)&&(l=(O=n.value)==null?void 0:O.getNodeDataById(b.id)),!((l==null?void 0:l.id)===((D=t.value)==null?void 0:D.id)&&(l==null?void 0:l.type)===((E=t.value)==null?void 0:E.type)&&!f)&&(l.type!=="process"&&((k=n.value)==null||k.selectElementById(l.id)),o.value=!0,await H(),t.value=l,c.value={menuBtn:!1,span:24,labelPosition:"left",group:((C=r.value)==null?void 0:C[l.type])??te},a.value={...l.properties,id:l.id,name:((P=l.text)==null?void 0:P.value)||""},o.value=!1)}(p=n.value)==null||p.on("element:click",i),(y=n.value)==null||y.on("blank:click",i),(g=n.value)==null||g.on("node:add",i),(h=n.value)==null||h.on("node:dnd-add",i),(v=n.value)==null||v.on("node:delete",()=>i()),(d=n.value)==null||d.on("history:change",()=>{var l;e.value=(l=n.value)==null?void 0:l.getGraphData()}),(m=n.value)==null||m.on("custom:edit-click",()=>{u.value=!0})}const Ge=K.model,Ve=K.view;class Le extends Ge{createId(){return`Note_${se()}`}initNodeData(e){super.initNodeData(e),this.height=40,this.text.draggable=!1}isAllowConnectedAsSource(){return!1}getNodeStyle(){const e=super.getNodeStyle();return e.strokeDasharray="3 3",e.fill="transparent",e}}class Be extends Ve{}const Re={type:"note",model:Le,view:Be};class qe extends L.HtmlNodeModel{setAttributes(){this.width=0,this.height=0}}class Ue extends L.HtmlNode{}const je={type:"process",model:qe,view:Ue};class R{constructor({lf:e}){e.definition={},e.useDefinition=ne(e.definition),e.register(je),new xe({lf:e}),e.register({...ae(e),type:"startEvent"}),e.register({...ie(e),type:"endEvent"}),e.register($("exclusiveGateway",ce)),e.register($("parallelGateway",re)),e.register(B("userTask",ue)),e.register(B("serviceTask",pe));const t={d:de,fill:"none",stroke:"black",transform:"scale(30)"};e.register(B("circulateTask",[L.h("path",t)])),e.register({...le(),type:"sequenceFlow"}),e.register(Re),e.register(we),e.setDefaultEdgeType("sequenceFlow")}}M(R,"pluginName","BpmnElements");class Bt extends me{constructor({lf:t}){super({lf:t});M(this,"_lf");this._lf=t;const a={icon:"https://api.iconify.design/bpmn/user-task.svg",type:"userTask"},o={icon:"https://api.iconify.design/bpmn/service-task.svg",type:"serviceTask"},c={icon:"https://api.iconify.design/bpmn/manual-task.svg",type:"circulateTask"},r={icon:"https://api.iconify.design/bpmn/gateway-xor.svg",type:"exclusiveGateway"},u={icon:"https://api.iconify.design/bpmn/gateway-parallel.svg",type:"exclusiveGateway"},i={icon:"https://api.iconify.design/bpmn/text-annotation.svg",type:"note"},p={icon:"https://api.iconify.design/bpmn/end-event.svg",type:"endEvent"},y={icon:"https://api.iconify.design/ep/delete.svg",callback(d){t.deleteNode(d.id)}},g={icon:"https://api.iconify.design/ep/copy-document.svg",callback(d){t.cloneNode(d.id)}},h=[a,o,c,r,u,i,p,g,y],v=[i,g,y];this.setContextMenuByType("userTask",h),this.setContextMenuByType("serviceTask",v)}changeNodeType(t,a){this._lf.changeNodeType(t.id,a),Object.keys(t.properties||{}).forEach(o=>this._lf.deleteProperty(t.id,o)),this._lf.emit("element:click",{data:{...t,type:a,properties:{}}})}}class Ae extends ye{constructor({lf:e}){super({lf:e}),[{key:"clear",iconClass:"lf-control-clear",title:"清空",text:"清空",onClick:()=>e.clearData()},{key:"edit",iconClass:"lf-control-edit",title:"编辑",text:"编辑",onClick:()=>e.emit("custom:edit-click",{})},{key:"mini-map",iconClass:"lf-control-mini-map",title:"导航",text:"导航",onClick:()=>{const{isShow:a,show:o,hide:c}=e.extension.miniMap??{};a?c():o()}}].forEach(a=>this.addItem(a))}}class Rt{}class $e extends ge{constructor({lf:e}){super({lf:e});const t={text:"复制",icon:!0,className:"lf-menu-copy",callback:s=>e.cloneNode(s.id)},a={text:"删除",icon:!0,className:"lf-menu-delete",callback:s=>{e.deleteNode(s.id),e.deleteEdge(s.id)}},o={text:"编辑文本",icon:!0,className:"lf-menu-edit",callback:s=>e.graphModel.editText(s.id)},c={text:"删除文本",icon:!0,className:"lf-menu-delete",callback:s=>e.updateText(s.id,"")},r={text:"框选",icon:!0,className:"lf-menu-select",callback(){e.openSelectionSelect(),e.once("selection:selected",e.closeSelectionSelect)}},u={text:"清空",icon:!0,className:"lf-menu-clear",callback:()=>e.clearData()},i={text:"",icon:!0,className:"lf-menu-back",callback:s=>this.changeMenuList(s,P.nodeMenu)},p={text:"用户任务",icon:!0,className:"lf-menu-user-task",callback:s=>this.addNode(s,{type:"userTask",x:s.x+200,y:s.y})},y={text:"服务任务",icon:!0,className:"lf-menu-service-task",callback:s=>this.addNode(s,{type:"serviceTask",x:s.x+200,y:s.y})},g={text:"传阅任务",icon:!0,className:"lf-menu-circulate-task",callback:s=>this.addNode(s,{type:"circulateTask",x:s.x+200,y:s.y})},h={text:"结束",icon:!0,className:"lf-menu-end-event",callback:s=>this.addNode(s,{type:"endEvent",x:s.x+150,y:s.y})},v={text:"互斥网关",icon:!0,className:"lf-menu-exclusive-gateway",callback:s=>this.addNode(s,{type:"exclusiveGateway",x:s.x+150,y:s.y})},d={text:"并行网关",icon:!0,className:"lf-menu-parallel-gateway",callback:s=>this.addNode(s,{type:"parallelGateway",x:s.x+150,y:s.y})},m={text:"注释",icon:!0,className:"lf-menu-note",callback:s=>this.addNode(s,{type:"note",x:s.x,y:s.y-150})},l={text:"添加",icon:!0,className:"lf-menu-add",callback:s=>{let x=[];switch(s.type){case"startEvent":case"userTask":case"exclusiveGateway":case"parallelGateway":case"circulateTask":x=[i,p,y,g,v,d,h,m];break;case"endEvent":case"sequenceFlow":case"group":case"serviceTask":x=[i,m];break;default:x=[i]}this.changeMenuList(s,x)}},f={text:"开始",icon:!0,className:"lf-menu-start-event",callback:s=>this.changeNodeType(s,"startEvent")},b={text:"结束",icon:!0,className:"lf-menu-end-event",callback:s=>this.changeNodeType(s,"endEvent")},I={text:"并行网关",icon:!0,className:"lf-menu-parallel-gateway",callback:s=>this.changeNodeType(s,"parallelGateway")},O={text:"互斥网关",icon:!0,className:"lf-menu-exclusive-gateway",callback:s=>this.changeNodeType(s,"exclusiveGateway")},D={text:"用户任务",icon:!0,className:"lf-menu-user-task",callback:s=>this.changeNodeType(s,"userTask")},E={text:"服务任务",icon:!0,className:"lf-menu-service-task",callback:s=>this.changeNodeType(s,"serviceTask")},k={text:"传阅任务",icon:!0,className:"lf-menu-circulate-task",callback:s=>this.changeNodeType(s,"circulateTask")},P={nodeMenu:[l,t,a,{text:"切换类型",icon:!0,className:"lf-menu-switch",callback:s=>{let x=[];switch(s.type){case"startEvent":x=[i,b];break;case"endEvent":x=[i,f];break;case"exclusiveGateway":x=[i,I];break;case"parallelGateway":x=[i,O];break;case"userTask":x=[i,E,k];break;case"serviceTask":x=[i,D,k];break;case"circulateTask":x=[i,D,E];break;default:x=[i]}this.changeMenuList(s,x)}},o,c],edgeMenu:[a,o,c],graphMenu:[r,u]};this.setMenuConfig(P)}changeMenuList(e,t){setTimeout(()=>{this.__currentData=e;const{left:a,top:o}=this.__menuDOM.style;this.showMenu(a,o,t)})}addNode(e,t){const a=this.lf.addNode(t),o=["serviceTask","note"].includes(t.type);this.lf.addEdge({type:o?"noteFlow":void 0,sourceNodeId:e.id,targetNodeId:a.id})}changeNodeType(e,t){this.lf.changeNodeType(e.id,t),Object.keys(e.properties||{}).forEach(a=>this.lf.deleteProperty(e.id,a)),this.lf.emit("element:click",{data:{...e,type:t,properties:{}}})}}class ze extends he{constructor({lf:e}){super({lf:e}),this.setPatternItems([{label:"框选",icon:"https://api.iconify.design/bpmn/lasso-tool.svg?width=24&height=24",callback(){e.openSelectionSelect(),e.once("selection:selected",e.closeSelectionSelect)}},{type:"group",label:"子流程",icon:"https://api.iconify.design/bpmn/subprocess-expanded.svg?width=24&height=24"},{type:"startEvent",text:"开始",label:"开始节点",icon:"https://api.iconify.design/bpmn/start-event.svg?width=24&height=24"},{type:"endEvent",text:"结束",label:"结束节点",icon:"https://api.iconify.design/bpmn/end-event.svg?width=24&height=24"},{type:"userTask",label:"用户任务",icon:"https://api.iconify.design/bpmn/user-task.svg?width=24&height=24"},{type:"serviceTask",label:"服务任务",icon:"https://api.iconify.design/bpmn/service-task.svg?width=24&height=24"},{type:"circulateTask",label:"传阅任务",icon:"https://api.iconify.design/bpmn/manual-task.svg?width=24&height=24"},{type:"exclusiveGateway",label:"互斥网关",icon:"https://api.iconify.design/bpmn/gateway-xor.svg?width=24&height=24"},{type:"parallelGateway",label:"并行网关",icon:"https://api.iconify.design/bpmn/gateway-parallel.svg?width=24&height=24"},{type:"note",label:"注释",icon:"https://api.iconify.design/bpmn/text-annotation.svg?width=24&height=24"}])}}class Q{constructor({lf:e}){M(this,"lf");this.lf=e}setStyles(e){e.forEach(({id:t,style:a})=>{var o,c;t&&((c=(o=this.lf)==null?void 0:o.graphModel)==null||c.updateAttributes(t,{style:a}))})}}M(Q,"pluginName","styles");class X{constructor({lf:e}){M(this,"lf");M(this,"container");M(this,"__tooltipDOM");M(this,"__tooltips",[]);this.__tooltipDOM=document.createElement("div"),this.__tooltipDOM.className="lf-tooltip",this.__tooltipDOM.style.position="absolute",this.__tooltipDOM.style.display="none",this.lf=e}render(e,t){this.container=t,t.appendChild(this.__tooltipDOM),e.on("node:mouseenter,edge:mouseenter",({data:a,e:o})=>{var p;const c=(p=this.__tooltips.find(y=>y.id===a.id))==null?void 0:p.content;if(!c)return;this.__tooltipDOM.innerHTML=c;const r=e.getPointByClient(o.x,o.y),{domOverlayPosition:{x:u,y:i}}=r;this.__tooltipDOM.style.top=`${i+10}px`,this.__tooltipDOM.style.left=`${u+10}px`,this.__tooltipDOM.style.display="block"}),e.on("node:mouseleave,edge:mouseleave",()=>{this.__tooltipDOM.style.display="none"})}setTooltips(e){this.__tooltips=e}}M(X,"pluginName","tooltips");const Y={type:"process",key:"Process",properties:{}};function Je(n){const{id:e,type:t,x:a,y:o,properties:c,children:r,text:u}=n;return{incoming:[],outgoing:[],children:r,type:t,key:e,groupKey:c==null?void 0:c.groupKey,properties:{...c,name:U(u)?u:(u==null?void 0:u.value)??"",x:a,y:o,text:u}}}function Ke(n){const{id:e,type:t,sourceNodeId:a,targetNodeId:o,startPoint:c,endPoint:r,pointsList:u,properties:i,text:p}=n;return{incoming:[a],outgoing:[o],type:t,key:e,groupKey:i==null?void 0:i.groupKey,properties:{...i,name:U(p)?p:(p==null?void 0:p.value)??"",text:p,startPoint:c,endPoint:r,pointsList:u}}}function He(n){const{id:e,type:t,properties:a,text:o}=n;return{type:t,key:e,properties:{...a,name:U(o)?o:(o==null?void 0:o.value)??""}}}function We(n){const e=new Map,t={processData:Y,flowElementList:[]};return n.nodes.forEach(a=>{var o;if(a.type==="process")t.processData=He(a);else{const c=Je(a);(o=t.flowElementList)==null||o.push(c),e.set(a.id,c)}}),n.edges.forEach(a=>{var u;const o=Ke(a);e.get(a.sourceNodeId).outgoing.push(o.key),e.get(a.targetNodeId).incoming.push(o.key),(u=t.flowElementList)==null||u.push(o)}),t}function Qe(n){const{incoming:e,outgoing:t,properties:a,key:o,type:c}=n,{text:r,name:u,startPoint:i,endPoint:p,pointsList:y}=a??{},g={id:o,type:c,sourceNodeId:(e==null?void 0:e[0])??"",targetNodeId:(t==null?void 0:t[0])??"",text:r||u,startPoint:i,endPoint:p,pointsList:y,properties:{}},h=["startPoint","endPoint","pointsList","text"];return g.properties=j(a,h),g}function Xe(n){const{properties:e,key:t,type:a,children:o}=n,{x:c,y:r,text:u,name:i}=e??{},p={id:t,type:a??"",x:c,y:r,text:u||i,children:o,properties:{}},y=["x","y","text"];return p.properties=j(e,y),p}function Ye(n){const{properties:e,key:t,type:a}=n,{name:o}=e??{},c={id:t,type:a??"",text:o,x:0,y:0},r=["x","y","text"];return c.properties=j(e,r),c}function Ze(n){const{flowElementList:e}=n,t=r=>["sequenceFlow","noteFlow"].includes(r),a=(e==null?void 0:e.filter(r=>!t(r.type)).map(Xe))??[],o=(e==null?void 0:e.filter(r=>t(r.type)).map(Qe))??[];return a.unshift(Ye(n.processData??Y)),{nodes:a,edges:o}}class q{constructor({lf:e}){e.adapterIn=this.adapterIn,e.adapterOut=this.adapterOut}adapterOut(e){return We(e)}adapterIn(e){return Ze(e)}}M(q,"pluginName","turboAdapter");function et({props:n,state:e}){const{lf:t,graphData:a}=e;function o(r){var i;const u=A({container:r,grid:{type:"dot",size:10},nodeTextDraggable:!0,edgeTextDraggable:!0,nodeTextEdit:!0,edgeTextEdit:!0,plugins:[Ae,ze,ve,$e,fe,ke,R,q],edgeGenerator:(p,y)=>{if(["note","serviceTask"].includes(y.type))return"noteFlow"}},n.initOptions);t.value=new L.LogicFlow(u),(i=t.value)==null||i.setTheme(z),Fe(e),J(a,p=>{var v,d,m;const y=JSON.stringify(p),g=JSON.stringify((v=t.value)==null?void 0:v.getGraphData());y!==g&&((d=t.value)==null||d.render(p),(m=t.value)==null||m.emit("element:click",{isForce:!0}))},{immediate:!0})}function c(r){var i;const u=A({container:r,grid:{type:"dot",size:10},isSilentMode:!0,plugins:[R,q,X,Q]},n.initOptions);t.value=new L.LogicFlow(u),(i=t.value)==null||i.setTheme(z),J(()=>[a.value,n.styles,n.tooltips],async()=>{var p,y,g,h,v,d,m;(p=t.value)==null||p.render(a.value),await H(),(h=(g=(y=t.value)==null?void 0:y.extension)==null?void 0:g.styles)==null||h.setStyles(n.styles??[]),(m=(d=(v=t.value)==null?void 0:v.extension)==null?void 0:d.tooltips)==null||m.setTooltips(n.tooltips??[])},{immediate:!0})}return{initViewer:c,initModeler:o}}const tt=De("span",null,"编辑JSON",-1),ot=W({__name:"FlowEditor",props:{modelValue:{default:()=>({})},visible:{type:Boolean}},emits:["confirm"],setup(n,{emit:e}){const t=n,a=e,{modelValue:o,visible:c}=Ie(t),{monacoRef:r,unload:u}=Oe();Ne(()=>!r.value&&u());const i=Te("");function p(){const d=JSON.parse(i.value);o.value=d,a("confirm",d),c.value=!1}_e(()=>{i.value=JSON.stringify(o.value,null,2)});const y=Ee(()=>({defaultLanguage:"json",options:{theme:document.documentElement.className.includes("dark")?"vs-dark":"light",minimap:{enable:!0}}}));function g(){var d,m;(m=(d=o.value)==null?void 0:d.flowElementList)==null||m.forEach(l=>{var f;(f=l.properties)!=null&&f.assignee&&(l.properties.assignee=[])}),o.value={...o.value}}function h(){var d,m;(m=(d=o.value)==null?void 0:d.flowElementList)==null||m.forEach(l=>{var f;(f=l.properties)!=null&&f.button&&(l.properties.button=[])}),o.value={...o.value}}function v(){var d,m;(m=(d=o.value)==null?void 0:d.flowElementList)==null||m.forEach(l=>{var f;(f=l.properties)!=null&&f.formProperty&&(l.properties.formProperty=[])}),o.value={...o.value}}return(d,m)=>{const l=_("el-button"),f=_("el-text"),b=_("el-dropdown-item"),I=_("el-dropdown-menu"),O=_("el-dropdown"),D=_("el-drawer");return F(),G(D,{modelValue:N(c),"onUpdate:modelValue":m[1]||(m[1]=E=>V(c)?c.value=E:null),size:"50%"},{header:w(()=>[tt,T(O,null,{dropdown:w(()=>[T(I,null,{default:w(()=>[T(b,{disabled:""},{default:w(()=>[T(f,{tag:"strong"},{default:w(()=>[S(" 重置后将实时生效 ")]),_:1})]),_:1}),T(b,{icon:"el-icon-avatar",onClick:g},{default:w(()=>[S(" 重置人员配置 ")]),_:1}),T(b,{icon:"el-icon-info-filled",onClick:h},{default:w(()=>[S(" 重置按钮配置 ")]),_:1}),T(b,{icon:"el-icon-list",onClick:v},{default:w(()=>[S(" 重置表单配置 ")]),_:1})]),_:1})]),default:w(()=>[T(l,{type:"primary",icon:"el-icon-refresh"},{default:w(()=>[S(" 重置字段 ")]),_:1})]),_:1}),T(l,{type:"primary",icon:"el-icon-check",style:{margin:"0 10px"},onClick:p},{default:w(()=>[S(" 确定 ")]),_:1})]),default:w(()=>[T(N(Se),Me({value:i.value,"onUpdate:value":m[0]||(m[0]=E=>i.value=E),width:"100%",height:"100%"},y.value),null,16,["value"])]),_:1},8,["modelValue"])}}}),st=["id"],qt=W({__name:"index",props:{lf:{},initOptions:{},modelValue:{},elementData:{},formOptions:{},formData:{},formOption:{},formDefaults:{},formWidth:{},dataOptions:{},type:{},styles:{},tooltips:{}},setup(n){const e=n,t=oe(e),{lf:a,graphData:o,formRef:c,formData:r,formOption:u,formDefaults:i,formLoading:p,editorVisible:y,onUpdateFormData:g}=t,{initModeler:h,initViewer:v}=et({props:e,state:t}),d=be("logicflow-container");return Ce(()=>{const m=document.querySelector(`#${d}`);e.type==="viewer"?v(m):h(m)}),(m,l)=>{const f=_("el-main"),b=_("el-empty"),I=_("el-skeleton"),O=_("avue-form"),D=_("el-aside"),E=_("el-container");return m.type==="viewer"?(F(),Pe("div",{key:0,id:N(d),class:"lf-container"},null,8,st)):(F(),G(E,{key:1,class:"lf-container"},{default:w(()=>[T(f,{id:N(d),class:"lf-main"},null,8,["id"]),T(D,{class:"lf-aside",width:m.formWidth},{default:w(()=>{var k,C;return[(C=(k=N(u))==null?void 0:k.group)!=null&&C.length?N(p)?(F(),G(I,{key:1})):(F(),G(O,{key:2,ref_key:"formRef",ref:c,modelValue:N(r),"onUpdate:modelValue":[l[0]||(l[0]=P=>V(r)?r.value=P:null),N(g)],defaults:N(i),"onUpdate:defaults":l[1]||(l[1]=P=>V(i)?i.value=P:null),option:N(u)},null,8,["modelValue","defaults","option","onUpdate:modelValue"])):(F(),G(b,{key:0,description:"选择元素以编辑数据"}))]}),_:1},8,["width"]),T(ot,{modelValue:N(o),"onUpdate:modelValue":l[2]||(l[2]=k=>V(o)?o.value=k:null),visible:N(y),"onUpdate:visible":l[3]||(l[3]=k=>V(y)?y.value=k:null),onConfirm:l[4]||(l[4]=k=>{var C;return(C=N(a))==null?void 0:C.render(k)})},null,8,["modelValue","visible"])]),_:1}))}}});export{At as AssigneeType,R as BpmnElements,Bt as ContextMenu,Ae as Control,Rt as Dagre,qt as FlowDesign,$e as Menu,ze as Panel,Q as Styles,X as Tooltips,q as TurboAdapter,$t as assigneeColumn,zt as baseColumn,Jt as buttonColumn,Kt as circulateColumn,go as defaultFormProperty,vo as defaultGraphData,te as defaultGroup,Ht as defaultOptions,z as defaultTheme,Wt as executionListenerColumn,Qt as formColumnToDic,Xt as formPropertyColumn,Yt as gatewayColumn,Zt as injectionKey,eo as mergeButton,to as mergeFormProperty,A as mergeInitOptions,oo as multiInstanceColumn,so as noteColumn,no as processColumn,ao as propertyColumn,io as sequenceFlowColumn,lo as serialColumn,co as serviceTaskColumn,ro as taskListenerColumn,uo as timeLimitColumn,Ze as toLogicflowData,We as toTurboData,et as useInit,po as useInjectState,Fe as useModelerListener,oe as useProvideState,mo as userTaskColumn};
