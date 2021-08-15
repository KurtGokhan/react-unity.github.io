(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{49776:function(e,t,n){"use strict";n.d(t,{O:function(){return f}});var r=n(92809),a=n(85893),i=n(55462),o=n(86010),s=n(41664),l=n(11163);n(67294);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t=e.children,n=e.className,r=e.activeClassName,c=(0,i.Z)(e,["children","className","activeClassName"]),f=(0,l.useRouter)().asPath,d=f===c.href||f===c.as?(0,o.Z)(r||"active",n):n;return(0,a.jsx)(s.default,u(u({},c),{},{children:(0,a.jsx)("a",{className:d,children:t})}))}},53535:function(e,t,n){"use strict";n.d(t,{h:function(){return d}});var r=n(85893),a=n(86010),i=n(49776),o=n(41664),s=(n(67294),n(31814)),l=n.n(s),c=n(71458),u=n.n(c),f="React Unity";function d(e){var t=e.className,n=e.fullSize;return(0,r.jsx)("header",{className:(0,a.Z)(t,u().host,n&&u().fullSize),children:(0,r.jsxs)("div",{className:u().content,children:[(0,r.jsx)(o.default,{href:"/",children:(0,r.jsxs)("a",{className:(0,a.Z)(u().link,u().homeLink),children:[(0,r.jsx)("img",{src:"/images/logo.png",className:l().borderCircle,height:48,width:48,alt:f}),f]})}),(0,r.jsx)("span",{className:l().spacer}),(0,r.jsx)(i.O,{href:"/components",children:"Components"}),(0,r.jsx)(i.O,{href:"/styling",children:"Styling"}),(0,r.jsx)(i.O,{href:"/playground",children:"Playground"}),(0,r.jsx)("a",{href:"https://github.com/ReactUnity/core","aria-label":"Github",className:u().githubLink,target:"_blank",rel:"noopener noreferrer"})]})})}},40928:function(e,t,n){"use strict";n.d(t,{y:function(){return c},Z:function(){return u}});var r=n(85893),a=n(86010),i=n(9008),o=(n(67294),n(53535)),s=n(39860),l=n.n(s),c="React Unity";function u(e){var t=e.children,n=e.fullSize;return(0,r.jsxs)("div",{className:(0,a.Z)(l().container,n&&l().fullSize),children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),(0,r.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(c),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,r.jsx)("meta",{name:"og:title",content:c}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,r.jsx)(o.h,{}),(0,r.jsx)("main",{className:l().main,children:t})]})}},92167:function(e,t,n){"use strict";var r=n(53848);t.default=void 0;var a,i=(a=n(67294))&&a.__esModule?a:{default:a},o=n(21063),s=n(34651),l=n(7426);var c={};function u(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),f=i.default.useMemo((function(){var t=o.resolveHref(a,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?o.resolveHref(a,e.as):s||i}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,_=e.replace,g=e.shallow,m=e.scroll,v=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var b=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,j=l.useIntersection({rootMargin:"200px"}),y=r(j,2),x=y[0],O=y[1],w=i.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);i.default.useEffect((function(){var e=O&&n&&o.isLocalURL(d),t="undefined"!==typeof v?v:a&&a.locale,r=c[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(a,d,h,{locale:t})}),[h,d,O,v,n,a]);var N={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,r,{shallow:i,locale:l,scroll:s}))}(e,a,d,h,_,g,m,v)},onMouseEnter:function(e){o.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof v?v:a&&a.locale,L=a&&a.isLocaleDomain&&o.getDomainLocale(h,k,a&&a.locales,a&&a.domainLocales);N.href=L||o.addBasePath(o.addLocale(h,k,a&&a.defaultLocale))}return i.default.cloneElement(t,N)};t.default=f},7426:function(e,t,n){"use strict";var r=n(53848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=a.useRef(),c=a.useState(!1),u=r(c,2),f=u[0],d=u[1],h=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||f||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return a.useEffect((function(){if(!o&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=n(67294),i=n(73447),o="undefined"!==typeof IntersectionObserver;var s=new Map},80656:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return u}});var r=n(85893);var a=n(49776),i=n(40928),o=n(9008),s=(n(67294),n(53379)),l=n.n(s),c=!0;function u(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),(0,r.jsxs)(i.Z,{fullSize:!0,children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:i.y})}),(0,r.jsx)("section",{className:l().jumbo,children:(0,r.jsxs)("div",{className:l().jumboContent,children:[(0,r.jsxs)("div",{className:l().leftPart,children:[(0,r.jsx)("h1",{children:"React Unity"}),(0,r.jsx)("p",{children:"React adapter for building user interfaces in Unity"}),(0,r.jsx)("div",{children:(0,r.jsx)(a.O,{href:"/components",className:l().getStartedButton,children:"Get Started"})})]}),(0,r.jsx)("div",{className:l().logoPart,children:(0,r.jsx)("img",{src:"/images/logo.png",className:l().logo,height:240,width:240,alt:"React Unity Logo"})})]})})]})}},71458:function(e){e.exports={host:"header_host__1ggjE",fullSize:"header_fullSize__2--A3",content:"header_content__1tltq",homeLink:"header_homeLink__1bi-M",githubLink:"header_githubLink__qwJ95"}},39860:function(e){e.exports={main:"layout_main__2y8yv",fullSize:"layout_fullSize__1icwQ",header:"layout_header__1XdTg"}},53379:function(e){e.exports={jumbo:"home_jumbo__8Pf3S",jumboContent:"home_jumboContent__348Z4",leftPart:"home_leftPart__33IvP",logoPart:"home_logoPart__3cpJ8",getStartedButton:"home_getStartedButton__1az86"}},31814:function(e){e.exports={spacer:"utils_spacer__2u3Di",heading2Xl:"utils_heading2Xl__16Gb4",headingXl:"utils_headingXl__3wKvI",headingLg:"utils_headingLg__3uZpz",headingMd:"utils_headingMd___QbOh",borderCircle:"utils_borderCircle__16bu1",colorInherit:"utils_colorInherit__rOQns",padding1px:"utils_padding1px__36ceH",list:"utils_list__2y256",listItem:"utils_listItem__2TaGU",lightText:"utils_lightText__3895Y"}},41664:function(e,t,n){e.exports=n(92167)},55462:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})}}]);