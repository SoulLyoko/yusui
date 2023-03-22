import{c7 as be,cg as E,bw as F,bx as le}from"../composables_use-crud_index.md.7ff4ecf5.js";import{_ as Ve,X as ke,W as xe}from"./index.vue_vue_type_script_setup_true_lang.e896812a.js";import{f as M,c as Y,D as w,h as _,A as b,u as r,af as U,r as D,i as N,G as d,B as t,k as V,aq as T,ar as q,F as z,b as G,w as oe,aI as te,z as P,t as K,C as I,L as Ce,a1 as ae,n as Z}from"./framework.6c76c79f.js";import{r as De}from"./axios.0f847c32.js";import{a as $e,_ as he}from"./index.vue_vue_type_script_setup_true_lang.dc119307.js";import{d as A}from"./data.9a872b3e.js";import{a as Ie}from"../flow-design_flow-modeler_index.md.af625970.js";import{q as ne}from"./theme.80738b14.js";import"../app.c7415d4f.js";import"../components_basic-container_index.md.c2902401.js";import"../components_icon-select_index.md.559f9028.js";import"../components_index.md.43b501f2.js";import"../components_v-text_index.md.b2f91556.js";import"../composables_index.md.597fdd4c.js";import"../eslint-config_index.md.4cfe78e4.js";import"../flow-design_flow-viewer_index.md.0d05c94a.js";import"../flow-design_index.md.3941a9f8.js";import"../flow-pages_flow-manage_index.md.9fb56950.js";import"../flow-pages_flow-template_index.md.91ba6131.js";import"../flow-pages_form-template_index.md.6956dabe.js";import"../flow-pages_index.md.8878ab87.js";import"../form-design_demo.md.c49a3eb1.js";import"../form-design_index.md.454afd6f.js";import"../guide_changelog.md.c778465a.js";import"../guide_start.md.af46786e.js";import"../index.md.86a560ec.js";import"../plugins_avue-patch_index.md.24b1b518.js";import"../plugins_env-dts_index.md.bfb63ee5.js";import"../plugins_index.md.f143dffe.js";import"../plugins_load-proxy_index.md.37974852.js";import"../plugins_uni-ui-patch_index.md.9d0386e8.js";import"../plugins_uview-patch_index.md.4541b0e0.js";import"../prettier-config_index.md.5a7d4d11.js";import"../types_avue_index.md.bdb5e61c.js";import"../utils_date_dateFormat.md.95a0ccc9.js";import"../utils_date_durationFormat.md.4812386a.js";import"../utils_emitter_mittAsync.md.06e446b4.js";import"../utils_file_downloadFile.md.443e622e.js";import"../utils_file_getFileName.md.07f04ee5.js";import"../utils_index.md.070bbed1.js";import"../utils_math_index.md.fa407fa4.js";import"../utils_object_filterObj.md.3ea17155.js";import"../utils_object_getDataType.md.af302376.js";import"../utils_string_deserialize.md.df3c79a3.js";import"../utils_string_serialize.md.52ada63d.js";import"../utils_string_uuid.md.3777921e.js";import"../utils_tool_awaitTo.md.3e8c5a8a.js";import"../utils_tool_sleep.md.24e74816.js";import"../utils_tree_buildTree.md.c49d7f11.js";import"../utils_tree_filterTree.md.10578652.js";import"../utils_tree_findTree.md.a798ca70.js";import"../utils_tree_flatTree.md.1269767c.js";import"../utils_tree_treeMap.md.a3a60c1c.js";import"./vue.runtime.esm-bundler.c3bdcc7a.js";const Oe={rowKey:"id",align:"center",index:!0,border:!0,stripe:!0,searchMenuSpan:4,span:24,column:[{label:"表单KEY",prop:"formKey"},{label:"表单名称",prop:"formName"},{label:"表单配置",prop:"formOption",display:!1},{label:"表单备注",prop:"remarks"},{label:"排序",prop:"sort",type:"number"}]},W=M({__name:"index",props:{modelValue:null,view:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:p}){const f=e,i=Y({get(){return f.modelValue?ke(f.modelValue):{menuBtn:!1,span:24}},set(n){p("update:modelValue",xe(n,{useJson5:!1}))}});return(n,l)=>{const a=w("avue-form");return e.view?(_(),b(a,{key:0,modelValue:{},option:r(i)},null,8,["option"])):(_(),b(r(Ve),{key:1,modelValue:r(i),"onUpdate:modelValue":l[0]||(l[0]=s=>U(i)?i.value=s:null)},null,8,["modelValue"]))}}});var Me=De();const Ne=be(Me),$=Ne.create();$.interceptors.response.use(e=>e.data);function ue(e){return $.get("/sapier-flow/dev-form/list",{params:e})}function Ue(e){return $.post("/sapier-flow/dev-form/submit",e)}function Se(e){return $.post("/sapier-flow/dev-form/submit",e)}function Be(e){return $.post("/sapier-flow/dev-form/remove",{},{params:{ids:e}})}const ro=M({__name:"index",setup(e){const p={rowKey:"id",getList:ue,create:Ue,update:Se,remove:Be},{bindVal:f,crudStateRefs:{formData:i},getDataList:n,handleUpdate:l}=E({crudOption:p,tableOption:Oe,mockCache:"form-template"});n();const a=D(!1);async function s(u){i.value={...u},a.value=!0}async function h(){await l(i.value,NaN,()=>a.value=!1,()=>{})}return(u,m)=>{const c=w("el-button"),C=w("avue-crud"),v=w("el-dialog");return _(),N(z,null,[d(C,T(q(r(f))),{formOption:t(({row:o})=>[d(c,{type:"primary",text:"",icon:"el-icon-crop",onClick:y=>s(o)},{default:t(()=>[V("设计")]),_:2},1032,["onClick"])]),_:1},16),d(v,{modelValue:a.value,"onUpdate:modelValue":m[2]||(m[2]=o=>a.value=o),title:`表单设计-${r(i).formName}`,fullscreen:"","destroy-on-close":""},{footer:t(()=>[d(c,{type:"primary",onClick:h},{default:t(()=>[V("保存")]),_:1}),d(c,{onClick:m[1]||(m[1]=o=>a.value=!1)},{default:t(()=>[V("取消")]),_:1})]),default:t(()=>[d(W,{modelValue:r(i).formOption,"onUpdate:modelValue":m[0]||(m[0]=o=>r(i).formOption=o),style:{height:"calc(100vh - 177px)"}},null,8,["modelValue"])]),_:1},8,["modelValue","title"])],64)}}}),Ke={rowKey:"id",align:"center",index:!0,border:!0,stripe:!0,searchMenuSpan:4,span:24,column:[{label:"流程KEY",prop:"flowKey"},{label:"流程名称",prop:"flowName"},{label:"流程模型数据",prop:"flowData",display:!1},{label:"流程备注",prop:"remarks"},{label:"排序",prop:"sort"}]},Ee=Ie,J=M({__name:"index",props:{modelValue:null,view:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:p}){const f=e,i=Y({get(){return typeof f.modelValue=="string"&&f.modelValue?f.modelValue?JSON.parse(f.modelValue):A():typeof f.modelValue=="object"?Object.keys(f.modelValue)?f.modelValue:A():A()},set(l){p("update:modelValue",JSON.stringify(l))}}),n=D();return G(()=>{var l,a;(l=n.value)==null||l.on("anchor:dragstart",()=>{var s;(s=n.value)==null||s.updateEditConfig({stopMoveGraph:!0})}),(a=n.value)==null||a.on("anchor:dragend",()=>{var s;(s=n.value)==null||s.updateEditConfig({stopMoveGraph:!1})})}),(l,a)=>e.view?(_(),b(r($e),{key:0,modelValue:r(i),"onUpdate:modelValue":a[0]||(a[0]=s=>U(i)?i.value=s:null)},null,8,["modelValue"])):(_(),b(r(he),{key:1,lf:n.value,"onUpdate:lf":a[1]||(a[1]=s=>n.value=s),modelValue:r(i),"onUpdate:modelValue":a[2]||(a[2]=s=>U(i)?i.value=s:null),formOptions:r(Ee),formWidth:"30%"},null,8,["lf","modelValue","formOptions"]))}});function re(e){return $.get("/sapier-flow/dev-flow/list",{params:e})}function Le(e){return $.post("/sapier-flow/dev-flow/submit",e)}function Fe(e){return $.post("/sapier-flow/dev-flow/submit",e)}function Te(e){return $.post("/sapier-flow/dev-flow/remove",{},{params:{ids:e}})}const io=M({__name:"index",setup(e){const p={rowKey:"id",getList:re,create:Le,update:Fe,remove:Te},{bindVal:f,crudStateRefs:{formData:i},getDataList:n,handleUpdate:l}=E({crudOption:p,tableOption:Ke,mockCache:"model-template"});n();const a=D(!1);async function s(u){i.value=u,a.value=!0}async function h(){await l(i.value,NaN,()=>a.value=!1,()=>{})}return(u,m)=>{const c=w("el-button"),C=w("avue-crud"),v=w("el-dialog");return _(),N(z,null,[d(C,T(q(r(f))),{flowData:t(({row:o})=>[d(c,{type:"primary",text:"",icon:"el-icon-crop",onClick:y=>s(o)},{default:t(()=>[V("设计")]),_:2},1032,["onClick"])]),_:1},16),d(v,{modelValue:a.value,"onUpdate:modelValue":m[2]||(m[2]=o=>a.value=o),title:`模型设计-${r(i).flowName}`,fullscreen:"","destroy-on-close":""},{footer:t(()=>[d(c,{type:"primary",onClick:h},{default:t(()=>[V("保存")]),_:1}),d(c,{onClick:m[1]||(m[1]=o=>a.value=!1)},{default:t(()=>[V("取消")]),_:1})]),default:t(()=>[d(J,{modelValue:r(i).flowData,"onUpdate:modelValue":m[0]||(m[0]=o=>r(i).flowData=o),style:{height:"calc(100vh - 177px)"}},null,8,["modelValue"])]),_:1},8,["modelValue","title"])],64)}}}),ee={defaultExpandAll:!0,props:{label:"name",value:"id"},filter:!0,formOption:{column:[{label:"分类名称",prop:"name",rules:[{required:!0,message:"请输入分类名称"}]},{label:"分类标识",prop:"code",rules:[{required:!0,message:"请输入分类标识"}]},{label:"描述",prop:"remark"}]}},qe=M({__name:"index",emits:["node-click"],setup(e,{emit:p}){const f={rowKey:"id"},{crudStateRefs:{formData:i,tableData:n},getDataList:l,handleSave:a,handleUpdate:s,handleDel:h}=E({crudOption:f,tableOption:ee,pageOption:{pageSize:20},mockCache:"flow-category"});l();function u(C,v,o,y){a(v,o,y)}function m(C,v,o,y){s(v,NaN,o,y)}function c(C){h(C,NaN)}return(C,v)=>{const o=w("avue-tree");return _(),b(o,{modelValue:r(i),"onUpdate:modelValue":v[0]||(v[0]=y=>U(i)?i.value=y:null),option:r(ee),data:r(n),onNodeClick:v[1]||(v[1]=y=>p("node-click",y)),onSave:u,onUpdate:m,onDel:c},null,8,["modelValue","option","data"])}}}),Re={menuBtn:!1,span:24,column:[{label:"流程名称",prop:"flowName",rules:[{required:!0,message:"请输入流程名称"}]},{label:"流程KEY",prop:"flowKey",rules:[{required:!0,message:"请输入流程KEY"}]},{label:"流程分类",prop:"groupId"},{label:"流程描述",prop:"remarks"}]};function je(e){return $.get("/sapier-flow/flow-definition/list",{params:e})}function ie(e){return $.get("/sapier-flow/flow-definition/detail",{params:e})}function Ae(e){return $.post("/sapier-flow/flow-definition/save",e)}function Ye(e){return $.post("/sapier-flow/flow-definition/update",e)}function se(e){return $.post("/sapier-flow/flow-definition/deployFlow",e)}function ze(e){return $.get("/sapier-flow/flow-deploy/list",{params:e})}function de(e){return $.get("/sapier-flow/flow-deploy/detail",{params:e})}function pe(e){return $.post("/sapier-flow/flow-deploy/update",e)}function Ge(e){return new Promise((p,f)=>{(U(e)?e.value:e).validate((n,l)=>{n?(l(),p(n)):f(n)})})}const Pe=P("span",null,"流程设计",-1),We={key:0},Je={key:1},Xe={style:{height:"calc(100vh - 144px)"}},He=M({__name:"index",props:{modelValue:null,visible:{type:Boolean}},emits:["close"],setup(e,{emit:p}){const i=ne(e),{visible:n,modelValue:l}=i,a=D(!1);oe(n,async k=>{if(!k)return;const{flowModuleId:g}=l.value,{flowDeployId:x}=l.value;try{a.value=!0;let S={};x?S=await de({flowDeployId:x}):g&&(S=await ie({flowModuleId:g})),l.value=S.data}finally{a.value=!1}},{immediate:!0});const s=D([]),h=D([]);ue({size:-1}).then(k=>s.value=k.data.records),re({size:-1}).then(k=>s.value=k.data.records);const u=D(0),m=Y(()=>{var k,g;return u.value===1?((k=s.value)==null?void 0:k.map(x=>({label:x.formName,value:x.formOption})))??[]:u.value===2?((g=h.value)==null?void 0:g.map(x=>({label:x.flowName,value:x.flowData})))??[]:[]});function c(k){u.value===1?l.value.formOption=k.value:u.value===2&&(l.value.flowData=k.value)}const C=D();async function v(){u.value===0&&await Ge(C),a.value=!0;const{flowModuleId:k}=l.value,{flowDeployId:g}=l.value;try{g?await pe(l.value):k?await Ye(l.value):await Ae(l.value).then(x=>{l.value.flowModuleId=x.data.flowModuleId}),F.success("保存成功")}finally{a.value=!1}u.value++}async function o(){await le.confirm("发布新版本，是否确认？","提示"),a.value=!0,se({flowModuleId:l.value.flowModuleId}).then(()=>{F.success("发布成功")}).finally(()=>{a.value=!1})}function y(){n.value=!1,u.value=0,l.value={},p("close")}return(k,g)=>{const x=w("el-link"),S=w("el-dropdown-item"),fe=w("el-dropdown-menu"),me=w("el-dropdown"),R=w("el-col"),L=w("el-step"),ce=w("el-steps"),B=w("el-button"),ve=w("el-row"),_e=w("avue-form"),we=w("el-result"),ye=w("el-dialog"),ge=te("loading");return _(),b(ye,{modelValue:r(n),"onUpdate:modelValue":g[4]||(g[4]=O=>U(n)?n.value=O:null),fullscreen:"","show-close":!1,onClose:y},{header:t(()=>[d(ve,{align:"center",justify:"center"},{default:t(()=>[d(R,{span:5},{default:t(()=>{var O,X,H,Q;return[P("div",null,[Pe,(O=r(l))!=null&&O.flowName?(_(),N("span",We," - "+K((X=r(l))==null?void 0:X.flowName),1)):I("",!0),(H=r(l))!=null&&H.version?(_(),N("span",Je," - V"+K((Q=r(l))==null?void 0:Q.version),1)):I("",!0)]),r(m).length?(_(),b(me,{key:0},{dropdown:t(()=>[d(fe,null,{default:t(()=>[(_(!0),N(z,null,Ce(r(m),j=>(_(),b(S,{key:j.label,onClick:ul=>c(j)},{default:t(()=>[V(K(j.label),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:t(()=>[d(x,{icon:"el-icon-arrow-down",underline:!1},{default:t(()=>[V("选择模板")]),_:1})]),_:1})):I("",!0)]}),_:1}),d(R,{span:14},{default:t(()=>[d(ce,{active:u.value,simple:""},{default:t(()=>[d(L,{title:"流程信息"}),d(L,{title:"表单设计"}),d(L,{title:"模型设计"}),d(L,{title:"完成"})]),_:1},8,["active"])]),_:1}),d(R,{span:5,style:{"text-align":"right"}},{default:t(()=>[d(B,{disabled:u.value===0,loading:a.value,type:"primary",onClick:g[0]||(g[0]=O=>u.value--)},{default:t(()=>[V(" 上一步 ")]),_:1},8,["disabled","loading"]),d(B,{disabled:u.value===3,type:"primary",loading:a.value,onClick:v},{default:t(()=>[V(" 下一步 ")]),_:1},8,["disabled","loading"]),d(B,{onClick:y},{default:t(()=>[V("关闭")]),_:1})]),_:1})]),_:1})]),default:t(()=>[ae((_(),N("div",Xe,[u.value===0?(_(),b(_e,{key:0,ref_key:"formRef",ref:C,modelValue:r(l),"onUpdate:modelValue":g[1]||(g[1]=O=>U(l)?l.value=O:null),option:r(Re),style:{width:"50%",magin:"0 auto"}},null,8,["modelValue","option"])):I("",!0),u.value===1?(_(),b(W,{key:1,modelValue:r(l).formOption,"onUpdate:modelValue":g[2]||(g[2]=O=>r(l).formOption=O)},null,8,["modelValue"])):I("",!0),u.value===2?(_(),b(J,{key:2,modelValue:r(l).flowData,"onUpdate:modelValue":g[3]||(g[3]=O=>r(l).flowData=O)},null,8,["modelValue"])):I("",!0),u.value===3?(_(),b(we,{key:3,icon:"success",title:"流程设计完成"},{extra:t(()=>[r(l).flowDeployId?I("",!0):(_(),b(B,{key:0,type:"primary",onClick:o},{default:t(()=>[V("发布")]),_:1})),d(B,{onClick:y},{default:t(()=>[V("关闭")]),_:1})]),_:1})):I("",!0)])),[[ge,a.value]])]),_:1},8,["modelValue"])}}}),Qe=P("span",null,"流程查看",-1),Ze={key:0},el={key:1},ll=M({__name:"index",props:{modelValue:null,visible:{type:Boolean}},setup(e){const f=ne(e),{visible:i,modelValue:n}=f,l=D("form"),a=D(!1);oe(i,async h=>{if(!h)return;const{flowModuleId:u}=n.value,{flowDeployId:m}=n.value;try{a.value=!0;let c={};m?c=await de({flowDeployId:m}):u&&(c=await ie({flowModuleId:u})),n.value={...c.data}}finally{a.value=!1}},{immediate:!0});function s(){n.value={},l.value="form"}return(h,u)=>{const m=w("el-tab-pane"),c=w("el-tabs"),C=w("el-dialog"),v=te("loading");return _(),b(C,{modelValue:r(i),"onUpdate:modelValue":u[3]||(u[3]=o=>U(i)?i.value=o:null),width:"60%",top:"0",onClose:s},{header:t(()=>{var o,y,k,g;return[Qe,(o=r(n))!=null&&o.flowName?(_(),N("span",Ze," - "+K((y=r(n))==null?void 0:y.flowName),1)):I("",!0),(k=r(n))!=null&&k.version?(_(),N("span",el," - V"+K((g=r(n))==null?void 0:g.version),1)):I("",!0)]}),default:t(()=>[ae((_(),b(c,{modelValue:l.value,"onUpdate:modelValue":u[2]||(u[2]=o=>l.value=o)},{default:t(()=>[d(m,{label:"查看表单",name:"form",style:{height:"600px","overflow-y":"auto"}},{default:t(()=>[l.value==="form"&&r(n).formOption?(_(),b(W,{key:0,ref:"formRef",modelValue:r(n).formOption,"onUpdate:modelValue":u[0]||(u[0]=o=>r(n).formOption=o),view:""},null,8,["modelValue"])):I("",!0)]),_:1}),d(m,{label:"查看流程",name:"flow",style:{height:"600px"}},{default:t(()=>[l.value==="flow"?(_(),b(J,{key:0,modelValue:r(n).flowData,"onUpdate:modelValue":u[1]||(u[1]=o=>r(n).flowData=o),view:""},null,8,["modelValue"])):I("",!0)]),_:1})]),_:1},8,["modelValue"])),[[v,a.value]])]),_:1},8,["modelValue"])}}}),ol={rowKey:"flowModuleId",align:"center",index:!0,border:!0,stripe:!0,searchMenuSpan:4,tabs:!0,dialogFullscreen:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuWidth:300,column:[{label:"流程名称",prop:"flowName"},{label:"流程KEY",prop:"flowKey"},{label:"流程分类",prop:"groupId"},{label:"流程主版本",prop:"mainVersion",formatter(e,p){return p?`V${p||""}`:""}},{label:"流程描述",prop:"remarks"}]},tl=M({__name:"index",props:{groupId:null},emits:["add","view","edit","version"],setup(e,{emit:p}){const f=e,i={rowKey:"flowModuleId",getList:je},{bindVal:n,crudStateRefs:{searchForm:l},getDataList:a}=E({crudOption:i,tableOption:ol,searchForm:{groupId:f.groupId}});G(()=>{l.value.groupId=f.groupId??"",a()});const s=D(!1);async function h(u){await le.confirm("发布新版本，是否确认？","提示"),s.value=!0,se({flowModuleId:u.flowModuleId}).then(()=>{F.success("部署成功"),a()}).finally(()=>{s.value=!1})}return(u,m)=>{const c=w("el-button"),C=w("avue-crud");return _(),b(C,T(q(r(n))),{"menu-left":t(()=>[d(c,{type:"primary",icon:"el-icon-plus",onClick:m[0]||(m[0]=v=>p("add"))},{default:t(()=>[V("新增")]),_:1})]),menu:t(({row:v})=>[d(c,{loading:s.value,type:"text",icon:"el-icon-view",onClick:o=>p("view",v)},{default:t(()=>[V(" 查看 ")]),_:2},1032,["loading","onClick"]),d(c,{loading:s.value,type:"text",icon:"el-icon-edit",onClick:o=>p("edit",v)},{default:t(()=>[V(" 编辑 ")]),_:2},1032,["loading","onClick"]),d(c,{loading:s.value,type:"text",icon:"el-icon-upload",onClick:o=>h(v)},{default:t(()=>[V(" 发布 ")]),_:2},1032,["loading","onClick"]),d(c,{loading:s.value,type:"text",icon:"el-icon-switch",onClick:o=>p("version",v)},{default:t(()=>[V(" 版本管理 ")]),_:2},1032,["loading","onClick"])]),_:1},16)}}}),al={rowKey:"flowDeloyId",align:"center",index:!0,border:!0,stripe:!0,searchMenuSpan:4,tabs:!0,dialogFullscreen:!0,addBtn:!1,editBtn:!1,delBtn:!1,menuWidth:250,column:[{label:"流程名称",prop:"flowName"},{label:"流程KEY",prop:"flowKey"},{label:"流程分类",prop:"groupId"},{label:"流程版本",prop:"version",formatter(e,p){return p?`V${p||""}`:""}},{label:"是否主版本",prop:"mainVersion",type:"select",dicData:[{label:"否",value:0},{label:"是",value:1}]}]},nl=M({__name:"index",props:{flowModuleId:null},emits:["back","view","edit"],setup(e,{emit:p}){const f=e,i={rowKey:"flowDeloyId",getList:ze,dataPath:"res.data"},{bindVal:n,crudStateRefs:{searchForm:l},getDataList:a}=E({crudOption:i,tableOption:al});G(()=>{f.flowModuleId&&(l.value.flowModuleId=f.flowModuleId,a())});const s=D(!1);function h(u){s.value=!0,pe({flowDeployId:u.flowDeployId,flowModuleId:u.flowModuleId,mainVersion:1}).then(()=>{F.success("设置成功"),a()}).finally(()=>{s.value=!1})}return(u,m)=>{const c=w("el-button"),C=w("avue-crud");return _(),b(C,T(q(r(n))),{"menu-left":t(()=>[d(c,{loading:s.value,type:"primary",icon:"el-icon-arrow-left",onClick:m[0]||(m[0]=v=>p("back"))},{default:t(()=>[V("返回")]),_:1},8,["loading"])]),menu:t(({row:v})=>[d(c,{loading:s.value,type:"text",icon:"el-icon-view",onClick:o=>p("view",v)},{default:t(()=>[V(" 查看 ")]),_:2},1032,["loading","onClick"]),d(c,{loading:s.value,type:"text",icon:"el-icon-edit",onClick:o=>p("edit",v)},{default:t(()=>[V(" 编辑 ")]),_:2},1032,["loading","onClick"]),d(c,{loading:s.value,disabled:v.mainVersion===1,type:"text",icon:"el-icon-switch",onClick:o=>h(v)},{default:t(()=>[V(" 设为主版本 ")]),_:2},1032,["loading","disabled","onClick"])]),_:1},16)}}}),so=M({__name:"index",setup(e){const p=D("definition"),f=D({}),i=D(""),n=D("");function l(o){i.value===o.id?i.value="":i.value=o.id}const a=D(!1),s=D(!1);function h(){f.value={},a.value=!0}function u(o){f.value=o,a.value=!0}function m(o){f.value=o,s.value=!0}function c(o){n.value=o.flowModuleId||"",p.value="deploy"}function C(){n.value="",p.value="definition"}async function v(){const o=p.value;await Z(),p.value="",await Z(),p.value=o+""}return(o,y)=>{const k=w("el-col"),g=w("el-row");return _(),b(g,{gutter:20},{default:t(()=>[d(k,{span:4},{default:t(()=>[d(qe,{onNodeClick:l})]),_:1}),d(k,{span:20},{default:t(()=>[p.value==="definition"?(_(),b(tl,{key:0,groupId:i.value,onAdd:h,onEdit:u,onView:m,onVersion:c},null,8,["groupId"])):I("",!0),p.value==="deploy"?(_(),b(nl,{key:1,flowModuleId:n.value,onEdit:u,onView:m,onBack:C},null,8,["flowModuleId"])):I("",!0),d(He,{modelValue:f.value,"onUpdate:modelValue":y[0]||(y[0]=x=>f.value=x),visible:a.value,"onUpdate:visible":y[1]||(y[1]=x=>a.value=x),onClose:v},null,8,["modelValue","visible"]),d(ll,{modelValue:f.value,"onUpdate:modelValue":y[2]||(y[2]=x=>f.value=x),visible:s.value,"onUpdate:visible":y[3]||(y[3]=x=>s.value=x)},null,8,["modelValue","visible"])]),_:1})]),_:1})}}});export{so as FlowManage,io as FlowTemplate,ro as FormTemplate};
