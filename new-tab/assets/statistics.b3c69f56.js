import{_ as t,u as e,l as o,d as i}from"./el-select.b78411e2.js";import{statUserAnalyseApi as a}from"./useSta.6b879b11.js";import"./baseRequest.da51274f.js";import"./axios.91e25212.js";import"./version.8d34b113.js";const n=new Promise((function(e,o){t((()=>import("./fingerprint2.8ffdc564.js").then((t=>t.f))),["./fingerprint2.8ffdc564.js","./el-select.b78411e2.js","./el-select.b0658523.css"],import.meta.url).then((t=>{window.requestIdleCallback&&t.get((function(i){const a=i.map((function(t,e){return 0===e?t.value.replace(/\bNetType\/\w+\b/,""):t.value}));let n=t.x64hash128(a.join(""),31);n?e(n):o()}))}))})),s=e(),l=async()=>{let e=o.get("bdRodomTn");e||(e=Math.floor(10*Math.random())+1,o.set("bdRodomTn",e));let i=await n;a({fp:i,tn:e}).then((e=>{let o=e.data||{},i=o.tn||"68018901_2_oem_dg";s.value.searchEngine.forEach((t=>{"baidu"===t.key&&(t.href=`https://www.baidu.com/s?tn=${i}&ie=utf-8&wd=`)})),o.content&&(1==o.type?t((()=>import("./index.5571931c.js")),["./index.5571931c.js","./el-select.b78411e2.js","./el-select.b0658523.css","./index.c511a369.js","./index.48a3615c.js","./isObject.a01dee34.js","./style.7be20351.js","./icon.e5ddc463.js","./index.389214ec.js","./aria.66f3f71c.js","./index.9a99ea33.js"],import.meta.url).then((t=>{t.default({customClass:"publice-notice",duration:0,showClose:!0,title:o.title,dangerouslyUseHTMLString:!0,message:o.content})})):2==o.type&&o.content&&t((()=>import("./versionNotice.406579d8.js")),["./versionNotice.406579d8.js","./el-select.b78411e2.js","./el-select.b0658523.css"],import.meta.url).then((t=>{t.default({modelValue:!0,title:o.title,center:!0},o.content)})))}))},r={v:1,tid:"UA-215722304-2",ul:(window.navigator.language||"").toLowerCase()},c=async(t={})=>{if("false"===window.localStorage.getItem("collectAnalytics"))return;r.cid=await n;let e={...r,...t},o="";for(let i in e)o+=`${i}=${e[i]}&`;fetch(`https://www.google-analytics.com/collect?${o}`,{method:"POST"})},d=async(t="i",e={})=>{let o={...{gid:"gad_199_lbpuiqki",ck:168,adk:2091,os:3,if:"",aid:"",im:"",m:"",ip:"",ts:i().valueOf(),geo:"",oa:""},...e},a="";for(let i in o)a+=`${i}=${o[i]}&`;fetch(`https://${t}.gridsumdissector.com/${"i"==t?"v":"r"}/?${a}`)};export{l as customAnalytics,c as googleAnalytics,d as gridsumAnalytics};