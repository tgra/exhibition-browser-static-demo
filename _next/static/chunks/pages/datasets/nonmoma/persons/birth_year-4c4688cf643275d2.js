(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{3454:function(e,r,t){"use strict";var n,i;e.exports=(null==(n=t.g.process)?void 0:n.env)&&"object"==typeof(null==(i=t.g.process)?void 0:i.env)?t.g.process:t(7663)},5099:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/nonmoma/persons/birth_year",function(){return t(7914)}])},9888:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(5893),i=t(8695);function s(e){let{id:r,_label:t,born:s,died:o}=e,c=null==r?void 0:r.match(/[0-9]+$/);return null!==c&&c[0],s=s.split("T")[0].split("-")[0],o=o.split("T")[0].split("-")[0],(0,n.jsxs)(i.Z.Item,{variant:"dark",action:!0,href:"#link"+r.split("/").pop(),children:[t," "]},r)}},7914:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return T}});var n=t(5893),i=t(7294),s=t(9008),o=t.n(s);t(5675);var c=t(2264),l=t(6675),u=t(3559),a=t(682),d=t(6699),h=t(4051),f=t(1555),p=t(5607),x=t(9080),m=t(8695),j=t(9888),v=t(9443);t(9085);var y=t(5430),b=t(3454);let Z=e=>{let{persons:r,years:t}=e;if(void 0==r)return(0,n.jsx)(u.Z,{children:(0,n.jsx)("div",{})});let s={labels:Object.keys(t),datasets:[{label:"# of Persons",data:Object.values(t),borderWidth:1}]};return(0,n.jsx)(u.Z,{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:b.env.APP_TITLE}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"}),(0,n.jsx)("script",{src:"https://unpkg.com/react/umd/react.production.min.js",async:!0})]}),(0,n.jsx)("main",{children:(0,n.jsxs)(a.Z,{fluid:!0,children:[(0,n.jsx)(c.Z,{}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(d.Z.Item,{href:"/Linked-Art-Exhibition-Browser-MoMA",children:"Home"}),(0,n.jsx)(d.Z.Item,{children:"Dataset"}),(0,n.jsx)(d.Z.Item,{children:"non-MoMA"}),(0,n.jsx)(d.Z.Item,{children:"Persons"}),(0,n.jsx)(d.Z.Item,{children:"Birth year"})]}),(0,n.jsx)("h1",{children:"Persons ordered by birth year"}),(0,n.jsxs)("p",{children:["A list of persons who influenced ",(0,n.jsx)("b",{children:"non-MoMA"})," exhibitions, ordered by birth year. Persons without a birth year in the record have been omitted."]}),(0,n.jsxs)(h.Z,{xs:1,md:2,lg:2,children:[(0,n.jsx)(f.Z,{children:(0,n.jsx)(y.$Q,{data:s})}),(0,n.jsx)(f.Z,{})]}),(0,n.jsx)(h.Z,{children:(0,n.jsx)(f.Z,{children:(0,n.jsx)(p.Z,{alwaysOpen:!0,children:Object.entries(t).map(e=>{let[t,s]=e;return(0,n.jsxs)(p.Z.Item,{eventKey:"year"+t,children:[(0,n.jsxs)(p.Z.Header,{children:[""==t?"no year recorded":t," (",s,")"]},"born_"+t),(0,n.jsx)(p.Z.Body,{children:Object.entries(r[t]).sort().map(e=>{let[r,s]=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("h5",{children:r}),(0,n.jsx)(x.Z.Container,{id:"list-group-tabs",children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(f.Z,{sm:4,children:(0,n.jsx)(m.Z,{numbered:!0,children:Array.isArray(s)?s.map(e=>(0,i.createElement)(j.Z,{...e,key:e.id})):""})}),(0,n.jsx)(f.Z,{sm:8,children:(0,n.jsx)(x.Z.Content,{children:Array.isArray(s)?s.map(e=>(0,i.createElement)(v.Z,{...e,key:"#link"+e.id.split("/").pop()})):""})})]})})]},t+r)})})]},t)})})})}),(0,n.jsx)(l.Z,{})]})})]})})};var T=!0;r.default=Z},7663:function(e){!function(){var r={229:function(e){var r,t,n,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{t="function"==typeof clearTimeout?clearTimeout:o}catch(e){t=o}}();var l=[],u=!1,a=-1;function d(){u&&n&&(u=!1,n.length?l=n.concat(l):a=-1,l.length&&h())}function h(){if(!u){var e=c(d);u=!0;for(var r=l.length;r;){for(n=l,l=[];++a<r;)n&&n[a].run();a=-1,r=l.length}n=null,u=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===o||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(r){try{return t.call(null,e)}catch(r){return t.call(this,e)}}}(e)}}function f(e,r){this.fun=e,this.array=r}function p(){}i.nextTick=function(e){var r=Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];l.push(new f(e,r)),1!==l.length||u||c(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},t={};function n(e){var i=t[e];if(void 0!==i)return i.exports;var s=t[e]={exports:{}},o=!0;try{r[e](s,s.exports,n),o=!1}finally{o&&delete t[e]}return s.exports}n.ab="//";var i=n(229);e.exports=i}()}},function(e){e.O(0,[196,420,663,675,606,907,121,774,888,179],function(){return e(e.s=5099)}),_N_E=e.O()}]);