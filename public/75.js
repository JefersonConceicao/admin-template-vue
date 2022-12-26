(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-layouts.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/form-layouts.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      example_radio: [{
        text: 'HTML',
        value: 'HTML'
      }, {
        text: 'CSS',
        value: 'CSS'
      }, {
        text: 'JavaScript',
        value: 'JS'
      }],
      example_radio_seperated: [{
        text: 'HTML',
        value: 'HTML'
      }, {
        text: 'CSS',
        value: 'CSS'
      }, {
        text: 'JavaScript',
        value: 'JS'
      }],
      example_radio_bordered: [{
        text: 'HTML',
        value: 'HTML'
      }, {
        text: 'CSS',
        value: 'CSS'
      }, {
        text: 'JavaScript',
        value: 'JS'
      }],
      example_check: [{
        text: 'HTML',
        value: 'HTML'
      }, {
        text: 'CSS',
        value: 'CSS'
      }, {
        text: 'JavaScript',
        value: 'JS'
      }],
      example_check_seperated: [{
        text: 'HTML',
        value: 'HTML'
      }, {
        text: 'CSS',
        value: 'CSS'
      }, {
        text: 'JavaScript',
        value: 'JS'
      }],
      example_check_bordered: [{
        text: 'HTML',
        value: 'HTML'
      }, {
        text: 'CSS',
        value: 'CSS'
      }, {
        text: 'JavaScript',
        value: 'JS'
      }]
    };
  },
  name: "form_layouts",
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/form_layouts.css?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/form_layouts.css?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group-sm > .input-group-addon {\r\n    padding : 3px 10px;\n}\n.input-group-lg > .input-group-addon {\r\n    padding : 9px 16px;\n}\n.has-success .input-group-addon,\r\n.has-error .input-group-addon {\r\n    color : #fff;\n}\n.input-group-btn:last-child > .btn,\r\n.input-group-btn:last-child > .btn-group {\r\n    z-index : 0 !important;\n}\n.form-bordered .form-group > div {\r\n    padding     : 15px;\r\n    border-left : 1px solid #efefef;\n}\n.form-bordered .form-group {\r\n    margin        : 0;\r\n    border-bottom : 1px solid #efefef;\n}\n.form-bordered .control-label {\r\n    padding-top   : 17px;\r\n    margin-bottom : 0;\r\n    text-align    : right;\n}\n.form_layout form{\r\n    text-align: left;\n}\n.form-bordered-row .form-group {\r\n    margin        : 0;\r\n    border-bottom : 1px solid #efefef;\n}\n.form-bordered-row .control-label {\r\n    padding-top   : 17px;\r\n    margin-bottom : 0;\r\n    text-align    : right;\n}\n.form-bordered-row .form-group > div {\r\n    padding : 15px;\n}\n.right_aligned button {\r\n    margin-left : 7px;\n}\n.has-success .input-group-addon,\r\n.has-error .input-group-addon {\r\n    color : #555;\n}\n.fisrt_dropdwn{\r\n    /*z-index: 9999 !important;*/\n}\n.proc {\r\n    position : relative;\r\n    top      : -25px;\r\n    left     : 95%;\n}\n@media only screen and (max-width : 768px) {\n.form-bordered .form-group > div {\r\n        border : none;\n}\n}\n@media only screen and (max-width : 425px) {\n.proc {\r\n        position : relative;\r\n        top      : -25px;\r\n        left     : 91%;\n}\n}\n#tab3 .form-horizontal .radio, #tab3 .form-horizontal .checkbox,\r\n#tab3 .form-horizontal .radio-inline,#tab3 .form-horizontal .checkbox-inline {\r\n    padding-top: 0;\r\n    margin-bottom: 4px;\n}\n.m-l-10 {\r\n    margin-left :10px;\n}\n.panel-heading.tab-list {\r\n    padding: 2px 0 0 10px;\n}\n.tab-list .nav-tabs {\r\n    border-bottom: 0;\n}\n@media (min-width: 768px){\n.form-inline .form-group {\r\n        margin-bottom: 13px;\n}\n}\n.nav-link.active{\r\n    border-top: 3px solid #6699CC !important;\n}\n.remember .custom-control-description{\r\n    margin-left:20px;\n}\n.input-group-addon .custom-checkbox,.input-group-addon .custom-radio {\r\n    margin: 0;\n}\n@media(min-width: 320px) and (max-width:425px) {\n.form-horizontal select {\r\n        margin-bottom: 10px;\n}\n.form-bordered .control-label{\r\n        text-align: left;\n}\n.d-inline .input-group{\r\n        margin-bottom: 10px;\n}\n.tab-pane select{\r\n        margin-bottom: 10px;\n}\n}\n.striped-col{\r\n    background-color: #f9f9f9;\n}\n#inputError1:focus,#inputError2:focus{\r\n    box-shadow: 0px 0px 3px 0.1px #ff6666;\n}\n.form-control.is-valid{\r\n    border-color:#66cc99 !important;\n}\n.input-group-btn .b-dropdown .dropdown-toggle:active,.input-group-btn .btn-group.show .dropdown-toggle{\r\n    color: #fff !important;\n}\n.form-body{\r\n    clear:both;\n}\n.border-left-none{\r\n    border-left:none !important;\n}\n.custom-control.custom-radio,.custom-control.custom-checkbox{\r\n        padding-left: 1.1rem;\n}\n#example-file-input1,#example-file-multiple-input1,#example-file-input2,#example-file-multiple-input2,#example-file-input3,#example-file-multiple-input3{\r\n    width: 100%;\n}\n.fisrt_dropdwn .btn-info:not(:disabled):not(.disabled):active, .fisrt_dropdwn .btn-warning:not(:disabled):not(.disabled):active{\r\n    color: #fff;\n}", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/form_layouts.css?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/form_layouts.css?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./form_layouts.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/form_layouts.css?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-layouts.vue?vue&type=template&id=81902008&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/form-layouts.vue?vue&type=template&id=81902008& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row form_layout" }, [
      _c(
        "div",
        { staticClass: "col-lg-12" },
        [
          _c(
            "b-card",
            { attrs: { "no-body": "" } },
            [
              _c(
                "b-tabs",
                { ref: "tabs", attrs: { card: "" } },
                [
                  _c("b-tab", { attrs: { title: "Form Action", active: "" } }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-6" },
                        [
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-pencil'></i> Form Actions On Top"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  staticClass: "form-horizontal",
                                  attrs: { action: "#" }
                                },
                                [
                                  _c("div", [
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-offset-3 col-sm-9 ml-auto"
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn  mb-3 btn-primary",
                                              attrs: { type: "button" }
                                            },
                                            [
                                              _vm._v(
                                                "Submit\r\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "\r\n                                                     \r\n                                                    "
                                          ),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn  mb-3 btn-danger",
                                              attrs: { type: "button" }
                                            },
                                            [
                                              _vm._v(
                                                "Cancel\r\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "\r\n                                                     \r\n                                                    "
                                          ),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-secondary  mb-3 bttn_reset butn buttn",
                                              attrs: { type: "reset" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                        Reset\r\n                                                    "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-body" }, [
                                    _c(
                                      "div",
                                      { staticClass: "form-group m-t-10 row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 col-lg-4 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputUsername1" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Username\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-9 col-lg-8" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "input-group " },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group-prepend"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "input-group-text bg-white",
                                                        attrs: {
                                                          id: "basic-addon1"
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-fw ti-user"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("input", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "text",
                                                    placeholder: "Username",
                                                    id: "inputUsername1"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 col-lg-4 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputEmail" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Email\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-9 col-lg-8" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "input-group " },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group-prepend"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "input-group-text bg-white"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa ti-email"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("input", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "text",
                                                    placeholder:
                                                      "Email Address",
                                                    id: "inputEmail"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 col-lg-4 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputpass" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Password\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-9 col-lg-8" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "input-group " },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group-prepend"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "input-group-text bg-white"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-fw ti-key"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("input", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "text",
                                                    placeholder: "Password",
                                                    id: "inputpass"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 col-lg-4 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputnumber1" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Phone Number\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-9 col-lg-8" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "input-group " },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group-prepend"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "input-group-text bg-white"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-fw ti-mobile"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("input", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "text",
                                                    placeholder: "Phone Number",
                                                    id: "inputnumber1"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 col-lg-4 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputAddress" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Address\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-9 col-lg-8" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "input-group " },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group-prepend"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "input-group-text bg-white"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-fw ti-pencil"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("input", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "text",
                                                    placeholder: "Address",
                                                    id: "inputAddress"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 col-lg-4 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputContent1" }
                                              },
                                              [_vm._v("Message")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-9 col-lg-8" },
                                          [
                                            _c("textarea", {
                                              staticClass:
                                                "form-control resize_vertical",
                                              attrs: {
                                                id: "inputContent1",
                                                rows: "3",
                                                name: "inputContent1"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-lg-6" },
                        [
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-pencil'></i> Form Actions On Bottom"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  staticClass: "form-horizontal",
                                  attrs: { action: "#" }
                                },
                                [
                                  _c("div", { staticClass: "form-body" }, [
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 col-lg-4 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputUsername2" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Username\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-9 col-lg-8" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "input-group " },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group-prepend"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "input-group-text bg-white"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-fw ti-user"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("input", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "text",
                                                    placeholder: "Username",
                                                    id: "inputUsername2"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 col-lg-4 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputEmail2" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Email\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-9 col-lg-8" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "input-group " },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group-prepend"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "input-group-text bg-white"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa ti-email"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("input", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "text",
                                                    placeholder:
                                                      "Email Address",
                                                    id: "inputEmail2"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 col-lg-4 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "keypassword" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Password\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-9 col-lg-8" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "input-group " },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group-prepend"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "input-group-text bg-white"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-fw ti-key"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("input", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "password",
                                                    placeholder: "Password",
                                                    id: "keypassword"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 col-lg-4 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputnumber2" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Phone Number\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-9 col-lg-8" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "input-group " },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group-prepend"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "input-group-text bg-white"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-fw ti-mobile"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("input", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "text",
                                                    placeholder: "Phone Number",
                                                    id: "inputnumber2"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 col-lg-4 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputAddress2" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Address\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-9 col-lg-8" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "input-group " },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group-prepend"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "input-group-text bg-white"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-fw ti-pencil"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("input", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "text",
                                                    placeholder: "Address",
                                                    id: "inputAddress2"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 col-lg-4 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputContent2" }
                                              },
                                              [_vm._v("Message")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-9 col-lg-8" },
                                          [
                                            _c("textarea", {
                                              staticClass:
                                                "form-control resize_vertical",
                                              attrs: {
                                                id: "inputContent2",
                                                rows: "3"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-actions" }, [
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-offset-3  col-sm-9 ml-auto"
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary  mb-3",
                                              attrs: { type: "button" }
                                            },
                                            [
                                              _vm._v(
                                                "Submit\r\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "\r\n                                                     \r\n                                                    "
                                          ),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-danger  mb-3",
                                              attrs: { type: "button" }
                                            },
                                            [
                                              _vm._v(
                                                "Cancel\r\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "\r\n                                                     \r\n                                                    "
                                          ),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-secondary bttn_reset butn buttn  mb-3",
                                              attrs: { type: "reset" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                        Reset\r\n                                                    "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-lg-12" },
                        [
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-pencil'></i> Form Actions On Top & Bottom"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  staticClass: "form-horizontal",
                                  attrs: { action: "#" }
                                },
                                [
                                  _c("div", [
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "col-sm-12 text-center"
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary  mb-3",
                                              attrs: { type: "button" }
                                            },
                                            [
                                              _vm._v(
                                                "Submit\r\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "\r\n                                                     \r\n                                                    "
                                          ),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-danger  mb-3",
                                              attrs: { type: "button" }
                                            },
                                            [
                                              _vm._v(
                                                "Cancel\r\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "\r\n                                                     \r\n                                                    "
                                          ),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-secondary bttn_reset butn  mb-3",
                                              attrs: { type: "reset" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                        Reset\r\n                                                    "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-body" }, [
                                    _c(
                                      "div",
                                      { staticClass: "form-group m-t-10 row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputUsername3" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Username\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-6" }, [
                                          _c(
                                            "div",
                                            { staticClass: "input-group " },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "input-group-prepend"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "input-group-text bg-white"
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fa fa-fw ti-user"
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "inputUsername3",
                                                  placeholder: "Username"
                                                }
                                              })
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputEmail3" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Email\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-6" }, [
                                          _c(
                                            "div",
                                            { staticClass: "input-group " },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "input-group-prepend"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "input-group-text bg-white"
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fa ti-email"
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "inputEmail3",
                                                  placeholder: "Email Address"
                                                }
                                              })
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "fapassword" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Password\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-6" }, [
                                          _c(
                                            "div",
                                            { staticClass: "input-group " },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "input-group-prepend"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "input-group-text bg-white"
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fa fa-fw ti-key"
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "password",
                                                  placeholder: "Password",
                                                  id: "fapassword"
                                                }
                                              })
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputnumber3" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Phone Number\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-6" }, [
                                          _c(
                                            "div",
                                            { staticClass: "input-group " },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "input-group-prepend"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "input-group-text bg-white"
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fa fa-fw ti-mobile"
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "inputnumber3",
                                                  placeholder: "Phone Number"
                                                }
                                              })
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputAddress3" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Address\r\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-6" }, [
                                          _c(
                                            "div",
                                            { staticClass: "input-group " },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "input-group-prepend"
                                                },
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "input-group-text bg-white"
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fa fa-fw ti-pencil"
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "inputAddress3",
                                                  placeholder: "Address"
                                                }
                                              })
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputContent3" }
                                              },
                                              [_vm._v("Message")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-6" }, [
                                          _c("textarea", {
                                            staticClass:
                                              "form-control resize_vertical",
                                            attrs: {
                                              id: "inputContent3",
                                              rows: "3"
                                            }
                                          })
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-actions" }, [
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "col-sm-12 text-center"
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary  mb-3",
                                              attrs: { type: "button" }
                                            },
                                            [
                                              _vm._v(
                                                "Submit\r\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "\r\n                                                     \r\n                                                    "
                                          ),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-danger  mb-3",
                                              attrs: { type: "button" }
                                            },
                                            [
                                              _vm._v(
                                                "Cancel\r\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "\r\n                                                     \r\n                                                    "
                                          ),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-secondary bttn_reset butn  mb-3",
                                              attrs: { type: "reset" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                        Reset\r\n                                                    "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-lg-6" },
                        [
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  " <i class='fa fa-fw ti-pencil'></i> Left Aligned"
                              }
                            },
                            [
                              _c("form", { attrs: { action: "#" } }, [
                                _c("div", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary  mb-3",
                                      attrs: { type: "button" }
                                    },
                                    [
                                      _vm._v(
                                        "Submit\r\n                                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(
                                    "\r\n                                             \r\n                                            "
                                  ),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger  mb-3",
                                      attrs: { type: "button" }
                                    },
                                    [_vm._v("Cancel")]
                                  ),
                                  _vm._v(
                                    "\r\n                                             \r\n                                            "
                                  ),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-secondary bttn_reset butn  mb-3",
                                      attrs: { type: "reset" }
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                                                Reset\r\n                                            "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-body" }, [
                                  _c(
                                    "div",
                                    { staticClass: "form-group m-t-10" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "control-label",
                                          attrs: { for: "inputUsername4" }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                    Username\r\n                                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "input-group " },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-prepend"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "input-group-text bg-white"
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fa fa-fw ti-user"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              id: "inputUsername4",
                                              placeholder: "Username"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "control-label",
                                        attrs: { for: "inputEmail4" }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                    Email\r\n                                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "input-group " }, [
                                      _c(
                                        "div",
                                        { staticClass: "input-group-prepend" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "input-group-text bg-white"
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa ti-email"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "inputEmail4",
                                          placeholder: "Email Address"
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "control-label",
                                        attrs: { for: "validpassword" }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                    Password\r\n                                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "input-group " }, [
                                      _c(
                                        "div",
                                        { staticClass: "input-group-prepend" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "input-group-text bg-white"
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fa fa-fw ti-key"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          placeholder: "Password",
                                          id: "validpassword"
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "control-label",
                                        attrs: { for: "inputnumber4" }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                    Phone Number\r\n                                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "input-group " }, [
                                      _c(
                                        "div",
                                        { staticClass: "input-group-prepend" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "input-group-text bg-white"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-fw ti-mobile"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "inputnumber4",
                                          placeholder: "Phone Number"
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "control-label",
                                        attrs: { for: "inputAddress4" }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                    Address\r\n                                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "input-group " }, [
                                      _c(
                                        "div",
                                        { staticClass: "input-group-prepend" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "input-group-text bg-white"
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-fw ti-pencil"
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "inputAddress4",
                                          placeholder: "Address"
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group mbn" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "control-label",
                                        attrs: { for: "inputContent4" }
                                      },
                                      [_vm._v("Message")]
                                    ),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      staticClass:
                                        "form-control resize_vertical",
                                      attrs: { id: "inputContent4", rows: "3" }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-actions" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn  mb-3 btn-primary",
                                      attrs: { type: "button" }
                                    },
                                    [
                                      _vm._v(
                                        "Submit\r\n                                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(
                                    "\r\n                                             \r\n                                            "
                                  ),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn  mb-3 btn-danger",
                                      attrs: { type: "button" }
                                    },
                                    [_vm._v("Cancel")]
                                  ),
                                  _vm._v(
                                    "\r\n                                             \r\n                                            "
                                  ),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn  mb-3 btn-secondary bttn_reset butn",
                                      attrs: { type: "reset" }
                                    },
                                    [
                                      _vm._v(
                                        "\r\n                                                Reset\r\n                                            "
                                      )
                                    ]
                                  )
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
                        { staticClass: "col-lg-6" },
                        [
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-pencil'></i> Right Aligned"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  staticClass: "right_aligned",
                                  attrs: { action: "#" }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "float-md-right " },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn  mb-3 btn-primary",
                                          attrs: { type: "button" }
                                        },
                                        [
                                          _vm._v(
                                            "Submit\r\n                                            "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn  mb-3 btn-danger",
                                          attrs: { type: "button" }
                                        },
                                        [_vm._v("Cancel")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn  mb-3 btn-secondary bttn_reset butn",
                                          attrs: { type: "reset" }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                Reset\r\n                                            "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-body" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "control-label",
                                          attrs: { for: "inputUsername5" }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                    Username\r\n                                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "input-group " },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-prepend"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "input-group-text bg-white"
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fa fa-fw ti-user"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              id: "inputUsername5",
                                              placeholder: "Username"
                                            }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "control-label",
                                          attrs: { for: "inputEmail5" }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                    Email\r\n                                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "input-group " },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-prepend"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "input-group-text bg-white"
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fa ti-email"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              placeholder: "Email Address",
                                              id: "inputEmail5"
                                            }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "control-label",
                                          attrs: { for: "uniquepassword" }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                    Password\r\n                                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "input-group " },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-prepend"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "input-group-text bg-white"
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fa fa-fw ti-key"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "password",
                                              placeholder: "Password",
                                              id: "uniquepassword"
                                            }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "control-label",
                                          attrs: { for: "inputnumber5" }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                    Phone Number\r\n                                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "input-group " },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-prepend"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "input-group-text bg-white"
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fa fa-fw ti-mobile"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              id: "inputnumber5",
                                              placeholder: "Phone Number"
                                            }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "control-label",
                                          attrs: { for: "inputAddress5" }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                    Address\r\n                                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "input-group " },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-prepend"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "input-group-text bg-white"
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fa fa-fw ti-pencil"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              placeholder: "Address",
                                              id: "inputAddress5"
                                            }
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group mbn" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "control-label",
                                            attrs: { for: "inputContent" }
                                          },
                                          [_vm._v("Message")]
                                        ),
                                        _vm._v(" "),
                                        _c("textarea", {
                                          staticClass:
                                            "form-control resize_vertical",
                                          attrs: {
                                            id: "inputContent",
                                            rows: "3"
                                          }
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "form-actions float-md-right "
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn  mb-3 btn-primary",
                                          attrs: { type: "button" }
                                        },
                                        [
                                          _vm._v(
                                            "Submit\r\n                                            "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn  mb-3 btn-danger",
                                          attrs: { type: "button" }
                                        },
                                        [_vm._v("Cancel")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn  mb-3 btn-secondary bttn_reset butn",
                                          attrs: { type: "reset" }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                Reset\r\n                                            "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-tab", { attrs: { title: "2 Columns" } }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-12" },
                        [
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-pencil'></i> Form 2 Columns Default"
                              }
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: " col-sm-6" }, [
                                  _c("form", [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group row has-success"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 float-md-right txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label text-success",
                                                attrs: { for: "inputSuccess1" }
                                              },
                                              [
                                                _vm._v(
                                                  "First\r\n                                                            Name\r\n                                                        "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-9" }, [
                                          _c("input", {
                                            staticClass:
                                              "form-control form-control-success is-valid",
                                            attrs: {
                                              type: "text",
                                              id: "inputSuccess1",
                                              placeholder: "Input with success"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "form-text text-success"
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                                        First name is too small\r\n                                                                    "
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "form-group has-error row"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 float-md-right text-danger txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputError1" }
                                              },
                                              [_vm._v("Email")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-9" }, [
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "email",
                                              id: "inputError1",
                                              placeholder: "Input with error"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "form-text text-danger"
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                                        Please enter a valid email address\r\n                                                                    "
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-sm-6" }, [
                                  _c("form", [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group row has-success has-feedback"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 float-md-right text-success txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputSuccess2" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                            Second Name\r\n                                                        "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-9" }, [
                                          _c("input", {
                                            staticClass:
                                              "form-control is-valid ",
                                            attrs: {
                                              type: "text",
                                              id: "inputSuccess2",
                                              placeholder: "Input with success"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "form-text text-success"
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                                        Second name is too small\r\n                                                                    "
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "form-group row has-error has-feedback"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "col-sm-3 float-md-right text-danger txt_media"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass:
                                                  "form-control-label",
                                                attrs: { for: "inputError2" }
                                              },
                                              [
                                                _vm._v(
                                                  "\r\n                                                            Confirm Email\r\n                                                        "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "col-sm-9" }, [
                                          _c("input", {
                                            staticClass:
                                              "form-control brdr_danger",
                                            attrs: {
                                              type: "email",
                                              id: "inputError2",
                                              placeholder: "Input with error"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass:
                                                "form-text text-danger"
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                                        Email mis-match\r\n                                                                    "
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "div",
                                        { staticClass: "col-sm-10 ml-auto" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass: "btn   btn-primary",
                                              attrs: { type: "button" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                            Login\r\n                                                        "
                                              )
                                            ]
                                          )
                                        ]
                                      )
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
                        { staticClass: "col-lg-12" },
                        [
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-pencil'></i> Personal Details Horizontal"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  staticClass: "form-horizontal",
                                  attrs: { method: "post" }
                                },
                                [
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-3 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "first_Name" }
                                                },
                                                [
                                                  _vm._v(
                                                    "First\r\n                                                            Name:\r\n                                                        "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-9" },
                                            [
                                              _c("input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "first_Name",
                                                  placeholder: "First Name"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-3 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "input_Email" }
                                                },
                                                [_vm._v("Email:")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-9" },
                                            [
                                              _c("input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "email",
                                                  id: "input_Email",
                                                  placeholder: "Email"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-3 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: {
                                                    for: "input_Password"
                                                  }
                                                },
                                                [_vm._v("Password:")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-9" },
                                            [
                                              _c("input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "password",
                                                  id: "input_Password",
                                                  placeholder: "Password"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-3 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label m-t-10"
                                                },
                                                [
                                                  _vm._v(
                                                    "Date of\r\n                                                            Birth:"
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-3 m-t-10" },
                                            [
                                              _c(
                                                "select",
                                                { staticClass: "form-control" },
                                                [
                                                  _c("option", [
                                                    _vm._v("Date")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("1")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("2")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("3")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("4")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("5")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("6")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("7")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("8")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("9")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("10")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("11")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("12")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("13")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("14")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("15")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("16")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("17")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("18")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("19")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("20")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("21")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("22")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("23")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("24")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("25")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("26")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("27")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("28")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("29")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("30")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("31")])
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-3 m-t-10" },
                                            [
                                              _c(
                                                "select",
                                                { staticClass: "form-control" },
                                                [
                                                  _c("option", [
                                                    _vm._v("Month")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("1")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("2")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("3")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("4")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("5")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("6")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("7")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("8")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("9")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("10")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("11")]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("12")])
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-3 m-t-10" },
                                            [
                                              _c(
                                                "select",
                                                { staticClass: "form-control" },
                                                [
                                                  _c("option", [
                                                    _vm._v("Year")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("1991")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("1992")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("1993")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("1994")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("1995")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("1996")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("1997")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("1998")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("1999")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2000")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2001")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2002")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2003")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2004")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2005")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2006")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2007")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2008")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2009")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2000")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2011")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2012")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2013")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2014")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2015")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2016")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [
                                                    _vm._v("2017")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("option", [_vm._v("2018")])
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-3 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "Zip_Code" }
                                                },
                                                [
                                                  _vm._v(
                                                    "Zip\r\n                                                            Code:\r\n                                                        "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-9" },
                                            [
                                              _c("input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "Zip_Code",
                                                  placeholder: "Zip Code"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-3 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "city" }
                                                },
                                                [_vm._v("City:")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-9" },
                                            [
                                              _c("input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "city",
                                                  placeholder: "City"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "form-group" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-9 ml-auto" },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass: "checkbox-inline"
                                              },
                                              [
                                                _c("b-form-checkbox", [
                                                  _vm._v(
                                                    "\r\n\r\n                                                                All Flavors\r\n                                                            "
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-3 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "last_Name" }
                                                },
                                                [
                                                  _vm._v(
                                                    "Last\r\n                                                            Name:\r\n                                                        "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-9" },
                                            [
                                              _c("input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "last_Name",
                                                  placeholder: "Last Name"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-3 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "phone_Number" }
                                                },
                                                [
                                                  _vm._v(
                                                    "phone:\r\n                                                        "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-9" },
                                            [
                                              _c("input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "phone_Number",
                                                  placeholder: "Phone Number"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-3 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: {
                                                    for: "confirm_Password"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "confirm password:\r\n                                                        "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-9" },
                                            [
                                              _c("input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "text",
                                                  id: "confirm_Password",
                                                  placeholder:
                                                    "Confirm Password"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-3 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: {
                                                    for: "postal_Address"
                                                  }
                                                },
                                                [_vm._v("Address:")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-9" },
                                            [
                                              _c("textarea", {
                                                staticClass:
                                                  "form-control resize_vertical",
                                                attrs: {
                                                  rows: "3",
                                                  id: "postal_Address",
                                                  placeholder: "Postal Address"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-3 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass: "control-label"
                                                },
                                                [_vm._v("Gender:")]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-8" },
                                            [
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: {
                                                    name: "gender",
                                                    checked: "false"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                            Male\r\n                                                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-radio",
                                                {
                                                  attrs: {
                                                    name: "gender",
                                                    checked: "false"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                            Female\r\n                                                        "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "form-group" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "col-sm-9 ml-auto mr-4"
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass: "checkbox-inline"
                                              },
                                              [
                                                _c("b-form-checkbox", [
                                                  _vm._v(
                                                    "\r\n                                                                I agree to the\r\n                                                                "
                                                  ),
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass: "forgot",
                                                      attrs: { href: "#" }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Terms and\r\n                                                                    Conditions."
                                                      )
                                                    ]
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group form-actions"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-offset-3 col-sm-9 ml-auto"
                                            },
                                            [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn  btn-primary",
                                                  attrs: { type: "button" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                            Submit\r\n                                                        "
                                                  )
                                                ]
                                              ),
                                              _vm._v(
                                                "\r\n                                                          \r\n                                                        "
                                              ),
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-effect-ripple  btn-secondary  reset_btn1",
                                                  attrs: { type: "reset" }
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                            Reset\r\n                                                        "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
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
                        { staticClass: "col-lg-12" },
                        [
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-pencil'></i> Form 2 Columns Readonly"
                              }
                            },
                            [
                              _c("form", { attrs: { action: "#" } }, [
                                _c("div", { staticClass: "form-body" }, [
                                  _c("h3", [_vm._v("Personal")]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-5 col-6 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label"
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                                First Name:\r\n                                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-7 col-6" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "form-control-plaintext"
                                                },
                                                [_vm._v("Jenny")]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-5 col-6 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label"
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                                Last Name:\r\n                                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-7 col-6" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "form-control-plaintext"
                                                },
                                                [_vm._v("Kerry")]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-5 col-6 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label",
                                                  attrs: { for: "inputEmail6" }
                                                },
                                                [
                                                  _vm._v(
                                                    "Email\r\n                                                                :\r\n                                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-7 col-6" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "form-control-plaintext"
                                                },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass: "forgot",
                                                      attrs: {
                                                        href:
                                                          "mailto:whisfat1935@jourrapide.com"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\r\n                                                                                    Jenny321@example.com\r\n                                                                                "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-6 col-sm-6" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group row" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-sm-5 col-6 float-md-right txt_media"
                                              },
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "form-control-label"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Gender :\r\n                                                            "
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "col-sm-7 col-6" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "form-control-plaintext"
                                                  },
                                                  [_vm._v("Female")]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-6 col-sm-6" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group row" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-sm-5 col-6 float-md-right txt_media"
                                              },
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "form-control-label"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Birthday :\r\n                                                            "
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "col-sm-7 col-6" },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "form-control-plaintext"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\r\n                                                                                10.11.1980"
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-6 col-sm-6" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group row" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-sm-5 col-6 float-md-right txt_media"
                                              },
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "form-control-label"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Phone :\r\n                                                            "
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "col-sm-7 col-6" },
                                              [
                                                _c(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "form-control-plaintext"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\r\n                                                                321-333-5432\r\n                                                            "
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("h3", [_vm._v("Address")]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "div",
                                        { staticClass: "row form-group" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-5 col-6 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label"
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                                Address 1:\r\n                                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-7 col-6" },
                                            [
                                              _c(
                                                "p",
                                                { staticClass: "form-text" },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                                1219 Quiet Subdivision\r\n                                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "div",
                                        { staticClass: "form-group row" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-5 col-6 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label"
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                                Address 2:\r\n                                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-7 col-6" },
                                            [
                                              _c(
                                                "p",
                                                { staticClass: "form-text" },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                                3536 Petunia Way\r\n                                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-6 col-sm-6" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-group row" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "col-sm-5 col-6 float-md-right txt_media"
                                              },
                                              [
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "form-control-label"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "City\r\n                                                                :"
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "col-sm-7 col-6" },
                                              [
                                                _c(
                                                  "p",
                                                  { staticClass: "form-text" },
                                                  [_vm._v("Albany")]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "div",
                                        { staticClass: "row form-group" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-5 col-6 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass:
                                                    "form-control-label"
                                                },
                                                [
                                                  _vm._v(
                                                    "State :\r\n                                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-7 col-6" },
                                            [
                                              _c(
                                                "p",
                                                { staticClass: "form-text" },
                                                [_vm._v("New york")]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "div",
                                        { staticClass: "row form-group" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-5 col-6 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass: "control-label"
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                                Country :\r\n                                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-7 col-6" },
                                            [
                                              _c(
                                                "p",
                                                { staticClass: "form-text" },
                                                [_vm._v("USA")]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "div",
                                        { staticClass: "row form-group" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "col-sm-5 col-6 float-md-right txt_media"
                                            },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  staticClass: "control-label"
                                                },
                                                [
                                                  _vm._v(
                                                    "\r\n                                                                Post Code:\r\n                                                            "
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "col-sm-7 col-6" },
                                            [
                                              _c(
                                                "p",
                                                { staticClass: "form-text" },
                                                [_vm._v("12203")]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                ])
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-tab", { attrs: { title: "Form Striped" } }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-12" },
                        [
                          _c(
                            "card",
                            {
                              staticClass: "striped_full",
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-move'></i> Form Bordered Striped"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  staticClass: "form-bordered",
                                  attrs: {
                                    method: "post",
                                    enctype: "multipart/form-data"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row striped-col"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label"
                                            },
                                            [_vm._v("Static")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-sm-9" }, [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "form-control-plaintext"
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Static text\r\n                                                "
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: {
                                              for: "example-text-input1"
                                            }
                                          },
                                          [_vm._v("Text")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "example-text-input1",
                                          name: "example-text-input",
                                          placeholder: "Text"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "form-control-plaintext"
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                            This is a help text\r\n                                                        "
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row striped-col"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: { for: "example-email1" }
                                            },
                                            [_vm._v("Email")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-sm-6" }, [
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "email",
                                            id: "example-email1",
                                            name: "example-email",
                                            placeholder: "Email"
                                          }
                                        })
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "example-password1" }
                                          },
                                          [_vm._v("Password")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          id: "example-password1",
                                          name: "example-password",
                                          placeholder: "Password"
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row striped-col"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: {
                                                for: "example-disabled1"
                                              }
                                            },
                                            [_vm._v("Disabled")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-sm-6" }, [
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            id: "example-disabled1",
                                            name: "example-disabled",
                                            placeholder: "Disabled",
                                            disabled: ""
                                          }
                                        })
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: {
                                              for: "example-textarea-input2"
                                            }
                                          },
                                          [_vm._v("Textarea")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c("textarea", {
                                        staticClass:
                                          "form-control resize_vertical",
                                        attrs: {
                                          id: "example-textarea-input2",
                                          name: "example-textarea-input",
                                          rows: "7",
                                          placeholder: "Description...."
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row striped-col"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: { for: "example-select1" }
                                            },
                                            [_vm._v("Select")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-sm-6" }, [
                                        _c(
                                          "select",
                                          {
                                            staticClass: "form-control",
                                            attrs: {
                                              id: "example-select1",
                                              name: "example-select",
                                              size: "1"
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "0" } },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Please select\r\n                                                    "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "1" } },
                                              [_vm._v("Bootstrap")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "2" } },
                                              [_vm._v("CSS")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "3" } },
                                              [_vm._v("JavaScript")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "4" } },
                                              [_vm._v("HTML")]
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: {
                                              for: "example-multiple-select2"
                                            }
                                          },
                                          [_vm._v("Multiple")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "select",
                                        {
                                          staticClass: "form-control",
                                          attrs: {
                                            id: "example-multiple-select2",
                                            name: "example-multiple-select",
                                            size: "5",
                                            multiple: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "1" } },
                                            [_vm._v("Option #1")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "2" } },
                                            [_vm._v("Option #2")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "3" } },
                                            [_vm._v("Option #3")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "4" } },
                                            [_vm._v("Option #4")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "5" } },
                                            [_vm._v("Option #5")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "6" } },
                                            [_vm._v("Option #6")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "7" } },
                                            [_vm._v("Option #7")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "8" } },
                                            [_vm._v("Option #8")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "9" } },
                                            [_vm._v("Option #9")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "10" } },
                                            [_vm._v("Option #10")]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row  striped-col"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label"
                                            },
                                            [
                                              _vm._v(
                                                "Radio\r\n                                                    Buttons"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col-sm-9" },
                                        [
                                          _c("b-form-radio-group", {
                                            attrs: {
                                              stacked: "",
                                              options: _vm.example_radio
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-control-label" },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Inline Radio Buttons\r\n                                                "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9" },
                                      [
                                        _c(
                                          "b-form-radio",
                                          {
                                            attrs: {
                                              name: "example-inline-radio",
                                              checked: "false"
                                            }
                                          },
                                          [_vm._v("HTML")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-radio",
                                          {
                                            attrs: {
                                              name: "example-inline-radio",
                                              checked: "false"
                                            }
                                          },
                                          [_vm._v("CSS")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-radio",
                                          {
                                            attrs: {
                                              name: "example-inline-radio",
                                              checked: "false"
                                            }
                                          },
                                          [_vm._v("JavaScript")]
                                        )
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row striped-col"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label"
                                            },
                                            [_vm._v("Checkboxes")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col-sm-9" },
                                        [
                                          _c("b-form-checkbox-group", {
                                            attrs: {
                                              stacked: "",
                                              options: _vm.example_check
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-control-label" },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Inline Checkboxes\r\n                                                "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c("b-form-checkbox", [
                                              _vm._v("HTML")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c("b-form-checkbox", [
                                              _vm._v("CSS")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c("b-form-checkbox", [
                                              _vm._v("JavaScript")
                                            ])
                                          ],
                                          1
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row striped-col"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: {
                                                for: "example-file-input1"
                                              }
                                            },
                                            [_vm._v("File")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-sm-9" }, [
                                        _c("input", {
                                          attrs: {
                                            type: "file",
                                            id: "example-file-input1",
                                            name: "example-file-input"
                                          }
                                        })
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: {
                                              for:
                                                "example-file-multiple-input1"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Multiple File\r\n                                                "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("input", {
                                        attrs: {
                                          type: "file",
                                          id: "example-file-multiple-input1",
                                          name: "example-file-multiple-input",
                                          multiple: ""
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row form-actions"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-9 col-sm-offset-3 ml-auto"
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-effect-ripple  btn-primary   ",
                                              attrs: { type: "button" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                    Submit\r\n                                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-effect-ripple  btn-secondary reset_btn2",
                                              attrs: { type: "reset" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                    Reset\r\n                                                "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "card",
                            {
                              staticClass: "striped_full",
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-move'></i> Form Seperated Row Striped"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  staticClass: "form-bordered-row",
                                  attrs: {
                                    method: "post",
                                    enctype: "multipart/form-data"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row striped-col"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label"
                                            },
                                            [_vm._v("Static")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-sm-9" }, [
                                        _c(
                                          "p",
                                          {
                                            staticClass:
                                              "form-control-plaintext"
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Static text\r\n                                                "
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: {
                                              for: "example-text-input2"
                                            }
                                          },
                                          [_vm._v("Text")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "example-text-input2",
                                          name: "example-text-input",
                                          placeholder: "Text"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "help-block" },
                                        [
                                          _vm._v(
                                            "\r\n                                                                This is a help text\r\n                                                            "
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row striped-col"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: { for: "example-email2" }
                                            },
                                            [_vm._v("Email")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-sm-6" }, [
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "email",
                                            id: "example-email2",
                                            name: "example-email",
                                            placeholder: "Email"
                                          }
                                        })
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "example-password2" }
                                          },
                                          [_vm._v("Password")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          id: "example-password2",
                                          name: "example-password",
                                          placeholder: "Password"
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row striped-col"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: {
                                                for: "example-disabled2"
                                              }
                                            },
                                            [_vm._v("Disabled")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-sm-6" }, [
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            id: "example-disabled2",
                                            name: "example-disabled",
                                            placeholder: "Disabled",
                                            disabled: ""
                                          }
                                        })
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: {
                                              for: "example-textarea-input1"
                                            }
                                          },
                                          [_vm._v("Textarea")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c("textarea", {
                                        staticClass:
                                          "form-control resize_vertical",
                                        attrs: {
                                          id: "example-textarea-input1",
                                          name: "example-textarea-input",
                                          rows: "7",
                                          placeholder: "Description.."
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row striped-col"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: { for: "example-select2" }
                                            },
                                            [_vm._v("Select")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-sm-6" }, [
                                        _c(
                                          "select",
                                          {
                                            staticClass: "form-control",
                                            attrs: {
                                              id: "example-select2",
                                              name: "example-select",
                                              size: "1"
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "0" } },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Please select\r\n                                                    "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "1" } },
                                              [_vm._v("Bootstrap")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "2" } },
                                              [_vm._v("CSS")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "3" } },
                                              [_vm._v("JavaScript")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "4" } },
                                              [_vm._v("HTML")]
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: {
                                              for: "example-multiple-select1"
                                            }
                                          },
                                          [_vm._v("Multiple")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "select",
                                        {
                                          staticClass: "form-control",
                                          attrs: {
                                            id: "example-multiple-select1",
                                            name: "example-multiple-select",
                                            size: "5",
                                            multiple: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "1" } },
                                            [_vm._v("Option #1")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "2" } },
                                            [_vm._v("Option #2")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "3" } },
                                            [_vm._v("Option #3")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "4" } },
                                            [_vm._v("Option #4")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "5" } },
                                            [_vm._v("Option #5")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "6" } },
                                            [_vm._v("Option #6")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "7" } },
                                            [_vm._v("Option #7")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "8" } },
                                            [_vm._v("Option #8")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "9" } },
                                            [_vm._v("Option #9")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "10" } },
                                            [_vm._v("Option #10")]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row striped-col"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label"
                                            },
                                            [
                                              _vm._v(
                                                "Radio\r\n                                                    Buttons"
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col-sm-9" },
                                        [
                                          _c("b-form-radio-group", {
                                            attrs: {
                                              stacked: "",
                                              options:
                                                _vm.example_radio_seperated
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-control-label" },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Inline Radio Buttons\r\n                                                "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c(
                                              "b-form-radio",
                                              {
                                                attrs: {
                                                  checked: "false",
                                                  name: "example-inline-radio"
                                                }
                                              },
                                              [_vm._v("HTML")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c(
                                              "b-form-radio",
                                              {
                                                attrs: {
                                                  checked: "false",
                                                  name: "example-inline-radio"
                                                }
                                              },
                                              [_vm._v("CSS")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c(
                                              "b-form-radio",
                                              {
                                                attrs: {
                                                  checked: "false",
                                                  name: "example-inline-radio"
                                                }
                                              },
                                              [_vm._v("JavaScript")]
                                            )
                                          ],
                                          1
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row striped-col"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label"
                                            },
                                            [_vm._v("Checkboxes")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col-sm-9" },
                                        [
                                          _c("b-form-checkbox-group", {
                                            attrs: {
                                              stacked: "",
                                              options:
                                                _vm.example_check_seperated
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-control-label" },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Inline Checkboxes\r\n                                                "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c("b-form-checkbox", [
                                              _vm._v("HTML")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c("b-form-checkbox", [
                                              _vm._v("CSS")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c("b-form-checkbox", [
                                              _vm._v("JavaScript")
                                            ])
                                          ],
                                          1
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row striped-col "
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-3 float-md-right txt_media"
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "form-control-label",
                                              attrs: {
                                                for: "example-file-input2"
                                              }
                                            },
                                            [_vm._v("File")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-sm-9" }, [
                                        _c("input", {
                                          attrs: {
                                            type: "file",
                                            id: "example-file-input2",
                                            name: "example-file-input"
                                          }
                                        })
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: {
                                              for:
                                                "example-file-multiple-input2"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Multiple File\r\n                                                "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("input", {
                                        attrs: {
                                          type: "file",
                                          id: "example-file-multiple-input2",
                                          name: "example-file-multiple-input",
                                          multiple: ""
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group form-actions" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-9 col-sm-offset-3 ml-auto"
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-effect-ripple  btn-primary",
                                              attrs: { type: "button" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                    Submit\r\n                                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-effect-ripple btn-secondary  reset_btn3",
                                              attrs: { type: "reset" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                    Reset\r\n                                                "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "card",
                            {
                              staticClass: "striped_full border",
                              attrs: {
                                title:
                                  " <i class='fa fa-fw ti-move'></i> Form Bordered"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  staticClass: "form-bordered",
                                  attrs: {
                                    method: "post",
                                    enctype: "multipart/form-data"
                                  }
                                },
                                [
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3  txt_media border-left-none"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "form-control-label float-md-right"
                                          },
                                          [_vm._v("Static")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c(
                                        "p",
                                        {
                                          staticClass: "form-control-plaintext"
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                    Static text\r\n                                                "
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row form-group" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label txt_media",
                                        attrs: { for: "example-text-input3" }
                                      },
                                      [_vm._v("Text")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "example-text-input3",
                                          name: "example-text-input",
                                          placeholder: "Text"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "help-block" },
                                        [
                                          _vm._v(
                                            "\r\n                                                                This is a help text\r\n                                                            "
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row form-group" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label txt_media",
                                        attrs: { for: "example-email3" }
                                      },
                                      [_vm._v("Email")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "email",
                                          id: "example-email3",
                                          name: "example-email",
                                          placeholder: "Email"
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label txt_media",
                                        attrs: { for: "example-password3" }
                                      },
                                      [_vm._v("Password")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          id: "example-password3",
                                          name: "example-password",
                                          placeholder: "Password"
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label txt_media",
                                        attrs: { for: "example-disabled3" }
                                      },
                                      [_vm._v("Disabled")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "example-disabled3",
                                          name: "example-disabled",
                                          placeholder: "Disabled",
                                          disabled: ""
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label txt_media",
                                        attrs: {
                                          for: "example-textarea-input3"
                                        }
                                      },
                                      [_vm._v("Textarea")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c("textarea", {
                                        staticClass:
                                          "form-control resize_vertical",
                                        attrs: {
                                          id: "example-textarea-input3",
                                          name: "example-textarea-input",
                                          rows: "7",
                                          placeholder: "Description.."
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label txt_media",
                                        attrs: { for: "example-select3" }
                                      },
                                      [_vm._v("Select")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "select",
                                        {
                                          staticClass: "form-control",
                                          attrs: {
                                            id: "example-select3",
                                            name: "example-select",
                                            size: "1"
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "0" } },
                                            [
                                              _vm._v(
                                                "\r\n                                                        Please select\r\n                                                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "1" } },
                                            [_vm._v("Bootstrap")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "2" } },
                                            [_vm._v("CSS")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "3" } },
                                            [_vm._v("JavaScript")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "4" } },
                                            [_vm._v("HTML")]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label txt_media",
                                        attrs: {
                                          for: "example-multiple-select3"
                                        }
                                      },
                                      [_vm._v("Multiple")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-6" }, [
                                      _c(
                                        "select",
                                        {
                                          staticClass: "form-control",
                                          attrs: {
                                            id: "example-multiple-select3",
                                            name: "example-multiple-select",
                                            size: "5",
                                            multiple: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "1" } },
                                            [_vm._v("Option #1")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "2" } },
                                            [_vm._v("Option #2")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "3" } },
                                            [_vm._v("Option #3")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "4" } },
                                            [_vm._v("Option #4")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "5" } },
                                            [_vm._v("Option #5")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "6" } },
                                            [_vm._v("Option #6")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "7" } },
                                            [_vm._v("Option #7")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "8" } },
                                            [_vm._v("Option #8")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "9" } },
                                            [_vm._v("Option #9")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "10" } },
                                            [_vm._v("Option #10")]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label txt_media"
                                      },
                                      [
                                        _vm._v(
                                          "Radio\r\n                                                Buttons"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9" },
                                      [
                                        _c("b-form-radio-group", {
                                          attrs: {
                                            stacked: "",
                                            options: _vm.example_radio_bordered
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label txt_media"
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                Inline Radio Buttons\r\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c(
                                              "b-form-radio",
                                              {
                                                attrs: {
                                                  checked: "false",
                                                  name:
                                                    "exaple_radio_bordered_inline"
                                                }
                                              },
                                              [_vm._v("HTML")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c(
                                              "b-form-radio",
                                              {
                                                attrs: {
                                                  checked: "false",
                                                  name:
                                                    "exaple_radio_bordered_inline"
                                                }
                                              },
                                              [_vm._v("CSS")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c(
                                              "b-form-radio",
                                              {
                                                attrs: {
                                                  checked: "false",
                                                  name:
                                                    "exaple_radio_bordered_inline"
                                                }
                                              },
                                              [_vm._v("JavaScript")]
                                            )
                                          ],
                                          1
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label txt_media"
                                      },
                                      [_vm._v("Checkboxes")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9" },
                                      [
                                        _c("b-form-checkbox-group", {
                                          attrs: {
                                            stacked: "",
                                            options: _vm.example_check_bordered
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label txt_media"
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                Inline Checkboxes\r\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c("b-form-checkbox", [
                                              _vm._v("HTML")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c("b-form-checkbox", [
                                              _vm._v("CSS")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c("b-form-checkbox", [
                                              _vm._v("JavaScript")
                                            ])
                                          ],
                                          1
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label txt_media",
                                        attrs: { for: "example-file-input3" }
                                      },
                                      [_vm._v("File")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("input", {
                                        attrs: {
                                          type: "file",
                                          id: "example-file-input3",
                                          name: "example-file-input3"
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label txt_media",
                                        attrs: {
                                          for: "example-file-multiple-input3"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                Multiple File\r\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("input", {
                                        attrs: {
                                          type: "file",
                                          id: "example-file-multiple-input3",
                                          name: "example-file-multiple-input3",
                                          multiple: ""
                                        }
                                      })
                                    ])
                                  ]),
                                  _c(
                                    "div",
                                    { staticClass: "form-group form-actions" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-9 col-sm-offset-3 ml-auto"
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-effect-ripple  btn-primary",
                                              attrs: { type: "button" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                Submit\r\n                                            "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-effect-ripple btn-secondary  reset_btn4",
                                              attrs: { type: "reset" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                Reset\r\n                                            "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-tab", { attrs: { title: "More Examples" } }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-heart'></i> Vertical Form Layout"
                              }
                            },
                            [
                              _c("form", [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { attrs: { for: "inputEmail7" } },
                                    [_vm._v("Email")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "email",
                                      id: "inputEmail7",
                                      placeholder: "Email"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { attrs: { for: "inputPassword1" } },
                                    [_vm._v("Password")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "password",
                                      id: "inputPassword1",
                                      placeholder: "Password"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "checkbox" }, [
                                  _c(
                                    "label",
                                    [
                                      _c(
                                        "b-form-checkbox",
                                        { staticClass: "remember" },
                                        [_vm._v("Remember me")]
                                      )
                                    ],
                                    1
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary  m-t-10",
                                      attrs: { type: "button" }
                                    },
                                    [
                                      _vm._v(
                                        "Login\r\n                                            "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-pencil'></i> Inline Form Layout"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  staticClass: "form-inline",
                                  attrs: { role: "form" }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "sr-only",
                                        attrs: { for: "inputEmail8" }
                                      },
                                      [_vm._v("Email")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "email",
                                        id: "inputEmail8",
                                        placeholder: "Email"
                                      }
                                    })
                                  ]),
                                  _vm._v(
                                    "\r\n                                          \r\n                                        "
                                  ),
                                  _c(
                                    "div",
                                    { staticClass: "form-group ml-1" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "sr-only",
                                          attrs: { for: "inputPassword2" }
                                        },
                                        [_vm._v("Password")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          id: "inputPassword2",
                                          placeholder: "Password"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    [
                                      _c(
                                        "b-form-checkbox",
                                        { staticClass: "remember ml-2" },
                                        [_vm._v("Remember me")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary  mr-1",
                                      attrs: { type: "button" }
                                    },
                                    [_vm._v("Login")]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  " <i class='fa fa-fw ti-pencil'></i> Static Form Control"
                              }
                            },
                            [
                              _c("form", [
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 float-md-right txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "inputEmail9" }
                                        },
                                        [_vm._v("Email")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c("p", { staticClass: "form-text" }, [
                                      _vm._v(
                                        "\r\n                                                    harrypotter@mail.com\r\n                                                "
                                      )
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "control-label col-sm-3 float-md-right txt_media",
                                      attrs: { for: "static_inputPassword3" }
                                    },
                                    [_vm._v("Password")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-sm-9" }, [
                                    _c("input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "password",
                                        id: "static_inputPassword3",
                                        placeholder: "Password"
                                      }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-offset-3 col-sm-9 ml-auto txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        [
                                          _c(
                                            "b-form-checkbox",
                                            { staticClass: "remember" },
                                            [_vm._v("Remember me")]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-offset-3 col-sm-9 ml-auto txt_media"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn  btn-primary",
                                          attrs: { type: "button" }
                                        },
                                        [
                                          _vm._v(
                                            "Login\r\n                                                "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-pencil'></i> Button Dropdowns"
                              }
                            },
                            [
                              _c("form", { staticClass: "d-inline" }, [
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-12 m-t-10" }, [
                                    _c(
                                      "div",
                                      { staticClass: "input-group mb-3" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "input-group-prepend fisrt_dropdwn"
                                          },
                                          [
                                            _c(
                                              "b-dropdown",
                                              {
                                                staticClass: "text-white",
                                                attrs: {
                                                  text: "Action",
                                                  variant: "info"
                                                }
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
                                                  _c(
                                                    "a",
                                                    { attrs: { href: "#" } },
                                                    [
                                                      _vm._v(
                                                        "seperated link here"
                                                      )
                                                    ]
                                                  )
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
                                          attrs: {
                                            type: "text",
                                            "aria-label":
                                              "Text input with checkbox"
                                          }
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-12 mt-2" }, [
                                    _c("div", { staticClass: "input-group" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "input-group-prepend fisrt_dropdwn"
                                        },
                                        [
                                          _c(
                                            "b-dropdown",
                                            {
                                              staticClass: "text-white",
                                              attrs: {
                                                text: "Action",
                                                variant: "warning"
                                              }
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
                                                _c(
                                                  "a",
                                                  { attrs: { href: "#" } },
                                                  [
                                                    _vm._v(
                                                      "seperated link here"
                                                    )
                                                  ]
                                                )
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
                                        attrs: {
                                          type: "text",
                                          "aria-label":
                                            "Text input with checkbox"
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("br")
                                  ])
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-pencil'></i> Disabled Inputs"
                              }
                            },
                            [
                              _c("form", [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Disabled input",
                                    disabled: ""
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c("form", { staticClass: "form-horizontal" }, [
                                _c("fieldset", [
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "inputEmail10" }
                                          },
                                          [_vm._v("Email")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "email",
                                            id: "inputEmail10",
                                            placeholder: "Email",
                                            disabled: ""
                                          }
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "inputPassword4" }
                                          },
                                          [_vm._v("Password")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "password",
                                            id: "inputPassword4",
                                            placeholder: "Password",
                                            disabled: ""
                                          }
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-offset-3 col-sm-9 col-lg-8 ml-auto txt_media"
                                      },
                                      [
                                        _c("div", { staticClass: "checkbox" }, [
                                          _c(
                                            "label",
                                            [
                                              _c(
                                                "b-form-checkbox",
                                                {
                                                  staticClass: "remember",
                                                  attrs: { disabled: "" }
                                                },
                                                [_vm._v("Remember me")]
                                              )
                                            ],
                                            1
                                          )
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-offset-3 col-sm-9 ml-auto txt_media"
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass: "btn  btn-primary",
                                            attrs: {
                                              type: "submit",
                                              disabled: ""
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "Login\r\n                                                    "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-pencil'></i> Supported Form Controls in Twitter Bootstrap"
                              }
                            },
                            [
                              _c("form", { attrs: { action: "#" } }, [
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-4 float-md-right txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "more_inputEmail4" }
                                        },
                                        [_vm._v("Email")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9 col-12 col-lg-8" },
                                    [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "email",
                                          id: "more_inputEmail4",
                                          placeholder: "Email"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-4 float-md-right txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "more_inputPassword5" }
                                        },
                                        [_vm._v("Password")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9 col-12 col-lg-8" },
                                    [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          id: "more_inputPassword5",
                                          placeholder: "Password"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-4 float-md-right txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "confirmPassword2" }
                                        },
                                        [_vm._v("Confirm Password")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9 col-12 col-lg-8" },
                                    [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          id: "confirmPassword2",
                                          placeholder: "Confirm Password"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-4 float-md-right txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "more_firstName" }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                    First Name\r\n                                                "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9 col-12 col-lg-8" },
                                    [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "more_firstName",
                                          placeholder: "First Name"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-4 float-md-right txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "more_lastName" }
                                        },
                                        [
                                          _vm._v(
                                            "Last\r\n                                                    Name\r\n                                                "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9 col-12 col-lg-8" },
                                    [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "more_lastName",
                                          placeholder: "Last Name"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-4 float-md-right txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "mobile_phoneNumber" }
                                        },
                                        [_vm._v("Phone")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9 col-12 col-lg-8" },
                                    [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "tel",
                                          id: "mobile_phoneNumber",
                                          placeholder: "Phone Number"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-4 float-md-right txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "more_mobile" }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                    Date of Birth\r\n                                                "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-2 col-12 m-t-10"
                                    },
                                    [
                                      _c(
                                        "select",
                                        {
                                          staticClass: "form-control",
                                          attrs: { id: "more_mobile" }
                                        },
                                        [
                                          _c("option", [_vm._v("Date")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("1")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("3")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("4")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("5")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("6")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("7")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("8")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("9")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("10")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("11")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("12")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("13")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("14")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("15")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("16")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("17")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("18")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("19")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("20")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("21")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("22")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("23")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("24")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("25")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("26")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("27")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("28")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("29")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("30")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("31")])
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-3 col-12 m-t-10"
                                    },
                                    [
                                      _c(
                                        "select",
                                        { staticClass: "form-control" },
                                        [
                                          _c("option", [_vm._v("Month")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("1")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("3")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("4")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("5")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("6")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("7")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("8")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("9")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("10")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("11")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("12")])
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-3 col-12 m-t-10"
                                    },
                                    [
                                      _c(
                                        "select",
                                        { staticClass: "form-control" },
                                        [
                                          _c("option", [_vm._v("Year")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("1991")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("1992")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("1993")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("1994")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("1995")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("1996")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("1997")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("1998")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("1999")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2000")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2001")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2002")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2003")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2004")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2005")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2006")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2007")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2008")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2009")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2000")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2011")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2012")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2013")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2014")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2015")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2016")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2017")]),
                                          _vm._v(" "),
                                          _c("option", [_vm._v("2018")])
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-4 float-md-right txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "control-label",
                                          attrs: { for: "more_postalAddress" }
                                        },
                                        [_vm._v("Address")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9 col-lg-8 col-12" },
                                    [
                                      _c("textarea", {
                                        staticClass:
                                          "form-control resize_vertical",
                                        attrs: {
                                          rows: "3",
                                          id: "more_postalAddress",
                                          placeholder: "Postal Address"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-4 float-md-right txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "form-control-label",
                                          attrs: { for: "ZipCode" }
                                        },
                                        [
                                          _vm._v(
                                            "Zip\r\n                                                    Code\r\n                                                "
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9 col-lg-8 col-12" },
                                    [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "ZipCode",
                                          placeholder: "Zip Code"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-4 float-md-right txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        { staticClass: "form-control-label" },
                                        [_vm._v("Gender")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9 col-12 col-lg-8" },
                                    [
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c(
                                              "b-form-radio",
                                              {
                                                attrs: {
                                                  checked: "false",
                                                  name: "radio_twitter"
                                                }
                                              },
                                              [_vm._v("Male")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4" },
                                          [
                                            _c(
                                              "b-form-radio",
                                              {
                                                attrs: {
                                                  checked: "false",
                                                  name: "radio_twitter"
                                                }
                                              },
                                              [_vm._v("Female")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-sm-4 col-lg-6" },
                                          [
                                            _c(
                                              "b-form-radio",
                                              {
                                                attrs: {
                                                  checked: "false",
                                                  name: "radio_twitter"
                                                }
                                              },
                                              [_vm._v("Others")]
                                            )
                                          ],
                                          1
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-offset-3 col-lg-offset-4 col-8 ml-auto txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        [
                                          _c("b-form-checkbox", [
                                            _vm._v(
                                              "  Send me\r\n                                                        latest news and updates."
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-offset-3 col-8 ml-auto txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        [
                                          _c("b-form-checkbox", [
                                            _vm._v(
                                              " I agree\r\n                                                        to\r\n                                                        the\r\n                                                        "
                                            ),
                                            _c("a", { attrs: { href: "#" } }, [
                                              _vm._v(
                                                "\r\n                                                            Terms and Conditions\r\n                                                        "
                                              )
                                            ])
                                          ])
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-offset-3= col-9 ml-auto txt_media"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "btn  btn-primary ",
                                        attrs: {
                                          type: "button",
                                          value: "Submit "
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn  btn-secondary mt-1 mt-sm-0",
                                          attrs: { type: "reset" }
                                        },
                                        [
                                          _vm._v(
                                            "Reset\r\n                                                "
                                          )
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
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-6" },
                        [
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-check-box'></i> Horizontal Form Layout"
                              }
                            },
                            [
                              _c("form", [
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-4 float-md-right txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "control-label ",
                                          attrs: {
                                            for: "horizontal_inputEmail"
                                          }
                                        },
                                        [_vm._v("Email")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9 col-lg-8" },
                                    [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "email",
                                          id: "horizontal_inputEmail",
                                          placeholder: "Email"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-3 col-lg-4 float-md-right txt_media"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label hidden-xs",
                                          attrs: {
                                            for: "horizontal_inputPassword"
                                          }
                                        },
                                        [_vm._v("Password")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-9 col-lg-8" },
                                    [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "password",
                                          id: "horizontal_inputPassword",
                                          placeholder: "Password"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-offset-3 col-sm-9 col-lg-8  ml-auto txt_media"
                                    },
                                    [
                                      _c("div", { staticClass: "checkbox" }, [
                                        _c(
                                          "label",
                                          [
                                            _c(
                                              "b-form-checkbox",
                                              { staticClass: "remember" },
                                              [_vm._v("Remember me")]
                                            )
                                          ],
                                          1
                                        )
                                      ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-offset-3 col-sm-9 ml-auto txt_media"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn  btn-primary",
                                          attrs: { type: "button" }
                                        },
                                        [
                                          _vm._v(
                                            "Login\r\n                                                "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-move'></i> General Controls"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  attrs: {
                                    method: "post",
                                    enctype: "multipart/form-data"
                                  }
                                },
                                [
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-control-label" },
                                          [_vm._v("Static")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c("p", { staticClass: "form-text" }, [
                                          _vm._v(
                                            "\r\n                                                    Static text\r\n                                                "
                                          )
                                        ])
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "example-text-input" }
                                          },
                                          [_vm._v("Text")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            id: "example-text-input",
                                            name: "example-text-input",
                                            placeholder: "Text"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "help-block" },
                                          [
                                            _vm._v(
                                              "\r\n                                                                        This is a help text\r\n                                                                    "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "example-email" }
                                          },
                                          [_vm._v("Email")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "email",
                                            id: "example-email",
                                            name: "example-email",
                                            placeholder: "Email"
                                          }
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "example-password" }
                                          },
                                          [_vm._v("Password")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "password",
                                            id: "example-password",
                                            name: "example-password",
                                            placeholder: "Password"
                                          }
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "example-disabled" }
                                          },
                                          [_vm._v("Disabled")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c("input", {
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "text",
                                            id: "example-disabled",
                                            name: "example-disabled",
                                            placeholder: "Disabled",
                                            disabled: ""
                                          }
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: {
                                              for: "example-textarea-input"
                                            }
                                          },
                                          [_vm._v("Textarea")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c("textarea", {
                                          staticClass:
                                            "form-control resize_vertical",
                                          attrs: {
                                            id: "example-textarea-input",
                                            name: "example-textarea-input",
                                            rows: "7",
                                            placeholder: "Description.."
                                          }
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "example-select" }
                                          },
                                          [_vm._v("Select")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c(
                                          "select",
                                          {
                                            staticClass: "form-control",
                                            attrs: {
                                              id: "example-select",
                                              name: "example-select",
                                              size: "1"
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "0" } },
                                              [
                                                _vm._v(
                                                  "\r\n                                                        Please select\r\n                                                    "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "1" } },
                                              [_vm._v("Bootstrap")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "2" } },
                                              [_vm._v("CSS")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "3" } },
                                              [_vm._v("JavaScript")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "4" } },
                                              [_vm._v("HTML")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: {
                                              for: "example-multiple-select"
                                            }
                                          },
                                          [_vm._v("Multiple")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c(
                                          "select",
                                          {
                                            staticClass: "form-control",
                                            attrs: {
                                              id: "example-multiple-select",
                                              name: "example-multiple-select",
                                              size: "5",
                                              multiple: ""
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "1" } },
                                              [_vm._v("Option #1")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "2" } },
                                              [_vm._v("Option #2")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "3" } },
                                              [_vm._v("Option #3")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "4" } },
                                              [_vm._v("Option #4")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "5" } },
                                              [_vm._v("Option #5")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "6" } },
                                              [_vm._v("Option #6")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "7" } },
                                              [_vm._v("Option #7")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "8" } },
                                              [_vm._v("Option #8")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "9" } },
                                              [_vm._v("Option #9")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "10" } },
                                              [_vm._v("Option #10")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-control-label" },
                                          [_vm._v("Radio Buttons")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "m-l-10 m-t-6" },
                                          [
                                            _c(
                                              "b-form-radio",
                                              {
                                                attrs: {
                                                  checked: "false",
                                                  name: "radio_ganeral"
                                                }
                                              },
                                              [_vm._v("HTML")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "m-l-10" },
                                          [
                                            _c(
                                              "b-form-radio",
                                              {
                                                attrs: {
                                                  checked: "false",
                                                  name: "radio_ganeral"
                                                }
                                              },
                                              [_vm._v("HTML")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "m-l-10" },
                                          [
                                            _c(
                                              "b-form-radio",
                                              {
                                                attrs: {
                                                  checked: "false",
                                                  name: "radio_ganeral"
                                                }
                                              },
                                              [_vm._v("HTML")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-control-label" },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Inline Radio Buttons\r\n                                                "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c(
                                          "b-form-radio",
                                          {
                                            staticClass: "mr-0",
                                            attrs: {
                                              checked: "false",
                                              name: "radio_ganeral_inline"
                                            }
                                          },
                                          [_vm._v("HTML")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-radio",
                                          {
                                            staticClass: "mr-0",
                                            attrs: {
                                              checked: "false",
                                              name: "radio_ganeral_inline"
                                            }
                                          },
                                          [_vm._v("CSS")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-radio",
                                          {
                                            staticClass: "mr-0",
                                            attrs: {
                                              checked: "false",
                                              name: "radio_ganeral_inline"
                                            }
                                          },
                                          [_vm._v("JavaScript")]
                                        )
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-control-label" },
                                          [_vm._v("Checkboxes")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "m-l-10 m-t-6" },
                                          [
                                            _c("b-form-checkbox", [
                                              _vm._v("HTML")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "m-l-10" },
                                          [
                                            _c("b-form-checkbox", [
                                              _vm._v("HTML")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "m-l-10" },
                                          [
                                            _c("b-form-checkbox", [
                                              _vm._v("HTML")
                                            ])
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "form-control-label" },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Inline Checkboxes\r\n                                                "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-sm-9 col-lg-8" },
                                      [
                                        _c(
                                          "b-form-checkbox",
                                          { staticClass: "mr-0 mr-sm-1" },
                                          [_vm._v("HTML")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-checkbox",
                                          { staticClass: "mr-0 mr-sm-1" },
                                          [_vm._v("HTML")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-checkbox",
                                          { staticClass: "mr-0 mr-sm-1" },
                                          [_vm._v("HTML")]
                                        )
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: { for: "example-file-input" }
                                          },
                                          [_vm._v("File")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "col-sm-9 m-t-10 col-lg-8"
                                      },
                                      [
                                        _c("input", {
                                          attrs: {
                                            type: "file",
                                            id: "example-file-input",
                                            name: "example-file-input"
                                          }
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-3 col-lg-4 float-md-right txt_media"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass: "form-control-label",
                                            attrs: {
                                              for: "example-file-multiple-input"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Multiple File\r\n                                                "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "col-sm-9 m-t-10 col-lg-8"
                                      },
                                      [
                                        _c("input", {
                                          attrs: {
                                            type: "file",
                                            id: "example-file-multiple-input",
                                            name: "example-file-multiple-input",
                                            multiple: ""
                                          }
                                        })
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group form-actions" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-sm-9 col-sm-offset-3 ml-auto"
                                        },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-effect-ripple  btn-primary",
                                              attrs: { type: "button" }
                                            },
                                            [
                                              _vm._v(
                                                "Submit\r\n                                                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-effect-ripple btn-secondary reset_btn5",
                                              attrs: { type: "reset" }
                                            },
                                            [
                                              _vm._v(
                                                "\r\n                                                    Reset\r\n                                                "
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "card",
                            {
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-pencil'></i> Twitter Bootstrap Form Validation States"
                              }
                            },
                            [
                              _c("form", [
                                _c(
                                  "div",
                                  { staticClass: "form-group row has-success" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label text-success",
                                        attrs: { for: "inputSuccess3" }
                                      },
                                      [_vm._v("Username")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("input", {
                                        staticClass: "form-control is-valid",
                                        attrs: {
                                          type: "text",
                                          id: "inputSuccess3",
                                          placeholder: "Input with success"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "form-text text-success"
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                                        Username is available\r\n                                                                    "
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group row has-error" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label text-danger",
                                        attrs: { for: "inputError3" }
                                      },
                                      [_vm._v("Email")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("input", {
                                        staticClass:
                                          "form-control brdr_danger is-invalid",
                                        attrs: {
                                          type: "email",
                                          id: "inputError3",
                                          placeholder: "Input with error"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "form-text text-danger"
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                                        Please enter a valid email address\r\n                                                                    "
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group row" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-offset-3 col-sm-9 ml-auto"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn  btn-primary",
                                          attrs: { type: "button" }
                                        },
                                        [
                                          _vm._v(
                                            "Login\r\n                                                "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("form", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "form-group row has-success has-feedback"
                                  },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label text-success",
                                        attrs: { for: "inputSuccess" }
                                      },
                                      [_vm._v("Username")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("input", {
                                        staticClass: "form-control is-valid ",
                                        attrs: {
                                          type: "text",
                                          id: "inputSuccess",
                                          placeholder: "Input with success"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "form-text text-success"
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                                        Username is available\r\n                                                                    "
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "form-group row has-error has-feedback"
                                  },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-3 control-label text-danger",
                                        attrs: { for: "inputError" }
                                      },
                                      [_vm._v("Email")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-9" }, [
                                      _c("input", {
                                        staticClass:
                                          "form-control is-invalid brdr_danger",
                                        attrs: {
                                          type: "email",
                                          id: "inputError",
                                          placeholder: "Input with error"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "form-text text-danger"
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                                        Please enter a valid email address\r\n                                                                    "
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-sm-offset-3 col-sm-9 ml-auto"
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn  btn-primary",
                                          attrs: { type: "button" }
                                        },
                                        [
                                          _vm._v(
                                            "Login\r\n                                                "
                                          )
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
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-12" },
                        [
                          _c(
                            "card",
                            {
                              staticClass: "card_brdr",
                              attrs: {
                                title:
                                  "<i class='fa fa-fw ti-pencil'></i> Bootstrap Form Inputs"
                              }
                            },
                            [
                              _c(
                                "form",
                                {
                                  staticClass: "form-horizontal",
                                  attrs: { role: "form" }
                                },
                                [
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-2 control-label float-md-right txt_media",
                                        attrs: { for: "valid_email" }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                Email Address\r\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-8" }, [
                                      _c(
                                        "div",
                                        { staticClass: "input-group " },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-prepend"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "input-group-text bg-white"
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fa ti-email"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              placeholder: "Email Address",
                                              id: "valid_email"
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-2 control-label float-md-right txt_media",
                                        attrs: { for: "exampleInputPassword1" }
                                      },
                                      [_vm._v("Password")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-8" }, [
                                      _c(
                                        "div",
                                        { staticClass: "input-group " },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-prepend"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "input-group-text bg-white"
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fa ti-key"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "password",
                                              id: "exampleInputPassword1",
                                              placeholder: "Password"
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group row has-success"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "col-sm-2 control-label float-md-right txt_media",
                                          attrs: { for: "valid_email2" }
                                        },
                                        [
                                          _vm._v(
                                            "\r\n                                                Validation Email\r\n                                            "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-sm-8" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "input-group input-icon right"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "input-group-prepend"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "input-group-text bg-white"
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "fa ti-email"
                                                    })
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              staticClass:
                                                "input-error form-control",
                                              attrs: {
                                                id: "valid_email2",
                                                type: "text",
                                                placeholder: "Email Address"
                                              }
                                            })
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-2 control-label float-md-right",
                                        attrs: { for: "validate_confirm" }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                Validation Password\r\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-8" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "input-group input-icon right"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-prepend"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "input-group-text bg-white"
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fa ti-key"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "password",
                                              placeholder: "Password",
                                              id: "validate_confirm"
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-2 control-label float-md-right txt_media",
                                        attrs: { for: "left_check" }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                Checkbox Left\r\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-8" }, [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-prepend"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "input-group-text bg-white"
                                                },
                                                [
                                                  _c("b-form-checkbox", {
                                                    staticClass: "mr-0"
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              id: "left_check"
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-2 control-label float-md-right txt_media",
                                        attrs: { for: "right_check" }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                Checkbox right\r\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-8" }, [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              id: "right_check"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-append"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "input-group-text bg-white"
                                                },
                                                [
                                                  _c("b-form-checkbox", {
                                                    staticClass: "mr-0"
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-2 control-label float-md-right txt_media",
                                        attrs: { for: "right_on" }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                Radio on left\r\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-8" }, [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-prepend"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "input-group-text bg-white"
                                                },
                                                [
                                                  _c("b-form-checkbox", {
                                                    staticClass: "mr-0"
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              id: "right_on"
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-2 control-label float-md-right txt_media",
                                        attrs: { for: "right_off" }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                Radio on right\r\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-8" }, [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c("input", {
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              id: "right_off"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-append"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "input-group-text bg-white"
                                                },
                                                [
                                                  _c("b-form-checkbox", {
                                                    staticClass: "mr-0"
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-2 control-label float-md-right txt_media",
                                        attrs: { for: "process_right" }
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                Processing right\r\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-8" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "input-icon left spinner"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "input-error form-control",
                                            attrs: {
                                              type: "text",
                                              placeholder: "",
                                              id: "process_right"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass:
                                              "fa fa-fw fa-spin fa-spinner proc text-primary"
                                          })
                                        ]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-2 control-label float-md-right txt_media"
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                                                Static Paragraph\r\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-8" }, [
                                      _c("p", { staticClass: "form-control" }, [
                                        _vm._v(
                                          "\r\n                                                    email@example.com\r\n                                                "
                                        )
                                      ])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "col-sm-2 control-label float-md-right txt_media",
                                        attrs: { for: "bootstrap_readonly" }
                                      },
                                      [_vm._v("Readonly")]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-sm-8" }, [
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Readonly",
                                          readonly: "",
                                          id: "bootstrap_readonly"
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col-sm-8 col-sm-offset-2 ml-auto"
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn  btn-primary m-t-10",
                                            attrs: { type: "button" }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Submit\r\n                                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn  btn-danger m-t-10",
                                            attrs: { type: "button" }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Cancel\r\n                                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-effect-ripple  btn-secondary m-t-10 reset_btn6",
                                            attrs: { type: "reset" }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                                                    Reset\r\n                                                "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
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

/***/ "./resources/components/pages/form-layouts.vue":
/*!*****************************************************!*\
  !*** ./resources/components/pages/form-layouts.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_layouts_vue_vue_type_template_id_81902008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-layouts.vue?vue&type=template&id=81902008& */ "./resources/components/pages/form-layouts.vue?vue&type=template&id=81902008&");
/* harmony import */ var _form_layouts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-layouts.vue?vue&type=script&lang=js& */ "./resources/components/pages/form-layouts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_form_layouts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/form_layouts.css?vue&type=style&index=0&lang=css& */ "./resources/css/form_layouts.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_layouts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_layouts_vue_vue_type_template_id_81902008___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_layouts_vue_vue_type_template_id_81902008___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/form-layouts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/form-layouts.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/components/pages/form-layouts.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_layouts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./form-layouts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-layouts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_layouts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/form-layouts.vue?vue&type=template&id=81902008&":
/*!************************************************************************************!*\
  !*** ./resources/components/pages/form-layouts.vue?vue&type=template&id=81902008& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_layouts_vue_vue_type_template_id_81902008___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./form-layouts.vue?vue&type=template&id=81902008& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-layouts.vue?vue&type=template&id=81902008&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_layouts_vue_vue_type_template_id_81902008___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_layouts_vue_vue_type_template_id_81902008___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/form_layouts.css?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/css/form_layouts.css?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_form_layouts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--5-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--5-2!./form_layouts.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/form_layouts.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_form_layouts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_form_layouts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_form_layouts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_form_layouts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_form_layouts_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);