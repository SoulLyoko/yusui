import{B as se,C as me,D as ne,E as ue,e as ce,f as de,g as be,_ as ve,a as ye,s as we,G as fe,r as xe,M as Te,p as Ce,q as De,N as Ve,o as Me,t as he,h as Ee,i as ge,P as Ne,b as Ge,m as ke,n as Fe,k as Le,l as Pe,S as Se,c as qe,w as Ue,T as We,U as $e,j as je,d as Be,v as Re,u as Ae}from"./index.vue_vue_type_script_setup_true_lang.beec5675.js";import{d as Oe}from"./data.4cb21f02.js";import{b as ze,c as He,e as Je,d as Ke,a as Qe,f as Xe,g as Ye,m as Ze,n as ea,p as aa,h as la,s as ta,i as oa,j as pa,u as ia}from"../flow-design_flow-modeler_index.md.09bbbfe3.js";import"./framework.58691f2b.js";import"./theme.79d710c4.js";import"../composables_use-crud_index.md.fba15c80.js";import"../app.ff731f0e.js";import"../components_basic-container_index.md.9b371e9c.js";import"../components_icon-select_index.md.2adaa6f9.js";import"../components_index.md.eb74fc9b.js";import"../components_v-text_index.md.fffa2334.js";import"../composables_index.md.4f63e5ec.js";import"../flow-design_flow-viewer_index.md.0f2bbce1.js";import"../flow-design_index.md.36aaaa61.js";import"../flow-pages_index.md.96a87367.js";import"../flow-pages_pages_flow-button_index.md.1f7d435d.js";import"../flow-pages_pages_flow-manage_index.md.6605ff50.js";import"../flow-pages_pages_flow-ops_index.md.48c2710e.js";import"../flow-pages_pages_flow-param_index.md.a838fc38.js";import"../flow-pages_pages_flow-template_index.md.3343aa48.js";import"../flow-pages_pages_flow-workbench_index.md.aed1688c.js";import"../flow-pages_pages_form-template_index.md.4c26b2a2.js";import"../flow-pages_pages_table-template_index.md.2f954a1a.js";import"../form-design_demo.md.7ed33b13.js";import"../form-design_index.md.646ff874.js";import"../guide_changelog.md.c4dd5b98.js";import"../guide_start.md.ac582e3a.js";import"../index.md.01cb05dd.js";import"../plugins_avue-patch_index.md.ff5dae71.js";import"../plugins_env-dts_index.md.d9ffa256.js";import"../plugins_index.md.85630059.js";import"../plugins_load-proxy_index.md.ee64d94d.js";import"../plugins_uni-ui-patch_index.md.369156f2.js";import"../plugins_uview-patch_index.md.0f6ccb1d.js";import"../types_avue_index.md.6dd55393.js";import"../utils_date_dateFormat.md.46292425.js";import"../utils_date_durationFormat.md.a9466ca5.js";import"../utils_emitter_mittAsync.md.fa0c1888.js";import"../utils_index.md.6539ff35.js";import"../utils_math_index.md.74592475.js";import"../utils_object_filterObj.md.7e4e2a5d.js";import"../utils_object_filterObjDeep.md.30ba6b3d.js";import"../utils_object_getDataType.md.e91e1325.js";import"../utils_string_deserialize.md.53d74973.js";import"../utils_string_serialize.md.46d95769.js";import"../utils_string_uuid.md.0357bc06.js";import"../utils_tool_awaitTo.md.02770430.js";import"../utils_tool_enumToDic.md.9f356deb.js";import"../utils_tool_sleep.md.1f530da0.js";import"../utils_tree_buildTree.md.90191de7.js";import"../utils_tree_filterTree.md.75f848cc.js";import"../utils_tree_findTree.md.19218304.js";import"../utils_tree_flatTree.md.aad7510e.js";import"../utils_tree_treeMap.md.d5162fe5.js";const e=[{label:"开始",value:"start"},{label:"任务",value:"task"},{label:"结束",value:"end"}],a=[{label:"类",value:"class"},{label:"表达式",value:"expression"},{label:"代理表达式",value:"delegateExpression"}],l=[{label:"字符串",value:"string"},{label:"表达式",value:"expression"}],te=[{label:"",labelWidth:0,prop:"executionListener",type:"dynamic",children:{type:"form",index:!1,column:[{label:"事件",prop:"eventName",type:"select",dicData:e},{label:"类型",prop:"eventType",type:"select",dicData:a},{label:"值",prop:"eventValue",type:"textarea",minRows:1,span:24},{label:"字段",prop:"fields",type:"dynamic",span:24,children:{column:[{label:"字段名",prop:"fieldName"},{label:"类型",prop:"fieldType",type:"select",dicData:l},{label:"值",prop:"fieldValue"}]}}]}}],t=[{label:"创建",value:"create"},{label:"指派",value:"assignment"},{label:"完成",value:"complete"},{label:"删除",value:"delete"},{label:"更新",value:"update"},{label:"超时",value:"timeout"}],o=[{label:"类",value:"class"},{label:"表达式",value:"expression"},{label:"代理表达式",value:"delegateExpression"}],p=[{label:"字符串",value:"string"},{label:"表达式",value:"expression"}],oe=[{label:"",labelWidth:0,prop:"executionListener",type:"dynamic",children:{type:"form",index:!1,column:[{label:"事件",prop:"eventName",type:"select",dicData:t},{label:"类型",prop:"eventType",type:"select",dicData:o},{label:"值",prop:"eventValue",type:"textarea",minRows:1,span:24},{label:"字段",prop:"fields",type:"dynamic",span:24,children:{column:[{label:"字段名",prop:"fieldName"},{label:"类型",prop:"fieldType",type:"select",dicData:p},{label:"值",prop:"fieldValue"}]}}]}}],pe=[{label:"",labelWidth:0,prop:"timeLimit",type:"dynamic",children:{column:[{label:"名称",prop:"name"},{label:"最小值",prop:"min",type:"number"},{label:"最大值",prop:"max",type:"number"}]},value:[]}];export{se as BpmnExtend,me as Control,ne as Dagre,ue as EndEventModel,ce as EndEventView,de as ExclusiveGatewayModel,be as ExclusiveGatewayView,ve as FlowModeler,ye as FlowViewer,we as Group,fe as GroupModel,xe as GroupView,Te as Menu,Ce as NoteFlowModel,De as NoteFlowView,Ve as NoteModel,Me as NoteView,he as Panel,Ee as ParallelGatewayModel,ge as ParallelGatewayView,Ne as ProcessModel,Ge as ProcessView,ke as SequenceFlowModel,Fe as SequenceFlowView,Le as ServiceTaskModel,Pe as ServiceTaskView,Se as StartEventModel,qe as StartEventView,Ue as Tooltip,We as TurboAdapter,$e as UserTaskModel,je as UserTaskView,ze as assigneeColumn,He as baseColumn,Je as buttonColumn,Oe as defaultGraphData,Ke as defaultGroup,Qe as defaultOptions,Be as defaultTheme,te as executionListenerColumn,Xe as formPropertyColumn,Ye as gatewayColumn,Ze as multiInstanceColumn,ea as noteColumn,aa as processColumn,la as propertyColumn,ta as sequenceFlowColumn,oa as serialColumn,pa as serviceTaskColumn,oe as taskListenerColumn,pe as timeLimitColumn,Re as toLogicflowData,Ae as toTurboData,ia as userTaskColumn};
