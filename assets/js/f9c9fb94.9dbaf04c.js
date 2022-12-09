"use strict";(self.webpackChunk_griffel_website=self.webpackChunk_griffel_website||[]).push([[319],{9759:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=t(7896),a=t(1461),o=(t(2784),t(876)),r=(t(465),["components"]),l={sidebar_position:2},i="Limitations",p={unversionedId:"react/guides/limitations",id:"react/guides/limitations",title:"Limitations",description:"Runtime styles",source:"@site/docs/react/guides/limitations.md",sourceDirName:"react/guides",slug:"/react/guides/limitations",permalink:"/react/guides/limitations",draft:!1,editUrl:"https://github.com/microsoft/griffel/tree/main/apps/website/docs/react/guides/limitations.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"reactSidebar",previous:{title:"Atomic CSS",permalink:"/react/guides/atomic-css"},next:{title:"Server-Side Rendering",permalink:"/react/guides/ssr-usage"}},c={},d=[{value:"Runtime styles",id:"runtime-styles",level:2},{value:"Workarounds",id:"workarounds",level:3},{value:"CSS shorthands are not supported",id:"css-shorthands-are-not-supported",level:2}],u={toc:d};function m(e){var s=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:s,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"limitations"},"Limitations"),(0,o.kt)("h2",{id:"runtime-styles"},"Runtime styles"),(0,o.kt)("p",null,"Styles can't be created at runtime which includes dynamic selectors as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function App(props) {\n  // \u274c This will not work and throw an exception\n  const useClasses = makeStyles({\n    root: {\n      color: props.color,\n      [`.${props.area}`]: { display: 'block' },\n    }\n  });\n}\n")),(0,o.kt)("p",null,"As Griffel performs ahead-of-time ",(0,o.kt)("a",{parentName:"p",href:"/react/ahead-of-time-compilation/introduction"},"compilation")," values used in CSS rules should be static so that they can be compiled."),(0,o.kt)("h3",{id:"workarounds"},"Workarounds"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enumerate variants. If you know values in advance and a set is limited the best option is to enumerate them."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const useClasses = makeStyles({\n  twoColumns: { /* styles */ },\n  threeColumns: { /* styles */ },\n  fourColumns: { /* styles */ },\n});\n\nfunction App(props) {\n  const classes = useClasses();\n  const className = mergeClasses(\n    props.columns === 'two' && classes.twoColumns,\n    props.columns === 'three' && classes.threeColumns,\n    props.columns === 'four' && classes.fourColumns,\n  );\n\n  return <div className={className} />;\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use inline styles on elements. They don't have the best performance, but it will be faster than invoking any CSS-in-JS for frequently changing values."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const useClasses = makeStyles({\n  root: { /* your other styles styles */ },\n});\n\nfunction App(props) {\n  const classes = useClasses();\n  return <div className={classes.root} style={{ color: props.color }} />;\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use local CSS variables for nested/pseudo selectors. Prefer to use inline styles, but they can't be used for pseudo selector, for example."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const useClasses = makeStyles({\n  root: {\n    ':hover': { color: 'var(--my-app-color)' },\n  },\n});\n\nfunction App(props) {\n  const classes = useClasses();\n  return <div style={{ '--my-app-color': props.color }} />;\n}\n")))),(0,o.kt)("h2",{id:"css-shorthands-are-not-supported"},"CSS shorthands are not supported"),(0,o.kt)("p",null,"There are ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties"},"shorthand and longhand properties")," in CSS. Shorthand properties allow to define a set of longhand properties. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* Define with multiple properties */\n.longhand-rule {\n  padding-top: 2px;\n  padding-right: 4px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n}\n\n/* Define with a single property */\n.shorthand-rule {\n  padding: 2px 4px 8px 16px;\n}\n")),(0,o.kt)("p",null,"Griffel relies on ",(0,o.kt)("a",{parentName:"p",href:"/react/guides/atomic-css"},"Atomic CSS")," and produces atomic classes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* \ud83d\udca1 makeStyles() generates hashed classes, but it's not important in this example */\n.a {\n  background-color: red;\n}\n.b {\n  background-color: green;\n}\n.c {\n  color: yellow;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Case 1: \u274c Wrong usage --\x3e\n<div class="a b c">Hello world!</div>\n\x3c!-- Case 2: \u2705 Correct usage --\x3e\n<div class="a c">Hello world!</div>\n<div class="b c">Hello world!</div>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'In "Case 1" both classes are applied to an element: it\'s wrong as result is ',(0,o.kt)("strong",{parentName:"li"},"nondeterministic")," and depends on classes order in CSS definitions (i.e. ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/css-cascade-3/#cascade-order"},"order of appearance"),"), ",(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/css-insertion-order-matters-mgt6y"},"demo on CodeSandbox")),(0,o.kt)("li",{parentName:"ul"},'In "Case 2" only single classname per CSS property is applied, result will be deterministic')),(0,o.kt)("p",null,"This problem is solved by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/griffel/blob/main/packages/core/src/mergeClasses.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"mergeClasses()"))," function: it de-duplicates classes based on property name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u26a0 Simplified example\nfunction App() {\n  //                     \ud83d\udc47 skips \"a\", returns only \"b c\"\n  return <div className={mergeClasses('a', 'b', 'c')}>Hello world</div>;\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only non colliding properties should be applied to DOM elements with Atomic CSS.")),(0,o.kt)("p",null,"This works well for longhands, but there are cases when longhands and shorthands are combined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u26a0 Not real code\nconst useClasses1 = makeStyles({\n  root: {\n    backgroundColor: 'red',\n    background: 'green',\n  },\n});\nconst useClasses2 = makeStyles({\n  root: {\n    background: 'green',\n    backgroundColor: 'red',\n  },\n});\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"In this example the problem is the same: both classes will be applied, result depends on the order of appearance.")),(0,o.kt)("p",null,"There is an option to expand CSS shorthands to longhands, but it's not reliable and does not work with static rules i.e. you can't expand rules with CSS variables without knowing their value. The single predictable solution is to disallow the usage of CSS shorthands."),(0,o.kt)("p",null,"You can get more information on the original RFC, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/fluentui/pull/20573"},"microsoft/fluentui#20573"),". For this reason Griffel disallows CSS shorthand properties in the input style object. Instead of shorthand properties, use ",(0,o.kt)("a",{parentName:"p",href:"/react/api/shorthands"},"shorthands helper functions")," which do the shorthand to longhand expansion statically."))}m.isMDXComponent=!0}}]);