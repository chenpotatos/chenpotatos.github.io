import{D as e}from"./d-switch.ab8b8dc1.js";import{a,g as t,c as l,o,b as s,h as d,e as i,x as r,n,i as m,R as u,k as p,K as c,j as f,A as j,B as b}from"./el-select.b78411e2.js";import{D as V}from"./d-color.cc67d107.js";import{D as g}from"./d-slider.6264aa01.js";import{_ as h}from"./d-font-family.232aca90.js";import{u as x}from"./main.4e240c16.js";import"./el-switch.ffaf30b6.js";import"./index.c511a369.js";import"./index.48a3615c.js";import"./isObject.a01dee34.js";import"./style.7be20351.js";import"./index.389214ec.js";import"./icon.e5ddc463.js";import"./validator.56de5fb2.js";import"./index.e2562b21.js";import"./focus-trap.37f37187.js";import"./aria.66f3f71c.js";import"./index.d0852ddf.js";import"./index.502472ff.js";import"./error.7e8331f1.js";import"./save_config.15a98e40.js";import"./public-api.7aa6cb2f.js";import"./index.c6f50bb1.js";import"./axios.91e25212.js";import"./baseRequest.da51274f.js";import"./version.8d34b113.js";import"./website.a253acac.js";import"./index.77989186.js";/* empty css                */import"./Close.c8424ab4.js";import"./indexdb.57862a78.js";import"./localforage.60f13183.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./debounce.abbfdaeb.js";/* empty css                  */import"./index.4a61e9ca.js";import"./index.007a0b27.js";import"./index.9a99ea33.js";import"./index.c7cdc822.js";import"./typescript.72bf8adc.js";import"./index.34bbf0a0.js";import"./position.9519b900.js";import"./index.d2069d58.js";import"./index.62a578ca.js";import"./el-input-number.1aa680ac.js";import"./index.ada3624c.js";import"./el-tooltip.89296c46.js";import"./index.60081c78.js";import"./index.9bab3cd4.js";import"./strings.71c48fcd.js";import"./scroll.64fda821.js";import"./isEqual.7e5ed192.js";import"./_baseIsEqual.4b13025e.js";import"./_Uint8Array.e97e1f00.js";import"./_arrayPush.949d1e07.js";const y=["checked","true-value","false-value"],_=a({__name:"d-toggle",props:{modelValue:{type:[Number,String,Boolean]},title:String,trueValue:{type:[Number,String,Boolean],default:!0},falseValue:{type:[Number,String,Boolean],default:!1}},emits:["update:modelValue","change"],setup(e,{emit:a}){const p=e,c=t(null),f=l((()=>p.modelValue===p.trueValue)),j=e=>{u((()=>{const t=e.target.checked?p.trueValue:p.falseValue;a("update:modelValue",t),a("change",t)}))},b=l((()=>{let e=document.documentElement.style.getPropertyValue("--primary-color").trim();return f.value?`background-color:${e}10`:""}));return(a,t)=>(o(),s("div",{class:m(["d-toggle ac",{"is-checked":i(f)}])},[d("input",{class:"d-toggle__input",ref_key:"input",ref:c,type:"checkbox",checked:i(f),onChange:j,"true-value":e.trueValue,"false-value":e.falseValue},null,40,y),d("div",{style:n(i(b)),class:"d-toggle__core"},r(e.title),5)],2))}},[["__scopeId","data-v-5461de5b"]]),v=e=>(j("data-v-94e17ea5"),e=e(),b(),e),w={class:"setting-panel"},k={style:{"background-color":"var(--bg-body)",padding:"8px","border-radius":"6px",display:"flex","flex-wrap":"wrap","justify-content":"space-around","align-items":"center",height:"120px"}},U=v((()=>d("p",{class:"bb wfull mt20 mb10"},null,-1))),S=v((()=>d("h2",null,"颜色",-1))),B=a({__name:"time",props:{data:{default:{}}},setup(a){const t=a,{t:l}=x();return null==t.data.show&&(t.data.show=!0),null==t.data.hour24&&(t.data.hour24=!0),(t,r)=>(o(),s("div",w,[p(e,{async:"",title:"显示时间",modelValue:a.data.show,"onUpdate:modelValue":r[0]||(r[0]=e=>a.data.show=e)},null,8,["modelValue"]),a.data.show?(o(),s(c,{key:0},[d("div",k,[p(_,{async:"",title:i(l)("setting_showMonth"),"true-value":"inline","false-value":"none",modelValue:a.data.month,"onUpdate:modelValue":r[1]||(r[1]=e=>a.data.month=e)},null,8,["title","modelValue"]),p(_,{async:"",title:i(l)("setting_showWeek"),"true-value":"inline","false-value":"none",modelValue:a.data.week,"onUpdate:modelValue":r[2]||(r[2]=e=>a.data.week=e)},null,8,["title","modelValue"]),p(_,{async:"",title:i(l)("setting_showLunar"),"true-value":"inline","false-value":"none",modelValue:a.data.lunar,"onUpdate:modelValue":r[3]||(r[3]=e=>a.data.lunar=e)},null,8,["title","modelValue"]),p(_,{async:"",title:"24",modelValue:a.data.hour24,"onUpdate:modelValue":r[4]||(r[4]=e=>a.data.hour24=e)},null,8,["modelValue"]),p(_,{async:"",title:"秒",modelValue:a.data.sec,"onUpdate:modelValue":r[5]||(r[5]=e=>a.data.sec=e)},null,8,["modelValue"]),p(_,{async:"",title:i(l)("setting_timeWeight"),"true-value":"600","false-value":"400",modelValue:a.data.fontWeight,"onUpdate:modelValue":r[6]||(r[6]=e=>a.data.fontWeight=e)},null,8,["title","modelValue"])]),U,p(g,{async:"",title:i(l)("setting_timeSize"),min:30,max:130,modelValue:a.data.size,"onUpdate:modelValue":r[7]||(r[7]=e=>a.data.size=e)},null,8,["title","modelValue"]),p(h,{title:i(l)("setting_timeFont"),modelValue:a.data.font,"onUpdate:modelValue":r[8]||(r[8]=e=>a.data.font=e)},null,8,["title","modelValue"]),S,p(V,{colors:["#fff","#9de5fe","#b8ceff","#efabc4","#daccfd","#df98fe","#fceaba","#f4f7ca","#d0eabb"],modelValue:a.data.color,"onUpdate:modelValue":r[9]||(r[9]=e=>a.data.color=e),class:"mb10"},null,8,["modelValue"])],64)):f("",!0)]))}},[["__scopeId","data-v-94e17ea5"]]);export{B as default};