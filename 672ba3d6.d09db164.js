/*! For license information please see 672ba3d6.d09db164.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{327:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(355),i=a(352),c=(a(353),a(354),a(328)),l=a.n(c),s=(a(60),a(19),a(488)),m=a.n(s),u=a(492),d=function(e){return new Promise((function(t,a){return m()(e,{param:"c",timeout:3500},(function(e,n){e&&a(e),n&&t(n)}))}))},f=function(e){var t="";for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n="group["===a.substring(0,6)?a:a.toUpperCase();t=t.concat("&"+n+"="+e[a])}return t},h=function(e,t,a){var n=Object(u.validate)(e),r=encodeURIComponent(e);if(!n)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var o="https://qovery.us4.list-manage.com/subscribe/post-json?u=3c76e7a2087d5bc4020348c46&amp;id=63bd993879";arguments.length<3&&"string"==typeof t?o=t:"string"==typeof a&&(o=a);var i="&EMAIL="+r+f(t),c=""+o+i;return d(c)},p=(a(216),function(e){var t,a=e.block,o=e.buttonClass,i=e.center,c=e.description,s=e.size,m=e.width,u=Object(n.useState)(""),d=u[0],f=u[1],p=Object(n.useState)(!1),g=p[0],v=p[1],b=Object(n.useState)(!1),E=b[0],y=b[1],w=Object(n.useState)("Could not subscribe :("),N=w[0],k=w[1];return r.a.createElement("div",{className:l()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":i},t["mailing-list--"+s]=s,t))},!1!==c&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),!g&&r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),h(d).then((function(e){"success"===e.result?(v(!0),E&&y(!1)):(y(!0),e.msg.includes(d+" is already subscribed")?k("This email is already subscribed to the newsletter"):k("Could not subscribe :("))})).catch((function(e){y(!0)}))}(e)},className:l()("mailing-list--form")},r.a.createElement("input",{onChange:function(e){return f(e.target.value)},className:l()("input","input--"+s),name:"email",placeholder:"you@email.com",type:"email",style:{width:m}}),r.a.createElement("button",{className:l()("button","button--"+(o||"primary"),"button--"+s),type:"submit"},"Subscribe")),E&&r.a.createElement("span",{className:"badge badge--secondary"},N),r.a.createElement("div",{style:{textAlign:"center"}},g&&r.a.createElement("span",{className:"badge badge--primary"},"Subscribed!")))}),g=a(337),v=Object(o.a)("h2");t.default=function(){var e=Object(g.a)().siteConfig;return(void 0===e?{}:e).customFields.metadata.team,r.a.createElement(i.a,{title:"Community",description:"Join the Qovery community. Connect with the core Qovery team and other Qovery users."},r.a.createElement("header",{className:"hero"},r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("h1",null,"Qovery Community"),r.a.createElement(p,{buttonClass:"highlight",center:!0,size:"lg"}))),r.a.createElement("main",null,r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement(v,{id:"connect"},"Connect"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://discord.qovery.com",target:"_blank",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-message-circle"})),r.a.createElement("div",{className:"panel--title"},"Chat"),r.a.createElement("div",{className:"panel--description"},"Ask questions and get help"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://twitter.com/Qovery_",target:"_blank",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-twitter",title:"Twitter"})),r.a.createElement("div",{className:"panel--title"},"@Qovery"),r.a.createElement("div",{className:"panel--description"},"Follow us in real-time"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://github.com/qovery",target:"_blank",className:"panel panel--link text--center"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-github"})),r.a.createElement("div",{className:"panel--title"},"Github qovery"),r.a.createElement("div",{className:"panel--description"},"Issues, code, and development"))))))))}},328:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},352:function(e,t,a){"use strict";a(363);var n=a(0),r=a.n(n),o=a(364),i=a(351),c=a(1),l=(a(353),a(354),a(365),a(330)),s=a(366),m=a(349),u=a.n(m),d=a(367),f=a.n(d),h=a(337),p=a(328),g=a.n(p),v=a(134),b=a.n(v),E=function(){return r.a.createElement("span",{className:g()(b.a.toggle,b.a.moon)})},y=function(){return r.a.createElement("span",{className:g()(b.a.toggle,b.a.sun)})},w=function(e){var t=Object(h.a)().isClient;return r.a.createElement(f.a,Object(c.a)({disabled:!t,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(y,null)}},e))};function N(){var e=Object(h.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_post,a=Date.parse(t.date),n=new Date,r=Math.abs(n-a),o=Math.ceil(r/864e5),i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),o<30&&(!i||i<a)?t:null}function k(){var e=Object(h.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_release,a=Date.parse(t.date),n=new Date,r=Math.abs(n-a),o=Math.ceil(r/864e5),i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0"))),o<30&&(!i||i<a)?t:null}var _=a(344),O=a(376),j=a(360),C=a(361),T=a(350),x=a(135),A=a.n(x);function S(e){var t=e.href,a=e.hideIcon,n=e.label,o=e.onClick,i=(e.position,e.right),s=e.to,m=function(e,t){var a={label:e};switch(e.toLowerCase()){case"blog":return N()&&(a.badge="new",a.badgeStyle="primary"),a;case"chat":return a.hideText=1==t,a.icon="message-circle",a;case"community":return a.hideText=1==t,a.icon="users",a;case"download":var n=k();return a.hideText=1==t,a.icon="download",n&&(a.badge="new",a.badgeStyle="primary"),a;case"github":return a.badge="",a.hideText=!0,a.icon="github",a;default:return a}}(n,i)||{},u=Object(_.a)(s),d="undefined"!=typeof window&&(window.location.pathname.includes("/tutorial")||window.location.pathname.includes("/engineering"))&&"/guides/"===u?"navbar__link":"navbar__link--active";return r.a.createElement(l.a,Object(c.a)({className:g()("navbar__item navbar__link",m.className),title:m.hideText?n:null,onClick:o},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:d,to:u}),!a&&m.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+m.icon})," ",m.iconLabel),!m.hideText&&m.label,m.badge&&r.a.createElement("span",{className:g()("badge","badge--"+(m.badgeStyle||"secondary"))},m.badge))}var L=function(){var e,t=Object(h.a)(),a=t.siteConfig.themeConfig,o=a.navbar,i=(o=void 0===o?{}:o).title,m=o.links,d=void 0===m?[]:m,f=o.hideOnScroll,p=void 0!==f&&f,v=a.disableDarkMode,b=void 0!==v&&v,E=(t.isClient,Object(n.useState)(!1)),y=E[0],N=E[1],k=Object(n.useState)(!1),_=k[0],x=k[1],L=Object(T.a)(),I=L.isDarkTheme,M=L.setLightTheme,D=L.setDarkTheme,q=Object(O.a)(p),z=q.navbarRef,Q=q.isNavbarVisible,F=Object(C.a)(),Z=F.logoLink,R=F.logoLinkProps,$=F.logoImageUrl,B=F.logoAlt;Object(j.a)(y);var J=Object(n.useCallback)((function(){N(!0)}),[N]),P=Object(n.useCallback)((function(){N(!1)}),[N]),U=Object(n.useCallback)((function(e){return e.target.checked?D():M()}),[M,D]);return r.a.createElement("nav",{ref:z,className:g()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":y},e[A.a.navbarHideable]=p,e[A.a.navbarHidden]=!Q,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:J,onKeyDown:J},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(l.a,Object(c.a)({className:"navbar__brand",to:Z},R),null!=$&&r.a.createElement(u.a,{className:"navbar__logo",src:$,alt:B}),null!=i&&r.a.createElement("strong",{className:_?A.a.hideLogoText:""},i)),d.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(S,Object(c.a)({},e,{left:!0,key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},d.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(S,Object(c.a)({},e,{right:!0,key:t}))})),!b&&r.a.createElement(w,{className:A.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:I,onChange:U}),r.a.createElement(s.a,{handleSearchBarToggle:x,isSearchBarExpanded:_}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:P}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(l.a,Object(c.a)({className:"navbar__brand",onClick:P,to:Z},R),null!=$&&r.a.createElement(u.a,{className:"navbar__logo",src:$,alt:B}),null!=i&&r.a.createElement("strong",null,i)),!b&&y&&r.a.createElement(w,{"aria-label":"Dark mode toggle in sidebar",checked:I,onChange:U})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(S,Object(c.a)({className:"menu__link"},e,{hideIcon:!0,onClick:P})))})))))))},I=a(9),M=a(136),D=a.n(M);function q(e){var t=e.to,a=e.href,n=e.label,o=Object(I.a)(e,["to","href","label"]),i=Object(_.a)(t);return r.a.createElement(l.a,Object(c.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:i},o),n)}var z=function(e){var t=e.url,a=e.alt;return r.a.createElement(u.a,{className:"footer__logo",alt:a,src:t})};var Q=function(){var e=Object(h.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=Object(T.a)().isDarkTheme,o=a||{},i=o.copyright,c=o.links,l=void 0===c?[]:c,s=o.logo,m=void 0===s?{}:s,d=Object(_.a)(m.src);if(!a)return null;var f="/img/logo-light.svg";return n&&(f="/img/logo-dark.svg"),r.a.createElement("footer",{className:g()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(u.a,{className:"navbar__logo",src:f,alt:"Qovery",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement("p",null,"Qovery combines the power of Kubernetes, the reliability of AWS, and the simplicity of Heroku to deploy your apps.")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/qovery",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"Qovery's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://www.linkedin.com/company/qovery/",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"Qovery's Linkedin"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://twitter.com/qovery_",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"Qovery's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://discord.qovery.com",target:"_blank"},r.a.createElement("i",{className:"feather icon-message-circle",alt:"Qovery's Discord"})))),l.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(q,e))}))):null)}))),(m||i)&&r.a.createElement("div",{className:"text--center"},m&&m.src&&r.a.createElement("div",{className:"margin-bottom--sm"},m.href?r.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:D.a.footerLogoLink},r.a.createElement(z,{alt:m.alt,url:d})):r.a.createElement(z,{alt:m.alt,url:d})),r.a.createElement("small",null,i),r.a.createElement("br",null))))},F=a(374),Z=a(375),R=a(3);a(137);t.a=function(e){var t=Object(h.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,c=(a.tagline,a.title),l=a.themeConfig.image,s=a.url,m=e.children,u=e.title,d=e.noFooter,f=e.description,p=e.image,g=e.keywords,v=(e.permalink,e.version),b=u?u+" | "+c:c,E=p||l,y=s+Object(_.a)(E),w=Object(_.a)(n),N=Object(R.h)(),k=N?"https://docs.qovery.com"+(N.pathname.endsWith("/")?N.pathname:N.pathname+"/"):null;return r.a.createElement(Z.a,null,r.a.createElement(F.a,null,r.a.createElement(i.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),b&&r.a.createElement("title",null,b),b&&r.a.createElement("meta",{property:"og:title",content:b}),n&&r.a.createElement("link",{rel:"shortcut icon",href:w}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),v&&r.a.createElement("meta",{name:"docsearch:version",content:v}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:y}),E&&r.a.createElement("meta",{property:"twitter:image",content:y}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+b}),k&&r.a.createElement("meta",{property:"og:url",content:k}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),k&&r.a.createElement("link",{rel:"canonical",href:k})),r.a.createElement(o.a,null),r.a.createElement(L,null),r.a.createElement("div",{className:"main-wrapper"},m),!d&&r.a.createElement(Q,null)))}},355:function(e,t,a){"use strict";var n=a(9),r=a(0),o=a.n(r),i=a(328),c=a.n(i),l=a(337),s=(a(138),a(139)),m=a.n(s);t.a=function(e){return function(t){var a,r=t.id,i=Object(n.a)(t,["id"]),s=Object(l.a)().siteConfig,u=(s=void 0===s?{}:s).themeConfig,d=(u=void 0===u?{}:u).navbar,f=(d=void 0===d?{}:d).hideOnScroll,h=void 0!==f&&f;return r?o.a.createElement(e,i,o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:c()("anchor",(a={},a[m.a.enhancedAnchor]=!h,a)),id:r}),o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#"),i.children):o.a.createElement(e,i)}}},362:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},388:function(e,t){var a,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(a===setTimeout)return setTimeout(e,0);if((a===o||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:o}catch(e){a=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l,s=[],m=!1,u=-1;function d(){m&&l&&(m=!1,l.length?s=l.concat(s):u=-1,s.length&&f())}function f(){if(!m){var e=c(d);m=!0;for(var t=s.length;t;){for(l=s,s=[];++u<t;)l&&l[u].run();u=-1,t=s.length}l=null,m=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];s.push(new h(e,t)),1!==s.length||m||c(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},488:function(e,t,a){var n=a(489)("jsonp");e.exports=function(e,t,a){"function"==typeof t&&(a=t,t={});t||(t={});var i,c,l=t.prefix||"__jp",s=t.name||l+r++,m=t.param||"callback",u=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;u&&(c=setTimeout((function(){h(),a&&a(new Error("Timeout"))}),u));function h(){i.parentNode&&i.parentNode.removeChild(i),window[s]=o,c&&clearTimeout(c)}return window[s]=function(e){n("jsonp got",e),h(),a&&a(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+m+"="+d(s)).replace("?&","?"),n('jsonp req "%s"',e),(i=document.createElement("script")).src=e,f.parentNode.insertBefore(i,f),function(){window[s]&&h()}};var r=0;function o(){}},489:function(e,t,a){(function(n){function r(){var e;try{e=t.storage.debug}catch(a){}return!e&&void 0!==n&&"env"in n&&(e=n.env.DEBUG),e}(t=e.exports=a(490)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var a=this.useColors;if(e[0]=(a?"%c":"")+this.namespace+(a?" %c":" ")+e[0]+(a?"%c ":" ")+"+"+t.humanize(this.diff),!a)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(o=r))})),e.splice(o,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(a){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())}).call(this,a(388))},490:function(e,t,a){var n;function r(e){function a(){if(a.enabled){var e=a,r=+new Date,o=r-(n||r);e.diff=o,e.prev=n,e.curr=r,n=r;for(var i=new Array(arguments.length),c=0;c<i.length;c++)i[c]=arguments[c];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(a,n){if("%%"===a)return a;l++;var r=t.formatters[n];if("function"==typeof r){var o=i[l];a=r.call(e,o),i.splice(l,1),l--}return a})),t.formatArgs.call(e,i);var s=a.log||t.log||console.log.bind(console);s.apply(e,i)}}return a.namespace=e,a.enabled=t.enabled(e),a.useColors=t.useColors(),a.color=function(e){var a,n=0;for(a in e)n=(n<<5)-n+e.charCodeAt(a),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(a),a}(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var a=("string"==typeof e?e:"").split(/[\s,]+/),n=a.length,r=0;r<n;r++)a[r]&&("-"===(e=a[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var a,n;for(a=0,n=t.skips.length;a<n;a++)if(t.skips[a].test(e))return!1;for(a=0,n=t.names.length;a<n;a++)if(t.names[a].test(e))return!0;return!1},t.humanize=a(491),t.names=[],t.skips=[],t.formatters={}},491:function(e,t){var a=1e3,n=6e4,r=60*n,o=24*r;function i(e,t,a){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+a:Math.ceil(e/t)+" "+a+"s"}e.exports=function(e,t){t=t||{};var c,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"days":case"day":case"d":return i*o;case"hours":case"hour":case"hrs":case"hr":case"h":return i*r;case"minutes":case"minute":case"mins":case"min":case"m":return i*n;case"seconds":case"second":case"secs":case"sec":case"s":return i*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===l&&!1===isNaN(e))return t.long?i(c=e,o,"day")||i(c,r,"hour")||i(c,n,"minute")||i(c,a,"second")||c+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=a)return Math.round(e/a)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},492:function(e,t,a){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}}}]);