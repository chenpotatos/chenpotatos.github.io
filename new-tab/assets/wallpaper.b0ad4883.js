import{a as e,u as a,g as l,o as t,b as s,h as i,k as o,e as r,x as m,n as p,t as n,C as d,J as c,K as u,L as b,l as j,A as f,B as v}from"./el-select.b78411e2.js";/* empty css                        */import{D as x}from"./d-switch.ab8b8dc1.js";import{D as w}from"./d-color.cc67d107.js";import{D as g}from"./d-slider.6264aa01.js";import{d as y}from"./index.8ba13591.js";import{u as h,s as V}from"./main.4e240c16.js";import{ElImage as _}from"./index.6ce3651f.js";import{a as k,E as C}from"./index.60081c78.js";import"./el-switch.ffaf30b6.js";import"./index.c511a369.js";import"./index.48a3615c.js";import"./isObject.a01dee34.js";import"./style.7be20351.js";import"./index.389214ec.js";import"./icon.e5ddc463.js";import"./validator.56de5fb2.js";import"./index.e2562b21.js";import"./focus-trap.37f37187.js";import"./aria.66f3f71c.js";import"./index.d0852ddf.js";import"./index.502472ff.js";import"./error.7e8331f1.js";import"./save_config.15a98e40.js";import"./public-api.7aa6cb2f.js";import"./index.c6f50bb1.js";import"./axios.91e25212.js";import"./baseRequest.da51274f.js";import"./version.8d34b113.js";import"./website.a253acac.js";import"./index.77989186.js";/* empty css                */import"./Close.c8424ab4.js";import"./indexdb.57862a78.js";import"./localforage.60f13183.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./debounce.abbfdaeb.js";/* empty css                  */import"./index.4a61e9ca.js";import"./index.007a0b27.js";import"./index.9a99ea33.js";import"./index.c7cdc822.js";import"./typescript.72bf8adc.js";import"./index.34bbf0a0.js";import"./position.9519b900.js";import"./index.d2069d58.js";import"./index.62a578ca.js";import"./el-input-number.1aa680ac.js";import"./index.ada3624c.js";import"./el-tooltip.89296c46.js";import"./throttle.0dfde511.js";import"./scroll.64fda821.js";import"./index.9bab3cd4.js";import"./strings.71c48fcd.js";import"./isEqual.7e5ed192.js";import"./_baseIsEqual.4b13025e.js";import"./_Uint8Array.e97e1f00.js";import"./_arrayPush.949d1e07.js";const U=e=>(f("data-v-4bb1a670"),e=e(),v(),e),D={class:"setting-panel"},q=U((()=>i("p",{class:"bb wfull mt10 mb10"},null,-1))),E={class:"setting-panel mt10"},O=U((()=>i("h2",null,"壁纸",-1))),A={class:"paper-img"},B={class:"wall-change d-flex-center"},I={class:"setting-li d-flex-between"},L={name:"setting-wallpaper"},P=e(Object.assign(L,{props:{data:{type:Object,default:()=>{}}},setup(e){const f=a(),{t:v}=h(),U=l([{n:"不自动切换",v:0},{n:"间隔1小时更换",v:1},{n:"间隔2小时更换",v:2},{n:"间隔6小时更换",v:6},{n:"间隔12小时更换",v:12},{n:"间隔24小时更换",v:24}]),L=()=>{V({component:"wallpaper",type:"component"})};function P(e){e&&document.body.style.setProperty("--bg-hover-color",`${e}a1`)}function T(){y(f.value.wallpaper.src,f.value.wallpaper.name)}function $(e){0!=e&&j.set("wallpaperSwitchTime",(new Date).getTime())}return(a,l)=>(t(),s(u,null,[i("div",D,[o(x,{async:"",title:r(v)("setting_dark"),disabled:r(f).theme.system,"active-value":"dark","inactive-value":"light",modelValue:r(f).theme.mode,"onUpdate:modelValue":l[0]||(l[0]=e=>r(f).theme.mode=e)},null,8,["title","disabled","modelValue"]),o(x,{async:"",title:r(v)("setting_auto"),modelValue:r(f).theme.system,"onUpdate:modelValue":l[1]||(l[1]=e=>r(f).theme.system=e)},null,8,["title","modelValue"]),q,i("h2",null,m(r(v)("setting_primaryColor")),1),o(w,{onChange:P,colors:["#1681ff","#fbbe23","#fc4548","#2ecc71","#33c5c5","#9b59b6","#f1c40f","#e67e22","#e74c3c"],async:"",modelValue:r(f).theme.color,"onUpdate:modelValue":l[2]||(l[2]=e=>r(f).theme.color=e),class:"mb10"},null,8,["modelValue"])]),i("div",E,[O,i("div",A,[3==r(f).wallpaper.type?(t(),s("div",{key:0,class:"el-image hfull",style:p(`background-color:${r(f).wallpaper.src}`)},null,4)):(t(),n(r(_),{key:1,src:r(f).wallpaper.thumb||r(f).wallpaper.src},null,8,["src"])),i("div",B,[i("button",{onClick:L},m(r(v)("setting_wallpaperChange")),1),i("button",{onClick:T},m(r(v)("setting_downloadLocal")),1)])]),o(g,{async:"",title:r(v)("setting_wallpaperMask"),min:0,max:.9,step:.01,unit:"%",modelValue:r(f).wallpaper.mask,"onUpdate:modelValue":l[3]||(l[3]=e=>r(f).wallpaper.mask=e),value:100*r(f).wallpaper.mask},null,8,["title","max","step","modelValue","value"]),o(g,{async:"",unit:"%",title:r(v)("setting_wallpaperBlur"),min:0,max:40,value:2.5*r(f).wallpaper.blur,modelValue:r(f).wallpaper.blur,"onUpdate:modelValue":l[4]||(l[4]=e=>r(f).wallpaper.blur=e)},null,8,["title","value","modelValue"]),i("div",I,[d(" 自动壁纸 "),o(r(C),{onChange:$,size:"small",modelValue:e.data.time,"onUpdate:modelValue":l[5]||(l[5]=a=>e.data.time=a)},{default:c((()=>[(t(!0),s(u,null,b(U.value,(e=>(t(),n(r(k),{label:e.n,value:e.v,key:e.v},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])])],64))}}),[["__scopeId","data-v-4bb1a670"]]);export{P as default};