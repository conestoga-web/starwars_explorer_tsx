(this.webpackJsonpstar_wars_explorer_tsx=this.webpackJsonpstar_wars_explorer_tsx||[]).push([[9],{139:function(e,t,a){"use strict";var n=a(1),r=a(88),s=a(0),i=(a(16),a(89)),c=a(90),o=a(96),l=s.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.color,d=void 0===l?"default":l,p=e.component,u=void 0===p?"li":p,j=e.disableGutters,b=void 0!==j&&j,h=e.disableSticky,m=void 0!==h&&h,x=e.inset,g=void 0!==x&&x,f=Object(r.a)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return s.createElement(u,Object(n.a)({className:Object(i.a)(a.root,c,"default"!==d&&a["color".concat(Object(o.a)(d))],g&&a.inset,!m&&a.sticky,!b&&a.gutters),ref:t},f))}));t.a=Object(c.a)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(l)},140:function(e,t,a){"use strict";var n=a(1),r=a(88),s=a(0),i=(a(16),a(89)),c=a(90),o=a(183),l=a(111),d=s.forwardRef((function(e,t){var a=e.children,c=e.classes,d=e.className,p=e.disableTypography,u=void 0!==p&&p,j=e.inset,b=void 0!==j&&j,h=e.primary,m=e.primaryTypographyProps,x=e.secondary,g=e.secondaryTypographyProps,f=Object(r.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),O=s.useContext(l.a).dense,y=null!=h?h:a;null==y||y.type===o.a||u||(y=s.createElement(o.a,Object(n.a)({variant:O?"body2":"body1",className:c.primary,component:"span",display:"block"},m),y));var v=x;return null==v||v.type===o.a||u||(v=s.createElement(o.a,Object(n.a)({variant:"body2",className:c.secondary,color:"textSecondary",display:"block"},g),v)),s.createElement("div",Object(n.a)({className:Object(i.a)(c.root,d,O&&c.dense,b&&c.inset,y&&v&&c.multiline),ref:t},f),y,v)}));t.a=Object(c.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(d)},190:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),s=a.n(r),i=a(12),c=a.n(i),o=a(17),l=a(31),d=a(171),p=a(179),u=a(181),j=a(140),b=a(139),h=a(196),m=a(4),x=Object(d.a)((function(e){return{root:{width:"100%",maxWidth:500,backgroundColor:e.palette.background.default,position:"relative",overflow:"auto",maxHeight:700},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}}}));function g(e){return Object(m.jsx)(u.a,Object(n.a)({button:!0,component:"a"},e))}var f=function(e){var t=e.planetList,a=e.loadingPlanetList,n=x();return Object(m.jsxs)("section",{children:[Object(m.jsx)("br",{}),a&&"Loading...",!a&&t&&Object(m.jsx)(p.a,{className:n.root,subheader:Object(m.jsx)("li",{}),children:t.map((function(e,t){return Object(m.jsx)("li",{className:n.listSection,children:Object(m.jsx)("ul",{className:n.ul,children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(g,{href:"/starwars_explorer_tsx/#/planet/".concat(e.id=t+1),children:[Object(m.jsx)(h.a,{alt:e.name,src:"images/planets/".concat(e.name,".jpg")}),"\xa0",Object(m.jsx)(j.a,{primary:e.name})]})})})},"section-".concat(t))}))})]})},O=a(42),y=s.a.useEffect,v=Object(l.b)((function(e){var t=e.planetList,a=e.loading;return{planetList:t.planetList,loadingPlanetList:a["planetList/GET_PLANETS"]}}),{getPlanets:O.b})((function(e){var t=e.getPlanets,a=e.planetList,n=e.loadingPlanetList;return y((function(){(function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(m.jsx)(f,{planetList:a,loadingPlanetList:n})})),k=(a(94),a(95));t.default=function(e){var t=e.planetList;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("header",{children:Object(m.jsx)(k.a,{title:"Planets"})}),Object(m.jsx)("section",{className:"container",children:Object(m.jsx)(v,Object(n.a)({},t))})]})}},94:function(e,t,a){},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a(102),r=a(0),s=a.n(r),i=a(171),c=a(195),o=a(174),l=a(177),d=a(183),p=a(184),u=a(178),j=a(101),b=a.n(j),h=a(186),m=a(180),x=a(182),g=a(196),f=a(4),O=Object(i.a)((function(e){return Object(c.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}})}));function y(e){var t=e.title,a=O(),r=s.a.useState(null),i=Object(n.a)(r,2),c=i[0],j=i[1],y=function(){j(null)};return Object(f.jsx)("div",{className:a.root,children:Object(f.jsx)(o.a,{position:"static",style:{background:"#2E3B55"},children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(u.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:Object(f.jsx)(b.a,{})}),Object(f.jsxs)(h.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:y,children:[Object(f.jsx)(m.a,{onClick:y,children:Object(f.jsx)(x.a,{href:"/starwars_explorer_tsx/#/",underline:"none",children:"Home"})}),Object(f.jsx)(m.a,{onClick:y,children:Object(f.jsx)(x.a,{href:"/starwars_explorer_tsx/#/people",underline:"none",children:"People"})}),Object(f.jsx)(m.a,{onClick:y,children:Object(f.jsx)(x.a,{href:"/starwars_explorer_tsx/#/movies",underline:"none",children:"Movies"})}),Object(f.jsx)(m.a,{onClick:y,children:Object(f.jsx)(x.a,{href:"/starwars_explorer_tsx/#/planets",underline:"none",children:"Planets"})})]}),Object(f.jsx)(d.a,{variant:"h6",className:a.title,children:t}),Object(f.jsx)(p.a,{href:"/starwars_explorer_tsx/#/",children:Object(f.jsx)(g.a,{alt:"Star Wars Logo",src:"images/starwars_logo.jpg",className:a.large})})]})})})}}}]);
//# sourceMappingURL=9.50bdc61d.chunk.js.map