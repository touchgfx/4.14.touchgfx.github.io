(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1818],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=i,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22425:function(e,t,r){"use strict";var n=r(67294);class i extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,r){"use strict";var n=r(67294),i=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,a=(0,i.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:o,src:a})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:a,target:"_blank"},n.createElement("img",{width:r,height:o,src:a})),n.createElement("p",null,e.children))}},29415:function(e,t,r){"use strict";var n=r(67294),i=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class a extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}t.Z=a},88678:function(e,t,r){"use strict";var n=r(67294);class i extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},2083:function(e,t,r){"use strict";var n=r(67294);class i extends n.Component{render(){return n.createElement("code",null,this.props.children)}}t.Z=i},60204:function(e,t,r){"use strict";var n=r(67294);class i extends n.Component{render(){return n.createElement("i",null,this.props.children)}}t.Z=i},10630:function(e,t,r){"use strict";var n=r(67294);class i extends n.Component{render(){return n.createElement("i",null,this.props.children)}}t.Z=i},37793:function(e,t,r){"use strict";var n=r(67294),i=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=a},31217:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(67294),i=r(73727),o=r(11368),a=r(35096),l=r(84487);const s=(0,n.createContext)({collectLink:()=>{}});var c=r(25026),d=r(67023),p=Object.defineProperty,u=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&b(e,r,t[r]);if(m)for(var r of m(t))f.call(t,r)&&b(e,r,t[r]);return e};var v=function(e){var t,r=e,{isNavLink:p,to:b,href:v,activeClassName:y,isActive:w,"data-noBrokenLinkCheck":x,autoAddBaseUrl:N=!0}=r,B=((e,t)=>{var r={};for(var n in e)g.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T}}=(0,o.Z)(),{withBaseUrl:P}=(0,c.C)(),O=(0,n.useContext)(s),C=b||v,Z=(0,a.Z)(C),E=null==C?void 0:C.replace("pathname://","");let W=void 0!==E?(j=E,N&&(e=>e.startsWith("/"))(j)?P(j):j):void 0;var j;W&&Z&&(W=(0,d.applyTrailingSlash)(W,T));const S=(0,n.useRef)(!1),A=p?i.OL:i.rU,D=l.Z.canUseIntersectionObserver;let _;(0,n.useEffect)((()=>(!D&&Z&&null!=W&&window.docusaurus.prefetch(W),()=>{D&&_&&_.disconnect()})),[W,D,Z]);const M=null!==(t=null==W?void 0:W.startsWith("#"))&&void 0!==t&&t,F=!W||!Z||M;return W&&Z&&!M&&!x&&O.collectLink(W),F?n.createElement("a",k(k({href:W},C&&!Z&&{target:"_blank",rel:"noopener noreferrer"}),B)):n.createElement(A,k((I=k({},B),u(I,h({onMouseEnter:()=>{S.current||null==W||(window.docusaurus.preload(W),S.current=!0)},innerRef:e=>{var t,r;D&&e&&Z&&(t=e,r=()=>{null!=W&&window.docusaurus.prefetch(W)},_=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t),_.disconnect(),r())}))})),_.observe(t))},to:W||""}))),p&&{isActive:w,activeClassName:y}));var I}},35096:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},25026:function(e,t,r){"use strict";r.d(t,{C:function(){return o},Z:function(){return a}});var n=r(11368),i=r(35096);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(n)return t+r;const a=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},67271:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;const[r]=e.split(/[#?]/),n="/"===r?"/":(i=r,t?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(r,n)}},67023:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(67271);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var o=r(11080);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(o).default}})},11080:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},80381:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return y},contentTitle:function(){return w},metadata:function(){return x},toc:function(){return N},default:function(){return T}});var n=r(3905),i=r(44035),o=r(29415),a=r(10630),l=r(37793),s=r(2083),c=r(60204),d=r(31217),p=r(22425),u=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&k(e,r,t[r]);if(g)for(var r of g(t))b.call(t,r)&&k(e,r,t[r]);return e};const y={id:"box-with-border",title:"BoxWithBorder"},w=void 0,x={unversionedId:"development/ui-development/ui-components/shapes/box-with-border",id:"development/ui-development/ui-components/shapes/box-with-border",isDocsHomePage:!1,title:"BoxWithBorder",description:"A BoxWithBorder in TouchGFX is a rectangular shaped widget that can be assigned a single color for all contained pixels within a specified border with a seperate color and size. The BoxWithBorder can be assigned any size and position.",source:"@site/docs/development/ui-development/ui-components/shapes/box-with-border.mdx",sourceDirName:"development/ui-development/ui-components/shapes",slug:"/development/ui-development/ui-components/shapes/box-with-border",permalink:"/4.14/docs/development/ui-development/ui-components/shapes/box-with-border",version:"current",frontMatter:{id:"box-with-border",title:"BoxWithBorder"},sidebar:"docs",previous:{title:"Box",permalink:"/4.14/docs/development/ui-development/ui-components/shapes/box"},next:{title:"Line",permalink:"/4.14/docs/development/ui-development/ui-components/shapes/line"}},N=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],B={toc:N};function T(e){var t,r=e,{components:u}=r,k=((e,t)=>{var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&g)for(var n of g(e))t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=v(v({},B),k),h(t,m({components:u,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A BoxWithBorder in TouchGFX is a rectangular shaped widget that can be assigned a single color for all contained pixels within a specified border with a seperate color and size. The BoxWithBorder can be assigned any size and position."),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/box-with-border/widget-appearance.png",mdxType:"Figure"},"BoxWithBorder running in the simulator"),(0,n.kt)("h2",v({},{id:"widget-group"}),"Widget Group"),(0,n.kt)("p",null,"The BoxWithBorder can be found in the Shapes widget group in TouchGFX Designer."),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/box-with-border/widget-group.png",mdxType:"Figure"},"BoxWithBorder in TouchGFX Designer"),(0,n.kt)("h2",v({},{id:"properties"}),"Properties"),(0,n.kt)("p",null,"The properties for a BoxWithBorder in TouchGFX Designer."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Group")),(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(a.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,n.kt)(c.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(a.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(a.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(a.Z,{mdxType:"Property"},"W")," and ",(0,n.kt)(a.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(a.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget. ",(0,n.kt)(c.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(a.Z,{mdxType:"Property"},"Color")," specifies the color of all the pixels contained within the rectangle.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(a.Z,{mdxType:"Property"},"Border Color")," specifies the color of the outer border pixels.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(a.Z,{mdxType:"Property"},"Border Size")," specifies the size of the outer border.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(a.Z,{mdxType:"Property"},"Alpha")," specifies the transparency of the widget. ",(0,n.kt)(c.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixins")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(a.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(a.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(a.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,n.kt)(a.Z,{mdxType:"Property"},"Alpha")," value.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(a.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,n.kt)(a.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(a.Z,{mdxType:"Property"},"Y")," values.")))),(0,n.kt)("h2",v({},{id:"interactions"}),"Interactions"),(0,n.kt)("p",null,"The actions and triggers supported by a BoxWithBorder in TouchGFX Designer."),(0,n.kt)("h3",v({},{id:"actions"}),"Actions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Widget specific actions")),(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Resize widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Resize a widget.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Change box color")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Change the color of a Box widget.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Standard widget actions")),(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,n.kt)("h3",v({},{id:"triggers"}),"Triggers"),(0,n.kt)("p",null,"A BoxWithBorder does not emit any triggers."),(0,n.kt)("h2",v({},{id:"performance"}),"Performance"),(0,n.kt)("p",null,"A BoxWithBorder is one of the most lightweight widgets in all of TouchGFX because it does not have to read any pixel data or do any complicated calculations. Therefore, the BoxWithBorder is considered a very fast performing widget on most platforms."),(0,n.kt)("p",null,"For more details on drawing performance, read the ",(0,n.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,n.kt)("h2",v({},{id:"examples"}),"Examples"),(0,n.kt)("h3",v({},{id:"generated-code"}),"Generated Code"),(0,n.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a BoxWithBorder widget."),(0,n.kt)(p.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    boxWithBorderName.setPosition(240, 56, 337, 132);\n    boxWithBorderName.setColor(touchgfx::Color::getColorFrom24BitRGB(212, 27, 27));\n    boxWithBorderName.setBorderColor(touchgfx::Color::getColorFrom24BitRGB(21, 24, 202));\n    boxWithBorderName.setBorderSize(20);\n\n    add(boxWithBorderName);\n}\n")),(0,n.kt)(l.Z,{mdxType:"Tip"},(0,n.kt)("li",null,"You can use these functions and the others available in the BoxWithBorder class in user code. Remember to force a redraw by calling ",(0,n.kt)(s.Z,{mdxType:"InlineCode"},"boxWithBorderName.invalidate()")," if you change the appearance of the widget.")),(0,n.kt)("h2",v({},{id:"api-reference"}),"API Reference"),(0,n.kt)(o.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_box_with_border",mdxType:"Link"},"API reference for the BoxWithBorder class"))))}T.isMDXComponent=!0}}]);