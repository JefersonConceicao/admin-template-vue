(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/payment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/payment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
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
  name: 'payment',
  data: function data() {
    return {
      cod: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_component.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/product_component.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'product_component',
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_description.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/product_description.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'product_descriptoin'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_preview.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/product_preview.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slider-component */ "./node_modules/vue-slider-component/dist/index.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_Magnifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../js/Magnifier.js */ "./resources/js/Magnifier.js");
/* harmony import */ var _js_Event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../js/Event.js */ "./resources/js/Event.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__webpack_require__(/*! ../../../css/magnifier.css */ "./resources/css/magnifier.css");

/* harmony default export */ __webpack_exports__["default"] = ({
  // ===Component name
  name: "product_preview",
  // ===Components used by this component
  components: {
    vueSlider: vue_slider_component__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  // ====component Data properties
  data: function data() {
    return {
      thumbs: [__webpack_require__(/*! img/ecommerce/product.png */ "./resources/img/ecommerce/product.png"), __webpack_require__(/*! img/ecommerce/product_4.png */ "./resources/img/ecommerce/product_4.png"), __webpack_require__(/*! img/ecommerce/product_2.png */ "./resources/img/ecommerce/product_2.png"), __webpack_require__(/*! img/ecommerce/product_3.png */ "./resources/img/ecommerce/product_3.png")],
      mag_data: {
        thumb: '#thumb',
        large: __webpack_require__(/*! img/ecommerce/product.png */ "./resources/img/ecommerce/product.png"),
        largeWrapper: 'preview',
        mode: 'inside',
        zoom: 3,
        zoomable: false
      }
    };
  },
  // ===Code to be executed when Component is mounted
  mounted: function mounted() {
    var evt = new _js_Event_js__WEBPACK_IMPORTED_MODULE_3__["default"](),
        m = new _js_Magnifier_js__WEBPACK_IMPORTED_MODULE_2__["default"](evt);
    m.attach(this.mag_data);
  },
  // ===Computed properties for the component
  computed: {},
  // ===Component methods
  methods: {
    openPictureModal: function openPictureModal(ref) {
      this.$refs.pictureModal[ref].show();
    },
    addTag: function addTag(newTag) {
      var tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.object_options.push(tag);
      this.tag_value.push(tag);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/recent_views.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/recent_views.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'recent_view'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/product_details.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/product_details.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ecommerce_product_component_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecommerce/product_component.vue */ "./resources/components/pages/ecommerce/product_component.vue");
/* harmony import */ var _ecommerce_payment_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ecommerce/payment.vue */ "./resources/components/pages/ecommerce/payment.vue");
/* harmony import */ var _ecommerce_product_preview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ecommerce/product_preview.vue */ "./resources/components/pages/ecommerce/product_preview.vue");
/* harmony import */ var _ecommerce_product_description_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecommerce/product_description.vue */ "./resources/components/pages/ecommerce/product_description.vue");
/* harmony import */ var _ecommerce_recent_views_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ecommerce/recent_views.vue */ "./resources/components/pages/ecommerce/recent_views.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  // ===Component name
  name: "product_details",
  // ===Components used by this component
  components: {
    preview: _ecommerce_product_preview_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    product_component: _ecommerce_product_component_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    payment: _ecommerce_payment_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    product_description: _ecommerce_product_description_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    recent_view: _ecommerce_recent_views_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  // ====component Data properties
  data: function data() {
    return {
      value: 75
    };
  },
  // ===Code to be executed when Component is mounted
  mounted: function mounted() {},
  // ===Computed properties for the component
  computed: {},
  // ===Component methods
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/css/magnifier.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./resources/css/magnifier.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".magnifier-thumb-wrapper {\r\n    position: relative;\r\n    display: block;\r\n    top: 0;\r\n    left: 0\r\n}\r\n\r\n.magnifier-lens {\r\n    position: absolute;\r\n    border: solid 1px #ccc;\r\n    z-index: 1000;\r\n    top: 0;\r\n    left: 0;\r\n    overflow: hidden\r\n}\r\n\r\n.magnifier-loader {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    border: solid 1px #ccc;\r\n    color: #fff;\r\n    text-align: center;\r\n    background: transparent;\r\n    background: rgba(50, 50, 50, 0.5);\r\n    z-index: 1000;\r\n    -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F323232,endColorstr=#7F323232)\";\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F323232,endColorstr=#7F323232)\r\n}\r\n\r\n.magnifier-loader-text {\r\n    font: 13px Arial;\r\n    margin-top: 10px\r\n}\r\n\r\n.magnifier-large {\r\n    position: absolute;\r\n    z-index: 100\r\n}\r\n\r\n.magnifier-preview {\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 150px;\r\n    position: relative;\r\n    overflow: hidden\r\n}\r\n\r\n.magnifier-preview img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0\r\n}\r\n\r\n.opaque {\r\n    opacity: .5;\r\n    filter: alpha(opacity=50);\r\n    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\r\n}\r\n\r\n.hidden {\r\n    display: none\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/payment.vue?vue&type=style&index=0&id=df42a82a&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/payment.vue?vue&type=style&index=0&id=df42a82a&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.textSuccess[data-v-df42a82a]{\n    color: #66cc99;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_component.vue?vue&type=style&index=0&id=4865505c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/product_component.vue?vue&type=style&index=0&id=4865505c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.product_desc li[data-v-4865505c]{\n    list-style: disc;\n}\n.price_size[data-v-4865505c]{\n    font-size: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_description.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/product_description.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media(min-width:1440px){\n.product_desc_tabs .nav-link    {\n        padding: 0.6rem 1rem;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_preview.vue?vue&type=style&index=0&id=6b6f4c5d&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/product_preview.vue?vue&type=style&index=0&id=6b6f4c5d&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#preview[data-v-6b6f4c5d] {\n    position: absolute;\n    left: 85%;\n    top: 5%;\n}\n.slide-preview[data-v-6b6f4c5d] {\n    max-height: 100px;\n}\n.small_img[data-v-6b6f4c5d]{\n    border:none !important;\n    background-color: #fff !important;\n}.small_img[data-v-6b6f4c5d]:hover{\n     background-color: #fff !important;\n}\n.right_modal[data-v-6b6f4c5d] {\n    margin-top: 20px;\n}\n@media(max-width: 320px) {\n#preview[data-v-6b6f4c5d] {\n        position: absolute;\n        left: 5%;\n        top: 105%;\n}\n}\n@media (max-width: 768px){\n#preview[data-v-6b6f4c5d]{\n        left:77%;\n}\n}\n@media(max-width:1024px){\n.small_img[data-v-6b6f4c5d]{\n        padding: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/payment.vue?vue&type=style&index=0&id=df42a82a&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/payment.vue?vue&type=style&index=0&id=df42a82a&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./payment.vue?vue&type=style&index=0&id=df42a82a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/payment.vue?vue&type=style&index=0&id=df42a82a&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_component.vue?vue&type=style&index=0&id=4865505c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/product_component.vue?vue&type=style&index=0&id=4865505c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./product_component.vue?vue&type=style&index=0&id=4865505c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_component.vue?vue&type=style&index=0&id=4865505c&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_description.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/product_description.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./product_description.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_description.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_preview.vue?vue&type=style&index=0&id=6b6f4c5d&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/product_preview.vue?vue&type=style&index=0&id=6b6f4c5d&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./product_preview.vue?vue&type=style&index=0&id=6b6f4c5d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_preview.vue?vue&type=style&index=0&id=6b6f4c5d&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/payment.vue?vue&type=template&id=df42a82a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/payment.vue?vue&type=template&id=df42a82a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card mt-5" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "check_pin mt-3 mb-3" }, [
          _c("label", { staticClass: "mb-1", attrs: { for: "cod" } }, [
            _vm._v("Check COD")
          ]),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.cod,
                expression: "cod"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "cod", placeholder: "Enter pin code" },
            domProps: { value: _vm.cod },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.cod = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("p", [
          _c("span", {
            staticClass: "fa fa-check",
            class: { textSuccess: _vm.cod.length == 6 }
          }),
          _vm._v("\n                Cash on delivery available")
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "btn btn-info btn-block font-weight-bold mt-3 text-white"
          },
          [_vm._v("Buy now")]
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
              }
            }
          },
          [
            _c("b-form-checkbox", [
              _vm._v(
                "\n                    Notify me When price drops\n                "
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-warning btn-block text-white mb-5" },
              [_vm._v("Submit")]
            )
          ],
          1
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
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "mb-0" }, [_vm._v("Payment")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-primary btn-block font-weight-bold" },
      [
        _c("span", { staticClass: "fa fa-cart-arrow-down" }),
        _vm._v(" Add to cart")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_component.vue?vue&type=template&id=4865505c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/product_component.vue?vue&type=template&id=4865505c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
      _c("h6", { staticClass: "text-secondary mt-5" }, [_vm._v("Cloth's")]),
      _vm._v(" "),
      _c("h3", [_c("b", [_vm._v("Men's Polo T-shirt")])]),
      _vm._v(" "),
      _c("span", [
        _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
        _vm._v(" "),
        _c("span", { staticClass: "fa fa-star-half-o star_icon text-warning" })
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "ml-3" }, [
        _c("a", { attrs: { href: "/#/product_details" } }, [
          _vm._v("Read more reviews")
        ])
      ]),
      _vm._v(" "),
      _c("h5", { staticClass: "mt-2" }, [_vm._v("Product details")]),
      _vm._v(" "),
      _c("ul", { staticClass: "product_desc" }, [
        _c("li", [
          _vm._v(
            "\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _vm._v(
            "\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "price_size" }, [
        _vm._v("\n        Pirce :\n        "),
        _c("del", { staticClass: "price text-success" }, [
          _vm._v("\n            $99.00\n        ")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "text-primary ml-3 font-weight-bold" }, [
          _vm._v("$55.00")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-4 col-xl-3" }, [
          _c("div", { staticClass: "product_size mt-3" }, [
            _c("div", [_c("h5", [_vm._v("Size ")])]),
            _vm._v(" "),
            _c("div", [
              _c(
                "select",
                {
                  staticClass: "bg-light form-control",
                  attrs: { name: "size", id: "productSize" }
                },
                [
                  _c("option", [_vm._v("S")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("M")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("L")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("xl")])
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-5 col-xl-4" }, [
          _c("div", { staticClass: "product_quantity mt-3" }, [
            _c("div", [_c("h5", [_vm._v("Quantity")])]),
            _vm._v(" "),
            _c("div", [
              _c(
                "select",
                {
                  staticClass: "bg-light form-control",
                  attrs: { name: "quantity", id: "productQuantity" }
                },
                [
                  _c("option", [_vm._v("1")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("2")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("3")]),
                  _vm._v(" "),
                  _c("option", [_vm._v("4")])
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "offer" }, [
        _c("p", [
          _c("span", { staticClass: "text-success" }, [_vm._v("Offer 1: ")]),
          _vm._v("Avail 30% chshback on Yes bank credit/ debit card's")
        ]),
        _vm._v(" "),
        _c("p", [
          _c("span", { staticClass: "text-success" }, [_vm._v("Offer 2: ")]),
          _vm._v("Avail 20% chshback on purchase of three T-shirts")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_description.vue?vue&type=template&id=6ffd27de&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/product_description.vue?vue&type=template&id=6ffd27de& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row mt-4" }, [
      _c(
        "div",
        { staticClass: "col-12 mt-4" },
        [
          _c(
            "b-tabs",
            { staticClass: "product_desc_tabs" },
            [
              _c(
                "b-tab",
                { attrs: { title: "Product Description", active: "" } },
                [
                  _c("p", { staticClass: "mt-4" }, [
                    _vm._v(
                      "\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged\n                    "
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("b-tab", { attrs: { title: "Additional Informatoin" } }, [
                _c("div", { staticClass: "row mt-3" }, [
                  _c("div", { staticClass: "col-6 col-sm-4" }, [
                    _c("h6", { staticClass: "font-weight-bold" }, [
                      _vm._v("Material:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-8" }, [
                    _vm._v(
                      "\n                            Cutton\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-4" }, [
                    _c("h6", { staticClass: "font-weight-bold" }, [
                      _vm._v("Sleve type:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-8" }, [
                    _vm._v(
                      "\n                            Half Sleeve\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-4" }, [
                    _c("h6", { staticClass: "font-weight-bold" }, [
                      _vm._v("Neck type:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-8" }, [
                    _vm._v(
                      "\n                            Polo\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-4" }, [
                    _c("h6", { staticClass: "font-weight-bold" }, [
                      _vm._v("Fit type:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-8" }, [
                    _vm._v(
                      "\n                            Regular type\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-4" }, [
                    _c("h6", { staticClass: "font-weight-bold" }, [
                      _vm._v("Color:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-8" }, [
                    _vm._v(
                      "\n                            Black , Brown , white\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-4" }, [
                    _c("h6", { staticClass: "font-weight-bold" }, [
                      _vm._v("Sleve type:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-sm-8" }, [
                    _vm._v(
                      "\n                            Half Sleeve\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("b-tab", { attrs: { title: "Customer Reviews" } }, [
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6 col-sm-2 col-xl-1 mb-3" }, [
                    _c("img", {
                      staticClass: "img-fluid rounded-circle",
                      attrs: {
                        src: __webpack_require__(/*! ../../../img/authors/avatar.jpg */ "./resources/img/authors/avatar.jpg"),
                        alt: "cust1"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-10 col-xl-11" }, [
                    _c("h5", { staticClass: "font-weight-bold" }, [
                      _vm._v("Charis Perter")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-secondary " }, [
                      _vm._v("20"),
                      _c("sup", [_vm._v("th")]),
                      _vm._v(" Jan 2018")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mt-2 mb-2" }, [
                      _vm._v("\n                                Rating:"),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star-half-o star_icon text-warning"
                      })
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                            "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6 col-sm-2 col-xl-1 mb-3" }, [
                    _c("img", {
                      staticClass: "img-fluid rounded-circle",
                      attrs: {
                        src: __webpack_require__(/*! ../../../img/authors/avatar1.jpg */ "./resources/img/authors/avatar1.jpg"),
                        alt: "cust2"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-10 col-xl-11" }, [
                    _c("h5", { staticClass: "font-weight-bold" }, [
                      _vm._v("Lucis flowers")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-secondary " }, [
                      _vm._v("23"),
                      _c("sup", [_vm._v("th")]),
                      _vm._v(" Jan 2018")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mt-2 mb-2" }, [
                      _vm._v("\n                                Rating:"),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      }),
                      _vm._v(" "),
                      _c("span", {
                        staticClass: "fa fa-star star_icon text-warning"
                      })
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                            "
                      )
                    ])
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("hr")
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-5" }, [
      _c("h4", { staticClass: "font-weight-bold text-primary" }, [
        _vm._v("Product Rating")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-2" }, [
          _c("div", { staticClass: "d-inline-block text-center pt-3" }, [
            _c("h2", [
              _vm._v("4.8 "),
              _c("span", { staticClass: "fa fa-star" })
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("2018 ratings")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: " ml-3" }, [
            _vm._v("\n                        5 "),
            _c("span", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("div", { staticClass: "progress mb-1" }, [
              _c("div", {
                staticClass: "progress-bar d-inline-block",
                staticStyle: { width: "89%" },
                attrs: { role: "progressbar" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: " ml-3" }, [
            _vm._v("\n                        4 "),
            _c("span", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("div", { staticClass: "progress mb-1" }, [
              _c("div", {
                staticClass: "progress-bar d-inline-block",
                staticStyle: { width: "5%" },
                attrs: { role: "progressbar" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: " ml-3" }, [
            _vm._v("\n                        3 "),
            _c("span", { staticClass: "fa fa-star" }),
            _vm._v(" "),
            _c("div", { staticClass: "progress mb-1" }, [
              _c("div", {
                staticClass: "progress-bar d-inline-block",
                staticStyle: { width: "2%" },
                attrs: { role: "progressbar" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-secondary mt-3 ml-3" }, [
            _vm._v("Rate us here")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_preview.vue?vue&type=template&id=6b6f4c5d&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/product_preview.vue?vue&type=template&id=6b6f4c5d&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-12  mt-5" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "mx-auto" }, [
              _c(
                "a",
                {
                  staticClass: "magnifier-thumb-wrapper",
                  attrs: { href: "#/product_details" }
                },
                [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      id: "thumb",
                      src: __webpack_require__(/*! ../../../img/ecommerce/product.png */ "./resources/img/ecommerce/product.png"),
                      alt: "product"
                    }
                  })
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xl-12 col-md-12 text-center right_modal" },
          [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.thumbs, function(image, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-lg-3 col-md-3 col-12" },
                  [
                    _c(
                      "b-btn",
                      {
                        staticClass: "mb-3 small_img",
                        on: {
                          click: function($event) {
                            return _vm.openPictureModal(index)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid slide-preview",
                          attrs: { src: image, alt: "phone image" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "pictureModal",
                        refInFor: true,
                        attrs: { title: "Modal" }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: image,
                            alt: "small phone image missing"
                          }
                        })
                      ]
                    )
                  ],
                  1
                )
              }),
              0
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/recent_views.vue?vue&type=template&id=bcb74216&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/ecommerce/recent_views.vue?vue&type=template&id=bcb74216& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    _c("h5", { staticClass: "font-weight-bold text-primary" }, [
      _vm._v("Your recent views")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-3" }, [
      _c("div", { staticClass: "col-sm-2 mb-3 mb-sm-0" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("img", {
            staticClass: "img-fluid mb-2",
            attrs: {
              src: __webpack_require__(/*! ../../../img/ecommerce/product7.png */ "./resources/img/ecommerce/product7.png"),
              alt: "item1"
            }
          }),
          _vm._v(" "),
          _c("h5", [_vm._v("T-shirt")]),
          _vm._v(" "),
          _c("h6", [_vm._v("$88")]),
          _vm._v(" "),
          _c("span", { staticClass: "text-secondary" }, [
            _vm._v("sale ends at 6pm")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2 mb-3 mb-sm-0" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("img", {
            staticClass: "img-fluid mb-2",
            attrs: {
              src: __webpack_require__(/*! ../../../img/ecommerce/product6.png */ "./resources/img/ecommerce/product6.png"),
              alt: "item2"
            }
          }),
          _vm._v(" "),
          _c("h5", [_vm._v("Mobile")]),
          _vm._v(" "),
          _c("h6", [_vm._v("$450")]),
          _vm._v(" "),
          _c("div", { staticClass: "text-secondary" }, [
            _vm._v("2 offers avilable")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2 mb-3 mb-sm-0" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("img", {
            staticClass: "img-fluid mb-2",
            attrs: {
              src: __webpack_require__(/*! ../../../img/ecommerce/product5.png */ "./resources/img/ecommerce/product5.png"),
              alt: "item3"
            }
          }),
          _vm._v(" "),
          _c("h5", [_vm._v("Camera")]),
          _vm._v(" "),
          _c("h6", [_vm._v("$1000")]),
          _vm._v(" "),
          _c("div", { staticClass: "text-secondary" }, [
            _vm._v("2 offers avilable")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2 mb-3 mb-sm-0" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("img", {
            staticClass: "img-fluid mb-2",
            attrs: {
              src: __webpack_require__(/*! ../../../img/ecommerce/product8.png */ "./resources/img/ecommerce/product8.png"),
              alt: "item4"
            }
          }),
          _vm._v(" "),
          _c("h5", [_vm._v("Head Phones")]),
          _vm._v(" "),
          _c("h6", [_vm._v("$88")]),
          _vm._v(" "),
          _c("del", { staticClass: "text-secondary" }, [
            _vm._v("\n                        $99\n                    ")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2 mb-3 mb-sm-0" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("img", {
            staticClass: "img-fluid mb-2",
            attrs: {
              src: __webpack_require__(/*! ../../../img/ecommerce/product7.png */ "./resources/img/ecommerce/product7.png"),
              alt: "item5"
            }
          }),
          _vm._v(" "),
          _c("h5", [_vm._v("T-shirt")]),
          _vm._v(" "),
          _c("h6", [_vm._v("$88")]),
          _vm._v(" "),
          _c("div", { staticClass: "text-secondary" }, [
            _vm._v("2 offers avilable")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2 mb-3 mb-sm-0" }, [
        _c("div", { staticClass: "text-center" }, [
          _c("img", {
            staticClass: "img-fluid mb-2",
            attrs: {
              src: __webpack_require__(/*! ../../../img/ecommerce/product7.png */ "./resources/img/ecommerce/product7.png"),
              alt: "item6"
            }
          }),
          _vm._v(" "),
          _c("h5", [_vm._v("T-shirt")]),
          _vm._v(" "),
          _c("h6", [_vm._v("$70")]),
          _vm._v(" "),
          _c("del", { staticClass: "text-secondary" }, [_vm._v("$88")])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/product_details.vue?vue&type=template&id=2ce3af26&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/product_details.vue?vue&type=template&id=2ce3af26&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
          _c("b-card", [
            _c("div", { staticClass: "col-lg-12" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-12 col-sm-12 col-lg-4" },
                  [_c("preview")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-7 col-lg-5" },
                  [_c("product_component")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-5 col-lg-3" },
                  [_c("payment")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-12" },
                  [_c("product_description")],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [_c("recent_view")], 1)
              ])
            ])
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

/***/ "./resources/components/pages/ecommerce/payment.vue":
/*!**********************************************************!*\
  !*** ./resources/components/pages/ecommerce/payment.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payment_vue_vue_type_template_id_df42a82a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.vue?vue&type=template&id=df42a82a&scoped=true& */ "./resources/components/pages/ecommerce/payment.vue?vue&type=template&id=df42a82a&scoped=true&");
/* harmony import */ var _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.vue?vue&type=script&lang=js& */ "./resources/components/pages/ecommerce/payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _payment_vue_vue_type_style_index_0_id_df42a82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.vue?vue&type=style&index=0&id=df42a82a&scoped=true&lang=css& */ "./resources/components/pages/ecommerce/payment.vue?vue&type=style&index=0&id=df42a82a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payment_vue_vue_type_template_id_df42a82a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _payment_vue_vue_type_template_id_df42a82a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "df42a82a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/ecommerce/payment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/ecommerce/payment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/payment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/ecommerce/payment.vue?vue&type=style&index=0&id=df42a82a&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/payment.vue?vue&type=style&index=0&id=df42a82a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_df42a82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./payment.vue?vue&type=style&index=0&id=df42a82a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/payment.vue?vue&type=style&index=0&id=df42a82a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_df42a82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_df42a82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_df42a82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_df42a82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_df42a82a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/ecommerce/payment.vue?vue&type=template&id=df42a82a&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/payment.vue?vue&type=template&id=df42a82a&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_df42a82a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./payment.vue?vue&type=template&id=df42a82a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/payment.vue?vue&type=template&id=df42a82a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_df42a82a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_df42a82a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/ecommerce/product_component.vue":
/*!********************************************************************!*\
  !*** ./resources/components/pages/ecommerce/product_component.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_component_vue_vue_type_template_id_4865505c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product_component.vue?vue&type=template&id=4865505c&scoped=true& */ "./resources/components/pages/ecommerce/product_component.vue?vue&type=template&id=4865505c&scoped=true&");
/* harmony import */ var _product_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product_component.vue?vue&type=script&lang=js& */ "./resources/components/pages/ecommerce/product_component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _product_component_vue_vue_type_style_index_0_id_4865505c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product_component.vue?vue&type=style&index=0&id=4865505c&scoped=true&lang=css& */ "./resources/components/pages/ecommerce/product_component.vue?vue&type=style&index=0&id=4865505c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_component_vue_vue_type_template_id_4865505c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_component_vue_vue_type_template_id_4865505c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4865505c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/ecommerce/product_component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/ecommerce/product_component.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/product_component.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./product_component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/ecommerce/product_component.vue?vue&type=style&index=0&id=4865505c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/product_component.vue?vue&type=style&index=0&id=4865505c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_component_vue_vue_type_style_index_0_id_4865505c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./product_component.vue?vue&type=style&index=0&id=4865505c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_component.vue?vue&type=style&index=0&id=4865505c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_component_vue_vue_type_style_index_0_id_4865505c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_component_vue_vue_type_style_index_0_id_4865505c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_component_vue_vue_type_style_index_0_id_4865505c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_component_vue_vue_type_style_index_0_id_4865505c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_component_vue_vue_type_style_index_0_id_4865505c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/ecommerce/product_component.vue?vue&type=template&id=4865505c&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/product_component.vue?vue&type=template&id=4865505c&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_component_vue_vue_type_template_id_4865505c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./product_component.vue?vue&type=template&id=4865505c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_component.vue?vue&type=template&id=4865505c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_component_vue_vue_type_template_id_4865505c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_component_vue_vue_type_template_id_4865505c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/ecommerce/product_description.vue":
/*!**********************************************************************!*\
  !*** ./resources/components/pages/ecommerce/product_description.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_description_vue_vue_type_template_id_6ffd27de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product_description.vue?vue&type=template&id=6ffd27de& */ "./resources/components/pages/ecommerce/product_description.vue?vue&type=template&id=6ffd27de&");
/* harmony import */ var _product_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product_description.vue?vue&type=script&lang=js& */ "./resources/components/pages/ecommerce/product_description.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _product_description_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product_description.vue?vue&type=style&index=0&lang=css& */ "./resources/components/pages/ecommerce/product_description.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_description_vue_vue_type_template_id_6ffd27de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_description_vue_vue_type_template_id_6ffd27de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/ecommerce/product_description.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/ecommerce/product_description.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/product_description.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./product_description.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_description.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/ecommerce/product_description.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/product_description.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_description_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./product_description.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_description.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_description_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_description_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_description_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_description_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_description_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/ecommerce/product_description.vue?vue&type=template&id=6ffd27de&":
/*!*****************************************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/product_description.vue?vue&type=template&id=6ffd27de& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_description_vue_vue_type_template_id_6ffd27de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./product_description.vue?vue&type=template&id=6ffd27de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_description.vue?vue&type=template&id=6ffd27de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_description_vue_vue_type_template_id_6ffd27de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_description_vue_vue_type_template_id_6ffd27de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/ecommerce/product_preview.vue":
/*!******************************************************************!*\
  !*** ./resources/components/pages/ecommerce/product_preview.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_preview_vue_vue_type_template_id_6b6f4c5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product_preview.vue?vue&type=template&id=6b6f4c5d&scoped=true& */ "./resources/components/pages/ecommerce/product_preview.vue?vue&type=template&id=6b6f4c5d&scoped=true&");
/* harmony import */ var _product_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product_preview.vue?vue&type=script&lang=js& */ "./resources/components/pages/ecommerce/product_preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _product_preview_vue_vue_type_style_index_0_id_6b6f4c5d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product_preview.vue?vue&type=style&index=0&id=6b6f4c5d&scoped=true&lang=css& */ "./resources/components/pages/ecommerce/product_preview.vue?vue&type=style&index=0&id=6b6f4c5d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_preview_vue_vue_type_template_id_6b6f4c5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_preview_vue_vue_type_template_id_6b6f4c5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b6f4c5d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/ecommerce/product_preview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/ecommerce/product_preview.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/product_preview.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./product_preview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_preview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/ecommerce/product_preview.vue?vue&type=style&index=0&id=6b6f4c5d&scoped=true&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/product_preview.vue?vue&type=style&index=0&id=6b6f4c5d&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_preview_vue_vue_type_style_index_0_id_6b6f4c5d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./product_preview.vue?vue&type=style&index=0&id=6b6f4c5d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_preview.vue?vue&type=style&index=0&id=6b6f4c5d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_preview_vue_vue_type_style_index_0_id_6b6f4c5d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_preview_vue_vue_type_style_index_0_id_6b6f4c5d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_preview_vue_vue_type_style_index_0_id_6b6f4c5d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_preview_vue_vue_type_style_index_0_id_6b6f4c5d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_preview_vue_vue_type_style_index_0_id_6b6f4c5d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/ecommerce/product_preview.vue?vue&type=template&id=6b6f4c5d&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/product_preview.vue?vue&type=template&id=6b6f4c5d&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_preview_vue_vue_type_template_id_6b6f4c5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./product_preview.vue?vue&type=template&id=6b6f4c5d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/product_preview.vue?vue&type=template&id=6b6f4c5d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_preview_vue_vue_type_template_id_6b6f4c5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_preview_vue_vue_type_template_id_6b6f4c5d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/ecommerce/recent_views.vue":
/*!***************************************************************!*\
  !*** ./resources/components/pages/ecommerce/recent_views.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recent_views_vue_vue_type_template_id_bcb74216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recent_views.vue?vue&type=template&id=bcb74216& */ "./resources/components/pages/ecommerce/recent_views.vue?vue&type=template&id=bcb74216&");
/* harmony import */ var _recent_views_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recent_views.vue?vue&type=script&lang=js& */ "./resources/components/pages/ecommerce/recent_views.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _recent_views_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _recent_views_vue_vue_type_template_id_bcb74216___WEBPACK_IMPORTED_MODULE_0__["render"],
  _recent_views_vue_vue_type_template_id_bcb74216___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/ecommerce/recent_views.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/ecommerce/recent_views.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/recent_views.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_views_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./recent_views.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/recent_views.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_views_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/ecommerce/recent_views.vue?vue&type=template&id=bcb74216&":
/*!**********************************************************************************************!*\
  !*** ./resources/components/pages/ecommerce/recent_views.vue?vue&type=template&id=bcb74216& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_views_vue_vue_type_template_id_bcb74216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./recent_views.vue?vue&type=template&id=bcb74216& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/ecommerce/recent_views.vue?vue&type=template&id=bcb74216&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_views_vue_vue_type_template_id_bcb74216___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_views_vue_vue_type_template_id_bcb74216___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/product_details.vue":
/*!********************************************************!*\
  !*** ./resources/components/pages/product_details.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_details_vue_vue_type_template_id_2ce3af26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product_details.vue?vue&type=template&id=2ce3af26&scoped=true& */ "./resources/components/pages/product_details.vue?vue&type=template&id=2ce3af26&scoped=true&");
/* harmony import */ var _product_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product_details.vue?vue&type=script&lang=js& */ "./resources/components/pages/product_details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _product_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_details_vue_vue_type_template_id_2ce3af26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_details_vue_vue_type_template_id_2ce3af26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ce3af26",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/product_details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/product_details.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/components/pages/product_details.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./product_details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/product_details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/product_details.vue?vue&type=template&id=2ce3af26&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/components/pages/product_details.vue?vue&type=template&id=2ce3af26&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_template_id_2ce3af26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./product_details.vue?vue&type=template&id=2ce3af26&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/product_details.vue?vue&type=template&id=2ce3af26&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_template_id_2ce3af26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_details_vue_vue_type_template_id_2ce3af26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/magnifier.css":
/*!*************************************!*\
  !*** ./resources/css/magnifier.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??ref--5-2!./magnifier.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/css/magnifier.css");

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

/***/ "./resources/img/authors/avatar.jpg":
/*!******************************************!*\
  !*** ./resources/img/authors/avatar.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/avatar.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ "./resources/img/ecommerce/product.png":
/*!*********************************************!*\
  !*** ./resources/img/ecommerce/product.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/product.png?921f475804236cccb1e348d8ea00ae2a";

/***/ }),

/***/ "./resources/img/ecommerce/product5.png":
/*!**********************************************!*\
  !*** ./resources/img/ecommerce/product5.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/product5.png?e3c6ea40ba93e4b21feb50271e63d60b";

/***/ }),

/***/ "./resources/img/ecommerce/product6.png":
/*!**********************************************!*\
  !*** ./resources/img/ecommerce/product6.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/product6.png?006ad5deb285a23818d1c8fff0c28bf3";

/***/ }),

/***/ "./resources/img/ecommerce/product7.png":
/*!**********************************************!*\
  !*** ./resources/img/ecommerce/product7.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/product7.png?f5f7429df68ef8bee2043875c2bb4586";

/***/ }),

/***/ "./resources/img/ecommerce/product8.png":
/*!**********************************************!*\
  !*** ./resources/img/ecommerce/product8.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/product8.png?2b7f1e8d1e4168dcd54c27e15a633aac";

/***/ }),

/***/ "./resources/img/ecommerce/product_2.png":
/*!***********************************************!*\
  !*** ./resources/img/ecommerce/product_2.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/product_2.png?a987ca4d68b2e8a2cc444ff2585971a9";

/***/ }),

/***/ "./resources/img/ecommerce/product_3.png":
/*!***********************************************!*\
  !*** ./resources/img/ecommerce/product_3.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/product_3.png?b5daa9f180ed178a73ffc3ca14bbc807";

/***/ }),

/***/ "./resources/img/ecommerce/product_4.png":
/*!***********************************************!*\
  !*** ./resources/img/ecommerce/product_4.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/product_4.png?b5daa9f180ed178a73ffc3ca14bbc807";

/***/ }),

/***/ "./resources/js/Event.js":
/*!*******************************!*\
  !*** ./resources/js/Event.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Unifies event handling across browsers
 *
 * - Allows registering and unregistering of event handlers
 * - Injects event object and involved DOM element to listener
 *
 * @author Mark Rolich <mark.rolich@gmail.com>
 */
var Event = function Event() {
  "use strict";

  this.attach = function (evtName, element, listener, capture) {
    var evt = '',
        useCapture = capture === undefined ? true : capture,
        handler = null;

    if (window.addEventListener === undefined) {
      evt = 'on' + evtName;

      handler = function handler(evt, listener) {
        element.attachEvent(evt, listener);
        return listener;
      };
    } else {
      evt = evtName;

      handler = function handler(evt, listener, useCapture) {
        element.addEventListener(evt, listener, useCapture);
        return listener;
      };
    }

    return handler.apply(element, [evt, function (ev) {
      var e = ev || event,
          src = e.srcElement || e.target;
      listener(e, src);
    }, useCapture]);
  };

  this.detach = function (evtName, element, listener, capture) {
    var evt = '',
        useCapture = capture === undefined ? true : capture;

    if (window.removeEventListener === undefined) {
      evt = 'on' + evtName;
      element.detachEvent(evt, listener);
    } else {
      evt = evtName;
      element.removeEventListener(evt, listener, useCapture);
    }
  };

  this.stop = function (evt) {
    evt.cancelBubble = true;

    if (evt.stopPropagation) {
      evt.stopPropagation();
    }
  };

  this.prevent = function (evt) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      evt.returnValue = false;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./resources/js/Magnifier.js":
/*!***********************************!*\
  !*** ./resources/js/Magnifier.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Magnifier.js is a Javascript library enabling magnifying glass effect on an images.
 *
 * Features
 *
 * Zoom in / out functionality using mouse wheel
 * Setting options via Javascript or data attributes
 * Magnified image can be displayed in the lens itself or outside of it in a wrapper
 * Attachment to multiple images with single call
 * Attachment of user defined functions for thumbnail entering, moving and leaving and image zooming events
 * Display loading text while the large image is being loaded, and switch to lens once its loaded
 *
 * Magnifier.js uses Event.js as a cross-browser event handling wrapper, which is available at
 * Github and JSClasses.org:
 *
 * Github - https://github.com/mark-rolich/Event.js
 * JS Classes - http://www.jsclasses.org/package/212-JavaScript-Handle-events-in-a-browser-independent-manner.html
 *
 * Works in Chrome, Firefox, Safari, IE 7, 8, 9 & 10.
 *
 * @author Mark Rolich <mark.rolich@gmail.com>
 */
var Magnifier = function Magnifier(evt, options) {
  "use strict";

  var gOptions = options || {},
      curThumb = null,
      curData = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    lensW: 0,
    lensH: 0,
    lensBgX: 0,
    lensBgY: 0,
    largeW: 0,
    largeH: 0,
    largeL: 0,
    largeT: 0,
    zoom: 2,
    zoomMin: 1.1,
    zoomMax: 5,
    mode: 'outside',
    largeWrapperId: gOptions.largeWrapper !== undefined ? gOptions.largeWrapper.id || null : null,
    status: 0,
    zoomAttached: false,
    zoomable: gOptions.zoomable !== undefined ? gOptions.zoomable : false,
    onthumbenter: gOptions.onthumbenter !== undefined ? gOptions.onthumbenter : null,
    onthumbmove: gOptions.onthumbmove !== undefined ? gOptions.onthumbmove : null,
    onthumbleave: gOptions.onthumbleave !== undefined ? gOptions.onthumbleave : null,
    onzoom: gOptions.onzoom !== undefined ? gOptions.onzoom : null
  },
      pos = {
    t: 0,
    l: 0,
    x: 0,
    y: 0
  },
      gId = 0,
      status = 0,
      curIdx = '',
      curLens = null,
      curLarge = null,
      gZoom = gOptions.zoom !== undefined ? gOptions.zoom : curData.zoom,
      gZoomMin = gOptions.zoomMin !== undefined ? gOptions.zoomMin : curData.zoomMin,
      gZoomMax = gOptions.zoomMax !== undefined ? gOptions.zoomMax : curData.zoomMax,
      gMode = gOptions.mode || curData.mode,
      data = {},
      inBounds = false,
      isOverThumb = 0,
      getElementsByClass = function getElementsByClass(className) {
    var list = [],
        elements = null,
        len = 0,
        pattern = '',
        i = 0,
        j = 0;

    if (document.getElementsByClassName) {
      list = document.getElementsByClassName(className);
    } else {
      elements = document.getElementsByTagName('*');
      len = elements.length;
      pattern = new RegExp("(^|\\s)" + className + "(\\s|$)");

      for (i, j; i < len; i += 1) {
        if (pattern.test(elements[i].className)) {
          list[j] = elements[i];
          j += 1;
        }
      }
    }

    return list;
  },
      $ = function $(selector) {
    var idx = '',
        type = selector.charAt(0),
        result = null;

    if (type === '#' || type === '.') {
      idx = selector.substr(1, selector.length);
    }

    if (idx !== '') {
      switch (type) {
        case '#':
          result = document.getElementById(idx);
          break;

        case '.':
          result = getElementsByClass(idx);
          break;
      }
    }

    return result;
  },
      createLens = function createLens(thumb, idx) {
    var lens = document.createElement('div');
    lens.id = idx + '-lens';
    lens.className = 'magnifier-loader';
    thumb.parentNode.appendChild(lens);
  },
      updateLensOnZoom = function updateLensOnZoom() {
    curLens.style.left = pos.l + 'px';
    curLens.style.top = pos.t + 'px';
    curLens.style.width = curData.lensW + 'px';
    curLens.style.height = curData.lensH + 'px';
    curLens.style.backgroundPosition = '-' + curData.lensBgX + 'px -' + curData.lensBgY + 'px';
    curLarge.style.left = '-' + curData.largeL + 'px';
    curLarge.style.top = '-' + curData.largeT + 'px';
    curLarge.style.width = curData.largeW + 'px';
    curLarge.style.height = curData.largeH + 'px';
  },
      updateLensOnLoad = function updateLensOnLoad(idx, thumb, large, largeWrapper) {
    var lens = $('#' + idx + '-lens'),
        textWrapper = null;

    if (data[idx].status === 1) {
      textWrapper = document.createElement('div');
      textWrapper.className = 'magnifier-loader-text';
      lens.className = 'magnifier-loader hidden';
      textWrapper.appendChild(document.createTextNode('Loading...'));
      lens.appendChild(textWrapper);
    } else if (data[idx].status === 2) {
      lens.className = 'magnifier-lens hidden';
      lens.removeChild(lens.childNodes[0]);
      lens.style.background = 'url(' + thumb.src + ') no-repeat 0 0 scroll';
      large.id = idx + '-large';
      large.style.width = data[idx].largeW + 'px';
      large.style.height = data[idx].largeH + 'px';
      large.className = 'magnifier-large hidden';

      if (data[idx].mode === 'inside') {
        lens.appendChild(large);
      } else {
        largeWrapper.appendChild(large);
      }
    }

    lens.style.width = data[idx].lensW + 'px';
    lens.style.height = data[idx].lensH + 'px';
  },
      getMousePos = function getMousePos() {
    var xPos = pos.x - curData.x,
        yPos = pos.y - curData.y,
        t = 0,
        l = 0;
    inBounds = xPos < 0 || yPos < 0 || xPos > curData.w || yPos > curData.h ? false : true;
    l = xPos - curData.lensW / 2;
    t = yPos - curData.lensH / 2;

    if (curData.mode !== 'inside') {
      if (xPos < curData.lensW / 2) {
        l = 0;
      }

      if (yPos < curData.lensH / 2) {
        t = 0;
      }

      if (xPos - curData.w + curData.lensW / 2 > 0) {
        l = curData.w - (curData.lensW + 2);
      }

      if (yPos - curData.h + curData.lensH / 2 > 0) {
        t = curData.h - (curData.lensH + 2);
      }
    }

    pos.l = Math.round(l);
    pos.t = Math.round(t);
    curData.lensBgX = pos.l + 1;
    curData.lensBgY = pos.t + 1;

    if (curData.mode === 'inside') {
      curData.largeL = Math.round(xPos * (curData.zoom - curData.lensW / curData.w));
      curData.largeT = Math.round(yPos * (curData.zoom - curData.lensH / curData.h));
    } else {
      curData.largeL = Math.round(curData.lensBgX * curData.zoom * (curData.largeWrapperW / curData.w));
      curData.largeT = Math.round(curData.lensBgY * curData.zoom * (curData.largeWrapperH / curData.h));
    }
  },
      zoomInOut = function zoomInOut(e) {
    var delta = e.wheelDelta > 0 || e.detail < 0 ? 0.1 : -0.1,
        handler = curData.onzoom,
        multiplier = 1,
        w = 0,
        h = 0;

    if (e.preventDefault) {
      e.preventDefault();
    }

    e.returnValue = false;
    curData.zoom = Math.round((curData.zoom + delta) * 10) / 10;

    if (curData.zoom >= curData.zoomMax) {
      curData.zoom = curData.zoomMax;
    } else if (curData.zoom >= curData.zoomMin) {
      curData.lensW = Math.round(curData.w / curData.zoom);
      curData.lensH = Math.round(curData.h / curData.zoom);

      if (curData.mode === 'inside') {
        w = curData.w;
        h = curData.h;
      } else {
        w = curData.largeWrapperW;
        h = curData.largeWrapperH;
        multiplier = curData.largeWrapperW / curData.w;
      }

      curData.largeW = Math.round(curData.zoom * w);
      curData.largeH = Math.round(curData.zoom * h);
      getMousePos();
      updateLensOnZoom();

      if (handler !== null) {
        handler({
          thumb: curThumb,
          lens: curLens,
          large: curLarge,
          x: pos.x,
          y: pos.y,
          zoom: Math.round(curData.zoom * multiplier * 10) / 10,
          w: curData.lensW,
          h: curData.lensH
        });
      }
    } else {
      curData.zoom = curData.zoomMin;
    }
  },
      onThumbEnter = function onThumbEnter() {
    curData = data[curIdx];
    curLens = $('#' + curIdx + '-lens');

    if (curData.status === 2) {
      curLens.className = 'magnifier-lens';

      if (curData.zoomAttached === false) {
        if (curData.zoomable !== undefined && curData.zoomable === true) {
          evt.attach('mousewheel', curLens, zoomInOut);

          if (window.addEventListener) {
            curLens.addEventListener('DOMMouseScroll', function (e) {
              zoomInOut(e);
            });
          }
        }

        curData.zoomAttached = true;
      }

      curLarge = $('#' + curIdx + '-large');
      curLarge.className = 'magnifier-large';
    } else if (curData.status === 1) {
      curLens.className = 'magnifier-loader';
    }
  },
      onThumbLeave = function onThumbLeave() {
    if (curData.status > 0) {
      var handler = curData.onthumbleave;

      if (handler !== null) {
        handler({
          thumb: curThumb,
          lens: curLens,
          large: curLarge,
          x: pos.x,
          y: pos.y
        });
      }

      if (curLens.className.indexOf('hidden') === -1) {
        curLens.className += ' hidden';
        curThumb.className = curData.thumbCssClass;

        if (curLarge !== null) {
          curLarge.className += ' hidden';
        }
      }
    }
  },
      move = function move() {
    if (status !== curData.status) {
      onThumbEnter();
    }

    if (curData.status > 0) {
      curThumb.className = curData.thumbCssClass + ' opaque';

      if (curData.status === 1) {
        curLens.className = 'magnifier-loader';
      } else if (curData.status === 2) {
        curLens.className = 'magnifier-lens';
        curLarge.className = 'magnifier-large';
        curLarge.style.left = '-' + curData.largeL + 'px';
        curLarge.style.top = '-' + curData.largeT + 'px';
      }

      curLens.style.left = pos.l + 'px';
      curLens.style.top = pos.t + 'px';
      curLens.style.backgroundPosition = '-' + curData.lensBgX + 'px -' + curData.lensBgY + 'px';
      var handler = curData.onthumbmove;

      if (handler !== null) {
        handler({
          thumb: curThumb,
          lens: curLens,
          large: curLarge,
          x: pos.x,
          y: pos.y
        });
      }
    }

    status = curData.status;
  },
      setThumbData = function setThumbData(thumb, thumbData) {
    var thumbBounds = thumb.getBoundingClientRect(),
        w = 0,
        h = 0;
    thumbData.x = thumbBounds.left;
    thumbData.y = thumbBounds.top;
    thumbData.w = Math.round(thumbBounds.right - thumbData.x);
    thumbData.h = Math.round(thumbBounds.bottom - thumbData.y);
    thumbData.lensW = Math.round(thumbData.w / thumbData.zoom);
    thumbData.lensH = Math.round(thumbData.h / thumbData.zoom);

    if (thumbData.mode === 'inside') {
      w = thumbData.w;
      h = thumbData.h;
    } else {
      w = thumbData.largeWrapperW;
      h = thumbData.largeWrapperH;
    }

    thumbData.largeW = Math.round(thumbData.zoom * w);
    thumbData.largeH = Math.round(thumbData.zoom * h);
  };

  this.attach = function (options) {
    if (options.thumb === undefined) {
      throw {
        name: 'Magnifier error',
        message: 'Please set thumbnail',
        toString: function toString() {
          return this.name + ": " + this.message;
        }
      };
    }

    var thumb = $(options.thumb),
        i = 0;

    if (thumb.length !== undefined) {
      for (i; i < thumb.length; i += 1) {
        options.thumb = thumb[i];
        this.set(options);
      }
    } else {
      options.thumb = thumb;
      this.set(options);
    }
  };

  this.setThumb = function (thumb) {
    curThumb = thumb;
  };

  this.set = function (options) {
    if (data[options.thumb.id] !== undefined) {
      curThumb = options.thumb;
      return false;
    }

    var thumbObj = new Image(),
        largeObj = new Image(),
        thumb = options.thumb,
        idx = thumb.id,
        zoomable = null,
        largeUrl = null,
        largeWrapper = $('#' + options.largeWrapper) || $('#' + thumb.getAttribute('data-large-img-wrapper')) || $('#' + curData.largeWrapperId),
        zoom = options.zoom || thumb.getAttribute('data-zoom') || gZoom,
        zoomMin = options.zoomMin || thumb.getAttribute('data-zoom-min') || gZoomMin,
        zoomMax = options.zoomMax || thumb.getAttribute('data-zoom-max') || gZoomMax,
        mode = options.mode || thumb.getAttribute('data-mode') || gMode,
        onthumbenter = options.onthumbenter !== undefined ? options.onthumbenter : curData.onthumbenter,
        onthumbleave = options.onthumbleave !== undefined ? options.onthumbleave : curData.onthumbleave,
        onthumbmove = options.onthumbmove !== undefined ? options.onthumbmove : curData.onthumbmove,
        onzoom = options.onzoom !== undefined ? options.onzoom : curData.onzoom;

    if (options.large === undefined) {
      largeUrl = options.thumb.getAttribute('data-large-img-url') !== null ? options.thumb.getAttribute('data-large-img-url') : options.thumb.src;
    } else {
      largeUrl = options.large;
    }

    if (largeWrapper === null && mode !== 'inside') {
      throw {
        name: 'Magnifier error',
        message: 'Please specify large image wrapper DOM element',
        toString: function toString() {
          return this.name + ": " + this.message;
        }
      };
    }

    if (options.zoomable !== undefined) {
      zoomable = options.zoomable;
    } else if (thumb.getAttribute('data-zoomable') !== null) {
      zoomable = thumb.getAttribute('data-zoomable') === 'true';
    } else if (curData.zoomable !== undefined) {
      zoomable = curData.zoomable;
    }

    if (thumb.id === '') {
      idx = thumb.id = 'magnifier-item-' + gId;
      gId += 1;
    }

    createLens(thumb, idx);
    data[idx] = {
      zoom: zoom,
      zoomMin: zoomMin,
      zoomMax: zoomMax,
      mode: mode,
      zoomable: zoomable,
      thumbCssClass: thumb.className,
      zoomAttached: false,
      status: 0,
      largeUrl: largeUrl,
      largeWrapperId: mode === 'outside' ? largeWrapper.id : null,
      largeWrapperW: mode === 'outside' ? largeWrapper.offsetWidth : null,
      largeWrapperH: mode === 'outside' ? largeWrapper.offsetHeight : null,
      onzoom: onzoom,
      onthumbenter: onthumbenter,
      onthumbleave: onthumbleave,
      onthumbmove: onthumbmove
    };
    evt.attach('mouseover', thumb, function (e, src) {
      if (curData.status !== 0) {
        onThumbLeave();
      }

      curIdx = src.id;
      curThumb = src;
      onThumbEnter(src);
      setThumbData(curThumb, curData);
      pos.x = e.clientX;
      pos.y = e.clientY;
      getMousePos();
      move();
      var handler = curData.onthumbenter;

      if (handler !== null) {
        handler({
          thumb: curThumb,
          lens: curLens,
          large: curLarge,
          x: pos.x,
          y: pos.y
        });
      }
    }, false);
    evt.attach('mousemove', thumb, function (e, src) {
      isOverThumb = 1;
    });
    evt.attach('load', thumbObj, function () {
      data[idx].status = 1;
      setThumbData(thumb, data[idx]);
      updateLensOnLoad(idx);
      evt.attach('load', largeObj, function () {
        data[idx].status = 2;
        updateLensOnLoad(idx, thumb, largeObj, largeWrapper);
      });
      largeObj.src = data[idx].largeUrl;
    });
    thumbObj.src = thumb.src;
  };

  evt.attach('mousemove', document, function (e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
    getMousePos();

    if (inBounds === true) {
      move();
    } else {
      if (isOverThumb !== 0) {
        onThumbLeave();
      }

      isOverThumb = 0;
    }
  }, false);
  evt.attach('scroll', window, function () {
    if (curThumb !== null) {
      setThumbData(curThumb, curData);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Magnifier);

/***/ })

}]);