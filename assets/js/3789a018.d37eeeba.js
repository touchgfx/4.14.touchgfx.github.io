(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7258],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return _}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(n),_=r,k=s["".concat(c,".").concat(_)]||s[_]||p[_]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function _(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43861:function(t,e,n){"use strict";var a=n(67294);class r extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},31217:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var a=n(67294),r=n(73727),l=n(11368),i=n(35096),o=n(84487);const c=(0,a.createContext)({collectLink:()=>{}});var u=n(25026),d=n(67023),p=Object.defineProperty,s=Object.defineProperties,_=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))m.call(e,n)&&b(t,n,e[n]);if(k)for(var n of k(e))f.call(e,n)&&b(t,n,e[n]);return t};var g=function(t){var e,n=t,{isNavLink:p,to:b,href:g,activeClassName:N,isActive:v,"data-noBrokenLinkCheck":y,autoAddBaseUrl:x=!0}=n,w=((t,e)=>{var n={};for(var a in t)m.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&k)for(var a of k(t))e.indexOf(a)<0&&f.call(t,a)&&(n[a]=t[a]);return n})(n,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:O}}=(0,l.Z)(),{withBaseUrl:T}=(0,u.C)(),C=(0,a.useContext)(c),j=b||g,P=(0,i.Z)(j),L=null==j?void 0:j.replace("pathname://","");let Z=void 0!==L?(D=L,x&&(t=>t.startsWith("/"))(D)?T(D):D):void 0;var D;Z&&P&&(Z=(0,d.applyTrailingSlash)(Z,O));const E=(0,a.useRef)(!1),A=p?r.OL:r.rU,I=o.Z.canUseIntersectionObserver;let S;(0,a.useEffect)((()=>(!I&&P&&null!=Z&&window.docusaurus.prefetch(Z),()=>{I&&S&&S.disconnect()})),[Z,I,P]);const M=null!==(e=null==Z?void 0:Z.startsWith("#"))&&void 0!==e&&e,B=!Z||!P||M;return Z&&P&&!M&&!y&&C.collectLink(Z),B?a.createElement("a",h(h({href:Z},j&&!P&&{target:"_blank",rel:"noopener noreferrer"}),w)):a.createElement(A,h((F=h({},w),s(F,_({onMouseEnter:()=>{E.current||null==Z||(window.docusaurus.preload(Z),E.current=!0)},innerRef:t=>{var e,n;I&&t&&P&&(e=t,n=()=>{null!=Z&&window.docusaurus.prefetch(Z)},S=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(S.unobserve(e),S.disconnect(),n())}))})),S.observe(e))},to:Z||""}))),p&&{isActive:v,activeClassName:N}));var F}},35096:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,{b:function(){return a},Z:function(){return r}})},25026:function(t,e,n){"use strict";n.d(e,{C:function(){return l},Z:function(){return i}});var a=n(11368),r=n(35096);function l(){const{siteConfig:{baseUrl:t="/",url:e}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return l?t+i:i}(e,t,n,a)}}function i(t,e={}){const{withBaseUrl:n}=l();return n(t,e)}},67271:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(t.startsWith("#"))return t;if(void 0===e)return t;const[n]=t.split(/[#?]/),a="/"===n?"/":(r=n,e?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(n,a)}},67023:function(t,e,n){"use strict";var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniq=e.applyTrailingSlash=void 0;var r=n(67271);Object.defineProperty(e,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(11080);Object.defineProperty(e,"uniq",{enumerable:!0,get:function(){return a(l).default}})},11080:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return Array.from(new Set(t))}},3141:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return k},contentTitle:function(){return m},metadata:function(){return f},toc:function(){return b},default:function(){return g}});var a=n(3905),r=n(31217),l=n(43861),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&s(t,n,e[n]);if(u)for(var n of u(e))p.call(e,n)&&s(t,n,e[n]);return t};const k={title:"Callback<dest_type,T1,void,void>"},m=void 0,f={unversionedId:"api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4",id:"api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4",isDocsHomePage:!1,title:"Callback<dest_type,T1,void,void>",description:"A Callback is basically a wrapper of a pointer-to-member-function.",source:"@site/docs/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4",permalink:"/4.14/docs/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4",version:"current",frontMatter:{title:"Callback<dest_type,T1,void,void>"},sidebar:"docs",previous:{title:"Callback<dest_type,T1,T2,void>",permalink:"/4.14/docs/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01_t2_00_01void_01_4"},next:{title:"Callback<dest_type,void,void,void>",permalink:"/4.14/docs/api/classes/structtouchgfx_1_1_callback_3_01dest__type_00_01void_00_01void_00_01void_01_4"}},b=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_generic_callback">GenericCallback&lt; T1 &gt;</Link>',id:"public-functions-inherited-from-genericcallback-t1-",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"Callback",id:"callback",children:[]},{value:"Callback",id:"callback-1",children:[]},{value:"execute",id:"execute",children:[]},{value:"isValid",id:"isvalid",children:[]}]}],h={toc:b};function g(t){var e,n=t,{components:i}=n,s=((t,e)=>{var n={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&u)for(var a of u(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=_(_({},h),s),o(e,c({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null," A ",(0,a.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," is basically a wrapper of a pointer-to-member-function.\nIt is used for registering callbacks between widgets. For instance, a ",(0,a.kt)("a",_({parentName:"p"},{href:"classtouchgfx_1_1_button"}),"Button")," can be configured to call a member function when it is clicked."),(0,a.kt)("p",null,"The class is templated in order to provide the class type of the object in which the member function resides, and the argument types of the function to call."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," class exists in four versions, for supporting member functions with 0, 1, 2 or 3 arguments. The compiler will infer which type to use automatically."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Template Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dest_type")," The type of the class in which the member function resides. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"T1")," The type of the first argument in the member function, or void if none.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": The member function to call must return void. The function can have zero, one, two or three arguments of any type. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback",mdxType:"Link"},"GenericCallback","<"," T1 ",">")),(0,a.kt)("h2",_({},{id:"public-functions"}),"Public Functions"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",_({parentName:"tr"},{align:"right"})),(0,a.kt)("th",_({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-callback",mdxType:"Link"},"Callback")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,a.kt)("a",_({parentName:"td"},{href:"structtouchgfx_1_1_callback"}),"Callback")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-callback",mdxType:"Link"},"Callback")),"(dest_type ",(0,a.kt)("em",{parentName:"td"}," pobject, void(dest_type::"),")(T1) pmemfun_1)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"Initializes a ",(0,a.kt)("a",_({parentName:"td"},{href:"structtouchgfx_1_1_callback"}),"Callback")," with an object and a pointer to the member function in that object to call.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-execute",mdxType:"Link"},"execute")),"(T1 t1)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"Calls the member function.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-isvalid",mdxType:"Link"},"isValid")),"() const")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"Query if this object is valid.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",_({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,a.kt)("h3",_({},{id:"public-functions-inherited-from-genericcallback-t1-"}),"Public Functions inherited from ",(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback",mdxType:"Link"},"GenericCallback","<"," T1 ",">")),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",_({parentName:"tr"},{align:"right"})),(0,a.kt)("th",_({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(r.Z,{to:"classtouchgfx_1_1_generic_callback#function-~genericcallback",mdxType:"Link"},"~GenericCallback")),"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,a.kt)("a",_({parentName:"td"},{href:"classtouchgfx_1_1_generic_callback"}),"GenericCallback")," class.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:"right"})),(0,a.kt)("td",_({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",_({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,a.kt)(l.Z,{url:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-callback",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",_({},{id:"callback"}),"Callback"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-callback",mdxType:"Link"},"Callback")),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",_({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a new instance of the ",(0,a.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," class. "))),(0,a.kt)(l.Z,{url:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-callback",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",_({},{id:"callback-1"}),"Callback"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-callback",mdxType:"Link"},"Callback")),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"dest_type *"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"pobject ,"),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"void(dest_type::*)(T1)"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"pmemfun_1"),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Initializes a ",(0,a.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback"}),"Callback")," with an object and a pointer to the member function in that object to call. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null}),"pobject"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"Pointer to the object on which the function should be called.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null}),"pmemfun_1"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"Address of member function. This is the version where function takes one argument."))))))),(0,a.kt)(l.Z,{url:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-execute",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",_({},{id:"execute"}),"execute"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-execute",mdxType:"Link"},"execute")),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"T1"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"t1"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",_({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Calls the member function. "),(0,a.kt)("p",null,"Do not call execute unless ",(0,a.kt)("a",_({parentName:"p"},{href:"classtouchgfx_1_1_generic_callback#function-isvalid"}),"isValid()")," returns true (ie. a pointer to the object and the function has been set)."),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null}),"t1"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"This value will be passed as the first argument in the function call."))))),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",_({parentName:"p"},{href:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-isvalid"}),"isValid"))))),(0,a.kt)(l.Z,{url:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-isvalid",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",_({},{id:"isvalid"}),"isValid"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})),(0,a.kt)("th",_({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",_({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,a.kt)(r.Z,{to:"structtouchgfx_1_1_callback_3_01dest__type_00_01_t1_00_01void_00_01void_01_4#function-isvalid",mdxType:"Link"},"isValid")),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"("),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null})),(0,a.kt)("td",_({parentName:"tr"},{align:null}),")"),(0,a.kt)("td",_({parentName:"tr"},{align:null}),"const"))))),(0,a.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,a.kt)("p",null,"Query if this object is valid. "),(0,a.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,a.kt)("div",{class:"api-content-indented",markdown:"1"},(0,a.kt)("p",null,"true if valid, false if not. ")))))}g.isMDXComponent=!0}}]);