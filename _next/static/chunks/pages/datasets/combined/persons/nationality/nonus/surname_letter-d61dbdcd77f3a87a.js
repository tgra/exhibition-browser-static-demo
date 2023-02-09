(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[511],{907:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasets/combined/persons/nationality/nonus/surname_letter",function(){return i(4392)}])},9888:function(e,s,i){"use strict";i.d(s,{Z:function(){return r}});var n=i(5893),t=i(892);function r(e){let{id:s,_label:i,born:r,died:l}=e,c=null==s?void 0:s.match(/[0-9]+$/);return null!==c&&c[0],r=r.split("T")[0].split("-")[0],l=l.split("T")[0].split("-")[0],(0,n.jsxs)(t.Z.Item,{variant:"dark",action:!0,href:"#link"+s.split("/").pop(),children:[i," "]},s)}},8186:function(e,s,i){"use strict";i.d(s,{Z:function(){return j}});var n=i(5893),t=i(6144),r=i(682),l=i(4051),c=i(1555),h=i(4076),d=i(892),a=i(1664),o=i.n(a);i(9085);var x=i(5430);function j(e){let{id:s,_label:i,name:a,born:j,died:u,total_exhibitions:p,nationality:b,exhibitions:m,gender:Z}=e,f=null==s?void 0:s.match(/[0-9]+$/);null!==f&&f[0],j=j.split("T")[0].split("-")[0],u=u.split("T")[0].split("-")[0];let v={};for(let e in m.forEach(function(e){let s=e.start.split("-")[0].substring(0,3);void 0==v[s]&&(v[s]=[]),v[s].push(e)}),v)v[e]=v[e].sort((e,s)=>e.start>s.start?1:-1);var y=0,_=0,k=0,w=1e13;for(let e in v){var I=v[e].length;I>_&&(_=I,y=e),I<w&&(k=e,w=I)}for(var g=Object.keys(v),E=[],N=0;N<g.length;N++)E.push(g[N]+"0s");for(var A=[],O=Object.values(v),N=0;N<O.length;N++)A.push(O[N].length);return(0,n.jsxs)(t.Z.Pane,{eventKey:"#link"+s.split("/").pop(),children:[(0,n.jsx)("h3",{children:i}),(0,n.jsxs)(r.Z,{className:"bio",children:[(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("b",{children:"Born"})," ",j," ",(0,n.jsx)("sup",{children:(0,n.jsx)(o(),{href:"/datasets/combined/indexes/person/birth_date/"+j,children:"(click to view other people born in this year)"})})]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("b",{children:"Died"})," ",u]})]}),(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("b",{children:"Nationality"})," ",b]}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("b",{children:"Gender"})," ",Z]})]})]}),(0,n.jsx)("br",{}),(0,n.jsx)("h4",{children:"Exhibitions"}),(0,n.jsxs)("p",{children:["In this dataset, ",(0,n.jsx)("b",{children:i})," was involved in ",(0,n.jsx)("b",{children:p})," exhibitions across ",(0,n.jsx)("b",{children:Object.entries(v).length})," decades."]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Decade with the most number of exhibitions was the ",(0,n.jsxs)("b",{children:[y,"0s"]})," with ",(0,n.jsx)("b",{children:_})," exhibitions."]}),(0,n.jsxs)("li",{children:["Decade with the least number of exhibitions was the ",(0,n.jsxs)("b",{children:[k,"0s"]})," with ",(0,n.jsx)("b",{children:w})," exhibitions."]})]}),(0,n.jsx)(x.$Q,{data:{labels:E,datasets:[{label:"# of Exhibitions",data:A,borderWidth:1}]},options:{maintainAspectRatio:!0}}),(0,n.jsx)("br",{}),(0,n.jsx)(h.Z,{alwaysOpen:!0,children:Object.entries(v).map(e=>{let[s,i]=e;return(0,n.jsxs)(h.Z.Item,{eventKey:"section_"+s,children:[(0,n.jsxs)(h.Z.Header,{children:[s,"0s (",i&&Array.isArray(i)?i.length:"",")"]}),(0,n.jsx)(h.Z.Body,{children:(0,n.jsx)(d.Z,{children:null==i?void 0:i.map(e=>(0,n.jsxs)(d.Z.Item,{variant:"light",action:!0,href:"/exhibition-browser-static-demo/exhibition/"+e.id.split("/").pop(),children:[e.start.split("-")[0]," : ",e._label]},"influenced"+e.id))})})]},"section_"+s)})})]},"#link"+s.split("/").pop())}},4392:function(e,s,i){"use strict";i.r(s),i.d(s,{__N_SSG:function(){return Z}});var n=i(5893),t=i(7294),r=i(9008),l=i.n(r),c=i(3559),h=i(682),d=i(4051),a=i(1555),o=i(4539),x=i(4076),j=i(6144),u=i(892),p=i(9888),b=i(8186);let m=e=>{let{personSummaryDataList:s}=e;return void 0==s&&(s={}),(0,n.jsx)(c.Z,{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"MoMA & Alternative New York Exhibitions"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"}),(0,n.jsx)("script",{src:"https://unpkg.com/react/umd/react.production.min.js",async:!0})]}),(0,n.jsx)("main",{children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)("h1",{children:"MoMA & Alternative New York Exhibitions"}),(0,n.jsx)(d.Z,{children:(0,n.jsxs)(a.Z,{children:[(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(o.Z.Item,{href:"../../../../../../",children:"Home"}),(0,n.jsx)(o.Z.Item,{href:"../../../../../",children:"Datasets"}),(0,n.jsx)(o.Z.Item,{href:"../../../../",children:"Combined"}),(0,n.jsx)(o.Z.Item,{children:"Persons"}),(0,n.jsx)(o.Z.Item,{children:"Nationality"}),(0,n.jsx)(o.Z.Item,{children:"non-US"}),(0,n.jsx)(o.Z.Item,{children:"Surname letter"})]}),(0,n.jsx)("h2",{children:"Persons ordered by surname letter  "}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Dataset:Combined"}),(0,n.jsx)("li",{children:"Nationality:non-US"})]})]})}),(0,n.jsx)(d.Z,{children:(0,n.jsx)(x.Z,{children:Object.entries(s).sort().map(e=>{let[s,i]=e;return(0,n.jsxs)(x.Z.Item,{eventKey:"section_"+s,children:[(0,n.jsx)(x.Z.Header,{children:s}),(0,n.jsx)(x.Z.Body,{children:(0,n.jsx)(j.Z.Container,{id:"list-group-tabs",children:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(a.Z,{sm:4,children:(0,n.jsx)(u.Z,{numbered:!0,children:Array.isArray(i)?i.map(e=>(0,t.createElement)(p.Z,{...e,key:e.id})):""})}),(0,n.jsx)(a.Z,{sm:8,children:(0,n.jsx)(j.Z.Content,{children:Array.isArray(i)?i.map(e=>(0,t.createElement)(b.Z,{...e,key:"#link"+e.id.split("/").pop()})):""})})]})})})]},"section_"+s)})})})]})})]})})};var Z=!0;s.default=m}},function(e){e.O(0,[196,914,920,76,664,948,774,888,179],function(){return e(e.s=907)}),_N_E=e.O()}]);