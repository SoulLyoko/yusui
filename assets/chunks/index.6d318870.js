import"./index.a2682797.js";import{u as s,a as u}from"./option.b941d765.js";import"./iconify.a7519ee4.js";import"./index.81c79613.js";import"./index.8d913286.js";import"./tree.faa3b0d0.js";import"./vuedraggable.umd.3ed62a2a.js";import{h as f,r as c,H as d,j as _,D as v,u as b,i as y}from"./framework.87994f31.js";import"./dayjs.min.80392c58.js";import"./Uint8Array.e988a1a5.js";import"./index.ed326d4b.js";import"./omit.28986d82.js";import"./index.4aada9e5.js";import"./index.05b719a1.js";import"./snakeCase.65aa62e9.js";import"./createCompounder.a55b8569.js";import"./omitBy.dee5f82d.js";import"./theme.cdcbae00.js";import"./index.vue_vue_type_script_setup_true_lang.b05f95f4.js";import"./differenceBy.3d5e1611.js";import"../app.51ecf87c.js";import"./kebabCase.6f38f518.js";import"./vue.runtime.esm-bundler.673250a5.js";const M=f({__name:"index",setup(k,{expose:p}){const{formData:e,beforeClick:m,beforeSubmit:a}=s(),t=c(),i={menuBtn:!1,span:24,column:[{prop:"title",type:"title",value:"这是一个自定义表单"},{label:"输入框",prop:"input",placeholder:"请输入值",rules:[{required:!0,message:"请输入值"}]}]};return m.value=o=>{o.buttonKey==="flow_pass"&&console.log("正在选择审批人")},a.value=o=>{o.buttonKey==="flow_pass"&&console.log("正在提交")},p({validate:()=>u(t)}),(o,r)=>{const l=d("avue-form");return _(),v(l,{ref_key:"formRef",ref:t,modelValue:b(e),"onUpdate:modelValue":r[0]||(r[0]=n=>y(e)?e.value=n:null),option:i},null,8,["modelValue"])}}});export{M as default};
