(function(e){function n(n){for(var a,o,i=n[0],c=n[1],s=n[2],p=0,u=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(n);while(u.length)u.shift()();return l.push.apply(l,s||[]),t()}function t(){for(var e,n=0;n<l.length;n++){for(var t=l[n],a=!0,i=1;i<t.length;i++){var c=t[i];0!==r[c]&&(a=!1)}a&&(l.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},r={app:0},l=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="https://wafelt.github.io/html-vue-test/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var f=c;l.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"467a":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("7a23");function r(e,n,t,r,l,o){var i=Object(a["i"])("FolderView");return Object(a["g"])(),Object(a["c"])(i,{name:"src",folders:e.folders,files:e.files},null,8,["folders","files"])}t("b0c0");var l={class:"folder"},o={class:"folder__label"},i=Object(a["e"])("i",{class:"fas fa-chevron-down"},null,-1),c={class:"folder__name"};function s(e,n,t,r,s,f){var p=Object(a["i"])("FolderView",!0),u=Object(a["i"])("FileView");return Object(a["g"])(),Object(a["d"])("div",l,[Object(a["e"])("span",o,[i,Object(a["e"])("p",c,Object(a["j"])(t.name),1)]),(Object(a["g"])(!0),Object(a["d"])(a["a"],null,Object(a["h"])(t.folders,(function(e){return Object(a["g"])(),Object(a["c"])(p,{name:e.name,folders:e.folders,files:e.files},null,8,["name","folders","files"])})),256)),(Object(a["g"])(!0),Object(a["d"])(a["a"],null,Object(a["h"])(t.files,(function(e){return Object(a["g"])(),Object(a["c"])(u,{type:e.type,name:e.name},null,8,["type","name"])})),256))])}var f={class:"file__wrapper"},p={class:"file"};function u(e,n,t,r,l,o){return Object(a["g"])(),Object(a["d"])("div",f,[Object(a["e"])("i",{class:Object(a["f"])(r.getIconNameByType(t.type))},null,2),Object(a["e"])("p",p,Object(a["j"])(t.name),1)])}t("467a");var g={name:"FileView",props:{name:String,type:String},setup:function(){function e(e){var n={"image/svg":"fas fa-file-image","image/jpeg":"fas file-icon fa-image","image/png":"fas file-icon fa-image","application/javascript":"fab fa-js","application/json":"fas fa-code"};return n[e]?n[e]:"fas fa-file-alt"}return{getIconNameByType:e}}};g.render=u;var m=g,d=(t("fa7a"),{name:"FolderView",components:{FileView:m},props:{name:String,folders:Array,files:Array,type:String}});d.render=s;var b=d,j={folders:[{name:"assets",folders:[{name:"icons",folders:[],files:[{name:"close.svg",type:"image/svg",length:"1024"},{name:"open.svg",type:"image/svg",length:"1024"},{name:"exit.svg",type:"image/svg",length:"1024"},{name:"relocat.svg",type:"image/svg",length:"1024"}]},{name:"backgrounds",folders:[],files:[{name:"common.jpeg",type:"image/jpeg",length:"1024"},{name:"secondary.jpg",type:"image/jpeg",length:"1024"},{name:"overlay.png",type:"image/png",length:"1024"}]}],files:[]}],files:[{name:".browserslistrc",type:"application/octet-stream",length:"1024"},{name:".gitignore",type:"text/plain",length:"231"},{name:"babel.config.js",type:"application/javascript",length:"73"},{name:"package-lock.json",type:"application/json",length:"47941"}]},v=(t("a766"),{name:"App",components:{FolderView:b},data:function(){return j}});v.render=r;var y=v;Object(a["b"])(y).mount("#app")},a766:function(e,n,t){},fa7a:function(e,n,t){}});
//# sourceMappingURL=app.b319d172.js.map