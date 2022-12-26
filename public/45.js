(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/card/card.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/card/card.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'card',
  data: function data() {
    return {
      show: true,
      isActive: false
    };
  },
  methods: {
    hide: function hide() {
      this.isActive = true;
    }
  },
  mounted: function mounted() {},
  props: {
    title: {
      required: false
    }
  },
  destroy: function destroy() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/timeline.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/timeline.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _card_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.vue */ "./resources/components/pages/card/card.vue");
/* harmony import */ var jquery_advanced_news_ticker_assets_js_jquery_newsTicker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-advanced-news-ticker/assets/js/jquery.newsTicker.js */ "./node_modules/jquery-advanced-news-ticker/assets/js/jquery.newsTicker.js");
/* harmony import */ var jquery_advanced_news_ticker_assets_js_jquery_newsTicker_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_advanced_news_ticker_assets_js_jquery_newsTicker_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


__webpack_require__(/*! imports-loader?this=>window!wowjs/dist/wow.min.js */ "./node_modules/imports-loader/index.js?this=>window!./node_modules/wowjs/dist/wow.min.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "timeline",
  components: {
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    "use strict";

    $(document).ready(function () {
      new WOW().init(); //auto timeline update panel

      if ($('.timeline-update').length > 0) {
        $('.timeline-update').newsTicker({
          row_height: 120,
          max_rows: 3,
          speed: 2000,
          direction: 'up',
          duration: 3500,
          autostart: 1,
          pauseOnHover: 1
        });
      } //auto timeline update panel ends

    });
  },
  destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/card/card.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/card/card.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dNone{\n    display: none;\n}\n.rotate{\n    transform:rotate(180deg);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/timeline.css?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/timeline.css?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeline {\r\n    list-style : none;\r\n    padding    : 20px 0 20px;\r\n    position   : relative;\n}\n.timeline:before {\r\n    top              : 0;\r\n    bottom           : 0;\r\n    position         : absolute;\r\n    content          : \" \";\r\n    width            : 3px;\r\n    background-color : #EEEEEE;\r\n    left             : 50.2%;\r\n    margin-left      : -1.5px;\n}\n.timeline > li {\r\n    position : relative;\n}\n.timeline > li:before,\r\n.timeline > li:after {\r\n    content : \" \";\r\n    display : table;\n}\n.timeline > li:after {\r\n    clear : both;\n}\n.timeline > li:before,\r\n.timeline > li:after {\r\n    content : \" \";\r\n    display : table;\n}\n.timeline > li:after {\r\n    clear : both;\n}\n.timeline > li > .timeline-panel {\r\n    width              : 44%;\r\n    float              : left;\r\n    border             : 1px solid #D4D4D4;\r\n    border-radius      : 2px;\r\n    padding            : 20px;\r\n    position           : relative;\r\n    -webkit-box-shadow : 0 1px 6px rgba(0, 0, 0, 0.175);\r\n    box-shadow         : 0 1px 6px rgba(0, 0, 0, 0.175);\n}\n.timeline > li > .timeline-panel:before {\r\n    position      : absolute;\r\n    top           : 26px;\r\n    right         : -15px;\r\n    display       : inline-block;\r\n    border-top    : 15px solid transparent;\r\n    border-left   : 15px solid #CCC;\r\n    border-right  : 0 solid #CCC;\r\n    border-bottom : 15px solid transparent;\r\n    content       : \" \";\n}\n.timeline > li > .timeline-panel:after {\r\n    position      : absolute;\r\n    top           : 27px;\r\n    right         : -14px;\r\n    display       : inline-block;\r\n    border-top    : 14px solid transparent;\r\n    border-left   : 14px solid #FFF;\r\n    border-right  : 0 solid #FFF;\r\n    border-bottom : 14px solid transparent;\r\n    content       : \" \";\n}\n.timeline > li > .timeline-badge {\r\n    color         : #FFF;\r\n    width         : 40px;\r\n    height        : 40px;\r\n    line-height   : 42px;\r\n    font-size     : 1.4em;\r\n    text-align    : center;\r\n    position      : absolute;\r\n    top           : 21px;\r\n    left          : 50.8%;\r\n    margin-left   : -25px;\r\n    z-index       : 100;\r\n    border-radius : 50%;\n}\n.timeline > li.timeline-inverted > .timeline-panel {\r\n    float : right;\n}\n.timeline > li.timeline-inverted > .timeline-panel:before {\r\n    border-left-width  : 0;\r\n    border-right-width : 15px;\r\n    left               : -15px;\r\n    right              : auto;\n}\n.timeline > li.timeline-inverted > .timeline-panel:after {\r\n    border-left-width  : 0;\r\n    border-right-width : 14px;\r\n    left               : -14px;\r\n    right              : auto;\n}\n.timeline-badge.primary {\r\n    background-color : #6699CC !important;\n}\n.timeline-badge.success {\r\n    background-color : #66CC99 !important;\n}\n.timeline-badge.warning {\r\n    background-color : #F0AD4E !important;\n}\n.timeline-badge.danger {\r\n    background-color : #FF6666 !important;\n}\n.timeline-badge.info {\r\n    background-color : #66CCFF !important;\n}\n.timeline-badge.default {\r\n    background-color : #DCDCDC !important;\n}\n.timeline-title {\r\n    margin-top : 0;\r\n    color      : inherit;\n}\n.timeline-body > p,\r\n.timeline-body > ul {\r\n    margin-bottom : 0;\n}\n.timeline-body > p + p {\r\n    margin-top : 5px;\n}\n.timeline_panel {\r\n    padding-bottom : 26px;\n}\n.text-default-gray {\r\n    color : #777;\n}\r\n\r\n/*recent activity*/\n.schedule-cont {\r\n    padding-left : 0;\n}\n.schedule-cont .item {\r\n    border-left   : 1px solid #ccc;\r\n    margin-bottom : -13px;\r\n    min-height    : 70px;\r\n    padding-top   : 10px;\n}\n.schedule-cont .success {\r\n    border-left : 1px solid #66CC99;\n}\n.schedule-cont .danger {\r\n    border-left : 1px solid #FF6666;\n}\n.schedule-cont .item .text-muted {\r\n    color: #888;\r\n    font-size: 11px;\n}\n.schedule-cont .item p {\r\n    color : #555;\n}\n.schedule-cont .item:before {\r\n    content          : \" \";\r\n    display          : table;\r\n    background-color : #fff;\r\n    border           : 1px solid #58748B;\r\n    border-radius    : 10px;\r\n    height           : 9px;\r\n    left             : 0;\r\n    margin-left      : -5px;\r\n    width            : 9px;\r\n    clear            : both;\r\n    bottom           : auto;\r\n    top              : 4px;\n}\n.schedule-cont .success:before {\r\n    border-color : #66CC99;\n}\n.schedule-cont .danger:before {\r\n    border-color : #FF6666;\n}\n.schedule-cont .item .data {\r\n    padding-left : 20px;\r\n    margin-top   : -10px;\n}\r\n/*recent activity ends*/\r\n\r\n/*timeline update*/\n.timeline-update {\r\n    list-style : none;\r\n    padding    : 20px 10px;\r\n    position   : relative;\n}\n.timeline-update:before {\r\n    top              : 0;\r\n    bottom           : 0;\r\n    position         : absolute;\r\n    content          : \" \";\r\n    width            : 3px;\r\n    background-color : #eeeeee;\r\n    right            : 17px;\r\n    margin-left      : -1.5px;\n}\n.timeline-update > li {\r\n    margin-bottom : 20px;\r\n    position      : relative;\n}\n.timeline-update > li:before,\r\n.timeline-update > li:after {\r\n    content : \" \";\r\n    display : table;\n}\n.timeline-update > li:after {\r\n    clear : both;\n}\n.timeline-update > li:before,\r\n.timeline-update > li:after {\r\n    content : \" \";\r\n    display : table;\n}\n.timeline-update > li:after {\r\n    clear : both;\n}\n.timeline-update > li > .timeline-panel {\r\n    width                   : 83%;\r\n    float                   : left;\r\n    background-color        : #fff;\r\n    border                  : 1px solid #d4d4d4;\r\n    border-radius           : 6px;\r\n    border-top-right-radius : 0;\r\n    padding                 : 10px 15px;\r\n    position                : relative;\r\n    -webkit-box-shadow      : 0 1px 6px rgba(0, 0, 0, 0.175);\r\n    box-shadow              : 0 1px 6px rgba(0, 0, 0, 0.175);\n}\n.timeline-update > li > .timeline-panel:before {\r\n    position      : absolute;\r\n    top           : -1px;\r\n    right         : -15px;\r\n    display       : inline-block;\r\n    border-top    : 2px solid #ccc;\r\n    border-left   : 15px solid #ccc;\r\n    border-right  : 0 solid #ccc;\r\n    border-bottom : 20px solid transparent;\r\n    content       : \" \";\n}\n.timeline-update > li > .timeline-panel:after {\r\n    position      : absolute;\r\n    top           : 0;\r\n    right         : -14px;\r\n    display       : inline-block;\r\n    border-left   : 14px solid #fff;\r\n    border-right  : 0 solid #fff;\r\n    border-bottom : 18px solid transparent;\r\n    content       : \" \";\n}\n.timeline-update > li > .timeline-badge {\r\n    color                      : #fff;\r\n    width                      : 36px;\r\n    top                        : -15px;\r\n    height                     : 36px;\r\n    line-height                : 50px;\r\n    font-size                  : 1.2em;\r\n    text-align                 : center;\r\n    position                   : absolute;\r\n    right                      : -9px;\r\n    margin-left                : -25px;\r\n    z-index                    : 100;\n}\n.timeline-update > li.timeline-inverted > .timeline-panel {\r\n    float : right;\n}\n.timeline-update > li.timeline-inverted > .timeline-panel:before {\r\n    border-left-width  : 0;\r\n    border-right-width : 15px;\r\n    left               : -15px;\r\n    right              : auto;\n}\n.timeline-update > li.timeline-inverted > .timeline-panel:after {\r\n    border-left-width  : 0;\r\n    border-right-width : 14px;\r\n    left               : -14px;\r\n    right              : auto;\n}\n.timeline-update .timeline-title {\r\n    margin : 0;\r\n    color  : inherit;\n}\n.timeline-update .timeline-body > p,\r\n.timeline-update .timeline-body > ul {\r\n    margin-bottom : 0;\n}\n.timeline-update .timeline-body > p + p {\r\n    margin-top : 5px;\n}\n.timeline-update .timeline_panel {\r\n    padding-bottom : 26px;\n}\n.text-default-gray {\r\n    color : #777;\n}\n.timeline-update .timeline-heading p {\r\n    margin : 0;\n}\n.timeline-body .dropdown{\r\n    z-index: 99;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/imports-loader/index.js?this=>window!./node_modules/wowjs/dist/wow.min.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/imports-loader?this=>window!./node_modules/wowjs/dist/wow.min.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
(function() {

/*! WOW - v1.1.2 - 2016-04-08
* Copyright (c) 2016 Matthieu Aussaguel;*/(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
}.call(window));

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/card/card.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/card/card.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/card/card.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/timeline.css?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/timeline.css?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./timeline.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/timeline.css?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/card/card.vue?vue&type=template&id=15e33d3a&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/card/card.vue?vue&type=template&id=15e33d3a& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card", class: { dNone: _vm.isActive } }, [
    _c("div", { staticClass: "card-header" }, [
      _c("h3", {
        staticClass: "card-title",
        domProps: { innerHTML: _vm._s(_vm.title) }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "float-right" }, [
        _c("i", {
          staticClass: "fa fa-fw ti-angle-up",
          class: { rotate: _vm.show },
          on: {
            click: function($event) {
              _vm.show = !_vm.show
            }
          }
        }),
        _vm._v(" "),
        _c("i", {
          staticClass: "fa fa-fw ti-close removecard",
          on: { click: _vm.hide }
        })
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.show,
            expression: "show"
          }
        ],
        staticClass: "card-body"
      },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/timeline.vue?vue&type=template&id=7f76b73d&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/timeline.vue?vue&type=template&id=7f76b73d& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-8 timeline_card" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='fa fa-fw ti-time'></i> Timeline" } },
            [
              _c("div", [
                _c("ul", { staticClass: "timeline" }, [
                  _c("li", [
                    _c(
                      "div",
                      {
                        staticClass:
                          "timeline-badge primary wow bounceInDown center"
                      },
                      [_c("i", { staticClass: "fa fa-fw ti-server" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "timeline-panel wow bounceInDown",
                        staticStyle: { display: "inline-block" }
                      },
                      [
                        _c("div", { staticClass: "timeline-heading" }, [
                          _c("h4", { staticClass: "timeline-title" }, [
                            _vm._v("We are a MNC now")
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _c("small", { staticClass: "text-primary" }, [
                              _vm._v("11 hours ago via Twitter")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-body" }, [
                          _c("p", [
                            _vm._v(
                              "\r\n                                        Lorem Ipsum is simply dummy, vidis lio, quem amistosis quis leo..\r\n                                    "
                            )
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "timeline-inverted" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "timeline-badge danger wow lightSpeedIn center"
                      },
                      [_c("i", { staticClass: "fa fa-fw ti-check-box" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "timeline-panel wow slideInRight" },
                      [
                        _c("div", { staticClass: "timeline-heading" }, [
                          _c("h4", { staticClass: "timeline-title" }, [
                            _vm._v("We won best website award")
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _c("small", { staticClass: "text-danger" }, [
                              _vm._v("May 08, 2016")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-body" }, [
                          _c("p", [
                            _vm._v(
                              "Lorem Ipsum is simply dummy, vidis litro abertis."
                            )
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "div",
                      {
                        staticClass:
                          "timeline-badge info wow lightSpeedIn center"
                      },
                      [_c("i", { staticClass: "fa fa-fw ti-credit-card" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "timeline-panel wow slideInLeft" },
                      [
                        _c("div", { staticClass: "timeline-heading" }, [
                          _c("h4", { staticClass: "timeline-title" }, [
                            _vm._v("Hired our first employee")
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _c("small", { staticClass: "text-info" }, [
                              _vm._v("June 10, 2005")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-body" }, [
                          _c("p", [
                            _vm._v(
                              "\r\n                                        Lorem Ipsum is simply dummy, vidis litro abertis. Pra uium u num\r\n                                        gostis.\r\n                                    "
                            )
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "timeline-inverted" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "timeline-badge warning wow lightSpeedIn center"
                      },
                      [_c("i", { staticClass: "fa fa-fw ti-map" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "timeline-panel wow lightSpeedIn" },
                      [
                        _c("div", { staticClass: "timeline-heading" }, [
                          _c("h4", { staticClass: "timeline-title" }, [
                            _vm._v("Rented an office space")
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _c("small", { staticClass: "text-warning" }, [
                              _vm._v("Jan 05, 2002")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-body" }, [
                          _c("p", [
                            _vm._v(
                              "\r\n                                        Lorem Ipsum is simply dummy, vidis litro abertis. Cais bolis eu num\r\n                                        gostis.\r\n                                    "
                            )
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "div",
                      {
                        staticClass:
                          "timeline-badge default wow bounceInUp center"
                      },
                      [_c("i", { staticClass: "fa fa-fw ti-thumb-up" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "timeline-panel wow bounceInUp" },
                      [
                        _c("div", { staticClass: "timeline-heading" }, [
                          _c("h4", { staticClass: "timeline-title" }, [
                            _vm._v("Planning to open an office")
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _c("small", { staticClass: "text-default-gray" }, [
                              _vm._v("jan 02, 2017")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "timeline-body" },
                          [
                            _c("p", [
                              _vm._v(
                                "\r\n                                        Lorem Ipsum is simply dummy, vidis litro abertis. depois divoltis.\r\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("hr"),
                            _vm._v(" "),
                            _c(
                              "b-dd",
                              {
                                staticClass: "btn",
                                attrs: { variant: "primary" }
                              },
                              [
                                _c("template", { slot: "button-content" }, [
                                  _c("i", { staticClass: "ti-settings" })
                                ]),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  { staticClass: "content-header" },
                                  [
                                    _vm._v(
                                      "\r\n                                            Action\r\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  { staticClass: "content-header" },
                                  [
                                    _vm._v(
                                      "\r\n                                            Another Action\r\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("b-dropdown-divider"),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  { staticClass: "content-header" },
                                  [
                                    _vm._v(
                                      "\r\n                                            Separated link\r\n                                        "
                                    )
                                  ]
                                )
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-sm-6 col-md-12" },
            [
              _c(
                "card",
                {
                  attrs: {
                    title:
                      "<i class='fa fa-fw ti-comment-alt'></i> Recent Activities"
                  }
                },
                [
                  _c("ul", { staticClass: "schedule-cont" }, [
                    _c("li", { staticClass: "item success" }, [
                      _c("div", { staticClass: "data" }, [
                        _c("div", { staticClass: "time text-muted" }, [
                          _vm._v(" Just now")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _c("span", { staticClass: "text-info" }, [
                            _vm._v("Jade")
                          ]),
                          _vm._v(
                            " Project team has successfully\r\n                                        completed their\r\n                                        first phase."
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "item danger" }, [
                      _c("div", { staticClass: "data" }, [
                        _c("div", { staticClass: "time text-muted" }, [
                          _vm._v(" 7min ago")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("Tinder Project's "),
                          _c("span", { staticClass: "text-info" }, [
                            _vm._v("Second")
                          ]),
                          _vm._v(
                            " review has\r\n                                        completed."
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "item" }, [
                      _c("div", { staticClass: "data" }, [
                        _c("div", { staticClass: "time text-muted" }, [
                          _vm._v("5hours ago")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Richard McClintock, updated his project over view report."
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "item success" }, [
                      _c("div", { staticClass: "data" }, [
                        _c("div", { staticClass: "time text-muted" }, [
                          _vm._v(" Yesterday")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("Variations Project "),
                          _c("span", { staticClass: "text-info" }, [
                            _vm._v("Evaluation")
                          ]),
                          _vm._v(
                            " is going\r\n                                        on to highlight\r\n                                        the project success ."
                          )
                        ])
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm-6 col-md-12" },
            [
              _c(
                "card",
                {
                  attrs: {
                    title: " <i class='fa fa-fw ti-reload'></i> Auto Update"
                  }
                },
                [
                  _c("div", [
                    _c("ul", { staticClass: "timeline-update" }, [
                      _c("li", [
                        _c("div", { staticClass: "timeline-badge center" }, [
                          _c("img", {
                            staticClass: "rounded-circle float-right",
                            attrs: {
                              src: __webpack_require__(/*! ../../img/authors/avatar1.jpg */ "./resources/img/authors/avatar1.jpg"),
                              height: "36",
                              width: "36",
                              alt: "avatar-image"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "timeline-panel",
                            staticStyle: { display: "inline-block" }
                          },
                          [
                            _c("div", { staticClass: "timeline-heading" }, [
                              _c("h4", { staticClass: "timeline-title" }, [
                                _vm._v("Jade Project's Status ")
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "small",
                                  { staticClass: "text-default-gray" },
                                  [_vm._v("11 hours ago")]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "timeline-body" }, [
                              _c("p", [
                                _vm._v(
                                  "\r\n                                                Jade Project team has completed their first phase.\r\n                                            "
                                )
                              ])
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("div", { staticClass: "timeline-badge center" }, [
                          _c("img", {
                            staticClass: "rounded-circle float-right",
                            attrs: {
                              src: __webpack_require__(/*! ../../img/authors/avatar.jpg */ "./resources/img/authors/avatar.jpg"),
                              height: "36",
                              width: "36",
                              alt: "avatar-image"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-panel" }, [
                          _c("div", { staticClass: "timeline-heading" }, [
                            _c("h4", { staticClass: "timeline-title" }, [
                              _vm._v("Tinder Project")
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c(
                                "small",
                                { staticClass: "text-default-gray" },
                                [_vm._v("Sept 10, 2016")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "timeline-body" }, [
                            _c("p", [
                              _vm._v(
                                "\r\n                                                Tinder Project's Final review has completed.\r\n                                            "
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("div", { staticClass: "timeline-badge center" }, [
                          _c("img", {
                            staticClass: "rounded-circle float-right",
                            attrs: {
                              src: __webpack_require__(/*! ../../img/authors/avatar2.jpg */ "./resources/img/authors/avatar2.jpg"),
                              height: "36",
                              width: "36",
                              alt: "avatar-image"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-panel" }, [
                          _c("div", { staticClass: "timeline-heading" }, [
                            _c("h4", { staticClass: "timeline-title" }, [
                              _vm._v("A new branch in Virginia.")
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c(
                                "small",
                                { staticClass: "text-default-gray" },
                                [_vm._v("Jan 02, 2017")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "timeline-body" }, [
                            _c("p", [
                              _vm._v(
                                "\r\n                                                Planning to have a branch in virginia in the coming year.\r\n                                            "
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("div", { staticClass: "timeline-badge center" }, [
                          _c("img", {
                            staticClass: "rounded-circle float-right",
                            attrs: {
                              src: __webpack_require__(/*! ../../img/authors/avatar3.jpg */ "./resources/img/authors/avatar3.jpg"),
                              height: "36",
                              width: "36",
                              alt: "avatar-image"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "timeline-panel",
                            staticStyle: { display: "inline-block" }
                          },
                          [
                            _c("div", { staticClass: "timeline-heading" }, [
                              _c("h4", { staticClass: "timeline-title" }, [
                                _vm._v("Daily Status ")
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _c(
                                  "small",
                                  { staticClass: "text-default-gray" },
                                  [_vm._v("2days ago")]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "timeline-body" }, [
                              _c("p", [
                                _vm._v(
                                  "\r\n                                                Manager schedules to keep a daily project status track.\r\n                                            "
                                )
                              ])
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("div", { staticClass: "timeline-badge center" }, [
                          _c("img", {
                            staticClass: "rounded-circle float-right",
                            attrs: {
                              src: __webpack_require__(/*! ../../img/authors/avatar4.jpg */ "./resources/img/authors/avatar4.jpg"),
                              height: "36",
                              width: "36",
                              alt: "avatar-image"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-panel" }, [
                          _c("div", { staticClass: "timeline-heading" }, [
                            _c("h4", { staticClass: "timeline-title" }, [
                              _vm._v("Performance report")
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c(
                                "small",
                                { staticClass: "text-default-gray" },
                                [_vm._v("Aug 10, 2016")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "timeline-body" }, [
                            _c("p", [
                              _vm._v(
                                "\r\n                                                Richard, updated his Team over view Performance report.\r\n                                            "
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("div", { staticClass: "timeline-badge center" }, [
                          _c("img", {
                            staticClass: "rounded-circle float-right",
                            attrs: {
                              src: __webpack_require__(/*! ../../img/authors/avatar2.jpg */ "./resources/img/authors/avatar2.jpg"),
                              height: "36",
                              width: "36",
                              alt: "avatar-image"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-panel" }, [
                          _c("div", { staticClass: "timeline-heading" }, [
                            _c("h4", { staticClass: "timeline-title" }, [
                              _vm._v("Project Evaluation")
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c(
                                "small",
                                { staticClass: "text-default-gray" },
                                [_vm._v("Oct 05, 2016")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "timeline-body" }, [
                            _c("p", [
                              _vm._v(
                                "\r\n                                                Variations Project Evaluation is going on to highlight\r\n                                                project.\r\n                                            "
                              )
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/components/pages/card/card.vue":
/*!**************************************************!*\
  !*** ./resources/components/pages/card/card.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_vue_vue_type_template_id_15e33d3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.vue?vue&type=template&id=15e33d3a& */ "./resources/components/pages/card/card.vue?vue&type=template&id=15e33d3a&");
/* harmony import */ var _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.vue?vue&type=script&lang=js& */ "./resources/components/pages/card/card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.vue?vue&type=style&index=0&lang=css& */ "./resources/components/pages/card/card.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _card_vue_vue_type_template_id_15e33d3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _card_vue_vue_type_template_id_15e33d3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/card/card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/card/card.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/components/pages/card/card.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/card/card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/card/card.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/components/pages/card/card.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/card/card.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/card/card.vue?vue&type=template&id=15e33d3a&":
/*!*********************************************************************************!*\
  !*** ./resources/components/pages/card/card.vue?vue&type=template&id=15e33d3a& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_15e33d3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=template&id=15e33d3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/card/card.vue?vue&type=template&id=15e33d3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_15e33d3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_15e33d3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/timeline.vue":
/*!*************************************************!*\
  !*** ./resources/components/pages/timeline.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeline_vue_vue_type_template_id_7f76b73d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline.vue?vue&type=template&id=7f76b73d& */ "./resources/components/pages/timeline.vue?vue&type=template&id=7f76b73d&");
/* harmony import */ var _timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.vue?vue&type=script&lang=js& */ "./resources/components/pages/timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_timeline_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/timeline.css?vue&type=style&index=0&lang=css& */ "./resources/css/timeline.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _timeline_vue_vue_type_template_id_7f76b73d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _timeline_vue_vue_type_template_id_7f76b73d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/timeline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/timeline.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/components/pages/timeline.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./timeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/timeline.vue?vue&type=template&id=7f76b73d&":
/*!********************************************************************************!*\
  !*** ./resources/components/pages/timeline.vue?vue&type=template&id=7f76b73d& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_template_id_7f76b73d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./timeline.vue?vue&type=template&id=7f76b73d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/timeline.vue?vue&type=template&id=7f76b73d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_template_id_7f76b73d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_template_id_7f76b73d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/timeline.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************!*\
  !*** ./resources/css/timeline.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_timeline_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./timeline.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/timeline.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_timeline_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_timeline_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_timeline_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_timeline_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_timeline_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/img/authors/avatar.jpg":
/*!******************************************!*\
  !*** ./resources/img/authors/avatar.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/avatar.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ "./resources/img/authors/avatar2.jpg":
/*!*******************************************!*\
  !*** ./resources/img/authors/avatar2.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/avatar2.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ "./resources/img/authors/avatar3.jpg":
/*!*******************************************!*\
  !*** ./resources/img/authors/avatar3.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/avatar3.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ "./resources/img/authors/avatar4.jpg":
/*!*******************************************!*\
  !*** ./resources/img/authors/avatar4.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/avatar4.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ })

}]);