(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,u=b["".concat(o,".").concat(m)]||b[m]||s[m]||i;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(138)),o={id:"docker",title:"Dockerfile"},c={unversionedId:"rd/ci/docker",id:"rd/ci/docker",isDocsHomePage:!1,title:"Dockerfile",description:"The last peice we need to take care of in order have our pipleline fully function is a Dockerfile.",source:"@site/docs\\rd\\ci\\docker.md",slug:"/rd/ci/docker",permalink:"/cs422_sp24/docs/rd/ci/docker",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/rd/ci/docker.md",version:"current"},l=[],p={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The last peice we need to take care of in order have our pipleline fully function is a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.cloudbees.com/blog/what-is-a-dockerfile"}),"Dockerfile"),"."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Dockerfile")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"When you run the ",Object(i.b)("inlineCode",{parentName:"p"},"docker")," command, Docker uses this file to build the image itself. The Dockerfile is essentially the build instructions to build the image."))),Object(i.b)("p",null,"At the top level of your project folder, create a new file called ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile")," and copy & paste the following content into it:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'# For Java 11, try this\nFROM adoptopenjdk/openjdk11:latest AS build\nARG JAR_FILE=workspace/build/libs/ci-helloworld-1.0-SNAPSHOT.jar\nRUN mkdir -p /workspace\nCOPY build.gradle /workspace\nCOPY gradlew /workspace\nCOPY settings.gradle /workspace\nCOPY gradle /workspace/gradle\nCOPY src /workspace/src\nWORKDIR /workspace\nRUN chmod a+x gradlew\nRUN ./gradlew build\n\nFROM adoptopenjdk/openjdk11:latest\nCOPY --from=build ${JAR_FILE} app.jar\nEXPOSE 6379\nENTRYPOINT ["java","-jar","app.jar"]\n')),Object(i.b)("p",null,"This Dockerfile configuration will create a container image from the Gradle project. The FROM instruction initialises a new build stage and sets the base image as ",Object(i.b)("inlineCode",{parentName:"p"},"openjdk11:latest")," for subsequent instructions. ARG create a variable named ",Object(i.b)("inlineCode",{parentName:"p"},"JAR_FILE")," with the given value. ",Object(i.b)("inlineCode",{parentName:"p"},"RUN mkdir -p /workspace")," creates a folder called ",Object(i.b)("inlineCode",{parentName:"p"},"workspace"),". ",Object(i.b)("inlineCode",{parentName:"p"},"WORKDIR /workspace")," sets the working directory to ",Object(i.b)("inlineCode",{parentName:"p"},"/workspace")," for any ",Object(i.b)("inlineCode",{parentName:"p"},"RUN"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ENTRYPOINT")," or ",Object(i.b)("inlineCode",{parentName:"p"},"COPY")," that follows in the Dockerfile. The ",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle"),", ",Object(i.b)("inlineCode",{parentName:"p"},"settings.gradle"),", ",Object(i.b)("inlineCode",{parentName:"p"},"gradew")," files along with the ",Object(i.b)("inlineCode",{parentName:"p"},"src")," directory is then copied to ",Object(i.b)("inlineCode",{parentName:"p"},"/workspace"),". ",Object(i.b)("inlineCode",{parentName:"p"},"chmod a+x gradlew")," makes sure ",Object(i.b)("inlineCode",{parentName:"p"},"gradlew")," is executable. After that the shell command ",Object(i.b)("inlineCode",{parentName:"p"},"./gradlew build")," is ran to build the jar file."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"FROM adoptopenjdk/openjdk11:latest")," sets the JDK as the base image. We then copy the jar we created in the ",Object(i.b)("inlineCode",{parentName:"p"},"build")," phase into a new jar file called ",Object(i.b)("inlineCode",{parentName:"p"},"app.jar"),". ",Object(i.b)("inlineCode",{parentName:"p"},"EXPOSE 6379")," informs Docker that the container listens on port ",Object(i.b)("inlineCode",{parentName:"p"},"6379"),". The last bit, ENTRYPOINT ","[\u201cjava\u201d,\u201d-jar\u201d,\u201dapp.jar\u201d]"," tells the container to run ",Object(i.b)("inlineCode",{parentName:"p"},"java -jar app.jar")," once the container starts up."),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"add, commit, push")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Do not forget to git add, commit and push your new Dockerfile."))))}d.isMDXComponent=!0}}]);