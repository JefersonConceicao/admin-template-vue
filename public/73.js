(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/fontawesome_icons.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/fontawesome_icons.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery, $) {/* harmony import */ var _card_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.vue */ "./resources/components/pages/card/card.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "fontawesome_icons",
  components: {
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    "use strict";

    jQuery.fn.outerHTML = function () {
      return jQuery('<div />').append(this.eq(0).clone()).html();
    };

    $(document).ready(function () {
      $(".fa-icon").each(function () {
        $(this).find("i").after("<br />");
      });
      $(".iconoptions button").on("click", function () {
        if (!$(this).hasClass("active")) {
          toastr_build_toastr_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.info('Changes Made, Hover on any icon to see effect');
        }

        $(".iconoptions").find(".active").removeClass("active");
        $(this).addClass("active");
      });
      $(".fa-icon").hover(function () {
        if ($(".iconoptions").find('.active').attr("data-faclass") != undefined) {
          $(this).find("i").toggleClass($(".iconoptions .active").attr("data-faclass"));
        }
      }).on("click", function () {
        var x = $(this).find("i").outerHTML();
        copyTextToClipboard(x);
      });
      $('#icon-search').on("input", function () {
        $(".fa-icon").each(function () {
          var regex = new RegExp($("#icon-search").val().trim().toLowerCase());
          var x = $(this).clone().children().remove().end().text();
          var res = x.match(regex, "i");

          if (res == null) {
            $(this).hide();
          } else {
            $(this).show();
          }
        });
      });
      var icon_size = $("#icon-size");
      icon_size.on("input", function () {
        var x = parseInt(icon_size.val()) + parseInt(6);
        $(".fontnormal").html(".fa-icon i{font-size:" + icon_size.val() + "px;}.fa-icon:hover i{font-size:" + x + "px;}");
        $(".icon-sizeshow").text(icon_size.val() + "px");
      });
      $("head").append("<style class='fontnormal'></style>");
    });

    function copyTextToClipboard(text) {
      var textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea).select();
      var successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      toastr_build_toastr_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.success('Element Copied to Clipboard. Now you can use it anywhere.');
    }

    $(".iconoption_toggle").on("click", function () {
      $(this).toggleClass("right_175");
      $(this).find("i").toggleClass("fa-flip-horizontal");
      $(".iconoptions").toggleClass("right_0");
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/fontawesome_icons.css?vue&type=style&index=1&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/fontawesome_icons.css?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa-icon {\r\n    text-align: center;\r\n    padding: 20px 0;\r\n    margin: 10px 0;\r\n    height: 89px;\r\n    transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -moz-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\n}\n.fa-icon:hover {\r\n    background-color: #dcdcdc;\r\n    padding: 15px 0;\r\n    transition: all .2s linear;\r\n    -o-transition: all .2s linear;\r\n    -moz-transition: all .2s linear;\r\n    -webkit-transition: all .2s linear;\n}\n.fa-icon:hover i {\r\n    font-size: 30px;\n}\n.fa-icon:hover .text-muted {\r\n    color: #888;\n}\n.fa-icon i {\r\n    font-size: 24px;\r\n    color: #428bca;\r\n    margin-bottom: 10px;\n}\ninput[type=\"range\"] {\r\n    cursor: pointer;\n}\n.input-group {\r\n    width: 100%;\r\n    margin-bottom: 10px;\n}\n.input-group-addon.icon-sizeshow {\r\n    border: none;\r\n    background-color: transparent;\n}\n.input-group input[type=\"range\"] {\r\n    border: none;\r\n    box-shadow: none;\n}\n#icon-search {\r\n    border-radius: 17px !important;\n}\nform {\r\n    text-align: center;\r\n    padding: 10px;\n}\n.iconoption_toggle {\r\n    border-radius: 5px 0 0 5px;\r\n    border: 1px solid rgba(0, 0, 0, 0.298039);\r\n    border-right: none;\r\n    position: fixed;\r\n    top: 188px;\r\n    right: 0;\r\n    background-color: rgba(238, 238, 238, 0.4);\r\n    padding: 7px;\r\n    z-index: 999998;\r\n    cursor: pointer;\n}\n.iconoption_toggle i {\r\n    color: rgb(119, 119, 119);\r\n    font-size: 20px;\n}\n.right_175 {\r\n    right: 175px;\n}\n.iconoptions {\r\n    position: fixed;\r\n    padding: 6px;\r\n    height: 240px;\r\n    width: 175px;\r\n    background-color: #fff;\r\n    z-index: 9999999;\r\n    top: 100px;\r\n    right: -175px;\r\n    border: 2px solid #428bca;\n}\n.right_0 {\r\n    right: 0;\n}\n.iconoptions > button {\r\n    border: none;\r\n    border-radius: 4px;\r\n    margin-top: 10px;\r\n    display: block;\n}\n.iconoptions .active,\r\n.iconoptions .active:focus,\r\n.iconoptions .active:hover {\r\n    background-color: #ffb65f !important;\n}\r\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/fontawesome_icons.css?vue&type=style&index=1&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/fontawesome_icons.css?vue&type=style&index=1&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./fontawesome_icons.css?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/fontawesome_icons.css?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/fontawesome_icons.vue?vue&type=template&id=4a7f2703&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/fontawesome_icons.vue?vue&type=template&id=4a7f2703& ***!
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
        { attrs: { title: "<i class='fa fa-fw ti-ink-pen'></i> Font Icons" } },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("section", { attrs: { id: "web-application" } }, [
                _c("div", { staticClass: "iconoption_toggle" }, [
                  _c("i", {
                    staticClass: "fa fa-fw fa-fighter-jet fa-flip-horizontal"
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "iconoptions text-center" }, [
                  _c(
                    "button",
                    { staticClass: "active btn btn-info btn-block" },
                    [_vm._v("No Options")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-info btn-block",
                      attrs: { "data-faclass": "fa-spin" }
                    },
                    [_vm._v("Spin")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-info btn-block",
                      attrs: { "data-faclass": "fa-flip-horizontal" }
                    },
                    [
                      _vm._v(
                        "Flip\r\n                            Horizontally\r\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-info btn-block",
                      attrs: { "data-faclass": "fa-flip-vertical" }
                    },
                    [
                      _vm._v(
                        "Flip\r\n                            Vertically\r\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("h4", [_vm._v("Rotate")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "btn-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info btn-sm",
                        attrs: { "data-faclass": "" }
                      },
                      [_vm._v("0")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info btn-sm",
                        attrs: { "data-faclass": "fa-rotate-90" }
                      },
                      [_vm._v("90")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info btn-sm",
                        attrs: { "data-faclass": "fa-rotate-180" }
                      },
                      [_vm._v("180")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info btn-sm",
                        attrs: { "data-faclass": "fa-rotate-270" }
                      },
                      [_vm._v("270")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-6 col-md-offset-3 m-auto" },
                    [
                      _c("form", { attrs: { role: "form" } }, [
                        _c("div", { staticClass: "input-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "sr-only",
                              attrs: { for: "icon-search" }
                            },
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
                            {
                              staticClass: "sr-only",
                              attrs: { for: "icon-size" }
                            },
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
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("h4", { staticClass: "text-center" }, [
                  _vm._v("Click on any icon to copy its code to clipboard.")
                ]),
                _vm._v(" "),
                _c("h4", { staticClass: "page-header" }, [
                  _vm._v(
                    "\r\n                        Web Application Icons\r\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-adjust" }),
                    _vm._v(" fa-adjust\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-anchor" }),
                    _vm._v(" fa-anchor\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-archive" }),
                    _vm._v(" fa-archive\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-arrows" }),
                    _vm._v(" fa-arrows\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-arrows-h" }),
                    _vm._v(" fa-arrows-h\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-arrows-v" }),
                    _vm._v(" fa-arrows-v\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-asterisk" }),
                    _vm._v(" fa-asterisk\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-ban" }),
                    _vm._v(" fa-ban\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-bar-chart-o" }),
                    _vm._v(" fa-bar-chart-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-barcode" }),
                    _vm._v(" fa-barcode\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-bars" }),
                    _vm._v(" fa-bars\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-beer" }),
                    _vm._v(" fa-beer\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-bell" }),
                    _vm._v(" fa-bell\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-bell-o" }),
                    _vm._v(" fa-bell-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-bolt" }),
                    _vm._v(" fa-bolt\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-book" }),
                    _vm._v(" fa-book\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-bookmark" }),
                    _vm._v(" fa-bookmark\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-bookmark-o" }),
                    _vm._v(" fa-bookmark-o\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-briefcase" }),
                    _vm._v(" fa-briefcase\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-bug" }),
                    _vm._v(" fa-bug\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-building-o" }),
                    _vm._v(" fa-building-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-bullhorn" }),
                    _vm._v(" fa-bullhorn\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-bullseye" }),
                    _vm._v(" fa-bullseye\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-calendar" }),
                    _vm._v(" fa-calendar\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-calendar-o" }),
                    _vm._v(" fa-calendar-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-camera" }),
                    _vm._v(" fa-camera\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-camera-retro" }),
                    _vm._v(" fa-camera-retro\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-caret-square-o-down" }),
                    _vm._v(
                      " fa-caret-square-o-down\r\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-caret-square-o-left" }),
                    _vm._v(
                      " fa-caret-square-o-left\r\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", {
                      staticClass: "fa fa-fw fa-caret-square-o-right"
                    }),
                    _vm._v(
                      " fa-caret-square-o-right\r\n                        "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-caret-square-o-up" }),
                    _vm._v(" fa-caret-square-o-up\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-certificate" }),
                    _vm._v(" fa-certificate\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-check" }),
                    _vm._v(" fa-check\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-check-circle" }),
                    _vm._v(" fa-check-circle\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-check-circle-o" }),
                    _vm._v(" fa-check-circle-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-check-square" }),
                    _vm._v(" fa-check-square\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-check-square-o" }),
                    _vm._v(" fa-check-square-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-circle" }),
                    _vm._v(" fa-circle\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-circle-o" }),
                    _vm._v(" fa-circle-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-clock-o" }),
                    _vm._v(" fa-clock-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-cloud" }),
                    _vm._v(" fa-cloud\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-cloud-download" }),
                    _vm._v(" fa-cloud-download\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-cloud-upload" }),
                    _vm._v(" fa-cloud-upload\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-code" }),
                    _vm._v(" fa-code\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-code-fork" }),
                    _vm._v(" fa-code-fork\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-coffee" }),
                    _vm._v(" fa-coffee\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-cog" }),
                    _vm._v(" fa-cog\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-cogs" }),
                    _vm._v(" fa-cogs\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-comment" }),
                    _vm._v(" fa-comment\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-comment-o" }),
                    _vm._v(" fa-comment-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-comments" }),
                    _vm._v(" fa-comments\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-comments-o" }),
                    _vm._v(" fa-comments-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-compass" }),
                    _vm._v(" fa-compass\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-credit-card" }),
                    _vm._v(" fa-credit-card\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-crop" }),
                    _vm._v(" fa-crop\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw ti-move" }),
                    _vm._v(" fa-crosshairs\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-cutlery" }),
                    _vm._v(" fa-cutlery\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-dashboard" }),
                    _vm._v(" fa-dashboard\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-desktop" }),
                    _vm._v(" fa-desktop\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-dot-circle-o" }),
                    _vm._v(" fa-dot-circle-o\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-download" }),
                    _vm._v(" fa-download\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-edit" }),
                    _vm._v(" fa-edit\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-ellipsis-h" }),
                    _vm._v(" fa-ellipsis-h\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-ellipsis-v" }),
                    _vm._v(" fa-ellipsis-v\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-envelope" }),
                    _vm._v(" fa-envelope\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-envelope-o" }),
                    _vm._v(" fa-envelope-o\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-eraser" }),
                    _vm._v(" fa-eraser\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-hand-o-left" }),
                    _vm._v(" fa-exchange\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-exclamation" }),
                    _vm._v(" fa-exclamation\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-exclamation-circle" }),
                    _vm._v(" fa-exclamation-circle\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", {
                      staticClass: "fa fa-fw fa-exclamation-triangle"
                    }),
                    _vm._v(
                      " fa-exclamation-triangle\r\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-external-link" }),
                    _vm._v(" fa-external-link\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", {
                      staticClass: "fa fa-fw fa-external-link-square"
                    }),
                    _vm._v(
                      " fa-external-link-square\r\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-eye" }),
                    _vm._v(" fa-eye\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-eye-slash" }),
                    _vm._v(" fa-eye-slash\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-female" }),
                    _vm._v(" fa-female\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-fighter-jet" }),
                    _vm._v(" fa-fighter-jet\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-film" }),
                    _vm._v(" fa-film\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-filter" }),
                    _vm._v(" fa-filter\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw ti-cup" }),
                    _vm._v(" fa-fire\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-fire-extinguisher" }),
                    _vm._v(" fa-fire-extinguisher\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-flag" }),
                    _vm._v(" fa-flag\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-flag-checkered" }),
                    _vm._v(" fa-flag-checkered\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-flag-o" }),
                    _vm._v(" fa-flag-o\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-flash" }),
                    _vm._v(" fa-flash\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-flask" }),
                    _vm._v(" fa-flask\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-folder" }),
                    _vm._v(" fa-folder\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-folder-o" }),
                    _vm._v(" fa-folder-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-folder-open" }),
                    _vm._v(" fa-folder-open\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-folder-open-o" }),
                    _vm._v(" fa-folder-open-o\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-frown-o" }),
                    _vm._v(" fa-frown-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-gamepad" }),
                    _vm._v(" fa-gamepad\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-gavel" }),
                    _vm._v(" fa-gavel\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw ti-settings" }),
                    _vm._v(" fa-gear\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-gears" }),
                    _vm._v(" fa-gears\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-gift" }),
                    _vm._v(" fa-gift\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-glass" }),
                    _vm._v(" fa-glass\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-globe" }),
                    _vm._v(" fa-globe\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-group" }),
                    _vm._v(" fa-group\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-hdd-o" }),
                    _vm._v(" fa-hdd-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-headphones" }),
                    _vm._v(" fa-headphones\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-heart" }),
                    _vm._v(" fa-heart\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-heart-o" }),
                    _vm._v(" fa-heart-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-home" }),
                    _vm._v(" fa-home\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-inbox" }),
                    _vm._v(" fa-inbox\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-info" }),
                    _vm._v(" fa-info\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-info-circle" }),
                    _vm._v(" fa-info-circle\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-key" }),
                    _vm._v(" fa-key\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-keyboard-o" }),
                    _vm._v(" fa-keyboard-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-laptop" }),
                    _vm._v(" fa-laptop\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-leaf" }),
                    _vm._v(" fa-leaf\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-legal" }),
                    _vm._v(" fa-legal\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-lemon-o" }),
                    _vm._v(" fa-lemon-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-level-down" }),
                    _vm._v(" fa-level-down\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-level-up" }),
                    _vm._v(" fa-level-up\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-lightbulb-o" }),
                    _vm._v(" fa-lightbulb-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-location-arrow" }),
                    _vm._v(" fa-location-arrow\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw ti-lock" }),
                    _vm._v(" fa-lock\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-magic" }),
                    _vm._v(" fa-magic\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-magnet" }),
                    _vm._v(" fa-magnet\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-mail-forward" }),
                    _vm._v(" fa-mail-forward\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-mail-reply" }),
                    _vm._v(" fa-mail-reply\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-mail-reply-all" }),
                    _vm._v(" fa-mail-reply-all\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-male" }),
                    _vm._v(" fa-male\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-map-marker" }),
                    _vm._v(" fa-map-marker\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-meh-o" }),
                    _vm._v(" fa-meh-o\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-microphone" }),
                    _vm._v(" fa-microphone\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-microphone-slash" }),
                    _vm._v(" fa-microphone-slash\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-minus" }),
                    _vm._v(" fa-minus\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-minus-circle" }),
                    _vm._v(" fa-minus-circle\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-minus-square" }),
                    _vm._v(" fa-minus-square\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-minus-square-o" }),
                    _vm._v(" fa-minus-square-o\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-mobile" }),
                    _vm._v(" fa-mobile\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-mobile-phone" }),
                    _vm._v(" fa-mobile-phone\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-money" }),
                    _vm._v(" fa-money\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-moon-o" }),
                    _vm._v(" fa-moon-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-music" }),
                    _vm._v(" fa-music\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-pencil" }),
                    _vm._v(" fa-pencil\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-pencil-square" }),
                    _vm._v(" fa-pencil-square\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-pencil-square-o" }),
                    _vm._v(" fa-pencil-square-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-phone" }),
                    _vm._v(" fa-phone\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-phone-square" }),
                    _vm._v(" fa-phone-square\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-picture-o" }),
                    _vm._v(" fa-picture-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-plane" }),
                    _vm._v(" fa-plane\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-plus" }),
                    _vm._v(" fa-plus\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-plus-circle" }),
                    _vm._v(" fa-plus-circle\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-plus-square" }),
                    _vm._v(" fa-plus-square\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-plus-square-o" }),
                    _vm._v(" fa-plus-square-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-power-off" }),
                    _vm._v(" fa-power-off\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-print" }),
                    _vm._v(" fa-print\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-puzzle-piece" }),
                    _vm._v(" fa-puzzle-piece\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-qrcode" }),
                    _vm._v(" fa-qrcode\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-question" }),
                    _vm._v(" fa-question\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-question-circle" }),
                    _vm._v(" fa-question-circle\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-quote-left" }),
                    _vm._v(" fa-quote-left\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-quote-right" }),
                    _vm._v(" fa-quote-right\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-random" }),
                    _vm._v(" fa-random\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-refresh" }),
                    _vm._v(" fa-refresh\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-reply" }),
                    _vm._v(" fa-reply\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-reply-all" }),
                    _vm._v(" fa-reply-all\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-retweet" }),
                    _vm._v(" fa-retweet\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-road" }),
                    _vm._v(" fa-road\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-rocket" }),
                    _vm._v(" fa-rocket\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-rss" }),
                    _vm._v(" fa-rss\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-rss-square" }),
                    _vm._v(" fa-rss-square\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-search" }),
                    _vm._v(" fa-search\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-search-minus" }),
                    _vm._v(" fa-search-minus\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-search-plus" }),
                    _vm._v(" fa-search-plus\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-share" }),
                    _vm._v(" fa-share\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-share-square" }),
                    _vm._v(" fa-share-square\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-share-square-o" }),
                    _vm._v(" fa-share-square-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-shield" }),
                    _vm._v(" fa-shield\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-shopping-cart" }),
                    _vm._v(" fa-shopping-cart\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sign-in" }),
                    _vm._v(" fa-sign-in\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw ti-shift-right" }),
                    _vm._v(" fa-sign-out\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-signal" }),
                    _vm._v(" fa-signal\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sitemap" }),
                    _vm._v(" fa-sitemap\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-smile-o" }),
                    _vm._v(" fa-smile-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sort" }),
                    _vm._v(" fa-sort\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sort-alpha-asc" }),
                    _vm._v(" fa-sort-alpha-asc\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sort-alpha-desc" }),
                    _vm._v(" fa-sort-alpha-desc\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sort-amount-asc" }),
                    _vm._v(" fa-sort-amount-asc\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sort-amount-desc" }),
                    _vm._v(" fa-sort-amount-desc\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sort-asc" }),
                    _vm._v(" fa-sort-asc\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sort-desc" }),
                    _vm._v(" fa-sort-desc\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sort-down" }),
                    _vm._v(" fa-sort-down\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sort-numeric-asc" }),
                    _vm._v(" fa-sort-numeric-asc\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sort-numeric-desc" }),
                    _vm._v(" fa-sort-numeric-desc\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sort-up" }),
                    _vm._v(" fa-sort-up\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-spinner" }),
                    _vm._v(" fa-spinner\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-square" }),
                    _vm._v(" fa-square\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-square-o" }),
                    _vm._v(" fa-square-o\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-star" }),
                    _vm._v(" fa-star\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-star-half" }),
                    _vm._v(" fa-star-half\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-star-half-empty" }),
                    _vm._v(
                      " fa-star-half-empty\r\n                            "
                    ),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-star-half-full" }),
                    _vm._v(
                      " fa-star-half-full\r\n                            "
                    ),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-star-half-o" }),
                    _vm._v(" fa-star-half-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-star-o" }),
                    _vm._v(" fa-star-o\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-subscript" }),
                    _vm._v(" fa-subscript\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-suitcase" }),
                    _vm._v(" fa-suitcase\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-sun-o" }),
                    _vm._v(" fa-sun-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-superscript" }),
                    _vm._v(" fa-superscript\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-tablet" }),
                    _vm._v(" fa-tablet\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-tachometer" }),
                    _vm._v(" fa-tachometer\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-tag" }),
                    _vm._v(" fa-tag\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-tags" }),
                    _vm._v(" fa-tags\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-tasks" }),
                    _vm._v(" fa-tasks\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-terminal" }),
                    _vm._v(" fa-terminal\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-thumb-tack" }),
                    _vm._v(" fa-thumb-tack\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-thumbs-down" }),
                    _vm._v(" fa-thumbs-down\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-thumbs-o-down" }),
                    _vm._v(" fa-thumbs-o-down\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-thumbs-o-up" }),
                    _vm._v(" fa-thumbs-o-up\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-thumbs-up" }),
                    _vm._v(" fa-thumbs-up\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-ticket" }),
                    _vm._v(" fa-ticket\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-times" }),
                    _vm._v(" fa-times\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-times-circle" }),
                    _vm._v(" fa-times-circle\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-times-circle-o" }),
                    _vm._v(" fa-times-circle-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-tint" }),
                    _vm._v(" fa-tint\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-toggle-down" }),
                    _vm._v(" fa-toggle-down\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-toggle-left" }),
                    _vm._v(" fa-toggle-left\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-toggle-right" }),
                    _vm._v(" fa-toggle-right\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-toggle-up" }),
                    _vm._v(" fa-toggle-up\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-trash-o" }),
                    _vm._v(" fa-trash-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-trophy" }),
                    _vm._v(" fa-trophy\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-truck" }),
                    _vm._v(" fa-truck\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-umbrella" }),
                    _vm._v(" fa-umbrella\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-unlock" }),
                    _vm._v(" fa-unlock\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-unlock-alt" }),
                    _vm._v(" fa-unlock-alt\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-unsorted" }),
                    _vm._v(" fa-unsorted\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-upload" }),
                    _vm._v(" fa-upload\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw ti-user" }),
                    _vm._v(" fa-user\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-users" }),
                    _vm._v(" fa-users\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-video-camera" }),
                    _vm._v(" fa-video-camera\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-volume-down" }),
                    _vm._v(" fa-volume-down\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-volume-off" }),
                    _vm._v(" fa-volume-off\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-volume-up" }),
                    _vm._v(" fa-volume-up\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-warning" }),
                    _vm._v(" fa-warning\r\n                            "),
                    _c("span", { staticClass: "text-muted" }, [
                      _vm._v("(alias)")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-wheelchair" }),
                    _vm._v(" fa-wheelchair\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-wrench" }),
                    _vm._v(" fa-wrench\r\n                        ")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("section", { attrs: { id: "form-control" } }, [
                _c("h4", { staticClass: "page-header" }, [
                  _vm._v(
                    "\r\n                        Form Control Icons\r\n                    "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-check-square" }),
                    _vm._v(" fa-check-square\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-check-square-o" }),
                    _vm._v(" fa-check-square-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-circle" }),
                    _vm._v(" fa-circle\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-circle-o" }),
                    _vm._v(" fa-circle-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-dot-circle-o" }),
                    _vm._v(" fa-dot-circle-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-minus-square" }),
                    _vm._v(" fa-minus-square\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-minus-square-o" }),
                    _vm._v(" fa-minus-square-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-plus-square" }),
                    _vm._v(" fa-plus-square\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-plus-square-o" }),
                    _vm._v(" fa-plus-square-o\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-square" }),
                    _vm._v(" fa-square\r\n                        ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                    _c("i", { staticClass: "fa fa-fw fa-square-o" }),
                    _vm._v(" fa-square-o\r\n                        ")
                  ])
                ]),
                _vm._v(" "),
                _c("section", { attrs: { id: "currency" } }, [
                  _c("h4", { staticClass: "page-header" }, [
                    _vm._v(
                      "\r\n                            Currency Icons\r\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-bitcoin" }),
                      _vm._v(" fa-bitcoin\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-btc" }),
                      _vm._v(" fa-btc\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-cny" }),
                      _vm._v(" fa-cny\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-dollar" }),
                      _vm._v(" fa-dollar\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-eur" }),
                      _vm._v(" fa-eur\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-euro" }),
                      _vm._v(" fa-euro\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-gbp" }),
                      _vm._v(" fa-gbp\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-inr" }),
                      _vm._v(" fa-inr\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-jpy" }),
                      _vm._v(" fa-jpy\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-krw" }),
                      _vm._v(" fa-krw\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-money" }),
                      _vm._v(" fa-money\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-rmb" }),
                      _vm._v(" fa-rmb\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-rouble" }),
                      _vm._v(" fa-rouble\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-rub" }),
                      _vm._v(" fa-rub\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-ruble" }),
                      _vm._v(" fa-ruble\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-rupee" }),
                      _vm._v(" fa-rupee\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-try" }),
                      _vm._v(" fa-try\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-turkish-lira" }),
                      _vm._v(
                        " fa-turkish-lira\r\n                                "
                      ),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-usd" }),
                      _vm._v(" fa-usd\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-won" }),
                      _vm._v(" fa-won\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-yen" }),
                      _vm._v(" fa-yen\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("section", { attrs: { id: "text-editor" } }, [
                  _c("h4", { staticClass: "page-header" }, [
                    _vm._v(
                      "\r\n                            Text Editor Icons\r\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-align-center" }),
                      _vm._v(" fa-align-center\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-align-justify" }),
                      _vm._v(
                        " fa-align-justify\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-align-left" }),
                      _vm._v(" fa-align-left\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-align-right" }),
                      _vm._v(" fa-align-right\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-bold" }),
                      _vm._v(" fa-bold\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-chain" }),
                      _vm._v(" fa-chain\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-chain-broken" }),
                      _vm._v(" fa-chain-broken\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-clipboard" }),
                      _vm._v(" fa-clipboard\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-columns" }),
                      _vm._v(" fa-columns\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-copy" }),
                      _vm._v(" fa-copy\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-cut" }),
                      _vm._v(" fa-cut\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-dedent" }),
                      _vm._v(" fa-dedent\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-eraser" }),
                      _vm._v(" fa-eraser\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-file" }),
                      _vm._v(" fa-file\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-file-o" }),
                      _vm._v(" fa-file-o\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-file-text" }),
                      _vm._v(" fa-file-text\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw ti-pencil" }),
                      _vm._v(" fa-file-text-o\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-files-o" }),
                      _vm._v(" fa-files-o\r\n                            ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-floppy-o" }),
                      _vm._v(" fa-floppy-o\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-font" }),
                      _vm._v(" fa-font\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-indent" }),
                      _vm._v(" fa-indent\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-italic" }),
                      _vm._v(" fa-italic\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-link" }),
                      _vm._v(" fa-link\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-list" }),
                      _vm._v(" fa-list\r\n                            ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-list-alt" }),
                      _vm._v(" fa-list-alt\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-list-ol" }),
                      _vm._v(" fa-list-ol\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-list-ul" }),
                      _vm._v(" fa-list-ul\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-outdent" }),
                      _vm._v(" fa-outdent\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-paperclip" }),
                      _vm._v(" fa-paperclip\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-paste" }),
                      _vm._v(" fa-paste\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-repeat" }),
                      _vm._v(" fa-repeat\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-rotate-left" }),
                      _vm._v(
                        " fa-rotate-left\r\n                                "
                      ),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-rotate-right" }),
                      _vm._v(
                        " fa-rotate-right\r\n                                "
                      ),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-save" }),
                      _vm._v(" fa-save\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-scissors" }),
                      _vm._v(" fa-scissors\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-strikethrough" }),
                      _vm._v(
                        " fa-strikethrough\r\n                            "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-table" }),
                      _vm._v(" fa-table\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-text-height" }),
                      _vm._v(" fa-text-height\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-text-width" }),
                      _vm._v(" fa-text-width\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-th" }),
                      _vm._v(" fa-th\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-th-large" }),
                      _vm._v(" fa-th-large\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-th-list" }),
                      _vm._v(" fa-th-list\r\n                            ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-underline" }),
                      _vm._v(" fa-underline\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-undo" }),
                      _vm._v(" fa-undo\r\n                            ")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                      _c("i", { staticClass: "fa fa-fw fa-unlink" }),
                      _vm._v(" fa-unlink\r\n                                "),
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v("(alias)")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("section", { attrs: { id: "directional" } }, [
                    _c("h4", { staticClass: "page-header" }, [
                      _vm._v(
                        "\r\n                                Directional Icons\r\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-angle-double-down"
                        }),
                        _vm._v(
                          " fa-angle-double-down\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-angle-double-left"
                        }),
                        _vm._v(
                          " fa-angle-double-left\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-angle-double-right"
                        }),
                        _vm._v(
                          " fa-angle-double-right\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-angle-double-up" }),
                        _vm._v(
                          " fa-angle-double-up\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-angle-down" }),
                        _vm._v(
                          " fa-angle-down\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-angle-left" }),
                        _vm._v(
                          " fa-angle-left\r\n                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-angle-right" }),
                        _vm._v(
                          " fa-angle-right\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-angle-up" }),
                        _vm._v(
                          " fa-angle-up\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-arrow-circle-down"
                        }),
                        _vm._v(
                          " fa-arrow-circle-down\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-arrow-circle-left"
                        }),
                        _vm._v(
                          " fa-arrow-circle-left\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-arrow-circle-o-down"
                        }),
                        _vm._v(
                          " fa-arrow-circle-o-down\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-arrow-circle-o-left"
                        }),
                        _vm._v(
                          " fa-arrow-circle-o-left\r\n                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-arrow-circle-o-right"
                        }),
                        _vm._v(
                          " fa-arrow-circle-o-right\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-arrow-circle-o-up"
                        }),
                        _vm._v(
                          " fa-arrow-circle-o-up\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-arrow-circle-right"
                        }),
                        _vm._v(
                          " fa-arrow-circle-right\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-arrow-circle-up" }),
                        _vm._v(
                          " fa-arrow-circle-up\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-arrow-down" }),
                        _vm._v(
                          " fa-arrow-down\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-arrow-left" }),
                        _vm._v(
                          " fa-arrow-left\r\n                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-arrow-right" }),
                        _vm._v(
                          " fa-arrow-right\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-arrow-up" }),
                        _vm._v(
                          " fa-arrow-up\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-arrows" }),
                        _vm._v(" fa-arrows\r\n                                ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-arrows-alt" }),
                        _vm._v(
                          " fa-arrows-alt\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-arrows-h" }),
                        _vm._v(
                          " fa-arrows-h\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-arrows-v" }),
                        _vm._v(
                          " fa-arrows-v\r\n                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-caret-down" }),
                        _vm._v(
                          " fa-caret-down\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-caret-left" }),
                        _vm._v(
                          " fa-caret-left\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-caret-right" }),
                        _vm._v(
                          " fa-caret-right\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-caret-square-o-down"
                        }),
                        _vm._v(
                          " fa-caret-square-o-down\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-caret-square-o-left"
                        }),
                        _vm._v(
                          " fa-caret-square-o-left\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-caret-square-o-right"
                        }),
                        _vm._v(
                          " fa-caret-square-o-right\r\n                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-caret-square-o-up"
                        }),
                        _vm._v(
                          " fa-caret-square-o-up\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-caret-up" }),
                        _vm._v(
                          " fa-caret-up\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-chevron-circle-down"
                        }),
                        _vm._v(
                          " fa-chevron-circle-down\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-chevron-circle-left"
                        }),
                        _vm._v(
                          " fa-chevron-circle-left\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-chevron-circle-right"
                        }),
                        _vm._v(
                          " fa-chevron-circle-right\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-chevron-circle-up"
                        }),
                        _vm._v(
                          " fa-chevron-circle-up\r\n                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-chevron-down" }),
                        _vm._v(
                          " fa-chevron-down\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-chevron-left" }),
                        _vm._v(
                          " fa-chevron-left\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-chevron-right" }),
                        _vm._v(
                          " fa-chevron-right\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw ti-angle-up clickable"
                        }),
                        _vm._v(
                          " fa-chevron-up\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-hand-o-down" }),
                        _vm._v(
                          " fa-hand-o-down\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-hand-o-left" }),
                        _vm._v(
                          " fa-hand-o-left\r\n                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-hand-o-right" }),
                        _vm._v(
                          " fa-hand-o-right\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-hand-o-up" }),
                        _vm._v(
                          " fa-hand-o-up\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-long-arrow-down" }),
                        _vm._v(
                          " fa-long-arrow-down\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-long-arrow-left" }),
                        _vm._v(
                          " fa-long-arrow-left\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", {
                          staticClass: "fa fa-fw fa-long-arrow-right"
                        }),
                        _vm._v(
                          " fa-long-arrow-right\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-long-arrow-up" }),
                        _vm._v(
                          " fa-long-arrow-up\r\n                                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-toggle-down" }),
                        _vm._v(
                          " fa-toggle-down\r\n                                    "
                        ),
                        _c("span", { staticClass: "text-muted" }, [
                          _vm._v("(alias)")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-toggle-left" }),
                        _vm._v(
                          " fa-toggle-left\r\n                                    "
                        ),
                        _c("span", { staticClass: "text-muted" }, [
                          _vm._v("(alias)")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-toggle-right" }),
                        _vm._v(
                          " fa-toggle-right\r\n                                    "
                        ),
                        _c("span", { staticClass: "text-muted" }, [
                          _vm._v("(alias)")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-2 col-sm-4 fa-icon" }, [
                        _c("i", { staticClass: "fa fa-fw fa-toggle-up" }),
                        _vm._v(
                          " fa-toggle-up\r\n                                    "
                        ),
                        _c("span", { staticClass: "text-muted" }, [
                          _vm._v("(alias)")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("section", { attrs: { id: "video-player" } }, [
                      _c("h4", { staticClass: "page-header" }, [
                        _vm._v(
                          "\r\n                                    Video Player Icons\r\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", { staticClass: "fa fa-fw fa-arrows-alt" }),
                            _vm._v(
                              " fa-arrows-alt\r\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", { staticClass: "fa fa-fw fa-backward" }),
                            _vm._v(
                              " fa-backward\r\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", { staticClass: "fa fa-fw fa-compress" }),
                            _vm._v(
                              " fa-compress\r\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", { staticClass: "fa fa-fw fa-eject" }),
                            _vm._v(
                              " fa-eject\r\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", { staticClass: "fa fa-fw fa-expand" }),
                            _vm._v(
                              " fa-expand\r\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", {
                              staticClass: "fa fa-fw fa-fast-backward"
                            }),
                            _vm._v(
                              " fa-fast-backward\r\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", {
                              staticClass: "fa fa-fw fa-fast-forward"
                            }),
                            _vm._v(
                              " fa-fast-forward\r\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", { staticClass: "fa fa-fw fa-forward" }),
                            _vm._v(
                              " fa-forward\r\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", { staticClass: "fa fa-fw fa-pause" }),
                            _vm._v(
                              " fa-pause\r\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", { staticClass: "fa fa-fw fa-play" }),
                            _vm._v(
                              " fa-play\r\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", { staticClass: "fa fa-fw fa-play-circle" }),
                            _vm._v(
                              " fa-play-circle\r\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", {
                              staticClass: "fa fa-fw fa-play-circle-o"
                            }),
                            _vm._v(
                              " fa-play-circle-o\r\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", {
                              staticClass: "fa fa-fw fa-step-backward"
                            }),
                            _vm._v(
                              " fa-step-backward\r\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", {
                              staticClass: "fa fa-fw fa-step-forward"
                            }),
                            _vm._v(
                              " fa-step-forward\r\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", { staticClass: "fa fa-fw fa-stop" }),
                            _vm._v(
                              " fa-stop\r\n                                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-2 col-sm-4 fa-icon" },
                          [
                            _c("i", {
                              staticClass: "fa fa-fw fa-youtube-play"
                            }),
                            _vm._v(
                              " fa-youtube-play\r\n                                    "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("section", { attrs: { id: "brand" } }, [
                        _c("h4", { staticClass: "page-header" }, [
                          _vm._v(
                            "\r\n                                        Brand Icons\r\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-adn" }),
                              _vm._v(
                                " fa-adn\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-android" }),
                              _vm._v(
                                " fa-android\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-apple" }),
                              _vm._v(
                                " fa-apple\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-bitbucket" }),
                              _vm._v(
                                " fa-bitbucket\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-bitbucket-square"
                              }),
                              _vm._v(
                                " fa-bitbucket-square\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-bitcoin" }),
                              _vm._v(
                                " fa-bitcoin\r\n                                            "
                              ),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v("(alias)")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-btc" }),
                              _vm._v(
                                " fa-btc\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-css3" }),
                              _vm._v(
                                " fa-css3\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-dribbble" }),
                              _vm._v(
                                " fa-dribbble\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-dropbox" }),
                              _vm._v(
                                " fa-dropbox\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-facebook" }),
                              _vm._v(
                                " fa-facebook\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-facebook-square"
                              }),
                              _vm._v(
                                " fa-facebook-square\r\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-flickr" }),
                              _vm._v(
                                " fa-flickr\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-foursquare"
                              }),
                              _vm._v(
                                " fa-foursquare\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-github" }),
                              _vm._v(
                                " fa-github\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-github-alt"
                              }),
                              _vm._v(
                                " fa-github-alt\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-github-square"
                              }),
                              _vm._v(
                                " fa-github-square\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-gittip" }),
                              _vm._v(
                                " fa-gittip\r\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-google-plus"
                              }),
                              _vm._v(
                                " fa-google-plus\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-google-plus-square"
                              }),
                              _vm._v(
                                " fa-google-plus-square\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-html5" }),
                              _vm._v(
                                " fa-html5\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-instagram" }),
                              _vm._v(
                                " fa-instagram\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-linkedin" }),
                              _vm._v(
                                " fa-linkedin\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-linkedin-square"
                              }),
                              _vm._v(
                                " fa-linkedin-square\r\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-linux" }),
                              _vm._v(
                                " fa-linux\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-maxcdn" }),
                              _vm._v(
                                " fa-maxcdn\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-pagelines" }),
                              _vm._v(
                                " fa-pagelines\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-pinterest" }),
                              _vm._v(
                                " fa-pinterest\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-pinterest-square"
                              }),
                              _vm._v(
                                " fa-pinterest-square\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-renren" }),
                              _vm._v(
                                " fa-renren\r\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-skype" }),
                              _vm._v(
                                " fa-skype\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-stack-exchange"
                              }),
                              _vm._v(
                                " fa-stack-exchange\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-stack-overflow"
                              }),
                              _vm._v(
                                " fa-stack-overflow\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-trello" }),
                              _vm._v(
                                " fa-trello\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-tumblr" }),
                              _vm._v(
                                " fa-tumblr\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-tumblr-square"
                              }),
                              _vm._v(
                                " fa-tumblr-square\r\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-twitter" }),
                              _vm._v(
                                " fa-twitter\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-twitter-square"
                              }),
                              _vm._v(
                                " fa-twitter-square\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-vimeo-square"
                              }),
                              _vm._v(
                                " fa-vimeo-square\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-vk" }),
                              _vm._v(
                                " fa-vk\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-weibo" }),
                              _vm._v(
                                " fa-weibo\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-windows" }),
                              _vm._v(
                                " fa-windows\r\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-xing" }),
                              _vm._v(
                                " fa-xing\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-xing-square"
                              }),
                              _vm._v(
                                " fa-xing-square\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", { staticClass: "fa fa-fw fa-youtube" }),
                              _vm._v(
                                " fa-youtube\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-youtube-play"
                              }),
                              _vm._v(
                                " fa-youtube-play\r\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-2 col-sm-4 fa-icon" },
                            [
                              _c("i", {
                                staticClass: "fa fa-fw fa-youtube-square"
                              }),
                              _vm._v(
                                " fa-youtube-square\r\n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("section", { attrs: { id: "medical" } }, [
                          _c("h4", { staticClass: "page-header" }, [
                            _vm._v(
                              "\r\n                                            Medical Icons\r\n                                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-12 col-md-12" }, [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-2 col-sm-4 fa-icon" },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-ambulance"
                                    }),
                                    _vm._v(
                                      " fa-ambulance\r\n                                                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-2 col-sm-4 fa-icon" },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-h-square"
                                    }),
                                    _vm._v(
                                      " fa-h-square\r\n                                                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-2 col-sm-4 fa-icon" },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-hospital-o"
                                    }),
                                    _vm._v(
                                      " fa-hospital-o\r\n                                                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-2 col-sm-4 fa-icon" },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-medkit"
                                    }),
                                    _vm._v(
                                      " fa-medkit\r\n                                                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-2 col-sm-4 fa-icon" },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-plus-square"
                                    }),
                                    _vm._v(
                                      " fa-plus-square\r\n                                                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-2 col-sm-4 fa-icon" },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-stethoscope"
                                    }),
                                    _vm._v(
                                      " fa-stethoscope\r\n                                                    "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-2 col-sm-4 fa-icon" },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-user-md"
                                    }),
                                    _vm._v(
                                      " fa-user-md\r\n                                                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-2 col-sm-4 fa-icon" },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-wheelchair"
                                    }),
                                    _vm._v(
                                      " fa-wheelchair\r\n                                                    "
                                    )
                                  ]
                                )
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
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
                                  "\r\n                                            Contacts\r\n                                        "
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
                                  {
                                    staticClass: "rightsidebar-contact-wrapper"
                                  },
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
                                          "\r\n                                                    Annette\r\n                                                "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass: "rightsidebar-contact-wrapper"
                                  },
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
                                          "\r\n                                                    Jordan\r\n                                                "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass: "rightsidebar-contact-wrapper"
                                  },
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
                                          "\r\n                                                    Stewart\r\n                                                "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass: "rightsidebar-contact-wrapper"
                                  },
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
                                          "\r\n                                                    Alfred\r\n                                                "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass: "rightsidebar-contact-wrapper"
                                  },
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
                                          "\r\n                                                    Eileen\r\n                                                "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass: "rightsidebar-contact-wrapper"
                                  },
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
                                          "\r\n                                                    Robert\r\n                                                "
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "li",
                                  {
                                    staticClass: "rightsidebar-contact-wrapper"
                                  },
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
                                          "\r\n                                                    Cassandra\r\n                                                "
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
                                  "\r\n                                            Recent Updates\r\n                                        "
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
                                        "\r\n                                                        New Comment\r\n                                                    "
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
                                        "\r\n                                                        3 New Followers\r\n                                                    "
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
                                          "fa ti-email fa-fw text-info"
                                      }),
                                      _vm._v(
                                        "\r\n                                                        Message Sent\r\n                                                    "
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
                                        "\r\n                                                        New Task\r\n                                                    "
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
                                        "\r\n                                                        Server Rebooted\r\n                                                    "
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
                                        "\r\n                                                        Server Not Responding\r\n                                                    "
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
                                        "\r\n                                                        New Order Placed\r\n                                                    "
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
                                          "fa ti-money fa-fw text-info"
                                      }),
                                      _vm._v(
                                        "\r\n                                                        Payment Received\r\n                                                    "
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
                        {
                          staticClass: "tab-pane fade",
                          attrs: { id: "r_tab2" }
                        },
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
                                  "\r\n                                            Notifications\r\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list-unstyled m-t-15 notifications"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "message icon-not striped-col",
                                      attrs: { href: "" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "message-body" },
                                        [
                                          _c("strong", [_vm._v("John Doe")]),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(
                                            "\r\n                                                        5 members joined today\r\n                                                        "
                                          ),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c(
                                            "small",
                                            { staticClass: "noti-date" },
                                            [_vm._v("Just now")]
                                          )
                                        ]
                                      )
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
                                      _c(
                                        "div",
                                        { staticClass: "message-body" },
                                        [
                                          _c("strong", [_vm._v("Tony")]),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(
                                            "\r\n                                                        likes a photo of you\r\n                                                        "
                                          ),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c(
                                            "small",
                                            { staticClass: "noti-date" },
                                            [_vm._v("5 min")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "message icon-not striped-col",
                                      attrs: { href: "" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "message-body" },
                                        [
                                          _c("strong", [_vm._v("John")]),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(
                                            "\r\n                                                        Dont forgot to call...\r\n                                                        "
                                          ),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c(
                                            "small",
                                            { staticClass: "noti-date" },
                                            [_vm._v("11 min")]
                                          )
                                        ]
                                      )
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
                                      _c(
                                        "div",
                                        { staticClass: "message-body" },
                                        [
                                          _c("strong", [_vm._v("Jenny Kerry")]),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(
                                            "\r\n                                                        Done with it...\r\n                                                        "
                                          ),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c(
                                            "small",
                                            { staticClass: "noti-date" },
                                            [_vm._v("1 Hour")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "message icon-not striped-col",
                                      attrs: { href: "" }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "message-body" },
                                        [
                                          _c("strong", [
                                            _vm._v("Ernest Kerry")
                                          ]),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(
                                            "\r\n                                                        2 members joined today\r\n                                                        "
                                          ),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c(
                                            "small",
                                            { staticClass: "noti-date" },
                                            [_vm._v("3 Days")]
                                          )
                                        ]
                                      )
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
                                _c("i", {
                                  staticClass: "fa fa-fw ti-check-box"
                                }),
                                _vm._v(
                                  "\r\n                                            Tasks\r\n                                        "
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
                                      staticClass:
                                        "progress progress-xs  active"
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
                                          _c(
                                            "span",
                                            { staticClass: "sr-only" },
                                            [_vm._v("40% Complete (success)")]
                                          )
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
                                      staticClass:
                                        "progress progress-xs  active"
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
                                          _c(
                                            "span",
                                            { staticClass: "sr-only" },
                                            [_vm._v("20% Complete")]
                                          )
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
                                      staticClass:
                                        "progress progress-xs  active"
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
                                          _c(
                                            "span",
                                            { staticClass: "sr-only" },
                                            [_vm._v("60% Complete (warning)")]
                                          )
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
                                    _c("span", [
                                      _vm._v("Transitions Creation")
                                    ]),
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
                                          _c(
                                            "span",
                                            { staticClass: "sr-only" },
                                            [_vm._v("80% Complete (danger)")]
                                          )
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
                        {
                          staticClass: "tab-pane fade",
                          attrs: { id: "r_tab3" }
                        },
                        [
                          _c("div", { attrs: { id: "slim_t3" } }, [
                            _c(
                              "h5",
                              {
                                staticClass:
                                  "rightsidebar-right-heading text-uppercase gen-sett-m-t text-xs"
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-fw ti-settings"
                                }),
                                _vm._v(
                                  "\r\n                                            General\r\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list-unstyled settings-list m-t-10"
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
                                  _c(
                                    "label",
                                    { attrs: { for: "email-auth" } },
                                    [_vm._v("Login with Email")]
                                  ),
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
                                  "\r\n                                            Sound & Notification\r\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list-unstyled settings-list m-t-10"
                              },
                              [
                                _c("li", [
                                  _c(
                                    "label",
                                    { attrs: { for: "chat-sound" } },
                                    [_vm._v("Chat Sound")]
                                  ),
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
                                  _c(
                                    "label",
                                    { attrs: { for: "noti-sound" } },
                                    [_vm._v("Notification Sound")]
                                  ),
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
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "background-overlay" })
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

/***/ "./resources/components/pages/fontawesome_icons.vue":
/*!**********************************************************!*\
  !*** ./resources/components/pages/fontawesome_icons.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fontawesome_icons_vue_vue_type_template_id_4a7f2703___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fontawesome_icons.vue?vue&type=template&id=4a7f2703& */ "./resources/components/pages/fontawesome_icons.vue?vue&type=template&id=4a7f2703&");
/* harmony import */ var _fontawesome_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fontawesome_icons.vue?vue&type=script&lang=js& */ "./resources/components/pages/fontawesome_icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var toastr_build_toastr_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! toastr/build/toastr.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/toastr/build/toastr.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _css_custom_css_fontawesome_icons_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/custom_css/fontawesome_icons.css?vue&type=style&index=1&lang=css& */ "./resources/css/custom_css/fontawesome_icons.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _fontawesome_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fontawesome_icons_vue_vue_type_template_id_4a7f2703___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fontawesome_icons_vue_vue_type_template_id_4a7f2703___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/fontawesome_icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/fontawesome_icons.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/components/pages/fontawesome_icons.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fontawesome_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./fontawesome_icons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/fontawesome_icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fontawesome_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/fontawesome_icons.vue?vue&type=template&id=4a7f2703&":
/*!*****************************************************************************************!*\
  !*** ./resources/components/pages/fontawesome_icons.vue?vue&type=template&id=4a7f2703& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fontawesome_icons_vue_vue_type_template_id_4a7f2703___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./fontawesome_icons.vue?vue&type=template&id=4a7f2703& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/fontawesome_icons.vue?vue&type=template&id=4a7f2703&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fontawesome_icons_vue_vue_type_template_id_4a7f2703___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fontawesome_icons_vue_vue_type_template_id_4a7f2703___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/custom_css/fontawesome_icons.css?vue&type=style&index=1&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/css/custom_css/fontawesome_icons.css?vue&type=style&index=1&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_fontawesome_icons_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./fontawesome_icons.css?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/fontawesome_icons.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_fontawesome_icons_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_fontawesome_icons_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_fontawesome_icons_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_fontawesome_icons_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_fontawesome_icons_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);