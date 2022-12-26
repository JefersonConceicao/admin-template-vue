(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/widgets.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/widgets.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var v_chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-chartist */ "./node_modules/v-chartist/dist/vue-chartist.min.js");
/* harmony import */ var v_chartist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(v_chartist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/dist/css/swiper.css */ "./node_modules/swiper/dist/css/swiper.css");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_circle_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-circle-slider */ "./node_modules/vue-circle-slider/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var unsub; //new swiper




vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_circle_slider__WEBPACK_IMPORTED_MODULE_6__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "widgets",
  components: {
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_5__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_5__["swiperSlide"],
    VueChartist: v_chartist__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      //================animation =========
      classes: [{
        bgclass: 'bg-primary',
        fontclass: 'ti-user'
      }, {
        bgclass: 'bg-warning',
        fontclass: 'ti-bookmark-alt'
      }, {
        bgclass: 'bg-info',
        fontclass: 'ti-medall'
      }, {
        bgclass: 'bg-success',
        fontclass: 'ti-bell'
      }],
      styleObject: {
        margin: 'auto auto auto 0',
        paddding: 10
      },
      //========= end animation=========
      isActive: 0,
      val5: 80,
      //==============   swiper
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        speed: 1050,
        effect: 'fade'
      },
      bar: {
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8], [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]]
        },
        options: {
          seriesBarDistance: 15
        },
        responsiveOptions: [['screen and (min-width: 641px) and (max-width: 1024px)', {
          seriesBarDistance: 10,
          axisX: {
            labelInterpolationFnc: function labelInterpolationFnc(value) {
              return value[0];
            }
          }
        }], ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function labelInterpolationFnc(value) {
              return value[0];
            }
          }
        }]]
      }
    };
  },
  mounted: function mounted() {
    "use strict";

    var _this = this;

    console.log('this is current swiper instance object', this.swiper);
    this.swiper.slideTo(3, 1000, false);
    unsub = this.$store.subscribe(function (mutation, state) {
      if (mutation.type == "left_menu") {
        setTimeout(function () {
          _this.$refs.area.renderChart();

          _this.$refs.chartist2.renderChart();

          _this.$refs.chartist3.renderChart();

          _this.$refs.chartist4.renderChart();

          _this.$refs.chartist6.renderChart();

          _this.$refs.chartist7.renderChart();

          _this.$refs.chartist8.renderChart();
        });
      }
    });
  },
  methods: {},
  computed: {
    swiper: function swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/widgets.vue?vue&type=style&index=3&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/widgets.vue?vue&type=style&index=3&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.anime i{\n    margin:auto;\n    padding: 0;\n}\n@keyframes zoomIn {\nfrom {\n        opacity: 0;\n        transform: scale3d(.3, .3, .3);\n}\n50% {\n        opacity: 1;\n}\n}\n.anime:hover  i{\n    animation-duration: 1s;\n    animation-fill-mode: both;\n    font-size: 3em;\n    animation-name: zoomIn;\n    margin:auto auto auto 0 !important;\n    padding: 10px !important;\n}\n.ct-label.ct-horizontal.ct-end{\n    transform: translate(-5px, 0px);\n    width:21px !important;\n}\n.widget-chart .ct-series-a .ct-bar{\n    stroke: #6699cc;\n}\n.widget-chart .ct-series-b .ct-bar{\n    stroke:#88bbef;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/widgets.css?vue&type=style&index=2&lang=css&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/widgets.css?vue&type=style&index=2&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img_space, .img_widget {\r\n    border-radius : 50%;\n}\n.img_space {\r\n    margin-left      : -120px;\r\n    width            : 155px;\r\n    height           : 155px;\r\n    padding          : 5px;\r\n    background-color : #EBF1F6;\n}\n.fa-stack {\r\n    margin-left : 20px;\n}\n.faceb {\r\n    color : #6699cc;\n}\n.googleplus {\r\n    color : #ff6666;\n}\n.tweet {\r\n    color : #66ccff;\n}\n.flick {\r\n    color : #ccc;\n}\n.youtube {\r\n    color : #ff6666;\n}\n.text-dark {\r\n    color : #797979;\n}\n.text-right h3,.widget-bg-color-icon h3{\r\n    margin-top: 20px;\n}\n.m-b-0 {\r\n    margin-bottom : 0;\n}\n.card-box {\r\n    padding               : 16px;\r\n    border                : 1px solid rgba(54, 64, 74, 0.19);\r\n    -webkit-border-radius : 3px;\r\n    border-radius         : 3px;\r\n    -moz-border-radius    : 3px;\r\n    background-clip       : padding-box;\r\n    margin-bottom         : 20px;\r\n    background-color      : #ffffff;\n}\r\n/*========= second widget code ===============*/\n.widget-bg-color-icon .bg-icon-info {\r\n    background-color : rgba(185, 209, 287, 1);\r\n    border           : 1px solid #6699cc;\n}\n.widget-bg-color-icon .bg-icon {\r\n    height                : 80px;\r\n    width                 : 80px;\r\n    text-align            : center;\r\n    -webkit-border-radius : 50%;\r\n    border-radius         : 50%;\r\n    -moz-border-radius    : 50%;\r\n    background-clip       : padding-box;\n}\n.widget-bg-color-icon .bg-icon i {\r\n    font-size   : 32px;\r\n    line-height : 80px;\n}\n.border_success {\r\n    border : 1px solid #66cc99;\n}\n.m-r-5 {\r\n    margin-right : 5px;\n}\n.border_danger {\r\n    border : 1px solid rgba(255, 163, 163, 1);\n}\r\n/*======= list box one css ===========*/\n.slider-content .post-info {\r\n    background-color           : #ffffff;\r\n    padding                    : 20px;\r\n    border-bottom-left-radius  : 4px;\r\n    border-bottom-right-radius : 4px;\n}\n.carousel {\r\n    position : relative;\n}\n.text-muted {\r\n    color : #DCDCDC;\n}\n.slider-content.m-b-20 {\r\n    margin-bottom : 20px;\r\n    border: 1px solid rgba(54, 64, 74, 0.19);\r\n    border-radius: 3px;\n}\n.card-widget .card-header{\r\n    border-bottom    : 0;\r\n    background-color : #ffffff;\n}\r\n/*===== third widget code =========*/\n.profile-widget .bg-profile {\r\n    height : 125px;\n}\n.bg-custom1 {\r\n    background-color : #418AC9;\n}\n.profile-widget .img-thumbnail {\r\n    margin-top : -42px;\r\n    border     : none;\n}\n.img-circle {\r\n    border-radius : 50%;\n}\n.p-0 {\r\n    padding : 0;\n}\n.p-t-b-20 {\r\n    padding : 20px 0;\n}\n.p-b-10 {\r\n    padding-bottom : 10px;\n}\n.m-t-20 {\r\n    margin-top : 20px;\n}\n.social_icons {\r\n    font-size : 20px;\n}\r\n/*===== image photographer=====*/\n.img_alt {\r\n    width  : 65px;\r\n    height : auto;\r\n    float  : left;\r\n    border : 8px solid #fff;\n}\n.nav_border > li > a {\r\n    padding       : 10px 2px;\r\n    line-height   : 20px;\n}\n.card-heading.stat {\r\n    background-color : #f0ad4e;\r\n    color            : #fff;\n}\n.user-username {\r\n    margin-left : 75px;\n}\n.user-po {\r\n    margin-left : 75px;\n}\r\n/*======= featured widget ===========*/\n.fa.pull-left {\r\n    margin-right : 5px;\n}\n.padding-right-small {\r\n    padding-right : 8px;\n}\n.padding-top-small {\r\n    padding-top : 12px;\n}\n.padding-bottom {\r\n    padding-bottom : 16px;\n}\n.p-b-0 {\r\n    padding-bottom : 0;\n}\n.ih-item.square {\r\n    width : 100%;\n}\n.ih-item.square img {\r\n    height : 202px;\n}\n.ih-item.square.effect1.colored .info {\r\n    background : #66ccff;\n}\n.ih-item.square.effect1.top_to_bottom .info p {\r\n    color     : #fff;\r\n    font-size : 13px;\n}\n.list-group-item {\r\n    padding : 12px 15px;\n}\n.card-widget .careers-item {\r\n    height : 100px;\n}\n.card-widget .nav-stacked li a{\r\n    padding-top: 1rem;\r\n    padding-bottom: 1.2rem;\n}\n.card-widget .nav-stacked li{\r\n    width:100%;\r\n    padding-top: 1rem;\r\n    padding-bottom: 1rem;\r\n    border-bottom : 1px solid #eee;\n}\n.card-widget .nav-stacked li:hover {\r\n    background-color: #eee !important;\n}\n.card-widget .nav-stacked li a:hover {\r\n    text-decoration: none   !important;\r\n    color:#333;\n}\n.card-widget .nav-stacked li .badge{\r\n    padding: 0.4rem;\r\n    border-radius: 1rem;\r\n    font-size: 100%;\n}\n.profile-widget .btn:active{\r\n    color: #fff !important;\n}\n.circle_number{\r\n    position: relative;\r\n    top:-65px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/widgets.vue?vue&type=style&index=3&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/widgets.vue?vue&type=style&index=3&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./widgets.vue?vue&type=style&index=3&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/widgets.vue?vue&type=style&index=3&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/widgets.css?vue&type=style&index=2&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/widgets.css?vue&type=style&index=2&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./widgets.css?vue&type=style&index=2&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/widgets.css?vue&type=style&index=2&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/widgets.vue?vue&type=template&id=369bcc63&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/widgets.vue?vue&type=template&id=369bcc63& ***!
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row m-t-10" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "slider-content m-b-20" }, [
          _c(
            "div",
            { staticClass: "cover-wrapper" },
            [
              _c(
                "b-carousel",
                {
                  staticStyle: { "text-shadow": "1px 1px 2px #333" },
                  attrs: {
                    id: "carousel1",
                    indicators: "",
                    background: "#ababab",
                    interval: 4000,
                    "img-width": "1024",
                    "img-height": "480"
                  }
                },
                [
                  _c("b-carousel-slide", {
                    attrs: {
                      "img-src": __webpack_require__(/*! ../../img/gallery/thumbs/35.jpg */ "./resources/img/gallery/thumbs/35.jpg")
                    }
                  }),
                  _vm._v(" "),
                  _c("b-carousel-slide", {
                    attrs: {
                      "img-src": __webpack_require__(/*! ../../img/gallery/thumbs/36.jpg */ "./resources/img/gallery/thumbs/36.jpg")
                    }
                  }),
                  _vm._v(" "),
                  _c("b-carousel-slide", {
                    attrs: {
                      "img-src": __webpack_require__(/*! ../../img/gallery/thumbs/37.jpg */ "./resources/img/gallery/thumbs/37.jpg")
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(1)
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card card-widget" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "card-body p-0" }, [
            _c(
              "div",
              { staticClass: "widget-chart text-center" },
              [
                _c("vue-chartist", {
                  ref: "chartist2",
                  attrs: {
                    data: _vm.bar.data,
                    options: _vm.bar.options,
                    responsiveOptions: _vm.bar.responsiveOptions,
                    type: "Bar"
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card card-widget" }, [
          _vm._m(3),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body text-center" },
            [
              _c("circle-slider", {
                attrs: {
                  "circle-width": 8,
                  "progress-width": 9,
                  "knob-radius": 4,
                  "progress-color": "#418AC9",
                  "knob-color": "#418AC9"
                },
                model: {
                  value: _vm.val5,
                  callback: function($$v) {
                    _vm.val5 = $$v
                  },
                  expression: "val5"
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "circle_number" }, [
                _vm._v(_vm._s(_vm.val5))
              ])
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card-box p-0" }, [
          _c("div", { staticClass: "profile-widget text-center" }, [
            _c("div", { staticClass: "bg-custom1 bg-profile" }),
            _vm._v(" "),
            _c("img", {
              staticClass: "thumb-lg rounded-circle img-thumbnail",
              attrs: {
                src: __webpack_require__(/*! ../../img/images/avatar1.jpg */ "./resources/img/images/avatar1.jpg"),
                alt: "img",
                height: "95",
                width: "95"
              }
            }),
            _vm._v(" "),
            _c("h4", [_vm._v("Addison")]),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn p-2 btn-success m-t-20",
                attrs: { href: "#/widgets" }
              },
              [_vm._v("Follow")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn p-2 btn-info m-t-20",
                attrs: { href: "#/widgets" }
              },
              [_vm._v("Send message")]
            ),
            _vm._v(" "),
            _vm._m(5)
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row m-t-10" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card card-widget" }, [
          _c("div", { staticClass: "card-header bg-warning stat" }, [
            _c("div", { staticClass: "card-title text-white" }, [
              _c("img", {
                staticClass: "rounded-circle img_alt",
                attrs: {
                  src: __webpack_require__(/*! ../../img/authors/avatar.jpg */ "./resources/img/authors/avatar.jpg"),
                  alt: "User Avatar",
                  height: "85",
                  width: "85"
                }
              }),
              _vm._v(" "),
              _c("h3", { staticClass: "user-username" }, [_vm._v("Toby Adey")]),
              _vm._v(" "),
              _c("h5", { staticClass: "user-po" }, [_vm._v(" Developer")])
            ])
          ]),
          _vm._v(" "),
          _vm._m(6)
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card card-widget" }, [
          _c(
            "div",
            { staticClass: "card-header p-0" },
            [
              _c(
                "swiper",
                { ref: "mySwiper", attrs: { options: _vm.swiperOption } },
                [
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/35.jpg */ "./resources/img/gallery/thumbs/35.jpg"),
                        alt: "img"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/36.jpg */ "./resources/img/gallery/thumbs/36.jpg"),
                        alt: "img"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/37.jpg */ "./resources/img/gallery/thumbs/37.jpg"),
                        alt: "img"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("swiper-slide", [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        src: __webpack_require__(/*! ../../img/gallery/thumbs/38.jpg */ "./resources/img/gallery/thumbs/38.jpg"),
                        alt: "img"
                      }
                    })
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(7)
        ])
      ]),
      _vm._v(" "),
      _vm._m(8)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row m-t-10" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card-box p-0" }, [
          _c("div", { staticClass: "profile-widget text-center" }, [
            _c("div", { staticClass: "bg-info bg-profile" }),
            _vm._v(" "),
            _c("img", {
              staticClass: "thumb-lg rounded-circle img-thumbnail",
              attrs: {
                src: __webpack_require__(/*! ../../img/authors/avatar2.jpg */ "./resources/img/authors/avatar2.jpg"),
                alt: "img",
                height: "95",
                width: "95"
              }
            }),
            _vm._v(" "),
            _c("h4", [_vm._v("Awesome Gallery")]),
            _vm._v(" "),
            _c("p", [_vm._v("1 Photo")]),
            _vm._v(" "),
            _c("div", { attrs: { id: "lightgallery" } }, [
              _c("div", { staticClass: "social_icons p-10 text-white" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "ih-item square colored effect1 top_to_bottom"
                      },
                      [
                        _c("a", { attrs: { href: "javascript:;" } }, [
                          _c("div", { staticClass: "img" }, [
                            _c("img", {
                              staticClass: "img-fluid",
                              attrs: {
                                src: __webpack_require__(/*! ../../img/gallery/thumbs/35.jpg */ "./resources/img/gallery/thumbs/35.jpg"),
                                alt: "img"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _vm._m(9)
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _vm._m(10),
        _vm._v(" "),
        _c("div", { staticClass: "card card-widget" }, [
          _c("div", { staticClass: "card-header text-center" }, [
            _c("img", {
              staticClass: "thumb-lg img-thumbnail rounded-circle",
              attrs: { src: __webpack_require__(/*! ../../img/authors/avatar3.jpg */ "./resources/img/authors/avatar3.jpg"), alt: "" }
            }),
            _vm._v(" "),
            _vm._m(11)
          ]),
          _vm._v(" "),
          _vm._m(12)
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-4" },
        _vm._l(_vm.classes, function(clss, index) {
          return _c(
            "div",
            { key: index, staticClass: "card card-widget anime" },
            [
              _c(
                "div",
                {
                  staticClass: "card-body bg-primary text-center careers-item",
                  class: clss.bgclass
                },
                [
                  _c("div", [
                    _c("i", {
                      staticClass: "fa hover-rotate text-white fa-5x",
                      class: clss.fontclass,
                      staticStyle: { margin: "auto", padding: "0" }
                    })
                  ])
                ]
              )
            ]
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-6 col-md-6 col-xl-3" }, [
        _c("div", { staticClass: "widget-bg-color-icon card-box" }, [
          _c("div", { staticClass: "bg-icon bg-warning float-left" }, [
            _c("i", { staticClass: "ti-eye text-white" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-right" }, [
            _c("h3", { staticClass: "text-dark" }, [
              _c("b", { attrs: { id: "widget_count1" } }, [_vm._v("2652")])
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("Visitors")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "clearfix" })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-md-6 col-xl-3" }, [
        _c(
          "div",
          { staticClass: "widget-bg-color-icon card-box border_success" },
          [
            _c("div", { staticClass: "bg-icon float-left" }, [
              _c("i", { staticClass: "ti-pie-chart text-success" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _c("h3", { staticClass: "text-success" }, [
                _c("b", { attrs: { id: "widget_count3" } }, [_vm._v("3251")])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Sales status")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "clearfix" })
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-md-6 col-xl-3" }, [
        _c("div", { staticClass: "widget-bg-color-icon card-box" }, [
          _c("div", { staticClass: "bg-icon bg-icon-info float-left" }, [
            _c("i", { staticClass: "ti-cup text-primary" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-right" }, [
            _c("h3", { staticClass: "text-dark" }, [
              _c("b", { attrs: { id: "widget_count2" } }, [_vm._v("7698")])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-primary" }, [_vm._v("Income status")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "clearfix" })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-md-6 col-xl-3" }, [
        _c(
          "div",
          { staticClass: "widget-bg-color-icon card-box border_danger" },
          [
            _c("div", { staticClass: "text-center" }, [
              _c("h3", { staticClass: "text-danger" }, [
                _c("b", { attrs: { id: "widget_count4" } }, [_vm._v("4358")])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v("Total sales:"),
                _c("span", { staticClass: "text-success" }, [_vm._v(" 3251")]),
                _c("span", { staticClass: "float-right" }, [
                  _c("i", {
                    staticClass: "ti-angle-double-down text-danger m-r-5"
                  }),
                  _vm._v("7.85%")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "clearfix" })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "post-info" }, [
      _c("div", { staticClass: "date" }, [
        _c("span", { staticClass: "day" }, [_vm._v("22")]),
        _c("br"),
        _vm._v(" "),
        _c("span", { staticClass: "month" }, [_vm._v("Mar")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "meta-container" }, [
        _c("a", { attrs: { href: "#/widgets" } }, [
          _c("h4", { staticClass: "m-t-0" }, [
            _vm._v("Beautiful Cover Image Post")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "font-13" }, [
          _c("span", { staticClass: "meta" }, [
            _vm._v("Posted by John Doe in "),
            _c("a", { attrs: { href: "#/widgets" } }, [
              _c("b", [_vm._v("Web Design")])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "m-b-0" }, [
        _vm._v(
          "\r\n                        Nunc nec dui vitae urna cursus lacinia. In\r\n                        venenatis eget justo in dictum. Vestibulum\r\n                        auctor raesent quisnm.\r\n                    "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row m-t-10" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("div", { staticClass: "m-t-10 blog-widget-action" }, [
            _c("a", { attrs: { href: "javascript:void(0)" } }, [
              _c("i", { staticClass: "ti-heart" }),
              _vm._v(" "),
              _c("span", [_vm._v("28")])
            ]),
            _vm._v(" "),
            _c("a", { attrs: { href: "javascript:void(0)" } }, [
              _c("i", { staticClass: "ti-comment-alt" }),
              _vm._v(" "),
              _c("span", [_vm._v("46")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6 float-right" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-sm waves-effect btn-seconday",
              attrs: { href: "" }
            },
            [_vm._v("Read More")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Total Revenue")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("Today Sales")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "ti-location-pin" }),
      _vm._v(" London")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("p", { staticClass: "m-t-20 clearfix p-10 pl-2 pr-2" }, [
        _vm._v(
          "It has survived not only five centuries, but also the\r\n                            leap into\r\n                            electronic typesetting."
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "social_icons p-2 text-white bg-custom1" }, [
        _c("i", {
          staticClass: "ti-facebook pl-2 pr-2",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("i", {
          staticClass: "ti-twitter pl-2 pr-2",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("i", {
          staticClass: "ti-google pl-2 pr-2",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("i", {
          staticClass: "ti-youtube pl-2 pr-2",
          attrs: { "aria-hidden": "true" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("ul", { staticClass: "nav nav-stacked nav_border" }, [
        _c("li", [
          _c("a", { attrs: { href: "#/widgets" } }, [
            _vm._v("Projects "),
            _c("span", { staticClass: "float-right badge badge-success " }, [
              _vm._v("31")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#/widgets" } }, [
            _vm._v("Tasks "),
            _c("span", { staticClass: "float-right badge badge-success" }, [
              _vm._v("5")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#/widgets" } }, [
            _vm._v("Completed Projects "),
            _c("span", { staticClass: "float-right badge badge-success " }, [
              _vm._v("12")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#/widgets" } }, [
            _vm._v("Followers "),
            _c("span", { staticClass: "float-right badge badge-success" }, [
              _vm._v("58")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#/widgets" } }, [
            _vm._v("Progress "),
            _c("span", { staticClass: "float-right badge badge-success" }, [
              _vm._v("75")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#/widgets" } }, [
            _vm._v("Upcoming "),
            _c("span", { staticClass: "float-right badge badge-success" }, [
              _vm._v("157")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#/widgets" } }, [
            _vm._v("Others "),
            _c("span", { staticClass: "float-right badge badge-success" }, [
              _vm._v("842")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#/widgets" } }, [
            _vm._v("Extra "),
            _c("span", { staticClass: "float-right badge badge-success" }, [
              _vm._v("545")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body text-justify" }, [
      _c("p", [
        _vm._v(
          "It is a long established fact that a reader will be distracted\r\n                        by the readable content of a page.\r\n                    "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "The point of using\r\n                        Lorem Ipsum is that it has a more-or-less normal distribution.\r\n                    "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Lorem Ipsum is therefore more -or-less always free from repetition."
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "It is a long established fact that a reader will be distracted\r\n                        by the readable content of a page.\r\n                        The point of using\r\n                        that it has distribution.\r\n                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4" }, [
      _c("div", { staticClass: "widget" }, [
        _c("ul", { staticClass: "list-group" }, [
          _c("li", { staticClass: "list-group-item" }, [
            _c("i", {
              staticClass:
                "fa-2x padding-top-small padding-bottom padding-right-small fa ti-layers-alt float-left text-primary"
            }),
            _vm._v(" "),
            _c("h4", [_vm._v("More Features")]),
            _vm._v(" "),
            _c("p", [_vm._v("This is the kind of thing you really need.")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item" }, [
            _c("i", {
              staticClass:
                "fa-2x padding-top-small padding-bottom padding-right-small fa ti-server float-left text-primary"
            }),
            _vm._v(" "),
            _c("h4", [_vm._v("Unlimited Users")]),
            _vm._v(" "),
            _c("p", [_vm._v("This is the kind of thing you really need.")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item" }, [
            _c("i", {
              staticClass:
                "fa-2x padding-top-small padding-bottom padding-right-small fa ti-cup float-left text-primary"
            }),
            _vm._v(" "),
            _c("h4", [_vm._v("Custom Database")]),
            _vm._v(" "),
            _c("p", [_vm._v("This is the kind of thing you really need.")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item" }, [
            _c("i", {
              staticClass:
                "fa-2x padding-top-small padding-bottom padding-right-small fa ti-bookmark-alt float-left text-primary"
            }),
            _vm._v(" "),
            _c("h4", [_vm._v("Enhanced Reporting")]),
            _vm._v(" "),
            _c("p", [_vm._v("This is the kind of thing you really need.")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "list-group-item" }, [
            _c("i", {
              staticClass:
                "fa-2x padding-top-small padding-bottom padding-right-small fa ti-medall-alt float-left text-primary"
            }),
            _vm._v(" "),
            _c("h4", [_vm._v("Enterprise Features")]),
            _vm._v(" "),
            _c("p", [_vm._v("This is the kind of thing you really need.")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "info text-justify" }, [
      _c("h4", { staticClass: "text-white text-center pt-3" }, [
        _vm._v("Clear Nature")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card card-widget" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-3" }, [
            _c("i", {
              staticClass:
                "fa-2x padding-top-small padding-bottom padding-right-small fa ti-facebook float-left text-primary"
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c("i", {
              staticClass:
                "fa-2x padding-top-small padding-bottom padding-right-small fa ti-google float-left text-danger"
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c("i", {
              staticClass:
                "fa-2x padding-top-small padding-bottom padding-right-small fa ti-twitter-alt float-left text-info"
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-3" }, [
            _c("i", {
              staticClass:
                "fa-2x padding-top-small padding-bottom padding-right-small fa ti-linkedin float-left text-primary"
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "text-center" }, [
      _c("strong", [_vm._v("Alex Cooper")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body p-b-0" }, [
      _c("div", { staticClass: "bg-custom1  p-t-b-20 text-center row" }, [
        _c("div", { staticClass: "col-4" }, [
          _c("h4", { staticClass: "text-white" }, [_vm._v("782")]),
          _vm._v(" "),
          _c("p", { staticClass: "text-white" }, [_vm._v("Followers")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _c("h4", { staticClass: "text-white" }, [_vm._v("834")]),
          _vm._v(" "),
          _c("p", { staticClass: "text-white" }, [_vm._v("Following")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4" }, [
          _c("h4", { staticClass: "text-white" }, [_vm._v("2907")]),
          _vm._v(" "),
          _c("p", { staticClass: "text-white" }, [_vm._v("Likes")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/components/pages/widgets.vue":
/*!************************************************!*\
  !*** ./resources/components/pages/widgets.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _widgets_vue_vue_type_template_id_369bcc63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets.vue?vue&type=template&id=369bcc63& */ "./resources/components/pages/widgets.vue?vue&type=template&id=369bcc63&");
/* harmony import */ var _widgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets.vue?vue&type=script&lang=js& */ "./resources/components/pages/widgets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var ihover_src_ihover_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ihover/src/ihover.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/ihover/src/ihover.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var chartist_dist_chartist_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartist/dist/chartist.css?vue&type=style&index=1&lang=css& */ "./node_modules/chartist/dist/chartist.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _css_custom_css_widgets_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/custom_css/widgets.css?vue&type=style&index=2&lang=css& */ "./resources/css/custom_css/widgets.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var _widgets_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets.vue?vue&type=style&index=3&lang=css& */ "./resources/components/pages/widgets.vue?vue&type=style&index=3&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");









/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
  _widgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _widgets_vue_vue_type_template_id_369bcc63___WEBPACK_IMPORTED_MODULE_0__["render"],
  _widgets_vue_vue_type_template_id_369bcc63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/widgets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/widgets.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/components/pages/widgets.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_widgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./widgets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/widgets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_widgets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/widgets.vue?vue&type=style&index=3&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/components/pages/widgets.vue?vue&type=style&index=3&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_widgets_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./widgets.vue?vue&type=style&index=3&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/widgets.vue?vue&type=style&index=3&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_widgets_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_widgets_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_widgets_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_widgets_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_widgets_vue_vue_type_style_index_3_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/widgets.vue?vue&type=template&id=369bcc63&":
/*!*******************************************************************************!*\
  !*** ./resources/components/pages/widgets.vue?vue&type=template&id=369bcc63& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widgets_vue_vue_type_template_id_369bcc63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./widgets.vue?vue&type=template&id=369bcc63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/widgets.vue?vue&type=template&id=369bcc63&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widgets_vue_vue_type_template_id_369bcc63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widgets_vue_vue_type_template_id_369bcc63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/custom_css/widgets.css?vue&type=style&index=2&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/css/custom_css/widgets.css?vue&type=style&index=2&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_widgets_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./widgets.css?vue&type=style&index=2&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/widgets.css?vue&type=style&index=2&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_widgets_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_widgets_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_widgets_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_widgets_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_widgets_css_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/img/authors/avatar.jpg":
/*!******************************************!*\
  !*** ./resources/img/authors/avatar.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/avatar.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ "./resources/img/authors/avatar2.jpg":
/*!*******************************************!*\
  !*** ./resources/img/authors/avatar2.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/avatar2.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ "./resources/img/authors/avatar3.jpg":
/*!*******************************************!*\
  !*** ./resources/img/authors/avatar3.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/avatar3.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ "./resources/img/gallery/thumbs/35.jpg":
/*!*********************************************!*\
  !*** ./resources/img/gallery/thumbs/35.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/35.jpg?849eb59863d1f704233d7e2e5601cee2";

/***/ }),

/***/ "./resources/img/gallery/thumbs/36.jpg":
/*!*********************************************!*\
  !*** ./resources/img/gallery/thumbs/36.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/36.jpg?849eb59863d1f704233d7e2e5601cee2";

/***/ }),

/***/ "./resources/img/gallery/thumbs/37.jpg":
/*!*********************************************!*\
  !*** ./resources/img/gallery/thumbs/37.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/37.jpg?849eb59863d1f704233d7e2e5601cee2";

/***/ }),

/***/ "./resources/img/gallery/thumbs/38.jpg":
/*!*********************************************!*\
  !*** ./resources/img/gallery/thumbs/38.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/38.jpg?849eb59863d1f704233d7e2e5601cee2";

/***/ }),

/***/ "./resources/img/images/avatar1.jpg":
/*!******************************************!*\
  !*** ./resources/img/images/avatar1.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/avatar1.jpg?6cfa3642f0c51d6eb1dd45b7ddbdf9a0";

/***/ })

}]);