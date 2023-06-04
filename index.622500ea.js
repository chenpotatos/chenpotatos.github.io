import{g as e,z as t,a8 as n,ad as o,Y as l,J as s,m as a,k as i,s as r,ak as u,al as c,R as d,aa as v,at as g,a6 as m,aS as b}from"./el-select.b78411e2.js";import{u as f}from"./index.48a3615c.js";import{r as p,g as x,b as y}from"./style.7be20351.js";import{u as k}from"./index.9a99ea33.js";import"./isObject.a01dee34.js";function C(c){let d;const v=f("loading"),g=e(!1),m=t({...c,originalPosition:"",originalOverflow:"",visible:!1});function b(){var e,t;null==(t=null==(e=k.$el)?void 0:e.parentNode)||t.removeChild(k.$el)}function x(){if(!g.value)return;const e=m.parent;g.value=!1,e.vLoadingAddClassList=void 0,function(){const e=m.parent;if(!e.vLoadingAddClassList){let t=e.getAttribute("loading-number");t=Number.parseInt(t)-1,t?e.setAttribute("loading-number",t.toString()):(p(e,v.bm("parent","relative")),e.removeAttribute("loading-number")),p(e,v.bm("parent","hidden"))}b(),y.unmount()}()}const y=n({name:"ElLoading",setup:()=>()=>{const e=m.spinner||m.svg,t=l("svg",{class:"circular",viewBox:m.svgViewBox?m.svgViewBox:"0 0 50 50",...e?{innerHTML:e}:{}},[l("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),n=m.text?l("p",{class:v.b("text")},[m.text]):void 0;return l(u,{name:v.b("fade"),onAfterLeave:x},{default:s((()=>[a(i("div",{style:{backgroundColor:m.background||""},class:[v.b("mask"),m.customClass,m.fullscreen?"is-fullscreen":""]},[l("div",{class:v.b("spinner")},[t,n])]),[[r,m.visible]])]))})}}),k=y.mount(document.createElement("div"));return{...o(m),setText:function(e){m.text=e},removeElLoadingChild:b,close:function(){var e;c.beforeClose&&!c.beforeClose()||(g.value=!0,clearTimeout(d),d=window.setTimeout(x,400),m.visible=!1,null==(e=c.closed)||e.call(c))},handleAfterLeave:x,vm:k,get $el(){return k.$el}}}let L;const w=function(e={}){if(!c)return;const t=h(e);if(t.fullscreen&&L)return L;const n=C({...t,closed:()=>{var e;null==(e=t.closed)||e.call(t),t.fullscreen&&(L=void 0)}});A(t,t.parent,n),$(t,t.parent,n),t.parent.vLoadingAddClassList=()=>$(t,t.parent,n);let o=t.parent.getAttribute("loading-number");return o=o?`${Number.parseInt(o)+1}`:"1",t.parent.setAttribute("loading-number",o),t.parent.appendChild(n.$el),d((()=>n.visible.value=t.visible)),t.fullscreen&&(L=n),n},h=e=>{var t,n,o,l;let s;return s=v(e.target)?null!=(t=document.querySelector(e.target))?t:document.body:e.target||document.body,{parent:s===document.body||e.body?document.body:s,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:s===document.body&&(null==(n=e.fullscreen)||n),lock:null!=(o=e.lock)&&o,customClass:e.customClass||"",visible:null==(l=e.visible)||l,target:s}},A=async(e,t,n)=>{const{nextZIndex:o}=k(),l={};if(e.fullscreen)n.originalPosition.value=x(document.body,"position"),n.originalOverflow.value=x(document.body,"overflow"),l.zIndex=o();else if(e.parent===document.body){n.originalPosition.value=x(document.body,"position"),await d();for(const t of["top","left"]){const n="top"===t?"scrollTop":"scrollLeft";l[t]=e.target.getBoundingClientRect()[t]+document.body[n]+document.documentElement[n]-Number.parseInt(x(document.body,`margin-${t}`),10)+"px"}for(const t of["height","width"])l[t]=`${e.target.getBoundingClientRect()[t]}px`}else n.originalPosition.value=x(t,"position");for(const[s,a]of Object.entries(l))n.$el.style[s]=a},$=(e,t,n)=>{const o=f("loading");["absolute","fixed","sticky"].includes(n.originalPosition.value)?p(t,o.bm("parent","relative")):y(t,o.bm("parent","relative")),e.fullscreen&&e.lock?y(t,o.bm("parent","hidden")):p(t,o.bm("parent","hidden"))},B=Symbol("ElLoading"),V=(t,n)=>{var o,l,s,a;const i=n.instance,r=e=>g(n.value)?n.value[e]:void 0,u=n=>(t=>{const n=v(t)&&(null==i?void 0:i[t])||t;return n?e(n):n})(r(n)||t.getAttribute(`element-loading-${b(n)}`)),c=null!=(o=r("fullscreen"))?o:n.modifiers.fullscreen,d={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:c,target:null!=(l=r("target"))?l:c?void 0:t,body:null!=(s=r("body"))?s:n.modifiers.body,lock:null!=(a=r("lock"))?a:n.modifiers.lock};t[B]={options:d,instance:w(d)}},j={mounted(e,t){t.value&&V(e,t)},updated(e,t){const n=e[B];t.oldValue!==t.value&&(t.value&&!t.oldValue?V(e,t):t.value&&t.oldValue?g(t.value)&&((e,t)=>{for(const n of Object.keys(t))m(t[n])&&(t[n].value=e[n])})(t.value,n.options):null==n||n.instance.close())},unmounted(e){var t;null==(t=e[B])||t.instance.close()}},E={install(e){e.directive("loading",j),e.config.globalProperties.$loading=w},directive:j,service:w};export{E as ElLoading,j as ElLoadingDirective,w as ElLoadingService,E as default,j as vLoading};
