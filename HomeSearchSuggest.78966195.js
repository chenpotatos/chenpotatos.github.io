import{a as e,f as s,_ as a,u as i,z as t,l,c as n,g as c,P as o,w as r,Q as u,o as d,b as p,h as m,i as h,K as k,L as y,q as _,k as f,e as g,j as v,x as w,n as b,C as x,J as I,m as V,s as E,t as S,A as R,B as A}from"./el-select.b78411e2.js";import{u as j,g as L,d as P,a0 as T,o as C,$ as q,c as B,a1 as D}from"./main.4e240c16.js";import{gridsumAnalytics as O,googleAnalytics as K}from"./statistics.b3c69f56.js";import{useStatisticsApi as $}from"./useSta.6b879b11.js";import{a as W}from"./axios.91e25212.js";import"./baseRequest.da51274f.js";import"./version.8d34b113.js";const H=e=>(R("data-v-ca352a74"),e=e(),A(),e),z={class:"se-list-keyword"},U=["onClick","title"],J=["onClick"],Q=["src"],F={class:"d-elip se-item-title"},G={class:"se-item-icon",style:{color:"var(--primary-color)"}},M={class:"f18 d-icon",size:18},N=H((()=>m("p",{class:"d-elip se-item-title"},"添加",-1))),X={key:0,class:"req-baidu-per"},Y=H((()=>m("span",{class:"f13 d-block"},"授权开启联想搜索，搜索时将显示联想词。iTab不会获取您的任何数据，建议您授权",-1))),Z={class:"se-keyword-icon d-icon f16"},ee=["onClick","data-index"],se={class:"se-keyword-icon d-icon f16",size:16},ae={class:"d-cell d-elip"},ie=["onClick"],te={name:"HomeSearchSuggest"},le=e(Object.assign(te,{props:{currSearch:{type:Object,default:{}}},emits:["selectSearch","selectSug"],setup(e,{expose:R,emit:A}){const H=e,te=s((()=>a((()=>import("./Close.c8424ab4.js")),["./Close.c8424ab4.js","./el-select.b78411e2.js","./el-select.b0658523.css"],import.meta.url))),le=s((()=>a((()=>import("./main.4e240c16.js").then((e=>e.af))),["./main.4e240c16.js","./el-select.b78411e2.js","./el-select.b0658523.css","./index.ebca1297.css"],import.meta.url))),ne=s((()=>a((()=>import("./AccessTimeRound.eba6dd38.js").then((e=>e.A))),["./AccessTimeRound.eba6dd38.js","./el-select.b78411e2.js","./el-select.b0658523.css"],import.meta.url))),ce=s((()=>a((()=>import("./TranslateRound.c5c07646.js").then((e=>e.T))),["./TranslateRound.c5c07646.js","./el-select.b78411e2.js","./el-select.b0658523.css"],import.meta.url))),oe=s((()=>a((()=>import("./index.4a61e9ca.js")),["./index.4a61e9ca.js","./index.c511a369.js","./el-select.b78411e2.js","./el-select.b0658523.css","./index.48a3615c.js","./isObject.a01dee34.js","./style.7be20351.js","./index.502472ff.js","./index.d0852ddf.js","./index.e2562b21.js","./index.389214ec.js","./icon.e5ddc463.js"],import.meta.url)));j();const re=i(),ue=s((()=>a((()=>import("./HomeSearchList.e9b8ee18.js")),["./HomeSearchList.e9b8ee18.js","./el-select.b78411e2.js","./el-select.b0658523.css","./index.c6f50bb1.js","./axios.91e25212.js","./baseRequest.da51274f.js","./version.8d34b113.js","./el-dialog.64bc625d.js","./index.c511a369.js","./index.48a3615c.js","./isObject.a01dee34.js","./style.7be20351.js","./icon.e5ddc463.js","./index.389214ec.js","./index.d2069d58.js","./focus-trap.37f37187.js","./aria.66f3f71c.js","./index.9a99ea33.js","./index.502472ff.js","./error.7e8331f1.js","./scroll.64fda821.js","./el-dialog.f4eb42cc.css","./el-checkbox.0618e214.js","./index.e2562b21.js","./index.d0852ddf.js","./hasIn.63fdf8ae.js","./_arrayPush.949d1e07.js","./flatten.a2fc3c9f.js","./_baseFlatten.730083dc.js","./_overRest.38ce022a.js","./identity.737b3aaf.js","./el-checkbox.aec27a4a.css","./index.c7cdc822.js","./typescript.72bf8adc.js","./index.34bbf0a0.js","./HomeSearchList.b107deb9.css","./el-overlay.f6b2674f.css","./el-checkbox-group.987ef89c.css"],import.meta.url)));let de=W.CancelToken;const pe=t({value:"",engienVisible:!1,showKeyWord:!1,keyList:[],value:"",keyIndex:-1,searchVisible:!1,isReqBaiduSgPer:!0});function me(e){if(l.set("isAuthBaidu",e),"0"===e)return pe.isReqBaiduSgPer=!1,void a((()=>import("./index.267059ee.js")),["./index.267059ee.js","./el-select.b78411e2.js","./el-select.b0658523.css","./config-provider.551e79dd.js","./index.c511a369.js","./index.48a3615c.js","./isObject.a01dee34.js","./style.7be20351.js","./index.e2562b21.js","./typescript.72bf8adc.js","./icon.e5ddc463.js","./index.389214ec.js","./aria.66f3f71c.js","./index.9a99ea33.js"],import.meta.url).then((e=>{e.default.warning("如果想开启搜索建议, 在空白处右键-设置-搜索栏-开启搜索建议 即可")}));chrome&&chrome.permissions.request({origins:["https://www.baidu.com/"]},(e=>{e&&(pe.isReqBaiduSgPer=!1,console.log("获取baidu权限成功"))}))}L()||"safari"==P()||"firefox"==P()||T?pe.isReqBaiduSgPer=!1:chrome&&chrome.permissions.contains({origins:["https://www.baidu.com/"]},(e=>{pe.isReqBaiduSgPer=!e,e&&l.set("isAuthBaidu","1"),"0"===l.get("isAuthBaidu")&&(pe.isReqBaiduSgPer=!1)}));const he=n((()=>re.value.search.history&&!pe.value));let ke=c(l.get("searchHistory")||[]);a((()=>import("./indexdb.57862a78.js")),["./indexdb.57862a78.js","./localforage.60f13183.js","./el-select.b78411e2.js","./el-select.b0658523.css","./_commonjs-dynamic-modules.30ae7933.js"],import.meta.url).then((e=>{e.default.get("searchHistory").then((e=>{ke.value=e||ke.value}))}));const ye=n((()=>pe.value?pe.keyList||[]:re.value.search.history?ke.value:[]));const _e=n((()=>{let e=ye.value.length;return pe.value&&e++,30*e+"px"}));function fe(e){q(".se-input-box").contains(e.target)||(pe.showKeyWord=!1,pe.engienVisible=!1)}o((()=>{C(q("#searchInput"),"input",ve),C(q("#searchInput"),"keydown",we),C(q("#searchInput"),"click",(()=>{pe.showKeyWord=!0,pe.engienVisible=!1})),C(q("#selectEngine"),"click",(e=>{pe.engienVisible=!pe.engienVisible})),C(document,"click",fe)})),r((()=>pe.showKeyWord),(e=>{e&&O("i",{gscmd:"impress",gid:"gad_545_isw11x5k",ck:1113,adk:11029})})),u((()=>{B(q("#searchInput"),"input",ve),B(q("#searchInput"),"keydown",we),B(document,"click",fe)}));let ge=null;function ve(e){if(pe.value=e.target.value,pe.value){if(pe.showKeyWord=!0,pe.keyIndex=-1,L()||"safari"==P()||"firefox"==P()||T){const e=de.source();return ge&&(ge.cancel("取消请求"),ge=null),ge=e,void W.get(`https://api.codelife.cc/api/baidu_sugrec/${pe.value}`,{cancelToken:e.token}).then((e=>{let s=e.data;pe.keyList=(s.g||[]).map((e=>e.q))}))}{ge&&(ge.abort(),ge=null);const e=new AbortController,{signal:s}=e;ge=e;let a=l.get("isAuthBaidu");if(!a||"0"===a)return;fetch(`https://www.baidu.com/sugrec?&prod=pc&wd=${pe.value}`,{signal:s}).then((e=>e.json())).then((e=>{let s=e.g||[];s=s.map((e=>e.q)),pe.keyList=s,ge=null}))}}else pe.keyList=[]}function we(e){let s=e.code;["ArrowDown","ArrowUp"].includes(s)?be(e):"Tab"===s&&function(e){e.preventDefault();let s=re.value.useSearch||"baidu",a=re.value.searchEngine.findIndex((e=>e.key==s)),i=(re.value.searchEngine||[]).length;a+=1,a>=i&&(a=0);let t=re.value.searchEngine[a];re.value.useSearch=t.key,A("selectSearch",t)}(e)}function be(e){let s=e.code;"ArrowDown"===s?(pe.keyIndex++,pe.keyIndex>=11&&(pe.keyIndex=0)):"ArrowUp"===s&&(e.preventDefault(),pe.keyIndex--,pe.keyIndex<=0&&(pe.keyIndex=10)),pe.keyIndex>0&&A("selectSug",pe.keyList[pe.keyIndex-1])}function xe(e,s,i){if(i&&229==i.keyCode)return;!async function(e){if(e){ke.value.unshift(e),ke.value=[...new Set(ke.value)],ke.value=ke.value.splice(0,10);let s=await a((()=>import("./indexdb.57862a78.js")),["./indexdb.57862a78.js","./localforage.60f13183.js","./el-select.b78411e2.js","./el-select.b0658523.css","./_commonjs-dynamic-modules.30ae7933.js"],import.meta.url);s=s.default,s.set("searchHistory",ke._rawValue)}}(e),e=encodeURIComponent(e);let t=`${H.currSearch.href}${e} `,l=H.currSearch.key;if("douyin"==l&&(t+="?ug_source=iTab_ssrk"),0===pe.keyIndex||"fanyi"==s){let s=re.value.search.translate||"https://translate.volcengine.com/translate";s.includes("//translate.volcengine.com")?(O("c",{gid:"gad_545_isw11x5k",ck:1113,adk:11029}),t=`https://translate.volcengine.com/translate?text=${e}&from=itab`):t=`${s}${e}`,l=`翻译-${s}`}K({t:"event",ec:l,ea:"use",el:"search"}),$({name:l}),pe.showKeyWord=!1;let n=re.value.open&&re.value.open.searchBlank?"_blank":"_self";document.body.clientWidth<600&&t.includes("www.baidu.com")&&(t=t.replace("www","m")),window.open(t,n),setTimeout((()=>{A("selectSug",""),pe.keyList=[],pe.value=""}),500)}return R({searchHandle:xe}),(s,i)=>(d(),p(k,null,[m("div",z,[m("ul",{class:h(["se-all",{action:pe.engienVisible}])},[(d(!0),p(k,null,y(g(re).searchEngine,((s,a)=>(d(),p("li",{onClick:_((e=>{return A("selectSearch",a=s),pe.engienVisible=!1,void(re.value.useSearch=a.key);var a}),["stop"]),class:"se-item",key:s.key,title:s.title},[0!==a?(d(),p("i",{key:0,title:"删除",onClick:_((e=>function(e){re.value.searchEngine.splice(e,1)}(a)),["stop"]),class:"f12 d-icon se-item-del"},[f(g(te))],8,J)):v("",!0),m("span",{class:h(["se-item-icon",{action:s.key==e.currSearch.key}])},[m("img",{class:"search-icon",src:`https://files.codelife.cc/itab/search/${s.key}.svg`},null,8,Q)],2),m("p",F,w(s.title),1)],8,U)))),128)),m("li",{key:"add",onClick:i[0]||(i[0]=_((e=>pe.searchVisible=!0),["stop"])),class:"se-item",title:"添加"},[m("span",G,[m("i",M,[f(g(le))])]),N])],2),pe.showKeyWord?(d(),p("ul",{key:0,class:h(["se-keyword al",{isReqBaidu:pe.isReqBaiduSgPer}]),style:b([{height:g(_e)}])},[pe.isReqBaiduSgPer?(d(),p("div",X,[x(" 开启联想词搜索建议 "),Y,m("p",null,[f(g(oe),{size:"small",onClick:i[1]||(i[1]=e=>me("0"))},{default:I((()=>[x("取消")])),_:1}),f(g(oe),{size:"small",type:"primary",onClick:i[2]||(i[2]=e=>me("1"))},{default:I((()=>[x("授权")])),_:1})])])):v("",!0),m("li",{onClick:i[3]||(i[3]=_((e=>xe(pe.value||g(ye)[0],"fanyi")),["stop"])),class:h(["se-keyword-item d-elip item-fanyi",{focus:0===pe.keyIndex}]),onKeydown:be},[m("i",Z,[f(g(ce))]),m("span",null,w(pe.value||g(ye)[0]),1)],34),(d(!0),p(k,null,y(g(ye),((e,s)=>(d(),p("li",{onClick:_((s=>xe(e)),["stop"]),class:h(["se-keyword-item d-elip d-flex-y",{focus:pe.keyIndex==s+1}]),key:e,"data-index":s+1},[m("i",se,[V(f(g(ne),null,null,512),[[E,!pe.value]]),V(f(g(D),null,null,512),[[E,pe.value]])]),m("span",ae,w(e),1),g(he)?(d(),p("i",{key:0,onClick:_((e=>async function(e){ke.value.splice(e,1),ke.value=ke.value;let s=await a((()=>import("./indexdb.57862a78.js")),["./indexdb.57862a78.js","./localforage.60f13183.js","./el-select.b78411e2.js","./el-select.b0658523.css","./_commonjs-dynamic-modules.30ae7933.js"],import.meta.url);s=s.default,s.set("searchHistory",ke._rawValue)}(s)),["stop"]),class:"se-history-del d-icon f16",size:16},[f(g(te))],8,ie)):v("",!0)],10,ee)))),128))],6)):v("",!0)]),pe.searchVisible?(d(),S(g(ue),{key:0,modelValue:pe.searchVisible,"onUpdate:modelValue":i[4]||(i[4]=e=>pe.searchVisible=e)},null,8,["modelValue"])):v("",!0)],64))}}),[["__scopeId","data-v-ca352a74"]]);export{le as default};