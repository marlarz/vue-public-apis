(function(){"use strict";var e={1323:function(e,t,i){var n=i(9242),s=i(3396);const a={class:"container"};function r(e,t,i,n,r,o){const l=(0,s.up)("VList");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(l)])}var o=i(7139);const l={class:"page-title"},u=(0,s.Uk)(" Public APIs "),c={key:0},g={class:"search"},p={for:"search"},h=(0,s._)("span",null,"Search",-1),d=["disabled"],f={class:"categories"},v={for:"category"},L=(0,s._)("span",null,"By category",-1),m=["disabled"],y=["value"],w=["value"],C={key:0},k={key:1},P={class:"list"};function _(e,t,i,a,r,_){const b=(0,s.up)("VEntry"),A=(0,s.up)("VPagination"),D=(0,s.up)("VListStatus");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("h1",l,[u,_.showCounter?((0,s.wg)(),(0,s.iD)("span",c," ("+(0,o.zw)(_.getCount)+") ",1)):(0,s.kq)("",!0)]),(0,s._)("div",g,[(0,s._)("label",p,[h,(0,s.wy)((0,s._)("input",{type:"text",id:"search","onUpdate:modelValue":t[0]||(t[0]=e=>r.search=e),disabled:r.isPageLoading},null,8,d),[[n.nr,r.search]])])]),(0,s._)("div",f,[(0,s._)("label",v,[L,(0,s.wy)((0,s._)("select",{id:"category","onUpdate:modelValue":t[1]||(t[1]=e=>r.category=e),disabled:r.isPageLoading},[(0,s._)("option",{value:r.DEFAULT_CATEGORY},"All",8,y),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(_.categories,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e,value:e},(0,o.zw)(e),9,w)))),128))],8,m),[[n.bM,r.category]])])]),(0,s._)("div",null,[r.isPageLoading||_.isLoading?((0,s.wg)(),(0,s.iD)("p",C,"Loading...")):_.showList?((0,s.wg)(),(0,s.iD)("div",k,[(0,s._)("div",P,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(_.apisList,(e=>((0,s.wg)(),(0,s.j4)(b,(0,s.dG)({key:e.Link},e),null,16)))),128))]),(0,s.Wm)(A,{onPage:t[2]||(t[2]=e=>r.currentPage=e),"current-page":r.currentPage,count:_.getCount,"per-page":r.perPage},null,8,["current-page","count","per-page"])])):(0,s.kq)("",!0)]),!1===_.isLoading?((0,s.wg)(),(0,s.j4)(D,{key:0,onClear:_.clearList,onRefresh:_.getApisWithParams},null,8,["onClear","onRefresh"])):(0,s.kq)("",!0)],64)}var b=i(354),A=i.n(b);const D={class:"entry"},F={class:"api-category"},S={class:"api-name"},q={class:"api-chips chips"},x={class:"api-description"},O={class:"api-link"},T=["href"];function V(e,t,i,n,a,r){const l=(0,s.up)("VChip");return(0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("p",F,(0,o.zw)(i.Category),1),(0,s._)("h3",S,(0,o.zw)(i.API),1),(0,s._)("div",q,[(0,s.Wm)(l,{name:"Https",value:r.isHttps},null,8,["value"]),(0,s.Wm)(l,{name:"Auth",value:r.isAuth},null,8,["value"]),(0,s.Wm)(l,{name:"Cors",value:r.isCors},null,8,["value"])]),(0,s._)("p",x,(0,o.zw)(i.Description),1),(0,s._)("div",O,[(0,s._)("a",{href:i.Link,target:"_blank"},"Read more",8,T)])])}i(6699);const E={key:0,class:"chip","data-test":"chip"},U={key:0,style:{width:"16px",height:"16px"},viewBox:"0 0 24 24"},M=(0,s._)("path",{fill:"green",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"},null,-1),$=[M],j={key:1,style:{width:"16px",height:"16px"},viewBox:"0 0 24 24"},R=(0,s._)("path",{fill:"red",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,\n        17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"},null,-1),H=[R];var W={name:"VChip",props:{name:String,value:{validator(e){return"boolean"===typeof e||null===e}}},setup(e){return(t,i)=>null!=e.value?((0,s.wg)(),(0,s.iD)("div",E,[(0,s._)("span",null,(0,o.zw)(e.name),1),e.value?((0,s.wg)(),(0,s.iD)("svg",U,$)):((0,s.wg)(),(0,s.iD)("svg",j,H))])):(0,s.kq)("",!0)}};const z=W;var Y=z,B={name:"VEntry",components:{VChip:Y},props:{API:String,Description:String,Link:String,Auth:String,HTTPS:Boolean,Cors:{type:String,validator(e){return["yes","no","unknown"].includes(e)},default:"unknown"},Category:String},computed:{isHttps(){return this.HTTPS},isCors(){return null==this.Cors||"unknown"===this.Cors?null:"yes"===this.Cors},isAuth(){return Boolean(this.Auth)&&""!==this.Auth}}},G=i(89);const Z=(0,G.Z)(B,[["render",V]]);var N=Z,I=i(4870);const K={class:"pagination","data-test":"pagination"},J={key:0,class:"page-fl"},Q=(0,s._)("span",null,"...",-1),X=["onClick"],ee={key:1,class:"page-fl"},te=(0,s._)("span",null,"...",-1);var ie={name:"VPagination",props:{count:Number,perPage:Number,currentPage:Number},emits:{page:e=>"number"===typeof e},setup(e,{emit:t}){const i=e,a=(0,s.Fl)((()=>Math.ceil(i.count/i.perPage))),r=(0,s.Fl)((()=>Math.max(0,i.currentPage-1))),l=(0,s.Fl)((()=>Math.min(a.value,i.currentPage+2))),u=(0,s.Fl)((()=>Array.from({length:a.value},((e,t)=>t)).slice(r.value,l.value))),c=(0,s.Fl)((()=>!1===u.value.includes(a.value-1))),g=(0,s.Fl)((()=>!1===u.value.includes(0)));function p(e){t("page",e)}return(t,i)=>((0,s.wg)(),(0,s.iD)("div",K,[(0,I.SU)(g)?((0,s.wg)(),(0,s.iD)("div",J,[(0,s._)("a",{onClick:i[0]||(i[0]=(0,n.iM)((e=>p(0)),["prevent"])),href:"#",class:"page"},"1"),Q])):(0,s.kq)("",!0),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)((0,I.SU)(u),(t=>((0,s.wg)(),(0,s.iD)("a",{key:t,class:(0,o.C_)(["page",{current:e.currentPage===t}]),href:"#",onClick:(0,n.iM)((e=>p(t)),["prevent"])},(0,o.zw)(t+1),11,X)))),128)),(0,I.SU)(c)?((0,s.wg)(),(0,s.iD)("div",ee,[te,(0,s._)("a",{onClick:i[1]||(i[1]=(0,n.iM)((e=>p((0,I.SU)(a)-1)),["prevent"])),href:"#",class:"page"},(0,o.zw)((0,I.SU)(a)),1)])):(0,s.kq)("",!0)]))}};const ne=ie;var se=ne,ae=i(65);const re={key:0},oe=(0,s.Uk)("No matching records found, "),le={key:1},ue=(0,s.Uk)("Something went wrong, ");var ce={name:"VListStatus",emits:["clear","refresh"],setup(e){const t=(0,ae.oR)(),i=(0,s.Fl)((()=>t.getters["apis/getCount"])),a=(0,s.Fl)((()=>0===i.value)),r=(0,s.Fl)((()=>t.getters["apis/requestFailed"]));return(e,t)=>((0,s.wg)(),(0,s.iD)("div",null,[(0,I.SU)(a)?((0,s.wg)(),(0,s.iD)("p",re,[oe,(0,s._)("a",{href:"#",onClick:t[0]||(t[0]=(0,n.iM)((t=>e.$emit("clear")),["prevent"]))},"clear and try again")])):(0,s.kq)("",!0),(0,I.SU)(r)?((0,s.wg)(),(0,s.iD)("p",le,[ue,(0,s._)("a",{href:"#",onClick:t[1]||(t[1]=(0,n.iM)((t=>e.$emit("refresh")),["prevent"]))},"try again")])):(0,s.kq)("",!0)]))}};const ge=ce;var pe=ge,he={name:"VList",components:{VEntry:N,VPagination:se,VListStatus:pe},data(){return{isPageLoading:!0,category:"",search:"",currentPage:0,perPage:12,DEFAULT_CATEGORY:"all"}},computed:{isLoading(){return this.$store.getters["apis/isLoading"]},apisList(){return this.$store.getters["apis/getList"].slice(this.currentPage*this.perPage,this.currentPage*this.perPage+this.perPage)},getCount(){return this.$store.getters["apis/getCount"]},showCounter(){return null!=this.getCount&&this.getCount>=0},categories(){return this.$store.getters["categories/getCategories"]},isListEmpty(){return 0===this.getCount},requestFailed(){return this.$store.getters["apis/requestFailed"]},showList(){return!1===this.isListEmpty&&!1===this.requestFailed}},watch:{category(){this.resetCurrentPage(),this.getApisWithParams()},search(){this.resetCurrentPage(),this.debouncedSearch()}},methods:{getApisWithParams(){const e={},{category:t,search:i}=this;"all"!==t&&(e.category=t),i&&(e.title=i),this.$store.dispatch("apis/getAll",e)},debouncedSearch:A()((function(){this.getApisWithParams()}),500),clearList(){this.search="",this.category=this.DEFAULT_CATEGORY,this.resetCurrentPage(),this.$store.dispatch("apis/getAll")},resetCurrentPage(){this.currentPage=0}},created(){this.category=this.DEFAULT_CATEGORY,Promise.all([this.$store.dispatch("apis/getAll"),this.$store.dispatch("categories/getAll")]).finally((()=>{this.isPageLoading=!1}))}};const de=(0,G.Z)(he,[["render",_]]);var fe=de,ve={name:"App",components:{VList:fe}};const Le=(0,G.Z)(ve,[["render",r]]);var me=Le,ye=i(6265),we=i.n(ye);class Ce{constructor(){this.axios=we().create(),this.cancelToken=we().CancelToken,this.isCancel=we().isCancel}get(e,t){return this.axios.get(e,t)}}var ke=new Ce,Pe=(i(1703),{apiPrefix:"https://api.publicapis.org/",endpoints:{entries:"entries",categories:"categories"},get(e,t){if(void 0===this.endpoints[e])throw new Error("undefined api path");let i=this.endpoints[e];return"object"===typeof t?Object.keys(t).forEach((e=>{i=i.replace(`:${e}`,t[e])})):i.indexOf("/:")>0&&(i=i.substring(0,i.indexOf("/:"))),this.apiPrefix.concat(i)}}),_e={get(e){return ke.get(Pe.get("entries"),e)}},be={namespaced:!0,state:{isLoading:null,list:[],count:null,requestFailed:!1},getters:{isLoading:e=>e.isLoading,getList:e=>e.list,getCount:e=>e.count,requestFailed:e=>e.requestFailed},mutations:{setLoading(e,t){e.isLoading=t},setList(e,t){e.list=t},setCount(e,t){e.count=t},setRequestFailed(e,t){e.requestFailed=t},clearListState(e){e.list=[],e.count=null,e.requestFailed=!1}},actions:{getAll({commit:e},t){return e("setLoading",!0),e("clearListState"),_e.get({params:t}).then((({data:t})=>{e("setList",t.entries||[]),e("setCount",t.count)})).catch((()=>{e("setRequestFailed",!0)})).finally((()=>{e("setLoading",!1)}))}}},Ae={get(e){return ke.get(Pe.get("categories"),e)}},De={namespaced:!0,state:{isLoading:null,categories:[]},getters:{isLoading:e=>e.isLoading,getCategories:e=>e.categories},mutations:{setLoading(e,t){e.isLoading=t},setCategories(e,t){e.categories=t}},actions:{getAll({commit:e}){return e("setLoading",!0),Ae.get().then((({data:t})=>{e("setCategories",t.categories)})).finally((()=>{e("setLoading",!1)}))}}},Fe=(0,ae.MT)({modules:{apis:be,categories:De}});(0,n.ri)(me).use(Fe).mount("#app")}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,n,s,a){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],a=e[c][2];for(var o=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(o=!1,a<r&&(r=a));if(o){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,s,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,r=n[0],o=n[1],l=n[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(s in o)i.o(o,s)&&(i.m[s]=o[s]);if(l)var c=l(i)}for(t&&t(n);u<r.length;u++)a=r[u],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},n=self["webpackChunkpublic_apis"]=self["webpackChunkpublic_apis"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(1323)}));n=i.O(n)})();
//# sourceMappingURL=app.c0730d22.js.map