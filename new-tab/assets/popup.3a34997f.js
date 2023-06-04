import{N as e,c as s,o,b as a,h as t,S as i,e as l,t as r,i as n,D as c,j as d,x as p,a as u,z as m,l as f,a0 as b,P as j,J as x,k as g,n as v,E as y,K as _,L as k,C,q as w,I as h,a8 as V}from"./el-select.b78411e2.js";import{E as T,a as S}from"./el-form-item.adf4bc32.js";/* empty css                  */import{D as $}from"./d-color.cc67d107.js";import{SAVE_CONFIG as q}from"./save_config.15a98e40.js";import{w as A}from"./website.a253acac.js";import{a as E}from"./axios.91e25212.js";import{E as I}from"./index.c7cdc822.js";import{E as U,a as D}from"./index.60081c78.js";import{ElButton as z}from"./index.4a61e9ca.js";import{c as O,w as P,a as R,i as F}from"./index.389214ec.js";import{b as J,_ as K,w as L}from"./index.c511a369.js";import{u as N}from"./index.48a3615c.js";import{c as W}from"./cloneDeep.2ccdc48d.js";import"./index.e2562b21.js";import"./error.7e8331f1.js";import"./index.502472ff.js";import"./style.7be20351.js";import"./_baseClone.fe51b368.js";import"./_Uint8Array.e97e1f00.js";import"./_arrayPush.949d1e07.js";import"./isObject.a01dee34.js";import"./_initCloneObject.73b0453a.js";import"./index.007a0b27.js";import"./aria.66f3f71c.js";import"./focus-trap.37f37187.js";import"./index.9a99ea33.js";import"./position.9519b900.js";import"./index.d2069d58.js";import"./index.d0852ddf.js";import"./index.62a578ca.js";import"./debounce.abbfdaeb.js";import"./public-api.7aa6cb2f.js";import"./index.c6f50bb1.js";import"./baseRequest.da51274f.js";import"./version.8d34b113.js";import"./index.77989186.js";/* empty css                */import"./Close.c8424ab4.js";import"./indexdb.57862a78.js";import"./localforage.60f13183.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./icon.e5ddc463.js";import"./typescript.72bf8adc.js";import"./index.34bbf0a0.js";import"./index.9bab3cd4.js";import"./strings.71c48fcd.js";import"./scroll.64fda821.js";import"./isEqual.7e5ed192.js";import"./_baseIsEqual.4b13025e.js";import"./validator.56de5fb2.js";const B={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},G={[B.success]:O,[B.warning]:P,[B.error]:R,[B.info]:F},H=J({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),M=e({name:"ElResult"});const Q=L(K(e({...M,props:H,setup(e){const u=e,m=N("result"),f=s((()=>{const e=u.icon,s=e&&B[e]?B[e]:"icon-info";return{class:s,component:G[s]||G["icon-info"]}}));return(e,s)=>(o(),a("div",{class:n(l(m).b())},[t("div",{class:n(l(m).e("icon"))},[i(e.$slots,"icon",{},(()=>[l(f).component?(o(),r(c(l(f).component),{key:0,class:n(l(f).class)},null,8,["class"])):d("v-if",!0)]))],2),e.title||e.$slots.title?(o(),a("div",{key:0,class:n(l(m).e("title"))},[i(e.$slots,"title",{},(()=>[t("p",null,p(e.title),1)]))],2)):d("v-if",!0),e.subTitle||e.$slots["sub-title"]?(o(),a("div",{key:1,class:n(l(m).e("subtitle"))},[i(e.$slots,"sub-title",{},(()=>[t("p",null,p(e.subTitle),1)]))],2)):d("v-if",!0),e.$slots.extra?(o(),a("div",{key:2,class:n(l(m).e("extra"))},[i(e.$slots,"extra")],2)):d("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]])),X={class:"popup-body"},Y={class:"icon-preview mb10"},Z={class:"icon-preview-body"},ee=["src"],se=u({__name:"popup",setup(e){E.defaults.timeout=1e3;const s=m({navConfig:f.get("navConfig")||[],menuActiveId:"1",addSuccess:!1}),i=m({type:"",id:"",url:"",name:"",src:"",type:"text",iconText:"A",backgroundColor:b()});return j((()=>{chrome.tabs&&chrome.tabs.query({active:!0,lastFocusedWindow:!0},(async function(e){let s=e[0].url;i.url=s,i.name=e[0].title||"",i.iconText=i.name.substring(0,3),A({url:s,type:1},1e3).then((e=>{let s=e.data||{};i.backgroundColor=s.backgroundColor||b(),1==s.type?(i.type="icon",i.src=s.src):(i.type="text",i.iconText=i.name.substring(0,3))})).catch((()=>{i.type="text",i.iconText=i.name.substring(0,3),i.backgroundColor=b()}))}))})),(e,n)=>(o(),a("div",X,[s.addSuccess?(o(),r(l(Q),{key:1,icon:"success",title:"添加成功"})):(o(),r(l(S),{key:0,onSubmit:n[6]||(n[6]=w((()=>{}),["prevent"])),model:i,size:"default","label-width":"80px","label-position":"left"},{default:x((()=>[g(l(T),{label:"地址",prop:"url",required:""},{default:x((()=>[g(l(I),{autofocus:"",modelValue:i.url,"onUpdate:modelValue":n[0]||(n[0]=e=>i.url=e),placeholder:"https://"},null,8,["modelValue"])])),_:1}),g(l(T),{label:"名称",prop:"name",required:""},{default:x((()=>[g(l(I),{modelValue:i.name,"onUpdate:modelValue":n[1]||(n[1]=e=>i.name=e),maxlength:"30",placeholder:"网站名称"},null,8,["modelValue"])])),_:1}),g(l(T),{label:"",style:{"margin-bottom":"10px"}},{default:x((()=>[t("div",Y,[t("div",Z,["icon"==i.type?(o(),a("img",{key:0,class:"icon-preview-img",style:v(`background-color:${i.backgroundColor}`),src:i.src},null,12,ee)):(o(),r(y,{key:1,bgColor:i.backgroundColor,text:i.iconText},null,8,["bgColor","text"]))])])])),_:1}),g(l(T),{label:"分组"},{default:x((()=>[g(l(U),{"popper-class":"popup-group-select",modelValue:s.menuActiveId,"onUpdate:modelValue":n[2]||(n[2]=e=>s.menuActiveId=e)},{default:x((()=>[(o(!0),a(_,null,k(s.navConfig,(e=>(o(),r(l(D),{key:e.id,value:e.id,label:e.name},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])])),_:1}),"text"==i.type?(o(),r(l(T),{key:0,label:"图标文字"},{default:x((()=>[g(l(I),{placeholder:"请输入图标文字",maxlength:"6",modelValue:i.iconText,"onUpdate:modelValue":n[3]||(n[3]=e=>i.iconText=e)},null,8,["modelValue"])])),_:1})):d("",!0),g(l(T),{label:"图标背景"},{default:x((()=>[g($,{class:"wfull",modelValue:i.backgroundColor,"onUpdate:modelValue":n[4]||(n[4]=e=>i.backgroundColor=e)},null,8,["modelValue"])])),_:1}),g(l(T),{label:""},{default:x((()=>[g(l(z),{disabled:s.addSuccess,type:"primary",style:{width:"120px"},onClick:n[5]||(n[5]=e=>(i.id=h(),s.navConfig.find((e=>s.menuActiveId===e.id)).children.push(W(i)),f.set("navConfig",s.navConfig),q("navConfig",800),s.addSuccess=!0,void setTimeout((()=>{window.close()}),1e3)))},{default:x((()=>[C(p(s.addSuccess?"添加成功":"确 定"),1)])),_:1},8,["disabled"])])),_:1})])),_:1},8,["model"]))]))}},[["__scopeId","data-v-1d5e6a76"]]);V({__name:"App",setup:e=>(e,s)=>(o(),r(se))}).mount("#popup");
