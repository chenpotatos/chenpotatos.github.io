import{al as t,aD as s,aa as a,ap as r}from"./el-select.b78411e2.js";const e=(t="")=>t.split(" ").filter((t=>!!t.trim())),n=(t,s)=>{if(!t||!s)return!1;if(s.includes(" "))throw new Error("className should not contain space.");return t.classList.contains(s)},i=(t,s)=>{t&&s.trim()&&t.classList.add(...e(s))},l=(t,s)=>{t&&s.trim()&&t.classList.remove(...e(s))},o=(a,r)=>{var e;if(!t||!a||!r)return"";let n=s(r);"float"===n&&(n="cssFloat");try{const t=a.style[n];if(t)return t;const s=null==(e=document.defaultView)?void 0:e.getComputedStyle(a,"");return s?s[n]:""}catch(i){return a.style[n]}};function c(t,s="px"){return t?a(t)?t:r(t)?`${t}${s}`:void 0:""}export{c as a,i as b,o as g,n as h,l as r};
