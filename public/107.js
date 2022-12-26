(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/forgot_password.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/forgot_password.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var bootstrap_magnify_js_bootstrap_magnify_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-magnify/js/bootstrap-magnify.min.js */ "./node_modules/bootstrap-magnify/js/bootstrap-magnify.min.js");
/* harmony import */ var bootstrap_magnify_js_bootstrap_magnify_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_magnify_js_bootstrap_magnify_min_js__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {
    "use strict";

    $(document).ready(function () {
      var input_field = $("input[name=email]");
      $('button[type="submit"]').on('click', function (e) {
        e.preventDefault();

        if (input_field.val() != "") {
          $(".enter_email").addClass("hidden");
          $(".check_email").removeClass("hidden");
          $('#email, .signup-signin').addClass('hidden');
          $('.submit-btn').addClass('animated fadeInUp');
          $('button[type="submit"]').html("Reset Password").removeClass("btn-primary btn-block").addClass("btn-success").on('click', function () {
            window.location.href = '#/reset_password';
          });
        } else {
          var error_msg = "<p>Sorry, Enter Your Registered email</p>";
          $(".enter_email").addClass("err-text animated fadeInUp").html(error_msg);
        }
      });
      $("#email").on('keypress focus', function () {
        var element = 'Enter your Registered email';
        $(".enter_email").removeClass("text-danger animated fadeInUp").html(element);
      });
    });
  },
  destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/forgot_password.css?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/forgot_password.css?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\r\n    height : 100%;\n}\nbody {\r\n    font-family             : 'Open Sans', sans-serif;\r\n    background              : radial-gradient(ellipse at center, #63B9B4 0%, #008C83 100%);\r\n    -webkit-background-size : cover;\r\n    -moz-background-size    : cover;\r\n    -o-background-size      : cover;\r\n    background-size         : cover;\r\n    height                  : 100%;\r\n    padding-top             : 70px;\r\n    color : #fff;\n}\n.box {\r\n    padding          : 19px 15px;\r\n    margin-bottom    : 70px;\n}\n.box input[type='submit'] {\r\n    margin : 25px 0 20px 0;\n}\n.form-group {\r\n    margin-bottom: 25px;\n}\n.submit-btn {\r\n    background-color: rgba(255,255,255, .2);\n}\n.btn:hover, .btn:focus, .btn.focus {\r\n    color: #fff;\n}\n@media screen and (min-width : 450px) {\n.box {\r\n        padding : 36px 35px;\n}\n}\n.animated {\r\n    -webkit-animation-duration  : 1s;\r\n    animation-duration          : 1s;\r\n    -webkit-animation-fill-mode : both;\r\n    animation-fill-mode         : both;\n}\n@-webkit-keyframes fadeInUp {\n0% {\r\n        opacity           : 0;\r\n        -webkit-transform : translateY(20px);\r\n        transform         : translateY(20px);\n}\n100% {\r\n        opacity           : 1;\r\n        -webkit-transform : translateY(0);\r\n        transform         : translateY(0);\n}\n}\n@keyframes fadeInUp {\n0% {\r\n        opacity           : 0;\r\n        -webkit-transform : translateY(20px);\r\n        -ms-transform     : translateY(20px);\r\n        transform         : translateY(20px);\n}\n100% {\r\n        opacity           : 1;\r\n        -webkit-transform : translateY(0);\r\n        -ms-transform     : translateY(0);\r\n        transform         : translateY(0);\n}\n}\n.fadeInUp {\r\n    -webkit-animation-name : fadeInUp;\r\n    animation-name         : fadeInUp;\r\n    transition             : transform ease-in 200ms;\n}\n.checkbox label {\r\n    padding-left : 0;\n}\n.forgot_Form .email {\r\n    border-radius: 20px;\n}\n.enter_email, .check_email {\r\n    margin-top : 18px;\n}\n.help-block {\r\n    color : #fecfb0;\n}\n.btn-top {\r\n    margin-top : 20px !important;\n}\na:hover, a:focus {\r\n    text-decoration : none;\n}\n.has-error .help-block {\r\n    color : #C45555;\r\n    float : left;\n}\n.err-text {\r\n    color : #c15050;\n}\n.btn:focus, .btn:active:focus {\r\n    outline : 0;\n}\n.has-error .form-control, .has-error .form-control:focus {\r\n    border-color : #C45555;\n}\n.text-danger {\r\n    color: #ff6666;\n}\n.reset-link {\r\n    color: #ddd;\n}\n.reset-link:hover {\r\n    color: #eee;\n}\n.preloader {\r\n    position            : fixed;\r\n    width               : 100%;\r\n    height              : 100%;\r\n    top                 : 0;\r\n    left                : 0;\r\n    z-index             : 100000;\r\n    backface-visibility : hidden;\r\n    background          : #ffffff;\n}\n.loader_img {\r\n    width               : 50px;\r\n    height              : 50px;\r\n    position            : absolute;\r\n    left                : 50%;\r\n    top                 : 50%;\r\n    background-position : center;\r\n    margin              : -25px 0 0 -25px;\n}\n.box h3{\r\n    margin-top:20px;\r\n    margin-bottom:20px;\n}\n.submit-btn{\r\n    color:#fff;\n}\n.hidden{\r\n    display:none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/forgot_password.css?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/forgot_password.css?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./forgot_password.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/forgot_password.css?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/forgot_password.vue?vue&type=template&id=fdd3442a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/forgot_password.vue?vue&type=template&id=fdd3442a& ***!
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
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass:
              "col-lg-4 col-10 col-sm-6 m-auto  box animated fadeInUp"
          },
          [
            _c("div", { staticClass: "text-center " }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: { src: __webpack_require__(/*! ../../img/logo.png */ "./resources/img/logo.png"), alt: "Clear logo" }
              })
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "text-center" }, [
              _vm._v("Forgot Password\n                ")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-center enter_email" }, [
              _vm._v(
                "\n                    Enter your Registered email\n                "
              )
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1)
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "text-center check_email hidden" }, [
      _vm._v(
        "\n                    Check your email for Reset link\n                    "
      ),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c("u", [
        _c(
          "a",
          { staticClass: "reset-link", attrs: { href: "javascript:void(0)" } },
          [_vm._v("Resend the link")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "form",
      {
        staticClass: "forgot_Form text-center",
        attrs: { method: "POST", id: "forgot_password" }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            staticClass: "form-control email pl-3",
            attrs: {
              type: "email",
              name: "email",
              id: "email",
              placeholder: "Email"
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn submit-btn",
            attrs: { type: "submit", value: "Reset Your Password" }
          },
          [
            _vm._v(
              "\n                        Retrieve Password\n                    "
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/components/pages/forgot_password.vue":
/*!********************************************************!*\
  !*** ./resources/components/pages/forgot_password.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forgot_password_vue_vue_type_template_id_fdd3442a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot_password.vue?vue&type=template&id=fdd3442a& */ "./resources/components/pages/forgot_password.vue?vue&type=template&id=fdd3442a&");
/* harmony import */ var _forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot_password.vue?vue&type=script&lang=js& */ "./resources/components/pages/forgot_password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_custom_css_forgot_password_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/custom_css/forgot_password.css?vue&type=style&index=0&lang=css& */ "./resources/css/custom_css/forgot_password.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _forgot_password_vue_vue_type_template_id_fdd3442a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _forgot_password_vue_vue_type_template_id_fdd3442a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/forgot_password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/forgot_password.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/components/pages/forgot_password.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./forgot_password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/forgot_password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/forgot_password.vue?vue&type=template&id=fdd3442a&":
/*!***************************************************************************************!*\
  !*** ./resources/components/pages/forgot_password.vue?vue&type=template&id=fdd3442a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_template_id_fdd3442a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./forgot_password.vue?vue&type=template&id=fdd3442a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/forgot_password.vue?vue&type=template&id=fdd3442a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_template_id_fdd3442a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_template_id_fdd3442a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/custom_css/forgot_password.css?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/css/custom_css/forgot_password.css?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_forgot_password_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./forgot_password.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/forgot_password.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_forgot_password_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_forgot_password_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_forgot_password_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_forgot_password_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_forgot_password_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/img/logo.png":
/*!********************************!*\
  !*** ./resources/img/logo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/logo.png?a7b4575e3769bae62092c494870b5d8a";

/***/ })

}]);