import{g}from"./index.vue_vue_type_script_setup_true_lang.f706c474.js";import{S as wa,$ as Ia,T as Ma,U as Aa,_ as Ca,Z as La,V as Ra,W as Ua,X as ja,Y as Ba,a2 as Fa,a3 as za,a as Ea,e as Ha,h as Pa,b as qa,k as Ga,a6 as Ja,l as Ka,a0 as Na,m as Qa,a1 as Wa,n as Xa,t as Ya,q as Za,v as $a,x as at,f as tt,z as et,A as ot,B as rt,c as st,C as it,i as pt,j as mt,D as nt,a5 as lt,a4 as dt,o as ct,r as ut,E as vt,F as ft,p as yt,d as Dt,G as bt,H as gt,I as St,s as Vt,J as kt,K as xt,L as Ot,M as _t,N as ht,O as Tt,P as wt,Q as It,R as Mt,u as At,w as Ct,y as Lt}from"./index.vue_vue_type_script_setup_true_lang.f706c474.js";import{d as S}from"./theme.79d710c4.js";import{f as V,r as k,D as p,h as m,A as n,u as l}from"./framework.58691f2b.js";import"../composables_use-crud_index.md.fba15c80.js";import"../app.ff731f0e.js";import"../components_basic-container_index.md.9b371e9c.js";import"../components_icon-select_index.md.2adaa6f9.js";import"../components_index.md.eb74fc9b.js";import"../components_v-text_index.md.fffa2334.js";import"../composables_index.md.4f63e5ec.js";import"../flow-design_flow-modeler_index.md.09bbbfe3.js";import"./data.4cb21f02.js";import"../flow-design_flow-viewer_index.md.0f2bbce1.js";import"../flow-design_index.md.36aaaa61.js";import"../flow-pages_index.md.96a87367.js";import"../flow-pages_pages_flow-button_index.md.1f7d435d.js";import"../flow-pages_pages_flow-manage_index.md.6605ff50.js";import"../flow-pages_pages_flow-ops_index.md.48c2710e.js";import"../flow-pages_pages_flow-param_index.md.a838fc38.js";import"../flow-pages_pages_flow-template_index.md.3343aa48.js";import"../flow-pages_pages_flow-workbench_index.md.aed1688c.js";import"../flow-pages_pages_form-template_index.md.4c26b2a2.js";import"../flow-pages_pages_table-template_index.md.2f954a1a.js";import"../form-design_demo.md.7ed33b13.js";import"../form-design_index.md.646ff874.js";import"../guide_changelog.md.c4dd5b98.js";import"../guide_start.md.ac582e3a.js";import"../index.md.01cb05dd.js";import"../plugins_avue-patch_index.md.ff5dae71.js";import"../plugins_env-dts_index.md.d9ffa256.js";import"../plugins_index.md.85630059.js";import"../plugins_load-proxy_index.md.ee64d94d.js";import"../plugins_uni-ui-patch_index.md.369156f2.js";import"../plugins_uview-patch_index.md.0f6ccb1d.js";import"../types_avue_index.md.6dd55393.js";import"../utils_date_dateFormat.md.46292425.js";import"../utils_date_durationFormat.md.a9466ca5.js";import"../utils_emitter_mittAsync.md.fa0c1888.js";import"../utils_index.md.6539ff35.js";import"../utils_math_index.md.74592475.js";import"../utils_object_filterObj.md.7e4e2a5d.js";import"../utils_object_filterObjDeep.md.30ba6b3d.js";import"../utils_object_getDataType.md.e91e1325.js";import"../utils_string_deserialize.md.53d74973.js";import"../utils_string_serialize.md.46d95769.js";import"../utils_string_uuid.md.0357bc06.js";import"../utils_tool_awaitTo.md.02770430.js";import"../utils_tool_enumToDic.md.9f356deb.js";import"../utils_tool_sleep.md.1f530da0.js";import"../utils_tree_buildTree.md.90191de7.js";import"../utils_tree_filterTree.md.75f848cc.js";import"../utils_tree_findTree.md.19218304.js";import"../utils_tree_flatTree.md.aad7510e.js";import"../utils_tree_treeMap.md.d5162fe5.js";import"./vue.runtime.esm-bundler.9b9f3da3.js";const _a=V({__name:"index",props:{modelValue:null,setterType:null},setup(i){const d=S(i),{modelValue:o}=d,c={column:[{label:"名称",prop:"label"},{label:"值",prop:"value"}]},u={props:{value:"id"},formOption:{column:[{label:"名称",prop:"label"},{label:"值",prop:"value"}]}},r=k({});function v(t,a){t(),setTimeout(()=>{(a==="add"||a==="parentAdd")&&(r.value.id=g())},100)}const f=(t,a,e)=>e(),y=(t,a,e)=>e(),D=(t,a)=>a();return(t,a)=>{const e=p("avue-tree"),b=p("avue-dynamic");return i.setterType=="tree"?(m(),n(e,{key:0,modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=s=>r.value=s),data:l(o),option:u,"before-open":v,onSave:f,onUpdate:y,onDel:D},null,8,["modelValue","data"])):(m(),n(b,{key:1,children:c,"model-value":l(o)||[],"onUpdate:modelValue":a[1]||(a[1]=s=>o.value=s)},null,8,["model-value"]))}}});export{wa as ControlSetter,Ia as DesignActionMap,_a as DicDataSetter,Ma as DicTreeSetter,Aa as EditorSetter,Ca as FormDesign,La as HistoryTypeMap,Ra as OnLoadSetter,Ua as RulesSetter,ja as SwitchSetter,Ba as ValueSetter,Fa as adapterIn,za as adapterOut,Ea as advance,Ha as alignDic,Pa as array,qa as base,Ga as cascader,Ja as checkRules,Ka as checkbox,Na as cloneItem,Qa as color,Wa as copyItem,Xa as date,Ya as daterange,Za as dates,$a as datetime,at as datetimerange,tt as dic,et as dynamic,ot as form,g as getRandomId,rt as group,st as groupList,it as icon,pt as iconList,mt as img,nt as input,lt as jsonParse,dt as jsonStringify,ct as month,ut as monthrange,vt as number,ft as password,yt as placementDic,Dt as positionDic,bt as radio,gt as rate,St as select,Vt as sizeDic,kt as slider,xt as switch,Ot as table,_t as textarea,ht as time,Tt as timerange,wt as title,It as tree,Mt as upload,At as url,Ct as week,Lt as year};