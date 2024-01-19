(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{138:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,m=d["".concat(r,".").concat(u)]||d[u]||p[u]||o;return a?i.a.createElement(m,c(c({ref:t},b),{},{components:a})):i.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var b=2;b<o;b++)r[b]=a[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},200:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ci3-a2333d1cfbe873e48bfb0d4d69b470a7.jpg"},201:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ci4-54ea2e74ed8294d79c2501d856fb9036.jpg"},202:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ci5-974cde48887bf739b16b4592f79f4ba3.jpg"},203:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ci7-588c1b433c38e2a1c39a766038286bc0.jpg"},204:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ci8-6bfe61138ca46a0c720d5a183f71f785.jpg"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),i=a(7),o=(a(0),a(138)),r={id:"pipeline",title:"CI/CD using Github Actions"},c={unversionedId:"rd/ci/pipeline",id:"rd/ci/pipeline",isDocsHomePage:!1,title:"CI/CD using Github Actions",description:"Set Up the Pipeline",source:"@site/docs\\rd\\ci\\pipeline.md",slug:"/rd/ci/pipeline",permalink:"/cs422_sp24/docs/rd/ci/pipeline",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/rd/ci/pipeline.md",version:"current"},s=[{value:"Set Up the Pipeline",id:"set-up-the-pipeline",children:[]}],b={toc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"set-up-the-pipeline"},"Set Up the Pipeline"),Object(o.b)("p",null,"On Github, go to ",Object(o.b)("inlineCode",{parentName:"p"},"Actions")," tab:"),Object(o.b)("p",null,Object(o.b)("img",{src:a(200).default})),Object(o.b)("p",null,"This tab is home to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"}),"Github Actions"),". "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"GitHub Actions ")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform for your Github repository that allows you to automate your build, test, and deployment pipeline. You can create workflows (i.e., pipelines) that build and test every pull request to your repository, or deploy merged pull requests to production. GitHub provides Linux, Windows, and macOS virtual machines to run your workflows, or you can host your own self-hosted runners in your own data center or cloud infrastructure"))),Object(o.b)("p",null,"This is where we will create our workflow (i.e., pipeline) file. Github Actions makes some workflow suggestions based on what language(s)/technologies our project source code uses; you will likely see something like this:"),Object(o.b)("p",null,Object(o.b)("img",{src:a(201).default})),Object(o.b)("p",null,'Select "Java With Gradle".'),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Each suggested workflow pre-populates your workflow-setup file with some relevant instructions but we are going to write our own workflow file anyway, so it does not really matter which workflow suggestion you choose."))),Object(o.b)("p",null,"This create a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.redhat.com/en/topics/automation/what-is-yaml"}),"YAML")," file likely named ",Object(o.b)("inlineCode",{parentName:"p"},"gradle.yml")," under ",Object(o.b)("inlineCode",{parentName:"p"},".github/workflows/")," path in the repo. This is where Github Action workflow config files are stored by default."),Object(o.b)("p",null,Object(o.b)("img",{src:a(202).default})),Object(o.b)("p",null,"Now, copy & past the following content into the ",Object(o.b)("inlineCode",{parentName:"p"},"gradle.yml")," file:"),Object(o.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Don't you worry!")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Even though the workflow file may look scary at first, once you understand what is in it, you will most likely find it pretty straightforward actually, so don't get scared by the look of them!"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"name: Java CI/CD with Gradle\n\non:\n  push:\n    branches: [ \"master\" ]\n  pull_request:\n    branches: [ \"master\" ]\n\n  # permissions:\n  # contents: read\n\njobs:\n  build_and_test:\n    name: Build and Test\n    runs-on: ubuntu-latest\n\n    steps:\n      - uses: actions/checkout@v3\n      - name: Set up JDK 11\n        uses: actions/setup-java@v3\n        with:\n          java-version: '11'\n          distribution: 'temurin'\n      - name: Setting Permissions\n        run: chmod a+x gradlew\n      - name: Build with Gradle\n        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1\n        with:\n          arguments: build\n      - name: Test with Gradle\n        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1\n        with:\n          arguments: test\n      - name: Run Test Coverage\n        run: ./gradlew jacocoTestReport\n      - name: Jacoco\n        uses: cicirello/jacoco-badge-generator@v2.9.0\n        with:\n          jacoco-csv-file: build/reports/jacoco/test/jacocoTestReport.csv\n          fail-if-branches-less-than: 100\n\n  build_and_publish_docker_image:\n    name: Publish to Docker Hub\n    runs-on: ubuntu-latest\n    needs: [build_and_test]\n\n    steps:\n      - uses: actions/checkout@v3\n      - name: Login to Docker Hub\n        run: docker login -u ${{ secrets.DOCKER_USERNAME }} -p ${{ secrets.DOCKER_PASSWORD }}\n      - name: Build Container image\n        run: docker build -t ${{ secrets.DOCKER_REPO }}:latest .\n      - name: Publish Docker image\n        run: docker push ${{ secrets.DOCKER_REPO }}\n")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"}," Workflow Name and Trigger(s)"),': This first part gives this workflow the name of "Java CI with Gradle" and the ',Object(o.b)("inlineCode",{parentName:"li"},"on")," command specifies that this workflow will run whenever either a new ",Object(o.b)("inlineCode",{parentName:"li"},"push")," or ",Object(o.b)("inlineCode",{parentName:"li"},"pull request")," is made on the ",Object(o.b)("inlineCode",{parentName:"li"},"master")," branch of ",Object(o.b)("inlineCode",{parentName:"li"},"ci-helloworld")," repo.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'name: Java CI with Gradle\n\non:\n  push:\n    branches: [ "master" ]\n  pull_request:\n    branches: [ "master" ]\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Next, we have the jobs  that are part of this workflow. There are two main jobs namely "build_and_test" and "build_and_publish_docker_image":'),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"2.1. ",Object(o.b)("strong",{parentName:"li"},'"build_and_test":')," here, we first formulate how to build (compilation and packaging instructions) the project:")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"build_and_test:\nname: Build and Test\nruns-on: ubuntu-latest\n\nsteps:\n  - uses: actions/checkout@v3\n  - name: Set up JDK 11\n    uses: actions/setup-java@v3\n    with:\n      java-version: '11'\n      distribution: 'temurin'\n  - name: Setting Permissions\n    run: chmod a+x gradlew\n  - name: Build with Gradle\n    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1\n    with:\n      arguments: build\n  - name: Test with Gradle\n    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1\n    with:\n      arguments: test\n  - name: Run Test Coverage\n    run: ./gradlew jacocoTestReport\n  - name: Jacoco\n    uses: cicirello/jacoco-badge-generator@v2.9.0\n    with:\n      jacoco-csv-file: build/reports/jacoco/test/jacocoTestReport.csv\n      fail-if-branches-less-than: 100\n")),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"runs-n")," specifies that the following commands will be run an ubuntu machine. "),Object(o.b)("p",{parentName:"li"},"2.1.a. ",Object(o.b)("strong",{parentName:"p"},'"actions/checkout@v3"'),': This is a popular "Action" that is used to checkout the latest version of the project code from the repo.'),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Actions & Marketplace")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'GitHub Marketplace is where you can share your apps and actions publicly with all GitHub users. GitHub Marketplace connects you to developers who want to extend and improve their GitHub workflows. You can list free and paid tools for developers to use in GitHub Marketplace. Anytime you want to accomplish a step in your workflow, chances are there is already an "Action" available through the Marketplac that you can just grab and use without the need to re-invent the wheel!'))),Object(o.b)("p",{parentName:"li"},"2.1.b. ",Object(o.b)("strong",{parentName:"p"},"actions/setup-java@v3"),": This action facilitates compilation of the java project code which was checked out in the previous step. The Java version is set to 11 here."),Object(o.b)("p",{parentName:"li"},"2.1.c. ",Object(o.b)("strong",{parentName:"p"},'"Setting Permissions":')," ",Object(o.b)("inlineCode",{parentName:"p"},"chmod")," linux command is used to make sure the ",Object(o.b)("inlineCode",{parentName:"p"},"gradlew")," script is executable."),Object(o.b)("p",{parentName:"li"},"2.1.d. build with ",Object(o.b)("strong",{parentName:"p"},"gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1"),": Using this action, we build our Java gradle project. This has the same effect as running the command ",Object(o.b)("inlineCode",{parentName:"p"},"gradlew build"),"."),Object(o.b)("p",{parentName:"li"},"2.1.e. test with ",Object(o.b)("strong",{parentName:"p"},"gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1"),": Next, we use the same action this time to run the tests. This step is the step that runs all the unit tests in the ",Object(o.b)("inlineCode",{parentName:"p"},"ArrayUtilsTest.java")," file. If any of the tests fail, the workflow is interrupted at this step and no further steps will be tried. "),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-danger alert alert--danger"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"All Tests Must Pass")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'This step effectively makes sure that in orde to get to the netx steps of this workflow, there must be NO failing test cases, hence preventing deploying/delivering "faulty" code into production stages.'))),Object(o.b)("p",{parentName:"li"},"2.1.f. ",Object(o.b)("strong",{parentName:"p"},'"Run Test Coverage"'),": This step runs the command ",Object(o.b)("inlineCode",{parentName:"p"},"./gradlew jacocoTestReport")," effectively running Jacoco to produce code coverage report(s)."),Object(o.b)("p",{parentName:"li"},"2.1.g. ",Object(o.b)("strong",{parentName:"p"},"cicirello/",Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"mailto:jacoco-badge-generator@v2.9.0"}),"jacoco-badge-generator@v2.9.0")),": With the help of this action found on the Marketplace, we can analyze the generated reports and set minimum required thresholds for different coverage criteria. In our case, we set ",Object(o.b)("inlineCode",{parentName:"p"},"80%")," branch coverage (BC) minimum requirement. If the test cases achieve anything less than ",Object(o.b)("inlineCode",{parentName:"p"},"80%")," BC on the project source code, the workflow is interrupted."),Object(o.b)("p",{parentName:"li"},"2.2 ",Object(o.b)("strong",{parentName:"p"},"build_and_publish_docker_image:")," The overall goal in this job is to publish the code to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/"}),"Docker hub")," as a container image. We again choose to run the steps on latest version of ",Object(o.b)("inlineCode",{parentName:"p"},"ubuntu"),". We also specify that this job need successful execution & completion of the ",Object(o.b)("inlineCode",{parentName:"p"},"build_and_test")," job."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"build_and_publish_docker_image:\nname: Publish to Docker Hub\nruns-on: ubuntu-latest\nneeds: [build_and_test]\n\n\nsteps:\n  - uses: actions/checkout@v3\n  - name: Login to Docker Hub\n    run: docker login -u ${{ secrets.DOCKER_USERNAME }} -p ${{ secrets.DOCKER_PASSWORD }}\n  - name: Build Container image\n    run: docker build -t ${{ secrets.DOCKER_REPO }}:latest .\n  - name: Publish Docker image\n    run: docker push ${{ secrets.DOCKER_REPO }}\n")),Object(o.b)("p",{parentName:"li"},"2.2.a. ",Object(o.b)("strong",{parentName:"p"},"actions/checkout@v3:")," check out the latest version of the ci-helloworld source code."),Object(o.b)("p",{parentName:"li"},"2.2.b ",Object(o.b)("strong",{parentName:"p"},"Login to Docker Hub:")," In order to create a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/resources/what-container/"}),"container image")," and publish it to docker hub, we need to login using the command ",Object(o.b)("inlineCode",{parentName:"p"},"docker login -u ${{ secrets.DOCKER_USERNAME }} -p ${{ secrets.DOCKER_PASSWORD }}"),":"),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Github Secrets")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Github secrets are encrypted environment variables that can be injected into your actions. A secret can not be seen once it have been created and they remain encrypted until they are used in a workflow. But even when they are used in a workflow they cannot be seen in the action logs since they are blurred out. They are thus suitable to be used to store sensitive information such as passwords and keys."))),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Create Github Secrets")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"First, if you do not have a docker hub account, go ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/"}),"https://hub.docker.com/")," and create one for free. Then, on Github, in the main page of your repo, go to ",Object(o.b)("inlineCode",{parentName:"p"},"Settings")," tab, then click on ",Object(o.b)("inlineCode",{parentName:"p"},"Secrets and variables")," in the left menu:"),Object(o.b)("p",{parentName:"div"},Object(o.b)("img",{src:a(203).default})),Object(o.b)("p",{parentName:"div"},"Next Click on ",Object(o.b)("inlineCode",{parentName:"p"},"Actions")," and using the ",Object(o.b)("inlineCode",{parentName:"p"},"New repository secret")," create three separate secrets:"),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"DOCKER_PASSWORD with value of whatever your docker hub password is."),Object(o.b)("li",{parentName:"ol"},"DOCKER_USERNAME with value of whatever your docker hub username is."),Object(o.b)("li",{parentName:"ol"},"DOCKER_REPO with value of ",Object(o.b)("inlineCode",{parentName:"li"},"docker_hub_user/ci-helloworld")," where ",Object(o.b)("inlineCode",{parentName:"li"},"docker_hub_user")," is your docker hub username.")),Object(o.b)("p",{parentName:"div"},Object(o.b)("img",{src:a(204).default})))),Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Docker and Container Image")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Docker is an open-source software designed to facilitate and simplify application development. It is a set of platform-as-a-service products that create isolated virtualized environments for building, deploying, and testing applications.",Object(o.b)("br",{parentName:"p"}),"\n","A Docker container image is a lightweight, standalone, executable package of software that includes ",Object(o.b)("em",{parentName:"p"},"everything")," needed to run an application: source code, dependencies, libraries, runtime, system tools, system libraries and settings."))),Object(o.b)("p",{parentName:"li"},"2.2.c. ",Object(o.b)("strong",{parentName:"p"},"Build Container image:")," This step builds the image using the docker command ",Object(o.b)("inlineCode",{parentName:"p"},"docker build -t ${{ secrets.DOCKER_REPO }}:latest")," where ${{ secrets.DOCKER_REPO }} is replaced by the secret's value you created in the previous step. ",Object(o.b)("inlineCode",{parentName:"p"},":latest"),' gives a tagname to this image called "latest" (i.e., the latest build of the image)'),Object(o.b)("p",{parentName:"li"},"2.2.d. ",Object(o.b)("strong",{parentName:"p"},"Publish Docker image:")," This is the very last step of the ",Object(o.b)("inlineCode",{parentName:"p"},"build_and_publish_docker_image")," job as well as the last step of the our entire workflow!"),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"YAYYYY!!! Congrats! You made it all the way to the end!")))))}l.isMDXComponent=!0}}]);