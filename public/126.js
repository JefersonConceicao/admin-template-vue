(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/advanced_modals.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/advanced_modals.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "modals",
  data: function data() {
    return {
      stop_close: false
    };
  },
  methods: {
    stop: function stop(e) {
      if (!this.stop_close) {
        return e.cancel();
      }
    },
    shown: function shown() {
      alert("Modal opened");
    },
    open_modal: function open_modal() {
      console.log(this.$refs);
      this.$refs.modal21.show();
    },
    hidden: function hidden() {
      alert("Modal Hidden");
    },
    success: function success() {
      alert("OK Clicked");
    },
    cancel: function cancel() {
      alert("Close Clicked");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/advanced_modals.vue?vue&type=template&id=0c978dd7&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/advanced_modals.vue?vue&type=template&id=0c978dd7& ***!
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
  return _c(
    "div",
    [
      _c(
        "b-card",
        {
          staticClass: "bg-primary-card",
          attrs: { header: "Modals", "header-tag": "h4" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-lg-12" },
              [
                _c(
                  "b-card",
                  { staticClass: "bg-primary-card" },
                  [
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal1",
                            modifiers: { modal1: true }
                          }
                        ],
                        staticClass: "mt-3 mb-3"
                      },
                      [_vm._v("Launch demo modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        staticClass: "mt-3 mb-3",
                        on: { click: _vm.open_modal }
                      },
                      [_vm._v("Launch modal with ref")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "modal1",
                        attrs: { id: "modal1", title: "Modal" }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "modal21",
                        attrs: { id: "modal21", title: "Modal" }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-12 mt-3" },
              [
                _c(
                  "b-card",
                  { staticClass: "bg-info-card" },
                  [
                    _c("h4", [_vm._v("Stop closing on backdrop click")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal2",
                            modifiers: { modal2: true }
                          }
                        ]
                      },
                      [_vm._v("Launch demo modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "modal2",
                        attrs: {
                          "no-close-on-backdrop": "",
                          id: "modal2",
                          title: "Modal"
                        }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal4",
                            modifiers: { modal4: true }
                          }
                        ]
                      },
                      [_vm._v("Launch small modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal4",
                          title: "Small Modal",
                          size: "sm"
                        }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal5",
                            modifiers: { modal5: true }
                          }
                        ]
                      },
                      [_vm._v("Launch Normal modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal5",
                          title: "Normal Modal",
                          size: "md"
                        }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal6",
                            modifiers: { modal6: true }
                          }
                        ]
                      },
                      [_vm._v("Launch Large modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal6",
                          title: "Large Modal",
                          size: "lg"
                        }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c("h4", [_vm._v("Background Primary Modal ")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal8",
                            modifiers: { modal8: true }
                          }
                        ]
                      },
                      [_vm._v("Primary modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal8",
                          title: "Priamry Modal",
                          "header-bg-variant": "primary",
                          "header-text-variant": "light",
                          "footer-bg-variant": "primary",
                          "footer-text-variant": "light",
                          size: "md"
                        }
                      },
                      [_c("h1", [_vm._v(" Primary modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c("h4", [_vm._v("Background Info Modal ")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal9",
                            modifiers: { modal9: true }
                          }
                        ]
                      },
                      [_vm._v("Info modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal9",
                          title: "Info Modal",
                          "header-bg-variant": "info",
                          "header-text-variant": "light",
                          "footer-bg-variant": "info",
                          "footer-text-variant": "light"
                        }
                      },
                      [_c("h1", [_vm._v(" Info modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c("h4", [_vm._v("Background Warning Modal ")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal10",
                            modifiers: { modal10: true }
                          }
                        ]
                      },
                      [_vm._v("Warning modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal10",
                          title: "Warning Modal",
                          "header-bg-variant": "warning",
                          "header-text-variant": "light",
                          "footer-bg-variant": "warning",
                          "footer-text-variant": "light"
                        }
                      },
                      [_c("h1", [_vm._v(" Warning modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c("h4", [_vm._v("Background Danger Modal ")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal11",
                            modifiers: { modal11: true }
                          }
                        ]
                      },
                      [_vm._v("Danger Modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal11",
                          title: "Danger Modal",
                          "header-bg-variant": "danger",
                          "header-text-variant": "light",
                          "footer-bg-variant": "danger",
                          "footer-text-variant": "light"
                        }
                      },
                      [_c("h1", [_vm._v("Danger modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c("h4", [_vm._v("Background Success Modal ")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal12",
                            modifiers: { modal12: true }
                          }
                        ]
                      },
                      [_vm._v("Success Modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal12",
                          title: "Success Modal",
                          "header-bg-variant": "success",
                          "header-text-variant": "light",
                          "footer-bg-variant": "success",
                          "footer-text-variant": "light"
                        }
                      },
                      [_c("h1", [_vm._v(" Success modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-4 mt-3" },
              [
                _c(
                  "b-card",
                  [
                    _c("h4", [_vm._v("Background Secondary Modal ")]),
                    _vm._v(" "),
                    _c(
                      "b-btn",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal13",
                            modifiers: { modal13: true }
                          }
                        ]
                      },
                      [_vm._v("Secondary modal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        attrs: {
                          id: "modal13",
                          title: "Deafult Modal",
                          "header-bg-variant": "secondary",
                          "header-text-variant": "light",
                          "footer-bg-variant": "secondary",
                          "footer-text-variant": "light"
                        }
                      },
                      [_c("h1", [_vm._v("modal")])]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/components/pages/advanced_modals.vue":
/*!********************************************************!*\
  !*** ./resources/components/pages/advanced_modals.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _advanced_modals_vue_vue_type_template_id_0c978dd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced_modals.vue?vue&type=template&id=0c978dd7& */ "./resources/components/pages/advanced_modals.vue?vue&type=template&id=0c978dd7&");
/* harmony import */ var _advanced_modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced_modals.vue?vue&type=script&lang=js& */ "./resources/components/pages/advanced_modals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _advanced_modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _advanced_modals_vue_vue_type_template_id_0c978dd7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _advanced_modals_vue_vue_type_template_id_0c978dd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/advanced_modals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/advanced_modals.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/components/pages/advanced_modals.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_advanced_modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./advanced_modals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/advanced_modals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_advanced_modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/advanced_modals.vue?vue&type=template&id=0c978dd7&":
/*!***************************************************************************************!*\
  !*** ./resources/components/pages/advanced_modals.vue?vue&type=template&id=0c978dd7& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_advanced_modals_vue_vue_type_template_id_0c978dd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./advanced_modals.vue?vue&type=template&id=0c978dd7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/advanced_modals.vue?vue&type=template&id=0c978dd7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_advanced_modals_vue_vue_type_template_id_0c978dd7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_advanced_modals_vue_vue_type_template_id_0c978dd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);