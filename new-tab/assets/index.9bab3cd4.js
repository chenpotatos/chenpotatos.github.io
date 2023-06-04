import{N as e,a5 as l,g as a,c as t,af as s,aN as r,ar as o,o as n,t as i,J as u,m as c,h as v,i as m,e as f,n as p,s as d,ak as h,al as y,b as g,k as w,K as b,ap as S,w as z,ah as x,R as _,ac as k,z as E,P as L,ag as T,S as H,D as j,j as B,at as N}from"./el-select.b78411e2.js";import{b as $,_ as C,d as R,w as A}from"./index.c511a369.js";import{u as M}from"./index.48a3615c.js";import{t as W}from"./error.7e8331f1.js";import{a as X}from"./style.7be20351.js";const Y=Symbol("scrollbarContextKey"),K={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},P=$({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean});var O=C(e({__name:"thumb",props:P,setup(e){const g=e,w=l(Y),b=M("scrollbar");w||W("Thumb","can not inject scrollbar context");const S=a(),z=a(),x=a({}),_=a(!1);let k=!1,E=!1,L=y?document.onselectstart:null;const T=t((()=>K[g.vertical?"vertical":"horizontal"])),H=t((()=>(({move:e,size:l,bar:a})=>({[a.size]:l,transform:`translate${a.axis}(${e}%)`}))({size:g.size,move:g.move,bar:T.value}))),j=t((()=>S.value[T.value.offset]**2/w.wrapElement[T.value.scrollSize]/g.ratio/z.value[T.value.offset])),B=e=>{var l;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;null==(l=window.getSelection())||l.removeAllRanges(),$(e);const a=e.currentTarget;a&&(x.value[T.value.axis]=a[T.value.offset]-(e[T.value.client]-a.getBoundingClientRect()[T.value.direction]))},N=e=>{if(!z.value||!S.value||!w.wrapElement)return;const l=100*(Math.abs(e.target.getBoundingClientRect()[T.value.direction]-e[T.value.client])-z.value[T.value.offset]/2)*j.value/S.value[T.value.offset];w.wrapElement[T.value.scroll]=l*w.wrapElement[T.value.scrollSize]/100},$=e=>{e.stopImmediatePropagation(),k=!0,document.addEventListener("mousemove",C),document.addEventListener("mouseup",R),L=document.onselectstart,document.onselectstart=()=>!1},C=e=>{if(!S.value||!z.value)return;if(!1===k)return;const l=x.value[T.value.axis];if(!l)return;const a=100*(-1*(S.value.getBoundingClientRect()[T.value.direction]-e[T.value.client])-(z.value[T.value.offset]-l))*j.value/S.value[T.value.offset];w.wrapElement[T.value.scroll]=a*w.wrapElement[T.value.scrollSize]/100},R=()=>{k=!1,x.value[T.value.axis]=0,document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",R),A(),E&&(_.value=!1)};s((()=>{A(),document.removeEventListener("mouseup",R)}));const A=()=>{document.onselectstart!==L&&(document.onselectstart=L)};return r(o(w,"scrollbarElement"),"mousemove",(()=>{E=!1,_.value=!!g.size})),r(o(w,"scrollbarElement"),"mouseleave",(()=>{E=!0,_.value=k})),(e,l)=>(n(),i(h,{name:f(b).b("fade"),persisted:""},{default:u((()=>[c(v("div",{ref_key:"instance",ref:S,class:m([f(b).e("bar"),f(b).is(f(T).key)]),onMousedown:N},[v("div",{ref_key:"thumb",ref:z,class:m(f(b).e("thumb")),style:p(f(H)),onMousedown:B},null,38)],34),[[d,e.always||_.value]])])),_:1},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);var q=C(e({__name:"bar",props:$({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),setup(e,{expose:l}){const t=e,s=a(0),r=a(0);return l({handleScroll:e=>{if(e){const l=e.offsetHeight-4,a=e.offsetWidth-4;r.value=100*e.scrollTop/l*t.ratioY,s.value=100*e.scrollLeft/a*t.ratioX}}}),(e,l)=>(n(),g(b,null,[w(O,{move:s.value,ratio:e.ratioX,size:e.width,always:e.always},null,8,["move","ratio","size","always"]),w(O,{move:r.value,ratio:e.ratioY,size:e.height,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const D=$({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:Boolean,wrapStyle:{type:R([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),I={scroll:({scrollTop:e,scrollLeft:l})=>[e,l].every(S)},J=e({name:"ElScrollbar"});const F=A(C(e({...J,props:D,emits:I,setup(e,{expose:l,emit:s}){const o=e,c=M("scrollbar");let d,h;const y=a(),w=a(),b=a(),$=a("0"),C=a("0"),R=a(),A=a(1),W=a(1),K=t((()=>{const e={};return o.height&&(e.height=X(o.height)),o.maxHeight&&(e.maxHeight=X(o.maxHeight)),[o.wrapStyle,e]})),P=()=>{var e;w.value&&(null==(e=R.value)||e.handleScroll(w.value),s("scroll",{scrollTop:w.value.scrollTop,scrollLeft:w.value.scrollLeft}))};const O=()=>{if(!w.value)return;const e=w.value.offsetHeight-4,l=w.value.offsetWidth-4,a=e**2/w.value.scrollHeight,t=l**2/w.value.scrollWidth,s=Math.max(a,o.minSize),r=Math.max(t,o.minSize);A.value=a/(e-a)/(s/(e-s)),W.value=t/(l-t)/(r/(l-r)),C.value=s+4<e?`${s}px`:"",$.value=r+4<l?`${r}px`:""};return z((()=>o.noresize),(e=>{e?(null==d||d(),null==h||h()):(({stop:d}=x(b,O)),h=r("resize",O))}),{immediate:!0}),z((()=>[o.maxHeight,o.height]),(()=>{o.native||_((()=>{var e;O(),w.value&&(null==(e=R.value)||e.handleScroll(w.value))}))})),k(Y,E({scrollbarElement:y,wrapElement:w})),L((()=>{o.native||_((()=>{O()}))})),T((()=>O())),l({wrap$:w,update:O,scrollTo:function(e,l){N(e)?w.value.scrollTo(e):S(e)&&S(l)&&w.value.scrollTo(e,l)},setScrollTop:e=>{S(e)&&(w.value.scrollTop=e)},setScrollLeft:e=>{S(e)&&(w.value.scrollLeft=e)},handleScroll:P}),(e,l)=>(n(),g("div",{ref_key:"scrollbar$",ref:y,class:m(f(c).b())},[v("div",{ref_key:"wrap$",ref:w,class:m([e.wrapClass,f(c).e("wrap"),{[f(c).em("wrap","hidden-default")]:!e.native}]),style:p(f(K)),onScroll:P},[(n(),i(j(e.tag),{ref_key:"resize$",ref:b,class:m([f(c).e("view"),e.viewClass]),style:p(e.viewStyle)},{default:u((()=>[H(e.$slots,"default")])),_:3},8,["class","style"]))],38),e.native?B("v-if",!0):(n(),i(q,{key:0,ref_key:"barRef",ref:R,height:C.value,width:$.value,always:e.always,"ratio-x":W.value,"ratio-y":A.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]));export{F as E};
