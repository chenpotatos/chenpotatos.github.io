import{_ as a}from"./d-dialog.04f0d663.js";import{a as e,g as t,l as s,o as l,b as o,h as i,n as r,x as m,i as p,A as n,B as d,C as c,t as v,J as f,k as u}from"./el-select.b78411e2.js";import j from"./indexdb.57862a78.js";import{todayMovieApi as _}from"./movieCalendar.ffab0f10.js";import"./el-dialog.64bc625d.js";import"./index.c511a369.js";import"./index.48a3615c.js";import"./isObject.a01dee34.js";import"./style.7be20351.js";import"./icon.e5ddc463.js";import"./index.389214ec.js";import"./index.d2069d58.js";import"./focus-trap.37f37187.js";import"./aria.66f3f71c.js";import"./index.9a99ea33.js";import"./index.502472ff.js";import"./error.7e8331f1.js";import"./scroll.64fda821.js";/* empty css                   */import"./main.4e240c16.js";import"./Close.c8424ab4.js";import"./localforage.60f13183.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./baseRequest.da51274f.js";import"./axios.91e25212.js";import"./version.8d34b113.js";const g={ref:"yiyanRef",class:"app-movie-wrap d-relative hfull"},h={class:"app-movie-body d-relative p50 d-hidden",style:{"z-index":"1"}},y={style:{width:"76%"},class:"fl pr20"},b={class:"f30"},x={style:{"margin-left":"4px"}},w={class:"mr10"},C={class:"mr10"},k={class:"mr10"},z={style:{color:"#fff"},class:"f18 mt20"},M={style:{color:"#efefef","line-height":"20px"},class:"f12 mt10"},O=["src","alt"],R=["href"],$=(a=>(n("data-v-953f03a7"),a=a(),d(),a))((()=>i("div",{class:"movie-source",style:{"z-index":"1"}},[c(" 此数据由 "),i("a",{style:{color:"#f4e5b3"},href:"https://www.cikeee.com?from=itab",target:"_blank"},"此刻 电影日历"),c(" 提供 ")],-1))),q=e({__name:"Content",setup(a){const e=t({});return async function(){let a=(s.get("app-movieCalendar")||{}).date;if(e.value=await j.get("app-movieCalendar")||{},e.value.rate=10*Math.round(e.value.mov_rating)/2,e.value.date&&e.value.date==a)return;_().then((a=>{let t=a.data||{};t.mov_rating=t.mov_rating,t.rate=10*Math.round(t.mov_rating)/2,e.value=t,j.set("app-movieCalendar",t)}))}(),(a,t)=>(l(),o("div",g,[i("span",{class:"movie-bg",style:r(`background-image:url(${e.value.mov_pic})`)},null,4),i("div",h,[i("div",y,[i("h2",b,m(e.value.mov_title),1),i("p",null,[i("span",{class:p(["rating-star",`start${e.value.rate}`]),style:{width:"55px",height:"11px"}},null,2),i("span",x,m(e.value.mov_rating),1)]),i("p",null,[i("em",w,m((e.value.mov_type||[]).join("/")),1),i("em",C,m(e.value.mov_year),1),i("em",k,m(e.value.mov_area),1)]),i("p",null,"导演："+m(e.value.mov_director),1),i("p",z,"“ "+m(e.value.mov_text)+" ”",1),i("p",M,m(e.value.mov_intro),1)]),i("img",{style:{width:"24%"},src:e.value.mov_pic,alt:e.value.mov_title},null,8,O),i("a",{href:e.value.mov_link,target:"_blank",style:{clear:"both",opacity:".8",color:"#f2cca4"},class:"d-block f12 pt10"},"查看电影源→",8,R)]),$],512))}},[["__scopeId","data-v-953f03a7"]]),A={__name:"index",setup:e=>(e,t)=>(l(),v(a,{width:"860px",height:"550px",destroyOnClose:!0},{default:f((()=>[u(q)])),_:1}))};export{A as default};
