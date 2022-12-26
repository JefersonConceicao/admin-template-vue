(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[120],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/mini_sidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/mini_sidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "mini_sidebar",
  mounted: function mounted() {
    "use strict";

    $(document).ready(function () {
      $("body").addClass("mini_sidebar"); //leftmenu init

      if ($(window).width() >= 992) {
        $(".sidebar-toggle").on("click", function (e) {
          e.preventDefault();

          if ($("body").hasClass("mini")) {
            $("body").removeClass("mini");
            $("#menu").find("li").has("ul").children("a").off("click");
            $("#menu").find("li").has("ul").children("a").on("click", function (e) {
              e.preventDefault();
              $(this).parent("li").toggleClass("active").children("ul").collapse("toggle");
              $(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide");
            });
          } else {
            $("body").addClass("mini");
            $(".sub-menu").css("height", "auto");
            $('.menu-dropdown>a').off("click").on("click", function (e) {
              e.preventDefault();
            });
            $("#menu").find('ul>.menu-dropdown').hover(function () {
              var sideoffset = $(".sidebar").offset();
              var submenuoffset = $(this).children("ul").offset();

              if (sideoffset.top + $(".sidebar").height() < submenuoffset.top + $(this).children("ul").height()) {
                $(this).children("ul").addClass("sidebarbottom");
              }
            });
          }
        });
      }
    });
  },
  destroyed: function destroyed() {
    location.reload();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/mini_sidebar.css?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/mini_sidebar.css?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body.mini #menu .navigation .menu-icon {\r\n    text-align: center;\r\n    font-size: 20px;\n}\nbody.mini #menu .navigation > li > a {\r\n    padding: 14px 24px;\n}\nbody.mini #menu .navigation a {\r\n    padding: 11px 24px;\n}\nbody.mini #menu .navigation a.index {\r\n    padding: 17px 24px 17px 40px;\n}\nbody.mini .left-side,\r\nbody.mini .sidebar,\r\nbody.mini .menu-dropdown > a,\r\nbody.mini #menu .navigation {\r\n    width: 80px;\n}\nbody.mini .right-side {\r\n    margin-left: 80px;\n}\n@media screen and (max-width: 992px) {\nbody.mini .right-side {\r\n        margin-left: 0;\n}\nbody.mini .relative .right-side {\r\n        margin-left: -160px;\n}\n}\n@media screen and (min-width: 992px) {\nbody.mini .right-side.strech {\r\n        margin-left: 0;\n}\n}\n@media screen and (width: 992px) {\nbody.mini .left-side {\r\n        top: 0;\n}\n}\r\n\r\n\r\n/* drop list open on hover */\nbody.mini .dropdown {\r\n    position: relative;\r\n    display: inline-block;\n}\nbody.mini .menu-dropdown,\r\nbody.mini #menu .navigation > li:not(.menu-dropdown) > a {\r\n    position: relative;\r\n    width: 80px;\n}\nbody.mini #menu .menu-dropdown > ul,\r\nbody.mini #menu .menu-dropdown-open-ul {\r\n    position: absolute;\r\n    width: 250px !important;\r\n    top: 0;\r\n    right: -250px;\r\n    z-index: 2;\r\n    display: none;\r\n    overflow-y: auto;\n}\nbody.mini #menu .navigation > li:hover > a {\r\n    background-color: #eee;\r\n    color: #33CC99;\n}\nbody.mini #menu .menu-dropdown:hover > ul,\r\nbody.mini #menu .menu-dropdown:hover > ul.collapse {\r\n    display: block;\r\n    height: auto;\r\n    z-index: 1000;\r\n    background-color: #fff;\r\n    box-shadow: 0 0 15px #CCC;\n}\nbody.mini #menu .menu-dropdown:hover > a:after {\r\n    position: absolute;\r\n    top: 17px;\r\n    right: 0;\r\n    width: 0;\r\n    height: 0;\r\n    content: \"\";\r\n    border-top: 10px solid transparent;\r\n    border-right: 10px solid #2E576B;\r\n    border-bottom: 10px solid transparent;\r\n    border-left: 0;\n}\nbody.mini #menu .navigation {\r\n    padding: 4px 0 15px;\r\n    border-bottom: 0;\n}\nbody.mini .nav_profile .profile-left {\r\n    padding: 7px 13px 7px;\r\n    border: 0;\n}\nbody.mini #menu>.navigation .menu-dropdown>a {\r\n    text-align: center;\n}\nbody.mini #menu .menu-dropdown .sidebarbottom {\r\n    top: auto;\r\n    bottom: 0;\n}\nbody.mini #menu>.navigation>li>a .mm-text,\r\nbody.mini #menu>.navigation>li>a .fa.arrow,\r\nbody.mini .content-profile {\r\n    display: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/mini_sidebar.css?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/mini_sidebar.css?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./mini_sidebar.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/mini_sidebar.css?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/mini_sidebar.vue?vue&type=template&id=7cd28ef0&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/mini_sidebar.vue?vue&type=template&id=7cd28ef0& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "outer" }, [_c("pre", [_vm._v("code")])]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-12" }, [
        _c("p", { staticClass: "text-justify" }, [
          _vm._v(
            "\n                Sed sed blandit urna. Proin ac sem nisl. Mauris risus orci, tristique eget velit at,\n            congue euismod lacus. Curabitur id purus sit amet urna rutrum bibendum ac at quam. In hendrerit enim\n            eu turpis molestie, et euismod tellus viverra. Suspendisse molestie at leo sit amet volutpat.\n            Integer augue libero, scelerisque vitae luctus ac, consequat et arcu. Nullam malesuada turpis eu\n            ullamcorper tincidunt. Integer aliquam felis eget neque facilisis ornare.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n                Integer pharetra vitae dolor vel elementum. In nisl risus, dignissim non fermentum ac,\n            pretium sit amet dui. Phasellus fringilla orci sapien, vel lacinia mi dapibus ut. Donec euismod\n            congue nulla, in porttitor sapien. Pellentesque facilisis luctus adipiscing.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-justify" }, [
          _vm._v(
            "\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa eros, dictum ut\n            imperdiet eget, laoreet placerat orci. Aliquam eget neque neque. Donec dictum, enim convallis\n            gravida fringilla, velit sem condimentum nunc, in pretium libero est sit amet elit. Nam ut arcu ac\n            eros commodo rutrum ac nec purus. Fusce sodales pulvinar odio, vulputate fringilla ligula bibendum\n            sit amet. Duis risus neque, molestie tincidunt odio vel, sodales vulputate mauris. Sed adipiscing\n            justo tristique enim pharetra, nec ultricies metus sagittis.Duis varius id massa ut pellentesque.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "     Nulla commodo erat eu mi aliquet aliquam. Vivamus commodo massa et nunc ullamcorper,\n            vel pharetra purus consequat. Suspendisse a neque quis nibh dictum posuere ac et enim. Aliquam sit\n            amet accumsan erat. Nullam euismod elit tellus, vel luctus enim luctus feugiat. Vestibulum quis\n            placerat ipsum, porta vehicula massa. Etiam nec risus ac lacus gravida tincidunt. Vivamus eu ante\n            vehicula, aliquam nisl et, suscipit ipsum. Vivamus velit nulla, tincidunt ac risus et, congue\n            lobortis mauris. In condimentum consectetur purus, vel adipiscing felis sollicitudin vitae.\n            Phasellus luctus, ligula eu tempor ullamcorper, lectus elit posuere augue, eget tempus lacus nibh a\n            purus. Ut risus velit, adipiscing eu leo quis, vestibulum porttitor nunc. Sed sed blandit urna.\n            Proin ac sem nisl.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "     Mauris risus orci, tristique eget velit at, congue euismod lacus. Curabitur id purus\n            sit amet urna rutrum bibendum ac at quam. In hendrerit enim eu turpis molestie, et euismod tellus\n            viverra. Suspendisse molestie at leo sit amet volutpat. et euismod tellus viverra.\n        "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "clearfix" }),
        _vm._v(" "),
        _c("p", { staticClass: "text-justify" }, [
          _vm._v(
            "\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa eros, dictum ut imperdiet eget,\n            laoreet placerat orci. Aliquam eget neque neque. Donec dictum, enim convallis gravida fringilla,\n            velit sem condimentum nunc, in pretium libero est sit amet elit. Nam ut arcu ac eros commodo rutrum\n            ac nec purus. Fusce sodales pulvinar odio, vulputate fringilla ligula bibendum sit amet. Duis risus\n            neque, molestie tincidunt odio vel, sodales vulputate mauris. Sed adipiscing justo tristique enim\n            pharetra, nec ultricies metus sagittis. Duis varius id massa ut pellentesque. Nulla commodo erat eu\n            mi aliquet aliquam. Vivamus commodo massa et nunc ullamcorper, vel pharetra purus consequat.\n        "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "clearfix" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/components/pages/mini_sidebar.vue":
/*!*****************************************************!*\
  !*** ./resources/components/pages/mini_sidebar.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mini_sidebar_vue_vue_type_template_id_7cd28ef0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mini_sidebar.vue?vue&type=template&id=7cd28ef0& */ "./resources/components/pages/mini_sidebar.vue?vue&type=template&id=7cd28ef0&");
/* harmony import */ var _mini_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mini_sidebar.vue?vue&type=script&lang=js& */ "./resources/components/pages/mini_sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_mini_sidebar_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/mini_sidebar.css?vue&type=style&index=0&lang=css& */ "./resources/css/mini_sidebar.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mini_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mini_sidebar_vue_vue_type_template_id_7cd28ef0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mini_sidebar_vue_vue_type_template_id_7cd28ef0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/mini_sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/mini_sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/components/pages/mini_sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mini_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./mini_sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/mini_sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mini_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/mini_sidebar.vue?vue&type=template&id=7cd28ef0&":
/*!************************************************************************************!*\
  !*** ./resources/components/pages/mini_sidebar.vue?vue&type=template&id=7cd28ef0& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mini_sidebar_vue_vue_type_template_id_7cd28ef0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./mini_sidebar.vue?vue&type=template&id=7cd28ef0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/mini_sidebar.vue?vue&type=template&id=7cd28ef0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mini_sidebar_vue_vue_type_template_id_7cd28ef0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mini_sidebar_vue_vue_type_template_id_7cd28ef0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/mini_sidebar.css?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/css/mini_sidebar.css?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_mini_sidebar_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./mini_sidebar.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/mini_sidebar.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_mini_sidebar_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_mini_sidebar_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_mini_sidebar_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_mini_sidebar_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_mini_sidebar_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);