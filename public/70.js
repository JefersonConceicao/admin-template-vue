(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dropdowns.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dropdowns.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _card_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.vue */ "./resources/components/pages/card/card.vue");
/* harmony import */ var bootstrap_multiselect_dist_js_bootstrap_multiselect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-multiselect/dist/js/bootstrap-multiselect.js */ "./node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect.js");
/* harmony import */ var bootstrap_multiselect_dist_js_bootstrap_multiselect_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_multiselect_dist_js_bootstrap_multiselect_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var select2_dist_js_select2_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! select2/dist/js/select2.min.js */ "./node_modules/select2/dist/js/select2.min.js");
/* harmony import */ var select2_dist_js_select2_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_select2_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var selectize_dist_js_standalone_selectize_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! selectize/dist/js/standalone/selectize.min.js */ "./node_modules/selectize/dist/js/standalone/selectize.min.js");
/* harmony import */ var selectize_dist_js_standalone_selectize_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(selectize_dist_js_standalone_selectize_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var selectric_public_jquery_selectric_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! selectric/public/jquery.selectric.js */ "./node_modules/selectric/public/jquery.selectric.js");
/* harmony import */ var selectric_public_jquery_selectric_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(selectric_public_jquery_selectric_js__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "dropdowns",
  data: function data() {
    return {
      image: "../../../img/authors/avatar.jpg"
    };
  },
  components: {
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    "use strict";

    $(document).ready(function () {
      $("#multiselect1").multiselect({
        buttonWidth: '160px'
      });
      $("#multiselect2").multiselect({
        enableFiltering: true,
        includeSelectAllOption: true,
        maxHeight: 300,
        dropUp: true
      });
      $("#select21").select2({
        theme: "bootstrap",
        placeholder: "single select"
      });
      $("#select22").select2({
        theme: "bootstrap",
        placeholder: "multi select"
      });

      function formatState(state) {
        if (!state.id) {
          return state.text;
        }

        var baseUrl = "images/flags";
        var $state = $('<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag"  width="20px" height="20px" /> ' + state.text + '</span>');
        return $state;
      }

      $("#select23").select2({
        templateResult: formatState,
        templateSelection: formatState,
        placeholder: "select with country flag",
        theme: "bootstrap"
      });
      $('#select24').select2({
        allowClear: true,
        theme: "bootstrap",
        placeholder: "select"
      });
      $('#select25').select2({
        allowClear: true,
        theme: "bootstrap",
        placeholder: "select"
      });
      $('#select26').select2({
        placeholder: "select",
        theme: "bootstrap"
      });
      $('#select-gear').selectize({
        sortField: 'text'
      });
      $("#selectize3").selectize({
        maxItems: 3
      });
      $('#selectize-tags1').selectize({
        plugins: ['restore_on_backspace'],
        delimiter: ',',
        persist: false,
        create: function create(input) {
          return {
            value: input,
            text: input
          };
        }
      });
      $('#selectize-tags2').selectize({
        plugins: ['remove_button'],
        delimiter: ',',
        persist: false,
        create: function create(input) {
          return {
            value: input,
            text: input
          };
        }
      });
      $('#selectize-tags3').selectize({
        plugins: ['drag_drop'],
        delimiter: ',',
        persist: false,
        create: function create(input) {
          return {
            value: input,
            text: input
          };
        }
      }); //Get selected option value

      var $selectValue = $('#select_value').find('strong');
      $selectValue.text($('#get_value').val());
      $('#get_value').selectric().on('change', function () {
        $selectValue.text($(this).val());
      }); //Get selected option value end
      //Set value

      $('#set_value').selectric();
      $('#set_first_option').on('click', function () {
        $('#set_value').prop('selectedIndex', 0).selectric('refresh');
      });
      $('#set_second_option').on('click', function () {
        $('#set_value').prop('selectedIndex', 1).selectric('refresh');
      });
      $('#set_third_option').on('click', function () {
        $('#set_value').prop('selectedIndex', 2).selectric('refresh');
      });
      $('#set_fourth_option').on('click', function () {
        $('#set_value').prop('selectedIndex', 3).selectric('refresh');
      }); //Set value end
      //Change options on the fly

      $('#dynamic').selectric();
      $('#bt_add_val').on('click', function () {
        var value = $.trim($('#add_val').val());
        $('#dynamic').append('<option>' + (value ? value : 'Empty') + '</option>').selectric('refresh');
        $('#add_val').val("");
      }); //Change options on the fly end
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dropdowns.vue?vue&type=style&index=6&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dropdowns.vue?vue&type=style&index=6&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.select2-dropdown,.selectric-open{\n    z-index: 9;\n}\n#set_first_option:active,#set_second_option:active,#set_third_option:active,#set_fourth_option:active,#bt_add_val:active{\n    color: #fff;\n}\n@media (max-width: 1024px) {\n.boxed .box-display{\n        display: none;\n}\n}\n.search .select2-container{\n    width: 92% !important;\n}\n@media(max-width:1024px){\n.search .select2-container{\n        width: 89% !important;\n}\n}\n@media(min-width: 375px) and (max-width: 768px){\n.search .select2-container{\n        width: 88% !important;\n}\n}\n@media(max-width:320px){\n.search .select2-container{\n        width: 85% !important;\n}\n}\n", ""]);

// exports


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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dropdowns.vue?vue&type=style&index=6&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dropdowns.vue?vue&type=style&index=6&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./dropdowns.vue?vue&type=style&index=6&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dropdowns.vue?vue&type=style&index=6&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dropdowns.vue?vue&type=template&id=31a2c3b6&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dropdowns.vue?vue&type=template&id=31a2c3b6& ***!
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
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            {
              attrs: { title: '<i class="fa fa-fw ti-widget-alt"></i> Select2' }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label",
                        attrs: { for: "select21" }
                      },
                      [
                        _vm._v(
                          "\n                                Select2 single select\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        staticClass: "form-control select2",
                        staticStyle: { width: "100%" },
                        attrs: { id: "select21" }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select value...")
                        ]),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Alaskan/Hawaiian Time Zone" } },
                          [
                            _c("option", { attrs: { value: "AK" } }, [
                              _vm._v("Alaska")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "HI" } }, [
                              _vm._v("Hawaii")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Pacific Time Zone" } },
                          [
                            _c("option", { attrs: { value: "CA" } }, [
                              _vm._v("California")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NV" } }, [
                              _vm._v("Nevada")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "OR" } }, [
                              _vm._v("Oregon")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "WA" } }, [
                              _vm._v("Washington")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Mountain Time Zone" } },
                          [
                            _c("option", { attrs: { value: "AZ" } }, [
                              _vm._v("Arizona")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "CO" } }, [
                              _vm._v("Colorado")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ID" } }, [
                              _vm._v("Idaho")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MT" } }, [
                              _vm._v("Montana")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NE" } }, [
                              _vm._v("Nebraska")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NM" } }, [
                              _vm._v("New Mexico")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ND" } }, [
                              _vm._v(
                                "\n                                        North Dakota\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "UT" } }, [
                              _vm._v("Utah")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "WY" } }, [
                              _vm._v("Wyoming")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Central Time Zone" } },
                          [
                            _c("option", { attrs: { value: "AL" } }, [
                              _vm._v("Alabama")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "AR" } }, [
                              _vm._v("Arkansas")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "IL" } }, [
                              _vm._v("Illinois")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "IA" } }, [
                              _vm._v("Iowa")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "KS" } }, [
                              _vm._v("Kansas")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "KY" } }, [
                              _vm._v("Kentucky")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "LA" } }, [
                              _vm._v("Louisiana")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MN" } }, [
                              _vm._v("Minnesota")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MS" } }, [
                              _vm._v(
                                "\n                                        Mississippi\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MO" } }, [
                              _vm._v("Missouri")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "OK" } }, [
                              _vm._v("Oklahoma")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "SD" } }, [
                              _vm._v(
                                "\n                                        South Dakota\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "TX" } }, [
                              _vm._v("Texas")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "TN" } }, [
                              _vm._v("Tennessee")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "WI" } }, [
                              _vm._v("Wisconsin")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Eastern Time Zone" } },
                          [
                            _c("option", { attrs: { value: "CT" } }, [
                              _vm._v(
                                "\n                                        Connecticut\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "DE" } }, [
                              _vm._v("Delaware")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "FL" } }, [
                              _vm._v("Florida")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "GA" } }, [
                              _vm._v("Georgia")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "IN" } }, [
                              _vm._v("Indiana")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ME" } }, [
                              _vm._v("Maine")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MD" } }, [
                              _vm._v("Maryland")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MA" } }, [
                              _vm._v(
                                "\n                                        Massachusetts\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MI" } }, [
                              _vm._v("Michigan")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NH" } }, [
                              _vm._v(
                                "\n                                        New Hampshire\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NJ" } }, [
                              _vm._v("New Jersey")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NY" } }, [
                              _vm._v("New York")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NC" } }, [
                              _vm._v(
                                "\n                                        North Carolina\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "OH" } }, [
                              _vm._v("Ohio")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "PA" } }, [
                              _vm._v(
                                "\n                                        Pennsylvania\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "RI" } }, [
                              _vm._v(
                                "\n                                        Rhode Island\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "SC" } }, [
                              _vm._v(
                                "\n                                        South Carolina\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "VT" } }, [
                              _vm._v("Vermont")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "VA" } }, [
                              _vm._v("Virginia")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "WV" } }, [
                              _vm._v(
                                "\n                                        West Virginia\n                                    "
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label",
                        attrs: { for: "select22" }
                      },
                      [
                        _vm._v(
                          "\n                                Select2 multi select\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        staticClass: "form-control select2",
                        staticStyle: { width: "100%" },
                        attrs: { id: "select22", multiple: "" }
                      },
                      [
                        _c(
                          "optgroup",
                          { attrs: { label: "Alaskan/Hawaiian Time Zone" } },
                          [
                            _c("option", { attrs: { value: "AK" } }, [
                              _vm._v("Alaska")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "HI" } }, [
                              _vm._v("Hawaii")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Pacific Time Zone" } },
                          [
                            _c("option", { attrs: { value: "CA" } }, [
                              _vm._v("California")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NV" } }, [
                              _vm._v("Nevada")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "OR" } }, [
                              _vm._v("Oregon")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "WA" } }, [
                              _vm._v("Washington")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Mountain Time Zone" } },
                          [
                            _c("option", { attrs: { value: "AZ" } }, [
                              _vm._v("Arizona")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "CO" } }, [
                              _vm._v("Colorado")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ID" } }, [
                              _vm._v("Idaho")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MT" } }, [
                              _vm._v("Montana")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NE" } }, [
                              _vm._v("Nebraska")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NM" } }, [
                              _vm._v("New Mexico")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ND" } }, [
                              _vm._v(
                                "\n                                        North Dakota\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "UT" } }, [
                              _vm._v("Utah")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "WY" } }, [
                              _vm._v("Wyoming")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Central Time Zone" } },
                          [
                            _c("option", { attrs: { value: "AL" } }, [
                              _vm._v("Alabama")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "AR" } }, [
                              _vm._v("Arkansas")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "IL" } }, [
                              _vm._v("Illinois")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "IA" } }, [
                              _vm._v("Iowa")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "KS" } }, [
                              _vm._v("Kansas")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "KY" } }, [
                              _vm._v("Kentucky")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "LA" } }, [
                              _vm._v("Louisiana")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MN" } }, [
                              _vm._v("Minnesota")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MS" } }, [
                              _vm._v(
                                "\n                                        Mississippi\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MO" } }, [
                              _vm._v("Missouri")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "OK" } }, [
                              _vm._v("Oklahoma")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "SD" } }, [
                              _vm._v(
                                "\n                                        South Dakota\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "TX" } }, [
                              _vm._v("Texas")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "TN" } }, [
                              _vm._v("Tennessee")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "WI" } }, [
                              _vm._v("Wisconsin")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Eastern Time Zone" } },
                          [
                            _c("option", { attrs: { value: "CT" } }, [
                              _vm._v(
                                "\n                                        Connecticut\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "DE" } }, [
                              _vm._v("Delaware")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "FL" } }, [
                              _vm._v("Florida")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "GA" } }, [
                              _vm._v("Georgia")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "IN" } }, [
                              _vm._v("Indiana")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ME" } }, [
                              _vm._v("Maine")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MD" } }, [
                              _vm._v("Maryland")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MA" } }, [
                              _vm._v(
                                "\n                                        Massachusetts\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MI" } }, [
                              _vm._v("Michigan")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NH" } }, [
                              _vm._v(
                                "\n                                        New Hampshire\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NJ" } }, [
                              _vm._v("New Jersey")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NY" } }, [
                              _vm._v("New York")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NC" } }, [
                              _vm._v(
                                "\n                                        North Carolina\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "OH" } }, [
                              _vm._v("Ohio")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "PA" } }, [
                              _vm._v(
                                "\n                                        Pennsylvania\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "RI" } }, [
                              _vm._v(
                                "\n                                        Rhode Island\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "SC" } }, [
                              _vm._v(
                                "\n                                        South Carolina\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "VT" } }, [
                              _vm._v("Vermont")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "VA" } }, [
                              _vm._v("Virginia")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "WV" } }, [
                              _vm._v(
                                "\n                                        West Virginia\n                                    "
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label",
                        attrs: { for: "select23" }
                      },
                      [
                        _vm._v(
                          "\n                                Select2 single select with country flag\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        staticClass: "form-control select2",
                        staticStyle: { width: "100%" },
                        attrs: { id: "select23" }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select a value...")
                        ]),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Alaskan/Hawaiian Time Zone" } },
                          [
                            _c("option", { attrs: { value: "AK" } }, [
                              _vm._v("Alaska")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "HI" } }, [
                              _vm._v("Hawaii")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Pacific Time Zone" } },
                          [
                            _c("option", { attrs: { value: "CA" } }, [
                              _vm._v("California")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NV" } }, [
                              _vm._v("Nevada")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "OR" } }, [
                              _vm._v("Oregon")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "WA" } }, [
                              _vm._v("Washington")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Mountain Time Zone" } },
                          [
                            _c("option", { attrs: { value: "AZ" } }, [
                              _vm._v("Arizona")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "CO" } }, [
                              _vm._v("Colorado")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ID" } }, [
                              _vm._v("Idaho")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MT" } }, [
                              _vm._v("Montana")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NE" } }, [
                              _vm._v("Nebraska")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NM" } }, [
                              _vm._v("New Mexico")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ND" } }, [
                              _vm._v(
                                "\n                                        North Dakota\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "UT" } }, [
                              _vm._v("Utah")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "WY" } }, [
                              _vm._v("Wyoming")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Central Time Zone" } },
                          [
                            _c("option", { attrs: { value: "AL" } }, [
                              _vm._v("Alabama")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "AR" } }, [
                              _vm._v("Arkansas")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "IL" } }, [
                              _vm._v("Illinois")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "IA" } }, [
                              _vm._v("Iowa")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "KS" } }, [
                              _vm._v("Kansas")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "KY" } }, [
                              _vm._v("Kentucky")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "LA" } }, [
                              _vm._v("Louisiana")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MN" } }, [
                              _vm._v("Minnesota")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MS" } }, [
                              _vm._v(
                                "\n                                        Mississippi\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MO" } }, [
                              _vm._v("Missouri")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "OK" } }, [
                              _vm._v("Oklahoma")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "SD" } }, [
                              _vm._v(
                                "\n                                        South Dakota\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "TX" } }, [
                              _vm._v("Texas")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "TN" } }, [
                              _vm._v("Tennessee")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "WI" } }, [
                              _vm._v("Wisconsin")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "optgroup",
                          { attrs: { label: "Eastern Time Zone" } },
                          [
                            _c("option", { attrs: { value: "CT" } }, [
                              _vm._v(
                                "\n                                        Connecticut\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "DE" } }, [
                              _vm._v("Delaware")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "FL" } }, [
                              _vm._v("Florida")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "GA" } }, [
                              _vm._v("Georgia")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "IN" } }, [
                              _vm._v("Indiana")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "ME" } }, [
                              _vm._v("Maine")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MD" } }, [
                              _vm._v("Maryland")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MA" } }, [
                              _vm._v(
                                "\n                                        Massachusetts\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "MI" } }, [
                              _vm._v("Michigan")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NH" } }, [
                              _vm._v(
                                "\n                                        New Hampshire\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NJ" } }, [
                              _vm._v("New Jersey")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NY" } }, [
                              _vm._v("New York")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "NC" } }, [
                              _vm._v(
                                "\n                                        North Carolina\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "OH" } }, [
                              _vm._v("Ohio")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "PA" } }, [
                              _vm._v(
                                "\n                                        Pennsylvania\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "RI" } }, [
                              _vm._v(
                                "\n                                        Rhode Island\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "SC" } }, [
                              _vm._v(
                                "\n                                        South Carolina\n                                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "VT" } }, [
                              _vm._v("Vermont")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "VA" } }, [
                              _vm._v("Virginia")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "WV" } }, [
                              _vm._v(
                                "\n                                        West Virginia\n                                    "
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label",
                        attrs: { for: "select24" }
                      },
                      [
                        _vm._v(
                          "\n                                Select2 append\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "input-group mb-3 select2-bootstrap-append search"
                          },
                          [
                            _c(
                              "select",
                              {
                                staticClass: "form-control custom-select",
                                attrs: { id: "select24" }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select value...")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "optgroup",
                                  {
                                    attrs: {
                                      label: "Alaskan/Hawaiian Time Zone"
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "AK" } }, [
                                      _vm._v("Alaska")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "HI" } }, [
                                      _vm._v("Hawaii")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "optgroup",
                                  { attrs: { label: "Pacific Time Zone" } },
                                  [
                                    _c("option", { attrs: { value: "CA" } }, [
                                      _vm._v("California")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "NV" } }, [
                                      _vm._v("Nevada")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "OR" } }, [
                                      _vm._v("Oregon")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "WA" } }, [
                                      _vm._v("Washington")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "optgroup",
                                  { attrs: { label: "Mountain Time Zone" } },
                                  [
                                    _c("option", { attrs: { value: "AZ" } }, [
                                      _vm._v("Arizona")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "CO" } }, [
                                      _vm._v("Colorado")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "ID" } }, [
                                      _vm._v("Idaho")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "MT" } }, [
                                      _vm._v("Montana")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "NE" } }, [
                                      _vm._v("Nebraska")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "NM" } }, [
                                      _vm._v("New Mexico")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "ND" } }, [
                                      _vm._v(
                                        "\n                                                    North Dakota\n                                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "UT" } }, [
                                      _vm._v("Utah")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "WY" } }, [
                                      _vm._v("Wyoming")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "optgroup",
                                  { attrs: { label: "Central Time Zone" } },
                                  [
                                    _c("option", { attrs: { value: "AL" } }, [
                                      _vm._v("Alabama")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "AR" } }, [
                                      _vm._v("Arkansas")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "IL" } }, [
                                      _vm._v("Illinois")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "IA" } }, [
                                      _vm._v("Iowa")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "KS" } }, [
                                      _vm._v("Kansas")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "KY" } }, [
                                      _vm._v("Kentucky")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "LA" } }, [
                                      _vm._v("Louisiana")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "MN" } }, [
                                      _vm._v("Minnesota")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "MS" } }, [
                                      _vm._v(
                                        "\n                                                    Mississippi\n                                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "MO" } }, [
                                      _vm._v("Missouri")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "OK" } }, [
                                      _vm._v("Oklahoma")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "SD" } }, [
                                      _vm._v(
                                        "\n                                                    South Dakota\n                                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "TX" } }, [
                                      _vm._v("Texas")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "TN" } }, [
                                      _vm._v("Tennessee")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "WI" } }, [
                                      _vm._v("Wisconsin")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "optgroup",
                                  { attrs: { label: "Eastern Time Zone" } },
                                  [
                                    _c("option", { attrs: { value: "CT" } }, [
                                      _vm._v(
                                        "\n                                                    Connecticut\n                                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "DE" } }, [
                                      _vm._v("Delaware")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "FL" } }, [
                                      _vm._v("Florida")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "GA" } }, [
                                      _vm._v("Georgia")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "IN" } }, [
                                      _vm._v("Indiana")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "ME" } }, [
                                      _vm._v("Maine")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "MD" } }, [
                                      _vm._v("Maryland")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "MA" } }, [
                                      _vm._v(
                                        "\n                                                    Massachusetts\n                                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "MI" } }, [
                                      _vm._v("Michigan")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "NH" } }, [
                                      _vm._v(
                                        "\n                                                    New Hampshire\n                                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "NJ" } }, [
                                      _vm._v("New Jersey")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "NY" } }, [
                                      _vm._v("New York")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "NC" } }, [
                                      _vm._v(
                                        "\n                                                    North Carolina\n                                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "OH" } }, [
                                      _vm._v("Ohio")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "PA" } }, [
                                      _vm._v(
                                        "\n                                                    Pennsylvania\n                                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "RI" } }, [
                                      _vm._v(
                                        "\n                                                    Rhode Island\n                                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "SC" } }, [
                                      _vm._v(
                                        "\n                                                    South Carolina\n                                                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "VT" } }, [
                                      _vm._v("Vermont")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "VA" } }, [
                                      _vm._v("Virginia")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "WV" } }, [
                                      _vm._v(
                                        "\n                                                    West Virginia\n                                                "
                                      )
                                    ])
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group-append" }, [
                              _c("label", { staticClass: "input-group-text" }, [
                                _c("span", { staticClass: "ti-search" })
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label",
                        attrs: { for: "select25" }
                      },
                      [
                        _vm._v(
                          "\n                                Select2 prepend\n                            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "input-group mb-3 select2-bootstrap-append search"
                          },
                          [
                            _c("div", { staticClass: "input-group-prepend" }, [
                              _c("label", { staticClass: "input-group-text" }, [
                                _c("span", { staticClass: "ti-search" })
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                staticClass: "form-control",
                                attrs: { id: "select25" }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Select value...")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "A" } }, [
                                  _vm._v("A")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "B" } }, [
                                  _vm._v("B")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "C" } }, [
                                  _vm._v("C")
                                ])
                              ]
                            )
                          ]
                        )
                      ])
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
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            {
              attrs: {
                title:
                  "<i class='fa fa-fw ti-arrow-circle-down'></i> Selectric Select"
              }
            },
            [
              _c("div", { staticClass: "box-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "get_value" } }, [
                        _vm._v("Get selected option value:")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          staticClass: "form-control",
                          attrs: { id: "get_value" }
                        },
                        [
                          _c("option", { attrs: { value: "pitons" } }, [
                            _vm._v("Pitons")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "cams" } }, [
                            _vm._v("Cams")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "nuts" } }, [
                            _vm._v("Nuts")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "bolts" } }, [
                            _vm._v("Bolts")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "stoppers" } }, [
                            _vm._v("Stoppers")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "sling" } }, [
                            _vm._v("Sling")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "skis" } }, [
                            _vm._v("Skis")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "skins" } }, [
                            _vm._v("Skins")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "poles" } }, [
                            _vm._v("Poles")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", { attrs: { id: "select_value" } }, [
                        _vm._v("Current value: "),
                        _c("strong", [_vm._v("oranges")])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "set_value" } }, [
                        _vm._v("Select Option:")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          staticClass: "form-control",
                          attrs: { id: "set_value" }
                        },
                        [
                          _c("option", { attrs: { value: "First option" } }, [
                            _vm._v("First option")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Second option" } }, [
                            _vm._v("Second option")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Third option" } }, [
                            _vm._v("Third option")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "Third option" } }, [
                            _vm._v("Fourth option")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6 col-sm-3 col-12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info btn_selection mb-2",
                              attrs: { id: "set_first_option" }
                            },
                            [
                              _c("span", { staticClass: "box-display" }, [
                                _vm._v("Select ")
                              ]),
                              _vm._v("1"),
                              _c("sup", [_vm._v("st")]),
                              _vm._v(
                                " option\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 col-sm-3 col-12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info btn_selection mb-2",
                              attrs: { id: "set_second_option" }
                            },
                            [
                              _c("span", { staticClass: "box-display" }, [
                                _vm._v("Select")
                              ]),
                              _vm._v(" 2"),
                              _c("sup", [_vm._v("nd")]),
                              _vm._v(
                                " option\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 col-sm-3 col-12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info btn_selection mb-2",
                              attrs: { id: "set_third_option" }
                            },
                            [
                              _c("span", { staticClass: "box-display" }, [
                                _vm._v("Select")
                              ]),
                              _vm._v(
                                "\n                                            3"
                              ),
                              _c("sup", [_vm._v("rd")]),
                              _vm._v(
                                " option\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 col-sm-3 col-12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-info btn_selection mb-2",
                              attrs: { id: "set_fourth_option" }
                            },
                            [
                              _c("span", { staticClass: "box-display" }, [
                                _vm._v("Select")
                              ]),
                              _vm._v(
                                "\n                                            4"
                              ),
                              _c("sup", [_vm._v("th")]),
                              _vm._v(
                                " option\n                                        "
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "dynamic" } }, [
                        _vm._v("Change options:")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          staticClass: "form-control",
                          attrs: { id: "dynamic" }
                        },
                        [
                          _c("option", { attrs: { value: "strawberries" } }, [
                            _vm._v("Strawberries")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "mango" } }, [
                            _vm._v("Mango")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "bananas" } }, [
                            _vm._v("Bananas")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "watermelon" } }, [
                            _vm._v("Watermelon")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "apples" } }, [
                            _vm._v("Apples")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "grapes" } }, [
                            _vm._v("Grapes")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "oranges" } }, [
                            _vm._v("Oranges")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "pineapple" } }, [
                            _vm._v("Pineapple")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "peaches" } }, [
                            _vm._v("Peaches")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "cherries" } }, [
                            _vm._v("Cherries")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("p", [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "add_val",
                            name: "add_val",
                            placeholder: "Enter text"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info",
                            attrs: { id: "bt_add_val" }
                          },
                          [_vm._v("Add Option")]
                        )
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
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "card",
            {
              attrs: {
                title:
                  "<i class='fa ti-reload' aria-hidden='true'></i> Selectize Tagging and Select"
              }
            },
            [
              _c("div", { staticClass: "box-body" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "select-gear" } }, [
                    _vm._v("Default Selectize:")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      staticClass: "form-control ",
                      attrs: { id: "select-gear" }
                    },
                    [
                      _c("optgroup", { attrs: { label: "Climbing" } }, [
                        _c("option", { attrs: { value: "pitons" } }, [
                          _vm._v("Pitons")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "cams" } }, [
                          _vm._v("Cams")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "nuts" } }, [
                          _vm._v("Nuts")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "bolts" } }, [
                          _vm._v("Bolts")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "stoppers" } }, [
                          _vm._v("Stoppers")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "sling" } }, [
                          _vm._v("Sling")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("optgroup", { attrs: { label: "Skiing" } }, [
                        _c("option", { attrs: { value: "skis" } }, [
                          _vm._v("Skis")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "skins" } }, [
                          _vm._v("Skins")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "poles" } }, [
                          _vm._v("Poles")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label",
                      attrs: { for: "selectize3" }
                    },
                    [_vm._v("Selectize with max limit:")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      staticClass: "form-control",
                      attrs: { id: "selectize3" }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select gear...")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "pitons" } }, [
                        _vm._v("Pitons")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "cams" } }, [
                        _vm._v("Cams")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "nuts" } }, [
                        _vm._v("Nuts")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "bolts" } }, [
                        _vm._v("Bolts")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "stoppers" } }, [
                        _vm._v("Stoppers")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "sling" } }, [
                        _vm._v("Sling")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "skis" } }, [
                        _vm._v("Skis")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "skins" } }, [
                        _vm._v("Skins")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "poles" } }, [
                        _vm._v("Poles")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label",
                      attrs: { for: "selectize-tags2" }
                    },
                    [_vm._v("Selectize Tags with remove button:")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control demo-default",
                    attrs: {
                      type: "text",
                      id: "selectize-tags2",
                      value: "science,biology,chemistry"
                    }
                  }),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "This selectize adds classic a classic remove button to each item for behavior\n                            that mimics Select2 and Choosen."
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label",
                      attrs: { for: "selectize-tags1" }
                    },
                    [_vm._v("Selectize Tags:")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control mb-2",
                    attrs: {
                      type: "text",
                      id: "selectize-tags1",
                      value: "web development,design"
                    }
                  }),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Press the [backspace] key and go back to editing the item without it being fully\n                            removed.\n                        "
                    )
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

