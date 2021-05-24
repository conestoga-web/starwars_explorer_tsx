(this.webpackJsonpstar_wars_explorer_tsx=this.webpackJsonpstar_wars_explorer_tsx||[]).push([[5],{141:function(e,t,a){"use strict";var n=a(1),r=a(88),c=a(0),o=(a(16),a(89)),i=a(175),s=a(90),l=c.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.raised,d=void 0!==l&&l,j=Object(r.a)(e,["classes","className","raised"]);return c.createElement(i.a,Object(n.a)({className:Object(o.a)(a.root,s),elevation:d?8:1,ref:t},j))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},142:function(e,t,a){"use strict";var n=a(1),r=a(88),c=a(0),o=(a(16),a(89)),i=a(90),s=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,l=void 0===s?"div":s,d=Object(r.a)(e,["classes","className","component"]);return c.createElement(l,Object(n.a)({className:Object(o.a)(a.root,i),ref:t},d))}));t.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},143:function(e,t,a){"use strict";var n=a(1),r=a(88),c=a(0),o=(a(16),a(89)),i=a(90),s=["video","audio","picture","iframe","img"],l=c.forwardRef((function(e,t){var a=e.children,i=e.classes,l=e.className,d=e.component,j=void 0===d?"div":d,b=e.image,p=e.src,x=e.style,m=Object(r.a)(e,["children","classes","className","component","image","src","style"]),u=-1!==s.indexOf(j),h=!u&&b?Object(n.a)({backgroundImage:'url("'.concat(b,'")')},x):x;return c.createElement(j,Object(n.a)({className:Object(o.a)(i.root,l,u&&i.media,-1!=="picture img".indexOf(j)&&i.img),ref:t,style:h,src:u?b||p:void 0},m),a)}));t.a=Object(i.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},189:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),o=a(12),i=a.n(o),s=a(17),l=a(31),d=a(171),j=a(195),b=a(141),p=a(143),x=a(142),m=a(183),u=a(4),h=Object(d.a)((function(e){return Object(j.a)({root:{width:"95%",minWidth:275,maxWidth:350,background:"linear-gradient(45deg, #35B62C 30%, #7DFE74 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",marginBottom:"30px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}})}));var O=function(e){var t=e.people,a=e.loadingPeople,n=h(),r=Object(u.jsx)("span",{className:n.bullet,children:"\u2022"});return Object(u.jsxs)("section",{children:[Object(u.jsx)("br",{}),a&&"Loading...",!a&&t&&Object(u.jsx)(b.a,{className:n.root,variant:"outlined",children:Object(u.jsxs)(x.a,{children:[Object(u.jsxs)(m.a,{variant:"h5",component:"h2",children:[r,t.name,r]}),Object(u.jsx)("br",{}),Object(u.jsx)(p.a,{className:n.media,image:"images/characters/".concat(t.name.replace(/ /g,"_").toLowerCase(),".jpg"),title:t.name}),Object(u.jsx)("br",{}),Object(u.jsx)(m.a,{variant:"body2",component:"p",color:"textSecondary",children:"Height"}),Object(u.jsx)(m.a,{variant:"body1",component:"p",children:t.height}),Object(u.jsx)("br",{}),Object(u.jsx)(m.a,{variant:"body2",component:"p",color:"textSecondary",children:"Mass"}),Object(u.jsx)(m.a,{variant:"body1",component:"p",children:t.mass}),Object(u.jsx)("br",{}),Object(u.jsx)(m.a,{variant:"body2",component:"p",color:"textSecondary",children:"Hair Color"}),Object(u.jsx)(m.a,{variant:"body1",component:"p",children:t.hair_color}),Object(u.jsx)("br",{}),Object(u.jsx)(m.a,{variant:"body2",component:"p",color:"textSecondary",children:"Skin Color"}),Object(u.jsx)(m.a,{variant:"body1",component:"p",children:t.skin_color}),Object(u.jsx)("br",{}),Object(u.jsx)(m.a,{variant:"body2",component:"p",color:"textSecondary",children:"Eye Color"}),Object(u.jsx)(m.a,{variant:"body1",component:"p",children:t.eye_color}),Object(u.jsx)("br",{}),Object(u.jsx)(m.a,{variant:"body2",component:"p",color:"textSecondary",children:"Gender"}),Object(u.jsx)(m.a,{variant:"body1",component:"p",children:t.gender}),Object(u.jsx)("br",{}),Object(u.jsx)(m.a,{variant:"body2",component:"p",color:"textSecondary",children:"Birth Year"}),Object(u.jsx)(m.a,{variant:"body1",component:"p",children:t.birth_year})]})})]})},g=a(43),f=c.a.useEffect,v=Object(l.b)((function(e){var t=e.people,a=e.loading;return{people:t.people,loadingPeople:a["people/GET_PEOPLE"]}}),{getPeopleById:g.b})((function(e){var t=e.getPeopleById,a=e.people,n=e.loadingPeople,r=e.id;return f((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(r);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[t,r]),Object(u.jsx)(O,{people:a,loadingPeople:n})})),y=a(3),w=(a(94),a(95));t.default=function(e){var t=e.loadingPeople;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{children:Object(u.jsx)(w.a,{title:"Person"})}),Object(u.jsx)("section",{className:"container",children:Object(u.jsx)(y.a,{path:"/person/:id",render:function(e){var a=e.match;return Object(u.jsx)(v,Object(n.a)(Object(n.a)({},t),{},{id:a.params.id}))}})})]})}},94:function(e,t,a){},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(102),r=a(0),c=a.n(r),o=a(171),i=a(195),s=a(174),l=a(177),d=a(183),j=a(184),b=a(178),p=a(101),x=a.n(p),m=a(186),u=a(180),h=a(182),O=a(196),g=a(4),f=Object(o.a)((function(e){return Object(i.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}})}));function v(e){var t=e.title,a=f(),r=c.a.useState(null),o=Object(n.a)(r,2),i=o[0],p=o[1],v=function(){p(null)};return Object(g.jsx)("div",{className:a.root,children:Object(g.jsx)(s.a,{position:"static",style:{background:"#2E3B55"},children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(b.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},children:Object(g.jsx)(x.a,{})}),Object(g.jsxs)(m.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:v,children:[Object(g.jsx)(u.a,{onClick:v,children:Object(g.jsx)(h.a,{href:"/starwars_explorer_tsx/#/",underline:"none",children:"Home"})}),Object(g.jsx)(u.a,{onClick:v,children:Object(g.jsx)(h.a,{href:"/starwars_explorer_tsx/#/people",underline:"none",children:"People"})}),Object(g.jsx)(u.a,{onClick:v,children:Object(g.jsx)(h.a,{href:"/starwars_explorer_tsx/#/movies",underline:"none",children:"Movies"})}),Object(g.jsx)(u.a,{onClick:v,children:Object(g.jsx)(h.a,{href:"/starwars_explorer_tsx/#/planets",underline:"none",children:"Planets"})})]}),Object(g.jsx)(d.a,{variant:"h6",className:a.title,children:t}),Object(g.jsx)(j.a,{href:"/starwars_explorer_tsx/#/",children:Object(g.jsx)(O.a,{alt:"Star Wars Logo",src:"images/starwars_logo.jpg",className:a.large})})]})})})}}}]);
//# sourceMappingURL=5.c68371bc.chunk.js.map