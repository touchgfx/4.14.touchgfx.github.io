(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7028],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){"use strict";var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:o,target:"_blank"},a.createElement("img",{width:n,height:i,src:o})),a.createElement("p",null,e.children))}},88678:function(e,t,n){"use strict";var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{class:e},a.createElement("div",{class:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},37793:function(e,t,n){"use strict";var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},35096:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(11368),r=n(35096);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},44414:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return g},metadata:function(){return k},toc:function(){return y},default:function(){return b}});var a=n(3905),r=n(44035),i=n(37793),o=n(22425),l=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&m(e,n,t[n]);return e};const f={id:"scenarios-create-at",title:"Creating an Application Template"},g=void 0,k={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-create-at",id:"development/touchgfx-hal-development/scenarios/scenarios-create-at",isDocsHomePage:!1,title:"Creating an Application Template",description:'Application Templates (ATs) are .tpa files that define the platform on which a TouchGFX application runs. This approach is for developers who wish to be able to distribute easy-to-use ATs seperately from the UI code that runs on top of them. This article describes how an existing TouchGFX project can be packaged into a redistributable AT using the built-in tool tgfx.exe. For the duration of this article examples are based on an application called "MyApplication".',source:"@site/docs/development/touchgfx-hal-development/scenarios/scenarios-create-at.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-create-at",permalink:"/4.14/docs/development/touchgfx-hal-development/scenarios/scenarios-create-at",version:"current",frontMatter:{id:"scenarios-create-at",title:"Creating an Application Template"},sidebar:"docs",previous:{title:"Changing the Pixel Format of an Application",permalink:"/4.14/docs/development/touchgfx-hal-development/scenarios/scenarios-change-pixelformat-bpp"},next:{title:"External events as triggers",permalink:"/4.14/docs/development/board-bring-up/example-gpio"}},y=[{value:"Describe Application Template",id:"describe-application-template",children:[]},{value:"Create Application Template",id:"create-application-template",children:[]},{value:"Test &amp; Verify",id:"test--verify",children:[]},{value:"Final Notes",id:"final-notes",children:[{value:"General Tips",id:"general-tips",children:[]},{value:"Version Control",id:"version-control",children:[]}]}],v={toc:y};function b(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},v),m),p(t,c({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Application Templates")," (ATs) are ",(0,a.kt)("inlineCode",{parentName:"p"},".tpa")," files that define the ",(0,a.kt)("em",{parentName:"p"},"platform")," on which a TouchGFX application runs. This approach is for developers who wish to be able to distribute easy-to-use ATs seperately from the ",(0,a.kt)("em",{parentName:"p"},"UI")," code that runs on top of them. This article describes how an existing TouchGFX project can be packaged into a redistributable AT using the built-in tool ",(0,a.kt)("inlineCode",{parentName:"p"},"tgfx.exe"),". For the duration of this article examples are based on an application called ",(0,a.kt)("em",{parentName:"p"},'"MyApplication"'),"."),(0,a.kt)("p",null,"Once you have a fully functional TouchGFX project the following steps are required to create an AT."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Describe Application Template"),"  Call ",(0,a.kt)("inlineCode",{parentName:"li"},"tgfx.exe")," and edit json file (inherits from .touchgfx)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Create Application Template")," Call ",(0,a.kt)("inlineCode",{parentName:"li"},"tgfx.exe")," to finalize ",(0,a.kt)("inlineCode",{parentName:"li"},".tpa")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Test & Verify")," Import into designer, create- and verify application")),(0,a.kt)("h2",h({},{id:"describe-application-template"}),"Describe Application Template"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tgfx.exe")," tool generates a configuration file (.json) that describes the internals of the AT. This information is read by TouchGFX Designer and presented to the user. Open a ",(0,a.kt)("em",{parentName:"p"},"TouchGFX Environment")," console and execute the following command in the ",(0,a.kt)("em",{parentName:"p"},"parent")," directory of the application:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -d MyApplication\n")),(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-zip.png",width:"550px",mdxType:"Figure"},"Prepare files for .tpa"),(0,a.kt)("p",null,"The following files are created in the directory where the command was run:"),(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-desc-files.png",width:"240px",mdxType:"Figure"},"List of generated files"),(0,a.kt)("p",null,"Before creating the final ",(0,a.kt)("inlineCode",{parentName:"p"},".tpa")," file, edit ",(0,a.kt)("inlineCode",{parentName:"p"},"MyApplication.json")," to control how the AT is displayed to users in TouchGFX Designer. Users should edit the following sections: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Author")," Use the fields in the ",(0,a.kt)("em",{parentName:"li"},"Author")," section to specify name of author, contact email and a URL."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data")," Use the fields in the ",(0,a.kt)("em",{parentName:"li"},"Data")," section to specify AT version, images, board name, vendor, description, and link to further information.")),(0,a.kt)(o.Z,{mdxType:"CodeHeader"},"MyApplication.json"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-json"}),'   ...\n    "Author": [\n      {\n        "Name": "Chad Brody",\n        "Contact": "chad.brody@mycompany.com",\n        "URL": "http://mycompany.com/"\n      }\n    ],  \n  ...  \n  "Data": {\n    "Version": {\n      "Major": 1,\n      "Minor": 0,\n      "Build": 0\n    },\n    "Name": "MyApplication",\n    "HumanFriendlyName": "MyApplication",\n    "BoardName": "Custom STM32 Board",\n    "Type": "TGAT",\n    "Vendor": "MyCompany",\n    "Description": "This is a working project on which to base your UI on top of.",\n    "DocumentationLink": "",\n    "Category": "",\n    "Images": [\n      "http://mysite.com/MyCustomBoard-front.png",\n      "http://mysite.com/MyCustomBoard-back.png"\n    ],\n    ...\n  }\n}\n')),(0,a.kt)(i.Z,{mdxType:"Tip"},"Be sure to set the 'Type' attribute to ",(0,a.kt)("b",null,"TGAT"),". Otherwise the AT won't show up in TouchGFX Designer!"),(0,a.kt)(i.Z,{mdxType:"Tip"},"TouchGFX Designer is able to display up to three images (Image references must be URLs) from this list when displaying the extended information card for an AT. The optimal resolution for the images is 400x280 pixels."),(0,a.kt)("h2",h({},{id:"create-application-template"}),"Create Application Template"),(0,a.kt)("p",null,"Execute the following command to create the final \xb4.tpa\xb4 file and finalize the Application Template. "),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"$ /d/TouchGFX/4.13.0/designer/tgfx.exe pack -rc -d MyApplication\n")),(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-tgfx-tpa.png",width:"570px",mdxType:"Figure"},"Create Application Template"),(0,a.kt)("h2",h({},{id:"test--verify"}),"Test & Verify"),(0,a.kt)("p",null,"To verify that the \xb4.tpa\xb4 file can be seen by TouchGFX Designer as an AT and used to create new applications, perform the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Rename the ",(0,a.kt)("inlineCode",{parentName:"li"},".tpa")," file to your requirements. "),(0,a.kt)("li",{parentName:"ol"},"Copy or move the ",(0,a.kt)("inlineCode",{parentName:"li"},".tpa")," file to ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\TouchGFX\\4.13.0\\app\\packages"),". This allows users to import ATs into TouchGFX Designer from a local folder.")),(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-mv-to-pkg.png",width:"550",mdxType:"Figure"},"Install AT to local folder"),(0,a.kt)("ol",h({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Open the Designer and select the AT.")),(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-designer-main.png",width:"550",mdxType:"Figure"},"MyApplication-1.0.0.tpa displayed in Designer"),(0,a.kt)(r.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/create-at-designer-main-info.png",width:"550",mdxType:"Figure"},"Information about the AT"),(0,a.kt)("h2",h({},{id:"final-notes"}),"Final Notes"),(0,a.kt)("p",null,"The following section contains tips about what to consider when developing code for- and distrubuting ATs. "),(0,a.kt)("h3",h({},{id:"general-tips"}),"General Tips"),(0,a.kt)("p",null,"Generally, before distributing the ",(0,a.kt)("inlineCode",{parentName:"p"},".tpa")," one should: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ensure that all supplied IDE projects work as expected."),(0,a.kt)("li",{parentName:"ol"},"Delete ",(0,a.kt)("em",{parentName:"li"},"build"),"- and ",(0,a.kt)("em",{parentName:"li"},"generated")," folders to reduce the size of the AT."),(0,a.kt)("li",{parentName:"ol"},"Ensure that custom commands (",(0,a.kt)("em",{parentName:"li"},"PostGenerate"),"-, etc.) defined in the TouchGFX project file ",(0,a.kt)("inlineCode",{parentName:"li"},".touchgfx")," work as expected. "),(0,a.kt)("li",{parentName:"ol"},"Ensure that the AT can be read by TouchGFX Designer and used to create a new application."),(0,a.kt)("li",{parentName:"ol"},"There is no immediate way to specify an upgrade procedure between versions of ATs. ")),(0,a.kt)(i.Z,{mdxType:"Tip"},"Be sure to re-pack the application template after modifying the content of either the TouchGFX Project or the `.json` file."),(0,a.kt)("p",null,"After distributing the ",(0,a.kt)("inlineCode",{parentName:"p"},".tpa")," one should instruct users to copy the ",(0,a.kt)("inlineCode",{parentName:"p"},".tpa")," file into ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\TouchGFX\\4.13.0\\app\\packages")," and restart the designer, if open."),(0,a.kt)("h3",h({},{id:"version-control"}),"Version Control"),(0,a.kt)("p",null,"Usually, developers will keep an entire development project (Board bringup, TouchGFX AL, TouchGFX UI) in the same repository which  eliminates the need for distributable ",(0,a.kt)("inlineCode",{parentName:"p"},".tpa")," files. However, for team members to be able to start a new TouchGFX application based on unified platform code is powerful when it comes to test and verification."),(0,a.kt)("p",null,"For those that do distribute ",(0,a.kt)("inlineCode",{parentName:"p"},".tpa")," files and/or use tools like ",(0,a.kt)("inlineCode",{parentName:"p"},"repo"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"git submodules")," to modularize their codebase it is wise to let the version of the AT-component follow the version specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},".json")," descriptor mentioned previously in this article. If using a modularized approach, the ",(0,a.kt)("em",{parentName:"p"},"platform")," code could still be used to create a distributable ",(0,a.kt)("inlineCode",{parentName:"p"},".tpa")," file while also being used as a module in a main project struture. "),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-json"}),'  "Data": {\n    "Version": {\n      "Major": 3,\n      "Minor": 0,\n      "Build": 0\n    },\n')),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{}),"$ git tag\nv1.1.0\nv2.0.0\nv2.1.0\nv3.0.0\n")))}b.isMDXComponent=!0}}]);