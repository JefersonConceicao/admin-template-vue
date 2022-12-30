(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/register.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form */ "./node_modules/vue-form/dist/vue-form.js");
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validations_validations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validations/validations.js */ "./resources/validations/validations.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_form__WEBPACK_IMPORTED_MODULE_1___default.a, _validations_validations_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "register",
  data: function data() {
    return {
      formstate: {},
      model: {
        firstname: "",
        lastname: '',
        email: "",
        password: '',
        repeatPassword: '',
        terms: false
      }
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      if (this.formstate.$invalid) {
        return;
      } else {
        this.$router.push("/");
      }
    }
  },
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./node_modules/bootstrapValidator/dist/css/bootstrapValidator.min.css?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/bootstrapValidator/dist/css/bootstrapValidator.min.css?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_bootstrapValidator_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../style-loader!../../../css-loader??ref--5-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--5-2!./bootstrapValidator.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrapValidator/dist/css/bootstrapValidator.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_bootstrapValidator_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_bootstrapValidator_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_bootstrapValidator_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_bootstrapValidator_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_5_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_2_bootstrapValidator_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrapValidator/dist/css/bootstrapValidator.min.css?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/bootstrapValidator/dist/css/bootstrapValidator.min.css?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * BootstrapValidator (http://bootstrapvalidator.com)\r\n * The best jQuery plugin to validate form fields. Designed to use with Bootstrap 3\r\n *\r\n * @version     v0.5.3, built on 2014-11-05 9:14:18 PM\r\n * @author      https://twitter.com/nghuuphuoc\r\n * @copyright   (c) 2013 - 2014 Nguyen Huu Phuoc\r\n * @license     Commercial: http://bootstrapvalidator.com/license/\r\n *              Non-commercial: http://creativecommons.org/licenses/by-nc-nd/3.0/\r\n */\n.bv-form .help-block{margin-bottom:0}.bv-form .tooltip-inner{text-align:left}.nav-tabs li.bv-tab-success>a{color:#3c763d}.nav-tabs li.bv-tab-error>a{color:#a94442}.bv-form .bv-icon-no-label{top:0}.bv-form .bv-icon-input-group{top:0;z-index:100}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/register.vue?vue&type=style&index=2&id=7b7bdec2&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/register.vue?vue&type=style&index=2&id=7b7bdec2&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.register[data-v-7b7bdec2] {\r\n    padding-top: 6.5%;\r\n    width: 100%;\r\n    height: 100vh;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);\r\n    overflow-y: auto;\n}\nlabel[for=\"terms\"][data-v-7b7bdec2] {\r\n    width: 100%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/login.css?vue&type=style&index=1&id=7b7bdec2&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/login.css?vue&type=style&index=1&id=7b7bdec2&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600);", ""]);

// module
exports.push([module.i, "/* Fonts Imported from Google */\r\n\r\n/*   Core: General style\r\n----------------------------*/\nbody[data-v-7b7bdec2] {\r\n    font-family: 'Open Sans', sans-serif;\r\n    height: 100%;\r\n    padding: 6.5% 0;\n}\n#sign-in[data-v-7b7bdec2],\r\n#sign-up[data-v-7b7bdec2] {\r\n    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);\n}\n.login-form[data-v-7b7bdec2] {\r\n    background-color: rgba(255, 255, 255, .9);\r\n    border-radius: 6px;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border: 0.5px solid #23527c;\r\n    margin:0 auto;\n}\n.btn-primary[data-v-7b7bdec2],\r\n.primary[data-v-7b7bdec2],\r\n.tags a.primary[data-v-7b7bdec2] {\r\n    border-color: #509DE0;\r\n    background: #509DE0 !important;\n}\n.btn[data-v-7b7bdec2]{\r\n    cursor: pointer;\n}\n.btn-primary[data-v-7b7bdec2]:hover {\r\n    border-color: #509DE0;\r\n    background: #509DE0 !important;\n}\n.icheckbox_minimal-blue[data-v-7b7bdec2] {\r\n    background-position: -20px 0;\n}\na[data-v-7b7bdec2]:hover,\r\na[data-v-7b7bdec2]:focus {\r\n    text-decoration: none;\n}\n.social a[data-v-7b7bdec2] {\r\n    border-radius: 50px;\r\n    padding: 10px 12px 2px 12px;\r\n    font-size: 25px;\n}\n.btn-facebook[data-v-7b7bdec2],\r\n.btn-facebook[data-v-7b7bdec2]:hover,\r\n.btn-facebook[data-v-7b7bdec2]:focus {\r\n    color: #5F7AB3;\r\n    border: 1px solid #5F7AB3;\n}\n.has-error .help-block[data-v-7b7bdec2],\r\n.has-error .control-label[data-v-7b7bdec2],\r\n.has-error .radio[data-v-7b7bdec2],\r\n.has-error .checkbox[data-v-7b7bdec2],\r\n.has-error .radio-inline[data-v-7b7bdec2],\r\n.has-error .checkbox-inline[data-v-7b7bdec2] {\r\n    color: #ff6666;\n}\n.has-error.radio label[data-v-7b7bdec2],\r\n.has-error.checkbox label[data-v-7b7bdec2],\r\n.has-success.radio label[data-v-7b7bdec2],\r\n.has-success.checkbox label[data-v-7b7bdec2] {\r\n    color: #333;\n}\n.radio[data-v-7b7bdec2],\r\n.checkbox[data-v-7b7bdec2] {\r\n    display: block;\n}\n.has-error .form-control[data-v-7b7bdec2],\r\n.has-error .form-control[data-v-7b7bdec2]:focus {\r\n    border-color: #ff6666;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-success .form-control[data-v-7b7bdec2],\r\n.has-success .form-control[data-v-7b7bdec2]:focus {\r\n    border-color: #66cc99;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.btn-google[data-v-7b7bdec2],\r\n.btn-google[data-v-7b7bdec2]:hover,\r\n.btn-google[data-v-7b7bdec2]:focus {\r\n    color: #dd4b39;\r\n    border: 1px solid #dd4b39;\n}\n.social .alter[data-v-7b7bdec2] {\r\n    font-size: 21px;\r\n    color: #666;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\n}\n#forgot[data-v-7b7bdec2]:hover {\r\n    color: #2a6496 !important;\n}\n@media screen and (max-width: 400px) {\n.mar-left5[data-v-7b7bdec2] {\r\n        margin-left: 18px !important;\r\n        margin-top: -10px;\n}\n.mar-top4[data-v-7b7bdec2] {\r\n        margin-top: -10px;\n}\n.mar-left[data-v-7b7bdec2] {\r\n        margin-left: -5px !important;\n}\n.sign-up[data-v-7b7bdec2] {\r\n        float: left !important;\n}\n#forgot[data-v-7b7bdec2]::after {\r\n        content: \"\\A\";\r\n        white-space: pre;\n}\n}\r\n\r\n/* Chrome, Safari, Opera */\n@-webkit-keyframes CAnimation-data-v-7b7bdec2 {\nfrom {\r\n        -webkit-filter: hue-rotate(0deg);\n}\nto {\r\n        -webkit-filter: hue-rotate(-360deg);\n}\n}\r\n\r\n\r\n/* Standard syntax */\n@keyframes CAnimation-data-v-7b7bdec2 {\nfrom {\r\n        -webkit-filter: hue-rotate(0deg);\n}\nto {\r\n        -webkit-filter: hue-rotate(-360deg);\n}\n}\n.forgot[data-v-7b7bdec2] {\r\n    color: #428BCA !important;\n}\na[data-v-7b7bdec2]:hover {\r\n    text-decoration: none;\n}\n.radio label[data-v-7b7bdec2],\r\n.checkbox label[data-v-7b7bdec2] {\r\n    padding-left: 0;\n}\n@media (min-width: 768px) {\n.form_width[data-v-7b7bdec2] {\r\n        margin-left: 12%;\n}\n}\r\n\r\n\r\n/* ===== Preloader =====*/\n.preloader[data-v-7b7bdec2] {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 100000;\r\n    backface-visibility: hidden;\r\n    background: #ffffff;\n}\n.loader_img[data-v-7b7bdec2] {\r\n    width: 50px;\r\n    height: 50px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    background-position: center;\r\n    margin: -25px 0 0 -25px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrapValidator/dist/css/bootstrapValidator.min.css?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/bootstrapValidator/dist/css/bootstrapValidator.min.css?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--5-1!../../../vue-loader/lib/loaders/stylePostLoader.js!../../../postcss-loader/src??ref--5-2!./bootstrapValidator.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrapValidator/dist/css/bootstrapValidator.min.css?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/register.vue?vue&type=style&index=2&id=7b7bdec2&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/register.vue?vue&type=style&index=2&id=7b7bdec2&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=2&id=7b7bdec2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/register.vue?vue&type=style&index=2&id=7b7bdec2&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/login.css?vue&type=style&index=1&id=7b7bdec2&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/login.css?vue&type=style&index=1&id=7b7bdec2&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./login.css?vue&type=style&index=1&id=7b7bdec2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/login.css?vue&type=style&index=1&id=7b7bdec2&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/register.vue?vue&type=template&id=7b7bdec2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/register.vue?vue&type=template&id=7b7bdec2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "vue-form",
        {
          attrs: { state: _vm.formstate },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.onSubmit($event)
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 col-sm-6" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c(
                    "validate",
                    { attrs: { tag: "div" } },
                    [
                      _c(
                        "label",
                        { staticClass: "sr-only", attrs: { for: "first" } },
                        [_vm._v(" First Name")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.model.firstname,
                            expression: "model.firstname"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "first",
                          name: "firstname",
                          type: "text",
                          required: "",
                          autofocus: "",
                          placeholder: "First Name"
                        },
                        domProps: { value: _vm.model.firstname },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.model,
                              "firstname",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "field-messages",
                        {
                          staticClass: "text-danger",
                          attrs: {
                            name: "firstname",
                            show: "$invalid && $submitted"
                          }
                        },
                        [
                          _c(
                            "div",
                            { attrs: { slot: "required" }, slot: "required" },
                            [_vm._v("Firstname is a required field")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-sm-6" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c(
                    "validate",
                    { attrs: { tag: "div" } },
                    [
                      _c(
                        "label",
                        { staticClass: "sr-only", attrs: { for: "last" } },
                        [_vm._v(" Last Name")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.model.lastname,
                            expression: "model.lastname"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "last",
                          name: "lastname",
                          type: "text",
                          required: "",
                          autofocus: "",
                          placeholder: "Last Name"
                        },
                        domProps: { value: _vm.model.lastname },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.model, "lastname", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "field-messages",
                        {
                          staticClass: "text-danger",
                          attrs: {
                            name: "lastname",
                            show: "$invalid && $submitted"
                          }
                        },
                        [
                          _c(
                            "div",
                            { attrs: { slot: "required" }, slot: "required" },
                            [_vm._v("Lastname is a required field")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c(
                    "validate",
                    { attrs: { tag: "div" } },
                    [
                      _c(
                        "label",
                        { staticClass: "sr-only", attrs: { for: "email" } },
                        [_vm._v(" E-mail")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.model.email,
                            expression: "model.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "email",
                          name: "email",
                          type: "email",
                          required: "",
                          placeholder: "E-mail"
                        },
                        domProps: { value: _vm.model.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.model, "email", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "field-messages",
                        {
                          staticClass: "text-danger",
                          attrs: {
                            name: "email",
                            show: "$invalid && $submitted"
                          }
                        },
                        [
                          _c(
                            "div",
                            { attrs: { slot: "required" }, slot: "required" },
                            [_vm._v("Email is a required field")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { attrs: { slot: "email" }, slot: "email" },
                            [_vm._v("Email is not valid")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c(
                    "validate",
                    { attrs: { tag: "div" } },
                    [
                      _c(
                        "label",
                        { staticClass: "sr-only", attrs: { for: "password" } },
                        [_vm._v(" Password")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.model.password,
                            expression: "model.password"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "password",
                          name: "password",
                          type: "password",
                          required: "",
                          placeholder: "Password",
                          minlength: "6",
                          maxlength: "10"
                        },
                        domProps: { value: _vm.model.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.model, "password", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "field-messages",
                        {
                          staticClass: "text-danger",
                          attrs: {
                            name: "password",
                            show: "$invalid && $submitted"
                          }
                        },
                        [
                          _c(
                            "div",
                            { attrs: { slot: "required" }, slot: "required" },
                            [_vm._v("Password is required")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { attrs: { slot: "minlength" }, slot: "minlength" },
                            [
                              _vm._v(
                                "Password should be atleast 6 characters long"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { attrs: { slot: "maxlength" }, slot: "maxlength" },
                            [
                              _vm._v(
                                "Password should be atmost 10 characters long"
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c(
                    "validate",
                    { attrs: { tag: "div" } },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "sr-only",
                          attrs: { for: "confirm_password" }
                        },
                        [_vm._v(" Confirm Password")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.model.repeatPassword,
                            expression: "model.repeatPassword"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "repeatpassword",
                          id: "confirm_password",
                          type: "password",
                          required: "",
                          placeholder: "Confirm Password",
                          sameas: _vm.model.password
                        },
                        domProps: { value: _vm.model.repeatPassword },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.model,
                              "repeatPassword",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "field-messages",
                        {
                          staticClass: "text-danger",
                          attrs: {
                            name: "repeatpassword",
                            show: "$invalid && $submitted"
                          }
                        },
                        [
                          _c(
                            "div",
                            { attrs: { slot: "required" }, slot: "required" },
                            [_vm._v("Password confirmatoin is required")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { attrs: { slot: "sameas" }, slot: "sameas" },
                            [
                              _vm._v(
                                "Password and Confirm password should match"
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "form-group checkbox" }, [
                _c("label", { attrs: { for: "terms" } }, [
                  _c("input", {
                    attrs: { type: "checkbox", name: "terms", id: "terms" }
                  }),
                  _vm._v("  I accept the "),
                  _c("a", { attrs: { href: "javascript:void(0)" } }, [
                    _vm._v("terms & Conditions")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  staticClass: "btn btn-primary btn-block",
                  attrs: { type: "submit", value: "Sign Up" }
                })
              ]),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "sign-in" },
                [
                  _vm._v("Already a member? "),
                  _c("router-link", { attrs: { to: "/login", exact: "" } }, [
                    _vm._v("Sign In")
                  ])
                ],
                1
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row text-center social" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _c("p", { staticClass: "alter" }, [_vm._v("Sign Up with")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row m-auto" }, [
        _c("div", { staticClass: "col-4" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-lg btn-facebook",
              attrs: { href: "javascript:void(0)" }
            },
            [_c("i", { staticClass: "ti-facebook" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-lg btn-twitter",
              attrs: { href: "javascript:void(0)" }
            },
            [_c("i", { staticClass: "ti-twitter-alt" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-lg btn-google",
              attrs: { href: "javascript:void(0)" }
            },
            [_c("i", { staticClass: "ti-google" })]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/components/pages/register.vue":
/*!*************************************************!*\
  !*** ./resources/components/pages/register.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_7b7bdec2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=7b7bdec2&scoped=true& */ "./resources/components/pages/register.vue?vue&type=template&id=7b7bdec2&scoped=true&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/components/pages/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var bootstrapValidator_dist_css_bootstrapValidator_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrapValidator/dist/css/bootstrapValidator.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/bootstrapValidator/dist/css/bootstrapValidator.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _css_login_css_vue_type_style_index_1_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/login.css?vue&type=style&index=1&id=7b7bdec2&scoped=true&lang=css& */ "./resources/css/login.css?vue&type=style&index=1&id=7b7bdec2&scoped=true&lang=css&");
/* harmony import */ var _register_vue_vue_type_style_index_2_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=2&id=7b7bdec2&scoped=true&lang=css& */ "./resources/components/pages/register.vue?vue&type=style&index=2&id=7b7bdec2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_7b7bdec2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_7b7bdec2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7b7bdec2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/register.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/components/pages/register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/register.vue?vue&type=style&index=2&id=7b7bdec2&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/components/pages/register.vue?vue&type=style&index=2&id=7b7bdec2&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_2_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=2&id=7b7bdec2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/register.vue?vue&type=style&index=2&id=7b7bdec2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_2_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_2_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_2_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_2_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_2_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/register.vue?vue&type=template&id=7b7bdec2&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/components/pages/register.vue?vue&type=template&id=7b7bdec2&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_7b7bdec2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=7b7bdec2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/register.vue?vue&type=template&id=7b7bdec2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_7b7bdec2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_7b7bdec2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/login.css?vue&type=style&index=1&id=7b7bdec2&scoped=true&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/css/login.css?vue&type=style&index=1&id=7b7bdec2&scoped=true&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_login_css_vue_type_style_index_1_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./login.css?vue&type=style&index=1&id=7b7bdec2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/login.css?vue&type=style&index=1&id=7b7bdec2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_login_css_vue_type_style_index_1_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_login_css_vue_type_style_index_1_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_login_css_vue_type_style_index_1_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_login_css_vue_type_style_index_1_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_login_css_vue_type_style_index_1_id_7b7bdec2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);