(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[538],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88678:function(e,t,n){"use strict";var r=n(67294);class o extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},37793:function(e,t,n){"use strict";var r=n(67294),o=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class a extends r.Component{render(){return r.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=a},60148:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return h},metadata:function(){return m},toc:function(){return g},default:function(){return b}});var r=n(3905),o=n(37793),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e};const f={id:"scenarios-introduction",title:"Introduction"},h=void 0,m={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-introduction",id:"development/touchgfx-hal-development/scenarios/scenarios-introduction",isDocsHomePage:!1,title:"Introduction",description:"This section describes the most common configuration scenarios when using TouchGFX in terms of configurations for display interfaces and application strategies.",source:"@site/docs/development/touchgfx-hal-development/scenarios/scenarios-introduction.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-introduction",permalink:"/4.14/docs/development/touchgfx-hal-development/scenarios/scenarios-introduction",version:"current",frontMatter:{id:"scenarios-introduction",title:"Introduction"},sidebar:"docs",previous:{title:"Generator User Guide",permalink:"/4.14/docs/development/touchgfx-hal-development/touchgfx-generator"},next:{title:"LTDC/Parallel RGB",permalink:"/4.14/docs/development/touchgfx-hal-development/scenarios/scenarios-ltdc-parallel-rgb"}},g=[],v={toc:g};function b(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},v),u),a(t,c({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This section describes the most common configuration scenarios when using TouchGFX in terms of configurations for display interfaces and application strategies."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",d({parentName:"li"},{href:"scenarios-ltdc-parallel-rgb"}),(0,r.kt)("strong",{parentName:"a"},"LTDC/Parallel RGB")),"\ndescribes the steps involved in configuring your TouchGFX HAL to use the LTDC on your MCU."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",d({parentName:"li"},{href:"scenarios-fmc"}),(0,r.kt)("strong",{parentName:"a"},"FMC and SPI"))," describes the steps involved in configuring TouchGFX HAL to work with e.g. serial displays when the MCU has no TFT controller."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",d({parentName:"li"},{href:"scenarios-framebuffer-strategies"}),(0,r.kt)("strong",{parentName:"a"},"Framebuffer Strategies"))," describes each of the available Frame Buffer Strategies: Single, Double and Partial."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",d({parentName:"li"},{href:"../../board-bring-up/example-gpio"}),(0,r.kt)("strong",{parentName:"a"},"External events as triggers"))," describes how to use external events, suh as physical buttons, as triggers in TouchGFX Designer interactions. The procedure in this scenario spans from configuration of GPIOS in CubeMX to TouchGFX HAL development to Appliation development in the TouchGFX Designer.")),(0,r.kt)(o.Z,{mdxType:"Tip"},"The guidelines found in this section have been used to create all Version 3.0+ Application Templates available through the designer."))}b.isMDXComponent=!0}}]);