(this.webpackJsonpstar_wars_explorer_tsx=this.webpackJsonpstar_wars_explorer_tsx||[]).push([[7],{139:function(e,t,a){"use strict";var r=a(1),n=a(88),i=a(0),o=(a(16),a(89)),s=a(90),c=a(96),l=i.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.color,d=void 0===l?"default":l,u=e.component,p=void 0===u?"li":u,j=e.disableGutters,b=void 0!==j&&j,m=e.disableSticky,h=void 0!==m&&m,x=e.inset,g=void 0!==x&&x,f=Object(n.a)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return i.createElement(p,Object(r.a)({className:Object(o.a)(a.root,s,"default"!==d&&a["color".concat(Object(c.a)(d))],g&&a.inset,!h&&a.sticky,!b&&a.gutters),ref:t},f))}));t.a=Object(s.a)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(l)},140:function(e,t,a){"use strict";var r=a(1),n=a(88),i=a(0),o=(a(16),a(89)),s=a(90),c=a(183),l=a(111),d=i.forwardRef((function(e,t){var a=e.children,s=e.classes,d=e.className,u=e.disableTypography,p=void 0!==u&&u,j=e.inset,b=void 0!==j&&j,m=e.primary,h=e.primaryTypographyProps,x=e.secondary,g=e.secondaryTypographyProps,f=Object(n.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),O=i.useContext(l.a).dense,y=null!=m?m:a;null==y||y.type===c.a||p||(y=i.createElement(c.a,Object(r.a)({variant:O?"body2":"body1",className:s.primary,component:"span",display:"block"},h),y));var v=x;return null==v||v.type===c.a||p||(v=i.createElement(c.a,Object(r.a)({variant:"body2",className:s.secondary,color:"textSecondary",display:"block"},g),v)),i.createElement("div",Object(r.a)({className:Object(o.a)(s.root,d,O&&s.dense,b&&s.inset,y&&v&&s.multiline),ref:t},f),y,v)}));t.a=Object(s.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(d)},192:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),i=a.n(n),o=a(12),s=a.n(o),c=a(17),l=a(31),d=a(171),u=a(179),p=a(181),j=a(140),b=a(139),m=a(196),h=a(4),x=Object(d.a)((function(e){return{root:{width:"100%",maxWidth:500,backgroundColor:e.palette.background.default,position:"relative",overflow:"auto",maxHeight:600},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}}}));function g(e){return Object(h.jsx)(p.a,Object(r.a)({button:!0,component:"a"},e))}var f=function(e){var t=e.movieList,a=e.loadingMovieList,r=x();return Object(h.jsxs)("section",{children:[Object(h.jsx)("br",{}),a&&"Loading...",!a&&t&&Object(h.jsx)(u.a,{className:r.root,subheader:Object(h.jsx)("li",{}),children:t.results.map((function(e,t){return Object(h.jsx)("li",{className:r.listSection,children:Object(h.jsx)("ul",{className:r.ul,children:Object(h.jsx)(b.a,{children:Object(h.jsxs)(g,{href:"/starwars_explorer_tsx/#/movie/".concat(e.id=t+1),children:[Object(h.jsx)(m.a,{alt:e.title,src:"images/films/".concat(e.title,".jpg")}),"\xa0",Object(h.jsx)(j.a,{primary:e.title})]})})})},"section-".concat(t))}))})]})},O=a(46),y=i.a.useEffect,v=Object(l.b)((function(e){var t=e.movieList,a=e.loading;return{movieList:t.movieList,loadingMovieList:a["movieList/GET_MOVIES"]}}),{getMovies:O.b})((function(e){var t=e.getMovies,a=e.movieList,r=e.loadingMovieList;return y((function(){(function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(h.jsx)(f,{movieList:a,loadingMovieList:r})})),k=(a(94),a(95));t.default=function(e){var t=e.movieList;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("header",{children:Object(h.jsx)(k.a,{title:"Movies"})}),Object(h.jsx)("section",{className:"container",children:Object(h.jsx)(v,Object(r.a)({},t))})]})}},94:function(e,t,a){},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var r=a(102),n=a(0),i=a.n(n),o=a(171),s=a(195),c=a(174),l=a(177),d=a(183),u=a(184),p=a(178),j=a(101),b=a.n(j),m=a(186),h=a(180),x=a(182),g=a(196),f=a(4),O=Object(o.a)((function(e){return Object(s.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}})}));function y(e){var t=e.title,a=O(),n=i.a.useState(null),o=Object(r.a)(n,2),s=o[0],j=o[1],y=function(){j(null)};return Object(f.jsx)("div",{className:a.root,children:Object(f.jsx)(c.a,{position:"static",style:{background:"#2E3B55"},children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(p.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:Object(f.jsx)(b.a,{})}),Object(f.jsxs)(m.a,{id:"simple-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:y,children:[Object(f.jsx)(h.a,{onClick:y,children:Object(f.jsx)(x.a,{href:"/starwars_explorer_tsx/#/",underline:"none",children:"Home"})}),Object(f.jsx)(h.a,{onClick:y,children:Object(f.jsx)(x.a,{href:"/starwars_explorer_tsx/#/people",underline:"none",children:"People"})}),Object(f.jsx)(h.a,{onClick:y,children:Object(f.jsx)(x.a,{href:"/starwars_explorer_tsx/#/movies",underline:"none",children:"Movies"})}),Object(f.jsx)(h.a,{onClick:y,children:Object(f.jsx)(x.a,{href:"/starwars_explorer_tsx/#/planets",underline:"none",children:"Planets"})})]}),Object(f.jsx)(d.a,{variant:"h6",className:a.title,children:t}),Object(f.jsx)(u.a,{href:"/starwars_explorer_tsx/#/",children:Object(f.jsx)(g.a,{alt:"Star Wars Logo",src:"images/starwars_logo.jpg",className:a.large})})]})})})}}}]);
//# sourceMappingURL=7.8830c43c.chunk.js.map