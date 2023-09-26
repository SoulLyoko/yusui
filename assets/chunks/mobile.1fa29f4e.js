import{ab as Ce,r as z,d as B,H as oe,N as b,n as de,J as Ee,W as Re,Z as Ge,u as Q,v as C,b as E,y as ae,x as X,M as L,C as A,O as I,B as R,L as G,X as W,E as S,j as re,a3 as ge,V as Ie,F as ee,_ as fe,I as Ve,a5 as We,l as He,a9 as Je,aa as Qe,k as Fe,K as Xe}from"./framework.93e84c5c.js";import{d as Ze}from"./index.e825d1f5.js";import{I as Te}from"./iconify.957d2cb5.js";import{a as ue,f as Ye,g as qe,w as et,h as tt}from"./index.4f9c758a.js";import{m as at,u as ot}from"./index.81ffb9e1.js";import{M as lt}from"./tree.d280af5e.js";import"./preview.vue_vue_type_script_lang.7add6e2f.js";import"./index.es.ab5e9e65.js";import{e as H}from"./index.0246ace1.js";import{u as Z}from"./index.048463ab.js";import{b as st}from"./index.7fe021bc.js";import"./form.8f9501b6.js";import"./index.cb766c6c.js";import"./index.e4afc026.js";import{p as nt}from"./pick.c38fd284.js";import{t as Le,a as rt}from"./index.da343e5c.js";import{E as ne}from"./index.e327f3f4.js";import{u as Oe}from"./index.386fc70b.js";import{d as it}from"./zipWith.8642dcad.js";import{d as ut}from"./data.4473a20e.js";import{g as se}from"./get.51c768ca.js";import{c as ct}from"./cloneDeep.6b1411dd.js";import{m as pt}from"./merge.0f542de0.js";function Y(e){const{tableOption:t}=F();return Ce({...t,...e})}function dt(e){const{buttonHandler:t,request:a}=F(),{commitTask:n,revokeTask:_,saveDraft:d,startTask:s,terminateTask:m,transferTask:r,withdrawTask:p,rejectTask:v,greenChannel:w}=_e(a),o=z(()=>{const{flowDetail:g,formVariables:x,approvalFormData:U,debug:i,fileIds:$}=e,{flowDeployId:N}=g.value.process??{},{taskId:y,flowInstanceId:u}=g.value.task??{};return{flowDeployId:N,taskId:y,flowInstanceId:u,variables:x.value,debug:i.value,fileIds:$==null?void 0:$.value,...U.value}}),f=()=>o.value.taskId&&o.value.flowInstanceId;return{flow_draft(){if(f())return d(o.value)},flow_pass(){return f()?n(o.value):s(o.value)},flow_revoke(){if(f())return _(o.value)},flow_withdraw(){if(f())return p(o.value)},flow_terminate(){if(f())return m(o.value)},flow_transfer(){if(f())return r(o.value)},flow_reject(){if(f())return v(o.value)},flow_green(){if(f())return w(o.value)},...t==null?void 0:t(e)}}function ke(){const e=at();return{emitter:e,onAfterGetDetail:d=>{e.on("afterGetDetail",async(...s)=>await(d==null?void 0:d(...s)))},onBeforeClick:d=>{e.on("beforeClick",async(...s)=>await(d==null?void 0:d(...s)))},onBeforeSubmit:d=>{e.on("beforeSubmit",async(...s)=>await(d==null?void 0:d(...s)))},onAfterSubmit:d=>{e.on("afterSubmit",async(...s)=>await(d==null?void 0:d(...s)))}}}function $e(e,t){e.forEach(a=>{var _,d,s,m,r,p;const n=t==null?void 0:t.find(v=>v.prop===a.prop);n&&(a.display=n.display,a.disabled=n.disabled,a.detail=n.detail,a.readonly=n.readonly,a.rules=n.validate?a.rules??[]:[],n.required&&!((_=a.rules)!=null&&_.some(v=>v.required))?(d=a.rules)==null||d.push({required:!0,message:`${a.label}为必填项`}):n.required||(a.rules=a.rules.filter(v=>!v.required)),(m=(s=a.children)==null?void 0:s.column)!=null&&m.length&&((r=n.children)!=null&&r.length)&&$e((p=a.children)==null?void 0:p.column,n.children))})}function ft(e){const t=B({});return oe(async()=>{var n;const{formProperty:a}=((n=b(e))==null?void 0:n.properties)||{};a!=null&&a.length&&(await de(),$e(Object.values(t.value),a))}),t}const mt={modelValue:{type:Object,default:()=>({})},title:{type:String},flowDetail:{type:Object,default:()=>({})},formLoading:{type:Boolean},submitLoading:{type:Boolean},activeTab:{type:String,default:"formTab"},activeBtn:{type:Object,default:()=>({})},approvalVisible:{type:Boolean},approvalFormData:{type:Object,default:()=>({})},flowKey:{type:String},taskId:{type:String},instanceId:{type:String},formId:{type:String},fileIds:{type:String},permission:{type:Object},afterGetDetail:{type:Function},beforeClick:{type:Function},beforeSubmit:{type:Function},afterSubmit:{type:Function},detail:{type:[Boolean,String],default:!1},debug:{type:[Boolean,String],default:!1}},vt={complete:e=>e},Ue=Symbol("flowFormState");function bt(e,t){const a=ue(e,void 0,{passive:!0,deep:!0}),{flowDetail:n,modelValue:_,formLoading:d,activeTab:s,afterGetDetail:m}=a,{emitter:r}=ke(),{tabs:p,customForm:v,request:w}=F(),o=B({}),f=z(()=>(p==null?void 0:p.filter(N=>{var k,l,h;const y=(h=(l=(k=n.value)==null?void 0:k.properties)==null?void 0:l.formProperty)==null?void 0:h.find(D=>D.prop===N.prop),u={...N,display:(y==null?void 0:y.display)??N.display};return(u==null?void 0:u.display)!==!1}).map(N=>{var u,k;let y=N.component;if(N.prop==="formTab"){const l=v==null?void 0:v[((k=(u=n==null?void 0:n.value)==null?void 0:u.process)==null?void 0:k.formPath)??""];typeof l=="function"?y=Re(l):l&&(y=l)}return{...N,component:y}}))??[]),g=B();J()&&Ye(g,{onSwipeEnd(N,y){if(!["left","right"].includes(y))return;const u=f.value.findIndex(l=>l.prop===s.value),k=qe(u+(y==="right"?-1:1),0,f.value.length-1);s.value=f.value[k].prop}});const{getFlowDetail:x}=_e(w);oe(()=>{const{flowKey:N,taskId:y,instanceId:u}=e;!N&&!y&&!u||(d.value=!0,x({flowKey:N,taskId:y,flowInstanceId:u}).then(async k=>{var l;n.value=k.data,_.value=k.data.formData||{},await((l=m==null?void 0:m.value)==null?void 0:l.call(m,k.data)),await r.emitAsync("afterGetDetail",k.data)}).finally(()=>{d.value=!1}))});const U=z(()=>Object.entries(_.value||{}).filter(([N])=>!N.startsWith("$")).map(([N,y])=>({key:N,value:y}))),i=z(()=>e.detail===!0||e.detail==="true"),$={...a,...ke(),formData:_,formVariables:U,tabRefs:o,tabList:f,detail:i,tabsRef:g,emit:t};return Ge(Ue,$),$}function te(){return Ee(Ue)}const he=Q({__name:"ButtonList",emits:["click"],setup(e,{emit:t}){const{userInfo:a,request:n}=F(),{flowDetail:_}=te(),{data:d}=Se(n).useList();function s(r,p){return r.map(v=>{const w=p.find(f=>f.buttonKey===v.buttonKey);return{...v,...nt(w,["display","approval","validate"])}})}const m=z(()=>{var $,N,y,u;const r=typeof a=="function"?a():a,{assignee:p,status:v}=(($=_.value)==null?void 0:$.task)||{},{createUser:w,flowInstanceId:o,status:f}=((N=_.value)==null?void 0:N.flowInstance)||{},g={false:!1,startUser:w==(r==null?void 0:r.userId),assignee:p==(r==null?void 0:r.userId),todo:v==ie.待办,done:v==ie.已办,unfinished:f===pe.未办结,finished:f===pe.已办结,started:!!o},x={true:!0,notstarted:!o},{button:U}=((y=_.value)==null?void 0:y.properties)||{};return((u=s(d.value??[],U??[]))==null?void 0:u.filter(k=>{var O;const l=(O=k.display)==null?void 0:O.split(","),h=l==null?void 0:l.filter(V=>V in g).every(V=>g[V]),D=l==null?void 0:l.filter(V=>V in x).some(V=>x[V]);return h||D}))??[]});return(r,p)=>{const v=L("el-button");return C(!0),E(X,null,ae(m.value,w=>(C(),A(v,{key:w.buttonKey,type:w.buttonType,onClick:o=>t("click",w)},{default:I(()=>[w.icon?(C(),A(b(Te),{key:0,icon:w.icon},null,8,["icon"])):R("",!0),G(" "+W(w.name),1)]),_:2},1032,["type","onClick"]))),128)}}}),_t=Q({__name:"CommonComments",props:{modelValue:{}},setup(e){const t=e,{modelValue:a}=ue(t),{request:n}=F(),{batchUpdate:_,create:d,remove:s,useList:m}=$t(n),r=B(!1),{activeBtn:p}=te(),v=z(()=>{var y;return(y=p.value)==null?void 0:y.buttonKey}),{data:w,refresh:o}=m(v),f=z(()=>{var u,k,l;const y=a.value;if(y&&!((u=w.value)!=null&&u.some(h=>h.content===y))){const h=(((l=(k=w.value)==null?void 0:k[0])==null?void 0:l.sort)||1)-1;return[{content:y,sort:h},...w.value||[]]}return w.value});async function g(y){var u;await d({...y,type:(u=p.value)==null?void 0:u.buttonKey}),ne.success("添加成功"),o()}async function x(y){await s(y.id),ne.success("删除成功"),o()}async function U(y,u){let k=u.parent.data;k=k.map((l,h)=>({id:l.id,sort:h+1})),await _(k),ne.success("修改排序成功"),o(),r.value=!1}function i(){r.value=!0}const $=B();async function N(y){var u;a.value=y.content??"",await de(),(u=$.value)==null||u.blur()}return(y,u)=>{const k=L("el-input"),l=L("el-text"),h=L("el-col"),D=L("el-button"),O=L("el-row"),V=L("el-tree"),c=L("el-popover");return C(),A(c,{visible:r.value,placement:"bottom",title:"常用意见",width:b(J)()?"98%":"600px"},{reference:I(()=>[S(k,{ref_key:"inputRef",ref:$,modelValue:b(a),"onUpdate:modelValue":u[0]||(u[0]=T=>re(a)?a.value=T:null),type:"textarea",placeholder:"请输入意见",rows:"5",onFocus:u[1]||(u[1]=T=>r.value=!0),onBlur:u[2]||(u[2]=T=>r.value=!1)},null,8,["modelValue"])]),default:I(()=>[S(V,{data:f.value,"node-key":"content",draggable:"","allow-drop":(T,j,P)=>P!=="inner",props:{label:"content"},onNodeClick:N,onNodeDrop:U,onNodeDragStart:i},{default:I(({data:T})=>[S(O,{style:{width:"100%"}},{default:I(()=>[S(h,{span:22},{default:I(()=>[S(l,{truncated:"",title:T.content},{default:I(()=>[G(W(T.content),1)]),_:2},1032,["title"])]),_:2},1024),S(h,{span:2},{default:I(()=>[T.id?(C(),A(D,{key:0,type:"danger",size:"small",icon:"el-icon-close",text:"",onClick:ge(j=>x(T),["stop"])},null,8,["onClick"])):(C(),A(D,{key:1,type:"primary",size:"small",icon:"el-icon-plus",text:"",onClick:ge(j=>g(T),["stop"])},null,8,["onClick"]))]),_:2},1024)]),_:2},1024)]),_:1},8,["data","allow-drop"])]),_:1},8,["visible","width"])}}}),yt=Q({__name:"ApprovalTree",props:{modelValue:{},data:{},autoCheck:{type:Boolean},mode:{}},setup(e){const t=e,{modelValue:a}=ue(t),n={element:"ep:flag",post:"ep:share",dept:"ep:share",user:"ep:user"},d={defaultExpandAll:!0,lazy:!0,showCheckbox:!0,nodeKey:"id",load:(o,f)=>{o.level===0?f(m.value):f(o.data.children??[])},onCheck:p,props:{label:"title",class(o){return`node-${o.type}`}}},s=B(),m=z(()=>Le(t.data??[],(o,f,g)=>{const x=Oe();return o.taskNodeKey=(g==null?void 0:g.taskNodeKey)??o.taskNodeKey,o.incoming=(g==null?void 0:g.incoming)??o.incoming,o.multiple=(g==null?void 0:g.multiple)??o.multiple,o.parentId=(g==null?void 0:g.id)??o.parentId,{...o,id:x}}));et(()=>[m.value,s.value],async()=>{if(!(!s.value||!m.value.length)&&t.autoCheck){const o=r(m.value);o&&w([o])}},{immediate:!0,debounce:100});function r(o){var f;if(o.length===1)return(f=o[0].children)!=null&&f.length?r(o[0].children):o[0]}async function p(o,{checkedNodes:f}){var U;let g=f.filter(i=>i.type==="user");const x=g.some(i=>i.id===o.id);if(m.value.every(i=>!i.multiple)&&x)g=[o];else if(!o.multiple&&x){const N=((U=s.value)==null?void 0:U.getNode(o)).parent.data.children.filter(y=>y.id!==o.id);g=it(g,N,"id")}w(g)}function v(o){const f=a.value.filter(g=>g.id!==o.id);w(f)}function w(o){var f;a.value=o,(f=s.value)==null||f.setCheckedNodes(o)}return(o,f)=>{const g=L("el-tag"),x=L("Icon"),U=L("el-tree");return C(),E(X,null,[(C(!0),E(X,null,ae(b(a),i=>(C(),A(g,{key:i.id,type:"info",closable:"",onClose:$=>v(i)},{default:I(()=>[G(W(i.title),1)]),_:2},1032,["onClose"]))),128)),S(U,Ie({ref_key:"treeRef",ref:s,class:["approval-tree",`mode-${o.mode}`],data:m.value},d),{default:I(({data:i})=>[ee("div",null,[S(x,{icon:n[i.type]||n.element,style:{display:"inline-block"}},null,8,["icon"]),ee("span",null,W(i.title),1)])]),_:1},16,["class","data"])],64)}}});const Ne=fe(yt,[["__scopeId","data-v-80eb74c6"]]),wt=Q({__name:"NodeSelect",props:{modelValue:{}},setup(e){const t=e,{modelValue:a}=ue(t),{flowDetail:n}=te(),_=B(!1);function d({data:s}){s.type==="userTask"&&(_.value=!1,a.value=s.id)}return(s,m)=>{const r=L("el-button"),p=L("el-popover");return C(),A(p,{visible:_.value,"onUpdate:visible":m[0]||(m[0]=v=>_.value=v),placement:"bottom-start",width:"800px",trigger:"click"},{reference:I(()=>[S(r,null,{default:I(()=>[G(" 点击选择节点 ")]),_:1})]),default:I(()=>{var v,w;return[S(b(je),{"model-value":(w=(v=b(n))==null?void 0:v.process)==null?void 0:w.flowData,view:"",style:{height:"600px"},onNodeClick:d},null,8,["model-value"])]}),_:1},8,["visible"])}}}),gt=Q({__name:"ApprovalForm",emits:["submit"],setup(e,{emit:t}){const{request:a}=F(),{getApprovalNode:n}=_e(a),{useParam:_}=be(a),{formData:d,approvalFormData:s,activeBtn:m,approvalVisible:r,formVariables:p,flowDetail:v}=te(),w=B([]),o=B([]),f=B([]),g=B([]),x=B(!1),U=B(!1),i=B(),$=z(()=>{const V=w.value.length,c=f.value.length&&!w.value.length;return{menuBtn:!1,labelWidth:"auto",span:24,column:[{label:"指定节点",prop:"jumpTaskNodeKey",display:N("specifyNode"),rules:[{required:!0,message:"请选择指定节点"}]},{label:"审批人",prop:"assignee",display:N("assignee"),rules:V?[{required:!0,validator:y}]:[]},{label:"传阅人",prop:"circulate",display:N("circulate"),rules:c?[{required:!0,validator:u}]:[]},{label:"意见",prop:"comment",display:N("comment"),rules:[{required:!0,message:"请填写意见"}]}]}});function N(V){var c,T;return(T=(c=m.value)==null?void 0:c.approval)==null?void 0:T.includes(V)}function y(V,c,T){var K,q,M;const j=((K=w.value[0])==null?void 0:K.type)==="parallelGateway",P=(M=(q=w.value[0])==null?void 0:q.children)==null?void 0:M.every(ce=>rt([ce],Be=>o.value.some(Me=>Me.id===Be.id)));if(o.value.length){if(j&&!P)return T("请在每个节点选择审批人")}else return T("请选择审批人");return!0}function u(V,c,T){return g.value.length?!0:T("请选择传阅人")}const{data:k}=_("flow.approval.autocheck"),{data:l}=_("flow.approval.autocomment");oe(async()=>{!r.value||!i.value||(de(()=>{i.value.resetForm(),s.value.comment=d.value.comment||l.value==="true"&&m.value.name||""}),h())}),oe(async()=>{var V,c;if(N("assignee")&&!(N("specifyNode")&&!s.value.jumpTaskNodeKey)){h();try{U.value=!0;const{taskId:T}=((V=v.value)==null?void 0:V.task)||{},{flowKey:j}=((c=v.value)==null?void 0:c.process)||{},P=await n({flowKey:j,taskId:T,variables:p.value,buttonType:m.value.buttonKey,jumpTaskNodeKey:s.value.jumpTaskNodeKey});w.value=P.data.approvalNodeList,f.value=P.data.circulateNodeList}finally{U.value=!1}}});function h(){w.value=[],o.value=[],f.value=[],g.value=[]}async function D(){await ze(i),x.value=!0;const{data:V,outgoing:c}=O(o.value),{data:T}=O(g.value);s.value.assignee=V,s.value.circulate=T,s.value.outgoing=[...c],t("submit")}function O(V){const c={},T={},j=new Set;return V.forEach(P=>{const{taskNodeKey:K,incoming:q}=P;c[K]||(c[K]=new Set),P.userId&&c[K].add(P.userId),T[K]=[...c[K]].join(","),q&&j.add(q)}),{dataSet:c,data:T,outgoing:j}}return(V,c)=>{const T=L("el-skeleton"),j=L("avue-form"),P=L("el-button");return C(),A(Ve(b(J)()?"el-drawer":"el-dialog"),{modelValue:b(r),"onUpdate:modelValue":c[6]||(c[6]=K=>re(r)?r.value=K:null),class:"approval-form-overlay",title:b(m).name,"append-to-body":"",width:"900px",size:"50%",direction:"btt","destroy-on-close":""},{footer:I(()=>[S(P,{onClick:c[5]||(c[5]=K=>r.value=!1)},{default:I(()=>[G(" 取 消 ")]),_:1}),S(P,{type:"primary",onClick:D},{default:I(()=>[G(" 确 定 ")]),_:1})]),default:I(()=>[S(j,{ref_key:"formRef",ref:i,modelValue:b(s),"onUpdate:modelValue":c[4]||(c[4]=K=>re(s)?s.value=K:null),class:"approval-form",option:$.value},{jumpTaskNodeKey:I(()=>[S(wt,{modelValue:b(s).jumpTaskNodeKey,"onUpdate:modelValue":c[0]||(c[0]=K=>b(s).jumpTaskNodeKey=K)},null,8,["modelValue"])]),assignee:I(()=>[U.value?(C(),A(T,{key:0})):(C(),A(Ne,{key:"AssigneeTree",modelValue:o.value,"onUpdate:modelValue":c[1]||(c[1]=K=>o.value=K),data:w.value,"auto-check":b(k)==="true",mode:b(J)()?"vertical":"horizontal"},null,8,["modelValue","data","auto-check","mode"]))]),circulate:I(()=>[U.value?(C(),A(T,{key:0})):(C(),A(Ne,{key:"CirculateTree",modelValue:g.value,"onUpdate:modelValue":c[2]||(c[2]=K=>g.value=K),data:f.value,mode:b(J)()?"vertical":"horizontal"},null,8,["modelValue","data","mode"]))]),comment:I(()=>[S(_t,{modelValue:b(s).comment,"onUpdate:modelValue":c[3]||(c[3]=K=>b(s).comment=K)},null,8,["modelValue"])]),_:1},8,["modelValue","option"])]),_:1},8,["modelValue","title"])}}});const kt={class:"flow-form__title"},ht=Q({__name:"index",props:mt,emits:vt,setup(e,{emit:t}){const n=bt(e,t),{ApprovalForm:_,tabsProps:d}=F(),s=_??gt,{title:m,detail:r,flowDetail:p,tabRefs:v,tabList:w,activeTab:o,activeBtn:f,formLoading:g,approvalVisible:x,submitLoading:U,beforeClick:i,beforeSubmit:$,afterSubmit:N,tabsRef:y,emitter:u}=n;async function k(D){var O,V;if(f.value=D,D.validate===1)for(const c of Object.values(v.value))await((O=c==null?void 0:c.validate)==null?void 0:O.call(c));await((V=i==null?void 0:i.value)==null?void 0:V.call(i,D)),await u.emitAsync("beforeClick",D),(D==null?void 0:D.approval)!=="false"?x.value=!0:h()}const l=dt(n);async function h(){var D,O;try{U.value=!0,await((D=$==null?void 0:$.value)==null?void 0:D.call($,f.value)),await u.emitAsync("beforeSubmit",f.value);const{buttonKey:V}=f.value,c=l[V];if(!c){ne.error("无法找到相应的操作");return}const T=await(c==null?void 0:c());await((O=N==null?void 0:N.value)==null?void 0:O.call(N,T)),await u.emitAsync("afterSubmit",T),x.value=!1,t("complete",f.value)}finally{U.value=!1}}return(D,O)=>{const V=L("el-skeleton"),c=L("el-main"),T=L("el-header"),j=L("el-tab-pane"),P=L("el-tabs"),K=L("el-footer"),q=L("el-container");return b(g)?(C(),A(c,{key:0},{default:I(()=>[S(V)]),_:1})):(C(),A(q,{key:1,class:"flow-form"},{default:I(()=>[S(T,{class:"flow-form__header",height:"auto"},{default:I(()=>{var M;return[ee("div",kt,W(b(m)??((M=b(p).flowInstance)==null?void 0:M.title)),1),!b(r)&&!b(J)()?(C(),A(he,{key:0,onClick:k})):R("",!0)]}),_:1}),S(c,{class:"flow-form__main"},{default:I(()=>[S(P,Ie({ref_key:"tabsRef",ref:y,modelValue:b(o),"onUpdate:modelValue":O[0]||(O[0]=M=>re(o)?o.value=M:null)},b(d)),{default:I(()=>[(C(!0),E(X,null,ae(b(w),M=>(C(),A(j,{key:M.prop,label:M.label,name:M.prop,lazy:M.lazy,disabled:M.disabled,closable:M.closable},{default:I(()=>[(C(),A(Ve(M.component),{ref_for:!0,ref:ce=>b(v)[M.prop]=ce},null,512))]),_:2},1032,["label","name","lazy","disabled","closable"]))),128))]),_:1},16,["modelValue"])]),_:1}),!b(r)&&b(J)()?(C(),A(K,{key:0,class:"flow-form__footer",height:"auto"},{default:I(()=>[S(he,{onClick:k})]),_:1})):R("",!0),S(b(s),{onSubmit:h})]),_:1}))}}});const Nt=Q({setup(){const{flowDetail:e,formData:t,detail:a}=te(),n=ft(e.value),{proxy:_}=He(),d=B({});oe(()=>{const{formOption:r}=e.value.process??{};d.value=lt.bind(_)(r||'{"menuBtn":false}'),d.value.detail=a.value});const s=B();function m(){return ze(s)}return{form:t,option:d,defaults:n,formRef:s,validate:m}},render(){return We(L("avue-form"),{ref:"formRef",modelValue:this.form,defaults:this.defaults,option:this.option,class:this.option.class,"onUpdate:modelValue":e=>this.form=e,"onUpdate:defaults":e=>this.defaults=e})}}),Dt=Q({__name:"UploadTable",setup(e){const{flowDetail:t,fileIds:a,detail:n}=te(),{upload:{action:_,headers:d,preview:s,download:m,props:r}={},request:p}=F(),v=typeof d=="function"?d():d,w=z(()=>{var k,l;return((l=(k=t.value)==null?void 0:k.task)==null?void 0:l.flowInstanceId)??Oe()}),o=[{label:"文件名",prop:"fileName"},{label:"文件类型",prop:"fileType"},{label:"文件大小",prop:"fileSize"},{label:"版本",prop:"version"},{label:"上传时间",prop:"createTime"}],f=o.filter(k=>k.prop==="fileName"),g={rowKey:"id",align:"center",index:!1,border:!0,stripe:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuType:"menu",menuBtnTitle:"操作",column:J()?f:o},{bindVal:x,getDataList:U,handleDel:i,handleSave:$,afterGetList:N,crudStateRefs:{tableData:y}}=ot({crudOption:{...xt(p),saveSuccessMsg:"上传成功"},tableOption:g,queryForm:{isLatest:1,flowInstanceId:w.value}});N(()=>{a.value=y.value.map(k=>k.id).join(",")}),U();async function u(k,l){var j,P;const{fileName:h,fileType:D,fileSize:O,fileUrl:V,res:c}=r,T={fileName:se({res:k},`${c}.${h}`),fileType:se({res:k},`${c}.${D}`),fileSize:se({res:k},`${c}.${O}`),fileUrl:se({res:k},`${c}.${V}`),taskId:(P=(j=t.value)==null?void 0:j.task)==null?void 0:P.taskId,flowInstanceId:w.value,rootMark:(l==null?void 0:l.rootMark)||"",version:typeof(l==null?void 0:l.version)=="number"?l.version+1:1};await $(T,U,()=>{})}return(k,l)=>{const h=L("el-button"),D=L("el-upload"),O=L("el-dropdown-item"),V=L("avue-crud");return C(),A(V,Je(Qe(b(x))),{"menu-left":I(()=>[b(n)?R("",!0):(C(),A(D,{key:0,action:b(_),headers:b(v),"show-file-list":!1,onSuccess:l[0]||(l[0]=c=>u(c))},{default:I(()=>[S(h,{type:"primary",icon:"el-icon-upload"},{default:I(()=>[G(" 点击上传 ")]),_:1})]),_:1},8,["action","headers"]))]),"menu-btn":I(({row:c,index:T})=>[S(O,{icon:"el-icon-view",onClick:j=>{var P;return(P=b(s))==null?void 0:P(c,b(y))}},{default:I(()=>[G(" 预览 ")]),_:2},1032,["onClick"]),S(O,{icon:"el-icon-download",onClick:j=>{var P;return(P=b(m))==null?void 0:P(c,b(y))}},{default:I(()=>[G(" 下载 ")]),_:2},1032,["onClick"]),b(n)?R("",!0):(C(),A(O,{key:0,icon:"el-icon-upload"},{default:I(()=>[S(D,{action:b(_),headers:b(v),"show-file-list":!1,onSuccess:j=>u(j,c)},{default:I(()=>[G(" 更新版本 ")]),_:2},1032,["action","headers","onSuccess"])]),_:2},1024)),b(n)?R("",!0):(C(),A(O,{key:1,icon:"el-icon-delete",onClick:j=>b(i)(c,T)},{default:I(()=>[G(" 删除 ")]),_:2},1032,["onClick"]))]),_:1},16)}}}),Ct={class:"flow-track"},It={key:0},Vt={key:1},Tt=Q({__name:"FlowTrack",setup(e){const{flowDetail:t}=te(),a=B(J()?"timeline":"table"),n=[{label:"table",icon:"ep:grid"},{label:"graph",icon:"ep:picture"},{label:"timeline",icon:"ep:finished"}],_=z(()=>{var p,v,w;return((w=(v=(p=t.value)==null?void 0:p.flowHistory)==null?void 0:v.filter(o=>/Task/.test(o.taskNodeType??"")))==null?void 0:w.map(o=>({...o,duration:Ze(o.duration)})))??[]}),d={addBtn:!1,menu:!1,border:!0,column:[{label:"节点名称",prop:"taskNodeName"},{label:"处理人",prop:"assigneeName"},{label:"接收时间",prop:"startTime"},{label:"处理时间",prop:"endTime"},{label:"办理时长",prop:"duration"},{label:"操作类型",prop:"type",dicUrl:"/sapier-flow/flow-param/getParam",dicQuery:{paramKey:"flow.handle.type"}},{label:"办理意见",prop:"comment",bind:"comment.handleComment"}]},{request:s}=F(),{data:m}=be(s).useParam("flow.handle.type");function r(p){var v;return(v=m.value)==null?void 0:v.find(w=>w.value===p)}return(p,v)=>{var $,N,y;const w=L("el-radio-button"),o=L("el-radio-group"),f=L("avue-crud"),g=L("el-card"),x=L("el-timeline-item"),U=L("el-timeline"),i=L("el-empty");return C(),E(X,null,[b(J)()?R("",!0):(C(),A(o,{key:0,modelValue:a.value,"onUpdate:modelValue":v[0]||(v[0]=u=>a.value=u)},{default:I(()=>[(C(),E(X,null,ae(n,u=>S(w,{key:u.label,label:u.label},{default:I(()=>[S(b(Te),{icon:u.icon},null,8,["icon"])]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])),ee("div",Ct,[a.value==="table"?(C(),A(f,{key:0,data:_.value,option:d},null,8,["data"])):R("",!0),a.value==="graph"?(C(),A(b(je),{key:1,"model-value":(N=($=b(t))==null?void 0:$.process)==null?void 0:N.flowData,"flow-history":(y=b(t))==null?void 0:y.flowHistory,view:"","show-legend":""},null,8,["model-value","flow-history"])):R("",!0),a.value==="timeline"?(C(),E(X,{key:2},[_.value.length?(C(),A(U,{key:0},{default:I(()=>[(C(!0),E(X,null,ae([..._.value].reverse(),u=>(C(),A(x,{key:u.id,timestamp:u.endTime,placement:"top"},{default:I(()=>[S(g,null,{default:I(()=>{var k,l,h;return[ee("div",null,W(u.assigneeName)+" 开始处理 ["+W(u.taskNodeName)+"] 环节 ",1),u.duration?(C(),E("div",It," 办理时长："+W(u.duration),1)):R("",!0),u.type&&((k=u.comment)!=null&&k.handleComment)?(C(),E("div",Vt,W((l=r(u.type))==null?void 0:l.label)+"意见："+W((h=u.comment)==null?void 0:h.handleComment),1)):R("",!0)]}),_:2},1024)]),_:2},1032,["timestamp"]))),128))]),_:1})):(C(),A(i,{key:1}))],64)):R("",!0)])],64)}}});const Lt=fe(Tt,[["__scopeId","data-v-30f9b6f7"]]),Ot={FlowDesign:{},FormDesign:{},FlowForm:ht,request:{},tabs:[{label:"审批表单",prop:"formTab",component:Nt},{label:"附件资料",prop:"fileTab",component:Dt},{label:"流程跟踪",prop:"trackTab",component:Lt}],useFlowFormOptions:{type:"drawer",window:["","flow-form","left=0,top=0,width=1600,height=900"],overlay:{width:"80%",size:"80%",top:"100px",fullscreen:!0,destroyOnClose:!0}},tableOption:{align:"center",border:!0,card:!0,stripe:!0,searchMenuSpan:6,span:24},upload:{props:{fileName:"fileOriginalName",fileType:"fileType",fileSize:"fileSize",fileUrl:"fileUrl",res:"res.data"}}};function $t(e){const t={list:"/sapier-flow/flow-user-common/list",save:"/sapier-flow/flow-user-common/save",update:"/sapier-flow/flow-user-common/update",remove:"/sapier-flow/flow-user-common/remove",batchUpdate:"/sapier-flow/flow-user-common/batchUpdate"},a=r=>e.get(t.list,{params:{type:r,ascs:"sort"}});return{url:t,getList:a,useList:r=>Z(()=>a(r.value),{res:"data.records",modify:!1,refreshDeps:[r]}),create:r=>e.post(t.save,r),update:r=>e.post(t.update,r),remove:r=>e.post(t.remove,{},{params:{ids:r}}),batchUpdate:r=>e.post(t.batchUpdate,r)}}var xe=(e=>(e.默认="default",e.主要="primary",e.成功="success",e.警告="warning",e.危险="danger",e.信息="info",e.文字="text",e))(xe||{}),Ut=(e=>(e.保存草稿="flow_draft",e.发送="flow_pass",e.退回="flow_reject",e.终止="flow_terminate",e.撤销="flow_revoke",e.撤回到发起="flow_withdraw",e.打印="flow_print",e.转办="flow_transfer",e.加签="flow_add_instance",e.减签="flow_del_instance",e.指定回退="flow_rollback",e.绿色通道="flow_green",e))(Ut||{}),me=(e=>(e.显示="true",e.隐藏="false",e.发起人="startUser",e.处理人="assignee",e.已办="done",e.待办="todo",e.已办结="finished",e.未办结="unfinished",e.已发起="started",e.未发起="notstarted",e))(me||{}),ve=(e=>(e.不显示="false",e.指定节点="specifyNode",e.审批人="assignee",e.传阅人="circulate",e.意见="comment",e))(ve||{}),Ae=(e=>(e[e.禁用=0]="禁用",e[e.正常=1]="正常",e))(Ae||{});function Se(e){const t={list:"/sapier-flow/dev-button/list",save:"/sapier-flow/dev-button/save",update:"/sapier-flow/dev-button/update",remove:"/sapier-flow/dev-button/remove"},a=m=>e.get(t.list,{params:m}),n=Z(a,{res:"data.records",defaultParams:[{size:-1,ascs:"sort",status:1}]});return{url:t,getList:a,useList:n,create:m=>e.post(t.save,m),update:m=>e.post(t.update,m),remove:m=>e.post(t.remove,{},{params:{ids:m}})}}function xt(e){const t={list:"/sapier-flow/flow-file/list",save:"/sapier-flow/flow-file/save",remove:"/sapier-flow/flow-file/remove"},a=s=>e.get(t.list,{params:s}),n=Z(a,{res:"data"});return{getList:a,useList:n,create:s=>e.post(t.save,s),remove:s=>e.post(t.remove,{},{params:{ids:s}})}}function be(e){const t={list:"/sapier-flow/flow-param/list",save:"/sapier-flow/flow-param/save",update:"/sapier-flow/flow-param/update",remove:"/sapier-flow/flow-param/remove",all:"/sapier-flow/flow-param/getAllParam",key:"/sapier-flow/flow-param/getParam"},a=p=>e.get(t.list,{params:p}),n=()=>e.get(t.all),_=p=>e.get(t.key,{params:{paramKey:p}});return{url:t,getList:a,getAllParam:n,getParam:_,useParam:p=>Z(_,{res:"data",modify:!1,defaultParams:[p]}),create:p=>e.post(t.save,p),update:p=>e.post(t.update,p),remove:p=>e.post(t.remove,{},{params:{ids:p}})}}var ie=(e=>(e[e.已办=1]="已办",e[e.待办=2]="待办",e[e.失败=3]="失败",e[e.撤销=4]="撤销",e[e.终止=5]="终止",e))(ie||{}),pe=(e=>(e[e.已办结=1]="已办结",e[e.未办结=2]="未办结",e[e.已终止=3]="已终止",e))(pe||{}),At=(e=>(e[e.系统执行=1]="系统执行",e[e.用户办理=2]="用户办理",e[e.任务撤销=3]="任务撤销",e[e.任务退回=4]="任务退回",e[e.流程终止=5]="流程终止",e[e.任务转办=6]="任务转办",e[e.绿色通道=7]="绿色通道",e))(At||{});function _e(e){const t={publishList:"/sapier-flow/flow-run/queryPublishFlowList",taskList:"/sapier-flow/flow-run/userTaskList",detail:"/sapier-flow/flow-run/queryPublishFlowDetail",approvalNode:"/sapier-flow/flow-run/queryApprovalNode",start:"/sapier-flow/flow-run/startProcess",commit:"/sapier-flow/flow-run/commitTask",draft:"/sapier-flow/flow-run/saveDraft",revoke:"/sapier-flow/flow-run/revokeTask",terminate:"/sapier-flow/flow-run/terminateFlow",withdraw:"/sapier-flow/flow-run/withdrawToStart",transfer:"/sapier-flow/flow-run/transferTask",reject:"/sapier-flow/flow-run/rollbackTask",green:"/sapier-flow/flow-run/greenTask"},a=i=>e.get(t.detail,{params:i}),n=i=>e.post(t.approvalNode,i),_=i=>e.post(t.start,i),d=i=>e.post(t.commit,i),s=i=>e.post(t.draft,i),m=i=>e.post(t.revoke,i),r=i=>e.post(t.terminate,i),p=i=>e.post(t.withdraw,i),v=i=>e.post(t.transfer,i),w=i=>e.post(t.reject,i),o=i=>e.post(t.green,i),f=i=>e.get(t.publishList,{params:i}),g=Z(f,{res:"data",defaultParams:[{ascs:"sort"}]}),x=i=>e.get(t.taskList,{params:i}),U=Z(x,{res:"data.records"});return{url:t,getFlowDetail:a,getApprovalNode:n,startTask:_,commitTask:d,saveDraft:s,revokeTask:m,terminateTask:r,withdrawTask:p,transferTask:v,rejectTask:w,greenChannel:o,getPublishList:f,usePublishList:g,getTaskList:x,useTaskList:U}}function St(e){const t={tree:"/sapier-flow/flow-user/tree"},a=_=>e.get(t.tree,{params:{filter:_}}),n=Z(a,{res:"data"});return{url:t,getUserTree:a,useUserTree:n}}var ye=(e=>(e.ASSIGN_ID="ASSIGN_ID",e.ASSIGN_UUID="ASSIGN_UUID",e.AUTO="AUTO",e.INPUT="INPUT",e.NONE="NONE",e))(ye||{}),we=(e=>(e.bigint="bigint",e.blob="blob",e.char="char",e.date="date",e.datetime="datetime",e.decimal="decimal",e.double="double",e.enum="enum",e.float="float",e.int="int",e.longblob="longblob",e.longtext="longtext",e.mediumblob="mediumblob",e.mediumint="mediumint",e.mediumtext="mediumtext",e.set="set",e.smallint="smallint",e.text="text",e.time="time",e.timestamp="timestamp",e.tinyblob="tinyblob",e.tinyint="tinyint",e.tinytext="tinytext",e.varbinary="varbinary",e.varchar="varchar",e.year="year",e))(we||{});function ca(e){const t={list:"/sapier-flow/dev-table/list",save:"/sapier-flow/dev-table/save",update:"/sapier-flow/dev-table/update",remove:"/sapier-flow/dev-table/remove",deploy:"/sapier-flow/dev-table/deploy",getFields:"/sapier-flow/dev-table/getTableFields"},a=p=>e.get(t.list,{params:p}),n=Z(a,{res:"data.records",defaultParams:[{size:-1}]});return{url:t,getList:a,useList:n,create:p=>e.post(t.save,p),update:p=>e.post(t.update,p),remove:p=>e.post(t.remove,{},{params:{ids:p}}),deploy:p=>e.post(t.deploy,p),getFields:p=>e.get(t.getFields,{params:p})}}var Pe=(e=>(e[e.否=0]="否",e[e.是=1]="是",e))(Pe||{});const le=H(Pe),pa=H(we),da=H(ye),fa=[{label:"审批",value:"userTask"},{label:"传阅",value:"circulateTask"}],Ke={menuBtn:!1,span:24,column:[{label:"流程名称",prop:"flowName",rules:[{required:!0,message:"请输入流程名称"}]},{label:"流程标识",prop:"flowKey",editDisabled:!0,rules:[{required:!0,message:"请输入流程标识"}]},{label:"流程分类",prop:"categoryId",type:"select",dicUrl:"/sapier-flow/flow-category/list",dicQuery:{size:-1,ascs:"sort"},props:{label:"name",value:"id"}},{label:"流程图标",prop:"flowIcon",component:"icon-select"},{label:"流程描述",prop:"remarks"},{label:"自定义表单",prop:"formPath"},{label:"关联表",prop:"formDataTable",type:"select",filterable:!0,allowCreate:!0,defaultFirstOption:!0,dicUrl:"/sapier-flow/dev-table/list",dicQuery:{size:-1},props:{label:"tableComment",value:"tableName",desc:"tableName",res:"data.records"}},{label:"排序",prop:"sort",type:"number",width:110},{label:"表单设计",prop:"formOption",display:!1,hide:!0},{label:"模型设计",prop:"flowData",display:!1,hide:!0}]},Pt=Ce(ct(Ot));function F(e){return pt(Pt,e)}const ma=Y({rowKey:"id",labelWidth:150,column:[{label:"按钮名称",prop:"name",search:!0},{label:"按钮标识",prop:"buttonKey",search:!0},{label:"按钮图标",prop:"icon",component:"icon-select"},{label:"按钮类型",prop:"buttonType",type:"select",dicData:H(xe)},{label:"默认显示条件",prop:"display",type:"select",multiple:!0,dataType:"string",value:"false",dicData:H(me),tip:"选择多个时,所有条件都满足才显示",labelTip:`显示: 始终显示，或运算条件;<br/>隐藏: 始终隐藏，与运算条件;<br/>
      发起人: 用户为发起人时显示，与运算条件;<br/>处理人: 用户为处理人时显示，与运算条件;<br/>
      已办: 任务状态为已办时显示，与运算条件;<br/>待办: 任务状态为待办时显示，与运算条件;<br/>
      已办结: 流程已办结时显示，与运算条件;<br/>未办结: 流程未办结时显示，与运算条件;<br/>
      已发起: 流程已发起时显示，与运算条件;<br/>未发起: 流程未发起时显示，或运算条件;`},{label:"默认审批窗口显示",prop:"approval",type:"select",multiple:!0,dataType:"string",value:"false",dicData:H(ve),labelTip:`不显示: 不显示审批窗口;<br/>指定节点: 显示指定节点选择框(常用于绿色通道等);<br/>
      审批人: 显示审批人选择框;<br/>传阅人: 显示传阅人选择框;<br/>意见: 显示意见输入框;`},{label:"默认是否校验",prop:"validate",type:"switch",value:1,dicData:le,labelTip:"是: 点击按钮时先执行每个tab的校验;<br/>否: 点击按钮不执行校验;"},{label:"备注",prop:"remarks",overHidden:!0},{label:"排序",prop:"sort",type:"number",value:0},{label:"状态",prop:"status",type:"switch",value:1,dicData:H(Ae)},{label:"按钮预览",prop:"buttonPreview",width:150}]}),va=Y({rowKey:"flowModuleId",dialogFullscreen:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuWidth:100,menuType:"menu",menuBtnTitle:"操作",column:[...Ke.column.map((e,t)=>({...e,search:t<2})),{label:"流程主版本",prop:"mainVersion",formatter(e,t){return t?`V${t||""}`:""}}]}),ba=Y({rowKey:"flowDeloyId",dialogFullscreen:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuWidth:100,menuType:"menu",menuBtnTitle:"操作",column:[...Ke.column,{prop:"sort",hide:!0},{label:"流程版本",prop:"version",formatter(e,t){return t?`V${t||""}`:""}},{label:"是否主版本",prop:"mainVersion",type:"select",dicData:[{label:"否",value:0},{label:"是",value:1}]}]}),_a=Y({rowKey:"id",menu:!1,addBtn:!1,column:[{label:"流程名称",prop:"flowName"},{label:"流程标识",prop:"flowKey"},{label:"流程分类",prop:"categoryId",type:"select",search:!0,dicUrl:"/sapier-flow/flow-category/list",props:{label:"name",value:"id"}},{label:"标题",prop:"processTitle",search:!0},{label:"流水号",prop:"serialNumber"},{label:"当前节点",prop:"taskNodeName"},{label:"审批人",prop:"assigneeName"},{label:"申请人",prop:"applyUserName"},{label:"接收时间",prop:"startTime"},{label:"状态",prop:"status",type:"select",search:!0,searchValue:ie.待办,dicUrl:"/sapier-flow/flow-param/getParam",dicQuery:{paramKey:"flow.task.status"}}]}),ya=Y({rowKey:"id",column:[{label:"配置名称",prop:"paramName",search:!0},{label:"配置Key",prop:"paramKey",search:!0},{label:"备注",prop:"remark"},{label:"系统内置",prop:"paramType",type:"switch",dicData:le},{label:"配置值",prop:"paramValue",type:"textarea",maxRows:20,span:24,overHidden:!0}]});const wa=Y({rowKey:"id",column:[{label:"流程标识",prop:"flowKey",search:!0},{label:"流程名称",prop:"flowName",search:!0},{label:"流程备注",prop:"remarks"},{label:"排序",prop:"sort"}]}),Kt={key:0,class:"flow-viewer"},jt={key:0,class:"flow-status-legend"},zt={class:"legend-text"},Bt=Q({__name:"FlowDesignWrapper",props:{modelValue:{},view:{type:Boolean},flowFormOption:{},flowHistory:{},showLegend:{type:Boolean}},emits:["update:modelValue","nodeClick"],setup(e,{emit:t}){const a=e,n=Fe();tt(n,()=>{var l;(l=n.value)==null||l.on("node:click",h=>t("nodeClick",h))});const _=z({get(){let l=ut();return typeof a.modelValue=="string"&&a.modelValue?l=JSON.parse(a.modelValue):typeof a.modelValue=="object"&&Object.keys(a.modelValue)&&(l=a.modelValue),l},set(l){t("update:modelValue",JSON.stringify(l))}}),d=z(()=>{const{column:l=[],group:h=[]}=JSON.parse(a.flowFormOption||"{}");return[...l,...h.map(O=>O.column??[]).flat()]}),{FlowDesign:s,tabs:m,request:r}=F(),p=z(()=>(m==null?void 0:m.map(l=>({...l,display:l.display??!0})))??[]),v=z(()=>!a.view),{data:w}=Se(r).useList({ready:v}),{useUserTree:o}=St(r),{data:f}=o({ready:v}),{data:g}=o({ready:v,defaultParams:["dept"]}),{data:x}=o({ready:v,defaultParams:["post"]}),{useParam:U}=be(r),{data:i}=U("flow.trends.user");function $(l){return Le(l,h=>({...h,label:h.title,value:h.id}))}const N=z(()=>({formPropertyList:[...d.value,...p.value],buttonList:w.value,fieldsDic:d.value.map(l=>({label:l.label,value:`\${${l.prop}}`,desc:`\${${l.prop}}`})),flowButtonDisplayDic:H(me),flowButtonApprovalDic:H(ve),flowButtonValidateDic:le.map(l=>({...l,label:""})),flowAssigneeUserDic:$(f.value??[]),flowAssigneeDeptDic:$(g.value??[]),flowAssigneePostDic:$(x.value??[]),flowAssigneeDynamicDic:i.value})),{data:y}=U("flow.task.status"),u=z(()=>{var l;return(l=a.flowHistory)==null?void 0:l.map(h=>{var O,V;const D=(V=(O=y.value)==null?void 0:O.find(c=>c.value===h.status))==null?void 0:V.style;return{id:h.taskNodeKey,style:D}})}),k=z(()=>{var l,h;return(h=(l=a.flowHistory)==null?void 0:l.filter(D=>D.taskNodeType==="userTask"))==null?void 0:h.map(D=>{var O;return{id:D.taskNodeKey,content:`<div>${D.assigneeName}</div>
        <div>${D.endTime??""}</div>
        <div>${((O=D.comment)==null?void 0:O.handleComment)??""}</div>`}})});return(l,h)=>l.view?(C(),E("div",Kt,[l.showLegend!==!1?(C(),E("div",jt,[(C(!0),E(X,null,ae(b(y),D=>{var O;return C(),E("div",{key:D.label,class:"legend-item"},[ee("div",{class:"legend-color",style:Xe({backgroundColor:(O=D.style)==null?void 0:O.fill})},null,4),ee("span",zt,W(D.label),1)])}),128))])):R("",!0),S(b(s),{lf:n.value,"onUpdate:lf":h[0]||(h[0]=D=>n.value=D),"model-value":_.value,styles:u.value,tooltips:k.value,type:"viewer"},null,8,["lf","model-value","styles","tooltips"])])):(C(),A(b(s),{key:1,modelValue:_.value,"onUpdate:modelValue":h[1]||(h[1]=D=>_.value=D),"form-options":b(st),"data-options":N.value,"form-width":"30%"},null,8,["modelValue","form-options","data-options"]))}});const je=fe(Bt,[["__scopeId","data-v-34a13d90"]]),ga=Y({rowKey:"id",column:[{label:"表单标识",prop:"formKey",search:!0},{label:"表单名称",prop:"formName",search:!0},{label:"表单备注",prop:"remarks"},{label:"排序",prop:"sort",type:"number"}]}),De=[{label:"字段名称",prop:"name"},{label:"字段备注",prop:"comment"},{label:"字段类型",prop:"type",type:"select",filterable:!0,allowCreate:!0,defaultFirstOption:!0,dicData:H(we)},{label:"字段长度",prop:"size",type:"number"},{label:"小数位",prop:"point",type:"number"},{label:"默认值",prop:"default"},{label:"是否主键",prop:"primary",type:"switch",dicData:le,value:0},{label:"是否允许为空",prop:"permitNull",type:"switch",dicData:le,value:1}],ka=Y({rowKey:"id",dialogFullscreen:!0,column:[{label:"表名",prop:"tableName",search:!0},{label:"表注释",prop:"tableComment",search:!0},{label:"表引擎",prop:"tableEngine"},{label:"表主键策略",prop:"tablePrimary",type:"select",filterable:!0,allowCreate:!0,defaultFirstOption:!0,dicData:H(ye)},{label:"数据库字段",prop:"editFields",hide:!0,type:"dynamic",children:{column:De}},{label:"默认字段",prop:"defaultFields",hide:!0,type:"dynamic",children:{addBtn:!1,delBtn:!1,column:De}}]});function ze(e){return new Promise((t,a)=>{b(e).validate((_,d,s)=>{_?(d(),t(s)):a(s)})})}function J(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}export{J as $,St as A,ye as B,Ot as C,we as D,Y as E,je as F,le as G,At as H,pa as I,da as J,gt as K,Ne as L,he as M,_t as N,Lt as O,Nt as P,Dt as Q,dt as R,ke as S,ie as T,$e as U,mt as V,Pe as W,vt as X,Ue as Y,bt as Z,ht as _,ft as a,ze as b,F as c,Se as d,va as e,ba as f,ca as g,Ke as h,_a as i,fa as j,ya as k,be as l,_e as m,wa as n,ga as o,ka as p,$t as q,xe as r,Ut as s,ma as t,te as u,me as v,ve as w,Ae as x,xt as y,pe as z};
