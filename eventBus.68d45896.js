const t=new class{constructor(){this.eventCollection={}}on(t,e){this.eventCollection[t]||(this.eventCollection[t]=[]),this.eventCollection[t].push(e)}emit(t,...e){this.eventCollection[t]&&this.eventCollection[t].forEach((t=>{t(...e)}))}};export{t as default};
