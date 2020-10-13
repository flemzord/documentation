/*! For license information please see b16a9bcd.831901e2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{264:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),c=(a(0),a(331)),o=a(342),i=a(332),l=a(338),b={last_modified_on:"2020-10-13",title:"Amazon Web Services (AWS)",description:"Learn how to configure and plug your Amazon Web Services (AWS) account"},u={id:"using-qovery/configuration/business/cloud-account/amazon-web-services",title:"Amazon Web Services (AWS)",description:"Learn how to configure and plug your Amazon Web Services (AWS) account",source:"@site/docs/using-qovery/configuration/business/cloud-account/amazon-web-services.md",permalink:"/docs/using-qovery/configuration/business/cloud-account/amazon-web-services",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/business/cloud-account/amazon-web-services.md",sidebar:"docs",previous:{title:"Cloud Account",permalink:"/docs/using-qovery/configuration/business/cloud-account"},next:{title:"Azure",permalink:"/docs/using-qovery/configuration/business/cloud-account/azure"}},s=[{value:"Getting started",id:"getting-started",children:[{value:"Connect your AWS account",id:"connect-your-aws-account",children:[]},{value:"Remove your AWS account",id:"remove-your-aws-account",children:[]},{value:"Delete Qovery from your AWS account",id:"delete-qovery-from-your-aws-account",children:[]},{value:"IAM permissions",id:"iam-permissions",children:[]}]},{value:"Regions",id:"regions",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]},{value:"FAQ",id:"faq",children:[{value:"How to choose a region?",id:"how-to-choose-a-region",children:[]},{value:"I don&#39;t find a region that is provided by AWS",id:"i-dont-find-a-region-that-is-provided-by-aws",children:[]},{value:"Migrate between Cloud providers and regions",id:"migrate-between-cloud-providers-and-regions",children:[]}]}],p={rightToc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Qovery lets you quickly deploy applications to your ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com"}),"Amazon Web Services (AWS)")," account. No knowledge is needed, and it takes less than 20 minutes to install Qovery on your AWS account."),Object(c.b)(i.a,{type:"info",mdxType:"Alert"},Object(c.b)("p",null,"Do you want to know more about how Qovery works on your AWS account? ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/useful-links/faq/#how-qovery-works-under-the-hood"}),"Here")," is explained how Qovery works under the hood.")),Object(c.b)("h2",{id:"getting-started"},"Getting started"),Object(c.b)(l.a,{mdxType:"Assumptions"},Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"You have a ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/using-qovery/interface/"}),"Qovery")," account"),Object(c.b)("li",{parentName:"ul"},"You have created an ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/business/organization/"}),"Organization")))),Object(c.b)("h3",{id:"connect-your-aws-account"},"Connect your AWS account"),Object(c.b)("p",null,"To link your AWS account to Qovery you need to provide an AWS ",Object(c.b)("inlineCode",{parentName:"p"},"access key id")," and ",Object(c.b)("inlineCode",{parentName:"p"},"secret access key")," with the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/business/cloud-account/amazon-web-services/"}),"required IAM permissions"),"."),Object(c.b)(i.a,{type:"info",mdxType:"Alert"},Object(c.b)("p",null,"You can link more than one AWS account. Qovery also support multiple Cloud providers within the same Organization. Which means that you can balance your workload on different Cloud providers. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/advanced/using-multiple-cloud-providers/"}),"Read more"),".")),Object(c.b)("h4",{id:"create-your-aws-credentials---access-key-id-and-secret-access-key"},"Create your AWS credentials - ",Object(c.b)("inlineCode",{parentName:"h4"},"access key id")," and ",Object(c.b)("inlineCode",{parentName:"h4"},"secret access key")),Object(c.b)(o.a,{headingDepth:3,mdxType:"Steps"},Object(c.b)("ol",null,Object(c.b)("li",null,Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.aws.amazon.com"}),"Connect to your AWS console"))),Object(c.b)("li",null,Object(c.b)("p",null,"Go to ",Object(c.b)("inlineCode",{parentName:"p"},"My Security Credentials")),Object(c.b)("img",{src:"/img/aws-my-security-credentials.jpg"})),Object(c.b)("li",null,Object(c.b)("p",null,"Create ",Object(c.b)("inlineCode",{parentName:"p"},"Admins")," group ",Object(c.b)("strong",{parentName:"p"},"without any permissions")),Object(c.b)("img",{src:"/img/aws-create-group-1.jpg"}),Object(c.b)("img",{src:"/img/aws-create-group-2.jpg"}),Object(c.b)("img",{src:"/img/aws-create-group-3.jpg"}),Object(c.b)("img",{src:"/img/aws-create-group-4.jpg"})),Object(c.b)("li",null,Object(c.b)("p",null,"Create one IAM user called ",Object(c.b)("inlineCode",{parentName:"p"},"qovery")," with the ",Object(c.b)("a",{href:"/files/qovery-iam-aws.json"},"appropriate permissions")),Object(c.b)("img",{src:"/img/aws-create-user-1.jpg"}),Object(c.b)("img",{src:"/img/aws-create-user-2.jpg"}),Object(c.b)("img",{src:"/img/aws-create-user-3.jpg"}),Object(c.b)("p",null,"Go to the last step and copy your ",Object(c.b)("inlineCode",{parentName:"p"},"access key id")," and ",Object(c.b)("inlineCode",{parentName:"p"},"secret access key"),"."),Object(c.b)("img",{src:"/img/aws-create-user-4.jpg"})))),Object(c.b)("p",null,"Well done!! You now have your AWS ",Object(c.b)("inlineCode",{parentName:"p"},"access key id")," and ",Object(c.b)("inlineCode",{parentName:"p"},"secret access key"),"; It's time to connect Qovery to your AWS account."),Object(c.b)("h4",{id:"use-aws-credentials-with-qovery"},"Use AWS credentials with Qovery"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"this section is under development - ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://discord.qovery.com"}),"join us")," and be part of the first to try it")),Object(c.b)("h3",{id:"remove-your-aws-account"},"Remove your AWS account"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"this section is under development - ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://discord.qovery.com"}),"join us")," and be part of the first to try it")),Object(c.b)("h3",{id:"delete-qovery-from-your-aws-account"},"Delete Qovery from your AWS account"),Object(c.b)("p",null,"To delete Qovery from your AWS account you must be authenticated as the Organization admin. Once done, everything configured (VPC, Kubernetes, ...) by Qovery will be deleted forever."),Object(c.b)("h3",{id:"iam-permissions"},"IAM permissions"),Object(c.b)("p",null,"Qovery required IAM permissions to create, update and managed the infrastructure."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"IAM is used to create IAM roles"),Object(c.b)("li",{parentName:"ul"},"S3 is used to store our generated configuration files"),Object(c.b)("li",{parentName:"ul"},"Cloudwatch, for creating a group stream for each Kubernetes clusters"),Object(c.b)("li",{parentName:"ul"},"Autoscaling for RDS and autoscaling rules for the Kubernetes cluster"),Object(c.b)("li",{parentName:"ul"},"Elastic load-balancing for ELB / ALB / NLB."),Object(c.b)("li",{parentName:"ul"},"DynamoDB to have a distributed lock on infrastructure deployment."),Object(c.b)("li",{parentName:"ul"},"ECR for managing the container registry, create/update/delete repository."),Object(c.b)("li",{parentName:"ul"},"KMS to load and store keys (RDS, SSH, \u2026)"),Object(c.b)("li",{parentName:"ul"},"EKS to create and update the Kubernetes cluster.")),Object(c.b)("h2",{id:"regions"},"Regions"),Object(c.b)("p",null,"Qovery supports the following AWS regions:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"supported"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/us-west-2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US West (Oregon)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/us-east-2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US East (Ohio)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/us-east-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US East (N. Virginia)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/us-west-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US West (N. California)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddff\ud83c\udde6"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/af-south-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Africa (Cape Town)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udded\ud83c\uddf0"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-east-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Hong Kong)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddee\ud83c\uddf3"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-south-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Mumbai)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddef\ud83c\uddf5"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-northeast-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Tokyo)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddf0\ud83c\uddf7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-northeast-2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Seoul)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddef\ud83c\uddf5"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-northeast-3"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Osaka)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddf8\ud83c\uddec"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-southeast-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Singapore)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde6\ud83c\uddfa"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-southeast-2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Sydney)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde8\ud83c\udde6"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ca-central-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Canada (Central)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde9\ud83c\uddea"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-central-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Frankfurt)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddee\ud83c\uddea"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-west-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Ireland)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-west-2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (London)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddeb\ud83c\uddf7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-west-3"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Paris)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddee\ud83c\uddf9"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-south-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Milan)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddf8\ud83c\uddea"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-north-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Stockholm)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde7\ud83c\udded"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/me-south-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Middle East (Bahrain)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde7\ud83c\uddf7"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/sa-east-1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"South America (S\xe3o Paulo)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))),Object(c.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(c.b)("p",null,"TODO"),Object(c.b)("h2",{id:"faq"},"FAQ"),Object(c.b)("h3",{id:"how-to-choose-a-region"},"How to choose a region?"),Object(c.b)("p",null,"Different datacenters are located in different geographic areas, and you may want to keep your site physically close to the bulk of your user base for reduced latency."),Object(c.b)("h3",{id:"i-dont-find-a-region-that-is-provided-by-aws"},"I don't find a region that is provided by AWS"),Object(c.b)("p",null,"We are probably testing the support of this region, please ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qovery.com/contact"}),"contact us")," to know what's the status"),Object(c.b)("h3",{id:"migrate-between-cloud-providers-and-regions"},"Migrate between Cloud providers and regions"),Object(c.b)("p",null,"Today, you can't migrate an environment from one region to another after it has been created. Vote ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"here")," if you need this feature."))}d.isMDXComponent=!0},330:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},331:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(a),d=n,j=s["".concat(o,".").concat(d)]||s[d]||p[d]||c;return a?r.a.createElement(j,i({ref:t},b,{components:a})):r.a.createElement(j,i({ref:t},b))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},332:function(e,t,a){"use strict";a(337);var n=a(0),r=a.n(n),c=a(330),o=a.n(c);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,c=e.icon,i=e.type,l=null;switch(i){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:o()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==c}),role:"alert"},!1!==c&&r.a.createElement("i",{className:o()("feather","icon-"+(c||l))}),t)}},336:function(e,t,a){var n=a(24).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},337:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(341)}),a(75)("fill")},338:function(e,t,a){"use strict";a(336);var n=a(0),r=a.n(n),c=a(332);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(c.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},340:function(e,t,a){"use strict";var n=a(346),r=a(53);function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var a=function(e){var t;switch(e.arrayFormat){case"index":return function(e,a,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=a):n[e]=a};case"bracket":return function(e,a,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],a):n[e]=[a]:n[e]=a};default:return function(e,t,a){void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=t}}}(t=r({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),c=t.length>0?t.join("="):void 0;c=void 0===c?null:decodeURIComponent(c),a(decodeURIComponent(r),c,n)})),Object.keys(n).sort().reduce((function(e,t){var a=n[t];return Boolean(a)&&"object"==typeof a&&!Array.isArray(a)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(a):e[t]=a,e}),Object.create(null))):n},t.stringify=function(e,t){var a=function(e){switch(e.arrayFormat){case"index":return function(t,a,n){return null===a?[c(t,e),"[",n,"]"].join(""):[c(t,e),"[",c(n,e),"]=",c(a,e)].join("")};case"bracket":return function(t,a){return null===a?c(t,e):[c(t,e),"[]=",c(a,e)].join("")};default:return function(t,a){return null===a?c(t,e):[c(t,e),"=",c(a,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var r=e[n];if(void 0===r)return"";if(null===r)return c(n,t);if(Array.isArray(r)){var o=[];return r.slice().forEach((function(e){void 0!==e&&o.push(a(n,e,o.length))})),o.join("&")}return c(n,t)+"="+c(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},341:function(e,t,a){"use strict";var n=a(27),r=a(76),c=a(26);e.exports=function(e){for(var t=n(this),a=c(t.length),o=arguments.length,i=r(o>1?arguments[1]:void 0,a),l=o>2?arguments[2]:void 0,b=void 0===l?a:r(l,a);b>i;)t[i++]=e;return t}},342:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(330),a(340)),o=a.n(c);a(133);t.a=function(e){var t=e.children,a=e.headingDepth,c=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},b="https://github.com/qovery/documentation/issues/new?"+o.a.stringify(l),u=Object(n.useState)(null),s=u[0],p=u[1];return r.a.createElement("div",{className:"steps steps--h"+a},t,!c&&!s&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return p("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:b,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==s&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},346:function(e,t,a){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);