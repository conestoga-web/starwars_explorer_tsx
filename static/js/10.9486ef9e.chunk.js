(this.webpackJsonpstar_wars_explorer_tsx=this.webpackJsonpstar_wars_explorer_tsx||[]).push([[10],{160:function(module,exports,__webpack_require__){module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=__webpack_require__(16)},function(e,t){e.exports=__webpack_require__(0)},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){return function(){var t,r=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},ReactAudioPlayer=function(_Component){_inherits(ReactAudioPlayer,_Component);var _super=_createSuper(ReactAudioPlayer);function ReactAudioPlayer(){var e;_classCallCheck(this,ReactAudioPlayer);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return _defineProperty(_assertThisInitialized(e=_super.call.apply(_super,[this].concat(r))),"audioEl",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),_defineProperty(_assertThisInitialized(e),"listenTracker",void 0),_defineProperty(_assertThisInitialized(e),"onError",(function(t){var r,n;return null===(r=(n=e.props).onError)||void 0===r?void 0:r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onCanPlay",(function(t){var r,n;return null===(r=(n=e.props).onCanPlay)||void 0===r?void 0:r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onCanPlayThrough",(function(t){var r,n;return null===(r=(n=e.props).onCanPlayThrough)||void 0===r?void 0:r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onPlay",(function(t){var r,n;e.setListenTrack(),null===(r=(n=e.props).onPlay)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onAbort",(function(t){var r,n;e.clearListenTrack(),null===(r=(n=e.props).onAbort)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onEnded",(function(t){var r,n;e.clearListenTrack(),null===(r=(n=e.props).onEnded)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onPause",(function(t){var r,n;e.clearListenTrack(),null===(r=(n=e.props).onPause)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onSeeked",(function(t){var r,n;null===(r=(n=e.props).onSeeked)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onLoadedMetadata",(function(t){var r,n;null===(r=(n=e.props).onLoadedMetadata)||void 0===r||r.call(n,t)})),_defineProperty(_assertThisInitialized(e),"onVolumeChanged",(function(t){var r,n;null===(r=(n=e.props).onVolumeChanged)||void 0===r||r.call(n,t)})),e}return _createClass(ReactAudioPlayer,[{key:"componentDidMount",value:function(){var e=this.audioEl.current;e&&(this.updateVolume(this.props.volume),e.addEventListener("error",this.onError),e.addEventListener("canplay",this.onCanPlay),e.addEventListener("canplaythrough",this.onCanPlayThrough),e.addEventListener("play",this.onPlay),e.addEventListener("abort",this.onAbort),e.addEventListener("ended",this.onEnded),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeeked),e.addEventListener("loadedmetadata",this.onLoadedMetadata),e.addEventListener("volumechange",this.onVolumeChanged))}},{key:"componentWillUnmount",value:function(){var e=this.audioEl.current;e&&(e.removeEventListener("error",this.onError),e.removeEventListener("canplay",this.onCanPlay),e.removeEventListener("canplaythrough",this.onCanPlayThrough),e.removeEventListener("play",this.onPlay),e.removeEventListener("abort",this.onAbort),e.removeEventListener("ended",this.onEnded),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeeked),e.removeEventListener("loadedmetadata",this.onLoadedMetadata),e.removeEventListener("volumechange",this.onVolumeChanged))}},{key:"componentDidUpdate",value:function(e){this.updateVolume(this.props.volume)}},{key:"setListenTrack",value:function(){var e=this;if(!this.listenTracker){var t=this.props.listenInterval;this.listenTracker=window.setInterval((function(){var t,r;e.audioEl.current&&(null===(t=(r=e.props).onListen)||void 0===t||t.call(r,e.audioEl.current.currentTime))}),t)}}},{key:"updateVolume",value:function(e){var t=this.audioEl.current;null!==t&&"number"==typeof e&&e!==(null==t?void 0:t.volume)&&(t.volume=e)}},{key:"clearListenTrack",value:function(){this.listenTracker&&(clearInterval(this.listenTracker),delete this.listenTracker)}},{key:"render",value:function(){var e=this.props.children||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Your browser does not support the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"audio")," element."),t=!(!1===this.props.controls),r=this.props.title?this.props.title:this.props.src,n={};return this.props.controlsList&&(n.controlsList=this.props.controlsList),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio",_extends({autoPlay:this.props.autoPlay,className:"react-audio-player ".concat(this.props.className),controls:t,crossOrigin:this.props.crossOrigin,id:this.props.id,loop:this.props.loop,muted:this.props.muted,preload:this.props.preload,ref:this.audioEl,src:this.props.src,style:this.props.style,title:r},n),e)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ReactAudioPlayer}(react__WEBPACK_IMPORTED_MODULE_0__.Component);_defineProperty(ReactAudioPlayer,"propTypes",void 0),_defineProperty(ReactAudioPlayer,"defaultProps",void 0),ReactAudioPlayer.defaultProps={autoPlay:!1,children:null,className:"",controls:!1,controlsList:"",id:"",listenInterval:1e4,loop:!1,muted:!1,onAbort:function(){},onCanPlay:function(){},onCanPlayThrough:function(){},onEnded:function(){},onError:function(){},onListen:function(){},onPause:function(){},onPlay:function(){},onSeeked:function(){},onVolumeChanged:function(){},onLoadedMetadata:function(){},preload:"metadata",style:{},title:"",volume:1},ReactAudioPlayer.propTypes={autoPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,controls:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,controlsList:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,crossOrigin:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,listenInterval:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,loop:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,muted:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,onAbort:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlayThrough:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onEnded:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onError:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onListen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onLoadedMetadata:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPause:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onSeeked:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onVolumeChanged:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,preload:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["","none","metadata","auto"]),src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,volume:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number};var _default=ReactAudioPlayer,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(ReactAudioPlayer,"ReactAudioPlayer","/home/justin/Projects/react-audio-player/src/index.tsx"),reactHotLoader.register(_default,"default","/home/justin/Projects/react-audio-player/src/index.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}])},179:function(e,t,r){"use strict";r.r(t);r(0),r(95);var n=r(96),o=r(97),a=r(160),i=r.n(a),s=r(4);t.default=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("body",{children:[Object(s.jsx)("header",{children:Object(s.jsx)(n.a,{title:"Star Wars Explorer"})}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(o.a,{}),Object(s.jsxs)("div",{className:"a-long-time-ago",children:["A long time ago, in a galaxy far,",Object(s.jsx)("br",{})," far away..."]}),Object(s.jsx)("div",{className:"logo",children:Object(s.jsx)("img",{alt:"logo",src:"images/Star_Wars_Logo.jpg"})}),Object(s.jsx)("div",{className:"crawl",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"It is a period of civil war. Rebel spaceships, strikings from a hidden base, have won their first victory against the evil Galactic Empire."}),Object(s.jsx)("p",{children:"During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet."}),Object(s.jsx)("p",{children:"Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plan that can save her people and restore freedom to the galaxy...."})]})})]}),Object(s.jsx)(i.a,{src:"audio/Star-Wars.mp3",autoPlay:!0})]})})}},95:function(e,t,r){},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(105),o=r(0),a=r.n(o),i=r(180),s=r(204),l=r(183),_=r(186),c=r(192),u=r(193),d=r(187),p=r(104),f=r.n(p),h=r(196),y=r(189),P=r(191),E=r(205),b=r(4),O=Object(i.a)((function(e){return Object(s.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}})}));function v(e){var t=e.title,r=O(),o=a.a.useState(null),i=Object(n.a)(o,2),s=i[0],p=i[1],v=function(){p(null)};return Object(b.jsx)("div",{className:r.root,children:Object(b.jsx)(l.a,{position:"static",style:{background:"#2E3B55"},children:Object(b.jsxs)(_.a,{children:[Object(b.jsx)(d.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},children:Object(b.jsx)(f.a,{})}),Object(b.jsxs)(h.a,{id:"simple-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:v,children:[Object(b.jsx)(y.a,{onClick:v,children:Object(b.jsx)(P.a,{href:"/starwars_explorer_tsx/#/",underline:"none",children:"Home"})}),Object(b.jsx)(y.a,{onClick:v,children:Object(b.jsx)(P.a,{href:"/starwars_explorer_tsx/#/people",underline:"none",children:"People"})}),Object(b.jsx)(y.a,{onClick:v,children:Object(b.jsx)(P.a,{href:"/starwars_explorer_tsx/#/movies",underline:"none",children:"Movies"})}),Object(b.jsx)(y.a,{onClick:v,children:Object(b.jsx)(P.a,{href:"/starwars_explorer_tsx/#/planets",underline:"none",children:"Planets"})})]}),Object(b.jsx)(c.a,{variant:"h6",className:r.title,children:t}),Object(b.jsx)(u.a,{href:"/starwars_explorer_tsx/#/",children:Object(b.jsx)(E.a,{alt:"Star Wars Logo",src:"images/starwars_logo.jpg",className:r.large})})]})})})}},97:function(e,t,r){"use strict";var n=r(13),o=(r(0),r(98),r(193)),a=r(194),i=r(180),s=r(4),l=Object(i.a)((function(e){return{root:Object(n.a)({display:"flex","& > *":{margin:e.spacing(5)}},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing()}})}}));t.a=function(){var e=l();return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"nav",children:Object(s.jsx)("section",{className:e.root,children:Object(s.jsxs)(a.a,{orientation:"vertical","aria-label":"vertical contained primary button group",variant:"contained",children:[Object(s.jsx)(o.a,{href:"/starwars_explorer_tsx/#/people",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"People"}),Object(s.jsx)(o.a,{href:"/starwars_explorer_tsx/#/movies",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"Movies"}),Object(s.jsx)(o.a,{href:"/starwars_explorer_tsx/#/planets",style:{borderRadius:35,backgroundColor:"#21b6ae",color:"#ffffff",fontSize:"15px"},variant:"contained",children:"Planets"})]})})})})}},98:function(e,t,r){}}]);
//# sourceMappingURL=10.9486ef9e.chunk.js.map