(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4713],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},2083:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},60204:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},10630:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},37793:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(67294),a=n(73727),i=n(11368),o=n(35096),l=n(84487);const c=(0,r.createContext)({collectLink:()=>{}});var s=n(25026),p=n(67023),d=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&v(e,n,t[n]);return e};var b=function(e){var t,n=e,{isNavLink:d,to:v,href:b,activeClassName:y,isActive:w,"data-noBrokenLinkCheck":N,autoAddBaseUrl:C=!0}=n,x=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,i.Z)(),{withBaseUrl:P}=(0,s.C)(),T=(0,r.useContext)(c),E=v||b,Z=(0,o.Z)(E),j=null==E?void 0:E.replace("pathname://","");let _=void 0!==j?(A=j,C&&(e=>e.startsWith("/"))(A)?P(A):A):void 0;var A;_&&Z&&(_=(0,p.applyTrailingSlash)(_,O));const D=(0,r.useRef)(!1),I=d?a.OL:a.rU,M=l.Z.canUseIntersectionObserver;let S;(0,r.useEffect)((()=>(!M&&Z&&null!=_&&window.docusaurus.prefetch(_),()=>{M&&S&&S.disconnect()})),[_,M,Z]);const B=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,F=!_||!Z||B;return _&&Z&&!B&&!N&&T.collectLink(_),F?r.createElement("a",k(k({href:_},E&&!Z&&{target:"_blank",rel:"noopener noreferrer"}),x)):r.createElement(I,k((G=k({},x),u(G,m({onMouseEnter:()=>{D.current||null==_||(window.docusaurus.preload(_),D.current=!0)},innerRef:e=>{var t,n;M&&e&&Z&&(t=e,n=()=>{null!=_&&window.docusaurus.prefetch(_)},S=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),n())}))})),S.observe(t))},to:_||""}))),d&&{isActive:w,activeClassName:y}));var G}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(a=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(n,r)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},47154:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return y},contentTitle:function(){return w},metadata:function(){return N},toc:function(){return C},default:function(){return O}});var r=n(3905),a=n(44035),i=n(29415),o=n(37793),l=n(10630),c=n(2083),s=n(60204),p=n(31217),d=n(22425),u=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&k(e,n,t[n]);if(g)for(var n of g(t))v.call(t,n)&&k(e,n,t[n]);return e};const y={id:"container",title:"Container"},w=void 0,N={unversionedId:"development/ui-development/ui-components/containers/container",id:"development/ui-development/ui-components/containers/container",isDocsHomePage:!1,title:"Container",description:"A Container is a component in TouchGFX that can contain child nodes.",source:"@site/docs/development/ui-development/ui-components/containers/container.mdx",sourceDirName:"development/ui-development/ui-components/containers",slug:"/development/ui-development/ui-components/containers/container",permalink:"/4.14/docs/development/ui-development/ui-components/containers/container",version:"current",frontMatter:{id:"container",title:"Container"},sidebar:"docs",previous:{title:"TextureMapper",permalink:"/4.14/docs/development/ui-development/ui-components/images/texture-mapper"},next:{title:"ScrollableContainer",permalink:"/4.14/docs/development/ui-development/ui-components/containers/scrollable-container"}},C=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],x={toc:C};function O(e){var t,n=e,{components:u}=n,k=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))t.indexOf(r)<0&&v.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=b(b({},x),k),m(t,h({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A Container is a component in TouchGFX that can contain child nodes."),(0,r.kt)("p",null,"To read more about the fundamental nature of the concept of Containers, read the ",(0,r.kt)("a",b({parentName:"p"},{href:"../../working-with-touchgfx/widgets-and-containers#containers"}),"Widgets and Containers page"),"."),(0,r.kt)("p",null,"It is also possible to generate a Container as a CachableContainer. A CacheableContainer can render its content to a dynamic bitmap. This is explained more in detail on the ",(0,r.kt)("a",b({parentName:"p"},{href:"../../scenarios/achieving-better-performance-with-cacheable-container"}),"Achieving Better Performance with CacheableContainer")," page."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/container/widget-appearance.png",mdxType:"Figure"},"Container widget running in the simulator"),(0,r.kt)("h2",b({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Container can be found in the Containers widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/container/widget-group.png",mdxType:"Figure"},"Container widget in TouchGFX Designer"),(0,r.kt)("h2",b({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Container in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"W")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Caching")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Cachable")," specifies if the Container should be generated as a CachableContainer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)(l.Z,{mdxType:"Property"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"Y")," values.")))),(0,r.kt)("h2",b({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by a Container in TouchGFX Designer."),(0,r.kt)("h3",b({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Widget specific action")),(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Resize widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Resize a widget.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",b({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",b({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",b({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"A Container does not emit any triggers."),(0,r.kt)("h2",b({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A Container itself does not have any impact on performance and is entirely dependent on its children. Therefore, the Container is considered a very fast widget on most platforms."),(0,r.kt)("p",null,"In certain cases, using a CachableContainer to cache UI elements in a dynamic bitmap can significantly improve performance throughout an application. This is explained more in detail in the ",(0,r.kt)("a",b({parentName:"p"},{href:"../../scenarios/achieving-better-performance-with-cacheable-container"}),"Achieving Better Performance with CacheableContainer")," article."),(0,r.kt)("p",null,"For more general details on drawing performance, read the ",(0,r.kt)("a",b({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",b({},{id:"examples"}),"Examples"),(0,r.kt)("h3",b({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Container."),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    container1.setPosition(67, 11, 347, 250);\n\n    image1.setXY(109, 61);\n    image1.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_LOGO_TOUCHGFX_LOGO_ID));\n    container1.add(image1);\n\n    add(container1);\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the others available in the Container class in user code. Remember to force a redraw by calling ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"container1.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h2",b({},{id:"api-reference"}),"API Reference"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_container",mdxType:"Link"},"API reference for the Container class")),(0,r.kt)("li",null,(0,r.kt)(p.Z,{to:"../../../../api/classes/classtouchgfx_1_1_cacheable_container",mdxType:"Link"},"API reference for the CachableContainer class"))))}O.isMDXComponent=!0}}]);