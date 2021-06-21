(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[170],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,g=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(g,c(c({ref:t},s),{},{components:r})):n.createElement(g,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},130:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),c=["components"],a={id:"emergency",title:"Emergency Recovery"},u={unversionedId:"emergency",id:"emergency",isDocsHomePage:!1,title:"Emergency Recovery",description:"If a situation arises where Gatekeeper is preventing the cluster from operating correctly,",source:"@site/docs/emergency.md",sourceDirName:".",slug:"/emergency",permalink:"/gatekeeper/website/docs/emergency",editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/emergency.md",version:"current",frontMatter:{id:"emergency",title:"Emergency Recovery"},sidebar:"docs",previous:{title:"Debugging",permalink:"/gatekeeper/website/docs/debug"},next:{title:"Cloud and Vendor Specific Fixes",permalink:"/gatekeeper/website/docs/vendor-specific"}},l=[],s={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If a situation arises where Gatekeeper is preventing the cluster from operating correctly,\nthe webhook can be disabled. This will remove all Gatekeeper admission checks. Assuming\nthe default webhook name has been used this can be achieved by running:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kubectl delete validatingwebhookconfigurations.admissionregistration.k8s.io gatekeeper-validating-webhook-configuration")),(0,i.kt)("p",null,"Redeploying the webhook configuration will re-enable Gatekeeper."))}p.isMDXComponent=!0}}]);