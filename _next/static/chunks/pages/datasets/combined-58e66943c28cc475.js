(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{2740:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/combined",function(){return r(7641)}])},7641:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var s=r(5893),n=r(9008),a=r.n(n);r(5675);var i=r(682),d=r(4051),l=r(1555),o=r(4539),c=r(7337),h=r(545),x=r(5005),u=r(3454);function m(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:u.env.NEXT_PUBLIC_APP_NAME}),(0,s.jsx)("meta",{name:"description",content:"Exhibition data browser"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"})]}),(0,s.jsx)("main",{children:(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(d.Z,{children:(0,s.jsxs)(l.Z,{children:[(0,s.jsx)("h1",{children:"MoMA & Alternative New York Exhibitions"}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(o.Z.Item,{href:"../../",children:"Home"}),(0,s.jsx)(o.Z.Item,{href:"../",children:"Datasets"}),(0,s.jsx)(o.Z.Item,{children:"Combined"})]}),(0,s.jsx)("div",{children:(0,s.jsx)("h1",{children:"Dataset: Combined"})}),(0,s.jsx)("h2",{children:"Persons"})]})}),(0,s.jsx)(d.Z,{children:(0,s.jsxs)(l.Z,{children:[(0,s.jsx)("h4",{children:"Nationality"}),(0,s.jsx)(c.Z,{children:[{label:"US - Surname letter",id:"us",path:"persons/nationality/us/surname_letter/",desc:"Browse entries associated with US persons across the combined dataset"},{label:"US - Birth year",id:"us__birthyear",path:"persons/nationality/us/birth_year/",desc:"Browse entries associated with US persons across the combined dataset"},{label:"non-US - Surname letter",id:"nonus",path:"persons/nationality/nonus/surname_letter/",desc:"Browse entries associated with non-US persons across the combined dataset"},{label:"non-US - Birth year",id:"nonus_birthyear",path:"persons/nationality/nonus/birth_year/",desc:"Browse entries associated with non-US persons across the combined dataset."},{label:"non-US - Nationality",id:"nonus",path:"persons/nationality/nonus/nationality/",desc:"Browse entries associated with non-US persons across the combined dataset."}].map(e=>(0,s.jsx)(h.Z,{bg:"light",text:"dark",style:{width:"18rem"},children:(0,s.jsxs)(h.Z.Body,{children:[(0,s.jsx)(h.Z.Title,{children:e.label}),(0,s.jsx)(h.Z.Text,{children:e.desc}),(0,s.jsx)(x.Z,{href:e.path,variant:"primary",children:"Go"})]})},e.path))})]})}),(0,s.jsx)(d.Z,{children:(0,s.jsxs)(l.Z,{children:[(0,s.jsx)("h2",{children:"Exhibitions"}),(0,s.jsx)(c.Z,{children:(0,s.jsx)(h.Z,{bg:"light",children:(0,s.jsxs)(h.Z.Body,{children:[(0,s.jsx)(h.Z.Title,{children:"Start date"}),(0,s.jsx)(h.Z.Text,{}),(0,s.jsx)(x.Z,{href:"exhibitions/start_date",variant:"primary",children:"Go"})]})})})]})}),(0,s.jsx)(d.Z,{children:(0,s.jsxs)(l.Z,{children:[(0,s.jsx)("h2",{children:"Indexes"}),(0,s.jsx)(c.Z,{children:[{label:"Birth date",id:"birth_date_all",path:"indexes/person/birth_date_all"},{label:"Surname (First letter)",id:"surname_letter",path:"indexes/person/surname_letter"}].map(e=>(0,s.jsx)(h.Z,{bg:"light",children:(0,s.jsxs)(h.Z.Body,{children:[(0,s.jsx)(h.Z.Title,{children:e.label}),(0,s.jsx)(h.Z.Text,{children:e.desc}),(0,s.jsx)(x.Z,{href:e.path,variant:"primary",children:"Go"})]})},e.path))})]})})]})})]})}},5005:function(e,t,r){"use strict";var s=r(4184),n=r.n(s),a=r(7294),i=r(861),d=r(6792),l=r(5893);let o=a.forwardRef(({as:e,bsPrefix:t,variant:r,size:s,active:a,className:o,...c},h)=>{let x=(0,d.vE)(t,"btn"),[u,{tagName:m}]=(0,i.FT)({tagName:e,...c});return(0,l.jsx)(m,{...u,...c,ref:h,className:n()(o,x,a&&"active",r&&`${x}-${r}`,s&&`${x}-${s}`,c.href&&c.disabled&&"disabled")})});o.displayName="Button",o.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=o},545:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var s=r(4184),n=r.n(s),a=r(7294),i=r(6792),d=r(6611),l=r(5893),o=e=>a.forwardRef((t,r)=>(0,l.jsx)("div",{...t,ref:r,className:n()(t.className,e)}));let c=a.forwardRef(({bsPrefix:e,className:t,variant:r,as:s="img",...a},d)=>{let o=(0,i.vE)(e,"card-img");return(0,l.jsx)(s,{ref:d,className:n()(r?`${o}-${r}`:o,t),...a})});c.displayName="CardImg";let h=a.createContext(null);h.displayName="CardHeaderContext";let x=a.forwardRef(({bsPrefix:e,className:t,as:r="div",...s},d)=>{let o=(0,i.vE)(e,"card-header"),c=(0,a.useMemo)(()=>({cardHeaderBsPrefix:o}),[o]);return(0,l.jsx)(h.Provider,{value:c,children:(0,l.jsx)(r,{ref:d,...s,className:n()(t,o)})})});x.displayName="CardHeader";let u=o("h5"),m=o("h6"),p=(0,d.Z)("card-body"),j=(0,d.Z)("card-title",{Component:u}),f=(0,d.Z)("card-subtitle",{Component:m}),b=(0,d.Z)("card-link",{Component:"a"}),Z=(0,d.Z)("card-text",{Component:"p"}),v=(0,d.Z)("card-footer"),y=(0,d.Z)("card-img-overlay"),_=a.forwardRef(({bsPrefix:e,className:t,bg:r,text:s,border:a,body:d,children:o,as:c="div",...h},x)=>{let u=(0,i.vE)(e,"card");return(0,l.jsx)(c,{ref:x,...h,className:n()(t,u,r&&`bg-${r}`,s&&`text-${s}`,a&&`border-${a}`),children:d?(0,l.jsx)(p,{children:o}):o})});_.displayName="Card",_.defaultProps={body:!1};var w=Object.assign(_,{Img:c,Title:j,Subtitle:f,Body:p,Link:b,Text:Z,Header:x,Footer:v,ImgOverlay:y})},7337:function(e,t,r){"use strict";var s=r(6611);t.Z=(0,s.Z)("card-group")},6611:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var s=r(4184),n=r.n(s),a=/-(.)/g,i=r(7294),d=r(6792),l=r(5893);let o=e=>e[0].toUpperCase()+e.replace(a,function(e,t){return t.toUpperCase()}).slice(1);function c(e,{displayName:t=o(e),Component:r,defaultProps:s}={}){let a=i.forwardRef(({className:t,bsPrefix:s,as:a=r||"div",...i},o)=>{let c=(0,d.vE)(s,e);return(0,l.jsx)(a,{ref:o,className:n()(t,c),...i})});return a.defaultProps=s,a.displayName=t,a}}},function(e){e.O(0,[914,359,774,888,179],function(){return e(e.s=2740)}),_N_E=e.O()}]);