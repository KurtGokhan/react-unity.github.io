(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{4294:function(e){function r(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=function(){return[]},r.resolve=r,r.id=4294,e.exports=r},1434:function(e,r,o){"use strict";o.r(r),o.d(r,{runESLint:function(){return v}});var n,s,t=o(1799),u=o(9396),i=o(8500);const l=(e,r)=>{let{line:o,column:n}=r;return e.line(o).from+(null!==n&&void 0!==n?n:0)-1},c=new i.Linter,a=o(9718);a.parse=null===(n=a.default)||void 0===n?void 0:n.parse,a.matches=null===(s=a.default)||void 0===s?void 0:s.matches;const d=o(240).rules;c.defineRules({"react-hooks/rules-of-hooks":d["rules-of-hooks"],"react-hooks/exhaustive-deps":d["exhaustive-deps"]});const f={parserOptions:{ecmaVersion:12,sourceType:"module",ecmaFeatures:{jsx:!0}},rules:{"react-hooks/rules-of-hooks":"error","react-hooks/exhaustive-deps":"error"}},v=e=>{const r=e.toString(),o=c.verify(r,f),n={1:"warning",2:"error"};return{codeMirrorErrors:o.map((r=>{if(!r)return;const o=l(e,{line:r.line,column:r.column});var s,t;const u=l(e,{line:null!==(s=r.endLine)&&void 0!==s?s:r.line,column:null!==(t=r.endColumn)&&void 0!==t?t:r.column});return{ruleId:r.ruleId,from:o,to:u,severity:n[r.severity],message:r.message}})).filter(Boolean),errors:o.map((e=>(0,u.Z)((0,t.Z)({},e),{severity:n[e.severity]})))}}}}]);