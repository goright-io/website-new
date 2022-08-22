(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2994],{36188:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return p},default:function(){return c}});var o=n(96156),r=n(17375),a=(n(67294),n(3905)),i=n(17981);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={title:"Preparing to release"},u={};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",s(s(s({},u),n),{},{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.id,s(s({},{title:"Preparing to release"}),{},{mdxType:"LayoutHandout"}),(0,a.kt)("h3",null,"Day 2:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Update the components with tokens"),(0,a.kt)("li",{parentName:"ol"},"Prepare to the release"),(0,a.kt)("li",{parentName:"ol"},"Run visual regression tests")),(0,a.kt)("p",null,"We are picking up where we left yesterday. You have received a new pull request in your repository with a set of components according to your UI inventory. Please review it and make sure that everything is working.\nIf you didn't complete all the tasks yesterday, please revisit ",(0,a.kt)("a",s({parentName:"p"},{href:"./coding-practice"}),"coding practice")," page, and prepare your design tokens according instructions."),(0,a.kt)("h2",null,"1. Update the components with tokens"),(0,a.kt)("p",null,"Although the components were provided ready, the style values are hardcoded. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Let's bring tokens into the code.")),(0,a.kt)("h2",null,"2. Writing new components"),(0,a.kt)("p",null,"The designers created a new component in Figma, and you need to code it to your library."),(0,a.kt)("p",null,"You van use a script to quickly add component template files:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{}),"yarn add-component <ComponentName>\n")),(0,a.kt)("p",null,"For example, if you run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add-component Avatar"),", a new folder with two new files will be created at ",(0,a.kt)("inlineCode",{parentName:"p"},"design-system/src/components"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Avatar/",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"index.js"),(0,a.kt)("li",{parentName:"ul"},"Avatar.stories.mdx")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),". When you add the component, it gets re-exported in the library index file,\nwhich is ",(0,a.kt)("inlineCode",{parentName:"p"},"design-system/src/index.js"),". If you want to rename or remove a component,\ndon't forget to change it accordingly."),(0,a.kt)("h3",null,"What do I code?"),(0,a.kt)("p",null,"Check ",(0,a.kt)("a",s({parentName:"p"},{href:"https://component.gallery/"}),"https://component.gallery/")," to get ideas on how to fill your\ncomponent with code."),(0,a.kt)("h2",null,"3. Tokenizing"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Process the tokens with Styled Dictionary"),(0,a.kt)("li",{parentName:"ol"},"[optional]"," Display the tokens in Storybook"),(0,a.kt)("li",{parentName:"ol"},"Import the tokens to the components' files and use them in code")),(0,a.kt)("h2",null,"4. Visual regression tests"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),". ",(0,a.kt)("em",{parentName:"p"},"Creevey requires Docker to be installed.")),(0,a.kt)("p",null,"To keep the system consistent, you should always provide visual references for your\ncomponents. This will make automatic testing work smoothly. This is how\nyou can do it:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run the testing UI with ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn test:ui")),(0,a.kt)("li",{parentName:"ol"},"Run the tests and examine the results"),(0,a.kt)("li",{parentName:"ol"},"Noticed the inconcistency? Fix and run the tests again."),(0,a.kt)("li",{parentName:"ol"},"There is a change but you were expecting it? Approve.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hint"),". ",(0,a.kt)("em",{parentName:"p"},"Use ",(0,a.kt)("inlineCode",{parentName:"em"},"yarn test:update")," to approve all screenshots at once")),(0,a.kt)("p",null,"If you created a new component, or visualy changed the existing one, it\nwill always go with the change of their visual references. Notice the changes\nfiles in ",(0,a.kt)("inlineCode",{parentName:"p"},"design-system/tests/referenceImages"),", add them and commit. It is\na good habit to include your visual references in your pull request. And it\nensures the tests automation."),(0,a.kt)("h2",null,"Goals"),(0,a.kt)("p",null,"Overall you have 1 hour 45 minutes to prepare the first version of your library for release. Call us to join you in breakout room if you have any questions. ")))}c.isMDXComponent=!0},13747:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hands-on-workshop/handout/preparing-release",function(){return n(36188)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=13747,e(e.s=t);var t}));var t=e.O();_N_E=t}]);