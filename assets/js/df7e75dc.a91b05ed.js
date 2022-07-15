"use strict";(self.webpackChunk_griffel_website=self.webpackChunk_griffel_website||[]).push([[536],{9463:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>d,contentTitle:()=>h,metadata:()=>i,toc:()=>l,default:()=>c});var r=t(7896),a=t(1461),s=(t(2784),t(876)),o=["components"],d={sidebar_position:3},h="shorthands",i={unversionedId:"react/api/shorthands",id:"react/api/shorthands",title:"shorthands",description:"Check limitations to understand why these helpers are needed.",source:"@site/docs/react/api/shorthands.md",sourceDirName:"react/api",slug:"/react/api/shorthands",permalink:"/react/api/shorthands",editUrl:"https://github.com/microsoft/griffel/tree/main/apps/website/docs/react/api/shorthands.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"reactSidebar",previous:{title:"mergeClasses",permalink:"/react/api/merge-classes"},next:{title:"makeStaticStyles",permalink:"/react/api/make-static-styles"}},l=[{value:"<code>shorthands.border</code>",id:"shorthandsborder",children:[],level:3},{value:"<code>shorthands.borderBottom</code>",id:"shorthandsborderbottom",children:[],level:3},{value:"<code>shorthands.borderColor</code>",id:"shorthandsbordercolor",children:[],level:3},{value:"<code>shorthands.borderStyle</code>",id:"shorthandsborderstyle",children:[],level:3},{value:"<code>shorthands.borderWidth</code>",id:"shorthandsborderwidth",children:[],level:3},{value:"<code>shorthands.flex</code>",id:"shorthandsflex",children:[],level:3},{value:"<code>shorthands.gap</code>",id:"shorthandsgap",children:[],level:3},{value:"<code>shorthands.gridArea</code>",id:"shorthandsgridarea",children:[],level:3},{value:"<code>shorthands.inset</code>",id:"shorthandsinset",children:[],level:3},{value:"<code>shorthands.margin</code>",id:"shorthandsmargin",children:[],level:3},{value:"<code>shorthands.overflow</code>",id:"shorthandsoverflow",children:[],level:3},{value:"<code>shorthands.padding</code>",id:"shorthandspadding",children:[],level:3}],p={toc:l};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"shorthands"},"shorthands"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Check ",(0,s.kt)("a",{parentName:"p",href:"/react/guides/limitations"},"limitations")," to understand why these helpers are needed."))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"shorthands")," provides a set of functions to mimic ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties"},"CSS shorthands")," and improve developer experience as ",(0,s.kt)("a",{parentName:"p",href:"/react/guides/limitations#css-shorthands-are-not-supported"},"CSS shorthands are not supported")," by Griffel. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    // \u274c This is not supported, TypeScript compiler will throw, styles will not be inserted to DOM\n    padding: '2px 4px 8px 16px',\n    // \u2705 Use shorthand functions to avoid writting CSS longhands\n    ...shorthands.padding('2px', '4px', '8px', '16px'),\n  },\n});\n")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The most of the functions follow syntax in matching CSS properties, but each value should a separate argument:"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u274c Will produce wrong results\nshorthands.padding('2px 4px');\n// \u2705 Correct output\nshorthands.padding('2px', '4px');\n")))),(0,s.kt)("p",null,"Function in a ",(0,s.kt)("inlineCode",{parentName:"p"},"shorthand")," set are pure, you can simply use ",(0,s.kt)("inlineCode",{parentName:"p"},"console.log")," to better understand produced rules:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"console.log(padding('12px', '24px', '36px', '48px'));\n// \u2b07\ufe0f\u2b07\ufe0f\u2b07\ufe0f\n// {\n//  paddingBottom: '36px',\n//  paddingLeft: '48px',\n//  paddingRight: '24px',\n//  paddingTop: '12px',\n// }\n")),(0,s.kt)("h3",{id:"shorthandsborder"},(0,s.kt)("inlineCode",{parentName:"h3"},"shorthands.border")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.border('2px'),\n    ...shorthands.border('2px', 'solid'),\n    ...shorthands.border('2px', 'solid', 'red'),\n  },\n});\n")),(0,s.kt)("h3",{id:"shorthandsborderbottom"},(0,s.kt)("inlineCode",{parentName:"h3"},"shorthands.borderBottom")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    // The same is true for \"borderTop\", \"borderLeft\" & \"borderRight\"\n    ...shorthands.borderBottom('2px'),\n    ...shorthands.borderBottom('2px', 'solid'),\n    ...shorthands.borderBottom('2px', 'solid', 'red'),\n  },\n});\n")),(0,s.kt)("h3",{id:"shorthandsbordercolor"},(0,s.kt)("inlineCode",{parentName:"h3"},"shorthands.borderColor")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.borderColor('red'),\n    ...shorthands.borderColor('red', 'blue'),\n    ...shorthands.borderColor('red', 'blue', 'green'),\n    ...shorthands.borderColor('red', 'blue', 'green', 'yellow'),\n  },\n});\n")),(0,s.kt)("h3",{id:"shorthandsborderstyle"},(0,s.kt)("inlineCode",{parentName:"h3"},"shorthands.borderStyle")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.borderStyle('solid'),\n    ...shorthands.borderStyle('solid', 'dashed'),\n    ...shorthands.borderStyle('solid', 'dashed', 'dotted'),\n    ...shorthands.borderStyle('solid', 'dashed', 'dotted', 'double'),\n  },\n});\n")),(0,s.kt)("h3",{id:"shorthandsborderwidth"},(0,s.kt)("inlineCode",{parentName:"h3"},"shorthands.borderWidth")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.borderWidth('12px'),\n    ...shorthands.borderWidth('12px', '24px'),\n    ...shorthands.borderWidth('12px', '24px', '36px'),\n    ...shorthands.borderWidth('12px', '24px', '36px', '48px'),\n  },\n});\n")),(0,s.kt)("h3",{id:"shorthandsflex"},(0,s.kt)("inlineCode",{parentName:"h3"},"shorthands.flex")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.flex('auto'),\n    ...shorthands.flex(1, '2.5rem'),\n    ...shorthands.flex(0, 0, 'auto'),\n  },\n});\n")),(0,s.kt)("h3",{id:"shorthandsgap"},(0,s.kt)("inlineCode",{parentName:"h3"},"shorthands.gap")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.gap('12px'),\n    ...shorthands.gap('12px', '24px'),\n  },\n});\n")),(0,s.kt)("h3",{id:"shorthandsgridarea"},(0,s.kt)("inlineCode",{parentName:"h3"},"shorthands.gridArea")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.gridArea('auto'),\n    ...shorthands.gridArea('first', 'second'),\n    ...shorthands.gridArea(2, 4, 'span footer'),\n    ...shorthands.gridArea(2, 4, 1, 3),\n  },\n});\n")),(0,s.kt)("h3",{id:"shorthandsinset"},(0,s.kt)("inlineCode",{parentName:"h3"},"shorthands.inset")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.inset('10px'),\n    ...shorthands.inset('10px', '5px'),\n    ...shorthands.inset('2px', '4px', '8px'),\n    ...shorthands.inset('1px', 0, '3px', '4px'),\n  },\n});\n")),(0,s.kt)("h3",{id:"shorthandsmargin"},(0,s.kt)("inlineCode",{parentName:"h3"},"shorthands.margin")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.margin('12px'),\n    ...shorthands.margin('12px', '24px'),\n    ...shorthands.margin('12px', '24px', '36px'),\n    ...shorthands.margin('12px', '24px', '36px', '48px'),\n  },\n});\n")),(0,s.kt)("h3",{id:"shorthandsoverflow"},(0,s.kt)("inlineCode",{parentName:"h3"},"shorthands.overflow")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.overflow('visible'),\n    ...shorthands.overflow('visible', 'hidden'),\n  },\n});\n")),(0,s.kt)("h3",{id:"shorthandspadding"},(0,s.kt)("inlineCode",{parentName:"h3"},"shorthands.padding")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { makeStyles, shorthands } from '@griffel/react';\n\nconst useClasses = makeStyles({\n  root: {\n    ...shorthands.padding('12px'),\n    ...shorthands.padding('12px', '24px'),\n    ...shorthands.padding('12px', '24px', '36px'),\n    ...shorthands.padding('12px', '24px', '36px', '48px'),\n  },\n});\n")))}c.isMDXComponent=!0},876:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var h=r.createContext({}),i=function(e){var n=r.useContext(h),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=i(e.components);return r.createElement(h.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,h=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=i(t),m=a,u=c["".concat(h,".").concat(m)]||c[m]||p[m]||s;return t?r.createElement(u,o(o({ref:n},l),{},{components:t})):r.createElement(u,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=c;var d={};for(var h in n)hasOwnProperty.call(n,h)&&(d[h]=n[h]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var i=2;i<s;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);