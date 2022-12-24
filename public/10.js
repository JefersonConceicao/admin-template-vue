/*! For license information please see 10.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{976:function(t,e,r){var n;n=function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="../dist/",r(r.s=5)}([function(t,e){t.exports=function(t,e,r,n,o){var i,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,a=t.default);var l,c="function"==typeof a?a.options:a;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=r),l){var h=c.functional,u=h?c.render:c.beforeCreate;h?c.render=function(t,e){return l.call(e),u(t,e)}:c.beforeCreate=u?[].concat(u,l):[l]}return{esModule:i,exports:a,options:c}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(4),o=r.n(n),i=r(9),a=r(0)(o.a,i.a,null,null,null);a.options.__file="src/js/components/vue-scrollbar.vue",a.esModule&&Object.keys(a.esModule).some((function(t){return"default"!==t&&"__"!==t.substr(0,2)}))&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] vue-scrollbar.vue: functional components are not supported with templates, they should use render functions."),e.default=a.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{draggingFromParent:Boolean,scrolling:Number,wrapper:Object,area:Object,onChangePosition:Function,onDragging:Function,onStopDrag:Function},data:function(){return{width:0,dragging:!1,start:0}},watch:{"wrapper.width":function(t,e){this.calculateSize(this)},"area.width":function(t,e){this.calculateSize(this)}},methods:{startDrag:function(t){t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t,this.dragging=!0,this.start=t.clientX},onDrag:function(t){if(this.dragging){this.onDragging(),t.preventDefault(),t.stopPropagation();var e=((t=t.changedTouches?t.changedTouches[0]:t).clientX-this.start)/this.wrapper.width*100;this.start=t.clientX;var r=this.scrolling+e;this.onChangePosition(r,"horizontal")}},stopDrag:function(t){this.dragging&&(this.onStopDrag(),this.dragging=!1)},jump:function(t){if(t.target===this.$refs.container){var e=this.$refs.scrollbar.getBoundingClientRect(),r=t.clientX-e.left,n=this.width/2,o=r/this.wrapper.width*100-n;this.start=t.clientX;var i=this.scrolling+o;this.onChangePosition(i,"horizontal")}},calculateSize:function(t){this.width=t.wrapper.width/t.area.width*100}},mounted:function(){this.calculateSize(this),document.addEventListener("mousemove",this.onDrag),document.addEventListener("touchmove",this.onDrag),document.addEventListener("mouseup",this.stopDrag),document.addEventListener("touchend",this.stopDrag)},beforeDestroy:function(){document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("touchmove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("touchend",this.stopDrag)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{draggingFromParent:Boolean,scrolling:Number,wrapper:Object,area:Object,onChangePosition:Function,onDragging:Function,onStopDrag:Function},data:function(){return{height:0,dragging:!1,start:0}},watch:{"wrapper.height":function(t,e){this.calculateSize(this)},"area.height":function(t,e){this.calculateSize(this)}},methods:{startDrag:function(t){t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t,this.dragging=!0,this.start=t.clientY},onDrag:function(t){if(this.dragging){this.onDragging(),t.preventDefault(),t.stopPropagation();var e=((t=t.changedTouches?t.changedTouches[0]:t).clientY-this.start)/this.wrapper.height*100;this.start=t.clientY;var r=this.scrolling+e;this.onChangePosition(r,"vertical")}},stopDrag:function(t){this.dragging&&(this.onStopDrag(),this.dragging=!1)},jump:function(t){if(t.target===this.$refs.container){var e=this.$refs.scrollbar.getBoundingClientRect(),r=t.clientY-e.top,n=this.height/2,o=r/this.wrapper.height*100-n;this.start=t.clientY;var i=this.scrolling+o;this.onChangePosition(i,"vertical")}},calculateSize:function(t){this.height=t.wrapper.height/t.area.height*100},getSize:function(){var t=this.$refs.container.parentElement,e=t.parentElement;return{scrollAreaHeight:t.children[0].clientHeight,scrollAreaWidth:t.children[0].clientWidth,scrollWrapperHeight:e.clientHeight,scrollWrapperWidth:e.clientWidth}}},mounted:function(){this.calculateSize(this),document.addEventListener("mousemove",this.onDrag),document.addEventListener("touchmove",this.onDrag),document.addEventListener("mouseup",this.stopDrag),document.addEventListener("touchend",this.stopDrag)},beforeDestroy:function(){document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("touchmove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("touchend",this.stopDrag)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(r(7)),o=i(r(6));function i(t){return t&&t.__esModule?t:{default:t}}e.default={props:{classes:String,styles:Object,speed:{type:Number,default:53},onMaxScroll:Function},components:{VerticalScrollbar:n.default,HorizontalScrollbar:o.default},data:function(){return{ready:!1,top:0,left:0,scrollAreaHeight:null,scrollAreaWidth:null,scrollWrapperHeight:null,scrollWrapperWidth:null,vMovement:0,hMovement:0,dragging:!1,start:{y:0,x:0},allowBodyScroll:!1}},methods:{scroll:function(t){var e=this;this.calculateSize((function(){var r=e.speed,n=t.shiftKey,o=t.deltaY>0?r:-r,i=t.deltaX>0?r:-r;n&&0==t.deltaX&&(i=t.deltaY>0?r:-r);var a=e.top+o,s=e.left+i,l=e.scrollAreaHeight>e.scrollWrapperHeight,c=e.scrollAreaWidth>e.scrollWrapperWidth;l&&!n&&e.normalizeVertical(a),n&&c&&e.normalizeHorizontal(s)})),this.allowBodyScroll||(t.preventDefault(),t.stopPropagation())},startDrag:function(t){var e=this;this.touchEvent=t;var r=t.changedTouches?t.changedTouches[0]:t;this.calculateSize((function(){e.dragging=!0,e.start={y:r.pageY,x:r.pageX}}))},onDrag:function(t){if(this.dragging){t.preventDefault(),t.stopPropagation(),this.touchEvent&&(this.touchEvent.preventDefault(),this.touchEvent.stopPropagation());var e=t.changedTouches?t.changedTouches[0]:t,r=this.start.y-e.clientY,n=this.start.x-e.clientX;this.start={y:e.clientY,x:e.clientX};var o=this.top+r,i=this.left+n;this.normalizeVertical(o),this.normalizeHorizontal(i)}},stopDrag:function(t){this.dragging=!1,this.touchEvent=!1},scrollToY:function(t){this.normalizeVertical(t)},scrollToX:function(t){this.normalizeHorizontal(t)},normalizeVertical:function(t){var e=this.getSize(),r=e.scrollAreaHeight-e.scrollWrapperHeight,n=t>r;n&&(t=r);var o=t<0;o&&(t=0);var i=this.top!==t;this.allowBodyScroll=!i,i&&(this.top=t,this.vMovement=t/e.scrollAreaHeight*100,this.onMaxScroll&&(o||n)&&this.onMaxScroll({top:o,bottom:n,right:!1,left:!1}))},normalizeHorizontal:function(t){var e=this.getSize(),r=e.scrollAreaWidth-this.scrollWrapperWidth,n=t>r;n&&(t=r);var o=t<0;t<0&&(t=0);var i=this.left!==t;this.allowBodyScroll=!i,i&&(this.left=t,this.hMovement=t/e.scrollAreaWidth*100,this.onMaxScroll&&(n||o)&&this.onMaxScroll({right:n,left:o,top:!1,bottom:!1}))},handleChangePosition:function(t,e){var r=this;this.calculateSize((function(){var n=t/100;"vertical"==e&&r.normalizeVertical(n*r.scrollAreaHeight),"horizontal"==e&&r.normalizeHorizontal(n*r.scrollAreaWidth)}))},handleScrollbarDragging:function(){this.dragging=!0},handleScrollbarStopDrag:function(){this.dragging=!1},getSize:function(){var t=this.$refs.scrollArea,e=this.$refs.scrollWrapper;return{scrollAreaHeight:t.children[0].clientHeight,scrollAreaWidth:t.children[0].clientWidth,scrollWrapperHeight:e.clientHeight,scrollWrapperWidth:e.clientWidth}},calculateSize:function(t){"function"!=typeof t&&(t=null);var e=this.getSize();return e.scrollWrapperHeight!==this.scrollWrapperHeight||e.scrollWrapperWidth!==this.scrollWrapperWidth||e.scrollAreaHeight!==this.scrollAreaHeight||e.scrollAreaWidth!==this.scrollAreaWidth?(this.scrollAreaHeight=e.scrollAreaHeight,this.scrollAreaWidth=e.scrollAreaWidth,this.scrollWrapperHeight=e.scrollWrapperHeight,this.scrollWrapperWidth=e.scrollWrapperWidth,this.ready=!0,!!t&&t()):!!t&&t()}},mounted:function(){this.calculateSize(),window.addEventListener("resize",this.calculateSize)},beforeDestroy:function(){window.removeEventListener("resize",this.calculateSize)}}},function(t,e,r){"use strict";var n,o=r(1),i=(n=o)&&n.__esModule?n:{default:n};t.exports=i.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(2),o=r.n(n),i=r(8),a=r(0)(o.a,i.a,null,null,null);a.options.__file="src/js/components/horizontal-scrollbar.vue",a.esModule&&Object.keys(a.esModule).some((function(t){return"default"!==t&&"__"!==t.substr(0,2)}))&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] horizontal-scrollbar.vue: functional components are not supported with templates, they should use render functions."),e.default=a.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3),o=r.n(n),i=r(10),a=r(0)(o.a,i.a,null,null,null);a.options.__file="src/js/components/vertical-scrollbar.vue",a.esModule&&Object.keys(a.esModule).some((function(t){return"default"!==t&&"__"!==t.substr(0,2)}))&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] vertical-scrollbar.vue: functional components are not supported with templates, they should use render functions."),e.default=a.exports},function(t,e,r){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.width<100?e("div",{ref:"container",staticClass:"vue-scrollbar__scrollbar-horizontal",on:{click:this.jump}},[e("div",{ref:"scrollbar",class:"scrollbar"+(this.dragging||this.draggingFromParent?"":" vue-scrollbar-transition"),style:{width:this.width+"%",left:this.scrolling+"%"},on:{touchstart:this.startDrag,mousedown:this.startDrag}})]):this._e()])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"scrollWrapper",class:"vue-scrollbar__wrapper"+(this.classes?" "+this.classes:""),style:this.styles,on:{click:t.calculateSize}},[r("div",{ref:"scrollArea",class:"vue-scrollbar__area"+(this.dragging?" ":" vue-scrollbar-transition"),style:{marginTop:-1*this.top+"px",marginLeft:-1*this.left+"px"},on:{wheel:t.scroll,touchstart:t.startDrag,touchmove:t.onDrag,touchend:t.stopDrag}},[t._t("default"),t._v(" "),t.ready?r("vertical-scrollbar",{attrs:{area:{height:t.scrollAreaHeight},wrapper:{height:t.scrollWrapperHeight},scrolling:t.vMovement,"dragging-from-parent":t.dragging,"on-change-position":t.handleChangePosition,"on-dragging":t.handleScrollbarDragging,"on-stop-drag":t.handleScrollbarStopDrag}}):t._e(),t._v(" "),t.ready?r("horizontal-scrollbar",{attrs:{area:{width:t.scrollAreaWidth},wrapper:{width:t.scrollWrapperWidth},scrolling:t.hMovement,"dragging-from-parent":t.dragging,"on-change-position":t.handleChangePosition,"on-dragging":t.handleScrollbarDragging,"on-stop-drag":t.handleScrollbarStopDrag}}):t._e()],2)])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.height<100?r("div",{ref:"container",staticClass:"vue-scrollbar__scrollbar-vertical",on:{click:t.jump}},[r("div",{ref:"scrollbar",class:"scrollbar"+(t.dragging||t.draggingFromParent?"":" vue-scrollbar-transition"),style:{height:t.height+"%",top:t.scrolling+"%"},on:{touchstart:t.startDrag,mousedown:t.startDrag}})]):t._e()])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o}])},t.exports=n()},977:function(t,e,r){(t.exports=r(30)(!1)).push([t.i,"\nbody {\n  background: #f9f9f9;\n  height: 1000px;\n}\np {\n  margin-top: 0;\n}\n.my-scrollbar {\n  width: 35%;\n  min-width: 300px;\n  max-height: 450px;\n}\n.scroll-me {\n  background: #EEE;\n  min-width: 750px;\n}\n.kolom {\n  background: #2196F3;\n  width: 150px;\n  height: 150px;\n  float: left;\n  display: inline-block;\n  margin: 15px;\n}\n.clearfix {\n  clear: both;\n}\n",""])},978:function(t,e,r){(t.exports=r(30)(!1)).push([t.i,".vue-scrollbar-transition, .vue-scrollbar__scrollbar-vertical, .vue-scrollbar__scrollbar-horizontal {\n  transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -webkit-transition: all 0.5s ease;\n  -o-transition: all 0.5s ease;\n}\n.vue-scrollbar-transition--scrollbar {\n  transition: opacity 0.5s linear;\n  -moz-transition: opacity 0.5s linear;\n  -webkit-transition: opacity 0.5s linear;\n  -o-transition: opacity 0.5s linear;\n}\n.vue-scrollbar__wrapper {\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n  background: white;\n}\n.vue-scrollbar__wrapper:hover .vue-scrollbar__scrollbar-vertical, .vue-scrollbar__wrapper:hover .vue-scrollbar__scrollbar-horizontal {\n  opacity: 1;\n}\n.vue-scrollbar__scrollbar-vertical, .vue-scrollbar__scrollbar-horizontal {\n  opacity: 0.5;\n  position: absolute;\n  background: transparent;\n}\n.vue-scrollbar__scrollbar-vertical:hover, .vue-scrollbar__scrollbar-horizontal:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n.vue-scrollbar__scrollbar-vertical .scrollbar, .vue-scrollbar__scrollbar-horizontal .scrollbar {\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  cursor: default;\n}\n.vue-scrollbar__scrollbar-vertical {\n  width: 10px;\n  height: 100%;\n  top: 0;\n  right: 0;\n}\n.vue-scrollbar__scrollbar-vertical .scrollbar {\n  width: 10px;\n}\n.vue-scrollbar__scrollbar-horizontal {\n  height: 10px;\n  width: 100%;\n  bottom: 0;\n  right: 0;\n}\n.vue-scrollbar__scrollbar-horizontal .scrollbar {\n  height: 10px;\n}\n",""])}}]);