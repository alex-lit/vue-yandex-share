(function(e){function t(t){for(var n,a,l=t[0],s=t[1],p=t[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(d.length)d.shift()();return r.push.apply(r,p||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,l=1;l<o.length;l++){var s=o[l];0!==i[s]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},i={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-yandex-share/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var c=s;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},2545:function(e,t,o){},"3a8a":function(e,t,o){"use strict";var n=o("f632"),i=o.n(n);i.a},"3cc5":function(e,t,o){"use strict";var n=o("6049"),i=o.n(n);i.a},"4ce3":function(e,t,o){"use strict";var n=o("84a7"),i=o.n(n);i.a},"51a6":function(e,t,o){"use strict";var n=o("b360"),i=o.n(n);i.a},"558c":function(e,t,o){"use strict";var n=o("2545"),i=o.n(n);i.a},6049:function(e,t,o){},"84a7":function(e,t,o){},a630:function(e,t,o){},b360:function(e,t,o){},ba10:function(e,t,o){"use strict";var n=o("bfd5"),i=o.n(n);i.a},bfd5:function(e,t,o){},cd49:function(e,t,o){"use strict";o.r(t);var n=o("f6da");Object(n["a"])(document);o("0fae");var i=o("5c96"),r=o.n(i),a=o("2b0e");a["default"].use(r.a);var l=o("337f"),s=o.n(l),p=s.a.getParser(window.navigator.userAgent),c=document.documentElement.dataset;c.browserName=p.parsedResult.browser.name,c.browserVersion=p.parsedResult.browser.version,c.engineName=p.parsedResult.engine.name,c.platformType=p.parsedResult.platform.type,c.osName=p.parsedResult.os.name;o("a630");var u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",{staticClass:"app"},[o("vue-github-corners",{attrs:{"repo-url":"//github.com/alex-lit/vue-yandex-share","cat-color":"var(--white)","bg-color":"var(--amber--900)"}}),o("wrapper-demo",{scopedSlots:e._u([{key:"config",fn:function(){return[o("el-form",{attrs:{size:"mini","label-position":"top"}},[o("el-form-item",{attrs:{label:"Список поддерживаемых соцсетей"}},[o("el-select",{attrs:{multiple:"","popper-append-to-body":!1},model:{value:e.options.services,callback:function(t){e.$set(e.options,"services",t)},expression:"options.services"}},e._l(["blogger","delicious","digg","evernote","facebook","gplus","linkedin","lj","moimir","odnoklassniki","pinterest","pocket","qzone","reddit","renren","sinaWeibo","skype","surfingbird","telegram","tencentWeibo","tumblr","twitter","viber","vkontakte","whatsapp"],(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"Размер кнопок соцсетей"}},[o("el-select",{attrs:{"popper-append-to-body":!1},model:{value:e.options.size,callback:function(t){e.$set(e.options,"size",t)},expression:"options.size"}},e._l(["m","s"],(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"Признак того, что на кнопке соцсети отображается счетчик публикаций"}},[o("el-switch",{model:{value:e.options.counter,callback:function(t){e.$set(e.options,"counter",t)},expression:"options.counter"}})],1),o("el-form-item",{attrs:{label:"Количество соцсетей, отображаемых в виде кнопок.\n             Используется если нужно встроить в блок много соцсетей, а также чтобы\n             блок занимал мало места на странице. Не вошедшие в лимит соцсети будут\n             отображаться в pop-up по нажатию кнопки",clearable:""}},[o("el-input-number",{attrs:{min:0,max:24},model:{value:e.options.limit,callback:function(t){e.$set(e.options,"limit",t)},expression:"options.limit"}})],1),o("el-form-item",{attrs:{label:"Направление списка кнопок"}},[o("el-select",{attrs:{"popper-append-to-body":!1},model:{value:e.options.direction,callback:function(t){e.$set(e.options,"direction",t)},expression:"options.direction"}},e._l(["horizontal","vertical"],(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"Направление открытия pop-up"}},[o("el-select",{attrs:{"popper-append-to-body":!1},model:{value:e.options.popupDirection,callback:function(t){e.$set(e.options,"popupDirection",t)},expression:"options.popupDirection"}},e._l(["bottom","top"],(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"Расположение pop-up относительно контейнера блока. Значение outer\n             может понадобиться в том случае, если из-за специфики верстки вашего\n             сайта pop-up обрезается соседними элементами страницы"}},[o("el-select",{attrs:{"popper-append-to-body":!1},model:{value:e.options.popupPosition,callback:function(t){e.$set(e.options,"popupPosition",t)},expression:"options.popupPosition"}},e._l(["inner","outer"],(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"Позиция кнопки 'Скопировать ссылку'. Кнопка Скопировать ссылку\n             может отображаться, если используется параметр limit"}},[o("el-select",{attrs:{"popper-append-to-body":!1},model:{value:e.options.copy,callback:function(t){e.$set(e.options,"copy",t)},expression:"options.copy"}},e._l(["first","last","hidden"],(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"Язык блока. Локализуются подписи кнопок соцсетей и кнопка Скопировать ссылку"}},[o("el-select",{attrs:{"popper-append-to-body":!1},model:{value:e.options.lang,callback:function(t){e.$set(e.options,"lang",t)},expression:"options.lang"}},e._l(["az","be","en","hy","ka","kk","ro","ru","tr","tt","uk"],(function(e){return o("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"Заголовок, которым нужно поделиться",clearable:""}},[o("el-input",{attrs:{clearable:""},model:{value:e.options.title,callback:function(t){e.$set(e.options,"title",t)},expression:"options.title"}})],1),o("el-form-item",{attrs:{label:"Текст, которым нужно поделиться"}},[o("el-input",{attrs:{clearable:""},model:{value:e.options.description,callback:function(t){e.$set(e.options,"description",t)},expression:"options.description"}})],1),o("el-form-item",{attrs:{label:"Ссылка, которой нужно поделиться",clearable:""}},[o("el-input",{attrs:{clearable:""},model:{value:e.options.url,callback:function(t){e.$set(e.options,"url",t)},expression:"options.url"}})],1),o("el-form-item",{attrs:{label:"Хэштеги. Актуальны и работают только для Твиттера",clearable:""}},[o("el-input",{attrs:{clearable:""},model:{value:e.options.hashtags,callback:function(t){e.$set(e.options,"hashtags",t)},expression:"options.hashtags"}})],1),o("el-form-item",{attrs:{label:"Токен для снятия ограничения запросов на получение счетчика. Актуален и работает только для Facebook",clearable:""}},[o("el-input",{attrs:{clearable:""},model:{value:e.options.accessToken,callback:function(t){e.$set(e.options,"accessToken",t)},expression:"options.accessToken"}})],1)],1)]},proxy:!0}])},[o("vue-yandex-share",e._b({},"vue-yandex-share",e.options,!1))],1)],1)},d=[],b=o("9ab4"),f=o("60a3"),v=o("ad33"),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"vue-yandex-share"})},y=[],h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.src="//yastatic.net/share2/share.js",t.widget=void 0,t}return Object(b["b"])(t,e),t.prototype.onPropChanged=function(){this.loadAPIScript(this.$el)},t.prototype.initialize=function(e){var t,o,n,i=this;this.widget=null===(n=null===(t=window.Ya)||void 0===t?void 0:(o=t).share2)||void 0===n?void 0:n.call(o,e,{content:{url:this.url||window.location.href,title:this.title||document.title,description:this.description,image:this.image},contentByService:this.contentByService,theme:{bare:this.bare,copy:this.copy,counter:this.counter,direction:this.direction,lang:this.lang,limit:this.limit,popupDirection:this.popupDirection,popupPosition:this.popupPosition,services:this.services.join(","),size:this.size},hooks:{onready:function(){i.$emit("ready")},onshare:function(e){i.$emit("share",e)}}})},t.prototype.pollingScriptLoad=function(e){var t=this,o=setInterval((function(){window.Ya&&(t.initialize(e),clearInterval(o))}),300);setTimeout((function(){clearInterval(o)}),1e4)},t.prototype.loadAPIScript=function(e){var t,o,n,i=this;if(null===(n=null===(t=this.widget)||void 0===t?void 0:(o=t).destroy)||void 0===n||n.call(o),document.querySelectorAll("[src*='"+this.src+"']").length)this.pollingScriptLoad(e);else{var r=document.createElement("script");r.setAttribute("src",this.src),r.setAttribute("async","true"),r.setAttribute("defer","true"),document.body.appendChild(r),r.onload=function(){i.$emit("load"),i.initialize(e)},r.onerror=function(e){i.$emit("error",e)}}},t.prototype.mounted=function(){this.loadAPIScript(this.$el)},Object(b["a"])([Object(f["b"])({type:String})],t.prototype,"accessToken",void 0),Object(b["a"])([Object(f["b"])({type:Boolean,default:!1})],t.prototype,"bare",void 0),Object(b["a"])([Object(f["b"])({type:Boolean,default:!1})],t.prototype,"counter",void 0),Object(b["a"])([Object(f["b"])({type:String,default:"last",validator:function(e){return["first","last","hidden"].includes(e)}})],t.prototype,"copy",void 0),Object(b["a"])([Object(f["b"])({type:String})],t.prototype,"description",void 0),Object(b["a"])([Object(f["b"])({type:String,default:"horizontal",validator:function(e){return["horizontal","vertical"].includes(e)}})],t.prototype,"direction",void 0),Object(b["a"])([Object(f["b"])({type:String})],t.prototype,"hashtags",void 0),Object(b["a"])([Object(f["b"])({type:String})],t.prototype,"image",void 0),Object(b["a"])([Object(f["b"])({type:String,default:"ru",validator:function(e){return["az","be","en","hy","ka","kk","ro","ru","tr","tt","uk"].includes(e)}})],t.prototype,"lang",void 0),Object(b["a"])([Object(f["b"])({type:Number})],t.prototype,"limit",void 0),Object(b["a"])([Object(f["b"])({type:String,default:"bottom",validator:function(e){return["bottom","top"].includes(e)}})],t.prototype,"popupDirection",void 0),Object(b["a"])([Object(f["b"])({type:String,default:"inner",validator:function(e){return["inner","outer"].includes(e)}})],t.prototype,"popupPosition",void 0),Object(b["a"])([Object(f["b"])({type:String,default:"m",validator:function(e){return["m","s"].includes(e)}})],t.prototype,"size",void 0),Object(b["a"])([Object(f["b"])({type:String})],t.prototype,"title",void 0),Object(b["a"])([Object(f["b"])({type:String})],t.prototype,"url",void 0),Object(b["a"])([Object(f["b"])({type:Array,default:function(){return["blogger","delicious","digg","evernote","facebook","gplus","linkedin","lj","moimir","odnoklassniki","pinterest","pocket","qzone","reddit","renren","sinaWeibo","skype","surfingbird","telegram","tencentWeibo","tumblr","twitter","viber","vkontakte","whatsapp"]}})],t.prototype,"services",void 0),Object(b["a"])([Object(f["b"])({type:Object,default:function(){return{}}})],t.prototype,"contentByService",void 0),Object(b["a"])([Object(f["d"])("$props",{deep:!0})],t.prototype,"onPropChanged",null),t=Object(b["a"])([Object(f["a"])({})],t),t}(f["c"]),g=h,k=g,j=(o("51a6"),o("2877")),O=Object(j["a"])(k,m,y,!1,null,"6002b917",null),w=O.exports,x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"wrapper-demo"},[o("aside",{staticClass:"wrapper-demo__widget-config"},[o("el-divider",{attrs:{"content-position":"left"}},[o("i",{staticClass:"el-icon-s-operation"}),e._v(" Параметры ")]),e._t("config")],2),o("article",{staticClass:"wrapper-demo__widget-wrapper"},[e._t("default")],2)])},_=[],S=(o("558c"),o("4ce3"),{}),$=Object(j["a"])(S,x,_,!1,null,"1e690bf4",null),z=$.exports,P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.options={accessToken:null,bare:!1,counter:!1,copy:"last",description:null,direction:"horizontal",hashtags:null,image:null,lang:"ru",limit:24,popupDirection:"bottom",popupPosition:"inner",size:"m",title:null,url:null,services:["blogger","delicious","digg","evernote","facebook","gplus","linkedin","lj","moimir","odnoklassniki","pinterest","pocket","qzone","reddit","renren","sinaWeibo","skype","surfingbird","telegram","tencentWeibo","tumblr","twitter","viber","vkontakte","whatsapp"]},t}return Object(b["b"])(t,e),t.prototype.mounted=function(){console.log(Object({NODE_ENV:"production",BASE_URL:"/vue-yandex-share/"}).npm_package_version)},t=Object(b["a"])([Object(f["a"])({components:{VueYandexShare:w,VueGithubCorners:v["VueGithubCorners"],WrapperDemo:z}})],t),t}(f["c"]),C=P,A=C,T=(o("3a8a"),o("e990"),o("ba10"),o("3cc5"),Object(j["a"])(A,u,d,!1,null,"7f1402aa",null)),D=T.exports;a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(D)}}).$mount("#app")},e990:function(e,t,o){"use strict";var n=o("f978"),i=o.n(n);i.a},f632:function(e,t,o){},f978:function(e,t,o){}});
//# sourceMappingURL=app.1e9d78a5.js.map