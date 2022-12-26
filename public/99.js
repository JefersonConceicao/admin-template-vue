(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/boxed_movableheader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/boxed_movableheader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "boxed_movableheader",
  mounted: function mounted() {
    $("html").addClass("stylehtml");
    $("body").addClass("boxed movable-header");
    $("header").addClass("header_movable");
    $(".navbar-fixed-top").removeClass("navbar-fixed-top").addClass("navbar-static-top");
  },
  destroyed: function destroyed() {
    $("html").removeClass("stylehtml");
    $("body").removeClass("boxed movable-header");
    $("header").removeClass("header_movable");
    $(".navbar-static-top").removeClass("navbar-static-top").addClass("navbar-fixed-top");
    $("#temp_style").remove();
    location.reload();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/boxed_movableheader.vue?vue&type=style&index=1&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/boxed_movableheader.vue?vue&type=style&index=1&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body.movable-header {\n  overflow: hidden;\n}\nbody.movable-header #app .header {\n  position: relative !important;\n}\nbody.movable-header .right-side {\n  padding-top: 0;\n}\n@media screen and (max-width: 992px) {\nbody.movable-header #menu {\n    padding-top: 0;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/layouts.css?vue&type=style&index=0&id=ff82624c&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/layouts.css?vue&type=style&index=0&id=ff82624c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right-side[data-v-ff82624c] {\r\n    padding-top :0;\n}\n.movable-header .rightsidebar-without-nav[data-v-ff82624c] {\r\n    padding-top : 20px !important\n}\n@media screen and (max-width : 560px) {\nbody[data-v-ff82624c] {\r\n        padding-top : 0 !important;\n}\r\n    /*fixednav pages*/\n.fixednav_right[data-v-ff82624c] {\r\n        padding-top : 112px;\n}\n}\n@media screen and (max-width : 992px) {\n.fixed-menu #menu[data-v-ff82624c] {\r\n        padding-top : 0;\n}\n.movable-header #right[data-v-ff82624c] {\r\n        padding-top : 0;\n}\n}\n@media screen and (max-width : 560px) {\n.fixed-menu #menu[data-v-ff82624c] {\r\n        padding-top : 90px;\n}\n.movable-header .rightsidebar-without-nav-small[data-v-ff82624c] {\r\n        padding-top : 70px !important\n}\n}\n.movable-header #menu[data-v-ff82624c] {\r\n    padding-top : 0;\n}\r\n/*==== layout fixed ====*/\n.slimScrollBar[data-v-ff82624c] {\r\n    width      : 3px !important;\r\n    opacity    : 0.5 !important;\r\n    background : rgb(130, 194, 224) !important;\n}\n.menu_align[data-v-ff82624c] {\r\n    margin-bottom : 50px;\n}\n.full_img[data-v-ff82624c] {\r\n    width: 100%;\r\n    height: 150px;\r\n    border-radius: 5px;\n}\r\n/*movable header page*/\n.header_movable[data-v-ff82624c] {\r\n    position : relative !important;\n}\r\n\r\n/*====End of layout fixed ====*/\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/boxed_movableheader.vue?vue&type=style&index=1&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/boxed_movableheader.vue?vue&type=style&index=1&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/vue-loader/lib??vue-loader-options!./boxed_movableheader.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/boxed_movableheader.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/layouts.css?vue&type=style&index=0&id=ff82624c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/layouts.css?vue&type=style&index=0&id=ff82624c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./layouts.css?vue&type=style&index=0&id=ff82624c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/layouts.css?vue&type=style&index=0&id=ff82624c&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/boxed_movableheader.vue?vue&type=template&id=ff82624c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/boxed_movableheader.vue?vue&type=template&id=ff82624c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-lg-12" }, [
      _c("p", { staticClass: "text-justify" }, [
        _vm._v(
          "\n                Sed sed blandit urna. Proin ac sem nisl. Mauris risus orci, tristique eget velit\n            at,\n            congue euismod\n            lacus. Curabitur id purus sit amet urna rutrum bibendum ac at quam. In hendrerit enim eu turpis\n            molestie, et euismod tellus viverra. Suspendisse molestie at leo sit amet volutpat. Integer\n            augue\n            libero, scelerisque vitae luctus ac, consequat et arcu. Nullam malesuada turpis eu ullamcorper\n            tincidunt. Integer aliquam felis eget neque facilisis ornare.\n        "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n                Integer pharetra vitae dolor vel\n            elementum. In nisl risus, dignissim non fermentum ac, pretium sit amet dui. Phasellus fringilla\n            orci\n            sapien, vel lacinia mi dapibus ut. Donec euismod congue nulla, in porttitor sapien. Pellentesque\n            facilisis luctus adipiscing.\n        "
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-justify" }, [
        _c("img", {
          staticClass: "img-responsive full_img",
          attrs: {
            src: __webpack_require__(/*! ../../img/brick-wall.png */ "./resources/img/brick-wall.png"),
            alt: "holder image"
          }
        })
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Lorem ipsum\n            dolor sit amet, consectetur adipiscing elit. Nam massa eros, dictum ut imperdiet eget, laoreet\n            placerat orci. Aliquam eget neque neque. Donec dictum, enim convallis gravida fringilla, velit\n            sem\n            condimentum nunc, in pretium libero est sit amet elit. Nam ut arcu ac eros commodo rutrum ac nec\n            purus. Fusce sodales pulvinar odio, vulputate fringilla ligula bibendum sit amet. Duis risus\n            neque,\n            molestie tincidunt odio vel, sodales vulputate mauris. Sed adipiscing justo tristique enim\n            pharetra,\n            nec ultricies metus sagittis.Duis varius id massa ut pellentesque.\n        "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "     Nulla commodo erat eu mi aliquet\n            aliquam. Vivamus commodo massa et nunc ullamcorper, vel pharetra purus consequat. Suspendisse a\n            neque quis nibh dictum posuere ac et enim. Aliquam sit amet accumsan erat. Nullam euismod elit\n            tellus, vel luctus enim luctus feugiat. Vestibulum quis placerat ipsum, porta vehicula massa.\n            Etiam\n            nec risus ac lacus gravida tincidunt. Vivamus eu ante vehicula, aliquam nisl et, suscipit ipsum.\n            Vivamus velit nulla, tincidunt ac risus et, congue lobortis mauris. In condimentum consectetur\n            purus, vel adipiscing felis sollicitudin vitae. Phasellus luctus, ligula eu tempor ullamcorper,\n            lectus elit posuere augue, eget tempus lacus nibh a purus. Ut risus velit, adipiscing eu leo\n            quis,\n            vestibulum porttitor nunc. Sed sed blandit urna. Proin ac sem nisl.\n        "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "     Mauris risus orci, tristique\n            eget velit at, congue euismod lacus. Curabitur id purus sit amet urna rutrum bibendum ac at\n            quam. In\n            hendrerit enim eu turpis molestie, et euismod tellus viverra. Suspendisse molestie at leo sit\n            amet\n            volutpat. et euismod tellus viverra.\n        "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" }),
      _vm._v(" "),
      _c("p", { staticClass: "text-justify" }, [
        _c("img", {
          staticClass: "img-responsive full_img",
          attrs: {
            src: __webpack_require__(/*! ../../img/brick-wall.png */ "./resources/img/brick-wall.png"),
            alt: "holder image"
          }
        })
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n            Lorem ipsum\n            dolor sit amet, consectetur adipiscing elit. Nam massa eros, dictum ut imperdiet eget, laoreet\n            placerat orci. Aliquam eget neque neque. Donec dictum, enim convallis gravida fringilla, velit\n            sem\n            condimentum nunc, in pretium libero est sit amet elit. Nam ut arcu ac eros commodo rutrum ac nec\n            purus. Fusce sodales pulvinar odio, vulputate fringilla ligula bibendum sit amet. Duis risus\n            neque,\n            molestie tincidunt odio vel, sodales vulputate mauris. Sed adipiscing justo tristique enim\n            pharetra,\n            nec ultricies metus sagittis. Duis varius id massa ut pellentesque. Nulla commodo erat eu mi\n            aliquet\n            aliquam. Vivamus commodo massa et nunc ullamcorper, vel pharetra purus consequat.\n        "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" })
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "outer" }, [
      _c("div", { staticClass: "inner bg-light lter" }, [
        _c("h2", [_vm._v("Code")]),
        _vm._v(" "),
        _c("pre", [
          _c("code", { staticClass: "language-markup" }, [
            _vm._v(
              '<body class="boxed">\n                ...\n                </body>'
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/components/pages/boxed_movableheader.vue":
/*!************************************************************!*\
  !*** ./resources/components/pages/boxed_movableheader.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _boxed_movableheader_vue_vue_type_template_id_ff82624c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxed_movableheader.vue?vue&type=template&id=ff82624c&scoped=true& */ "./resources/components/pages/boxed_movableheader.vue?vue&type=template&id=ff82624c&scoped=true&");
/* harmony import */ var _boxed_movableheader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boxed_movableheader.vue?vue&type=script&lang=js& */ "./resources/components/pages/boxed_movableheader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_layouts_css_vue_type_style_index_0_id_ff82624c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/layouts.css?vue&type=style&index=0&id=ff82624c&scoped=true&lang=css& */ "./resources/css/layouts.css?vue&type=style&index=0&id=ff82624c&scoped=true&lang=css&");
/* harmony import */ var _boxed_movableheader_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boxed_movableheader.vue?vue&type=style&index=1&lang=scss& */ "./resources/components/pages/boxed_movableheader.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _boxed_movableheader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _boxed_movableheader_vue_vue_type_template_id_ff82624c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _boxed_movableheader_vue_vue_type_template_id_ff82624c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ff82624c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/boxed_movableheader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/boxed_movableheader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/components/pages/boxed_movableheader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_boxed_movableheader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./boxed_movableheader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/boxed_movableheader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_boxed_movableheader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/boxed_movableheader.vue?vue&type=style&index=1&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/components/pages/boxed_movableheader.vue?vue&type=style&index=1&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_boxed_movableheader_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/vue-loader/lib??vue-loader-options!./boxed_movableheader.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/boxed_movableheader.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_boxed_movableheader_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_boxed_movableheader_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_boxed_movableheader_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_boxed_movableheader_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_boxed_movableheader_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/boxed_movableheader.vue?vue&type=template&id=ff82624c&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/components/pages/boxed_movableheader.vue?vue&type=template&id=ff82624c&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_boxed_movableheader_vue_vue_type_template_id_ff82624c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./boxed_movableheader.vue?vue&type=template&id=ff82624c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/boxed_movableheader.vue?vue&type=template&id=ff82624c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_boxed_movableheader_vue_vue_type_template_id_ff82624c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_boxed_movableheader_vue_vue_type_template_id_ff82624c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/layouts.css?vue&type=style&index=0&id=ff82624c&scoped=true&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/css/layouts.css?vue&type=style&index=0&id=ff82624c&scoped=true&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_layouts_css_vue_type_style_index_0_id_ff82624c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./layouts.css?vue&type=style&index=0&id=ff82624c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/layouts.css?vue&type=style&index=0&id=ff82624c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_layouts_css_vue_type_style_index_0_id_ff82624c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_layouts_css_vue_type_style_index_0_id_ff82624c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_layouts_css_vue_type_style_index_0_id_ff82624c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_layouts_css_vue_type_style_index_0_id_ff82624c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_layouts_css_vue_type_style_index_0_id_ff82624c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/img/brick-wall.png":
/*!**************************************!*\
  !*** ./resources/img/brick-wall.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/brick-wall.png?effad1520fc39d8897385d7004d2dbf4";

/***/ })

}]);