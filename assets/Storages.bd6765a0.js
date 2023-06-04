import{d as $,u as f,a as h,b6 as i,f as e,J as C,a7 as _,a0 as g,bc as m,bu as x,ai as p,Y as v,B as o,aN as B,bd as b,n as k,W as S,e as y,bY as D,v as L}from"./index.4aab0c79.js";import{b as M}from"./useTitle.3846e0cb.js";import{D as T}from"./DeletePopover.9a2be98e.js";const R=t=>{const a=$(),{to:l}=f(),[c,d]=h(()=>i.post(`/admin/storage/delete?id=${t.storage.id}`)),[u,r]=h(()=>i.post(`/admin/storage/${t.storage.disabled?"enable":"disable"}?id=${t.storage.id}`));return e(S,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return C("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${_()}`}},get children(){return[e(g,{spacing:"$2",get children(){return[e(m,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return t.storage.mount_path}}),e(x,{colorScheme:"info",get children(){return a(`drivers.drivers.${t.storage.driver}`)}})]}}),e(g,{get children(){return[e(m,{get children(){return[p(()=>a("storages.common.status")),":\xA0"]}}),e(v,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return t.storage.status}})]}}),e(m,{css:{wordBreak:"break-all"},get children(){return t.storage.remark}}),e(g,{spacing:"$2",get children(){return[e(o,{onClick:()=>{l(`/@manage/storages/edit/${t.storage.id}`)},get children(){return a("global.edit")}}),e(o,{get loading(){return u()},colorScheme:"warning",onClick:async()=>{const n=await r();B(n,()=>{t.refresh()})},get children(){return a(`global.${t.storage.disabled?"enable":"disable"}`)}}),e(T,{get name(){return t.storage.mount_path},get loading(){return c()},onClick:async()=>{const n=await d();b(n,()=>{k.success(a("global.delete_success")),t.refresh()})}})]}})]}})},H=()=>{const t=$();M("manage.sidemenu.storages");const{to:a}=f(),[l,c]=h(()=>i.get("/admin/storage/list")),[d,u]=y([]),r=async()=>{const s=await c();b(s,w=>u(w.content))};r();const n=async()=>{const s=await i.post("/admin/storage/load_all");b(s,()=>{k.success(t("storages.common.start_load_success"))})};return e(S,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(g,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return l()},onClick:r,get children(){return t("global.refresh")}}),e(o,{onClick:()=>{a("/@manage/storages/add")},get children(){return t("global.add")}}),e(o,{colorScheme:"warning",get loading(){return l()},onClick:n,get children(){return t("storages.common.load_all")}})]}}),e(D,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(L,{get each(){return d()},children:s=>e(R,{storage:s,refresh:r})})}})]}})};export{H as default};