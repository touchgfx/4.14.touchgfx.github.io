(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2652],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var i=n(67294);class r extends i.Component{render(){return i.createElement("div",{class:"code-header"},i.createElement("div",null,i.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){"use strict";var i=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,a=(0,r.Z)(e.imageSource);return t?i.createElement("div",{class:"figure noshadow"},i.createElement("a",{href:a,target:"_blank"},i.createElement("img",{width:n,height:o,src:a})),i.createElement("p",null,e.children)):i.createElement("div",{class:"figure"},i.createElement("a",{href:a,target:"_blank"},i.createElement("img",{width:n,height:o,src:a})),i.createElement("p",null,e.children))}},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var i=n(67294),r=n(73727),o=n(11368),a=n(35096),s=n(84487);const l=(0,i.createContext)({collectLink:()=>{}});var c=n(25026),u=n(67023),d=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&b(e,n,t[n]);if(h)for(var n of h(t))g.call(t,n)&&b(e,n,t[n]);return e};var y=function(e){var t,n=e,{isNavLink:d,to:b,href:y,activeClassName:k,isActive:w,"data-noBrokenLinkCheck":T,autoAddBaseUrl:O=!0}=n,x=((e,t)=>{var n={};for(var i in e)f.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&h)for(var i of h(e))t.indexOf(i)<0&&g.call(e,i)&&(n[i]=e[i]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P}}=(0,o.Z)(),{withBaseUrl:N}=(0,c.C)(),E=(0,i.useContext)(l),j=b||y,_=(0,a.Z)(j),F=null==j?void 0:j.replace("pathname://","");let G=void 0!==F?(S=F,O&&(e=>e.startsWith("/"))(S)?N(S):S):void 0;var S;G&&_&&(G=(0,u.applyTrailingSlash)(G,P));const X=(0,i.useRef)(!1),A=d?r.OL:r.rU,B=s.Z.canUseIntersectionObserver;let C;(0,i.useEffect)((()=>(!B&&_&&null!=G&&window.docusaurus.prefetch(G),()=>{B&&C&&C.disconnect()})),[G,B,_]);const I=null!==(t=null==G?void 0:G.startsWith("#"))&&void 0!==t&&t,M=!G||!_||I;return G&&_&&!I&&!T&&E.collectLink(G),M?i.createElement("a",v(v({href:G},j&&!_&&{target:"_blank",rel:"noopener noreferrer"}),x)):i.createElement(A,v((Z=v({},x),p(Z,m({onMouseEnter:()=>{X.current||null==G||(window.docusaurus.preload(G),X.current=!0)},innerRef:e=>{var t,n;B&&e&&_&&(t=e,n=()=>{null!=G&&window.docusaurus.prefetch(G)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())}))})),C.observe(t))},to:G||""}))),d&&{isActive:w,activeClassName:k}));var Z}},35096:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,{b:function(){return i},Z:function(){return r}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var i=n(11368),r=n(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+a:a}(t,e,n,i)}}function a(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),i="/"===n?"/":(r=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));var r;return e.replace(n,i)}},67023:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return i(r).default}});var o=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return i(o).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},99884:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return b},toc:function(){return v},default:function(){return k}});var i=n(3905),r=n(31217),o=n(44035),a=n(22425),s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"graphics-engine",title:"Graphics Engine"},g=void 0,b={unversionedId:"basic-concepts/graphics-engine",id:"basic-concepts/graphics-engine",isDocsHomePage:!1,title:"Graphics Engine",description:"TouchGFX graphics engine's main responsibility is drawing graphics on the display of an embedded device.",source:"@site/docs/basic-concepts/graphics-engine.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/graphics-engine",permalink:"/4.14/docs/basic-concepts/graphics-engine",version:"current",frontMatter:{id:"graphics-engine",title:"Graphics Engine"},sidebar:"docs",previous:{title:"Framebuffer",permalink:"/4.14/docs/basic-concepts/framebuffer"},next:{title:"Main Loop",permalink:"/4.14/docs/basic-concepts/rendering"}},v=[{value:"Scene model",id:"scene-model",children:[]},{value:"Manipulate the model",id:"manipulate-the-model",children:[]},{value:"Issue drawing commands",id:"issue-drawing-commands",children:[]},{value:"Main Loop",id:"main-loop",children:[]},{value:"Platform adaptibility",id:"platform-adaptibility",children:[]}],y={toc:v};function k(e){var t,n=e,{components:s}=n,m=((e,t)=>{var n={};for(var i in e)d.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&u)for(var i of u(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=h(h({},y),m),l(t,c({components:s,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"TouchGFX graphics engine's main responsibility is drawing graphics on the display of an embedded device."),(0,i.kt)("p",null,"This section will give an overview of what kind of graphics engine TouchGFX is and provide some background on why it is this way."),(0,i.kt)("h2",h({},{id:"scene-model"}),"Scene model"),(0,i.kt)("p",null,"Graphics engines can be divided into two main categories."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Immediate mode graphics engines")," provide an API that enables an application to directly draw things to the display. It is the responsibility of the application to ensure that the correct drawing operations are invoked at the right time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Retained mode graphics engines")," let the user manipulate an abstract model of the components being displayed. The engine takes care of translating this component model into the correct graphics drawing operations at the right times.")),(0,i.kt)("p",null,"TouchGFX follows the retained mode graphics principles. In short this means that TouchGFX provides a model that can be manipulated by the user and TouchGFX then takes care of translating from this model into an optimized set of rendering method calls."),(0,i.kt)(o.Z,{imageSource:"/img/basic-concepts/retained-mode-graphics2.svg",noShadow:"true",width:480,mdxType:"Figure"},"Retained mode graphics"),(0,i.kt)("p",null,"The benefits of TouchGFX being retained are many. Primary ones are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ease of use:")," A retained graphics engine is easy to use. The user adresses the configuration of components on screen, by invoking methods on the internal model and does not think in terms of actual drawing operations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Performance:")," TouchGFX analyses the scene model and optimizes the drawing calls needed to realize the model on screen. This includes deliberately not drawing hidden components, drawing and transferring only changed parts of components, managing framebuffers, and much more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"State management:")," TouchGFX keeps track of which part of the scene model is active. This in turn makes it easier for the user to optimize the scene model contents.")),(0,i.kt)("p",null,"The main drawback of TouchGFX adhering to the retained mode graphics scheme is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Memory consumption:")," Representing the scene model takes up some memory. TouchGFX reaches its performance levels, typically rendering 60 frames per second, by analyzing the scene model and optimizing the corresponding rendering done.\nGreat effort has gone into reducing the amount of memory used by the scene model of TouchGFX. In typical applications the amount of memory for this model is well below one kilobyte.")),(0,i.kt)("h2",h({},{id:"manipulate-the-model"}),"Manipulate the model"),(0,i.kt)("p",null,"The scene model consists of components."),(0,i.kt)(o.Z,{imageSource:"/img/basic-concepts/scene-model.svg",noShadow:"true",width:280,mdxType:"Figure"},"A tree of widgets"),(0,i.kt)("p",null,"Each of the components in the model has exactly one associated parent component.\nThe parent component itself is also part of the scene model. Such a model is widely referred to as a ",(0,i.kt)("a",h({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Tree_(data_structure)"}),"tree"),"."),(0,i.kt)("p",null,"We will often refer to a component in this tree as a UI component or a widget."),(0,i.kt)("p",null,"From the point of view of the application, the displayed graphics are updated by setting up and manipulating the widgets in the scene model.\nAn example setup of a button, with position, images and added to the scene model, is:"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"myButton.setXY(100,50);\nmyButton.setBitmaps(Bitmap(BITMAP_BUTTON_RELEASED_ID), Bitmap(BITMAP_BUTTON_PRESSED_ID));\nadd(myButton);\n")),(0,i.kt)("h2",h({},{id:"issue-drawing-commands"}),"Issue drawing commands"),(0,i.kt)("p",null,"Ultimately, when rendering the scene model, TouchGFX will utilize its drawing API. This drawing API has methods for drawing graphics primitives, such as boxes, images, texts, lines, polygons, textured triangles, etc."),(0,i.kt)("p",null,"As an example, the ",(0,i.kt)(r.Z,{to:"../development/ui-development/ui-components/buttons/button",mdxType:"Link"},"Button")," widget in TouchGFX, when rendered, uses the ",(0,i.kt)(r.Z,{to:"../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap",mdxType:"Link"},"drawPartialBitmap method")," for drawing images. The source code for the drawing of the button widget in TouchGFX looks close to:"),(0,i.kt)(a.Z,{mdxType:"CodeHeader"},"touchgfx/widgets/button.cpp"),(0,i.kt)("pre",null,(0,i.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"void Button::draw(const Rect& invalidatedArea) const\n{\n    // calculate the part of the bitmap to draw\n    api.drawPartialBitmap(bitmap, x, y, part, alpha);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"inspect the actual source in ",(0,i.kt)("inlineCode",{parentName:"em"},"touchgfx/widgets/button.cpp")," for details.")),(0,i.kt)("p",null,"TouchGFX includes optimized implementations of the drawing API.\nThe ",(0,i.kt)(r.Z,{to:"../api/classes/classtouchgfx_1_1_l_c_d#function-drawpartialbitmap",mdxType:"Link"},"drawPartialBitmap")," method for instance utilizes the underlying hardware (Chrom-ART if available) to draw the bitmap."),(0,i.kt)("p",null,"One can utilize these API drawing methods when extending the scene model with new types of widgets. See the section on creating your own ",(0,i.kt)(r.Z,{to:"../development/ui-development/touchgfx-engine-features/custom-widgets",mdxType:"Link"},"custom widget"),"."),(0,i.kt)("p",null,"The implementation of the drawing API methods is platform specific and highly optimized for each specific MCU."),(0,i.kt)("h2",h({},{id:"main-loop"}),"Main Loop"),(0,i.kt)("p",null,"The workings of many game engines, graphics engines and in particular TouchGFX can be thought of as an infinite loop."),(0,i.kt)("p",null,"Within the main loop of TouchGFX there are three main activities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Collect events:"),"\nCollect events from the touch screen, presses of physical buttons, messages from backend system, ..."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Update scene model:"),"\nReact to the collected events, updating the positions, animations, colors, images, ... of the model"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Render scene model:"),"\nRedraw the parts of the model that has been updated and make them appear on the display")),(0,i.kt)("p",null,"A diagrammatic version of the main loop is:"),(0,i.kt)(o.Z,{imageSource:"/img/basic-concepts/engine-cycle.png",noShadow:"true",width:320,mdxType:"Figure"},"Main loop"),(0,i.kt)("p",null,"Each execution of the main loop is denoted a tick of the application."),(0,i.kt)("h2",h({},{id:"platform-adaptibility"}),"Platform adaptibility"),(0,i.kt)("p",null,"As TouchGFX is designed for running on all STM32 embedded setups the above activities can be tailored."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The collection of events is handled by a dedicated abstraction layer. The tailoring of this layer is the subject of the section on ",(0,i.kt)(r.Z,{to:"../development/touchgfx-hal-development/touchgfx-al-development-introduction",mdxType:"Link"},"TouchGFX AL Development"),"."),(0,i.kt)("li",{parentName:"ul"},"The updating of the model is completely up to the application. The details on how to do this update is the subject of ",(0,i.kt)(r.Z,{to:"../development/ui-development/ui-development-introduction",mdxType:"Link"},"UI Development"),"."),(0,i.kt)("li",{parentName:"ul"},"The rendering of graphics to the framebuffer is handled by TouchGFX and will in general not need to be customized. The transferring of the pixels in the framebuffer to the display is platform specific, see ",(0,i.kt)("a",h({parentName:"li"},{href:"../development/board-bring-up/board-introduction"}),"Board Bring Up")," and ",(0,i.kt)("a",h({parentName:"li"},{href:"../development/touchgfx-hal-development/touchgfx-al-development-introduction"}),"TouchGFX AL Development")," for how to customize this to specific platforms.")),(0,i.kt)("p",null,"Read on to get more specifics on the main loop of TouchGFX."))}k.isMDXComponent=!0}}]);