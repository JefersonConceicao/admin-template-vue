(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/image_magnifier.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/image_magnifier.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _card_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.vue */ "./resources/components/pages/card/card.vue");
/* harmony import */ var bootstrap_magnify_js_bootstrap_magnify_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-magnify/js/bootstrap-magnify.min.js */ "./node_modules/bootstrap-magnify/js/bootstrap-magnify.min.js");
/* harmony import */ var bootstrap_magnify_js_bootstrap_magnify_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_magnify_js_bootstrap_magnify_min_js__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "image_magnifier",
  components: {
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    "use strict";

    $('[data-toggle="magnify"]').magnify();
  },
  destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/bootstrap-magnify/css/bootstrap-magnify.min.css?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/bootstrap-magnify/css/bootstrap-magnify.min.css?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_bootstrap_magnify_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--5-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--5-2!./bootstrap-magnify.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap-magnify/css/bootstrap-magnify.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_bootstrap_magnify_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_bootstrap_magnify_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_bootstrap_magnify_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_bootstrap_magnify_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_bootstrap_magnify_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/bootstrap-magnify/js/bootstrap-magnify.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-magnify/js/bootstrap-magnify.min.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {!function(e){"use strict";var t=function(e,t){this.init("magnify",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i="mousemove",s="mouseleave";this.type=t;this.$element=e(n);this.options=this.getOptions(r);this.nativeWidth=0;this.nativeHeight=0;this.$element.wrap('<div class="magnify" >');this.$element.parent(".magnify").append('<div class="magnify-large" >');this.$element.siblings(".magnify-large").css("background","url('"+this.$element.attr("src")+"') no-repeat");this.$element.parent(".magnify").on(i+"."+this.type,e.proxy(this.check,this));this.$element.parent(".magnify").on(s+"."+this.type,e.proxy(this.check,this))},getOptions:function(t){t=e.extend({},e.fn[this.type].defaults,t,this.$element.data());t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay});return t},check:function(t){var n=e(t.currentTarget),r=n.children("img"),i=n.children(".magnify-large");if(!this.nativeWidth&&!this.nativeHeight){var s=new Image;s.src=r.attr("src");this.nativeWidth=s.width;this.nativeHeight=s.height}else{var o=n.offset(),u=t.pageX-o.left,a=t.pageY-o.top;u<n.width()&&a<n.height()&&u>0&&a>0?i.fadeIn(100):i.fadeOut(100);if(i.is(":visible")){var f=Math.round(u/n.width()*this.nativeWidth-i.width()/2)*-1,l=Math.round(a/n.height()*this.nativeHeight-i.height()/2)*-1,c=f+"px "+l+"px",h=u-i.width()/2,p=a-i.height()/2;i.css({left:h,top:p,backgroundPosition:c})}}}};e.fn.magnify=function(n){return this.each(function(){var r=e(this),i=r.data("magnify"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s));typeof n=="string"&&i[n]()})};e.fn.magnify.Constructor=t;e.fn.magnify.defaults={delay:0};e(window).on("load",function(){e('[data-toggle="magnify"]').each(function(){var t=e(this);t.magnify()})})}(__webpack_provided_window_dot_jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap-magnify/css/bootstrap-magnify.min.css?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/bootstrap-magnify/css/bootstrap-magnify.min.css?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".magnify{position:relative;cursor:none}.magnify-large{position:absolute;display:none;width:175px;height:175px;-webkit-box-shadow:0 0 0 7px rgba(255,255,255,0.85),0 0 7px 7px rgba(0,0,0,0.25),inset 0 0 40px 2px rgba(0,0,0,0.25);-moz-box-shadow:0 0 0 7px rgba(255,255,255,0.85),0 0 7px 7px rgba(0,0,0,0.25),inset 0 0 40px 2px rgba(0,0,0,0.25);box-shadow:0 0 0 7px rgba(255,255,255,0.85),0 0 7px 7px rgba(0,0,0,0.25),inset 0 0 40px 2px rgba(0,0,0,0.25);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}\r\n", ""]);

