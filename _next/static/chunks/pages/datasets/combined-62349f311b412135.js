(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{3454:function(e,t,r){"use strict";var n,s;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(7663)},2740:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/combined",function(){return r(7641)}])},7641:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),s=r(9008),i=r.n(s);r(5675);var a=r(682),o=r(4051),l=r(1555),c=r(4539),d=r(7337),h=r(545),u=r(5005),f=r(3454);function p(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:f.env.NEXT_PUBLIC_APP_NAME}),(0,n.jsx)("meta",{name:"description",content:"Exhibition data browser"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"})]}),(0,n.jsx)("main",{children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(o.Z,{children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("h1",{children:"MoMA & Alternative New York Exhibitions"}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(c.Z.Item,{href:"../../",children:"Home"}),(0,n.jsx)(c.Z.Item,{href:"../",children:"Datasets"}),(0,n.jsx)(c.Z.Item,{children:"Combined"})]}),(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:"Dataset: Combined"})}),(0,n.jsx)("h2",{children:"Persons"})]})}),(0,n.jsx)(o.Z,{children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("h4",{children:"Nationality"}),(0,n.jsx)(d.Z,{children:[{label:"US - Surname letter",id:"us",path:"persons/nationality/us/surname_letter/",desc:"Browse entries associated with US persons across the combined dataset"},{label:"US - Birth year",id:"us__birthyear",path:"persons/nationality/us/birth_year/",desc:"Browse entries associated with US persons across the combined dataset"},{label:"non-US - Surname letter",id:"nonus",path:"persons/nationality/nonus/surname_letter/",desc:"Browse entries associated with non-US persons across the combined dataset"},{label:"non-US - Birth year",id:"nonus_birthyear",path:"persons/nationality/nonus/birth_year/",desc:"Browse entries associated with non-US persons across the combined dataset."},{label:"non-US - Nationality",id:"nonus",path:"persons/nationality/nonus/nationality/",desc:"Browse entries associated with non-US persons across the combined dataset."}].map(e=>(0,n.jsx)(h.Z,{bg:"light",text:"dark",style:{width:"18rem"},children:(0,n.jsxs)(h.Z.Body,{children:[(0,n.jsx)(h.Z.Title,{children:e.label}),(0,n.jsx)(h.Z.Text,{children:e.desc}),(0,n.jsx)(u.Z,{href:e.path,variant:"primary",children:"Go"})]})},e.path))})]})}),(0,n.jsx)(o.Z,{children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("h2",{children:"Exhibitions"}),(0,n.jsx)(d.Z,{children:(0,n.jsx)(h.Z,{bg:"light",children:(0,n.jsxs)(h.Z.Body,{children:[(0,n.jsx)(h.Z.Title,{children:"Start date"}),(0,n.jsx)(h.Z.Text,{}),(0,n.jsx)(u.Z,{href:"exhibitions/start_date",variant:"primary",children:"Go"})]})})})]})}),(0,n.jsx)(o.Z,{children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("h2",{children:"Indexes"}),(0,n.jsx)(d.Z,{children:[{label:"Birth date",id:"birth_date_all",path:"indexes/person/birth_date_all"},{label:"Surname (First letter)",id:"surname_letter",path:"indexes/person/surname_letter"}].map(e=>(0,n.jsx)(h.Z,{bg:"light",children:(0,n.jsxs)(h.Z.Body,{children:[(0,n.jsx)(h.Z.Title,{children:e.label}),(0,n.jsx)(h.Z.Text,{children:e.desc}),(0,n.jsx)(u.Z,{href:e.path,variant:"primary",children:"Go"})]})},e.path))})]})})]})})]})}},7663:function(e){!function(){var t={229:function(e){var t,r,n,s=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l=[],c=!1,d=-1;function h(){c&&n&&(c=!1,n.length?l=n.concat(l):d=-1,l.length&&u())}function u(){if(!c){var e=o(h);c=!0;for(var t=l.length;t;){for(n=l,l=[];++d<t;)n&&n[d].run();d=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||c||o(u)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=p,s.addListener=p,s.once=p,s.off=p,s.removeListener=p,s.removeAllListeners=p,s.emit=p,s.prependListener=p,s.prependOnceListener=p,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var s=n(229);e.exports=s}()},5005:function(e,t,r){"use strict";var n=r(4184),s=r.n(n),i=r(7294),a=r(861),o=r(6792),l=r(5893);let c=i.forwardRef(({as:e,bsPrefix:t,variant:r,size:n,active:i,className:c,...d},h)=>{let u=(0,o.vE)(t,"btn"),[f,{tagName:p}]=(0,a.FT)({tagName:e,...d});return(0,l.jsx)(p,{...f,...d,ref:h,className:s()(c,u,i&&"active",r&&`${u}-${r}`,n&&`${u}-${n}`,d.href&&d.disabled&&"disabled")})});c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c},545:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(4184),s=r.n(n),i=r(7294),a=r(6792),o=r(6611),l=r(5893),c=e=>i.forwardRef((t,r)=>(0,l.jsx)("div",{...t,ref:r,className:s()(t.className,e)}));let d=i.forwardRef(({bsPrefix:e,className:t,variant:r,as:n="img",...i},o)=>{let c=(0,a.vE)(e,"card-img");return(0,l.jsx)(n,{ref:o,className:s()(r?`${c}-${r}`:c,t),...i})});d.displayName="CardImg";let h=i.createContext(null);h.displayName="CardHeaderContext";let u=i.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},o)=>{let c=(0,a.vE)(e,"card-header"),d=(0,i.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,l.jsx)(h.Provider,{value:d,children:(0,l.jsx)(r,{ref:o,...n,className:s()(t,c)})})});u.displayName="CardHeader";let f=c("h5"),p=c("h6"),m=(0,o.Z)("card-body"),x=(0,o.Z)("card-title",{Component:f}),v=(0,o.Z)("card-subtitle",{Component:p}),j=(0,o.Z)("card-link",{Component:"a"}),b=(0,o.Z)("card-text",{Component:"p"}),y=(0,o.Z)("card-footer"),Z=(0,o.Z)("card-img-overlay"),w=i.forwardRef(({bsPrefix:e,className:t,bg:r,text:n,border:i,body:o,children:c,as:d="div",...h},u)=>{let f=(0,a.vE)(e,"card");return(0,l.jsx)(d,{ref:u,...h,className:s()(t,f,r&&`bg-${r}`,n&&`text-${n}`,i&&`border-${i}`),children:o?(0,l.jsx)(m,{children:c}):c})});w.displayName="Card",w.defaultProps={body:!1};var g=Object.assign(w,{Img:d,Title:x,Subtitle:v,Body:m,Link:j,Text:b,Header:u,Footer:y,ImgOverlay:Z})},7337:function(e,t,r){"use strict";var n=r(6611);t.Z=(0,n.Z)("card-group")},6611:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(4184),s=r.n(n),i=/-(.)/g,a=r(7294),o=r(6792),l=r(5893);let c=e=>e[0].toUpperCase()+e.replace(i,function(e,t){return t.toUpperCase()}).slice(1);function d(e,{displayName:t=c(e),Component:r,defaultProps:n}={}){let i=a.forwardRef(({className:t,bsPrefix:n,as:i=r||"div",...a},c)=>{let d=(0,o.vE)(n,e);return(0,l.jsx)(i,{ref:c,className:s()(t,d),...a})});return i.defaultProps=n,i.displayName=t,i}}},function(e){e.O(0,[914,675,774,888,179],function(){return e(e.s=2740)}),_N_E=e.O()}]);