(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-elements.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/form-elements.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _card_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.vue */ "./resources/components/pages/card/card.vue");
/* harmony import */ var bootstrap_fileinput_js_fileinput_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-fileinput/js/fileinput.min.js */ "./node_modules/bootstrap-fileinput/js/fileinput.min.js");
/* harmony import */ var bootstrap_fileinput_js_fileinput_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_fileinput_js_fileinput_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_fileinput_themes_fa_theme_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-fileinput/themes/fa/theme.min.js */ "./node_modules/bootstrap-fileinput/themes/fa/theme.min.js");
/* harmony import */ var bootstrap_fileinput_themes_fa_theme_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_fileinput_themes_fa_theme_min_js__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      selected: 'first',
      options: [{
        text: 'First radio',
        value: 'first'
      }, {
        text: 'Second radio',
        value: 'second'
      }, {
        text: 'Third radio',
        value: 'third'
      }],
      radios: [{
        text: 'First radio',
        value: 'first'
      }, {
        text: 'Second radio',
        value: 'second'
      }, {
        text: 'Third radio',
        value: 'third'
      }],
      stacked_check: ['Checkbox 1', 'Checkbox 2', 'Checkbox 3'],
      check: ['Checkbox 1', 'Checkbox 2', 'Checkbox 3']
    };
  },
  name: "form-elements",
  mounted: function mounted() {
    "use strict";

    $("#input-43").fileinput({
      browseClass: "btn btn-info",
      showPreview: false,
      allowedFileExtensions: ["zip", "rar", "gz", "tgz"],
      elErrorContainer: "#errorBlock43",
      theme: "fa" // you can configure `msgErrorClass` and `msgInvalidFileExtension` as well

    });
    $("#input-42").fileinput({
      browseClass: "btn btn-warning",
      maxFilesNum: 10,
      allowedFileExtensions: ["jpg", "gif", "png", "txt"],
      theme: "fa"
    });
    $("#input-41").fileinput({
      browseClass: "btn btn-danger",
      maxFileCount: 10,
      allowedFileTypes: ["image", "video"],
      theme: "fa"
    });
    $("#input-40,#input-22").fileinput({
      theme: "fa"
    });
    $(".btn-modify").on("click", function () {
      var $btn = $(this);

      if ($btn.text() == "Modify") {
        $("#input-40").fileinput("disable");
        $btn.html("Revert");
        alert("Hurray! I have disabled the input and hidden the upload button.");
      } else {
        $("#input-40").fileinput("enable");
        $btn.html("Modify");
        alert("Hurray! I have reverted back the input to enabled with the upload button.");
      }
    });
    $("#input-23").fileinput({
      browseClass: "btn btn-secondary",
      showUpload: false,
      mainTemplate: "{preview}\n" + "<div class='input-group {class}'>\n" + "   <div class='input-group-btn'>\n" + "       {browse}\n" + "       {upload}\n" + "       {remove}\n" + "   </div>\n" + "   {caption}\n" + "</div>",
      theme: "fa"
    });
    $("#input-21").fileinput({
      previewFileType: "image",
      browseClass: "btn btn-success",
      browseLabel: " Pick Image",
      removeClass: "btn btn-danger",
      removeLabel: "Delete",
      uploadClass: "btn btn-info",
      uploadLabel: " Upload",
      theme: "fa"
    });
    $("#input-20").fileinput({
      browseClass: "btn btn-info btn-block",
      showCaption: false,
      showRemove: false,
      showUpload: false,
      theme: "fa"
    });
    $("#input-4").fileinput({
      browseClass: "btn btn-success",
      showCaption: false
    });
    $("#input-5").fileinput({
      browseClass: "btn btn-warning",
      showUpload: false,
      maxFileCount: 10,
      mainClass: "input-group-lg"
    });
  }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/formelements.css?vue&type=style&index=1&lang=css&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/formelements.css?vue&type=style&index=1&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select2-container .select2-selection--single {\r\n    height: 34px;\n}\n.select2-container--default .select2-selection--multiple,\r\n.select2-container--default .select2-selection--single {\r\n    border-radius: 0;\n}\n.daterangepicker.opensleft:after {\r\n    display: none;\n}\n.input-group-btn:last-child > .btn,\r\n.input-group-btn:last-child > .btn-group {\r\n    margin-left: 0;\n}\n.btn-file{\r\n    border-bottom-right-radius: 0 !important;\r\n    border-top-right-radius: 0 !important;\n}\n.file-input .input-group-btn:last-child > .btn,\r\n.input-group-btn:last-child > .btn-group {\r\n    margin-left: -1px;\n}\n.file-error-message {\r\n    color: #FE5B5B;\n}\n.noresize {\r\n    resize: none;\n}\n.radio-inline + .radio-inline,\r\n.checkbox-inline + .checkbox-inline {\r\n    margin-left: 0;\n}\nimg.flag {\r\n    height: 16px;\r\n    width: 28px;\r\n    padding-right: 10px;\n}\n.file-preview-image {\r\n    max-width: 100% !important;\n}\n.m-b-10 {\r\n    margin-bottom: 10px !important;\n}\n.m-t-ng-8 {\r\n    margin-top: -8px;\n}\n#kvFileinputModal.file-zoom-fullscreen {\r\n    z-index: 10009;\n}\n.input-group-sm > .input-group-addon {\r\n    padding: 3px 10px;\n}\n.input-group-lg > .input-group-addon {\r\n    padding: 9px 16px;\n}\n.has-success .form-control{\r\n    border:1px solid #66cc99 !important;\n}\n.has-warning .form-control {\r\n    border-color: #f0ad4e;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.has-error .form-control {\r\n    border-color: #ff6666;\r\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.input-sm{\r\n    height: 30px;\r\n    padding: 5px 10px;\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n    border-radius: 3px;\n}\n.input-md{\r\n    height: 34px;\r\n    padding: 5px 10px;\r\n    font-size: 12px;\r\n    line-height: 1.5;\r\n    border-radius: 3px;\n}\n.input-lg{\r\n    height: 46px;\r\n    padding: 10px 16px;\r\n    font-size: 18px;\r\n    line-height: 1.33333;\r\n    border-radius: 6px;\n}\n.kv-upload-progress>.progress,.fileinput-cancel-button{\r\n    display: none;\n}\n.custom-checkbox,.custom-radio{\r\n    margin: 0;\n}\n.inline_radio .custom-radio,.inline_check .custom-checkbox{\r\n    padding-right: 50px;\n}\n.form-control:disabled{\r\n    cursor:not-allowed;\n}\n.content .card{\r\n    margin-top: 10px;\n}\n@media(min-width: 320px) and (max-width: 425px){\n.input-group,.file-input-new,.btn-modify{\r\n        margin-bottom: 10px;\n}\n.input-group-btn .hidden-xs{\r\n        display: none;\n}\n}\n@media (max-width:768px){\n.input-group{\r\n        margin-bottom: 10px;\n}\n}\n.inlineRadio .custom-radio{\r\n    margin-right: 10px !important;\n}\n.dropdown-menu.show{\r\n    margin-right: 20px;\n}\n#input-text-has-success:focus{\r\n    box-shadow: 0px 0px 5px 0.1px #66cc99;\n}\n#input-text-has-warning:focus{\r\n    box-shadow: 0px 0px 5px 0.1px #f0ad4e;\n}\n#input-text-has-error:focus{\r\n    box-shadow: 0px 0px 5px 0.1px #ff6666;\n}\n.kv-file-zoom,.file-upload-indicator{\r\n    display: none;\n}\n.file-caption-main .btn-default{\r\n    color: #333;\n}\n.btn:active{\r\n    color: #fff !important;\n}\n.input_height .btn-group.show .dropdown-toggle{\r\n    color: #fff;\n}\n#input-20{\r\n    margin-bottom: 10px;\n}\n.input-group-btn .dropdown-menu{\r\n    z-index: 99;\n}\r\n\r\n\r\n\r\n/*bootstrap3 ovverrides*/\n.file-input-section .input-group-append .btn-file,.file-input-section .file-input .btn-file{\r\n    border-top-right-radius: 0.25rem !important;\r\n    border-bottom-right-radius: 0.25rem !important;\n}", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/formelements.css?vue&type=style&index=1&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/formelements.css?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./formelements.css?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/formelements.css?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-elements.vue?vue&type=template&id=6360cc14&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/form-elements.vue?vue&type=template&id=6360cc14& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                title: "<i class='fa fa-fw ti-move'></i> General Elements"
              }
            },
            [
              _c(
                "form",
                { staticClass: "form-horizontal", attrs: { role: "form" } },
                [
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right txt_media1",
                          attrs: { for: "input-text" }
                        },
                        [_vm._v("Input text")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "input-text",
                          placeholder: "Input text"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right txt_media1",
                          attrs: { for: "inputPassword" }
                        },
                        [_vm._v("Password")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "password",
                          id: "inputPassword",
                          placeholder: "Password"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            " control-label float-md-right txt_media1",
                          attrs: { for: "input-text-disabled" }
                        },
                        [_vm._v("Disabled")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "input-text-disabled",
                          placeholder: "Input text",
                          disabled: ""
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right txt_media1",
                          attrs: { for: "color" }
                        },
                        [_vm._v("Color")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9 form_control" }, [
                      _c("input", {
                        staticClass: "form-control form_control",
                        attrs: { type: "color", id: "color" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right txt_media1",
                          attrs: { for: "url" }
                        },
                        [_vm._v("Url")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "url",
                          id: "url",
                          placeholder: "URL",
                          value: "http://getbootstrap.com"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right txt_media1",
                          attrs: { for: "range" }
                        },
                        [_vm._v("Range")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control ",
                        attrs: { type: "range", id: "range", value: "50" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right m-t-ng-8 txt_media1"
                        },
                        [_vm._v("Radio Buttons")]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-9" },
                      [
                        _c("b-form-radio-group", {
                          staticClass: "inline_radio",
                          attrs: { options: _vm.options, stacked: "" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right m-t-ng-8 txt_media1"
                        },
                        [_vm._v("Checkbox")]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-9" },
                      [
                        _c("b-form-checkbox-group", {
                          attrs: { stacked: "", options: _vm.stacked_check }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label float-md-right txt_media1"
                        },
                        [
                          _vm._v(
                            "\r\n                                Inline Radio\r\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-9" },
                      [
                        _c("b-form-radio-group", {
                          staticClass: "inlineRadio",
                          attrs: { options: _vm.radios }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label float-md-right txt_media1"
                        },
                        [
                          _vm._v(
                            "\r\n                                Inline Checkbox\r\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-9" },
                      [
                        _c("b-form-checkbox-group", {
                          staticClass: "inline_check",
                          attrs: { options: _vm.check }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group has-success" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "form-control-label float-md-right text-success txt_media1",
                          attrs: { for: "input-text-has-success" }
                        },
                        [
                          _vm._v(
                            "\r\n                                Input Success\r\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control brdr_success",
                        attrs: { type: "text", id: "input-text-has-success" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group has-warning" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label float-md-right text-warning txt_media1",
                          attrs: { for: "input-text-has-warning" }
                        },
                        [
                          _vm._v(
                            "\r\n                                Input Warning\r\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control brdr_warn",
                        attrs: { type: "text", id: "input-text-has-warning" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group has-error" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "control-label text-danger float-md-right txt_media1",
                          attrs: { for: "input-text-has-error" }
                        },
                        [
                          _vm._v(
                            "\r\n                                Input Error\r\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control brdr_danger",
                        attrs: { type: "text", id: "input-text-has-error" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label float-md-right txt_media1"
                        },
                        [_vm._v("Input Size")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control input-sm ipt_size",
                        attrs: { type: "text", placeholder: "input-sm" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control ipt_size1 input-md",
                        attrs: { type: "text", placeholder: "input-md" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("input", {
                        staticClass: "form-control input-lg ipt_size2",
                        attrs: { type: "text", placeholder: "input-lg" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label float-md-right txt_media1"
                        },
                        [
                          _vm._v(
                            "\r\n                                Input Group\r\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "span",
                            {
                              staticClass: "input-group-text bg-white",
                              attrs: { id: "basic-addon1" }
                            },
                            [_vm._v("@")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Username",
                            "aria-label": "Username",
                            "aria-describedby": "basic-addon1"
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Currency" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group-append" }, [
                          _c(
                            "span",
                            { staticClass: "input-group-text bg-white" },
                            [_vm._v(".00")]
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: " control-label float-md-right txt_media"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "span",
                            { staticClass: "input-group-text bg-white" },
                            [_vm._v("$")]
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Currency" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group-append" }, [
                          _c(
                            "span",
                            { staticClass: "input-group-text bg-white" },
                            [_vm._v(".00")]
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-6 m-b-10" }, [
                          _c("div", { staticClass: "input-group" }, [
                            _c("div", { staticClass: "input-group-prepend" }, [
                              _c(
                                "div",
                                { staticClass: "input-group-text bg-white" },
                                [_c("b-form-checkbox")],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-6 m-b-10" }, [
                          _c("div", { staticClass: "input-group" }, [
                            _c("div", { staticClass: "input-group-prepend" }, [
                              _c(
                                "div",
                                { staticClass: "input-group-text bg-white" },
                                [
                                  _c("b-form-radio", {
                                    attrs: { checked: "false" }
                                  })
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { type: "text" }
                            })
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-6 m-b-10" }, [
                          _c(
                            "div",
                            { staticClass: "input-group input_height" },
                            [
                              _c(
                                "div",
                                { staticClass: "input-group-prepend" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-warning",
                                      attrs: { type: "button" }
                                    },
                                    [_vm._v("Go!")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "text" }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-6 m-b-10" }, [
                          _c(
                            "div",
                            { staticClass: "input-group input_height" },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "text" }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group-append" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-warning",
                                    attrs: { type: "button" }
                                  },
                                  [_vm._v("Go!")]
                                )
                              ])
                            ]
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: " control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-6 m-b-10" }, [
                          _c(
                            "div",
                            { staticClass: "input-group input_height" },
                            [
                              _c(
                                "div",
                                { staticClass: "input-group-prepend" },
                                [
                                  _c(
                                    "b-dropdown",
                                    {
                                      attrs: { text: "Action", variant: "info" }
                                    },
                                    [
                                      _c("b-dropdown-item-button", [
                                        _vm._v("action")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-item-button", [
                                        _vm._v("another action")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-item-button", [
                                        _vm._v("something else here")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-divider"),
                                      _vm._v(" "),
                                      _c("b-dropdown-item-button", [
                                        _c("a", { attrs: { href: "#" } }, [
                                          _vm._v("seperated link here")
                                        ])
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "text" }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-6 m-b-10" }, [
                          _c(
                            "div",
                            { staticClass: "input-group input_height" },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: { type: "text" }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "input-group-append" },
                                [
                                  _c(
                                    "b-dropdown",
                                    {
                                      attrs: { text: "Action", variant: "info" }
                                    },
                                    [
                                      _c("b-dropdown-item-button", [
                                        _vm._v("action")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-item-button", [
                                        _vm._v("another action")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-item-button", [
                                        _vm._v("something else here")
                                      ]),
                                      _vm._v(" "),
                                      _c("b-dropdown-divider"),
                                      _vm._v(" "),
                                      _c("b-dropdown-item-button", [
                                        _c("a", { attrs: { href: "#" } }, [
                                          _vm._v("seperated link here")
                                        ])
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label float-md-right txt_media1"
                        },
                        [
                          _vm._v(
                            "\r\n                                Text Area\r\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("textarea", {
                        staticClass: "form-control resize_vertical",
                        attrs: { rows: "4", placeholder: "Basic" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right txt_media"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("textarea", {
                        staticClass: "form-control resize_vertical",
                        attrs: { rows: "4", disabled: "" }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row form-group" }, [
                    _c("div", { staticClass: "col-md-3" }, [
                      _c("label", {
                        staticClass: "control-label float-md-right"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-9" }, [
                      _c("textarea", {
                        staticClass: "form-control noresize",
                        attrs: { rows: "4", placeholder: "No resize" }
                      })
                    ])
                  ])
                ]
              )
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
                  "<i class='fa fa-fw ti-pencil'></i> Grid sizing of Form Elements"
              }
            },
            [
              _c("form", [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-3" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "text" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "text" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-5" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "text" }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-3" }, [
                    _c("textarea", {
                      staticClass: "form-control resize_vertical"
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" }, [
                    _c("textarea", {
                      staticClass: "form-control resize_vertical"
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-5" }, [
                    _c("textarea", {
                      staticClass: "form-control resize_vertical"
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-3" }, [
                    _c("select", { staticClass: "form-control" }, [
                      _c("option", [_vm._v("Select")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4" }, [
                    _c("select", { staticClass: "form-control" }, [
                      _c("option", [_vm._v("Select")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-5" }, [
                    _c("select", { staticClass: "form-control" }, [
                      _c("option", [_vm._v("Select")])
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
                  "<i class='fa fa-fw ti-pencil'></i> Height Sizing of Input Groups"
              }
            },
            [
              _c("form", [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group input-group-lg" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw ti-user",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group input-group-lg" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [_c("b-form-checkbox")],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group input-group-lg" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [
                              _c("b-form-radio", {
                                attrs: { checked: "false" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group mb-2" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw ti-user",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group mb-2" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [_c("b-form-checkbox")],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group mb-2" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [
                              _c("b-form-radio", {
                                attrs: { checked: "false" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group input-group-sm" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw ti-user",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group input-group-sm" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [_c("b-form-checkbox")],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-12 col-lg-4 col-12 m-t-10" },
                    [
                      _c("div", { staticClass: "input-group input-group-sm" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "div",
                            { staticClass: "input-group-text bg-white" },
                            [
                              _c("b-form-radio", {
                                attrs: { checked: "false" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "text" }
                        })
                      ])
                    ]
                  )
                ])
              ])
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row file-input-section" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "card",
            {
              attrs: {
                title:
                  "<i class='fa fa-fw ti-download'></i> Advanced File Input"
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-20" }
                    },
                    [
                      _vm._v(
                        "\r\n                            Select File\r\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: { id: "input-20", type: "file" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "alert alert-info small m-t-10 alert_pad mt-2 mt-sm-0"
                    },
                    [
                      _vm._v(
                        "\r\n                            Display the widget as a single block button\r\n                        "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-21" }
                    },
                    [
                      _vm._v(
                        "\r\n                            Select File\r\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: { id: "input-21", type: "file", accept: "image/*" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\r\n                            Show only image files for selection & preview. Control button labels, styles,\r\n                            and icons for the Pick Image, upload, and delete buttons.\r\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-22" }
                    },
                    [
                      _vm._v(
                        "\r\n                            Select File\r\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: {
                      id: "input-22",
                      type: "file",
                      accept: "text/plain",
                      "data-preview-file-type": "text",
                      "data-preview-class": "bg-warning"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\r\n                            Preview section control. Change preview background and display only text files\r\n                            content within the preview window.\r\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8 " }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-23" }
                    },
                    [
                      _vm._v(
                        "\r\n                            Select File\r\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: {
                      id: "input-23",
                      type: "file",
                      "data-show-preview": "false"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\r\n                            Advanced customization using templates. For example, Hide file preview\r\n                            thumbnails.\r\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-40" }
                    },
                    [
                      _vm._v(
                        "\r\n                            Select File\r\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: { id: "input-40", type: "file" }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning btn-modify",
                      attrs: { type: "button" }
                    },
                    [_vm._v("Modify")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\r\n                            Using plugin methods to alter input at runtime. For example, click the Modify\r\n                            button to disable the plugin and change plugin options.\r\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-41" }
                    },
                    [
                      _vm._v(
                        "\r\n                            Select File\r\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: { id: "input-41", type: "file" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\r\n                            Allow only image and video file types to be uploaded. You can configure the\r\n                            condition for validating the file types using\r\n                            "
                    ),
                    _c("code", [_vm._v("fileTypeSettings")]),
                    _vm._v(" .\r\n                        ")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-42" }
                    },
                    [
                      _vm._v(
                        "\r\n                            Select File\r\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: { id: "input-42", type: "file" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\r\n                            Allow only specific( jpg, gif, png, txt ) file extensions.\r\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-8" }, [
                  _c(
                    "label",
                    {
                      staticClass: "control-label txt_media",
                      attrs: { for: "input-43" }
                    },
                    [
                      _vm._v(
                        "\r\n                            Select File\r\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "file-loading",
                    attrs: { id: "input-43", type: "file" }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "help-block",
                    attrs: { idfirst: "errorBlock43" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-4" }, [
                  _c("div", { staticClass: "alert alert-info small m-t-10" }, [
                    _vm._v(
                      "\r\n                            Disable preview and customize your own error container and messages.\r\n                        "
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

/***/ "./resources/components/pages/form-elements.vue":
/*!******************************************************!*\
  !*** ./resources/components/pages/form-elements.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_elements_vue_vue_type_template_id_6360cc14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-elements.vue?vue&type=template&id=6360cc14& */ "./resources/components/pages/form-elements.vue?vue&type=template&id=6360cc14&");
/* harmony import */ var _form_elements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-elements.vue?vue&type=script&lang=js& */ "./resources/components/pages/form-elements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var bootstrap_fileinput_css_fileinput_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-fileinput/css/fileinput.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/bootstrap-fileinput/css/fileinput.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _css_formelements_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/formelements.css?vue&type=style&index=1&lang=css& */ "./resources/css/formelements.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _form_elements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_elements_vue_vue_type_template_id_6360cc14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_elements_vue_vue_type_template_id_6360cc14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/form-elements.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/form-elements.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/components/pages/form-elements.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_elements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./form-elements.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-elements.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_elements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/form-elements.vue?vue&type=template&id=6360cc14&":
/*!*************************************************************************************!*\
  !*** ./resources/components/pages/form-elements.vue?vue&type=template&id=6360cc14& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_elements_vue_vue_type_template_id_6360cc14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./form-elements.vue?vue&type=template&id=6360cc14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-elements.vue?vue&type=template&id=6360cc14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_elements_vue_vue_type_template_id_6360cc14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_elements_vue_vue_type_template_id_6360cc14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/formelements.css?vue&type=style&index=1&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/css/formelements.css?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_formelements_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./formelements.css?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/formelements.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_formelements_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_formelements_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_formelements_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_formelements_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_formelements_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);