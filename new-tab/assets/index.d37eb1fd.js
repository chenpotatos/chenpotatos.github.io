import{_ as e}from"./d-dialog.04f0d663.js";import{N as o,o as t,t as a,k as s,a as d,a1 as l,z as i,g as r,au as n,w as c,c as p,V as m,b as u,J as f,e as j,j as b,T as x,K as v,L as h,h as y,i as _,n as g,q as V,m as w,p as k,v as L,d as C,l as U,A as z,B as E}from"./el-select.b78411e2.js";/* empty css                   */import{a as O,b as T,E as I}from"./el-main.d6d5f932.js";import{E as M}from"./el-date-picker.9b41eb5c.js";/* empty css                  */import{D as Y}from"./d-color.cc67d107.js";import q from"./indexdb.57862a78.js";import{SAVE_CONFIG as B}from"./save_config.15a98e40.js";import{d as F}from"./debounce.abbfdaeb.js";import{o as R}from"./orderBy.bfc0914c.js";import{S as A}from"./Select.e99c6d44.js";import{E as D}from"./index.c7cdc822.js";import{E as K}from"./index.7dcba947.js";import{a3 as P,P as S}from"./main.4e240c16.js";import"./el-dialog.64bc625d.js";import"./index.c511a369.js";import"./index.48a3615c.js";import"./isObject.a01dee34.js";import"./style.7be20351.js";import"./icon.e5ddc463.js";import"./index.389214ec.js";import"./index.d2069d58.js";import"./focus-trap.37f37187.js";import"./aria.66f3f71c.js";import"./index.9a99ea33.js";import"./index.502472ff.js";import"./error.7e8331f1.js";import"./scroll.64fda821.js";/* empty css                   */import"./Close.c8424ab4.js";import"./panel-time-pick.d5c5b9e7.js";import"./index.007a0b27.js";import"./index.e2562b21.js";import"./index.d0852ddf.js";import"./isEqual.7e5ed192.js";import"./_baseIsEqual.4b13025e.js";import"./_Uint8Array.e97e1f00.js";import"./_arrayPush.949d1e07.js";import"./index.9bab3cd4.js";import"./index.ada3624c.js";import"./dayOfYear.268cbabe.js";import"./index.4a61e9ca.js";import"./flatten.a2fc3c9f.js";import"./_baseFlatten.730083dc.js";import"./index.62a578ca.js";import"./position.9519b900.js";import"./localforage.60f13183.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./public-api.7aa6cb2f.js";import"./index.c6f50bb1.js";import"./axios.91e25212.js";import"./baseRequest.da51274f.js";import"./version.8d34b113.js";import"./website.a253acac.js";import"./index.77989186.js";/* empty css                */import"./_baseOrderBy.1143981c.js";import"./hasIn.63fdf8ae.js";import"./identity.737b3aaf.js";import"./_baseFor.671df8ff.js";import"./typescript.72bf8adc.js";import"./index.34bbf0a0.js";var J=o({name:"MoreFilled"});const N={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},$=s("path",{fill:"currentColor",d:"M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"},null,-1);J.render=function(e,o,s,d,l,i){return t(),a("svg",N,[$])},J.__file="packages/components/MoreFilled.vue";const G=J,H=""+new URL("../audio/complete.wav",import.meta.url).href,Q=e=>(z("data-v-b3da7dcb"),e=e(),E(),e),W={class:"todo-wrap d-layout"},X=Q((()=>y("p",{class:"d-left-tabs-item"},"所有待办",-1))),Z={key:0,class:"mt10 f12 pl20"},ee=["onClick"],oe={class:"d-cell d-hidden d-main"},te={style:{width:"50px",height:"34px"}},ae={class:"todo-add"},se=["onKeyup"],de=Q((()=>y("span",{class:"toto-add-line"},null,-1))),le=[Q((()=>y("source",{src:H},null,-1)))],ie=d({__name:"Content",setup(e){const o=l(),d=i({inputValue:"",todoList:[],sortTodo:[]});function z(e){if(!e)return;let o=C(`${e} 23:59:59`).valueOf();return!!e&&C().valueOf()>o}const E=r(null);(async()=>{let e=await q.get("todo");e||(e=U.get("todo"),await q.set("todo",e)),d.todoList=e})();const J=F((async e=>{q.set("todo",n(e))}),500);c((()=>d.todoList),(e=>{let t=R(e=e||[],["ut","done"],["asc"]);d.sortTodo=t,o.value=d.sortTodo.slice(0,3),J(e)}),{deep:!0});const N=()=>{if(!d.inputValue)return;let e={content:d.inputValue,expire:"",color:"",done:!1,ct:C().valueOf()};d.todoList.unshift(e),d.inputValue="",$()};function $(){B("todo")}const H=p((()=>100*(d.todoList||[]).filter((e=>e.done)).length/d.todoList.length+"%"));return(e,o)=>{const l=m("el-icon");return t(),u("div",W,[s(j(I),{class:"d-layout hfull"},{default:f((()=>[s(j(O),{class:"d-left-tabs pt30",style:{"background-color":"var(--bg-info)",width:"160px"}},{default:f((()=>[X])),_:1}),s(j(T),{class:"todo-content pr10 hfull"},{default:f((()=>[d.todoList.length?b("",!0):(t(),u("div",Z,"赶快添加您的第一条待办吧")),s(x,{tag:"ul",name:"list-complete",class:"todo-content-ul d-sub"},{default:f((()=>[(t(!0),u(v,null,h(d.sortTodo,((e,o)=>(t(),u("li",{class:"todo-content-li",key:e},[y("button",{class:_(["todo-check",{done:e.done}]),style:g({borderColor:e.color}),onClick:V((o=>(e=>{e.done=!e.done,e.done&&(E.value.load(),E.value.play()),$()})(e)),["prevent"])},[s(l,{class:"todo-icon-check"},{default:f((()=>[s(j(A))])),_:1})],14,ee),y("div",oe,[s(j(D),{autosize:{minRows:1,maxRows:10},type:"textarea",size:"small",onInput:$,class:_(["todo-text",{done:e.done}]),modelValue:e.content,"onUpdate:modelValue":o=>e.content=o},null,8,["class","modelValue","onUpdate:modelValue"]),s(j(M),{onChange:o=>e.focus=!1,clearable:!0,class:_(["item-expire",{isExpire:z(e.expire)}]),"value-format":"YYYY-MM-DD",size:"small",modelValue:e.expire,"onUpdate:modelValue":o=>e.expire=o,type:"date",style:{"--el-input-hover-border-color":"transparent","--el-input-focus-border-color":"transparent"},placeholder:"-"},null,8,["onChange","class","modelValue","onUpdate:modelValue"])]),y("div",te,[e.done?b("",!0):(t(),a(j(K),{key:0,placement:"bottom-end",width:200,trigger:"hover"},{reference:f((()=>[s(l,null,{default:f((()=>[s(j(G))])),_:1})])),default:f((()=>[y("div",null,[s(Y,{title:"优先级",custom:!1,modelValue:e.color,"onUpdate:modelValue":o=>e.color=o,colors:["#e03131","#ffb000","#4772fa","var(--d-sub)"]},null,8,["modelValue","onUpdate:modelValue","colors"])])])),_:2},1024)),s(l,{class:"ml10 mr10",title:"删除",onClick:o=>(e=>{let o=d.todoList.findIndex((o=>o===e));d.todoList.splice(o,1),$()})(e)},{default:f((()=>[s(j(P))])),_:2},1032,["onClick"])])])))),128))])),_:1}),y("div",ae,[s(l,{size:16,class:"todo-add-icon d-sub"},{default:f((()=>[s(j(S))])),_:1}),w(y("input",{autofocus:"autofocus",class:"todo-add-input bb",type:"text",onKeyup:k(N,["enter"]),placeholder:"添加任务","onUpdate:modelValue":o[0]||(o[0]=e=>d.inputValue=e)},null,40,se),[[L,d.inputValue,void 0,{trim:!0}]]),de])])),_:1})])),_:1}),y("div",{class:"todo-progress",style:g({width:j(H)})},[y("audio",{class:"d-hidden",ref_key:"refAudio",ref:E},le,512)],4)])}}},[["__scopeId","data-v-b3da7dcb"]]),re={name:"appTodo"},ne=Object.assign(re,{setup:o=>(o,d)=>(t(),a(e,{height:"600px"},{default:f((()=>[s(ie)])),_:1}))});export{ne as default};
