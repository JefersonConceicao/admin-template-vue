(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var chart_js_dist_Chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/dist/Chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js_dist_Chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js_dist_Chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hchs_vue_charts_dist_vue_charts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hchs-vue-charts/dist/vue-charts.js */ "./node_modules/hchs-vue-charts/dist/vue-charts.js");
/* harmony import */ var hchs_vue_charts_dist_vue_charts_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hchs_vue_charts_dist_vue_charts_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_fullscreen_src_component_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-fullscreen/src/component.vue */ "./node_modules/vue-fullscreen/src/component.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "app",
  components: {
    Fullscreen: vue_fullscreen_src_component_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      cardhide: true,
      card: "closecard",
      fullscreen: false,
      mywidth: 300,
      myheight: 500,
      cardstyle: {
        opacity: 0.5
      },
      cardstyles: "",
      cardstatus: false,
      mydatasets: [{
        data: [300, 50, 100],
        backgroundColor: ["#1da1f2", "#3b5998", "#f0ad4e"]
      }],
      myoption: {
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: true,
        title: {
          display: false,
          position: 'top',
          text: '3000'
        }
      }
    };
  },
  methods: {
    myReload: function myReload() {
      var _this = this;

      this.cardstatus = true, this.cardstyles = this.cardstyle;
      setTimeout(function () {
        _this.cardstatus = false;
        _this.cardstyles = {
          opacity: 1
        };
      }, 2000);
    },
    // menuOption:function()
    // {
    //     setTimeout( () => {
    //         this.el=document.getElementById("dropdown-card").querySelectorAll(".dropdown .dropdown-menu.show");
    //         // this.text=document.getElementById("chartdiv").querySelectorAll(".amcharts-chart-div a");
    //         this.el[0].style.left="auto";
    //         this.el[0].style.right="0";
    //
    //
    //     }, 10);
    // },
    toggle: function toggle() {
      this.$refs['fullscreen'].toggle();
    },
    fullscreenChange: function fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    notificationClose: function notificationClose() {
      this.cardhide = !this.cardhide;
    }
  },
  mounted: function mounted() {
    $(document).ready(function () {
      $(".fa-ellipsis-v").on("click", function () {
        $(this).closest(".card").find(".dropdown-menu.show").addClass("hi");
      });
    });
  },
  destroyed: function destroyed() {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var metrojs_release_MetroJs_Full_MetroJs_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! metrojs/release/MetroJs.Full/MetroJs.min.js */ "./node_modules/metrojs/release/MetroJs.Full/MetroJs.min.js");
/* harmony import */ var metrojs_release_MetroJs_Full_MetroJs_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(metrojs_release_MetroJs_Full_MetroJs_min_js__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'feeds',
  mounted: function mounted() {
    "use strict";

    $(".live-tile, .flip-list").not(".exclude").liveTile();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
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
  name: 'profile_page',
  data: function data() {
    return {
      images: [__webpack_require__(/*! ../../../../img/pages/slider1.jpg */ "./resources/img/pages/slider1.jpg"), __webpack_require__(/*! ../../../../img/pages/slider2.jpg */ "./resources/img/pages/slider2.jpg"), __webpack_require__(/*! ../../../../img/profile-cover.jpg */ "./resources/img/profile-cover.jpg")],
      profile_name: ['Clinton Leo', 'Tony', 'Jenny Kerry'],
      profile_pic: [__webpack_require__(/*! ../../../../img/profile-pic.jpg */ "./resources/img/profile-pic.jpg"), __webpack_require__(/*! ../../../../img/authors/avatar.jpg */ "./resources/img/authors/avatar.jpg"), __webpack_require__(/*! ../../../../img/authors/avatar2.jpg */ "./resources/img/authors/avatar2.jpg")],
      desig: ['Designer,', 'Editor,', 'Tester,'],
      desigtag: ['Team Lead.', 'Manager.', 'Trainee.'],
      currentNumber: 0
    };
  },
  methods: {
    next: function next() {
      this.currentNumber += 1;
    },
    prev: function prev() {
      this.currentNumber -= 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "recent_activities"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var amcharts3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amcharts3 */ "./node_modules/amcharts3/amcharts/amcharts.js");
/* harmony import */ var amcharts3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(amcharts3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3/amcharts/serial */ "./node_modules/amcharts3/amcharts/serial.js");
/* harmony import */ var amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_serial__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var amcharts3_amcharts_gauge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amcharts3/amcharts/gauge */ "./node_modules/amcharts3/amcharts/gauge.js");
/* harmony import */ var amcharts3_amcharts_gauge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_gauge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amcharts3/amcharts/themes/light */ "./node_modules/amcharts3/amcharts/themes/light.js");
/* harmony import */ var amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_themes_light__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var amcharts3_amcharts_plugins_export_export_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amcharts3/amcharts/plugins/export/export.min */ "./node_modules/amcharts3/amcharts/plugins/export/export.min.js");
/* harmony import */ var amcharts3_amcharts_plugins_export_export_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(amcharts3_amcharts_plugins_export_export_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_fullscreen_src_component_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-fullscreen/src/component.vue */ "./node_modules/vue-fullscreen/src/component.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'server',
  components: {
    Fullscreen: vue_fullscreen_src_component_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      cardhide: true,
      card: "closecard",
      fullscreen: false,
      carddropdown: "",
      text: "",
      cardstatus: false,
      cardstyle: {
        opacity: 0.5
      },
      cardstyles: ""
    };
  },
  methods: {
    menuOption: function menuOption() {
      var _this = this;

      setTimeout(function () {
        _this.el = document.getElementById("dropdown-card").querySelectorAll(".dropdown .dropdown-menu.show");
        _this.el[0].style.left = "auto";
        _this.el[0].style.right = "0";
      }, 10);
    },
    toggle: function toggle() {
      this.$refs['fullscreen'].toggle();
    },
    fullscreenChange: function fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    notificationClose: function notificationClose() {
      this.cardhide = !this.cardhide;
    },
    mounted: function mounted() {},
    destroyed: function destroyed() {},
    myReload: function myReload() {
      var _this2 = this;

      this.cardstatus = true, this.cardstyles = this.cardstyle, setTimeout(function () {
        _this2.cardstatus = false;
        _this2.cardstyles = {
          opacity: 1
        };
      }, 2000);
    }
  },
  created: function created() {
    setTimeout(function () {
      var chart = window.AmCharts.makeChart("chartdiv", {
        "theme": "light",
        "type": "gauge",
        "axes": [{
          "topTextFontSize": 20,
          "topTextYOffset": 50,
          "axisColor": "#42f4d7",
          "axisThickness": 1,
          "endValue": 100,
          "gridInside": true,
          "inside": true,
          "radius": "50%",
          "valueInterval": 20,
          "tickColor": "#67b7dc",
          "startAngle": -90,
          "endAngle": 90,
          "unit": "%",
          "bandOutlineAlpha": 0,
          "allLabels": [{
            "display": "false"
          }],
          "bands": [{
            "color": "#e2e7ee",
            "endValue": 100,
            "innerRadius": "105%",
            "radius": "170%",
            "gradientRatio": [0, 0, 0],
            "startValue": 0
          }, {
            "color": "#c23616",
            "endValue": 0,
            "innerRadius": "105%",
            "radius": "170%",
            "gradientRatio": [0, 0, 0],
            "startValue": 0
          }]
        }],
        "arrows": [{
          "alpha": 1,
          "innerRadius": "35%",
          "nailRadius": 0,
          "radius": "170%"
        }]
      });
      setInterval(randomValue, 2000); // set random value

      function randomValue() {
        var value = Math.round(Math.random() * 100);
        chart.arrows[0].setValue(value);
        chart.axes[0].setTopText(value + "%"); // adjust darker band to new value

        chart.axes[0].bands[1].setEndValue(value);
      }
    }, 500);
  },
  mounted: function mounted() {
    $(document).ready(function () {
      setTimeout(function () {
        $(".amcharts-chart-div").css("width", "253px !important");
        $(".amcharts-chart-div a").css("visibility", "hidden");
      }, 200);
    });
  },
  beforeMount: function beforeMount() {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var vue_fullscreen_src_component_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-fullscreen/src/component.vue */ "./node_modules/vue-fullscreen/src/component.vue");
/* harmony import */ var materialize_css_dist_js_materialize_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css/dist/js/materialize.min.js */ "./node_modules/materialize-css/dist/js/materialize.min.js");
/* harmony import */ var materialize_css_dist_js_materialize_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_js_materialize_min_js__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'todolist',
  components: {
    Fullscreen: vue_fullscreen_src_component_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      cardhide: true,
      card: "closecard",
      fullscreen: false,
      carddropdown: "",
      text: "",
      cardstatus: false,
      cardstyle: {
        opacity: 0.5
      },
      cardstyles: "",
      todos: [],
      newTodo: ''
    };
  },
  watch: {
    todos: {
      handler: function handler() {
        localStorage.todos = JSON.stringify(this.todos);
      },
      deep: true
    }
  },
  methods: {
    menuOption: function menuOption() {
      var _this = this;

      setTimeout(function () {
        _this.el = document.getElementById("dropdown-card").querySelectorAll(".dropdown .dropdown-menu.show");
        _this.text = document.getElementById("chartdiv").querySelectorAll(".amcharts-chart-div a");
        _this.el[0].style.left = "auto";
        _this.el[0].style.right = "0";
        _this.text[0].style.visibility = "hidden";
      }, 10);
    },
    toggle: function toggle() {
      this.$refs['fullscreen'].toggle();
    },
    fullscreenChange: function fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    notificationClose: function notificationClose() {
      this.cardhide = !this.cardhide;
    },
    mounted: function mounted() {
      if (localStorage.todos) {
        this.todos = JSON.parse(localStorage.todos);
      }
    },
    destroyed: function destroyed() {},
    myReload: function myReload() {
      var _this2 = this;

      this.cardstatus = true, this.cardstyles = this.cardstyle, setTimeout(function () {
        _this2.cardstatus = false;
        _this2.cardstyles = {
          opacity: 1
        };
      }, 2000);
    },
    submitTodo: function submitTodo() {
      this.todos.push({
        title: this.newTodo,
        done: false
      });
      this.newTodo = '';
    },
    deleteTodo: function deleteTodo(todo) {
      var todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    }
  },
  created: function created() {},
  mounted: function mounted() {
    $(".btn.waves-effect").on("click", function () {
      setTimeout(function () {
        $(".hiddendiv").remove();
      }, 500);
    });
  },
  beforeMount: function beforeMount() {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "weather"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/index2.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/index2.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nvd3_build_nv_d3_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nvd3/build/nv.d3.min.js */ "./node_modules/nvd3/build/nv.d3.min.js");
