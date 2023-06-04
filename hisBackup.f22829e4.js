import{N as s,o as e,t as a,k as i,g as t,l as o,J as l,h as r,m as n,x as c,e as d,C as m,s as p,b as u,K as f,L as b,j,ao as v,au as g}from"./el-select.b78411e2.js";import{b as x}from"./baseRequest.da51274f.js";import{D as h}from"./d-tabs-x.666db9d0.js";import{a as y}from"./timeFormat.ee22e98c.js";import{w as k}from"./public-api.7aa6cb2f.js";/* empty css                       *//* empty css                  *//* empty css                   *//* empty css                   */import{E as w}from"./el-dialog.64bc625d.js";/* empty css                   *//* empty css                */import{SAVE_CONFIG as C}from"./save_config.15a98e40.js";import Y from"./indexdb.57862a78.js";import{E as H}from"./index.c511a369.js";import{ac as _}from"./main.4e240c16.js";import{E as D}from"./index.b2dab133.js";import{ElMessage as M}from"./index.267059ee.js";import{ElLoading as T}from"./index.622500ea.js";import"./axios.91e25212.js";import"./version.8d34b113.js";import"./index.c6f50bb1.js";import"./website.a253acac.js";import"./index.77989186.js";import"./Close.c8424ab4.js";import"./index.48a3615c.js";import"./isObject.a01dee34.js";import"./icon.e5ddc463.js";import"./index.389214ec.js";import"./index.d2069d58.js";import"./focus-trap.37f37187.js";import"./aria.66f3f71c.js";import"./style.7be20351.js";import"./index.9a99ea33.js";import"./index.502472ff.js";import"./error.7e8331f1.js";import"./scroll.64fda821.js";import"./debounce.abbfdaeb.js";import"./localforage.60f13183.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.4a61e9ca.js";import"./index.d0852ddf.js";import"./index.e2562b21.js";import"./index.c7cdc822.js";import"./typescript.72bf8adc.js";import"./index.34bbf0a0.js";import"./validator.56de5fb2.js";import"./config-provider.551e79dd.js";var V=s({name:"UploadFilled"});const z={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},E=i("path",{fill:"currentColor",d:"M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"},null,-1);V.render=function(s,i,t,o,l,r){return e(),a("svg",z,[E])},V.__file="packages/components/UploadFilled.vue";const F=V,U=r("div",{class:"ac f18 b mb10"},"历史备份节点列表",-1),A=r("p",{class:"f12 d-sub ac mb20 pr20 pl20"},[m(" 我们为您保留云端和本机各5个备份节点，云端历史备份需要登陆后手动备份 "),r("br"),m(" 数据修复请联系开发者微信：xdlumia ")],-1),B={class:"p50 al f12",style:{"padding-top":"10px"}},L={class:"d-flex-between mt15"},q={class:"d-sub"},J={class:"d-flex-x mt10"},K=r("div",{class:"mt20 mb10"},[r("h2",{class:"d-main f16 b"},"云端历史备份节点"),r("p",{class:"d-sub"}," 此功能需要登陆使用，登录后可以查看多设备之间历史节点 ")],-1),N={class:"history-list"},O={class:"d-sub"},R=["onClick"],$={class:"mr5 d-icon f14",style:{"vertical-align":"-3px"}},G={key:0,class:"ac d-sub"},I=r("div",{class:"mt20 mb10"},[r("h2",{class:"d-main f16 b"},"本机历史备份节点"),r("p",{class:"d-sub"},"此历史列表备份只包含本机历史备份的图标列表")],-1),P={class:"history-list"},Q={class:"d-sub"},S=["onClick"],W={class:"mr5 d-icon f14",style:{"vertical-align":"-3px"}},X={key:0,class:"ac d-sub"},Z={__name:"hisBackup",setup(s){const V=t([]),z=t(null),E=t([]),Z=t("cloud");function ss(s){"cloud"==s.id?es():as()}function es(){is()&&(((s={})=>x.get("/itab/userConfigHistory/list",{params:s}))({size:10}).then((s=>{V.value=s.data||[]})),((s={})=>x.get("/itab/config",{params:s}))({updateTime:1}).then((s=>{z.value=s.data.updateTime})))}function as(){Y.get("configHistory").then((s=>{E.value=s||[]}))}function is(){return!!o.get("token")}function ts(s){D.confirm("此操作将会覆盖本地数据, 是否继续?","恢复数据",{center:!0,type:"warning"}).then((()=>{const e=T.service({lock:!0,text:"恢复备份节点",background:"rgba(0, 0, 0, 0.7)"});((s={})=>x.get("/itab/userConfigHistory/info",{params:s}))({_id:s}).then((s=>{let a=s.data;k(a),e.close(),M({showClose:!0,message:"恢复成功",type:"success"})}))}))}return es(),as(),(s,t)=>(e(),a(d(w),v({class:"notion-dialog","close-on-press-escape":!1,width:"640px","append-to-body":""},s.$attrs),{default:l((()=>[U,A,r("div",B,[n(r("li",L,[r("span",q,"上次备份时间："+c(d(y)(z.value,"YYYY年MM月DD日 HH:mm:ss")),1),r("span",{onClick:t[0]||(t[0]=s=>{D.confirm("将本地数据备份到云端?","备份数据",{center:!0,type:"warning"}).then((()=>{C(null,100,"manua"),setTimeout((()=>{es()}),200)}))}),class:"d-pointer d-main"},[i(d(H),{size:14,style:{"vertical-align":"-3px","margin-right":"4px"}},{default:l((()=>[i(d(F))])),_:1}),m("立即备份 ")])],512),[[p,is()]]),r("div",J,[i(h,{modelValue:Z.value,"onUpdate:modelValue":t[1]||(t[1]=s=>Z.value=s),onTabClick:ss,data:[{name:"云端历史备份",id:"cloud"},{name:"本机历史备份",id:"local"}]},null,8,["modelValue"])]),n(r("div",null,[K,r("ul",N,[(e(!0),u(f,null,b(V.value,(s=>(e(),u("li",{class:"d-flex-between mt20",key:s},[r("span",O,c(d(y)(s.createTime,"YYYY年MM月DD日 HH:mm:ss")),1),r("span",{class:"d-main d-pointer d-hover",onClick:e=>ts(s._id)},[r("i",$,[i(d(_))]),m("从此节点恢复 ")],8,R)])))),128)),V.value.length?j("",!0):(e(),u("p",G,"暂无历史节点备份"))])],512),[[p,"cloud"===Z.value]]),n(r("div",null,[I,r("ul",P,[(e(!0),u(f,null,b(E.value,(s=>(e(),u("li",{class:"d-flex-between mt20",key:s},[r("span",Q,c(d(y)(s.ct,"YYYY年MM月DD日 HH:mm:ss")),1),r("span",{class:"d-main d-pointer d-hover",onClick:e=>{return a=s.ct,void D.confirm("此操作将会覆盖本地数据, 是否继续?","恢复数据",{center:!0,type:"warning"}).then((()=>{let s=E.value.find((s=>s.ct===a));k(g(s.data)),M({showClose:!0,message:"恢复成功",type:"success"})}));var a}},[r("i",W,[i(d(_))]),m("从此节点恢复 ")],8,S)])))),128)),E.value.length?j("",!0):(e(),u("p",X,"暂无历史节点备份"))])],512),[[p,"local"===Z.value]])])])),_:1},16))}};export{Z as default};