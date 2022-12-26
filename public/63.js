(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/realtime_form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/realtime_form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _card_card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card.vue */ "./resources/components/pages/card/card.vue");
/* harmony import */ var bootstrap_touchspin_dist_jquery_bootstrap_touchspin_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js */ "./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js");
/* harmony import */ var bootstrap_touchspin_dist_jquery_bootstrap_touchspin_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_touchspin_dist_jquery_bootstrap_touchspin_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var eonasdan_bootstrap_datetimepicker_build_js_bootstrap_datetimepicker_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js */ "./node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js");
/* harmony import */ var eonasdan_bootstrap_datetimepicker_build_js_bootstrap_datetimepicker_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(eonasdan_bootstrap_datetimepicker_build_js_bootstrap_datetimepicker_min_js__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "blank",
  components: {
    card: _card_card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      get: '',
      selected: 'option3',
      inputs: []
    };
  },
  methods: {
    addRow: function addRow() {
      if (this.inputs.length < 4) {
        this.inputs.push({
          one: '',
          two: ''
        });
        setTimeout(function () {
          $(".departure_date").datetimepicker({
            format: 'DD/MM/YYYY'
          });
        });
      }
    },
    deleteRow: function deleteRow(index) {
      this.inputs.splice(index, 1);
    }
  },
  mounted: function mounted() {
    "use strict";

    $("#departure_date,#return_date,.departure_date,#checkin_date,#checkout_date").datetimepicker({
      format: 'DD/MM/YYYY'
    }); // touchspin initialisation

    $("input[name='adult_count']").TouchSpin({
      initval: 1,
      min: 1,
      max: 9,
      mousewheel: false
    });
    $("input[name='child_count']").TouchSpin({
      initval: 0,
      min: 0,
      max: 9,
      mousewheel: false
    });
    $("input[name='infant_count']").TouchSpin({
      initval: 0,
      min: 0,
      max: 4,
      mousewheel: false
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/realtime_form.css?vue&type=style&index=2&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/realtime_form.css?vue&type=style&index=2&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.trip-type, .trip-type-multi {\r\n    background-color: rgba(0, 0, 0, .35);\r\n    border-radius: 50%;\r\n    width: 36px;\r\n    height: 36px;\r\n    margin: 21px auto 0;\r\n    padding: 7px;\n}\n.trip-type .icon, .trip-type-multi .icon {\r\n    color     : #FFF;\r\n    font-size : 20px;\n}\n#adult:focus, #adult-multi:focus,\r\n#child:focus, #child-multi:focus,\r\n#infant:focus, #infant-multi:focus {\r\n    border-color : #CCC;\r\n    outline      : 0;\r\n    box-shadow   : none;\n}\n.multi-flight-data {\r\n    padding-top: 10px;\r\n    padding-bottom: 7px;\r\n    border-bottom : 1px dashed #EEEEEE;\n}\n#nonsingle-stop .remove-flight {\r\n    position: absolute;\r\n    right: 5px;\r\n    bottom: 27px;\r\n    background-color: #ff6666;\r\n    color: #fff;\r\n    padding: 2px;\r\n    border-radius: 50px;\n}\n.price-alert {\r\n    margin-top : 10px;\n}\n.radio-inline, .radio-inline + .radio-inline, .checkbox-inline + .checkbox-inline {\r\n    padding-top: 7px;\r\n    margin-left: 18px;\n}\n@media screen and (max-width : 767px) {\n.trip-type {\r\n        margin : 41px auto -60px;\r\n        background: 0;\n}\n.trip-type .icon, .trip-type-multi .icon {\r\n        color: rgba(0, 0, 0, .35);\n}\n}\r\n/*cab booking*/\n.ride-time .ride-on {\r\n    background-color : #C5E043;\r\n    display          : inline-block;\r\n    padding          : 5px 10px;\n}\n.ride-time input[type=radio] {\r\n    display : none\n}\n.ride-time input[type=radio]:checked + .ride-on {\r\n    background-color : #241009;\r\n    color            : #C5E043;\n}\n.cab-types .cab-type {\r\n    background-color : #eee;\r\n    display          : inline-block;\r\n    padding: 4% 10%;\n}\n.cab-types input[type=radio] {\r\n    display : none\n}\n.cab-types input[type=radio]:checked + .cab-type {\r\n    background-color : #241009;\r\n    color            : #eee;\n}\n.fund_text{\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 18px;\r\n    color: #333333;\n}\r\n/*gmaps*/\n.gmap {\r\n    width  : 100%;\r\n    height : 300px;\r\n    margin : 5px auto;\n}\n.chooseon-map {\r\n    margin-top: 24px;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\n}\n@media screen and (min-width : 768px) {\n.m-l-16 {\r\n        margin-left: -16px;\n}\n}\n@media screen and (max-width : 767px) {\n.m-r-20 {\r\n        margin-right: 21px;\n}\n}\n.btn-default{\r\n    color:#333;\n}\n.control-label{\r\n    width: 100%;\n}\n@media(max-width:768px){\n#multi-air{\r\n        margin-bottom: 10px;\n}\n}\n.prev .glyphicon-chevron-left:before{\r\n    content: \"\\E64A\";\r\n    font-family: \"themify\";\n}\n.next .glyphicon-chevron-right:before{\r\n    content: \"\\E649\";\r\n    font-family: \"themify\";\n}\n.dropdown-menu.usetwentyfour{\r\n    z-index: 99;\n}\n.btn{\r\n    cursor: pointer;\n}\n@media(min-width: 320px) and (max-width: 425px)\r\n{\n#nonsingle-stop .remove-flight{\r\n        bottom: 8px;\r\n        right:-20px;\n}\n}\n@media(max-width:320px){\n.bootstrap-datetimepicker-widget{\r\n      left: 10px !important;\n}\n}\n.btn:active{\r\n    color: #fff !important;\n}\n.bootstrap-datetimepicker-widget{\r\n    bottom:0;\n}\n.multi-flight-data label.m-l-16{\r\n    margin-bottom: 0;\n}\n@media(max-width: 1024px){\n.boxed .bootstrap-datetimepicker-widget{\r\n        left: -100px !important;\n}\n}\n.popover-container{\r\n    padding: 0;\r\n    z-index: inherit !important;\n}\n#single-stop .popover-origin{\r\n    z-index: 99 !important;\n}\n#single-stop .popover-container input{\r\n    padding: 0.35rem 0.75rem;\r\n    width:100%;\r\n    border:none;\n}\n#single-stop .popover-container input:focus{\r\n    outline: none;\n}\n#single-stop .popover-container input:focus{\r\n    border: 1px solid #7EC4E7 !important;\n}\n.realtime_forms #multistop_departure:focus,.realtime_forms #multistop_departure2:focus,.realtime_forms #departure_date:focus,.realtime_forms #return_date:focus{\r\n    border-top-right-radius: 3px;\r\n    border-bottom-right-radius: 3px;\n}\r\n\r\n/*bootstrap 3 overrides*/\n#nonsingle-stop .bootstrap-touchspin-down,#nonsingle-stop .bootstrap-touchspin-up,#single-stop .bootstrap-touchspin-down,#single-stop .bootstrap-touchspin-up{\r\n    border-radius: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/realtime_form.css?vue&type=style&index=2&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/realtime_form.css?vue&type=style&index=2&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./realtime_form.css?vue&type=style&index=2&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/realtime_form.css?vue&type=style&index=2&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/realtime_form.vue?vue&type=template&id=4cfc4168&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/realtime_form.vue?vue&type=template&id=4cfc4168& ***!
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
    _c("div", { staticClass: "row mt-3" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "card",
            {
              staticClass: "realtime_forms",
              attrs: {
                title: "<i class='fa fa-fw ti-user'></i> Book Flight Tickets"
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12 text-sm-center" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticClass: "radio-inline iradio m-l-18" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selected,
                            expression: "selected"
                          }
                        ],
                        attrs: {
                          type: "radio",
                          id: "one_way",
                          name: "trip-type",
                          value: "option1"
                        },
                        domProps: { checked: _vm._q(_vm.selected, "option1") },
                        on: {
                          change: function($event) {
                            _vm.selected = "option1"
                          }
                        }
                      }),
                      _vm._v(" One Way\n                                ")
                    ]),
                    _vm._v(" "),
                    _c("label", { staticClass: "radio-inline iradio m-l-18" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selected,
                            expression: "selected"
                          }
                        ],
                        attrs: {
                          type: "radio",
                          id: "round_trip",
                          name: "trip-type",
                          value: "option2"
                        },
                        domProps: { checked: _vm._q(_vm.selected, "option2") },
                        on: {
                          change: function($event) {
                            _vm.selected = "option2"
                          }
                        }
                      }),
                      _vm._v(" Round trip\n                                ")
                    ]),
                    _vm._v(" "),
                    _c("label", { staticClass: "radio-inline iradio m-l-18" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selected,
                            expression: "selected"
                          }
                        ],
                        attrs: {
                          type: "radio",
                          id: "multi_stops",
                          name: "trip-type",
                          value: "option3"
                        },
                        domProps: { checked: _vm._q(_vm.selected, "option3") },
                        on: {
                          change: function($event) {
                            _vm.selected = "option3"
                          }
                        }
                      }),
                      _vm._v(" Multi Stops\n                                ")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.selected == "option1" || _vm.selected == "option2"
                          ? true
                          : false,
                      expression:
                        "(selected=='option1' || selected=='option2')?true:false"
                    }
                  ],
                  attrs: { id: "single-stop" }
                },
                [
                  _c("div", { staticClass: "row m-t-10" }, [
                    _c("div", { staticClass: "trip-type d-sm-none" }, [
                      _c("i", {
                        staticClass: "fa-rotate-90 fa ti-exchange-vertical icon"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-5 col-xs-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "origin" }
                          },
                          [_vm._v("From")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "origin",
                            placeholder: "Origin City"
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-2" }, [
                      _c("div", { staticClass: "trip-type" }, [
                        (_vm.selected == "option2"
                        ? true
                        : false)
                          ? _c("i", {
                              staticClass:
                                "fa-rotate-90 fa ti-exchange-vertical icon"
                            })
                          : _c("i", { staticClass: "fa ti-arrow-right icon" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-5 col-xs-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "destination" }
                          },
                          [_vm._v("To")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "destination",
                            placeholder: "Destination City"
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row m-t-10" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("label", { attrs: { for: "departure_date" } }, [
                              _vm._v("Departure")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group" }, [
                              _c(
                                "div",
                                { staticClass: "input-group-prepend" },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "input-group-text bg-white"
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-fw ti-calendar"
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
                                  id: "departure_date",
                                  placeholder: "Select Date"
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("br", { staticClass: "d-sm-none" }),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("label", { attrs: { for: "return_date" } }, [
                              _vm._v("Return")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group" }, [
                              _c(
                                "div",
                                { staticClass: "input-group-prepend" },
                                [
                                  _c(
                                    "span",
                                    {
                                      staticClass: "input-group-text bg-white"
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-fw ti-calendar"
                                      })
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  id: "return_date",
                                  placeholder: "Select Date",
                                  disabled:
                                    _vm.selected == "option1" ? true : false
                                }
                              })
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("label", { attrs: { for: "class-type" } }, [
                              _vm._v("Class")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                staticClass: "form-control",
                                attrs: { name: "class", id: "class-type" }
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Economy")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Business")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("First")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Premium Economy")
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("br", { staticClass: "d-sm-none" }),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "label",
                              {
                                staticClass: "control-label",
                                attrs: { for: "pref-Air" }
                              },
                              [
                                _vm._v(
                                  "Preferred Airline\n                                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "pref-Air",
                                placeholder: "Airline name"
                              }
                            })
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row m-t-10" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-8 col-md-10 col-lg-8 mx-auto" },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "adult" } }, [
                                _vm._v("Adult")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                attrs: {
                                  id: "adult",
                                  type: "text",
                                  value: "1",
                                  readonly: "",
                                  name: "adult_count"
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "child" } }, [
                                _vm._v("Child")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                attrs: {
                                  id: "child",
                                  type: "text",
                                  value: "0",
                                  readonly: "",
                                  name: "child_count"
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("label", { attrs: { for: "infant" } }, [
                                _vm._v("Infant")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                attrs: {
                                  id: "infant",
                                  type: "text",
                                  value: "0",
                                  readonly: "",
                                  name: "infant_count"
                                }
                              })
                            ])
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row m-t-10" }, [
                    _c("div", { staticClass: "col-sm-8" }, [
                      _c("div", { staticClass: "form-group icheck-element" }, [
                        _c("label", { staticClass: "price-alert" }, [
                          _c("input", {
                            attrs: {
                              type: "checkbox",
                              name: "c1",
                              id: "c1",
                              value: ""
                            }
                          }),
                          _vm._v(
                            " Alert me when price changes\n                                    "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c(
                        "button",
                        { staticClass: "btn btn-warning btn-block" },
                        [_vm._v("Search Flights")]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "form",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.selected == "option1" || _vm.selected == "option2"
                          ? false
                          : true,
                      expression:
                        "(selected=='option1' || selected=='option2')?false:true"
                    }
                  ],
                  attrs: { id: "nonsingle-stop" }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c(
                        "div",
                        { staticClass: "flight-count" },
                        [
                          _c("div", { staticClass: "row multi-flight-data" }, [
                            _c("div", { staticClass: "trip-type d-sm-none" }, [
                              _c("i", { staticClass: "fa ti-arrow-right icon" })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-4 col-xs-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { staticClass: "control-label" }, [
                                  _vm._v(
                                    "From\n                                                    "
                                  ),
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "Origin City"
                                    }
                                  })
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-1 hidden-xs" }, [
                              _c("div", { staticClass: "trip-type-multi" }, [
                                _c("i", {
                                  staticClass: "fa ti-arrow-right icon"
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-4 col-xs-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { staticClass: "control-label" }, [
                                  _vm._v(
                                    "To\n                                                    "
                                  ),
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "Destination City"
                                    }
                                  })
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-sm-3 col-sm-offset-0 col-xs-12"
                              },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "m-l-16",
                                    attrs: { for: "multistop_departure" }
                                  },
                                  [_vm._v("Departure")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "input-group m-l-16" },
                                  [
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
                                                "fa fa-fw ti-calendar"
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass:
                                        "form-control departure_date",
                                      attrs: {
                                        type: "text",
                                        id: "multistop_departure",
                                        placeholder: "Select Date"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row multi-flight-data" }, [
                            _c("div", { staticClass: "trip-type d-sm-none" }, [
                              _c("i", { staticClass: "fa ti-arrow-right icon" })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-4 col-xs-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { staticClass: "control-label" }, [
                                  _vm._v(
                                    "From\n                                                    "
                                  ),
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "Origin City"
                                    }
                                  })
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-1 hidden-xs" }, [
                              _c("div", { staticClass: "trip-type-multi" }, [
                                _c("i", {
                                  staticClass: "fa ti-arrow-right icon"
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-sm-4 col-xs-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { staticClass: "control-label" }, [
                                  _vm._v(
                                    "To\n                                                    "
                                  ),
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "Destination City"
                                    }
                                  })
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col-sm-3 col-sm-offset-0 col-xs-12"
                              },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "m-l-16",
                                    attrs: { for: "multistop_departure2" }
                                  },
                                  [_vm._v("Departure")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "input-group m-l-16" },
                                  [
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
                                                "fa fa-fw ti-calendar"
                                            })
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass:
                                        "form-control departure_date",
                                      attrs: {
                                        type: "text",
                                        id: "multistop_departure2",
                                        placeholder: "Select Date"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.inputs, function(input, index) {
                            return _c(
                              "div",
                              { staticClass: "row multi-flight-data" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "trip-type d-sm-none" },
                                  [
                                    _c("i", {
                                      staticClass: "fa ti-arrow-right icon"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-sm-4 col-xs-6" },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { staticClass: "control-label" },
                                        [
                                          _vm._v(
                                            "From\n                                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Origin City"
                                        }
                                      })
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-sm-1 hidden-xs" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "trip-type-multi" },
                                      [
                                        _c("i", {
                                          staticClass: "fa ti-arrow-right icon"
                                        })
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-sm-4 col-xs-6" },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        { staticClass: "control-label" },
                                        [
                                          _vm._v(
                                            "To\n                                                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Destination City"
                                        }
                                      })
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "col-sm-3 col-sm-offset-0 col-11"
                                  },
                                  [
                                    _c(
                                      "label",
                                      { staticClass: "m-l-16 mb-2" },
                                      [_vm._v("Departure")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "input-group m-l-16" },
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
                                                    "fa fa-fw ti-calendar"
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          staticClass:
                                            "form-control departure_date",
                                          attrs: {
                                            type: "text",
                                            placeholder: "Select Date"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteRow(index)
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-fw ti-minus remove-flight"
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row m-t-10 mt-3" }, [
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-secondary text-white mr-3",
                              attrs: { id: "add-flight" },
                              on: { click: _vm.addRow }
                            },
                            [
                              _c("i", { staticClass: "fa fa-fw ti-plus" }),
                              _vm._v(
                                " Add flight\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("label", [_vm._v("Add Flight(Upto 6)")])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-6" }, [
                          _c("label", { attrs: { for: "class-type1" } }, [
                            _vm._v("Class")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              staticClass: "form-control",
                              attrs: { name: "class", id: "class-type1" }
                            },
                            [
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Economy")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Business")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("First")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "" } }, [
                                _vm._v("Premium Economy")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row m-t-10" }, [
                        _c(
                          "div",
                          { staticClass: "col-sm-8 col-md-10 col-lg-8" },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-sm-4" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { attrs: { for: "adult-multi" } },
                                    [_vm._v("Adult")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    attrs: {
                                      id: "adult-multi",
                                      type: "text",
                                      value: "1",
                                      readonly: "",
                                      name: "adult_count"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-4" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { attrs: { for: "child-multi" } },
                                    [_vm._v("Child")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    attrs: {
                                      id: "child-multi",
                                      type: "text",
                                      value: "0",
                                      readonly: "",
                                      name: "child_count"
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-4" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    { attrs: { for: "infant-multi" } },
                                    [_vm._v("Infant")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    attrs: {
                                      id: "infant-multi",
                                      type: "text",
                                      value: "0",
                                      readonly: "",
                                      name: "infant_count"
                                    }
                                  })
                                ])
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-4 col-md-2 col-lg-4" },
                          [
                            _c(
                              "label",
                              {
                                staticClass: "control-label",
                                attrs: { for: "multi-air" }
                              },
                              [
                                _vm._v(
                                  "Preferred Airline\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "multi-air",
                                placeholder: "Airline name"
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row m-t-10" }, [
                        _c("div", { staticClass: "col-sm-8" }, [
                          _c(
                            "div",
                            { staticClass: "form-group icheck-element" },
                            [
                              _c("label", { staticClass: "price-alert" }, [
                                _c("input", {
                                  attrs: {
                                    type: "checkbox",
                                    name: "price-alert",
                                    value: ""
                                  }
                                }),
                                _vm._v(
                                  " Alert me when price changes\n                                            "
                                )
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c(
                            "button",
                            { staticClass: "btn btn-warning btn-block" },
                            [_vm._v("Search Flights")]
                          )
                        ])
                      ])
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
        { staticClass: "col-md-8" },
        [
          _c(
            "card",
            {
              attrs: {
                title: "<i class='fa fa-fw ti-money'></i> Fund Transfer"
              }
            },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c(
                    "form",
                    {
                      staticClass: "form-horizontal",
                      attrs: { id: "form-validation" }
                    },
                    [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-6 control-label",
                            attrs: { for: "skill" }
                          },
                          [
                            _vm._v(
                              "\n                                    Select Account :\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c(
                            "select",
                            {
                              staticClass: "form-control",
                              attrs: { id: "skill", name: "skill" }
                            },
                            [
                              _c(
                                "option",
                                {
                                  attrs: {
                                    value: "",
                                    disabled: "",
                                    selected: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                            Select account\n                                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "234" } }, [
                                _vm._v("0000432187653456")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "345" } }, [
                                _vm._v("0000891236543567")
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-5 control-label",
                            attrs: { for: "number" }
                          },
                          [
                            _vm._v(
                              "\n                                    Amount :\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "number",
                              name: "number",
                              placeholder: "Enter amount",
                              onkeypress: "return isNumber(event, this)"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-5 control-label",
                            attrs: { for: "val-username" }
                          },
                          [
                            _vm._v(
                              "\n                                    Sender name :\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "val-username",
                              name: "firstName",
                              placeholder: "Account holder name"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "fund_text mt-2 ml-3 mb-2" }, [
                        _vm._v(
                          "Information of the account you want to transfer fund"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-5 control-label",
                            attrs: { for: "holder-name" }
                          },
                          [
                            _vm._v(
                              "\n                                    Account Holder name :\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "holder-name",
                              name: "holderName",
                              placeholder: "Account holder name"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-5 control-label",
                            attrs: { for: "bank-name" }
                          },
                          [
                            _vm._v(
                              "\n                                    Name of the Bank :\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "bank-name",
                              name: "bankName",
                              placeholder: "Bank name"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-5 control-label",
                            attrs: { for: "swift-code" }
                          },
                          [
                            _vm._v(
                              "\n                                    SWIFT Code :\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "swift-code",
                              name: "bankName",
                              placeholder: "SWIFT code"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-5 control-label",
                            attrs: { for: "acc-number" }
                          },
                          [
                            _vm._v(
                              "\n                                    Account Number/BAN :\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "acc-number",
                              name: "number",
                              placeholder: "Account Number",
                              onkeypress:
                                "return event.charCode >= 48 && event.charCode <= 57"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "col-sm-5 control-label",
                            attrs: { for: "purpose" }
                          },
                          [
                            _vm._v(
                              "\n                                    Purpose (optional) :\n                                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "purpose",
                              name: "purpose",
                              placeholder: "optional"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group form-actions" }, [
                        _c("div", { staticClass: "col-12 col-sm-offset-5" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-effect-ripple btn-primary",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Transfer")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-effect-ripple btn-secondary reset_btn",
                              attrs: { type: "reset" }
                            },
                            [
                              _vm._v(
                                "Reset\n                                    "
                              )
                            ]
                          )
                        ])
                      ])
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
        { staticClass: "col-md-4" },
        [
          _c(
            "card",
            {
              attrs: {
                title: "<i class='fa fa-fw ti-home'></i> Book your Stay"
              }
            },
            [
              _c("form", [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label",
                          attrs: { for: "stay" }
                        },
                        [_vm._v("Name")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "stay",
                          placeholder: "City, Area or Hotel"
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "checkin_date" } }, [
                        _vm._v("Check-In")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "span",
                            { staticClass: "input-group-text bg-white" },
                            [_c("i", { staticClass: "fa fa-fw ti-calendar" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "checkin_date",
                            placeholder: "Select Check-in Date"
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "checkout_date" } }, [
                        _vm._v("Check-Out")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group" }, [
                        _c("div", { staticClass: "input-group-prepend" }, [
                          _c(
                            "span",
                            { staticClass: "input-group-text bg-white" },
                            [_c("i", { staticClass: "fa fa-fw ti-calendar" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "checkout_date",
                            placeholder: "Select Check-out Date"
                          }
                        })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "adult-number" } }, [
                        _vm._v("Adult")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          staticClass: "form-control",
                          attrs: { name: "count", id: "adult-number" }
                        },
                        [
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("1")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("2")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("3")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "3" } }, [
                            _vm._v("4")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "4" } }, [_vm._v("5")])
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "child-number" } }, [
                        _vm._v("Child")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          staticClass: "form-control",
                          attrs: { name: "count", id: "child-number" }
                        },
                        [
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("0")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("1")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("2")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "3" } }, [_vm._v("3")])
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c("div", { staticClass: "form-group icheck-element" }, [
                      _c("label", { staticClass: "guest-rooms" }, [
                        _c("input", {
                          attrs: {
                            type: "checkbox",
                            name: "price-alert",
                            value: ""
                          }
                        }),
                        _vm._v(" Guest Rooms\n                                ")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c("button", { staticClass: "btn btn-warning btn-block" }, [
                      _vm._v("Search Hotels")
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

/***/ "./resources/components/pages/realtime_form.vue":
/*!******************************************************!*\
  !*** ./resources/components/pages/realtime_form.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _realtime_form_vue_vue_type_template_id_4cfc4168___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./realtime_form.vue?vue&type=template&id=4cfc4168& */ "./resources/components/pages/realtime_form.vue?vue&type=template&id=4cfc4168&");
/* harmony import */ var _realtime_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./realtime_form.vue?vue&type=script&lang=js& */ "./resources/components/pages/realtime_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var bootstrap_touchspin_dist_jquery_bootstrap_touchspin_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var eonasdan_bootstrap_datetimepicker_build_css_bootstrap_datetimepicker_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css?vue&type=style&index=1&lang=css& */ "./node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _css_custom_css_realtime_form_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/custom_css/realtime_form.css?vue&type=style&index=2&lang=css& */ "./resources/css/custom_css/realtime_form.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _realtime_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _realtime_form_vue_vue_type_template_id_4cfc4168___WEBPACK_IMPORTED_MODULE_0__["render"],
  _realtime_form_vue_vue_type_template_id_4cfc4168___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/realtime_form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/realtime_form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/components/pages/realtime_form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_realtime_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./realtime_form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/realtime_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_realtime_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/realtime_form.vue?vue&type=template&id=4cfc4168&":
/*!*************************************************************************************!*\
  !*** ./resources/components/pages/realtime_form.vue?vue&type=template&id=4cfc4168& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_realtime_form_vue_vue_type_template_id_4cfc4168___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./realtime_form.vue?vue&type=template&id=4cfc4168& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/realtime_form.vue?vue&type=template&id=4cfc4168&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_realtime_form_vue_vue_type_template_id_4cfc4168___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_realtime_form_vue_vue_type_template_id_4cfc4168___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/custom_css/realtime_form.css?vue&type=style&index=2&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/css/custom_css/realtime_form.css?vue&type=style&index=2&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_realtime_form_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./realtime_form.css?vue&type=style&index=2&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/realtime_form.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_realtime_form_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_realtime_form_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_realtime_form_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_realtime_form_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_realtime_form_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);