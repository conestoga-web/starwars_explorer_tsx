(this.webpackJsonpstar_wars_explorer_tsx=this.webpackJsonpstar_wars_explorer_tsx||[]).push([[8],{139:function(e,t,a){"use strict";var r=a(1),n=a(88),o=a(0),s=(a(16),a(89)),i=a(90),c=a(96),l=o.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.color,p=void 0===l?"default":l,d=e.component,u=void 0===d?"li":d,j=e.disableGutters,b=void 0!==j&&j,h=e.disableSticky,m=void 0!==h&&h,x=e.inset,g=void 0!==x&&x,f=Object(n.a)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return o.createElement(u,Object(r.a)({className:Object(s.a)(a.root,i,"default"!==p&&a["color".concat(Object(c.a)(p))],g&&a.inset,!m&&a.sticky,!b&&a.gutters),ref:t},f))}));t.a=Object(i.a)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(l)},140:function(e,t,a){"use strict";var r=a(1),n=a(88),o=a(0),s=(a(16),a(89)),i=a(90),c=a(183),l=a(111),p=o.forwardRef((function(e,t){var a=e.children,i=e.classes,p=e.className,d=e.disableTypography,u=void 0!==d&&d,j=e.inset,b=void 0!==j&&j,h=e.primary,m=e.primaryTypographyProps,x=e.secondary,g=e.secondaryTypographyProps,f=Object(n.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),O=o.useContext(l.a).dense,y=null!=h?h:a;null==y||y.type===c.a||u||(y=o.createElement(c.a,Object(r.a)({variant:O?"body2":"body1",className:i.primary,component:"span",display:"block"},m),y));var v=x;return null==v||v.type===c.a||u||(v=o.createElement(c.a,Object(r.a)({variant:"body2",className:i.secondary,color:"textSecondary",display:"block"},g),v)),o.createElement("div",Object(r.a)({className:Object(s.a)(i.root,p,O&&i.dense,b&&i.inset,y&&v&&i.multiline),ref:t},f),y,v)}));t.a=Object(i.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(p)},188:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),o=a.n(n),s=a(12),i=a.n(s),c=a(17),l=a(31),p=a(171),d=a(179),u=a(181),j=a(140),b=a(139),h=a(196),m=a(4),x=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:500,backgroundColor:e.palette.background.default,position:"relative",overflow:"auto",maxHeight:700},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}}}));function g(e){return Object(m.jsx)(u.a,Object(r.a)({button:!0,component:"a"},e))}var f=function(e){var t=e.peopleList,a=e.loadingPeopleList,r=x();return Object(m.jsxs)("section",{children:[Object(m.jsx)("br",{}),a&&"Loading...",!a&&t&&Object(m.jsx)(d.a,{className:r.root,subheader:Object(m.jsx)("li",{}),children:t.map((function(e,t){return Object(m.jsx)("li",{className:r.listSection,children:Object(m.jsx)("ul",{className:r.ul,children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(g,{href:"/starwars_explorer_tsx/#/person/".concat(e.id=t>=17?t+2:t+1),children:[Object(m.jsx)(h.a,{alt:e.name,src:"images/characters/".concat(e.name.replace(/ /g,"_").toLowerCase(),".jpg")}),"\xa0",Object(m.jsx)(j.a,{primary:e.name})]})})})},"section-".concat(t))}))})]})},O=a(44),y=o.a.useEffect,v=Object(l.b)((function(e){var t=e.peopleList,a=e.loading;return{peopleList:t.peopleList,loadingPeopleList:a["peopleList/GET_PEOPLE"]}}),{getPeople:O.b})((function(e){var t=e.getPeople,a=e.peopleList,r=e.loadingPeopleList;return y((function(){(function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(m.jsx)(f,{peopleList:a,loadingPeopleList:r})})),k=(a(94),a(95));t.default=function(e){var t=e.peopleList;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("header",{children:Object(m.jsx)(k.a,{title:"People"})}),Object(m.jsx)("section",{className:"container",children:Object(m.jsx)(v,Object(r.a)({},t))})]})}},94:function(e,t,a){},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var r=a(102),n=a(0),o=a.n(n),s=a(171),i=a(195),c=a(174),l=a(177),p=a(183),d=a(184),u=a(178),j=a(101),b=a.n(j),h=a(186),m=a(180),x=a(182),g=a(196),f=a(4),O=Object(s.a)((function(e){return Object(i.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}})}));function y(e){var t=e.title,a=O(),n=o.a.useState(null),s=Object(r.a)(n,2),i=s[0],j=s[1],y=function(){j(null)};return Object(f.jsx)("div",{className:a.root,children:Object(f.jsx)(c.a,{position:"static",style:{background:"#2E3B55"},children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(u.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:Object(f.jsx)(b.a,{})}),Object(f.jsxs)(h.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:y,children:[Object(f.jsx)(m.a,{onClick:y,children:Object(f.jsx)(x.a,{href:"/starwars_explorer_tsx/#/",underline:"none",children:"Home"})}),Object(f.jsx)(m.a,{onClick:y,children:Object(f.jsx)(x.a,{href:"/starwars_explorer_tsx/#/people",underline:"none",children:"People"})}),Object(f.jsx)(m.a,{onClick:y,children:Object(f.jsx)(x.a,{href:"/starwars_explorer_tsx/#/movies",underline:"none",children:"Movies"})}),Object(f.jsx)(m.a,{onClick:y,children:Object(f.jsx)(x.a,{href:"/starwars_explorer_tsx/#/planets",underline:"none",children:"Planets"})})]}),Object(f.jsx)(p.a,{variant:"h6",className:a.title,children:t}),Object(f.jsx)(d.a,{href:"/starwars_explorer_tsx/#/",children:Object(f.jsx)(g.a,{alt:"Star Wars Logo",src:"images/starwars_logo.jpg",className:a.large})})]})})})}}}]);
//# sourceMappingURL=8.34331711.chunk.js.map