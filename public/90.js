(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/product_gallery.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/product_gallery.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'product_gallery',
  data: function data() {
    return {
      search: '',
      isActive: '',
      list: [{
        src: __webpack_require__(/*! img/ecommerce/product.png */ "./resources/img/ecommerce/product.png"),
        price: "$800",
        mrp: "$1000",
        name: "US-Polo T-shirt",
        sale: "20%",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
      }, {
        src: __webpack_require__(/*! img/ecommerce/product2.png */ "./resources/img/ecommerce/product2.png"),
        price: "$450.45",
        mrp: "$585",
        name: "US-Polo Red Shirt",
        sale: "23%",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
      }, {
        src: __webpack_require__(/*! img/ecommerce/product3.png */ "./resources/img/ecommerce/product3.png"),
        price: "$280",
        mrp: "$350",
        name: "Gift box",
        sale: "20%",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
      }, {
        src: __webpack_require__(/*! img/ecommerce/product4.png */ "./resources/img/ecommerce/product4.png"),
        price: "$1000",
        mrp: "1500",
        name: "Apple Macbook pro",
        sale: "33%",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
      }, {
        src: __webpack_require__(/*! img/ecommerce/product5.png */ "./resources/img/ecommerce/product5.png"),
        price: "$1000",
        mrp: "1500",
        name: "Vintage classic camera",
        sale: "33%",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
      }, {
        src: __webpack_require__(/*! img/ecommerce/product7.png */ "./resources/img/ecommerce/product7.png"),
        price: "$280",
        mrp: "$350",
        name: "Gray T-Shirt",
        sale: "20%",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
      }, {
        src: __webpack_require__(/*! img/ecommerce/product8.png */ "./resources/img/ecommerce/product8.png"),
        price: "$450.45",
        mrp: "$585",
        name: "Stereo headset",
        sale: "23%",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
      }, {
        src: __webpack_require__(/*! img/ecommerce/product6.png */ "./resources/img/ecommerce/product6.png"),
        price: "$800",
        mrp: "$1000",
        name: "Mobile phone",
        sale: "20%",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
      }]
    };
  },
  methods: {
    listType: function listType() {
      this.isActive = 1;
    },
    gridType: function gridType() {
      this.isActive = 0;
    }
  },
  computed: {
    filteredproduct: function filteredproduct() {
      var self = this;
      return this.list.filter(function (cust) {
        return cust.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/product_gallery.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/product_gallery.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.view-icons{\n    font-size: medium;\n}\n.product_box{\n    width:23.7%\n}\n.sale-tag{\n    margin-top: 10px;\n    position: absolute;\n}\n.product_description{\n    display: none;\n}\n.sale-tag:after{\n    content: ' ';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 30px;\n    right: auto;\n    top: 0px;\n    bottom: auto;\n    border: 10px solid;\n    border-color: #ff6666  transparent transparent transparent;\n}\n.sale-tag:before{\n    content: ' ';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: 30px;\n    right: auto;\n    top: -1px;\n    bottom: auto;\n    border: 10px solid;\n    border-color:  transparent transparent  #ff6666 transparent;\n}\n.fullwidth{\n    width: 100%;\n}\n.fullwidth .product_description{\n    display: block;\n}\n@media(min-width: 768px) and (max-width:1024px){\n.product_box{\n        width:31.5%;\n}\n.fullwidth {\n        width:100%;\n}\n}\n@media(min-width:320px) and (max-width:425px) {\n.product_box{\n        width: 96%;\n}\n.fullwidth .card-body{\n        padding: 2.5rem;\n}\n}\n@media(min-width: 426px) and (max-width:767px){\n.product_box{\n        width:46.5%;\n}\n}\n.boxed .product_box{\n    width:23.5%\n}\n@media(min-width:768px) and (min-width:768px){\n.boxed .product_box{\n        width:30%\n}\n}\n@media(max-width:425px){\n.boxed .product_box{\n        width:100%\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/product_gallery.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/product_gallery.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./product_gallery.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/product_gallery.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/product_gallery.vue?vue&type=template&id=25ee2c36&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/product_gallery.vue?vue&type=template&id=25ee2c36& ***!
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
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6" }, [
        _c("div", { staticClass: "view-icons" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-8 col-sm-7 col-xl-7 ml-auto" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search,
                    expression: "search"
                  }
                ],
                staticClass: "form-control ml-2",
                attrs: { type: "text", placeholder: "Search here" },
                domProps: { value: _vm.search },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 col-sm-3 col-xl-2" }, [
              _c("i", {
                staticClass: "ti-layout-grid3-alt m-2",
                on: { click: _vm.gridType }
              }),
              _vm._v(" "),
              _c("i", {
                staticClass: "ti-layout-list-thumb m-2",
                on: { click: _vm.listType }
              })
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "products mt-3" },
      _vm._l(_vm.filteredproduct, function(element, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "product_box d-inline-block m-2 card",
            class: { fullwidth: _vm.isActive == 1 }
          },
          [
            _c("div", { class: { row: _vm.isActive == 1 } }, [
              _c(
                "div",
                {
                  staticClass: "product_image",
                  class: { "col-sm-3": _vm.isActive == 1 }
                },
                [
                  _c(
                    "span",
                    { staticClass: "bg-danger text-white pl-2 pr-2 sale-tag" },
                    [_vm._v(_vm._s(element.sale))]
                  ),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: { src: element.src, alt: "product image" }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "card-body",
                  class: { "col-sm-9": _vm.isActive == 1 }
                },
                [
                  _c("div", { class: { row: _vm.isActive == 1 } }, [
                    _c(
                      "div",
                      {
                        staticClass: "product_description",
                        class: { "col-sm-9": _vm.isActive == 1 }
                      },
                      [
                        _c("h3", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(element.name))
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(element.description))])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "product_details",
                        class: { "col-sm-3": _vm.isActive == 1 }
                      },
                      [
                        _c("h4", { staticClass: "mt-2" }, [
                          _vm._v(_vm._s(element.price))
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-secondary mb-0" }, [
                          _vm._v("M.R.P: "),
                          _c("del", [_vm._v(" " + _vm._s(element.mrp))])
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            staticClass: "mb-0",
                            class: { "d-none": _vm.isActive == 1 }
                          },
                          [_vm._v(_vm._s(element.name))]
                        ),
                        _vm._v(" "),
                        _vm._m(1, true),
                        _vm._v(" "),
                        _c("button", { staticClass: "btn btn-primary" }, [
                          _vm._v(
                            "\n                        Add to cart\n                    "
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ])
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("div", [_c("h4", [_vm._v("All products")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
      _vm._v(" "),
      _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
      _vm._v(" "),
      _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
      _vm._v(" "),
      _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
      _vm._v(" "),
      _c("span", { staticClass: "fa fa-star-half-o star_icon text-warning" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/components/pages/product_gallery.vue":
/*!********************************************************!*\
  !*** ./resources/components/pages/product_gallery.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_gallery_vue_vue_type_template_id_25ee2c36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product_gallery.vue?vue&type=template&id=25ee2c36& */ "./resources/components/pages/product_gallery.vue?vue&type=template&id=25ee2c36&");
/* harmony import */ var _product_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product_gallery.vue?vue&type=script&lang=js& */ "./resources/components/pages/product_gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _product_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product_gallery.vue?vue&type=style&index=0&lang=css& */ "./resources/components/pages/product_gallery.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _product_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_gallery_vue_vue_type_template_id_25ee2c36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_gallery_vue_vue_type_template_id_25ee2c36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/product_gallery.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/product_gallery.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/components/pages/product_gallery.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./product_gallery.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/product_gallery.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_gallery_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/product_gallery.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/components/pages/product_gallery.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./product_gallery.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/product_gallery.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/product_gallery.vue?vue&type=template&id=25ee2c36&":
/*!***************************************************************************************!*\
  !*** ./resources/components/pages/product_gallery.vue?vue&type=template&id=25ee2c36& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_gallery_vue_vue_type_template_id_25ee2c36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./product_gallery.vue?vue&type=template&id=25ee2c36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/product_gallery.vue?vue&type=template&id=25ee2c36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_gallery_vue_vue_type_template_id_25ee2c36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_gallery_vue_vue_type_template_id_25ee2c36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/img/ecommerce/product.png":
/*!*********************************************!*\
  !*** ./resources/img/ecommerce/product.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/product.png?921f475804236cccb1e348d8ea00ae2a";

/***/ }),

/***/ "./resources/img/ecommerce/product2.png":
/*!**********************************************!*\
  !*** ./resources/img/ecommerce/product2.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/product2.png?8d301375df448ee3e714523880e4068a";

/***/ }),

/***/ "./resources/img/ecommerce/product3.png":
/*!**********************************************!*\
  !*** ./resources/img/ecommerce/product3.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/product3.png?8d301375df448ee3e714523880e4068a";

/***/ }),

/***/ "./resources/img/ecommerce/product4.png":
/*!**********************************************!*\
  !*** ./resources/img/ecommerce/product4.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/product4.png?8d301375df448ee3e714523880e4068a";

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

/***/ })

}]);