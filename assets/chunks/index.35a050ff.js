import{c7 as $e,bw as J,cj as Q,bx as re,ck as Ie,cl as Ne}from"../composables_use-crud_index.md.38e8e247.js";import{_ as Oe,a5 as me,a4 as Ue,a7 as Me,a8 as Fe}from"./index.vue_vue_type_script_setup_true_lang.fba15f47.js";import{f as R,c as te,D as f,h as _,A as C,u as r,af as q,r as V,i as j,G as i,B as o,k as D,aq as Z,ar as ee,F as G,b as X,w as ve,aI as _e,z as H,t as A,C as T,L as oe,a1 as we,n as z,al as Be,d as Ke,j as Se}from"./framework.6c76c79f.js";import{r as Le}from"./axios.0cb3e3db.js";import{a as Te,_ as Re}from"./index.vue_vue_type_script_setup_true_lang.c8349e11.js";import{d as Ee}from"./data.ee8ef805.js";import{a as Pe}from"../flow-design_flow-modeler_index.md.5ac41c23.js";import{d as le}from"./theme.22e7a177.js";import{eF as je}from"../app.c503673f.js";import"./vue.runtime.esm-bundler.1bbfb900.js";import"../components_basic-container_index.md.c2902401.js";import"../components_icon-select_index.md.5999308f.js";import"../components_index.md.43b501f2.js";import"../components_v-text_index.md.7d48616e.js";import"../composables_index.md.597fdd4c.js";import"../eslint-config_index.md.4cfe78e4.js";import"../flow-design_flow-viewer_index.md.dfcca5c1.js";import"../flow-design_index.md.3941a9f8.js";import"../flow-pages_flow-manage_index.md.9fb56950.js";import"../flow-pages_flow-ops_index.md.ccbcfe05.js";import"../flow-pages_flow-template_index.md.91ba6131.js";import"../flow-pages_form-template_index.md.6956dabe.js";import"../flow-pages_index.md.8878ab87.js";import"../flow-pages_workbench_index.md.7ca76f06.js";import"../form-design_demo.md.c49a3eb1.js";import"../form-design_index.md.454afd6f.js";import"../guide_changelog.md.c778465a.js";import"../guide_start.md.af46786e.js";import"../index.md.86a560ec.js";import"../plugins_avue-patch_index.md.24b1b518.js";import"../plugins_env-dts_index.md.bfb63ee5.js";import"../plugins_index.md.f143dffe.js";import"../plugins_load-proxy_index.md.37974852.js";import"../plugins_uni-ui-patch_index.md.9d0386e8.js";import"../plugins_uview-patch_index.md.4541b0e0.js";import"../prettier-config_index.md.5a7d4d11.js";import"../types_avue_index.md.bdb5e61c.js";import"../utils_date_dateFormat.md.95a0ccc9.js";import"../utils_date_durationFormat.md.4812386a.js";import"../utils_emitter_mittAsync.md.06e446b4.js";import"../utils_file_downloadFile.md.443e622e.js";import"../utils_file_getFileName.md.07f04ee5.js";import"../utils_index.md.070bbed1.js";import"../utils_math_index.md.fa407fa4.js";import"../utils_object_filterObj.md.3ea17155.js";import"../utils_object_filterObjDeep.md.6105a7f1.js";import"../utils_object_getDataType.md.af302376.js";import"../utils_string_deserialize.md.df3c79a3.js";import"../utils_string_serialize.md.52ada63d.js";import"../utils_string_uuid.md.3777921e.js";import"../utils_tool_awaitTo.md.3e8c5a8a.js";import"../utils_tool_sleep.md.24e74816.js";import"../utils_tree_buildTree.md.c49d7f11.js";import"../utils_tree_filterTree.md.10578652.js";import"../utils_tree_findTree.md.a798ca70.js";import"../utils_tree_flatTree.md.1269767c.js";import"../utils_tree_treeMap.md.a3a60c1c.js";const qe={rowKey:"id",align:"center",index:!0,border:!0,stripe:!0,searchMenuSpan:4,span:24,column:[{label:"表单标识",prop:"formKey"},{label:"表单名称",prop:"formName"},{label:"表单配置",prop:"formOption",display:!1},{label:"表单备注",prop:"remarks"},{label:"排序",prop:"sort",type:"number"}]},se=R({__name:"index",props:{modelValue:null,view:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:p}){const m=e,n=te({get(){return m.modelValue?me(m.modelValue):{menuBtn:!1,span:24}},set(t){p("update:modelValue",Ue(t,{useJson5:!1}))}});return(t,l)=>{const u=f("avue-form");return e.view?(_(),C(u,{key:0,modelValue:{},option:r(n)},null,8,["option"])):(_(),C(r(Oe),{key:1,modelValue:r(n),"onUpdate:modelValue":l[0]||(l[0]=a=>q(n)?n.value=a:null)},null,8,["modelValue"]))}}});var Ae=Le();const Ge=$e(Ae),x=Ge.create();x.interceptors.response.use(e=>{const p=e.data;return p.code!==200&&J.error(p.msg),p});function ye(e){return x.get("/sapier-flow/dev-form/list",{params:e})}function We(e){return x.post("/sapier-flow/dev-form/submit",e)}function ze(e){return x.post("/sapier-flow/dev-form/submit",e)}function Je(e){return x.post("/sapier-flow/dev-form/remove",{},{params:{ids:e}})}const He=R({__name:"index",setup(e){const p={rowKey:"id",getList:ye,create:We,update:ze,remove:Je},{bindVal:m,crudStateRefs:{formData:n},getDataList:t,handleUpdate:l}=Q({crudOption:p,tableOption:qe,mockCache:"form-template"});t();const u=V(!1);async function a(c){n.value={...c},u.value=!0}async function g(){await l(n.value,NaN,()=>u.value=!1,()=>{})}return(c,d)=>{const w=f("el-button"),O=f("avue-crud"),y=f("el-dialog");return _(),j(G,null,[i(O,Z(ee(r(m))),{formOption:o(({row:s})=>[i(w,{type:"primary",text:"",icon:"el-icon-crop",onClick:v=>a(s)},{default:o(()=>[D("设计")]),_:2},1032,["onClick"])]),_:1},16),i(y,{modelValue:u.value,"onUpdate:modelValue":d[2]||(d[2]=s=>u.value=s),title:`表单设计-${r(n).formName}`,fullscreen:"","destroy-on-close":""},{footer:o(()=>[i(w,{type:"primary",onClick:g},{default:o(()=>[D("保存")]),_:1}),i(w,{onClick:d[1]||(d[1]=s=>u.value=!1)},{default:o(()=>[D("取消")]),_:1})]),default:o(()=>[i(se,{modelValue:r(n).formOption,"onUpdate:modelValue":d[0]||(d[0]=s=>r(n).formOption=s),style:{height:"calc(100vh - 177px)"}},null,8,["modelValue"])]),_:1},8,["modelValue","title"])],64)}}}),Qe={rowKey:"id",align:"center",index:!0,border:!0,stripe:!0,searchMenuSpan:4,span:24,column:[{label:"流程标识",prop:"flowKey"},{label:"流程名称",prop:"flowName"},{label:"流程模型数据",prop:"flowData",display:!1},{label:"流程备注",prop:"remarks"},{label:"排序",prop:"sort"}]},Xe=Pe,ie=R({__name:"index",props:{modelValue:null,view:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:p}){const m=e,n=te({get(){let l=Ee();return typeof m.modelValue=="string"&&m.modelValue?l=JSON.parse(m.modelValue):typeof m.modelValue=="object"&&Object.keys(m.modelValue)&&(l=m.modelValue),l},set(l){p("update:modelValue",JSON.stringify(l))}}),t=V();return X(()=>{var l,u;(l=t.value)==null||l.on("anchor:dragstart",()=>{var a;(a=t.value)==null||a.updateEditConfig({stopMoveGraph:!0})}),(u=t.value)==null||u.on("anchor:dragend",()=>{var a;(a=t.value)==null||a.updateEditConfig({stopMoveGraph:!1})})}),(l,u)=>e.view?(_(),C(r(Te),{key:0,modelValue:r(n),"onUpdate:modelValue":u[0]||(u[0]=a=>q(n)?n.value=a:null)},null,8,["modelValue"])):(_(),C(r(Re),{key:1,lf:t.value,"onUpdate:lf":u[1]||(u[1]=a=>t.value=a),modelValue:r(n),"onUpdate:modelValue":u[2]||(u[2]=a=>q(n)?n.value=a:null),formOptions:r(Xe),formWidth:"30%"},null,8,["lf","modelValue","formOptions"]))}});function ge(e){return x.get("/sapier-flow/dev-flow/list",{params:e})}function Ye(e){return x.post("/sapier-flow/dev-flow/submit",e)}function Ze(e){return x.post("/sapier-flow/dev-flow/submit",e)}function el(e){return x.post("/sapier-flow/dev-flow/remove",{},{params:{ids:e}})}const ll=R({__name:"index",setup(e){const p={rowKey:"id",getList:ge,create:Ye,update:Ze,remove:el},{bindVal:m,crudStateRefs:{formData:n},getDataList:t,handleUpdate:l}=Q({crudOption:p,tableOption:Qe,mockCache:"model-template"});t();const u=V(!1);async function a(c){n.value=c,u.value=!0}async function g(){await l(n.value,NaN,()=>u.value=!1,()=>{})}return(c,d)=>{const w=f("el-button"),O=f("avue-crud"),y=f("el-dialog");return _(),j(G,null,[i(O,Z(ee(r(m))),{flowData:o(({row:s})=>[i(w,{type:"primary",text:"",icon:"el-icon-crop",onClick:v=>a(s)},{default:o(()=>[D("设计")]),_:2},1032,["onClick"])]),_:1},16),i(y,{modelValue:u.value,"onUpdate:modelValue":d[2]||(d[2]=s=>u.value=s),title:`模型设计-${r(n).flowName}`,fullscreen:"","destroy-on-close":""},{footer:o(()=>[i(w,{type:"primary",onClick:g},{default:o(()=>[D("保存")]),_:1}),i(w,{onClick:d[1]||(d[1]=s=>u.value=!1)},{default:o(()=>[D("取消")]),_:1})]),default:o(()=>[i(ie,{modelValue:r(n).flowData,"onUpdate:modelValue":d[0]||(d[0]=s=>r(n).flowData=s),style:{height:"calc(100vh - 177px)"}},null,8,["modelValue"])]),_:1},8,["modelValue","title"])],64)}}});function ol(e){return x.get("/sapier-flow/flow-category/list",{params:e})}function tl(e){return x.post("/sapier-flow/flow-category/save",e)}function al(e){return x.post("/sapier-flow/flow-category/update",e)}function nl(e){return x.post("/sapier-flow/flow-category/remove",{},{params:{ids:e}})}const fe={defaultExpandAll:!0,props:{label:"name",value:"id"},filter:!0,formOption:{column:[{label:"分类名称",prop:"name",rules:[{required:!0,message:"请输入分类名称"}]},{label:"描述",prop:"remark"}]}},ul=R({__name:"index",emits:["node-click"],setup(e,{emit:p}){const m={rowKey:"id",getList:ol,create:tl,update:al,remove:nl,dataPath:"res.data"},{crudStateRefs:{formData:n,tableData:t},getDataList:l,handleSave:u,handleUpdate:a,handleDel:g}=Q({crudOption:m,tableOption:fe,pageOption:{pageSize:20},mockCache:"flow-category"});l();function c(O,y,s,v){u(y,s,v)}function d(O,y,s,v){a(y,NaN,s,v)}function w(O){g(O,NaN)}return(O,y)=>{const s=f("avue-tree");return _(),C(s,{modelValue:r(n),"onUpdate:modelValue":y[0]||(y[0]=v=>q(n)?n.value=v:null),option:r(fe),data:r(t),onNodeClick:y[1]||(y[1]=v=>p("node-click",v)),onSave:c,onUpdate:d,onDel:w},null,8,["modelValue","option","data"])}}}),de={menuBtn:!1,span:24,column:[{label:"流程名称",prop:"flowName",rules:[{required:!0,message:"请输入流程名称"}]},{label:"流程标识",prop:"flowKey",rules:[{required:!0,message:"请输入流程标识"}]},{label:"流程分类",prop:"groupId",type:"select",dicUrl:"/sapier-flow/flow-category/list",props:{label:"name",value:"id"}},{label:"流程图标",prop:"icon",component:"icon-select"},{label:"流程描述",prop:"remarks"}]};function rl(e){return x.get("/sapier-flow/flow-definition/list",{params:e})}function be(e){return x.get("/sapier-flow/flow-definition/detail",{params:e})}function sl(e){return x.post("/sapier-flow/flow-definition/save",e)}function il(e){return x.post("/sapier-flow/flow-definition/update",e)}function Ve(e){return x.post("/sapier-flow/flow-definition/deployFlow",e)}var ke=(e=>(e[e.否=0]="否",e[e.是=1]="是",e))(ke||{});function dl(e){return x.get("/sapier-flow/flow-deploy/list",{params:e})}function he(e){return x.get("/sapier-flow/flow-deploy/detail",{params:e})}function Ce(e){return x.post("/sapier-flow/flow-deploy/update",e)}function pl(){return x.get("/sapier-flow/flow-run/queryPublishFlowList")}function pe(e){return new Promise((p,m)=>{(q(e)?e.value:e).validate((t,l)=>{t?(l(),p(t)):m(t)})})}const cl=H("span",null,"流程设计",-1),fl={key:0},ml={key:1},vl={style:{height:"calc(100vh - 144px)"}},_l=R({__name:"index",props:{modelValue:null,visible:{type:Boolean}},emits:["close"],setup(e,{emit:p}){const n=le(e),{visible:t,modelValue:l}=n,u=["流程信息","表单设计","模型设计","完成"],a=V(!1);ve(t,async k=>{if(!k)return;const{flowModuleId:b}=l.value,{flowDeployId:F}=l.value;try{a.value=!0;let $={};F?$=await he({flowDeployId:F}):b&&($=await be({flowModuleId:b})),l.value=$.data}finally{a.value=!1}},{immediate:!0});const g=V([]),c=V([]);ye({size:-1}).then(k=>g.value=k.data.records),ge({size:-1}).then(k=>c.value=k.data.records);const d=V(0),w=te(()=>{var k,b;return d.value===1?((k=g.value)==null?void 0:k.map(F=>({label:F.formName,value:F.formOption})))??[]:d.value===2?((b=c.value)==null?void 0:b.map(F=>({label:F.flowName,value:F.flowData})))??[]:[]});function O(k){d.value===1?l.value.formOption=k.value:d.value===2&&(l.value.flowData=k.value)}const y=V();async function s(k){d.value===0&&await pe(y),a.value=!0;const{flowModuleId:b}=l.value,{flowDeployId:F}=l.value;try{F?await Ce(l.value):b?await il(l.value):await sl(l.value).then($=>{l.value.flowModuleId=$.data.flowModuleId}),J.success("保存成功")}finally{a.value=!1}typeof k=="number"?d.value=k:d.value++}async function v(){await re.confirm("发布新版本，是否确认？","提示"),a.value=!0,Ve({flowModuleId:l.value.flowModuleId}).then(()=>{J.success("发布成功")}).finally(()=>{a.value=!1})}function h(){t.value=!1,d.value=0,l.value={},p("close")}return(k,b)=>{const F=f("el-link"),$=f("el-dropdown-item"),I=f("el-dropdown-menu"),E=f("el-dropdown"),M=f("el-col"),L=f("el-step"),S=f("el-steps"),K=f("el-button"),N=f("el-row"),B=f("avue-form"),W=f("el-result"),U=f("el-dialog"),ae=_e("loading");return _(),C(U,{modelValue:r(t),"onUpdate:modelValue":b[4]||(b[4]=P=>q(t)?t.value=P:null),fullscreen:"","show-close":!1,onClose:h},{header:o(()=>[i(N,{align:"center",justify:"center"},{default:o(()=>[i(M,{span:5},{default:o(()=>{var P,Y,ne,ce;return[H("div",null,[cl,(P=r(l))!=null&&P.flowName?(_(),j("span",fl," - "+A((Y=r(l))==null?void 0:Y.flowName),1)):T("",!0),(ne=r(l))!=null&&ne.version?(_(),j("span",ml," - V"+A((ce=r(l))==null?void 0:ce.version),1)):T("",!0)]),r(w).length?(_(),C(E,{key:0},{dropdown:o(()=>[i(I,null,{default:o(()=>[(_(!0),j(G,null,oe(r(w),ue=>(_(),C($,{key:ue.label,onClick:Sl=>O(ue)},{default:o(()=>[D(A(ue.label),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:o(()=>[i(F,{icon:"el-icon-arrow-down",underline:!1},{default:o(()=>[D("选择模板")]),_:1})]),_:1})):T("",!0)]}),_:1}),i(M,{span:14},{default:o(()=>[i(S,{active:d.value,simple:"","process-status":"finish","finish-status":"success"},{default:o(()=>[(_(),j(G,null,oe(u,(P,Y)=>i(L,{key:Y,title:P,onClick:ne=>s(Y)},null,8,["title","onClick"])),64))]),_:1},8,["active"])]),_:1}),i(M,{span:5,style:{"text-align":"right"}},{default:o(()=>[i(K,{disabled:d.value===0,loading:a.value,type:"primary",onClick:b[0]||(b[0]=P=>d.value--)},{default:o(()=>[D(" 上一步 ")]),_:1},8,["disabled","loading"]),i(K,{disabled:d.value===u.length-1,type:"primary",loading:a.value,onClick:s},{default:o(()=>[D(" 下一步 ")]),_:1},8,["disabled","loading"]),i(K,{onClick:h},{default:o(()=>[D("关闭")]),_:1})]),_:1})]),_:1})]),default:o(()=>[we((_(),j("div",vl,[d.value===0?(_(),C(B,{key:0,ref_key:"formRef",ref:y,modelValue:r(l),"onUpdate:modelValue":b[1]||(b[1]=P=>q(l)?l.value=P:null),option:r(de),style:{width:"50%",magin:"0 auto"}},null,8,["modelValue","option"])):T("",!0),d.value===1?(_(),C(se,{key:1,modelValue:r(l).formOption,"onUpdate:modelValue":b[2]||(b[2]=P=>r(l).formOption=P)},null,8,["modelValue"])):T("",!0),d.value===2?(_(),C(ie,{key:2,modelValue:r(l).flowData,"onUpdate:modelValue":b[3]||(b[3]=P=>r(l).flowData=P)},null,8,["modelValue"])):T("",!0),d.value===3?(_(),C(W,{key:3,icon:"success",title:"流程设计完成"},{extra:o(()=>[r(l).flowDeployId?T("",!0):(_(),C(K,{key:0,type:"primary",onClick:v},{default:o(()=>[D("发布")]),_:1})),i(K,{onClick:h},{default:o(()=>[D("关闭")]),_:1})]),_:1})):T("",!0)])),[[ae,a.value]])]),_:1},8,["modelValue"])}}}),wl=H("span",null,"流程查看",-1),yl={key:0},gl={key:1},bl=R({__name:"index",props:{modelValue:null,visible:{type:Boolean}},setup(e){const m=le(e),{visible:n,modelValue:t}=m,l=V("form"),u=V(!1);ve(n,async g=>{if(!g)return;const{flowModuleId:c}=t.value,{flowDeployId:d}=t.value;try{u.value=!0;let w={};d?w=await he({flowDeployId:d}):c&&(w=await be({flowModuleId:c})),t.value={...w.data}}finally{u.value=!1}},{immediate:!0});function a(){t.value={},l.value="form"}return(g,c)=>{const d=f("el-tab-pane"),w=f("el-tabs"),O=f("el-dialog"),y=_e("loading");return _(),C(O,{modelValue:r(n),"onUpdate:modelValue":c[3]||(c[3]=s=>q(n)?n.value=s:null),width:"60%",top:"0",onClose:a},{header:o(()=>{var s,v,h,k;return[wl,(s=r(t))!=null&&s.flowName?(_(),j("span",yl," - "+A((v=r(t))==null?void 0:v.flowName),1)):T("",!0),(h=r(t))!=null&&h.version?(_(),j("span",gl," - V"+A((k=r(t))==null?void 0:k.version),1)):T("",!0)]}),default:o(()=>[we((_(),C(w,{modelValue:l.value,"onUpdate:modelValue":c[2]||(c[2]=s=>l.value=s)},{default:o(()=>[i(d,{label:"查看表单",name:"form",style:{height:"600px","overflow-y":"auto"}},{default:o(()=>[l.value==="form"&&r(t).formOption?(_(),C(se,{key:0,ref:"formRef",modelValue:r(t).formOption,"onUpdate:modelValue":c[0]||(c[0]=s=>r(t).formOption=s),view:""},null,8,["modelValue"])):T("",!0)]),_:1}),i(d,{label:"查看流程",name:"flow",style:{height:"600px"}},{default:o(()=>[l.value==="flow"?(_(),C(ie,{key:0,modelValue:r(t).flowData,"onUpdate:modelValue":c[1]||(c[1]=s=>r(t).flowData=s),view:""},null,8,["modelValue"])):T("",!0)]),_:1})]),_:1},8,["modelValue"])),[[y,u.value]])]),_:1},8,["modelValue"])}}}),Vl={rowKey:"flowModuleId",align:"center",index:!0,border:!0,stripe:!0,searchMenuSpan:4,tabs:!0,dialogFullscreen:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuWidth:300,column:[...de.column,{label:"流程主版本",prop:"mainVersion",formatter(e,p){return p?`V${p||""}`:""}}]},kl=R({__name:"index",props:{groupId:null},emits:["add","view","edit","version"],setup(e,{emit:p}){const m=e,n={rowKey:"flowModuleId",getList:rl},{bindVal:t,crudStateRefs:{searchForm:l},getDataList:u}=Q({crudOption:n,tableOption:Vl,searchForm:{groupId:m.groupId}});X(()=>{l.value.groupId=m.groupId??"",u()});const a=V(!1);async function g(c){await re.confirm("发布新版本，是否确认？","提示",{type:"success"}),a.value=!0,Ve({flowModuleId:c.flowModuleId}).then(()=>{J.success("部署成功"),u()}).finally(()=>{a.value=!1})}return(c,d)=>{const w=f("el-button"),O=f("avue-crud");return _(),C(O,Z(ee(r(t))),{"menu-left":o(()=>[i(w,{type:"primary",icon:"el-icon-plus",onClick:d[0]||(d[0]=y=>p("add"))},{default:o(()=>[D("新增")]),_:1})]),menu:o(({row:y})=>[i(w,{loading:a.value,type:"text",icon:"el-icon-view",onClick:s=>p("view",y)},{default:o(()=>[D(" 查看 ")]),_:2},1032,["loading","onClick"]),i(w,{loading:a.value,type:"text",icon:"el-icon-edit",onClick:s=>p("edit",y)},{default:o(()=>[D(" 编辑 ")]),_:2},1032,["loading","onClick"]),i(w,{loading:a.value,type:"text",icon:"el-icon-upload",onClick:s=>g(y)},{default:o(()=>[D(" 发布 ")]),_:2},1032,["loading","onClick"]),i(w,{loading:a.value,type:"text",icon:"el-icon-switch",onClick:s=>p("version",y)},{default:o(()=>[D(" 版本管理 ")]),_:2},1032,["loading","onClick"])]),_:1},16)}}}),hl={rowKey:"flowDeloyId",align:"center",index:!0,border:!0,stripe:!0,searchMenuSpan:4,tabs:!0,dialogFullscreen:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuWidth:250,column:[...de.column,{label:"流程版本",prop:"version",formatter(e,p){return p?`V${p||""}`:""}},{label:"是否主版本",prop:"mainVersion",type:"select",dicData:[{label:"否",value:0},{label:"是",value:1}]}]},Cl=R({__name:"index",props:{flowModuleId:null},emits:["back","view","edit"],setup(e,{emit:p}){const m=e,n={rowKey:"flowDeloyId",getList:dl,dataPath:"res.data"},{bindVal:t,crudStateRefs:{searchForm:l},getDataList:u}=Q({crudOption:n,tableOption:hl});X(()=>{m.flowModuleId&&(l.value.flowModuleId=m.flowModuleId,u())});const a=V(!1);async function g(c){await re.confirm(`确定将 ${c.flowName}(${c.flowKey}:v${c.version}) 设为主版本?`,"提示",{type:"warning"}),a.value=!0,Ce({flowDeployId:c.flowDeployId,flowModuleId:c.flowModuleId,mainVersion:1}).then(()=>{J.success("设置成功"),u()}).finally(()=>{a.value=!1})}return(c,d)=>{const w=f("el-button"),O=f("avue-crud");return _(),C(O,Z(ee(r(t))),{"menu-left":o(()=>[i(w,{loading:a.value,type:"primary",icon:"el-icon-arrow-left",onClick:d[0]||(d[0]=y=>p("back"))},{default:o(()=>[D("返回")]),_:1},8,["loading"])]),menu:o(({row:y})=>[i(w,{loading:a.value,type:"text",icon:"el-icon-view",onClick:s=>p("view",y)},{default:o(()=>[D(" 查看 ")]),_:2},1032,["loading","onClick"]),i(w,{loading:a.value,type:"text",icon:"el-icon-edit",onClick:s=>p("edit",y)},{default:o(()=>[D(" 编辑 ")]),_:2},1032,["loading","onClick"]),i(w,{loading:a.value,disabled:y.mainVersion===r(ke).是,type:"text",icon:"el-icon-switch",onClick:s=>g(y)},{default:o(()=>[D(" 设为主版本 ")]),_:2},1032,["loading","disabled","onClick"])]),_:1},16)}}}),Dl=R({__name:"index",setup(e){const p=V("definition"),m=V({}),n=V(""),t=V("");function l(s){n.value===s.id?n.value="":n.value=s.id}const u=V(!1),a=V(!1);function g(){m.value={},u.value=!0}function c(s){m.value=s,u.value=!0}function d(s){m.value=s,a.value=!0}function w(s){t.value=s.flowModuleId||"",p.value="deploy"}function O(){t.value="",p.value="definition"}async function y(){const s=p.value;await z(),p.value="",await z(),p.value=s+""}return(s,v)=>{const h=f("el-col"),k=f("el-row");return _(),C(k,{gutter:20},{default:o(()=>[i(h,{span:4},{default:o(()=>[i(ul,{onNodeClick:l})]),_:1}),i(h,{span:20},{default:o(()=>[p.value==="definition"?(_(),C(kl,{key:0,groupId:n.value,onAdd:g,onEdit:c,onView:d,onVersion:w},null,8,["groupId"])):T("",!0),p.value==="deploy"?(_(),C(Cl,{key:1,flowModuleId:t.value,onEdit:c,onView:d,onBack:O},null,8,["flowModuleId"])):T("",!0),i(_l,{modelValue:m.value,"onUpdate:modelValue":v[0]||(v[0]=b=>m.value=b),visible:u.value,"onUpdate:visible":v[1]||(v[1]=b=>u.value=b),onClose:y},null,8,["modelValue","visible"]),i(bl,{modelValue:m.value,"onUpdate:modelValue":v[2]||(v[2]=b=>m.value=b),visible:a.value,"onUpdate:visible":v[3]||(v[3]=b=>a.value=b)},null,8,["modelValue","visible"])]),_:1})]),_:1})}}});var De=(e=>(e[e.已办=1]="已办",e[e.待办=2]="待办",e))(De||{});function xl(e){return x.get("/sapier-flow/flow-ops/list",{params:e})}const $l={rowKey:"id",align:"center",index:!0,border:!0,stripe:!0,searchMenuSpan:4,menu:!1,column:[{label:"流程名称",prop:"flowName"},{label:"流程标识",prop:"flowKey"},{label:"流程分类",prop:"groupId"},{label:"标题",prop:"processTitle"},{label:"流水号",prop:"serialNumber"},{label:"当前节点",prop:"taskNodeName"},{label:"审批人",prop:"assigneeName"},{label:"申请人",prop:"applyUserName"},{label:"接收时间",prop:"createTime"},{label:"任务状态",prop:"status",type:"select",dicData:Ie(De)}]};function Il(e){return x.get("/sapier-flow/flow-run/queryPublishFlowDetail",{params:e})}function Nl(e){return x.post("/sapier-flow/flow-run/startProcess",e)}function Ol(e){return x.post("/sapier-flow/flow-run/commitTask",e)}function Ul(e){return x.post("/sapier-flow/flow-run/queryApprovalNode",e)}const Ml=R({props:{modelValue:{type:Object,default:()=>({})},flowDetail:{type:Object,default:()=>({})},detail:{type:Boolean}},setup(e){const{modelValue:p}=le(e,void 0,{passive:!0,deep:!0}),m=V({}),{proxy:n}=Ke(),t=V({});X(()=>{const{formOption:a}=e.flowDetail.process??{};t.value=me.bind(n)(a||'{"menuBtn":false}'),t.value.detail=!!e.detail});const l=V();function u(){return pe(l)}return{form:p,option:t,defaults:m,formRef:l,validate:u}},render(){return Be(f("avue-form"),{ref:"formRef",modelValue:this.form,defaults:this.defaults,option:this.option,"onUpdate:modelValue":e=>this.form=e,"onUpdate:defaults":e=>this.defaults=e})}}),Fl=R({__name:"approval-form",props:{modelValue:null,visible:{type:Boolean},variables:null,flowDetail:null},emits:["confirm"],setup(e,{emit:p}){const m=e,n={element:"ep:flag",post:"ep:share",dept:"ep:share",user:"ep:user"},t=le(m),{modelValue:l,visible:u,flowDetail:a}=t,g=V([]),c=V({approver:[],copyUser:"",comment:""}),d=V(),w=V({}),O={menuBtn:!1,labelWidth:70,column:[{label:"审批人",prop:"approver",span:24,rules:[{required:!0,validator:y}]},{label:"意见",prop:"comment",span:24,rules:[{required:!0,message:"请填写意见"}]}]};function y($,I,E){var S;const M=g.value[0].type==="ParallelGateway",L=(S=g.value[0].children)==null?void 0:S.every(K=>Me([K],N=>I.some(B=>B.id===N.id)));if(I.length){if(M&&!L)return E("请在每个节点选择审批人")}else return E("请选择审批人");return!0}const s=V(!0),v=V(!1);X(async()=>{var M,L,S;if(!u.value||!d.value)return;const{flowKey:$}=((M=a.value)==null?void 0:M.process)||{},{taskId:I}=((L=a.value)==null?void 0:L.task)||{},E=I?"":"发起";if(g.value=[],c.value={approver:[],copyUser:"",comment:l.value.comment||E},z(()=>{}),s.value){console.log("🚀 ~ file: approval-form.vue:120 ~ watchEffect ~ flowDetail:",a);const K=await Ul({flowKey:$,variables:m.variables,taskId:I});g.value=Fe(K.data??[],(B,W,U)=>{const ae=B.id||Ne();return B.taskNodeKey=(U==null?void 0:U.taskNodeKey)??B.taskNodeKey,B.incoming=(U==null?void 0:U.incoming)??B.incoming,{...B,id:ae,disabled:B.type!=="user"}}),await z();const N=h(g.value);N&&((S=k.value)==null||S.setCheckedNodes([N]))}});function h($){var I;if($.length===1)return(I=$[0].children)!=null&&I.length?h($[0].children):$[0]}const k=V();async function b($,I){var M,L;if($.type!=="user")return;await z(),await z();const E=(M=k.value)==null?void 0:M.getCheckedNodes();c.value.approver=E.filter(S=>S.type==="user"),(L=k.value)==null||L.setCheckedNodes(c.value.approver)}async function F(){await pe(d),v.value=!0;const{approver:$,copyUser:I,comment:E}=c.value,M={},L={},S=new Set;$.forEach(K=>{const{taskNodeKey:N,incoming:B}=K;M[N]||(M[N]=new Set),K.userId&&M[N].add(K.userId),L[N]=[...M[N]].join(","),S.add(B)}),l.value.assignee=L,l.value.comment=E,l.value.outgoing=[...S],console.log("🚀 ~ file: approval-form.vue:210 ~ onConfirm ~ formData:",l),p("confirm")}return($,I)=>{const E=f("el-tree"),M=f("el-col"),L=f("el-tag"),S=f("el-input"),K=f("avue-form"),N=f("el-row"),B=f("el-button"),W=f("el-dialog");return _(),C(W,{modelValue:r(u),"onUpdate:modelValue":I[4]||(I[4]=U=>q(u)?u.value=U:null),width:s.value?"800px":"500px","append-to-body":""},{footer:o(()=>[i(B,{onClick:I[3]||(I[3]=U=>u.value=!1)},{default:o(()=>[D("取 消")]),_:1}),i(B,{type:"primary",onClick:F},{default:o(()=>[D("确 定")]),_:1})]),default:o(()=>[i(N,{gutter:20},{default:o(()=>[s.value?(_(),C(M,{key:0,span:10},{default:o(()=>[i(E,{ref_key:"treeRef",ref:k,class:"approval-tree","w-full":"","h-400px":"","overflow-y-scroll":"","node-key":"id","empty-text":"无需选择审批人","default-expand-all":"","show-checkbox":"","check-on-click-node":"",data:g.value,style:{"max-height":"600px",overflow:"auto"},onCheckChange:b},{default:o(({data:U})=>[H("div",null,[i(r(je),{icon:n[U.type],style:{display:"inline-block"}},null,8,["icon"]),H("span",null,A(U.title),1)])]),_:1},8,["data"])]),_:1})):T("",!0),i(M,{span:s.value?14:24},{default:o(()=>[i(K,{ref_key:"formRef",ref:d,modelValue:c.value,"onUpdate:modelValue":I[1]||(I[1]=U=>c.value=U),defaults:w.value,"onUpdate:defaults":I[2]||(I[2]=U=>w.value=U),option:O},{approver:o(()=>[(_(!0),j(G,null,oe(c.value.approver,U=>(_(),C(L,{key:U.id,type:"info"},{default:o(()=>[D(A(U.title),1)]),_:2},1024))),128))]),copyUser:o(()=>[]),comment:o(()=>[i(S,{modelValue:c.value.comment,"onUpdate:modelValue":I[0]||(I[0]=U=>c.value.comment=U),type:"textarea"},null,8,["modelValue"])]),_:1},8,["modelValue","defaults"])]),_:1},8,["span"])]),_:1})]),_:1},8,["modelValue","width"])}}}),xe=R({__name:"index",props:{flowKey:null,taskId:null,instanceId:null,visible:{type:Boolean},flowDetail:null,modelValue:null,formOption:null,loading:{type:Boolean},activeTab:null},setup(e){const p=e,m=le(p,void 0,{passive:!0,deep:!0}),{visible:n,flowDetail:t,modelValue:l,loading:u,activeTab:a}=m;function g(v){a.value="form",t.value={},l.value={},v==null||v()}X(()=>{const{flowKey:v,taskId:h,instanceId:k}=p;!v&&!h&&!k||n.value&&(g(),u.value=!0,Il({flowKey:v,taskId:h,flowInstanceId:k}).then(b=>{t.value=b.data,l.value=b.data.formData||{}}).finally(()=>{u.value=!1}))});const c=V(!1),d=te(()=>Object.entries(l.value||{}).filter(([v])=>!v.startsWith("$")).map(([v,h])=>({key:v,value:h}))),w=V();async function O(){var v;await((v=w.value)==null?void 0:v.validate()),c.value=!0}const y=V({});async function s(){var F,$;const{flowDeployId:v}=((F=t.value)==null?void 0:F.process)??{},{taskId:h,flowInstanceId:k}=(($=t.value)==null?void 0:$.task)??{},b={flowDeployId:v,taskId:h,flowInstanceId:k,variables:d.value,...y.value};await(h&&k?Ol(b):Nl(b)),J.success("操作成功"),c.value=!1,n.value=!1}return(v,h)=>{var S,K;const k=f("el-skeleton"),b=f("el-button"),F=f("el-header"),$=f("el-tab-pane"),I=f("el-tabs"),E=f("el-main"),M=f("el-container"),L=f("el-drawer");return _(),C(L,{modelValue:r(n),"onUpdate:modelValue":h[4]||(h[4]=N=>q(n)?n.value=N:null),title:(K=(S=r(t))==null?void 0:S.process)==null?void 0:K.flowName,"destroy-on-close":"","before-close":g,size:"60%"},{default:o(()=>[r(u)?(_(),C(k,{key:0})):(_(),C(M,{key:1},{default:o(()=>[i(F,{height:"40px",style:{padding:"0"}},{default:o(()=>[i(b,{type:"primary",onClick:O},{default:o(()=>[D("发送")]),_:1})]),_:1}),i(E,{style:{padding:"0"}},{default:o(()=>[i(I,{modelValue:r(a),"onUpdate:modelValue":h[1]||(h[1]=N=>q(a)?a.value=N:null)},{default:o(()=>{var N,B;return[(B=(N=r(t))==null?void 0:N.process)!=null&&B.formPath?Se(v.$slots,"default",{key:0}):(_(),C($,{key:1,label:"审批信息",name:"form"},{default:o(()=>[i(Ml,{ref_key:"formRef",ref:w,modelValue:r(l),"onUpdate:modelValue":h[0]||(h[0]=W=>q(l)?l.value=W:null),flowDetail:r(t)},null,8,["modelValue","flowDetail"])]),_:1}))]}),_:3},8,["modelValue"])]),_:3})]),_:3})),i(Fl,{modelValue:y.value,"onUpdate:modelValue":h[2]||(h[2]=N=>y.value=N),visible:c.value,"onUpdate:visible":h[3]||(h[3]=N=>c.value=N),variables:r(d),flowDetail:r(t),onConfirm:s},null,8,["modelValue","visible","variables","flowDetail"])]),_:3},8,["modelValue","title"])}}}),Bl=R({__name:"index",setup(e){const p={rowKey:"id",getList:xl},{bindVal:m,crudStateRefs:{formData:n},getDataList:t}=Q({crudOption:p,tableOption:$l});t();const l=V(!1);async function u(a){n.value=a,l.value=!0}return(a,g)=>{const c=f("el-link"),d=f("avue-crud");return _(),j(G,null,[i(d,Z(ee(r(m))),{processTitle:o(({row:w})=>[i(c,{type:"primary",underline:!1,onClick:O=>u(w)},{default:o(()=>[D(A(w.processTitle||"无标题"),1)]),_:2},1032,["onClick"])]),_:1},16),i(xe,{visible:l.value,"onUpdate:visible":g[0]||(g[0]=w=>l.value=w),taskId:r(n).taskId,instanceId:r(n).flowInstanceId},null,8,["visible","taskId","instanceId"])],64)}}}),Kl=R({__name:"index",setup(e){const p=V([]);pl().then(l=>{p.value=l.data});const m=V(!1),n=V("");function t(l){n.value=l.flowKey,m.value=!0}return(l,u)=>{const a=f("el-button");return _(),j(G,null,[H("div",null,[(_(!0),j(G,null,oe(p.value,g=>(_(),C(a,{key:g.flowKey,type:"primary",plain:"",onClick:c=>t(g)},{default:o(()=>[D(A(g.flowName),1)]),_:2},1032,["onClick"]))),128))]),i(xe,{visible:m.value,"onUpdate:visible":u[0]||(u[0]=g=>m.value=g),flowKey:n.value},null,8,["visible","flowKey"])],64)}}}),Po={install(e){e.component("FormTemplate",He),e.component("FlowTemplate",ll),e.component("FlowManage",Dl),e.component("FlowOps",Bl),e.component("Workbench",Kl)}};export{Dl as FlowManage,Bl as FlowOps,ll as FlowTemplate,He as FormTemplate,Kl as Workbench,Po as default};