// exports


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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/image_magnifier.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/image_magnifier.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/*image overlapping in magification*/\n.magnify .magnify {\r\n    z-index: 2;\n}\n.magnify .magnify-large {\r\n    z-index:4;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap-magnify/css/bootstrap-magnify.min.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/bootstrap-magnify/css/bootstrap-magnify.min.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--5-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--5-2!./bootstrap-magnify.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap-magnify/css/bootstrap-magnify.min.css?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/image_magnifier.vue?vue&type=style&index=1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/image_magnifier.vue?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./image_magnifier.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/image_magnifier.vue?vue&type=style&index=1&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/image_magnifier.vue?vue&type=template&id=48258a4e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/image_magnifier.vue?vue&type=template&id=48258a4e& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        { staticClass: "col-lg-12" },
        [
          _c("card", { attrs: { title: "Image Magnifier" } }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                _c("a", { staticClass: "mag img-fluid" }, [
                  _c("br"),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "mag-style img-fluid",
                    attrs: {
                      "data-toggle": "magnify",
                      src: __webpack_require__(/*! ../../img/gallery/thumbs/24.jpg */ "./resources/img/gallery/thumbs/24.jpg"),
                      alt: "image"
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                _c("a", { staticClass: "mag img-fluid" }, [
                  _c("br"),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "mag-style img-fluid",
                    attrs: {
                      "data-toggle": "magnify",
                      src: __webpack_require__(/*! ../../img/gallery/thumbs/30.jpg */ "./resources/img/gallery/thumbs/30.jpg"),
                      alt: "image"
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                _c("a", { staticClass: "mag img-fluid" }, [
                  _c("br"),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "mag-style img-fluid",
                    attrs: {
                      "data-toggle": "magnify",
                      src: __webpack_require__(/*! ../../img/gallery/thumbs/20.jpg */ "./resources/img/gallery/thumbs/20.jpg"),
                      alt: "image"
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                _c("a", { staticClass: "mag img-fluid" }, [
                  _c("br"),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "mag-style img-fluid",
                    attrs: {
                      "data-toggle": "magnify",
                      src: __webpack_require__(/*! ../../img/gallery/thumbs/29.jpg */ "./resources/img/gallery/thumbs/29.jpg"),
                      alt: "image"
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row", staticStyle: { "margin-top": "40px" } },
              [
                _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                  _c("a", { staticClass: "mag img-fluid" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "mag-style img-fluid",
                      attrs: {
                        "data-toggle": "magnify",
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/29.jpg */ "./resources/img/gallery/thumbs/29.jpg"),
                        alt: "image"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                  _c("a", { staticClass: "mag img-fluid" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "mag-style img-fluid",
                      attrs: {
                        "data-toggle": "magnify",
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/8.jpg */ "./resources/img/gallery/thumbs/8.jpg"),
                        alt: "image"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                  _c("a", { staticClass: "mag img-fluid" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "mag-style img-fluid",
                      attrs: {
                        "data-toggle": "magnify",
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/31.jpg */ "./resources/img/gallery/thumbs/31.jpg"),
                        alt: "image"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                  _c("a", { staticClass: "mag img-fluid" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "mag-style img-fluid",
                      attrs: {
                        "data-toggle": "magnify",
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/20.jpg */ "./resources/img/gallery/thumbs/20.jpg"),
                        alt: "image"
                      }
                    })
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row", staticStyle: { "margin-top": "40px" } },
              [
                _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                  _c("a", { staticClass: "mag img-fluid" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "mag-style img-fluid",
                      attrs: {
                        "data-toggle": "magnify",
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/30.jpg */ "./resources/img/gallery/thumbs/30.jpg"),
                        alt: "image"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                  _c("a", { staticClass: "mag img-fluid" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "mag-style img-fluid",
                      attrs: {
                        "data-toggle": "magnify",
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/32.jpg */ "./resources/img/gallery/thumbs/32.jpg"),
                        alt: "image"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                  _c("a", { staticClass: "mag img-fluid" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "mag-style img-fluid",
                      attrs: {
                        "data-toggle": "magnify",
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/17.jpg */ "./resources/img/gallery/thumbs/17.jpg"),
                        alt: "image"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                  _c("a", { staticClass: "mag img-fluid" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "mag-style img-fluid",
                      attrs: {
                        "data-toggle": "magnify",
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/8.jpg */ "./resources/img/gallery/thumbs/8.jpg"),
                        alt: "image"
                      }
                    })
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row", staticStyle: { "margin-top": "40px" } },
              [
                _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                  _c("a", { staticClass: "mag img-fluid" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "mag-style img-fluid",
                      attrs: {
                        "data-toggle": "magnify",
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/31.jpg */ "./resources/img/gallery/thumbs/31.jpg"),
                        alt: "image"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                  _c("a", { staticClass: "mag img-fluid" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "mag-style img-fluid",
                      attrs: {
                        "data-toggle": "magnify",
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/8.jpg */ "./resources/img/gallery/thumbs/8.jpg"),
                        alt: "image"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                  _c("a", { staticClass: "mag img-fluid" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "mag-style img-fluid",
                      attrs: {
                        "data-toggle": "magnify",
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/30.jpg */ "./resources/img/gallery/thumbs/30.jpg"),
                        alt: "image"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-lg-3 col-sm-6" }, [
                  _c("a", { staticClass: "mag img-fluid" }, [
                    _c("br"),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "mag-style img-fluid",
                      attrs: {
                        "data-toggle": "magnify",
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/29.jpg */ "./resources/img/gallery/thumbs/29.jpg"),
                        alt: "image"
                      }
                    })
                  ])
                ])
              ]
            )
          ])
        ],
        1
      )
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

/***/ "./resources/components/pages/image_magnifier.vue":
/*!********************************************************!*\
  !*** ./resources/components/pages/image_magnifier.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_magnifier_vue_vue_type_template_id_48258a4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image_magnifier.vue?vue&type=template&id=48258a4e& */ "./resources/components/pages/image_magnifier.vue?vue&type=template&id=48258a4e&");
/* harmony import */ var _image_magnifier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image_magnifier.vue?vue&type=script&lang=js& */ "./resources/components/pages/image_magnifier.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var bootstrap_magnify_css_bootstrap_magnify_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-magnify/css/bootstrap-magnify.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/bootstrap-magnify/css/bootstrap-magnify.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _image_magnifier_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image_magnifier.vue?vue&type=style&index=1&lang=css& */ "./resources/components/pages/image_magnifier.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _image_magnifier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _image_magnifier_vue_vue_type_template_id_48258a4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _image_magnifier_vue_vue_type_template_id_48258a4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/image_magnifier.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/image_magnifier.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/components/pages/image_magnifier.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_magnifier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./image_magnifier.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/image_magnifier.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_magnifier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/image_magnifier.vue?vue&type=style&index=1&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/components/pages/image_magnifier.vue?vue&type=style&index=1&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_image_magnifier_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./image_magnifier.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/image_magnifier.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_image_magnifier_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_image_magnifier_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_image_magnifier_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_image_magnifier_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_image_magnifier_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/image_magnifier.vue?vue&type=template&id=48258a4e&":
/*!***************************************************************************************!*\
  !*** ./resources/components/pages/image_magnifier.vue?vue&type=template&id=48258a4e& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_magnifier_vue_vue_type_template_id_48258a4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./image_magnifier.vue?vue&type=template&id=48258a4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/image_magnifier.vue?vue&type=template&id=48258a4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_magnifier_vue_vue_type_template_id_48258a4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_magnifier_vue_vue_type_template_id_48258a4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/img/gallery/thumbs/17.jpg":
/*!*********************************************!*\
  !*** ./resources/img/gallery/thumbs/17.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/17.jpg?6d3cc3fd9122d4f52d698096733ec37b";

/***/ }),

/***/ "./resources/img/gallery/thumbs/20.jpg":
/*!*********************************************!*\
  !*** ./resources/img/gallery/thumbs/20.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/20.jpg?07b859bc73b54be32996cc610504505a";

/***/ }),

/***/ "./resources/img/gallery/thumbs/24.jpg":
/*!*********************************************!*\
  !*** ./resources/img/gallery/thumbs/24.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/24.jpg?9ab5a6f8d08b10ff992c033457ecde05";

/***/ }),

/***/ "./resources/img/gallery/thumbs/29.jpg":
/*!*********************************************!*\
  !*** ./resources/img/gallery/thumbs/29.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/29.jpg?dba7e72ffb341c2682464560c98b1788";

/***/ }),

/***/ "./resources/img/gallery/thumbs/30.jpg":
/*!*********************************************!*\
  !*** ./resources/img/gallery/thumbs/30.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/30.jpg?2002855a1fb468b267975e83697f0eeb";

/***/ }),

/***/ "./resources/img/gallery/thumbs/31.jpg":
/*!*********************************************!*\
  !*** ./resources/img/gallery/thumbs/31.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/31.jpg?e53101bee6810dfb1ba9913040b36f2e";

/***/ }),

/***/ "./resources/img/gallery/thumbs/32.jpg":
/*!*********************************************!*\
  !*** ./resources/img/gallery/thumbs/32.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/32.jpg?1a676da167dfc017310a39f20f320476";

/***/ }),

/***/ "./resources/img/gallery/thumbs/8.jpg":
/*!********************************************!*\
  !*** ./resources/img/gallery/thumbs/8.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/8.jpg?ea2b6d40598c6861a574cdef28bee95e";

/***/ })

}]);