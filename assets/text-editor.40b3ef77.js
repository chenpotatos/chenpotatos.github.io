import{cm as z,e as M,f as l,Z as D,aw as B,K as U,as as H,Y as W,bB as K,t as V,u as N,d as Y,a as G,b6 as Z,W as J,o as S,m as Q,aI as X,B as _,n as P,bd as k}from"./index.4aab0c79.js";import{d as ee}from"./useUtil.ec3d8b67.js";import"./api.e13390dc.js";function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?I(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ne(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function re(e,t){if(e==null)return{};var n=ne(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function oe(e,t){return ae(e)||ie(e,t)||ce(e,t)||ue()}function ae(e){if(Array.isArray(e))return e}function ie(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),u;!(r=(u=i.next()).done)&&(n.push(u.value),!(t&&n.length===t));r=!0);}catch(c){o=!0,a=c}finally{try{!r&&i.return!=null&&i.return()}finally{if(o)throw a}}return n}}function ce(e,t){if(!!e){if(typeof e=="string")return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}}function E(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?C(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function le(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(o,a){return a(o)},r)}}function g(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return t.apply(n,[].concat(o,u))}}}function b(e){return{}.toString.call(e).includes("Object")}function fe(e){return!Object.keys(e).length}function h(e){return typeof e=="function"}function de(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ge(e,t){return b(t)||f("changeType"),Object.keys(t).some(function(n){return!de(e,n)})&&f("changeField"),t}function pe(e){h(e)||f("selectorType")}function he(e){h(e)||b(e)||f("handlerType"),b(e)&&Object.values(e).some(function(t){return!h(t)})&&f("handlersType")}function me(e){e||f("initialIsRequired"),b(e)||f("initialType"),fe(e)&&f("initialContent")}function ve(e,t){throw new Error(e[t]||e.default)}var be={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},f=g(ve)(be),v={changes:ge,selector:pe,handler:he,initial:me};function ye(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};v.initial(e),v.handler(t);var n={current:e},r=g(je)(n,t),o=g(Oe)(n),a=g(v.changes)(e),i=g(we)(n);function u(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(s){return s};return v.selector(d),d(n.current)}function c(d){le(r,o,a,i)(d)}return[u,c]}function we(e,t){return h(t)?t(e.current):t}function Oe(e,t){return e.current=$($({},e.current),t),t}function je(e,t,n){return h(t)?t(e.current):Object.keys(n).forEach(function(r){var o;return(o=t[r])===null||o===void 0?void 0:o.call(t,e.current[r])}),n}var Se={create:ye},Pe={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};function Ie(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.length>=e.length?e.apply(this,o):function(){for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return t.apply(n,[].concat(o,u))}}}function Te(e){return{}.toString.call(e).includes("Object")}function Ee(e){return e||A("configIsRequired"),Te(e)||A("configType"),e.urls?(Ce(),{paths:{vs:e.urls.monacoBase}}):e}function Ce(){console.warn(R.deprecation)}function $e(e,t){throw new Error(e[t]||e.default)}var R={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},A=Ie($e)(R),Ae={config:Ee},Me=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(o){return n.reduceRight(function(a,i){return i(a)},o)}};function q(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],q(e[n],t[n]))}),T(T({},e),t)}var De={type:"cancelation",msg:"operation is manually canceled"};function w(e){var t=!1,n=new Promise(function(r,o){e.then(function(a){return t?o(De):r(a)}),e.catch(o)});return n.cancel=function(){return t=!0},n}var Re=Se.create({config:Pe,isInitialized:!1,resolve:null,reject:null,monaco:null}),L=oe(Re,2),m=L[0],y=L[1];function qe(e){var t=Ae.config(e),n=t.monaco,r=re(t,["monaco"]);y(function(o){return{config:q(o.config,r),monaco:n}})}function Le(){var e=m(function(t){var n=t.monaco,r=t.isInitialized,o=t.resolve;return{monaco:n,isInitialized:r,resolve:o}});if(!e.isInitialized){if(y({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),w(O);if(window.monaco&&window.monaco.editor)return x(window.monaco),e.resolve(window.monaco),w(O);Me(xe,ze)(Be)}return w(O)}function xe(e){return document.body.appendChild(e)}function Fe(e){var t=document.createElement("script");return e&&(t.src=e),t}function ze(e){var t=m(function(r){var o=r.config,a=r.reject;return{config:o,reject:a}}),n=Fe("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Be(){var e=m(function(n){var r=n.config,o=n.resolve,a=n.reject;return{config:r,resolve:o,reject:a}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){x(n),e.resolve(n)},function(n){e.reject(n)})}function x(e){m().monaco||y({monaco:e})}function Ue(){return m(function(e){var t=e.monaco;return t})}var O=new Promise(function(e,t){return y({resolve:e,reject:t})}),F={config:qe,init:Le,__getMonacoInstance:Ue};F.config({paths:{vs:z}});let p;const He=e=>{const[t,n]=M(!0);return F.init().then(r=>{p=r,n(!1)}),l(D,{get loading(){return t()},get children(){return l(We,e)}})},We=e=>{let t,n,r;return B(()=>{n=p.editor.create(t,{value:e.value,theme:e.theme}),r=p.editor.createModel(e.value,e.language,e.path?p.Uri.parse(e.path):void 0),n.setModel(r),n.onDidChangeModelContent(()=>{var o;(o=e.onChange)==null||o.call(e,n.getValue())})}),U(()=>{p.editor.setTheme(e.theme)}),H(()=>{r&&r.dispose(),n&&n.dispose()}),l(W,{w:"$full",h:"70vh",ref(o){const a=t;typeof a=="function"?a(o):t=o}})},Ye=()=>{var d;const[e]=ee(),{colorMode:t}=K(),n=V(()=>t()==="light"?"vs":"vs-dark"),{pathname:r}=N(),[o,a]=M((d=e())==null?void 0:d.content),i=Y(),[u,c]=G(()=>{var s;return Z.put("/fs/put",o(),{headers:{"File-Path":encodeURIComponent(r()),"Content-Type":((s=e())==null?void 0:s.contentType)||"text/plain"}})});return l(D,{get loading(){return e.loading},get children(){return l(J,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[l(He,{get value(){var s,j;return(j=(s=e())==null?void 0:s.content)!=null?j:""},get theme(){return n()},get path(){return S.obj.name},onChange:s=>{a(s)}}),l(Q,{get when(){return X("write")||S.write},get children(){return l(_,{get loading(){return u()},onClick:async()=>{if(!o()){P.success(i("global.save_success"));return}const s=await c();k(s,()=>{P.success(i("global.save_success"))})},get children(){return i("global.save")}})}})]}})}})};export{Ye as default};
