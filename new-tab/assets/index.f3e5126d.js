import{N as e,g as t,c as l,o as a,t as o,J as s,h as i,i as r,e as n,n as c,D as d,j as p,C as m,x as u,k as f,S as h,ao as b,a as y,G as k,z as x,H as j,w as v,V as g,a6 as C,b as _,K as V,L as w,p as B,U as T,a0 as z,I as D,A as I,B as E}from"./el-select.b78411e2.js";/* empty css                   *//* empty css                *//* empty css                        *//* empty css                   *//* empty css                  */import{E as U,a as S}from"./el-checkbox.0618e214.js";/* empty css                          */import{_ as $}from"./d-dialog.04f0d663.js";import{d as A,P,a2 as F,a3 as K}from"./main.4e240c16.js";import{E as O}from"./index.c7cdc822.js";import{E as N,a as L}from"./index.60081c78.js";import{buttonTypes as R,ElButton as q}from"./index.4a61e9ca.js";import{ElImage as G}from"./index.6ce3651f.js";import{P as H}from"./PictureFilled.8e5bd67c.js";import{b as J,d as Y,E as Z,_ as M,w as Q}from"./index.c511a369.js";import{u as W,E as X}from"./index.007a0b27.js";import{C as ee}from"./index.389214ec.js";import{i as te}from"./icon.e5ddc463.js";import{u as le}from"./index.d2069d58.js";import{u as ae}from"./index.48a3615c.js";import{a as oe}from"./style.7be20351.js";import{ElMessage as se}from"./index.267059ee.js";import"./index.e2562b21.js";import"./focus-trap.37f37187.js";import"./aria.66f3f71c.js";import"./index.d0852ddf.js";import"./index.502472ff.js";import"./error.7e8331f1.js";import"./hasIn.63fdf8ae.js";import"./_arrayPush.949d1e07.js";import"./isObject.a01dee34.js";import"./flatten.a2fc3c9f.js";import"./_baseFlatten.730083dc.js";import"./_overRest.38ce022a.js";import"./identity.737b3aaf.js";import"./el-dialog.64bc625d.js";import"./index.9a99ea33.js";import"./scroll.64fda821.js";/* empty css                   */import"./Close.c8424ab4.js";import"./typescript.72bf8adc.js";import"./index.34bbf0a0.js";import"./index.9bab3cd4.js";import"./strings.71c48fcd.js";import"./isEqual.7e5ed192.js";import"./_baseIsEqual.4b13025e.js";import"./_Uint8Array.e97e1f00.js";import"./debounce.abbfdaeb.js";import"./index.62a578ca.js";import"./validator.56de5fb2.js";import"./throttle.0dfde511.js";import"./position.9519b900.js";import"./config-provider.551e79dd.js";const ie=J({title:String,confirmButtonText:String,cancelButtonText:String,confirmButtonType:{type:String,values:R,default:"primary"},cancelButtonType:{type:String,values:R,default:"text"},icon:{type:te,default:()=>ee},iconColor:{type:String,default:"#f90"},hideIcon:{type:Boolean,default:!1},hideAfter:{type:Number,default:200},onConfirm:{type:Y(Function)},onCancel:{type:Y(Function)},teleported:W.teleported,persistent:W.persistent,width:{type:[String,Number],default:150}}),re=e({name:"ElPopconfirm"});const ne=Q(M(e({...re,props:ie,setup(e){const y=e,{t:k}=le(),x=ae("popconfirm"),j=t(),v=()=>{var e,t;null==(t=null==(e=j.value)?void 0:e.onClose)||t.call(e)},g=l((()=>({width:oe(y.width)}))),C=e=>{var t;null==(t=y.onConfirm)||t.call(y,e),v()},_=e=>{var t;null==(t=y.onCancel)||t.call(y,e),v()},V=l((()=>y.confirmButtonText||k("el.popconfirm.confirmButtonText"))),w=l((()=>y.cancelButtonText||k("el.popconfirm.cancelButtonText")));return(e,t)=>(a(),o(n(X),b({ref_key:"tooltipRef",ref:j,trigger:"click",effect:"light"},e.$attrs,{"popper-class":`${n(x).namespace.value}-popover`,"popper-style":n(g),teleported:e.teleported,"fallback-placements":["bottom","top","right","left"],"hide-after":e.hideAfter,persistent:e.persistent}),{content:s((()=>[i("div",{class:r(n(x).b())},[i("div",{class:r(n(x).e("main"))},[!e.hideIcon&&e.icon?(a(),o(n(Z),{key:0,class:r(n(x).e("icon")),style:c({color:e.iconColor})},{default:s((()=>[(a(),o(d(e.icon)))])),_:1},8,["class","style"])):p("v-if",!0),m(" "+u(e.title),1)],2),i("div",{class:r(n(x).e("action"))},[f(n(q),{size:"small",type:"text"===e.cancelButtonType?"":e.cancelButtonType,text:"text"===e.cancelButtonType,onClick:_},{default:s((()=>[m(u(n(w)),1)])),_:1},8,["type","text"]),f(n(q),{size:"small",type:"text"===e.confirmButtonType?"":e.confirmButtonType,text:"text"===e.confirmButtonType,onClick:C},{default:s((()=>[m(u(n(V)),1)])),_:1},8,["type","text"])],2)],2)])),default:s((()=>[e.$slots.reference?h(e.$slots,"reference",{key:0}):p("v-if",!0)])),_:3},16,["popper-class","popper-style","teleported","hide-after","persistent"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/popconfirm/src/popconfirm.vue"]])),ce=e=>(I("data-v-05adf5fc"),e=e(),E(),e),de={class:"bookmarks-content wfull hfull"},pe={style:{"line-height":"40px"},class:"bookmarks-header bb d-row"},me=ce((()=>i("li",{class:"pl30 f16 ac d-col-8"},"书签管理",-1))),ue={class:"d-col-8",span:8},fe={class:"d-col-8",span:8},he=ce((()=>i("div",{class:"d-inline f12 ml20 mr10"},"导入到",-1))),be={class:"f12"},ye={class:"d-layout hfull"},ke={class:"d-layout-aside d-auto-y",style:{height:"calc(100% - 40px)",width:"160px"}},xe=["onClick"],je={ref:"refBody",style:{height:"calc(100% - 40px)"},class:"d-layout-content bookmarks-body"},ve={key:0,class:"ac mt50"},ge=ce((()=>i("p",{class:"mt10"},[m(" 进入官网选择适合自己浏览器的版本下载 "),i("a",{href:"https://itab.link",class:"book-item-a",target:"_blank"},"https://itab.link")],-1))),Ce={class:"body-item d-flex-y",style:{"justify-content":"space-between"}},_e={key:0,class:"d-cell d-flex"},Ve=["href"],we={class:"hfull d-flex-center"},Be={class:"d-elip"},Te={class:"bookmarks-handle",style:{"min-width":"52px"}},ze={name:"appBookmarks"},De=y(Object.assign(ze,{setup(e){const c=k(),d=t(!1),h=t(!1);let b=[];const y=x({activeIndex:0,keyword:"",selectData:[],booksData:[],booksChildren:[]});function I(e){y.selectData=e?b:[],h.value=!1}function E(e){const t=e.length;d.value=t===b.length,h.value=t>0&&t<b.length}function R(){if(y.selectData.length){let e=y.booksChildren.filter((e=>y.selectData.includes(e.id)));if(e.length>50)return void se.warning("最多只能导入50条数据");let t=e.map((e=>({backgroundColor:z(),iconText:e.title.trim().substring(0,2),id:D(),name:e.title,src:"",type:"text",url:e.url})));Y.value.children.push(...t),se.success(`批量导入了${t.length}条数据`)}}const J=!(chrome&&chrome.bookmarks),Y=l((()=>c.value.find((e=>e.id==j.value))));let Z=[];function M(e){e&&!J.value?(y.activeIndex=-1,chrome.bookmarks.search(e,(e=>{y.booksChildren=e||[]}))):(y.activeIndex=0,y.booksChildren=y.booksData[0].children||[])}function Q(e){e.edit?chrome.bookmarks.update(e.id,{title:e.title,url:e.url},(t=>{e.edit=!1})):e.edit=!0}function W(e,t){let l={...t,children:[]};e.forEach(((e,t)=>{e.url?l.children.push(e):e.children&&W(e.children,e)})),l.children.length&&Z.push(l)}return chrome&&chrome.bookmarks&&chrome.bookmarks.getTree((e=>{W(e,{}),y.booksData=Z||[],y.booksData[0]&&(y.booksChildren=y.booksData[0].children||[])})),v((()=>y.booksChildren),(e=>{e.length?(y.selectData=[],d.value=!1,h.value=!1,b=e.map((e=>e.id))):b=[]})),(e,t)=>{const l=g("el-icon");return a(),o($,{height:"600px",destroyOnClose:!0},{default:s((()=>[i("div",de,[i("ul",pe,[me,i("li",ue,[f(n(O),{style:{width:"200px"},placeholder:"搜索",onInput:M,size:"small",modelValue:y.keyword,"onUpdate:modelValue":t[0]||(t[0]=e=>y.keyword=e)},null,8,["modelValue"])]),i("li",fe,[he,f(n(N),{modelValue:n(j),"onUpdate:modelValue":t[1]||(t[1]=e=>C(j)?j.value=e:null),style:{width:"100px"},size:"small",placeholder:"group"},{default:s((()=>[(a(!0),_(V,null,w(n(c),(e=>(a(),o(n(L),{key:e.id,label:e.name,value:e.id},{default:s((()=>[i("span",be,u(e.name),1)])),_:2},1032,["label","value"])))),128))])),_:1},8,["modelValue"])])]),i("div",ye,[i("ul",ke,[(a(!0),_(V,null,w(y.booksData,((e,t)=>(a(),_("li",{onClick:l=>function(e,t){y.activeIndex=t,y.booksChildren=e.children||[]}(e,t),class:r([{active:y.activeIndex==t},"d-left-tabs-item"]),key:t},u(e.title),11,xe)))),128))]),i("ul",je,[J?(a(),_("div",ve,[m(" 书签管理只能在扩展模式下使用 "),ge])):p("",!0),i("div",null,[f(n(U),{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=e=>d.value=e),indeterminate:h.value,onChange:I},{default:s((()=>[m("全选")])),_:1},8,["modelValue","indeterminate"]),f(n(q),{class:"fr",disabled:!y.selectData.length,size:"small",type:"primary",onClick:R},{default:s((()=>[m("批量导入")])),_:1},8,["disabled"])]),f(n(S),{modelValue:y.selectData,"onUpdate:modelValue":t[3]||(t[3]=e=>y.selectData=e),onChange:E},{default:s((()=>[(a(!0),_(V,null,w(y.booksChildren,((e,t)=>(a(),_("div",{class:"body-card","body-style":{padding:"10px"},key:e.id},[(a(),o(n(U),{key:e.id,label:e.id},{default:s((()=>[i("div",Ce,[e.edit?(a(),_("p",_e,[f(n(O),{src:`chrome://favicon/size/32@2x/${e.url}`,class:"d-cell",onKeyup:B((t=>Q(e)),["enter"]),size:"small",placeholder:"标题",modelValue:e.title,"onUpdate:modelValue":t=>e.title=t},null,8,["src","onKeyup","modelValue","onUpdate:modelValue"]),f(n(O),{placeholder:"url",class:"d-cell ml5",onKeyup:B((t=>Q(e)),["enter"]),size:"small",modelValue:e.url,"onUpdate:modelValue":t=>e.url=t},null,8,["onKeyup","modelValue","onUpdate:modelValue"])])):(a(),_("a",{key:1,href:e.url,target:"_blank",class:"d-flex-y d-hidden"},[f(n(G),{style:{width:"16px",height:"16px"},src:"firefox"==n(A)()?`https://ico.codelife.cc/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${e.url}&size=16`:`chrome://favicon/size/32@2x/${e.url}`,class:"mr10"},{error:s((()=>[i("div",we,[f(l,{class:"d-sub",size:16},{default:s((()=>[f(n(H))])),_:1})])])),_:2},1032,["src"]),i("span",Be,u(e.title),1)],8,Ve)),i("p",Te,[f(n(q),{type:"warning",onClick:t=>function(e){let t={backgroundColor:z(),iconText:e.title.trim().substring(0,4),id:D(),name:e.title,src:"",type:"text",url:e.url};Y.value.children.push(t),se.success(`导入【${t.name}】成功`)}(e),size:"small",icon:n(P)},null,8,["onClick","icon"]),f(n(q),{onClick:t=>Q(e),size:"small",type:"primary",icon:e.edit?n(T):n(F)},null,8,["onClick","icon"]),f(n(ne),{onConfirm:l=>function(e,t){chrome.bookmarks.remove(e.id,(()=>{y.booksChildren.splice(t,1)}))}(e,t),title:"确认删除?"},{reference:s((()=>[f(n(q),{size:"small",type:"danger",icon:n(K)},null,8,["icon"])])),_:2},1032,["onConfirm"])])])])),_:2},1032,["label"]))])))),128))])),_:1},8,["modelValue"])],512)])])])),_:1})}}}),[["__scopeId","data-v-05adf5fc"]]);export{De as default};
