(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{86010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"===typeof e||"number"===typeof e)a+=e;else if("object"===typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})},32010:function(e,n,t){"use strict";t.d(n,{wV:function(){return h},XA:function(){return j}});var r=t(85893);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,u=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(i){a=!0,u=i}finally{try{r||null==c.return||c.return()}finally{if(a)throw u}}return t}}(e,n)||function(e,n){if(e){if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=t(67294),c=t(73935),i=t(809),s=t.n(i);function l(e,n,t,r,a,u,o){try{var c=e[u](o),i=c.value}catch(s){return void t(s)}c.done?n(i):Promise.resolve(i).then(r,a)}var f=t(86010),d=t(9008),p=t(12934),v=t.n(p);function y(){return"function"===typeof t.g.createUnityInstance}var b="injectable";function m(e){var n=e.className,a=e.sampleName,u=void 0===a?b:a,c=e.unityRef,i=e.innerRef,p=(0,o.useState)(0),m=p[0],g=p[1],h=(0,o.useState)(y()),j=h[0],S=h[1],w=(0,o.useState)(),_=w[0],x=w[1],O=(0,o.useCallback)(function(){var e,n=(e=s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&j){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.g.createUnityInstance(n,{dataUrl:"/Unity/".concat(u,"/Build/WebInjectable.data"),frameworkUrl:"/Unity/".concat(u,"/Build/WebInjectable.framework.js"),codeUrl:"/Unity/".concat(u,"/Build/WebInjectable.wasm"),streamingAssetsUrl:"StreamingAssets",companyName:"reactunity",productName:u,productVersion:"0.1"},g);case 4:r=e.sent,x({SendMessage:r.SendMessage.bind(r),SetFullscreen:r.SetFullscreen.bind(r),Quit:r.Quit.bind(r),SetReactScript:function(e,n){r.SendMessage("ReactCanvas","SetJSX",e),n&&r.SendMessage("ReactCanvas","SetCSS",n),r.SendMessage("ReactCanvas","Render")},LoadScene:function(e){return r.SendMessage("ReactCanvas","LoadScene",e)},ReloadScene:function(){return r.SendMessage("ReactCanvas","ReloadScene")}});case 6:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function o(e){l(u,r,a,o,c,"next",e)}function c(e){l(u,r,a,o,c,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}(),[u,j,x]);return(0,o.useEffect)((function(){null===c||void 0===c||c(_)}),[c,_]),(0,o.useEffect)((function(){if(!j){var e=setInterval((function(){y()&&S(!0)}),100);return function(){return clearInterval(e)}}}),[j]),(0,o.useEffect)((function(){if(_)return function(){}}),[_]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.default,{children:(0,r.jsx)("script",{src:"/Unity/injectable/Build/WebInjectable.loader.js",async:!0})}),(0,r.jsxs)("div",{className:(0,f.Z)(n,v().host,"unity"),ref:i,children:[(0,r.jsx)("canvas",{className:v().canvas,ref:O,tabIndex:-1}),m<1&&(0,r.jsxs)("div",{className:v().progress,children:[(0,r.jsx)("div",{className:v().spinner}),(0,r.jsx)("div",{className:v().progressBar,style:{paddingRight:80*(1-m)+"%"}})]})]})]})}var g=o.createContext({component:null,loadUnity:function(){return null},unloadUnity:function(){return null}});function h(e){var n=e.children,t=u(o.useState(),2),a=t[0],i=t[1],s=u(o.useState(),2),l=s[0],f=s[1],d=u(o.useState(),2),p=d[0],v=d[1],y=(0,o.useCallback)((function(e,n){i(e||b),f(n)}),[i,f]),h=(0,o.useCallback)((function(){i(null),f(null)}),[i,f]),j=o.useMemo((function(){return null==a?null:(0,r.jsx)(m,{unityRef:v,sampleName:a,className:l})}),[v,a,l]),S=u(o.useState(),2),w=S[0],_=S[1];(0,o.useEffect)((function(){var e=document.createElement("div");return e.className="global-unity-container",_(e),function(){return e.remove()}}),[_]);var x=!!w&&(0,c.createPortal)(j,w,"unity-instance"),O=(0,o.useMemo)((function(){return{loadedId:a,component:j,instance:p,container:w,loadUnity:y,unloadUnity:h}}),[a,j,p,w,y,h]);return(0,r.jsxs)(r.Fragment,{children:[x,(0,r.jsx)(g.Provider,{value:O,children:n})]})}function j(){return o.useContext(g)}},3474:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(92809),a=t(85893),u=t(32010),o=t(11163),c=t(67294);t(20979);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e){var n=e.Component,t=e.pageProps,r=(0,o.useRouter)();return(0,c.useEffect)((function(){var e=function(e){return function(e){var n,t;null===(n=(t=window).gtag)||void 0===n||n.call(t,"config","G-LS8ZK1BB3T",{page_path:e})}(e)};return r.events.on("routeChangeComplete",e),function(){r.events.off("routeChangeComplete",e)}}),[r.events]),(0,a.jsx)(u.wV,{children:(0,a.jsx)(n,s({},t))})}},76363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(3474)}])},12934:function(e){e.exports={host:"unity_host__13AAV",canvas:"unity_canvas__3G7UB",progress:"unity_progress__3k5Of",progressBar:"unity_progressBar__ZNlwh",barberpole:"unity_barberpole__3RJ88"}},20979:function(){},9008:function(e,n,t){e.exports=t(70639)},11163:function(e,n,t){e.exports=t(34651)},92809:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(76363),n(34651)}));var t=e.O();_N_E=t}]);