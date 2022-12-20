"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6094],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return d}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(o),m=r,d=p["".concat(u,".").concat(m)]||p[m]||h[m]||a;return o?n.createElement(d,i(i({ref:t},s),{},{components:o})):n.createElement(d,i({ref:t},s))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},44035:function(e,t,o){var n=o(67294),r=o(25026);t.Z=function(e){const t=e.noShadow||!1,o=e.width,a=e.height,i=(0,r.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:o,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:o,height:a,src:i})),n.createElement("p",null,e.children))}},88678:function(e,t,o){var n=o(67294);class r extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},93054:function(e,t,o){var n=o(67294),r=o(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(r.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=i},82985:function(e,t,o){var n=o(67294);class r extends n.Component{render(){return n.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=r},92305:function(e,t,o){o.r(t),o.d(t,{assets:function(){return T},contentTitle:function(){return y},default:function(){return v},frontMatter:function(){return f},metadata:function(){return w},toc:function(){return b}});var n=o(3905),r=o(44035),a=o(82985),i=o(93054),l=o(39130),u=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,o)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))h.call(t,o)&&d(e,o,t[o]);if(p)for(var o of p(t))m.call(t,o)&&d(e,o,t[o]);return e};const f={id:"tutorial-01",title:"Tutorial 1: Trying Out the Examples"},y=void 0,w={unversionedId:"tutorials/tutorial-01",id:"tutorials/tutorial-01",title:"Tutorial 1: Trying Out the Examples",description:"",source:"@site/docs/tutorials/tutorial-01.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-01",permalink:"/4.14/docs/tutorials/tutorial-01",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-01",title:"Tutorial 1: Trying Out the Examples"},sidebar:"docs",previous:{title:"3rd Party Components in TouchGFX",permalink:"/4.14/docs/miscellaneous/3rd-party-components-in-touchgfx"},next:{title:"Tutorial 2: Creating Your Own Application",permalink:"/4.14/docs/tutorials/tutorial-02"}},T={},b=[{value:"Getting Started",id:"getting-started",level:2},{value:"Running an Example Using TouchGFX Simulator",id:"running-an-example-using-touchgfx-simulator",level:2},{value:"Selecting a UI Template",id:"selecting-a-ui-template",level:3},{value:"Creating a Project",id:"creating-a-project",level:3},{value:"Running TouchGFX Simulator",id:"running-touchgfx-simulator",level:3},{value:"Running an Example on an STM32 Evaluation Kit",id:"running-an-example-on-an-stm32-evaluation-kit",level:2}],k={toc:b};function v(e){var t,o=e,{components:u}=o,d=((e,t)=>{var o={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&m.call(e,n)&&(o[n]=e[n]);return o})(o,["components"]);return(0,n.kt)("wrapper",(t=g(g({},k),d),c(t,s({components:u,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Follow this tutorial to learn the very basics of TouchGFX. You will see how to install TouchGFX and how to run the provided examples on TouchGFX Simulator and on an STM32 Evaluation Kit."),(0,n.kt)("h2",g({},{id:"getting-started"}),"Getting Started"),(0,n.kt)("p",null,"First of all make sure you have TouchGFX Designer installed. Read more on how to download and install TouchGFX ",(0,n.kt)("a",g({parentName:"p"},{href:"../introduction/installation"}),"here"),"."),(0,n.kt)("h2",g({},{id:"running-an-example-using-touchgfx-simulator"}),"Running an Example Using TouchGFX Simulator"),(0,n.kt)("p",null,"TouchGFX has a lot of UI examples available through TouchGFX Designer. These examples can help you learn more about specific TouchGFX topics, as they all focus on one particular TouchGFX topic or widget."),(0,n.kt)("h3",g({},{id:"selecting-a-ui-template"}),"Selecting a UI Template"),(0,n.kt)("p",null,"You can use the examples as starting points for your own projects or use them as reference examples. The examples can run either on your PC using TouchGFX Simulator, on a STM32 Evaluation Kit or even on your custom STM32 based hardware."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'To create a new example project simply select "File -> New" in the top bar menu in TouchGFX Designer or ',(0,n.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + N")," on your keyboard."),(0,n.kt)("li",{parentName:"ul"},'Click the "Change" button in the "UI Template" section to select between all the available examples.')),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-01/selecting-a-ui-template.webp",mdxType:"Figure"},"Selecting a UI Template"),(0,n.kt)("p",null,'For this step in the tutorial, we will try out the examples in the Simulator, so leave the "Application Template" unchanged (with the "Simulator" Application Template selected).'),(0,n.kt)("p",null,"TouchGFX Designer will now show you a window with the available UI examples."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Select the "AnimatedImage Example".'),(0,n.kt)("li",{parentName:"ul"},'Click the blue "Select" button in the bottom.')),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-01/selecting-animated-image.webp",mdxType:"Figure"},"Selecting AnimatedImage Example"),(0,n.kt)("h3",g({},{id:"creating-a-project"}),"Creating a Project"),(0,n.kt)("p",null,'After you have clicked "Select", TouchGFX Designer is ready to create a project for you. Here we have given the project the name "MyAnimatedImageExample".'),(0,n.kt)("p",null,'Click "Create" to create the project. TouchGFX Designer will now combine the UI Template you selected with the "Simulator" Application Template to create a complete project. This process takes various amounts of time, depending on your download speed.'),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-01/creating-the-project.webp",mdxType:"Figure"},"Creating the project"),(0,n.kt)("h3",g({},{id:"running-touchgfx-simulator"}),"Running TouchGFX Simulator"),(0,n.kt)("p",null,'TouchGFX Designer is now showing the combined project. To run the Windows simulator, click the "Run Simulator" button in the upper right part or ',(0,n.kt)(a.Z,{mdxType:"Shortcut"},"F5")," on your keyboard."),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-01/the-project-is-ready.webp",mdxType:"Figure"},"The project is ready"),(0,n.kt)("p",null,'TouchGFX Simulator is now showing as a regular Windows application. The titlebar shows the application name. Click the "Start" button to interact with the example.'),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-01/the-touchgfx-simulator.webp",mdxType:"Figure"},"The TouchGFX Simulator"),(0,n.kt)("p",null,"Before moving on with the tutorial you can try out some more examples if you want. Just create a new project and select a new UI Template as before."),(0,n.kt)("h2",g({},{id:"running-an-example-on-an-stm32-evaluation-kit"}),"Running an Example on an STM32 Evaluation Kit"),(0,n.kt)("p",null,"In this step you will learn how to start a project for a STM32F746-Disco board and how to run one of the TouchGFX examples on that board. If you have no STM32 Evaluation Kit you can simply skip this step. If you have a different SMT32 Evaluation Kit have a look at the list of supported boards and see if you can find it there."),(0,n.kt)("p",null,'TouchGFX Designer comes with a list of premade Application Templates that matches a wide range of STM32 Evaluation Kit. To base your project on such a template, start out by creating a new project in TouchGFX Designer, by clicking "File -> New" in the top bar menu or ',(0,n.kt)(a.Z,{mdxType:"Shortcut"},"CTRL + N")," on your keyboard."),(0,n.kt)("p",null,'Select the "AnimatedImage Example" as UI Template (if it is not already selected). Click the "Application Template" section to select another Application Template. The default Application Template "Simulator" will only allow you to run on Windows.'),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-01/selecting-an-app-template.webp",mdxType:"Figure"},"Selecting an Application Template"),(0,n.kt)("p",null,'For this step we will use the STM32F746-Disco board, so click on the "STM32F746G Discovery Kit" and click "Select".'),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-01/select-disco-kit.webp",mdxType:"Figure"},"Select Discovery kit"),(0,n.kt)("p",null,'You are now ready to create the project. You can change the application name if you like. Here we have changed it to "MyAnimatedImageExample746". Click the "Create" button to continue.'),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-01/create-the-final-project.webp",mdxType:"Figure"},"Create the project"),(0,n.kt)("p",null,'The look of the project is similar to what we saw in the previous step. The only difference is that we now also have a "Run Target" button next to the "Run Simulator" button. When you press this button (or ',(0,n.kt)(a.Z,{mdxType:"Shortcut"},"F6"),' on your keyboard), TouchGFX Designer compiles your project using the GNU ARM C-compiler and flashes the application to your target. This process can take minutes, depending on your computer speed and the complexity of the application. The progress will be output in the status bar in the bottom of TouchGFX Designer. You can press the "Detailed Log" (or ',(0,n.kt)(a.Z,{mdxType:"Shortcut"},"ALT + L")," on your keyboard) button if you want more details on the build and flashing step."),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-01/the-project-is-ready-2.webp",mdxType:"Figure"},"The project is ready"),(0,n.kt)("p",null,'TouchGFX Designer will write "Flashing Done" in the status bar when flashing is completed. You should now see the application running on your board.'),(0,n.kt)(i.Z,{mdxType:"Note"},"You will need to have Cube Programmer / ST-Link Utility installed to flash a target:",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,n.kt)("li",null,(0,n.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK Utility")))),(0,n.kt)("p",null,'If you click the "Browse Code" button in the bottom right, TouchGFX Designer will open a file browser showing the directory where the new project is located. Navigating to ',(0,n.kt)("inlineCode",{parentName:"p"},"build\\bin")," you can see the following files:"),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-01/the-projects-binary-files.webp",mdxType:"Figure"},"The binary files of the project"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"target.hex")," file is the STM32 application for your board. This is the file TouchGFX Designer just programmed to your board."),(0,n.kt)("p",null,"You can also manually flash your board using Cube Programmer or ST-Link Utility. See the ",(0,n.kt)("a",g({parentName:"p"},{href:"../development/ui-development/working-with-touchgfx/compiling-and-flashing"}),"Compiling & Flashing page")," for more details."))}v.isMDXComponent=!0}}]);