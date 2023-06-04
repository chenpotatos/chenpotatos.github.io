import{_ as a}from"./d-dialog.04f0d663.js";import{N as e,o as s,t,k as l,a as o,aT as i,g as n,d as r,l as d,b as p,h as c,i as m,x as u,e as f,J as v,K as h,L as b,j as y,A as j,B as x}from"./el-select.b78411e2.js";import{aa as w}from"./main.4e240c16.js";/* empty css                */import{todayShiciApi as g}from"./todayShici.da5fdf16.js";import _ from"./indexdb.57862a78.js";import{E as k}from"./index.bb66dc83.js";import"./el-dialog.64bc625d.js";import"./index.c511a369.js";import"./index.48a3615c.js";import"./isObject.a01dee34.js";import"./style.7be20351.js";import"./icon.e5ddc463.js";import"./index.389214ec.js";import"./index.d2069d58.js";import"./focus-trap.37f37187.js";import"./aria.66f3f71c.js";import"./index.9a99ea33.js";import"./index.502472ff.js";import"./error.7e8331f1.js";import"./scroll.64fda821.js";/* empty css                   */import"./Close.c8424ab4.js";import"./baseRequest.da51274f.js";import"./axios.91e25212.js";import"./version.8d34b113.js";import"./localforage.60f13183.js";import"./_commonjs-dynamic-modules.30ae7933.js";var Y=e({name:"ArrowDown"});const C={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},q=l("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"},null,-1);Y.render=function(a,e,l,o,i,n){return s(),t("svg",C,[q])},Y.__file="packages/components/ArrowDown.vue";const D=Y,M=a=>(j("data-v-615ba75a"),a=a(),x(),a),S={class:"app-shici-body al d-relative",style:{"z-index":"2"}},z={class:"ac quotes d-relative",style:{"z-index":"2"}},A={class:"f14 mb20"},T={style:{"max-width":"700px",margin:"0 auto","line-height":"1.6"}},B=M((()=>c("h2",{class:"f20 mb20"},"全文",-1))),L={class:"b"},O={class:"f12 mb20"},R={class:"mb50 al"},E=M((()=>c("h2",{class:"f20 mb20"},"译文",-1))),I=M((()=>c("h2",{class:"f20 mb20"},"注释",-1))),J=M((()=>c("h2",{class:"f20 mb20"},"序",-1))),K=o({__name:"Content",setup(a){i((a=>({"699fe4e8":j.value})));const e=n(null),o=n({}),j=n(""),x=n(!1);function Y(a){j.value=a}async function C(a){let e=null;a||(e=await _.get("app-todayShici"),o.value=e),!a&&e&&e.date==r().format("YYYYMMDD")||g().then((a=>{let e=a.data||{};e.date=r().format("YYYYMMDD"),o.value=e,_.set("app-todayShici",e);let s={quotes:e.quotes,dynasty:e.dynasty,title:e.title,author:e.author,date:e.date};d.set("app-todayShici",s),x.value=!0,setTimeout((()=>{x.value=!1}),1200)}))}function q(){e.value.scrollTo({top:500,behavior:"smooth"})}return C(),(a,i)=>(s(),p("div",{ref_key:"appShiciRef",ref:e,class:"app-shici-wrap wfull d-relative hfull d-scrollbar-hide"},[c("div",S,[c("div",z,[c("h2",{class:m(["quotes-text",{animation:x.value}])},u(o.value.quotes),3),c("p",A,"出自 "+u(o.value.dynasty)+"⋅ "+u(o.value.author)+" 的《"+u(o.value.title)+"》",1),c("button",{onClick:i[0]||(i[0]=a=>C(!0)),class:"f14 mb20 app-button"},"换一句")]),l(w,{onColor:Y,class:"app-bg",style:{width:"100%",height:"auto"}}),c("div",{onClick:q,class:"arrow-down d-icon f22",style:{color:"#fff"}},[l(f(D))])]),c("div",T,[o.value.content?(s(),t(f(k),{key:0,shadow:"never",class:"mb50",style:{"margin-top":"120px"}},{default:v((()=>[B,c("h2",L,u(o.value.title),1),c("p",O,u(o.value.dynasty)+"⋅ "+u(o.value.author),1),c("div",null,[(s(!0),p(h,null,b(o.value.content.split("\n"),(a=>(s(),p("p",{style:{},class:"f14 mb10",key:a},u(a),1)))),128))])])),_:1})):y("",!0),o.value.translate?(s(),t(f(k),{key:1,shadow:"never",class:"mb50"},{default:v((()=>[c("div",R,[E,(s(!0),p(h,null,b(o.value.translate.split("\n"),(a=>(s(),p("p",{style:{"text-indent":"2em"},class:"mb20",key:a},u(a),1)))),128))])])),_:1})):y("",!0),o.value.annotation?(s(),t(f(k),{key:2,shadow:"never",class:"mb50"},{default:v((()=>[I,(s(!0),p(h,null,b(o.value.annotation.split("\n"),(a=>(s(),p("p",{class:"mb20",key:a},u(a),1)))),128))])),_:1})):y("",!0),o.value.preface?(s(),t(f(k),{key:3,shadow:"never",class:"mb50"},{default:v((()=>[J,(s(!0),p(h,null,b(o.value.preface.split("\n"),(a=>(s(),p("p",{style:{"line-height":"22px","text-indent":"2em"},key:a},u(a),1)))),128))])),_:1})):y("",!0)])],512))}},[["__scopeId","data-v-615ba75a"]]),N={__name:"index",setup:e=>(e,o)=>(s(),t(a,{width:"860px",height:"550px",destroyOnClose:!0},{default:v((()=>[l(K)])),_:1}))};export{N as default};