/* harmony import */ var nvd3_build_nv_d3_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nvd3_build_nv_d3_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_custom_js_sparkline_jquery_flot_spline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/custom_js/sparkline/jquery.flot.spline.js */ "./resources/js/custom_js/sparkline/jquery.flot.spline.js");
/* harmony import */ var _js_custom_js_sparkline_jquery_flot_spline_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_custom_js_sparkline_jquery_flot_spline_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var screenfull_dist_screenfull_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! screenfull/dist/screenfull.js */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull_dist_screenfull_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(screenfull_dist_screenfull_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_circle_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-circle-slider */ "./node_modules/vue-circle-slider/index.js");
/* harmony import */ var _dashboard_dashboard_two_feeds_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard_two/feeds.vue */ "./resources/components/pages/dashboard/dashboard_two/feeds.vue");
/* harmony import */ var _dashboard_dashboard_two_recent_activities_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard_two/recent_activities.vue */ "./resources/components/pages/dashboard/dashboard_two/recent_activities.vue");
/* harmony import */ var _dashboard_dashboard_two_profile_page_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard_two/profile_page.vue */ "./resources/components/pages/dashboard/dashboard_two/profile_page.vue");
/* harmony import */ var _dashboard_dashboard_two_weather_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard_two/weather.vue */ "./resources/components/pages/dashboard/dashboard_two/weather.vue");
/* harmony import */ var _dashboard_dashboard_two_server_load_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard_two/server_load.vue */ "./resources/components/pages/dashboard/dashboard_two/server_load.vue");
/* harmony import */ var _dashboard_dashboard_two_device_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard_two/device.vue */ "./resources/components/pages/dashboard/dashboard_two/device.vue");
/* harmony import */ var _dashboard_dashboard_two_todolist_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard_two/todolist.vue */ "./resources/components/pages/dashboard/dashboard_two/todolist.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__webpack_require__(/*! imports-loader?screenfull=./node_modules/screenfull/dist/screenfull.js */ "./node_modules/imports-loader/index.js?screenfull=./node_modules/screenfull/dist/screenfull.js!./");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_circle_slider__WEBPACK_IMPORTED_MODULE_4__["default"]);

