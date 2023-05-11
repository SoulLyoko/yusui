import{B as me,C as ne,D as ue,E as ce,e as de,f as be,g as ve,_ as ye,a as we,s as fe,G as xe,r as Ce,M as Te,p as De,q as Ve,N as Me,o as he,t as Ee,h as ge,i as Ne,P as ke,b as Ge,m as Fe,n as Le,k as Pe,l as Se,S as qe,c as Ue,w as We,T as $e,U as je,j as Be,d as Re,v as Ae,u as Ie}from"./index.vue_vue_type_script_setup_true_lang.bb580509.js";import{d as _e}from"./data.4cb21f02.js";import{b as He,c as Je,e as Ke,f as Qe,d as Xe,a as Ye,g as Ze,h as ea,m as aa,n as la,p as ta,i as oa,s as pa,j as ia,k as ra,u as sa}from"../flow-design_flow-modeler_index.md.a7cf72ad.js";import"./framework.b266b145.js";import"./theme.5db20171.js";import"./uniqueId.8e3f83bc.js";import"../composables_use-crud_index.md.b68a9fc1.js";import"../app.4528da56.js";import"../components_icon-select_index.md.4fb331fc.js";import"../components_index.md.46cf363d.js";import"../components_v-text_index.md.e98d43c0.js";import"../composables_index.md.3044f1ae.js";import"../flow-design_flow-viewer_index.md.79ca8d22.js";import"../flow-design_index.md.743c5e3a.js";import"../flow-pages_index.md.e99b69fa.js";import"../flow-pages_pages_flow-button_index.md.bed80d55.js";import"../flow-pages_pages_flow-manage_index.md.46189761.js";import"../flow-pages_pages_flow-ops_index.md.a424c38b.js";import"../flow-pages_pages_flow-param_index.md.ef0e553b.js";import"../flow-pages_pages_flow-template_index.md.f798a59b.js";import"../flow-pages_pages_flow-workbench_index.md.5e52b719.js";import"../flow-pages_pages_form-template_index.md.3f80c849.js";import"../flow-pages_pages_table-template_index.md.b8ad4f81.js";import"../form-design_demo.md.9d5a6cab.js";import"../form-design_index.md.24447ebb.js";import"../guide_changelog.md.0ad24ee9.js";import"../guide_start.md.761dfe93.js";import"../index.md.2d064c25.js";import"../plugins_avue-patch_index.md.48e20c21.js";import"../plugins_env-dts_index.md.71927072.js";import"../plugins_index.md.8ac5c6d9.js";import"../plugins_load-proxy_index.md.6a28ebff.js";import"../plugins_setup-extend_index.md.d0060799.js";import"../plugins_uni-ui-patch_index.md.561160ff.js";import"../plugins_uview-patch_index.md.28102419.js";import"../types_avue_index.md.32c3526a.js";import"../utils_date_dateFormat.md.5067e69c.js";import"../utils_date_durationFormat.md.191b7e46.js";import"../utils_emitter_mittAsync.md.afaed53a.js";import"../utils_index.md.1cfabe15.js";import"../utils_math_index.md.679a3ea2.js";import"../utils_object_filterObj.md.37dc9792.js";import"../utils_object_filterObjDeep.md.a2aec3aa.js";import"../utils_object_getDataType.md.868c07a7.js";import"../utils_string_deserialize.md.fba5ee35.js";import"../utils_string_serialize.md.8c3bea90.js";import"../utils_string_uuid.md.6cca6855.js";import"../utils_tool_awaitTo.md.baefc1dc.js";import"../utils_tool_enumToDic.md.ba2933f9.js";import"../utils_tool_sleep.md.bd52f355.js";import"../utils_tree_buildTree.md.899c69cb.js";import"../utils_tree_filterTree.md.3b301401.js";import"../utils_tree_findTree.md.ce9b0fcb.js";import"../utils_tree_flatTree.md.335a4148.js";import"../utils_tree_treeMap.md.1dcbcbce.js";const e=[{label:"开始",value:"start"},{label:"任务",value:"task"},{label:"结束",value:"end"}],a=[{label:"类",value:"class"},{label:"表达式",value:"expression"},{label:"代理表达式",value:"delegateExpression"}],l=[{label:"字符串",value:"string"},{label:"表达式",value:"expression"}],oe=[{label:"",labelWidth:0,prop:"executionListener",type:"dynamic",children:{type:"form",index:!1,column:[{label:"事件",prop:"eventName",type:"select",dicData:e},{label:"类型",prop:"eventType",type:"select",dicData:a},{label:"值",prop:"eventValue",type:"textarea",minRows:1,span:24},{label:"字段",prop:"fields",type:"dynamic",span:24,children:{column:[{label:"字段名",prop:"fieldName"},{label:"类型",prop:"fieldType",type:"select",dicData:l},{label:"值",prop:"fieldValue"}]}}]}}],t=[{label:"创建",value:"create"},{label:"指派",value:"assignment"},{label:"完成",value:"complete"},{label:"删除",value:"delete"},{label:"更新",value:"update"},{label:"超时",value:"timeout"}],o=[{label:"类",value:"class"},{label:"表达式",value:"expression"},{label:"代理表达式",value:"delegateExpression"}],p=[{label:"字符串",value:"string"},{label:"表达式",value:"expression"}],pe=[{label:"",labelWidth:0,prop:"executionListener",type:"dynamic",children:{type:"form",index:!1,column:[{label:"事件",prop:"eventName",type:"select",dicData:t},{label:"类型",prop:"eventType",type:"select",dicData:o},{label:"值",prop:"eventValue",type:"textarea",minRows:1,span:24},{label:"字段",prop:"fields",type:"dynamic",span:24,children:{column:[{label:"字段名",prop:"fieldName"},{label:"类型",prop:"fieldType",type:"select",dicData:p},{label:"值",prop:"fieldValue"}]}}]}}],ie=[{label:"",labelWidth:0,prop:"timeLimit",type:"dynamic",children:{column:[{label:"名称",prop:"name"},{label:"最小值",prop:"min",type:"number"},{label:"最大值",prop:"max",type:"number"}]},value:[]}];export{me as BpmnExtend,ne as Control,ue as Dagre,ce as EndEventModel,de as EndEventView,be as ExclusiveGatewayModel,ve as ExclusiveGatewayView,ye as FlowModeler,we as FlowViewer,fe as Group,xe as GroupModel,Ce as GroupView,Te as Menu,De as NoteFlowModel,Ve as NoteFlowView,Me as NoteModel,he as NoteView,Ee as Panel,ge as ParallelGatewayModel,Ne as ParallelGatewayView,ke as ProcessModel,Ge as ProcessView,Fe as SequenceFlowModel,Le as SequenceFlowView,Pe as ServiceTaskModel,Se as ServiceTaskView,qe as StartEventModel,Ue as StartEventView,We as Tooltip,$e as TurboAdapter,je as UserTaskModel,Be as UserTaskView,He as assigneeColumn,Je as baseColumn,Ke as buttonColumn,Qe as circulateColumn,_e as defaultGraphData,Xe as defaultGroup,Ye as defaultOptions,Re as defaultTheme,oe as executionListenerColumn,Ze as formPropertyColumn,ea as gatewayColumn,aa as multiInstanceColumn,la as noteColumn,ta as processColumn,oa as propertyColumn,pa as sequenceFlowColumn,ia as serialColumn,ra as serviceTaskColumn,pe as taskListenerColumn,ie as timeLimitColumn,Ae as toLogicflowData,Ie as toTurboData,sa as userTaskColumn};
