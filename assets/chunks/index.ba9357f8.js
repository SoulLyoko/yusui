import{s as r,S as d,g as l,G as i}from"./form.07a7ad88.js";class n extends r().model{getEdgeStyle(){const e=super.getEdgeStyle();return e.strokeDasharray="3 3",e}getTextPosition(){const{x:e,y:s}=this.text;return e&&s?{x:e,y:s}:this.dbClickPosition||{x:0,y:0}}}class a extends r().view{}const y={type:"noteFlow",model:n,view:a};class c extends d().model{setZIndex(e){typeof e=="number"&&e<0&&(this.zIndex=e)}createId(){return`Group_${l()}`}addChild(e){var s,o;super.addChild(e),(o=(s=this.graphModel.nodesMap[e])==null?void 0:s.model)==null||o.setProperty("groupKey",this.id)}removeChild(e){var s,o;super.removeChild(e),(o=(s=this.graphModel.nodesMap[e])==null?void 0:s.model)==null||o.deleteProperty("groupKey")}}class p extends d().view{}class g extends i{constructor({lf:e}){super({lf:e}),e.register({type:"group",model:c,view:p})}}export{y as N,g as S};
