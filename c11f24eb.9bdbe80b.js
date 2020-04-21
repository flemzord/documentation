(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(9),o=(n(0),n(247)),a={last_modified_on:"2020-04-21",title:"IDE Plugins",description:"High-level description of the Qovery observability data collector and router."},c={id:"using-qovery/integration/ide-plugins",title:"IDE Plugins",description:"High-level description of the Qovery observability data collector and router.",source:"@site/docs/using-qovery/integration/ide-plugins.md",permalink:"/docs/using-qovery/integration/ide-plugins",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/integration/ide-plugins.md",sidebar:"docs",previous:{title:"Integration",permalink:"/docs/using-qovery/integration"},next:{title:"Security and Compliance",permalink:"/docs/security-and-compliance"}},l=[{value:"IntelliJ",id:"intellij",children:[]},{value:"VSCode",id:"vscode",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Writing Qovery configuration is simple. If you like using IDE plugins to improve your workflows, you can be assisted by our plugins to avoid typo mistakes, get auto-completion and write it even faster."),Object(o.b)("h2",{id:"intellij"},"IntelliJ"),Object(o.b)("p",null,"You can easily install the Qovery Intellij plugin through the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://plugins.jetbrains.com/plugin/14032-qovery"}),"Marketplace")," or directly from the IDE (",Object(o.b)("inlineCode",{parentName:"p"},"File")," -> ",Object(o.b)("inlineCode",{parentName:"p"},"Settings")," -> ",Object(o.b)("inlineCode",{parentName:"p"},"Plugins")," -> search ",Object(o.b)("inlineCode",{parentName:"p"},"Qovery"),")."),Object(o.b)("p",null,"Here's a quick demo to show you how it works:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/plugin-intellij.gif",alt:"Qovery InteliJ Plugin"})),Object(o.b)("h2",{id:"vscode"},"VSCode"),Object(o.b)("p",null,"VisualStudio Code has our module available on the Marketplace."),Object(o.b)("p",null,"Demo:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/vscode-module.gif",alt:"Qovery VSCode Plugin"})))}p.isMDXComponent=!0},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,g=s["".concat(a,".").concat(b)]||s[b]||d[b]||o;return n?i.a.createElement(g,c({ref:t},u,{components:n})):i.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);