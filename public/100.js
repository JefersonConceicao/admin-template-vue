(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/edashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/edashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var v_chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-chartist */ "./node_modules/v-chartist/dist/vue-chartist.min.js");
/* harmony import */ var v_chartist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v_chartist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
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




vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(vue_circle_slider__WEBPACK_IMPORTED_MODULE_3__["default"]);
var unsub;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'edashboard',
  data: function data() {
    return {
      value: 70,
      val3: 70,
      progress: 30,
      visited: [{
        src: __webpack_require__(/*! img/ecommerce/product.png */ "./resources/img/ecommerce/product.png"),
        price: "$250",
        mrp: "$500",
        name: "US-Polo T-shirt",
        sale: "50%",
        visits: "22,350"
      }, {
        src: __webpack_require__(/*! img/ecommerce/product2.png */ "./resources/img/ecommerce/product2.png"),
        price: "$450.45",
        mrp: "$585",
        name: "US-Polo Red Shirt",
        sale: "23%",
        visits: "11,260"
      }, {
        src: __webpack_require__(/*! img/ecommerce/product3.png */ "./resources/img/ecommerce/product3.png"),
        price: "$280",
        mrp: "$350",
        name: "Gift box",
        sale: "20%",
        visits: "10,360"
      }],
      trending: [{
        src: __webpack_require__(/*! img/ecommerce/product.png */ "./resources/img/ecommerce/product.png"),
        price: "$250",
        mrp: "$500",
        name: "US-Polo T-shirt",
        sale: "50%",
        visits: "22,350"
      }, {
        src: __webpack_require__(/*! img/ecommerce/product4.png */ "./resources/img/ecommerce/product4.png"),
        price: "$1000",
        mrp: "1500",
        name: "Apple Macbook pro",
        sale: "33%",
        visits: "16,234",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate earum esse harum illo necessitatibus officia ullam vitae! Cum dolor tempore ut vero. Debitis dolor enim ex harum minima necessitatibus quae."
      }, {
        src: __webpack_require__(/*! img/ecommerce/product2.png */ "./resources/img/ecommerce/product2.png"),
        price: "$450.45",
        mrp: "$585",
        name: "US-Polo Red Shirt",
        sale: "23%",
        visits: "11,260"
      }],
      // =======line chart start===========
      time: {
        data: {
          labels: ['12am', '4am', '8am', '12pm', '4pm', '8pm'],
          series: [{
            name: 'series-1',
            data: [{
              x: new Date(143134652600),
              y: 53
            }, {
              x: new Date(143234652600),
              y: 40
            }, {
              x: new Date(143340052600),
              y: 45
            }, {
              x: new Date(143366652600),
              y: 40
            }, {
              x: new Date(143410652600),
              y: 20
            }, {
              x: new Date(143508652600),
              y: 32
            }]
          }, {
            name: 'series-2',
            data: [{
              x: new Date(143134652600),
              y: 53
            }, {
              x: new Date(143234652600),
              y: 35
            }, {
              x: new Date(143334652600),
              y: 30
            }, {
              x: new Date(143384652600),
              y: 30
            }, {
              x: new Date(143568652600),
              y: 10
            }]
          }]
        },
        options: {
          fullWidth: true,
          chartPadding: {
            right: 40
          }
        }
      },
      // =======Line chart end========
      // ======donut chart start=======
      donut: {
        data: {
          labels: ['Old 6,25,300', 'New 20,598'],
          series: [83, 17]
        },
        options: {
          donut: true,
          donutWidth: 45 //                        labelInterpolationFnc: function(value) {
          //                            return value[0]
          //                        }

        },
        responsiveoptions: [['screen and (min-width: 320px)', {
          labelOffset: 50,
          chartPadding: 20
        }], ['screen and (min-width: 640px)', {
          chartPadding: 20,
          labelOffset: 50,
          labelDirection: 'explode',
          labelInterpolationFnc: function labelInterpolationFnc(value) {
            return value;
          }
        }], ['screen and (min-width: 1024px)', {
          labelOffset: 50,
          chartPadding: 20
        }]]
      },
      // ======donut chart end================
      // ======pie chart start=======
      pie: {
        data: {
          labels: ['Social media', 'TV ads', 'Brochures', 'Hoardings'],
          series: [40, 30, 15, 15]
        },
        options: {//                        labelInterpolationFnc: function(value) {
          //                            return value[0]
          //                        }
        },
        responsiveoptions: [['screen and (min-width: 640px)', {
          chartPadding: 30,
          labelOffset: 50,
          labelDirection: 'explode',
          labelInterpolationFnc: function labelInterpolationFnc(value) {
            return value;
          }
        }], ['screen and (min-width: 1024px)', {
          labelOffset: 45,
          chartPadding: 20
        }]]
      } // ======pie chart end================

    };
  },
  components: {
    VueChartist: v_chartist__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {
    var _this = this;

    unsub = this.$store.subscribe(function (mutation, state) {
      if (mutation.type == "left_menu") {
        setTimeout(function () {
          _this.$refs.chartist8.renderChart();
        });
      }
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    unsub();
    next();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/edashboard.vue?vue&type=style&index=1&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/edashboard.vue?vue&type=style&index=1&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.shipping_perc{\n     margin-top: 52px;\n     margin-left: -32px;\n     position: absolute;\n}\n.top_revenue li{\n     line-height: 26px;\n}\n.sale-tag{\n     margin-top: 10px;\n     position: absolute;\n}\n.sale-tag:after{\n     content: ' ';\n     position: absolute;\n     width: 0;\n     height: 0;\n     left: 30px;\n     right: auto;\n     top: 0px;\n     bottom: auto;\n     border: 10px solid;\n     border-color: #ff6666  transparent transparent transparent;\n}\n.sale-tag:before{\n     content: ' ';\n     position: absolute;\n     width: 0;\n     height: 0;\n     left: 30px;\n     right: auto;\n     top: -1px;\n     bottom: auto;\n     border: 10px solid;\n     border-color:  transparent transparent  #ff6666 transparent;\n}\n.visit_sources li {\n     font-size: 15px;\n     line-height: 30px;\n}\n.visit_sources li i{\n     line-height: 3;\n     font-size:16px;\n     padding: 0.75rem;\n     border-radius: 20px;\n     border: 1px solid #c1c1c1;\n}\n.new_visits .ct-series-b .ct-slice-donut{\n     stroke: #66cc99;\n}\n.new_visits .ct-series-a .ct-slice-donut{\n     stroke:#6699cc;\n}\n.new_visits .v-chartist-container,.marketing_camp .v-chartist-container{\n     height: 300px;\n}\n.donut-label{\n     height:5px;\n     width: 5px;\n}\n.ct-label {\n     fill: rgb(0, 0, 0);\n     color: rgb(0, 0, 0);\n     font-size: 0.75rem;\n     line-height: 1;\n}\n.marketing_camp .ct-series-d .ct-slice-pie{\n     fill:#6699cc;\n}\n.marketing_camp .ct-series-a .ct-slice-pie{\n     fill:#66cc99;\n}\n.marketing_camp .ct-series-b .ct-slice-pie{\n     fill:#ff6666;\n}\n.marketing_camp .ct-series-c .ct-slice-pie{\n     fill: #ec9f1c;\n}\n.ct-series-a .ct-line,.ct-series-a .ct-point{\n     stroke: #66cc99;\n}\n.top_revenue{\n     margin-top: -8px;\n}\n@media(max-width:320px){\n.ct-label.ct-horizontal.ct-end{\n        margin-left: -5px;\n        transform: rotate(40deg);\n}\n}\n@media(max-width:1440px) {\n.most_trending .nav-link{\n         padding: 0.7rem 1rem;\n}\n}\n@media(max-width:375px){\n.edashboard{\n         margin-top: 15px;\n}\n}\n@media(min-width:320px) and (max-width: 425px){\n.top_revenue{\n         margin-top: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/edashboard.vue?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/edashboard.vue?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./edashboard.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/edashboard.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/edashboard.vue?vue&type=template&id=ef15626a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/edashboard.vue?vue&type=template&id=ef15626a& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "edashboard" }, [
    _c("h5", [_vm._v("Today's sales")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-sm-12 col-xl-6" },
        [
          _c(
            "b-card",
            { staticClass: "bg-primary-card", attrs: { "header-tag": "h5" } },
            [
              _c("vue-chartist", {
                ref: "chartist8",
                attrs: {
                  data: _vm.time.data,
                  options: _vm.time.options,
                  type: "Line"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-4 col-lg-6" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h5", { staticClass: "text-center" }, [
              _vm._v(
                "\n                        Today's Shipments\n                    "
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-center" },
              [
                _vm._m(1),
                _vm._v(" "),
                _c("circle-slider", {
                  attrs: {
                    side: 150,
                    "circle-width": 9,
                    "progress-width": 8,
                    "knob-radius": 7,
                    "progress-color": "#418AC9",
                    "knob-color": "#418AC9",
                    "circle-color": "#edeff0"
                  },
                  model: {
                    value: _vm.val3,
                    callback: function($$v) {
                      _vm.val3 = $$v
                    },
                    expression: "val3"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-5" }, [
              _c(
                "div",
                { staticClass: "col-sm-6 text-center" },
                [
                  _vm._v(
                    "\n                            45% completed\n                            "
                  ),
                  _c("b-progress", {
                    attrs: {
                      height: "3px",
                      value: _vm.value,
                      variant: "success"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-sm-6 text-center" },
                [
                  _vm._v(
                    "\n                            55% in progress\n                            "
                  ),
                  _c("b-progress", {
                    attrs: {
                      height: "3px",
                      value: _vm.progress,
                      variant: "danger"
                    }
                  })
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-8 col-lg-6" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h5", { staticClass: "text-center" }, [
              _vm._v("Todays top product by revenue")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-6" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: __webpack_require__(/*! ../../img/ecommerce/product.png */ "./resources/img/ecommerce/product.png"),
                    alt: "product"
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(2)
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-sm-12" },
        [
          _c(
            "b-tabs",
            { staticClass: "mt-4 most_trending" },
            [
              _c("b-tab", { attrs: { title: "Most visited", active: "" } }, [
                _c(
                  "div",
                  { staticClass: "row mt-3" },
                  _vm._l(_vm.visited, function(element, index) {
                    return _c("div", { key: index, staticClass: "col-sm-4" }, [
                      _c(
                        "span",
                        {
                          staticClass: "bg-danger text-white pl-2 pr-2 sale-tag"
                        },
                        [_vm._v(_vm._s(element.sale))]
                      ),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: { src: element.src, alt: "product" }
                      }),
                      _vm._v(" "),
                      _c("ul", { staticClass: "pl-0" }, [
                        _c("li", [
                          _c("h4", { staticClass: "mt-2" }, [
                            _vm._v(_vm._s(element.price))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("p", { staticClass: "text-secondary mb-0" }, [
                            _vm._v("M.R.P: "),
                            _c("del", [_vm._v(" " + _vm._s(element.mrp))])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Name: " + _vm._s(element.name))]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Number of visitors: "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(element.visits))
                          ])
                        ])
                      ])
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("b-tab", { attrs: { title: "Trending products" } }, [
                _c(
                  "div",
                  { staticClass: "row mt-3" },
                  _vm._l(_vm.trending, function(element, index) {
                    return _c("div", { key: index, staticClass: "col-sm-4" }, [
                      _c(
                        "span",
                        {
                          staticClass: "bg-danger text-white pl-2 pr-2 sale-tag"
                        },
                        [_vm._v(_vm._s(element.sale))]
                      ),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: { src: element.src, alt: "product" }
                      }),
                      _vm._v(" "),
                      _c("ul", { staticClass: "pl-0" }, [
                        _c("li", [
                          _c("h4", { staticClass: "mt-2" }, [
                            _vm._v(_vm._s(element.price))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c("p", { staticClass: "text-secondary mb-0" }, [
                            _vm._v("M.R.P: "),
                            _c("del", [_vm._v(" " + _vm._s(element.mrp))])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("li", [_vm._v("Name: " + _vm._s(element.name))]),
                        _vm._v(" "),
                        _c("li", [
                          _vm._v("Number of visitors: "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(element.visits))
                          ])
                        ])
                      ])
                    ])
                  }),
                  0
                )
              ])
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-3" }, [
      _vm._m(3),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-xl-4" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-body new_visits" },
            [
              _c("h5", [_vm._v("Visitors")]),
              _vm._v(" "),
              _c("vue-chartist", {
                ref: "chartist6",
                attrs: {
                  data: _vm.donut.data,
                  options: _vm.donut.options,
                  type: "Pie",
                  responsiveOptions: _vm.donut.responsiveoptions
                }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-xl-5" }, [
        _c("div", { staticClass: "card marketing_camp" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("h5", [
                _vm._v(
                  "\n                       Marketing campaign\n                   "
                )
              ]),
              _vm._v(" "),
              _c("vue-chartist", {
                ref: "chartist6",
                attrs: {
                  data: _vm.pie.data,
                  options: _vm.pie.options,
                  type: "Pie",
                  responsiveOptions: _vm.pie.responsiveoptions
                }
              })
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12 col-xl-6" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "card p-3 text-center bg-success" }, [
            _c("h5", { staticClass: "text-white" }, [_vm._v("Total sales")]),
            _vm._v(" "),
            _c("i", {
              staticClass: "fa fa-bar-chart text-white fa-2x mt-3 mb-3"
            }),
            _vm._v(" "),
            _c("h5", { staticClass: "text-white font-weight-bold" }, [
              _c("i", { staticClass: "fa fa-long-arrow-up" }),
              _vm._v(" 15%")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "card p-3 text-center bg-primary" }, [
            _c("h5", { staticClass: "text-white" }, [_vm._v("Total orders")]),
            _vm._v(" "),
            _c("i", {
              staticClass: "fa fa-shopping-cart text-white fa-2x mt-3 mb-3"
            }),
            _vm._v(" "),
            _c("h5", { staticClass: "text-white font-weight-bold" }, [
              _c("i", { staticClass: "fa fa-long-arrow-up" }),
              _vm._v(" 2,23,100")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "card p-3 text-center bg-warning" }, [
            _c("h5", { staticClass: "text-white" }, [_vm._v("Total products")]),
            _vm._v(" "),
            _c("i", {
              staticClass: "fa fa-list-alt text-white mt-3 mb-3 fa-2x"
            }),
            _vm._v(" "),
            _c("h5", { staticClass: "text-white font-weight-bold" }, [
              _c("i", { staticClass: "fa fa-long-arrow-up" }),
              _vm._v(" 6,56,529")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "shipping_perc" }, [
      _vm._v("\n                            70% "),
      _c("br"),
      _vm._v("bouce rate\n                        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("ul", { staticClass: "pl-0 top_revenue" }, [
        _c("li", [_vm._v("Name: US Polo T-shirt")]),
        _vm._v(" "),
        _c("li", [_vm._v("Seller: Lorvent Solutions")]),
        _vm._v(" "),
        _c("li", [
          _c("p", [
            _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
            _vm._v(" "),
            _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
            _vm._v(" "),
            _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
            _vm._v(" "),
            _c("span", { staticClass: "fa fa-star star_icon text-warning" }),
            _vm._v(" "),
            _c("span", {
              staticClass: "fa fa-star-half star_icon text-warning"
            })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-success" }, [_vm._v("Offer 1")]),
          _vm._v(
            ": Lorem ipsum dolor sit amet, consectetur adipisicing elit.....\n                              "
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-primary" }, [
            _vm._v("Number of sales today")
          ]),
          _vm._v(": "),
          _c("span", { staticClass: "text-danger font-weight-bold" }, [
            _vm._v("12,550")
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", { staticClass: "text-primary" }, [_vm._v("Total income")]),
          _vm._v(": "),
          _c("span", { staticClass: "text-danger font-weight-bold" }, [
            _vm._v("31,37,500")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6 col-xl-3" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("h5", [_vm._v("Visitors sources")]),
          _vm._v(" "),
          _c("ul", { staticClass: "pl-0 visit_sources" }, [
            _c("li", [
              _c("i", { staticClass: "ti-facebook text-primary" }),
              _vm._v(" Facebook "),
              _c("span", { staticClass: "text-danger float-right mt-3" }, [
                _vm._v("15,320")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("i", { staticClass: "ti-twitter text-primary" }),
              _vm._v(" Twitter "),
              _c("span", { staticClass: "text-danger float-right mt-3" }, [
                _vm._v("15,320")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("i", { staticClass: "ti-instagram text-primary" }),
              _vm._v(" Instagram "),
              _c("span", { staticClass: "text-danger float-right mt-3" }, [
                _vm._v("15,320")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("i", { staticClass: "ti-mobile text-success" }),
              _vm._v(" Application "),
              _c("span", { staticClass: "text-danger float-right mt-3" }, [
                _vm._v("15,320")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("i", { staticClass: "ti-home text-warning" }),
              _vm._v(" Store"),
              _c("span", { staticClass: "text-danger float-right mt-3" }, [
                _vm._v("15,320")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("i", { staticClass: "ti-desktop text-danger" }),
              _vm._v(" Direct site"),
              _c("span", { staticClass: "text-danger float-right mt-3" }, [
                _vm._v("15,320")
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/components/pages/edashboard.vue":
/*!***************************************************!*\
  !*** ./resources/components/pages/edashboard.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edashboard_vue_vue_type_template_id_ef15626a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edashboard.vue?vue&type=template&id=ef15626a& */ "./resources/components/pages/edashboard.vue?vue&type=template&id=ef15626a&");
/* harmony import */ var _edashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edashboard.vue?vue&type=script&lang=js& */ "./resources/components/pages/edashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var chartist_dist_chartist_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartist/dist/chartist.css?vue&type=style&index=0&lang=css& */ "./node_modules/chartist/dist/chartist.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _edashboard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edashboard.vue?vue&type=style&index=1&lang=css& */ "./resources/components/pages/edashboard.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _edashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edashboard_vue_vue_type_template_id_ef15626a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edashboard_vue_vue_type_template_id_ef15626a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/edashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/edashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/components/pages/edashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./edashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/edashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/edashboard.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/components/pages/edashboard.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edashboard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./edashboard.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/edashboard.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edashboard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edashboard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edashboard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edashboard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_edashboard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/edashboard.vue?vue&type=template&id=ef15626a&":
/*!**********************************************************************************!*\
  !*** ./resources/components/pages/edashboard.vue?vue&type=template&id=ef15626a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edashboard_vue_vue_type_template_id_ef15626a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./edashboard.vue?vue&type=template&id=ef15626a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/edashboard.vue?vue&type=template&id=ef15626a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edashboard_vue_vue_type_template_id_ef15626a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edashboard_vue_vue_type_template_id_ef15626a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ })

}]);