/***/ "./resources/components/pages/dropdowns.vue":
/*!**************************************************!*\
  !*** ./resources/components/pages/dropdowns.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdowns_vue_vue_type_template_id_31a2c3b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdowns.vue?vue&type=template&id=31a2c3b6& */ "./resources/components/pages/dropdowns.vue?vue&type=template&id=31a2c3b6&");
/* harmony import */ var _dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdowns.vue?vue&type=script&lang=js& */ "./resources/components/pages/dropdowns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var bootstrap_multiselect_dist_css_bootstrap_multiselect_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-multiselect/dist/css/bootstrap-multiselect.css?vue&type=style&index=0&lang=css& */ "./node_modules/bootstrap-multiselect/dist/css/bootstrap-multiselect.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var select2_dist_css_select2_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! select2/dist/css/select2.min.css?vue&type=style&index=1&lang=css& */ "./node_modules/select2/dist/css/select2.min.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var select2_bootstrap_theme_dist_select2_bootstrap_min_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! select2-bootstrap-theme/dist/select2-bootstrap.min.css?vue&type=style&index=2&lang=css& */ "./node_modules/select2-bootstrap-theme/dist/select2-bootstrap.min.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var selectize_dist_css_selectize_css_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! selectize/dist/css/selectize.css?vue&type=style&index=3&lang=css& */ "./node_modules/selectize/dist/css/selectize.css?vue&type=style&index=3&lang=css&");
/* harmony import */ var selectize_dist_css_selectize_bootstrap3_css_vue_type_style_index_4_lang_css___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! selectize/dist/css/selectize.bootstrap3.css?vue&type=style&index=4&lang=css& */ "./node_modules/selectize/dist/css/selectize.bootstrap3.css?vue&type=style&index=4&lang=css&");
/* harmony import */ var selectric_public_selectric_css_vue_type_style_index_5_lang_css___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! selectric/public/selectric.css?vue&type=style&index=5&lang=css& */ "./node_modules/selectric/public/selectric.css?vue&type=style&index=5&lang=css&");
/* harmony import */ var _dropdowns_vue_vue_type_style_index_6_lang_css___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdowns.vue?vue&type=style&index=6&lang=css& */ "./resources/components/pages/dropdowns.vue?vue&type=style&index=6&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");












/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_9__["default"])(
  _dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dropdowns_vue_vue_type_template_id_31a2c3b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dropdowns_vue_vue_type_template_id_31a2c3b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dropdowns.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dropdowns.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/components/pages/dropdowns.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./dropdowns.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dropdowns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dropdowns.vue?vue&type=style&index=6&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/components/pages/dropdowns.vue?vue&type=style&index=6&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_style_index_6_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./dropdowns.vue?vue&type=style&index=6&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dropdowns.vue?vue&type=style&index=6&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_style_index_6_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_style_index_6_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_style_index_6_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_style_index_6_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_style_index_6_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/dropdowns.vue?vue&type=template&id=31a2c3b6&":
/*!*********************************************************************************!*\
  !*** ./resources/components/pages/dropdowns.vue?vue&type=template&id=31a2c3b6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_template_id_31a2c3b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./dropdowns.vue?vue&type=template&id=31a2c3b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dropdowns.vue?vue&type=template&id=31a2c3b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_template_id_31a2c3b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_template_id_31a2c3b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);