(this.webpackJsonpstar_wars_explorer_tsx=this.webpackJsonpstar_wars_explorer_tsx||[]).push([[4],{138:function(e,t,r){"use strict";var n=r(1),a=r(88),i=r(0),o=(r(16),r(89)),s=r(90),c=r(96),l=i.forwardRef((function(e,t){var r=e.classes,s=e.className,l=e.color,d=void 0===l?"default":l,u=e.component,p=void 0===u?"li":u,h=e.disableGutters,j=void 0!==h&&h,m=e.disableSticky,b=void 0!==m&&m,v=e.inset,x=void 0!==v&&v,f=Object(a.a)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return i.createElement(p,Object(n.a)({className:Object(o.a)(r.root,s,"default"!==d&&r["color".concat(Object(c.a)(d))],x&&r.inset,!b&&r.sticky,!j&&r.gutters),ref:t},f))}));t.a=Object(s.a)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(l)},139:function(e,t,r){"use strict";var n=r(1),a=r(88),i=r(0),o=(r(16),r(89)),s=r(90),c=r(182),l=r(109),d=i.forwardRef((function(e,t){var r=e.children,s=e.classes,d=e.className,u=e.disableTypography,p=void 0!==u&&u,h=e.inset,j=void 0!==h&&h,m=e.primary,b=e.primaryTypographyProps,v=e.secondary,x=e.secondaryTypographyProps,f=Object(a.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),y=i.useContext(l.a).dense,O=null!=m?m:r;null==O||O.type===c.a||p||(O=i.createElement(c.a,Object(n.a)({variant:y?"body2":"body1",className:s.primary,component:"span",display:"block"},b),O));var g=v;return null==g||g.type===c.a||p||(g=i.createElement(c.a,Object(n.a)({variant:"body2",className:s.secondary,color:"textSecondary",display:"block"},x),g)),i.createElement("div",Object(n.a)({className:Object(o.a)(s.root,d,y&&s.dense,j&&s.inset,O&&g&&s.multiline),ref:t},f),O,g)}));t.a=Object(s.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(d)},150:function(e,t,r){"use strict";var n=r(113),a=r(114);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(r(0)),o=(0,n(r(115)).default)(i.createElement("path",{d:"M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"}),"LocalMovies");t.default=o},191:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(0),i=r.n(a),o=r(12),s=r.n(o),c=r(17),l=r(31),d=r(170),u=r(178),p=r(180),h=r(139),j=r(138),m=r(150),b=r.n(m),v=r(4),x=Object(d.a)((function(e){return{root:{width:"100%",maxWidth:500,backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto",maxHeight:600},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}}}));function f(e){return Object(v.jsx)(p.a,Object(n.a)({button:!0,component:"a"},e))}var y=function(e){var t=e.movieList,r=e.loadingMovieList,n=x();return Object(v.jsxs)("section",{children:[Object(v.jsx)("br",{}),r&&"Loading...",!r&&t&&Object(v.jsx)(u.a,{className:n.root,subheader:Object(v.jsx)("li",{}),children:t.results.map((function(e,t){return Object(v.jsx)("li",{className:n.listSection,children:Object(v.jsx)("ul",{className:n.ul,children:Object(v.jsx)(j.a,{children:Object(v.jsxs)(f,{href:"/starwars_explorer_tsx/#/movie/".concat(t+1),children:[Object(v.jsx)(b.a,{style:{marginRight:"0.5em"}}),Object(v.jsx)(h.a,{primary:e.title})]})})})},"section-".concat(t))}))})]})},O=r(46),g=i.a.useEffect,k=Object(l.b)((function(e){var t=e.movieList,r=e.loading;return{movieList:t.movieList,loadingMovieList:r["movieList/GET_MOVIES"]}}),{getMovies:O.b})((function(e){var t=e.getMovies,r=e.movieList,n=e.loadingMovieList;return g((function(){(function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(v.jsx)(y,{movieList:r,loadingMovieList:n})})),L=(r(94),r(95));t.default=function(e){var t=e.movieList;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsx)(L.a,{title:"Movies"})}),Object(v.jsx)("section",{className:"container",children:Object(v.jsx)(k,Object(n.a)({},t))})]})}},94:function(e,t,r){},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return x}));var n=r(100),a=r(0),i=r.n(a),o=r(170),s=r(173),c=r(176),l=r(182),d=r(177),u=r(99),p=r.n(u),h=r(184),j=r(179),m=r(181),b=r(4),v=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function x(e){var t=e.title,r=v(),a=i.a.useState(null),o=Object(n.a)(a,2),u=o[0],x=o[1],f=function(){x(null)};return Object(b.jsx)("div",{className:r.root,children:Object(b.jsx)(s.a,{position:"static",children:Object(b.jsxs)(c.a,{children:[Object(b.jsx)(d.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){x(e.currentTarget)},children:Object(b.jsx)(p.a,{})}),Object(b.jsxs)(h.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:f,children:[Object(b.jsx)(j.a,{onClick:f,children:Object(b.jsx)(m.a,{href:"/starwars_explorer_tsx/#/",underline:"none",children:"Home"})}),Object(b.jsx)(j.a,{onClick:f,children:Object(b.jsx)(m.a,{href:"/starwars_explorer_tsx/#/people",underline:"none",children:"People"})}),Object(b.jsx)(j.a,{onClick:f,children:Object(b.jsx)(m.a,{href:"/starwars_explorer_tsx/#/movies",underline:"none",children:"Movies"})}),Object(b.jsx)(j.a,{onClick:f,children:Object(b.jsx)(m.a,{href:"/starwars_explorer_tsx/#/planets",underline:"none",children:"Planets"})})]}),Object(b.jsx)(l.a,{variant:"h6",className:r.title,children:t})]})})})}}}]);
//# sourceMappingURL=4.120612a2.chunk.js.map