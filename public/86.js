(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/themify_icons.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/themify_icons.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "themify_icons",
  components: {
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    icon_search: function icon_search() {}
  },
  mounted: function mounted() {
    "use strict";

    $(document).ready(function () {
      $('#icon-search').on("input", function () {
        $(".icon-name").each(function () {
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
        $(".fontnormal").html(".preview span[class|=ti]{font-size:" + icon_size.val() + "px;}.preview:hover span[class|=ti]{font-size:" + x + "px;}");
        $(".icon-sizeshow").text(icon_size.val() + "px");
      });
      $("head").append("<style class='fontnormal'></style>");
      $(".preview").on("click", function () {
        var x = $(this).find("span[class|=ti]").outerHTML();
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/simple_themify.css?vue&type=style&index=1&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/simple_themify.css?vue&type=style&index=1&lang=css& ***!
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/simple_themify.css?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/simple_themify.css?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./simple_themify.css?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/simple_themify.css?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/themify_icons.vue?vue&type=template&id=40abb7a2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/themify_icons.vue?vue&type=template&id=40abb7a2& ***!
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
  return _c(
    "div",
    [
      _c(
        "card",
        { attrs: { title: "<i class='fa fa-fw fa-font'></i> Themify Icons" } },
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
                    },
                    on: { click: _vm.icon_search }
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
                    "\r\n                            Themify Icons\r\n                        "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "icon-section" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("h3", [_vm._v("Arrows & Direction Icons ")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "icon-preview-box col-12 col-sm-3 col-md-3 col-lg-3"
                      },
                      [
                        _c("div", { staticClass: "preview" }, [
                          _c("span", { staticClass: "ti-arrow-up" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-arrow-up")
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
                          _c("span", { staticClass: "ti-arrow-right" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-arrow-right")
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
                          _c("span", { staticClass: "ti-arrow-left" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-arrow-left")
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
                          _c("span", { staticClass: "ti-arrow-down" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-arrow-down")
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
                          _c("span", { staticClass: "ti-arrows-vertical" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-arrows-vertical")
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
                          _c("span", { staticClass: "ti-arrows-horizontal" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-arrows-horizontal")
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
                          _c("span", { staticClass: "ti-angle-up" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-angle-up")
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
                          _c("span", { staticClass: "ti-angle-right" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-angle-right")
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
                          _c("span", { staticClass: "ti-angle-left" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-angle-left")
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
                          _c("span", { staticClass: "ti-angle-down" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-angle-down")
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
                          _c("span", { staticClass: "ti-angle-double-up" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-angle-double-up")
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
                          _c("span", { staticClass: "ti-angle-double-right" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-angle-double-right")
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
                          _c("span", { staticClass: "ti-angle-double-left" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-angle-double-left")
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
                          _c("span", { staticClass: "ti-angle-double-down" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-angle-double-down")
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
                          _c("span", { staticClass: "ti-move" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-move")
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
                          _c("span", { staticClass: "ti-fullscreen" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-fullscreen")
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
                          _c("span", { staticClass: "ti-arrow-top-right" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-arrow-top-right")
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
                          _c("span", { staticClass: "ti-arrow-top-left" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-arrow-top-left")
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
                          _c("span", { staticClass: "ti-arrow-circle-up" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-arrow-circle-up")
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
                          _c("span", { staticClass: "ti-arrow-circle-right" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-arrow-circle-right")
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
                          _c("span", { staticClass: "ti-arrow-circle-left" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-arrow-circle-left")
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
                          _c("span", { staticClass: "ti-arrow-circle-down" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-arrow-circle-down")
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
                          _c("span", { staticClass: "ti-arrows-corner" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-arrows-corner")
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
                          _c("span", { staticClass: "ti-split-v" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-split-v")
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
                          _c("span", { staticClass: "ti-split-v-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-split-v-alt")
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
                          _c("span", { staticClass: "ti-split-h" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-split-h")
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
                          _c("span", { staticClass: "ti-hand-point-up" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-hand-point-up")
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
                          _c("span", { staticClass: "ti-hand-point-right" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-hand-point-right")
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
                          _c("span", { staticClass: "ti-hand-point-left" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-hand-point-left")
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
                          _c("span", { staticClass: "ti-hand-point-down" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-hand-point-down")
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
                          _c("span", { staticClass: "ti-back-right" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-back-right")
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
                          _c("span", { staticClass: "ti-back-left" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-back-left")
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                    },
                    [
                      _c("div", { staticClass: "preview" }, [
                        _c("span", { staticClass: "ti-exchange-vertical" }),
                        _c("span", { staticClass: "icon-name" }, [
                          _vm._v(" ti-exchange-vertical")
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "icon-section" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("h3", [_vm._v("Web App Icons")])
                    ])
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
                          _c("span", { staticClass: "ti-wand" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-wand")
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
                          _c("span", { staticClass: "ti-save" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-save")
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
                          _c("span", { staticClass: "ti-save-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-save-alt")
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
                          _c("span", { staticClass: "ti-direction" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-direction")
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
                          _c("span", { staticClass: "ti-direction-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-direction-alt")
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
                          _c("span", { staticClass: "ti-user" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-user")
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
                          _c("span", { staticClass: "ti-link" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-link")
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
                          _c("span", { staticClass: "ti-unlink" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-unlink")
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
                          _c("span", { staticClass: "ti-trash" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-trash")
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
                          _c("span", { staticClass: "ti-target" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-target")
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
                          _c("span", { staticClass: "ti-tag" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-tag")
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
                          _c("span", { staticClass: "ti-desktop" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-desktop")
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
                          _c("span", { staticClass: "ti-tablet" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-tablet")
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
                          _c("span", { staticClass: "ti-mobile" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-mobile")
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
                          _c("span", { staticClass: "ti-email" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-email")
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
                          _c("span", { staticClass: "ti-star" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-star")
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
                          _c("span", { staticClass: "ti-spray" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-spray")
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
                          _c("span", { staticClass: "ti-signal" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-signal")
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
                          _c("span", { staticClass: "ti-shopping-cart" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-shopping-cart")
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
                          _c("span", { staticClass: "ti-shopping-cart-full" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-shopping-cart-full")
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
                          _c("span", { staticClass: "ti-settings" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-settings")
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
                          _c("span", { staticClass: "ti-search" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-search")
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
                          _c("span", { staticClass: "ti-zoom-in" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-zoom-in")
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
                          _c("span", { staticClass: "ti-zoom-out" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-zoom-out")
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
                          _c("span", { staticClass: "ti-cut" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-cut")
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
                          _c("span", { staticClass: "ti-ruler" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-ruler")
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
                          _c("span", { staticClass: "ti-ruler-alt-2" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-ruler-alt-2")
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
                          _c("span", { staticClass: "ti-ruler-pencil" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-ruler-pencil")
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
                          _c("span", { staticClass: "ti-ruler-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-ruler-alt")
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
                          _c("span", { staticClass: "ti-bookmark" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-bookmark")
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
                          _c("span", { staticClass: "ti-bookmark-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-bookmark-alt")
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
                          _c("span", { staticClass: "ti-reload" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-reload")
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
                          _c("span", { staticClass: "ti-plus" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-plus")
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
                          _c("span", { staticClass: "ti-minus" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-minus")
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
                          _c("span", { staticClass: "ti-close" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-close")
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
                          _c("span", { staticClass: "ti-pin" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-pin")
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
                          _c("span", { staticClass: "ti-pencil" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-pencil")
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
                          _c("span", { staticClass: "ti-pencil-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-pencil-alt")
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
                          _c("span", { staticClass: "ti-paint-roller" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-paint-roller")
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
                          _c("span", { staticClass: "ti-paint-bucket" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-paint-bucket")
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
                          _c("span", { staticClass: "ti-na" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-na")
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
                          _c("span", { staticClass: "ti-medall" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-medall")
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
                          _c("span", { staticClass: "ti-medall-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-medall-alt")
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
                          _c("span", { staticClass: "ti-marker" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-marker")
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
                          _c("span", { staticClass: "ti-marker-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-marker-alt")
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
                          _c("span", { staticClass: "ti-lock" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-lock")
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
                          _c("span", { staticClass: "ti-unlock" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-unlock")
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
                          _c("span", { staticClass: "ti-location-arrow" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-location-arrow")
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
                          _c("span", { staticClass: "ti-layout" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-layout")
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
                          _c("span", { staticClass: "ti-layers" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-layers")
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
                          _c("span", { staticClass: "ti-layers-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-layers-alt")
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
                          _c("span", { staticClass: "ti-key" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-key")
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
                          _c("span", { staticClass: "ti-image" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-image")
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
                          _c("span", { staticClass: "ti-heart" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-heart")
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
                          _c("span", { staticClass: "ti-heart-broken" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-heart-broken")
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
                          _c("span", { staticClass: "ti-hand-stop" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-hand-stop")
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
                          _c("span", { staticClass: "ti-hand-open" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-hand-open")
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
                          _c("span", { staticClass: "ti-hand-drag" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-hand-drag")
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
                          _c("span", { staticClass: "ti-flag" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-flag")
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
                          _c("span", { staticClass: "ti-flag-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-flag-alt")
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
                          _c("span", { staticClass: "ti-flag-alt-2" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-flag-alt-2")
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
                          _c("span", { staticClass: "ti-eye" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-eye")
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
                          _c("span", { staticClass: "ti-import" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-import")
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
                          _c("span", { staticClass: "ti-export" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-export")
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
                          _c("span", { staticClass: "ti-cup" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-cup")
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
                          _c("span", { staticClass: "ti-crown" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-crown")
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
                          _c("span", { staticClass: "ti-comments" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-comments")
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
                          _c("span", { staticClass: "ti-comment" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-comment")
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
                          _c("span", { staticClass: "ti-comment-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-comment-alt")
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
                          _c("span", { staticClass: "ti-thought" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-thought")
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
                          _c("span", { staticClass: "ti-clip" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-clip")
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
                          _c("span", { staticClass: "ti-check" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-check")
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
                          _c("span", { staticClass: "ti-check-box" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-check-box")
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
                          _c("span", { staticClass: "ti-camera" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-camera")
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
                          _c("span", { staticClass: "ti-announcement" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-announcement")
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
                          _c("span", { staticClass: "ti-brush" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-brush")
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
                          _c("span", { staticClass: "ti-brush-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-brush-alt")
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
                          _c("span", { staticClass: "ti-palette" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-palette")
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
                          _c("span", { staticClass: "ti-briefcase" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-briefcase")
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
                          _c("span", { staticClass: "ti-bolt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-bolt")
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
                          _c("span", { staticClass: "ti-bolt-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-bolt-alt")
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
                          _c("span", { staticClass: "ti-blackboard" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-blackboard")
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
                          _c("span", { staticClass: "ti-bag" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-bag")
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
                          _c("span", { staticClass: "ti-world" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-world")
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
                          _c("span", { staticClass: "ti-wheelchair" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-wheelchair")
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
                          _c("span", { staticClass: "ti-car" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-car")
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
                          _c("span", { staticClass: "ti-truck" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-truck")
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
                          _c("span", { staticClass: "ti-timer" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-timer")
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
                          _c("span", { staticClass: "ti-ticket" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-ticket")
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
                          _c("span", { staticClass: "ti-thumb-up" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-thumb-up")
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
                          _c("span", { staticClass: "ti-thumb-down" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-thumb-down")
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
                          _c("span", { staticClass: "ti-stats-up" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-stats-up")
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
                          _c("span", { staticClass: "ti-stats-down" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-stats-down")
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
                          _c("span", { staticClass: "ti-shine" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-shine")
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
                          _c("span", { staticClass: "ti-shift-right" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-shift-right")
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
                          _c("span", { staticClass: "ti-shift-left" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-shift-left")
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
                          _c("span", { staticClass: "ti-shift-right-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-shift-right-alt")
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
                          _c("span", { staticClass: "ti-shift-left-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-shift-left-alt")
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
                          _c("span", { staticClass: "ti-shield" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-shield")
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
                          _c("span", { staticClass: "ti-notepad" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-notepad")
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
                          _c("span", { staticClass: "ti-server" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-server")
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
                          _c("span", { staticClass: "ti-pulse" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-pulse")
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
                          _c("span", { staticClass: "ti-printer" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-printer")
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
                          _c("span", { staticClass: "ti-power-off" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-power-off")
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
                          _c("span", { staticClass: "ti-plug" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-plug")
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
                          _c("span", { staticClass: "ti-pie-chart" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-pie-chart")
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
                          _c("span", { staticClass: "ti-card" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-card")
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
                          _c("span", { staticClass: "ti-package" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-package")
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
                          _c("span", { staticClass: "ti-music" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-music")
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
                          _c("span", { staticClass: "ti-music-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-music-alt")
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
                          _c("span", { staticClass: "ti-mouse" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-mouse")
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
                          _c("span", { staticClass: "ti-mouse-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-mouse-alt")
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
                          _c("span", { staticClass: "ti-money" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-money")
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
                          _c("span", { staticClass: "ti-microphone" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-microphone")
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
                          _c("span", { staticClass: "ti-menu" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-menu")
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
                          _c("span", { staticClass: "ti-menu-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-menu-alt")
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
                          _c("span", { staticClass: "ti-map" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-map")
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
                          _c("span", { staticClass: "ti-map-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-map-alt")
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
                          _c("span", { staticClass: "ti-location-pin" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-location-pin")
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
                          _c("span", { staticClass: "ti-light-bulb" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-light-bulb")
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
                          _c("span", { staticClass: "ti-info" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-info")
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
                          _c("span", { staticClass: "ti-infinite" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-infinite")
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
                          _c("span", { staticClass: "ti-id-badge" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-id-badge")
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
                          _c("span", { staticClass: "ti-hummer" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-hummer")
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
                          _c("span", { staticClass: "ti-home" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-home")
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
                          _c("span", { staticClass: "ti-help" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-help")
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
                          _c("span", { staticClass: "ti-headphone" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-headphone")
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
                          _c("span", { staticClass: "ti-harddrives" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-harddrives")
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
                          _c("span", { staticClass: "ti-harddrive" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-harddrive")
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
                          _c("span", { staticClass: "ti-gift" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-gift")
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
                          _c("span", { staticClass: "ti-game" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-game")
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
                          _c("span", { staticClass: "ti-filter" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-filter")
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
                          _c("span", { staticClass: "ti-files" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-files")
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
                          _c("span", { staticClass: "ti-file" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-file")
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
                          _c("span", { staticClass: "ti-zip" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-zip")
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
                          _c("span", { staticClass: "ti-folder" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-folder")
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
                          _c("span", { staticClass: "ti-envelope" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-envelope")
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
                          _c("span", { staticClass: "ti-dashboard" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-dashboard")
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
                          _c("span", { staticClass: "ti-cloud" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-cloud")
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
                          _c("span", { staticClass: "ti-cloud-up" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-cloud-up")
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
                          _c("span", { staticClass: "ti-cloud-down" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-cloud-down")
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
                          _c("span", { staticClass: "ti-clipboard" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-clipboard")
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
                          _c("span", { staticClass: "ti-calendar" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-calendar")
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
                          _c("span", { staticClass: "ti-book" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-book")
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
                          _c("span", { staticClass: "ti-bell" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-bell")
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
                          _c("span", { staticClass: "ti-basketball" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-basketball")
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
                          _c("span", { staticClass: "ti-bar-chart" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-bar-chart")
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
                          _c("span", { staticClass: "ti-bar-chart-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-bar-chart-alt")
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
                          _c("span", { staticClass: "ti-archive" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-archive")
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
                          _c("span", { staticClass: "ti-anchor" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-anchor")
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
                          _c("span", { staticClass: "ti-alert" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-alert")
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
                          _c("span", { staticClass: "ti-alarm-clock" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-alarm-clock")
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
                          _c("span", { staticClass: "ti-agenda" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-agenda")
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
                          _c("span", { staticClass: "ti-write" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-write")
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
                          _c("span", { staticClass: "ti-wallet" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-wallet")
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
                          _c("span", { staticClass: "ti-video-clapper" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-video-clapper")
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
                          _c("span", { staticClass: "ti-video-camera" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-video-camera")
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
                          _c("span", {
                            staticClass: "ti-control-skip-forward"
                          }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-control-skip-forward")
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
                          _c("span", { staticClass: "ti-support" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-support")
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
                          _c("span", { staticClass: "ti-stamp" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-stamp")
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
                          _c("span", { staticClass: "ti-slice" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-slice")
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
                          _c("span", { staticClass: "ti-shortcode" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-shortcode")
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
                          _c("span", { staticClass: "ti-receipt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-receipt")
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
                          _c("span", { staticClass: "ti-pin2" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-pin2")
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
                          _c("span", { staticClass: "ti-pin-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-pin-alt")
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
                          _c("span", { staticClass: "ti-pencil-alt2" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-pencil-alt2")
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
                          _c("span", { staticClass: "ti-eraser" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-eraser")
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
                          _c("span", { staticClass: "ti-more" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-more")
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
                          _c("span", { staticClass: "ti-more-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-more-alt")
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
                          _c("span", { staticClass: "ti-microphone-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-microphone-alt")
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
                          _c("span", { staticClass: "ti-magnet" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-magnet")
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
                          _c("span", { staticClass: "ti-line-double" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-line-double")
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
                          _c("span", { staticClass: "ti-line-dotted" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-line-dotted")
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
                          _c("span", { staticClass: "ti-line-dashed" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-line-dashed")
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
                          _c("span", { staticClass: "ti-ink-pen" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-ink-pen")
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
                          _c("span", { staticClass: "ti-info-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-info-alt")
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
                          _c("span", { staticClass: "ti-help-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-help-alt")
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
                          _c("span", { staticClass: "ti-headphone-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-headphone-alt")
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
                          _c("span", { staticClass: "ti-gallery" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-gallery")
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
                          _c("span", { staticClass: "ti-face-smile" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-face-smile")
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
                          _c("span", { staticClass: "ti-face-sad" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-face-sad")
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
                          _c("span", { staticClass: "ti-credit-card" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-credit-card")
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
                          _c("span", { staticClass: "ti-comments-smiley" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-comments-smiley")
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
                          _c("span", { staticClass: "ti-time" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-time")
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
                          _c("span", { staticClass: "ti-share" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-share")
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
                          _c("span", { staticClass: "ti-share-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-share-alt")
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
                          _c("span", { staticClass: "ti-rocket" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-rocket")
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
                          _c("span", { staticClass: "ti-new-window" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-new-window")
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
                          _c("span", { staticClass: "ti-rss" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-rss")
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
                          _c("span", { staticClass: "ti-rss-alt" }),
                          _c("span", { staticClass: "icon-name" }, [
                            _vm._v(" ti-rss-alt")
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "icon-section" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("h3", [_vm._v("Control Icons")])
                      ])
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
                            _c("span", { staticClass: "ti-control-stop" }),
                            _c("span", { staticClass: "icon-name" }, [
                              _vm._v(" ti-control-stop")
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
                            _c("span", { staticClass: "ti-control-shuffle" }),
                            _c("span", { staticClass: "icon-name" }, [
                              _vm._v(" ti-control-shuffle")
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
                            _c("span", { staticClass: "ti-control-play" }),
                            _c("span", { staticClass: "icon-name" }, [
                              _vm._v(" ti-control-play")
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
                            _c("span", { staticClass: "ti-control-pause" }),
                            _c("span", { staticClass: "icon-name" }, [
                              _vm._v(" ti-control-pause")
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
                            _c("span", { staticClass: "ti-control-forward" }),
                            _c("span", { staticClass: "icon-name" }, [
                              _vm._v(" ti-control-forward")
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
                            _c("span", { staticClass: "ti-control-backward" }),
                            _c("span", { staticClass: "icon-name" }, [
                              _vm._v(" ti-control-backward")
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
                            _c("span", { staticClass: "ti-volume" }),
                            _c("span", { staticClass: "icon-name" }, [
                              _vm._v(" ti-volume")
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
                            _c("span", {
                              staticClass: "ti-control-skip-forward"
                            }),
                            _c("span", { staticClass: "icon-name" }, [
                              _vm._v(" ti-control-skip-forward")
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
                            _c("span", {
                              staticClass: "ti-control-skip-backward"
                            }),
                            _c("span", { staticClass: "icon-name" }, [
                              _vm._v(" ti-control-skip-backward")
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
                            _c("span", { staticClass: "ti-control-record" }),
                            _c("span", { staticClass: "icon-name" }, [
                              _vm._v(" ti-control-record")
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
                            _c("span", { staticClass: "ti-control-eject" }),
                            _c("span", { staticClass: "icon-name" }, [
                              _vm._v(" ti-control-eject")
                            ])
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "icon-section" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c("h3", [_vm._v("Text Editor")])
                        ])
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
                              _c("span", { staticClass: "ti-paragraph" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-paragraph")
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
                              _c("span", { staticClass: "ti-uppercase" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-uppercase")
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
                              _c("span", { staticClass: "ti-underline" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-underline")
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
                              _c("span", { staticClass: "ti-text" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-text")
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
                              _c("span", { staticClass: "ti-Italic" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-Italic")
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
                              _c("span", { staticClass: "ti-smallcap" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-smallcap")
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
                              _c("span", { staticClass: "ti-list" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-list")
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
                              _c("span", { staticClass: "ti-list-ol" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-list-ol")
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
                              _c("span", { staticClass: "ti-align-right" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-align-right")
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
                              _c("span", { staticClass: "ti-align-left" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-align-left")
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
                              _c("span", { staticClass: "ti-align-justify" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-align-justify")
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
                              _c("span", { staticClass: "ti-align-center" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-align-center")
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
                              _c("span", { staticClass: "ti-quote-right" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-quote-right")
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
                              _c("span", { staticClass: "ti-quote-left" }),
                              _c("span", { staticClass: "icon-name" }, [
                                _vm._v(" ti-quote-left")
                              ])
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "icon-section" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-12" }, [
                            _c("h3", [_vm._v("Layout Icons")])
                          ])
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
                                _c("span", {
                                  staticClass: "ti-layout-width-full"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-width-full")
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
                                _c("span", {
                                  staticClass: "ti-layout-width-default"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-width-default")
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
                                _c("span", {
                                  staticClass: "ti-layout-width-default-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-width-default-alt")
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
                                _c("span", { staticClass: "ti-layout-tab" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-tab")
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
                                _c("span", {
                                  staticClass: "ti-layout-tab-window"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-tab-window")
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
                                _c("span", { staticClass: "ti-layout-tab-v" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-tab-v")
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
                                _c("span", {
                                  staticClass: "ti-layout-tab-min"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-tab-min")
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
                                _c("span", { staticClass: "ti-layout-slider" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-slider")
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
                                _c("span", {
                                  staticClass: "ti-layout-slider-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-slider-alt")
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
                                _c("span", {
                                  staticClass: "ti-layout-sidebar-right"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-sidebar-right")
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
                                _c("span", {
                                  staticClass: "ti-layout-sidebar-none"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-sidebar-none")
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
                                _c("span", {
                                  staticClass: "ti-layout-sidebar-left"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-sidebar-left")
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
                                _c("span", {
                                  staticClass: "ti-layout-placeholder"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-placeholder")
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
                                _c("span", { staticClass: "ti-layout-menu" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-menu")
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
                                _c("span", { staticClass: "ti-layout-menu-v" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-menu-v")
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
                                _c("span", {
                                  staticClass: "ti-layout-menu-separated"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-menu-separated")
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
                                _c("span", {
                                  staticClass: "ti-layout-menu-full"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-menu-full")
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
                                _c("span", {
                                  staticClass: "ti-layout-media-right"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-media-right")
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
                                _c("span", {
                                  staticClass: "ti-layout-media-right-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-media-right-alt")
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
                                _c("span", {
                                  staticClass: "ti-layout-media-overlay"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-media-overlay")
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
                                _c("span", {
                                  staticClass: "ti-layout-media-overlay-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-media-overlay-alt")
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
                                _c("span", {
                                  staticClass: "ti-layout-media-overlay-alt-2"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-media-overlay-alt-2")
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
                                _c("span", {
                                  staticClass: "ti-layout-media-left"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-media-left")
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
                                _c("span", {
                                  staticClass: "ti-layout-media-left-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-media-left-alt")
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
                                _c("span", {
                                  staticClass: "ti-layout-media-center"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-media-center")
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
                                _c("span", {
                                  staticClass: "ti-layout-media-center-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-media-center-alt")
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
                                _c("span", {
                                  staticClass: "ti-layout-list-thumb"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-list-thumb")
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
                                _c("span", {
                                  staticClass: "ti-layout-list-thumb-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-list-thumb-alt")
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
                                _c("span", {
                                  staticClass: "ti-layout-list-post"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-list-post")
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
                                _c("span", {
                                  staticClass: "ti-layout-list-large-image"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-list-large-image")
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
                                _c("span", {
                                  staticClass: "ti-layout-line-solid"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-line-solid")
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
                                _c("span", { staticClass: "ti-layout-grid4" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-grid4")
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
                                _c("span", { staticClass: "ti-layout-grid3" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-grid3")
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
                                _c("span", { staticClass: "ti-layout-grid2" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-grid2")
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
                                _c("span", {
                                  staticClass: "ti-layout-grid2-thumb"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-grid2-thumb")
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
                                _c("span", {
                                  staticClass: "ti-layout-cta-right"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-cta-right")
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
                                _c("span", {
                                  staticClass: "ti-layout-cta-left"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-cta-left")
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
                                _c("span", {
                                  staticClass: "ti-layout-cta-center"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-cta-center")
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
                                _c("span", {
                                  staticClass: "ti-layout-cta-btn-right"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-cta-btn-right")
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
                                _c("span", {
                                  staticClass: "ti-layout-cta-btn-left"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-cta-btn-left")
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
                                _c("span", {
                                  staticClass: "ti-layout-column4"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-column4")
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
                                _c("span", {
                                  staticClass: "ti-layout-column3"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-column3")
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
                                _c("span", {
                                  staticClass: "ti-layout-column2"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-column2")
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
                                _c("span", {
                                  staticClass: "ti-layout-accordion-separated"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-accordion-separated")
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
                                _c("span", {
                                  staticClass: "ti-layout-accordion-merged"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-accordion-merged")
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
                                _c("span", {
                                  staticClass: "ti-layout-accordion-list"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-accordion-list")
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
                                _c("span", { staticClass: "ti-widgetized" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-widgetized")
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
                                _c("span", { staticClass: "ti-widget" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-widget")
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
                                _c("span", { staticClass: "ti-widget-alt" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-widget-alt")
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
                                _c("span", { staticClass: "ti-view-list" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-view-list")
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
                                _c("span", { staticClass: "ti-view-list-alt" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-view-list-alt")
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
                                _c("span", { staticClass: "ti-view-grid" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-view-grid")
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
                                _c("span", { staticClass: "ti-upload" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-upload")
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
                                _c("span", { staticClass: "ti-download" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-download")
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
                                _c("span", { staticClass: "ti-loop" }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-loop")
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
                                _c("span", {
                                  staticClass: "ti-layout-sidebar-2"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-sidebar-2")
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
                                _c("span", {
                                  staticClass: "ti-layout-grid4-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-grid4-alt")
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
                                _c("span", {
                                  staticClass: "ti-layout-grid3-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-grid3-alt")
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
                                _c("span", {
                                  staticClass: "ti-layout-grid2-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-grid2-alt")
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
                                _c("span", {
                                  staticClass: "ti-layout-column4-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-column4-alt")
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
                                _c("span", {
                                  staticClass: "ti-layout-column3-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-column3-alt")
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
                                _c("span", {
                                  staticClass: "ti-layout-column2-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-layout-column2-alt")
                                ])
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "icon-section" }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-md-12" }, [
                              _c("h3", [_vm._v("Brand Icons")])
                            ])
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
                                  _c("span", { staticClass: "ti-flickr" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-flickr")
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
                                  _c("span", { staticClass: "ti-flickr-alt" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-flickr-alt")
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
                                  _c("span", { staticClass: "ti-instagram" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-instagram")
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
                                  _c("span", { staticClass: "ti-google" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-google")
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
                                  _c("span", { staticClass: "ti-github" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-github")
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
                                  _c("span", { staticClass: "ti-facebook" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-facebook")
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
                                  _c("span", { staticClass: "ti-dropbox" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-dropbox")
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
                                  _c("span", { staticClass: "ti-dropbox-alt" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-dropbox-alt")
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
                                  _c("span", { staticClass: "ti-dribbble" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-dribbble")
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
                                  _c("span", { staticClass: "ti-apple" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-apple")
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
                                  _c("span", { staticClass: "ti-android" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-android")
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
                                  _c("span", { staticClass: "ti-yahoo" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-yahoo")
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
                                  _c("span", { staticClass: "ti-trello" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-trello")
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
                                  _c("span", {
                                    staticClass: "ti-stack-overflow"
                                  }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-stack-overflow")
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
                                  _c("span", { staticClass: "ti-soundcloud" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-soundcloud")
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
                                  _c("span", { staticClass: "ti-sharethis" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-sharethis")
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
                                  _c("span", {
                                    staticClass: "ti-sharethis-alt"
                                  }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-sharethis-alt")
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
                                  _c("span", { staticClass: "ti-reddit" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-reddit")
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
                                  _c("span", { staticClass: "ti-microsoft" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-microsoft")
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
                                  _c("span", {
                                    staticClass: "ti-microsoft-alt"
                                  }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-microsoft-alt")
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
                                  _c("span", { staticClass: "ti-linux" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-linux")
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
                                  _c("span", { staticClass: "ti-jsfiddle" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-jsfiddle")
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
                                  _c("span", { staticClass: "ti-joomla" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-joomla")
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
                                  _c("span", { staticClass: "ti-html5" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-html5")
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
                                  _c("span", { staticClass: "ti-css3" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-css3")
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
                                  _c("span", { staticClass: "ti-drupal" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-drupal")
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
                                  _c("span", { staticClass: "ti-wordpress" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-wordpress")
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
                                  _c("span", { staticClass: "ti-tumblr" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-tumblr")
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
                                  _c("span", { staticClass: "ti-tumblr-alt" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-tumblr-alt")
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
                                  _c("span", { staticClass: "ti-skype" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-skype")
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
                                  _c("span", { staticClass: "ti-youtube" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-youtube")
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
                                  _c("span", { staticClass: "ti-vimeo" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-vimeo")
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
                                  _c("span", { staticClass: "ti-vimeo-alt" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-vimeo-alt")
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
                                  _c("span", { staticClass: "ti-twitter" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-twitter")
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
                                  _c("span", { staticClass: "ti-twitter-alt" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-twitter-alt")
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
                                  _c("span", { staticClass: "ti-linkedin" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-linkedin")
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
                                  _c("span", { staticClass: "ti-pinterest" }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-pinterest")
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
                                  _c("span", {
                                    staticClass: "ti-pinterest-alt"
                                  }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-pinterest-alt")
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
                                  _c("span", {
                                    staticClass: "ti-themify-logo"
                                  }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-themify-logo")
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
                                  _c("span", {
                                    staticClass: "ti-themify-favicon"
                                  }),
                                  _c("span", { staticClass: "icon-name" }, [
                                    _vm._v(" ti-themify-favicon")
                                  ])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "icon-preview-box col-12 col-sm-4 col-md-3 col-lg-3"
                            },
                            [
                              _c("div", { staticClass: "preview" }, [
                                _c("span", {
                                  staticClass: "ti-themify-favicon-alt"
                                }),
                                _c("span", { staticClass: "icon-name" }, [
                                  _vm._v(" ti-themify-favicon-alt")
                                ])
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

/***/ "./resources/components/pages/themify_icons.vue":
/*!******************************************************!*\
  !*** ./resources/components/pages/themify_icons.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themify_icons_vue_vue_type_template_id_40abb7a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themify_icons.vue?vue&type=template&id=40abb7a2& */ "./resources/components/pages/themify_icons.vue?vue&type=template&id=40abb7a2&");
/* harmony import */ var _themify_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themify_icons.vue?vue&type=script&lang=js& */ "./resources/components/pages/themify_icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var toastr_build_toastr_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! toastr/build/toastr.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/toastr/build/toastr.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _css_custom_css_simple_themify_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/custom_css/simple_themify.css?vue&type=style&index=1&lang=css& */ "./resources/css/custom_css/simple_themify.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _themify_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _themify_icons_vue_vue_type_template_id_40abb7a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _themify_icons_vue_vue_type_template_id_40abb7a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/themify_icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/themify_icons.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/components/pages/themify_icons.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_themify_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./themify_icons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/themify_icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_themify_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/themify_icons.vue?vue&type=template&id=40abb7a2&":
/*!*************************************************************************************!*\
  !*** ./resources/components/pages/themify_icons.vue?vue&type=template&id=40abb7a2& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_themify_icons_vue_vue_type_template_id_40abb7a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./themify_icons.vue?vue&type=template&id=40abb7a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/themify_icons.vue?vue&type=template&id=40abb7a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_themify_icons_vue_vue_type_template_id_40abb7a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_themify_icons_vue_vue_type_template_id_40abb7a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/custom_css/simple_themify.css?vue&type=style&index=1&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/css/custom_css/simple_themify.css?vue&type=style&index=1&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_simple_themify_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./simple_themify.css?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/simple_themify.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_simple_themify_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_simple_themify_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_simple_themify_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_simple_themify_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_simple_themify_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);