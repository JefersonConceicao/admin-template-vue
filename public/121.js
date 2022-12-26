(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/pricing.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/pricing.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isActive: 1,
      selected: "monthly"
    };
  },
  methods: {
    number: function number() {
      this.isActive = 1;
    },
    numbers: function numbers() {
      this.isActive = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/pricing_table.css?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/pricing_table.css?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*pricing table 1*/\n.span-btn, .span-btn:hover {\r\n    color: #666;\r\n    background-color: #DCDCDC;\r\n    border-color: #DCDCDC;\n}\n.span-btn.active, .span-btn.active:hover {\r\n    color: #fff;\r\n    background-color: #376ea4;\r\n    border-color: #2d5986;\n}\r\n/*table styles*/\n.modal-1 {\r\n    border         : 1px solid #B6D1CC;\r\n    border-radius  : 3px;\r\n    margin-top     : 20px;\r\n    margin-bottom  : 10px;\r\n    padding-bottom : 25px;\n}\n.modal-1 .pack-heading {\r\n    background-color : #E1EFEF;\r\n    padding          : 2px 0;\r\n    height           : 145px;\n}\n.pack-heading p {\r\n    color  : #555;\r\n    margin : 13px 0;\n}\n.modal-1 .pack-title {\r\n    font-size : 22px;\r\n    color     : #677777;\n}\n.modal-1 .pack-price {\r\n    font-size : 36px;\r\n    position  : relative;\n}\n.modal-1 .pack-price span {\r\n    font-size : 18px;\r\n    color     : #777;\n}\n.modal-1 .pack-price .dollar {\r\n    font-size : 22px;\r\n    color     : #777;\r\n    top       : -20px;\r\n    display   : inline;\n}\n.modal-1 .section-head {\r\n    font-size   : 15px;\r\n    font-weight : bold;\r\n    color       : #60B6A3;\r\n    margin      : 40px 0 15px;\n}\n.modal-1 .pack-details li {\r\n    line-height : 38px;\r\n    color       : #555;\r\n    font-size   : 14px;\n}\n.modal-1 .pack-details li.text-dummy {\r\n    color : #999;\n}\n.modal-1 .btn-getit {\r\n    -webkit-border-radius : 3px;\r\n    -moz-border-radius    : 3px;\r\n    border-radius         : 3px;\r\n    padding               : 5px 17px;\r\n    margin-top            : 30px;\n}\n.modal-1 .trending-tag {\r\n    height   : 79px;\r\n    overflow : hidden;\r\n    position : absolute;\r\n    left     : 15px;\r\n    top      : 20px;\r\n    width    : 80px;\n}\n.tag-design {\r\n    font              : bold 12px Noto Sans;\r\n    background-color  : #3AAE97;\r\n    padding-top       : 22px;\r\n    position          : relative;\r\n    text-align        : center;\r\n    top               : -12px;\r\n    left              : -40px;\r\n    -webkit-transform : rotate(-45deg);\r\n    -moz-transform    : rotate(-45deg);\r\n    -ms-transform     : rotate(-45deg);\r\n    -o-transform      : rotate(-45deg);\r\n    transform         : rotate(-45deg);\r\n    width             : 116px;\r\n    height            : 61px;\n}\n.pro-option {\r\n    font-size   : 24px;\r\n    line-height : 24px;\r\n    margin      : 25px 0;\n}\n.contact-info {\r\n    font-size     : 14px;\r\n    margin-bottom : 20px;\n}\n.btn-contact {\r\n    color         : #4080bf;\r\n    border        : 1px solid #4080bf;\r\n    padding       : 6px 25px;\r\n    border-radius : 20px;\n}\n.btn-contact:hover {\r\n    background-color : #4080bf;\r\n    color            : #fff;\n}\n@media screen and (max-width : 767px) {\n.modal-1 .trending-tag {\r\n        top :20px;\n}\n}\n@media(max-width: 320px){\n.modal-1 .trending-tag{\r\n        top:20px;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/pricing_table.css?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/pricing_table.css?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./pricing_table.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/pricing_table.css?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/pricing.vue?vue&type=template&id=6d17cc0c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/pricing.vue?vue&type=template&id=6d17cc0c& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row text-center" }, [
      _c("div", { staticClass: "col-sm-12 col-lg-12" }, [
        _c(
          "div",
          { staticClass: "btn-group", attrs: { "data-toggle": "buttons" } },
          [
            _c(
              "label",
              {
                staticClass: "btn btn-default span-btn monthly ",
                class: { active: _vm.isActive == 1 },
                on: { click: _vm.number }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selected,
                      expression: "selected"
                    }
                  ],
                  staticClass: "d-none",
                  attrs: {
                    type: "radio",
                    name: "options",
                    id: "option2",
                    autocomplete: "off",
                    value: "monthly",
                    checked: ""
                  },
                  domProps: { checked: _vm._q(_vm.selected, "monthly") },
                  on: {
                    change: function($event) {
                      _vm.selected = "monthly"
                    }
                  }
                }),
                _vm._v(" Monthly Tariff\n                ")
              ]
            ),
            _vm._v(" "),
            _c(
              "label",
              {
                staticClass: "btn btn-default span-btn yearly",
                class: { active: _vm.isActive == 0 },
                on: { click: _vm.numbers }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selected,
                      expression: "selected"
                    }
                  ],
                  staticClass: "d-none",
                  attrs: {
                    type: "radio",
                    name: "options",
                    id: "option3",
                    autocomplete: "off",
                    value: "yearly"
                  },
                  domProps: { checked: _vm._q(_vm.selected, "yearly") },
                  on: {
                    change: function($event) {
                      _vm.selected = "yearly"
                    }
                  }
                }),
                _vm._v("  Yearly Tariff\n                ")
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-lg-6 col-xl-3" }, [
        _c("div", { staticClass: "modal-1" }, [
          _c("div", { staticClass: "pack-heading" }, [
            _vm._m(0),
            _vm._v(" "),
            (_vm.selected == "monthly"
            ? true
            : false)
              ? _c("div", { staticClass: "pack-price monthly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("49"),
                  _c("span", [_vm._v("/mo")])
                ])
              : _c("div", { staticClass: "pack-price yearly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("540"),
                  _c("span", [_vm._v("/yr")])
                ]),
            _vm._v(" "),
            _c("p", [_vm._v("$45/mo If you get yearly Pack.")])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("TRACKED CAMPAIGNS")
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("KEYWORD EXPLORER")
          ]),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [_vm._v("USER ACCESS")]),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary center-block btn-getit" },
            [_vm._v("Get it now")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-lg-6 col-xl-3" }, [
        _c("div", { staticClass: "modal-1" }, [
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "pack-heading" }, [
            _vm._m(5),
            _vm._v(" "),
            (_vm.selected == "monthly"
            ? true
            : false)
              ? _c("div", { staticClass: "pack-price monthly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("99"),
                  _c("span", [_vm._v("/mo")])
                ])
              : _c("div", { staticClass: "pack-price yearly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("1104"),
                  _c("span", [_vm._v("/yr")])
                ]),
            _vm._v(" "),
            _c("p", [_vm._v("$92/mo If you get yearly Pack.")])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("TRACKED CAMPAIGNS")
          ]),
          _vm._v(" "),
          _vm._m(6),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("KEYWORD EXPLORER")
          ]),
          _vm._v(" "),
          _vm._m(7),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [_vm._v("USER ACCESS")]),
          _vm._v(" "),
          _vm._m(8),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-danger center-block btn-getit" },
            [_vm._v("Get it now")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6  col-lg-6 col-xl-3" }, [
        _c("div", { staticClass: "modal-1" }, [
          _c("div", { staticClass: "pack-heading" }, [
            _vm._m(9),
            _vm._v(" "),
            (_vm.selected == "monthly"
            ? true
            : false)
              ? _c("div", { staticClass: "pack-price monthly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("159"),
                  _c("span", [_vm._v("/mo")])
                ])
              : _c("div", { staticClass: "pack-price yearly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("1788"),
                  _c("span", [_vm._v("/yr")])
                ]),
            _vm._v(" "),
            _c("p", [_vm._v("$149/mo If you get yearly Pack.")])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("TRACKED CAMPAIGNS")
          ]),
          _vm._v(" "),
          _vm._m(10),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("KEYWORD EXPLORER")
          ]),
          _vm._v(" "),
          _vm._m(11),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [_vm._v("USER ACCESS")]),
          _vm._v(" "),
          _vm._m(12),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary center-block btn-getit" },
            [_vm._v("Get it now")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-lg-6 col-xl-3" }, [
        _c("div", { staticClass: "modal-1" }, [
          _c("div", { staticClass: "pack-heading" }, [
            _vm._m(13),
            _vm._v(" "),
            (_vm.selected == "monthly"
            ? true
            : false)
              ? _c("div", { staticClass: "pack-price monthly-pack" }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("399"),
                  _c("span", [_vm._v("/mo")])
                ])
              : _c("div", { staticClass: "pack-price yearly-pack " }, [
                  _c("sup", { staticClass: "dollar" }, [_vm._v("$")]),
                  _vm._v("4620"),
                  _c("span", [_vm._v("/yr")])
                ]),
            _vm._v(" "),
            _c("p", [_vm._v("$385/mo If you get yearly Pack.")])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("TRACKED CAMPAIGNS")
          ]),
          _vm._v(" "),
          _vm._m(14),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [
            _vm._v("KEYWORD EXPLORER")
          ]),
          _vm._v(" "),
          _vm._m(15),
          _vm._v(" "),
          _c("p", { staticClass: "section-head" }, [_vm._v("USER ACCESS")]),
          _vm._v(" "),
          _vm._m(16),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary center-block btn-getit" },
            [_vm._v("Get it now")]
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(17)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "pack-title" }, [
      _c("strong", [_vm._v("Basic")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("5")]), _vm._v(" Campaigns")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("300")]), _vm._v(" Keyword Ranking")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("250,000")]), _vm._v(" Crawled Pages")]),
      _vm._v(" "),
      _c("li", { staticClass: "text-dummy" }, [_vm._v("No Branded Reports")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("5 Keywords Reports")])]),
      _vm._v(" "),
      _c("li", { staticClass: "text-dummy" }, [_vm._v("No Keywords List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("2")]), _vm._v(" Seats")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "trending-tag" }, [
      _c("div", { staticClass: "tag-design bg-primary text-white" }, [
        _vm._v("Best\n                        "),
        _c("br"),
        _vm._v(" Package")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "pack-title" }, [
      _c("strong", [_vm._v("Econamic")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("10")]), _vm._v(" Campaigns")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("750")]), _vm._v(" Keyword Ranking")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("500,000")]), _vm._v(" Crawled Pages")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("Branded Reports")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [
        _c("strong", [_vm._v("5,000")]),
        _vm._v(" Full Keywords Reports")
      ]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("30")]), _vm._v(" Full Keywords List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("10")]), _vm._v(" Seats")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "pack-title" }, [
      _c("strong", [_vm._v("Premium")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("25")]), _vm._v(" Campaigns")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("1,700")]), _vm._v(" Keyword Ranking")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("1,125,000")]), _vm._v(" Crawled Pages")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("Branded Reports")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [
        _c("strong", [_vm._v("12,000")]),
        _vm._v(" Full Keywords Reports")
      ]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("50")]), _vm._v(" Full Keywords List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("25")]), _vm._v(" Seats")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "pack-title" }, [
      _c("strong", [_vm._v("Enterprise")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("100")]), _vm._v(" Campaigns")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("7,500")]), _vm._v(" Keyword Ranking")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("1,250,000")]), _vm._v(" Crawled Pages")]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("Branded Reports")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [
        _c("strong", [_vm._v("30,000")]),
        _vm._v(" Full Keywords Reports")
      ]),
      _vm._v(" "),
      _c("li", [_c("strong", [_vm._v("90")]), _vm._v(" Full Keywords List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pack-details list-unstyled" }, [
      _c("li", [_c("strong", [_vm._v("30")]), _vm._v(" Seats")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12 col-lg-12" }, [
      _c("p", { staticClass: "pro-option" }, [
        _vm._v("Want to be a PRO User?")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "contact-info" }, [
        _vm._v("We have larger and the best plans designed for you.")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-contact",
          attrs: { href: "javascript:void(0)" }
        },
        [_vm._v("Contact Us")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/components/pages/pricing.vue":
/*!************************************************!*\
  !*** ./resources/components/pages/pricing.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pricing_vue_vue_type_template_id_6d17cc0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing.vue?vue&type=template&id=6d17cc0c& */ "./resources/components/pages/pricing.vue?vue&type=template&id=6d17cc0c&");
/* harmony import */ var _pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing.vue?vue&type=script&lang=js& */ "./resources/components/pages/pricing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_custom_css_pricing_table_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/custom_css/pricing_table.css?vue&type=style&index=0&lang=css& */ "./resources/css/custom_css/pricing_table.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pricing_vue_vue_type_template_id_6d17cc0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pricing_vue_vue_type_template_id_6d17cc0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/pricing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/pricing.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/components/pages/pricing.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./pricing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/pricing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/pricing.vue?vue&type=template&id=6d17cc0c&":
/*!*******************************************************************************!*\
  !*** ./resources/components/pages/pricing.vue?vue&type=template&id=6d17cc0c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_template_id_6d17cc0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./pricing.vue?vue&type=template&id=6d17cc0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/pricing.vue?vue&type=template&id=6d17cc0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_template_id_6d17cc0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pricing_vue_vue_type_template_id_6d17cc0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/custom_css/pricing_table.css?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/css/custom_css/pricing_table.css?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_pricing_table_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./pricing_table.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/pricing_table.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_pricing_table_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_pricing_table_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_pricing_table_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_pricing_table_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_pricing_table_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);