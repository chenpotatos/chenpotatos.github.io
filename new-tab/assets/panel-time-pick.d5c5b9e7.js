import{W as e,d as a,ba as t,a9 as n,N as l,a5 as o,g as s,w as r,R as i,c as u,e as c,aK as d,ac as p,o as v,t as m,J as f,i as h,n as g,q as b,D as y,j as M,b as k,h as w,S as Y,x as D,ao as S,P,K as x,L as A,C as _,m as C,k as V,ak as $}from"./el-select.b78411e2.js";import{E as L}from"./index.c7cdc822.js";import{j as T,b as H,d as I,E as j,_ as E,e as R}from"./index.c511a369.js";import{E as O}from"./index.007a0b27.js";import{e as B,I as F,J as W,G as K,b as z}from"./index.389214ec.js";import{b as Z,u as N}from"./index.e2562b21.js";import{u as U}from"./index.d2069d58.js";import{u as q}from"./index.48a3615c.js";import{u as J}from"./index.d0852ddf.js";import{d as X}from"./error.7e8331f1.js";import{E as G}from"./aria.66f3f71c.js";import{i as Q}from"./isEqual.7e5ed192.js";import{E as ee}from"./index.9bab3cd4.js";import{v as ae}from"./index.ada3624c.js";import{d as te}from"./debounce.abbfdaeb.js";var ne={exports:{}};const le=ne.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,l=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},r=function(e){return function(a){this[e]=+a}},i=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var a=e.match(/([+-]|\d\d)/g),t=60*a[1]+(+a[2]||0);return 0===t?0:"+"===a[0]?-t:t}(e)}],u=function(e){var a=o[e];return a&&(a.indexOf?a:a.s.concat(a.f))},c=function(e,a){var t,n=o.meridiem;if(n){for(var l=1;l<=24;l+=1)if(e.indexOf(n(l,0,a))>-1){t=l>12;break}}else t=e===(a?"pm":"PM");return t},d={A:[l,function(e){this.afternoon=c(e,!1)}],a:[l,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,r("seconds")],ss:[n,r("seconds")],m:[n,r("minutes")],mm:[n,r("minutes")],H:[n,r("hours")],h:[n,r("hours")],HH:[n,r("hours")],hh:[n,r("hours")],D:[n,r("day")],DD:[t,r("day")],Do:[l,function(e){var a=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],a)for(var n=1;n<=31;n+=1)a(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,r("month")],MM:[t,r("month")],MMM:[l,function(e){var a=u("months"),t=(u("monthsShort")||a.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[l,function(e){var a=u("months").indexOf(e)+1;if(a<1)throw new Error;this.month=a%12||a}],Y:[/[+-]?\d+/,r("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,r("year")],Z:i,ZZ:i};function p(t){var n,l;n=t,l=o&&o.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(a,t,n){var o=n&&n.toUpperCase();return t||l[n]||e[n]||l[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,a,t){return a||t.slice(1)}))}))).match(a),r=s.length,i=0;i<r;i+=1){var u=s[i],c=d[u],p=c&&c[0],v=c&&c[1];s[i]=v?{regex:p,parser:v}:u.replace(/^\[|\]$/g,"")}return function(e){for(var a={},t=0,n=0;t<r;t+=1){var l=s[t];if("string"==typeof l)n+=l.length;else{var o=l.regex,i=l.parser,u=e.slice(n),c=o.exec(u)[0];i.call(a,c),e=e.replace(c,"")}}return function(e){var a=e.afternoon;if(void 0!==a){var t=e.hours;a?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(a),a}}return function(e,a,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=a.prototype,l=n.parse;n.parse=function(e){var a=e.date,n=e.utc,s=e.args;this.$u=n;var r=s[1];if("string"==typeof r){var i=!0===s[2],u=!0===s[3],c=i||u,d=s[2];u&&(d=s[2]),o=this.$locale(),!i&&d&&(o=t.Ls[d]),this.$d=function(e,a,t){try{if(["x","X"].indexOf(a)>-1)return new Date(("X"===a?1e3:1)*e);var n=p(a)(e),l=n.year,o=n.month,s=n.day,r=n.hours,i=n.minutes,u=n.seconds,c=n.milliseconds,d=n.zone,v=new Date,m=s||(l||o?1:v.getDate()),f=l||v.getFullYear(),h=0;l&&!o||(h=o>0?o-1:v.getMonth());var g=r||0,b=i||0,y=u||0,M=c||0;return d?new Date(Date.UTC(f,h,m,g,b,y,M+60*d.offset*1e3)):t?new Date(Date.UTC(f,h,m,g,b,y,M)):new Date(f,h,m,g,b,y,M)}catch(k){return new Date("")}}(a,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&a!=this.format(r)&&(this.$d=new Date("")),o={}}else if(r instanceof Array)for(var v=r.length,m=1;m<=v;m+=1){s[1]=r[m-1];var f=t.apply(this,s);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}m===v&&(this.$d=new Date(""))}else l.call(this,e)}}}(),oe=["hours","minutes","seconds"],se="HH:mm:ss",re="YYYY-MM-DD",ie={date:"YYYY-MM-DD",dates:"YYYY-MM-DD",week:"gggg[w]ww",year:"YYYY",month:"YYYY-MM",datetime:"YYYY-MM-DD HH:mm:ss",monthrange:"YYYY-MM",daterange:"YYYY-MM-DD",datetimerange:"YYYY-MM-DD HH:mm:ss"},ue=(e,a)=>[e>0?e-1:void 0,e,e<a?e+1:void 0],ce=e=>Array.from(Array.from({length:e}).keys()),de=e=>e.replace(/\W?m{1,2}|\W?ZZ/g,"").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi,"").trim(),pe=e=>e.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g,"").trim(),ve=function(e,a){const n=t(e),l=t(a);return n&&l?e.getTime()===a.getTime():!n&&!l&&e===a},me=function(e,a){const t=n(e),l=n(a);return t&&l?e.length===a.length&&e.every(((e,t)=>ve(e,a[t]))):!t&&!l&&ve(e,a)},fe=function(e,t,n){const l=T(t)||"x"===t?a(e).locale(n):a(e,t).locale(n);return l.isValid()?l:void 0},he=function(e,t,n){return T(t)?e:"x"===t?+e:a(e).locale(n).format(t)},ge=(e,a)=>{var t;const n=[],l=null==a?void 0:a();for(let o=0;o<e;o++)n.push(null!=(t=null==l?void 0:l.includes(o))&&t);return n},be=H({disabledHours:{type:I(Function)},disabledMinutes:{type:I(Function)},disabledSeconds:{type:I(Function)}}),ye=H({visible:Boolean,actualVisible:{type:Boolean,default:void 0},format:{type:String,default:""}}),Me=H({id:{type:I([Array,String])},name:{type:I([Array,String]),default:""},popperClass:{type:String,default:""},format:String,valueFormat:String,type:{type:String,default:""},clearable:{type:Boolean,default:!0},clearIcon:{type:I([String,Object]),default:B},editable:{type:Boolean,default:!0},prefixIcon:{type:I([String,Object]),default:""},size:Z,readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:""},popperOptions:{type:I(Object),default:()=>({})},modelValue:{type:I([Date,Array,String,Number]),default:""},rangeSeparator:{type:String,default:"-"},startPlaceholder:String,endPlaceholder:String,defaultValue:{type:I([Date,Array])},defaultTime:{type:I([Date,Array])},isRange:{type:Boolean,default:!1},...be,disabledDate:{type:Function},cellClassName:{type:Function},shortcuts:{type:Array,default:()=>[]},arrowControl:{type:Boolean,default:!1},label:{type:String,default:void 0},tabindex:{type:I([String,Number]),default:0},validateEvent:{type:Boolean,default:!0},unlinkPanels:Boolean}),ke=["id","name","placeholder","value","disabled","readonly"],we=["id","name","placeholder","value","disabled","readonly"],Ye=l({name:"Picker"});var De=E(l({...Ye,props:Me,emits:["update:modelValue","change","focus","blur","calendar-change","panel-change","visible-change","keydown"],setup(e,{expose:a,emit:t}){const l=e,{lang:P}=U(),x=q("date"),A=q("input"),_=q("range"),{form:C,formItem:V}=J(),$=o("ElPopperOptions",{}),T=s(),H=s(),I=s(!1),E=s(!1),R=s(null);let B=!1,K=!1;r(I,(e=>{e?i((()=>{e&&(R.value=l.modelValue)})):(Te.value=null,i((()=>{z(l.modelValue)})))}));const z=(e,a)=>{!a&&me(e,R.value)||(t("change",e),l.validateEvent&&(null==V||V.validate("change").catch((e=>X()))))},Z=e=>{if(!me(l.modelValue,e)){let a;n(e)?a=e.map((e=>he(e,l.valueFormat,P.value))):e&&(a=he(e,l.valueFormat,P.value)),t("update:modelValue",e?a:e,P.value)}},ee=u((()=>{if(H.value){const e=Ce.value?H.value:H.value.$el;return Array.from(e.querySelectorAll("input"))}return[]})),ae=(e,a,t)=>{const n=ee.value;n.length&&(t&&"min"!==t?"max"===t&&(n[1].setSelectionRange(e,a),n[1].focus()):(n[0].setSelectionRange(e,a),n[0].focus()))},te=(e="",a=!1)=>{let t;a||(K=!0),I.value=a,t=n(e)?e.map((e=>e.toDate())):e?e.toDate():e,Te.value=null,Z(t)},ne=()=>{E.value=!0},le=()=>{t("visible-change",!0)},oe=e=>{(null==e?void 0:e.key)===G.esc&&re(!0,!0)},se=()=>{E.value=!1,I.value=!1,K=!1,t("visible-change",!1)},re=(e=!0,a=!1)=>{K=a;const[t,n]=c(ee);let l=t;!e&&Ce.value&&(l=n),l&&l.focus()},ie=e=>{l.readonly||de.value||I.value||K||(I.value=!0,t("focus",e))};let ue;const ce=e=>{const a=async()=>{setTimeout((()=>{var n;ue===a&&((null==(n=T.value)?void 0:n.isFocusInsideContent())&&!B||0!==ee.value.filter((e=>e.contains(document.activeElement))).length||(He(),I.value=!1,t("blur",e),l.validateEvent&&(null==V||V.validate("blur").catch((e=>X())))),B=!1)}),0)};ue=a,a()},de=u((()=>l.disabled||(null==C?void 0:C.disabled))),pe=u((()=>{let e;if(Se.value?ze.value.getDefaultValue&&(e=ze.value.getDefaultValue()):e=n(l.modelValue)?l.modelValue.map((e=>fe(e,l.valueFormat,P.value))):fe(l.modelValue,l.valueFormat,P.value),ze.value.getRangeAvailableTime){const a=ze.value.getRangeAvailableTime(e);Q(a,e)||(e=a,Z(n(e)?e.map((e=>e.toDate())):e.toDate()))}return n(e)&&e.some((e=>!e))&&(e=[]),e})),ve=u((()=>{if(!ze.value.panelReady)return"";const e=je(pe.value);return n(Te.value)?[Te.value[0]||e&&e[0]||"",Te.value[1]||e&&e[1]||""]:null!==Te.value?Te.value:!be.value&&Se.value||!I.value&&Se.value?"":e?ye.value?e.join(", "):e:""})),ge=u((()=>l.type.includes("time"))),be=u((()=>l.type.startsWith("time"))),ye=u((()=>"dates"===l.type)),Me=u((()=>l.prefixIcon||(ge.value?F:W))),Ye=s(!1),De=e=>{l.readonly||de.value||Ye.value&&(e.stopPropagation(),re(!0,!0),i((()=>{K=!1})),Z(null),z(null,!0),Ye.value=!1,I.value=!1,ze.value.handleClear&&ze.value.handleClear())},Se=u((()=>{const{modelValue:e}=l;return!e||n(e)&&!e.filter(Boolean).length})),Pe=async e=>{var a;l.readonly||de.value||("INPUT"!==(null==(a=e.target)?void 0:a.tagName)||ee.value.includes(document.activeElement))&&(I.value=!0)},xe=()=>{l.readonly||de.value||!Se.value&&l.clearable&&(Ye.value=!0)},Ae=()=>{Ye.value=!1},_e=e=>{var a;l.readonly||de.value||("INPUT"!==(null==(a=e.touches[0].target)?void 0:a.tagName)||ee.value.includes(document.activeElement))&&(I.value=!0)},Ce=u((()=>l.type.includes("range"))),Ve=N(),$e=u((()=>{var e,a;return null==(a=null==(e=c(T))?void 0:e.popperRef)?void 0:a.contentRef})),Le=u((()=>{var e;return c(Ce)?c(H):null==(e=c(H))?void 0:e.$el}));d(Le,(e=>{const a=c($e),t=c(Le);a&&(e.target===a||e.composedPath().includes(a))||e.target===t||e.composedPath().includes(t)||(I.value=!1)}));const Te=s(null),He=()=>{if(Te.value){const e=Ie(ve.value);e&&Ee(e)&&(Z(n(e)?e.map((e=>e.toDate())):e.toDate()),Te.value=null)}""===Te.value&&(Z(null),z(null),Te.value=null)},Ie=e=>e?ze.value.parseUserInput(e):null,je=e=>e?ze.value.formatToString(e):null,Ee=e=>ze.value.isValidValue(e),Re=async e=>{if(l.readonly||de.value)return;const{code:a}=e;if(t("keydown",e),a!==G.esc)if(a===G.down&&(ze.value.handleFocusPicker&&(e.preventDefault(),e.stopPropagation()),!1===I.value&&(I.value=!0,await i()),ze.value.handleFocusPicker))ze.value.handleFocusPicker();else{if(a!==G.tab)return a===G.enter||a===G.numpadEnter?((null===Te.value||""===Te.value||Ee(Ie(ve.value)))&&(He(),I.value=!1),void e.stopPropagation()):void(Te.value?e.stopPropagation():ze.value.handleKeydownInput&&ze.value.handleKeydownInput(e));B=!0}else!0===I.value&&(I.value=!1,e.preventDefault(),e.stopPropagation())},Oe=e=>{Te.value=e,I.value||(I.value=!0)},Be=e=>{const a=e.target;Te.value?Te.value=[a.value,Te.value[1]]:Te.value=[a.value,null]},Fe=e=>{const a=e.target;Te.value?Te.value=[Te.value[0],a.value]:Te.value=[null,a.value]},We=()=>{var e;const a=Te.value,t=Ie(a&&a[0]),n=c(pe);if(t&&t.isValid()){Te.value=[je(t),(null==(e=ve.value)?void 0:e[1])||null];const a=[t,n&&(n[1]||null)];Ee(a)&&(Z(a),Te.value=null)}},Ke=()=>{var e;const a=c(Te),t=Ie(a&&a[1]),n=c(pe);if(t&&t.isValid()){Te.value=[(null==(e=c(ve))?void 0:e[0])||null,je(t)];const a=[n&&n[0],t];Ee(a)&&(Z(a),Te.value=null)}},ze=s({}),Ze=e=>{ze.value[e[0]]=e[1],ze.value.panelReady=!0},Ne=e=>{t("calendar-change",e)},Ue=(e,a,n)=>{t("panel-change",e,a,n)};return p("EP_PICKER_BASE",{props:l}),a({focus:re,handleFocusInput:ie,handleBlurInput:ce,handleOpen:()=>{I.value=!0},handleClose:()=>{I.value=!1},onPick:te}),(e,a)=>(v(),m(c(O),S({ref_key:"refPopper",ref:T,visible:I.value,effect:"light",pure:"",trigger:"click"},e.$attrs,{role:"dialog",teleported:"",transition:`${c(x).namespace.value}-zoom-in-top`,"popper-class":[`${c(x).namespace.value}-picker__popper`,e.popperClass],"popper-options":c($),"fallback-placements":["bottom","top","right","left"],"gpu-acceleration":!1,"stop-popper-mouse-event":!1,"hide-after":0,persistent:"",onBeforeShow:ne,onShow:le,onHide:se}),{default:f((()=>[c(Ce)?(v(),k("div",{key:1,ref_key:"inputRef",ref:H,class:h([c(x).b("editor"),c(x).bm("editor",e.type),c(A).e("wrapper"),c(x).is("disabled",c(de)),c(x).is("active",I.value),c(_).b("editor"),c(Ve)?c(_).bm("editor",c(Ve)):"",e.$attrs.class]),style:g(e.$attrs.style),onClick:ie,onMouseenter:xe,onMouseleave:Ae,onTouchstart:_e,onKeydown:Re},[c(Me)?(v(),m(c(j),{key:0,class:h([c(A).e("icon"),c(_).e("icon")]),onMousedown:b(Pe,["prevent"]),onTouchstart:_e},{default:f((()=>[(v(),m(y(c(Me))))])),_:1},8,["class","onMousedown"])):M("v-if",!0),w("input",{id:e.id&&e.id[0],autocomplete:"off",name:e.name&&e.name[0],placeholder:e.startPlaceholder,value:c(ve)&&c(ve)[0],disabled:c(de),readonly:!e.editable||e.readonly,class:h(c(_).b("input")),onMousedown:Pe,onInput:Be,onChange:We,onFocus:ie,onBlur:ce},null,42,ke),Y(e.$slots,"range-separator",{},(()=>[w("span",{class:h(c(_).b("separator"))},D(e.rangeSeparator),3)])),w("input",{id:e.id&&e.id[1],autocomplete:"off",name:e.name&&e.name[1],placeholder:e.endPlaceholder,value:c(ve)&&c(ve)[1],disabled:c(de),readonly:!e.editable||e.readonly,class:h(c(_).b("input")),onMousedown:Pe,onFocus:ie,onBlur:ce,onInput:Fe,onChange:Ke},null,42,we),e.clearIcon?(v(),m(c(j),{key:1,class:h([c(A).e("icon"),c(_).e("close-icon"),{[c(_).e("close-icon--hidden")]:!Ye.value}]),onClick:De},{default:f((()=>[(v(),m(y(e.clearIcon)))])),_:1},8,["class"])):M("v-if",!0)],38)):(v(),m(c(L),{key:0,id:e.id,ref_key:"inputRef",ref:H,"container-role":"combobox","model-value":c(ve),name:e.name,size:c(Ve),disabled:c(de),placeholder:e.placeholder,class:h([c(x).b("editor"),c(x).bm("editor",e.type),e.$attrs.class]),style:g(e.$attrs.style),readonly:!e.editable||e.readonly||c(ye)||"week"===e.type,label:e.label,tabindex:e.tabindex,"validate-event":!1,onInput:Oe,onFocus:ie,onBlur:ce,onKeydown:Re,onChange:He,onMousedown:Pe,onMouseenter:xe,onMouseleave:Ae,onTouchstart:_e,onClick:a[0]||(a[0]=b((()=>{}),["stop"]))},{prefix:f((()=>[c(Me)?(v(),m(c(j),{key:0,class:h(c(A).e("icon")),onMousedown:b(Pe,["prevent"]),onTouchstart:_e},{default:f((()=>[(v(),m(y(c(Me))))])),_:1},8,["class","onMousedown"])):M("v-if",!0)])),suffix:f((()=>[Ye.value&&e.clearIcon?(v(),m(c(j),{key:0,class:h(`${c(A).e("icon")} clear-icon`),onClick:b(De,["stop"])},{default:f((()=>[(v(),m(y(e.clearIcon)))])),_:1},8,["class","onClick"])):M("v-if",!0)])),_:1},8,["id","model-value","name","size","disabled","placeholder","class","style","readonly","label","tabindex","onKeydown"]))])),content:f((()=>[Y(e.$slots,"default",{visible:I.value,actualVisible:E.value,parsedValue:c(pe),format:e.format,unlinkPanels:e.unlinkPanels,type:e.type,defaultValue:e.defaultValue,onPick:te,onSelectRange:ae,onSetPickerOption:Ze,onCalendarChange:Ne,onPanelChange:Ue,onKeydown:oe,onMousedown:a[1]||(a[1]=b((()=>{}),["stop"]))})])),_:3},16,["visible","transition","popper-class","popper-options"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);const Se=H({...ye,datetimeRole:String,parsedValue:{type:I(Object)}}),Pe=({getAvailableHours:e,getAvailableMinutes:a,getAvailableSeconds:t})=>{const n={};return{timePickerOptions:n,getAvailableTime:(n,l,o,s)=>{const r={hour:e,minute:a,second:t};let i=n;return["hour","minute","second"].forEach((e=>{if(r[e]){let a;const t=r[e];switch(e){case"minute":a=t(i.hour(),l,s);break;case"second":a=t(i.hour(),i.minute(),l,s);break;default:a=t(l,s)}if((null==a?void 0:a.length)&&!a.includes(i[e]())){const t=o?0:a.length-1;i=i[e](a[t])}}})),i},onSetOption:([e,a])=>{n[e]=a}}},xe=e=>e.map(((e,a)=>e||a)).filter((e=>!0!==e)),Ae=(e,a,t)=>({getHoursList:(a,t)=>ge(24,e&&(()=>null==e?void 0:e(a,t))),getMinutesList:(e,t,n)=>ge(60,a&&(()=>null==a?void 0:a(e,t,n))),getSecondsList:(e,a,n,l)=>ge(60,t&&(()=>null==t?void 0:t(e,a,n,l)))}),_e=(e,a,t)=>{const{getHoursList:n,getMinutesList:l,getSecondsList:o}=Ae(e,a,t);return{getAvailableHours:(e,a)=>xe(n(e,a)),getAvailableMinutes:(e,a,t)=>xe(l(e,a,t)),getAvailableSeconds:(e,a,t,n)=>xe(o(e,a,t,n))}},Ce=e=>{const a=s(e.parsedValue);return r((()=>e.visible),(t=>{t||(a.value=e.parsedValue)})),a},Ve=H({role:{type:String,required:!0},spinnerDate:{type:I(Object),required:!0},showSeconds:{type:Boolean,default:!0},arrowControl:Boolean,amPmMode:{type:I(String),default:""},...be}),$e=["onClick"],Le=["onMouseenter"];var Te=E(l({__name:"basic-time-spinner",props:Ve,emits:["change","select-range","set-option"],setup(e,{emit:a}){const t=e,n=q("time"),{getHoursList:l,getMinutesList:o,getSecondsList:d}=Ae(t.disabledHours,t.disabledMinutes,t.disabledSeconds);let p=!1;const g=s(),b={hours:s(),minutes:s(),seconds:s()},y=u((()=>t.showSeconds?oe:oe.slice(0,2))),Y=u((()=>{const{spinnerDate:e}=t;return{hours:e.hour(),minutes:e.minute(),seconds:e.second()}})),S=u((()=>{const{hours:e,minutes:a}=c(Y);return{hours:l(t.role),minutes:o(e,t.role),seconds:d(e,a,t.role)}})),$=u((()=>{const{hours:e,minutes:a,seconds:t}=c(Y);return{hours:ue(e,23),minutes:ue(a,59),seconds:ue(t,59)}})),L=te((e=>{p=!1,I(e)}),200),T=e=>{if(!!!t.amPmMode)return"";let a=e<12?" am":" pm";return"A"===t.amPmMode&&(a=a.toUpperCase()),a},H=e=>{let t;switch(e){case"hours":t=[0,2];break;case"minutes":t=[3,5];break;case"seconds":t=[6,8]}const[n,l]=t;a("select-range",n,l),g.value=e},I=e=>{O(e,c(Y)[e])},E=()=>{I("hours"),I("minutes"),I("seconds")},R=e=>e.querySelector(`.${n.namespace.value}-scrollbar__wrap`),O=(e,a)=>{if(t.arrowControl)return;const n=c(b[e]);n&&n.$el&&(R(n.$el).scrollTop=Math.max(0,a*B(e)))},B=e=>{const a=c(b[e]);return(null==a?void 0:a.$el.querySelector("li").offsetHeight)||0},F=()=>{Z(1)},W=()=>{Z(-1)},Z=e=>{g.value||H("hours");const a=g.value,t=c(Y)[a],n="hours"===g.value?24:60,l=N(a,t,e,n);U(a,l),O(a,l),i((()=>H(a)))},N=(e,a,t,n)=>{let l=(a+t+n)%n;const o=c(S)[e];for(;o[l]&&l!==a;)l=(l+t+n)%n;return l},U=(e,n)=>{if(c(S)[e][n])return;const{hours:l,minutes:o,seconds:s}=c(Y);let r;switch(e){case"hours":r=t.spinnerDate.hour(n).minute(o).second(s);break;case"minutes":r=t.spinnerDate.hour(l).minute(n).second(s);break;case"seconds":r=t.spinnerDate.hour(l).minute(o).second(n)}a("change",r)},J=e=>c(b[e]).$el.offsetHeight,X=()=>{const e=e=>{const a=c(b[e]);a&&a.$el&&(R(a.$el).onscroll=()=>{(e=>{p=!0,L(e);const a=Math.min(Math.round((R(c(b[e]).$el).scrollTop-(.5*J(e)-10)/B(e)+3)/B(e)),"hours"===e?23:59);U(e,a)})(e)})};e("hours"),e("minutes"),e("seconds")};P((()=>{i((()=>{!t.arrowControl&&X(),E(),"start"===t.role&&H("hours")}))}));return a("set-option",[`${t.role}_scrollDown`,Z]),a("set-option",[`${t.role}_emitSelectRange`,H]),r((()=>t.spinnerDate),(()=>{p||E()})),(e,a)=>(v(),k("div",{class:h([c(n).b("spinner"),{"has-seconds":e.showSeconds}])},[e.arrowControl?M("v-if",!0):(v(!0),k(x,{key:0},A(c(y),(a=>(v(),m(c(ee),{key:a,ref_for:!0,ref:e=>((e,a)=>{b[a].value=e})(e,a),class:h(c(n).be("spinner","wrapper")),"wrap-style":"max-height: inherit;","view-class":c(n).be("spinner","list"),noresize:"",tag:"ul",onMouseenter:e=>H(a),onMousemove:e=>I(a)},{default:f((()=>[(v(!0),k(x,null,A(c(S)[a],((t,l)=>(v(),k("li",{key:l,class:h([c(n).be("spinner","item"),c(n).is("active",l===c(Y)[a]),c(n).is("disabled",t)]),onClick:e=>((e,{value:a,disabled:t})=>{t||(U(e,a),H(e),O(e,a))})(a,{value:l,disabled:t})},["hours"===a?(v(),k(x,{key:0},[_(D(("0"+(e.amPmMode?l%12||12:l)).slice(-2))+D(T(l)),1)],64)):(v(),k(x,{key:1},[_(D(("0"+l).slice(-2)),1)],64))],10,$e)))),128))])),_:2},1032,["class","view-class","onMouseenter","onMousemove"])))),128)),e.arrowControl?(v(!0),k(x,{key:1},A(c(y),(a=>(v(),k("div",{key:a,class:h([c(n).be("spinner","wrapper"),c(n).is("arrow")]),onMouseenter:e=>H(a)},[C((v(),m(c(j),{class:h(["arrow-up",c(n).be("spinner","arrow")])},{default:f((()=>[V(c(K))])),_:1},8,["class"])),[[c(ae),W]]),C((v(),m(c(j),{class:h(["arrow-down",c(n).be("spinner","arrow")])},{default:f((()=>[V(c(z))])),_:1},8,["class"])),[[c(ae),F]]),w("ul",{class:h(c(n).be("spinner","list"))},[(v(!0),k(x,null,A(c($)[a],((t,l)=>(v(),k("li",{key:l,class:h([c(n).be("spinner","item"),c(n).is("active",t===c(Y)[a]),c(n).is("disabled",c(S)[a][t])])},["number"==typeof t?(v(),k(x,{key:0},["hours"===a?(v(),k(x,{key:0},[_(D(("0"+(e.amPmMode?t%12||12:t)).slice(-2))+D(T(t)),1)],64)):(v(),k(x,{key:1},[_(D(("0"+t).slice(-2)),1)],64))],64)):M("v-if",!0)],2)))),128))],2)],42,Le)))),128)):M("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);var He=E(l({__name:"panel-time-pick",props:Se,emits:["pick","select-range","set-picker-option"],setup(e,{emit:t}){const n=e,l=o("EP_PICKER_BASE"),{arrowControl:r,disabledHours:i,disabledMinutes:d,disabledSeconds:p,defaultValue:g}=l.props,{getAvailableHours:b,getAvailableMinutes:y,getAvailableSeconds:Y}=_e(i,d,p),S=q("time"),{t:P,lang:x}=U(),A=s([0,2]),_=Ce(n),C=u((()=>R(n.actualVisible)?`${S.namespace.value}-zoom-in-top`:"")),L=u((()=>n.format.includes("ss"))),T=u((()=>n.format.includes("A")?"A":n.format.includes("a")?"a":"")),H=()=>{t("pick",_.value,!1)},I=e=>{if(!n.visible)return;const a=F(e).millisecond(0);t("pick",a,!0)},j=(e,a)=>{t("select-range",e,a),A.value=[e,a]},{timePickerOptions:E,onSetOption:O,getAvailableTime:B}=Pe({getAvailableHours:b,getAvailableMinutes:y,getAvailableSeconds:Y}),F=e=>B(e,n.datetimeRole||"",!0);return t("set-picker-option",["isValidValue",e=>{const t=a(e).locale(x.value),n=F(t);return t.isSame(n)}]),t("set-picker-option",["formatToString",e=>e?e.format(n.format):null]),t("set-picker-option",["parseUserInput",e=>e?a(e,n.format).locale(x.value):null]),t("set-picker-option",["handleKeydownInput",e=>{const a=e.code,{left:t,right:n,up:l,down:o}=G;if([t,n].includes(a)){return(e=>{const a=[0,3].concat(L.value?[6]:[]),t=["hours","minutes"].concat(L.value?["seconds"]:[]),n=(a.indexOf(A.value[0])+e+a.length)%a.length;E.start_emitSelectRange(t[n])})(a===t?-1:1),void e.preventDefault()}if([l,o].includes(a)){const t=a===l?-1:1;return E.start_scrollDown(t),void e.preventDefault()}}]),t("set-picker-option",["getRangeAvailableTime",F]),t("set-picker-option",["getDefaultValue",()=>a(g).locale(x.value)]),(e,a)=>(v(),m($,{name:c(C)},{default:f((()=>[e.actualVisible||e.visible?(v(),k("div",{key:0,class:h(c(S).b("panel"))},[w("div",{class:h([c(S).be("panel","content"),{"has-seconds":c(L)}])},[V(Te,{ref:"spinner",role:e.datetimeRole||"start","arrow-control":c(r),"show-seconds":c(L),"am-pm-mode":c(T),"spinner-date":e.parsedValue,"disabled-hours":c(i),"disabled-minutes":c(d),"disabled-seconds":c(p),onChange:I,onSetOption:c(O),onSelectRange:j},null,8,["role","arrow-control","show-seconds","am-pm-mode","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onSetOption"])],2),w("div",{class:h(c(S).be("panel","footer"))},[w("button",{type:"button",class:h([c(S).be("panel","btn"),"cancel"]),onClick:H},D(c(P)("el.datepicker.cancel")),3),w("button",{type:"button",class:h([c(S).be("panel","btn"),"confirm"]),onClick:a[0]||(a[0]=e=>((e=!1,a=!1)=>{a||t("pick",n.parsedValue,e)})())},D(c(P)("el.datepicker.confirm")),3)],2)],2)):M("v-if",!0)])),_:1},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]);export{De as C,ie as D,He as T,de as a,re as b,le as c,ye as d,pe as e,_e as f,Pe as g,Te as h,se as i,ce as r,Me as t,Ce as u};
