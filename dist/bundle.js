!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Embed=t():e.Embed=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=14)}([function(e,t,r){var n=r(5),i=r(6),o=r(7),a=r(9);e.exports=function(e,t){return n(e)||i(e,t)||o(e,t)||a()}},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t){function r(e,t,r){var n,i,o,a,c;function l(){var s=Date.now()-a;s<t&&s>=0?n=setTimeout(l,t-s):(n=null,r||(c=e.apply(o,i),o=i=null))}null==t&&(t=100);var s=function(){o=this,i=arguments,a=Date.now();var s=r&&!n;return n||(n=setTimeout(l,t)),s&&(c=e.apply(o,i),o=i=null),c};return s.clear=function(){n&&(clearTimeout(n),n=null)},s.flush=function(){n&&(c=e.apply(o,i),o=i=null,clearTimeout(n),n=null)},s}r.debounce=r,e.exports=r},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(i)throw o}}return r}}},function(e,t,r){var n=r(8);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,r){var n=r(11),i=r(12);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};n(i,o);e.exports=i.locals||{}},function(e,t,r){"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function c(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},n=[],i=0;i<e.length;i++){var o=e[i],l=t.base?o[0]+t.base:o[0],s=r[l]||0,d="".concat(l," ").concat(s);r[l]=s+1;var u=c(d),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(h)):a.push({identifier:d,updater:b(h,t),references:1}),n.push(d)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,r,n){var i=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t,r){var n=r.css,i=r.media,o=r.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,p=0;function b(e,t){var r,n,i;if(t.singleton){var o=p++;r=m||(m=s(t)),n=h.bind(null,r,o,!1),i=h.bind(null,r,o,!0)}else r=s(t),n=f.bind(null,r,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var i=c(r[n]);a[i].references--}for(var o=l(e,t),s=0;s<r.length;s++){var d=c(r[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=o}}}},function(e,t,r){(t=r(13)(!1)).push([e.i,".embed-tool--loading .embed-tool__caption {\r\n      display: none;\r\n    }\r\n\r\n    .embed-tool--loading .embed-tool__preloader {\r\n      display: block;\r\n    }\r\n\r\n    .embed-tool--loading .embed-tool__content {\r\n      display: none;\r\n    }\r\n  .embed-tool__preloader {\r\n    display: none;\r\n    position: relative;\r\n    height: 200px;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    border: 1px solid #e6e9eb;\r\n  }\r\n  .embed-tool__preloader::before {\r\n      content: '';\r\n      position: absolute;\r\n      z-index: 3;\r\n      left: 50%;\r\n      top: 50%;\r\n      width: 30px;\r\n      height: 30px;\r\n      margin-top: -25px;\r\n      margin-left: -15px;\r\n      border-radius: 50%;\r\n      border: 2px solid #cdd1e0;\r\n      border-top-color: #388ae5;\r\n      box-sizing: border-box;\r\n      animation: embed-preloader-spin 2s infinite linear;\r\n    }\r\n  .embed-tool__url {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    max-width: 250px;\r\n    color: #7b7e89;\r\n    font-size: 11px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n  .embed-tool__content {\r\n    width: 100%;\r\n  }\r\n  .embed-tool__caption {\r\n    margin-top: 7px;\r\n  }\r\n  .embed-tool__caption[contentEditable=true][data-placeholder]::before{\r\n      position: absolute;\r\n      content: attr(data-placeholder);\r\n      color: #707684;\r\n      font-weight: normal;\r\n      opacity: 0;\r\n    }\r\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty::before {\r\n         opacity: 1;\r\n      }\r\n  .embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus::before {\r\n        opacity: 0;\r\n      }\r\n\r\n@keyframes embed-preloader-spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n",""]),e.exports=t},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var i=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),o=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(o).concat([i]).join("\n")}var a,c,l;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&i[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var n=r(1),i=r.n(n),o=r(0),a=r.n(o),c=r(2),l=r.n(c),s=r(3),d=r.n(s),u={vimeo:{regex:/(?:http[s]?:\/\/)?(?:www.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,embedUrl:"https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",html:'<iframe style="width:100%;" height="320" frameborder="0"></iframe>',height:320,width:580},youtube:{regex:/(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,embedUrl:"https://www.youtube.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580,id:function(e){var t=a()(e,2),r=t[0],n=t[1];if(!n&&r)return r;var i={start:"start",end:"end",t:"start",time_continue:"start",list:"list"};return n=n.slice(1).split("&").map((function(e){var t=e.split("="),n=a()(t,2),o=n[0],c=n[1];if(r||"v"!==o){if(i[o])return"".concat(i[o],"=").concat(c)}else r=c})).filter((function(e){return!!e})),r+"?"+n.join("&")}},coub:{regex:/https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,embedUrl:"https://coub.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},vine:{regex:/https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,embedUrl:"https://vine.co/v/<%= remote_id %>/embed/simple/",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},imgur:{regex:/https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,embedUrl:"http://imgur.com/<%= remote_id %>/embed",html:'<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',height:500,width:540},gfycat:{regex:/https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,embedUrl:"https://gfycat.com/ifr/<%= remote_id %>",html:"<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",height:436,width:580},"twitch-channel":{regex:/https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,embedUrl:"https://player.twitch.tv/?channel=<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"twitch-video":{regex:/https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,embedUrl:"https://player.twitch.tv/?video=v<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"yandex-music-album":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,embedUrl:"https://music.yandex.ru/iframe/#album/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',height:400,width:540},"yandex-music-track":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#track/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',height:100,width:540,id:function(e){return e.join("/")}},"yandex-music-playlist":{regex:/https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',height:400,width:540,id:function(e){return e.join("/")}},codepen:{regex:/https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,embedUrl:"https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",html:"<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",height:300,width:600,id:function(e){return e.join("/embed/")}},instagram:{regex:/https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?/,embedUrl:"https://www.instagram.com/p/<%= remote_id %>/embed",html:'<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:505,width:400},twitter:{regex:/^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)(?:\/.*)?$/,embedUrl:"https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>",html:'<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:300,width:600,id:function(e){return e.join("/status/")}}},h=(r(10),r(4)),f=function(){function e(t){var r=t.data,n=t.api;l()(this,e),this.api=n,this._data={},this.element=null,this.data=r}return d()(e,[{key:"render",value:function(){var t=this;if(!this.data.service){var r=document.createElement("div");return this.element=r,r}var n=e.services[this.data.service],i=n.html,o=n.params,a=document.createElement("div"),c=document.createElement("div"),l=document.createElement("template"),s=this.createPreloader(),d="";a.classList.add(this.CSS.baseClass,this.CSS.container,this.CSS.containerLoading),c.classList.add(this.CSS.input,this.CSS.caption),a.appendChild(s),c.contentEditable=!0,c.dataset.placeholder="Enter a caption",c.innerHTML=this.data.caption||"",o instanceof Object&&(Object.keys(o).map((function(e,t){var r=e+"="+o[e];""!==d&&(d+="&"),d+=r})),d=this.data.embed.match(/\?./)?"&"+d:"?"+d),l.innerHTML=i,l.content.firstChild.setAttribute("src",this.data.embed+d),l.content.firstChild.classList.add(this.CSS.content);var u=this.embedIsReady(a);return a.appendChild(l.content.firstChild),a.appendChild(c),u.then((function(){a.classList.remove(t.CSS.containerLoading)})),this.element=a,a}},{key:"createPreloader",value:function(){var e=document.createElement("preloader"),t=document.createElement("div");return t.textContent=this.data.source,e.classList.add(this.CSS.preloader),t.classList.add(this.CSS.url),e.appendChild(t),e}},{key:"save",value:function(){return this.data}},{key:"onPaste",value:function(t){var r=t.detail,n=r.key,i=r.data,o=e.services[n],a=o.regex,c=o.embedUrl,l=o.width,s=o.height,d=o.id,u=void 0===d?function(e){return e.shift()}:d,h=a.exec(i).slice(1),f=c.replace(/<\%\= remote\_id \%\>/g,u(h));this.data={service:n,source:i,embed:f,width:l,height:s}}},{key:"embedIsReady",value:function(e){var t=null;return new Promise((function(r,n){(t=new MutationObserver(Object(h.debounce)(r,450))).observe(e,{childList:!0,subtree:!0})})).then((function(){t.disconnect()}))}},{key:"data",set:function(e){if(!(e instanceof Object))throw Error("Embed Tool data should be object");var t=e.service,r=e.source,n=e.embed,i=e.width,o=e.height,a=e.caption,c=void 0===a?"":a;this._data={service:t||this.data.service,source:r||this.data.source,embed:n||this.data.embed,width:i||this.data.width,height:o||this.data.height,caption:c||this.data.caption||""};var l=this.element;l&&l.parentNode.replaceChild(this.render(),l)},get:function(){if(this.element){var e=this.element.querySelector(".".concat(this.api.styles.input));this._data.caption=e?e.innerHTML:""}return this._data}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,input:this.api.styles.input,container:"embed-tool",containerLoading:"embed-tool--loading",preloader:"embed-tool__preloader",caption:"embed-tool__caption",url:"embed-tool__url",content:"embed-tool__content"}}}],[{key:"prepare",value:function(t){var r=t.config,n=(void 0===r?{}:r).services,o=void 0===n?{}:n,c=Object.entries(u),l=Object.entries(o).filter((function(e){var t=a()(e,2),r=(t[0],t[1]);return"boolean"==typeof r&&!0===r})).map((function(e){return a()(e,1)[0]})),s=Object.entries(o).filter((function(e){var t=a()(e,2),r=(t[0],t[1]);return"object"===i()(r)})).filter((function(t){var r=a()(t,2),n=(r[0],r[1]);return e.checkServiceConfig(n)})).map((function(e){var t=a()(e,2),r=t[0],n=t[1],i=n.regex,o=n.embedUrl,c=n.html,l=n.height,s=n.width,d=n.id,h=n.params;return[r,{regex:i||u[r].regex,embedUrl:o||u[r].embedUrl,html:c||u[r].html,height:l||u[r].height,width:s||u[r].width,id:d||u[r].id,params:h}]}));l.length&&(c=c.filter((function(e){var t=a()(e,1)[0];return l.includes(t)}))),c=c.concat(s),e.services=c.reduce((function(e,t){var r=a()(t,2),n=r[0],i=r[1];return n in e?(e[n]=Object.assign({},e[n],i),e):(e[n]=i,e)}),{}),e.patterns=c.reduce((function(e,t){var r=a()(t,2),n=r[0],i=r[1];return e[n]=i.regex,e}),{})}},{key:"checkServiceConfig",value:function(e){var t=e.regex,r=e.embedUrl,n=e.html,i=e.height,o=e.width,a=e.id,c=e.params,l=!0;return l=(l=(l=(l=(l=(l=(l=l&&(void 0===t||t instanceof RegExp))&&(void 0===r||"string"==typeof r))&&(void 0===n||"string"==typeof n))&&(void 0===a||a instanceof Function))&&(void 0===i||Number.isFinite(i)))&&(void 0===o||Number.isFinite(o)))&&(void 0===c||c instanceof Object)}},{key:"pasteConfig",get:function(){return{patterns:e.patterns}}}]),e}()}]).default}));