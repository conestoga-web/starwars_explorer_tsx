(this.webpackJsonpstar_wars_explorer_tsx=this.webpackJsonpstar_wars_explorer_tsx||[]).push([[7],{144:function(e,t,a){"use strict";var r=a(1),n=a(89),i=a(0),o=(a(16),a(90)),s=a(91),c=a(99),l=i.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.color,d=void 0===l?"default":l,p=e.component,u=void 0===p?"li":p,j=e.disableGutters,b=void 0!==j&&j,m=e.disableSticky,x=void 0!==m&&m,f=e.inset,h=void 0!==f&&f,g=Object(n.a)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return i.createElement(u,Object(r.a)({className:Object(o.a)(a.root,s,"default"!==d&&a["color".concat(Object(c.a)(d))],h&&a.inset,!x&&a.sticky,!b&&a.gutters),ref:t},g))}));t.a=Object(s.a)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(l)},145:function(e,t,a){"use strict";var r=a(1),n=a(89),i=a(0),o=(a(16),a(90)),s=a(91),c=a(191),l=a(116),d=i.forwardRef((function(e,t){var a=e.children,s=e.classes,d=e.className,p=e.disableTypography,u=void 0!==p&&p,j=e.inset,b=void 0!==j&&j,m=e.primary,x=e.primaryTypographyProps,f=e.secondary,h=e.secondaryTypographyProps,g=Object(n.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),O=i.useContext(l.a).dense,v=null!=m?m:a;null==v||v.type===c.a||u||(v=i.createElement(c.a,Object(r.a)({variant:O?"body2":"body1",className:s.primary,component:"span",display:"block"},x),v));var y=f;return null==y||y.type===c.a||u||(y=i.createElement(c.a,Object(r.a)({variant:"body2",className:s.secondary,color:"textSecondary",display:"block"},h),y)),i.createElement("div",Object(r.a)({className:Object(o.a)(s.root,d,O&&s.dense,b&&s.inset,v&&y&&s.multiline),ref:t},g),v,y)}));t.a=Object(s.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(d)},201:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),i=a.n(n),o=a(12),s=a.n(o),c=a(17),l=a(31),d=a(179),p=a(203),u=a(187),j=a(189),b=a(145),m=a(144),x=a(204),f=a(4),h=Object(d.a)((function(e){return Object(p.a)({root:{backgroundColor:e.palette.background.default,position:"relative",overflow:"auto",maxHeight:600,marginBottom:"200px",marginTop:"20px",paddingRight:"20%",paddingLeft:"10%",paddingTop:"10%",paddingBottom:"10%"},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}})}));function g(e){return Object(f.jsx)(j.a,Object(r.a)({button:!0,component:"a"},e))}var O=function(e){var t=e.movieList,a=e.loadingMovieList,r=h();return Object(f.jsxs)("section",{children:[Object(f.jsx)("br",{}),a&&"Loading...",!a&&t&&Object(f.jsx)(u.a,{className:r.root,subheader:Object(f.jsx)("li",{}),children:t.results.map((function(e,t){return Object(f.jsx)("li",{className:r.listSection,children:Object(f.jsx)("ul",{className:r.ul,children:Object(f.jsx)(m.a,{children:Object(f.jsxs)(g,{href:"/starwars_explorer_tsx/#/movie/".concat(e.id=t+1),children:[Object(f.jsx)(x.a,{alt:e.title,src:"images/films/".concat(e.title,".jpg")}),"\xa0",Object(f.jsx)(b.a,{primary:e.title})]})})})},"section-".concat(t))}))})]})},v=a(46),y=i.a.useEffect,k=Object(l.b)((function(e){var t=e.movieList,a=e.loading;return{movieList:t.movieList,loadingMovieList:a["movieList/GET_MOVIES"]}}),{getMovies:v.b})((function(e){var t=e.getMovies,a=e.movieList,r=e.loadingMovieList;return y((function(){(function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(f.jsx)(O,{movieList:a,loadingMovieList:r})})),_=(a(95),a(96)),w=a(97);t.default=function(e){var t=e.movieList;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("body",{children:[Object(f.jsx)("header",{children:Object(f.jsx)(_.a,{title:"Movies"})}),Object(f.jsx)(w.a,{}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)(k,Object(r.a)({},t))})]})})}},95:function(e,t,a){},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var r=a(105),n=a(0),i=a.n(n),o=a(179),s=a(203),c=a(182),l=a(185),d=a(191),p=a(192),u=a(186),j=a(104),b=a.n(j),m=a(195),x=a(188),f=a(190),h=a(204),g=a(4),O=Object(o.a)((function(e){return Object(s.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}})}));function v(e){var t=e.title,a=O(),n=i.a.useState(null),o=Object(r.a)(n,2),s=o[0],j=o[1],v=function(){j(null)};return Object(g.jsx)("div",{className:a.root,children:Object(g.jsx)(c.a,{position:"static",style:{background:"#2E3B55"},children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(u.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:Object(g.jsx)(b.a,{})}),Object(g.jsxs)(m.a,{id:"simple-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:v,children:[Object(g.jsx)(x.a,{onClick:v,children:Object(g.jsx)(f.a,{href:"/starwars_explorer_tsx/#/",underline:"none",children:"Home"})}),Object(g.jsx)(x.a,{onClick:v,children:Object(g.jsx)(f.a,{href:"/starwars_explorer_tsx/#/people",underline:"none",children:"People"})}),Object(g.jsx)(x.a,{onClick:v,children:Object(g.jsx)(f.a,{href:"/starwars_explorer_tsx/#/movies",underline:"none",children:"Movies"})}),Object(g.jsx)(x.a,{onClick:v,children:Object(g.jsx)(f.a,{href:"/starwars_explorer_tsx/#/planets",underline:"none",children:"Planets"})})]}),Object(g.jsx)(d.a,{variant:"h6",className:a.title,children:t}),Object(g.jsx)(p.a,{href:"/starwars_explorer_tsx/#/",children:Object(g.jsx)(h.a,{alt:"Star Wars Logo",src:"images/starwars_logo.jpg",className:a.large})})]})})})}},97:function(e,t,a){"use strict";var r=a(13),n=(a(0),a(98),a(192)),i=a(193),o=a(179),s=a(4),c=Object(o.a)((function(e){return{root:Object(r.a)({display:"flex","& > *":{margin:e.spacing(5)}},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing()}})}}));t.a=function(){var e=c();return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"nav",children:Object(s.jsx)("section",{className:e.root,children:Object(s.jsxs)(i.a,{orientation:"vertical","aria-label":"vertical contained primary button group",variant:"contained",children:[Object(s.jsx)(n.a,{href:"/starwars_explorer_tsx/#/people",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"People"}),Object(s.jsx)(n.a,{href:"/starwars_explorer_tsx/#/movies",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"Movies"}),Object(s.jsx)(n.a,{href:"/starwars_explorer_tsx/#/planets",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"Planets"})]})})})})}},98:function(e,t,a){}}]);
//# sourceMappingURL=7.74ec8c4e.chunk.js.map