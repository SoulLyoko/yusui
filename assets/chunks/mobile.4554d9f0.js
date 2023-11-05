import{h as Ie,a as z,O as B,D as le,B as _,c as me,M as Me,a0 as Ge,Z as We,f as H,y as D,S as E,z as oe,x as X,v as L,k as S,e as I,V as G,I as W,Q,R as A,T as ie,a4 as ke,J as Ve,L as te,_ as fe,H as Te,a6 as Qe,q as Je,ac as Fe,ad as He,P as Ze,N as Xe}from"./framework.1859beb2.js";import{d as Ye}from"./index.b942cce0.js";import"./index.es.f31165fb.js";import{I as Le}from"./iconify.6d9e7663.js";import{a as ce,l as qe,m as et,w as tt,n as at}from"./theme.63d40dbf.js";import{m as ot,u as lt}from"./index.df252014.js";import{j as st}from"./tree.4d25f6da.js";import"./index.ed8e6555.js";import"./vuedraggable.umd.96a1619d.js";import{e as J}from"./index.0246ace1.js";import{u as Y}from"./index.e2258274.js";import{b as nt}from"./index.f35d23d7.js";import"./form.eeb0fdf0.js";import"./index.5e655f9a.js";import{p as rt}from"./pick.95244439.js";import{t as $e,a as it}from"./index.7b9b2b88.js";import{E as re}from"./index.a4e05b76.js";import{u as Oe}from"./index.386fc70b.js";import{d as ut}from"./zipWith.1f1efbd8.js";import{d as ct}from"./data.8220951e.js";import{g as ne}from"./get.45bf40f8.js";import{c as pt}from"./cloneDeep.0df5a121.js";import{m as dt}from"./merge.388a8cf7.js";function q(e){const{tableOption:t}=Z();return Ie({...t,...e})}function mt(e){const{buttonHandler:t,request:o}=Z(),{commitTask:s,revokeTask:y,saveDraft:u,startTask:m,terminateTask:r,transferTask:b,withdrawTask:l,rejectTask:k,greenChannel:g}=ye(o),a=z(()=>{const{flowDetail:v,formVariables:O,approvalFormData:P,debug:i,fileIds:x}=e,{flowDeployId:V}=v.value.process??{},{taskId:d,flowInstanceId:c}=v.value.task??{};return{flowDeployId:V,taskId:d,flowInstanceId:c,variables:O.value,debug:i.value,fileIds:x==null?void 0:x.value,...P.value}}),f=()=>a.value.taskId&&a.value.flowInstanceId;return{flow_draft(){if(f())return u(a.value)},flow_pass(){return f()?s(a.value):m(a.value)},flow_revoke(){if(f())return y(a.value)},flow_withdraw(){if(f())return l(a.value)},flow_terminate(){if(f())return r(a.value)},flow_transfer(){if(f())return b(a.value)},flow_reject(){if(f())return k(a.value)},flow_green(){if(f())return g(a.value)},...t==null?void 0:t(e)}}function he(){const e=ot();return{emitter:e,onAfterGetDetail:u=>{e.on("afterGetDetail",async(...m)=>await(u==null?void 0:u(...m)))},onBeforeClick:u=>{e.on("beforeClick",async(...m)=>await(u==null?void 0:u(...m)))},onBeforeSubmit:u=>{e.on("beforeSubmit",async(...m)=>await(u==null?void 0:u(...m)))},onAfterSubmit:u=>{e.on("afterSubmit",async(...m)=>await(u==null?void 0:u(...m)))}}}function Ue(e,t){e.forEach(o=>{var y,u,m,r,b,l;const s=t==null?void 0:t.find(k=>k.prop===o.prop);s&&(o.display=s.display,o.disabled=s.disabled,o.detail=s.detail,o.readonly=s.readonly,o.rules=s.validate?o.rules??[]:[],s.required&&!((y=o.rules)!=null&&y.some(k=>k.required))?(u=o.rules)==null||u.push({required:!0,message:`${o.label}为必填项`}):s.required||(o.rules=o.rules.filter(k=>!k.required)),(r=(m=o.children)==null?void 0:m.column)!=null&&r.length&&((b=s.children)!=null&&b.length)&&Ue((l=o.children)==null?void 0:l.column,s.children))})}function ft(e){const t=B({});return le(async()=>{var s;const{formProperty:o}=((s=_(e))==null?void 0:s.properties)||{};o!=null&&o.length&&(await me(),Ue(Object.values(t.value),o))}),t}const vt={modelValue:{type:Object,default:()=>({})},title:{type:String},flowDetail:{type:Object,default:()=>({})},formLoading:{type:Boolean},submitLoading:{type:Boolean},activeTab:{type:String,default:"formTab"},activeBtn:{type:Object,default:()=>({})},approvalVisible:{type:Boolean},approvalFormData:{type:Object,default:()=>({})},flowKey:{type:String},taskId:{type:String},instanceId:{type:String},formId:{type:String},fileIds:{type:String},permission:{type:Object},afterGetDetail:{type:Function},beforeClick:{type:Function},beforeSubmit:{type:Function},afterSubmit:{type:Function},detail:{type:[Boolean,String],default:!1},debug:{type:[Boolean,String],default:!1}},bt={complete:e=>e},xe=Symbol("flowFormState");function _t(e,t){const o=ce(e,void 0,{passive:!0,deep:!0}),{flowDetail:s,modelValue:y,formLoading:u,activeTab:m,afterGetDetail:r}=o,{emitter:b}=he(),{tabs:l,customForm:k,request:g}=Z(),a=B({}),f=z(()=>(l==null?void 0:l.filter(V=>{var w,h,p;const d=(p=(h=(w=s.value)==null?void 0:w.properties)==null?void 0:h.formProperty)==null?void 0:p.find(T=>T.prop===V.prop),c={...V,display:(d==null?void 0:d.display)??V.display};return(c==null?void 0:c.display)!==!1}).map(V=>{var c,w;let d=V.component;if(V.prop==="formTab"){const h=k==null?void 0:k[((w=(c=s==null?void 0:s.value)==null?void 0:c.process)==null?void 0:w.formPath)??""];typeof h=="function"?d=We(h):h&&(d=h)}return{...V,component:d}}))??[]),v=B();F()&&qe(v,{onSwipeEnd(V,d){if(!["left","right"].includes(d))return;const c=f.value.findIndex(h=>h.prop===m.value),w=et(c+(d==="right"?-1:1),0,f.value.length-1);m.value=f.value[w].prop}});const{getFlowDetail:O}=ye(g);le(()=>{const{flowKey:V,taskId:d,instanceId:c}=e;!V&&!d&&!c||(u.value=!0,O({flowKey:V,taskId:d,flowInstanceId:c}).then(async w=>{var h;s.value=w.data,y.value=w.data.formData||{},await((h=r==null?void 0:r.value)==null?void 0:h.call(r,w.data)),await b.emitAsync("afterGetDetail",w.data)}).finally(()=>{u.value=!1}))});const P=z(()=>Object.entries(y.value||{}).filter(([V])=>!V.startsWith("$")).map(([V,d])=>({key:V,value:d}))),i=z(()=>e.detail===!0||e.detail==="true"),x={...o,...he(),formData:y,formVariables:P,tabRefs:a,tabList:f,detail:i,tabsRef:v,emit:t};return Ge(xe,x),x}function ae(){return Me(xe)}const Ne=H({__name:"ButtonList",emits:["click"],setup(e,{emit:t}){const o=t,{userInfo:s,request:y}=Z(),{flowDetail:u}=ae(),{data:m}=Pe(y).useList();function r(l,k){return l.map(g=>{const a=k.find(v=>v.buttonKey===g.buttonKey);return{...g,...rt(a,["display","approval","validate"])}})}const b=z(()=>{var V,d,c,w;const l=typeof s=="function"?s():s,{assignee:k,status:g}=((V=u.value)==null?void 0:V.task)||{},{createUser:a,flowInstanceId:f,status:v}=((d=u.value)==null?void 0:d.flowInstance)||{},O={false:!1,startUser:a===String(l==null?void 0:l.userId),assignee:k===String(l==null?void 0:l.userId),todo:g===ue.待办,done:g===ue.已办,unfinished:v===de.未办结,finished:v===de.已办结,started:!!f},P={true:!0,notstarted:!f},{button:i}=((c=u.value)==null?void 0:c.properties)||{};return((w=r(m.value??[],i??[]))==null?void 0:w.filter(h=>{var U;const p=(U=h.display)==null?void 0:U.split(","),T=p==null?void 0:p.filter(N=>N in O).every(N=>O[N]),C=p==null?void 0:p.filter(N=>N in P).some(N=>P[N]);return T||C}))??[]});return(l,k)=>{const g=L("el-button");return D(!0),E(X,null,oe(b.value,a=>(D(),S(g,{key:a.buttonKey,type:a.buttonType,onClick:f=>o("click",a)},{default:I(()=>[a.icon?(D(),S(_(Le),{key:0,icon:a.icon},null,8,["icon"])):G("",!0),W(" "+Q(a.name),1)]),_:2},1032,["type","onClick"]))),128)}}}),yt=H({__name:"CommonComments",props:{modelValue:{}},setup(e){const t=e,{modelValue:o}=ce(t),{request:s}=Z(),{batchUpdate:y,create:u,remove:m,useList:r}=Ut(s),b=B(!1),{activeBtn:l}=ae(),k=z(()=>{var d;return(d=l.value)==null?void 0:d.buttonKey}),{data:g,refresh:a}=r(k),f=z(()=>{var c,w,h;const d=o.value;if(d&&!((c=g.value)!=null&&c.some(p=>p.content===d))){const p=(((h=(w=g.value)==null?void 0:w[0])==null?void 0:h.sort)||1)-1;return[{content:d,sort:p},...g.value||[]]}return g.value});async function v(d){var c;await u({...d,type:(c=l.value)==null?void 0:c.buttonKey}),re.success("添加成功"),a()}async function O(d){await m(d.id),re.success("删除成功"),a()}async function P(d,c){let w=c.parent.data;w=w.map((h,p)=>({id:h.id,sort:p+1})),await y(w),re.success("修改排序成功"),a(),b.value=!1}function i(){b.value=!0}const x=B();async function V(d){var c;o.value=d.content??"",await me(),(c=x.value)==null||c.blur()}return(d,c)=>{const w=L("el-input"),h=L("el-text"),p=L("el-col"),T=L("el-button"),C=L("el-row"),U=L("el-tree"),N=L("el-popover");return D(),S(N,{visible:b.value,placement:"bottom",title:"常用意见",width:_(F)()?"98%":"600px"},{reference:I(()=>[A(w,{ref_key:"inputRef",ref:x,modelValue:_(o),"onUpdate:modelValue":c[0]||(c[0]=n=>ie(o)?o.value=n:null),type:"textarea",placeholder:"请输入意见",rows:"5",onFocus:c[1]||(c[1]=n=>b.value=!0),onBlur:c[2]||(c[2]=n=>b.value=!1)},null,8,["modelValue"])]),default:I(()=>[A(U,{data:f.value,"node-key":"content",draggable:"","allow-drop":(n,$,j)=>j!=="inner",props:{label:"content"},onNodeClick:V,onNodeDrop:P,onNodeDragStart:i},{default:I(({data:n})=>[A(C,{style:{width:"100%"}},{default:I(()=>[A(p,{span:22},{default:I(()=>[A(h,{truncated:"",title:n.content},{default:I(()=>[W(Q(n.content),1)]),_:2},1032,["title"])]),_:2},1024),A(p,{span:2},{default:I(()=>[n.id?(D(),S(T,{key:0,type:"danger",size:"small",icon:"el-icon-close",text:"",onClick:ke($=>O(n),["stop"])},null,8,["onClick"])):(D(),S(T,{key:1,type:"primary",size:"small",icon:"el-icon-plus",text:"",onClick:ke($=>v(n),["stop"])},null,8,["onClick"]))]),_:2},1024)]),_:2},1024)]),_:1},8,["data","allow-drop"])]),_:1},8,["visible","width"])}}}),wt=H({__name:"ApprovalTree",props:{modelValue:{},data:{},autoCheck:{type:Boolean},mode:{}},setup(e){const t=e,{modelValue:o}=ce(t),s={element:"ep:flag",post:"ep:share",dept:"ep:share",user:"ep:user"},u={defaultExpandAll:!0,lazy:!0,showCheckbox:!0,nodeKey:"id",load:(a,f)=>{a.level===0?f(r.value):f(a.data.children??[])},onCheck:l,props:{label:"title",class(a){return`node-${a.type}`}}},m=B(),r=z(()=>$e(t.data??[],(a,f,v)=>{const O=Oe();return a.taskNodeKey=(v==null?void 0:v.taskNodeKey)??a.taskNodeKey,a.incoming=(v==null?void 0:v.incoming)??a.incoming,a.multiple=(v==null?void 0:v.multiple)??a.multiple,a.parentId=(v==null?void 0:v.id)??a.parentId,{...a,id:O}}));tt(()=>[r.value,m.value],async()=>{if(!(!m.value||!r.value.length)&&t.autoCheck){const a=b(r.value);a&&g([a])}},{immediate:!0,debounce:100});function b(a){var f;if(a.length===1)return(f=a[0].children)!=null&&f.length?b(a[0].children):a[0]}async function l(a,{checkedNodes:f}){var P;let v=f.filter(i=>i.type==="user");const O=v.some(i=>i.id===a.id);if(r.value.every(i=>!i.multiple)&&O)v=[a];else if(!a.multiple&&O){const V=((P=m.value)==null?void 0:P.getNode(a)).parent.data.children.filter(d=>d.id!==a.id);v=ut(v,V,"id")}g(v)}function k(a){const f=o.value.filter(v=>v.id!==a.id);g(f)}function g(a){var f;o.value=a,(f=m.value)==null||f.setCheckedNodes(a)}return(a,f)=>{const v=L("el-tag"),O=L("Icon"),P=L("el-tree");return D(),E(X,null,[(D(!0),E(X,null,oe(_(o),i=>(D(),S(v,{key:i.id,type:"info",closable:"",onClose:x=>k(i)},{default:I(()=>[W(Q(i.title),1)]),_:2},1032,["onClose"]))),128)),A(P,Ve({ref_key:"treeRef",ref:m,class:["approval-tree",`mode-${a.mode}`],data:r.value},u),{default:I(({data:i})=>[te("div",null,[A(O,{icon:s[i.type]||s.element,style:{display:"inline-block"}},null,8,["icon"]),te("span",null,Q(i.title),1)])]),_:1},16,["class","data"])],64)}}});const De=fe(wt,[["__scopeId","data-v-67c048e8"]]),gt=H({__name:"NodeSelect",props:{modelValue:{}},setup(e){const t=e,{modelValue:o}=ce(t),{flowDetail:s}=ae(),y=B(!1);function u({data:m}){m.type==="userTask"&&(y.value=!1,o.value=m.id)}return(m,r)=>{const b=L("el-button"),l=L("el-popover");return D(),S(l,{visible:y.value,"onUpdate:visible":r[0]||(r[0]=k=>y.value=k),placement:"bottom-start",width:"800px",trigger:"click"},{reference:I(()=>[A(b,null,{default:I(()=>[W(" 点击选择节点 ")]),_:1})]),default:I(()=>{var k,g;return[A(_(ze),{"model-value":(g=(k=_(s))==null?void 0:k.process)==null?void 0:g.flowData,view:"",style:{height:"600px"},onNodeClick:u},null,8,["model-value"])]}),_:1},8,["visible"])}}}),kt=H({__name:"ApprovalForm",emits:["submit"],setup(e,{emit:t}){const o=t,{request:s}=Z(),{getApprovalNode:y}=ye(s),{useParam:u}=_e(s),{formData:m,approvalFormData:r,activeBtn:b,approvalVisible:l,formVariables:k,flowDetail:g}=ae(),a=B([]),f=B([]),v=B([]),O=B([]),P=B(!1),i=B(!1),x=B(),V=z(()=>{const N=a.value.length,n=v.value.length&&!a.value.length;return{menuBtn:!1,labelWidth:"auto",span:24,column:[{label:"指定节点",prop:"jumpTaskNodeKey",display:d("specifyNode"),rules:[{required:!0,message:"请选择指定节点"}]},{label:"审批人",prop:"assignee",display:d("assignee"),rules:N?[{required:!0,validator:c}]:[]},{label:"传阅人",prop:"circulate",display:d("circulate"),rules:n?[{required:!0,validator:w}]:[]},{label:"意见",prop:"comment",display:d("comment"),rules:[{required:!0,message:"请填写意见"}]}]}});function d(N){var n,$;return($=(n=b.value)==null?void 0:n.approval)==null?void 0:$.includes(N)}function c(N,n,$){var K,ee,R;const j=((K=a.value[0])==null?void 0:K.type)==="parallelGateway",M=(R=(ee=a.value[0])==null?void 0:ee.children)==null?void 0:R.every(pe=>it([pe],Re=>f.value.some(Ee=>Ee.id===Re.id)));if(f.value.length){if(j&&!M)return $("请在每个节点选择审批人")}else return $("请选择审批人");return!0}function w(N,n,$){return O.value.length?!0:$("请选择传阅人")}const{data:h}=u("flow.approval.autocheck"),{data:p}=u("flow.approval.autocomment");le(async()=>{!l.value||!x.value||(me(()=>{x.value.resetForm(),r.value.comment=m.value.comment||p.value==="true"&&b.value.name||""}),T())}),le(async()=>{var N,n;if(d("assignee")&&!(d("specifyNode")&&!r.value.jumpTaskNodeKey)){T();try{i.value=!0;const{taskId:$}=((N=g.value)==null?void 0:N.task)||{},{flowKey:j}=((n=g.value)==null?void 0:n.process)||{},M=await y({flowKey:j,taskId:$,variables:k.value,buttonType:b.value.buttonKey,jumpTaskNodeKey:r.value.jumpTaskNodeKey});a.value=M.data.approvalNodeList,v.value=M.data.circulateNodeList}finally{i.value=!1}}});function T(){a.value=[],f.value=[],v.value=[],O.value=[]}async function C(){await Be(x),P.value=!0;const{data:N,outgoing:n}=U(f.value),{data:$}=U(O.value);r.value.assignee=N,r.value.circulate=$,r.value.outgoing=[...n],o("submit")}function U(N){const n={},$={},j=new Set;return N.forEach(M=>{const{taskNodeKey:K,incoming:ee}=M;n[K]||(n[K]=new Set),M.userId&&n[K].add(M.userId),$[K]=[...n[K]].join(","),ee&&j.add(ee)}),{dataSet:n,data:$,outgoing:j}}return(N,n)=>{const $=L("el-skeleton"),j=L("avue-form"),M=L("el-button");return D(),S(Te(_(F)()?"el-drawer":"el-dialog"),{modelValue:_(l),"onUpdate:modelValue":n[6]||(n[6]=K=>ie(l)?l.value=K:null),class:"approval-form-overlay",title:_(b).name,"append-to-body":"",width:"900px",size:"50%",direction:"btt","destroy-on-close":""},{footer:I(()=>[A(M,{onClick:n[5]||(n[5]=K=>l.value=!1)},{default:I(()=>[W(" 取 消 ")]),_:1}),A(M,{type:"primary",onClick:C},{default:I(()=>[W(" 确 定 ")]),_:1})]),default:I(()=>[A(j,{ref_key:"formRef",ref:x,modelValue:_(r),"onUpdate:modelValue":n[4]||(n[4]=K=>ie(r)?r.value=K:null),class:"approval-form",option:V.value},{jumpTaskNodeKey:I(()=>[A(gt,{modelValue:_(r).jumpTaskNodeKey,"onUpdate:modelValue":n[0]||(n[0]=K=>_(r).jumpTaskNodeKey=K)},null,8,["modelValue"])]),assignee:I(()=>[i.value?(D(),S($,{key:0})):(D(),S(De,{key:"AssigneeTree",modelValue:f.value,"onUpdate:modelValue":n[1]||(n[1]=K=>f.value=K),data:a.value,"auto-check":_(h)==="true",mode:_(F)()?"vertical":"horizontal"},null,8,["modelValue","data","auto-check","mode"]))]),circulate:I(()=>[i.value?(D(),S($,{key:0})):(D(),S(De,{key:"CirculateTree",modelValue:O.value,"onUpdate:modelValue":n[2]||(n[2]=K=>O.value=K),data:v.value,mode:_(F)()?"vertical":"horizontal"},null,8,["modelValue","data","mode"]))]),comment:I(()=>[A(yt,{modelValue:_(r).comment,"onUpdate:modelValue":n[3]||(n[3]=K=>_(r).comment=K)},null,8,["modelValue"])]),_:1},8,["modelValue","option"])]),_:1},8,["modelValue","title"])}}});const ht={class:"flow-form__title"},Nt=H({__name:"index",props:vt,emits:bt,setup(e,{emit:t}){const o=e,s=t,y=_t(o,s),{ApprovalForm:u,tabsProps:m}=Z(),r=u??kt,{title:b,detail:l,flowDetail:k,tabRefs:g,tabList:a,activeTab:f,activeBtn:v,formLoading:O,approvalVisible:P,submitLoading:i,beforeClick:x,beforeSubmit:V,afterSubmit:d,tabsRef:c,emitter:w}=y;async function h(C){var U,N;if(v.value=C,C.validate===1)for(const n of Object.values(g.value))await((U=n==null?void 0:n.validate)==null?void 0:U.call(n));await((N=x==null?void 0:x.value)==null?void 0:N.call(x,C)),await w.emitAsync("beforeClick",C),(C==null?void 0:C.approval)!=="false"?P.value=!0:T()}const p=mt(y);async function T(){var C,U;try{i.value=!0,await((C=V==null?void 0:V.value)==null?void 0:C.call(V,v.value)),await w.emitAsync("beforeSubmit",v.value);const{buttonKey:N}=v.value,n=p[N];if(!n){re.error("无法找到相应的操作");return}const $=await(n==null?void 0:n());await((U=d==null?void 0:d.value)==null?void 0:U.call(d,$)),await w.emitAsync("afterSubmit",$),P.value=!1,s("complete",v.value)}finally{i.value=!1}}return(C,U)=>{const N=L("el-skeleton"),n=L("el-main"),$=L("el-header"),j=L("el-tab-pane"),M=L("el-tabs"),K=L("el-footer"),ee=L("el-container");return _(O)?(D(),S(n,{key:0},{default:I(()=>[A(N)]),_:1})):(D(),S(ee,{key:1,class:"flow-form"},{default:I(()=>[A($,{class:"flow-form__header",height:"auto"},{default:I(()=>{var R;return[te("div",ht,Q(_(b)??((R=_(k).flowInstance)==null?void 0:R.title)),1),!_(l)&&!_(F)()?(D(),S(Ne,{key:0,onClick:h})):G("",!0)]}),_:1}),A(n,{class:"flow-form__main"},{default:I(()=>[A(M,Ve({ref_key:"tabsRef",ref:c,modelValue:_(f),"onUpdate:modelValue":U[0]||(U[0]=R=>ie(f)?f.value=R:null)},_(m)),{default:I(()=>[(D(!0),E(X,null,oe(_(a),R=>(D(),S(j,{key:R.prop,label:R.label,name:R.prop,lazy:R.lazy,disabled:R.disabled,closable:R.closable},{default:I(()=>[(D(),S(Te(R.component),{ref_for:!0,ref:pe=>_(g)[R.prop]=pe},null,512))]),_:2},1032,["label","name","lazy","disabled","closable"]))),128))]),_:1},16,["modelValue"])]),_:1}),!_(l)&&_(F)()?(D(),S(K,{key:0,class:"flow-form__footer",height:"auto"},{default:I(()=>[A(Ne,{onClick:h})]),_:1})):G("",!0),A(_(r),{onSubmit:T})]),_:1}))}}});const Dt=H({setup(){const{flowDetail:e,formData:t,detail:o}=ae(),s=ft(e.value),{proxy:y}=Je(),u=B({});le(()=>{const{formOption:b}=e.value.process??{};u.value=st.bind(y)(b||'{"menuBtn":false}'),u.value.detail=o.value});const m=B();function r(){return Be(m)}return{form:t,option:u,defaults:s,formRef:m,validate:r}},render(){return Qe(L("avue-form"),{ref:"formRef",modelValue:this.form,defaults:this.defaults,option:this.option,class:this.option.class,"onUpdate:modelValue":e=>this.form=e,"onUpdate:defaults":e=>this.defaults=e})}}),Ct=H({__name:"UploadTable",setup(e){const{flowDetail:t,fileIds:o,detail:s}=ae(),{upload:{action:y,headers:u,preview:m,download:r,props:b}={},request:l}=Z(),k=typeof u=="function"?u():u,g=z(()=>{var w,h;return((h=(w=t.value)==null?void 0:w.task)==null?void 0:h.flowInstanceId)??Oe()}),a=[{label:"文件名",prop:"fileName"},{label:"文件类型",prop:"fileType"},{label:"文件大小",prop:"fileSize"},{label:"版本",prop:"version"},{label:"上传时间",prop:"createTime"}],f=a.filter(w=>w.prop==="fileName"),v={rowKey:"id",align:"center",index:!1,border:!0,stripe:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuType:"menu",menuBtnTitle:"操作",column:F()?f:a},{bindVal:O,getDataList:P,handleDel:i,handleSave:x,afterGetList:V,crudStateRefs:{tableData:d}}=lt({crudOption:{...St(l),saveSuccessMsg:"上传成功"},tableOption:v,queryForm:{isLatest:1,flowInstanceId:g.value}});V(()=>{o.value=d.value.map(w=>w.id).join(",")}),P();async function c(w,h){var $,j;const{fileName:p,fileType:T,fileSize:C,fileUrl:U,res:N}=b,n={fileName:ne({res:w},`${N}.${p}`),fileType:ne({res:w},`${N}.${T}`),fileSize:ne({res:w},`${N}.${C}`),fileUrl:ne({res:w},`${N}.${U}`),taskId:(j=($=t.value)==null?void 0:$.task)==null?void 0:j.taskId,flowInstanceId:g.value,rootMark:(h==null?void 0:h.rootMark)||"",version:typeof(h==null?void 0:h.version)=="number"?h.version+1:1};await x(n,P,()=>{})}return(w,h)=>{const p=L("el-button"),T=L("el-upload"),C=L("el-dropdown-item"),U=L("avue-crud");return D(),S(U,Fe(He(_(O))),{"menu-left":I(()=>[_(s)?G("",!0):(D(),S(T,{key:0,action:_(y),headers:_(k),"show-file-list":!1,onSuccess:h[0]||(h[0]=N=>c(N))},{default:I(()=>[A(p,{type:"primary",icon:"el-icon-upload"},{default:I(()=>[W(" 点击上传 ")]),_:1})]),_:1},8,["action","headers"]))]),"menu-btn":I(({row:N,index:n})=>[A(C,{icon:"el-icon-view",onClick:$=>{var j;return(j=_(m))==null?void 0:j(N,_(d))}},{default:I(()=>[W(" 预览 ")]),_:2},1032,["onClick"]),A(C,{icon:"el-icon-download",onClick:$=>{var j;return(j=_(r))==null?void 0:j(N,_(d))}},{default:I(()=>[W(" 下载 ")]),_:2},1032,["onClick"]),_(s)?G("",!0):(D(),S(C,{key:0,icon:"el-icon-upload"},{default:I(()=>[A(T,{action:_(y),headers:_(k),"show-file-list":!1,onSuccess:$=>c($,N)},{default:I(()=>[W(" 更新版本 ")]),_:2},1032,["action","headers","onSuccess"])]),_:2},1024)),_(s)?G("",!0):(D(),S(C,{key:1,icon:"el-icon-delete",onClick:$=>_(i)(N,n)},{default:I(()=>[W(" 删除 ")]),_:2},1032,["onClick"]))]),_:1},16)}}}),It={class:"flow-track"},Vt={key:0},Tt={key:1},Lt=H({__name:"FlowTrack",setup(e){const{flowDetail:t}=ae(),o=B(F()?"timeline":"table"),s=[{label:"table",icon:"ep:grid"},{label:"graph",icon:"ep:picture"},{label:"timeline",icon:"ep:finished"}],y=z(()=>{var l,k,g;return((g=(k=(l=t.value)==null?void 0:l.flowHistory)==null?void 0:k.filter(a=>/Task/.test(a.taskNodeType??"")))==null?void 0:g.map(a=>({...a,duration:Ye(a.duration)})))??[]}),u={addBtn:!1,menu:!1,border:!0,column:[{label:"节点名称",prop:"taskNodeName"},{label:"处理人",prop:"assigneeName"},{label:"接收时间",prop:"startTime"},{label:"处理时间",prop:"endTime"},{label:"办理时长",prop:"duration"},{label:"操作类型",prop:"type",dicUrl:"/sapier-flow/flow-param/getParam",dicQuery:{paramKey:"flow.handle.type"}},{label:"办理意见",prop:"comment",bind:"comment.handleComment"}]},{request:m}=Z(),{data:r}=_e(m).useParam("flow.handle.type");function b(l){var k;return(k=r.value)==null?void 0:k.find(g=>g.value===l)}return(l,k)=>{var x,V,d;const g=L("el-radio-button"),a=L("el-radio-group"),f=L("avue-crud"),v=L("el-card"),O=L("el-timeline-item"),P=L("el-timeline"),i=L("el-empty");return D(),E(X,null,[_(F)()?G("",!0):(D(),S(a,{key:0,modelValue:o.value,"onUpdate:modelValue":k[0]||(k[0]=c=>o.value=c)},{default:I(()=>[(D(),E(X,null,oe(s,c=>A(g,{key:c.label,label:c.label},{default:I(()=>[A(_(Le),{icon:c.icon},null,8,["icon"])]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])),te("div",It,[o.value==="table"?(D(),S(f,{key:0,data:y.value,option:u},null,8,["data"])):G("",!0),o.value==="graph"?(D(),S(_(ze),{key:1,"model-value":(V=(x=_(t))==null?void 0:x.process)==null?void 0:V.flowData,"flow-history":(d=_(t))==null?void 0:d.flowHistory,view:"","show-legend":""},null,8,["model-value","flow-history"])):G("",!0),o.value==="timeline"?(D(),E(X,{key:2},[y.value.length?(D(),S(P,{key:0},{default:I(()=>[(D(!0),E(X,null,oe([...y.value].reverse(),c=>(D(),S(O,{key:c.id,timestamp:c.endTime,placement:"top"},{default:I(()=>[A(v,null,{default:I(()=>{var w,h,p;return[te("div",null,Q(c.assigneeName)+" 开始处理 ["+Q(c.taskNodeName)+"] 环节 ",1),c.duration?(D(),E("div",Vt," 办理时长："+Q(c.duration),1)):G("",!0),c.type&&((w=c.comment)!=null&&w.handleComment)?(D(),E("div",Tt,Q((h=b(c.type))==null?void 0:h.label)+"意见："+Q((p=c.comment)==null?void 0:p.handleComment),1)):G("",!0)]}),_:2},1024)]),_:2},1032,["timestamp"]))),128))]),_:1})):(D(),S(i,{key:1}))],64)):G("",!0)])],64)}}});const $t=fe(Lt,[["__scopeId","data-v-30f9b6f7"]]),Ot={FlowDesign:{},FormDesign:{},FlowForm:Nt,request:{},tabs:[{label:"审批表单",prop:"formTab",component:Dt},{label:"附件资料",prop:"fileTab",component:Ct},{label:"流程跟踪",prop:"trackTab",component:$t}],useFlowFormOptions:{type:"drawer",window:["","flow-form","left=0,top=0,width=1600,height=900"],overlay:{width:"80%",size:"80%",top:"100px",fullscreen:!0,destroyOnClose:!0}},tableOption:{align:"center",border:!0,card:!0,stripe:!0,searchMenuSpan:6,span:24},upload:{props:{fileName:"fileOriginalName",fileType:"fileType",fileSize:"fileSize",fileUrl:"fileUrl",res:"res.data"}}};function Ut(e){const t={list:"/sapier-flow/flow-user-common/list",save:"/sapier-flow/flow-user-common/save",update:"/sapier-flow/flow-user-common/update",remove:"/sapier-flow/flow-user-common/remove",batchUpdate:"/sapier-flow/flow-user-common/batchUpdate"},o=b=>e.get(t.list,{params:{type:b,ascs:"sort"}});return{url:t,getList:o,useList:b=>Y(()=>o(b.value),{res:"data.records",modify:!1,refreshDeps:[b]}),create:b=>e.post(t.save,b),update:b=>e.post(t.update,b),remove:b=>e.post(t.remove,{},{params:{ids:b}}),batchUpdate:b=>e.post(t.batchUpdate,b)}}var Se=(e=>(e.默认="default",e.主要="primary",e.成功="success",e.警告="warning",e.危险="danger",e.信息="info",e.文字="text",e))(Se||{}),xt=(e=>(e.保存草稿="flow_draft",e.发送="flow_pass",e.退回="flow_reject",e.终止="flow_terminate",e.撤销="flow_revoke",e.撤回到发起="flow_withdraw",e.打印="flow_print",e.转办="flow_transfer",e.加签="flow_add_instance",e.减签="flow_del_instance",e.指定回退="flow_rollback",e.绿色通道="flow_green",e))(xt||{}),ve=(e=>(e.显示="true",e.隐藏="false",e.发起人="startUser",e.处理人="assignee",e.已办="done",e.待办="todo",e.已办结="finished",e.未办结="unfinished",e.已发起="started",e.未发起="notstarted",e))(ve||{}),be=(e=>(e.不显示="false",e.指定节点="specifyNode",e.审批人="assignee",e.传阅人="circulate",e.意见="comment",e))(be||{}),Ae=(e=>(e[e.禁用=0]="禁用",e[e.正常=1]="正常",e))(Ae||{});function Pe(e){const t={list:"/sapier-flow/dev-button/list",save:"/sapier-flow/dev-button/save",update:"/sapier-flow/dev-button/update",remove:"/sapier-flow/dev-button/remove"},o=r=>e.get(t.list,{params:r}),s=Y(o,{res:"data.records",defaultParams:[{size:-1,ascs:"sort",status:1}]});return{url:t,getList:o,useList:s,create:r=>e.post(t.save,r),update:r=>e.post(t.update,r),remove:r=>e.post(t.remove,{},{params:{ids:r}})}}function St(e){const t={list:"/sapier-flow/flow-file/list",save:"/sapier-flow/flow-file/save",remove:"/sapier-flow/flow-file/remove"},o=m=>e.get(t.list,{params:m}),s=Y(o,{res:"data"});return{getList:o,useList:s,create:m=>e.post(t.save,m),remove:m=>e.post(t.remove,{},{params:{ids:m}})}}function _e(e){const t={list:"/sapier-flow/flow-param/list",save:"/sapier-flow/flow-param/save",update:"/sapier-flow/flow-param/update",remove:"/sapier-flow/flow-param/remove",all:"/sapier-flow/flow-param/getAllParam",key:"/sapier-flow/flow-param/getParam"},o=l=>e.get(t.list,{params:l}),s=()=>e.get(t.all),y=l=>e.get(t.key,{params:{paramKey:l}});return{url:t,getList:o,getAllParam:s,getParam:y,useParam:l=>Y(y,{res:"data",modify:!1,defaultParams:[l]}),create:l=>e.post(t.save,l),update:l=>e.post(t.update,l),remove:l=>e.post(t.remove,{},{params:{ids:l}})}}var ue=(e=>(e[e.已办=1]="已办",e[e.待办=2]="待办",e[e.失败=3]="失败",e[e.撤销=4]="撤销",e[e.终止=5]="终止",e))(ue||{}),de=(e=>(e[e.已办结=1]="已办结",e[e.未办结=2]="未办结",e[e.已终止=3]="已终止",e))(de||{}),At=(e=>(e[e.系统执行=1]="系统执行",e[e.用户办理=2]="用户办理",e[e.任务撤销=3]="任务撤销",e[e.任务退回=4]="任务退回",e[e.流程终止=5]="流程终止",e[e.任务转办=6]="任务转办",e[e.绿色通道=7]="绿色通道",e))(At||{});function ye(e){const t={publishList:"/sapier-flow/flow-run/queryPublishFlowList",taskList:"/sapier-flow/flow-run/userTaskList",detail:"/sapier-flow/flow-run/queryPublishFlowDetail",approvalNode:"/sapier-flow/flow-run/queryApprovalNode",start:"/sapier-flow/flow-run/startProcess",commit:"/sapier-flow/flow-run/commitTask",draft:"/sapier-flow/flow-run/saveDraft",revoke:"/sapier-flow/flow-run/revokeTask",terminate:"/sapier-flow/flow-run/terminateFlow",withdraw:"/sapier-flow/flow-run/withdrawToStart",transfer:"/sapier-flow/flow-run/transferTask",reject:"/sapier-flow/flow-run/rollbackTask",green:"/sapier-flow/flow-run/greenTask"},o=i=>e.get(t.detail,{params:i}),s=i=>e.post(t.approvalNode,i),y=i=>e.post(t.start,i),u=i=>e.post(t.commit,i),m=i=>e.post(t.draft,i),r=i=>e.post(t.revoke,i),b=i=>e.post(t.terminate,i),l=i=>e.post(t.withdraw,i),k=i=>e.post(t.transfer,i),g=i=>e.post(t.reject,i),a=i=>e.post(t.green,i),f=i=>e.get(t.publishList,{params:i}),v=Y(f,{res:"data",defaultParams:[{ascs:"sort"}]}),O=i=>e.get(t.taskList,{params:i}),P=Y(O,{res:"data.records"});return{url:t,getFlowDetail:o,getApprovalNode:s,startTask:y,commitTask:u,saveDraft:m,revokeTask:r,terminateTask:b,withdrawTask:l,transferTask:k,rejectTask:g,greenChannel:a,getPublishList:f,usePublishList:v,getTaskList:O,useTaskList:P}}function Pt(e){const t={tree:"/sapier-flow/flow-user/tree"},o=y=>e.get(t.tree,{params:{filter:y}}),s=Y(o,{res:"data"});return{url:t,getUserTree:o,useUserTree:s}}var we=(e=>(e.ASSIGN_ID="ASSIGN_ID",e.ASSIGN_UUID="ASSIGN_UUID",e.AUTO="AUTO",e.INPUT="INPUT",e.NONE="NONE",e))(we||{}),ge=(e=>(e.bigint="bigint",e.blob="blob",e.char="char",e.date="date",e.datetime="datetime",e.decimal="decimal",e.double="double",e.enum="enum",e.float="float",e.int="int",e.longblob="longblob",e.longtext="longtext",e.mediumblob="mediumblob",e.mediumint="mediumint",e.mediumtext="mediumtext",e.set="set",e.smallint="smallint",e.text="text",e.time="time",e.timestamp="timestamp",e.tinyblob="tinyblob",e.tinyint="tinyint",e.tinytext="tinytext",e.varbinary="varbinary",e.varchar="varchar",e.year="year",e))(ge||{});function pa(e){const t={list:"/sapier-flow/dev-table/list",save:"/sapier-flow/dev-table/save",update:"/sapier-flow/dev-table/update",remove:"/sapier-flow/dev-table/remove",deploy:"/sapier-flow/dev-table/deploy",getFields:"/sapier-flow/dev-table/getTableFields"},o=l=>e.get(t.list,{params:l}),s=Y(o,{res:"data.records",defaultParams:[{size:-1}]});return{url:t,getList:o,useList:s,create:l=>e.post(t.save,l),update:l=>e.post(t.update,l),remove:l=>e.post(t.remove,{},{params:{ids:l}}),deploy:l=>e.post(t.deploy,l),getFields:l=>e.get(t.getFields,{params:l})}}var Ke=(e=>(e[e.否=0]="否",e[e.是=1]="是",e))(Ke||{});const se=J(Ke),da=J(ge),ma=J(we),fa=[{label:"审批",value:"userTask"},{label:"传阅",value:"circulateTask"}],je={menuBtn:!1,span:24,column:[{label:"流程名称",prop:"flowName",rules:[{required:!0,message:"请输入流程名称"}]},{label:"流程标识",prop:"flowKey",editDisabled:!0,rules:[{required:!0,message:"请输入流程标识"}]},{label:"流程分类",prop:"categoryId",type:"select",dicUrl:"/sapier-flow/flow-category/list",dicQuery:{size:-1,ascs:"sort"},props:{label:"name",value:"id"}},{label:"流程图标",prop:"flowIcon",component:"icon-select"},{label:"流程描述",prop:"remarks"},{label:"自定义表单",prop:"formPath"},{label:"关联表",prop:"formDataTable",type:"select",filterable:!0,allowCreate:!0,defaultFirstOption:!0,dicUrl:"/sapier-flow/dev-table/list",dicQuery:{size:-1},props:{label:"tableComment",value:"tableName",desc:"tableName",res:"data.records"}},{label:"排序",prop:"sort",type:"number",width:110},{label:"表单设计",prop:"formOption",display:!1,hide:!0},{label:"模型设计",prop:"flowData",display:!1,hide:!0}]},Kt=Ie(pt(Ot));function Z(e){return dt(Kt,e)}const va=q({rowKey:"id",labelWidth:150,column:[{label:"按钮名称",prop:"name",search:!0},{label:"按钮标识",prop:"buttonKey",search:!0},{label:"按钮图标",prop:"icon",component:"icon-select"},{label:"按钮类型",prop:"buttonType",type:"select",dicData:J(Se)},{label:"默认显示条件",prop:"display",type:"select",multiple:!0,dataType:"string",value:"false",dicData:J(ve),tip:"选择多个时,所有条件都满足才显示",labelTip:`显示: 始终显示，或运算条件;<br/>隐藏: 始终隐藏，与运算条件;<br/>
      发起人: 用户为发起人时显示，与运算条件;<br/>处理人: 用户为处理人时显示，与运算条件;<br/>
      已办: 任务状态为已办时显示，与运算条件;<br/>待办: 任务状态为待办时显示，与运算条件;<br/>
      已办结: 流程已办结时显示，与运算条件;<br/>未办结: 流程未办结时显示，与运算条件;<br/>
      已发起: 流程已发起时显示，与运算条件;<br/>未发起: 流程未发起时显示，或运算条件;`},{label:"默认审批窗口显示",prop:"approval",type:"select",multiple:!0,dataType:"string",value:"false",dicData:J(be),labelTip:`不显示: 不显示审批窗口;<br/>指定节点: 显示指定节点选择框(常用于绿色通道等);<br/>
      审批人: 显示审批人选择框;<br/>传阅人: 显示传阅人选择框;<br/>意见: 显示意见输入框;`},{label:"默认是否校验",prop:"validate",type:"switch",value:1,dicData:se,labelTip:"是: 点击按钮时先执行每个tab的校验;<br/>否: 点击按钮不执行校验;"},{label:"备注",prop:"remarks",overHidden:!0},{label:"排序",prop:"sort",type:"number",value:0},{label:"状态",prop:"status",type:"switch",value:1,dicData:J(Ae)},{label:"按钮预览",prop:"buttonPreview",width:150}]}),ba=q({rowKey:"flowModuleId",dialogFullscreen:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuWidth:100,menuType:"menu",menuBtnTitle:"操作",column:[...je.column.map((e,t)=>({...e,search:t<2})),{label:"流程主版本",prop:"mainVersion",formatter(e,t){return t?`V${t||""}`:""}}]}),_a=q({rowKey:"flowDeloyId",dialogFullscreen:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuWidth:100,menuType:"menu",menuBtnTitle:"操作",column:[...je.column,{prop:"sort",hide:!0},{label:"流程版本",prop:"version",formatter(e,t){return t?`V${t||""}`:""}},{label:"是否主版本",prop:"mainVersion",type:"select",dicData:[{label:"否",value:0},{label:"是",value:1}]}]}),ya=q({rowKey:"id",menu:!1,addBtn:!1,column:[{label:"流程名称",prop:"flowName"},{label:"流程标识",prop:"flowKey"},{label:"流程分类",prop:"categoryId",type:"select",search:!0,dicUrl:"/sapier-flow/flow-category/list",props:{label:"name",value:"id"}},{label:"标题",prop:"processTitle",search:!0},{label:"流水号",prop:"serialNumber"},{label:"当前节点",prop:"taskNodeName"},{label:"审批人",prop:"assigneeName"},{label:"申请人",prop:"applyUserName"},{label:"接收时间",prop:"startTime"},{label:"状态",prop:"status",type:"select",search:!0,searchValue:ue.待办,dicUrl:"/sapier-flow/flow-param/getParam",dicQuery:{paramKey:"flow.task.status"}}]}),wa=q({rowKey:"id",column:[{label:"配置名称",prop:"paramName",search:!0},{label:"配置Key",prop:"paramKey",search:!0},{label:"备注",prop:"remark"},{label:"系统内置",prop:"paramType",type:"switch",dicData:se},{label:"配置值",prop:"paramValue",type:"textarea",maxRows:20,span:24,overHidden:!0}]});const ga=q({rowKey:"id",column:[{label:"流程标识",prop:"flowKey",search:!0},{label:"流程名称",prop:"flowName",search:!0},{label:"流程备注",prop:"remarks"},{label:"排序",prop:"sort"}]}),jt={key:0,class:"flow-viewer"},zt={key:0,class:"flow-status-legend"},Bt={class:"legend-text"},Rt=H({__name:"FlowDesignWrapper",props:{modelValue:{},view:{type:Boolean},flowFormOption:{},flowHistory:{},showLegend:{type:Boolean}},emits:["update:modelValue","nodeClick"],setup(e,{emit:t}){const o=e,s=t,y=Ze();at(y,()=>{var p;(p=y.value)==null||p.on("node:click",T=>s("nodeClick",T))});const u=z({get(){let p=ct();return typeof o.modelValue=="string"&&o.modelValue?p=JSON.parse(o.modelValue):typeof o.modelValue=="object"&&Object.keys(o.modelValue)&&(p=o.modelValue),p},set(p){s("update:modelValue",JSON.stringify(p))}}),m=z(()=>{const{column:p=[],group:T=[]}=JSON.parse(o.flowFormOption||"{}");return[...p,...T.map(U=>U.column??[]).flat()]}),{FlowDesign:r,tabs:b,request:l}=Z(),k=z(()=>(b==null?void 0:b.map(p=>({...p,display:p.display??!0})))??[]),g=z(()=>!o.view),{data:a}=Pe(l).useList({ready:g}),{useUserTree:f}=Pt(l),{data:v}=f({ready:g}),{data:O}=f({ready:g,defaultParams:["dept"]}),{data:P}=f({ready:g,defaultParams:["post"]}),{useParam:i}=_e(l),{data:x}=i("flow.trends.user");function V(p){return $e(p,T=>({...T,label:T.title,value:T.id}))}const d=z(()=>({formPropertyList:[...m.value,...k.value],buttonList:a.value,fieldsDic:m.value.map(p=>({label:p.label,value:`\${${p.prop}}`,desc:`\${${p.prop}}`})),flowButtonDisplayDic:J(ve),flowButtonApprovalDic:J(be),flowButtonValidateDic:se.map(p=>({...p,label:""})),flowAssigneeUserDic:V(v.value??[]),flowAssigneeDeptDic:V(O.value??[]),flowAssigneePostDic:V(P.value??[]),flowAssigneeDynamicDic:x.value})),{data:c}=i("flow.task.status"),w=z(()=>{var p;return(p=o.flowHistory)==null?void 0:p.map(T=>{var U,N;const C=(N=(U=c.value)==null?void 0:U.find(n=>n.value===T.status))==null?void 0:N.style;return{id:T.taskNodeKey,style:C}})}),h=z(()=>{var p,T;return(T=(p=o.flowHistory)==null?void 0:p.filter(C=>C.taskNodeType==="userTask"))==null?void 0:T.map(C=>{var U;return{id:C.taskNodeKey,content:`<div>${C.assigneeName}</div>
        <div>${C.endTime??""}</div>
        <div>${((U=C.comment)==null?void 0:U.handleComment)??""}</div>`}})});return(p,T)=>p.view?(D(),E("div",jt,[p.showLegend!==!1?(D(),E("div",zt,[(D(!0),E(X,null,oe(_(c),C=>{var U;return D(),E("div",{key:C.label,class:"legend-item"},[te("div",{class:"legend-color",style:Xe({backgroundColor:(U=C.style)==null?void 0:U.fill})},null,4),te("span",Bt,Q(C.label),1)])}),128))])):G("",!0),A(_(r),{lf:y.value,"onUpdate:lf":T[0]||(T[0]=C=>y.value=C),"model-value":u.value,styles:w.value,tooltips:h.value,type:"viewer"},null,8,["lf","model-value","styles","tooltips"])])):(D(),S(_(r),{key:1,modelValue:u.value,"onUpdate:modelValue":T[1]||(T[1]=C=>u.value=C),"form-options":_(nt),"data-options":d.value,"form-width":"30%"},null,8,["modelValue","form-options","data-options"]))}});const ze=fe(Rt,[["__scopeId","data-v-34a13d90"]]),ka=q({rowKey:"id",column:[{label:"表单标识",prop:"formKey",search:!0},{label:"表单名称",prop:"formName",search:!0},{label:"表单备注",prop:"remarks"},{label:"排序",prop:"sort",type:"number"}]}),Ce=[{label:"字段名称",prop:"name"},{label:"字段备注",prop:"comment"},{label:"字段类型",prop:"type",type:"select",filterable:!0,allowCreate:!0,defaultFirstOption:!0,dicData:J(ge)},{label:"字段长度",prop:"size",type:"number"},{label:"小数位",prop:"point",type:"number"},{label:"默认值",prop:"default"},{label:"是否主键",prop:"primary",type:"switch",dicData:se,value:0},{label:"是否允许为空",prop:"permitNull",type:"switch",dicData:se,value:1}],ha=q({rowKey:"id",dialogFullscreen:!0,column:[{label:"表名",prop:"tableName",search:!0},{label:"表注释",prop:"tableComment",search:!0},{label:"表引擎",prop:"tableEngine"},{label:"表主键策略",prop:"tablePrimary",type:"select",filterable:!0,allowCreate:!0,defaultFirstOption:!0,dicData:J(we)},{label:"数据库字段",prop:"editFields",hide:!0,type:"dynamic",children:{column:Ce}},{label:"默认字段",prop:"defaultFields",hide:!0,type:"dynamic",children:{addBtn:!1,delBtn:!1,column:Ce}}]});function Be(e){return new Promise((t,o)=>{_(e).validate((y,u,m)=>{y?(u(),t(m)):o(m)})})}function F(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}export{F as $,Pt as A,we as B,Ot as C,ge as D,q as E,ze as F,se as G,At as H,da as I,ma as J,kt as K,De as L,Ne as M,yt as N,$t as O,Dt as P,Ct as Q,mt as R,he as S,ue as T,Ue as U,vt as V,Ke as W,bt as X,xe as Y,_t as Z,Nt as _,ft as a,Be as b,Z as c,Pe as d,ba as e,_a as f,pa as g,je as h,ya as i,fa as j,wa as k,_e as l,ye as m,ga as n,ka as o,ha as p,Ut as q,Se as r,xt as s,va as t,ae as u,ve as v,be as w,Ae as x,St as y,de as z};
