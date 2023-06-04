import{_ as e}from"./d-dialog.04f0d663.js";import{N as a,a5 as t,c as l,g as s,o,b as n,h as r,i,e as c,x as d,k as u,j as p,d as m,a9 as f,ac as b,ao as v,a as g,K as j,L as h,Q as x,V as k,J as w,C as y,au as V,A as _,B as S,t as C,b5 as A,bg as O}from"./el-select.b78411e2.js";import{a as E,b as I,E as R}from"./el-main.d6d5f932.js";/* empty css                   */import{b as z}from"./bg-select.e29b3474.js";import"./el-tooltip.89296c46.js";import{w as T}from"./index.389214ec.js";import{_ as U}from"./d-font-family.232aca90.js";import{D}from"./d-color.cc67d107.js";import{w as H}from"./widget-icon-item.ff82e37a.js";import{a5 as P,f as B}from"./main.4e240c16.js";import{a as M}from"./addToDesk.73979dd0.js";import{c as Y}from"./cloneDeep.2ccdc48d.js";import{d as q,u as K,f as F,g as L,h as W,c as $,t as J,T as N,i as Q,C as G}from"./panel-time-pick.d5c5b9e7.js";import{b as X,d as Z,_ as ee}from"./index.c511a369.js";import{u as ae}from"./index.d2069d58.js";import{u as te}from"./index.48a3615c.js";import{E as le}from"./aria.66f3f71c.js";import{b as se}from"./_baseFlatten.730083dc.js";import{b as oe}from"./_baseRest.99185c71.js";import{s as ne,S as re,c as ie}from"./_baseIsEqual.4b13025e.js";import{l as ce}from"./_Uint8Array.e97e1f00.js";import{i as de}from"./isArrayLikeObject.38216022.js";import{E as ue}from"./index.007a0b27.js";import{E as pe,a as me}from"./index.60081c78.js";import"./el-dialog.64bc625d.js";import"./icon.e5ddc463.js";import"./focus-trap.37f37187.js";import"./style.7be20351.js";import"./index.9a99ea33.js";import"./index.502472ff.js";import"./error.7e8331f1.js";import"./scroll.64fda821.js";/* empty css                   */import"./Close.c8424ab4.js";import"./d-slider.6264aa01.js";import"./el-input-number.1aa680ac.js";import"./index.c7cdc822.js";import"./index.e2562b21.js";import"./typescript.72bf8adc.js";import"./index.34bbf0a0.js";import"./index.d0852ddf.js";import"./index.ada3624c.js";import"./save_config.15a98e40.js";import"./public-api.7aa6cb2f.js";import"./index.c6f50bb1.js";import"./axios.91e25212.js";import"./baseRequest.da51274f.js";import"./version.8d34b113.js";import"./website.a253acac.js";import"./index.77989186.js";/* empty css                */import"./indexdb.57862a78.js";import"./localforage.60f13183.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./debounce.abbfdaeb.js";import"./isObject.a01dee34.js";import"./d-scroll-x.f2cd1167.js";/* empty css                  */import"./index.4a61e9ca.js";import"./position.9519b900.js";import"./index.62a578ca.js";import"./throttle.0dfde511.js";import"./_baseClone.fe51b368.js";import"./_initCloneObject.73b0453a.js";import"./_arrayPush.949d1e07.js";import"./isEqual.7e5ed192.js";import"./index.9bab3cd4.js";import"./identity.737b3aaf.js";import"./_overRest.38ce022a.js";import"./strings.71c48fcd.js";import"./validator.56de5fb2.js";function fe(e){return e!=e}function be(e,a){return!!(null==e?0:e.length)&&function(e,a,t){return a==a?function(e,a,t){for(var l=t-1,s=e.length;++l<s;)if(e[l]===a)return l;return-1}(e,a,t):function(e,a,t,l){for(var s=e.length,o=t+(l?1:-1);l?o--:++o<s;)if(a(e[o],o,e))return o;return-1}(e,fe,t)}(e,a,0)>-1}function ve(e,a,t){for(var l=-1,s=null==e?0:e.length;++l<s;)if(t(a,e[l]))return!0;return!1}const ge=ce&&1/ne(new ce([,-0]))[1]==1/0?function(e){return new ce(e)}:function(){};const je=oe((function(e){return function(e,a,t){var l=-1,s=be,o=e.length,n=!0,r=[],i=r;if(t)n=!1,s=ve;else if(o>=200){var c=a?null:ge(e);if(c)return ne(c);n=!1,s=ie,i=new re}else i=a?[]:r;e:for(;++l<o;){var d=e[l],u=a?a(d):d;if(d=t||0!==d?d:0,n&&u==u){for(var p=i.length;p--;)if(i[p]===u)continue e;a&&i.push(u),r.push(d)}else s(i,u,t)||(i!==r&&i.push(u),r.push(d))}return r}(se(e,1,de,!0))})),he=X({...q,parsedValue:{type:Z(Array)}}),xe=["disabled"];var ke=ee(a({__name:"panel-time-range",props:he,emits:["pick","select-range","set-picker-option"],setup(e,{emit:a}){const b=e,v=(e,a)=>{const t=[];for(let l=e;l<=a;l++)t.push(l);return t},{t:g,lang:j}=ae(),h=te("time"),x=te("picker"),k=t("EP_PICKER_BASE"),{arrowControl:w,disabledHours:y,disabledMinutes:V,disabledSeconds:_,defaultValue:S}=k.props,C=l((()=>b.parsedValue[0])),A=l((()=>b.parsedValue[1])),O=K(b),E=l((()=>b.format.includes("ss"))),I=l((()=>b.format.includes("A")?"A":b.format.includes("a")?"a":"")),R=e=>{T(e.millisecond(0),A.value)},z=e=>{T(C.value,e.millisecond(0))},T=(e,t)=>{a("pick",[e,t],!0)},U=l((()=>C.value>A.value)),D=s([0,2]),H=(e,t)=>{a("select-range",e,t,"min"),D.value=[e,t]},P=l((()=>E.value?11:8)),B=(e,t)=>{a("select-range",e,t,"max");const l=c(P);D.value=[e+l,t+l]},M=(e,a)=>{const t=y?y(e):[],l="start"===e,s=(a||(l?A.value:C.value)).hour(),o=l?v(s+1,23):v(0,s-1);return je(t,o)},Y=(e,a,t)=>{const l=V?V(e,a):[],s="start"===a,o=t||(s?A.value:C.value);if(e!==o.hour())return l;const n=o.minute(),r=s?v(n+1,59):v(0,n-1);return je(l,r)},q=(e,a,t,l)=>{const s=_?_(e,a,t):[],o="start"===t,n=l||(o?A.value:C.value),r=n.hour(),i=n.minute();if(e!==r||a!==i)return s;const c=n.second(),d=o?v(c+1,59):v(0,c-1);return je(s,d)},$=([e,a])=>[X(e,"start",!0,a),X(a,"end",!1,e)],{getAvailableHours:J,getAvailableMinutes:N,getAvailableSeconds:Q}=F(M,Y,q),{timePickerOptions:G,getAvailableTime:X,onSetOption:Z}=L({getAvailableHours:J,getAvailableMinutes:N,getAvailableSeconds:Q});return a("set-picker-option",["formatToString",e=>e?f(e)?e.map((e=>e.format(b.format))):e.format(b.format):null]),a("set-picker-option",["parseUserInput",e=>e?f(e)?e.map((e=>m(e,b.format).locale(j.value))):m(e,b.format).locale(j.value):null]),a("set-picker-option",["isValidValue",e=>{const a=e.map((e=>m(e).locale(j.value))),t=$(a);return a[0].isSame(t[0])&&a[1].isSame(t[1])}]),a("set-picker-option",["handleKeydownInput",e=>{const a=e.code,{left:t,right:l,up:s,down:o}=le;if([t,l].includes(a)){return(e=>{const a=E.value?[0,3,6,11,14,17]:[0,3,8,11],t=["hours","minutes"].concat(E.value?["seconds"]:[]),l=(a.indexOf(D.value[0])+e+a.length)%a.length,s=a.length/2;l<s?G.start_emitSelectRange(t[l]):G.end_emitSelectRange(t[l-s])})(a===t?-1:1),void e.preventDefault()}if([s,o].includes(a)){const t=a===s?-1:1,l=D.value[0]<P.value?"start":"end";return G[`${l}_scrollDown`](t),void e.preventDefault()}}]),a("set-picker-option",["getDefaultValue",()=>{if(f(S))return S.map((e=>m(e).locale(j.value)));const e=m(S).locale(j.value);return[e,e.add(60,"m")]}]),a("set-picker-option",["getRangeAvailableTime",$]),(e,t)=>e.actualVisible?(o(),n("div",{key:0,class:i([c(h).b("range-picker"),c(x).b("panel")])},[r("div",{class:i(c(h).be("range-picker","content"))},[r("div",{class:i(c(h).be("range-picker","cell"))},[r("div",{class:i(c(h).be("range-picker","header"))},d(c(g)("el.datepicker.startTime")),3),r("div",{class:i([c(h).be("range-picker","body"),c(h).be("panel","content"),c(h).is("arrow",c(w)),{"has-seconds":c(E)}])},[u(W,{ref:"minSpinner",role:"start","show-seconds":c(E),"am-pm-mode":c(I),"arrow-control":c(w),"spinner-date":c(C),"disabled-hours":M,"disabled-minutes":Y,"disabled-seconds":q,onChange:R,onSetOption:c(Z),onSelectRange:H},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2),r("div",{class:i(c(h).be("range-picker","cell"))},[r("div",{class:i(c(h).be("range-picker","header"))},d(c(g)("el.datepicker.endTime")),3),r("div",{class:i([c(h).be("range-picker","body"),c(h).be("panel","content"),c(h).is("arrow",c(w)),{"has-seconds":c(E)}])},[u(W,{ref:"maxSpinner",role:"end","show-seconds":c(E),"am-pm-mode":c(I),"arrow-control":c(w),"spinner-date":c(A),"disabled-hours":M,"disabled-minutes":Y,"disabled-seconds":q,onChange:z,onSetOption:c(Z),onSelectRange:B},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2)],2),r("div",{class:i(c(h).be("panel","footer"))},[r("button",{type:"button",class:i([c(h).be("panel","btn"),"cancel"]),onClick:t[0]||(t[0]=e=>{a("pick",O.value,!1)})},d(c(g)("el.datepicker.cancel")),3),r("button",{type:"button",class:i([c(h).be("panel","btn"),"confirm"]),disabled:c(U),onClick:t[1]||(t[1]=e=>((e=!1)=>{a("pick",[C.value,A.value],e)})())},d(c(g)("el.datepicker.confirm")),11,xe)],2)],2)):p("v-if",!0)}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-range.vue"]]);m.extend($);const we=a({name:"ElTimePicker",install:null,props:{...J,isRange:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,a){const t=s(),[l,o]=e.isRange?["timerange",ke]:["time",N],n=e=>a.emit("update:modelValue",e);return b("ElPopperOptions",e.popperOptions),a.expose({focus:e=>{var a;null==(a=t.value)||a.handleFocusInput(e)},blur:e=>{var a;null==(a=t.value)||a.handleBlurInput(e)},handleOpen:()=>{var e;null==(e=t.value)||e.handleOpen()},handleClose:()=>{var e;null==(e=t.value)||e.handleClose()}}),()=>{var a;const s=null!=(a=e.format)?a:Q;return u(G,v(e,{ref:t,type:l,format:s,"onUpdate:modelValue":n}),{default:e=>u(o,e,null)})}}});we.install=e=>{e.component(we.name,we)};const ye=we,Ve={class:"d-checkbox-group"},_e=["checked","value","name"],Se={class:"d-checkbox-label"},Ce=g({__name:"d-checkbox",props:{modelValue:{type:Array,default:[]},name:String,data:{type:Array,default:[]}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e;function l(e){let l=e.target.value,s=[...t.modelValue];if(e.target.checked)s=[...t.modelValue,l];else{let e=t.modelValue.findIndex((e=>e==l));s.splice(e,1)}a("update:modelValue",s)}return(a,t)=>(o(),n("ul",Ve,[(o(!0),n(j,null,h(e.data,(a=>(o(),n("li",{class:"d-checkbox",key:a.value},[r("input",{onInput:l,checked:e.modelValue.includes(a.value.toString()),class:"d-checkbox-input",type:"checkbox",value:a.value,name:e.name},null,40,_e),r("label",Se,d(a.label),1)])))),128))]))}},[["__scopeId","data-v-9572433d"]]),Ae=e=>(_("data-v-b2c060ca"),e=e(),S(),e),Oe={class:"hfull countdown-wrap"},Ee={class:"setting-ul"},Ie={class:"setting-panel d-flex-between"},Re=Ae((()=>r("span",{class:"title"},"工作日",-1))),ze={class:"setting-panel d-flex-between"},Te=Ae((()=>r("span",{class:"title"},"工作时间",-1))),Ue={style:{width:"200px"}},De={class:"setting-panel d-flex-between"},He={class:"title"},Pe={class:"d-icon f16 d-sub",style:{"vertical-align":"-3px"}},Be={style:{width:"100px"},class:"ar f12"},Me={class:"setting-panel"},Ye={class:"setting-panel mt10"},qe={name:"appContent"},Ke=g(Object.assign(qe,{props:{row:{type:Object},isEdit:Boolean,size:String},setup(e){const a=e;s("color");const t=s("2x4");a.isEdit&&!a.row.config&&(a.row.config=P);const l=s(Y(a.row.config||P));function i(){if(a.isEdit)for(let e in l.value)a.row.config[e]=l.value[e]||"";else{let e={component:"countdown",name:"倒计时",size:t.value,type:"component",config:V(l.value)};M(e)}B.visible=!1}function p(e,a){a&&(l.value.textColor=a)}let m=null;return m&&clearInterval(m),m=setInterval((()=>{}),1e3),x((()=>{clearInterval(m)})),(a,s)=>{const m=k("d-button");return o(),n("div",Oe,[u(c(R),{class:"hfull"},{default:w((()=>[u(c(E),{style:{"background-color":"var(--bg-card)"},width:"420px"},{default:w((()=>[u(H,{data:l.value,style:{"margin-top":"120px","--icon-padding":"30px","--icon-size":"60px"},initSize:t.value,"onUpdate:initSize":s[0]||(s[0]=e=>t.value=e),row:{component:"countdown",size:"2x4",type:"component"}},null,8,["data","initSize"])])),_:1}),u(c(I),{style:{"background-color":"var(--bg-body)"}},{default:w((()=>[r("ul",Ee,[r("li",Ie,[Re,u(Ce,{style:{"--margin":"0 8px 0 0","--width":"30px",height:"32px"},modelValue:l.value.repeatWeek,"onUpdate:modelValue":s[1]||(s[1]=e=>l.value.repeatWeek=e),name:"week",class:"f12",data:[{label:"周一",value:1},{label:"周二",value:2},{label:"周三",value:3},{label:"周四",value:4},{label:"周五",value:5},{label:"周六",value:6},{label:"周日",value:0}]},null,8,["modelValue"])]),r("li",ze,[Te,r("div",Ue,[u(c(ye),{style:{"--el-fill-color-blank":"var(--bg-input)","--el-border-color":"transparent","--el-date-editor-width":"200px"},size:"small",modelValue:l.value.workTime,"onUpdate:modelValue":s[2]||(s[2]=e=>l.value.workTime=e),"is-range":"","range-separator":"至","start-placeholder":"上班","end-placeholder":"下班",clearable:!1,format:"HH:mm","value-format":"YYYY-MM-DD HH:mm"},null,8,["modelValue"])])]),r("li",De,[r("span",He,[y(" 发薪日 "),r("i",Pe,[u(c(ue),{effect:"dark",content:"发薪日只有在2x4组件模式下才可用"},{default:w((()=>[u(c(T))])),_:1})])]),r("div",Be,[y(" 每月 "),u(c(pe),{size:"small",style:{width:"50px"},modelValue:l.value.target,"onUpdate:modelValue":s[3]||(s[3]=e=>l.value.target=e),clearable:!1},{default:w((()=>[(o(),n(j,null,h(31,(e=>u(c(me),{label:e,value:e,key:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"]),y("日 ")])]),r("li",Me,[u(D,{title:"字体颜色",colors:["#ffffff","#333333","#9de5fe","#b8ceff","#efabc4","#daccfd","#fceaba","#f4f7ca","#d0eabb"],modelValue:l.value.textColor,"onUpdate:modelValue":s[4]||(s[4]=e=>l.value.textColor=e)},null,8,["modelValue"])]),u(z,{onChange:p,modelValue:l.value,"onUpdate:modelValue":s[5]||(s[5]=e=>l.value=e)},null,8,["modelValue"]),r("li",Ye,[u(U,{title:"字体",modelValue:l.value.family,"onUpdate:modelValue":s[6]||(s[6]=e=>l.value.family=e)},null,8,["modelValue"])])]),u(m,{size:"default",class:"wfull mt20",onClick:i,round:"",type:"primary"},{default:w((()=>[y(d(e.isEdit?"完 成":"添 加"),1)])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-b2c060ca"]]),Fe={__name:"index",setup:a=>(a,t)=>(o(),C(e,{width:"900px",height:"550px",destroyOnClose:!0},{default:w((()=>[u(Ke,A(O(a.$attrs)),null,16)])),_:1}))};export{Fe as default};
