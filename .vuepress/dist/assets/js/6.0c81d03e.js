(window.webpackJsonp=window.webpackJsonp||[]).push([[6],Array(112).concat([function(t,e,n){"use strict";var i=n(4),r=n(33)(3);i(i.P+i.F*!n(23)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";var i=n(5),r=n(15),s=n(129),a=n(130);n(131)("match",1,function(t,e,n,o){return[function(n){var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=o(n,t,this);if(e.done)return e.value;var u=i(t),c=String(this);if(!u.global)return a(u,c);var l=u.unicode;u.lastIndex=0;for(var f,p=[],h=0;null!==(f=a(u,c));){var d=String(f[0]);p[h]=d,""===d&&(u.lastIndex=s(c,r(u.lastIndex),l)),h++}return 0===h?null:p}]})},function(t,e,n){"use strict";var i=n(74)(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},function(t,e,n){"use strict";var i=n(46),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var s=n.call(t,e);if("object"!=typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},function(t,e,n){"use strict";n(141);var i=n(14),r=n(11),s=n(8),a=n(21),o=n(1),u=n(132),c=o("species"),l=!s(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=o(t),h=!s(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=h?!s(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[p](""),!e}):void 0;if(!h||!d||"replace"===t&&!l||"split"===t&&!f){var v=/./[p],g=n(a,p,""[t],function(t,e,n,i,r){return e.exec===u?h&&!r?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),m=g[0],b=g[1];i(String.prototype,t,m),r(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},function(t,e,n){"use strict";var i=n(133),r=RegExp.prototype.exec,s=String.prototype.replace,a=r,o=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=void 0!==/()??/.exec("")[1];(o||u)&&(a=function(t){var e,n,a,c,l=this;return u&&(n=new RegExp("^"+l.source+"$(?!\\s)",i.call(l))),o&&(e=l.lastIndex),a=r.call(l,t),o&&a&&(l.lastIndex=l.global?a.index+a[0].length:e),u&&a&&a.length>1&&s.call(a[0],n,function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)}),a}),t.exports=a},function(t,e,n){"use strict";var i=n(5);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var i=n(5),r=n(16),s=n(15),a=n(32),o=n(129),u=n(130),c=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};n(131)("replace",2,function(t,e,n,v){return[function(i,r){var s=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,s,r):n.call(String(s),i,r)},function(t,e){var r=v(n,t,this,e);if(r.done)return r.value;var f=i(t),p=String(this),h="function"==typeof e;h||(e=String(e));var m=f.global;if(m){var b=f.unicode;f.lastIndex=0}for(var _=[];;){var x=u(f,p);if(null===x)break;if(_.push(x),!m)break;""===String(x[0])&&(f.lastIndex=o(p,s(f.lastIndex),b))}for(var k="",$=0,C=0;C<_.length;C++){x=_[C];for(var y=String(x[0]),S=c(l(a(x.index),p.length),0),w=[],L=1;L<x.length;L++)w.push(d(x[L]));var E=x.groups;if(h){var I=[y].concat(w,S,p);void 0!==E&&I.push(E);var O=String(e.apply(void 0,I))}else O=g(y,p,S,w,E,e);S>=$&&(k+=p.slice($,S)+O,$=S+y.length)}return k+p.slice($)}];function g(t,e,i,s,a,o){var u=i+t.length,c=s.length,l=h;return void 0!==a&&(a=r(a),l=p),n.call(o,l,function(n,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(u);case"<":o=a[r.slice(1,-1)];break;default:var l=+r;if(0===l)return r;if(l>c){var p=f(l/10);return 0===p?r:p<=c?void 0===s[p-1]?r.charAt(1):s[p-1]+r.charAt(1):r}o=s[l-1]}return void 0===o?"":o})}})},,function(t,e,n){var i,r;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(r="function"==typeof(i=function(){var t={version:"0.2.0"},e=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(t,e,n){return t<e?e:t>n?n:t}function i(t){return 100*(-1+t)}t.configure=function(t){var n,i;for(n in t)void 0!==(i=t[n])&&t.hasOwnProperty(n)&&(e[n]=i);return this},t.status=null,t.set=function(a){var o=t.isStarted();a=n(a,e.minimum,1),t.status=1===a?null:a;var u=t.render(!o),c=u.querySelector(e.barSelector),l=e.speed,f=e.easing;return u.offsetWidth,r(function(n){""===e.positionUsing&&(e.positionUsing=t.getPositioningCSS()),s(c,function(t,n,r){var s;return(s="translate3d"===e.positionUsing?{transform:"translate3d("+i(t)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+i(t)+"%,0)"}:{"margin-left":i(t)+"%"}).transition="all "+n+"ms "+r,s}(a,l,f)),1===a?(s(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){s(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){t.remove(),n()},l)},l)):setTimeout(n,l)}),this},t.isStarted=function(){return"number"==typeof t.status},t.start=function(){t.status||t.set(0);var n=function(){setTimeout(function(){t.status&&(t.trickle(),n())},e.trickleSpeed)};return e.trickle&&n(),this},t.done=function(e){return e||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(e){var i=t.status;return i?("number"!=typeof e&&(e=(1-i)*n(Math.random()*i,.1,.95)),i=n(i+e,0,.994),t.set(i)):t.start()},t.trickle=function(){return t.inc(Math.random()*e.trickleRate)},function(){var e=0,n=0;t.promise=function(i){return i&&"resolved"!==i.state()?(0===n&&t.start(),e++,n++,i.always(function(){0==--n?(e=0,t.done()):t.set((e-n)/e)}),this):this}}(),t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");o(document.documentElement,"nprogress-busy");var r=document.createElement("div");r.id="nprogress",r.innerHTML=e.template;var a,u=r.querySelector(e.barSelector),c=n?"-100":i(t.status||0),f=document.querySelector(e.parent);return s(u,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),e.showSpinner||(a=r.querySelector(e.spinnerSelector))&&l(a),f!=document.body&&o(f,"nprogress-custom-parent"),f.appendChild(r),r},t.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(e.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&l(t)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var r=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),s=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=function(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}(n),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var i,r=t.length,s=e.charAt(0).toUpperCase()+e.slice(1);r--;)if((i=t[r]+s)in n)return i;return e}(n))}function i(t,e,i){e=n(e),t.style[e]=i}return function(t,e){var n,r,s=arguments;if(2==s.length)for(n in e)void 0!==(r=e[n])&&e.hasOwnProperty(n)&&i(t,n,r);else i(t,s[1],s[2])}}();function a(t,e){var n="string"==typeof t?t:c(t);return n.indexOf(" "+e+" ")>=0}function o(t,e){var n=c(t),i=n+e;a(n,e)||(t.className=i.substring(1))}function u(t,e){var n,i=c(t);a(t,e)&&(n=i.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function c(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function l(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return t})?i.call(e,n,e,t):i)||(t.exports=r)},function(t,e,n){"use strict";n(138)("link",function(t){return function(e){return t(this,"a","href",e)}})},function(t,e,n){var i=n(4),r=n(8),s=n(21),a=/"/g,o=function(t,e,n,i){var r=String(s(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},function(t,e,n){"use strict";var i=n(114);n.n(i).a},function(t,e,n){"use strict";var i=n(115);n.n(i).a},function(t,e,n){"use strict";var i=n(132);n(4)({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},function(t,e,n){var i=n(4);i(i.S,"Array",{isArray:n(71)})},function(t,e,n){"use strict";var i=n(4),r=n(70)(!1),s=[].indexOf,a=!!s&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(a||!n(23)(s)),"Array",{indexOf:function(t){return a?s.apply(this,arguments)||0:r(this,t,arguments[1])}})},function(t,e,n){"use strict";n(145)("trim",function(t){return function(){return t(this,3)}})},function(t,e,n){var i=n(4),r=n(21),s=n(8),a=n(146),o="["+a+"]",u=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),l=function(t,e,n){var r={},o=s(function(){return!!a[t]()||"​"!="​"[t]()}),u=r[t]=o?e(f):a[t];n&&(r[n]=u),i(i.P+i.F*o,"String",r)},f=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,e,n){"use strict";var i=n(116);n.n(i).a},function(t,e,n){var i=n(2),r=n(75),s=n(6).f,a=n(73).f,o=n(72),u=n(133),c=i.RegExp,l=c,f=c.prototype,p=/a/g,h=/a/g,d=new c(p)!==p;if(n(7)&&(!d||n(8)(function(){return h[n(1)("match")]=!1,c(p)!=p||c(h)==h||"/a/i"!=c(p,"i")}))){c=function(t,e){var n=this instanceof c,i=o(t),s=void 0===e;return!n&&i&&t.constructor===c&&s?t:r(d?new l(i&&!s?t.source:t,e):l((i=t instanceof c)?t.source:t,i&&s?u.call(t):e),n?this:f,c)};for(var v=function(t){t in c||s(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=a(l),m=0;g.length>m;)v(g[m++]);f.constructor=c,c.prototype=f,n(14)(i,"RegExp",c)}n(47)("RegExp")},function(t,e,n){"use strict";var i=n(117);n.n(i).a},function(t,e,n){"use strict";var i=n(118);n.n(i).a},function(t,e,n){"use strict";var i=n(119);n.n(i).a},function(t,e,n){"use strict";var i=n(120);n.n(i).a},function(t,e,n){"use strict";var i=n(121);n.n(i).a},function(t,e,n){"use strict";var i=n(122);n.n(i).a},function(t,e,n){"use strict";var i=n(123);n.n(i).a},function(t,e,n){"use strict";var i=n(124);n.n(i).a},function(t,e,n){"use strict";var i=n(125);n.n(i).a},function(t,e,n){"use strict";var i=n(126);n.n(i).a},,function(t,e,n){"use strict";n.r(e);n(48);var i=n(0),r=n(136),s=n.n(r);n(22),n(45),n(112),n(137);const a=/#.*$/,o=/\.(md|html)$/,u=/\/$/,c=/^(https?:|mailto:|tel:)/;function l(t){return decodeURI(t).replace(a,"").replace(o,"")}function f(t){return c.test(t)}function p(t){if(f(t))return t;const e=t.match(a),n=e?e[0]:"",i=l(t);return u.test(i)?t:i+".html"+n}function h(t,e){const n=t.hash,i=function(t){const e=t.match(a);if(e)return e[0]}(e);return(!i||n===i)&&l(t.path)===l(e)}function d(t,e,n){n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=l(e);return i in t?Object.assign({},t[i],{type:"page",path:p(t[i].path)}):(console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{})}function v(t,e,n,i){const{pages:r,themeConfig:s}=n,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||s.sidebar,u=r.reduce((t,e)=>(t[l(e.regularPath)]=e,t),{});if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===b(t).indexOf(n))return{base:n,config:e[n]};return{}}(e,o);return n?n.map(e=>(function t(e,n,i,r){if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});{r&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const s=e.children||[];return{type:"group",title:e.title,children:s.map(e=>t(e,n,i,!0)),collapsable:!1!==e.collapsable}}})(e,u,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function b(t){return/(\.html|\/)$/.test(t)?t:t+"/"}var _={props:{item:{required:!0}},computed:{link:function(){return p(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:f,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},x=n(20),k=Object(x.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);k.options.__file="NavLink.vue";var $=k.exports,C={components:{NavLink:$},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},y=(n(139),Object(x.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null));y.options.__file="Home.vue";var S=y.exports,w=(n(140),Object(x.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null));w.options.__file="SidebarButton.vue";var L=w.exports,E=(n(128),n(49),n(142),n(44),n(143),n(144),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},r=[],s=0;s<e.length&&!(r.length>=5);s++){var a=e[s];if(this.getPageLocalePath(a)===n&&this.isSearchable(a))if(i(a))r.push(a);else if(a.headers)for(var o=0;o<a.headers.length&&!(r.length>=5);o++){var u=a.headers[o];i(u)&&r.push(Object.assign({},a,{path:a.path+"#"+u.slug,header:u}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),I=(n(147),Object(x.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){t.go(i)},mouseenter:function(e){t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})):t._e()])},[],!1,null,null,null));I.options.__file="SearchBox.vue";var O=I.exports,T=(n(148),n(29)),N=(n(134),n(31),{name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}}),j=(n(149),Object(x.a)(N,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null));j.options.__file="DropdownTransition.vue";var A=j.exports,P={components:{NavLink:$,DropdownTransition:A},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},R=(n(150),Object(x.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})):n("NavLink",{attrs:{item:e}})],1)}))])],1)},[],!1,null,null,null));R.options.__file="DropdownLink.vue";var U={components:{NavLink:$,DropdownLink:R.exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(s){var a,o=e[s],u=r[s]&&r[s].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,s),i.some(function(t){return t.path===a})||(a=s)),{text:u,link:a}})};return[].concat(Object(T.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(m(t),{items:(t.items||[]).map(m)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},M=(n(151),Object(x.a)(U,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null));M.options.__file="NavLinks.vue";var D=M.exports;function W(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var B={components:{SidebarButton:L,NavLinks:D,SearchBox:O,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(W(this.$el,"paddingLeft"))+parseInt(W(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},H=(n(152),Object(x.a)(B,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null));H.options.__file="Navbar.vue";var q=H.exports;n(34);function G(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(T.a)(t.children||[])):i.push(t)});for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var z={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t=this.$page.frontmatter.prev;return!1===t?void 0:t?d(this.$site.pages,t,this.$route.path):function(t,e){return G(t,e,-1)}(this.$page,this.sidebarItems)},next:function(){var t=this.$page.frontmatter.next;return!1===t?void 0:t?d(this.$site.pages,t,this.$route.path):function(t,e){return G(t,e,1)}(this.$page,this.sidebarItems)},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,r=void 0===i?"":i,s=t.docsBranch,a=void 0===s?"master":s,o=t.docsRepo,c=void 0===o?e:o,f=l(this.$page.path);return u.test(f)?f+="README.md":f+=".md",c&&n?this.createEditLink(e,c,r,a,f):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){return/bitbucket.org/.test(t)?(c.test(e)?e:t).replace(u,"")+"/".concat(i)+(n?"/"+n.replace(u,""):"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(c.test(e)?e:"https://github.com/".concat(e)).replace(u,"")+"/edit/".concat(i)+(n?"/"+n.replace(u,""):"")+r}}},F=(n(153),Object(x.a)(z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));F.options.__file="Page.vue";var V=F.exports;function J(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function X(t,e,n,i,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>r?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var a=h(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[J(t,n+"#"+e.slug,e.title,a),X(t,e.children,n,i,r,s+1)])}))}var Y={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,r=n.$site,s=n.$route,o=e.props.item,u=h(s,o.path),c="auto"===o.type?u||o.children.some(function(t){return h(s,o.basePath+"#"+t.slug)}):u,l=J(t,o.path,o.title||o.path,c),f=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:r.themeConfig.sidebarDepth,p=null==f?1:f,d=!!r.themeConfig.displayAllHeaders;return"auto"===o.type?[l,X(t,o.children,o.basePath,s,p)]:(c||d)&&o.headers&&!a.test(o.path)?[l,X(t,g(o.headers),o.path,s,p)]:l}},K=(n(154),Object(x.a)(Y,void 0,void 0,!1,null,null,null));K.options.__file="SidebarLink.vue";var Q=K.exports,Z={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:Q,DropdownTransition:A}},tt=(n(155),Object(x.a)(Z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})):t._e()])],1)},[],!1,null,null,null));tt.options.__file="SidebarGroup.vue";var et={components:{SidebarGroup:tt.exports,SidebarLink:Q,NavLinks:D},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return h(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return h(this.$route,t.regularPath)}}},nt=(n(156),Object(x.a)(et,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)})):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));nt.options.__file="Sidebar.vue";var it={components:{Home:S,Page:V,Sidebar:nt.exports,Navbar:q},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return v(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;s.a.configure({showSpinner:!1}),this.$router.beforeEach(function(t,e,n){t.path===e.path||i.a.component(t.name)||s.a.start(),n()}),this.$router.afterEach(function(){s.a.done(),t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},rt=(n(157),n(158),Object(x.a)(it,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));rt.options.__file="Layout.vue";e.default=rt.exports}])]);