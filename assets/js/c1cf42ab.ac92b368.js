"use strict";(self.webpackChunk_griffel_website=self.webpackChunk_griffel_website||[]).push([[755],{6325:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(2784),n=s(2600);const r="container_Knlc";const l=function(e){return a.createElement("div",{className:r},a.createElement(n.i,null),a.createElement("span",null,e.children))}},8631:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=s(7896),n=s(1461),r=(s(2784),s(876)),l=(s(465),s(6325)),o=["components"],i={sidebar_position:5},m="makeResetStyles",p={unversionedId:"react/api/make-reset-styles",id:"react/api/make-reset-styles",title:"makeResetStyles",description:"Atomic CSS has tradeoffs.",source:"@site/docs/react/api/make-reset-styles.md",sourceDirName:"react/api",slug:"/react/api/make-reset-styles",permalink:"/react/api/make-reset-styles",draft:!1,editUrl:"https://github.com/microsoft/griffel/tree/main/apps/website/docs/react/api/make-reset-styles.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"reactSidebar",previous:{title:"makeStaticStyles",permalink:"/react/api/make-static-styles"},next:{title:"createDOMRenderer",permalink:"/react/api/create-dom-renderer"}},c={},d=[{value:"Usage with <code>makeStyles</code>",id:"usage-with-makestyles",level:2},{value:"Features support",id:"features-support",level:2},{value:"Limitations",id:"limitations",level:2}],u={toc:d};function k(e){var t=e.components,s=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"makeresetstyles"},"makeResetStyles"),(0,r.kt)("p",null,"Atomic CSS has ",(0,r.kt)("a",{parentName:"p",href:"/react/guides/atomic-css#trade-offs"},"tradeoffs"),".\nBrowser layout can slow down proportionally to the number of HTML class names that reference different rules."),(0,r.kt)("p",null,"There are cases when it's reasonable to flatten multiple declarations into monolithic CSS. For example, base styles for components in a UI library.\nRules generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"makeResetStyles()")," are inserted into the CSS style sheet before all the Atomic CSS, so styles from ",(0,r.kt)("a",{parentName:"p",href:"/react/api/make-styles"},(0,r.kt)("inlineCode",{parentName:"a"},"makeStyles()"))," will always override these rules."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"makeResetStyles")," returns ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"a React hook")," that should be called inside a component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { makeResetStyles } from '@griffel/react';\n\nconst useClass = makeResetStyles({\n  color: 'blue',\n  margin: 0,\n  ':hover': { color: 'teal' },\n});\n")),(0,r.kt)(l.Z,{mdxType:"OutputTitle"},"Produces following CSS..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".r6gaeno {\n  color: blue;\n  margin: 0px;\n}\n\n.r6gaeno:hover {\n  color: teal;\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"By its nature ",(0,r.kt)("inlineCode",{parentName:"p"},"makeResetStyles")," allows the use of ",(0,r.kt)("a",{parentName:"p",href:"/react/guides/limitations#css-shorthands-are-not-supported"},"CSS shorthands")," and does not have the same limitation as ",(0,r.kt)("inlineCode",{parentName:"p"},"makeStyles()"),".")),(0,r.kt)("h2",{id:"usage-with-makestyles"},"Usage with ",(0,r.kt)("inlineCode",{parentName:"h2"},"makeStyles")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { makeStyles, makeResetStyles, shorthands } from '@griffel/react';\nimport { mergeClasses } from './mergeClasses';\n\nconst useBaseClass = makeResetStyles({\n  color: 'red',\n  padding: 0,\n  // etc.\n});\n\nconst useClasses = makeStyles({\n  primary: { color: 'blue' },\n  circular: {\n    ...shorthands.padding('5px'),\n    ...shorthands.borderRadius('5px'),\n  },\n});\n\nfunction Component(props) {\n  const baseClass = useBaseClass();\n  const classes = useClasses();\n\n  return (\n    <button className={mergeClasses(baseClass, props.primary && classes.primary, props.circular && classes.circular)} />\n  );\n}\n")),(0,r.kt)("h2",{id:"features-support"},"Features support"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"makeResetStyles")," supports the same features as ",(0,r.kt)("a",{parentName:"p",href:"/react/api/make-styles"},(0,r.kt)("inlineCode",{parentName:"a"},"makeStyles()"))," including nested selectors and at-rules."),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Only one class generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"makeResetStyles()")," can be applied to an element. Otherwise, behavior will be non-deterministic as classes merging will not be done for this case and results depend on order of insertion.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { makeStyles } from '@griffel/react';\n\nconst useClassA = makeResetStyles({\n  /* styles */\n});\nconst useClassB = makeResetStyles({\n  /* styles */\n});\n\nfunction Component(props) {\n  /* \ud83d\udca3 Never apply multiple rules from makeResetStyles() to the same element */\n  return <button className={mergeClasses(useClassA(), useClassB())} />;\n}\n")))}k.isMDXComponent=!0}}]);