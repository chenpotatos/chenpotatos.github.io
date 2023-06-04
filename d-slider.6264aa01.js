import{ap as e,a9 as a,g as l,P as t,aN as i,R as n,c as o,am as r,a5 as s,w as u,N as d,z as m,ad as v,o as p,b as c,k as g,J as f,h as b,x as y,e as V,i as h,n as w,aa as x,Y as S,ac as k,t as B,j as C,K as E,L as N,a as z,V as L,ao as P}from"./el-select.b78411e2.js";import{E as T}from"./el-input-number.1aa680ac.js";import"./el-tooltip.89296c46.js";import{SAVE_CONFIG as M}from"./save_config.15a98e40.js";import{a as j,E as D}from"./index.007a0b27.js";import{b as I,d as F,_ as Y,w as X}from"./index.c511a369.js";import{b as _,u as A}from"./index.e2562b21.js";import{U,I as R,C as W}from"./focus-trap.37f37187.js";import{u as K}from"./index.48a3615c.js";import{E as $}from"./aria.66f3f71c.js";import{d as O}from"./debounce.abbfdaeb.js";import{u as q}from"./index.d2069d58.js";import{u as H,a as J}from"./index.d0852ddf.js";import{t as G,d as Q}from"./error.7e8331f1.js";const Z=Symbol("sliderContextKey"),ee=I({modelValue:{type:F([Number,Array]),default:0},id:{type:String,default:void 0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},showInput:Boolean,showInputControls:{type:Boolean,default:!0},size:_,inputSize:_,showStops:Boolean,showTooltip:{type:Boolean,default:!0},formatTooltip:{type:F(Function),default:void 0},disabled:Boolean,range:Boolean,vertical:Boolean,height:String,debounce:{type:Number,default:300},label:{type:String,default:void 0},rangeStartLabel:{type:String,default:void 0},rangeEndLabel:{type:String,default:void 0},formatValueText:{type:F(Function),default:void 0},tooltipClass:{type:String,default:void 0},placement:{type:String,values:j,default:"top"},marks:{type:F(Object)},validateEvent:{type:Boolean,default:!0}}),ae=l=>e(l)||a(l)&&l.every(e),le={[U]:ae,[R]:ae,[W]:ae},te=(e,a,t)=>{const{form:i,formItem:s}=H(),u=r(),d=l(),m=l(),v={firstButton:d,secondButton:m},p=o((()=>e.disabled||(null==i?void 0:i.disabled)||!1)),c=o((()=>Math.min(a.firstValue,a.secondValue))),g=o((()=>Math.max(a.firstValue,a.secondValue))),f=o((()=>e.range?100*(g.value-c.value)/(e.max-e.min)+"%":100*(a.firstValue-e.min)/(e.max-e.min)+"%")),b=o((()=>e.range?100*(c.value-e.min)/(e.max-e.min)+"%":"0%")),y=o((()=>e.vertical?{height:e.height}:{})),V=o((()=>e.vertical?{height:f.value,bottom:b.value}:{width:f.value,left:b.value})),h=()=>{u.value&&(a.sliderSize=u.value["client"+(e.vertical?"Height":"Width")])},w=l=>{const t=(l=>{const t=e.min+l*(e.max-e.min)/100;if(!e.range)return d;let i;return i=Math.abs(c.value-t)<Math.abs(g.value-t)?a.firstValue<a.secondValue?"firstButton":"secondButton":a.firstValue>a.secondValue?"firstButton":"secondButton",v[i]})(l);return t.value.setPosition(l),t},x=e=>{t(U,e),t(R,e)},S=async()=>{await n(),t(W,e.range?[c.value,g.value]:e.modelValue)},k=l=>{var t,i,n,o,r,s;if(p.value||a.dragging)return;h();let d=0;if(e.vertical){const e=null!=(n=null==(i=null==(t=l.touches)?void 0:t.item(0))?void 0:i.clientY)?n:l.clientY;d=(u.value.getBoundingClientRect().bottom-e)/a.sliderSize*100}else{d=((null!=(s=null==(r=null==(o=l.touches)?void 0:o.item(0))?void 0:r.clientX)?s:l.clientX)-u.value.getBoundingClientRect().left)/a.sliderSize*100}return d<0||d>100?void 0:w(d)};return{elFormItem:s,slider:u,firstButton:d,secondButton:m,sliderDisabled:p,minValue:c,maxValue:g,runwayStyle:y,barStyle:V,resetSize:h,setPosition:w,emitChange:S,onSliderWrapperPrevent:e=>{var a,l;((null==(a=v.firstButton.value)?void 0:a.dragging)||(null==(l=v.secondButton.value)?void 0:l.dragging))&&e.preventDefault()},onSliderClick:e=>{k(e)&&S()},onSliderDown:async e=>{const a=k(e);a&&(await n(),a.value.onButtonDown(e))},setFirstValue:l=>{a.firstValue=l,x(e.range?[c.value,g.value]:l)},setSecondValue:l=>{a.secondValue=l,e.range&&x([c.value,g.value])}}},{left:ie,down:ne,right:oe,up:re,home:se,end:ue,pageUp:de,pageDown:me}=$,ve=(e,a,t)=>{const{disabled:i,min:r,max:d,step:m,showTooltip:v,precision:p,sliderSize:c,formatTooltip:g,emitChange:f,resetSize:b,updateDragging:y}=s(Z),{tooltip:V,tooltipVisible:h,formatValue:w,displayTooltip:x,hideTooltip:S}=((e,a,t)=>{const i=l(),n=l(!1),r=o((()=>a.value instanceof Function)),s=o((()=>r.value&&a.value(e.modelValue)||e.modelValue)),u=O((()=>{t.value&&(n.value=!0)}),50),d=O((()=>{t.value&&(n.value=!1)}),50);return{tooltip:i,tooltipVisible:n,formatValue:s,displayTooltip:u,hideTooltip:d}})(e,g,v),k=l(),B=o((()=>(e.modelValue-r.value)/(d.value-r.value)*100+"%")),C=o((()=>e.vertical?{bottom:B.value}:{left:B.value})),E=e=>{i.value||(a.newPosition=Number.parseFloat(B.value)+e/(d.value-r.value)*100,T(a.newPosition),f())},N=e=>{let a,l;return e.type.startsWith("touch")?(l=e.touches[0].clientY,a=e.touches[0].clientX):(l=e.clientY,a=e.clientX),{clientX:a,clientY:l}},z=l=>{a.dragging=!0,a.isClick=!0;const{clientX:t,clientY:i}=N(l);e.vertical?a.startY=i:a.startX=t,a.startPosition=Number.parseFloat(B.value),a.newPosition=a.startPosition},L=l=>{if(a.dragging){let t;a.isClick=!1,x(),b();const{clientX:i,clientY:n}=N(l);e.vertical?(a.currentY=n,t=(a.startY-a.currentY)/c.value*100):(a.currentX=i,t=(a.currentX-a.startX)/c.value*100),a.newPosition=a.startPosition+t,T(a.newPosition)}},P=()=>{a.dragging&&(setTimeout((()=>{a.dragging=!1,a.hovering||S(),a.isClick||T(a.newPosition),f()}),0),window.removeEventListener("mousemove",L),window.removeEventListener("touchmove",L),window.removeEventListener("mouseup",P),window.removeEventListener("touchend",P),window.removeEventListener("contextmenu",P))},T=async l=>{if(null===l||Number.isNaN(+l))return;l<0?l=0:l>100&&(l=100);const i=100/((d.value-r.value)/m.value);let o=Math.round(l/i)*i*(d.value-r.value)*.01+r.value;o=Number.parseFloat(o.toFixed(p.value)),o!==e.modelValue&&t(U,o),a.dragging||e.modelValue===a.oldValue||(a.oldValue=e.modelValue),await n(),a.dragging&&x(),V.value.updatePopper()};return u((()=>a.dragging),(e=>{y(e)})),{disabled:i,button:k,tooltip:V,tooltipVisible:h,showTooltip:v,wrapperStyle:C,formatValue:w,handleMouseEnter:()=>{a.hovering=!0,x()},handleMouseLeave:()=>{a.hovering=!1,a.dragging||S()},onButtonDown:e=>{i.value||(e.preventDefault(),z(e),window.addEventListener("mousemove",L),window.addEventListener("touchmove",L),window.addEventListener("mouseup",P),window.addEventListener("touchend",P),window.addEventListener("contextmenu",P),k.value.focus())},onKeyDown:e=>{let a=!0;[ie,ne].includes(e.key)?E(-m.value):[oe,re].includes(e.key)?E(m.value):e.key===se?i.value||(T(0),f()):e.key===ue?i.value||(T(100),f()):e.key===me?E(4*-m.value):e.key===de?E(4*m.value):a=!1,a&&e.preventDefault()},setPosition:T}},pe=I({modelValue:{type:Number,default:0},vertical:Boolean,tooltipClass:String,placement:{type:String,values:j,default:"top"}}),ce={[U]:a=>e(a)},ge=["tabindex"],fe=d({name:"ElSliderButton"});var be=Y(d({...fe,props:pe,emits:ce,setup(e,{expose:a,emit:l}){const t=e,i=K("slider"),n=m({hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startY:0,currentY:0,startPosition:0,newPosition:0,oldValue:t.modelValue}),{disabled:o,button:r,tooltip:s,showTooltip:u,tooltipVisible:d,wrapperStyle:x,formatValue:S,handleMouseEnter:k,handleMouseLeave:B,onButtonDown:C,onKeyDown:E,setPosition:N}=ve(t,n,l),{hovering:z,dragging:L}=v(n);return a({onButtonDown:C,onKeyDown:E,setPosition:N,hovering:z,dragging:L}),(e,a)=>(p(),c("div",{ref_key:"button",ref:r,class:h([V(i).e("button-wrapper"),{hover:V(z),dragging:V(L)}]),style:w(V(x)),tabindex:V(o)?-1:0,onMouseenter:a[0]||(a[0]=(...e)=>V(k)&&V(k)(...e)),onMouseleave:a[1]||(a[1]=(...e)=>V(B)&&V(B)(...e)),onMousedown:a[2]||(a[2]=(...e)=>V(C)&&V(C)(...e)),onTouchstart:a[3]||(a[3]=(...e)=>V(C)&&V(C)(...e)),onFocus:a[4]||(a[4]=(...e)=>V(k)&&V(k)(...e)),onBlur:a[5]||(a[5]=(...e)=>V(B)&&V(B)(...e)),onKeydown:a[6]||(a[6]=(...e)=>V(E)&&V(E)(...e))},[g(V(D),{ref_key:"tooltip",ref:s,visible:V(d),placement:e.placement,"fallback-placements":["top","bottom","right","left"],"stop-popper-mouse-event":!1,"popper-class":e.tooltipClass,disabled:!V(u),persistent:""},{content:f((()=>[b("span",null,y(V(S)),1)])),default:f((()=>[b("div",{class:h([V(i).e("button"),{hover:V(z),dragging:V(L)}])},null,2)])),_:1},8,["visible","placement","popper-class","disabled"])],46,ge))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/button.vue"]]);var ye=d({name:"ElSliderMarker",props:I({mark:{type:F([String,Object]),default:void 0}}),setup(e){const a=K("slider"),l=o((()=>x(e.mark)?e.mark:e.mark.label)),t=o((()=>x(e.mark)?void 0:e.mark.style));return()=>S("div",{class:a.e("marks-text"),style:t.value},l.value)}});const Ve=["id","role","aria-label","aria-labelledby"],he={key:1},we=d({name:"ElSlider"});const xe=X(Y(d({...we,props:ee,emits:le,setup(e,{expose:a,emit:r}){const s=e,d=K("slider"),{t:f}=q(),y=m({firstValue:0,secondValue:0,oldValue:0,dragging:!1,sliderSize:1}),{elFormItem:x,slider:S,firstButton:z,secondButton:L,sliderDisabled:P,minValue:M,maxValue:j,runwayStyle:D,barStyle:I,resetSize:F,emitChange:Y,onSliderWrapperPrevent:X,onSliderClick:_,onSliderDown:W,setFirstValue:$,setSecondValue:O}=te(s,y,r),{stops:H,getStopStyle:ee}=((e,a,l,t)=>({stops:o((()=>{if(!e.showStops||e.min>e.max)return[];if(0===e.step)return[];const i=(e.max-e.min)/e.step,n=100*e.step/(e.max-e.min),o=Array.from({length:i-1}).map(((e,a)=>(a+1)*n));return e.range?o.filter((a=>a<100*(l.value-e.min)/(e.max-e.min)||a>100*(t.value-e.min)/(e.max-e.min))):o.filter((l=>l>100*(a.firstValue-e.min)/(e.max-e.min)))})),getStopStyle:a=>e.vertical?{bottom:`${a}%`}:{left:`${a}%`}}))(s,y,M,j),{inputId:ae,isLabeledByFormItem:le}=J(s,{formItemContext:x}),ie=A(),ne=o((()=>s.inputSize||ie.value)),oe=o((()=>s.label||f("el.slider.defaultLabel",{min:s.min,max:s.max}))),re=o((()=>s.range?s.rangeStartLabel||f("el.slider.defaultRangeStartLabel"):oe.value)),se=o((()=>s.formatValueText?s.formatValueText(ge.value):`${ge.value}`)),ue=o((()=>s.rangeEndLabel||f("el.slider.defaultRangeEndLabel"))),de=o((()=>s.formatValueText?s.formatValueText(fe.value):`${fe.value}`)),me=o((()=>[d.b(),d.m(ie.value),d.is("vertical",s.vertical),{[d.m("with-input")]:s.showInput}])),ve=(e=>o((()=>e.marks?Object.keys(e.marks).map(Number.parseFloat).sort(((e,a)=>e-a)).filter((a=>a<=e.max&&a>=e.min)).map((a=>({point:a,position:100*(a-e.min)/(e.max-e.min),mark:e.marks[a]}))):[])))(s);((e,a,l,t,i,n)=>{const o=e=>{i(U,e),i(R,e)},r=()=>e.range?![l.value,t.value].every(((e,l)=>e===a.oldValue[l])):e.modelValue!==a.oldValue,s=()=>{var l,t;if(e.min>e.max)return void G("Slider","min should not be greater than max.");const i=e.modelValue;e.range&&Array.isArray(i)?i[1]<e.min?o([e.min,e.min]):i[0]>e.max?o([e.max,e.max]):i[0]<e.min?o([e.min,i[1]]):i[1]>e.max?o([i[0],e.max]):(a.firstValue=i[0],a.secondValue=i[1],r()&&(e.validateEvent&&(null==(l=null==n?void 0:n.validate)||l.call(n,"change").catch((e=>Q()))),a.oldValue=i.slice())):e.range||"number"!=typeof i||Number.isNaN(i)||(i<e.min?o(e.min):i>e.max?o(e.max):(a.firstValue=i,r()&&(e.validateEvent&&(null==(t=null==n?void 0:n.validate)||t.call(n,"change").catch((e=>Q()))),a.oldValue=i)))};s(),u((()=>a.dragging),(e=>{e||s()})),u((()=>e.modelValue),((e,l)=>{a.dragging||Array.isArray(e)&&Array.isArray(l)&&e.every(((e,a)=>e===l[a]))&&a.firstValue===e[0]&&a.secondValue===e[1]||s()}),{deep:!0}),u((()=>[e.min,e.max]),(()=>{s()}))})(s,y,M,j,r,x);const pe=o((()=>{const e=[s.min,s.max,s.step].map((e=>{const a=`${e}`.split(".")[1];return a?a.length:0}));return Math.max.apply(null,e)})),{sliderWrapper:ce}=((e,a,o)=>{const r=l();return t((async()=>{e.range?(Array.isArray(e.modelValue)?(a.firstValue=Math.max(e.min,e.modelValue[0]),a.secondValue=Math.min(e.max,e.modelValue[1])):(a.firstValue=e.min,a.secondValue=e.max),a.oldValue=[a.firstValue,a.secondValue]):("number"!=typeof e.modelValue||Number.isNaN(e.modelValue)?a.firstValue=e.min:a.firstValue=Math.min(e.max,Math.max(e.min,e.modelValue)),a.oldValue=a.firstValue),i(window,"resize",o),await n(),o()})),{sliderWrapper:r}})(s,y,F),{firstValue:ge,secondValue:fe,sliderSize:we}=v(y);return k(Z,{...v(s),sliderSize:we,disabled:P,precision:pe,emitChange:Y,resetSize:F,updateDragging:e=>{y.dragging=e}}),a({onSliderClick:_}),(e,a)=>{var l,t;return p(),c("div",{id:e.range?V(ae):void 0,ref_key:"sliderWrapper",ref:ce,class:h(V(me)),role:e.range?"group":void 0,"aria-label":e.range&&!V(le)?V(oe):void 0,"aria-labelledby":e.range&&V(le)?null==(l=V(x))?void 0:l.labelId:void 0,onTouchstart:a[2]||(a[2]=(...e)=>V(X)&&V(X)(...e)),onTouchmove:a[3]||(a[3]=(...e)=>V(X)&&V(X)(...e))},[b("div",{ref_key:"slider",ref:S,class:h([V(d).e("runway"),{"show-input":e.showInput&&!e.range},V(d).is("disabled",V(P))]),style:w(V(D)),onMousedown:a[0]||(a[0]=(...e)=>V(W)&&V(W)(...e)),onTouchstart:a[1]||(a[1]=(...e)=>V(W)&&V(W)(...e))},[b("div",{class:h(V(d).e("bar")),style:w(V(I))},null,6),g(be,{id:e.range?void 0:V(ae),ref_key:"firstButton",ref:z,"model-value":V(ge),vertical:e.vertical,"tooltip-class":e.tooltipClass,placement:e.placement,role:"slider","aria-label":e.range||!V(le)?V(re):void 0,"aria-labelledby":!e.range&&V(le)?null==(t=V(x))?void 0:t.labelId:void 0,"aria-valuemin":e.min,"aria-valuemax":e.range?V(fe):e.max,"aria-valuenow":V(ge),"aria-valuetext":V(se),"aria-orientation":e.vertical?"vertical":"horizontal","aria-disabled":V(P),"onUpdate:modelValue":V($)},null,8,["id","model-value","vertical","tooltip-class","placement","aria-label","aria-labelledby","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"]),e.range?(p(),B(be,{key:0,ref_key:"secondButton",ref:L,"model-value":V(fe),vertical:e.vertical,"tooltip-class":e.tooltipClass,placement:e.placement,role:"slider","aria-label":V(ue),"aria-valuemin":V(ge),"aria-valuemax":e.max,"aria-valuenow":V(fe),"aria-valuetext":V(de),"aria-orientation":e.vertical?"vertical":"horizontal","aria-disabled":V(P),"onUpdate:modelValue":V(O)},null,8,["model-value","vertical","tooltip-class","placement","aria-label","aria-valuemin","aria-valuemax","aria-valuenow","aria-valuetext","aria-orientation","aria-disabled","onUpdate:modelValue"])):C("v-if",!0),e.showStops?(p(),c("div",he,[(p(!0),c(E,null,N(V(H),((e,a)=>(p(),c("div",{key:a,class:h(V(d).e("stop")),style:w(V(ee)(e))},null,6)))),128))])):C("v-if",!0),V(ve).length>0?(p(),c(E,{key:2},[b("div",null,[(p(!0),c(E,null,N(V(ve),((e,a)=>(p(),c("div",{key:a,style:w(V(ee)(e.position)),class:h([V(d).e("stop"),V(d).e("marks-stop")])},null,6)))),128))]),b("div",{class:h(V(d).e("marks"))},[(p(!0),c(E,null,N(V(ve),((e,a)=>(p(),B(V(ye),{key:a,mark:e.mark,style:w(V(ee)(e.position))},null,8,["mark","style"])))),128))],2)],64)):C("v-if",!0)],38),e.showInput&&!e.range?(p(),B(V(T),{key:0,ref:"input","model-value":V(ge),class:h(V(d).e("input")),step:e.step,disabled:V(P),controls:e.showInputControls,min:e.min,max:e.max,debounce:e.debounce,size:V(ne),"onUpdate:modelValue":V($),onChange:V(Y)},null,8,["model-value","class","step","disabled","controls","min","max","debounce","size","onUpdate:modelValue","onChange"])):C("v-if",!0)],42,Ve)}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/slider.vue"]])),Se=l(null),ke={name:"dSlider",components:{ElSlider:xe},props:{modelValue:{required:!0},title:String,unit:{default:"px"},async:{type:Boolean,default:!1},value:[String,Number]},setup:(e,a)=>({handleInput:l=>{a.emit("update:modelValue",l),e.async&&M("baseConfig")},sliderRef:Se})},Be={class:"d-flex-between d-slider"},Ce={key:0,class:"d-slider-title"},Ee={class:"d-slider-value"};const Ne=z(ke,[["render",function(e,a,l,t,i,n){const o=L("el-slider");return p(),c("div",Be,[l.title?(p(),c("span",Ce,y(l.title),1)):C("",!0),g(o,P({"show-tooltip":!1,class:"d-cell",ref:"sliderRef"},e.$attrs,{size:"small","data-content":"12","model-value":l.modelValue,"onUpdate:modelValue":t.handleInput}),null,16,["model-value","onUpdate:modelValue"]),b("span",Ee,y(~~l.value||l.modelValue)+y(l.unit),1)])}]]);export{Ne as D};