__webpack_require__(/*! imports-loader?amcharts3=./node_modules/amcharts3/amcharts/amcharts.js */ "./node_modules/imports-loader/index.js?amcharts3=./node_modules/amcharts3/amcharts/amcharts.js!./"); //new






 // import VueDevice from './dashboard/dashboard_two/device.vue'



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'index2',
  components: {
    feeds: _dashboard_dashboard_two_feeds_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    recent_activities: _dashboard_dashboard_two_recent_activities_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    profile_page: _dashboard_dashboard_two_profile_page_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    weather: _dashboard_dashboard_two_weather_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    VueServerLoad: _dashboard_dashboard_two_server_load_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    VueDevice: _dashboard_dashboard_two_device_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    todolist: _dashboard_dashboard_two_todolist_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  data: function data() {
    return {
      url: '',
      val5: 65
    };
  },
  mounted: function mounted() {
    "use strict";

    $(document).ready(function () {
      $('#fullscreen-toggle').on('click', function () {
        if ($('#fullscreen-toggle').find('i').hasClass('ti-fullscreen')) {
          screenfull_dist_screenfull_js__WEBPACK_IMPORTED_MODULE_3___default.a.toggle($('#main-chart')[0]);
          $('.ti-fullscreen').toggleClass('ti-fullscreen ti-move');
        } else {
          screenfull_dist_screenfull_js__WEBPACK_IMPORTED_MODULE_3___default.a.exit();
          $('.ti-move').toggleClass('ti-fullscreen ti-move');
        }
      }); // sales chart starts

      nv.addGraph(function () {
        var linechart = nv.models.lineChart() // .useInteractiveGuideline(true)
        .showYAxis(false).showXAxis(true);
        linechart.xAxis.tickFormat(d3.format(',r'));
        linechart.yAxis.tickFormat(d3.format('.1f'));
        var myData = sinAndCos();
        linechart.forceY([0, 10]);
        d3.select('#sales-chart svg').datum(myData).call(linechart);
        nv.utils.windowResize(function () {
          linechart.update();
        });
        $(window).on("scroll", function () {
          linechart.tooltip.hideDelay(100);
        });
        $(".sidebar-toggle").on('click', function () {
          $("#sales-chart").find('svg').remove();
          $("#sales-chart").html("<svg></svg>");
          d3.select('#sales-chart svg').datum(myData).call(linechart);
          linechart.update();
        });
        return linechart;
      });

      function sinAndCos() {
        var sin = [],
            sin2 = [],
            cos = [];

        for (var i = 0; i < 121; i++) {
          sin.push({
            x: eval(i / 10),
            y: Math.cos(i / 9) + 7.5
          });
          sin2.push({
            x: eval(i / 10),
            y: Math.cos(i / 14) + 5
          });
          cos.push({
            x: eval(i / 10),
            y: Math.cos(i / 10) + 4
          });
        }

        return [{
          values: sin,
          key: 'Orders',
          color: '#4285F4',
          area: true
        }, {
          values: sin2,
          key: 'Sales',
          color: '#81ADF8',
          area: true
        }, {
          values: cos,
          key: 'Support',
          color: '#BCD3F9',
          area: true
        }];
      } // sales chart end
      // sparkline charts of visits sales etc..


      function spark_user() {
        $("#user-chart").sparkline([209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212], {
          type: 'line',
          width: '100%',
          height: '33',
          lineColor: '#6699CC',
          fillColor: '#D2E9FF',
          tooltipSuffix: ' Users',
          highlightLineColor: 'rgba(0,0,0,0)'
        });
      }

      spark_user();

      function spark_revenue() {
        var barParentdiv = $('#mr-chart').closest('.card');
        var barCount = [91, 121, 131, 121, 131, 101, 91, 141, 131, 111, 111, 121, 111, 111, 101, 121, 111, 111, 121, 131, 121, 131, 121];
        var barSpacing = 2;
        $("#mr-chart").sparkline(barCount, {
          type: 'bar',
          width: '100%',
          barWidth: (barParentdiv.width() - barCount.length * barSpacing) / barCount.length,
          height: '30',
          barSpacing: barSpacing,
          barColor: '#FFE5C0',
          tooltipSuffix: ' Sales'
        });
      }

      spark_revenue();

      function spark_subscribe() {
        $("#subscriber-chart").sparkline([209, 210, 209, 210, 210, 211, 212, 211, 210, 211, 209, 211, 213, 210, 212, 214, 211, 210, 212], {
          type: 'line',
          width: '100%',
          height: '33',
          lineColor: '#ff6666',
          fillColor: '#FEEFEF',
          tooltipSuffix: ' Subscribers',
          highlightLineColor: 'rgba(0,0,0,0)'
        });
      }

      spark_subscribe();
      $(window).on('resize', function () {
        spark_user();
        spark_revenue();
        spark_subscribe();
      });
      $("[data-toggle='offcanvas']").on('click', function (e) {
        spark_user();
        spark_revenue();
        spark_subscribe();
      }); // swiper ends
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=style&index=0&id=7cf0639b&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=style&index=0&id=7cf0639b&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#chartdiv[data-v-7cf0639b] {\n    width: 100%;\n    height: 500px;\n}\n#deviceload .card-body[data-v-7cf0639b]\n{\n    padding: 0;\n}\n#deviceload .card-text[data-v-7cf0639b]\n{\n    padding: 1.25rem;\n}\n#deviceload .card-header[data-v-7cf0639b]\n{\n    padding:0.75rem 1.25rem 2.25rem;\n}\n#deviceload .text-size[data-v-7cf0639b]\n{\n    font-size:14px;\n}\n#chartdiv div.amcharts-chart-div a[data-v-7cf0639b]\n{\n    visibility: hidden;\n}\n.server-load-chart[data-v-7cf0639b]\n{\n    bottom: -5.5rem;\n    left: 0;\n    position: relative;\n    right: 0;\n}\n#deviceload .card .card-header .dropdowngroup[data-v-7cf0639b]\n{\n    width: 50%;\n    float:right;\n    position: absolute;\n    z-index: 99;\n    right: 2px;\n    transition:all 1s;\n}\n#deviceload .card .card-header .dropdowngroup .dropdown-item[data-v-7cf0639b]\n{\n    cursor:pointer;\n}\n#app .fullscreen[data-v-7cf0639b]\n{\n    overflow-x:hidden;\n}\n.fullscreen[data-v-7cf0639b]\n{\n    background-color:#fff !important;\n}\n#deviceload .btn-group.b-dropdown.dropdown[data-v-7cf0639b]\n{\n    float:right;\n}\n#deviceload .btn-group.b-dropdown.dropdown i[data-v-7cf0639b]\n{\n    color:#212529;\n}\n#deviceload  .dropdown-menu[x-placement^=\"bottom\"][data-v-7cf0639b]{\n\n    position:absolute;\n    left: auto !important;\n    right:0 !important;\n    background-color:red;\n}\n#__BVID__196 > div[data-v-7cf0639b]\n{\n    position:absolute;\n    left: auto !important;\n    right:0 !important;\n    background-color:red;\n}\n.drop-set[data-v-7cf0639b]\n{\n    position:absolute;\n    left: auto !important;\n    right:0 !important;\n}\n#deviceload canvas[data-v-7cf0639b]\n{\n    margin: auto;\n}\n#doughchart .overlay-content[data-v-7cf0639b]\n{\n    position: absolute;\n    top: 44%;\n    left: 36%;\n    font-size: 24px;\n    color: #212529;\n    right: 0;\n    bottom: 0;\n    font-weight: 700;\n}\n.badge-secondary[data-v-7cf0639b]\n{\n    background: none;\n}\n#doughchart .text-mobile[data-v-7cf0639b]\n{\n    color:#f0ad4e;\n}\n#doughchart .text-tablet[data-v-7cf0639b]\n{\n    color:#3b5998;\n}\n#serverload .card[data-v-7cf0639b]\n{\n    position:relative;\n}\n#deviceload .card .card-body img[data-v-7cf0639b]\n{\n    position: absolute;\n    text-align: center;\n    left: 43%;\n    top: 40%;\n    z-index:99;\n}\n.device-header-noti-icon:hover i[data-v-7cf0639b],  .device-header-noti-icon i[data-v-7cf0639b]\n{\n    padding: 5px 10px 4px 11px;\n    border-radius:50px;\n    position: relative;\n    left: 9px;\n    top: -8px;\n}\n.device-header-noti-icon i[data-v-7cf0639b]\n{\n    background:none;\n}\n.device-header-noti-icon:hover i[data-v-7cf0639b]\n{\n    background-color:#eee;\n}\n#deviceload .card[data-v-7cf0639b]\n{\n    height: 389px;\n}\n.fullscreen .card[data-v-7cf0639b]\n{\n    height: 100% !important;\n}\n@media (max-width: 768px)\n{\n#deviceload .card[data-v-7cf0639b]\n    {\n        height: auto;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=style&index=1&id=6ffb9760&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=style&index=1&id=6ffb9760&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*feeds*/\n.tile_1[data-v-6ffb9760] {\n    background-color: rgba(82, 166, 223, .7);\n    height: 148px;\n}\n.tile_2[data-v-6ffb9760] {\n    height: 200px;\n}\n.live-tile .tile-time[data-v-6ffb9760] {\n    bottom: 4px;\n    left: 20px;\n}\n.live-tile .feed-title[data-v-6ffb9760] {\n    top: 5px;\n    left: 10px;\n    font-size: 19px;\n    font-weight: bold;\n}\n.live-tile .full[data-v-6ffb9760] {\n    padding: 40px 20px 10px 23px;\n}\n.live-tile[data-v-6ffb9760],\n.list-tile[data-v-6ffb9760],\n.copy-tile[data-v-6ffb9760],\n.tile-strip .flip-list > li[data-v-6ffb9760] {\n    height: 100%;\n    margin: 0;\n    outline: 1px solid transparent;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 0;\n    width: 100%;\n}\n\n\n/*feeds ends*/\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=style&index=0&id=efd0b92c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=style&index=0&id=efd0b92c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*chats profile*/\n.profile-page .cover-image[data-v-efd0b92c] {\n    width: 100%;\n    height: 114px;\n    background-image: url(" + escape(__webpack_require__(/*! ../../../../img/profile-cover.jpg */ "./resources/img/profile-cover.jpg")) + ");\n    background-size: cover;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n}\n.profile-page .cover-image .change_pic[data-v-efd0b92c] {\n    background-color: rgba(225, 225, 225, .4);\n}\n.profile-page .cover-image .change_pic img[data-v-efd0b92c] {\n    height: 20px;\n}\n.profile-page .cover-image .profile-name[data-v-efd0b92c] {\n    top: 85px;\n    left: 174px;\n    position: absolute;\n    color: #fff;\n    font-size: 20px;\n}\n.profile-page .cover-image .follow-link[data-v-efd0b92c] {\n    position: absolute;\n    right: 30px;\n    top: 140px;\n    border: 1px solid #509DE0;\n    background-color: #509DE0;\n    border-radius: 4px;\n}\n.profile-page .cover-image .follow-link .btn[data-v-efd0b92c] {\n    font-size: 14px;\n    padding: 1px 9px;\n    color: #fff;\n}\n.profile-page .profile-pic[data-v-efd0b92c] {\n    width: 120px;\n    height: 120px;\n    background-image: url(" + escape(__webpack_require__(/*! ../../../../img/profile-pic.jpg */ "./resources/img/profile-pic.jpg")) + ");\n    background-size: cover;\n    border-radius: 50%;\n    border: 4px solid rgba(225, 225, 225, 1.5);\n    margin-top: -75px;\n    margin-left: 25px;\n}\n.profile-page .about[data-v-efd0b92c] {\n    min-height: 123px;\n    margin-top: -25px;\n}\n.profile-page .about .designation[data-v-efd0b92c] {\n    padding-top: 24px;\n    padding-left: 7%;\n    color: #555;\n}\n.profile-page .about .designation .new-task[data-v-efd0b92c],\n.profile-page .about .designation .new-task[data-v-efd0b92c]:active {\n    border-color: #509DE0;\n    color: #509DE0;\n    border-radius: 200px;\n    font-size: 14px;\n    padding: 3px 10px;\n}\n.profile-page .about .designation .new-task[data-v-efd0b92c]:hover {\n    color: #fff;\n    background-color: #509DE0;\n}\n.profile-page .about .brief[data-v-efd0b92c] {\n    overflow-y: hidden;\n    height: 100px;\n    padding: 5px 35px 5px 20px;\n    color: #777;\n}\n.profile-page .about .brief[data-v-efd0b92c]:before {\n    content: '';\n    height: 67%;\n    width: 1px;\n    position: absolute;\n    left: 0;\n    top: 26%;\n    background-color: #ccc;\n}\n.profile-page .about .brief h4[data-v-efd0b92c] {\n    font-weight: 700;\n}\n\n\n/*chats profile ends*/\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=style&index=0&id=825f2ac8&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=style&index=0&id=825f2ac8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*timeline chart*/\n.schedule-cont[data-v-825f2ac8] {\n    padding-left: 0;\n}\n.schedule-cont .item[data-v-825f2ac8] {\n    border-left: 1px solid #ccc;\n    margin-bottom: -14px;\n    min-height: 70px;\n    padding-top: 10px;\n}\n.schedule-cont .success[data-v-825f2ac8] {\n    border-left: 1px solid #66CC99;\n}\n.schedule-cont .danger[data-v-825f2ac8] {\n    border-left: 1px solid #FF6666;\n}\n.schedule-cont .item .text-muted[data-v-825f2ac8] {\n    color: #888;\n    font-size: 11px;\n}\n.schedule-cont .item p[data-v-825f2ac8] {\n    color: #555;\n}\n.schedule-cont .item[data-v-825f2ac8]:before {\n    content: \" \";\n    display: table;\n    background-color: #fff;\n    border: 1px solid #58748B;\n    border-radius: 10px;\n    height: 9px;\n    left: 0;\n    margin-left: -5px;\n    width: 9px;\n    clear: both;\n    bottom: auto;\n    top: 4px;\n}\n.schedule-cont .success[data-v-825f2ac8]:before {\n    border-color: #66CC99;\n}\n.schedule-cont .danger[data-v-825f2ac8]:before {\n    border-color: #FF6666;\n}\n.schedule-cont .item .data[data-v-825f2ac8] {\n    padding-left: 20px;\n    margin-top: -10px;\n}\n\n\n/*timeline chart ends*/\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=style&index=0&id=b74c2f26&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=style&index=0&id=b74c2f26&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#chartdiv[data-v-b74c2f26] {\n    width: 100%;\n    height: 500px;\n}\n#serverload .card-body[data-v-b74c2f26]\n{\n    padding: 0;\n}\n#serverload .card-text[data-v-b74c2f26]\n{\n    padding: 1.25rem;\n}\n#serverload .card-header[data-v-b74c2f26]\n{\n    padding:0.75rem 1.25rem 2.25rem;\n}\n#serverload .text-size[data-v-b74c2f26]\n{\n    font-size:14px;\n}\n#chartdiv div.amcharts-chart-div a[data-v-b74c2f26]\n{\n    visibility: hidden;\n}\n#serverload .card .card-header .dropdowngroup[data-v-b74c2f26]\n{\n    width: 50%;\n    float:right;\n    position: absolute;\n    z-index: 99;\n    right: 2px;\n    transition:all 1s;\n}\n#serverload .card .card-header .dropdowngroup .dropdown-item[data-v-b74c2f26]\n{\n    cursor:pointer;\n}\n#app .fullscreen[data-v-b74c2f26]\n{\n    overflow-x:hidden;\n}\n.fullscreen .card[data-v-b74c2f26]\n{\n    box-shadow: none;\n}\n.fullscreen[data-v-b74c2f26]\n{\n    background-color:#fff !important;\n}\n#serverload .btn-group.b-dropdown.dropdown[data-v-b74c2f26]\n{\n    float:right;\n}\n#serverload  .btn-group.b-dropdown.dropdown i[data-v-b74c2f26]\n{\n    color:#212529;\n}\n.drop-set[data-v-b74c2f26]\n{\n   position:absolute;\n    left: auto !important;\n    right:0 !important;\n}\n.header-noti-icon:hover i[data-v-b74c2f26],  .header-noti-icon i[data-v-b74c2f26]\n{\n    padding: 5px 10px 4px 11px;\n    border-radius:50px;\n\n    position: relative;\n    left: 9px;\n    top: -8px;\n}\n.header-noti-icon i[data-v-b74c2f26]\n{\n    background:none;\n}\n.header-noti-icon:hover i[data-v-b74c2f26]\n{\n    background-color:#eee;\n}\n#app .fullscreen[data-v-3354e48c][data-v-b74c2f26]\n{\n    background-color:#fff !important;\n}\n#serverload .card .card-body[data-v-b74c2f26]\n{\n    height: 386px;\n}\n#serverload .card[data-v-b74c2f26]\n{\n    position:relative;\n}\n#serverload .card .card-body img[data-v-b74c2f26]\n{\n    position: absolute;\n    text-align: center;\n    left: 43%;\n    top: 40%;\n    z-index:99;\n}\n@media (min-width:320px) and (max-width:767px)\n{\n#serverload .card .card-body[data-v-b74c2f26]\n    {\n        height:420px;\n}\n}\n.cardstyles[data-v-b74c2f26]\n{\n    opacity:0.5\n}\n.amcharts-chart-div[data-v-b74c2f26]\n{\n    width:253px !important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=style&index=0&id=ea34c62e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=style&index=0&id=ea34c62e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.header-noti-icon:hover i[data-v-ea34c62e],  .header-noti-icon i[data-v-ea34c62e]\n{\n    padding: 5px 10px 4px 11px;\n    border-radius:50px;\n    position: relative;\n    left: 9px;\n    top: -8px;\n}\n.header-noti-icon i[data-v-ea34c62e]\n{\n    background:none;\n}\n.header-noti-icon:hover i[data-v-ea34c62e]\n{\n    background-color:#eee;\n}\n#todolist .btn-group.b-dropdown.dropdown i[data-v-ea34c62e]\n{\n    color:#212529;\n}\n#todolist .row .col.offset-s3[data-v-ea34c62e]\n{\n    margin-left: 0;\n}\n#todolist .card .card-title[data-v-ea34c62e]\n{\n    font-size: 16px;\n}\n#todolist .card .collection .collection-item label[data-v-ea34c62e]\n{\n    width: 100%;\n}\n#todolist .input-field[data-v-ea34c62e]\n{\n    margin-top:4rem;\n}\n#to-list[data-v-ea34c62e]\n{\n    height: 150px;\n    overflow-y: scroll;\n}\n#todolist .btn.waves-effect[data-v-ea34c62e]:hover,#todolist .btn.waves-effect[data-v-ea34c62e]\n{\n    background-color:#66cc99;\n}\n#todolist .teal-text[data-v-ea34c62e], #todolist .prefix.active[data-v-ea34c62e],#todolist label.active[data-v-ea34c62e]\n{\n    color:#66cc99 !important;\n}\n#todolist [type=\"checkbox\"]:checked+span[data-v-767e2d2a][data-v-ea34c62e]:not(.lever):before\n{\n    border-right: 2px solid #66cc99;\n    border-bottom: 2px solid #66cc99;\n}\n#todolist .card[data-v-ea34c62e]\n{\n    height:389px;\n}\n.collection .collection-item p[data-v-ea34c62e]\n{\n    margin-bottom:0;\n    position: relative;\n    top: 4px;\n}\n.collection .collection-item p span[data-v-ea34c62e]\n{\n    color:#555;\n}\n.hiddendiv[data-v-ea34c62e]\n{\n    display:none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=style&index=1&id=f17c4f02&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=style&index=1&id=f17c4f02&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*weather widget*/\n.weather-widget[data-v-f17c4f02] {\n    background-image: url(" + escape(__webpack_require__(/*! ../../../../img/d4-weather.jpg */ "./resources/img/d4-weather.jpg")) + ");\n    background-size: cover;\n    height: 260px;\n    color: #fff;\n    position: relative;\n    border-radius: 5px;\n}\n.weather-data .temperature[data-v-f17c4f02] {\n    padding-top: 29px;\n    padding-left: 10%;\n}\n.weather-data .temperature h2 span[data-v-f17c4f02] {\n    font-size: 60px;\n    margin-right: 40px;\n}\n.weather-data .temperature .icon[data-v-f17c4f02] {\n    position: absolute;\n    font-size: 82px;\n    z-index: 0;\n}\n.weather-data .temperature .location[data-v-f17c4f02] {\n    font-size: 14px;\n    position: absolute;\n}\n.weather-footer[data-v-f17c4f02] {\n    background: rgba(0, 0, 0, 0.4);\n    height: 100px;\n    bottom: 0;\n    width: 100%;\n    position: absolute;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n.weather-footer h5[data-v-f17c4f02] {\n    color: #B3B3B3;\n    margin-top: 1rem;\n}\n.weather-footer i[data-v-f17c4f02] {\n    font-size: 22px;\n    margin: 5px 0 8px 0;\n}\n.weather-footer p[data-v-f17c4f02] {\n    font-size: 15px;\n}\n.weather-footer .popup[data-v-f17c4f02] {\n    -webkit-transition: .1s ease-in-out;\n    -moz-transition: .1s ease-in-out;\n    -o-transition: .1s ease-in-out;\n    transition: .1s ease-in-out;\n}\n.weather-footer .popup[data-v-f17c4f02]:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    transform: scale(1.1);\n}\n\n/*for test*/\n@media screen and (max-width: 375px) {\n.weather-data .temperature h2 span.pull-right[data-v-f17c4f02] {\n        font-size: 50px;\n        margin-right: 26px;\n        margin-top: -15px;\n}\n.weather-footer .popup[data-v-f17c4f02] {\n        padding-left: 10px;\n}\n.weather-data .temperature .icon[data-v-f17c4f02] {\n        font-size: 60px;\n}\n}\n@media (min-width: 320px) and (max-width:425px){\n.weather-footer .popup[data-v-f17c4f02]{\n        padding-right:0;\n        padding-left: 0;\n}\n}\n@media(min-width: 768px) and (max-width: 1024px){\n.weather-footer .popup[data-v-f17c4f02]{\n        padding-left: 0;\n        padding-right: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/index2.vue?vue&type=style&index=2&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/index2.vue?vue&type=style&index=2&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#sales-chart svg {\r\n    height: 350px;\r\n    margin-left: -21px;\r\n    margin-bottom: -9px;\n}\n#sales-chart .nvd3 .nv-groups .nv-group {\r\n    fill-opacity: 1 !important;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child{\r\n    background-color: #fff;\r\n    color:#666;\r\n    border: none;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child:active{\r\n    border:none;\n}\n.dropdown-toggle::after{\r\n    display: none;\n}\nbody > #app .header .navbar-nav .user-dropdown .dropdown-toggle{\r\n    padding-bottom: 11px !important;\n}\n@media(min-width: 320px) and (max-width:768px){\n.profile-page .follow-link{\r\n        right: 16% !important;\n}\n}\n.circle_number{\r\n        font-size: 20px;\r\n        position: relative;\r\n        top: -67px;\n}\n@media(min-width: 320px) and (max-width: 425px){\n.designation{\r\n        margin-top: 15px;\n}\n.profile-page .about .brief:before {\r\n        visibility: hidden;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/dashboard2.css?vue&type=style&index=1&id=bde613c8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/dashboard2.css?vue&type=style&index=1&id=bde613c8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*global changes css*/\nbody > .header .logo[data-v-bde613c8] {\r\n    width: 241px;\n}\n.panel[data-v-bde613c8] {\r\n    background: #fff;\r\n    border-radius: 3px;\r\n    margin: 15px 0;\n}\n.panel-heading[data-v-bde613c8] {\r\n    border-bottom: 1px solid #efefef;\n}\r\n\r\n\r\n/*sales chart */\n#sales-chart svg[data-v-bde613c8] {\r\n    height: 350px;\r\n    margin-left: -21px;\r\n    margin-bottom: -9px;\n}\n.chart-header[data-v-bde613c8] {\r\n    color: #555;\r\n    font-size: 24px;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    padding: 0 23px;\n}\n#main-chart[data-v-bde613c8] {\r\n    width: 100%;\n}\n#main-chart .ti-fullscreen[data-v-bde613c8] {\r\n    font-size: 18px;\n}\n#main-chart .dropdown-toggle[data-v-bde613c8]{\r\n    background-color: #fff;\n}\n.dropdown-toggle[data-v-bde613c8]::after{\r\n    display: none !important;\n}\n.statchart-data[data-v-bde613c8] {\r\n    width: 65%;\r\n    float: left;\r\n    color: #999;\r\n    margin-bottom: -26px;\r\n    margin-top: 15px;\n}\n.statchart-data .data[data-v-bde613c8] {\r\n    width: 30%;\r\n    float: left;\r\n    padding-left: 9%;\n}\n.statchart-data .percent[data-v-bde613c8] {\r\n    font-size: 24px;\r\n    color: #777;\n}\n.chart-header .option-more[data-v-bde613c8] {\r\n    font-size: 19px;\r\n    -webkit-transform: rotate(90deg);\r\n    -moz-transform: rotate(90deg);\r\n    -ms-transform: rotate(90deg);\r\n    -o-transform: rotate(90deg);\r\n    transform: rotate(90deg);\r\n    display: inline-block;\n}\n.chart-header .chartoption-menu[data-v-bde613c8] {\r\n    min-width: 100px;\n}\n#sales-chart svg .nv-legendWrap[data-v-bde613c8] {\r\n    pointer-events: none;\n}\n#sales-chart .nvd3 .nv-axis line[data-v-bde613c8] {\r\n    stroke: #f5f5f5;\n}\n#sales-chart .nvd3 .nv-groups .nv-group[data-v-bde613c8] {\r\n    fill-opacity: 1 !important;\n}\r\n\r\n\r\n/*sales chart ends here*/\r\n\r\n\r\n/*users, visits, hits tiles*/\n.main-cards h5[data-v-bde613c8] {\r\n    padding-left: 22px;\r\n    padding-top: 4px;\r\n    color: #555;\n}\n.main-cards p[data-v-bde613c8] {\r\n    padding: 9px 22px 5px 22px;\r\n    color: #555;\r\n    font-size: 24px;\n}\n.main-cards p small[data-v-bde613c8] {\r\n    font-size: 57%;\r\n    font-weight: bold;\n}\n.main-cards .progress-label[data-v-bde613c8] {\r\n    margin-right: 15px;\r\n    color: #29AC6A;\r\n    font-size: 14px;\n}\n.hits-progress[data-v-bde613c8] {\r\n    margin-bottom: 0;\r\n    background-color: #DAF6E8;\n}\n#user-chart canvas[data-v-bde613c8],\r\n#subscriber-chart canvas[data-v-bde613c8] {\r\n    margin-bottom: -3px;\r\n    margin-right: -4px;\n}\r\n\r\n\r\n/*users, visits, hits tiles ends*/\n@media (max-width:1024px){\n.profile-page .designation[data-v-bde613c8]{\r\n        padding-left: 20px !important;\n}\n}\n@media(max-width: 768px){\n.profile-page .about[data-v-bde613c8]{\r\n        margin-top: 5px;\n}\n.follow-link[data-v-bde613c8]{\r\n\r\n        right:45% !important;\n}\n}\r\n\r\n\r\n/*server load*/\n.server-load h4[data-v-bde613c8] {\r\n    font-weight: bold;\r\n    color: #777;\n}\r\n\r\n\r\n/*social networks*/\n.social .twitter[data-v-bde613c8] {\r\n    background-color: #1da1f2;\r\n    height: 77px;\r\n    padding-top: 13px;\n}\n.social .twitter i[data-v-bde613c8],\r\n.social .facebook i[data-v-bde613c8] {\r\n    color: #fff;\r\n    font-size: 50px;\r\n    vertical-align: middle;\n}\n.social .twitter i[data-v-bde613c8]:hover,\r\n.social .facebook i[data-v-bde613c8]:hover {\r\n    display: inline-block;\r\n    font-size: 60px;\r\n    -moz-transform: translate3d(0px, -7px, 0px);\r\n    -ms-transform: translate3d(0px, -7px, 0px);\r\n    -o-transform: translate3d(0px, -7px, 0px);\r\n    transform: translate3d(0px, -7px, 0px);\r\n    transition: transform .2s ease-in-out;\n}\n.social .facebook[data-v-bde613c8] {\r\n    background-color: #3b5998;\r\n    height: 77px;\r\n    padding-top: 13px;\r\n    width: 100%;\n}\n.social .info-1[data-v-bde613c8],\r\n.social .info-2[data-v-bde613c8] {\r\n    font-weight: bold;\r\n    color: #777;\n}\n.social .info-1 p[data-v-bde613c8],\r\n.social .info-2 p[data-v-bde613c8] {\r\n    color: #999;\n}\n.social .info-1[data-v-bde613c8] {\r\n    padding-left: 15px;\n}\n.social .info-2[data-v-bde613c8] {\r\n    padding-right: 17px;\n}\n.social .info-1 h3[data-v-bde613c8],\r\n.social .info-2 h3[data-v-bde613c8] {\r\n    font-weight: bold;\r\n    margin-bottom: 3px;\r\n    margin-top: 20px;\n}\r\n\r\n\r\n/*media queries*/\n@media screen and (max-width: 560px) {\n.rightsidebar-right .rightsidebar-right-content[data-v-bde613c8] {\r\n        padding-top: 103px;\n}\n.profile-page .profile-pic[data-v-bde613c8] {\r\n        width: 95px;\r\n        height: 95px;\r\n        margin-top: -58px;\n}\n.profile-page .cover-image .profile-name[data-v-bde613c8] {\r\n        left: 148px;\n}\n.profile-page .about .brief[data-v-bde613c8] {\r\n        height: 150px;\n}\nbody > .header .logo[data-v-bde613c8],\r\n    body > .header .navbar[data-v-bde613c8] {\r\n        width: 100%;\n}\n}\n@media screen and (max-width: 680px) {\n.statchart-data[data-v-bde613c8] {\r\n        width: 100%;\r\n        margin-bottom: 0;\n}\n}\n@media screen and (max-width: 767px) {\n.profile-page .about .brief[data-v-bde613c8] {\r\n        border-left: 0;\r\n        padding: 5px 35px;\n}\n.profile-page .cover-image .profile-name[data-v-bde613c8] {\r\n        top: 88px;\n}\n.profile-page .cover-image .follow-link[data-v-bde613c8] {\r\n        top: 127px;\n}\n.profile-page .about .brief[data-v-bde613c8]:before {\r\n        visibility: hidden;\n}\n}\n@media (max-width: 320px){\n.profile-page .cover-image .follow-link[data-v-bde613c8] {\r\n        top: 120px;\n}\n}\n@media(max-width:1024px){\n.boxed .about .designation[data-v-bde613c8]{\r\n        padding-left: 13px !important;\r\n        padding-right: 5px !important;\n}\n.boxed .cover-image .follow-link[data-v-bde613c8]{\r\n        right: 5px !important;\n}\n.boxed .about .brief h4[data-v-bde613c8]{\r\n        margin-left: 15px;\n}\n}\r\n/*dashboard 2*/\n.boxed .weather-footer .popup[data-v-bde613c8]{\r\n    padding-left: 0px;\r\n    padding-right: 0px;\n}\n.boxed .main-cards .card p[data-v-bde613c8]{\r\n    padding-left: 19px;\r\n    padding-right: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/imports-loader/index.js?amcharts3=./node_modules/amcharts3/amcharts/amcharts.js!./":
/*!*********************************************************************************************!*\
  !*** ./node_modules/imports-loader?amcharts3=./node_modules/amcharts3/amcharts/amcharts.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var amcharts3 = __webpack_require__(/*! ./node_modules/amcharts3/amcharts/amcharts.js */ "./node_modules/amcharts3/amcharts/amcharts.js");

null


/***/ }),

/***/ "./node_modules/imports-loader/index.js?screenfull=./node_modules/screenfull/dist/screenfull.js!./":
/*!*********************************************************************************************!*\
  !*** ./node_modules/imports-loader?screenfull=./node_modules/screenfull/dist/screenfull.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var screenfull = __webpack_require__(/*! ./node_modules/screenfull/dist/screenfull.js */ "./node_modules/screenfull/dist/screenfull.js");

