import{a as e,u as s,g as a,z as l,_ as t,o as i,t as o,J as d,h as c,k as r,e as n,b as m,K as p,L as u,x as f,ao as h,A as b,B as j,C as v}from"./el-select.b78411e2.js";import{a as x}from"./index.c6f50bb1.js";import{E as y}from"./el-dialog.64bc625d.js";/* empty css                   */import{a as g,E as k}from"./el-checkbox.0618e214.js";/* empty css                          */import{E as _}from"./index.c7cdc822.js";import"./axios.91e25212.js";import"./baseRequest.da51274f.js";import"./version.8d34b113.js";import"./index.c511a369.js";import"./index.48a3615c.js";import"./isObject.a01dee34.js";import"./style.7be20351.js";import"./icon.e5ddc463.js";import"./index.389214ec.js";import"./index.d2069d58.js";import"./focus-trap.37f37187.js";import"./aria.66f3f71c.js";import"./index.9a99ea33.js";import"./index.502472ff.js";import"./error.7e8331f1.js";import"./scroll.64fda821.js";import"./index.e2562b21.js";import"./index.d0852ddf.js";import"./hasIn.63fdf8ae.js";import"./_arrayPush.949d1e07.js";import"./flatten.a2fc3c9f.js";import"./_baseFlatten.730083dc.js";import"./_overRest.38ce022a.js";import"./identity.737b3aaf.js";import"./typescript.72bf8adc.js";import"./index.34bbf0a0.js";const V=e=>(b("data-v-42bdd49b"),e=e(),j(),e),E=V((()=>c("div",{class:"d-main"},[v(" 添加搜索引擎 "),c("p",{class:"mt5 f12 d-sub"},"最少添加1种，最多添加8种")],-1))),L={class:"s-e-main d-auto-y"},w={class:"serarch-list-item"},I={class:"d-elip d-flex-y"},C=["src"],O={style:{"line-height":"16px"}},R={class:"f13"},U={class:"f12 d-block d-sub d-elip"},z=V((()=>c("h3",{class:"d-main f14 mt10",style:{"line-height":"20px"}},"自定义搜索引擎",-1))),A={class:"serarch-list-item"},P={class:"d-elip d-flex-y"},S=["src"],$={style:{"line-height":"16px"},class:"wfull"},q={name:"homeSearchList"},B=e(Object.assign(q,{setup(e){var b;const j=s(),v=a(j.value.searchEngine.map((e=>e.key))),V=a(""),q=l({searchList:[],customSearchList:[],activeName:"default",addVisible:!1});V.value=(null==(b=j.value.searchEngine.find((e=>"custom"==e.key)))?void 0:b.href)||"";const B=e=>{if(v.value.includes(e.key))j.value.searchEngine.push(e);else{let s=j.value.searchEngine.findIndex((s=>e.key===s.key));j.value.searchEngine.splice(s,1)}};return async function(){let e=await t((()=>import("./indexdb.57862a78.js")),["./indexdb.57862a78.js","./localforage.60f13183.js","./el-select.b78411e2.js","./el-select.b0658523.css","./_commonjs-dynamic-modules.30ae7933.js"],import.meta.url);e=e.default;let s=await e.getItem("searchList");if(q.searchList=s.data||[],!s.isExp)return;x.searchEngienList().then((s=>{let a=s.data||[];q.searchList=a,e.set("searchList",a,1728e5)}))}(),(e,s)=>(i(),o(n(y),h({class:"s-e-dialog","append-to-body":"","lock-scroll":!0,width:"740px",title:"添加搜索引擎","destroy-on-close":""},e.$attrs),{header:d((()=>[E])),default:d((()=>[c("ul",L,[r(n(g),{modelValue:v.value,"onUpdate:modelValue":s[2]||(s[2]=e=>v.value=e),min:1,max:8},{default:d((()=>[c("span",null,[(i(!0),m(p,null,u(q.searchList,(e=>(i(),m("li",{key:e.key},[c("div",w,[r(n(k),{onChange:s=>B(e),class:"wfull",label:e.key},{default:d((()=>[c("div",I,[c("img",{class:"search-icon",src:`https://files.codelife.cc/itab/search/${e.key}.svg`},null,8,C),c("div",O,[c("span",R,f(e.title),1),c("span",U,f(e.href),1)])])])),_:2},1032,["onChange","label"])])])))),128))]),z,c("li",null,[c("div",A,[r(n(k),{onChange:s[1]||(s[1]=e=>B({key:"custom",title:"自定义",href:V.value})),class:"wfull",label:"custom"},{default:d((()=>[c("div",P,[c("img",{class:"search-icon",src:"https://files.codelife.cc/itab/search/custom.svg"},null,8,S),c("div",$,[r(n(_),{class:"wfull",modelValue:V.value,"onUpdate:modelValue":s[0]||(s[0]=e=>V.value=e),placeholder:"请输入搜索地址",style:{"--el-input-bg-color":"transparent"},size:"small"},null,8,["modelValue"])])])])),_:1})])])])),_:1},8,["modelValue"])]),r(n(y),{"append-to-body":"","lock-scroll":!0,width:"740px",modelValue:q.addVisible,"onUpdate:modelValue":s[3]||(s[3]=e=>q.addVisible=e)},null,8,["modelValue"])])),_:1},16))}}),[["__scopeId","data-v-42bdd49b"]]);export{B as default};
