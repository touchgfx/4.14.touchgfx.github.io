(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[453],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){"use strict";var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},2083:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},60204:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},10630:function(e,t,n){"use strict";var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},37793:function(e,t,n){"use strict";var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},31217:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(67294),a=n(73727),i=n(11368),o=n(35096),l=n(84487);const s=(0,r.createContext)({collectLink:()=>{}});var p=n(25026),c=n(67023),d=Object.defineProperty,u=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&k(e,n,t[n]);if(m)for(var n of m(t))g.call(t,n)&&k(e,n,t[n]);return e};var y=function(e){var t,n=e,{isNavLink:d,to:k,href:y,activeClassName:b,isActive:w,"data-noBrokenLinkCheck":N,autoAddBaseUrl:x=!0}=n,P=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:S}}=(0,i.Z)(),{withBaseUrl:T}=(0,p.C)(),C=(0,r.useContext)(s),O=k||y,Z=(0,o.Z)(O),E=null==O?void 0:O.replace("pathname://","");let _=void 0!==E?(j=E,x&&(e=>e.startsWith("/"))(j)?T(j):j):void 0;var j;_&&Z&&(_=(0,c.applyTrailingSlash)(_,S));const D=(0,r.useRef)(!1),A=d?a.OL:a.rU,B=l.Z.canUseIntersectionObserver;let V;(0,r.useEffect)((()=>(!B&&Z&&null!=_&&window.docusaurus.prefetch(_),()=>{B&&V&&V.disconnect()})),[_,B,Z]);const I=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,M=!_||!Z||I;return _&&Z&&!I&&!N&&C.collectLink(_),M?r.createElement("a",v(v({href:_},O&&!Z&&{target:"_blank",rel:"noopener noreferrer"}),P)):r.createElement(A,v((R=v({},P),u(R,h({onMouseEnter:()=>{D.current||null==_||(window.docusaurus.preload(_),D.current=!0)},innerRef:e=>{var t,n;B&&e&&Z&&(t=e,n=()=>{null!=_&&window.docusaurus.prefetch(_)},V=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(V.unobserve(t),V.disconnect(),n())}))})),V.observe(t))},to:_||""}))),d&&{isActive:w,activeClassName:b}));var R}},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(11368),a=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[n]=e.split(/[#?]/),r="/"===n?"/":(a=n,t?function(e){return e.endsWith("/")?e:`${e}/`}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));var a;return e.replace(n,r)}},67023:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},86931:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return b},contentTitle:function(){return w},metadata:function(){return N},toc:function(){return x},default:function(){return S}});var r=n(3905),a=n(44035),i=n(29415),o=n(10630),l=n(37793),s=n(2083),p=n(60204),c=n(31217),d=n(22425),u=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&v(e,n,t[n]);return e};const b={id:"shape",title:"Shape"},w=void 0,N={unversionedId:"development/ui-development/ui-components/shapes/shape",id:"development/ui-development/ui-components/shapes/shape",isDocsHomePage:!1,title:"Shape",description:"The Shape allows the user to draw any shape with an arbitrary amount of points, while also supporting scaling and rotation.",source:"@site/docs/development/ui-development/ui-components/shapes/shape.mdx",sourceDirName:"development/ui-development/ui-components/shapes",slug:"/development/ui-development/ui-components/shapes/shape",permalink:"/4.14/docs/development/ui-development/ui-components/shapes/shape",version:"current",frontMatter:{id:"shape",title:"Shape"},sidebar:"docs",previous:{title:"Circle",permalink:"/4.14/docs/development/ui-development/ui-components/shapes/circle"},next:{title:"Slider",permalink:"/4.14/docs/development/ui-development/ui-components/miscellaneous/slider"}},x=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],P={toc:x};function S(e){var t,n=e,{components:u}=n,v=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=y(y({},P),v),h(t,m({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The Shape allows the user to draw any shape with an arbitrary amount of points, while also supporting scaling and rotation."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/shape/widget-appearance.png",mdxType:"Figure"},"Shape running in the simulator"),(0,r.kt)("h2",y({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Shape can be found in the Shapes widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/shape/widget-group.png",mdxType:"Figure"},"Shape in TouchGFX Designer"),(0,r.kt)("h2",y({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Shape in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,r.kt)(p.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"W")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)(p.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image & Color")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Image")," or ",(0,r.kt)(o.Z,{mdxType:"Property"},"Color")," specifies the color or image to be shown in the Shape.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Transform")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Angle")," specifies the rotation of the Shape around its ",(0,r.kt)(o.Z,{mdxType:"Property"},"Origin")," point.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Scale X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Scale Y")," specify the scale of the shape horizontally and vertically from the ",(0,r.kt)(o.Z,{mdxType:"Property"},"Origin")," point.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Origin X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Origin Y")," specify the location from which ",(0,r.kt)(o.Z,{mdxType:"Property"},"Points")," originate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Points")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Points")," specify points that create the desired shape.",(0,r.kt)("br",null),(0,r.kt)(p.Z,{mdxType:"InlineNote"},"Each individual point requires an X and Y coordinate."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Alpha")," specifies the transparency of the widget.",(0,r.kt)("br",null),(0,r.kt)(p.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)(o.Z,{mdxType:"Property"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)(o.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Y")," values.")))),(0,r.kt)("h2",y({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the Shape are described in the following sections."),(0,r.kt)("h3",y({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Widget specific action")),(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Scale Shape")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Scale a Shape, either to a fixed size or relative to its current size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Rotate Shape")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Rotate a Shape, either to a fixed angle or relative to its current anlge")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",y({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"A Shape does not emit any triggers."),(0,r.kt)("h2",y({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A Shape is a CanvasWidget and is heavily dependent on the MCU for rendering the desired shape. Therefore, a Shape is considered a demanding widget on most platforms."),(0,r.kt)("p",null,"For more details on CanvasWidget drawing performance, read the ",(0,r.kt)("a",y({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",y({},{id:"examples"}),"Examples"),(0,r.kt)("h3",y({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Shape."),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    touchgfx::CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n\n    shape.setPosition(140, 36, 200, 200);\n    shape.setOrigin(100.000f, 100.000f);\n    shape.setScale(1.000f, 1.000f);\n    shape.setAngle(0.000f);\n    shapePainter.setColor(touchgfx::Color::getColorFrom24BitRGB(60, 180, 230));\n    shape.setPainter(shapePainter);\n    const touchgfx::AbstractShape::ShapePoint<float> shapePoints[4] = { { 0.000f, -100.000f }, { 100.000f, 0.000f }, { 0.000f, 100.000f }, { -100.000f, 0.000f } };\n    shape.setShape(shapePoints);\n\n    add(shape);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the Shape class in user code. Remember to force a redraw by calling ",(0,r.kt)(s.Z,{mdxType:"InlineCode"},"shape.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",y({},{id:"user-code"}),"User Code"),(0,r.kt)("p",null,"The following code shows how to set up a shape filled with some random data:"),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1VIEW_HPP\n#define SCREEN1VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/Screen1Presenter.hpp>\n#include <touchgfx/widgets/canvas/Shape.hpp>\n#include <touchgfx/widgets/canvas/PainterRGB888.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Shape<100> shape;\n    touchgfx::PainterRGB888 shapePainter;\nprotected:\n    void fillData(int maxLength);\n};\n\n#endif // SCREEN1VIEW_HPP\n")),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n#include <touchgfx/Color.hpp>\n\nScreen1View::Screen1View()\n{\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n    shape.setPosition(0, 0, 480, 272);\n    shape.setOrigin(0.000f, 272.000f);\n    shapePainter.setColor(touchgfx::Color::getColorFrom24BitRGB(0, 171, 223));\n    shape.setPainter(shapePainter);\n    fillData(100);\n    add(shape);\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::fillData(int maxLength)\n{\n    float highestX = 0.000f;\n    for (int i = 0; i < maxLength - 1; ++i)\n    {\n        float y = static_cast <float> (rand()) / (static_cast <float> (RAND_MAX/272));\n        float x = highestX + static_cast <float> (rand()) /( static_cast <float> (RAND_MAX/((highestX + 10.000f)-highestX)));\n        highestX = x;\n        shape.setCorner(i, CWRUtil::toQ5<float>(x), CWRUtil::toQ5<float>(-y));\n    }\n    shape.setCorner(maxLength - 1, CWRUtil::toQ5<float>(highestX), CWRUtil::toQ5<float>(0));\n    shape.updateAbstractShapeCache();\n}\n")),(0,r.kt)("h2",y({},{id:"api-reference"}),"API Reference"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_shape",mdxType:"Link"},"API reference for the Shape class"))))}S.isMDXComponent=!0}}]);