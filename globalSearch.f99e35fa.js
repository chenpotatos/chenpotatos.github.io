import{g as e,w as t,R as o,M as s}from"./el-select.b78411e2.js";const u=e(!1);t(u,(e=>{o((()=>{if(e){let e=document.querySelector("#keywordInput");setTimeout((()=>{e&&e.focus()}))}else document.querySelector(".se-input").focus()}))})),document.addEventListener("keydown",(e=>{let t=e.ctrlKey;s()&&(t=e.metaKey,e.ctrlKey)||t&&"f"===e.key&&(e.preventDefault(),u.value=!u.value)}),!1);export{u as g};