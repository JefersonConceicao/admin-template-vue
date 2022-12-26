(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-validations.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/form-validations.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _card_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.vue */ "./resources/components/pages/card/card.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! card */ "./node_modules/card/lib/card.js");
/* harmony import */ var card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-form */ "./node_modules/vue-form/dist/vue-form.js");
/* harmony import */ var vue_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _validations_validations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validations/validations.js */ "./resources/validations/validations.js");
/* harmony import */ var vue_password_strength_meter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-password-strength-meter */ "./node_modules/vue-password-strength-meter/dist/vue-password-strength-meter.min.js");
/* harmony import */ var vue_password_strength_meter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_password_strength_meter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrapValidator_dist_js_bootstrapValidator_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrapValidator/dist/js/bootstrapValidator.min.js */ "./node_modules/bootstrapValidator/dist/js/bootstrapValidator.min.js");
/* harmony import */ var bootstrapValidator_dist_js_bootstrapValidator_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrapValidator_dist_js_bootstrapValidator_min_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_maxlength_src_bootstrap_maxlength_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap-maxlength/src/bootstrap-maxlength.js */ "./node_modules/bootstrap-maxlength/src/bootstrap-maxlength.js");
/* harmony import */ var bootstrap_maxlength_src_bootstrap_maxlength_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_maxlength_src_bootstrap_maxlength_js__WEBPACK_IMPORTED_MODULE_9__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vee_validate__WEBPACK_IMPORTED_MODULE_2__["default"]);



vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue_form__WEBPACK_IMPORTED_MODULE_4___default.a, _validations_validations_js__WEBPACK_IMPORTED_MODULE_5__["default"]);




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      username: '',
      formstate: {},
      model: {
        number: "",
        password: ""
      },
      password: null,
      confirmpassword: null
    };
  },
  components: {
    Password: vue_password_strength_meter__WEBPACK_IMPORTED_MODULE_6___default.a,
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    onSubmit: function onSubmit() {
      if (this.formstate.$invalid) {
        swal({
          type: "error",
          title: 'Error',
          html: 'Please Fill The Mandatory Fields'
        });
        return;
      } else {
        swal({
          type: "success",
          title: "Transaction Successful",
          html: 'This card is saved for better Payment experience'
        });
      }
    },
    showModal: function showModal() {
      this.$refs.myModalRef.show();
    },
    hideModal: function hideModal() {
      this.$refs.myModalRef.hide();
    },
    validateForm: function validateForm(scope) {
      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
        }
      });
    }
  },
  name: "blank",
  mounted: function mounted() {
    "use strict"; // =========== payment gateway start

    var card = new card__WEBPACK_IMPORTED_MODULE_3___default.a({
      // a selector or DOM element for the form where users will
      // be entering their information
      form: '#form',
      // *required*
      // a selector or DOM element for the container
      // where you want the card to appear
      container: '.card-wrapper',
      // *required*
      formSelectors: {
        numberInput: 'input[name="cardnumber"]',
        // optional — default input[name="number"]
        expiryInput: 'input[name="cardexpiry"]',
        // optional — default input[name="expiry"]
        cvcInput: 'input[name="cardcvc"]',
        // optional — default input[name="cvc"]
        nameInput: 'input[name="cardname"]' // optional - defaults input[name="name"]

      },
      width: 300,
      // optional — default 350px
      formatting: true,
      // optional - default true
      // Strings for translation - optional
      messages: {
        validDate: 'valid\ndate',
        // optional - default 'valid\nthru'
        monthYear: 'mm/yyyy' // optional - default 'month/year'

      },
      // Default placeholders for rendered fields - optional
      placeholders: {
        number: '•••• •••• •••• ••••',
        name: 'Full Name',
        expiry: '••/••',
        cvc: '•••'
      },
      //
      //                masks: {
      //                    cardNumber: '•' // optional - mask card number
      //                },
      // if true, will log helpful messages for setting up Card
      debug: false // optional - default false

    }); // =========== payment gateway end

    $(document).ready(function () {
      $('input#defaultconfig').maxlength();
      $('input#thresholdconfig').maxlength({
        threshold: 20
      });
      $("#placement").maxlength({
        alwaysShow: true,
        placement: 'top',
        warningClass: "label bg-success text-white",
        limitReachedClass: "label bg-danger text-white"
      });
      $('input#moreoptions').maxlength({
        alwaysShow: true,
        warningClass: "label bg-success text-white",
        limitReachedClass: "label bg-danger text-white"
      });
      $('input#alloptions').maxlength({
        alwaysShow: true,
        warningClass: "label bg-success text-white",
        limitReachedClass: "label bg-danger text-white",
        separator: ' chars out of ',
        preText: 'You typed ',
        postText: ' chars.',
        validate: true
      });
      $('#textarea').maxlength({
        alwaysShow: true,
        appendToParent: true,
        warningClass: "label bg-success text-white",
        limitReachedClass: "label bg-danger text-white  "
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-validations.vue?vue&type=style&index=3&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/form-validations.vue?vue&type=style&index=3&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn:active{\n    color: #fff !important;\n}\n.jp-card{\n    min-width: 100% !important;\n    width: 100% !important;\n}\n.input.is-danger{\n    border: 1px solid #ff6666;\n}\n.label legend{\n    font-size: 1rem;\n}\n.Password .Password__strength-meter{\n    margin-top: 0;\n}\n.Password .Password__strength-meter:before,.Password .Password__strength-meter:after{\n    content: initial;\n}\n#passwordForm .Password__badge{\n    line-height: 0.7;\n    padding: 3px 10px;\n}\n@media(max-width: 320px){\n.card-body .jp-card-container{\n        transform: scale(1.05) !important;\n}\n}\n.fa-check.green2{\n    color: red;\n}\n.fa-check.green{\n    color: #0F9E5E;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/passtrength/passtrength.css?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/passtrength/passtrength.css?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".passtrengthMeter {\r\n    position : relative;\r\n    width    : 100%;\n}\n.passtrengthMeter > input {\r\n    width              : 100%;\r\n    display            : inline-block;\r\n    padding            : 5px;\r\n    box-sizing         : border-box;\n}\n.passtrengthMeter > input:focus {\r\n    outline-width : 0;\n}\n.passtrengthMeter::after {\r\n    content    : '';\r\n    height     : 3px;\r\n    overflow   : hidden;\r\n    width      : 0;\r\n    transition : width .5s;\r\n    position   : absolute;\r\n    left       : 0;\r\n    bottom     : 0;\n}\n.passtrengthMeter.weak::after {\r\n    background-color : #EC644B;\r\n    width            : 25%;\n}\n.passtrengthMeter.medium::after {\r\n    content          : '';\r\n    background-color : #E87E04;\r\n    width            : 50%;\n}\n.passtrengthMeter.strong::after {\r\n    content          : '';\r\n    background-color : #EFBF17;\r\n    width            : 75%;\n}\n.passtrengthMeter.very-strong::after {\r\n    content          : '';\r\n    background-color : #42A72A;\r\n    width            : 100%;\n}\n.passtrengthMeter .showPassword {\r\n    position : absolute;\r\n    width    : 20px;\r\n    top      : calc(50% - 10px);\r\n    right    : 10px;\n}\n.passtrengthMeter .showPassword.active {\r\n    opacity : .5;\n}\n.passtrengthMeter .showPassword img {\r\n    display : block;\r\n    width   : 100%;\r\n    height  : auto;\n}\n.passtrengthMeter .showPassword:hover {\r\n    cursor : pointer;\n}\n.passtrengthMeter .tooltip {\r\n    background         : #000000;\r\n    top                : 100%;\r\n    color              : #FFF;\r\n    font-size          : 12px;\r\n    display            : block;\r\n    left               : 50%;\r\n    margin-bottom      : 15px;\r\n    opacity            : 0;\r\n    padding            : 5px 10px;\r\n    pointer-events     : none;\r\n    position           : absolute;\r\n    min-width          : 70px;\r\n    box-sizing         : border-box;\r\n    text-align         : center;\r\n    z-index            : 10;\r\n    -webkit-transform  : translateY(5px);\r\n    -moz-transform     : translateY(5px);\r\n    -ms-transform      : translateY(5px);\r\n    -o-transform       : translateY(5px);\r\n    transform          : translateY(5px);\r\n    -webkit-transition : all .25s ease-out;\r\n    -moz-transition    : all .25s ease-out;\r\n    -o-transition      : all .25s ease-out;\r\n    transition         : all .25s ease-out;\r\n    -webkit-box-shadow : 2px 2px 6px rgba(0, 0, 0, 0.28);\r\n    -moz-box-shadow    : 2px 2px 6px rgba(0, 0, 0, 0.28);\r\n    -o-box-shadow      : 2px 2px 6px rgba(0, 0, 0, 0.28);\r\n    box-shadow         : 2px 2px 6px rgba(0, 0, 0, 0.28);\n}\n.passtrengthMeter.weak .tooltip {\r\n    background-color : #EC644B;\n}\n.passtrengthMeter.weak .tooltip:after {\r\n    border-left   : solid transparent 7px;\r\n    border-right  : solid transparent 7px;\r\n    border-bottom : solid #EC644B 7px;\r\n    top           : -7px;\r\n    content       : \" \";\r\n    height        : 0;\r\n    left          : 50%;\r\n    margin-left   : -7px;\r\n    position      : absolute;\r\n    width         : 0;\n}\n.passtrengthMeter.medium .tooltip {\r\n    background-color : #E87E04;\n}\n.passtrengthMeter.medium .tooltip:after {\r\n    border-left   : solid transparent 7px;\r\n    border-right  : solid transparent 7px;\r\n    border-bottom : solid #E87E04 7px;\r\n    top           : -7px;\r\n    content       : \" \";\r\n    height        : 0;\r\n    left          : 50%;\r\n    margin-left   : -7px;\r\n    position      : absolute;\r\n    width         : 0;\n}\n.passtrengthMeter.strong .tooltip {\r\n    background-color : #EFBF17;\n}\n.passtrengthMeter.strong .tooltip:after {\r\n    border-left   : solid transparent 7px;\r\n    border-right  : solid transparent 7px;\r\n    border-bottom : solid #EFBF17 7px;\r\n    top           : -7px;\r\n    content       : \" \";\r\n    height        : 0;\r\n    left          : 50%;\r\n    margin-left   : -7px;\r\n    position      : absolute;\r\n    width         : 0;\n}\n.passtrengthMeter.very-strong .tooltip {\r\n    background-color : #42A72A;\n}\n.passtrengthMeter.very-strong .tooltip:after {\r\n    border-left   : solid transparent 7px;\r\n    border-right  : solid transparent 7px;\r\n    border-bottom : solid #42A72A 7px;\r\n    top           : -7px;\r\n    content       : \" \";\r\n    height        : 0;\r\n    left          : 50%;\r\n    margin-left   : -7px;\r\n    position      : absolute;\r\n    width         : 0;\n}\n.passtrengthMeter.weak .tooltip:before {\r\n    top      : -20px;\r\n    content  : \" \";\r\n    display  : block;\r\n    height   : 20px;\r\n    left     : 0;\r\n    position : absolute;\r\n    width    : 100%;\n}\n.passtrengthMeter .tooltip:after {\r\n    border-left        : solid transparent 7px;\r\n    border-right       : solid transparent 7px;\r\n    border-bottom      : solid #000000 7px;\r\n    top                : -7px;\r\n    content            : \" \";\r\n    height             : 0;\r\n    left               : 50%;\r\n    margin-left        : -7px;\r\n    position           : absolute;\r\n    width              : 0;\r\n    -webkit-transition : all .25s ease-out;\r\n    -moz-transition    : all .25s ease-out;\r\n    -o-transition      : all .25s ease-out;\r\n    transition         : all .25s ease-out;\n}\n.passtrengthMeter:hover .tooltip {\r\n    opacity           : 1;\r\n    pointer-events    : auto;\r\n    -webkit-transform : translateY(10px);\r\n    -moz-transform    : translateY(10px);\r\n    -ms-transform     : translateY(10px);\r\n    -o-transform      : translateY(10px);\r\n    transform         : translateY(10px);\n}\n.lte8 .passtrengthMeter .tooltip {\r\n    display : none;\n}\n.lte8 .passtrengthMeter:hover .tooltip {\r\n    display : block;\n}", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-validations.vue?vue&type=style&index=3&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/form-validations.vue?vue&type=style&index=3&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./form-validations.vue?vue&type=style&index=3&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-validations.vue?vue&type=style&index=3&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/passtrength/passtrength.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/passtrength/passtrength.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./passtrength.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/passtrength/passtrength.css?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-validations.vue?vue&type=template&id=872512e6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/form-validations.vue?vue&type=template&id=872512e6& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        { staticClass: "col-md-12 col-lg-6" },
        [
          _c(
            "card",
            {
              attrs: {
                title: "<i class='fa fa-fw ti-star'></i> Basic Form Validation"
              }
            },
            [
              _c(
                "form",
                {
                  staticClass: "columns column is-multiline is-12",
                  attrs: { "data-vv-scope": "form-1" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.validateForm("form-1")
                    }
                  }
                },
                [
                  _c("div", { staticClass: "column is-12 row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "label col-sm-4",
                        attrs: { for: "basic_user" }
                      },
                      [
                        _vm._v("User Name\n                            "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v("*")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "control has-icon has-icon-right col-sm-6"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.username,
                              expression: "username"
                            },
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|alpha",
                              expression: "'required|alpha'"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            input: true,
                            "is-danger": _vm.errors.has("form-1.username")
                          },
                          attrs: {
                            name: "username",
                            id: "basic_user",
                            type: "text",
                            placeholder: "User Name"
                          },
                          domProps: { value: _vm.username },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.username = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("form-1.username"),
                              expression: "errors.has('form-1.username')"
                            }
                          ],
                          staticClass: "fa fa-warning text-danger"
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("form-1.username"),
                                expression: "errors.has('form-1.username')"
                              }
                            ],
                            staticClass: "help is-danger text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("form-1.username")))]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-12 row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "label col-sm-4",
                        attrs: { for: "basic_email" }
                      },
                      [
                        _vm._v("Email\n                            "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v("*")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "control has-icon has-icon-right col-sm-6"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|email",
                              expression: "'required|email'"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            input: true,
                            "is-danger": _vm.errors.has("form-1.email")
                          },
                          attrs: {
                            name: "email",
                            id: "basic_email",
                            type: "text",
                            placeholder: "Email"
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("form-1.email"),
                              expression: "errors.has('form-1.email')"
                            }
                          ],
                          staticClass: "fa fa-warning text-danger"
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("form-1.email"),
                                expression: "errors.has('form-1.email')"
                              }
                            ],
                            staticClass: "help is-danger text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("form-1.email")))]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-12 row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "label col-sm-4",
                        attrs: { for: "basic_pass" }
                      },
                      [
                        _vm._v("Password\n                            "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v("*")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "control has-icon has-icon-right col-sm-6"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|min:6",
                              expression: "'required|min:6'"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            input: true,
                            "is-danger": _vm.errors.has("form-1.password")
                          },
                          attrs: {
                            name: "password",
                            id: "basic_pass",
                            type: "password",
                            placeholder: "Password"
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("form-1.password"),
                              expression: "errors.has('form-1.password')"
                            }
                          ],
                          staticClass: "fa fa-warning text-danger"
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("form-1.password"),
                                expression: "errors.has('form-1.password')"
                              }
                            ],
                            staticClass: "help is-danger text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("form-1.password")))]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-12 row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "label col-sm-4",
                        attrs: { for: "basic_confimpass" }
                      },
                      [
                        _vm._v(
                          "Confirm Password\n                            "
                        ),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v("*")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "control has-icon has-icon-right col-sm-6"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|min:6|confirmed:password",
                              expression: "'required|min:6|confirmed:password'"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            input: true,
                            "is-danger": _vm.errors.has(
                              "form-1.confirmpassword"
                            )
                          },
                          attrs: {
                            name: "confirmpassword",
                            id: "basic_confimpass",
                            type: "password",
                            placeholder: "Confirm Password"
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("form-1.confirmpassword"),
                              expression: "errors.has('form-1.confirmpassword')"
                            }
                          ],
                          staticClass: "fa fa-warning text-danger"
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("form-1.confirmpassword"),
                                expression:
                                  "errors.has('form-1.confirmpassword')"
                              }
                            ],
                            staticClass: "help is-danger text-danger"
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.errors.first("form-1.confirmpassword"))
                            )
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-12 row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "label col-sm-4",
                        attrs: { for: "basic_message" }
                      },
                      [
                        _vm._v("Message\n                            "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v("*")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "control has-icon has-icon-right col-sm-6"
                      },
                      [
                        _c("textarea", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|min:2",
                              expression: "'required|min:2'"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            input: true,
                            "is-danger": _vm.errors.has("form-1.message")
                          },
                          attrs: {
                            name: "message",
                            id: "basic_message",
                            type: "password",
                            placeholder: "Message"
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("form-1.message"),
                              expression: "errors.has('form-1.message')"
                            }
                          ],
                          staticClass: "fa fa-warning text-danger"
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("form-1.message"),
                                expression: "errors.has('form-1.message')"
                              }
                            ],
                            staticClass: "help is-danger text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("form-1.message")))]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-12 row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "label col-sm-4",
                        attrs: { for: "basic_skills" }
                      },
                      [
                        _vm._v("Best Skill\n                            "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v("*")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "control has-icon has-icon-right col-sm-6"
                      },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value:
                                  "required|in:html,css,javascript,php,mysql",
                                expression:
                                  "'required|in:html,css,javascript,php,mysql'"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              input: true,
                              "is-danger": _vm.errors.has("form-1.skill")
                            },
                            attrs: { id: "basic_skills", name: "skill" }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v(
                                "\n                                    Please select\n                                "
                              )
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "html" } }, [
                              _vm._v("HTML")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "css" } }, [
                              _vm._v("CSS")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "javascript" } }, [
                              _vm._v("Javascript")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "php" } }, [
                              _vm._v("PHP")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "mysql" } }, [
                              _vm._v("MySQL")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("form-1.skill"),
                              expression: "errors.has('form-1.skill')"
                            }
                          ],
                          staticClass: "fa fa-warning text-danger"
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("form-1.skill"),
                                expression: "errors.has('form-1.skill')"
                              }
                            ],
                            staticClass: "help is-danger text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("form-1.skill")))]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-12 row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "label col-sm-4",
                        attrs: { for: "basic_web" }
                      },
                      [
                        _vm._v("Website\n                            "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v("*")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "control has-icon has-icon-right col-sm-6"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|url:require_protocol?",
                              expression: "'required|url:require_protocol?'"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            input: true,
                            "is-danger": _vm.errors.has("form-1.website")
                          },
                          attrs: {
                            name: "website",
                            id: "basic_web",
                            type: "text",
                            placeholder: "http://example.com"
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("form-1.website"),
                              expression: "errors.has('form-1.website')"
                            }
                          ],
                          staticClass: "fa fa-warning text-danger"
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("form-1.website"),
                                expression: "errors.has('form-1.website')"
                              }
                            ],
                            staticClass: "help is-danger text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("form-1.website")))]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-12 row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "label col-sm-4",
                        attrs: { for: "basic_mobile" }
                      },
                      [
                        _vm._v("Phone\n                            "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v("*")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass: "control has-icon has-icon-right col-sm-6"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|numeric|max:10|min:10",
                              expression: "'required|numeric|max:10|min:10'"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            input: true,
                            "is-danger": _vm.errors.has("form-1.phone")
                          },
                          attrs: {
                            name: "phone",
                            id: "basic_mobile",
                            type: "text",
                            placeholder: "Enter your phone number"
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("form-1.phone"),
                              expression: "errors.has('form-1.phone')"
                            }
                          ],
                          staticClass: "fa fa-warning text-danger"
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("form-1.phone"),
                                expression: "errors.has('form-1.phone')"
                              }
                            ],
                            staticClass: "help is-danger text-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("form-1.phone")))]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-12 row" }, [
                    _c("label", { staticClass: "label col-sm-4" }, [
                      _c(
                        "legend",
                        {
                          staticClass: "label",
                          class: { error: _vm.errors.has("form-1.gender") }
                        },
                        [
                          _vm._v("Gender\n                                "),
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v("*")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("p", { staticClass: "control" }, [
                        _c("label", { staticClass: "radio" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|in:male,female,others",
                                expression: "'required|in:male,female,others'"
                              }
                            ],
                            attrs: {
                              name: "gender",
                              value: "male",
                              type: "radio"
                            }
                          }),
                          _vm._v(
                            "\n                                    Male\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("label", { staticClass: "radio" }, [
                          _c("input", {
                            attrs: {
                              name: "gender",
                              value: "female",
                              type: "radio"
                            }
                          }),
                          _vm._v(
                            "\n                                    Female\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("label", { staticClass: "radio" }, [
                          _c("input", {
                            attrs: {
                              name: "gender",
                              value: "others",
                              type: "radio"
                            }
                          }),
                          _vm._v(
                            "\n                                    Others\n                                "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("form-1.gender"),
                              expression: "errors.has('form-1.gender')    "
                            }
                          ],
                          staticClass: "help is-danger text-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("form-1.gender")))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "column is-6" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-8 ml-auto" },
                      [
                        _c("b-form-checkbox", [
                          _vm._v(
                            "\n                                  I agree to\n                                "
                          ),
                          _c(
                            "a",
                            {
                              attrs: {
                                href: "#modal-terms",
                                "data-toggle": "modal"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                    Terms & Conditions\n                                "
                              )
                            ]
                          )
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column is-12" }, [
                    _c("div", { staticClass: "control text-center" }, [
                      _c(
                        "button",
                        {
                          staticClass: "button btn btn-primary",
                          attrs: { type: "submit", name: "button" }
                        },
                        [_vm._v("Sign up")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "button btn btn-secondary",
                          attrs: { type: "reset", name: "button" },
                          on: {
                            click: function($event) {
                              return _vm.errors.clear("form-1")
                            }
                          }
                        },
                        [_vm._v("Reset")]
                      )
                    ])
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "card",
            {
              attrs: {
                title: "<i class='fa fa-fw ti-folder'></i> Validations In Modal"
              }
            },
            [
              _c(
                "div",
                { staticClass: "row" },
                [
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "mx-auto btn-lg  btn-info",
                        on: { click: _vm.showModal }
                      },
                      [
                        _vm._v(
                          "\n                            Click to open form in modal\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-modal",
                      {
                        ref: "myModalRef",
                        attrs: { "hide-footer": "", title: "Form Modal" }
                      },
                      [
                        _c("div", { staticClass: "d-block " }, [
                          _c(
                            "form",
                            {
                              staticClass: "columns column is-multiline is-12",
                              attrs: {
                                id: "form-validation3",
                                "data-vv-scope": "form-2"
                              },
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.validateForm("form-2")
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-12 col-sm-6 col-md-6" },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "control has-icon has-icon-right"
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required|alpha",
                                                expression: "'required|alpha'"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            class: {
                                              input: true,
                                              "is-danger": _vm.errors.has(
                                                "form-2.firstname"
                                              )
                                            },
                                            attrs: {
                                              name: "firstname",
                                              type: "text",
                                              placeholder: "First Name"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: _vm.errors.has(
                                                  "form-2.firstname"
                                                ),
                                                expression:
                                                  "errors.has('form-2.firstname')"
                                              }
                                            ],
                                            staticClass:
                                              "fa fa-warning text-danger"
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: _vm.errors.has(
                                                    "form-2.firstname"
                                                  ),
                                                  expression:
                                                    "errors.has('form-2.firstname')"
                                                }
                                              ],
                                              staticClass:
                                                "help is-danger text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "form-2.firstname"
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-12 col-sm-6 col-md-6" },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "control has-icon has-icon-right"
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required|alpha",
                                                expression: "'required|alpha'"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            class: {
                                              input: true,
                                              "is-danger": _vm.errors.has(
                                                "form-2.lastname"
                                              )
                                            },
                                            attrs: {
                                              name: "lastname",
                                              type: "text",
                                              placeholder: "Last Name"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: _vm.errors.has(
                                                  "form-2.lastname"
                                                ),
                                                expression:
                                                  "errors.has('form-2.lastname')"
                                              }
                                            ],
                                            staticClass:
                                              "fa fa-warning text-danger"
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: _vm.errors.has(
                                                    "form-2.lastname"
                                                  ),
                                                  expression:
                                                    "errors.has('form-2.lastname')"
                                                }
                                              ],
                                              staticClass:
                                                "help is-danger text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "form-2.lastname"
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-md-12" }, [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "control has-icon has-icon-right"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value: "required|alpha",
                                              expression: "'required|alpha'"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            input: true,
                                            "is-danger": _vm.errors.has(
                                              "form-2.displayname"
                                            )
                                          },
                                          attrs: {
                                            name: "displayname",
                                            type: "text",
                                            placeholder: "Display Name"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("i", {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: _vm.errors.has(
                                                "form-2.displayname"
                                              ),
                                              expression:
                                                "errors.has('form-2.displayname')"
                                            }
                                          ],
                                          staticClass:
                                            "fa fa-warning text-danger"
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: _vm.errors.has(
                                                  "form-2.displayname"
                                                ),
                                                expression:
                                                  "errors.has('form-2.displayname')"
                                              }
                                            ],
                                            staticClass:
                                              "help is-danger text-danger"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first(
                                                  "form-2.displayname"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-md-12" }, [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "control has-icon has-icon-right"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value: "required|email",
                                              expression: "'required|email'"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            input: true,
                                            "is-danger": _vm.errors.has(
                                              "form-2.email"
                                            )
                                          },
                                          attrs: {
                                            name: "email",
                                            type: "text",
                                            placeholder: "Email"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("i", {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: _vm.errors.has(
                                                "form-2.email"
                                              ),
                                              expression:
                                                "errors.has('form-2.email')"
                                            }
                                          ],
                                          staticClass:
                                            "fa fa-warning text-danger"
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: _vm.errors.has(
                                                  "form-2.email"
                                                ),
                                                expression:
                                                  "errors.has('form-2.email')"
                                              }
                                            ],
                                            staticClass:
                                              "help is-danger text-danger"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("form-2.email")
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-12 col-sm-6 col-md-6" },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "control has-icon has-icon-right"
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required|min:6",
                                                expression: "'required|min:6'"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            class: {
                                              input: true,
                                              "is-danger": _vm.errors.has(
                                                "form-2.passwordmodal"
                                              )
                                            },
                                            attrs: {
                                              name: "passwordmodal",
                                              type: "password",
                                              placeholder: "Password"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: _vm.errors.has(
                                                  "form-2.passwordmodal"
                                                ),
                                                expression:
                                                  "errors.has('form-2.passwordmodal')"
                                              }
                                            ],
                                            staticClass:
                                              "fa fa-warning text-danger"
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: _vm.errors.has(
                                                    "form-2.passwordmodal"
                                                  ),
                                                  expression:
                                                    "errors.has('form-2.passwordmodal')"
                                                }
                                              ],
                                              staticClass:
                                                "help is-danger text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "form-2.passwordmodal"
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-12 col-sm-6 col-md-6" },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "control has-icon has-icon-right"
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value:
                                                  "required|min:6|confirmed:passwordmodal",
                                                expression:
                                                  "'required|min:6|confirmed:passwordmodal'"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            class: {
                                              input: true,
                                              "is-danger": _vm.errors.has(
                                                "form-2.confirmpasswordmodal"
                                              )
                                            },
                                            attrs: {
                                              name: "confirmpasswordmodal",
                                              type: "password",
                                              placeholder: "Confirm Password"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: _vm.errors.has(
                                                  "form-2.confirmpasswordmodal"
                                                ),
                                                expression:
                                                  "errors.has('form-2.confirmpasswordmodal')"
                                              }
                                            ],
                                            staticClass:
                                              "fa fa-warning text-danger"
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: _vm.errors.has(
                                                    "form-2.confirmpasswordmodal"
                                                  ),
                                                  expression:
                                                    "errors.has('form-2.confirmpasswordmodal')"
                                                }
                                              ],
                                              staticClass:
                                                "help is-danger text-danger"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.errors.first(
                                                    "form-2.confirmpasswordmodal"
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-md-12" }, [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "div",
                                      { staticClass: "col-12 text-left" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "padding7" },
                                          [
                                            _c("b-form-checkbox", [
                                              _vm._v("  I agree")
                                            ])
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", {
                                      staticClass: "help-block with-errors"
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-12" }, [
                                  _c("p", { staticClass: "margin-top" }, [
                                    _vm._v(
                                      "\n                                                By clicking on the\n                                                "
                                    ),
                                    _c(
                                      "strong",
                                      { staticClass: "label label-primary" },
                                      [_vm._v("Register")]
                                    ),
                                    _vm._v(
                                      "\n                                                , you agree the following\n                                                "
                                    ),
                                    _c("a", { attrs: { href: "#" } }, [
                                      _vm._v("Terms and Conditions")
                                    ]),
                                    _vm._v(
                                      " liability\n                                                as set out in this site, including our Cookie\n                                                Use.\n                                            "
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row marginTop" }, [
                                _c("div", { staticClass: "col-6 col-md-6" }, [
                                  _c("input", {
                                    staticClass:
                                      "btn btn-primary btn-block btn-md btn-responsive",
                                    attrs: {
                                      type: "submit",
                                      id: "btncheck",
                                      value: "Register",
                                      tabindex: "7"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6 col-md-6" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "btn btn-success text_white btn-block text-white btn-md btn-responsive"
                                    },
                                    [
                                      _vm._v(
                                        "Sign\n                                                In"
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ]
                          )
                        ])
                      ]
                    )
                  ]
                ],
                2
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-12 col-lg-6" },
        [
          _c(
            "card",
            {
              attrs: {
                title: "<i class='fa fa-fw ti-key'></i> Password Strength"
              }
            },
            [
              _c(
                "form",
                { attrs: { action: "#", method: "post", id: "passwordForm" } },
                [
                  _c("password", {
                    attrs: { name: "pswdstrength", id: "password" },
                    model: {
                      value: _vm.password,
                      callback: function($$v) {
                        _vm.password = $$v
                      },
                      expression: "password"
                    }
                  }),
                  _vm._v(" "),
                  _c("password", {
                    attrs: {
                      name: "cpswdstrength",
                      id: "confirm_passowrd",
                      placeholder: "Confirm password"
                    },
                    model: {
                      value: _vm.confirmpassword,
                      callback: function($$v) {
                        _vm.confirmpassword = $$v
                      },
                      expression: "confirmpassword"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", [
                    _c("div", { staticClass: "col-sm-12 padding" }, [
                      _c("span", { staticStyle: { color: "#2ECC71" } }, [
                        _c("i", {
                          staticClass: "fa fa-check green2",
                          class: { green: _vm.password == _vm.confirmpassword },
                          attrs: { id: "pwmatch" }
                        })
                      ]),
                      _vm._v(
                        "\n                            Passwords Match\n                        "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c(
                      "a",
                      {
                        staticClass: "col-12 btn btn-primary btn-load btn-md",
                        attrs: {
                          href: "#",
                          "data-loading-text": "Changing Password..."
                        }
                      },
                      [_vm._v("Change Password")]
                    )
                  ])
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "card",
            {
              attrs: {
                title: "<i class='fa fa-fw ti-credit-card'></i> Payment Gateway"
              }
            },
            [
              _c("div", { staticClass: "card-wrapper" }),
              _vm._v(" "),
              _c(
                "vue-form",
                {
                  attrs: { state: _vm.formstate, id: "form" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.onSubmit($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-12 mt-3 " }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "validate",
                            { attrs: { tag: "div" } },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.model.cardnumber,
                                    expression: "model.cardnumber"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "cardnumber",
                                  id: "cardnumber",
                                  type: "text",
                                  required: "",
                                  autofocus: "",
                                  placeholder: "Card number",
                                  minlength: "19",
                                  maxlength: "22"
                                },
                                domProps: { value: _vm.model.cardnumber },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.model,
                                      "cardnumber",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "field-messages",
                                {
                                  staticClass: "text-danger",
                                  attrs: {
                                    name: "cardnumber",
                                    show: "$invalid && $submitted"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      attrs: { slot: "required" },
                                      slot: "required"
                                    },
                                    [_vm._v("Card number is a required field")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      attrs: { slot: "minlength" },
                                      slot: "minlength"
                                    },
                                    [
                                      _vm._v(
                                        "Card number must be 16 to 18 digits"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      attrs: { slot: "maxlength" },
                                      slot: "maxlength"
                                    },
                                    [
                                      _vm._v(
                                        "Cardnumber must be 16 to 18 digits"
                                      )
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "validate",
                            { attrs: { tag: "div" } },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.model.cardexpiry,
                                    expression: "model.cardexpiry"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "cardexpiry",
                                  id: "cardexpiry",
                                  type: "text",
                                  required: "",
                                  placeholder: "Expiry"
                                },
                                domProps: { value: _vm.model.cardexpiry },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.model,
                                      "cardexpiry",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "field-messages",
                                {
                                  staticClass: "text-danger",
                                  attrs: {
                                    name: "cardexpiry",
                                    show: "$invalid && $submitted"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      attrs: { slot: "required" },
                                      slot: "required"
                                    },
                                    [_vm._v("Expiry date is required")]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "validate",
                            { attrs: { tag: "div" } },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.model.cardcvc,
                                    expression: "model.cardcvc"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "cardcvc",
                                  id: "cardcvc",
                                  type: "text",
                                  required: "",
                                  placeholder: "CVV"
                                },
                                domProps: { value: _vm.model.cardcvc },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.model,
                                      "cardcvc",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "field-messages",
                                {
                                  staticClass: "text-danger",
                                  attrs: {
                                    name: "cardcvc",
                                    show: "$invalid && $submitted"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      attrs: { slot: "required" },
                                      slot: "required"
                                    },
                                    [_vm._v("CVV is required")]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "validate",
                            { attrs: { tag: "div" } },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.model.cardname,
                                    expression: "model.cardname"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  name: "cardname",
                                  id: "cardname",
                                  type: "text",
                                  required: "",
                                  placeholder: "Card holder name"
                                },
                                domProps: { value: _vm.model.cardname },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.model,
                                      "cardname",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "field-messages",
                                {
                                  staticClass: "text-danger",
                                  attrs: {
                                    name: "cardname",
                                    show: "$invalid && $submitted"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      attrs: { slot: "required" },
                                      slot: "required"
                                    },
                                    [_vm._v("Card name is required")]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c("input", {
                        staticClass: "btn btn-warning btn-block mb-3",
                        attrs: { type: "submit", value: "Save and pay" }
                      })
                    ])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
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
                        "<i class='fa fa-fw ti-ink-pen'></i> Bootstrap Input MaxLength"
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label",
                          attrs: { for: "placement" }
                        },
                        [
                          _vm._v(
                            "\n                                Custom Position\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          maxlength: "25",
                          name: "placement",
                          id: "placement"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label",
                          attrs: { for: "moreoptions" }
                        },
                        [_vm._v("Options")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control experment",
                        attrs: {
                          type: "text",
                          maxlength: "25",
                          name: "moreoptions",
                          id: "moreoptions"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label",
                          attrs: { for: "alloptions" }
                        },
                        [
                          _vm._v(
                            "\n                                All the options\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control experment",
                        attrs: {
                          type: "text",
                          maxlength: "25",
                          name: "alloptions",
                          id: "alloptions"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label",
                          attrs: { for: "textarea" }
                        },
                        [_vm._v("Text Area")]
                      ),
                      _vm._v(" "),
                      _c("textarea", {
                        staticClass: "form-control resize_vertical",
                        attrs: {
                          id: "textarea",
                          maxlength: "225",
                          rows: "4",
                          placeholder: "This textarea has a limit of 225 chars."
                        }
                      })
                    ])
                  ]
                )
              ],
              1
            )
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

/***/ "./resources/components/pages/form-validations.vue":
/*!*********************************************************!*\
  !*** ./resources/components/pages/form-validations.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_validations_vue_vue_type_template_id_872512e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-validations.vue?vue&type=template&id=872512e6& */ "./resources/components/pages/form-validations.vue?vue&type=template&id=872512e6&");
/* harmony import */ var _form_validations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-validations.vue?vue&type=script&lang=js& */ "./resources/components/pages/form-validations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_passtrength_passtrength_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/passtrength/passtrength.css?vue&type=style&index=0&lang=css& */ "./resources/css/passtrength/passtrength.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var sweetalert2_dist_sweetalert2_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.css?vue&type=style&index=1&lang=css& */ "./node_modules/sweetalert2/dist/sweetalert2.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var bootstrapValidator_dist_css_bootstrapValidator_min_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrapValidator/dist/css/bootstrapValidator.min.css?vue&type=style&index=2&lang=css& */ "./node_modules/bootstrapValidator/dist/css/bootstrapValidator.min.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var _form_validations_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-validations.vue?vue&type=style&index=3&lang=css& */ "./resources/components/pages/form-validations.vue?vue&type=style&index=3&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");









/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
  _form_validations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_validations_vue_vue_type_template_id_872512e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_validations_vue_vue_type_template_id_872512e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/form-validations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/form-validations.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/components/pages/form-validations.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./form-validations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-validations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/form-validations.vue?vue&type=style&index=3&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/components/pages/form-validations.vue?vue&type=style&index=3&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./form-validations.vue?vue&type=style&index=3&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-validations.vue?vue&type=style&index=3&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/form-validations.vue?vue&type=template&id=872512e6&":
/*!****************************************************************************************!*\
  !*** ./resources/components/pages/form-validations.vue?vue&type=template&id=872512e6& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_template_id_872512e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./form-validations.vue?vue&type=template&id=872512e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/form-validations.vue?vue&type=template&id=872512e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_template_id_872512e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_validations_vue_vue_type_template_id_872512e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/passtrength/passtrength.css?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/css/passtrength/passtrength.css?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_passtrength_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./passtrength.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/passtrength/passtrength.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_passtrength_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_passtrength_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_passtrength_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_passtrength_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_passtrength_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/validations/validations.js":
/*!**********************************************!*\
  !*** ./resources/validations/validations.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  validators: {
    checkbox: function checkbox(value, attrValue, vnode) {
      // return true to set input as $valid, false to set as $invalid
      return value;
    },
    sameas: function sameas(value, attrValue, vnode) {
      return value == attrValue;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ })

}]);