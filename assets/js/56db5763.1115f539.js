(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6094],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(u,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44035:function(e,t,n){"use strict";var r=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,o.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:i,src:a})),r.createElement("p",null,e.children))}},88678:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},93054:function(e,t,n){"use strict";var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=a},82985:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){return r.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=o},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(67294),o=n(73727),i=n(11368),a=n(35096),l=n(84487);const u=(0,r.createContext)({collectLink:()=>{}});var c=n(25026),s=n(67023),p=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&y(e,n,t[n]);if(d)for(var n of d(t))f.call(t,n)&&y(e,n,t[n]);return e};var w=function(e){var t,n=e,{isNavLink:p,to:y,href:w,activeClassName:b,isActive:T,"data-noBrokenLinkCheck":k,autoAddBaseUrl:x=!0}=n,S=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:j}}=(0,i.Z)(),{withBaseUrl:O}=(0,c.C)(),F=(0,r.useContext)(u),E=y||w,C=(0,a.Z)(E),P=null==E?void 0:E.replace("pathname://","");let G=void 0!==P?(X=P,x&&(e=>e.startsWith("/"))(X)?O(X):X):void 0;var X;G&&C&&(G=(0,s.applyTrailingSlash)(G,j));const D=(0,r.useRef)(!1),M=p?o.OL:o.rU,Z=l.Z.canUseIntersectionObserver;let I;(0,r.useEffect)((()=>(!Z&&C&&null!=G&&window.docusaurus.prefetch(G),()=>{Z&&I&&I.disconnect()})),[G,Z,C]);const N=null!==(t=null==G?void 0:G.startsWith("#"))&&void 0!==t&&t,A=!G||!C||N;return G&&C&&!N&&!k&&F.collectLink(G),A?r.createElement("a",v(v({href:G},E&&!C&&{target:"_blank",rel:"noopener noreferrer"}),S)):r.createElement(M,v((U=v({},S),h(U,m({onMouseEnter:()=>{D.current||null==G||(window.docusaurus.preload(G),D.current=!0)},innerRef:e=>{var t,n;Z&&e&&C&&(t=e,n=()=>{null!=G&&window.docusaurus.prefetch(G)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),n())}))})),I.observe(t))},to:G||""}))),p&&{isActive:T,activeClassName:b}));var U}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(11368),o=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(r)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,r)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(o=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(n,r)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},16310:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return y},metadata:function(){return v},toc:function(){return w},default:function(){return T}});var r=n(3905),o=n(44035),i=n(82985),a=n(93054),l=n(31217),u=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&d(e,n,t[n]);return e};const f={id:"tutorial-01",title:"Tutorial 1: Trying Out the Examples"},y=void 0,v={unversionedId:"tutorials/tutorial-01",id:"tutorials/tutorial-01",isDocsHomePage:!1,title:"Tutorial 1: Trying Out the Examples",description:"Follow this tutorial to learn the very basics of TouchGFX. You will see how to install TouchGFX and how to run the provided examples on TouchGFX Simulator and on an STM32 Evaluation Kit.",source:"@site/docs/tutorials/tutorial-01.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-01",permalink:"/4.14/docs/tutorials/tutorial-01",version:"current",frontMatter:{id:"tutorial-01",title:"Tutorial 1: Trying Out the Examples"},sidebar:"docs",previous:{title:"Cookie Policy",permalink:"/4.14/docs/miscellaneous/cookie-policy"},next:{title:"Tutorial 2: Creating Your Own Application",permalink:"/4.14/docs/tutorials/tutorial-02"}},w=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Running an Example Using TouchGFX Simulator",id:"running-an-example-using-touchgfx-simulator",children:[{value:"Selecting a UI Template",id:"selecting-a-ui-template",children:[]},{value:"Creating a Project",id:"creating-a-project",children:[]},{value:"Running TouchGFX Simulator",id:"running-touchgfx-simulator",children:[]}]},{value:"Running an Example on an STM32 Evaluation Kit",id:"running-an-example-on-an-stm32-evaluation-kit",children:[]}],b={toc:w};function T(e){var t,n=e,{components:u}=n,d=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=g(g({},b),d),c(t,s({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Follow this tutorial to learn the very basics of TouchGFX. You will see how to install TouchGFX and how to run the provided examples on TouchGFX Simulator and on an STM32 Evaluation Kit."),(0,r.kt)("h2",g({},{id:"getting-started"}),"Getting Started"),(0,r.kt)("p",null,"First of all make sure you have TouchGFX Designer installed. Read more on how to download and install TouchGFX ",(0,r.kt)("a",g({parentName:"p"},{href:"../introduction/installation"}),"here"),"."),(0,r.kt)("h2",g({},{id:"running-an-example-using-touchgfx-simulator"}),"Running an Example Using TouchGFX Simulator"),(0,r.kt)("p",null,"TouchGFX has a lot of UI examples available through TouchGFX Designer. These examples can help you learn more about specific TouchGFX topics, as they all focus on one particular TouchGFX topic or widget."),(0,r.kt)("h3",g({},{id:"selecting-a-ui-template"}),"Selecting a UI Template"),(0,r.kt)("p",null,"You can use the examples as starting points for your own projects or use them as reference examples. The examples can run either on your PC using TouchGFX Simulator, on a STM32 Evaluation Kit or even on your custom STM32 based hardware."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'To create a new example project simply select "File -> New" in the top bar menu in TouchGFX Designer or ',(0,r.kt)(i.Z,{mdxType:"Shortcut"},"CTRL + N")," on your keyboard."),(0,r.kt)("li",{parentName:"ul"},'Click the "Change" button in the "UI Template" section to select between all the available examples.')),(0,r.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-01/selecting-a-ui-template.png",mdxType:"Figure"},"Selecting a UI Template"),(0,r.kt)("p",null,'For this step in the tutorial, we will try out the examples in the Simulator, so leave the "Application Template" unchanged (with the "Simulator" Application Template selected).'),(0,r.kt)("p",null,"TouchGFX Designer will now show you a window with the available UI examples."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Select the "AnimatedImage Example".'),(0,r.kt)("li",{parentName:"ul"},'Click the blue "Select" button in the bottom.')),(0,r.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-01/selecting-animated-image.png",mdxType:"Figure"},"Selecting AnimatedImage Example"),(0,r.kt)("h3",g({},{id:"creating-a-project"}),"Creating a Project"),(0,r.kt)("p",null,'After you have clicked "Select", TouchGFX Designer is ready to create a project for you. Here we have given the project the name "MyAnimatedImageExample".'),(0,r.kt)("p",null,'Click "Create" to create the project. TouchGFX Designer will now combine the UI Template you selected with the "Simulator" Application Template to create a complete project. This process takes various amounts of time, depending on your download speed.'),(0,r.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-01/creating-the-project.png",mdxType:"Figure"},"Creating the project"),(0,r.kt)("h3",g({},{id:"running-touchgfx-simulator"}),"Running TouchGFX Simulator"),(0,r.kt)("p",null,'TouchGFX Designer is now showing the combined project. To run the Windows simulator, click the "Run Simulator" button in the upper right part or ',(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F5")," on your keyboard."),(0,r.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-01/the-project-is-ready.png",mdxType:"Figure"},"The project is ready"),(0,r.kt)("p",null,'TouchGFX Simulator is now showing as a regular Windows application. The titlebar shows the application name. Click the "Start" button to interact with the example.'),(0,r.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-01/the-touchgfx-simulator.png",mdxType:"Figure"},"The TouchGFX Simulator"),(0,r.kt)("p",null,"Before moving on with the tutorial you can try out some more examples if you want. Just create a new project and select a new UI Template as before."),(0,r.kt)("h2",g({},{id:"running-an-example-on-an-stm32-evaluation-kit"}),"Running an Example on an STM32 Evaluation Kit"),(0,r.kt)("p",null,"In this step you will learn how to start a project for a STM32F746-Disco board and how to run one of the TouchGFX examples on that board. If you have no STM32 Evaluation Kit you can simply skip this step. If you have a different SMT32 Evaluation Kit have a look at the list of supported boards and see if you can find it there."),(0,r.kt)("p",null,'TouchGFX Designer comes with a list of premade Application Templates that matches a wide range of STM32 Evaluation Kit. To base your project on such a template, start out by creating a new project in TouchGFX Designer, by clicking "File -> New" in the top bar menu or ',(0,r.kt)(i.Z,{mdxType:"Shortcut"},"CTRL + N")," on your keyboard."),(0,r.kt)("p",null,'Select the "AnimatedImage Example" as UI Template (if it is not already selected). Click the "Application Template" section to select another Application Template. The default Application Template "Simulator" will only allow you to run on Windows.'),(0,r.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-01/selecting-an-app-template.png",mdxType:"Figure"},"Selecting an Application Template"),(0,r.kt)("p",null,'For this step we will use the STM32F746-Disco board, so click on the "STM32F746G Discovery Kit" and click "Select".'),(0,r.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-01/select-disco-kit.png",mdxType:"Figure"},"Select Discovery kit"),(0,r.kt)("p",null,'You are now ready to create the project. You can change the application name if you like. Here we have changed it to "MyAnimatedImageExample746". Click the "Create" button to continue.'),(0,r.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-01/create-the-final-project.png",mdxType:"Figure"},"Create the project"),(0,r.kt)("p",null,'The look of the project is similar to what we saw in the previous step. The only difference is that we now also have a "Run Target" button next to the "Run Simulator" button. When you press this button (or ',(0,r.kt)(i.Z,{mdxType:"Shortcut"},"F6"),' on your keyboard), TouchGFX Designer compiles your project using the GNU ARM C-compiler and flashes the application to your target. This process can take minutes, depending on your computer speed and the complexity of the application. The progress will be output in the status bar in the bottom of TouchGFX Designer. You can press the "Detailed Log" (or ',(0,r.kt)(i.Z,{mdxType:"Shortcut"},"ALT + L")," on your keyboard) button if you want more details on the build and flashing step."),(0,r.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-01/the-project-is-ready-2.png",mdxType:"Figure"},"The project is ready"),(0,r.kt)("p",null,'TouchGFX Designer will write "Flashing Done" in the status bar when flashing is completed. You should now see the application running on your board.'),(0,r.kt)(a.Z,{mdxType:"Note"},"You will need to have Cube Programmer / ST-Link Utility installed to flash a target:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),(0,r.kt)("li",null,(0,r.kt)(l.Z,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK Utility")))),(0,r.kt)("p",null,'If you click the "Browse Code" button in the bottom right, TouchGFX Designer will open a file browser showing the directory where the new project is located. Navigating to ',(0,r.kt)("inlineCode",{parentName:"p"},"build\\bin")," you can see the following files:"),(0,r.kt)(o.Z,{imageSource:"/img/tutorials/tutorial-01/the-projects-binary-files.png",mdxType:"Figure"},"The binary files of the project"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"target.hex")," file is the STM32 application for your board. This is the file TouchGFX Designer just programmed to your board."),(0,r.kt)("p",null,"You can also manually flash your board using Cube Programmer or ST-Link Utility. See the ",(0,r.kt)("a",g({parentName:"p"},{href:"../development/ui-development/working-with-touchgfx/compiling-and-flashing"}),"Compiling & Flashing page")," for more details."))}T.isMDXComponent=!0}}]);