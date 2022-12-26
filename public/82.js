(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/simple_line_icons.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/simple_line_icons.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var _card_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.vue */ "./resources/components/pages/card/card.vue");
/* harmony import */ var toastr_build_toastr_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastr/build/toastr.min.js */ "./node_modules/toastr/build/toastr.min.js");
/* harmony import */ var toastr_build_toastr_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(toastr_build_toastr_min_js__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "blank",
  components: {
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    "use strict";

    $(document).ready(function () {
      $('#icon-search').on("input", function () {
        $(".name").each(function () {
          var regex = new RegExp($("#icon-search").val().trim().toLowerCase());
          var x = $(this).text();
          var res = x.match(regex, "i");

          if (res == null) {
            $(this).closest(".icon-preview-box").hide();
          } else {
            $(this).closest(".icon-preview-box").show();
          }
        });
      });

      jQuery.fn.outerHTML = function () {
        return jQuery('<div />').append(this.eq(0).clone()).html();
      };

      var icon_size = $("#icon-size");
      icon_size.on("input", function () {
        var x = parseInt(icon_size.val()) + parseInt(6);
        $(".fontnormal").html(".preview i{font-size:" + icon_size.val() + "px;}.preview:hover i{font-size:" + x + "px;}");
        $(".icon-sizeshow").text(icon_size.val() + "px");
      });
      $("head").append("<style class='fontnormal'></style>");
      $(".preview").on("click", function () {
        var x = $(this).find("i").outerHTML();
        copyTextToClipboard(x);
      });

      function copyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea).select();
        var successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        toastr_build_toastr_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.success('Element Copied to Clipboard. Now you can use it anywhere.');
      }
    });
  },
  destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/simple_themify.css?vue&type=style&index=2&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/simple_themify.css?vue&type=style&index=2&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group {\r\n    width: 100%;\r\n    margin-bottom: 10px;\n}\n.input-group-addon.icon-sizeshow {\r\n    border: none;\r\n    background-color: transparent;\n}\n.input-group input[type=\"range\"] {\r\n    border: none;\r\n    box-shadow: none;\n}\n#icon-search {\r\n    border-radius: 17px !important;\n}\nform {\r\n    text-align: center;\r\n    padding: 10px;\n}\ninput[type=\"range\"] {\r\n    cursor: pointer;\n}\n.preview .name {\r\n    display: block;\n}\n.preview {\r\n    padding: 30px 10px;\r\n    font-size: 12px;\r\n    height: 120px;\r\n    transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -moz-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\n}\n.preview:hover {\r\n    background-color: #DCDCDC;\r\n    transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -moz-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\n}\n.preview span[class|=ti] {\r\n    display: block;\n}\n.preview i,\r\n.preview span[class|=ti] {\r\n    color: #428BCA;\r\n    font-size: 24px;\n}\n.preview:hover i,\r\n.preview:hover span[class|=ti] {\r\n    font-size: 30px;\n}\r\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/simple_themify.css?vue&type=style&index=2&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/simple_themify.css?vue&type=style&index=2&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./simple_themify.css?vue&type=style&index=2&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/simple_themify.css?vue&type=style&index=2&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/simple_line_icons.vue?vue&type=template&id=63fc1bf0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/simple_line_icons.vue?vue&type=template&id=63fc1bf0& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "content" },
    [
      _c(
        "card",
        {
          attrs: { title: "<i class='fa fa-fw fa-font'></i> Simple Line Icons" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6 col-md-offset-3 m-auto" }, [
              _c("form", { attrs: { role: "form" } }, [
                _c("div", { staticClass: "input-group" }, [
                  _c(
                    "label",
                    { staticClass: "sr-only", attrs: { for: "icon-search" } },
                    [_vm._v("Search")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "icon-search",
                      id: "icon-search",
                      placeholder: "Search Icon"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c(
                    "label",
                    { staticClass: "sr-only", attrs: { for: "icon-size" } },
                    [_vm._v("Size")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "range",
                      name: "icon-size",
                      id: "icon-size",
                      min: "24",
                      max: "40",
                      value: "24"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "input-group-addon icon-sizeshow" },
                    [_vm._v("24px")]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("h4", { staticClass: "text-center" }, [
            _vm._v("Click on any icon to copy its code to clipboard.")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "text-center" }, [
                _c("h3", { staticClass: "text-left" }, [
                  _vm._v(
                    "\r\n                        Simple Line Icons\r\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-user icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("user")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-people icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("people")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-user-female icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("user-female")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-user-follow icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("user-follow")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-user-following icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("user-following")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-user-unfollow icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("user-unfollow")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-login icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("login")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-logout icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("logout")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-emotsmile icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("emotsmile")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-phone icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("phone")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-call-end icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("call-end")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-call-in icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("call-in")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-call-out icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("call-out")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-map icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("map")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-location-pin icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("location-pin")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-direction icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("direction")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-directions icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("directions")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-compass icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("compass")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-layers icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("layers")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-menu icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("menu")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-list icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("list")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-options-vertical icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("options-vertical")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-options icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("options")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-arrow-down icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("arrow-down")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-arrow-left icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("arrow-left")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-arrow-right icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("arrow-right")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-arrow-up icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("arrow-up")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-arrow-up-circle icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("arrow-up-circle")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", {
                          staticClass: "icon-arrow-left-circle icons"
                        }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("arrow-left-circle")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", {
                          staticClass: "icon-arrow-right-circle icons"
                        }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("arrow-right-circle")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", {
                          staticClass: "icon-arrow-down-circle icons"
                        }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("arrow-down-circle")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-check icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("check")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-clock icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("clock")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-plus icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("plus")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-minus icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("minus")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-close icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("close")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-event icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("event")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-exclamation icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("exclamation")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-organization icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("organization")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-trophy icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("trophy")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", {
                          staticClass: "icon-screen-smartphone icons"
                        }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("screen-smartphone")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-screen-desktop icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("screen-desktop")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-plane icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("plane")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-notebook icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("notebook")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-mustache icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("mustache")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-mouse icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("mouse")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-magnet icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("magnet")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-energy icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("energy")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-disc icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("disc")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-cursor icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("cursor")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-cursor-move icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("cursor-move")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-crop icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("crop")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-chemistry icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("chemistry")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-speedometer icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("speedometer")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-shield icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("shield")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-screen-tablet icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("screen-tablet")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-magic-wand icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("magic-wand")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-hourglass icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("hourglass")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-graduation icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("graduation")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-ghost icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("ghost")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-game-controller icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("game-controller")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-fire icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("fire")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-eyeglass icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("eyeglass")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-envelope-open icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("envelope-open")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-envelope-letter icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("envelope-letter")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-bell icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("bell")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-badge icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("badge")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-anchor icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("anchor")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-wallet icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("wallet")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-vector icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("vector")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-speech icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("speech")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-puzzle icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("puzzle")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-printer icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("printer")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-present icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("present")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-playlist icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("playlist")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-pin icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("pin")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-picture icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("picture")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-handbag icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("handbag")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-globe-alt icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("globe-alt")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-globe icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("globe")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-folder-alt icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("folder-alt")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-folder icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("folder")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-film icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("film")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-feed icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("feed")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-drop icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("drop")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-drawer icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("drawer")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-docs icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("docs")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-doc icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("doc")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-diamond icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("diamond")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-cup icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("cup")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-calculator icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("calculator")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-bubbles icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("bubbles")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-briefcase icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("briefcase")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-book-open icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("book-open")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-basket-loaded icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("basket-loaded")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-basket icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("basket")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-bag icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("bag")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-action-undo icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("action-undo")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-action-redo icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("action-redo")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-wrench icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("wrench")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-umbrella icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("umbrella")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-trash icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("trash")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-tag icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("tag")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-support icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("support")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-frame icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("frame")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-size-fullscreen icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("size-fullscreen")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-size-actual icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("size-actual")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-shuffle icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("shuffle")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-share-alt icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("share-alt")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-share icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("share")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-rocket icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("rocket")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-question icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("question")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-pie-chart icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("pie-chart")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-pencil icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("pencil")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-note icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("note")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-loop icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("loop")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-home icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("home")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-grid icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("grid")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-graph icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("graph")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-microphone icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("microphone")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-music-tone-alt icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("music-tone-alt")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-music-tone icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("music-tone")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-earphones-alt icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("earphones-alt")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-earphones icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("earphones")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-equalizer icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("equalizer")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-like icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("like")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-dislike icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("dislike")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-control-start icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("control-start")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-control-rewind icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("control-rewind")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-control-play icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("control-play")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-control-pause icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("control-pause")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-control-forward icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("control-forward")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-control-end icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("control-end")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-volume-1 icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("volume-1")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-volume-2 icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("volume-2")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-volume-off icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("volume-off")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-calendar icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("calendar")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-bulb icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("bulb")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-chart icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("chart")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-ban icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("ban")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-bubble icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("bubble")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-camrecorder icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("camrecorder")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-camera icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("camera")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-cloud-download icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("cloud-download")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-cloud-upload icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("cloud-upload")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-envelope icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("envelope")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-eye icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("eye")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-flag icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("flag")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-heart icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("heart")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-info icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("info")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-key icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("key")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-link icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("link")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-lock icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("lock")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-lock-open icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("lock-open")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-magnifier icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("magnifier")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-magnifier-add icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("magnifier-add")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-magnifier-remove icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("magnifier-remove")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-paper-clip icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("paper-clip")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-paper-plane icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("paper-plane")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-power icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("power")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-refresh icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("refresh")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-reload icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("reload")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-settings icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("settings")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-star icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("star")])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-symbol-female icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("symbol-female")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-symbol-male icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("symbol-male")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-target icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("target")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-credit-card icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("credit-card")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-paypal icons" }),
                        _c("span", { staticClass: "name" }, [_vm._v("paypal")])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-tumblr icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-tumblr")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-twitter icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-twitter")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-facebook icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-facebook")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-instagram icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-instagram")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-linkedin icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-linkedin")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-pinterest icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-pinterest")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-github icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-github")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-google icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-google")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-reddit icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-reddit")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-skype icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-skype")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-dribbble icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-dribbble")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-behance icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-behance")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-foursqare icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-foursqare")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", {
                          staticClass: "icon-social-soundcloud icons"
                        }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-soundcloud")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-spotify icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-spotify")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", {
                          staticClass: "icon-social-stumbleupon icons"
                        }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-stumbleupon")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-youtube icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-youtube")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-dropbox icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-dropbox")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-vkontakte icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-vkontakte")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("i", { staticClass: "icon-social-steam icons" }),
                        _c("span", { staticClass: "name" }, [
                          _vm._v("social-steam")
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { attrs: { id: "right" } }, [
            _c("div", { attrs: { id: "right-slim" } }, [
              _c("div", { staticClass: "rightsidebar-right" }, [
                _c("div", { staticClass: "rightsidebar-right-content" }, [
                  _c("div", { staticClass: "panel-tabs" }, [
                    _c(
                      "ul",
                      {
                        staticClass: "nav nav-tabs nav-float",
                        attrs: { role: "tablist" }
                      },
                      [
                        _c("li", { staticClass: "nav-item text-center" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link active ",
                              attrs: {
                                href: "#r_tab1",
                                role: "tab",
                                "data-toggle": "tab"
                              }
                            },
                            [_c("i", { staticClass: "fa fa-fw ti-comments" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "text-center nav-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link",
                              attrs: {
                                href: "#r_tab2",
                                role: "tab",
                                "data-toggle": "tab"
                              }
                            },
                            [_c("i", { staticClass: "fa fa-fw ti-bell" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "text-center nav-item" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link",
                              attrs: {
                                href: "#r_tab3",
                                role: "tab",
                                "data-toggle": "tab"
                              }
                            },
                            [_c("i", { staticClass: "fa fa-fw ti-settings" })]
                          )
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "tab-content" }, [
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane active",
                        attrs: { id: "r_tab1" }
                      },
                      [
                        _c("div", { attrs: { id: "slim_t1" } }, [
                          _c(
                            "h5",
                            {
                              staticClass:
                                "rightsidebar-right-heading text-uppercase text-xs"
                            },
                            [
                              _c("i", {
                                staticClass: "menu-icon  fa fa-fw ti-user"
                              }),
                              _vm._v(
                                "\r\n                                        Contacts\r\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "list-unstyled margin-none" },
                            [
                              _c(
                                "li",
                                { staticClass: "rightsidebar-contact-wrapper" },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "rightsidebar-contact",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-circle text-xs text-primary"
                                      }),
                                      _vm._v(
                                        "\r\n                                                Annette\r\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "rightsidebar-contact-wrapper" },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "rightsidebar-contact",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-circle text-xs text-primary"
                                      }),
                                      _vm._v(
                                        "\r\n                                                Jordan\r\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "rightsidebar-contact-wrapper" },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "rightsidebar-contact",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-circle text-xs text-primary"
                                      }),
                                      _vm._v(
                                        "\r\n                                                Stewart\r\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "rightsidebar-contact-wrapper" },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "rightsidebar-contact",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-circle text-xs text-warning"
                                      }),
                                      _vm._v(
                                        "\r\n                                                Alfred\r\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "rightsidebar-contact-wrapper" },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "rightsidebar-contact",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-circle text-xs text-danger"
                                      }),
                                      _vm._v(
                                        "\r\n                                                Eileen\r\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "rightsidebar-contact-wrapper" },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "rightsidebar-contact",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-circle text-xs text-muted"
                                      }),
                                      _vm._v(
                                        "\r\n                                                Robert\r\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "rightsidebar-contact-wrapper" },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "rightsidebar-contact",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "fa fa-circle text-xs text-muted"
                                      }),
                                      _vm._v(
                                        "\r\n                                                Cassandra\r\n                                            "
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "h5",
                            {
                              staticClass:
                                "rightsidebar-right-heading text-uppercase text-xs"
                            },
                            [
                              _c("i", { staticClass: "fa fa-fw ti-export" }),
                              _vm._v(
                                "\r\n                                        Recent Updates\r\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c("ul", { staticClass: "list-unstyled" }, [
                              _c(
                                "li",
                                { staticClass: "rightsidebar-notification" },
                                [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _c("i", {
                                      staticClass:
                                        "fa ti-comments-smiley fa-fw text-primary"
                                    }),
                                    _vm._v(
                                      "\r\n                                                    New Comment\r\n                                                "
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "rightsidebar-notification" },
                                [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _c("i", {
                                      staticClass:
                                        "fa ti-twitter-alt fa-fw text-success"
                                    }),
                                    _vm._v(
                                      "\r\n                                                    3 New Followers\r\n                                                "
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "rightsidebar-notification" },
                                [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _c("i", {
                                      staticClass: "fa ti-email fa-fw text-info"
                                    }),
                                    _vm._v(
                                      "\r\n                                                    Message Sent\r\n                                                "
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "rightsidebar-notification" },
                                [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _c("i", {
                                      staticClass:
                                        "fa ti-write fa-fw text-warning"
                                    }),
                                    _vm._v(
                                      "\r\n                                                    New Task\r\n                                                "
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "rightsidebar-notification" },
                                [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _c("i", {
                                      staticClass:
                                        "fa ti-export fa-fw text-danger"
                                    }),
                                    _vm._v(
                                      "\r\n                                                    Server Rebooted\r\n                                                "
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "rightsidebar-notification" },
                                [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _c("i", {
                                      staticClass:
                                        "fa ti-info-alt fa-fw text-primary"
                                    }),
                                    _vm._v(
                                      "\r\n                                                    Server Not Responding\r\n                                                "
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "rightsidebar-notification" },
                                [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _c("i", {
                                      staticClass:
                                        "fa ti-shopping-cart fa-fw text-success"
                                    }),
                                    _vm._v(
                                      "\r\n                                                    New Order Placed\r\n                                                "
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "rightsidebar-notification" },
                                [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _c("i", {
                                      staticClass: "fa ti-money fa-fw text-info"
                                    }),
                                    _vm._v(
                                      "\r\n                                                    Payment Received\r\n                                                "
                                    )
                                  ])
                                ]
                              )
                            ])
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "tab-pane fade", attrs: { id: "r_tab2" } },
                      [
                        _c("div", { attrs: { id: "slim_t2" } }, [
                          _c(
                            "h5",
                            {
                              staticClass:
                                "rightsidebar-right-heading text-uppercase text-xs"
                            },
                            [
                              _c("i", { staticClass: "fa fa-fw ti-bell" }),
                              _vm._v(
                                "\r\n                                        Notifications\r\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "ul",
                            {
                              staticClass: "list-unstyled m-t-15 notifications"
                            },
                            [
                              _c("li", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "message icon-not striped-col",
                                    attrs: { href: "" }
                                  },
                                  [
                                    _c("div", { staticClass: "message-body" }, [
                                      _c("strong", [_vm._v("John Doe")]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(
                                        "\r\n                                                    5 members joined today\r\n                                                    "
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "noti-date" },
                                        [_vm._v("Just now")]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "message icon-not",
                                    attrs: { href: "" }
                                  },
                                  [
                                    _c("div", { staticClass: "message-body" }, [
                                      _c("strong", [_vm._v("Tony")]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(
                                        "\r\n                                                    likes a photo of you\r\n                                                    "
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "noti-date" },
                                        [_vm._v("5 min")]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "message icon-not striped-col",
                                    attrs: { href: "" }
                                  },
                                  [
                                    _c("div", { staticClass: "message-body" }, [
                                      _c("strong", [_vm._v("John")]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(
                                        "\r\n                                                    Dont forgot to call...\r\n                                                    "
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "noti-date" },
                                        [_vm._v("11 min")]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "message icon-not",
                                    attrs: { href: "" }
                                  },
                                  [
                                    _c("div", { staticClass: "message-body" }, [
                                      _c("strong", [_vm._v("Jenny Kerry")]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(
                                        "\r\n                                                    Done with it...\r\n                                                    "
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "noti-date" },
                                        [_vm._v("1 Hour")]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "message icon-not striped-col",
                                    attrs: { href: "" }
                                  },
                                  [
                                    _c("div", { staticClass: "message-body" }, [
                                      _c("strong", [_vm._v("Ernest Kerry")]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(
                                        "\r\n                                                    2 members joined today\r\n                                                    "
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "noti-date" },
                                        [_vm._v("3 Days")]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "text-right noti-footer" },
                                [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v("View All Notifications "),
                                    _c("i", { staticClass: "ti-arrow-right" })
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "h5",
                            {
                              staticClass:
                                "rightsidebar-right-heading text-uppercase text-xs"
                            },
                            [
                              _c("i", { staticClass: "fa fa-fw ti-check-box" }),
                              _vm._v(
                                "\r\n                                        Tasks\r\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("ul", { staticClass: "list-unstyled m-t-15" }, [
                            _c("li", [
                              _c("div", [
                                _c("p", [
                                  _c("span", [_vm._v("Button Design")]),
                                  _vm._v(" "),
                                  _c(
                                    "small",
                                    { staticClass: "float-right text-muted" },
                                    [_vm._v("40%")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "progress progress-xs  active"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "progress-bar bg-success progress-bar-striped",
                                        staticStyle: { width: "40%" },
                                        attrs: {
                                          role: "progressbar",
                                          "aria-valuenow": "40",
                                          "aria-valuemin": "0",
                                          "aria-valuemax": "100"
                                        }
                                      },
                                      [
                                        _c("span", { staticClass: "sr-only" }, [
                                          _vm._v("40% Complete (success)")
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("div", [
                                _c("p", [
                                  _c("span", [_vm._v("Theme Creation")]),
                                  _vm._v(" "),
                                  _c(
                                    "small",
                                    { staticClass: "float-right text-muted" },
                                    [_vm._v("20%")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "progress progress-xs  active"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "progress-bar bg-info progress-bar-striped",
                                        staticStyle: { width: "20%" },
                                        attrs: {
                                          role: "progressbar",
                                          "aria-valuenow": "20",
                                          "aria-valuemin": "0",
                                          "aria-valuemax": "100"
                                        }
                                      },
                                      [
                                        _c("span", { staticClass: "sr-only" }, [
                                          _vm._v("20% Complete")
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("div", [
                                _c("p", [
                                  _c("span", [_vm._v("XYZ Task To Do")]),
                                  _vm._v(" "),
                                  _c(
                                    "small",
                                    { staticClass: "float-right text-muted" },
                                    [_vm._v("60%")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "progress progress-xs  active"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "progress-bar bg-warning progress-bar-striped",
                                        staticStyle: { width: "60%" },
                                        attrs: {
                                          role: "progressbar",
                                          "aria-valuenow": "60",
                                          "aria-valuemin": "0",
                                          "aria-valuemax": "100"
                                        }
                                      },
                                      [
                                        _c("span", { staticClass: "sr-only" }, [
                                          _vm._v("60% Complete (warning)")
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("div", [
                                _c("p", [
                                  _c("span", [_vm._v("Transitions Creation")]),
                                  _vm._v(" "),
                                  _c(
                                    "small",
                                    { staticClass: "float-right text-muted" },
                                    [_vm._v("80%")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "progress progress-xs active"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "progress-bar bg-danger progress-bar-striped",
                                        staticStyle: { width: "80%" },
                                        attrs: {
                                          role: "progressbar",
                                          "aria-valuenow": "80",
                                          "aria-valuemin": "0",
                                          "aria-valuemax": "100"
                                        }
                                      },
                                      [
                                        _c("span", { staticClass: "sr-only" }, [
                                          _vm._v("80% Complete (danger)")
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "text-right" }, [
                              _c("a", { attrs: { href: "#" } }, [
                                _vm._v("View All Tasks "),
                                _c("i", { staticClass: "ti-arrow-right" })
                              ])
                            ])
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "tab-pane fade", attrs: { id: "r_tab3" } },
                      [
                        _c("div", { attrs: { id: "slim_t3" } }, [
                          _c(
                            "h5",
                            {
                              staticClass:
                                "rightsidebar-right-heading text-uppercase gen-sett-m-t text-xs"
                            },
                            [
                              _c("i", { staticClass: "fa fa-fw ti-settings" }),
                              _vm._v(
                                "\r\n                                        General\r\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "ul",
                            {
                              staticClass: "list-unstyled settings-list m-t-10"
                            },
                            [
                              _c("li", [
                                _c("label", { attrs: { for: "status" } }, [
                                  _vm._v("Available")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "float-right" }, [
                                  _c("input", {
                                    attrs: {
                                      type: "checkbox",
                                      id: "status",
                                      name: "my-checkbox",
                                      checked: ""
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c("label", { attrs: { for: "email-auth" } }, [
                                  _vm._v("Login with Email")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "float-right" }, [
                                  _c("input", {
                                    attrs: {
                                      type: "checkbox",
                                      id: "email-auth",
                                      name: "my-checkbox"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c("label", { attrs: { for: "update" } }, [
                                  _vm._v("Auto Update")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "float-right" }, [
                                  _c("input", {
                                    attrs: {
                                      type: "checkbox",
                                      id: "update",
                                      name: "my-checkbox"
                                    }
                                  })
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "h5",
                            {
                              staticClass:
                                "rightsidebar-right-heading text-uppercase text-xs"
                            },
                            [
                              _c("i", { staticClass: "fa fa-fw ti-volume" }),
                              _vm._v(
                                "\r\n                                        Sound & Notification\r\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "ul",
                            {
                              staticClass: "list-unstyled settings-list m-t-10"
                            },
                            [
                              _c("li", [
                                _c("label", { attrs: { for: "chat-sound" } }, [
                                  _vm._v("Chat Sound")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "float-right" }, [
                                  _c("input", {
                                    attrs: {
                                      type: "checkbox",
                                      id: "chat-sound",
                                      name: "my-checkbox",
                                      checked: ""
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c("label", { attrs: { for: "noti-sound" } }, [
                                  _vm._v("Notification Sound")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "float-right" }, [
                                  _c("input", {
                                    attrs: {
                                      type: "checkbox",
                                      id: "noti-sound",
                                      name: "my-checkbox"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c("label", { attrs: { for: "remain" } }, [
                                  _vm._v("Remainder ")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "float-right" }, [
                                  _c("input", {
                                    attrs: {
                                      type: "checkbox",
                                      id: "remain",
                                      name: "my-checkbox",
                                      checked: ""
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c("label", { attrs: { for: "vol" } }, [
                                  _vm._v("Volume")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  attrs: {
                                    type: "range",
                                    id: "vol",
                                    min: "0",
                                    max: "100",
                                    value: "15"
                                  }
                                })
                              ])
                            ]
                          )
                        ])
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
  )
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

/***/ "./resources/components/pages/simple_line_icons.vue":
/*!**********************************************************!*\
  !*** ./resources/components/pages/simple_line_icons.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_line_icons_vue_vue_type_template_id_63fc1bf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple_line_icons.vue?vue&type=template&id=63fc1bf0& */ "./resources/components/pages/simple_line_icons.vue?vue&type=template&id=63fc1bf0&");
/* harmony import */ var _simple_line_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple_line_icons.vue?vue&type=script&lang=js& */ "./resources/components/pages/simple_line_icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var simple_line_icons_css_simple_line_icons_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-line-icons/css/simple-line-icons.css?vue&type=style&index=0&lang=css& */ "./node_modules/simple-line-icons/css/simple-line-icons.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var toastr_build_toastr_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toastr/build/toastr.min.css?vue&type=style&index=1&lang=css& */ "./node_modules/toastr/build/toastr.min.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _css_custom_css_simple_themify_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/custom_css/simple_themify.css?vue&type=style&index=2&lang=css& */ "./resources/css/custom_css/simple_themify.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _simple_line_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _simple_line_icons_vue_vue_type_template_id_63fc1bf0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _simple_line_icons_vue_vue_type_template_id_63fc1bf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/simple_line_icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/simple_line_icons.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/components/pages/simple_line_icons.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_line_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./simple_line_icons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/simple_line_icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_line_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/simple_line_icons.vue?vue&type=template&id=63fc1bf0&":
/*!*****************************************************************************************!*\
  !*** ./resources/components/pages/simple_line_icons.vue?vue&type=template&id=63fc1bf0& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_line_icons_vue_vue_type_template_id_63fc1bf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./simple_line_icons.vue?vue&type=template&id=63fc1bf0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/simple_line_icons.vue?vue&type=template&id=63fc1bf0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_line_icons_vue_vue_type_template_id_63fc1bf0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_line_icons_vue_vue_type_template_id_63fc1bf0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/custom_css/simple_themify.css?vue&type=style&index=2&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/css/custom_css/simple_themify.css?vue&type=style&index=2&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_simple_themify_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./simple_themify.css?vue&type=style&index=2&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/simple_themify.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_simple_themify_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_simple_themify_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_simple_themify_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_simple_themify_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_simple_themify_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);