(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1287],{3374:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return u},default:function(){return c}});var r=n(96156),o=n(17375),s=(n(67294),n(3905)),a=n(17981);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={title:"Visual Regression testing"},l={};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",p(p(p({},l),n),{},{components:t,mdxType:"MDXLayout"}),(0,s.kt)(a.id,p(p({},{title:"Visual Regression testing"}),{},{mdxType:"LayoutHandout"}),(0,s.kt)("p",null,"You can optionally run visual regression tests for your components and storybook pages. We suggest to use either ",(0,s.kt)("a",p({parentName:"p"},{href:"https://github.com/wKich/creevey"}),"Creevey")," or ",(0,s.kt)("a",p({parentName:"p"},{href:"https://loki.js.org/"}),"Loki")," for this purpose.  Both already installed in ",(0,s.kt)("em",{parentName:"p"},"design-system")," workspace."),(0,s.kt)("h2",null,"Creevey"),(0,s.kt)("p",null,"Running creevey requires Docker to be installed. Creevey provides a UI for previewing and managing component tests."),(0,s.kt)("p",null,"First make sure the storybook already running, or if not, run it:"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{}),"yarn design-system\n")),(0,s.kt)("p",null,"Then run in ",(0,s.kt)("strong",{parentName:"p"},"separate")," terminal window:"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{}),"yarn test:creevey:runner\n")),(0,s.kt)("p",null,"A UI will open. Follow the interface to run the tests."),(0,s.kt)("p",null,"Creevey is also configured to run as a workflow of Github actions. It will be triggered every time you push changes in ",(0,s.kt)("inlineCode",{parentName:"p"},"design-system/src")," folder. You can view test results in Actions tab of yuor repo"),(0,s.kt)("h4",null,"Credits to ",(0,s.kt)("a",p({parentName:"h4"},{href:"https://www.linkedin.com/in/dmitriy-lazarev-5b2150a3/"}),"Dmitriy Lazarev")," for the Creevey setup and support."),(0,s.kt)("h2",null,"Loki"),(0,s.kt)("p",null,"If you prefer more simple setup, you can use Loki. Loki prints test results to the console and stores refrence file in .loki folder at ",(0,s.kt)("em",{parentName:"p"},"design-system")," workspace."),(0,s.kt)("p",null,"Make sure the storybook already running:"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{}),"yarn design-system\n")),(0,s.kt)("p",null,"Then run in ",(0,s.kt)("strong",{parentName:"p"},"separate")," terminal window:"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{}),"yarn test:loki\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"By default the tests are configured for chrome desktop and mobile only. ",(0,s.kt)("a",p({parentName:"strong"},{href:"https://loki.js.org/configuration.html"}),"Refer to documentation")," if you want to extend your configuration.")),(0,s.kt)("p",null,"You'll see the status of your tests in the console. If the test fail, you can check diff images in ",(0,s.kt)("inlineCode",{parentName:"p"},"design-system/loki/diff"),". You can update reference images by name (see tips in the console), or all together with"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{}),"yarn test:loki:approve\n")),(0,s.kt)("p",null,"If you want to update all tests at once, you can run:"),(0,s.kt)("pre",null,(0,s.kt)("code",p({parentName:"pre"},{}),"yarn test:loki:update\n"))))}c.isMDXComponent=!0},85283:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hands-on-workshop/handout/v2/visual-tests",function(){return n(3374)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=85283,e(e.s=t);var t}));var t=e.O();_N_E=t}]);