null


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=style&index=0&id=7cf0639b&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=style&index=0&id=7cf0639b&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./device.vue?vue&type=style&index=0&id=7cf0639b&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=style&index=0&id=7cf0639b&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=style&index=1&id=6ffb9760&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=style&index=1&id=6ffb9760&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feeds.vue?vue&type=style&index=1&id=6ffb9760&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=style&index=1&id=6ffb9760&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=style&index=0&id=efd0b92c&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=style&index=0&id=efd0b92c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profile_page.vue?vue&type=style&index=0&id=efd0b92c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=style&index=0&id=efd0b92c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=style&index=0&id=825f2ac8&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=style&index=0&id=825f2ac8&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./recent_activities.vue?vue&type=style&index=0&id=825f2ac8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=style&index=0&id=825f2ac8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=style&index=0&id=b74c2f26&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=style&index=0&id=b74c2f26&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./server_load.vue?vue&type=style&index=0&id=b74c2f26&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=style&index=0&id=b74c2f26&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=style&index=0&id=ea34c62e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=style&index=0&id=ea34c62e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./todolist.vue?vue&type=style&index=0&id=ea34c62e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=style&index=0&id=ea34c62e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=style&index=1&id=f17c4f02&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=style&index=1&id=f17c4f02&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./weather.vue?vue&type=style&index=1&id=f17c4f02&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=style&index=1&id=f17c4f02&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/index2.vue?vue&type=style&index=2&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/index2.vue?vue&type=style&index=2&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./index2.vue?vue&type=style&index=2&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/index2.vue?vue&type=style&index=2&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/dashboard2.css?vue&type=style&index=1&id=bde613c8&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/dashboard2.css?vue&type=style&index=1&id=bde613c8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./dashboard2.css?vue&type=style&index=1&id=bde613c8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/dashboard2.css?vue&type=style&index=1&id=bde613c8&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=template&id=7cf0639b&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=template&id=7cf0639b&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "app" } },
    [
      _c(
        "fullscreen",
        { ref: "fullscreen", on: { change: _vm.fullscreenChange } },
        [
          _vm.cardhide
            ? _c(
                "b-card-group",
                { attrs: { deck: "", id: "deviceload" } },
                [
                  _c("b-card", { style: _vm.cardstyles }, [
                    _vm.cardstatus
                      ? _c("div", [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../../img/loader.gif */ "./resources/img/loader.gif"),
                              alt: "image missing"
                            }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "card-header",
                        attrs: { id: "dropdown-card" }
                      },
                      [
                        _c("h3", { staticClass: "card-title" }, [
                          _vm._v(" Device Separations")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c(
                              "b-dropdown",
                              {
                                attrs: {
                                  variant: "link",
                                  size: "lg",
                                  "no-caret": ""
                                }
                              },
                              [
                                _c("template", { slot: "button-content" }, [
                                  _c(
                                    "span",
                                    { staticClass: "device-header-noti-icon" },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-ellipsis-v",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "sr-only" }, [
                                    _vm._v("Search")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "b-dropdown-item",
                                      {
                                        attrs: { href: "#" },
                                        on: { click: _vm.toggle }
                                      },
                                      [
                                        _c("span", { staticClass: "pr-3" }, [
                                          _c("i", {
                                            staticClass: "fa fa-arrows-alt"
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("span", [_vm._v("Full Screen")])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown-item",
                                      {
                                        attrs: { href: "#" },
                                        on: { click: _vm.myReload }
                                      },
                                      [
                                        _c("span", { staticClass: "pr-3" }, [
                                          _c("i", {
                                            staticClass: "fa fa-refresh"
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("span", [_vm._v("Reload")])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown-item",
                                      {
                                        attrs: { href: "#" },
                                        on: { click: _vm.notificationClose }
                                      },
                                      [
                                        _c("span", { staticClass: "pr-3 " }, [
                                          _c("i", {
                                            staticClass: "fa fa-close"
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("span", [_vm._v("Close")])
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "card-text", attrs: { id: "doughchart" } },
                      [
                        _c(
                          "div",
                          { staticClass: "col-7 mx-auto" },
                          [
                            _c("chartjs-doughnut", {
                              attrs: {
                                width: _vm.mywidth,
                                height: _vm.myheight,
                                scalesdisplay: false,
                                datasets: _vm.mydatasets,
                                labels: ["Computer", "Mobile", "Tablets"],
                                option: _vm.myoption
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-4 text-center px-0" },
                            [
                              _c("b-badge", [
                                _c("i", {
                                  staticClass: "fa fa-circle text-primary fa-2x"
                                })
                              ]),
                              _c("span", {}, [_vm._v("Computer")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-4 text-center " },
                            [
                              _c("b-badge", [
                                _c("i", {
                                  staticClass: "fa fa-circle text-mobile fa-2x"
                                })
                              ]),
                              _c("span", {}, [_vm._v("Mobile")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-4 text-center " },
                            [
                              _c("b-badge", [
                                _c("i", {
                                  staticClass: "fa fa-circle text-tablet fa-2x"
                                })
                              ]),
                              _c("span", {}, [_vm._v("Tablets")])
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ])
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=template&id=6ffb9760&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=template&id=6ffb9760&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "row" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "tile_2" }, [
          _c("div", { staticClass: "list-tile" }, [
            _c(
              "ul",
              {
                staticClass: "flip-list fourTiles",
                attrs: { "data-mode": "flip-list", "data-delay": "2000" }
              },
              [
                _c("li", [
                  _c("div", [
                    _c("img", {
                      staticClass: "full",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../img/profile-pic.jpg */ "./resources/img/profile-pic.jpg"),
                        alt: "1"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("img", {
                      staticClass: "full",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../img/authors/avatar.jpg */ "./resources/img/authors/avatar.jpg"),
                        alt: "1"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("li", { attrs: { "data-direction": "horizontal" } }, [
                  _c("div", [
                    _c("img", {
                      staticClass: "full",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../img/authors/avatar2.jpg */ "./resources/img/authors/avatar2.jpg"),
                        alt: "2"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("img", {
                      staticClass: "full",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../img/authors/avatar3.jpg */ "./resources/img/authors/avatar3.jpg"),
                        alt: "2"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("li", { attrs: { "data-direction": "horizontal" } }, [
                  _c("div", [
                    _c("img", {
                      staticClass: "full",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../img/authors/avatar4.jpg */ "./resources/img/authors/avatar4.jpg"),
                        alt: "3"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("img", {
                      staticClass: "full",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../img/authors/avatar5.jpg */ "./resources/img/authors/avatar5.jpg"),
                        alt: "3"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("div", [
                    _c("img", {
                      staticClass: "full",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../img/authors/avatar6.jpg */ "./resources/img/authors/avatar6.jpg"),
                        alt: "4"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("img", {
                      staticClass: "full",
                      attrs: {
                        src: __webpack_require__(/*! ../../../../img/authors/avatar7.jpg */ "./resources/img/authors/avatar7.jpg"),
                        alt: "4"
                      }
                    })
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "tile_1" }, [
        _c(
          "div",
          {
            staticClass: "live-tile",
            attrs: {
              "data-mode": "carousel",
              "data-direction": "vertical",
              "data-delay": "2500"
            }
          },
          [
            _c("span", { staticClass: "tile-title feed-title" }, [
              _vm._v("Feeds")
            ]),
            _vm._v(" "),
            _c("div", [
              _c("h5", { staticClass: "full" }, [
                _vm._v(
                  " It is a long established fact that a reader will be\n                            distracted."
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "tile-title tile-time" }, [
                _vm._v("17 min ago")
              ])
            ]),
            _vm._v(" "),
            _c("div", [
              _c("h5", { staticClass: "full" }, [
                _vm._v(
                  " Many desktop publishing packages and web page\n                            editors."
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "tile-title tile-time" }, [
                _vm._v("40 min ago")
              ])
            ]),
            _vm._v(" "),
            _c("div", [
              _c("h5", { staticClass: "full" }, [
                _vm._v(
                  " Richard McClintock, a Latin Trainer at\n                            Hampden-Sydney."
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "tile-title tile-time" }, [
                _vm._v("yesterday at 4pm")
              ])
            ]),
            _vm._v(" "),
            _c("div", [
              _c("h5", { staticClass: "full" }, [
                _vm._v(
                  " There are many variations of passages of Lorem Ipsum\n                            available."
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "tile-title tile-time" }, [
                _vm._v("Dec 4")
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=template&id=efd0b92c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=template&id=efd0b92c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card profile-page" }, [
    _c(
      "div",
      {
        staticClass: "cover-image",
        style: {
          backgroundImage:
            "url(" +
            _vm.images[Math.abs(_vm.currentNumber) % _vm.images.length] +
            ")"
        }
      },
      [
        _c(
          "a",
          { staticClass: "btn change_pic prev_pic", on: { click: _vm.prev } },
          [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! ../../../../img/prev.png */ "./resources/img/prev.png"),
                alt: "previous"
              }
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn change_pic next_pic float-right",
            on: { click: _vm.next }
          },
          [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! ../../../../img/next.png */ "./resources/img/next.png"),
                alt: "previous"
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "profile-name" }, [
          _c("b", [
            _vm._v(
              _vm._s(
                _vm.profile_name[
                  Math.abs(_vm.currentNumber) % _vm.profile_name.length
                ]
              )
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(0)
      ]
    ),
    _vm._v(" "),
    _c("div", {
      staticClass: "profile-pic",
      style: {
        backgroundImage:
          "url(" +
          _vm.profile_pic[
            Math.abs(_vm.currentNumber) % _vm.profile_pic.length
          ] +
          ")"
      }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "about" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-4 designation text-center" }, [
          _c("h5", { staticClass: "mt-lg-1" }, [
            _vm._v(
              "\n                    " +
                _vm._s(
                  _vm.desig[Math.abs(_vm.currentNumber) % _vm.desig.length]
                ) +
                "\n                    "
            ),
            _c("br", { staticClass: "hidden-xs" }),
            _vm._v(
              "\n                    " +
                _vm._s(
                  _vm.desigtag[
                    Math.abs(_vm.currentNumber) % _vm.desigtag.length
                  ]
                ) +
                "\n                "
            )
          ]),
          _vm._v(" "),
          _vm._m(1)
        ]),
        _vm._v(" "),
        _vm._m(2)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "follow-link" }, [
      _c(
        "a",
        { staticClass: "btn btn-sm", attrs: { href: "javascript:void(0)" } },
        [_vm._v("+ Follow")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c(
        "a",
        {
          staticClass: "btn btn-sm button-pill new-task",
          attrs: { href: "javascript:void(0)" }
        },
        [_vm._v("New Task +")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-8 brief" }, [
      _c("h4", [_vm._v("About")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.deserunt eveniet facilis possimus, omnis porro possimus rem repellat"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=template&id=825f2ac8&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=template&id=825f2ac8&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("h3", { staticClass: "card-title" }, [_vm._v("Recent Activities")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("ul", { staticClass: "schedule-cont" }, [
          _c("li", { staticClass: "item success" }, [
            _c("div", { staticClass: "data" }, [
              _c("div", { staticClass: "time text-muted" }, [
                _vm._v(" Just now")
              ]),
              _vm._v(" "),
              _c("p", [
                _c("span", { staticClass: "text-info" }, [_vm._v("Jade")]),
                _vm._v(
                  " Project team has successfully completed\n                        their\n                        first phase."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "item danger" }, [
            _c("div", { staticClass: "data" }, [
              _c("div", { staticClass: "time text-muted" }, [
                _vm._v(" 7min ago")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v("Tinder Project's "),
                _c("span", { staticClass: "text-info" }, [_vm._v("Second")]),
                _vm._v(" review has completed.\n                    ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "item" }, [
            _c("div", { staticClass: "data" }, [
              _c("div", { staticClass: "time text-muted" }, [
                _vm._v("5hours ago")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Richard McClintock, updated his project over view report."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "item success" }, [
            _c("div", { staticClass: "data" }, [
              _c("div", { staticClass: "time text-muted" }, [
                _vm._v(" Yesterday")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v("Variations Project "),
                _c("span", { staticClass: "text-info" }, [
                  _vm._v("Evaluation")
                ]),
                _vm._v(
                  " is going on to\n                        highlight\n                        the project success ."
                )
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=template&id=b74c2f26&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=template&id=b74c2f26&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "app" } },
    [
      _c(
        "fullscreen",
        { ref: "fullscreen", on: { change: _vm.fullscreenChange } },
        [
          _vm.cardhide
            ? _c(
                "b-card-group",
                { attrs: { deck: "", id: "serverload" } },
                [
                  _c("b-card", { style: _vm.cardstyles }, [
                    _vm.cardstatus
                      ? _c("div", [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(/*! ../../../../img/loader.gif */ "./resources/img/loader.gif"),
                              alt: "image missing"
                            }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "card-header",
                        attrs: { id: "dropdown-card" }
                      },
                      [
                        _c("h3", { staticClass: "card-title" }, [
                          _vm._v(" Server Load")
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-dropdown",
                          {
                            attrs: {
                              variant: "link",
                              size: "lg",
                              "no-caret": ""
                            }
                          },
                          [
                            _c("template", { slot: "button-content" }, [
                              _c(
                                "span",
                                {
                                  staticClass: "header-noti-icon",
                                  on: { click: _vm.menuOption }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-ellipsis-v",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Search")
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c(
                                  "b-dropdown-item",
                                  {
                                    attrs: { href: "#" },
                                    on: { click: _vm.toggle }
                                  },
                                  [
                                    _c("span", { staticClass: "pr-3" }, [
                                      _c("i", {
                                        staticClass: "fa fa-arrows-alt"
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Full Screen")])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        return _vm.myReload(this)
                                      }
                                    }
                                  },
                                  [
                                    _c("span", { staticClass: "pr-3" }, [
                                      _c("i", { staticClass: "fa fa-refresh" })
                                    ]),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Reload")])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-dropdown-item",
                                  {
                                    attrs: { href: "#" },
                                    on: { click: _vm.notificationClose }
                                  },
                                  [
                                    _c("span", { staticClass: "pr-3" }, [
                                      _c("i", { staticClass: "fa fa-close" })
                                    ]),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Close")])
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          2
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-text" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-6 col-6" }, [
                          _c("span", [_vm._v("Space")]),
                          _vm._v(" "),
                          _c("div", [
                            _c("span", { staticClass: "text-info text-size" }, [
                              _vm._v("98GB")
                            ]),
                            _c("span", { staticClass: "text-primary" }, [
                              _vm._v(" / 124GB")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-6 col-6  text-right" },
                          [
                            _c("span", [_vm._v("Bandwidth")]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "span",
                                { staticClass: "text-danger text-size" },
                                [_vm._v("512MB")]
                              ),
                              _c("span", { staticClass: "text-primary" }, [
                                _vm._v(" / 1024MB")
                              ])
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 px-0" }, [
                        _c("div", {
                          staticClass: "server-load-chart",
                          staticStyle: { width: "100%", height: "400px" },
                          attrs: { id: "chartdiv" }
                        })
                      ])
                    ])
                  ])
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=template&id=ea34c62e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=template&id=ea34c62e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "form",
            {
              staticClass: "col s6 offset-s3",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submitTodo($event)
                }
              }
            },
            [
              _c("div", { staticClass: "input-field" }, [
                _c("i", { staticClass: "material-icons prefix" }, [
                  _vm._v("list")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newTodo,
                      expression: "newTodo"
                    }
                  ],
                  staticClass: "materialize-textarea",
                  attrs: { id: "icon_prefix2" },
                  domProps: { value: _vm.newTodo },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.newTodo = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "icon_prefix2" } }, [
                  _vm._v("What to do?")
                ])
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "btn waves-effect col s12" }, [
                _vm._v("Add")
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { attrs: { id: "to-list" } }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "ul",
              { staticClass: "collection col s6 offset-s3" },
              [
                _vm._m(1),
                _vm._v(" "),
                _vm._l(_vm.todos, function(todo) {
                  return _c("li", { staticClass: "collection-item" }, [
                    _c("p", [
                      _c("label", [
                        _c("input", {
                          attrs: { type: "checkbox" },
                          domProps: { checked: todo.done },
                          on: {
                            change: function($event) {
                              todo.done = !todo.done
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(todo.title))]),
                        _vm._v(" "),
                        _c("span", [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.deleteTodo(todo)
                                }
                              }
                            },
                            [
                              _c(
                                "i",
                                {
                                  staticClass: "material-icons right teal-text"
                                },
                                [_vm._v("delete")]
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                })
              ],
              2
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "card-title" }, [
        _vm._v("Todo List\n\n            ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "collection-item", attrs: { "data-v-767e2d2a": "" } },
      [
        _c("p", { attrs: { "data-v-767e2d2a": "" } }, [
          _c("label", { attrs: { "data-v-767e2d2a": "" } }, [
            _c("input", { attrs: { "data-v-767e2d2a": "", type: "checkbox" } }),
            _vm._v(" "),
            _c("span", { attrs: { "data-v-767e2d2a": "" } }, [
              _vm._v("Create Menu")
            ]),
            _vm._v(" "),
            _c("span", { attrs: { "data-v-767e2d2a": "" } }, [
              _c("a", { attrs: { "data-v-767e2d2a": "" } }, [
                _c(
                  "i",
                  {
                    staticClass: "material-icons right teal-text",
                    attrs: { "data-v-767e2d2a": "" }
                  },
                  [_vm._v("delete")]
                )
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=template&id=f17c4f02&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=template&id=f17c4f02&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card weather-widget" }, [
      _c("div", { staticClass: "row weather-data" }, [
        _c("div", { staticClass: "col-md-12 temperature" }, [
          _c("h2", [
            _c("i", { staticClass: "wi wi-day-cloudy icon" }),
            _c("span", { staticClass: "float-right" }, [
              _vm._v("19"),
              _c("sup", [_c("sup", [_vm._v("o")])]),
              _vm._v("c "),
              _c("br"),
              _c("span", { staticClass: "location" }, [
                _c("i", {
                  staticClass: "ti-location-pin text-default",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v("\n                                London, UK")
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "weather-footer" }, [
        _c("div", { staticClass: "text-center row ml-0 mr-0" }, [
          _c("div", { staticClass: "col-2 popup" }, [
            _c("h5", [_vm._v("MON")]),
            _vm._v(" "),
            _c("i", { staticClass: "wi wi-day-lightning" }),
            _vm._v(" "),
            _c("p", [_vm._v("21°c")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-2 popup" }, [
            _c("h5", [_vm._v("TUE")]),
            _vm._v(" "),
            _c("i", { staticClass: "wi wi-cloudy" }),
            _vm._v(" "),
            _c("p", [_vm._v("28°c")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-2 popup" }, [
            _c("h5", [_vm._v("WED")]),
            _vm._v(" "),
            _c("i", { staticClass: "wi wi-night-rain-mix" }),
            _vm._v(" "),
            _c("p", [_vm._v("26°c")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-2 popup" }, [
            _c("h5", [_vm._v("THU")]),
            _vm._v(" "),
            _c("i", { staticClass: "wi wi-day-sunny" }),
            _vm._v(" "),
            _c("p", [_vm._v("31°c")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-2 popup" }, [
            _c("h5", [_vm._v("FRI")]),
            _vm._v(" "),
            _c("i", { staticClass: "wi wi-day-lightning" }),
            _vm._v(" "),
            _c("p", [_vm._v("24°c")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-2 popup" }, [
            _c("h5", [_vm._v("SAT")]),
            _vm._v(" "),
            _c("i", { staticClass: "wi wi-night-alt-snow" }),
            _vm._v(" "),
            _c("p", [_vm._v("25°c")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/index2.vue?vue&type=template&id=bde613c8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/index2.vue?vue&type=template&id=bde613c8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          {
            staticClass: "card",
            staticStyle: { width: "100%" },
            attrs: { id: "main-chart" }
          },
          [
            _c("div", { staticClass: "chart-header" }, [
              _vm._v("Recent Stats\n                    "),
              _c(
                "div",
                { staticClass: "btn-group float-right" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "b-dd",
                    { staticClass: "content-menu bg-light" },
                    [
                      _c("template", { slot: "button-content" }, [
                        _c("i", { staticClass: "ti-more-alt more option-more" })
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", { staticClass: "content-header" }, [
                        _vm._v(
                          "\n                                Vue\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", { staticClass: "content-header" }, [
                        _vm._v(
                          "\n                                Update\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", { staticClass: "content-header" }, [
                        _vm._v(
                          "\n                                Settings\n                            "
                        )
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "with-3d-shadow with-transitions",
                attrs: { id: "sales-chart" }
              },
              [_c("svg")]
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-6" }, [_c("profile_page")], 1),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6" }, [_c("weather")], 1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-7 col-sm-7 col-xl-4" },
        [_c("recent_activities")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-sm-5 col-lg-5 col-xl-3" },
        [_c("feeds")],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-12 col-lg-12 col-xl-5" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "server-load text-center" },
                  [
                    _c("circle-slider", {
                      attrs: {
                        "circle-width": 8,
                        "progress-width": 9,
                        "knob-radius": 4.5,
                        "progress-color": "#418AC9",
                        "knob-color": "#418AC9",
                        "circle-color": "#edeff0"
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
                    _c("div", { staticClass: "circle_number text-primary" }, [
                      _vm._v(_vm._s(_vm.val5) + "%")
                    ]),
                    _vm._v(" "),
                    _c("h4", [_vm._v("CPU-LOAD")])
                  ],
                  1
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "server-load text-center" },
                  [
                    _c("circle-slider", {
                      attrs: {
                        "circle-width": 8,
                        "progress-width": 9,
                        "knob-radius": 4.5,
                        "progress-color": "#66cc99",
                        "knob-color": "#66cc99",
                        "circle-color": "#edeff0"
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
                    _c("div", { staticClass: "circle_number text-success" }, [
                      _vm._v(_vm._s(_vm.val5) + "%")
                    ]),
                    _vm._v(" "),
                    _c("h4", [_vm._v("DISC-SPACE")])
                  ],
                  1
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _vm._m(4)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-xl-4 col-lg-6 col-12" },
        [_c("VueServerLoad")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-4 col-lg-6 col-12" },
        [_c("VueDevice")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-xl-4 col-lg-6 col-12 mt-2",
          attrs: { id: "todolist" }
        },
        [_c("todolist")],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { attrs: { id: "fullscreen-toggle", role: "button" } }, [
      _c("small", [_c("i", { staticClass: "ti-fullscreen" })])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "statchart-data" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "data text-center" }, [
          _c("span", { staticClass: "percent" }, [_vm._v(" 19%")]),
          _vm._v(" "),
          _c("br", { staticClass: "hidden-sm hidden-md hidden-lg" }),
          _vm._v(" "),
          _c("span", [_vm._v("Orders")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "data text-center" }, [
          _c("span", { staticClass: "percent" }, [_vm._v("23%")]),
          _vm._v(" "),
          _c("br", { staticClass: "hidden-sm hidden-md hidden-lg" }),
          _vm._v(" "),
          _c("span", [_vm._v("Sales")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "data text-center" }, [
          _c("span", { staticClass: "percent" }, [_vm._v("12%")]),
          _vm._v(" "),
          _c("br", { staticClass: "hidden-sm hidden-md hidden-lg" }),
          _vm._v(" "),
          _c("span", [_vm._v("Support")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row main-cards" }, [
      _c("div", { staticClass: "col-md-3 col-sm-6" }, [
        _c("div", { staticClass: "card" }, [
          _c("h5", [_c("b", [_vm._v("New Users")])]),
          _vm._v(" "),
          _c("p", [
            _vm._v("14,205\n                    "),
            _c("small", [_vm._v("Last month")])
          ]),
          _vm._v(" "),
          _c("span", { attrs: { id: "user-chart" } })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3 col-sm-6" }, [
        _c("div", { staticClass: "card" }, [
          _c("h5", [_c("b", [_vm._v("Revenue")])]),
          _vm._v(" "),
          _c("p", [
            _vm._v("$56,180\n                    "),
            _c("small", [_vm._v("Target")])
          ]),
          _vm._v(" "),
          _c("span", { attrs: { id: "mr-chart" } })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix hidden-md hidden-lg" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3 col-sm-6" }, [
        _c("div", { staticClass: "card" }, [
          _c("h5", [_c("b", [_vm._v("Hits")])]),
          _vm._v(" "),
          _c("p", [
            _vm._v("24,525\n                    "),
            _c("small", [_vm._v("Reached")])
          ]),
          _vm._v(" "),
          _c("h6", [
            _c("span", { staticClass: "float-right progress-label" }, [
              _c("b", [_vm._v("6")]),
              _c("small", [_vm._v("%")]),
              _vm._v(" "),
              _c("i", { staticClass: "ti-stats-up" })
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "progress progress-xs progress-striped active hits-progress"
            },
            [
              _c("div", {
                staticClass: "progress-bar progress-bar-success",
                staticStyle: { width: "40%" },
                attrs: {
                  role: "progressbar",
                  "aria-valuenow": "40",
                  "aria-valuemin": "0",
                  "aria-valuemax": "100"
                }
              })
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3 col-sm-6" }, [
        _c("div", { staticClass: "card" }, [
          _c("h5", [_c("b", [_vm._v("Subscribers")])]),
          _vm._v(" "),
          _c("p", [
            _vm._v("8,958\n                    "),
            _c("small", [_vm._v("Quarterly")])
          ]),
          _vm._v(" "),
          _c("span", { attrs: { id: "subscriber-chart" } })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("div", { staticClass: "card mt-3" }, [
        _c("div", { staticClass: "social" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "twitter text-center" }, [
                _c("i", { staticClass: "ti-twitter-alt" })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _c("div", { staticClass: "info-1 text-center" }, [
                _c("h3", [_vm._v("27k")]),
                _vm._v(" "),
                _c("p", [_vm._v("Tweets")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _c("div", { staticClass: "info-2 text-center" }, [
                _c("h3", [_vm._v("9.2k")]),
                _vm._v(" "),
                _c("p", [_vm._v("followers")])
              ])
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
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("div", { staticClass: "card mt-3" }, [
        _c("div", { staticClass: "social" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "facebook text-center" }, [
                _c("i", { staticClass: "ti-facebook" })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6 text-center" }, [
              _c("div", { staticClass: "info-1" }, [
                _c("h3", [_vm._v("31k")]),
                _vm._v(" "),
                _c("p", [_vm._v("Likes")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6 text-center" }, [
              _c("div", { staticClass: "info-2" }, [
                _c("h3", [_vm._v("12k")]),
                _vm._v(" "),
                _c("p", [_vm._v("feeds")])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/device.vue":
/*!***********************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/device.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _device_vue_vue_type_template_id_7cf0639b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device.vue?vue&type=template&id=7cf0639b&scoped=true& */ "./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=template&id=7cf0639b&scoped=true&");
/* harmony import */ var _device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device.vue?vue&type=script&lang=js& */ "./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _device_vue_vue_type_style_index_0_id_7cf0639b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./device.vue?vue&type=style&index=0&id=7cf0639b&scoped=true&lang=css& */ "./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=style&index=0&id=7cf0639b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _device_vue_vue_type_custom_index_0_blockType_link_rel_stylesheet_href_https_3A_2F_2Fwww_amcharts_com_2Flib_2F3_2Fplugins_2Fexport_2Fexport_css_media_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device.vue?vue&type=custom&index=0&blockType=link&rel=stylesheet&href=https%3A%2F%2Fwww.amcharts.com%2Flib%2F3%2Fplugins%2Fexport%2Fexport.css&media=all */ "./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=custom&index=0&blockType=link&rel=stylesheet&href=https%3A%2F%2Fwww.amcharts.com%2Flib%2F3%2Fplugins%2Fexport%2Fexport.css&media=all");
/* harmony import */ var _device_vue_vue_type_custom_index_0_blockType_link_rel_stylesheet_href_https_3A_2F_2Fwww_amcharts_com_2Flib_2F3_2Fplugins_2Fexport_2Fexport_css_media_all__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_device_vue_vue_type_custom_index_0_blockType_link_rel_stylesheet_href_https_3A_2F_2Fwww_amcharts_com_2Flib_2F3_2Fplugins_2Fexport_2Fexport_css_media_all__WEBPACK_IMPORTED_MODULE_4__);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _device_vue_vue_type_template_id_7cf0639b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _device_vue_vue_type_template_id_7cf0639b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7cf0639b",
  null
  
)

/* custom blocks */

if (typeof _device_vue_vue_type_custom_index_0_blockType_link_rel_stylesheet_href_https_3A_2F_2Fwww_amcharts_com_2Flib_2F3_2Fplugins_2Fexport_2Fexport_css_media_all__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') _device_vue_vue_type_custom_index_0_blockType_link_rel_stylesheet_href_https_3A_2F_2Fwww_amcharts_com_2Flib_2F3_2Fplugins_2Fexport_2Fexport_css_media_all__WEBPACK_IMPORTED_MODULE_4___default()(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dashboard/dashboard_two/device.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=custom&index=0&blockType=link&rel=stylesheet&href=https%3A%2F%2Fwww.amcharts.com%2Flib%2F3%2Fplugins%2Fexport%2Fexport.css&media=all":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=custom&index=0&blockType=link&rel=stylesheet&href=https%3A%2F%2Fwww.amcharts.com%2Flib%2F3%2Fplugins%2Fexport%2Fexport.css&media=all ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./device.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=style&index=0&id=7cf0639b&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=style&index=0&id=7cf0639b&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_style_index_0_id_7cf0639b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./device.vue?vue&type=style&index=0&id=7cf0639b&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=style&index=0&id=7cf0639b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_style_index_0_id_7cf0639b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_style_index_0_id_7cf0639b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_style_index_0_id_7cf0639b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_style_index_0_id_7cf0639b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_style_index_0_id_7cf0639b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=template&id=7cf0639b&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=template&id=7cf0639b&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_template_id_7cf0639b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./device.vue?vue&type=template&id=7cf0639b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/device.vue?vue&type=template&id=7cf0639b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_template_id_7cf0639b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_template_id_7cf0639b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/feeds.vue":
/*!**********************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/feeds.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feeds_vue_vue_type_template_id_6ffb9760_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feeds.vue?vue&type=template&id=6ffb9760&scoped=true& */ "./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=template&id=6ffb9760&scoped=true&");
/* harmony import */ var _feeds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feeds.vue?vue&type=script&lang=js& */ "./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var metrojs_release_MetroJs_Full_MetroJs_min_css_vue_type_style_index_0_id_6ffb9760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! metrojs/release/MetroJs.Full/MetroJs.min.css?vue&type=style&index=0&id=6ffb9760&scoped=true&lang=css& */ "./node_modules/metrojs/release/MetroJs.Full/MetroJs.min.css?vue&type=style&index=0&id=6ffb9760&scoped=true&lang=css&");
/* harmony import */ var _feeds_vue_vue_type_style_index_1_id_6ffb9760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feeds.vue?vue&type=style&index=1&id=6ffb9760&scoped=true&lang=css& */ "./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=style&index=1&id=6ffb9760&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _feeds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _feeds_vue_vue_type_template_id_6ffb9760_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _feeds_vue_vue_type_template_id_6ffb9760_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6ffb9760",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dashboard/dashboard_two/feeds.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feeds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feeds.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feeds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=style&index=1&id=6ffb9760&scoped=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=style&index=1&id=6ffb9760&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feeds_vue_vue_type_style_index_1_id_6ffb9760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feeds.vue?vue&type=style&index=1&id=6ffb9760&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=style&index=1&id=6ffb9760&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feeds_vue_vue_type_style_index_1_id_6ffb9760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feeds_vue_vue_type_style_index_1_id_6ffb9760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feeds_vue_vue_type_style_index_1_id_6ffb9760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feeds_vue_vue_type_style_index_1_id_6ffb9760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feeds_vue_vue_type_style_index_1_id_6ffb9760_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=template&id=6ffb9760&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=template&id=6ffb9760&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feeds_vue_vue_type_template_id_6ffb9760_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feeds.vue?vue&type=template&id=6ffb9760&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/feeds.vue?vue&type=template&id=6ffb9760&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feeds_vue_vue_type_template_id_6ffb9760_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feeds_vue_vue_type_template_id_6ffb9760_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/profile_page.vue":
/*!*****************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/profile_page.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_page_vue_vue_type_template_id_efd0b92c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile_page.vue?vue&type=template&id=efd0b92c&scoped=true& */ "./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=template&id=efd0b92c&scoped=true&");
/* harmony import */ var _profile_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile_page.vue?vue&type=script&lang=js& */ "./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _profile_page_vue_vue_type_style_index_0_id_efd0b92c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile_page.vue?vue&type=style&index=0&id=efd0b92c&scoped=true&lang=css& */ "./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=style&index=0&id=efd0b92c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _profile_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_page_vue_vue_type_template_id_efd0b92c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profile_page_vue_vue_type_template_id_efd0b92c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "efd0b92c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dashboard/dashboard_two/profile_page.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profile_page.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=style&index=0&id=efd0b92c&scoped=true&lang=css&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=style&index=0&id=efd0b92c&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_style_index_0_id_efd0b92c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profile_page.vue?vue&type=style&index=0&id=efd0b92c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=style&index=0&id=efd0b92c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_style_index_0_id_efd0b92c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_style_index_0_id_efd0b92c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_style_index_0_id_efd0b92c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_style_index_0_id_efd0b92c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_style_index_0_id_efd0b92c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=template&id=efd0b92c&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=template&id=efd0b92c&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_template_id_efd0b92c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./profile_page.vue?vue&type=template&id=efd0b92c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/profile_page.vue?vue&type=template&id=efd0b92c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_template_id_efd0b92c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_page_vue_vue_type_template_id_efd0b92c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/recent_activities.vue":
/*!**********************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/recent_activities.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recent_activities_vue_vue_type_template_id_825f2ac8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recent_activities.vue?vue&type=template&id=825f2ac8&scoped=true& */ "./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=template&id=825f2ac8&scoped=true&");
/* harmony import */ var _recent_activities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recent_activities.vue?vue&type=script&lang=js& */ "./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _recent_activities_vue_vue_type_style_index_0_id_825f2ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recent_activities.vue?vue&type=style&index=0&id=825f2ac8&scoped=true&lang=css& */ "./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=style&index=0&id=825f2ac8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _recent_activities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _recent_activities_vue_vue_type_template_id_825f2ac8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _recent_activities_vue_vue_type_template_id_825f2ac8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "825f2ac8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dashboard/dashboard_two/recent_activities.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_activities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./recent_activities.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_activities_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=style&index=0&id=825f2ac8&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=style&index=0&id=825f2ac8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_activities_vue_vue_type_style_index_0_id_825f2ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./recent_activities.vue?vue&type=style&index=0&id=825f2ac8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=style&index=0&id=825f2ac8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_activities_vue_vue_type_style_index_0_id_825f2ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_activities_vue_vue_type_style_index_0_id_825f2ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_activities_vue_vue_type_style_index_0_id_825f2ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_activities_vue_vue_type_style_index_0_id_825f2ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_activities_vue_vue_type_style_index_0_id_825f2ac8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=template&id=825f2ac8&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=template&id=825f2ac8&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_activities_vue_vue_type_template_id_825f2ac8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./recent_activities.vue?vue&type=template&id=825f2ac8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/recent_activities.vue?vue&type=template&id=825f2ac8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_activities_vue_vue_type_template_id_825f2ac8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recent_activities_vue_vue_type_template_id_825f2ac8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/server_load.vue":
/*!****************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/server_load.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server_load_vue_vue_type_template_id_b74c2f26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server_load.vue?vue&type=template&id=b74c2f26&scoped=true& */ "./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=template&id=b74c2f26&scoped=true&");
/* harmony import */ var _server_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server_load.vue?vue&type=script&lang=js& */ "./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _server_load_vue_vue_type_style_index_0_id_b74c2f26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server_load.vue?vue&type=style&index=0&id=b74c2f26&scoped=true&lang=css& */ "./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=style&index=0&id=b74c2f26&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _server_load_vue_vue_type_custom_index_0_blockType_link_rel_stylesheet_href_https_3A_2F_2Fwww_amcharts_com_2Flib_2F3_2Fplugins_2Fexport_2Fexport_css_media_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server_load.vue?vue&type=custom&index=0&blockType=link&rel=stylesheet&href=https%3A%2F%2Fwww.amcharts.com%2Flib%2F3%2Fplugins%2Fexport%2Fexport.css&media=all */ "./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=custom&index=0&blockType=link&rel=stylesheet&href=https%3A%2F%2Fwww.amcharts.com%2Flib%2F3%2Fplugins%2Fexport%2Fexport.css&media=all");
/* harmony import */ var _server_load_vue_vue_type_custom_index_0_blockType_link_rel_stylesheet_href_https_3A_2F_2Fwww_amcharts_com_2Flib_2F3_2Fplugins_2Fexport_2Fexport_css_media_all__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_server_load_vue_vue_type_custom_index_0_blockType_link_rel_stylesheet_href_https_3A_2F_2Fwww_amcharts_com_2Flib_2F3_2Fplugins_2Fexport_2Fexport_css_media_all__WEBPACK_IMPORTED_MODULE_4__);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _server_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _server_load_vue_vue_type_template_id_b74c2f26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _server_load_vue_vue_type_template_id_b74c2f26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b74c2f26",
  null
  
)

/* custom blocks */

if (typeof _server_load_vue_vue_type_custom_index_0_blockType_link_rel_stylesheet_href_https_3A_2F_2Fwww_amcharts_com_2Flib_2F3_2Fplugins_2Fexport_2Fexport_css_media_all__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') _server_load_vue_vue_type_custom_index_0_blockType_link_rel_stylesheet_href_https_3A_2F_2Fwww_amcharts_com_2Flib_2F3_2Fplugins_2Fexport_2Fexport_css_media_all__WEBPACK_IMPORTED_MODULE_4___default()(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dashboard/dashboard_two/server_load.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=custom&index=0&blockType=link&rel=stylesheet&href=https%3A%2F%2Fwww.amcharts.com%2Flib%2F3%2Fplugins%2Fexport%2Fexport.css&media=all":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=custom&index=0&blockType=link&rel=stylesheet&href=https%3A%2F%2Fwww.amcharts.com%2Flib%2F3%2Fplugins%2Fexport%2Fexport.css&media=all ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_server_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./server_load.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_server_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=style&index=0&id=b74c2f26&scoped=true&lang=css&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=style&index=0&id=b74c2f26&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_server_load_vue_vue_type_style_index_0_id_b74c2f26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./server_load.vue?vue&type=style&index=0&id=b74c2f26&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=style&index=0&id=b74c2f26&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_server_load_vue_vue_type_style_index_0_id_b74c2f26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_server_load_vue_vue_type_style_index_0_id_b74c2f26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_server_load_vue_vue_type_style_index_0_id_b74c2f26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_server_load_vue_vue_type_style_index_0_id_b74c2f26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_server_load_vue_vue_type_style_index_0_id_b74c2f26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=template&id=b74c2f26&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=template&id=b74c2f26&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_server_load_vue_vue_type_template_id_b74c2f26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./server_load.vue?vue&type=template&id=b74c2f26&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/server_load.vue?vue&type=template&id=b74c2f26&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_server_load_vue_vue_type_template_id_b74c2f26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_server_load_vue_vue_type_template_id_b74c2f26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/todolist.vue":
/*!*************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/todolist.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todolist_vue_vue_type_template_id_ea34c62e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.vue?vue&type=template&id=ea34c62e&scoped=true& */ "./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=template&id=ea34c62e&scoped=true&");
/* harmony import */ var _todolist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist.vue?vue&type=script&lang=js& */ "./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _todolist_vue_vue_type_style_index_0_id_ea34c62e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist.vue?vue&type=style&index=0&id=ea34c62e&scoped=true&lang=css& */ "./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=style&index=0&id=ea34c62e&scoped=true&lang=css&");
/* harmony import */ var materialize_css_dist_css_materialize_min_css_vue_type_style_index_1_id_ea34c62e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! materialize-css/dist/css/materialize.min.css?vue&type=style&index=1&id=ea34c62e&scoped=true&lang=css& */ "./node_modules/materialize-css/dist/css/materialize.min.css?vue&type=style&index=1&id=ea34c62e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _todolist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _todolist_vue_vue_type_template_id_ea34c62e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _todolist_vue_vue_type_template_id_ea34c62e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ea34c62e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dashboard/dashboard_two/todolist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_todolist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./todolist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_todolist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=style&index=0&id=ea34c62e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=style&index=0&id=ea34c62e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_todolist_vue_vue_type_style_index_0_id_ea34c62e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./todolist.vue?vue&type=style&index=0&id=ea34c62e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=style&index=0&id=ea34c62e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_todolist_vue_vue_type_style_index_0_id_ea34c62e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_todolist_vue_vue_type_style_index_0_id_ea34c62e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_todolist_vue_vue_type_style_index_0_id_ea34c62e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_todolist_vue_vue_type_style_index_0_id_ea34c62e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_todolist_vue_vue_type_style_index_0_id_ea34c62e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=template&id=ea34c62e&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=template&id=ea34c62e&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_todolist_vue_vue_type_template_id_ea34c62e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./todolist.vue?vue&type=template&id=ea34c62e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/todolist.vue?vue&type=template&id=ea34c62e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_todolist_vue_vue_type_template_id_ea34c62e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_todolist_vue_vue_type_template_id_ea34c62e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/weather.vue":
/*!************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/weather.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather_vue_vue_type_template_id_f17c4f02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.vue?vue&type=template&id=f17c4f02&scoped=true& */ "./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=template&id=f17c4f02&scoped=true&");
/* harmony import */ var _weather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.vue?vue&type=script&lang=js& */ "./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var weather_icons_css_weather_icons_min_css_vue_type_style_index_0_id_f17c4f02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! weather-icons/css/weather-icons.min.css?vue&type=style&index=0&id=f17c4f02&scoped=true&lang=css& */ "./node_modules/weather-icons/css/weather-icons.min.css?vue&type=style&index=0&id=f17c4f02&scoped=true&lang=css&");
/* harmony import */ var _weather_vue_vue_type_style_index_1_id_f17c4f02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather.vue?vue&type=style&index=1&id=f17c4f02&scoped=true&lang=css& */ "./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=style&index=1&id=f17c4f02&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _weather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _weather_vue_vue_type_template_id_f17c4f02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _weather_vue_vue_type_template_id_f17c4f02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f17c4f02",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dashboard/dashboard_two/weather.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./weather.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=style&index=1&id=f17c4f02&scoped=true&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=style&index=1&id=f17c4f02&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_style_index_1_id_f17c4f02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./weather.vue?vue&type=style&index=1&id=f17c4f02&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=style&index=1&id=f17c4f02&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_style_index_1_id_f17c4f02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_style_index_1_id_f17c4f02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_style_index_1_id_f17c4f02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_style_index_1_id_f17c4f02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_style_index_1_id_f17c4f02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=template&id=f17c4f02&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=template&id=f17c4f02&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_template_id_f17c4f02_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./weather.vue?vue&type=template&id=f17c4f02&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_two/weather.vue?vue&type=template&id=f17c4f02&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_template_id_f17c4f02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weather_vue_vue_type_template_id_f17c4f02_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/index2.vue":
/*!***********************************************!*\
  !*** ./resources/components/pages/index2.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index2_vue_vue_type_template_id_bde613c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index2.vue?vue&type=template&id=bde613c8&scoped=true& */ "./resources/components/pages/index2.vue?vue&type=template&id=bde613c8&scoped=true&");
/* harmony import */ var _index2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index2.vue?vue&type=script&lang=js& */ "./resources/components/pages/index2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var nvd3_build_nv_d3_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nvd3/build/nv.d3.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/nvd3/build/nv.d3.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _css_custom_css_dashboard2_css_vue_type_style_index_1_id_bde613c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/custom_css/dashboard2.css?vue&type=style&index=1&id=bde613c8&scoped=true&lang=css& */ "./resources/css/custom_css/dashboard2.css?vue&type=style&index=1&id=bde613c8&scoped=true&lang=css&");
/* harmony import */ var _index2_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index2.vue?vue&type=style&index=2&lang=css& */ "./resources/components/pages/index2.vue?vue&type=style&index=2&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _index2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index2_vue_vue_type_template_id_bde613c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index2_vue_vue_type_template_id_bde613c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bde613c8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/index2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/index2.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/components/pages/index2.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/index2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/index2.vue?vue&type=style&index=2&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/components/pages/index2.vue?vue&type=style&index=2&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/vue-loader/lib??vue-loader-options!./index2.vue?vue&type=style&index=2&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/index2.vue?vue&type=style&index=2&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/index2.vue?vue&type=template&id=bde613c8&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/components/pages/index2.vue?vue&type=template&id=bde613c8&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_template_id_bde613c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index2.vue?vue&type=template&id=bde613c8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/index2.vue?vue&type=template&id=bde613c8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_template_id_bde613c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index2_vue_vue_type_template_id_bde613c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/custom_css/dashboard2.css?vue&type=style&index=1&id=bde613c8&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/css/custom_css/dashboard2.css?vue&type=style&index=1&id=bde613c8&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard2_css_vue_type_style_index_1_id_bde613c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./dashboard2.css?vue&type=style&index=1&id=bde613c8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/dashboard2.css?vue&type=style&index=1&id=bde613c8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard2_css_vue_type_style_index_1_id_bde613c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard2_css_vue_type_style_index_1_id_bde613c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard2_css_vue_type_style_index_1_id_bde613c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard2_css_vue_type_style_index_1_id_bde613c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard2_css_vue_type_style_index_1_id_bde613c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "./resources/img/authors/avatar4.jpg":
/*!*******************************************!*\
  !*** ./resources/img/authors/avatar4.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/avatar4.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ "./resources/img/authors/avatar5.jpg":
/*!*******************************************!*\
  !*** ./resources/img/authors/avatar5.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/avatar5.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ "./resources/img/authors/avatar6.jpg":
/*!*******************************************!*\
  !*** ./resources/img/authors/avatar6.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/avatar6.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ "./resources/img/authors/avatar7.jpg":
/*!*******************************************!*\
  !*** ./resources/img/authors/avatar7.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/avatar7.jpg?ac60ef718e8f9765886e30ee907fea17";

/***/ }),

/***/ "./resources/img/d4-weather.jpg":
/*!**************************************!*\
  !*** ./resources/img/d4-weather.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/d4-weather.jpg?05573f6c7d1620ebbb544b7d395aa5d3";

/***/ }),

/***/ "./resources/img/next.png":
/*!********************************!*\
  !*** ./resources/img/next.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/next.png?31f15875975aab69085470aabbfec802";

/***/ }),

/***/ "./resources/img/pages/slider1.jpg":
/*!*****************************************!*\
  !*** ./resources/img/pages/slider1.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/slider1.jpg?dc0298a39154e143cda85e96559224e0";

/***/ }),

/***/ "./resources/img/pages/slider2.jpg":
/*!*****************************************!*\
  !*** ./resources/img/pages/slider2.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/slider2.jpg?5d3ef85deccaa6bf8059ed84b9e29b24";

/***/ }),

/***/ "./resources/img/prev.png":
/*!********************************!*\
  !*** ./resources/img/prev.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/prev.png?84b76dee6b27b795e89e3649078a11c2";

/***/ }),

/***/ "./resources/img/profile-cover.jpg":
/*!*****************************************!*\
  !*** ./resources/img/profile-cover.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/profile-cover.jpg?5bf901f44430175f0eb64d110af31834";

/***/ }),

/***/ "./resources/img/profile-pic.jpg":
/*!***************************************!*\
  !*** ./resources/img/profile-pic.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/profile-pic.jpg?2bf04359593bef35efe6a567b373f42e";

/***/ })

}]);