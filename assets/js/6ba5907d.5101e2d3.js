(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9989],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},2083:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},60204:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},10630:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},37793:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(67294),a=n(73727),i=n(11368),o=n(35096),l=n(84487);const d=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),c=n(67023),u=Object.defineProperty,p=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&w(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&w(e,n,t[n]);return e};var y=function(e){var t,n=e,{isNavLink:u,to:w,href:y,activeClassName:k,isActive:b,"data-noBrokenLinkCheck":x,autoAddBaseUrl:T=!0}=n,N=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,i.Z)(),{withBaseUrl:P}=(0,s.C)(),E=(0,r.useContext)(d),C=w||y,M=(0,o.Z)(C),W=null==C?void 0:C.replace("pathname://","");let Z=void 0!==W?(j=W,T&&(e=>e.startsWith("/"))(j)?P(j):j):void 0;var j;Z&&M&&(Z=(0,c.applyTrailingSlash)(Z,O));const I=(0,r.useRef)(!1),B=u?a.OL:a.rU,_=l.Z.canUseIntersectionObserver;let D;(0,r.useEffect)((()=>(!_&&M&&null!=Z&&window.docusaurus.prefetch(Z),()=>{_&&D&&D.disconnect()})),[Z,_,M]);const S=null!==(t=null==Z?void 0:Z.startsWith("#"))&&void 0!==t&&t,A=!Z||!M||S;return Z&&M&&!S&&!x&&E.collectLink(Z),A?r.createElement("a",v(v({href:Z},C&&!M&&{target:"_blank",rel:"noopener noreferrer"}),N)):r.createElement(B,v((G=v({},N),p(G,h({onMouseEnter:()=>{I.current||null==Z||(window.docusaurus.preload(Z),I.current=!0)},innerRef:e=>{var t,n;_&&e&&M&&(t=e,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))})),D.observe(t))},to:Z||""}))),u&&{isActive:b,activeClassName:k}));var G}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(a=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(n,r)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},75228:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return k},contentTitle:function(){return b},metadata:function(){return x},toc:function(){return T},default:function(){return O}});var r=n(3905),a=n(44035),i=n(29415),o=n(10630),l=n(37793),d=n(2083),s=n(60204),c=n(31217),u=n(22425),p=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))w.call(t,n)&&v(e,n,t[n]);return e};const k={id:"modal-window",title:"ModalWindow"},b=void 0,x={unversionedId:"development/ui-development/ui-components/containers/modal-window",id:"development/ui-development/ui-components/containers/modal-window",isDocsHomePage:!1,title:"ModalWindow",description:"The ModalWindow is a Container type widget that displays a window and blocks touch events to the underlying view and widgets. The ModalWindow consists of a background Image and a Box that acts as a shade over the underlying view and widgets with adjustable alpha. The ModalWindow will fill up the entire screen and should always be added as the last element such that it is always on top of all other elements.",source:"@site/docs/development/ui-development/ui-components/containers/modal-window.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/modal-window",permalink:"/4.14/docs/development/ui-development/ui-components/containers/modal-window",version:"current",frontMatter:{id:"modal-window",title:"ModalWindow"},sidebar:"docs",previous:{title:"ListLayout",permalink:"/4.14/docs/development/ui-development/ui-components/containers/list-layout"},next:{title:"ScrollList",permalink:"/4.14/docs/development/ui-development/ui-components/containers/scroll-list"}},T=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],N={toc:T};function O(e){var t,n=e,{components:p}=n,v=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&w.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=y(y({},N),v),h(t,m({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The ModalWindow is a ",(0,r.kt)("a",y({parentName:"p"},{href:"container"}),"Container")," type widget that displays a window and blocks touch events to the underlying view and widgets. The ModalWindow consists of a background ",(0,r.kt)("a",y({parentName:"p"},{href:"../images/image"}),"Image")," and a ",(0,r.kt)("a",y({parentName:"p"},{href:"../shapes/box"}),"Box")," that acts as a shade over the underlying view and widgets with adjustable alpha. The ModalWindow will fill up the entire screen and should always be added as the last element such that it is always on top of all other elements."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/modal-window/widget-appearance.gif",mdxType:"Figure"},"ModalWindow running in the simulator"),(0,r.kt)("h2",y({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The ModalWindow can be found in the Containers widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/modal-window/widget-group.png",mdxType:"Figure"},"ModalWindow in TouchGFX Designer"),(0,r.kt)("h2",y({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a ModalWindow in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Modal Image Location")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Y")," specify the top left corner of the image within the ModalWindow.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"W")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"H")," specify the width and height of the container within the ModalWindow.",(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"InlineNote"},"The size of the container within the ModalWindow is taken from the size of the associated image and cannot be altered except by changing the image."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget.",(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Window Image")," specifies which image the ModalWindow should use.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Shade Color")," specifies the color of the overlay shade.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Shade Alpha")," specifies the transparency of the overlay shade.",(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))))),(0,r.kt)("h2",y({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the ModalWindow are described in the following sections."),(0,r.kt)("h3",y({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",y({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"The ModalWindow does not emit any triggers."),(0,r.kt)("h2",y({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A ModalWindow is a ",(0,r.kt)("a",y({parentName:"p"},{href:"container"}),"Container")," type that consists of a ",(0,r.kt)("a",y({parentName:"p"},{href:"../shapes/box"}),"Box"),", a ",(0,r.kt)("a",y({parentName:"p"},{href:"container"}),"Container")," and an ",(0,r.kt)("a",y({parentName:"p"},{href:"../images/image"}),"Image"),". The ModalWindow does not per default appear in the draw chain. Therefore, the performance is mostly dependent on the childrens drawing performance."),(0,r.kt)("p",null,"For more general details on drawing performance, read the ",(0,r.kt)("a",y({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",y({},{id:"examples"}),"Examples"),(0,r.kt)("h3",y({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a ModalWindow."),(0,r.kt)(u.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n#include <touchgfx/Color.hpp>\n\nmainViewBase::mainViewBase() :\n    buttonCallback(this, &mainViewBase::buttonCallbackHandler)\n{\n    modalWindow.setBackground(touchgfx::BitmapId(BITMAP_BLUE_BACKGROUNDS_MAIN_BG_320X240PX_ID), 80, 16);\n    modalWindow.setShadeColor(touchgfx::Color::getColorFrom24BitRGB(0, 0, 0));\n    modalWindow.setShadeAlpha(150);\n    modalWindow.hide();\n\n    add(modalWindow);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the ModalWindow class in user code. Remember to force a redraw by calling ",(0,r.kt)(d.Z,{mdxType:"InlineCode"},"modalWindow.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",y({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the ModalWindow, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/modal-window-example.png",mdxType:"Figure"},"ModalWindow Example UI template in TouchGFX Designer"),(0,r.kt)("h2",y({},{id:"api-reference"}),"API Reference"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_modal_window",mdxType:"Link"},"API reference for the ModalWindow class"))))}O.isMDXComponent=!0}}]);