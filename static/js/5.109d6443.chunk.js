(this.webpackJsonpstar_wars_explorer_tsx=this.webpackJsonpstar_wars_explorer_tsx||[]).push([[5],{146:function(e,t,a){"use strict";var r=a(1),n=a(89),o=a(0),c=(a(16),a(90)),i=a(183),s=a(91),l=o.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.raised,d=void 0!==l&&l,j=Object(n.a)(e,["classes","className","raised"]);return o.createElement(i.a,Object(r.a)({className:Object(c.a)(a.root,s),elevation:d?8:1,ref:t},j))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},147:function(e,t,a){"use strict";var r=a(1),n=a(89),o=a(0),c=(a(16),a(90)),i=a(91),s=o.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,l=void 0===s?"div":s,d=Object(n.a)(e,["classes","className","component"]);return o.createElement(l,Object(r.a)({className:Object(c.a)(a.root,i),ref:t},d))}));t.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},148:function(e,t,a){"use strict";var r=a(1),n=a(89),o=a(0),c=(a(16),a(90)),i=a(91),s=["video","audio","picture","iframe","img"],l=o.forwardRef((function(e,t){var a=e.children,i=e.classes,l=e.className,d=e.component,j=void 0===d?"div":d,b=e.image,p=e.src,x=e.style,u=Object(n.a)(e,["children","classes","className","component","image","src","style"]),m=-1!==s.indexOf(j),h=!m&&b?Object(r.a)({backgroundImage:'url("'.concat(b,'")')},x):x;return o.createElement(j,Object(r.a)({className:Object(c.a)(i.root,l,m&&i.media,-1!=="picture img".indexOf(j)&&i.img),ref:t,style:h,src:m?b||p:void 0},u),a)}));t.a=Object(i.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},198:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),o=a.n(n),c=a(12),i=a.n(c),s=a(17),l=a(31),d=a(179),j=a(203),b=a(146),p=a(148),x=a(147),u=a(191),m=a(4),h=Object(d.a)((function(e){return Object(j.a)({root:{minWidth:275,background:"linear-gradient(45deg, #35B62C 30%, #7DFE74 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",marginBottom:"200px",marginTop:"20px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},media:{paddingTop:"56.25%",marginLeft:"10%",marginRight:"10%",paddingRight:"20%",paddingLeft:"10%",paddingBottom:"10%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}})}));var O=function(e){var t=e.people,a=e.loadingPeople,r=h(),n=Object(m.jsx)("span",{className:r.bullet,children:"\u2022"});return Object(m.jsxs)("section",{children:[Object(m.jsx)("br",{}),a&&"Loading...",!a&&t&&Object(m.jsx)(b.a,{className:r.root,variant:"outlined",children:Object(m.jsxs)(x.a,{children:[Object(m.jsxs)(u.a,{variant:"h5",component:"h2",children:[n,t.name,n]}),Object(m.jsx)("br",{}),Object(m.jsx)(p.a,{className:r.media,image:"images/characters/".concat(t.name.replace(/ /g,"_").toLowerCase(),".jpg"),title:t.name}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Height"}),Object(m.jsx)(u.a,{variant:"body1",component:"p",children:t.height}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Mass"}),Object(m.jsx)(u.a,{variant:"body1",component:"p",children:t.mass}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Hair Color"}),Object(m.jsx)(u.a,{variant:"body1",component:"p",children:t.hair_color}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Skin Color"}),Object(m.jsx)(u.a,{variant:"body1",component:"p",children:t.skin_color}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Eye Color"}),Object(m.jsx)(u.a,{variant:"body1",component:"p",children:t.eye_color}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Gender"}),Object(m.jsx)(u.a,{variant:"body1",component:"p",children:t.gender}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Birth Year"}),Object(m.jsx)(u.a,{variant:"body1",component:"p",children:t.birth_year})]})})]})},f=a(43),g=o.a.useEffect,v=Object(l.b)((function(e){var t=e.people,a=e.loading;return{people:t.people,loadingPeople:a["people/GET_PEOPLE"]}}),{getPeopleById:f.b})((function(e){var t=e.getPeopleById,a=e.people,r=e.loadingPeople,n=e.id;return g((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(n);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[t,n]),Object(m.jsx)(O,{people:a,loadingPeople:r})})),y=a(3),_=(a(95),a(96)),w=a(97);t.default=function(e){var t=e.loadingPeople;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("header",{children:Object(m.jsx)(_.a,{title:"Person"})}),Object(m.jsx)(w.a,{}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(y.a,{path:"/person/:id",render:function(e){var a=e.match;return Object(m.jsx)(v,Object(r.a)(Object(r.a)({},t),{},{id:a.params.id}))}})})]})}},95:function(e,t,a){},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var r=a(105),n=a(0),o=a.n(n),c=a(179),i=a(203),s=a(182),l=a(185),d=a(191),j=a(192),b=a(186),p=a(104),x=a.n(p),u=a(195),m=a(188),h=a(190),O=a(204),f=a(4),g=Object(c.a)((function(e){return Object(i.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}})}));function v(e){var t=e.title,a=g(),n=o.a.useState(null),c=Object(r.a)(n,2),i=c[0],p=c[1],v=function(){p(null)};return Object(f.jsx)("div",{className:a.root,children:Object(f.jsx)(s.a,{position:"static",style:{background:"#2E3B55"},children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(b.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},children:Object(f.jsx)(x.a,{})}),Object(f.jsxs)(u.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:v,children:[Object(f.jsx)(m.a,{onClick:v,children:Object(f.jsx)(h.a,{href:"/starwars_explorer_tsx/#/",underline:"none",children:"Home"})}),Object(f.jsx)(m.a,{onClick:v,children:Object(f.jsx)(h.a,{href:"/starwars_explorer_tsx/#/people",underline:"none",children:"People"})}),Object(f.jsx)(m.a,{onClick:v,children:Object(f.jsx)(h.a,{href:"/starwars_explorer_tsx/#/movies",underline:"none",children:"Movies"})}),Object(f.jsx)(m.a,{onClick:v,children:Object(f.jsx)(h.a,{href:"/starwars_explorer_tsx/#/planets",underline:"none",children:"Planets"})})]}),Object(f.jsx)(d.a,{variant:"h6",className:a.title,children:t}),Object(f.jsx)(j.a,{href:"/starwars_explorer_tsx/#/",children:Object(f.jsx)(O.a,{alt:"Star Wars Logo",src:"images/starwars_logo.jpg",className:a.large})})]})})})}},97:function(e,t,a){"use strict";var r=a(13),n=(a(0),a(98),a(192)),o=a(193),c=a(179),i=a(4),s=Object(c.a)((function(e){return{root:Object(r.a)({display:"flex","& > *":{margin:e.spacing(5)}},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing()}})}}));t.a=function(){var e=s();return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"nav",children:Object(i.jsx)("section",{className:e.root,children:Object(i.jsxs)(o.a,{orientation:"vertical","aria-label":"vertical contained primary button group",variant:"contained",children:[Object(i.jsx)(n.a,{href:"/starwars_explorer_tsx/#/people",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"People"}),Object(i.jsx)(n.a,{href:"/starwars_explorer_tsx/#/movies",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"Movies"}),Object(i.jsx)(n.a,{href:"/starwars_explorer_tsx/#/planets",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"Planets"})]})})})})}},98:function(e,t,a){}}]);
//# sourceMappingURL=5.109d6443.chunk.js.map