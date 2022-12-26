(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/sweet_alert.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/sweet_alert.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _card_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.vue */ "./resources/components/pages/card/card.vue");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "sweet_alert",
  components: {
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    basicalert: function basicalert(e) {
      e.preventDefault();
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        confirmButtonColor: "#ff6666"
      });
    },
    success_alert: function success_alert(e) {
      e.preventDefault();
      swal({
        title: "Success",
        text: "You have successfully clicked",
        type: "success",
        confirmButtonColor: "#66cc99"
      });
    },
    ok_message: function ok_message(e) {
      swal({
        title: 'Are you sure?',
        text: "You will not be able to recover this imaginary file!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#66cc99',
        cancelButtonColor: '#ff6666',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger'
      }).then(function () {
        swal('Deleted!', 'Your file has been deleted.', 'success');
      }, function (dismiss) {
        // dismiss can be 'cancel', 'overlay',
        // 'close', and 'timer'
        if (dismiss === 'cancel') {
          swal('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
      });
    },
    custom_icon: function custom_icon(e) {
      e.preventDefault();
      swal({
        title: "Sweet!",
        text: "Here's a custom image.",
        imageUrl: __webpack_require__(/*! ../../img/authors/avatar1.jpg */ "./resources/img/authors/avatar1.jpg"),
        imageWidth: 100,
        imageHeight: 100,
        animation: false
      });
    },
    custom_html: function custom_html(e) {
      e.preventDefault();
      swal({
        title: "HTML Title!",
        text: 'A custom <span style="color:#F8BB86">html<span> message.',
        html: true
      });
    },
    auto_close: function auto_close(e) {
      e.preventDefault();
      swal({
        title: "Auto close alert!",
        text: "I will close in 3 seconds.",
        timer: 3000,
        showConfirmButton: false
      });
    },
    prom_alert: function prom_alert(e) {
      swal({
        title: 'Input something',
        input: 'text',
        showCancelButton: true,
        inputPlaceholder: 'write something!',
        inputValidator: function inputValidator(value) {
          return new Promise(function (resolve, reject) {
            if (value) {
              resolve();
            } else {
              reject('You need to write something!');
            }
          });
        }
      }).then(function (result) {
        swal({
          type: 'success',
          html: 'You entered text is: ' + result
        });
      });
    },
    ip_alert: function ip_alert(e) {
      swal.queue([{
        title: 'Your IP Address',
        confirmButtonText: 'Show my IP',
        text: 'Your public IP will be received ' + 'via  request',
        showLoaderOnConfirm: true,
        preConfirm: function preConfirm() {
          return new Promise(function (resolve) {
            $.get('https://api.ipify.org?format=json').done(function (data) {
              swal.insertQueueStep(data.ip);
              resolve();
            });
          });
        }
      }]).then(function () {
        swal('Good job!', 'Successfully checked your Ip', 'success');
      });
    },
    info_alert: function info_alert(e) {
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "info",
        confirmButtonClass: 'btn btn-info',
        confirmButtonText: 'Info!'
      });
    },
    success_alert_two: function success_alert_two(e) {
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "success",
        confirmButtonClass: 'btn btn-success',
        confirmButtonText: 'Success!'
      });
    },
    warning_alert: function warning_alert(e) {
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        confirmButtonClass: 'btn btn-warning',
        confirmButtonText: 'Warning!'
      });
    },
    danger_alert: function danger_alert(e) {
      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "error",
        confirmButtonClass: 'btn btn-danger',
        confirmButtonText: 'Danger!'
      });
    }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/sweet_alert2.css?vue&type=style&index=1&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/sweet_alert2.css?vue&type=style&index=1&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-a-10 {\r\n    margin : 40px;\n}\n.swal2-modal h2 {\r\n    font-weight : 500;\r\n    line-height : 50px;\n}\n.swal2-container.in {\r\n    z-index : 10009;\n}\n.swal2-modal .swal2-content {\r\n    font-size : 13px;\n}\n.swal2-cancel {\r\n    background-color : #ff6666 !important;\r\n    font-size        : 14px !important;\r\n    margin-bottom    : 5px !important;\n}\n.swal2-modal {\r\n    background-color : #fff;\r\n    font-family      : \"Open Sans\", \"sans-serif\";\r\n    border-radius    : 0;\n}\n#swal2-checkbox {\r\n    margin : 0 5px 0;\n}\r\n/* Sweep To Right */\n.hvr-sweep-to-right {\r\n    display                     : inline-block;\r\n    vertical-align              : middle;\r\n    -webkit-transform           : translateZ(0);\r\n    transform                   : translateZ(0);\r\n    box-shadow                  : 0 0 1px rgba(0, 0, 0, 0);\r\n    -webkit-backface-visibility : hidden;\r\n    backface-visibility         : hidden;\r\n    -moz-osx-font-smoothing     : grayscale;\r\n    position                    : relative;\r\n    -webkit-transition-property : color;\r\n    transition-property         : color;\r\n    -webkit-transition-duration : 0.3s;\r\n    transition-duration         : 0.3s;\r\n    width                       : 100%;\n}\n.hvr-sweep-to-right:before {\r\n    content                            : \"\";\r\n    position                           : absolute;\r\n    z-index                            : -1;\r\n    top                                : 0;\r\n    left                               : 0;\r\n    right                              : 0;\r\n    bottom                             : 0;\r\n    background                         : #6699cc;\r\n    -webkit-transform                  : scaleX(0);\r\n    transform                          : scaleX(0);\r\n    -webkit-transform-origin           : 0 50%;\r\n    transform-origin                   : 0 50%;\r\n    -webkit-transition-property        : transform;\r\n    transition-property                : transform;\r\n    -webkit-transition-duration        : 0.3s;\r\n    transition-duration                : 0.3s;\r\n    -webkit-transition-timing-function : ease-out;\r\n    transition-timing-function         : ease-out;\n}\n.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {\r\n    color  : #ffffff;\r\n    cursor : pointer;\n}\n.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {\r\n    -webkit-transform : scaleX(1);\r\n    transform         : scaleX(1);\n}\n.swal2-confirm {\r\n    font-size     : 14px !important;\r\n    margin-bottom : 5px !important;\n}\n.btn-success {\r\n    border-left-color  : #66cc99 !important;\r\n    border-right-color : #66cc99 !important;\r\n    background-color   : #66cc99 !important;\n}\n.btn-primary {\r\n    border-left-color  : #6699cc !important;\r\n    border-right-color : #6699cc !important;\r\n    background-color   : #6699cc !important;\n}\n.btn-warning {\r\n    border-left-color  : #f0ad4e !important;\r\n    border-right-color : #f0ad4e !important;\r\n    background-color   : #f0ad4e !important;\n}\n.btn-info {\r\n    border-left-color  : #66ccff !important;\r\n    border-right-color : #66ccff !important;\r\n    background-color   : #66ccff !important;\n}\n.btn-danger {\r\n    border-left-color  : #ff6666 !important;\r\n    border-right-color : #ff6666 !important;\r\n    background-color   : #ff6666 !important;\n}\n.swal2-container.fade{\r\n    opacity: 1 !important;\n}", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/sweet_alert2.css?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/sweet_alert2.css?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./sweet_alert2.css?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/sweet_alert2.css?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/sweet_alert.vue?vue&type=template&id=66b6d801&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/sweet_alert.vue?vue&type=template&id=66b6d801& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        { staticClass: "col-md-12" },
        [
          _c(
            "card",
            {
              attrs: {
                title:
                  " <i class='ti-bell' aria-hidden='true'></i> Sweet Alerts"
              }
            },
            [
              _c("div", { staticClass: "row m-a-10" }, [
                _c("div", { staticClass: "col-md-3 col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "card  card-default hvr-sweep-to-right" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card-body success_alert text-center",
                          on: { click: _vm.success_alert }
                        },
                        [
                          _c("h5", [
                            _vm._v(" Success Alert "),
                            _c("i", { staticClass: "fa fa-check-circle-o" })
                          ])
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "card  card-default hvr-sweep-to-right" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card-body ok_message text-center",
                          on: { click: _vm.ok_message }
                        },
                        [
                          _c("h5", [
                            _vm._v(" Ok Message "),
                            _c("i", { staticClass: "fa fa-thumbs-o-up" })
                          ])
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "card  card-default hvr-sweep-to-right" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card-body basicalert text-center ",
                          on: { click: _vm.basicalert }
                        },
                        [
                          _c("h5", [
                            _vm._v(" Alert "),
                            _c("i", { staticClass: "fa fa-bell-o" })
                          ])
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "card  card-default hvr-sweep-to-right" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card-body ip_alert text-center",
                          on: { click: _vm.ip_alert }
                        },
                        [
                          _c("h5", [
                            _vm._v(" Ip Alert "),
                            _c("i", { staticClass: "fa fa-info-circle" })
                          ])
                        ]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row m-a-10" }, [
                _c("div", { staticClass: "col-md-3 col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "card  card-default hvr-sweep-to-right" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card-body custom_icon text-center",
                          on: { click: _vm.custom_icon }
                        },
                        [
                          _c("h5", [
                            _vm._v(" Custom Image "),
                            _c("i", { staticClass: "fa fa-picture-o" })
                          ])
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "card  card-default hvr-sweep-to-right" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card-body custom_html text-center",
                          on: { click: _vm.custom_html }
                        },
                        [
                          _c("h5", [
                            _vm._v(" Custom Html "),
                            _c("i", { staticClass: "fa fa-code" })
                          ])
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "card  card-default hvr-sweep-to-right" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card-body auto_close text-center",
                          on: { click: _vm.auto_close }
                        },
                        [
                          _c("h5", [
                            _vm._v(" Alert Auto Close "),
                            _c("i", { staticClass: "fa fa-magic" })
                          ])
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "card  card-default hvr-sweep-to-right" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card-body prom_alert text-center",
                          on: { click: _vm.prom_alert }
                        },
                        [
                          _c("h5", [
                            _vm._v(" Prompt Alert "),
                            _c("i", { staticClass: "fa fa-tree" })
                          ])
                        ]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row m-a-10" }, [
                _c("div", { staticClass: "col-md-3 col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "card  card-default hvr-sweep-to-right" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card-body text-center",
                          attrs: { id: "info-alert" },
                          on: { click: _vm.info_alert }
                        },
                        [
                          _c("h5", [
                            _vm._v(" Info Alert "),
                            _c("i", { staticClass: "fa fa-info" })
                          ])
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "card  card-default hvr-sweep-to-right" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card-body text-center",
                          attrs: { id: "success-alert" },
                          on: { click: _vm.success_alert_two }
                        },
                        [
                          _c("h5", [
                            _vm._v(" Successfully "),
                            _c("i", { staticClass: "fa fa-check" })
                          ])
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "card  card-default hvr-sweep-to-right" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card-body text-center",
                          attrs: { id: "warning-alert" },
                          on: { click: _vm.warning_alert }
                        },
                        [
                          _c("h5", [
                            _vm._v(" Warning Alert "),
                            _c("i", { staticClass: "fa fa-exclamation" })
                          ])
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3 col-sm-3" }, [
                  _c(
                    "div",
                    { staticClass: "card  card-default hvr-sweep-to-right" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "card-body text-center",
                          attrs: { id: "danger-alert" },
                          on: { click: _vm.danger_alert }
                        },
                        [
                          _c("h5", [
                            _vm._v(" Danger Alert "),
                            _c("i", { staticClass: "fa fa-times" })
                          ])
                        ]
                      )
                    ]
                  )
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

/***/ "./resources/components/pages/sweet_alert.vue":
/*!****************************************************!*\
  !*** ./resources/components/pages/sweet_alert.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sweet_alert_vue_vue_type_template_id_66b6d801___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sweet_alert.vue?vue&type=template&id=66b6d801& */ "./resources/components/pages/sweet_alert.vue?vue&type=template&id=66b6d801&");
/* harmony import */ var _sweet_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sweet_alert.vue?vue&type=script&lang=js& */ "./resources/components/pages/sweet_alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var sweetalert2_dist_sweetalert2_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.css?vue&type=style&index=0&lang=css& */ "./node_modules/sweetalert2/dist/sweetalert2.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _css_custom_css_sweet_alert2_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/custom_css/sweet_alert2.css?vue&type=style&index=1&lang=css& */ "./resources/css/custom_css/sweet_alert2.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _sweet_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sweet_alert_vue_vue_type_template_id_66b6d801___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sweet_alert_vue_vue_type_template_id_66b6d801___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/sweet_alert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/sweet_alert.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/components/pages/sweet_alert.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sweet_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./sweet_alert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/sweet_alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sweet_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/sweet_alert.vue?vue&type=template&id=66b6d801&":
/*!***********************************************************************************!*\
  !*** ./resources/components/pages/sweet_alert.vue?vue&type=template&id=66b6d801& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sweet_alert_vue_vue_type_template_id_66b6d801___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./sweet_alert.vue?vue&type=template&id=66b6d801& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/sweet_alert.vue?vue&type=template&id=66b6d801&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sweet_alert_vue_vue_type_template_id_66b6d801___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sweet_alert_vue_vue_type_template_id_66b6d801___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/custom_css/sweet_alert2.css?vue&type=style&index=1&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/css/custom_css/sweet_alert2.css?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_sweet_alert2_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./sweet_alert2.css?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/sweet_alert2.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_sweet_alert2_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_sweet_alert2_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_sweet_alert2_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_sweet_alert2_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_sweet_alert2_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);