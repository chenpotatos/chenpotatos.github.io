import{a,aq as s,g as e,o as t,t as o,J as i,k as l,e as r,C as c,h as p,i as d,b as n,j as m,ao as u,A as b,B as f}from"./el-select.b78411e2.js";import{E as j}from"./el-dialog.64bc625d.js";/* empty css                   *//* empty css                  */import{ElButton as h}from"./index.4a61e9ca.js";import"./index.c511a369.js";import"./index.48a3615c.js";import"./isObject.a01dee34.js";import"./style.7be20351.js";import"./icon.e5ddc463.js";import"./index.389214ec.js";import"./index.d2069d58.js";import"./focus-trap.37f37187.js";import"./aria.66f3f71c.js";import"./index.9a99ea33.js";import"./index.502472ff.js";import"./error.7e8331f1.js";import"./scroll.64fda821.js";import"./index.d0852ddf.js";import"./index.e2562b21.js";const y=""+new URL("../wechat-pay.png",import.meta.url).href,w=""+new URL("../ali-pay.png",import.meta.url).href,x=a=>(b("data-v-c8bda511"),a=a(),f(),a),v=x((()=>p("h2",{class:"ac f18 b mt20",style:{color:"#666"}},"打赏支持iTab新标签页",-1))),g={class:"p10 ac"},k=x((()=>p("p",{class:"ac d-sub f12",style:{"line-height":"20px"}},[c(" 如果iTab对您有价值，不妨支持一下我吧， "),p("br"),c("我将专注于持续优化产品体验。 ")],-1))),_={class:"ac sponsor-btn mt20"},C={class:"mt20 ac sponsor-qrcode"},T={key:0,class:"wfull",style:{"border-radius":"4px"},src:y},U={key:1,class:"wfull",style:{"border-radius":"4px"},src:w},q=x((()=>p("p",null,[p("a",{href:"https://www.itab.link/donate.html",target:"_blank",class:"mt10 f12 d-sub"},"iTab赞赏支出公示")],-1))),L=a({__name:"sponsor",setup(a){const b=s(),f=e("wechat");return(a,s)=>(t(),o(r(j),u({center:"","append-to-body":"",class:"sponsor",width:"600px"},r(b)),{header:i((()=>[v])),footer:i((()=>[l(r(h),{size:"small",onClick:s[2]||(s[2]=a=>r(b)["onUpdate:modelValue"](!1))},{default:i((()=>[c("下次再说")])),_:1})])),default:i((()=>[p("div",g,[k,p("div",_,[p("button",{class:d([{active:"wechat"===f.value},"d-button wechat"]),type:"button",onClick:s[0]||(s[0]=a=>f.value="wechat")}," 微信 ",2),p("button",{onClick:s[1]||(s[1]=a=>f.value="alipay"),class:d([{active:"alipay"===f.value},"d-button alipay"]),type:"button"}," 支付宝 ",2)]),p("ul",C,["wechat"===f.value?(t(),n("img",T)):m("",!0),"alipay"===f.value?(t(),n("img",U)):m("",!0)]),q])])),_:1},16))}},[["__scopeId","data-v-c8bda511"]]);export{L as default};