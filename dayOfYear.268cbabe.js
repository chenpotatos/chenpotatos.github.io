import{W as t}from"./el-select.b78411e2.js";var e,r,a={exports:{}};const s=a.exports=(e="week",r="year",function(t,a,s){var i=a.prototype;i.week=function(t){if(void 0===t&&(t=null),null!==t)return this.add(7*(t-this.week()),"day");var a=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var i=s(this).startOf(r).add(1,r).date(a),n=s(this).endOf(e);if(i.isBefore(n))return 1}var o=s(this).startOf(r).date(a).startOf(e).subtract(1,"millisecond"),d=this.diff(o,e,!0);return d<0?s(this).startOf("week").week():Math.ceil(d)},i.weeks=function(t){return void 0===t&&(t=null),this.week(t)}});var i={exports:{}};const n=i.exports=function(t,e,r){e.prototype.dayOfYear=function(t){var e=Math.round((r(this).startOf("day")-r(this).startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"day")}};export{n as d,s as w};