import{a as e,g as a,c as t,o as l,b as s,h as o,S as r,C as u,x as d,n,e as i,i as c,R as m}from"./el-select.b78411e2.js";const p=["value","name"],v={class:"mt10",style:{height:"24px","line-height":"24px"}},g={class:"d-radio__title"},_=e({__name:"d-radio",props:{modelValue:{type:[Number,String,Boolean]},value:[Number,String,Boolean],title:String},emits:["update:modelValue","change"],setup(e,{emit:_}){const h=e,y=a(null),V=t((()=>h.modelValue===h.value)),b=e=>{m((()=>{const a=e.target.value;_("update:modelValue",a),_("change",a)}))},f=t((()=>{let e=document.documentElement.style.getPropertyValue("--primary-color").trim();return V.value?`background-color:${e}10`:""}));return(a,t)=>(l(),s("div",{class:c(["d-radio ac",{"is-checked":i(V)}])},[o("input",{class:"d-radio__input",ref_key:"input",ref:y,type:"radio",value:e.value,name:e.modelValue,onInput:b},null,40,p),o("div",{style:n(i(f)),class:"d-radio__core"},[r(a.$slots,"default",{},(()=>[u(d(e.value),1)]),!0)],4),o("div",v,[o("span",g,d(e.title),1)])],2))}},[["__scopeId","data-v-aee43ad9"]]);export{_ as D};
