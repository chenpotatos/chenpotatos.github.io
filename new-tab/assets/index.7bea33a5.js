import{_ as a}from"./d-dialog.04f0d663.js";import{a as e,g as s,R as t,o as l,b as o,K as r,L as c,h as n,x as p,i,A as d,B as m,k as u,J as f,e as h,t as b}from"./el-select.b78411e2.js";/* empty css                */import{sportList as y}from"./sport.3f70bac4.js";import{a as _,E as j}from"./index.f8fe0371.js";import"./el-dialog.64bc625d.js";import"./index.c511a369.js";import"./index.48a3615c.js";import"./isObject.a01dee34.js";import"./style.7be20351.js";import"./icon.e5ddc463.js";import"./index.389214ec.js";import"./index.d2069d58.js";import"./focus-trap.37f37187.js";import"./aria.66f3f71c.js";import"./index.9a99ea33.js";import"./index.502472ff.js";import"./error.7e8331f1.js";import"./scroll.64fda821.js";/* empty css                   */import"./main.4e240c16.js";import"./Close.c8424ab4.js";import"./baseRequest.da51274f.js";import"./axios.91e25212.js";import"./version.8d34b113.js";import"./typescript.72bf8adc.js";import"./strings.71c48fcd.js";const v=a=>(d("data-v-dcce18ac"),a=a(),m(),a),g={class:"match-list d-sub"},x={style:{width:"60px"},class:"b"},k={class:"host-name"},w=["src"],S=["title"],T={class:"d-sub b"},A={class:"guest-name"},C=["title"],I=["src"],O=v((()=>n("span",null,null,-1))),R=v((()=>n("span",null,null,-1))),V=v((()=>n("span",null,null,-1))),q=v((()=>n("span",null,null,-1))),E=["href"],L=e({__name:"match",props:{data:{type:Array,default:[]}},setup(a){const e=s(),d=s([]);return y({type:"v2match"}).then((a=>{let s=a.data||[],l={};s.forEach((a=>{let e=a.dateText;l[e]?l[e].push(a):l[e]=[a]}));let o=[];for(let e in l){let a={date:e,list:l[e]};o.push(a)}d.value=o,t((()=>{let a=e.value.querySelector(".anchor");e.value.scrollTo({top:a.offsetTop-100})}))})),(a,s)=>(l(),o("div",{class:"match-wrap",ref_key:"matchWrapRef",ref:e},[(l(!0),o(r,null,c(d.value,(a=>(l(),o("div",{key:a.id},[n("p",{class:i(["title",{anchor:a.date.includes("今天")}])},p(a.date),3),n("ul",g,[(l(!0),o(r,null,c(a.list,(a=>(l(),o("li",{class:"d-flex-between",key:a.id},[n("span",x,p(a.match_date.split(" ")[1]),1),n("span",k,[n("img",{src:a.host_logo_url,alt:""},null,8,w),n("em",{title:a.host_name,class:"d-elip"},p(a.host_name),9,S)]),n("span",null,[n("p",T,p(a.vsLine),1)]),n("span",A,[n("em",{title:a.guest_name,class:"d-elip"},p(a.guest_name),9,C),n("img",{src:a.guest_logo_url,alt:""},null,8,I)]),O,R,V,q,n("a",{class:"d-sub f13",href:a.match_link,target:"_blank"},"详情>",8,E)])))),128))])])))),128))],512))}},[["__scopeId","data-v-dcce18ac"]]),B={class:"match-wrap d-flex"},J={class:"match-list d-sub"},K=["href"],U=["src"],W={key:1,class:"index"},$={class:"d-sub",style:{width:"60px"}},z=e({__name:"hotSearch",props:{data:{type:Array,default:[]}},setup(a){const e=s({});return y({type:"hotSearch"}).then((a=>{e.value=a.data||[],console.log(a.data)})),(a,s)=>(l(),o("div",B,[n("div",J,[(l(!0),o(r,null,c(e.value,((a,e)=>(l(),o("a",{href:a.play_link,target:"_blank",class:"d-elip",key:a.id},[e<3?(l(),o("img",{key:0,class:"index",src:`https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/icons/hot/hot_top${a.rank}.png`,alt:""},null,8,U)):(l(),o("span",W,p(a.rank),1)),n("span",$,p(a.title),1)],8,K)))),128))])]))}},[["__scopeId","data-v-11c74ce7"]]),D={class:"sport-content hfull"},F={class:"pl20 pr20"},G=(a=>(d("data-v-6c17a066"),a=a(),m(),a))((()=>n("hr",{style:{border:"0","border-top":"1px solid rgba(var(--alpha-color), 0.05)",margin:"0"}},null,-1))),H={name:"appSport",components:{match:L,hotSearch:z}},M=e(Object.assign(H,{setup(a){const e=s("v2match"),t=[{name:"全部赛程",type:"v2match"},{name:"世界杯资讯",type:"hotSearch"}];function p({props:a}){e.value=a.name}return(a,s)=>(l(),o("div",D,[n("div",F,[u(h(j),{onTabClick:p,modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=a=>e.value=a)},{default:f((()=>[(l(),o(r,null,c(t,(a=>u(h(_),{label:a.name,name:a.type,key:a.type},null,8,["label","name"]))),64))])),_:1},8,["modelValue"])]),G,"v2match"===e.value?(l(),b(L,{key:0})):(l(),b(z,{key:1}))]))}}),[["__scopeId","data-v-6c17a066"]]),N={__name:"index",setup:e=>(e,s)=>(l(),b(a,{destroyOnClose:!0},{default:f((()=>[u(M)])),_:1}))};export{N as default};
