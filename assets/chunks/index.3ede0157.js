import{g as D}from"./index.vue_vue_type_script_setup_true_lang.ce8bf743.js";import{S as wa,$ as Ca,T as Ia,U as Ma,_ as La,Z as Ra,V as Ua,W as ja,X as Aa,Y as Ba,a2 as Fa,a3 as za,a as Ea,e as Ga,h as Ha,b as Pa,k as qa,a6 as Ja,l as Ka,a0 as Na,m as Qa,a1 as Wa,n as Xa,t as Ya,q as Za,v as $a,x as at,f as tt,z as et,A as ot,B as rt,c as st,C as it,i as pt,j as mt,D as nt,a5 as lt,a4 as dt,o as ct,r as ut,E as vt,F as ft,p as yt,d as bt,G as gt,H as Dt,I as St,s as Vt,J as kt,K as _t,L as Ot,M as ht,N as xt,O as Tt,P as wt,Q as Ct,R as It,u as Mt,w as Lt,y as Rt}from"./index.vue_vue_type_script_setup_true_lang.ce8bf743.js";import{u as S}from"./theme.5db20171.js";import{h as V,r as k,G as i,i as p,C as m,u as n}from"./framework.b266b145.js";import"../composables_use-crud_index.md.b68a9fc1.js";import"./vue.runtime.esm-bundler.0ad4d8a3.js";import"../app.4528da56.js";import"../components_icon-select_index.md.4fb331fc.js";import"../components_index.md.46cf363d.js";import"../components_v-text_index.md.e98d43c0.js";import"../composables_index.md.3044f1ae.js";import"../flow-design_flow-modeler_index.md.a7cf72ad.js";import"./data.4cb21f02.js";import"../flow-design_flow-viewer_index.md.79ca8d22.js";import"../flow-design_index.md.743c5e3a.js";import"../flow-pages_index.md.e99b69fa.js";import"../flow-pages_pages_flow-button_index.md.bed80d55.js";import"../flow-pages_pages_flow-manage_index.md.46189761.js";import"../flow-pages_pages_flow-ops_index.md.a424c38b.js";import"../flow-pages_pages_flow-param_index.md.ef0e553b.js";import"../flow-pages_pages_flow-template_index.md.f798a59b.js";import"../flow-pages_pages_flow-workbench_index.md.5e52b719.js";import"../flow-pages_pages_form-template_index.md.3f80c849.js";import"../flow-pages_pages_table-template_index.md.b8ad4f81.js";import"../form-design_demo.md.9d5a6cab.js";import"../form-design_index.md.24447ebb.js";import"../guide_changelog.md.0ad24ee9.js";import"../guide_start.md.761dfe93.js";import"../index.md.2d064c25.js";import"../plugins_avue-patch_index.md.48e20c21.js";import"../plugins_env-dts_index.md.71927072.js";import"../plugins_index.md.8ac5c6d9.js";import"../plugins_load-proxy_index.md.6a28ebff.js";import"../plugins_setup-extend_index.md.d0060799.js";import"../plugins_uni-ui-patch_index.md.561160ff.js";import"../plugins_uview-patch_index.md.28102419.js";import"../types_avue_index.md.32c3526a.js";import"../utils_date_dateFormat.md.5067e69c.js";import"../utils_date_durationFormat.md.191b7e46.js";import"../utils_emitter_mittAsync.md.afaed53a.js";import"../utils_index.md.1cfabe15.js";import"../utils_math_index.md.679a3ea2.js";import"../utils_object_filterObj.md.37dc9792.js";import"../utils_object_filterObjDeep.md.a2aec3aa.js";import"../utils_object_getDataType.md.868c07a7.js";import"../utils_string_deserialize.md.fba5ee35.js";import"../utils_string_serialize.md.8c3bea90.js";import"../utils_string_uuid.md.6cca6855.js";import"../utils_tool_awaitTo.md.baefc1dc.js";import"../utils_tool_enumToDic.md.ba2933f9.js";import"../utils_tool_sleep.md.bd52f355.js";import"../utils_tree_buildTree.md.899c69cb.js";import"../utils_tree_filterTree.md.3b301401.js";import"../utils_tree_findTree.md.ce9b0fcb.js";import"../utils_tree_flatTree.md.335a4148.js";import"../utils_tree_treeMap.md.1dcbcbce.js";const ha=V({__name:"index",props:{modelValue:{},setterType:{}},setup(l){const d=S(l),{modelValue:o}=d,c={column:[{label:"名称",prop:"label"},{label:"值",prop:"value"}]},u={props:{value:"id"},formOption:{column:[{label:"名称",prop:"label"},{label:"值",prop:"value"}]}},r=k({});function v(t,a){t(),setTimeout(()=>{(a==="add"||a==="parentAdd")&&(r.value.id=D())},100)}const f=(t,a,e)=>e(),y=(t,a,e)=>e(),b=(t,a)=>a();return(t,a)=>{const e=i("avue-tree"),g=i("avue-dynamic");return t.setterType=="tree"?(p(),m(e,{key:0,modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=s=>r.value=s),data:n(o),option:u,"before-open":v,onSave:f,onUpdate:y,onDel:b},null,8,["modelValue","data"])):(p(),m(g,{key:1,children:c,"model-value":n(o)||[],"onUpdate:modelValue":a[1]||(a[1]=s=>o.value=s)},null,8,["model-value"]))}}});export{wa as ControlSetter,Ca as DesignActionMap,ha as DicDataSetter,Ia as DicTreeSetter,Ma as EditorSetter,La as FormDesign,Ra as HistoryTypeMap,Ua as OnLoadSetter,ja as RulesSetter,Aa as SwitchSetter,Ba as ValueSetter,Fa as adapterIn,za as adapterOut,Ea as advance,Ga as alignDic,Ha as array,Pa as base,qa as cascader,Ja as checkRules,Ka as checkbox,Na as cloneItem,Qa as color,Wa as copyItem,Xa as date,Ya as daterange,Za as dates,$a as datetime,at as datetimerange,tt as dic,et as dynamic,ot as form,D as getRandomId,rt as group,st as groupList,it as icon,pt as iconList,mt as img,nt as input,lt as jsonParse,dt as jsonStringify,ct as month,ut as monthrange,vt as number,ft as password,yt as placementDic,bt as positionDic,gt as radio,Dt as rate,St as select,Vt as sizeDic,kt as slider,_t as switch,Ot as table,ht as textarea,xt as time,Tt as timerange,wt as title,Ct as tree,It as upload,Mt as url,Lt as week,Rt as year};
