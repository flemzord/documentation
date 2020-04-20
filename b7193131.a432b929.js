(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return g}));var n=a(1),l=a(9),o=(a(0),a(233)),r=a(236),i=a(328),c=a(299),s=a(298),p=a(302),b=a(258),u={last_modified_on:"2020-04-20",$schema:"/.meta/.schemas/guides.json",title:"Deploy Laravel with MySQL on AWS",description:"How to deploy Laravel with MySQL on Amazon Web Services",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","language: php","database: mysql"],hide_pagination:!0},m={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Deploy Laravel with MySQL on AWS",description:"How to deploy Laravel with MySQL on Amazon Web Services",permalink:"/guides/tutorial/deploy-laravel-with-mysql",readingTime:"7 min read",source:"@site/guides/tutorial/deploy-laravel-with-mysql.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"language: php",permalink:"/guides/tags/language-php"},{label:"database: mysql",permalink:"/guides/tags/database-mysql"}],title:"Deploy Laravel with MySQL on AWS",truncated:!1,prevItem:{title:"Customizing routes",permalink:"/guides/advanced/customizing-routing"},nextItem:{title:"GraphQL API with Hasura",permalink:"/guides/tutorial/graphql-api-with-hasura"}},d=[{value:"Sign up",id:"sign-up",children:[{value:"Install the CLI!",id:"install-the-cli",children:[]},{value:"Sign Up",id:"sign-up-1",children:[]},{value:"Authorize Qovery",id:"authorize-qovery",children:[]}]},{value:"Optional: Get the Laravel sample application",id:"optional-get-the-laravel-sample-application",children:[]},{value:"Deploy the Laravel application",id:"deploy-the-laravel-application",children:[]},{value:"Bonuses",id:"bonuses",children:[{value:"Test the Laravel application locally",id:"test-the-laravel-application-locally",children:[]},{value:"Deploy the application on a staging environment",id:"deploy-the-application-on-a-staging-environment",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],h={rightToc:d};function g(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com"}),"AWS")," (Amazon Web Services) is a fantastic and reliable cloud service provider. AWS, like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com"}),"GCP")," (Google Cloud Platform) and Microsoft ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://azure.microsoft.com"}),"Azure"),", provides everything you need to host an application without having to worry about running the underlying servers and network configuration."),Object(o.b)("p",null,"However, deploying an application on AWS presents some challenges. The typical deployment workflow looks like this: write code, push it to Git, compile code, deploy code, validate your changes, and repeat. Developers thus not only have to do all of this manually, but they also have to configure tons of services (VPC, database, cache, DNS, CDN, etc.) to make their application live on the web."),Object(o.b)("p",null,"Qovery solves this problem."),Object(o.b)("p",null,"In this blog post, I will show you how Qovery improves the developer experience to deploy staging and production ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.laravel.com"}),"Laravel")," application with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.mysql.com"}),"MySQL")," database on AWS. You will be able to focus on writing the best code instead of managing complex services."),Object(o.b)(p.a,{name:"guide",mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Your Operating System is MacOS / Windows / Linux"),Object(o.b)("li",{parentName:"ul"},"You have a Github account"))),Object(o.b)("h2",{id:"sign-up"},"Sign up"),Object(o.b)("p",null,"Sign up using the ",Object(o.b)("strong",{parentName:"p"},"Qovery CLI"),", it's very simple!"),Object(o.b)("h3",{id:"install-the-cli"},"Install the CLI!"),Object(o.b)(c.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Please select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"linux",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Download and install Qovery CLI on every Linux distribution")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -s https://get.qovery.com | sudo bash\n"))),Object(o.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(o.b)(c.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"homebrew",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The common solution to install a command line binary on the MacOS is to use ",Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://brew.sh/"}),"Homebrew"),".")),Object(o.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("h3",Object(n.a)({parentName:"li"},{id:"add-qovery-brew-repository"}),"Add Qovery brew repository"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew tap Qovery/qovery-cli\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("h3",Object(n.a)({parentName:"li"},{id:"install-the-cli-1"}),"Install the CLI"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew install qovery-cli\n")))))),Object(o.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Install the Qovery CLI on MacOS manually")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -s https://get.qovery.com | bash\n"))))),Object(o.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(o.b)(c.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"scoop",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The classic way to install binaries on Windows is to use ",Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://brew.sh/"}),"Scoop"),".")),Object(o.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("h3",Object(n.a)({parentName:"li"},{id:"add-qovery-bucket"}),"Add Qovery bucket"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("h3",Object(n.a)({parentName:"li"},{id:"install-the-cli-2"}),"Install the CLI"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"scoop install qovery-cli\n")))))),Object(o.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Install the Qovery CLI on Windows manually by downloading the ",Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease")," and uncompressing its content to\n",Object(o.b)("inlineCode",{parentName:"strong"},"C:\\Windows"),".")))))),Object(o.b)("h3",{id:"sign-up-1"},"Sign Up"),Object(o.b)("p",null,"After the Qovery CLI is installed, run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery auth\n")),Object(o.b)("p",null,"A browser window with sign-in options will open."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(o.b)("p",null,"Choose one of the options (e.g. ",Object(o.b)("strong",{parentName:"p"},"Github"),") to authenticate."),Object(o.b)("h3",{id:"authorize-qovery"},"Authorize Qovery"),Object(o.b)("p",null,"Qovery needs access to your account to be able to clone your repository for future application builds."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/github-connect.png",alt:"Connect Github"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},'That\'s it! You should see "Authentication successful. You can close this window." message.')),Object(o.b)("h2",{id:"optional-get-the-laravel-sample-application"},"Optional: Get the Laravel sample application"),Object(o.b)("p",null,"Get a local copy of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/docker-simple-example-laravel"}),"Laravel sample project")," by forking the project using your Github account and by executing the following command:"),Object(o.b)(b.a,{mdxType:"Alert"},"Do not forget to fork the project and change the URL below with yours"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone -b tutorial git@github.com:YOUR_GITHUB_USERNAME/docker-simple-example-laravel.git\n")),Object(o.b)("h2",{id:"deploy-the-laravel-application"},"Deploy the Laravel application"),Object(o.b)("p",null,"To deploy the Laravel application connected to a MySQL database, you need to have a .qovery.yml file, and a ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," (provided in the sample project) at the root of your project. This file indicates the external resources (e.g. MySQL) that your application needs to work correctly."),Object(o.b)("p",null,"To create the ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," file, run the following command:\u200d\u200d"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery init\n")),Object(o.b)("p",null,"Which creates the ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," file at the root of your project directory"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ cat .qovery.yml\n")),Object(o.b)("p",null,"Output"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'application:\n  name: docker-simple-example-laravel\n  project: my-laravel-app-cloud\n  cloud_region: aws/eu-west-3\n  publicly_accessible: true\ndatabases:\n- type: mysql\n  version: "8.0"\n  name: my-mysql-6132005\nrouters:\n- name: main\n  routes:\n  - application_name: docker-simple-example-laravel\n    paths:\n    - /\n')),Object(o.b)(b.a,{mdxType:"Alert"},"Qovery supports multiple databases (eg. PostgreSQL, MySQL, MongoDB, Redis, Memcached, Cassandra), brokers (eg. RabbitMQ, Kafka) and storage services (eg. S3)."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Authorize the Qovery Github application")," to get access to your Github account. Once done, you need to commit and push the ",Object(o.b)("inlineCode",{parentName:"p"},".qovery.yml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," file to deploy your app."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git add .qovery.yml Dockerfile\n$ git commit -m \u201cadd .qovery.yml and Dockerfile\u201d\n$ git push -u origin qovery\n")),Object(o.b)("p",null,"Voila! Qovery is now deploying your app!"),Object(o.b)("p",null,"See the deployment status by executing"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# show deployment status\n$ qovery status\n")),Object(o.b)("p",null,"Output"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS                  | DATABASES\nmaster      | running | https://main-yenr7erjbs87dk4m-gtw.qovery.io | docker-simple-example-laravel | my-mysql-6132005\n\nAPPLICATION NAME              | STATUS  | DATABASES\ndocker-simple-example-laravel | running | my-mysql-6132005\n\nDATABASE NAME    | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-mysql-6132005 | running | MYSQL      | 5.7     | <hidden> | <hidden> | <hidden> | <hidden> | docker-simple-example-laravel\n")),Object(o.b)("h2",{id:"bonuses"},"Bonuses"),Object(o.b)("h3",{id:"test-the-laravel-application-locally"},"Test the Laravel application locally"),Object(o.b)("p",null,"The Qovery motto is: if your application runs locally, then your application will run on Qovery. To test if your application is running locally, execute the following command:"),Object(o.b)(b.a,{mdxType:"Alert"},"The Docker runtime is required"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery run\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"...\nStarting server\nAH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.2. Set the 'ServerName' directive globally to suppress this message\nAH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.2. Set the 'ServerName' directive globally to suppress this message\n[Fri Mar 06 12:43:30.338700 2020] [mpm_prefork:notice] [pid 1] AH00163: Apache/2.4.38 (Debian) PHP/7.4.3 configured -- resuming normal operations\n[Fri Mar 06 12:43:30.339017 2020] [core:notice] [pid 1] AH00094: Command line: 'apache2 -D FOREGROUND'\n")),Object(o.b)("p",null,"Navigate to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:80"}),"http://localhost:80")," through your web browser and you should see a JSON response\nNote: ",Object(o.b)("inlineCode",{parentName:"p"},"qovery run")," connects your application to the MySQL database on AWS."),Object(o.b)("h3",{id:"deploy-the-application-on-a-staging-environment"},"Deploy the application on a staging environment"),Object(o.b)("p",null,"Qovery has a compelling feature known as \u201cenvironment\u201d. Qovery supports the deployment of isolated development environments from your branches, complete with exact copies of all of your data. The Environment is useful for testing changes in isolation before merging them."),Object(o.b)("p",null,"So, do you want to create a new feature, fix a bug, or make modifications without impacting the production or any other important environment? Type the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git checkout -b feat_foo\n$ git push -u origin feat_foo\n\n# show deployment status\n$ qovery status\n")),Object(o.b)("p",null,"Output"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS                  | DATABASES\nfeat_foo    | running | https://main-yenr7erjbs87dk4m-gtw.qovery.io | docker-simple-example-laravel | my-mysql-6132005\n\nAPPLICATION NAME              | STATUS  | DATABASES\ndocker-simple-example-laravel | running | my-mysql-6132005\n\nDATABASE NAME    | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-mysql-6132005 | running | MYSQL      | 5.7     | <hidden> | <hidden> | <hidden> | <hidden> | docker-simple-example-laravel\n")),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"Qovery and AWS bring to developers, the full power of simplicity and flexibility while deploying applications. Any developer can now take advantage of AWS in seconds instead of days."),Object(o.b)("p",null,"Accelerate your development and start using Qovery today. Let us know what you think about it on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/qovery_"}),"Twitter"),", or by ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"With thanks to ",Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/arnaudj"}),"Arnaud J.")," for his contribution to this article."),"s"),Object(o.b)(r.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}g.isMDXComponent=!0},236:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=a(234),r=a(231),i=a.n(r);a(131);t.a=function(e){var t=e.children,a=e.className,n=e.badge,r=e.leftIcon,c=e.rightIcon,s=e.size,p=e.target,b=e.to,u=i()("jump-to","jump-to--"+s,a),m=l.a.createElement("div",{className:"jump-to--inner"},l.a.createElement("div",{className:"jump-to--inner-2"},r&&l.a.createElement("div",{className:"jump-to--left"},l.a.createElement("i",{className:"feather icon-"+r})),l.a.createElement("div",{className:"jump-to--main"},n?l.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),l.a.createElement("div",{className:"jump-to--right"},l.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return p?l.a.createElement("a",{href:b,target:p,className:u},m):l.a.createElement(o.a,{to:b,className:u},m)}},239:function(e,t,a){var n=a(26).f,l=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in l||a(10)&&n(l,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},258:function(e,t,a){"use strict";a(259);var n=a(0),l=a.n(n),o=a(231),r=a.n(o);a(140);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,o=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return l.a.createElement("div",{className:r()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&l.a.createElement("i",{className:r()("feather","icon-"+(o||c))}),t)}},259:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(260)}),a(76)("fill")},260:function(e,t,a){"use strict";var n=a(25),l=a(79),o=a(24);e.exports=function(e){for(var t=n(this),a=o(t.length),r=arguments.length,i=l(r>1?arguments[1]:void 0,a),c=r>2?arguments[2]:void 0,s=void 0===c?a:l(c,a);s>i;)t[i++]=e;return t}},298:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement(l.a.Fragment,null,e.children)}},299:function(e,t,a){"use strict";var n=a(1),l=(a(268),a(240),a(53),a(27),a(19),a(20),a(0)),o=a.n(l),r=a(329),i=a(231),c=a.n(i),s=a(293),p=a.n(s),b=a(308),u=37,m=39;function d(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,l=e.className,r=e.handleKeydown,i=e.style,s=e.values,p=e.selectedValue,b=e.tabRefs;return o.a.createElement("div",{className:a?"tabs--centered":null},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",l,{"tabs--block":t}),style:i},s.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===t,className:c()("tab-item",{"tab-item--active":p===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return r(b,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,l=e.size,i=e.values,c=i;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return o.a.createElement(r.a,{className:"react-select-container react-select--"+l,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:i.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,r=e.groupId,i=e.label,c=e.placeholder,s=e.select,g=e.size,y=(e.style,e.values),v=e.urlKey,O=Object(b.a)(),j=O.tabGroupChoices,f=O.setTabGroupChoices,N=Object(l.useState)(a),w=N[0],S=N[1];if(null!=r){var T=j[r];null!=T&&T!==w&&S(T)}var A=function(e){S(e),null!=r&&f(r,e)},k=[],E=function(e,t,a){switch(a.keyCode){case m:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(l.useEffect)((function(){if("undefined"!=typeof window&&window.location&&v){var e=p.a.parse(window.location.search);e[v]&&S(e[v])}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"margin-bottom--"+(g||"md")},i&&o.a.createElement("div",{className:"margin-vert--sm"},i),y.length>1&&(s?o.a.createElement(h,Object(n.a)({changeSelectedValue:A,handleKeydown:E,placeholder:c,selectedValue:w,size:g,tabRefs:k},e)):o.a.createElement(d,Object(n.a)({changeSelectedValue:A,handleKeydown:E,selectedValue:w,tabRefs:k},e)))),l.Children.toArray(t).filter((function(e){return e.props.value===w}))[0])}},302:function(e,t,a){"use strict";a(239);var n=a(0),l=a.n(n),o=a(258);t.a=function(e){var t=e.children,a=e.name;return l.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},l.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},328:function(e,t,a){"use strict";var n=a(0),l=a.n(n),o=(a(231),a(293)),r=a.n(o);a(145);t.a=function(e){var t=e.children,a=e.headingDepth,o="undefined"!=typeof window?window.location:null,i={title:"Tutorial on "+o+" failed",body:"The tutorial on:\n\n"+o+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},c="https://github.com/qovery/documentation/issues/new?"+r.a.stringify(i),s=Object(n.useState)(null),p=s[0],b=s[1];return l.a.createElement("div",{className:"steps steps--h"+a},t,!p&&l.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",l.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",l.a.createElement("a",{href:c,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&l.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",l.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}}}]);