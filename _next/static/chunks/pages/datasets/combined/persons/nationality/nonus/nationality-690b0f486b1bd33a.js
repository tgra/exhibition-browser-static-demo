(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[409],{3844:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/combined/persons/nationality/nonus/nationality",function(){return t(595)}])},9888:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),i=t(892);function s(e){let{id:n,_label:t,born:s,died:o}=e,l=null==n?void 0:n.match(/[0-9]+$/);return null!==l&&l[0],s=s.split("T")[0].split("-")[0],o=o.split("T")[0].split("-")[0],(0,r.jsxs)(i.Z.Item,{variant:"dark",action:!0,href:"#link"+n.split("/").pop(),children:[t," ",""==s?"":"("+s+"-"+o+")"]},n)}},8186:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),i=t(6144),s=t(892),o=t(4076),l=t(1664),c=t.n(l);function a(e){let{id:n,_label:t,name:l,born:a,died:d,total_exhibitions:h,nationality:u,exhibitions:p,gender:x}=e,j=null==n?void 0:n.match(/[0-9]+$/);null!==j&&j[0],a=a.split("T")[0].split("-")[0],d=d.split("T")[0].split("-")[0];let f={};for(let e in p.forEach(function(e){let n=e.start.split("-")[0].substring(0,3);void 0==f[n]&&(f[n]=[]),f[n].push(e)}),f)f[e]=f[e].sort((e,n)=>e.start>n.start?1:-1);return(0,r.jsxs)(i.Z.Pane,{eventKey:"#link"+n.split("/").pop(),children:[(0,r.jsx)("h1",{children:t}),(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(s.Z.Item,{variant:"dark",children:[(0,r.jsx)("h5",{children:"Born"}),(0,r.jsx)(c(),{href:"/datasets/combined/indexes/person/birth_date/"+a,children:a})]}),(0,r.jsxs)(s.Z.Item,{variant:"dark",children:[(0,r.jsx)("h5",{children:"Died"}),d]}),(0,r.jsxs)(s.Z.Item,{variant:"dark",children:[(0,r.jsx)("h5",{children:"Nationality"}),u]}),(0,r.jsxs)(s.Z.Item,{variant:"dark",children:[(0,r.jsx)("h5",{children:"Gender"}),x]})]}),(0,r.jsx)("br",{}),(0,r.jsx)("h4",{children:"Exhibitions"}),(0,r.jsxs)("p",{children:["Total number of exhibitions: ",h]}),(0,r.jsx)(o.Z,{alwaysOpen:!0,children:Object.entries(f).map(e=>{let[n,t]=e;return(0,r.jsxs)(o.Z.Item,{eventKey:"section_"+n,children:[(0,r.jsxs)(o.Z.Header,{children:[n,"0s (",t&&Array.isArray(t)?t.length:"",")"]}),(0,r.jsx)(o.Z.Body,{children:(0,r.jsx)(s.Z,{numbered:!0,children:null==t?void 0:t.map(e=>(0,r.jsxs)(s.Z.Item,{variant:"light",action:!0,href:"/exhibition-browser-static-demo/exhibition/"+e.id.split("/").pop(),children:[e.start.split("T")[0],(0,r.jsx)("h5",{children:e._label})]},"influenced"+e.id))})})]},"section_"+n)})})]},"#link"+n.split("/").pop())}},595:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return y}});var r=t(5893),i=t(7294),s=t(9008),o=t.n(s);t(7334);var l=t(3559),c=t(682),a=t(4051),d=t(1555),h=t(4539),u=t(4076),p=t(6144),x=t(892),j=t(9888),f=t(8186);let m=e=>{let{personSummaryDataList:n}=e;return void 0==n&&(n={}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"MoMA & Alternative New York Exhibitions"}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"}),(0,r.jsx)("script",{src:"https://unpkg.com/react/umd/react.production.min.js",async:!0})]}),(0,r.jsx)("main",{children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(a.Z,{children:(0,r.jsxs)(d.Z,{children:[(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(h.Z.Item,{href:"../../../../../../",children:"Home"}),(0,r.jsx)(h.Z.Item,{href:"../../../../../",children:"Datasets"}),(0,r.jsx)(h.Z.Item,{href:"../../../../",children:"Combined"}),(0,r.jsx)(h.Z.Item,{children:"Persons"}),(0,r.jsx)(h.Z.Item,{children:"Nationality"}),(0,r.jsx)(h.Z.Item,{children:"non-US"}),(0,r.jsx)(h.Z.Item,{children:"Nationality"})]}),(0,r.jsx)("h1",{children:"Persons - ordered by nationality"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Dataset: Combined"}),(0,r.jsx)("li",{children:"Nationality: non-United States"})]}),(0,r.jsx)(u.Z,{children:Object.entries(n).sort().map(e=>{let[n,t]=e;return(0,r.jsxs)(u.Z.Item,{eventKey:"section_"+n,children:[(0,r.jsx)(u.Z.Header,{children:n}),(0,r.jsx)(u.Z.Body,{children:(0,r.jsx)(p.Z.Container,{id:"list-group-tabs",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(d.Z,{sm:4,children:(0,r.jsx)(x.Z,{numbered:!0,children:Array.isArray(t)?t.map(e=>(0,i.createElement)(j.Z,{...e,key:e.id})):""})}),(0,r.jsx)(d.Z,{sm:8,children:(0,r.jsx)(p.Z.Content,{children:Array.isArray(t)?t.map(e=>(0,i.createElement)(f.Z,{...e,key:"#link"+e.id.split("/").pop()})):""})})]})})})]},"section_"+n)})})]})}),(0,r.jsx)(a.Z,{})]})})]})})};var y=!0;n.default=m},7334:function(e){!function(){"use strict";var n,t={815:function(e){e.exports=function(e,t,r,i){t=t||"&",r=r||"=";var s={};if("string"!=typeof e||0===e.length)return s;var o=/\+/g;e=e.split(t);var l=1e3;i&&"number"==typeof i.maxKeys&&(l=i.maxKeys);var c=e.length;l>0&&c>l&&(c=l);for(var a=0;a<c;++a){var d,h,u,p,x=e[a].replace(o,"%20"),j=x.indexOf(r);(j>=0?(d=x.substr(0,j),h=x.substr(j+1)):(d=x,h=""),u=decodeURIComponent(d),p=decodeURIComponent(h),Object.prototype.hasOwnProperty.call(s,u))?n(s[u])?s[u].push(p):s[u]=[s[u],p]:s[u]=p}return s};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},577:function(e){var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,s,o,l){return(s=s||"&",o=o||"=",null===e&&(e=void 0),"object"==typeof e)?r(i(e),function(i){var l=encodeURIComponent(n(i))+o;return t(e[i])?r(e[i],function(e){return l+encodeURIComponent(n(e))}).join(s):l+encodeURIComponent(n(e[i]))}).join(s):l?encodeURIComponent(n(l))+o+encodeURIComponent(n(e)):""};var t=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function r(e,n){if(e.map)return e.map(n);for(var t=[],r=0;r<e.length;r++)t.push(n(e[r],r));return t}var i=Object.keys||function(e){var n=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(t);return n}}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}},o=!0;try{t[e](s,s.exports,i),o=!1}finally{o&&delete r[e]}return s.exports}i.ab="//";var s={};(n=s).decode=n.parse=i(815),n.encode=n.stringify=i(577),e.exports=s}()}},function(e){e.O(0,[914,920,76,674,774,888,179],function(){return e(e.s=3844)}),_N_E=e.O()}]);