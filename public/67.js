(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/circle_sliders.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/circle_sliders.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _card_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.vue */ "./resources/components/pages/card/card.vue");
/* harmony import */ var _js_custom_js_sparkline_jquery_flot_spline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/custom_js/sparkline/jquery.flot.spline.js */ "./resources/js/custom_js/sparkline/jquery.flot.spline.js");
/* harmony import */ var _js_custom_js_sparkline_jquery_flot_spline_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_custom_js_sparkline_jquery_flot_spline_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_circle_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-circle-slider */ "./node_modules/vue-circle-slider/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(vue_circle_slider__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "circle_sliders",
  components: {
    circleslider: vue_circle_slider__WEBPACK_IMPORTED_MODULE_3__["default"].VueCircleSlider,
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      sliderValue: 20,
      val2: 0,
      val3: 0,
      val4: 0,
      val5: 0,
      val6: 0,
      val7: 0
    };
  },
  mounted: function mounted() {
    "use strict";

    $(document).ready(function () {
      // spark line charts js start
      $(".linechart").sparkline([5, 1, 7, 8, 2, 6, 4, 7, 4, 2, 4], {
        type: 'line',
        height: "50px",
        width: "80px;",
        lineColor: '#428bca',
        fillColor: 'rgba(66,139,202,0.5)'
      });
      $(".barchart").sparkline([5, 6, 7, 2, 0, -4, -2, 4], {
        type: 'bar',
        height: "50px",
        barWidth: "8px;",
        barSpace: "3px",
        barColor: "#428bca",
        negBarColor: '#fb8678'
      });
      $(".stackedbarchart").sparkline([[5, 4], [4, 7], [7, 3], [3, 5], [6, 3], [2, 5]], {
        type: 'bar',
        zeroColor: '#dcdcdc',
        nullColor: '#dcdcdc ',
        height: "50px",
        barWidth: "8px;",
        barSpace: "3px",
        stackedBarColor: ['#fb8678', '#428bca']
      });
      $(".tristatechart").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
        type: 'tristate',
        height: "50px",
        barWidth: "8px;",
        barSpace: "3px",
        posBarColor: '#22d69d',
        negBarColor: '#fb8678',
        zeroBarColor: '#dcdcdc'
      });
      $(".bulletchart").sparkline([10, 12, 12, 9, 7], {
        type: 'bullet',
        height: "30px",
        width: "80px",
        targetColor: '#fb8678',
        performanceColor: '#4fc1e9',
        rangeColors: ['#ffb65f', '#fb8678', '#428bca']
      });
      $(".piechart").sparkline([3, 4, 1, 6, 3, 5], {
        type: 'pie',
        width: '50px',
        height: '50px',
        sliceColors: ['#428bca', '#22d69d', '#4fc1e9', '#fb8678', '#ffb65f']
      });
      $(".discretechart").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 2, 3, 5, 1, 6], {
        type: 'discrete',
        height: "50px",
        Width: "80px",
        lineColor: '#428bca'
      });
      $(".boxchart").sparkline([4, 27, 34, 52, 54, 59, 61, 68, 78, 82, 85, 87, 91, 93, 100], {
        type: 'box',
        width: '80px',
        height: '50px',
        boxFillColor: '#4fc1e9',
        whiskerColor: '#ffb65f',
        medianColor: '#fb8678',
        targetColor: '#22d69d'
      });
      $('#compositeline').sparkline('html', {
        fillColor: false,
        changeRangeMin: 0,
        chartRangeMax: 10,
        width: '100px',
        height: '50px',
        lineColor: '#428bca'
      }).sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
        composite: true,
        fillColor: false,
        changeRangeMin: 0,
        chartRangeMax: 10,
        width: '100px',
        height: '50px',
        lineColor: '#fb8678'
      });
      $('#compositebar').sparkline('html', {
        type: 'bar',
        barWidth: "10px;",
        barSpace: "5px",
        height: '50px',
        barColor: "#428bca"
      }).sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
        composite: true,
        fillColor: false,
        barWidth: "10px;",
        barSpace: "5px",
        height: '50px',
        lineColor: '#ffb65f'
      });
      $('#normalline').sparkline('html', {
        fillColor: false,
        normalRangeMin: -1,
        normalRangeMax: 8,
        width: '120px',
        height: '50px',
        lineColor: '#428bca'
      });
      $('#normalExample').sparkline('html', {
        fillColor: false,
        normalRangeMin: 80,
        normalRangeMax: 95,
        normalRangeColor: '#dcdcdc'
      });
      $('#discrete2').sparkline('html', {
        type: 'discrete',
        thresholdColor: '#fb8678',
        thresholdValue: 4,
        height: "50px",
        Width: "80px",
        lineColor: '#428bca'
      });
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/circle_sliders.css?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/circle_sliders.css?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".demo {\r\n    height : 300px;\r\n    width  : 100%;\n}\n.demo > div:nth-child(2) {\r\n    position : relative;\r\n    width    : 350px;\r\n    margin   : auto\n}\n.demo .demo_hours {\r\n    position : absolute;\r\n    left     : 10px;\r\n    top      : 10px;\n}\n.demo .demo_minutes {\r\n    position : absolute;\r\n    left     : 50px;\r\n    top      : 50px;\n}\n.demo .demo_seconds {\r\n    position : absolute;\r\n    left     : 90px;\r\n    top      : 90px;\n}\n.m-b-10 {\r\n    margin-bottom : 10px;\n}\n.jqstooltip{\r\n    z-index: 99 !important;\n}\n.exact-size div,.colors div{\r\n    display: inline-block;\n}\n.custom_small{\r\n    margin-top: -20px;\n}", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/circle_sliders.css?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/circle_sliders.css?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./circle_sliders.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/circle_sliders.css?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/circle_sliders.vue?vue&type=template&id=3e06e382&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/circle_sliders.vue?vue&type=template&id=3e06e382& ***!
  \********************************************************************************************************************************************************************************************************************/
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
        { staticClass: "col-12" },
        [
          _c(
            "card",
            { attrs: { title: "<i class='ti-pie-chart'></i> Circle Slider" } },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-12 col-sm-4 mt-4 mt-sm-0 text-center" },
                  [
                    _c("label", [_vm._v("Default")]),
                    _vm._v(" "),
                    _c("circle-slider", {
                      attrs: {
                        "progress-color": "#66cc99",
                        "knob-color": "#66cc99"
                      },
                      model: {
                        value: _vm.sliderValue,
                        callback: function($$v) {
                          _vm.sliderValue = $$v
                        },
                        expression: "sliderValue"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(_vm.sliderValue))])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 col-sm-4 mt-4 mt-sm-0 text-center" },
                  [
                    _c("label", [_vm._v(" Custom Dimenssion")]),
                    _vm._v(" "),
                    _c("circle-slider", {
                      attrs: {
                        min: 0,
                        max: 10000,
                        "step-size": 100,
                        "progress-color": "#66cc99",
                        "knob-color": "#66cc99"
                      },
                      model: {
                        value: _vm.val2,
                        callback: function($$v) {
                          _vm.val2 = $$v
                        },
                        expression: "val2"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(_vm.val2))])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 col-sm-4 mt-4 mt-sm-0 text-center" },
                  [
                    _c("label", { staticClass: "d-flex" }, [
                      _vm._v("Custom side")
                    ]),
                    _vm._v(" "),
                    _c("circle-slider", {
                      staticClass: "d-inline-block",
                      attrs: {
                        side: 100,
                        "progress-color": "#66cc99",
                        "knob-color": "#66cc99"
                      },
                      model: {
                        value: _vm.val3,
                        callback: function($$v) {
                          _vm.val3 = $$v
                        },
                        expression: "val3"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "d-inline-block " },
                      [
                        _c("circle-slider", {
                          staticClass: "custom_small",
                          attrs: {
                            side: 50,
                            "progress-color": "#66cc99",
                            "knob-color": "#66cc99"
                          },
                          model: {
                            value: _vm.val3,
                            callback: function($$v) {
                              _vm.val3 = $$v
                            },
                            expression: "val3"
                          }
                        }),
                        _vm._v(" "),
                        _c("br")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(_vm.val3))])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-12 col-sm-6 mt-4 mt-sm-0 text-center exact-size"
                  },
                  [
                    _c("label", [_vm._v("Exact sizes")]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("circle-slider", {
                      attrs: {
                        "circle-width": 8,
                        "progress-width": 12,
                        "knob-radius": 10,
                        "progress-color": "#66cc99",
                        "knob-color": "#66cc99"
                      },
                      model: {
                        value: _vm.val4,
                        callback: function($$v) {
                          _vm.val4 = $$v
                        },
                        expression: "val4"
                      }
                    }),
                    _vm._v(" "),
                    _c("circle-slider", {
                      attrs: {
                        "circle-width": 10,
                        "progress-width": 5,
                        "knob-radius": 10,
                        "progress-color": "#66cc99",
                        "knob-color": "#66cc99"
                      },
                      model: {
                        value: _vm.val4,
                        callback: function($$v) {
                          _vm.val4 = $$v
                        },
                        expression: "val4"
                      }
                    }),
                    _vm._v(" "),
                    _c("circle-slider", {
                      attrs: {
                        "circle-width": 12,
                        "progress-width": 3,
                        "knob-radius": 4,
                        "progress-color": "#66cc99",
                        "knob-color": "#66cc99"
                      },
                      model: {
                        value: _vm.val4,
                        callback: function($$v) {
                          _vm.val4 = $$v
                        },
                        expression: "val4"
                      }
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(_vm.val4))])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-12 col-sm-6 mt-4 mt-sm-0 text-center colors"
                  },
                  [
                    _vm._v(
                      "\n                        Colors\n                        "
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("circle-slider", {
                      attrs: {
                        "circle-color": "#edeff0",
                        "progress-color": "#eee",
                        "knob-color": "#6699cc"
                      },
                      model: {
                        value: _vm.val6,
                        callback: function($$v) {
                          _vm.val6 = $$v
                        },
                        expression: "val6"
                      }
                    }),
                    _vm._v(" "),
                    _c("circle-slider", {
                      attrs: {
                        "circle-color": "#ff6666",
                        "progress-color": "#6699cc",
                        "knob-color": "#66ccff"
                      },
                      model: {
                        value: _vm.val6,
                        callback: function($$v) {
                          _vm.val6 = $$v
                        },
                        expression: "val6"
                      }
                    }),
                    _vm._v(" "),
                    _c("circle-slider", {
                      attrs: {
                        "circle-color": "#cecece",
                        "progress-color": "#66cc99",
                        "knob-color": "#f0ad4e"
                      },
                      model: {
                        value: _vm.val6,
                        callback: function($$v) {
                          _vm.val6 = $$v
                        },
                        expression: "val6"
                      }
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(_vm.val6))])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 col-sm-4 mt-4 mt-sm-0 text-center" },
                  [
                    _c("label", [_vm._v("Relative sizes")]),
                    _vm._v(" "),
                    _c("circle-slider", {
                      attrs: {
                        "circle-width-rel": 30,
                        "progress-width-rel": 15,
                        "knob-radius-rel": 8,
                        "progress-color": "#66cc99",
                        "knob-color": "#66cc99"
                      },
                      model: {
                        value: _vm.val5,
                        callback: function($$v) {
                          _vm.val5 = $$v
                        },
                        expression: "val5"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(_vm.val5))])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-12 col-sm-4 mt-4 mt-sm-0 text-center" },
                  [
                    _c("label", [_vm._v("Two-way binding")]),
                    _vm._v(" "),
                    _c("circle-slider", {
                      attrs: {
                        "progress-color": "#66cc99",
                        "knob-color": "#66cc99"
                      },
                      on: {
                        touchmove: function($event) {
                          return _vm.$refs.input.blur()
                        }
                      },
                      model: {
                        value: _vm.val7,
                        callback: function($$v) {
                          _vm.val7 = $$v
                        },
                        expression: "val7"
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.val7,
                          expression: "val7",
                          modifiers: { number: true }
                        }
                      ],
                      ref: "input",
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: _vm.val7 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.val7 = _vm._n($event.target.value)
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ],
                  1
                )
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
        { staticClass: "col-12" },
        [
          _c(
            "card",
            {
              attrs: { title: "<i class='ti-bar-chart-alt'></i> Tiny Charts" }
            },
            [
              _c("div", { staticClass: "row sparkline_charts" }, [
                _c("div", { staticClass: "col-md-4 m-t-25 text-center" }, [
                  _c("div", { staticClass: "pt-3 pb-3" }, [
                    _c("div", [_vm._v("Tiny line chart")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "chart linechart" }, [
                      _vm._v("Loading...")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 m-t-25 text-center" }, [
                  _c("div", { staticClass: "pt-3 pb-3" }, [
                    _c("div", [_vm._v("Tiny bar chart")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "chart barchart" }, [
                      _vm._v("Loading...")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 m-t-25 text-center" }, [
                  _c("div", { staticClass: "pt-3 pb-3" }, [
                    _c("div", [_vm._v("Tiny stacked bar chart")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "m-t-10 chart stackedbarchart" }, [
                      _vm._v("Loading...")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 m-t-25 text-center" }, [
                  _c("div", { staticClass: "pt-3 pb-3" }, [
                    _c("div", [_vm._v("Tiny tristate chart")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "m-t-10 chart tristatechart" }, [
                      _vm._v("Loading...")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 m-t-25 text-center" }, [
                  _c("div", { staticClass: "pt-3 pb-3" }, [
                    _c("div", [_vm._v("Tiny bullet chart")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "m-t-10 chart bulletchart" }, [
                      _vm._v("Loading...")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 m-t-25 text-center" }, [
                  _c("div", { staticClass: "pt-3 pb-3" }, [
                    _c("div", [_vm._v("Tiny pie chart")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "m-t-10 chart piechart" }, [
                      _vm._v("Loading...")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 m-t-25 text-center" }, [
                  _c("div", { staticClass: "pt-3 pb-3" }, [
                    _c("div", [_vm._v("Tiny discrete chart")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "m-t-10 chart discretechart" }, [
                      _vm._v("Loading...")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 m-t-25 text-center" }, [
                  _c("div", { staticClass: "pt-3 pb-3" }, [
                    _c("div", [_vm._v("Tiny boxplot chart")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "m-t-10 chart boxchart" }, [
                      _vm._v("Loading...")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 m-t-25 text-center" }, [
                  _c("div", { staticClass: "pt-3 pb-3" }, [
                    _c("div", [_vm._v("Tiny composite line chart")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "m-t-10", attrs: { id: "compositeline" } },
                      [
                        _vm._v(
                          "\n                                8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10\n                            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 m-t-25 text-center" }, [
                  _c("div", { staticClass: "pt-3 pb-3" }, [
                    _c("div", [_vm._v("Tiny composite bar chart")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "m-t-10", attrs: { id: "compositebar" } },
                      [_vm._v("4,6,7,7,4,3,2,1,4")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 m-t-25 text-center" }, [
                  _c("div", { staticClass: "pt-3 pb-3" }, [
                    _c("div", [_vm._v("Tiny line chart with normal range")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "m-t-10", attrs: { id: "normalline" } },
                      [
                        _vm._v(
                          "\n                                8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10\n                            "
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 m-t-25 text-center" }, [
                  _c("div", { staticClass: "pt-3 pb-3" }, [
                    _c("div", [_vm._v("Tiny discrete chart with treshold")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "m-t-10", attrs: { id: "discrete2" } },
                      [_vm._v("4,6,7,7,4,3,2,1,4")]
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

/***/ "./resources/components/pages/circle_sliders.vue":
/*!*******************************************************!*\
  !*** ./resources/components/pages/circle_sliders.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _circle_sliders_vue_vue_type_template_id_3e06e382___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle_sliders.vue?vue&type=template&id=3e06e382& */ "./resources/components/pages/circle_sliders.vue?vue&type=template&id=3e06e382&");
/* harmony import */ var _circle_sliders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle_sliders.vue?vue&type=script&lang=js& */ "./resources/components/pages/circle_sliders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_custom_css_circle_sliders_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/custom_css/circle_sliders.css?vue&type=style&index=0&lang=css& */ "./resources/css/custom_css/circle_sliders.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _circle_sliders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _circle_sliders_vue_vue_type_template_id_3e06e382___WEBPACK_IMPORTED_MODULE_0__["render"],
  _circle_sliders_vue_vue_type_template_id_3e06e382___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/circle_sliders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/circle_sliders.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/components/pages/circle_sliders.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_circle_sliders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./circle_sliders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/circle_sliders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_circle_sliders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/circle_sliders.vue?vue&type=template&id=3e06e382&":
/*!**************************************************************************************!*\
  !*** ./resources/components/pages/circle_sliders.vue?vue&type=template&id=3e06e382& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_circle_sliders_vue_vue_type_template_id_3e06e382___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./circle_sliders.vue?vue&type=template&id=3e06e382& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/circle_sliders.vue?vue&type=template&id=3e06e382&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_circle_sliders_vue_vue_type_template_id_3e06e382___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_circle_sliders_vue_vue_type_template_id_3e06e382___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/custom_css/circle_sliders.css?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/css/custom_css/circle_sliders.css?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_circle_sliders_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./circle_sliders.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/circle_sliders.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_circle_sliders_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_circle_sliders_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_circle_sliders_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_circle_sliders_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_circle_sliders_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);