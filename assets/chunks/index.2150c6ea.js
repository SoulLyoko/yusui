import{c7 as Ce,cj as R,bw as q,bx as ue}from"../composables_use-crud_index.md.5c097962.js";import{_ as he,a3 as ie,a2 as xe}from"./index.vue_vue_type_script_setup_true_lang.dc720c1e.js";import{f as U,c as Z,D as m,h as v,A as k,u as r,af as B,r as D,i as N,G as d,B as o,k as C,aq as A,ar as z,F as K,b as j,w as re,aI as se,z as W,t as L,C as I,L as Y,a1 as de,n as ae,al as $e,d as Ie,j as Oe}from"./framework.6c76c79f.js";import{r as Me}from"./axios.8973be50.js";import{a as Ue,_ as Ne}from"./index.vue_vue_type_script_setup_true_lang.3dd974ce.js";import{d as Be}from"./data.ee8ef805.js";import{a as Fe}from"../flow-design_flow-modeler_index.md.5ac41c23.js";import{d as G}from"./theme.22e7a177.js";import"../app.46c603bc.js";import"../components_basic-container_index.md.c2902401.js";import"../components_icon-select_index.md.5999308f.js";import"../components_index.md.43b501f2.js";import"../components_v-text_index.md.7d48616e.js";import"../composables_index.md.597fdd4c.js";import"../eslint-config_index.md.4cfe78e4.js";import"../flow-design_flow-viewer_index.md.dfcca5c1.js";import"../flow-design_index.md.3941a9f8.js";import"../flow-pages_flow-manage_index.md.9fb56950.js";import"../flow-pages_flow-template_index.md.91ba6131.js";import"../flow-pages_form-template_index.md.6956dabe.js";import"../flow-pages_index.md.8878ab87.js";import"../flow-pages_workbench_index.md.7ca76f06.js";import"../form-design_demo.md.c49a3eb1.js";import"../form-design_index.md.454afd6f.js";import"../guide_changelog.md.c778465a.js";import"../guide_start.md.af46786e.js";import"../index.md.86a560ec.js";import"../plugins_avue-patch_index.md.24b1b518.js";import"../plugins_env-dts_index.md.bfb63ee5.js";import"../plugins_index.md.f143dffe.js";import"../plugins_load-proxy_index.md.37974852.js";import"../plugins_uni-ui-patch_index.md.9d0386e8.js";import"../plugins_uview-patch_index.md.4541b0e0.js";import"../prettier-config_index.md.5a7d4d11.js";import"../types_avue_index.md.bdb5e61c.js";import"../utils_date_dateFormat.md.95a0ccc9.js";import"../utils_date_durationFormat.md.4812386a.js";import"../utils_emitter_mittAsync.md.06e446b4.js";import"../utils_file_downloadFile.md.443e622e.js";import"../utils_file_getFileName.md.07f04ee5.js";import"../utils_index.md.070bbed1.js";import"../utils_math_index.md.fa407fa4.js";import"../utils_object_filterObj.md.3ea17155.js";import"../utils_object_filterObjDeep.md.6105a7f1.js";import"../utils_object_getDataType.md.af302376.js";import"../utils_string_deserialize.md.df3c79a3.js";import"../utils_string_serialize.md.52ada63d.js";import"../utils_string_uuid.md.3777921e.js";import"../utils_tool_awaitTo.md.3e8c5a8a.js";import"../utils_tool_sleep.md.24e74816.js";import"../utils_tree_buildTree.md.c49d7f11.js";import"../utils_tree_filterTree.md.10578652.js";import"../utils_tree_findTree.md.a798ca70.js";import"../utils_tree_flatTree.md.1269767c.js";import"../utils_tree_treeMap.md.a3a60c1c.js";import"./vue.runtime.esm-bundler.e3f0d845.js";const Se={rowKey:"id",align:"center",index:!0,border:!0,stripe:!0,searchMenuSpan:4,span:24,column:[{label:"表单标识",prop:"formKey"},{label:"表单名称",prop:"formName"},{label:"表单配置",prop:"formOption",display:!1},{label:"表单备注",prop:"remarks"},{label:"排序",prop:"sort",type:"number"}]},ee=U({__name:"index",props:{modelValue:null,view:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:p}){const c=e,i=Z({get(){return c.modelValue?ie(c.modelValue):{menuBtn:!1,span:24}},set(t){p("update:modelValue",xe(t,{useJson5:!1}))}});return(t,l)=>{const u=m("avue-form");return e.view?(v(),k(u,{key:0,modelValue:{},option:r(i)},null,8,["option"])):(v(),k(r(he),{key:1,modelValue:r(i),"onUpdate:modelValue":l[0]||(l[0]=a=>B(i)?i.value=a:null)},null,8,["modelValue"]))}}});var Le=Me();const Ke=Ce(Le),h=Ke.create();h.interceptors.response.use(e=>e.data);function pe(e){return h.get("/sapier-flow/dev-form/list",{params:e})}function Te(e){return h.post("/sapier-flow/dev-form/submit",e)}function Ee(e){return h.post("/sapier-flow/dev-form/submit",e)}function Re(e){return h.post("/sapier-flow/dev-form/remove",{},{params:{ids:e}})}const je=U({__name:"index",setup(e){const p={rowKey:"id",getList:pe,create:Te,update:Ee,remove:Re},{bindVal:c,crudStateRefs:{formData:i},getDataList:t,handleUpdate:l}=R({crudOption:p,tableOption:Se,mockCache:"form-template"});t();const u=D(!1);async function a(_){i.value={..._},u.value=!0}async function b(){await l(i.value,NaN,()=>u.value=!1,()=>{})}return(_,s)=>{const w=m("el-button"),y=m("avue-crud"),f=m("el-dialog");return v(),N(K,null,[d(y,A(z(r(c))),{formOption:o(({row:n})=>[d(w,{type:"primary",text:"",icon:"el-icon-crop",onClick:g=>a(n)},{default:o(()=>[C("设计")]),_:2},1032,["onClick"])]),_:1},16),d(f,{modelValue:u.value,"onUpdate:modelValue":s[2]||(s[2]=n=>u.value=n),title:`表单设计-${r(i).formName}`,fullscreen:"","destroy-on-close":""},{footer:o(()=>[d(w,{type:"primary",onClick:b},{default:o(()=>[C("保存")]),_:1}),d(w,{onClick:s[1]||(s[1]=n=>u.value=!1)},{default:o(()=>[C("取消")]),_:1})]),default:o(()=>[d(ee,{modelValue:r(i).formOption,"onUpdate:modelValue":s[0]||(s[0]=n=>r(i).formOption=n),style:{height:"calc(100vh - 177px)"}},null,8,["modelValue"])]),_:1},8,["modelValue","title"])],64)}}}),Pe={rowKey:"id",align:"center",index:!0,border:!0,stripe:!0,searchMenuSpan:4,span:24,column:[{label:"流程标识",prop:"flowKey"},{label:"流程名称",prop:"flowName"},{label:"流程模型数据",prop:"flowData",display:!1},{label:"流程备注",prop:"remarks"},{label:"排序",prop:"sort"}]},qe=Fe,le=U({__name:"index",props:{modelValue:null,view:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:p}){const c=e,i=Z({get(){let l=Be();return typeof c.modelValue=="string"&&c.modelValue?l=JSON.parse(c.modelValue):typeof c.modelValue=="object"&&Object.keys(c.modelValue)&&(l=c.modelValue),l},set(l){p("update:modelValue",JSON.stringify(l))}}),t=D();return j(()=>{var l,u;(l=t.value)==null||l.on("anchor:dragstart",()=>{var a;(a=t.value)==null||a.updateEditConfig({stopMoveGraph:!0})}),(u=t.value)==null||u.on("anchor:dragend",()=>{var a;(a=t.value)==null||a.updateEditConfig({stopMoveGraph:!1})})}),(l,u)=>e.view?(v(),k(r(Ue),{key:0,modelValue:r(i),"onUpdate:modelValue":u[0]||(u[0]=a=>B(i)?i.value=a:null)},null,8,["modelValue"])):(v(),k(r(Ne),{key:1,lf:t.value,"onUpdate:lf":u[1]||(u[1]=a=>t.value=a),modelValue:r(i),"onUpdate:modelValue":u[2]||(u[2]=a=>B(i)?i.value=a:null),formOptions:r(qe),formWidth:"30%"},null,8,["lf","modelValue","formOptions"]))}});function fe(e){return h.get("/sapier-flow/dev-flow/list",{params:e})}function Ae(e){return h.post("/sapier-flow/dev-flow/submit",e)}function ze(e){return h.post("/sapier-flow/dev-flow/submit",e)}function We(e){return h.post("/sapier-flow/dev-flow/remove",{},{params:{ids:e}})}const Ge=U({__name:"index",setup(e){const p={rowKey:"id",getList:fe,create:Ae,update:ze,remove:We},{bindVal:c,crudStateRefs:{formData:i},getDataList:t,handleUpdate:l}=R({crudOption:p,tableOption:Pe,mockCache:"model-template"});t();const u=D(!1);async function a(_){i.value=_,u.value=!0}async function b(){await l(i.value,NaN,()=>u.value=!1,()=>{})}return(_,s)=>{const w=m("el-button"),y=m("avue-crud"),f=m("el-dialog");return v(),N(K,null,[d(y,A(z(r(c))),{flowData:o(({row:n})=>[d(w,{type:"primary",text:"",icon:"el-icon-crop",onClick:g=>a(n)},{default:o(()=>[C("设计")]),_:2},1032,["onClick"])]),_:1},16),d(f,{modelValue:u.value,"onUpdate:modelValue":s[2]||(s[2]=n=>u.value=n),title:`模型设计-${r(i).flowName}`,fullscreen:"","destroy-on-close":""},{footer:o(()=>[d(w,{type:"primary",onClick:b},{default:o(()=>[C("保存")]),_:1}),d(w,{onClick:s[1]||(s[1]=n=>u.value=!1)},{default:o(()=>[C("取消")]),_:1})]),default:o(()=>[d(le,{modelValue:r(i).flowData,"onUpdate:modelValue":s[0]||(s[0]=n=>r(i).flowData=n),style:{height:"calc(100vh - 177px)"}},null,8,["modelValue"])]),_:1},8,["modelValue","title"])],64)}}});function Je(e){return h.get("/sapier-flow/flow-category/list",{params:e})}function He(e){return h.post("/sapier-flow/flow-category/save",e)}function Qe(e){return h.post("/sapier-flow/flow-category/update",e)}function Xe(e){return h.post("/sapier-flow/flow-category/remove",{},{params:{ids:e}})}const ne={defaultExpandAll:!0,props:{label:"name",value:"id"},filter:!0,formOption:{column:[{label:"分类名称",prop:"name",rules:[{required:!0,message:"请输入分类名称"}]},{label:"描述",prop:"remark"}]}},Ye=U({__name:"index",emits:["node-click"],setup(e,{emit:p}){const c={rowKey:"id",getList:Je,create:He,update:Qe,remove:Xe,dataPath:"res.data"},{crudStateRefs:{formData:i,tableData:t},getDataList:l,handleSave:u,handleUpdate:a,handleDel:b}=R({crudOption:c,tableOption:ne,pageOption:{pageSize:20},mockCache:"flow-category"});l();function _(y,f,n,g){u(f,n,g)}function s(y,f,n,g){a(f,NaN,n,g)}function w(y){b(y,NaN)}return(y,f)=>{const n=m("avue-tree");return v(),k(n,{modelValue:r(i),"onUpdate:modelValue":f[0]||(f[0]=g=>B(i)?i.value=g:null),option:r(ne),data:r(t),onNodeClick:f[1]||(f[1]=g=>p("node-click",g)),onSave:_,onUpdate:s,onDel:w},null,8,["modelValue","option","data"])}}}),oe={menuBtn:!1,span:24,column:[{label:"流程名称",prop:"flowName",rules:[{required:!0,message:"请输入流程名称"}]},{label:"流程标识",prop:"flowKey",rules:[{required:!0,message:"请输入流程标识"}]},{label:"流程分类",prop:"groupId",type:"select",dicUrl:"/sapier-flow/flow-category/list",props:{label:"name",value:"id"}},{label:"流程图标",prop:"icon",component:"icon-select"},{label:"流程描述",prop:"remarks"}]};function Ze(e){return h.get("/sapier-flow/flow-definition/list",{params:e})}function ce(e){return h.get("/sapier-flow/flow-definition/detail",{params:e})}function el(e){return h.post("/sapier-flow/flow-definition/save",e)}function ll(e){return h.post("/sapier-flow/flow-definition/update",e)}function me(e){return h.post("/sapier-flow/flow-definition/deployFlow",e)}function ol(e){return h.get("/sapier-flow/flow-deploy/list",{params:e})}function ve(e){return h.get("/sapier-flow/flow-deploy/detail",{params:e})}function _e(e){return h.post("/sapier-flow/flow-deploy/update",e)}function tl(){return h.get("/sapier-flow/flow-run/queryPublishFlowList")}function we(e){return new Promise((p,c)=>{(B(e)?e.value:e).validate((t,l)=>{t?(l(),p(t)):c(t)})})}const al=W("span",null,"流程设计",-1),nl={key:0},ul={key:1},il={style:{height:"calc(100vh - 144px)"}},rl=U({__name:"index",props:{modelValue:null,visible:{type:Boolean}},emits:["close"],setup(e,{emit:p}){const i=G(e),{visible:t,modelValue:l}=i,u=["流程信息","表单设计","模型设计","完成"],a=D(!1);re(t,async x=>{if(!x)return;const{flowModuleId:V}=l.value,{flowDeployId:$}=l.value;try{a.value=!0;let S={};$?S=await ve({flowDeployId:$}):V&&(S=await ce({flowModuleId:V})),l.value=S.data}finally{a.value=!1}},{immediate:!0});const b=D([]),_=D([]);pe({size:-1}).then(x=>b.value=x.data.records),fe({size:-1}).then(x=>_.value=x.data.records);const s=D(0),w=Z(()=>{var x,V;return s.value===1?((x=b.value)==null?void 0:x.map($=>({label:$.formName,value:$.formOption})))??[]:s.value===2?((V=_.value)==null?void 0:V.map($=>({label:$.flowName,value:$.flowData})))??[]:[]});function y(x){s.value===1?l.value.formOption=x.value:s.value===2&&(l.value.flowData=x.value)}const f=D();async function n(x){s.value===0&&await we(f),a.value=!0;const{flowModuleId:V}=l.value,{flowDeployId:$}=l.value;try{$?await _e(l.value):V?await ll(l.value):await el(l.value).then(S=>{l.value.flowModuleId=S.data.flowModuleId}),q.success("保存成功")}finally{a.value=!1}typeof x=="number"?s.value=x:s.value++}async function g(){await ue.confirm("发布新版本，是否确认？","提示"),a.value=!0,me({flowModuleId:l.value.flowModuleId}).then(()=>{q.success("发布成功")}).finally(()=>{a.value=!1})}function O(){t.value=!1,s.value=0,l.value={},p("close")}return(x,V)=>{const $=m("el-link"),S=m("el-dropdown-item"),J=m("el-dropdown-menu"),P=m("el-dropdown"),F=m("el-col"),H=m("el-step"),ye=m("el-steps"),T=m("el-button"),ge=m("el-row"),be=m("avue-form"),Ve=m("el-result"),ke=m("el-dialog"),De=se("loading");return v(),k(ke,{modelValue:r(t),"onUpdate:modelValue":V[4]||(V[4]=M=>B(t)?t.value=M:null),fullscreen:"","show-close":!1,onClose:O},{header:o(()=>[d(ge,{align:"center",justify:"center"},{default:o(()=>[d(F,{span:5},{default:o(()=>{var M,E,Q,te;return[W("div",null,[al,(M=r(l))!=null&&M.flowName?(v(),N("span",nl," - "+L((E=r(l))==null?void 0:E.flowName),1)):I("",!0),(Q=r(l))!=null&&Q.version?(v(),N("span",ul," - V"+L((te=r(l))==null?void 0:te.version),1)):I("",!0)]),r(w).length?(v(),k(P,{key:0},{dropdown:o(()=>[d(J,null,{default:o(()=>[(v(!0),N(K,null,Y(r(w),X=>(v(),k(S,{key:X.label,onClick:Dl=>y(X)},{default:o(()=>[C(L(X.label),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:o(()=>[d($,{icon:"el-icon-arrow-down",underline:!1},{default:o(()=>[C("选择模板")]),_:1})]),_:1})):I("",!0)]}),_:1}),d(F,{span:14},{default:o(()=>[d(ye,{active:s.value,simple:"","process-status":"finish","finish-status":"success"},{default:o(()=>[(v(),N(K,null,Y(u,(M,E)=>d(H,{key:E,title:M,onClick:Q=>n(E)},null,8,["title","onClick"])),64))]),_:1},8,["active"])]),_:1}),d(F,{span:5,style:{"text-align":"right"}},{default:o(()=>[d(T,{disabled:s.value===0,loading:a.value,type:"primary",onClick:V[0]||(V[0]=M=>s.value--)},{default:o(()=>[C(" 上一步 ")]),_:1},8,["disabled","loading"]),d(T,{disabled:s.value===u.length-1,type:"primary",loading:a.value,onClick:n},{default:o(()=>[C(" 下一步 ")]),_:1},8,["disabled","loading"]),d(T,{onClick:O},{default:o(()=>[C("关闭")]),_:1})]),_:1})]),_:1})]),default:o(()=>[de((v(),N("div",il,[s.value===0?(v(),k(be,{key:0,ref_key:"formRef",ref:f,modelValue:r(l),"onUpdate:modelValue":V[1]||(V[1]=M=>B(l)?l.value=M:null),option:r(oe),style:{width:"50%",magin:"0 auto"}},null,8,["modelValue","option"])):I("",!0),s.value===1?(v(),k(ee,{key:1,modelValue:r(l).formOption,"onUpdate:modelValue":V[2]||(V[2]=M=>r(l).formOption=M)},null,8,["modelValue"])):I("",!0),s.value===2?(v(),k(le,{key:2,modelValue:r(l).flowData,"onUpdate:modelValue":V[3]||(V[3]=M=>r(l).flowData=M)},null,8,["modelValue"])):I("",!0),s.value===3?(v(),k(Ve,{key:3,icon:"success",title:"流程设计完成"},{extra:o(()=>[r(l).flowDeployId?I("",!0):(v(),k(T,{key:0,type:"primary",onClick:g},{default:o(()=>[C("发布")]),_:1})),d(T,{onClick:O},{default:o(()=>[C("关闭")]),_:1})]),_:1})):I("",!0)])),[[De,a.value]])]),_:1},8,["modelValue"])}}}),sl=W("span",null,"流程查看",-1),dl={key:0},pl={key:1},fl=U({__name:"index",props:{modelValue:null,visible:{type:Boolean}},setup(e){const c=G(e),{visible:i,modelValue:t}=c,l=D("form"),u=D(!1);re(i,async b=>{if(!b)return;const{flowModuleId:_}=t.value,{flowDeployId:s}=t.value;try{u.value=!0;let w={};s?w=await ve({flowDeployId:s}):_&&(w=await ce({flowModuleId:_})),t.value={...w.data}}finally{u.value=!1}},{immediate:!0});function a(){t.value={},l.value="form"}return(b,_)=>{const s=m("el-tab-pane"),w=m("el-tabs"),y=m("el-dialog"),f=se("loading");return v(),k(y,{modelValue:r(i),"onUpdate:modelValue":_[3]||(_[3]=n=>B(i)?i.value=n:null),width:"60%",top:"0",onClose:a},{header:o(()=>{var n,g,O,x;return[sl,(n=r(t))!=null&&n.flowName?(v(),N("span",dl," - "+L((g=r(t))==null?void 0:g.flowName),1)):I("",!0),(O=r(t))!=null&&O.version?(v(),N("span",pl," - V"+L((x=r(t))==null?void 0:x.version),1)):I("",!0)]}),default:o(()=>[de((v(),k(w,{modelValue:l.value,"onUpdate:modelValue":_[2]||(_[2]=n=>l.value=n)},{default:o(()=>[d(s,{label:"查看表单",name:"form",style:{height:"600px","overflow-y":"auto"}},{default:o(()=>[l.value==="form"&&r(t).formOption?(v(),k(ee,{key:0,ref:"formRef",modelValue:r(t).formOption,"onUpdate:modelValue":_[0]||(_[0]=n=>r(t).formOption=n),view:""},null,8,["modelValue"])):I("",!0)]),_:1}),d(s,{label:"查看流程",name:"flow",style:{height:"600px"}},{default:o(()=>[l.value==="flow"?(v(),k(le,{key:0,modelValue:r(t).flowData,"onUpdate:modelValue":_[1]||(_[1]=n=>r(t).flowData=n),view:""},null,8,["modelValue"])):I("",!0)]),_:1})]),_:1},8,["modelValue"])),[[f,u.value]])]),_:1},8,["modelValue"])}}}),cl={rowKey:"flowModuleId",align:"center",index:!0,border:!0,stripe:!0,searchMenuSpan:4,tabs:!0,dialogFullscreen:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuWidth:300,column:[...oe.column,{label:"流程主版本",prop:"mainVersion",formatter(e,p){return p?`V${p||""}`:""}}]},ml=U({__name:"index",props:{groupId:null},emits:["add","view","edit","version"],setup(e,{emit:p}){const c=e,i={rowKey:"flowModuleId",getList:Ze},{bindVal:t,crudStateRefs:{searchForm:l},getDataList:u}=R({crudOption:i,tableOption:cl,searchForm:{groupId:c.groupId}});j(()=>{l.value.groupId=c.groupId??"",u()});const a=D(!1);async function b(_){await ue.confirm("发布新版本，是否确认？","提示",{type:"success"}),a.value=!0,me({flowModuleId:_.flowModuleId}).then(()=>{q.success("部署成功"),u()}).finally(()=>{a.value=!1})}return(_,s)=>{const w=m("el-button"),y=m("avue-crud");return v(),k(y,A(z(r(t))),{"menu-left":o(()=>[d(w,{type:"primary",icon:"el-icon-plus",onClick:s[0]||(s[0]=f=>p("add"))},{default:o(()=>[C("新增")]),_:1})]),menu:o(({row:f})=>[d(w,{loading:a.value,type:"text",icon:"el-icon-view",onClick:n=>p("view",f)},{default:o(()=>[C(" 查看 ")]),_:2},1032,["loading","onClick"]),d(w,{loading:a.value,type:"text",icon:"el-icon-edit",onClick:n=>p("edit",f)},{default:o(()=>[C(" 编辑 ")]),_:2},1032,["loading","onClick"]),d(w,{loading:a.value,type:"text",icon:"el-icon-upload",onClick:n=>b(f)},{default:o(()=>[C(" 发布 ")]),_:2},1032,["loading","onClick"]),d(w,{loading:a.value,type:"text",icon:"el-icon-switch",onClick:n=>p("version",f)},{default:o(()=>[C(" 版本管理 ")]),_:2},1032,["loading","onClick"])]),_:1},16)}}}),vl={rowKey:"flowDeloyId",align:"center",index:!0,border:!0,stripe:!0,searchMenuSpan:4,tabs:!0,dialogFullscreen:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuWidth:250,column:[...oe.column,{label:"流程版本",prop:"version",formatter(e,p){return p?`V${p||""}`:""}},{label:"是否主版本",prop:"mainVersion",type:"select",dicData:[{label:"否",value:0},{label:"是",value:1}]}]},_l=U({__name:"index",props:{flowModuleId:null},emits:["back","view","edit"],setup(e,{emit:p}){const c=e,i={rowKey:"flowDeloyId",getList:ol,dataPath:"res.data"},{bindVal:t,crudStateRefs:{searchForm:l},getDataList:u}=R({crudOption:i,tableOption:vl});j(()=>{c.flowModuleId&&(l.value.flowModuleId=c.flowModuleId,u())});const a=D(!1);function b(_){a.value=!0,_e({flowDeployId:_.flowDeployId,flowModuleId:_.flowModuleId,mainVersion:1}).then(()=>{q.success("设置成功"),u()}).finally(()=>{a.value=!1})}return(_,s)=>{const w=m("el-button"),y=m("avue-crud");return v(),k(y,A(z(r(t))),{"menu-left":o(()=>[d(w,{loading:a.value,type:"primary",icon:"el-icon-arrow-left",onClick:s[0]||(s[0]=f=>p("back"))},{default:o(()=>[C("返回")]),_:1},8,["loading"])]),menu:o(({row:f})=>[d(w,{loading:a.value,type:"text",icon:"el-icon-view",onClick:n=>p("view",f)},{default:o(()=>[C(" 查看 ")]),_:2},1032,["loading","onClick"]),d(w,{loading:a.value,type:"text",icon:"el-icon-edit",onClick:n=>p("edit",f)},{default:o(()=>[C(" 编辑 ")]),_:2},1032,["loading","onClick"]),d(w,{loading:a.value,disabled:f.mainVersion===1,type:"text",icon:"el-icon-switch",onClick:n=>b(f)},{default:o(()=>[C(" 设为主版本 ")]),_:2},1032,["loading","disabled","onClick"])]),_:1},16)}}}),wl=U({__name:"index",setup(e){const p=D("definition"),c=D({}),i=D(""),t=D("");function l(n){i.value===n.id?i.value="":i.value=n.id}const u=D(!1),a=D(!1);function b(){c.value={},u.value=!0}function _(n){c.value=n,u.value=!0}function s(n){c.value=n,a.value=!0}function w(n){t.value=n.flowModuleId||"",p.value="deploy"}function y(){t.value="",p.value="definition"}async function f(){const n=p.value;await ae(),p.value="",await ae(),p.value=n+""}return(n,g)=>{const O=m("el-col"),x=m("el-row");return v(),k(x,{gutter:20},{default:o(()=>[d(O,{span:4},{default:o(()=>[d(Ye,{onNodeClick:l})]),_:1}),d(O,{span:20},{default:o(()=>[p.value==="definition"?(v(),k(ml,{key:0,groupId:i.value,onAdd:b,onEdit:_,onView:s,onVersion:w},null,8,["groupId"])):I("",!0),p.value==="deploy"?(v(),k(_l,{key:1,flowModuleId:t.value,onEdit:_,onView:s,onBack:y},null,8,["flowModuleId"])):I("",!0),d(rl,{modelValue:c.value,"onUpdate:modelValue":g[0]||(g[0]=V=>c.value=V),visible:u.value,"onUpdate:visible":g[1]||(g[1]=V=>u.value=V),onClose:f},null,8,["modelValue","visible"]),d(fl,{modelValue:c.value,"onUpdate:modelValue":g[2]||(g[2]=V=>c.value=V),visible:a.value,"onUpdate:visible":g[3]||(g[3]=V=>a.value=V)},null,8,["modelValue","visible"])]),_:1})]),_:1})}}});function yl(e){return h.get("/sapier-flow/flow-run/queryPublishFlowDetail",{params:e})}function gl(e){return h.post("/sapier-flow/flow-run/startProcess",e)}const bl=U({props:{modelValue:{type:Object,default:()=>({})},flowDetail:{type:Object,default:()=>({})},detail:{type:Boolean}},setup(e){const{modelValue:p}=G(e,void 0,{passive:!0,deep:!0}),c=D({}),{proxy:i}=Ie(),t=D({});j(()=>{const{formOption:a}=e.flowDetail.process??{};t.value=ie.bind(i)(a||'{"menuBtn":false}'),t.value.detail=!!e.detail});const l=D();function u(){return we(l)}return{form:p,option:t,defaults:c,formRef:l,validate:u}},render(){return $e(m("avue-form"),{ref:"formRef",modelValue:this.form,defaults:this.defaults,option:this.option,"onUpdate:modelValue":e=>this.form=e,"onUpdate:defaults":e=>this.defaults=e})}}),Vl=U({__name:"index",props:{flowKey:null,visible:{type:Boolean},flowDetail:null,processDetail:null,modelValue:null,formOption:null,loading:{type:Boolean},activeTab:null},setup(e){const p=e,c=G(p,void 0,{passive:!0,deep:!0}),{visible:i,flowDetail:t,processDetail:l,modelValue:u,loading:a,activeTab:b}=c;function _(y){b.value="form",t.value={},u.value={},y==null||y()}j(()=>{const{flowKey:y}=p;y&&i.value&&(_(),a.value=!0,yl({flowKey:y}).then(f=>{t.value=f.data,l.value=f.data.process,u.value=f.data.formData||{}}).finally(()=>{a.value=!1}))});const s=D();async function w(){var f,n;await((f=s.value)==null?void 0:f.validate());const y=Object.entries(u.value||{}).filter(([g])=>!g.startsWith("$")).map(([g,O])=>({key:g,value:O}));gl({flowDeployId:(n=l.value)==null?void 0:n.flowDeployId,variables:y,assignee:{Activity_1ol866b:"2"},outgoing:["Flow_34q9vpo"]})}return(y,f)=>{var P;const n=m("el-skeleton"),g=m("el-button"),O=m("el-header"),x=m("el-tab-pane"),V=m("el-tabs"),$=m("el-main"),S=m("el-container"),J=m("el-drawer");return v(),k(J,{modelValue:r(i),"onUpdate:modelValue":f[2]||(f[2]=F=>B(i)?i.value=F:null),title:(P=r(l))==null?void 0:P.flowName,"destroy-on-close":"","before-close":_,size:"60%"},{default:o(()=>[r(a)?(v(),k(n,{key:0})):(v(),k(S,{key:1},{default:o(()=>[d(O,{height:"40px",style:{padding:"0"}},{default:o(()=>[d(g,{type:"primary",onClick:w},{default:o(()=>[C("发送")]),_:1})]),_:1}),d($,{style:{padding:"0"}},{default:o(()=>[d(V,{modelValue:r(b),"onUpdate:modelValue":f[1]||(f[1]=F=>B(b)?b.value=F:null)},{default:o(()=>{var F;return[(F=r(l))!=null&&F.formPath?Oe(y.$slots,"default",{key:0}):(v(),k(x,{key:1,label:"审批信息",name:"form"},{default:o(()=>[d(bl,{ref_key:"formRef",ref:s,modelValue:r(u),"onUpdate:modelValue":f[0]||(f[0]=H=>B(u)?u.value=H:null),flowDetail:r(t)},null,8,["modelValue","flowDetail"])]),_:1}))]}),_:3},8,["modelValue"])]),_:3})]),_:3}))]),_:3},8,["modelValue","title"])}}}),kl=U({__name:"index",setup(e){const p=D([]);tl().then(l=>{p.value=l.data});const c=D(!1),i=D("");function t(l){i.value=l.flowKey,c.value=!0}return(l,u)=>{const a=m("el-button");return v(),N(K,null,[W("div",null,[(v(!0),N(K,null,Y(p.value,b=>(v(),k(a,{key:b.flowKey,type:"primary",plain:"",onClick:_=>t(b)},{default:o(()=>[C(L(b.flowName),1)]),_:2},1032,["onClick"]))),128))]),d(Vl,{visible:c.value,"onUpdate:visible":u[0]||(u[0]=b=>c.value=b),flowKey:i.value},null,8,["visible","flowKey"])],64)}}}),$o={install(e){e.component("FormTemplate",je),e.component("FlowTemplate",Ge),e.component("FlowManage",wl),e.component("Workbench",kl)}};export{wl as FlowManage,Ge as FlowTemplate,je as FormTemplate,kl as Workbench,$o as default};
