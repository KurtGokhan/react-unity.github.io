(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2830],{9819:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/material/button",function(){return n(4323)}])},1338:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),a=(n(7294),n(1387)),l=n(5976),i=n(9693);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function c(e){var t=function(t){return(0,r.jsx)(l.$,o({},t,{meta:e}))};return t.appShell=u,t}function u(e){return(0,r.jsx)(i.T,o({routeTree:a},e))}},5976:function(e,t,n){"use strict";n.d(t,{$:function(){return y}});var r=n(5893),a=n(7294),l=n(3905),i=n(4922),s=n(7548),o=n(3760),c=n(1664),u=n.n(c);var d=function(){var e=(0,o.e)().breadcrumbs;return e?(0,r.jsx)("div",{className:"flex",children:e.map((function(e,t){return e.path&&(0,r.jsx)("div",{className:"flex mb-3 mt-0.5 items-center",children:(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(u(),{href:e.path,children:(0,r.jsx)("a",{className:"text-link dark:text-link-dark text-sm tracking-wide font-bold uppercase mr-1 hover:underline",children:e.title})}),(0,r.jsx)("span",{className:"inline-block mr-1 text-link dark:text-link-dark text-lg",children:(0,r.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M6.86612 13.6161C6.37796 14.1043 6.37796 14.8957 6.86612 15.3839C7.35427 15.872 8.14572 15.872 8.63388 15.3839L13.1339 10.8839C13.622 10.3957 13.622 9.60428 13.1339 9.11612L8.63388 4.61612C8.14572 4.12797 7.35427 4.12797 6.86612 4.61612C6.37796 5.10428 6.37796 5.89573 6.86612 6.38388L10.4822 10L6.86612 13.6161Z",fill:"currentColor"})})})]},e.path)},t)}))}):null},p=n(4184),m=n.n(p),x={foundation:{name:"Foundation",classes:"bg-yellow-50 text-white"},intermediate:{name:"Intermediate",classes:"bg-purple-40 text-white"},advanced:{name:"Advanced",classes:"bg-green-40 text-white"},experimental:{name:"Experimental",classes:"bg-ui-orange text-white"},deprecated:{name:"Deprecated",classes:"bg-red-40 text-white"}};var h=function(e){var t=e.text,n=e.variant,a=e.className,l=x[n],i=l.name,s=l.classes;return(0,r.jsx)("span",{className:m()("mr-2",a),children:(0,r.jsx)("span",{className:m()("inline font-bold text-sm uppercase py-1 px-2 rounded",s),children:t||i})})},v=n(5992);var f=function(e){var t=e.title,n=e.status,a=e.description,l=e.tags,i=void 0===l?[]:l;return(0,r.jsx)("div",{className:"px-5 sm:px-12 pt-5",children:(0,r.jsxs)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:[i?(0,r.jsx)(d,{}):null,(0,r.jsxs)(v.H1,{className:"mt-0 text-primary dark:text-primary-dark -mx-.5",children:[t,n?(0,r.jsxs)("em",{children:["\u2014",n]}):""]}),a&&(0,r.jsx)("p",{className:"mt-4 mb-6 text-primary dark:text-primary-dark text-xl text-gray-90 leading-large",children:a}),(null===i||void 0===i?void 0:i.length)>0&&(0,r.jsx)("div",{className:"mt-4",children:i.map((function(e){return(0,r.jsx)(h,{variant:e},e)}))})]})})},g=n(887),j=n(7451);function b(e){var t=e.children;return(0,r.jsx)("div",{className:"max-w-4xl ml-0 2xl:mx-auto",children:t})}function y(e){var t=e.children,n=e.meta,c=function(e){k.length>0&&(N.push((0,r.jsx)(b,{children:k},e)),k=[])},u=(0,o.e)(),d=u.route,p=u.nextRoute,m=u.prevRoute,x=n.title||(null===d||void 0===d?void 0:d.title)||"",h=n.description||(null===d||void 0===d?void 0:d.description)||"",v=a.Children.toArray(t).filter((function(e){var t;return!!(null===(t=e.props)||void 0===t?void 0:t.mdxType)&&["h1","h2","h3","Challenges","Recap"].includes(e.props.mdxType)})).map((function(e){var t,n;return"Challenges"===e.props.mdxType?{url:"#challenges",depth:0,text:"Challenges"}:"Recap"===e.props.mdxType?{url:"#recap",depth:0,text:"Recap"}:{url:"#"+e.props.id,depth:null!==(n=(null===(t=e.props)||void 0===t?void 0:t.mdxType)&&parseInt(e.props.mdxType.replace("h",""),0))&&void 0!==n?n:0,text:e.props.children}}));v.length>0&&v.unshift({depth:1,text:"Overview",url:"#"}),null==d&&console.error("This page was not added to one of the sidebar JSON files.");var y="/"===(null===d||void 0===d?void 0:d.path),w=["Sandpack","FullWidth","Illustration","IllustrationBlock","Challenges","Recipes"],k=[],N=[];return a.Children.forEach(t,(function(e,t){null!=e&&("object"===typeof e&&w.includes(e.props.mdxType)?(c(t),N.push(e)):k.push(e))})),c("last"),(0,r.jsxs)("article",{className:"h-full mx-auto relative w-full min-w-0",children:[(0,r.jsxs)("div",{className:"lg:pt-0 pt-20 pl-0 lg:pl-80 2xl:px-80 ",children:[(0,r.jsx)(g.p,{title:x}),!y&&(0,r.jsx)(f,{title:x,description:h,tags:null===d||void 0===d?void 0:d.tags}),(0,r.jsxs)("div",{className:"px-5 sm:px-12",children:[(0,r.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,r.jsx)(l.pC.Provider,{value:s.t,children:N})}),(0,r.jsx)(i.h,{route:d,nextRoute:p,prevRoute:m})]})]}),(0,r.jsx)("div",{className:"w-full lg:max-w-xs hidden 2xl:block",children:!y&&v.length>0&&(0,r.jsx)(j.o,{headings:v})})]})}},4323:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});n(7294);var r=n(3905),a=n(1338);function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i,s=(i="Sandpack",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))}),o={},c=(0,a.Z)({title:"Button",layout:"API"});function u(e){var t=e.components,n=l(e,["components"]);return(0,r.kt)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"Sandpack"},(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-js",metastring:"App.js active","App.js":!0,active:!0}),'import { Button } from \'@reactunity/material\';\nimport \'@reactunity/material/styles\';\n\nexport default function App() {\n  return <scroll class="main">\n    <Button variant="filled" elevation={4}>\n      Filled Button\n    </Button>\n\n    <Button variant="outlined">\n      Outlined Button\n    </Button>\n\n    <Button variant="text">\n      Text Button\n    </Button>\n\n    <Button variant="icon">\n      <icon>person</icon>\n    </Button>\n  </scroll>;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-css",metastring:"style.css","style.css":!0}),".main > * {\n  margin: 10px 20px;\n  align-self: center;\n}\n\n.mat-button.mat-variant-icon {\n  background: yellow;\n  color: magenta;\n}\n"))))}u.isMDXComponent=!0}},function(e){e.O(0,[3033,5762,4051,410,9693,4864,9774,2888,179],(function(){return t=9819,e(e.s=t);var t}));var t=e.O();_N_E=t}]);