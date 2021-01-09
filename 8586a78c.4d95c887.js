(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{237:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a(1),o=a(9),i=(a(0),a(329)),r=a(331),l=a(340),c=a(341),s={last_modified_on:"2021-01-09",$schema:"/.meta/.schemas/guides.json",title:"How to deploy Docker containers?",description:"Dockerizing an application and deploying it to the cloud",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial"],hide_pagination:!0},p={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to deploy Docker containers?",description:"Dockerizing an application and deploying it to the cloud",permalink:"/guides/tutorial/how-to-deploy-a-docker-container",readingTime:"9 min read",source:"@site/guides/tutorial/how-to-deploy-a-docker-container.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"}],title:"How to deploy Docker containers?",truncated:!1,prevItem:{title:"How to deploy a full-stack application composed of Hasura, PostgreSQL and Angular",permalink:"/guides/tutorial/deploy-fullstack-application-composed-of-hasura-postgresql-angular"},nextItem:{title:"Kubernetes - Network isolation with NetworkPolicy",permalink:"/guides/engineering/basic-network-isolation-in-kubernetes"}},u=[{value:"Docker in a nutshell",id:"docker-in-a-nutshell",children:[]},{value:"Why should I use Docker?",id:"why-should-i-use-docker",children:[]},{value:"How to deploy Docker containers",id:"how-to-deploy-docker-containers",children:[{value:"Create a simple application",id:"create-a-simple-application",children:[]},{value:"What is Dockerfile?",id:"what-is-dockerfile",children:[]},{value:"Container as a Service",id:"container-as-a-service",children:[]},{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]},{value:"Deploy the docker container",id:"deploy-the-docker-container",children:[]}]},{value:"Summary",id:"summary",children:[]}],b={rightToc:u};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In recent years, ",Object(i.b)("em",{parentName:"p"},"Docker")," has been becoming more and more popular tool used to deploy web applications. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.datadoghq.com/docker-adoption/"}),"According to Datadog")," in 2018, the adoption of Docker in large organizations reached about 47 percent and almost 20 percent in small organizations. This report it two years old - no doubt Docker is even more common now. "),Object(i.b)("p",null,'In my opinion, knowing Docker basics is an essential tool in the toolbox of every software engineer, especially in the web development ecosystem. In this article, I\'ll demonstrate the easiest way to Dockerize and deploy a simple application. Before we dive deep into practical steps, let\'s first answer two essential questions - "What is Docker" and "Why should I use it" in the first place.'),Object(i.b)("h2",{id:"docker-in-a-nutshell"},"Docker in a nutshell"),Object(i.b)("p",null,"Docker is a tool that makes it easy to build and deploy your applications, typically to the cloud environment. It allows you to package your application in a container that contains your app with all of the things it needs, such as libraries and other dependencies. Then, this package can be run on any machine with a Docker engine installed, no matter the underlying configuration or system distribution."),Object(i.b)("h2",{id:"why-should-i-use-docker"},"Why should I use Docker?"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"It works on my machine")," sentence has become a meme in the software world. You can even get a sticker on your laptop:"),Object(i.b)("img",{src:"/img/it-works-on-my-machine.jpg",alt:"It works - on my machine!"}),Object(i.b)("p",null,"Making applications run consistently in various environments is one of the issues addressed very well by Docker. "),Object(i.b)("p",null,"Docker makes sure that your containerized applications run in the same way on your machine, on your friend's machine, and on the AWS server (and anywhere else where Docker engine is installed). It is truly a superpower. As a developer, you no longer need to worry about the underlying system. After you Dockerize your app, you can be sure that it behaves in the same manner in your development, testing, and production environments, as well as on your local machine. It makes building and testing applications way more comfortable than it was before. "),Object(i.b)("p",null,"Another reason why you should be interested in Docker is the popularization of cloud, microservices, and Kubernetes. Docker is the first-class citizen in the cloud-native world, so if you want to take the full advantage of scalable, cloud-native application architectures, Docker is the way to go."),Object(i.b)("h2",{id:"how-to-deploy-docker-containers"},"How to deploy Docker containers"),Object(i.b)("p",null,"Let's move on to the practical application and usage of Docker. We'll now build a very simple web application that responds to HTTP requests, dockerize it and deploy to Qovery - a scalable ",Object(i.b)("strong",{parentName:"p"},"Container as a Service")," platform."),Object(i.b)("h3",{id:"create-a-simple-application"},"Create a simple application"),Object(i.b)("p",null,"For the sake of simplicity, we'll create a simple Node.js application that returns a ",Object(i.b)("em",{parentName:"p"},"Hello, World")," text in response to HTTP requests. I choose Node.js here because it's simple and popular technology, but you can use Docker with basically any language and framework."),Object(i.b)("p",null,"Let's create an empty folder for our new application and initialize an empty Git repository:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir deploying-docker\ncd deploying-docker\ngit init\n")),Object(i.b)("p",null,"Now, create ",Object(i.b)("inlineCode",{parentName:"p"},"app.js")," file with the source code of our server:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="app.js"',title:'"app.js"'}),"const http = require('http');\n\nconst hostname = '0.0.0.0';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n    res.statusCode = 200;\n    res.setHeader('Content-Type', 'text/plain');\n    res.end('Hello World');\n});\n\nserver.listen(port, hostname, () => {\n    console.log(`Server running at http://${hostname}:${port}/`);\n});\n")),Object(i.b)("p",null,'It is a very simple server that returns "Hello World" text on its root endpoint. After it\'s done, we want to make this app run in a Docker container. To do so, we need to create a Dockerfile.'),Object(i.b)("h3",{id:"what-is-dockerfile"},"What is Dockerfile?"),Object(i.b)("p",null,"Besides containers, Docker uses the concept of ",Object(i.b)("strong",{parentName:"p"},"Images"),". Image is a template used to create and run containers. Dockerfile describes the steps required to build the image. Later on, this image is used as a template to run containers with your application. "),Object(i.b)("p",null,"You can think about images and containers as a good analogy to classes and objects (instances of a given class) in the Object-Oriented Programming world. "),Object(i.b)("p",null,"Create a Dockerfile that will allow us to run our Node.js app in a container. Create a file named ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile")," with the following content:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'}),"FROM node:13-alpine\n\nRUN mkdir -p /usr/src/app\n\nWORKDIR /usr/src/app\n\nCOPY . .\n\nEXPOSE 3000\n\nCMD node app.js\n")),Object(i.b)("p",null,"Let's discuss all lines of the Dockerfile:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FROM node:13-alpine")," specifies the base of our Docker image. It's a base used to get started with building an image."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RUN mkdir -p /usr/src/app")," creates a new empty folder in ",Object(i.b)("inlineCode",{parentName:"li"},"/usr/src/app")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WORKDIR /usr/src/app")," defines the ",Object(i.b)("em",{parentName:"li"},"working directory")," of our container"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"COPY . .")," adds the contents of our application to the container"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EXPOSE 3000")," informs Docker that the container listens on the specified network port at runtime "),Object(i.b)("li",{parentName:"ul"},"and, finally: ",Object(i.b)("inlineCode",{parentName:"li"},"CMD node app.js")," is the command that starts our application.")),Object(i.b)("p",null,"Now we got all basic things we need to run our application in a Docker container! Let's try it out:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Build Docker image of the app using ",Object(i.b)("inlineCode",{parentName:"li"},"docker build testing/docker .")),Object(i.b)("li",{parentName:"ol"},"Run a container with our application by executing ",Object(i.b)("inlineCode",{parentName:"li"},"docker run -p 3000:3000 testing/docker"))),Object(i.b)("p",null,"the ",Object(i.b)("inlineCode",{parentName:"p"},"-p 3000:3000")," flag makes container port ",Object(i.b)("inlineCode",{parentName:"p"},"3000")," accessible on your ",Object(i.b)("inlineCode",{parentName:"p"},"localhost:3000"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Great"),"! The container is up. Run ",Object(i.b)("inlineCode",{parentName:"p"},"docker ps")," to see the list of running containers and confirm that it is indeed running."),Object(i.b)("p",null,"Now open a browser at ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:3000")," to see that the application in a container responded with ",Object(i.b)("inlineCode",{parentName:"p"},"Hello, World")," message."),Object(i.b)("p",null,"Did it work? Great. Our app works well in the Docker container. It's adorable, but we want to share our app with the world - running applications only on our own machine won't make us millionaires!"),Object(i.b)("h3",{id:"container-as-a-service"},"Container as a Service"),Object(i.b)("p",null,"To deploy our Dockerized application, we'll use Qovery. It's a Container as a Service platform that allows us to deploy Dockerized apps without any efforts. Qovery is free up to three applications (and databases!) in the community version."),Object(i.b)(l.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"web",mdxType:"TabItem"},Object(i.b)("li",null,Object(i.b)("p",null,"Sign in to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(i.b)("p",{align:"center"},Object(i.b)("a",{href:"https://start.qovery.com"},Object(i.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"}))))),Object(i.b)(c.a,{value:"cli",mdxType:"TabItem"},Object(i.b)("li",null,Object(i.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(i.b)(l.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(i.b)(c.a,{value:"macos",mdxType:"TabItem"},Object(i.b)(l.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"homebrew",mdxType:"TabItem"},Object(i.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(i.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(i.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(i.b)(l.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"scoop",mdxType:"TabItem"},Object(i.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(i.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(i.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Windows"),"."))),Object(i.b)("p",null,"Few limitations exist on Windows: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#windows"}),"read more"))))),Object(i.b)("li",null,Object(i.b)("h3",{id:"sign-up"},"Sign up"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(i.b)(r.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(i.b)("p",null,"Your browser window with sign-in options will open."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(i.b)("p",null,"Note: Qovery needs access to your account to be able to clone your repository for future application builds."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(i.b)("p",null,"Congratulations, you are logged-in.")))),Object(i.b)("p",null,"After you have access to Qovery, it's time to deploy the application."),Object(i.b)("h3",{id:"deploy-the-docker-container"},"Deploy the docker container"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"qovery init")),Object(i.b)("li",{parentName:"ol"},"Choose application name, e.g., ",Object(i.b)("inlineCode",{parentName:"li"},"node-app")),Object(i.b)("li",{parentName:"ol"},"Choose project name, e.g., ",Object(i.b)("inlineCode",{parentName:"li"},"testing-docker")),Object(i.b)("li",{parentName:"ol"},"Commit and push your changes to Github: ",Object(i.b)("inlineCode",{parentName:"li"},'git add . ; git commit -m "Initial commit" ; git push -u origin master"')," (create an empty repository beforefor your application on Github before if it's not done yet)")),Object(i.b)("p",null,"Voila! That's all. Your Dockerized application is being deployed as a Docker container. To deploy a Docker container on Qovery, all you need is a Dockerfile that describes containers with your application + running ",Object(i.b)("inlineCode",{parentName:"p"},"qovery init")," command to initialize Qovery. From now on, Qovery will build and deploy your Dockerized application after you make any changes in your repository to scalable Kubernetes clusters as a Docker container."),Object(i.b)("p",null,"To check that your application is in fact deploying, run ",Object(i.b)("inlineCode",{parentName:"p"},"qovery status"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"BRANCH NAME       | STATUS  | ENDPOINTS                            | APPLICATIONS    | DATABASES\nmaster            | running | https://some.url.qovery.io           | node-app  | \n\nAPPLICATION NAME  | STATUS  | DATABASES\nnode-app          | running | \n\nDATABASE NAME     | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\n")),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("p",null,"In this guide, you learned the essential basics of Docker. You also learned why you should be interested in using it, and how to deploy your application to the cloud as a Docker container. This is all you need to know to improve your development experience and deploy your application to the cloud with ease!\nIf you have any questions, feedback or want to learn more, please join us on our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord server")," and feel free to speak your mind."))}d.isMDXComponent=!0},331:function(e,t,a){"use strict";a(335);var n=a(0),o=a.n(n),i=a(328),r=a.n(i);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,i=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:r()(a,"alert","alert--"+l,{"alert--fill":n,"alert--icon":!1!==i}),role:"alert"},!1!==i&&o.a.createElement("i",{className:r()("feather","icon-"+(i||c))}),t)}},340:function(e,t,a){"use strict";var n=a(1),o=(a(346),a(342),a(52),a(28),a(20),a(19),a(0)),i=a.n(o),r=a(348),l=a(328),c=a.n(l),s=a(339),p=a.n(s),u=a(347),b=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,r=e.handleKeydown,l=e.style,s=e.values,p=e.selectedValue,u=e.tabRefs;return i.a.createElement("div",{className:a?"tabs--centered":null},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",o,{"tabs--block":t}),style:l},s.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===t,className:c()("tab-item",{"tab-item--active":p===t}),key:t,ref:function(e){return u.push(e)},onKeyDown:function(e){return r(u,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,l=e.values,c=l;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return i.a.createElement(r.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:l.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,r=e.groupId,l=e.label,c=e.placeholder,s=e.select,y=e.size,g=(e.style,e.values),O=e.urlKey,j=Object(u.a)(),f=j.tabGroupChoices,w=j.setTabGroupChoices,v=Object(o.useState)(a),k=v[0],N=v[1];if(null!=r){var D=f[r];null!=D&&D!==k&&N(D)}var C=function(e){N(e),null!=r&&w(r,e)},T=[],I=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&O){var e=p.a.parse(window.location.search);e[O]&&N(e[O])}}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"margin-bottom--"+(y||"md")},l&&i.a.createElement("div",{className:"margin-vert--sm"},l),g.length>1&&(s?i.a.createElement(h,Object(n.a)({changeSelectedValue:C,handleKeydown:I,placeholder:c,selectedValue:k,size:y,tabRefs:T},e)):i.a.createElement(m,Object(n.a)({changeSelectedValue:C,handleKeydown:I,selectedValue:k,tabRefs:T},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===k}))[0])}},341:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}}}]);