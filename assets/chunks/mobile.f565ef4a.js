import{d as ze}from"./index.013eb64a.js";import{I as Ce}from"./iconify.924204c7.js";import{a as ue,f as Ee,g as Re,w as Me,h as Ge}from"./index.63550f19.js";import{m as Je,u as Qe}from"./index.3bec44c8.js";import{e as We}from"./index.890785ab.js";import"./form.07a7ad88.js";import"./index.ba9357f8.js";import"./index.6700b933.js";import{j as He}from"./tree.c7a66f34.js";import"./vuedraggable.umd.9831e9f5.js";import{u as te}from"./index.es.1accc3d3.js";import{e as J}from"./index.0246ace1.js";import{ab as Ie,g as j,h as B,A as ae,l as _,E as de,$ as Xe,S as Ye,Y as Ze,d as W,J as U,c as E,L as ee,K as X,o as C,b as O,w as V,e as R,a as M,t as G,N as S,B as re,a3 as ge,k as F,R as Ve,_ as me,C as Fe,U as qe,O as Le,a5 as et,D as tt,a9 as at,aa as ot}from"./framework.6b67ac47.js";import{p as lt}from"./pick.3451ca24.js";import{t as Te,a as st}from"./index.af03a1c8.js";import{E as ne}from"./index.6dee874e.js";import{u as Ue}from"./index.386fc70b.js";import{d as nt}from"./zipWith.9574e409.js";import{d as rt}from"./data.09f78ca9.js";import{g as se}from"./getTag.0b794599.js";import{c as it}from"./cloneDeep.707d050f.js";import{m as ut}from"./merge.0f72b880.js";function Y(e){const{tableOption:t}=H();return Ie({...t,...e})}function ct(e){const{buttonHandler:t,request:s}=H(),{commitTask:y,revokeTask:i,saveDraft:u,startTask:o,terminateTask:d,transferTask:n,withdrawTask:r,rejectTask:v,greenChannel:m}=_e(s),a=j(()=>{const{flowDetail:g,formVariables:A,approvalFormData:f,debug:T,fileIds:$}=e,{flowDeployId:N}=g.value.process??{},{taskId:b,flowInstanceId:c}=g.value.task??{};return{flowDeployId:N,taskId:b,flowInstanceId:c,variables:A.value,debug:T.value,fileIds:$==null?void 0:$.value,...f.value}}),p=()=>a.value.taskId&&a.value.flowInstanceId;return{flow_draft(){if(p())return u(a.value)},flow_pass(){return p()?y(a.value):o(a.value)},flow_revoke(){if(p())return i(a.value)},flow_withdraw(){if(p())return r(a.value)},flow_terminate(){if(p())return d(a.value)},flow_transfer(){if(p())return n(a.value)},flow_reject(){if(p())return v(a.value)},flow_green(){if(p())return m(a.value)},...t==null?void 0:t(e)}}function ke(){const e=Je();return{emitter:e,onAfterGetDetail:u=>{e.on("afterGetDetail",async(...o)=>await(u==null?void 0:u(...o)))},onBeforeClick:u=>{e.on("beforeClick",async(...o)=>await(u==null?void 0:u(...o)))},onBeforeSubmit:u=>{e.on("beforeSubmit",async(...o)=>await(u==null?void 0:u(...o)))},onAfterSubmit:u=>{e.on("afterSubmit",async(...o)=>await(u==null?void 0:u(...o)))}}}function pt(e){const t=B({});return ae(async()=>{var y;const{formProperty:s}=((y=_(e))==null?void 0:y.properties)||{};s!=null&&s.length&&(await de(),Object.keys(t.value).forEach(i=>{var d,n,r,v;const u=((d=t.value[i])==null?void 0:d.label)||"",o=s==null?void 0:s.find(m=>m.prop===i);if(t.value[i].display=o==null?void 0:o.display,t.value[i].disabled=o==null?void 0:o.disabled,t.value[i].detail=o==null?void 0:o.detail,t.value[i].readonly=o==null?void 0:o.readonly,t.value[i].rules=t.value[i].rules??[],o!=null&&o.required&&((n=t.value[i].rules)!=null&&n.some(m=>m.required)))return null;o!=null&&o.required?(r=t.value[i].rules)==null||r.push({required:!0,message:`${u}为必填项`}):t.value[i].rules=(v=t.value[i].rules)==null?void 0:v.filter(m=>!m.required)}))}),t}const dt={modelValue:{type:Object,default:()=>({})},title:{type:String},flowDetail:{type:Object,default:()=>({})},formLoading:{type:Boolean},submitLoading:{type:Boolean},activeTab:{type:String,default:"formTab"},activeBtn:{type:Object,default:()=>({})},approvalVisible:{type:Boolean},approvalFormData:{type:Object,default:()=>({})},flowKey:{type:String},taskId:{type:String},instanceId:{type:String},formId:{type:String},fileIds:{type:String},permission:{type:Object},afterGetDetail:{type:Function},beforeClick:{type:Function},beforeSubmit:{type:Function},afterSubmit:{type:Function},detail:{type:[Boolean,String],default:!1},debug:{type:[Boolean,String],default:!1}},mt={complete:e=>e},xe=Symbol("flowFormState");function ft(e,t){const s=ue(e,void 0,{passive:!0,deep:!0}),{flowDetail:y,modelValue:i,formLoading:u,activeTab:o,afterGetDetail:d}=s,{emitter:n}=ke(),{tabs:r,customForm:v,request:m}=H(),a=B({}),p=j(()=>(r==null?void 0:r.filter(N=>{var k,l,D;const b=(D=(l=(k=y.value)==null?void 0:k.properties)==null?void 0:l.formProperty)==null?void 0:D.find(I=>I.prop===N.prop),c={...N,display:(b==null?void 0:b.display)??N.display};return(c==null?void 0:c.display)!==!1}).map(N=>{var c,k;let b=N.component;if(N.prop==="formTab"){const l=v==null?void 0:v[((k=(c=y==null?void 0:y.value)==null?void 0:c.process)==null?void 0:k.formPath)??""];typeof l=="function"?b=Ze(l):l&&(b=l)}return{...N,component:b}}))??[]),g=B();Q()&&Ee(g,{onSwipeEnd(N,b){if(!["left","right"].includes(b))return;const c=p.value.findIndex(l=>l.prop===o.value),k=Re(c+(b==="right"?-1:1),0,p.value.length-1);o.value=p.value[k].prop}});const{getFlowDetail:A}=_e(m);ae(()=>{const{flowKey:N,taskId:b,instanceId:c}=e;!N&&!b&&!c||(u.value=!0,A({flowKey:N,taskId:b,flowInstanceId:c}).then(async k=>{var l;y.value=k.data,i.value=k.data.formData||{},await((l=d==null?void 0:d.value)==null?void 0:l.call(d)),await n.emitAsync("afterGetDetail",k.data)}).finally(()=>{u.value=!1}))});const f=j(()=>Object.entries(i.value||{}).filter(([N])=>!N.startsWith("$")).map(([N,b])=>({key:N,value:b}))),T=j(()=>e.detail===!0||e.detail==="true"),$={...s,...ke(),formData:i,formVariables:f,tabRefs:a,tabList:p,detail:T,tabsRef:g,emit:t};return Xe(xe,$),$}function q(){return Ye(xe)}const he=W({__name:"button-list",emits:["click"],setup(e,{emit:t}){const{userInfo:s,request:y}=H(),{flowDetail:i}=q(),{data:u}=Ae(y).useList();function o(n,r){return n.map(v=>{const m=r.find(p=>p.buttonKey===v.buttonKey);return{...v,...lt(m,["display","approval","validate"])}})}const d=j(()=>{var T,$,N,b;const n=typeof s=="function"?s():s,{assignee:r,status:v}=((T=i.value)==null?void 0:T.task)||{},{createUser:m,flowInstanceId:a,status:p}=(($=i.value)==null?void 0:$.flowInstance)||{},g={true:!0,false:!1,startUser:m==(n==null?void 0:n.userId),assignee:r==(n==null?void 0:n.userId),todo:v==ie.待办,done:v==ie.已办,notstarted:!a,started:!!a,finished:p===pe.已办结,unfinished:p===pe.未办结},{button:A}=((N=i.value)==null?void 0:N.properties)||{};return((b=o(u.value??[],A??[]))==null?void 0:b.filter(c=>{var k,l;return(l=(k=c.display)==null?void 0:k.split(","))==null?void 0:l.every(D=>g[D])}))??[]});return(n,r)=>{const v=U("el-button");return C(!0),E(X,null,ee(d.value,m=>(C(),O(v,{key:m.buttonKey,type:m.buttonType,onClick:a=>t("click",m)},{default:V(()=>[m.icon?(C(),O(_(Ce),{key:0,icon:m.icon},null,8,["icon"])):R("",!0),M(" "+G(m.name),1)]),_:2},1032,["type","onClick"]))),128)}}}),vt=W({__name:"common-comments",props:{modelValue:{}},setup(e){const t=e,{modelValue:s}=ue(t),{request:y}=H(),{batchUpdate:i,create:u,remove:o,useList:d}=Ot(y),n=B(!1),{activeBtn:r}=q(),v=j(()=>{var b;return(b=r.value)==null?void 0:b.buttonKey}),{data:m,refresh:a}=d(v),p=j(()=>{var c,k,l;const b=s.value;if(b&&!((c=m.value)!=null&&c.some(D=>D.content===b))){const D=(((l=(k=m.value)==null?void 0:k[0])==null?void 0:l.sort)||1)-1;return[{content:b,sort:D},...m.value||[]]}return m.value});async function g(b){var c;await u({...b,type:(c=r.value)==null?void 0:c.buttonKey}),ne.success("添加成功"),a()}async function A(b){await o(b.id),ne.success("删除成功"),a()}async function f(b,c){let k=c.parent.data;k=k.map((l,D)=>({id:l.id,sort:D+1})),await i(k),ne.success("修改排序成功"),a(),n.value=!1}function T(){n.value=!0}const $=B();async function N(b){var c;s.value=b.content??"",await de(),(c=$.value)==null||c.blur()}return(b,c)=>{const k=U("el-input"),l=U("el-text"),D=U("el-col"),I=U("el-button"),L=U("el-row"),w=U("el-tree"),h=U("el-popover");return C(),O(h,{visible:n.value,placement:"bottom",title:"常用意见",width:_(Q)()?"98%":"600px"},{reference:V(()=>[S(k,{ref_key:"inputRef",ref:$,modelValue:_(s),"onUpdate:modelValue":c[0]||(c[0]=P=>re(s)?s.value=P:null),type:"textarea",placeholder:"请输入意见",rows:"5",onFocus:c[1]||(c[1]=P=>n.value=!0),onBlur:c[2]||(c[2]=P=>n.value=!1)},null,8,["modelValue"])]),default:V(()=>[S(w,{data:p.value,"node-key":"content",draggable:"","allow-drop":(P,K,x)=>x!=="inner",props:{label:"content"},onNodeClick:N,onNodeDrop:f,onNodeDragStart:T},{default:V(({data:P})=>[S(L,{style:{width:"100%"}},{default:V(()=>[S(D,{span:22},{default:V(()=>[S(l,{truncated:"",title:P.content},{default:V(()=>[M(G(P.content),1)]),_:2},1032,["title"])]),_:2},1024),S(D,{span:2},{default:V(()=>[P.id?(C(),O(I,{key:0,type:"danger",size:"small",icon:"el-icon-close",text:"",onClick:ge(K=>A(P),["stop"])},null,8,["onClick"])):(C(),O(I,{key:1,type:"primary",size:"small",icon:"el-icon-plus",text:"",onClick:ge(K=>g(P),["stop"])},null,8,["onClick"]))]),_:2},1024)]),_:2},1024)]),_:1},8,["data","allow-drop"])]),_:1},8,["visible","width"])}}}),bt=W({__name:"approval-tree",props:{modelValue:{},data:{},autoCheck:{type:Boolean},mode:{}},setup(e){const t=e,{modelValue:s}=ue(t),y={element:"ep:flag",post:"ep:share",dept:"ep:share",user:"ep:user"},u={defaultExpandAll:!0,lazy:!0,showCheckbox:!0,nodeKey:"id",load:(a,p)=>{a.level===0?p(d.value):p(a.data.children??[])},onCheck:r,props:{label:"title",class(a){return`node-${a.type}`}}},o=B(),d=j(()=>Te(t.data??[],(a,p,g)=>{const A=Ue();return a.taskNodeKey=(g==null?void 0:g.taskNodeKey)??a.taskNodeKey,a.incoming=(g==null?void 0:g.incoming)??a.incoming,a.multiple=(g==null?void 0:g.multiple)??a.multiple,a.parentId=(g==null?void 0:g.id)??a.parentId,{...a,id:A}}));Me(()=>[d.value,o.value],async()=>{if(!(!o.value||!d.value.length)&&t.autoCheck){const a=n(d.value);a&&m([a])}},{immediate:!0,debounce:100});function n(a){var p;if(a.length===1)return(p=a[0].children)!=null&&p.length?n(a[0].children):a[0]}async function r(a,{checkedNodes:p}){var f;let g=p.filter(T=>T.type==="user");const A=g.some(T=>T.id===a.id);if(d.value.every(T=>!T.multiple)&&A)g=[a];else if(!a.multiple&&A){const N=((f=o.value)==null?void 0:f.getNode(a)).parent.data.children.filter(b=>b.id!==a.id);g=nt(g,N,"id")}m(g)}function v(a){const p=s.value.filter(g=>g.id!==a.id);m(p)}function m(a){var p;s.value=a,(p=o.value)==null||p.setCheckedNodes(a)}return(a,p)=>{const g=U("el-tag"),A=U("Icon"),f=U("el-tree");return C(),E(X,null,[(C(!0),E(X,null,ee(_(s),T=>(C(),O(g,{key:T.id,type:"info",closable:"",onClose:$=>v(T)},{default:V(()=>[M(G(T.title),1)]),_:2},1032,["onClose"]))),128)),S(f,Ve({ref_key:"treeRef",ref:o,class:["approval-tree",`mode-${a.mode}`],data:d.value},u),{default:V(({data:T})=>[F("div",null,[S(A,{icon:y[T.type]||y.element,style:{display:"inline-block"}},null,8,["icon"]),F("span",null,G(T.title),1)])]),_:1},16,["class","data"])],64)}}});const Ne=me(bt,[["__scopeId","data-v-9646bed9"]]),_t={key:0,class:"flow-viewer"},yt={key:0,class:"flow-status-legend"},wt={class:"legend-text"},gt=W({__name:"index",props:{modelValue:{},view:{type:Boolean},flowFormOption:{},flowHistory:{},showLegend:{type:Boolean}},emits:["update:modelValue","nodeClick"],setup(e,{emit:t}){const s=e,y=Fe();Ge(y,()=>{var l;(l=y.value)==null||l.on("node:click",D=>t("nodeClick",D))});const i=j({get(){let l=rt();return typeof s.modelValue=="string"&&s.modelValue?l=JSON.parse(s.modelValue):typeof s.modelValue=="object"&&Object.keys(s.modelValue)&&(l=s.modelValue),l},set(l){t("update:modelValue",JSON.stringify(l))}}),u=j(()=>{const{column:l=[],group:D=[]}=JSON.parse(s.flowFormOption||"{}");return[...l,...D.map(L=>L.column??[]).flat()]}),{FlowDesign:o,tabs:d,request:n}=H(),r=j(()=>(d==null?void 0:d.map(l=>({...l,display:l.display??!0})))??[]),v=j(()=>!s.view),{data:m}=Ae(n).useList({ready:v}),{useUserTree:a}=Kt(n),{data:p}=a({ready:v}),{data:g}=a({ready:v,defaultParams:["dept"]}),{data:A}=a({ready:v,defaultParams:["post"]}),{useParam:f}=be(n),{data:T}=f("flow.trends.user");function $(l){return Te(l,D=>({...D,label:D.title,value:D.id}))}const N=j(()=>({formPropertyList:[...u.value,...r.value],buttonList:m.value,fieldsDic:u.value.map(l=>({label:l.label,value:`\${${l.prop}}`,desc:`\${${l.prop}}`})),flowButtonDisplayDic:J(fe),flowButtonApprovalDic:J(ve),flowButtonValidateDic:oe.map(l=>({...l,label:""})),flowAssigneeUserDic:$(p.value??[]),flowAssigneeDeptDic:$(g.value??[]),flowAssigneePostDic:$(A.value??[]),flowAssigneeDynamicDic:T.value})),{data:b}=f("flow.task.status"),c=j(()=>{var l;return(l=s.flowHistory)==null?void 0:l.map(D=>{var L,w;const I=(w=(L=b.value)==null?void 0:L.find(h=>h.value===D.status))==null?void 0:w.style;return{id:D.taskNodeKey,style:I}})}),k=j(()=>{var l,D;return(D=(l=s.flowHistory)==null?void 0:l.filter(I=>I.taskNodeType==="userTask"))==null?void 0:D.map(I=>{var L;return{id:I.taskNodeKey,content:`<div>${I.assigneeName}</div>
        <div>${I.endTime??""}</div>
        <div>${((L=I.comment)==null?void 0:L.handleComment)??""}</div>`}})});return(l,D)=>l.view?(C(),E("div",_t,[l.showLegend!==!1?(C(),E("div",yt,[(C(!0),E(X,null,ee(_(b),I=>{var L;return C(),E("div",{key:I.label,class:"legend-item"},[F("div",{class:"legend-color",style:qe({backgroundColor:(L=I.style)==null?void 0:L.fill})},null,4),F("span",wt,G(I.label),1)])}),128))])):R("",!0),S(_(o),{lf:y.value,"onUpdate:lf":D[0]||(D[0]=I=>y.value=I),"model-value":i.value,styles:c.value,tooltips:k.value,type:"viewer"},null,8,["lf","model-value","styles","tooltips"])])):(C(),O(_(o),{key:1,modelValue:i.value,"onUpdate:modelValue":D[1]||(D[1]=I=>i.value=I),"form-options":_(We),"data-options":N.value,"form-width":"30%"},null,8,["modelValue","form-options","data-options"]))}});const $e=me(gt,[["__scopeId","data-v-7f223fe3"]]),kt=W({__name:"node-select",props:{modelValue:{}},setup(e){const t=e,{modelValue:s}=ue(t),{flowDetail:y}=q(),i=B(!1);function u({data:o}){o.type==="userTask"&&(i.value=!1,s.value=o.id)}return(o,d)=>{const n=U("el-button"),r=U("el-popover");return C(),O(r,{visible:i.value,"onUpdate:visible":d[0]||(d[0]=v=>i.value=v),placement:"bottom-start",width:"800px",trigger:"click"},{reference:V(()=>[S(n,null,{default:V(()=>[M(" 点击选择节点 ")]),_:1})]),default:V(()=>{var v,m;return[S($e,{"model-value":(m=(v=_(y))==null?void 0:v.process)==null?void 0:m.flowData,view:"",style:{height:"600px"},onNodeClick:u},null,8,["model-value"])]}),_:1},8,["visible"])}}}),ht=W({__name:"approval-form",emits:["submit"],setup(e,{emit:t}){const{request:s}=H(),{getApprovalNode:y}=_e(s),{useParam:i}=be(s),{formData:u,approvalFormData:o,activeBtn:d,approvalVisible:n,formVariables:r,flowDetail:v}=q(),m=B([]),a=B([]),p=B([]),g=B([]),A=B(!1),f=B(!1),T=B(),$=j(()=>{const L=m.value.length,w=p.value.length&&!m.value.length;return{menuBtn:!1,labelWidth:"auto",span:24,column:[{label:"指定节点",prop:"jumpTaskNodeKey",display:N("specifyNode"),rules:[{required:!0,message:"请选择指定节点"}]},{label:"审批人",prop:"assignee",display:N("assignee"),rules:L?[{required:!0,validator:b}]:[]},{label:"传阅人",prop:"circulate",display:N("circulate"),rules:w?[{required:!0,message:"请选择传阅人"}]:[]},{label:"意见",prop:"comment",display:N("comment"),rules:[{required:!0,message:"请填写意见"}]}]}});function N(L){var w,h;return(h=(w=d.value)==null?void 0:w.approval)==null?void 0:h.includes(L)}function b(L,w,h){var x,Z,le;const P=((x=m.value[0])==null?void 0:x.type)==="parallelGateway",K=(le=(Z=m.value[0])==null?void 0:Z.children)==null?void 0:le.every(z=>st([z],ce=>a.value.some(Be=>Be.id===ce.id)));if(a.value.length){if(P&&!K)return h("请在每个节点选择审批人")}else return h("请选择审批人");return!0}const{data:c}=i("flow.approval.autocheck"),{data:k}=i("flow.approval.autocomment");ae(async()=>{!n.value||!T.value||(de(()=>{T.value.resetForm(),o.value.comment=u.value.comment||k.value==="true"&&d.value.name||""}),l())}),ae(async()=>{var L,w;if(N("assignee")&&!(N("specifyNode")&&!o.value.jumpTaskNodeKey))try{f.value=!0;const{taskId:h}=((L=v.value)==null?void 0:L.task)||{},{flowKey:P}=((w=v.value)==null?void 0:w.process)||{},K=await y({flowKey:P,taskId:h,variables:r.value,buttonType:d.value.buttonKey,jumpTaskNodeKey:o.value.jumpTaskNodeKey});m.value=K.data.approvalNodeList,p.value=K.data.circulateNodeList}finally{f.value=!1}});function l(){m.value=[],a.value=[],p.value=[],g.value=[]}async function D(){await je(T),A.value=!0;const{data:L,outgoing:w}=I(a.value),{data:h}=I(g.value);o.value.assignee=L,o.value.circulate=h,o.value.outgoing=[...w],t("submit")}function I(L){const w={},h={},P=new Set;return L.forEach(K=>{const{taskNodeKey:x,incoming:Z}=K;w[x]||(w[x]=new Set),K.userId&&w[x].add(K.userId),h[x]=[...w[x]].join(","),Z&&P.add(Z)}),{dataSet:w,data:h,outgoing:P}}return(L,w)=>{const h=U("el-skeleton"),P=U("avue-form"),K=U("el-button");return C(),O(Le(_(Q)()?"el-drawer":"el-dialog"),{modelValue:_(n),"onUpdate:modelValue":w[6]||(w[6]=x=>re(n)?n.value=x:null),class:"approval-form-overlay",title:_(d).name,"append-to-body":"",width:"900px",size:"50%",direction:"btt"},{footer:V(()=>[S(K,{onClick:w[5]||(w[5]=x=>n.value=!1)},{default:V(()=>[M(" 取 消 ")]),_:1}),S(K,{type:"primary",onClick:D},{default:V(()=>[M(" 确 定 ")]),_:1})]),default:V(()=>[S(P,{ref_key:"formRef",ref:T,modelValue:_(o),"onUpdate:modelValue":w[4]||(w[4]=x=>re(o)?o.value=x:null),class:"approval-form",option:$.value},{jumpTaskNodeKey:V(()=>[S(kt,{modelValue:_(o).jumpTaskNodeKey,"onUpdate:modelValue":w[0]||(w[0]=x=>_(o).jumpTaskNodeKey=x)},null,8,["modelValue"])]),assignee:V(()=>[f.value?(C(),O(h,{key:0})):(C(),O(Ne,{key:"AssigneeTree",modelValue:a.value,"onUpdate:modelValue":w[1]||(w[1]=x=>a.value=x),data:m.value,"auto-check":_(c)==="true",mode:_(Q)()?"vertical":"horizontal"},null,8,["modelValue","data","auto-check","mode"]))]),circulate:V(()=>[f.value?(C(),O(h,{key:0})):(C(),O(Ne,{key:"CirculateTree",modelValue:g.value,"onUpdate:modelValue":w[2]||(w[2]=x=>g.value=x),data:p.value,mode:_(Q)()?"vertical":"horizontal"},null,8,["modelValue","data","mode"]))]),comment:V(()=>[S(vt,{modelValue:_(o).comment,"onUpdate:modelValue":w[3]||(w[3]=x=>_(o).comment=x)},null,8,["modelValue"])]),_:1},8,["modelValue","option"])]),_:1},8,["modelValue","title"])}}});const Nt={class:"flow-form__title"},Dt=W({__name:"index",props:dt,emits:mt,setup(e,{emit:t}){const y=ft(e,t),{ApprovalForm:i,tabsProps:u}=H(),o=i??ht,{title:d,detail:n,flowDetail:r,tabRefs:v,tabList:m,activeTab:a,activeBtn:p,formLoading:g,approvalVisible:A,submitLoading:f,beforeClick:T,beforeSubmit:$,afterSubmit:N,tabsRef:b,emitter:c}=y;async function k(I){var L,w;if(p.value=I,I.validate===1)for(const h of Object.values(v.value))await((L=h==null?void 0:h.validate)==null?void 0:L.call(h));await((w=T==null?void 0:T.value)==null?void 0:w.call(T,I)),await c.emitAsync("beforeClick",I),(I==null?void 0:I.approval)!=="false"?A.value=!0:D()}const l=ct(y);async function D(){var I,L;try{f.value=!0,await((I=$==null?void 0:$.value)==null?void 0:I.call($,p.value)),await c.emitAsync("beforeSubmit",p.value);const{buttonKey:w}=p.value,h=l[w];if(!h){ne.error("无法找到相应的操作");return}await(h==null?void 0:h()),await((L=N==null?void 0:N.value)==null?void 0:L.call(N,p.value)),await c.emitAsync("afterSubmit",p.value),A.value=!1,t("complete",p.value)}finally{f.value=!1}}return(I,L)=>{const w=U("el-skeleton"),h=U("el-main"),P=U("el-header"),K=U("el-tab-pane"),x=U("el-tabs"),Z=U("el-footer"),le=U("el-container");return _(g)?(C(),O(h,{key:0},{default:V(()=>[S(w)]),_:1})):(C(),O(le,{key:1,class:"flow-form"},{default:V(()=>[S(P,{class:"flow-form__header",height:"auto"},{default:V(()=>{var z;return[F("div",Nt,G(_(d)??((z=_(r).flowInstance)==null?void 0:z.title)),1),!_(n)&&!_(Q)()?(C(),O(he,{key:0,onClick:k})):R("",!0)]}),_:1}),S(h,{class:"flow-form__main"},{default:V(()=>[S(x,Ve({ref_key:"tabsRef",ref:b,modelValue:_(a),"onUpdate:modelValue":L[0]||(L[0]=z=>re(a)?a.value=z:null)},_(u)),{default:V(()=>[(C(!0),E(X,null,ee(_(m),z=>(C(),O(K,{key:z.prop,label:z.label,name:z.prop,lazy:z.lazy,disabled:z.disabled,closable:z.closable},{default:V(()=>[(C(),O(Le(z.component),{ref_for:!0,ref:ce=>_(v)[z.prop]=ce},null,512))]),_:2},1032,["label","name","lazy","disabled","closable"]))),128))]),_:1},16,["modelValue"])]),_:1}),!_(n)&&_(Q)()?(C(),O(Z,{key:0,class:"flow-form__footer",height:"auto"},{default:V(()=>[S(he,{onClick:k})]),_:1})):R("",!0),S(_(o),{onSubmit:D})]),_:1}))}}});const Ct=W({setup(){const{flowDetail:e,formData:t,detail:s}=q(),y=pt(e.value),{proxy:i}=tt(),u=B({});ae(()=>{const{formOption:n}=e.value.process??{};u.value=He.bind(i)(n||'{"menuBtn":false}'),u.value.detail=!!s.value});const o=B();function d(){return je(o)}return{form:t,option:u,defaults:y,formRef:o,validate:d}},render(){return et(U("avue-form"),{ref:"formRef",modelValue:this.form,defaults:this.defaults,option:this.option,class:this.option.class,"onUpdate:modelValue":e=>this.form=e,"onUpdate:defaults":e=>this.defaults=e})}}),It=W({__name:"upload-table",setup(e){const{flowDetail:t,fileIds:s,detail:y}=q(),{upload:{action:i,headers:u,preview:o,download:d,props:n}={},request:r}=H(),v=typeof u=="function"?u():u,m=j(()=>{var k,l;return((l=(k=t.value)==null?void 0:k.task)==null?void 0:l.flowInstanceId)??Ue()}),a=[{label:"文件名",prop:"fileName"},{label:"文件类型",prop:"fileType"},{label:"文件大小",prop:"fileSize"},{label:"版本",prop:"version"},{label:"上传时间",prop:"createTime"}],p=a.filter(k=>k.prop==="fileName"),g={rowKey:"id",align:"center",index:!1,border:!0,stripe:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuType:"menu",menuBtnTitle:"操作",column:Q()?p:a},{bindVal:A,getDataList:f,handleDel:T,handleSave:$,afterGetList:N,crudStateRefs:{tableData:b}}=Qe({crudOption:{...At(r),saveSuccessMsg:"上传成功"},tableOption:g,queryForm:{isLatest:1,flowInstanceId:m.value}});N(()=>{s.value=b.value.map(k=>k.id).join(",")}),f();async function c(k,l){var K,x;const{fileName:D,fileType:I,fileSize:L,fileUrl:w,res:h}=n,P={fileName:se({res:k},`${h}.${D}`),fileType:se({res:k},`${h}.${I}`),fileSize:se({res:k},`${h}.${L}`),fileUrl:se({res:k},`${h}.${w}`),taskId:(x=(K=t.value)==null?void 0:K.task)==null?void 0:x.taskId,flowInstanceId:m.value,rootMark:(l==null?void 0:l.rootMark)||"",version:typeof(l==null?void 0:l.version)=="number"?l.version+1:1};await $(P,f,()=>{})}return(k,l)=>{const D=U("el-button"),I=U("el-upload"),L=U("el-dropdown-item"),w=U("avue-crud");return C(),O(w,at(ot(_(A))),{"menu-left":V(()=>[_(y)?R("",!0):(C(),O(I,{key:0,action:_(i),headers:_(v),"show-file-list":!1,onSuccess:l[0]||(l[0]=h=>c(h))},{default:V(()=>[S(D,{type:"primary",icon:"el-icon-upload"},{default:V(()=>[M(" 点击上传 ")]),_:1})]),_:1},8,["action","headers"]))]),"menu-btn":V(({row:h,index:P})=>[S(L,{icon:"el-icon-view",onClick:K=>{var x;return(x=_(o))==null?void 0:x(h,_(b))}},{default:V(()=>[M(" 预览 ")]),_:2},1032,["onClick"]),S(L,{icon:"el-icon-download",onClick:K=>{var x;return(x=_(d))==null?void 0:x(h,_(b))}},{default:V(()=>[M(" 下载 ")]),_:2},1032,["onClick"]),_(y)?R("",!0):(C(),O(L,{key:0,icon:"el-icon-upload"},{default:V(()=>[S(I,{action:_(i),headers:_(v),"show-file-list":!1,onSuccess:K=>c(K,h)},{default:V(()=>[M(" 更新版本 ")]),_:2},1032,["action","headers","onSuccess"])]),_:2},1024)),_(y)?R("",!0):(C(),O(L,{key:1,icon:"el-icon-delete",onClick:K=>_(T)(h,P)},{default:V(()=>[M(" 删除 ")]),_:2},1032,["onClick"]))]),_:1},16)}}}),Vt={class:"flow-track"},Lt={key:0},Tt={key:1},Ut=W({__name:"flow-track",setup(e){const{flowDetail:t}=q(),s=B(Q()?"timeline":"table"),y=[{label:"table",icon:"ep:grid"},{label:"graph",icon:"ep:picture"},{label:"timeline",icon:"ep:finished"}],i=j(()=>{var r,v,m;return((m=(v=(r=t.value)==null?void 0:r.flowHistory)==null?void 0:v.filter(a=>a.taskNodeType==="userTask"))==null?void 0:m.map(a=>({...a,duration:ze(a.duration)})))??[]}),u={addBtn:!1,menu:!1,border:!0,column:[{label:"节点名称",prop:"taskNodeName"},{label:"处理人",prop:"assigneeName"},{label:"接收时间",prop:"startTime"},{label:"处理时间",prop:"endTime"},{label:"办理时长",prop:"duration"},{label:"操作类型",prop:"type",dicUrl:"/sapier-flow/flow-param/getParam",dicQuery:{paramKey:"flow.handle.type"}},{label:"办理意见",prop:"comment",bind:"comment.handleComment"}]},{request:o}=H(),{data:d}=be(o).useParam("flow.handle.type");function n(r){var v;return(v=d.value)==null?void 0:v.find(m=>m.value===r)}return(r,v)=>{var $,N,b;const m=U("el-radio-button"),a=U("el-radio-group"),p=U("avue-crud"),g=U("el-card"),A=U("el-timeline-item"),f=U("el-timeline"),T=U("el-empty");return C(),E(X,null,[_(Q)()?R("",!0):(C(),O(a,{key:0,modelValue:s.value,"onUpdate:modelValue":v[0]||(v[0]=c=>s.value=c)},{default:V(()=>[(C(),E(X,null,ee(y,c=>S(m,{key:c.label,label:c.label},{default:V(()=>[S(_(Ce),{icon:c.icon},null,8,["icon"])]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])),F("div",Vt,[s.value==="table"?(C(),O(p,{key:0,data:i.value,option:u},null,8,["data"])):R("",!0),s.value==="graph"?(C(),O($e,{key:1,"model-value":(N=($=_(t))==null?void 0:$.process)==null?void 0:N.flowData,"flow-history":(b=_(t))==null?void 0:b.flowHistory,view:"","show-legend":""},null,8,["model-value","flow-history"])):R("",!0),s.value==="timeline"?(C(),E(X,{key:2},[i.value.length?(C(),O(f,{key:0},{default:V(()=>[(C(!0),E(X,null,ee([...i.value].reverse(),c=>(C(),O(A,{key:c.id,timestamp:c.endTime,placement:"top"},{default:V(()=>[S(g,null,{default:V(()=>{var k,l,D;return[F("div",null,G(c.assigneeName)+" 开始处理 ["+G(c.taskNodeName)+"] 环节 ",1),c.duration?(C(),E("div",Lt," 办理时长："+G(c.duration),1)):R("",!0),c.type&&((k=c.comment)!=null&&k.handleComment)?(C(),E("div",Tt,G((l=n(c.type))==null?void 0:l.label)+"意见："+G((D=c.comment)==null?void 0:D.handleComment),1)):R("",!0)]}),_:2},1024)]),_:2},1032,["timestamp"]))),128))]),_:1})):(C(),O(T,{key:1}))],64)):R("",!0)])],64)}}});const xt=me(Ut,[["__scopeId","data-v-b788684b"]]),$t={FlowDesign:{},FormDesign:{},FlowForm:Dt,request:{},tabs:[{label:"审批表单",prop:"formTab",component:Ct},{label:"附件资料",prop:"fileTab",component:It},{label:"流程跟踪",prop:"trackTab",component:xt}],useFlowFormOptions:{type:"drawer",window:["","flow-form","left=0,top=0,width=1600,height=900"],overlay:{width:"80%",size:"80%",top:"100px",fullscreen:!0,destroyOnClose:!0}},tableOption:{align:"center",border:!0,card:!0,stripe:!0,searchMenuSpan:6,span:24},upload:{props:{fileName:"fileOriginalName",fileType:"fileType",fileSize:"fileSize",fileUrl:"fileUrl",res:"res.data"}}};function Ot(e){const t={list:"/sapier-flow/flow-user-common/list",save:"/sapier-flow/flow-user-common/save",update:"/sapier-flow/flow-user-common/update",remove:"/sapier-flow/flow-user-common/remove",batchUpdate:"/sapier-flow/flow-user-common/batchUpdate"},s=n=>e.get(t.list,{params:{type:n,ascs:"sort"}});return{url:t,getList:s,useList:n=>te(()=>s(n.value).then(r=>r.data.records),{refreshDeps:[n]}),create:n=>e.post(t.save,n),update:n=>e.post(t.update,n),remove:n=>e.post(t.remove,{},{params:{ids:n}}),batchUpdate:n=>e.post(t.batchUpdate,n)}}var Oe=(e=>(e.默认="default",e.主要="primary",e.成功="success",e.警告="warning",e.危险="danger",e.信息="info",e.文字="text",e))(Oe||{}),St=(e=>(e.保存草稿="flow_draft",e.发送="flow_pass",e.退回="flow_reject",e.终止="flow_terminate",e.撤销="flow_revoke",e.撤回到发起="flow_withdraw",e.打印="flow_print",e.转办="flow_transfer",e.加签="flow_add_instance",e.减签="flow_del_instance",e.指定回退="flow_rollback",e.绿色通道="flow_green",e))(St||{}),fe=(e=>(e.显示="true",e.隐藏="false",e.发起人="startUser",e.处理人="assignee",e.已办="done",e.待办="todo",e.未发起="notstarted",e.已发起="started",e.未办结="unfinished",e.已办结="finished",e))(fe||{}),ve=(e=>(e.不显示="false",e.指定节点="specifyNode",e.审批人="assignee",e.传阅人="circulate",e.意见="comment",e))(ve||{}),Se=(e=>(e[e.禁用=0]="禁用",e[e.正常=1]="正常",e))(Se||{});function Ae(e){const t={list:"/sapier-flow/dev-button/list",save:"/sapier-flow/dev-button/save",update:"/sapier-flow/dev-button/update",remove:"/sapier-flow/dev-button/remove"},s=d=>e.get(t.list,{params:d});return{url:t,getList:s,useList:d=>te(()=>s({size:-1,ascs:"sort",status:1}).then(n=>n.data.records),d),create:d=>e.post(t.save,d),update:d=>e.post(t.update,d),remove:d=>e.post(t.remove,{},{params:{ids:d}})}}function At(e){const t={list:"/sapier-flow/flow-file/list",save:"/sapier-flow/flow-file/save",remove:"/sapier-flow/flow-file/remove"};return{getList:u=>e.get(t.list,{params:u}),create:u=>e.post(t.save,u),remove:u=>e.post(t.remove,{},{params:{ids:u}})}}function be(e){const t={list:"/sapier-flow/flow-param/list",save:"/sapier-flow/flow-param/save",update:"/sapier-flow/flow-param/update",remove:"/sapier-flow/flow-param/remove",all:"/sapier-flow/flow-param/getAllParam",key:"/sapier-flow/flow-param/getParam"},s=r=>e.get(t.list,{params:r}),y=()=>e.get(t.all),i=r=>e.get(t.key,{params:{paramKey:r}});return{url:t,getList:s,getAllParam:y,getParam:i,useParam:r=>te(()=>i(r).then(v=>v.data)),create:r=>e.post(t.save,r),update:r=>e.post(t.update,r),remove:r=>e.post(t.remove,{},{params:{ids:r}})}}var ie=(e=>(e[e.已办=1]="已办",e[e.待办=2]="待办",e[e.失败=3]="失败",e[e.撤销=4]="撤销",e[e.终止=5]="终止",e))(ie||{}),pe=(e=>(e[e.已办结=1]="已办结",e[e.未办结=2]="未办结",e[e.已终止=3]="已终止",e))(pe||{}),Pt=(e=>(e[e.系统执行=1]="系统执行",e[e.用户办理=2]="用户办理",e[e.任务撤销=3]="任务撤销",e[e.任务退回=4]="任务退回",e[e.流程终止=5]="流程终止",e[e.任务转办=6]="任务转办",e[e.绿色通道=7]="绿色通道",e))(Pt||{});function _e(e){const t={publishList:"/sapier-flow/flow-run/queryPublishFlowList",taskList:"/sapier-flow/flow-run/userTaskList",detail:"/sapier-flow/flow-run/queryPublishFlowDetail",approvalNode:"/sapier-flow/flow-run/queryApprovalNode",start:"/sapier-flow/flow-run/startProcess",commit:"/sapier-flow/flow-run/commitTask",draft:"/sapier-flow/flow-run/saveDraft",revoke:"/sapier-flow/flow-run/revokeTask",terminate:"/sapier-flow/flow-run/terminateFlow",withdraw:"/sapier-flow/flow-run/withdrawToStart",transfer:"/sapier-flow/flow-run/transferTask",reject:"/sapier-flow/flow-run/rollbackTask",green:"/sapier-flow/flow-run/greenTask"},s=f=>e.get(t.detail,{params:f}),y=f=>e.post(t.approvalNode,f),i=f=>e.post(t.start,f),u=f=>e.post(t.commit,f),o=f=>e.post(t.draft,f),d=f=>e.post(t.revoke,f),n=f=>e.post(t.terminate,f),r=f=>e.post(t.withdraw,f),v=f=>e.post(t.transfer,f),m=f=>e.post(t.reject,f),a=f=>e.post(t.green,f),p=f=>e.get(t.publishList,{params:f});return{url:t,getFlowDetail:s,getApprovalNode:y,startTask:i,commitTask:u,saveDraft:o,revokeTask:d,terminateTask:n,withdrawTask:r,transferTask:v,rejectTask:m,greenChannel:a,getPublishList:p,usePublishList:()=>te(()=>p({ascs:"sort"}).then(f=>f.data)),getTaskList:f=>e.get(t.taskList,{params:f})}}function Kt(e){const t={tree:"/sapier-flow/flow-user/tree"},s=i=>e.get(t.tree,{params:{filter:i}});return{url:t,getUserTree:s,useUserTree:i=>te(u=>s(u).then(o=>o.data),i)}}var ye=(e=>(e.ASSIGN_ID="ASSIGN_ID",e.ASSIGN_UUID="ASSIGN_UUID",e.AUTO="AUTO",e.INPUT="INPUT",e.NONE="NONE",e))(ye||{}),we=(e=>(e.bigint="bigint",e.blob="blob",e.char="char",e.date="date",e.datetime="datetime",e.decimal="decimal",e.double="double",e.enum="enum",e.float="float",e.int="int",e.longblob="longblob",e.longtext="longtext",e.mediumblob="mediumblob",e.mediumint="mediumint",e.mediumtext="mediumtext",e.set="set",e.smallint="smallint",e.text="text",e.time="time",e.timestamp="timestamp",e.tinyblob="tinyblob",e.tinyint="tinyint",e.tinytext="tinytext",e.varbinary="varbinary",e.varchar="varchar",e.year="year",e))(we||{});function ra(e){const t={list:"/sapier-flow/dev-table/list",save:"/sapier-flow/dev-table/save",update:"/sapier-flow/dev-table/update",remove:"/sapier-flow/dev-table/remove",deploy:"/sapier-flow/dev-table/deploy",getFields:"/sapier-flow/dev-table/getTableFields"},s=r=>e.get(t.list,{params:r});return{url:t,getList:s,useList:()=>te(()=>s({size:-1}).then(r=>r.data.records)),create:r=>e.post(t.save,r),update:r=>e.post(t.update,r),remove:r=>e.post(t.remove,{},{params:{ids:r}}),deploy:r=>e.post(t.deploy,r),getFields:r=>e.get(t.getFields,{params:r})}}var Pe=(e=>(e[e.否=0]="否",e[e.是=1]="是",e))(Pe||{});const oe=J(Pe),ia=J(we),ua=J(ye),jt=Ie(it($t));function H(e){return ut(jt,e)}const ca=Y({rowKey:"id",labelWidth:150,column:[{label:"按钮名称",prop:"name",search:!0},{label:"按钮标识",prop:"buttonKey",search:!0},{label:"按钮图标",prop:"icon",component:"icon-select"},{label:"按钮类型",prop:"buttonType",type:"select",dicData:J(Oe)},{label:"默认显示条件",prop:"display",type:"select",multiple:!0,dataType:"string",value:"false",dicData:J(fe),tip:"选择多个时,所有条件都满足才显示",labelTip:`显示: 始终显示;<br/>隐藏: 始终隐藏;<br/>
      发起人: 用户为发起人时显示;<br/>处理人: 用户为处理人时显示;<br/>
      已办: 任务状态为已办时显示;<br/>待办: 任务状态为待办时显示;<br/>
      未发起: 流程未发起时显示;<br/>已发起: 流程已发起时显示;<br/>
      未办结: 流程未办结时显示;<br/>已办结: 流程已办结时显示;`},{label:"默认审批窗口显示",prop:"approval",type:"select",multiple:!0,dataType:"string",value:"false",dicData:J(ve),labelTip:`不显示: 不显示审批窗口;<br/>指定节点: 显示指定节点选择框(常用于绿色通道等);<br/>
      审批人: 显示审批人选择框;<br/>传阅人: 显示传阅人选择框;<br/>意见: 显示意见输入框;`},{label:"默认是否校验",prop:"validate",type:"switch",value:1,dicData:oe,labelTip:"是: 点击按钮时先执行每个tab的校验;<br/>否: 点击按钮不执行校验;"},{label:"备注",prop:"remarks",overHidden:!0},{label:"排序",prop:"sort",type:"number",value:0},{label:"状态",prop:"status",type:"switch",value:1,dicData:J(Se)},{label:"按钮预览",prop:"buttonPreview",width:150}]}),Ke={menuBtn:!1,span:24,column:[{label:"流程名称",prop:"flowName",rules:[{required:!0,message:"请输入流程名称"}]},{label:"流程标识",prop:"flowKey",editDisabled:!0,rules:[{required:!0,message:"请输入流程标识"}]},{label:"流程分类",prop:"categoryId",type:"select",dicUrl:"/sapier-flow/flow-category/list",dicQuery:{size:-1,ascs:"sort"},props:{label:"name",value:"id"}},{label:"流程图标",prop:"flowIcon",component:"icon-select"},{label:"流程描述",prop:"remarks"},{label:"自定义表单",prop:"formPath"},{label:"关联表",prop:"formDataTable",type:"select",filterable:!0,allowCreate:!0,defaultFirstOption:!0,dicUrl:"/sapier-flow/dev-table/list",dicQuery:{size:-1},props:{label:"tableComment",value:"tableName",desc:"tableName",res:"data.records"}},{label:"排序",prop:"sort",type:"number",width:110},{label:"表单设计",prop:"formOption",display:!1,hide:!0},{label:"模型设计",prop:"flowData",display:!1,hide:!0}]},pa=Y({rowKey:"flowModuleId",dialogFullscreen:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuWidth:100,menuType:"menu",menuBtnTitle:"操作",column:[...Ke.column.map((e,t)=>({...e,search:t<2})),{label:"流程主版本",prop:"mainVersion",formatter(e,t){return t?`V${t||""}`:""}}]}),da=Y({rowKey:"flowDeloyId",dialogFullscreen:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuWidth:100,menuType:"menu",menuBtnTitle:"操作",column:[...Ke.column,{prop:"sort",hide:!0},{label:"流程版本",prop:"version",formatter(e,t){return t?`V${t||""}`:""}},{label:"是否主版本",prop:"mainVersion",type:"select",dicData:[{label:"否",value:0},{label:"是",value:1}]}]}),ma=Y({rowKey:"id",menu:!1,addBtn:!1,column:[{label:"流程名称",prop:"flowName"},{label:"流程标识",prop:"flowKey"},{label:"流程分类",prop:"categoryId",type:"select",search:!0,dicUrl:"/sapier-flow/flow-category/list",props:{label:"name",value:"id"}},{label:"标题",prop:"processTitle",search:!0},{label:"流水号",prop:"serialNumber"},{label:"当前节点",prop:"taskNodeName"},{label:"审批人",prop:"assigneeName"},{label:"申请人",prop:"applyUserName"},{label:"接收时间",prop:"startTime"},{label:"任务状态",prop:"status",type:"select",search:!0,searchValue:ie.待办,dicUrl:"/sapier-flow/flow-param/getParam",dicQuery:{paramKey:"flow.task.status"}}]}),fa=Y({rowKey:"id",column:[{label:"配置名称",prop:"paramName",search:!0},{label:"配置Key",prop:"paramKey",search:!0},{label:"备注",prop:"remark"},{label:"系统内置",prop:"paramType",type:"switch",dicData:oe},{label:"配置值",prop:"paramValue",type:"textarea",maxRows:20,span:24,overHidden:!0}]}),va=Y({rowKey:"id",menu:!1,addBtn:!1,column:[{label:"流程名称",prop:"flowName"},{label:"流程标识",prop:"flowKey"},{label:"流程分类",prop:"categoryId",type:"select",search:!0,dicUrl:"/sapier-flow/flow-category/list",props:{label:"name",value:"id"}},{label:"标题",prop:"processTitle",search:!0},{label:"流水号",prop:"serialNumber"},{label:"当前节点",prop:"taskNodeName"},{label:"审批人",prop:"assigneeName"},{label:"申请人",prop:"applyUserName"},{label:"接收时间",prop:"startTime"}]});const ba=Y({rowKey:"id",column:[{label:"流程标识",prop:"flowKey",search:!0},{label:"流程名称",prop:"flowName",search:!0},{label:"流程备注",prop:"remarks"},{label:"排序",prop:"sort"}]}),_a=Y({rowKey:"id",column:[{label:"表单标识",prop:"formKey",search:!0},{label:"表单名称",prop:"formName",search:!0},{label:"表单备注",prop:"remarks"},{label:"排序",prop:"sort",type:"number"}]}),De=[{label:"字段名称",prop:"name"},{label:"字段备注",prop:"comment"},{label:"字段类型",prop:"type",type:"select",filterable:!0,allowCreate:!0,defaultFirstOption:!0,dicData:J(we)},{label:"字段长度",prop:"size",type:"number"},{label:"小数位",prop:"point",type:"number"},{label:"默认值",prop:"default"},{label:"是否主键",prop:"primary",type:"switch",dicData:oe,value:0},{label:"是否允许为空",prop:"permitNull",type:"switch",dicData:oe,value:1}],ya=Y({rowKey:"id",dialogFullscreen:!0,column:[{label:"表名",prop:"tableName",search:!0},{label:"表注释",prop:"tableComment",search:!0},{label:"表引擎",prop:"tableEngine"},{label:"表主键策略",prop:"tablePrimary",type:"select",filterable:!0,allowCreate:!0,defaultFirstOption:!0,dicData:J(ye)},{label:"数据库字段",prop:"editFields",hide:!0,type:"dynamic",children:{column:De}},{label:"默认字段",prop:"defaultFields",hide:!0,type:"dynamic",children:{addBtn:!1,delBtn:!1,column:De}}]});function je(e){return new Promise((t,s)=>{_(e).validate((i,u,o)=>{i?(u(),t(o)):s(o)})})}function Q(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}export{Kt as A,ye as B,$t as C,we as D,Y as E,$e as F,oe as G,Pt as H,ia as I,ua as J,ht as K,he as L,xt as M,Ct as N,It as O,ct as P,ke as Q,dt as R,mt as S,ie as T,xe as U,ft as V,Pe as W,Q as X,Dt as _,pt as a,je as b,H as c,Ae as d,pa as e,da as f,ra as g,Ke as h,ma as i,fa as j,be as k,va as l,_e as m,ba as n,_a as o,ya as p,Ot as q,Oe as r,St as s,ca as t,q as u,fe as v,ve as w,Se as x,At as y,pe as z};
