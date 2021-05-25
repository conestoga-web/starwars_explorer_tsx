(this.webpackJsonpstar_wars_explorer_tsx=this.webpackJsonpstar_wars_explorer_tsx||[]).push([[4],{146:function(e,t,a){"use strict";var r=a(1),n=a(89),c=a(0),o=(a(16),a(90)),i=a(183),s=a(91),l=c.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.raised,d=void 0!==l&&l,j=Object(n.a)(e,["classes","className","raised"]);return c.createElement(i.a,Object(r.a)({className:Object(o.a)(a.root,s),elevation:d?8:1,ref:t},j))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},147:function(e,t,a){"use strict";var r=a(1),n=a(89),c=a(0),o=(a(16),a(90)),i=a(91),s=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,l=void 0===s?"div":s,d=Object(n.a)(e,["classes","className","component"]);return c.createElement(l,Object(r.a)({className:Object(o.a)(a.root,i),ref:t},d))}));t.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},148:function(e,t,a){"use strict";var r=a(1),n=a(89),c=a(0),o=(a(16),a(90)),i=a(91),s=["video","audio","picture","iframe","img"],l=c.forwardRef((function(e,t){var a=e.children,i=e.classes,l=e.className,d=e.component,j=void 0===d?"div":d,b=e.image,p=e.src,u=e.style,m=Object(n.a)(e,["children","classes","className","component","image","src","style"]),x=-1!==s.indexOf(j),f=!x&&b?Object(r.a)({backgroundImage:'url("'.concat(b,'")')},u):u;return c.createElement(j,Object(r.a)({className:Object(o.a)(i.root,l,x&&i.media,-1!=="picture img".indexOf(j)&&i.img),ref:t,style:f,src:x?b||p:void 0},m),a)}));t.a=Object(i.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},202:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),c=a.n(n),o=a(12),i=a.n(o),s=a(17),l=a(31),d=a(179),j=a(203),b=a(146),p=a(148),u=a(147),m=a(191),x=a(4),f=Object(d.a)((function(e){return Object(j.a)({root:{minWidth:275,background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",marginBottom:"200px",marginLeft:"20%",marginRight:"20%",marginTop:"20px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},media:{height:200,paddingTop:"56.25%",marginLeft:"10%",marginRight:"10%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}})}));var O=function(e){var t=e.movie,a=e.loadingMovie,r=f(),n=Object(x.jsx)("span",{className:r.bullet,children:"\u2022"});return Object(x.jsxs)("section",{children:[Object(x.jsx)("br",{}),a&&"Loading...",!a&&t&&Object(x.jsx)(b.a,{className:r.root,variant:"outlined",children:Object(x.jsxs)(u.a,{children:[Object(x.jsxs)(m.a,{variant:"h5",component:"h2",children:[n,t.title,n]}),Object(x.jsx)("br",{}),Object(x.jsx)(p.a,{className:r.media,image:"images/films/".concat(t.title,".jpg"),title:t.title}),Object(x.jsx)("br",{}),Object(x.jsx)(m.a,{variant:"body2",component:"p",color:"textSecondary",children:"Episode #"}),Object(x.jsx)(m.a,{variant:"body1",component:"p",children:t.episode_id}),Object(x.jsx)("br",{}),Object(x.jsx)(m.a,{variant:"body2",component:"p",color:"textSecondary",children:"Director"}),Object(x.jsx)(m.a,{variant:"body1",component:"p",children:t.director}),Object(x.jsx)("br",{}),Object(x.jsx)(m.a,{variant:"body2",component:"p",color:"textSecondary",children:"Producer"}),Object(x.jsx)(m.a,{variant:"body1",component:"p",children:t.producer}),Object(x.jsx)("br",{}),Object(x.jsx)(m.a,{variant:"body2",component:"p",color:"textSecondary",children:"Release Date"}),Object(x.jsx)(m.a,{variant:"body1",component:"p",children:t.release_date}),Object(x.jsx)("br",{}),Object(x.jsx)(m.a,{variant:"body2",component:"p",color:"textSecondary",children:"Opening Crawl"}),Object(x.jsx)(m.a,{variant:"body1",component:"p",children:t.opening_crawl})]})})]})},h=a(45),g=c.a.useEffect,v=Object(l.b)((function(e){var t=e.movie,a=e.loading;return{movie:t.movie,loadingMovie:a["movie/GET_MOVIE"]}}),{getMovieById:h.b})((function(e){var t=e.getMovieById,a=e.movie,r=e.loadingMovie,n=e.id;return g((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(n);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[t,n]),Object(x.jsx)(O,{movie:a,loadingMovie:r})})),y=a(3),w=(a(95),a(96)),_=a(97);t.default=function(e){var t=e.loadingMovie;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("body",{children:[Object(x.jsx)("header",{children:Object(x.jsx)(w.a,{title:"Movie"})}),Object(x.jsx)(_.a,{}),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)(y.a,{path:"/movie/:id",render:function(e){var a=e.match;return Object(x.jsx)(v,Object(r.a)(Object(r.a)({},t),{},{id:a.params.id}))}})})]})})}},95:function(e,t,a){},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var r=a(105),n=a(0),c=a.n(n),o=a(179),i=a(203),s=a(182),l=a(185),d=a(191),j=a(192),b=a(186),p=a(104),u=a.n(p),m=a(195),x=a(188),f=a(190),O=a(204),h=a(4),g=Object(o.a)((function(e){return Object(i.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}})}));function v(e){var t=e.title,a=g(),n=c.a.useState(null),o=Object(r.a)(n,2),i=o[0],p=o[1],v=function(){p(null)};return Object(h.jsx)("div",{className:a.root,children:Object(h.jsx)(s.a,{position:"static",style:{background:"#2E3B55"},children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(b.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},children:Object(h.jsx)(u.a,{})}),Object(h.jsxs)(m.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:v,children:[Object(h.jsx)(x.a,{onClick:v,children:Object(h.jsx)(f.a,{href:"/starwars_explorer_tsx/#/",underline:"none",children:"Home"})}),Object(h.jsx)(x.a,{onClick:v,children:Object(h.jsx)(f.a,{href:"/starwars_explorer_tsx/#/people",underline:"none",children:"People"})}),Object(h.jsx)(x.a,{onClick:v,children:Object(h.jsx)(f.a,{href:"/starwars_explorer_tsx/#/movies",underline:"none",children:"Movies"})}),Object(h.jsx)(x.a,{onClick:v,children:Object(h.jsx)(f.a,{href:"/starwars_explorer_tsx/#/planets",underline:"none",children:"Planets"})})]}),Object(h.jsx)(d.a,{variant:"h6",className:a.title,children:t}),Object(h.jsx)(j.a,{href:"/starwars_explorer_tsx/#/",children:Object(h.jsx)(O.a,{alt:"Star Wars Logo",src:"images/starwars_logo.jpg",className:a.large})})]})})})}},97:function(e,t,a){"use strict";var r=a(13),n=(a(0),a(98),a(192)),c=a(193),o=a(179),i=a(4),s=Object(o.a)((function(e){return{root:Object(r.a)({display:"flex","& > *":{margin:e.spacing(5)}},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing()}})}}));t.a=function(){var e=s();return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"nav",children:Object(i.jsx)("section",{className:e.root,children:Object(i.jsxs)(c.a,{orientation:"vertical","aria-label":"vertical contained primary button group",variant:"contained",children:[Object(i.jsx)(n.a,{href:"/starwars_explorer_tsx/#/people",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"People"}),Object(i.jsx)(n.a,{href:"/starwars_explorer_tsx/#/movies",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"Movies"}),Object(i.jsx)(n.a,{href:"/starwars_explorer_tsx/#/planets",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"Planets"})]})})})})}},98:function(e,t,a){}}]);
//# sourceMappingURL=4.81ecb261.chunk.js.map