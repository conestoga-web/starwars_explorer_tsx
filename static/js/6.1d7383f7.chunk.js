(this.webpackJsonpstar_wars_explorer_tsx=this.webpackJsonpstar_wars_explorer_tsx||[]).push([[6],{146:function(e,t,a){"use strict";var n=a(1),r=a(89),c=a(0),o=(a(16),a(90)),i=a(184),s=a(91),l=c.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.raised,d=void 0!==l&&l,j=Object(r.a)(e,["classes","className","raised"]);return c.createElement(i.a,Object(n.a)({className:Object(o.a)(a.root,s),elevation:d?8:1,ref:t},j))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},147:function(e,t,a){"use strict";var n=a(1),r=a(89),c=a(0),o=(a(16),a(90)),i=a(91),s=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,l=void 0===s?"div":s,d=Object(r.a)(e,["classes","className","component"]);return c.createElement(l,Object(n.a)({className:Object(o.a)(a.root,i),ref:t},d))}));t.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},148:function(e,t,a){"use strict";var n=a(1),r=a(89),c=a(0),o=(a(16),a(90)),i=a(91),s=["video","audio","picture","iframe","img"],l=c.forwardRef((function(e,t){var a=e.children,i=e.classes,l=e.className,d=e.component,j=void 0===d?"div":d,b=e.image,p=e.src,m=e.style,x=Object(r.a)(e,["children","classes","className","component","image","src","style"]),u=-1!==s.indexOf(j),O=!u&&b?Object(n.a)({backgroundImage:'url("'.concat(b,'")')},m):m;return c.createElement(j,Object(n.a)({className:Object(o.a)(i.root,l,u&&i.media,-1!=="picture img".indexOf(j)&&i.img),ref:t,style:O,src:u?b||p:void 0},x),a)}));t.a=Object(i.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},201:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),o=a(12),i=a.n(o),s=a(17),l=a(31),d=a(13),j=a(180),b=a(204),p=a(146),m=a(148),x=a(147),u=a(192),O=a(4),h=Object(j.a)((function(e){var t;return Object(b.a)({root:(t={background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",marginBottom:"200px",marginTop:"20px"},Object(d.a)(t,e.breakpoints.down("sm"),{minWidth:300}),Object(d.a)(t,e.breakpoints.between("sm","md"),{maxHeight:800,minWidth:360}),Object(d.a)(t,e.breakpoints.up("md"),{maxHeight:900,minWidth:500}),t),bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},media:{paddingTop:"56.25%",marginLeft:"10%",marginRight:"10%",paddingRight:"20%",paddingLeft:"10%",paddingBottom:"10%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}})}));var f=function(e){var t=e.planet,a=e.loadingPlanet,n=h(),r=Object(O.jsx)("span",{className:n.bullet,children:"\u2022"});return Object(O.jsxs)("section",{children:[Object(O.jsx)("br",{}),a&&"Loading...",!a&&t&&Object(O.jsx)(p.a,{className:n.root,variant:"outlined",children:Object(O.jsxs)(x.a,{children:[Object(O.jsxs)(u.a,{variant:"h5",component:"h2",align:"center",children:[r,t.name,r]}),Object(O.jsx)("br",{}),Object(O.jsx)(m.a,{className:n.media,image:"images/planets/".concat(t.name,".jpg"),title:t.name}),Object(O.jsx)("br",{}),Object(O.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Rotation Period"}),Object(O.jsx)(u.a,{variant:"body1",component:"p",children:t.rotation_period}),Object(O.jsx)("br",{}),Object(O.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Orbital Period"}),Object(O.jsx)(u.a,{variant:"body1",component:"p",children:t.orbital_period}),Object(O.jsx)("br",{}),Object(O.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Diameter"}),Object(O.jsx)(u.a,{variant:"body1",component:"p",children:t.diameter}),Object(O.jsx)("br",{}),Object(O.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Climate"}),Object(O.jsx)(u.a,{variant:"body1",component:"p",children:t.climate}),Object(O.jsx)("br",{}),Object(O.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Gravity"}),Object(O.jsx)(u.a,{variant:"body1",component:"p",children:t.gravity}),Object(O.jsx)("br",{}),Object(O.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Terrain"}),Object(O.jsx)(u.a,{variant:"body1",component:"p",children:t.terrain}),Object(O.jsx)("br",{}),Object(O.jsx)(u.a,{variant:"body2",component:"p",color:"textSecondary",children:"Population"}),Object(O.jsx)(u.a,{variant:"body1",component:"p",children:t.population})]})})]})},g=a(33),v=c.a.useEffect,y=Object(l.b)((function(e){var t=e.planet,a=e.loading;return{planet:t.planet,loadingPlanet:a["planet/GET_PLANET"]}}),{getPlanetById:g.b})((function(e){var t=e.getPlanetById,a=e.planet,n=e.loadingPlanet,r=e.id;return v((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(r);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[t,r]),Object(O.jsx)(f,{planet:a,loadingPlanet:n})})),w=a(3),_=(a(95),a(96)),k=a(97);t.default=function(e){var t=e.loadingPlanet;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("header",{children:Object(O.jsx)(_.a,{title:"Planet"})}),Object(O.jsx)(k.a,{}),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(w.a,{path:"/planet/:id",render:function(e){var a=e.match;return Object(O.jsx)(y,Object(n.a)(Object(n.a)({},t),{},{id:a.params.id}))}})})]})}},95:function(e,t,a){},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(105),r=a(0),c=a.n(r),o=a(180),i=a(204),s=a(183),l=a(186),d=a(192),j=a(193),b=a(187),p=a(104),m=a.n(p),x=a(196),u=a(189),O=a(191),h=a(205),f=a(4),g=Object(o.a)((function(e){return Object(i.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}})}));function v(e){var t=e.title,a=g(),r=c.a.useState(null),o=Object(n.a)(r,2),i=o[0],p=o[1],v=function(){p(null)};return Object(f.jsx)("div",{className:a.root,children:Object(f.jsx)(s.a,{position:"static",style:{background:"#2E3B55"},children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(b.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},children:Object(f.jsx)(m.a,{})}),Object(f.jsxs)(x.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:v,children:[Object(f.jsx)(u.a,{onClick:v,children:Object(f.jsx)(O.a,{href:"/starwars_explorer_tsx/#/",underline:"none",children:"Home"})}),Object(f.jsx)(u.a,{onClick:v,children:Object(f.jsx)(O.a,{href:"/starwars_explorer_tsx/#/people",underline:"none",children:"People"})}),Object(f.jsx)(u.a,{onClick:v,children:Object(f.jsx)(O.a,{href:"/starwars_explorer_tsx/#/movies",underline:"none",children:"Movies"})}),Object(f.jsx)(u.a,{onClick:v,children:Object(f.jsx)(O.a,{href:"/starwars_explorer_tsx/#/planets",underline:"none",children:"Planets"})})]}),Object(f.jsx)(d.a,{variant:"h6",className:a.title,children:t}),Object(f.jsx)(j.a,{href:"/starwars_explorer_tsx/#/",children:Object(f.jsx)(h.a,{alt:"Star Wars Logo",src:"images/starwars_logo.jpg",className:a.large})})]})})})}},97:function(e,t,a){"use strict";var n=a(13),r=(a(0),a(98),a(193)),c=a(194),o=a(180),i=a(4),s=Object(o.a)((function(e){return{root:Object(n.a)({display:"flex","& > *":{margin:e.spacing(5)}},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing()}})}}));t.a=function(){var e=s();return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"nav",children:Object(i.jsx)("section",{className:e.root,children:Object(i.jsxs)(c.a,{orientation:"vertical","aria-label":"vertical contained primary button group",variant:"contained",children:[Object(i.jsx)(r.a,{href:"/starwars_explorer_tsx/#/people",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"People"}),Object(i.jsx)(r.a,{href:"/starwars_explorer_tsx/#/movies",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"Movies"}),Object(i.jsx)(r.a,{href:"/starwars_explorer_tsx/#/planets",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"Planets"})]})})})})}},98:function(e,t,a){}}]);
//# sourceMappingURL=6.1d7383f7.chunk.js.map