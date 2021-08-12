(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[685],{12044:function(e,t,o){"use strict";o.r(t),o.d(t,{meta:function(){return p},default:function(){return c}});var n=o(96156),r=o(17375),u=(o(67294),o(3905)),a=o(17981);function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){(0,n.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var p={title:"Product Release"},s={};function c(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,u.kt)("wrapper",l(l(l({},s),o),{},{components:t,mdxType:"MDXLayout"}),(0,u.kt)(a.id,l(l({},{title:"Product Release"}),{},{mdxType:"LayoutHandout"}),(0,u.kt)("h2",null,"Building the product"),(0,u.kt)("p",null,"Make sure your project is built before you release. You can build\nthe product with the following command:"),(0,u.kt)("pre",null,(0,u.kt)("code",l({parentName:"pre"},{}),"yarn product:build\n")),(0,u.kt)("h2",null,"Preparing for deployment"),(0,u.kt)("p",null,"If you want to take advantage of Github Actions and continuosly deploy your product and storybook to Github Pages, you will need to set a few things:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},'Make sure your working repository is public, and the deployment branch is set to "gh-pages". It can be checked and fixed in repository settinds on Github.')),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},'You need to edit "homepage" property in ./product/package.json. It should be pointing to your repository.'))),(0,u.kt)("pre",null,(0,u.kt)("code",l({parentName:"pre"},{}),'{\n  "homepage": "https://<USERNAME>.github.io/<REPOSITORY_NAME>",\n  ...\n}\n')),(0,u.kt)("h2",null,"Releasing the product"),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},"When you are ready to release the product, you need to run the following command to bump the version:")),(0,u.kt)("pre",null,(0,u.kt)("code",l({parentName:"pre"},{}),"yarn product:version\n")),(0,u.kt)("ol",l({},{start:2}),(0,u.kt)("li",{parentName:"ol"},"As soon as you push your commits to main branch, a Github Action(",(0,u.kt)("inlineCode",{parentName:"li"},".github/workflows/release.yml"),") will be triggered. It performs two tasks:")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Checks the version of the product and compare it with previous one."),(0,u.kt)("li",{parentName:"ul"},"If version change is detected, build and deploy workflow is activated.")),(0,u.kt)("p",null,"Deploy won't run if the version is the same. If you still need to deploy the previous version for some reason, you can run it manually:"),(0,u.kt)("pre",null,(0,u.kt)("code",l({parentName:"pre"},{}),"yarn deploy\n"))))}c.isMDXComponent=!0},55099:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hands-on-workshop/handout/product-release",function(){return o(12044)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=55099,e(e.s=t);var t}));var t=e.O();_N_E=t}]);