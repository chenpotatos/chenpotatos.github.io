import{f as n,Z as d,o,bC as i}from"./index.4aab0c79.js";import{d as s}from"./useUtil.ec3d8b67.js";import{M as m}from"./Markdown.0bbea584.js";import"./api.e13390dc.js";const p=()=>{const[t]=s(),a=e=>o.obj.name.endsWith(".md")?e:"```"+i(o.obj.name)+`
`+e+"\n```";return n(d,{get loading(){return t.loading},get children(){return n(m,{get children(){var e,r;return a((r=(e=t())==null?void 0:e.content)!=null?r:"")}})}})};export{p as default};
