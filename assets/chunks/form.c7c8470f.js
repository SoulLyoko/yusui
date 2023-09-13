import"./index.013eb64a.js";import{t as H,a as J}from"./index.af03a1c8.js";import{a as A,p as L,s as O,b as W,_ as u,c as $,i as B}from"./tree.c7a66f34.js";import{a as M}from"./index.63550f19.js";import{E as I}from"./index.ac500038.js";import{d as R,h as P,g as q,J as v,c as _,K as U,L as N,l as f,N as g,w as k,E as K,o as m,a as E,z as G,b as h,R as D,B as T}from"./framework.6b67ac47.js";function Q(e,o=[void 0,null],c=[]){if(typeof e!="object"||e===null)return e;const l={};for(const a in e){const p=o.every(r=>e[a]!==r),b=c.every(r=>!a.includes(r));p&&b&&(l[a]=e[a])}return l}function S(e,o=[void 0,null],c=[]){if(typeof e!="object")return e;if(Array.isArray(e))return e.map(a=>S(a,o,c));const l={};for(const a in e)if(e[a]&&typeof e[a]=="object")l[a]=S(e[a],o,c);else{const p=o.every(r=>e[a]!==r),b=c.every(r=>!a.includes(r));p&&b&&(l[a]=e[a])}return l}function X(e){var o;return((o=Object.prototype.toString.call(e).match(/\[object (.*)\]/))==null?void 0:o[1])??""}const Y=R({__name:"index",props:{modelValue:{}},setup(e){const c=M(e),{modelValue:l}=c,a=P(!1),p=P(-1),b=q({get(){var s;return((s=l.value)==null?void 0:s[p.value])??{}},set(s){if(l.value&&p.value!==-1){const d=Q(s,[void 0,null,""],["$"]);l.value[p.value]=d}}});async function r(){var s;!l.value&&(l.value=[]),await K(),(s=l.value)==null||s.push({})}function x(s,d){p.value=d,a.value=!0}function i(s,d){var V;(V=l.value)==null||V.splice(d,1)}const n=[{label:"否",value:!1},{label:"是",value:!0}],y={menuBtn:!1,span:24,labelWidth:100,column:[{label:"触发方式",prop:"trigger",type:"select",dicData:[{label:"值变化",value:"change"},{label:"聚焦时",value:"focus"},{label:"失焦时",value:"blur"}]},{label:"值类型",prop:"type",type:"select",dicData:[{label:"字符串",value:"string"},{label:"数字",value:"number"},{label:"布尔值",value:"boolean"},{label:"整数",value:"integer"},{label:"浮点数",value:"float"},{label:"日期",value:"date"},{label:"URL地址",value:"url"},{label:"十六进制",value:"hex"},{label:"邮箱",value:"email"},{label:"任意类型",value:"any"}]},{label:"是否必填",prop:"required",type:"radio",button:!0,dicData:n},{label:"错误消息",prop:"message"},{label:"正则表达式",prop:"pattern",prepend:"/",append:"/"},{label:"最小",prop:"min",type:"number"},{label:"最大",prop:"max",type:"number"},{label:"长度",prop:"len",type:"number"},{label:"禁止空白符",prop:"whitespace",type:"radio",button:!0,dicData:n},{label:"自定义校验函数",prop:"validator",labelWidth:120,component:A,tooltip:!0,width:"400px",defaultValue:`(rule, value, callback, source, options) => {

}`}]};return(s,d)=>{const V=v("avue-form"),w=v("el-drawer");return m(),_(U,null,[(m(!0),_(U,null,N(f(l),(t,C)=>(m(),_("div",{key:C},[g(f(I),{icon:"el-icon-setting",onClick:F=>x(t,C)},{default:k(()=>[E(" 配置规则 ")]),_:2},1032,["onClick"]),g(f(I),{text:"",icon:"el-icon-delete",onClick:F=>i(t,C)},null,8,["onClick"])]))),128)),g(f(I),{icon:"el-icon-plus",onClick:r},{default:k(()=>[E(" 添加规则 ")]),_:1}),g(w,{modelValue:a.value,"onUpdate:modelValue":d[1]||(d[1]=t=>a.value=t),title:"配置规则","append-to-body":"","destroy-on-close":""},{default:k(()=>[g(V,{modelValue:b.value,"onUpdate:modelValue":d[0]||(d[0]=t=>b.value=t),option:y},null,8,["modelValue"])]),_:1},8,["modelValue"])],64)}}}),Z={style:{display:"flex"}},j=R({__name:"index",props:{modelValue:{},tableData:{},prop:{},types:{},defaultValueType:{}},setup(e){const o=e,c=M(o),{modelValue:l}=c,a=P(o.defaultValueType??"string");G(l,i=>{i!==void 0&&(a.value=X(i).toLowerCase())},{immediate:!0});function p(){l.value=void 0}const b=[{label:"str",value:"string"},{label:"num",value:"number"},{label:"boo",value:"boolean"},{label:"arr",value:"array"},{label:"obj",value:"object"}],r=q(()=>{var i;return(i=o.types)!=null&&i.length?b.filter(n=>{var y;return(y=o.types)==null?void 0:y.includes(n.value)}):b}),x=[{label:"true",value:!0},{label:"false",value:!1}];return(i,n)=>{const y=v("el-input"),s=v("el-input-number"),d=v("avue-select"),V=v("el-option"),w=v("el-select");return m(),_("div",Z,[a.value==="string"?(m(),h(y,D({key:0,modelValue:f(l),"onUpdate:modelValue":n[0]||(n[0]=t=>T(l)?l.value=t:null)},i.$attrs),null,16,["modelValue"])):a.value==="number"?(m(),h(s,D({key:1,modelValue:f(l),"onUpdate:modelValue":n[1]||(n[1]=t=>T(l)?l.value=t:null),"controls-position":"right"},i.$attrs),null,16,["modelValue"])):a.value==="boolean"?(m(),h(d,D({key:2,modelValue:f(l),"onUpdate:modelValue":n[2]||(n[2]=t=>T(l)?l.value=t:null)},i.$attrs,{dic:x}),null,16,["modelValue"])):(m(),h(A,D({key:3,modelValue:f(l),"onUpdate:modelValue":n[3]||(n[3]=t=>T(l)?l.value=t:null),"value-type":a.value,tooltip:""},i.$attrs),null,16,["modelValue","value-type"])),g(w,{modelValue:a.value,"onUpdate:modelValue":n[4]||(n[4]=t=>a.value=t),clearable:!1,"suffix-icon":"",style:{width:"50px","flex-shrink":"0"},onChange:p},{default:k(()=>[(m(!0),_(U,null,N(r.value,t=>(m(),h(V,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])}}}),z=[{label:"字段标识",prop:"prop"},{label:"标签标题",prop:"label"},{label:"标签宽度",prop:"labelWidth",labelTip:'"auto"或数字'},{label:"标签位置",prop:"labelPosition",type:"radio",button:!0,dicData:L},{label:"组件尺寸",prop:"size",type:"radio",button:!0,dicData:O},{label:"数据类型",prop:"dataType",type:"select",labelTip:'会将数据转换为对应选择的数据类型，如：[1,2,3]=>"1,2,3"',dicData:[{label:"字符串",value:"string"},{label:"数字",value:"number"},{label:"数组",value:"array"}]},{label:"表单项栅格",prop:"span",type:"number",min:1,max:24},{label:"字段提示",prop:"tip"},{label:"字段提示位置",prop:"tipPlacement",type:"select",dicData:W},{label:"标签提示",prop:"labelTip"},{label:"标签提示位置",prop:"labelTipPlacement",type:"select",dicData:W},{label:"默认值",prop:"value",component:j},{label:"占位内容",prop:"placeholder"},{label:"是否可清空",prop:"clearable",component:u,defaultValue:!0},{label:"详情模式",prop:"detail",component:u,defaultValue:!1},{label:"是否只读",prop:"readonly",component:u,defaultValue:!1},{label:"是否禁用",prop:"disabled",component:u,defaultValue:!1},{label:"是否可见",prop:"display",component:u,defaultValue:!0},{label:"校验规则",prop:"rules",component:Y}],ee=[{labelWidth:0,type:"title",modelValue:"子表单/表格属性"},{label:"宽度",prop:"width",type:"number"},{label:"最小宽度",prop:"minWidth",type:"number"},{label:"固定列",prop:"fixed",type:"radio",button:!0,dicData:[{label:"左",value:"left"},{label:"右",value:"right"}]},{label:"超长省略",prop:"overHidden",component:u,defaultValue:!1},{label:"表头对齐方式",prop:"headerAlign",type:"radio",button:!0,dicData:$},{label:"对齐方式",prop:"align",type:"radio",button:!0,dicData:$},{label:"是否可搜索",prop:"search",component:u,defaultValue:!1},{label:"是否隐藏",prop:"hide",component:u,defaultValue:!1}],ue=({elementTree:e,activeElement:o})=>{var a;const c=H([e],(p,b,r)=>({...p,parent:r})),l=J(c,p=>p.id===o.id);return((a=l==null?void 0:l.parent)==null?void 0:a.name)==="dynamic"?[...z,...ee]:z},re={name:"form",title:"表单",isContainer:!0,disabledActions:["copy","delete","clear"],disabledSettings:["base","event","advance"],settings:[{label:"标签位置",prop:"labelPosition",type:"radio",button:!0,dicData:L},{label:"标签宽度",prop:"labelWidth",labelTip:'"auto"或数字'},{label:"标签后缀",prop:"labelSuffix"},{label:"显示按钮",prop:"menuBtn",type:"switch",value:!1,control(e,o){return e||(o.submitBtn=!1,o.emptyBtn=!1),{submitBtn:{display:e},emptyBtn:{display:e},menuSpan:{display:e},menuPosition:{display:e}}}},{label:"显示提交按钮",prop:"submitBtn",type:"switch",value:!1,control(e){return{submitIcon:{display:!!e},submitText:{display:!!e}}}},{label:"提交按钮图标",prop:"submitIcon",type:"icon",iconList:B},{label:"提交按钮文字",prop:"submitText"},{label:"显示清空按钮",prop:"emptyBtn",type:"switch",value:!1,control(e){return{emptyIcon:{display:!!e},emptyText:{display:!!e}}}},{label:"清空按钮图标",prop:"emptyIcon",type:"icon",iconList:B},{label:"清空按钮文字",prop:"emptyText"},{label:"按钮栅格",prop:"menuSpan",type:"number"},{label:"按钮位置",prop:"menuPosition",type:"radio",button:!0,dicData:$},{label:"分组转标签",prop:"tabs",component:u,defaultValue:!1},{label:"详情模式",prop:"detail",component:u,defaultValue:!1},{label:"表单只读",prop:"readonly",component:u,defaultValue:!1},{label:"表单禁用",prop:"disabled",component:u,defaultValue:!1},{label:"表单项栅格",prop:"span",type:"number",value:24},{label:"表单项间隔",prop:"gutter",type:"number"},{label:"组件尺寸",prop:"size",type:"radio",button:!0,dicData:O},{label:"隐藏星号",prop:"hideRequiredAsterisk",component:u,defaultValue:!1},{label:"星号的位置",prop:"requireAsteriskPosition",type:"radio",button:!0,dicData:[{label:"左",value:"left"},{label:"右",value:"right"}]},{label:"滚动到错误项",prop:"scrollToError",labelWidth:120,labelTip:"当校验失败时，滚动到第一个错误表单项",component:u,defaultValue:!1},{label:"滚动配置",prop:"scrollIntoViewOptions",labelTip:"当校验有失败结果时，滚动到第一个失败的表单项目时的滚动配置 https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView",component:A,tooltip:!0,defaultValue:"{}"}]};export{Y as _,S as a,ue as b,j as c,re as f};
