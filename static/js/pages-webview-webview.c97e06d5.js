(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-webview-webview"],{2330:function(e,t,n){"use strict";n.r(t);var r=n("8c26"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=i.a},5271:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-web-view",{attrs:{"webview-styles":e.webviewStyles,src:e.src}})],1)},i=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},"8c26":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{webviewStyles:{progress:{color:"#007aff"}},src:null}},onLoad:function(e){switch(uni.getSystemInfoSync().platform){case"devtools":this.ring="devtools",this.src=e.item;break;default:console.log("运行在开发者工具上"),this.src=JSON.parse(e.item).url;break}console.log(e)},methods:{}};t.default=r},c196:function(e,t,n){"use strict";n.r(t);var r=n("5271"),i=n("2330");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);var u=n("2877"),s=Object(u["a"])(i["default"],r["a"],r["b"],!1,null,"2032471a",null);t["default"]=s.exports}}]);