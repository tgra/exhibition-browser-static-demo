(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[771],{4474:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exhibition/[id]",function(){return t(3646)}])},9443:function(e,i,t){"use strict";t.d(i,{Z:function(){return _}});var n=t(5893),s=t(6144),r=t(682),l=t(4051),d=t(1555),c=t(4076),o=t(5147),a=t(5005),h=t(1664),x=t.n(h);t(9085);var j=t(5430),p=t(2023),b=t.n(p);function _(e){let{id:i,_label:t,born:h,died:p,total_exhibitions:_,nationality:u,exhibitions:m,gender:f,equivalent:v,image_url:g,bio:y}=e,Z={};for(let e in m.forEach(function(e){let i=e.start.split("-")[0].substring(0,3);void 0==Z[i]&&(Z[i]=[]),Z[i].push(e)}),Z)Z[e]=Z[e].sort((e,i)=>e.start>i.start?1:-1);let w={};Object.entries(Z).map(e=>{let[i,t]=e;return w[i+"0s"]=t.length});let k=Object.keys(w);Object.values(w);let O=Object.keys(w).filter(e=>w[e]==Math.max.apply(null,Object.values(w)));var E=w[O[0]];let D=Object.keys(w).filter(e=>w[e]==Math.min.apply(null,Object.values(w)));var N=w[D[0]];let H={};m.forEach(function(e){let i=e.start.split("-")[0].substring(0,3)+"0s",t=e.location;void 0==H[t]&&(H[t]=[]),void 0==H[t][i]&&(H[t][i]=[]),H[t][i].push(e)}),Object.entries(H).map(e=>{let[i,t]=e;return Object.entries(t).map(e=>{let[t,n]=e;return H[i][t]=n.length})});let I=[];return Object.entries(H).map(e=>{let[i,t]=e;return I.push({label:i,data:k.map(e=>t[e]?t[e]:0),borderWidth:1,backgroundColor:b()({luminosity:"dark",seed:i})})}),(0,n.jsxs)(s.Z.Pane,{eventKey:"#link"+i.split("/").pop(),children:[(0,n.jsx)("h3",{children:t}),(0,n.jsx)(r.Z,{className:"bio",children:(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Biographical statement"})," ",y]}),(0,n.jsx)("b",{children:"Born"})," ",h.split("T")[0].split("-")[0]," ",(0,n.jsx)("sup",{children:(0,n.jsx)(x(),{href:"/datasets/combined/indexes/person/birth_date/"+h,children:"(click to view other people born in this year)"})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Died"})," ",p.split("T")[0].split("-")[0]," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Nationality"})," ",u]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Gender"})," ",f]}),(0,n.jsx)("p",{children:(0,n.jsxs)("b",{children:["External information resources for ",t]})}),(0,n.jsx)("ol",{children:v.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)(x(),{href:e,target:"_new",children:e.split("/")[2]})},e))})]}),(0,n.jsx)(d.Z,{children:(0,n.jsx)("div",{className:"image",children:g?(0,n.jsx)("img",{src:g,height:"100%",alt:"Picture of "+t},g):""})})]})}),(0,n.jsx)("br",{}),(0,n.jsx)("h4",{children:"Exhibitions"}),(0,n.jsxs)("p",{children:["In this dataset, ",(0,n.jsx)("b",{children:t})," was involved in ",(0,n.jsx)("b",{children:_})," exhibitions across ",(0,n.jsx)("b",{children:Object.entries(Z).length})," decades."]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Decade(s) with the most number of exhibitions was the ",(0,n.jsx)("b",{children:O.toString()})," with ",(0,n.jsx)("b",{children:E})," exhibitions."]}),(0,n.jsxs)("li",{children:["Decade with the least number of exhibitions was the ",(0,n.jsx)("b",{children:D.toString()})," with ",(0,n.jsx)("b",{children:N})," exhibitions."]})]}),(0,n.jsx)(j.$Q,{data:{labels:k,datasets:I},width:"200",height:"50",options:{plugins:{title:{display:!0,text:"Number of exhibitions"}},responsive:!0,maintainAspectRatio:!0,scales:{x:{stacked:!1},y:{stacked:!0}}}}),(0,n.jsx)("br",{}),(0,n.jsx)(c.Z,{alwaysOpen:!0,children:Object.entries(Z).map(e=>{let[i,t]=e;return(0,n.jsxs)(c.Z.Item,{eventKey:"section_"+i,children:[(0,n.jsxs)(c.Z.Header,{children:[i,"0s (",t&&Array.isArray(t)?t.length:"",")"]}),(0,n.jsx)(c.Z.Body,{children:(0,n.jsxs)(o.Z,{bordered:!0,hover:!0,size:"sm",striped:"columns",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"#"}),(0,n.jsx)("th",{children:"Start"}),(0,n.jsx)("th",{children:"End"}),(0,n.jsx)("th",{children:"Location"}),(0,n.jsx)("th",{children:"Title"}),(0,n.jsx)("th",{})]})}),(0,n.jsx)("tbody",{children:null==t?void 0:t.map((e,i)=>{var t,s;return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:i+1}),(0,n.jsx)("td",{children:(0,n.jsx)("nobr",{children:null===(t=e.start)||void 0===t?void 0:t.split("T")[0]})}),(0,n.jsx)("td",{children:(0,n.jsx)("nobr",{children:null===(s=e.end)||void 0===s?void 0:s.split("T")[0]})}),(0,n.jsx)("td",{children:(0,n.jsx)("nobr",{children:e.location})}),(0,n.jsx)("td",{children:e._label}),(0,n.jsx)("td",{children:(0,n.jsx)(a.Z,{href:"/exhibition-browser-static-demo/exhibition/"+e.id.split("/").pop(),children:"View"})})]},"influenced"+e.id)})})]},"decade"+i)})]},"section_"+i)})})]},"#link"+i.split("/").pop())}t(5675)},3646:function(e,i,t){"use strict";t.r(i),t.d(i,{__N_SSG:function(){return M},default:function(){return T}});var n=t(5893),s=t(7294),r=t(1664),l=t.n(r),d=t(9008),c=t.n(d),o=t(3559),a=t(682),h=t(4051),x=t(1555),j=t(4539),p=t(5005),b=t(4076),_=t(5147),u=t(6144),m=t(892);function f(e){let{id:i,_label:t}=e,s=null==i?void 0:i.match(/[0-9]+$/);return null!==s&&s[0],(0,n.jsxs)(m.Z.Item,{variant:"dark",action:!0,href:"#link"+i.split("/").pop(),children:[t," "]},i)}var v=t(9443),g=t(2023),y=t.n(g);function Z(){return(0,n.jsxs)("div",{children:[" ",(0,n.jsx)("hr",{}),(0,n.jsxs)(a.Z,{className:"footer",children:[(0,n.jsx)(h.Z,{children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("h4",{children:"Acknowledgements"}),(0,n.jsx)("p",{children:" This work was undertaken by the Linked Art II project at the University of Oxford (Principal Investigator: Dr. Kevin Page, Oxford e-Research Centre) funded by the UK Arts and Humanities Research Council (AHRC project reference AH/T013117/1)."})]})}),(0,n.jsxs)(h.Z,{children:[(0,n.jsxs)(x.Z,{children:["The project's Research Software Engineer was ",(0,n.jsx)(p.Z,{variant:"secondary",href:"https://www.linkedin.com/in/tanyagrayjones/",target:"_new",children:"Tanya Gray"}),"."]}),(0,n.jsxs)(x.Z,{children:["We gratefully acknowledge the participation and contributions of our project partners and the wider ",(0,n.jsx)(p.Z,{variant:"secondary",href:"https://linked.art/",children:"Linked Art community"}),"."]})]})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})}var w=t(4209);t(9665);var k=t(381),O=t.n(k);t(3454),t(2203);var E=t(5152),D=t.n(E);let N=D()(()=>Promise.all([t.e(269),t.e(396)]).then(t.bind(t,4396)),{loadableGenerated:{webpack:()=>[4396]},ssr:!1});var H=t(3915),I=t.n(H);t(9085);let Y=e=>{var i,t,r,d,g,k,E,D,H,Y,M;let{exData:T,person_list:A,exs_samedate:C,id:S,person_list_summary:P,id_list:z}=e;if(void 0==T)return(0,n.jsx)("div",{children:"processing..."});let B=T.took_place_at?T.took_place_at[0].defined_by:"POINT(0 0)";B=(B=(B=B.split("POINT(")[1]).split(")")[0]).split(" ");let L=0;L=T.influenced_by.length;let R=Object.keys(C),K=[{id:"selected",title:"Selected Exhibition"}],V=[{id:1,group:"selected",title:T._label,height:30,start_time:O()(T.timespan.begin_of_the_begin,"YYYY-MM-DD").format("x"),end_time:O()(T.timespan.end_of_the_end,"YYYY-MM-DD").format("x"),itemProps:{style:{borderRadius:10,color:"black",background:y()({luminosity:"light",seed:"selected"})}}}];R.forEach(function(e){K.push({id:e,title:e,stackItems:!0})});let F={};Object.entries(C).forEach(e=>{let[i,t]=e,n=t.sort(function(e,i){return new Date(e.start)-new Date(i.start)});F[i]=n}),Object.entries(C).forEach(e=>{let[i,t]=e;t.forEach(function(e){V.push({id:e.id,group:i,canMove:!0,title:e._label,start_time:parseInt(O()(e.start,"YYYY-MM-DD").format("x")),end_time:parseInt(O()(e.end,"YYYY-MM-DD").format("x")),itemProps:{onDoubleClick:()=>{window.location.href="../"+e.id.split("/").pop()},style:{borderRadius:10,color:"black",background:y()({luminosity:"light",seed:e._label})}}})})});let W=T._label,G=(null===(i=T.timespan)||void 0===i?void 0:i.begin_of_the_begin)?null===(t=T.timespan)||void 0===t?void 0:t.begin_of_the_begin:"",U=""!==G?new Date(G).toDateString():"",Q=(null===(r=T.timespan)||void 0===r?void 0:r.end_of_the_end)?null===(d=T.timespan)||void 0===d?void 0:d.end_of_the_end:"",q=""!==Q?" until "+new Date(Q).toDateString():"until [not recorded]",X=""!=G?(0,n.jsxs)("div",{children:[(0,n.jsx)("h5",{children:"Date"}),(0,n.jsxs)("p",{children:[U,"  ",q]})]},G+Q):"";return(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:" Alternative New York Exhibition - Exhibition"}),(0,n.jsx)("script",{src:"https://unpkg.com/react/umd/react.production.min.js",async:!0}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",integrity:"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",crossOrigin:""})]}),(0,n.jsx)("main",{children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(h.Z,{children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("h1",{children:"MoMA & Alternative New York Exhibitions"}),(0,n.jsxs)(j.Z,{children:[(0,n.jsx)(j.Z.Item,{href:"/exhibition-browser-static-demo",children:"Home"}),(0,n.jsx)(j.Z.Item,{children:"Exhibition"}),(0,n.jsx)(j.Z.Item,{children:W})]})]})}),(0,n.jsx)(h.Z,{children:(0,n.jsx)(x.Z,{children:(0,n.jsx)("h1",{children:W})})}),(0,n.jsx)("h3",{children:"Summary information"}),(0,n.jsx)("div",{className:"ex_summary",children:(0,n.jsxs)(h.Z,{children:[(0,n.jsxs)(x.Z,{children:[X,T.took_place_at?(0,n.jsxs)("div",{children:[(0,n.jsx)("h5",{children:"Location"}),(0,n.jsx)("ul",{children:T.took_place_at.map(e=>(0,n.jsxs)("li",{children:[e._label," ",e.classified_as?(0,n.jsxs)("sup",{children:["type:",(0,n.jsx)("i",{children:e.classified_as[0]._label})]}):""]},e._label))})]}):"",T.carried_out_by[0]?(0,n.jsxs)("div",{children:[(0,n.jsx)("h5",{children:"Carried out by"}),(0,n.jsx)("p",{children:T.carried_out_by[0]._label}),(0,n.jsx)("ol",{children:T.carried_out_by[0].equivalent.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:e.id,target:"_new",children:e.id.split("//")[1].split("/")[0]})},e.id))})]}):"",T.subject_of&&(null===(g=T.subject_of[0].digitally_carried_by[0])||void 0===g?void 0:g.classified_as[0].id)=="http://vocab.getty.edu/aat/300264578"?(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsxs)(p.Z,{variant:"secondary",href:null===(k=null===(E=null===(D=T.subject_of[0])||void 0===D?void 0:D.digitally_carried_by[0])||void 0===E?void 0:E.access_point[0])||void 0===k?void 0:k.id,target:"_new",children:["Further exhibition information at ",null===(H=null===(Y=null===(M=T.subject_of[0])||void 0===M?void 0:M.digitally_carried_by[0])||void 0===Y?void 0:Y.access_point[0])||void 0===H?void 0:H.id.split("//")[1].split("/")[0]]})}),(0,n.jsx)("p",{children:(0,n.jsxs)(p.Z,{variant:"secondary",href:"/exhibition-browser-static-demo/datasets/combined/exhibitions/"+T.carried_out_by[0]._label+"/",children:["View other exhibitions carried out by ",T.carried_out_by[0]._label]})})]}):""]}),(0,n.jsx)(x.Z,{children:(0,n.jsx)(N,{className:I().homeMap,center:B,zoom:20,children:e=>{let{TileLayer:i,Marker:t,Popup:s}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)(i,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,n.jsx)(t,{position:B,children:(0,n.jsxs)(s,{children:[T.took_place_at?T.took_place_at[0]._label:""," : ",T._label]})})]})}})})]})}),(0,n.jsx)(h.Z,{children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("hr",{}),(0,n.jsx)("h3",{children:"Concurrent exhibitions"}),(0,n.jsxs)("p",{children:["Exhibitions that overlap with this exhibition, in this dataset. ",(0,n.jsx)("i",{children:"Double-click an item in the timeline to view the corresponding exhibition page."})]}),(0,n.jsx)(w.ZP,{groups:K,items:V,width:600,height:400,sidebarWidth:200,defaultTimeStart:new Date(T.timespan.begin_of_the_begin),defaultTimeEnd:new Date(T.timespan.end_of_the_end)}),(0,n.jsx)("br",{})]})}),(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(x.Z,{children:(0,n.jsx)(N,{className:I().homeMap,center:B,zoom:12,children:e=>{let{TileLayer:i,Marker:t,Popup:s}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)(i,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,n.jsx)(t,{position:B,children:(0,n.jsxs)(s,{children:[T.took_place_at?T.took_place_at[0]._label:""," : ",T._label]})}),Object.keys(C).map(e=>(0,n.jsx)(t,{position:String(C[e][0].coords.split("POINT(")[1]).split(")")[0].split(" "),children:(0,n.jsxs)(s,{children:[" ",(0,n.jsx)("h6",{children:e}),(0,n.jsx)("ol",{children:C[e].map(e=>(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:""+String(e.id).split("/").pop(),children:e._label})},"m"+e.id))})]})},e))]})}})}),(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("p",{children:"Concurrent exhibitions grouped by organisation"}),(0,n.jsx)(b.Z,{alwaysOpen:!0,className:"accordion_orgs",children:Object.keys(C).map((e,i)=>(0,n.jsxs)(b.Z.Item,{eventKey:"section_org_"+e,children:[(0,n.jsx)(b.Z.Header,{children:e}),(0,n.jsx)(b.Z.Body,{children:(0,n.jsxs)(_.Z,{bordered:!0,hover:!0,size:"sm",striped:"columns",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"#"}),(0,n.jsx)("th",{children:"Start"}),(0,n.jsx)("th",{children:"End"}),(0,n.jsx)("th",{children:"Title"}),(0,n.jsx)("th",{})]})}),(0,n.jsx)("tbody",{children:C[e].map((e,i)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:i+1}),(0,n.jsx)("td",{children:(0,n.jsx)("nobr",{children:e.start})}),(0,n.jsx)("td",{children:(0,n.jsx)("nobr",{children:e.end})}),(0,n.jsx)("td",{children:e._label}),(0,n.jsx)("td",{children:(0,n.jsx)(p.Z,{variant:"link",href:"/exhibition-browser-static-demo/exhibition/"+e.id.split("/").pop(),children:"View"})})]},e.id))})]},"concurrent"+i)})]},"section_org_"+e))})]})]}),(0,n.jsx)(h.Z,{children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)("hr",{}),(0,n.jsx)("h3",{children:"Artists"}),(0,n.jsxs)("p",{children:["There were ",(0,n.jsx)("b",{children:L})," persons who influenced this exhibition."]}),(0,n.jsx)("p",{children:"Persons are ordered alphabetically by surname. Select a letter in the concertina to continue. Click on the person's name to view further information."}),(0,n.jsx)(u.Z.Container,{id:"list-group-tabs",children:(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(x.Z,{sm:3,children:(0,n.jsx)(b.Z,{alwaysOpen:!0,className:"accordion_persons",children:Object.entries(A).map(e=>{let[i,t]=e;return(0,n.jsxs)(b.Z.Item,{className:"accordion_persons",eventKey:"section_person_"+i,children:[(0,n.jsx)(b.Z.Header,{children:i}),(0,n.jsx)(b.Z.Body,{children:(0,n.jsx)(m.Z,{children:t.map(e=>(0,s.createElement)(f,{...e,key:e.id}))})})]},"section_person_"+i)})})}),(0,n.jsx)(x.Z,{sm:9,children:(0,n.jsx)(u.Z.Content,{children:P.map(e=>(0,s.createElement)(v.Z,{...e,key:"#link"+e.id.split("/").pop()}))})})]})})]})}),(0,n.jsx)(Z,{})]})})]})};var M=!0,T=Y},3915:function(e){e.exports={main:"Home_main__EtNt2",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",center:"Home_center__V0nxp",logo:"Home_logo__80mSr",thirteen:"Home_thirteen__ocdUI",rotate:"Home_rotate__99GkW",content:"Home_content___fOQz",vercelLogo:"Home_vercelLogo__lhIxO"}},2203:function(){}},function(e){e.O(0,[196,885,914,920,76,664,675,948,704,774,888,179],function(){return e(e.s=4474)}),_N_E=e.O()}]);