(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/font_icons.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/font_icons.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.vue */ "./resources/components/pages/card/card.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "font_icons",
  // Name is optional, When name isn’t specified use the filename as the component name.
  components: {
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {},
  destroyed: function destroyed() {}
});

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/fonts.css?vue&type=style&index=1&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/fonts.css?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon_set > .row > div {\r\n    font-size : 18px;\r\n    padding   : 20px 15px;\n}\n.icon_group {\r\n    position         : relative;\r\n    background-color : #ffffff;\n}\n.icon_set,\r\n.icon_cover {\r\n    height : 330px;\r\n    width  : 100%;\n}\n.right-side.strech .icon_set ul li {\r\n    padding : 20px 35px;\n}\n.icon_cover a {\r\n    position  : relative;\r\n    top       : 50%;\r\n    transform : translateY(-50%);\n}\n.iconset_name {\r\n    padding-left : 15px;\n}\n.icon_set {\r\n    color : #6699cc;\n}\n.icon_set:hover + .icon_cover,\r\n.icon_cover:hover {\r\n    transform  : scale(1);\r\n    transition : all 0.5s;\n}\n.icon_cover {\r\n    position         : absolute;\r\n    top              : 0;\r\n    left             : 0;\r\n    background-color : rgba(79, 193, 233, 0.2);\r\n    transition       : all 0.5s;\r\n    transform        : scale(0);\n}\r\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/fonts.css?vue&type=style&index=1&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/fonts.css?vue&type=style&index=1&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./fonts.css?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/fonts.css?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/font_icons.vue?vue&type=template&id=1a31a8a6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/font_icons.vue?vue&type=template&id=1a31a8a6& ***!
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
  return _c("div", [
    _c("h4", [_vm._v("You can use different sets of icon fonts:")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-6 col-sm-6" },
        [
          _c("card", { attrs: { title: "Themify Icons" } }, [
            _c("div", { staticClass: "icon_group" }, [
              _c("div", { staticClass: "icon_set text-center" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-wand icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-save icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-direction icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-link icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-unlink icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-target icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-spray icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-signal icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-shopping-cart-full icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-settings icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-back-left icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-facebook icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-map-alt icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-bar-chart-alt icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-vector icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-control-record icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-ink-pen icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-help-alt icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-face-sad icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-new-window icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-rss-alt icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-control-stop icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-control-shuffle icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-paragraph icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-paragraph icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-underline icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-quote-right icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-layout-column2 icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-instagram icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "ti-twitter icons" })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "icon_cover text-center" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { to: "/themify_icons" }
                    },
                    [_vm._v("View All\n                        ")]
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-sm-6" },
        [
          _c("card", { attrs: { title: "Font Awesome Icons" } }, [
            _c("div", { staticClass: "icon_group" }, [
              _c(
                "div",
                { staticClass: "icon_set fontawesome_icons text-center" },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-bolt" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-bullhorn" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-clock-o" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-cloud-upload" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-cog" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-compass" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-edit" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-female" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-frown-o" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-legal" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-mail-reply-all" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-mail-forward" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-phone-square" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-plus-circle" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-rss-square" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-signal" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-smile-o" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-spinner" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-thumbs-o-up" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-ticket" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", {
                        staticClass: "fa fa-fw ti-close removecard clickable"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-toggle-down" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-trash-o" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-users" })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-copy" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-list-ul" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-list-alt" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-arrow-circle-down" })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", {
                        staticClass: "fa fa-fw fa-caret-square-o-down"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-2" }, [
                      _c("i", { staticClass: "fa fa-fw fa-chevron-right" })
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "icon_cover text-center" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { to: "/fontawesome_icons" }
                    },
                    [_vm._v("View All\n                        ")]
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6 col-sm-6 m-t-10" },
        [
          _c("card", { attrs: { title: "Simple Line Icons" } }, [
            _c("div", { staticClass: "icon_group" }, [
              _c("div", { staticClass: "icon_set text-center" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-compass icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-directions icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-earphones-alt icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-equalizer icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-dislike icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-mustache icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-cursor-move icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-folder icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-ghost icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-present icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-grid icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-linkedin icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-symbol-female icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-behance icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-settings icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-paper-plane icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-lock icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-camrecorder icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-magnifier-remove icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-calendar icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-control-play icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-twitter icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-facebook icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-dropbox icons" })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-vkontakte icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-social-google icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-cloud-upload icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-control-rewind icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-size-fullscreen icons" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-2" }, [
                    _c("i", { staticClass: "icon-diamond icons" })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "icon_cover text-center" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { to: "/simple_line_icons" }
                    },
                    [_vm._v("View All\n                        ")]
                  )
                ],
                1
              )
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

/***/ "./resources/components/pages/font_icons.vue":
/*!***************************************************!*\
  !*** ./resources/components/pages/font_icons.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _font_icons_vue_vue_type_template_id_1a31a8a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./font_icons.vue?vue&type=template&id=1a31a8a6& */ "./resources/components/pages/font_icons.vue?vue&type=template&id=1a31a8a6&");
/* harmony import */ var _font_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font_icons.vue?vue&type=script&lang=js& */ "./resources/components/pages/font_icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var simple_line_icons_css_simple_line_icons_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-line-icons/css/simple-line-icons.css?vue&type=style&index=0&lang=css& */ "./node_modules/simple-line-icons/css/simple-line-icons.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _css_custom_css_fonts_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/custom_css/fonts.css?vue&type=style&index=1&lang=css& */ "./resources/css/custom_css/fonts.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _font_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _font_icons_vue_vue_type_template_id_1a31a8a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _font_icons_vue_vue_type_template_id_1a31a8a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/font_icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/font_icons.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/components/pages/font_icons.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_font_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./font_icons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/font_icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_font_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/font_icons.vue?vue&type=template&id=1a31a8a6&":
/*!**********************************************************************************!*\
  !*** ./resources/components/pages/font_icons.vue?vue&type=template&id=1a31a8a6& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_font_icons_vue_vue_type_template_id_1a31a8a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./font_icons.vue?vue&type=template&id=1a31a8a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/font_icons.vue?vue&type=template&id=1a31a8a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_font_icons_vue_vue_type_template_id_1a31a8a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_font_icons_vue_vue_type_template_id_1a31a8a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/custom_css/fonts.css?vue&type=style&index=1&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/css/custom_css/fonts.css?vue&type=style&index=1&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_fonts_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./fonts.css?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/fonts.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_fonts_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_fonts_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_fonts_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_fonts_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_fonts_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);