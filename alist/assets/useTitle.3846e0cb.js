import{K as c,as as u,d as o,u as f,b2 as l,E as r}from"./index.4aab0c79.js";let m=0;const s={},i=t=>{const e=(m++).toString(),a=[];for(const n in s)s[n]&&(a.push(n),s[n]=!1);s[e]=!0,typeof t=="function"?c(()=>{s[e]&&(document.title=t())}):document.title=t,u(()=>{delete s[e];for(const n in a)s[n]=!0})},p=()=>{const t=o(),{pathname:e}=f();i(()=>`${e()==="/"?t("manage.sidemenu.home"):l(e())} | ${r("site_title")}`)},g=t=>{const e=o();i(()=>`${e(t)} | ${e("manage.title")}`)};export{i as a,g as b,p as u};
