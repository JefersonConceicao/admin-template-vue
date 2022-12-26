(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _components_plugins_scroll_vScroll_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/plugins/scroll/vScroll.vue */ "./resources/components/plugins/scroll/vScroll.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'chat',
  data: function data() {
    return {
      bar_color: "#ccc",
      height: "300px",
      bar_width: "10px",
      visible: false
    };
  },
  components: {
    vScroll: _components_plugins_scroll_vScroll_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    "use strict";

    $("form#main_input_box").submit(function (event) {
      var conversation_list = $(".conversation-list");
      var timenow = moment().format("h:mm a");
      event.preventDefault();
      var scrollTo_int = conversation_list.prop('scrollHeight') + 'px';
      conversation_list.append('<li class="clearfix odd m-t-10 conversers1"><div class="conversation-text"><div class="ctext-wrap mt-2"><p class="text-left">' + $("#custom_textbox").val() + '<i class="text-right">' + timenow + '</i></p></div></div></li>');
      $("#custom_textbox").val('');
      var dynamic_value = ["Oh! Cool", "How do you Do", "Hope! you are having good time", "Really!", "That's, Awesome"]; // reply

      var delay = 3500;
      setTimeout(function () {
        conversation_list.append('<li class="clearfix m-t-10 conversers2"><div class="conversation-text"><div class="ctext-wrap mt-2"><p class="float-left reply">Wilton is typing<div class="spinner float-right"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></p></div></div></li>');
      }, 1000);
      setTimeout(function () {
        $(".reply").html(dynamic_value[Math.floor(Math.random() * 5)] + '<i>' + timenow + '</i>').removeClass("reply");
        $(".spinner").remove();
      }, 3500);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "example",
  mounted: function mounted() {},
  destroyed: function destroyed() {},
  methods: {
    change_skin: function change_skin() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/css/swiper.css */ "./node_modules/swiper/dist/css/swiper.css");
/* harmony import */ var swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'newsfeed',
  components: {
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_1__["swiperSlide"]
  },
  data: function data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          disableOnInteraction: false
        },
        speed: 1050
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_fullscreen_src_component_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-fullscreen/src/component.vue */ "./node_modules/vue-fullscreen/src/component.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "notification",
  components: {
    Fullscreen: vue_fullscreen_src_component_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      icon: "<i class='fa fa-facebook'></i>",
      seen: true,
      cardhide: true,
      card: "closecard",
      fullscreen: false,
      cardstatus: false,
      cardstyle: {
        opacity: 0.5
      },
      cardstyles: ""
    };
  },
  methods: {
    toggle: function toggle() {
      this.$refs['fullscreen'].toggle();
    },
    fullscreenChange: function fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    notificationClose: function notificationClose() {
      this.cardhide = !this.cardhide;
    },
    myReload: function myReload() {
      var _this = this;

      this.cardstatus = true, this.cardstyles = this.cardstyle, setTimeout(function () {
        _this.cardstatus = false;
        _this.cardstyles = {
          opacity: 1
        };
      }, 2000);
    }
  },
  mounted: function mounted() {},
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var nvd3_build_nv_d3_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nvd3/build/nv.d3.min.js */ "./node_modules/nvd3/build/nv.d3.min.js");
/* harmony import */ var nvd3_build_nv_d3_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nvd3_build_nv_d3_min_js__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
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
  name: 'project_status',
  mounted: function mounted() {
    "use strict";
    /*chart4  Cumulative Line chart start*/

    nv.addGraph(function () {
      var clinechart = nv.models.lineChart().useInteractiveGuideline(true).x(function (d) {
        return d[0];
      }).y(function (d) {
        return d[1] / 4;
      }).color(['#9FD8BB', '#66ccff', '#F49393']).showLegend(true).margin({
        left: 30,
        bottom: 35
      });
      clinechart.xAxis.tickFormat(function (d) {
        return d3.time.format('%b')(new Date(d));
      });
      clinechart.yAxis.tickFormat(d3.format('d'));
      d3.select('.nvd3-chart svg').datum(cumulativeTestData()).call(clinechart);
      nv.utils.windowResize(clinechart.update);
      $(".sidebar-toggle").on('click', function () {
        $(".nvd3-chart").find('svg').remove();
        $(".nvd3-chart").html("<svg></svg>");
        nv.addGraph(function () {
          d3.select('.nvd3-chart svg').datum(cumulativeTestData()).call(clinechart);
          clinechart.update();
          return clinechart;
        });
      });
      clinechart.dispatch.on('stateChange', function (e) {
        nv.log('New State:', JSON.stringify(e));
      });
      clinechart.state.dispatch.on('change', function (state) {
        nv.log('state', JSON.stringify(state));
      });
      return clinechart;
    });

    function cumulativeTestData() {
      return [{
        key: "Clear 1",
        values: [[1083297600000, -2.974623048543], [1085976000000, -1.7740300785979], [1088568000000, 4.4681318138177], [1091246400000, 7.0242541001353], [1093924800000, 7.5709603667586], [1096516800000, 20.612245065736], [1099195200000, 21.698065237316], [1101790800000, 40.501189458018], [1104469200000, 50.464679413194], [1107147600000, 48.917421973355], [1109566800000, 63.750936549160], [1112245200000, 59.072499126460], [1114833600000, 43.373158880492], [1117512000000, 54.490918947556], [1120104000000, 56.661178852079], [1122782400000, 73.450103545496], [1125460800000, 71.714526354907], [1128052800000, 85.221664349607], [1130734800000, 77.769261392481], [1133326800000, 95.966528716500], [1136005200000, 107.59132116397], [1138683600000, 127.25740096723], [1141102800000, 122.13917498830], [1143781200000, 126.53657279774], [1146369600000, 132.39300992970], [1149048000000, 120.11238242904], [1151640000000, 118.41408917750], [1154318400000, 107.92918924621], [1156996800000, 110.28057249569], [1159588800000, 117.20485334692], [1162270800000, 141.33556756948], [1164862800000, 159.59452727893], [1167541200000, 167.09801853304], [1170219600000, 185.46849659215], [1172638800000, 184.82474099990], [1175313600000, 195.63155213887], [1177905600000, 207.40597044171], [1180584000000, 230.55966698196], [1183176000000, 239.55649035292], [1185854400000, 241.35915085208], [1188532800000, 239.89428956243], [1191124800000, 260.47781917715], [1193803200000, 276.39457482225], [1196398800000, 258.66530682672], [1199077200000, 250.98846121893], [1201755600000, 226.89902618127], [1204261200000, 227.29009273807], [1206936000000, 218.66476654350], [1209528000000, 232.46605902918], [1212206400000, 253.25667081117], [1214798400000, 235.82505363925], [1217476800000, 229.70112774254], [1220155200000, 225.18472705952], [1222747200000, 189.13661746552], [1225425600000, 149.46533007301], [1228021200000, 131.00340772114], [1230699600000, 135.18341728866], [1233378000000, 109.15296887173], [1235797200000, 84.614772549760], [1238472000000, 100.60810015326], [1241064000000, 141.50134895610], [1243742400000, 142.50405083675], [1246334400000, 139.81192372672], [1249012800000, 177.78205544583], [1251691200000, 194.73691933074], [1254283200000, 209.00838460225], [1256961600000, 198.19855877420], [1259557200000, 222.37102417812], [1262235600000, 234.24581081250], [1264914000000, 228.26087689346], [1267333200000, 248.81895126250], [1270008000000, 270.57301075186], [1272600000000, 292.64604322550], [1275278400000, 265.94088520518], [1277870400000, 237.82887467569], [1280548800000, 265.55973314204], [1283227200000, 248.30877330928], [1285819200000, 278.14870066912], [1288497600000, 292.69260960288], [1291093200000, 300.84263809599], [1293771600000, 326.17253914628], [1296450000000, 337.69335966505], [1298869200000, 339.73260965121]]
      }, {
        key: "Clear 2",
        values: [[1083297600000, -3.7454058855943], [1085976000000, -3.6096667436314], [1088568000000, -0.8440003934950], [1091246400000, 2.0921565171691], [1093924800000, 3.5874194844361], [1096516800000, 13.742776534056], [1099195200000, 13.212577494462], [1101790800000, 24.567562260634], [1104469200000, 34.543699343650], [1107147600000, 36.438736927704], [1109566800000, 46.453174659855], [1112245200000, 43.825369235440], [1114833600000, 32.036699833653], [1117512000000, 41.191928040141], [1120104000000, 40.301151852023], [1122782400000, 54.922174023466], [1125460800000, 49.538009616222], [1128052800000, 61.911998981277], [1130734800000, 56.139287982733], [1133326800000, 71.780099623014], [1136005200000, 78.474613851439], [1138683600000, 90.069363092366], [1141102800000, 87.449910167102], [1143781200000, 87.030640692381], [1146369600000, 87.053437436941], [1149048000000, 76.263029236276], [1151640000000, 72.995735254929], [1154318400000, 63.349908186291], [1156996800000, 66.253474132320], [1159588800000, 75.943546587481], [1162270800000, 93.889549035453], [1164862800000, 106.18074433002], [1167541200000, 116.39729488562], [1170219600000, 129.09440567885], [1172638800000, 123.07049577958], [1175313600000, 129.38531055124], [1177905600000, 132.05431954171], [1180584000000, 148.86060871993], [1183176000000, 157.06946698484], [1185854400000, 155.12909573880], [1188532800000, 155.14737474392], [1191124800000, 159.70646945738], [1193803200000, 166.44021916278], [1196398800000, 159.05963386166], [1199077200000, 151.38121182455], [1201755600000, 132.02441123108], [1204261200000, 121.93110210702], [1206936000000, 112.64545460548], [1209528000000, 122.17722331147], [1212206400000, 133.65410878087], [1214798400000, 120.20304048123], [1217476800000, 123.06288589052], [1220155200000, 125.33598074057], [1222747200000, 103.50539786253], [1225425600000, 85.917420810943], [1228021200000, 71.250132356683], [1230699600000, 71.308439405118], [1233378000000, 52.287271484242], [1235797200000, 30.329193047772], [1238472000000, 44.133440571375], [1241064000000, 77.654211210456], [1243742400000, 73.749802969425], [1246334400000, 70.337666717565], [1249012800000, 102.69722724876], [1251691200000, 117.63589109350], [1254283200000, 128.55351774786], [1256961600000, 119.21420882198], [1259557200000, 139.32979337027], [1262235600000, 149.71606246357], [1264914000000, 144.42340669795], [1267333200000, 161.64446359053], [1270008000000, 180.23071774437], [1272600000000, 199.09511476051], [1275278400000, 180.10778306442], [1277870400000, 158.50237284410], [1280548800000, 177.57353623850], [1283227200000, 162.91091118751], [1285819200000, 183.41053361910], [1288497600000, 194.03065670573], [1291093200000, 201.23297214328], [1293771600000, 222.60154078445], [1296450000000, 233.35556801977], [1298869200000, 231.22452435045]]
      }, {
        key: "Clear 3",
        values: [[1083297600000, 0.77078283705125], [1085976000000, 1.8356366650335], [1088568000000, 5.3121322073127], [1091246400000, 4.9320975829662], [1093924800000, 3.9835408823225], [1096516800000, 6.8694685316805], [1099195200000, 8.4854877428545], [1101790800000, 15.933627197384], [1104469200000, 15.920980069544], [1107147600000, 12.478685045651], [1109566800000, 17.297761889305], [1112245200000, 15.247129891020], [1114833600000, 11.336459046839], [1117512000000, 13.298990907415], [1120104000000, 16.360027000056], [1122782400000, 18.527929522030], [1125460800000, 22.176516738685], [1128052800000, 23.309665368330], [1130734800000, 21.629973409748], [1133326800000, 24.186429093486], [1136005200000, 29.116707312531], [1138683600000, 37.188037874864], [1141102800000, 34.689264821198], [1143781200000, 39.505932105359], [1146369600000, 45.339572492759], [1149048000000, 43.849353192764], [1151640000000, 45.418353922571], [1154318400000, 44.579281059919], [1156996800000, 44.027098363370], [1159588800000, 41.261306759439], [1162270800000, 47.446018534027], [1164862800000, 53.413782948909], [1167541200000, 50.700723647419], [1170219600000, 56.374090913296], [1172638800000, 61.754245220322], [1175313600000, 66.246241587629], [1177905600000, 75.351650899999], [1180584000000, 81.699058262032], [1183176000000, 82.487023368081], [1185854400000, 86.230055113277], [1188532800000, 84.746914818507], [1191124800000, 100.77134971977], [1193803200000, 109.95435565947], [1196398800000, 99.605672965057], [1199077200000, 99.607249394382], [1201755600000, 94.874614950188], [1204261200000, 105.35899063105], [1206936000000, 106.01931193802], [1209528000000, 110.28883571771], [1212206400000, 119.60256203030], [1214798400000, 115.62201315802], [1217476800000, 106.63824185202], [1220155200000, 99.848746318951], [1222747200000, 85.631219602987], [1225425600000, 63.547909262067], [1228021200000, 59.753275364457], [1230699600000, 63.874977883542], [1233378000000, 56.865697387488], [1235797200000, 54.285579501988], [1238472000000, 56.474659581885], [1241064000000, 63.847137745644], [1243742400000, 68.754247867325], [1246334400000, 69.474257009155], [1249012800000, 75.084828197067], [1251691200000, 77.101028237237], [1254283200000, 80.454866854387], [1256961600000, 78.984349952220], [1259557200000, 83.041230807854], [1262235600000, 84.529748348935], [1264914000000, 83.837470195508], [1267333200000, 87.174487671969], [1270008000000, 90.342293007487], [1272600000000, 93.550928464991], [1275278400000, 85.833102140765], [1277870400000, 79.326501831592], [1280548800000, 87.986196903537], [1283227200000, 85.397862121771], [1285819200000, 94.738167050020], [1288497600000, 98.661952897151], [1291093200000, 99.609665952708], [1293771600000, 103.57099836183], [1296450000000, 104.04353411322], [1298869200000, 108.21382792587]]
      }];
    } // nvd3 chart ends here

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/timeline.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/timeline.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var jquery_advanced_news_ticker_assets_js_jquery_newsTicker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-advanced-news-ticker/assets/js/jquery.newsTicker.js */ "./node_modules/jquery-advanced-news-ticker/assets/js/jquery.newsTicker.js");
/* harmony import */ var jquery_advanced_news_ticker_assets_js_jquery_newsTicker_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_advanced_news_ticker_assets_js_jquery_newsTicker_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_plugins_scroll_vScroll_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/plugins/scroll/vScroll.vue */ "./resources/components/plugins/scroll/vScroll.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'timeline',
  components: {
    vScroll: _components_plugins_scroll_vScroll_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    "use strict"; //auto timeline update card

    if ($('.timeline-update').length > 0) {
      $('.timeline-update').newsTicker({
        row_height: 117,
        max_rows: 4,
        speed: 2000,
        direction: 'up',
        duration: 3500,
        autostart: 1,
        pauseOnHover: 1
      });
    } //auto timeline update panel ends

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_custom_js_sparkline_jquery_flot_spline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/custom_js/sparkline/jquery.flot.spline.js */ "./resources/js/custom_js/sparkline/jquery.flot.spline.js");
/* harmony import */ var _js_custom_js_sparkline_jquery_flot_spline_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_custom_js_sparkline_jquery_flot_spline_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var LC_switch_lc_switch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! LC-switch/lc_switch.js */ "./node_modules/LC-switch/lc_switch.js");
/* harmony import */ var LC_switch_lc_switch_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(LC_switch_lc_switch_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Flot_jquery_flot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Flot/jquery.flot.js */ "./node_modules/Flot/jquery.flot.js");
/* harmony import */ var Flot_jquery_flot_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(Flot_jquery_flot_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_jquery_flot_resize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/jquery.flot.resize.js */ "./resources/js/jquery.flot.resize.js");
/* harmony import */ var _js_jquery_flot_resize_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_jquery_flot_resize_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Flot_jquery_flot_stack_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Flot/jquery.flot.stack.js */ "./node_modules/Flot/jquery.flot.stack.js");
/* harmony import */ var Flot_jquery_flot_stack_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(Flot_jquery_flot_stack_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flot_spline_js_jquery_flot_spline_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flot-spline/js/jquery.flot.spline.min.js */ "./node_modules/flot-spline/js/jquery.flot.spline.min.js");
/* harmony import */ var flot_spline_js_jquery_flot_spline_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flot_spline_js_jquery_flot_spline_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery_flot_tooltip_js_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery.flot.tooltip/js/jquery.flot.tooltip.min.js */ "./node_modules/jquery.flot.tooltip/js/jquery.flot.tooltip.min.js");
/* harmony import */ var jquery_flot_tooltip_js_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery_flot_tooltip_js_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _dashboard_dashboard_one_chat_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard_one/chat.vue */ "./resources/components/pages/dashboard/dashboard_one/chat.vue");
/* harmony import */ var _dashboard_dashboard_one_newsfeed_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard_one/newsfeed.vue */ "./resources/components/pages/dashboard/dashboard_one/newsfeed.vue");
/* harmony import */ var _dashboard_dashboard_one_timeline_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard_one/timeline.vue */ "./resources/components/pages/dashboard/dashboard_one/timeline.vue");
/* harmony import */ var _dashboard_dashboard_one_project_status_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard_one/project_status.vue */ "./resources/components/pages/dashboard/dashboard_one/project_status.vue");
/* harmony import */ var _dashboard_dashboard_one_chat_history_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard_one/chat_history.vue */ "./resources/components/pages/dashboard/dashboard_one/chat_history.vue");
/* harmony import */ var _dashboard_dashboard_one_notification_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard_one/notification.vue */ "./resources/components/pages/dashboard/dashboard_one/notification.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var spark_time;

var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");







 //    new







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'index',
  components: {
    chat: _dashboard_dashboard_one_chat_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    newsfeed: _dashboard_dashboard_one_newsfeed_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    timeline: _dashboard_dashboard_one_timeline_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    project_status: _dashboard_dashboard_one_project_status_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    chat_history: _dashboard_dashboard_one_chat_history_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    notification: _dashboard_dashboard_one_notification_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  data: function data() {
    return {
      bar_color: "#ccc",
      height: "300px",
      bar_width: "10px",
      visible: false
    };
  },
  mounted: function mounted() {
    "use strict";

    $(document).ready(function () {
      // tab-1
      $('#toggle_real').lc_switch();
      /* server load  */

      var data_1 = [],
          totalPoints_1 = 70;

      function getRandomData_1() {
        if (data_1.length > 0) data_1 = data_1.slice(1); // do a random walk

        while (data_1.length < totalPoints_1) {
          var prev_1 = data_1.length > 0 ? data_1[data_1.length - 1] : 50;
          var y = prev_1 + Math.random() * 10 - 5;
          if (y < 25) y = 30;
          if (y > 100) y = 90;
          data_1.push(y);
        } // zip the generated y values with the x values


        var res_1 = [];

        for (var i = 0; i < data_1.length; ++i) {
          res_1.push([i, data_1[i]]);
        }

        return res_1;
      } // setup control widget


      var updateInterval_1 = 1000; // setup plot

      var options_1 = {
        colors: ["linear-gradient(70deg, #36A0F1 0, #b097cf 100%)"],
        series: {
          shadowSize: 0,
          lines: {
            show: true,
            fill: true,
            fillColor: {
              colors: [{
                opacity: 0.3
              }, {
                opacity: 0.3
              }]
            }
          }
        },
        yaxis: {
          min: 0,
          max: 120
        },
        xaxis: {
          show: false
        },
        grid: {
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#fff'
        }
      };
      var plot_1 = $.plot($("#live-chart"), [getRandomData_1()], options_1);

      function update_1() {
        plot_1.setData([getRandomData_1()]); // since the axes don't change, we don't need to call plot.setupGrid()

        plot_1.draw();

        if ($("#toggle_real").prop("checked")) {
          setTimeout(update_1, updateInterval_1);
        }
      }

      update_1();
      $('#toggle_real').on('lcs-statuschange', function () {
        update_1();
      }); //tab-1 ends
      //tab-2
      //start line chart
      // real time flot chart

      var gen_val = [],
          totalPoints = 60;
      var updateInterval = 500;

      function getRandomData() {
        if (gen_val.length > 0) gen_val = gen_val.slice(1); // Do a random walk

        while (gen_val.length < totalPoints) {
          var prev = gen_val.length > 0 ? gen_val[gen_val.length - 1] : 25,
              y = Math.random() * 40 + 10;

          if (y < 0) {
            y = 0;
          } else if (y > 49) {
            y = 49;
          }

          gen_val.push(y);
          $('.real-value span').html(Math.round(y));
          var z = Math.random() * 5 + 4;
          $('.return-value span').html(Math.round(z));
        } // Parsing the generated y values with the x values


        var res = [];

        for (var i = 0; i < gen_val.length; ++i) {
          res.push([i, gen_val[i]]);
        }

        return res;
      }

      var plot = $.plot("#realtime-views", [getRandomData()], {
        series: {
          bars: {
            show: true,
            lineWidth: 0,
            barWidth: 0.8,
            fill: 0.35
          },
          shadowSize: 0
        },
        grid: {
          labelMargin: 8,
          hoverable: true,
          clickable: true,
          borderWidth: 0,
          borderColor: '#f5f5f5'
        },
        yaxis: {
          min: 0,
          max: 50,
          ticks: [0, 25, 50],
          tickColor: '#f5f5f5',
          font: {
            color: '#bdbdbd',
            size: 12
          }
        },
        xaxis: {
          show: false
        },
        colors: ['#00bcd4'],
        tooltip: true,
        tooltipOpts: {
          content: "Active User: %y"
        }
      });

      function update() {
        plot.setData([getRandomData()]);
        plot.draw();
        setTimeout(update, updateInterval);
      }

      update(); // real time chart ends
    });
  },
  destroyed: function destroyed() {
    window.clearTimeout(spark_time);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/plugins/scroll/vScroll.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/plugins/scroll/vScroll.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    height: null,
    minHeight: null,
    maxHeight: null,
    color: null,
    barWidth: null,
    alwaysvisible: Boolean
  },
  mounted: function mounted() {
    this.dragDealer();
    this.moveBar();
  },
  data: function data() {
    return {
      scrollRatio: 0,
      grabbed: false
    };
  },
  methods: {
    // Mouse drag handler
    dragDealer: function dragDealer() {
      var _this = this;

      var t = this;
      var lastPageY;
      this.$refs.bar.addEventListener('mousedown', function (e) {
        lastPageY = e.pageY;
        _this.grabbed = true;
        document.body.classList.add('ss-grabbed');
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stop);
        return false;

        function drag(e) {
          var delta = e.pageY - lastPageY;
          lastPageY = e.pageY;
          t.$refs.content.scrollTop += delta / t.scrollRatio;
        }

        function stop() {
          t.grabbed = false;
          document.body.classList.remove('ss-grabbed');
          document.removeEventListener('mousemove', drag);
          document.removeEventListener('mouseup', stop);
        }
      });
    },
    moveBar: function moveBar() {
      var content = this.$refs.content;
      var bar = this.$refs.bar;
      var totalHeight = content.scrollHeight,
          ownHeight = content.clientHeight;
      this.scrollRatio = ownHeight / totalHeight; // Hide scrollbar if no scrolling is possible

      if (this.scrollRatio >= 1) {
        bar.classList.add('ss-hidden');
      } else {
        bar.classList.remove('ss-hidden');
        bar.style.cssText = 'height:' + this.scrollRatio * 100 + '%; top:' + content.scrollTop / totalHeight * 100 + '%;right:-' + (this.$refs.vscroll.clientWidth - bar.clientWidth) + 'px;background-color:' + this.color + ';width:' + this.barWidth;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*chat*/\n.personal-chat .panel-heading span {\n    margin-top: 3px;\n}\n.personal-chat .panel-body {\n    padding: 0;\n}\n.personal-chat .options .dropdown-menu {\n    min-width: 100px;\n}\n.personal-chat .header-elements {\n    padding-top: 5px;\n    line-height: 18px;\n}\n.personal-chat .header-elements .status b {\n    color: #777;\n}\n.personal-chat .header-elements .status:after {\n    content: \"\";\n    position: absolute;\n    height: 9px;\n    width: 9px;\n    left: 45px;\n    top: 37px;\n    border: 2px solid #fff;\n    border-radius: 50%;\n    display: block;\n    background-color: #6cd187;\n}\n.personal-chat .chat-image {\n    margin-right: 10px;\n}\n.personal-chat .options {\n    margin-top: 5px;\n}\n.personal-chat .options .dropdown-menu li {\n    border-bottom: 1px solid #e5e5e5;\n}\n.personal-chat .options .dropdown-menu li:last-child {\n    border-bottom: 0;\n}\n.personal-chat .options .more {\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotate(90deg);\n    -ms-transform: rotate(90deg);\n    -o-transform: rotate(90deg);\n    transform: rotate(90deg);\n    display: inline-block;\n}\n.personal-chat .options .attachment {\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(945deg);\n    display: inline-block;\n    font-size: 18px;\n}\n.personal-chat .options i {\n    padding: 5px;\n}\n.personal-chat .chat-conversation {\n    background-image: url(" + escape(__webpack_require__(/*! ../../../../img/brick-wall.png */ "./resources/img/brick-wall.png")) + ");\n}\n.personal-chat .conversation-list {\n    list-style: none;\n    padding: 0 9px 0 0;\n    margin: 0;\n}\n.personal-chat .conversation-list .chat-avatar {\n    display: inline-block;\n    float: left;\n    text-align: center;\n    width: 42px;\n}\n.personal-chat .conversation-list .chat-avatar img {\n    border-radius: 100%;\n    width: 100%;\n}\n.personal-chat .conversation-list .chat-avatar i {\n    font-size: 12px;\n    font-style: normal;\n}\n.personal-chat .conversation-list .conversation-text {\n    display: inline-block;\n    float: left;\n    font-size: 13px;\n    margin-left: 15px;\n    width: 70%;\n}\n.personal-chat .conversation-list  .ctext-wrap {\n    border-radius: 3px;\n    display: inline-block;\n    padding: 5px 10px;\n    position: relative;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.personal-chat .conversation-list .conversers1 .ctext-wrap {\n    background: #D8F1E4;\n}\n.personal-chat .conversation-list .conversers2 .ctext-wrap {\n    background: #fff;\n}\n.personal-chat .conversation-list .conversers2 .ctext-wrap:after {\n    border-top-color: #fff;\n    border-right-color: #fff;\n}\n.personal-chat .conversation-list .ctext-wrap i {\n    color: #777;\n    display: block;\n    font-size: 11px;\n    font-style: normal;\n    position: relative;\n}\n.personal-chat .conversation-list .ctext-wrap p {\n    margin: 0;\n    padding-top: 3px;\n}\n.personal-chat .conversation-list .ctext-wrap:after {\n    right: 98%;\n    top: 0;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    margin-left: -1px;\n    border-top: 0 solid #fff;\n    border-right: 12px solid #fff;\n    border-bottom: 14px solid transparent;\n}\n.personal-chat .conversation-list .odd .conversation-text {\n    float: right;\n    margin-right: 5px;\n    text-align: right;\n    width: 78%;\n}\n.personal-chat .conversation-list .odd .ctext-wrap:after {\n    border-color: rgba(238, 238, 242, 0);\n    left: 99%;\n    margin-right: -1px;\n    border-top: 0 solid #D8F1E4;\n    border-left: 12px solid #D8F1E4;\n    border-bottom: 14px solid transparent;\n}\n.personal-chat .text-field {\n    padding: 6px 10px;\n}\n.personal-chat #main_input_box .custom_textbox {\n    min-height: 42px;\n}\n.personal-chat .text-field .send-btn {\n    padding: 8px 8px 3px 2px;\n}\n.personal-chat .text-field .send-btn i {\n    font-size: 25px;\n    -webkit-transform: rotate(133deg);\n    -moz-transform: rotate(133deg);\n    -ms-transform: rotate(133deg);\n    -o-transform: rotate(133deg);\n    transform: rotate(133deg);\n    display: inline-block;\n}\n\n\n/*chat loader*/\n.personal-chat .ctext-wrap .reply {\n    width: 98px;\n    color: #777;\n}\n.personal-chat .spinner {\n    padding-top: 6px;\n}\n.personal-chat .spinner>div {\n    width: 5px;\n    height: 5px;\n    background-color: #777;\n    margin-right: 2px;\n    border-radius: 50%;\n    display: inline-block;\n    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n    animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n.personal-chat .spinner .bounce1 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n}\n.personal-chat .spinner .bounce2 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n}\n@keyframes sk-bouncedelay {\n0%,\n    80%,\n    100% {\n        -webkit-transform: scale(0);\n        transform: translateY(-7px);\n}\n40% {\n        -webkit-transform: scale(1.0);\n        transform: translateY(0);\n}\n}\n.personal-chat .chat-conversation .ss-container{\n    height:380px !important;\n}\n@media(min-width: 768px) and (max-width:1024px){\n.personal-chat .chat-conversation .ss-container{\n        height:475px !important;\n}\n}\n.personal-chat .btn-secondary{\n    background-color: #0F9E5E;\n}\n.personal-chat .dropdown-menu .dropdown-item{\n    border-bottom: 1px solid #333 !important;\n}\n.personal-chat .btn-secondary,.personal-chat .btn-secondary:active{\n    background-color:rgba(0, 0, 0, 0.0) !important;\n    color: #333 !important;\n    border: none;\n    box-shadow: none !important;\n}\n.personal-chat .attachment-menu .btn-secondary:after,.personal-chat .content-menu .btn-secondary:after{\n    display: none;\n}\n.personal-chat .dropdown-menu{\n    padding: 0;\n}\n/*chat end*/\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=style&index=0&id=31435dd8&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=style&index=0&id=31435dd8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*.right-chatbox-heading .card-header*/\n/*{*/\n    /*background-color: #1B9AF7;*/\n    /*color:white;*/\n/*}*/\n/*.right-chatbox-heading .card*/\n/*{*/\n/*width: 50%;*/\n/*}*/\n.right-chatbox-heading .card-body ul li.nav-item[data-v-31435dd8]\n{\n    width: 50%;\n}\n.right-chatbox-heading .nav-tabs .nav-link.active[data-v-31435dd8],\n.right-chatbox-heading .nav-tabs .nav-link[data-v-31435dd8]:hover,\n.right-chatbox-heading .nav-tabs .nav-link.active[data-v-31435dd8]:hover\n{\n    border-bottom: 3px solid #6699cc;\n    border-top: 0 !important;\n}\n.right-chatbox-heading .nav-tabs .nav-link[data-v-31435dd8]:hover\n{\n    border-bottom: 0;\n}\n.right-chatbox-heading .list-group-item img[data-v-31435dd8]\n{\n    border-radius: 50%;\n}\n.right-chatbox-heading .nav-tabs .nav-link[data-v-31435dd8]\n{\n    border-top: 3px solid transparent !important;\n}\n.right-chatbox-heading .nav-tabs[data-v-31435dd8]\n{\n    border-bottom: 0;\n}\n.right-chatbox-heading .list-group-item[data-v-31435dd8]\n{\n    border: 0;\n}\n.right-chatbox-heading .list-group-item-action[data-v-31435dd8]:active\n{\n    background-color: #f8f9fa;\n    outline:none;\n}\n.right-chatbox-heading .badge-pill[data-v-31435dd8]\n{\n    color:#66cc99;\n}\n.right-chatbox-heading .badge-pill.badge-secondary[data-v-31435dd8]\n{\n    color: #868e96 !important;\n    background-color: #fff\n}\n.right-chatbox-heading .badge.previou-chat[data-v-31435dd8]\n{\n    color: #495057;\n}\n.right-chatbox-heading .card[data-v-31435dd8]\n{\n    height:414px;\n}\n/*.right-chatbox-heading .card*/\n/*{*/\n    /*position: fixed;*/\n    /*top: 0;*/\n    /*width: 25%;*/\n    /*right: -20%;*/\n    /*z-index: 9;*/\n/*}*/\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=style&index=0&id=3f72a59c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=style&index=0&id=3f72a59c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*news swiper*/\n.swiper-container[data-v-3f72a59c] {\n    height: 335px;\n    border-radius: 4px;\n    color: #fff;\n}\n.swiper-container .slider-content[data-v-3f72a59c] {\n    padding: 12px 18px;\n    height:336px;\n}\n.slide-1[data-v-3f72a59c] {\n    background-image: url(" + escape(__webpack_require__(/*! ../../../../img/pages/slider1.jpg */ "./resources/img/pages/slider1.jpg")) + ");\n    width: 100%;\n}\n.slide-2[data-v-3f72a59c] {\n    background-image: url(" + escape(__webpack_require__(/*! ../../../../img/pages/slider2.jpg */ "./resources/img/pages/slider2.jpg")) + ");\n    width: 100%;\n}\n.slide-3[data-v-3f72a59c] {\n    background-image: url(" + escape(__webpack_require__(/*! ../../../../img/pages/slider3.jpg */ "./resources/img/pages/slider3.jpg")) + ");\n    width: 100%;\n}\n.gradient-color[data-v-3f72a59c]:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    opacity: 0.9;\n    background: linear-gradient(to top, #169ac8, #80BCD1);\n}\n.swiper-container .slider-content span[data-v-3f72a59c] {\n    margin-left: 10px;\n    margin-top: -3px;\n}\n.slider-content .news-head[data-v-3f72a59c] {\n    z-index: 3;\n    position: relative;\n    padding-top: 20px;\n}\n.slider-content .news-head hr[data-v-3f72a59c] {\n    border-top: 1px solid #eee;\n    overflow-x: hidden;\n}\n.slider-content .news-cont[data-v-3f72a59c] {\n    padding: 17px 3px 0 3px;\n    z-index: 3;\n    position: relative;\n    line-height: 2;\n}\n.slider-content .news-cont h4[data-v-3f72a59c] {\n    font-size: 16px;\n    line-height: 18px;\n}\n.news-cont .read-more[data-v-3f72a59c] {\n    color: #fff;\n    margin-right: 10px;\n    margin-top: 25px;\n}\n.swiper-slide[data-v-3f72a59c]{\n    width: 100% !important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=style&index=0&id=3c755116&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=style&index=0&id=3c755116&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-deck .card .card-text .notification-icon i[data-v-3c755116]\n  {\n      padding: 10px;\n      border: 1px solid rgba(0, 0, 0, 0.05);\n      border-radius: 50px;\n      background-color: rgba(0, 0, 0, 0.05);\n}\n.card-deck .card .card-height[data-v-3c755116]\n  {\n      overflow-y: scroll;\n      height: 302px;\n      overflow-x: hidden;\n}\n.card-deck .card .card-text .card-notification[data-v-3c755116]\n  {\n      font-size: 13px;\n}\n.card-deck .card .card-text .card-admin[data-v-3c755116]\n  {\n      font-size: 11px;\n      color:#777;\n}\n.card-deck .card .card-text .row[data-v-3c755116]\n  {\n      padding-top:10px;\n      padding-bottom:10px;\n      border-bottom:1px solid #ececec;\n}\n.card-deck .card .card-text .row[data-v-3c755116]:hover\n  {\n      background-color: #f8f9fa;\n}\n.card-deck .card .card-text[data-v-3c755116]\n  {\n      padding:1.25rem;\n}\n.card-deck .card .card-btn[data-v-3c755116]\n  {\n      box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);\n}\n.card-deck .card .card-header .list-group[data-v-3c755116]\n  {\n      width: 50%;\n      float:right;\n      position: absolute;\n      z-index: 99;\n      right: 2px;\n      transition:all 1s;\n}\n.card-deck .card .card-header .list-group .list-group-item[data-v-3c755116]\n  {\n      cursor:pointer;\n}\n.card-deck .card .card-body[data-v-3c755116]\n  {\n      padding: 0;\n}\n.btn-group.b-dropdown.dropdown i[data-v-3c755116]\n  {\n      color:#212529;\n}\n#app .fullscreen[data-v-3c755116]\n  {\n      overflow-x:hidden;\n}\n.card .card-header .dropdowngroup[data-v-3c755116]\n  {\n      width: 50%;\n      float:right;\n      position: absolute;\n      z-index: 99;\n      right: 2px;\n}\n#dropdown-card[data-v-3c755116]\n   {\n       padding: 0.25rem 1.25rem;\n}\n#dropdown-card .btn-group[data-v-3c755116]\n  {\n      display: block !important;\n}\n.fullscreen .card[data-v-3c755116]\n  {\n      box-shadow: none;\n}\n#app .fullscreen[data-v-3c755116]\n  {\n      background:#fff !important;\n}\n.fullscreen .card-title.col-9[data-v-3c755116]\n  {\n      min-width:94%;\n}\n#notification .card-body div>img[data-v-3c755116]\n  {\n      position: absolute;\n      top: 43%;\n      left: 42%;\n}\n#dropdown-card>div[data-v-3c755116]\n  {\n      display: block;\n      text-align: right;\n      /* margin-left: auto; */\n      width: 100%;\n}\n#notification .card-btn .btn-primary[data-v-3c755116]\n  {\n  box-shadow: none;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=style&index=0&id=9794d67a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=style&index=0&id=9794d67a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*nvd3 chart css*/\n.nvd3-panel .panel-body[data-v-9794d67a] {\n    padding: 0 15px;\n}\n.nvd3-chart[data-v-9794d67a] {\n    height: 290px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.ss-wrapper {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    z-index: 1;\r\n    float: left;\n}\n.ss-content {\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 0 32px 0 0;\r\n    position: relative;\r\n    right: -18px;\r\n    overflow: auto;\r\n    box-sizing: border-box;\n}\n.ss-scroll {\r\n    position: relative;\r\n    background: rgba(0, 0, 0, 0.1);\r\n    width: 9px;\r\n    border-radius: 4px;\r\n    top: 0;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n    transition: opacity 0.25s linear;\n}\n.ss-hidden {\r\n    display: none;\n}\n.ss-container:hover .ss-scroll,\r\n.ss-scroll.ss-grabbed,\r\n.ss-scroll.visible {\r\n    opacity: 1;\n}\n.ss-grabbed {\r\n    -o-user-select: none;\r\n    -ms-user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    user-select: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/dashboard1.css?vue&type=style&index=1&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/dashboard1.css?vue&type=style&index=1&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*global changes css*/\r\n\r\n\r\n/*page level*/\n.header-element h3 {\r\n    margin: 19px 0 0 30px;\r\n    font-size: 20px;\r\n    color: #555;\n}\n.header-element small {\r\n    color: #555;\n}\n.header-object {\r\n    font-size: 20px;\r\n    margin: 15px 25px 0 0;\n}\r\n\r\n\r\n/*option search*/\n.header-object .option-search {\r\n    width: 60%;\n}\n.header-object .option-search .search-wrapper {\r\n    border: 1px solid #ccc;\r\n    border-radius: 20px;\r\n    padding: 3px 12px;\r\n    background-color: #fff;\r\n    font-size: small;\n}\n.header-object .option-search .search-wrapper i {\r\n    font-size: small;\r\n    vertical-align: middle;\n}\n.search-wrapper-focus {\r\n    -moz-box-shadow: 0 0 5px #51cbee;\r\n    -webkit-box-shadow: 0 0 5px #51cbee;\r\n    box-shadow: 0 0 5px #51cbee;\r\n    border: 1px solid #51cbee !important;\n}\n.header-object .option-search input {\r\n    width: 75%;\r\n    border: 0;\r\n    height: 20px;\n}\n.header-object .option-search input:focus,\r\n.header-object .option-search input:active {\r\n    outline: none;\n}\n.header-element p {\r\n    color: #e2e2e2;\r\n    font-size: 13px;\r\n    margin: 0 0 8px;\n}\r\n\r\n\r\n/*content*/\r\n\r\n\r\n/*mail tiles sales, visits etc*/\n.card-box {\r\n    padding: 16px 16px 10px 16px;\r\n    border: 1px solid rgba(54, 64, 74, 0.19);\r\n    -webkit-border-radius: 3px;\r\n    border-radius: 3px;\r\n    -moz-border-radius: 5px;\r\n    background-clip: padding-box;\r\n    margin-bottom: 12px;\r\n    background-color: #ffffff;\n}\n.widget-bg-color-icon .bg-icon {\r\n    height: 80px;\r\n    width: 80px;\r\n    text-align: center;\r\n    -webkit-border-radius: 50%;\r\n    border-radius: 50%;\r\n    -moz-border-radius: 50%;\r\n    background-clip: padding-box;\n}\n.widget-bg-color-icon .bg-icon i {\r\n    font-size: 40px;\r\n    line-height: 80px;\n}\n.widget-bg-color-icon hr {\r\n    border: 0;\r\n    height: 1px;\r\n    margin: 10px 0;\r\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6), rgba(0, 0, 0, 0));\n}\n.widget-bg-color-icon p {\r\n    margin: 0;\n}\r\n\r\n\r\n/*Dashboard chart*/\n.main-chart .panel-tabs {\r\n    padding: 2px 0 0 10px;\n}\n.main-chart .panel-tabs .nav-tabs {\r\n    border-bottom: 0;\n}\n.main-chart .panel-tabs .nav-tabs>li {\r\n    font-size: 13px;\r\n    width: 143px;\n}\n.main-chart .panel-tabs .nav-tabs>li span {\r\n    font-size: 16px;\n}\n.main-chart .panel-tabs .nav-tabs>li a {\r\n    padding: 8px 8px;\r\n    font-size: 14px;\r\n    line-height: 18px;\n}\n.main-chart .panel-tabs .nav-tabs .active {\r\n    font-weight: bold;\n}\n.main-chart .card-header {\r\n    padding: 0 1.25rem 0.65rem 1.25rem !important;\n}\n.card-header-tabs .nav-link.active {\r\n    border-top: 3px solid #6699cc;\n}\n#home .lcs_switch {\r\n    position: absolute;\r\n    z-index: 2;\r\n    right: 55px;\r\n    top: 76px;\n}\n#home .form-group {\r\n    margin: -12px;\n}\n.lcs_switch.lcs_on {\r\n    background: #428bca;\n}\r\n\r\n\r\n/*tab-1*/\n.livechart-tab1 {\r\n    width: 100%;\r\n    height: 270px;\n}\r\n\r\n\r\n/*tab-2*/\n#dashboard-chart1 {\r\n    min-height: 265px;\n}\n.redraw-cart {\r\n    transition: 0.5s;\r\n    position: absolute;\r\n    right: 40px;\r\n    font-size: 18px;\n}\n@media(max-width:320px) {\n.redraw-cart {\r\n        right: 15px;\n}\n}\r\n\r\n\r\n/*Dashboard chart1 ends*/\r\n\r\n/*real time chart*/\n.real-timechart .panel-heading {\r\n    background: #fff;\r\n    border-bottom: 0;\n}\n.real-timechart .panel-body {\r\n    padding-bottom: 0;\n}\n.real-timechart .real-value,\r\n.real-timechart .return-value {\r\n    margin: auto;\r\n    font-size: 25px;\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    background-color: #f5f5f5;\r\n    padding-top: 22px;\r\n    margin-bottom: 10px;\n}\n.real-timechart h3 {\r\n    font-size: 17px;\n}\n.real-chart {\r\n    width: 100%;\r\n    height: 120px;\n}\n.real-timechart hr {\r\n    border: 0;\r\n    height: 1px;\r\n    margin: 10px 0;\r\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6), rgba(0, 0, 0, 0));\n}\n.real-timechart .ratings h4 {\r\n    font-weight: bold;\r\n    color: #999;\r\n    font-size: 20px;\r\n    margin: 5px 0;\n}\n.real-timechart .ratings p {\r\n    color: #c2c2c5;\n}\r\n\r\n\r\n\r\n\r\n/*media queries*/\n@media screen and (max-width: 360px) {\n.main-chart .panel-tabs .nav-tabs>li {\r\n        width: 120px;\n}\n}\n@media screen and (max-width: 560px) {\n.right-side {\r\n        padding: 107px 15px 10px 15px;\n}\nbody>.header .logo,\r\n    body>.header .navbar {\r\n        width: 100%;\n}\n}\r\n\r\n/*.btn-secondary:not([disabled]):not(.disabled):active {*/\r\n    /*background-color: #fff !important;*/\r\n/*}*/\n.read-more a{\r\n    text-decoration: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/dashboard1_timeline.css?vue&type=style&index=0&id=6cdc82ec&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/dashboard1_timeline.css?vue&type=style&index=0&id=6cdc82ec&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeline[data-v-6cdc82ec] {\r\n    list-style : none;\r\n    padding    : 20px 10px;\r\n    position   : relative;\n}\n.timeline[data-v-6cdc82ec]:before {\r\n    top              : 0;\r\n    bottom           : 0;\r\n    position         : absolute;\r\n    content          : \" \";\r\n    width            : 3px;\r\n    background-color : #eeeeee;\r\n    right            : 17px;\r\n    margin-left      : -1.5px;\n}\n.timeline > li[data-v-6cdc82ec] {\r\n    margin-bottom : 20px;\r\n    position      : relative;\n}\n.timeline > li[data-v-6cdc82ec]:before,\r\n.timeline > li[data-v-6cdc82ec]:after {\r\n    content : \" \";\r\n    display : table;\n}\n.timeline > li[data-v-6cdc82ec]:after {\r\n    clear : both;\n}\n.timeline > li[data-v-6cdc82ec]:before,\r\n.timeline > li[data-v-6cdc82ec]:after {\r\n    content : \" \";\r\n    display : table;\n}\n.timeline > li[data-v-6cdc82ec]:after {\r\n    clear : both;\n}\n.timeline > li > .timeline-card[data-v-6cdc82ec] {\r\n    width                   : 83%;\r\n    float                   : left;\r\n    background-color        : #fff;\r\n    border                  : 1px solid #d4d4d4;\r\n    border-radius           : 6px;\r\n    border-top-right-radius : 0;\r\n    padding                 : 10px 15px;\r\n    position                : relative;\r\n    -webkit-box-shadow      : 0 1px 6px rgba(0, 0, 0, 0.175);\r\n    box-shadow              : 0 1px 6px rgba(0, 0, 0, 0.175);\n}\n.timeline > li > .timeline-card[data-v-6cdc82ec]:before {\r\n    position      : absolute;\r\n    top           : -1px;\r\n    right         : -15px;\r\n    display       : inline-block;\r\n    border-top    : 2px solid #ccc;\r\n    border-left   : 15px solid #ccc;\r\n    border-right  : 0 solid #ccc;\r\n    border-bottom : 20px solid transparent;\r\n    content       : \" \";\n}\n.timeline > li > .timeline-card[data-v-6cdc82ec]:after {\r\n    position      : absolute;\r\n    top           : 0;\r\n    right         : -14px;\r\n    display       : inline-block;\r\n    border-left   : 14px solid #fff;\r\n    border-right  : 0 solid #fff;\r\n    border-bottom : 18px solid transparent;\r\n    content       : \" \";\n}\n.timeline > li > .timeline-badge[data-v-6cdc82ec] {\r\n    color                      : #fff;\r\n    width                      : 36px;\r\n    top                        : -15px;\r\n    height                     : 36px;\r\n    line-height                : 50px;\r\n    font-size                  : 1.2em;\r\n    text-align                 : center;\r\n    position                   : absolute;\r\n    right                      : -9px;\r\n    margin-left                : -25px;\r\n    z-index                    : 100;\n}\n.timeline > li.timeline-inverted > .timeline-card[data-v-6cdc82ec] {\r\n    float : right;\n}\n.timeline > li.timeline-inverted > .timeline-card[data-v-6cdc82ec]:before {\r\n    border-left-width  : 0;\r\n    border-right-width : 15px;\r\n    left               : -15px;\r\n    right              : auto;\n}\n.timeline > li.timeline-inverted > .timeline-card[data-v-6cdc82ec]:after {\r\n    border-left-width  : 0;\r\n    border-right-width : 14px;\r\n    left               : -14px;\r\n    right              : auto;\n}\n.timeline-title[data-v-6cdc82ec] {\r\n    margin : 0;\r\n    color  : inherit;\n}\n.timeline-body > p[data-v-6cdc82ec],\r\n.timeline-body > ul[data-v-6cdc82ec] {\r\n    margin-bottom : 0;\n}\n.timeline-body > p + p[data-v-6cdc82ec] {\r\n    margin-top : 5px;\n}\n.timeline_card[data-v-6cdc82ec] {\r\n    padding-bottom : 26px;\n}\n.text-default-gray[data-v-6cdc82ec] {\r\n    color : #777;\n}\n.timeline-heading p[data-v-6cdc82ec] {\r\n    margin : 0;\n}\n.personal-chat .card-body[data-v-6cdc82ec]{\r\n    padding: 0;\n}", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=style&index=0&id=31435dd8&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=style&index=0&id=31435dd8&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat_history.vue?vue&type=style&index=0&id=31435dd8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=style&index=0&id=31435dd8&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=style&index=0&id=3f72a59c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=style&index=0&id=3f72a59c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newsfeed.vue?vue&type=style&index=0&id=3f72a59c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=style&index=0&id=3f72a59c&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=style&index=0&id=3c755116&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=style&index=0&id=3c755116&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./notification.vue?vue&type=style&index=0&id=3c755116&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=style&index=0&id=3c755116&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=style&index=0&id=9794d67a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=style&index=0&id=9794d67a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./project_status.vue?vue&type=style&index=0&id=9794d67a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=style&index=0&id=9794d67a&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./vScroll.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/dashboard1.css?vue&type=style&index=1&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/dashboard1.css?vue&type=style&index=1&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./dashboard1.css?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/dashboard1.css?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/dashboard1_timeline.css?vue&type=style&index=0&id=6cdc82ec&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./resources/css/custom_css/dashboard1_timeline.css?vue&type=style&index=0&id=6cdc82ec&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./dashboard1_timeline.css?vue&type=style&index=0&id=6cdc82ec&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/dashboard1_timeline.css?vue&type=style&index=0&id=6cdc82ec&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=template&id=24a62003&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=template&id=24a62003& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card personal-chat" }, [
    _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "card-title" }, [
        _c("img", {
          staticClass: "chat-image rounded-circle float-left",
          attrs: {
            height: "36",
            width: "36",
            src: __webpack_require__(/*! ../../../../img/authors/avatar5.jpg */ "./resources/img/authors/avatar5.jpg"),
            alt: "avatar-image"
          }
        }),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "float-right options" },
        [
          _c(
            "b-dd",
            { staticClass: "attachment-menu" },
            [
              _c("template", { slot: "button-content" }, [
                _c("i", { staticClass: "ti-clip attachment" })
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { staticClass: "attachment-header" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("i", { staticClass: "ti-file text-primary" }),
                  _vm._v("Document")
                ])
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { staticClass: "attachment-header" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("i", { staticClass: "ti-gallery text-primary" }),
                  _vm._v("Gallery")
                ])
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { staticClass: "attachment-header" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("i", { staticClass: "ti-location-arrow text-primary" }),
                  _vm._v("Location")
                ])
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { staticClass: "attachment-header" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("i", { staticClass: "ti-camera text-primary" }),
                  _vm._v("Camera")
                ])
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "b-dd",
            { staticClass: "content-menu" },
            [
              _c("template", { slot: "button-content" }, [
                _c("i", { staticClass: "ti-more-alt more" })
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { staticClass: "content-header" }, [
                _vm._v("\n                    Profile\n                ")
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { staticClass: "content-header" }, [
                _vm._v("\n                    Media\n                ")
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { staticClass: "content-header" }, [
                _vm._v("\n                    Mute\n                ")
              ]),
              _vm._v(" "),
              _c("b-dropdown-item", { staticClass: "content-header" }, [
                _vm._v("\n                    More\n                ")
              ])
            ],
            2
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body p-0" }, [
      _c(
        "div",
        { staticClass: "chat-conversation" },
        [
          _c(
            "v-scroll",
            {
              attrs: {
                height: _vm.height,
                color: _vm.bar_color,
                "max-height": "100%",
                "min-height": "120px",
                "bar-width": _vm.bar_width,
                alwaysvisible: _vm.visible
              }
            },
            [
              _c("ul", { staticClass: "conversation-list" }, [
                _c("li", { staticClass: "clearfix odd conversers1" }, [
                  _c("div", { staticClass: "conversation-text" }, [
                    _c("div", { staticClass: "ctext-wrap mt-2 m-t-10" }, [
                      _c("p", { staticClass: "text-left" }, [
                        _vm._v(
                          "\n                                    Hello Wilton, are the review papers ready?\n                                    "
                        ),
                        _c("i", { staticClass: "text-right" }, [
                          _vm._v("8:31 pm")
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "clearfix  m-t-10 conversers2" }, [
                  _c("div", { staticClass: "conversation-text" }, [
                    _c("div", { staticClass: "ctext-wrap mt-2" }, [
                      _c("p", [
                        _vm._v(
                          "\n                                    Not yet, it will take a bit of time for you to get them.\n                                    "
                        ),
                        _c("br"),
                        _c("i", { staticClass: "text-right" }, [
                          _vm._v("8:31 pm")
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "clearfix odd m-t-10 conversers1" }, [
                  _c("div", { staticClass: "conversation-text" }, [
                    _c("div", { staticClass: "ctext-wrap mt-2" }, [
                      _c("p", { staticClass: "text-left" }, [
                        _vm._v(
                          "\n                                    Treat this on urgent Basis.\n                                    "
                        ),
                        _c("i", { staticClass: "text-right" }, [
                          _vm._v("8:33 pm")
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "clearfix  m-t-10 conversers2" }, [
                  _c("div", { staticClass: "conversation-text" }, [
                    _c("div", { staticClass: "ctext-wrap mt-2" }, [
                      _c("p", [
                        _vm._v(
                          "\n                                    I will make it as early as possible.\n                                    "
                        ),
                        _c("br"),
                        _c("i", { staticClass: "text-right" }, [
                          _vm._v("8:34 pm")
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "clearfix odd m-t-10 conversers1" }, [
                  _c("div", { staticClass: "conversation-text" }, [
                    _c("div", { staticClass: "ctext-wrap mt-2" }, [
                      _c("p", { staticClass: "text-left" }, [
                        _vm._v(
                          "\n                                    Okay.\n                                    "
                        ),
                        _c("i", { staticClass: "text-right" }, [
                          _vm._v("8:35 pm")
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "clearfix m-t-10 conversers2" }, [
                  _c("div", { staticClass: "conversation-text" }, [
                    _c("div", { staticClass: "ctext-wrap mt-2" }, [
                      _c("p", [
                        _vm._v(
                          "\n                                    If there is anything else..\n                                    "
                        ),
                        _c("br"),
                        _c("i", { staticClass: "text-right" }, [
                          _vm._v("8:35 pm")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _vm._m(1)
        ],
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
    return _c("div", { staticClass: "header-elements float-left" }, [
      _vm._v("Wilton zeph\n                "),
      _c("br"),
      _vm._v(" "),
      _c("small", { staticClass: "status" }, [_c("b", [_vm._v("Online")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { attrs: { id: "main_input_box" } }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 m-b-15" }, [
          _c("div", { staticClass: "input-group text-field" }, [
            _c("input", {
              staticClass: "form-control chat-input custom_textbox",
              attrs: {
                type: "search",
                id: "custom_textbox",
                placeholder: "Type a message",
                required: ""
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "input-group-append" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success send-btn",
                  attrs: { type: "submit" }
                },
                [
                  _c("i", {
                    staticClass: "menu-icon ti-location-arrow text-white"
                  })
                ]
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=template&id=31435dd8&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=template&id=31435dd8&scoped=true& ***!
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
  return _c(
    "div",
    { class: { open: this.$store.state.right_open }, attrs: { id: "right1" } },
    [
      _c(
        "div",
        { staticClass: "right-chatbox-heading" },
        [
          _c(
            "b-card",
            { attrs: { "header-tag": "header", "footer-tag": "footer" } },
            [
              _c(
                "h4",
                {
                  staticClass: "mb-0",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [_vm._v("Chat")]
              ),
              _vm._v(" "),
              _c(
                "b-tabs",
                [
                  _c(
                    "b-tab",
                    { attrs: { title: "Recent Chat", active: "" } },
                    [
                      _c(
                        "b-list-group",
                        [
                          _c(
                            "b-list-group-item",
                            {
                              staticClass:
                                "d-flex justify-content-between align-items-center",
                              attrs: { button: "" }
                            },
                            [
                              _c("span", [
                                _c("img", {
                                  staticClass: "img-fluid mr-4",
                                  attrs: {
                                    src: __webpack_require__(/*! ../../../../img/authors/chat1.jpg */ "./resources/img/authors/chat1.jpg"),
                                    alt: "image missing"
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", [_vm._v("Sheela Pande")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-badge",
                                { attrs: { variant: "light", pill: "" } },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-circle",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            {
                              staticClass:
                                "d-flex justify-content-between align-items-center",
                              attrs: { button: "" }
                            },
                            [
                              _c("span", [
                                _c("img", {
                                  staticClass: "img-fluid mr-4",
                                  attrs: {
                                    src: __webpack_require__(/*! ../../../../img/authors/chat2.jpg */ "./resources/img/authors/chat2.jpg"),
                                    alt: "image missing"
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", [_vm._v("Rahena")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-badge",
                                { attrs: { variant: "light", pill: "" } },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-circle",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            {
                              staticClass:
                                "d-flex justify-content-between align-items-center",
                              attrs: { button: "" }
                            },
                            [
                              _c("span", [
                                _c("img", {
                                  staticClass: "img-fluid mr-4",
                                  attrs: {
                                    src: __webpack_require__(/*! ../../../../img/authors/chat3.jpg */ "./resources/img/authors/chat3.jpg"),
                                    alt: "image missing"
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", [_vm._v("Mark borne")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-badge",
                                { attrs: { variant: "light", pill: "" } },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-circle",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            {
                              staticClass:
                                "d-flex justify-content-between align-items-center",
                              attrs: { button: "" }
                            },
                            [
                              _c("span", [
                                _c("img", {
                                  staticClass: "img-fluid mr-4",
                                  attrs: {
                                    src: __webpack_require__(/*! ../../../../img/authors/chat2.jpg */ "./resources/img/authors/chat2.jpg"),
                                    alt: "image missing"
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", [_vm._v(" Ashiya Lius")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-badge",
                                { attrs: { variant: "Secondary", pill: "" } },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-circle",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            {
                              staticClass:
                                "d-flex justify-content-between align-items-center",
                              attrs: { button: "" }
                            },
                            [
                              _c("span", [
                                _c("img", {
                                  staticClass: "img-fluid mr-4",
                                  attrs: {
                                    src: __webpack_require__(/*! ../../../../img/authors/chat2.jpg */ "./resources/img/authors/chat2.jpg"),
                                    alt: "image missing"
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", [_vm._v(" Ashiya Lius")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-badge",
                                {
                                  staticClass: "previou-chat",
                                  attrs: { variant: "Secondary", pill: "" }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fa fa-circle",
                                    attrs: { "aria-hidden": "true" }
                                  })
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tab",
                    { attrs: { title: "Previous Chat" } },
                    [
                      _c(
                        "b-list-group",
                        [
                          _c(
                            "b-list-group-item",
                            {
                              staticClass:
                                "d-flex justify-content-between align-items-center",
                              attrs: { button: "" }
                            },
                            [
                              _c("span", [
                                _c("img", {
                                  staticClass: "img-fluid mr-4",
                                  attrs: {
                                    src: __webpack_require__(/*! ../../../../img/authors/chat1.jpg */ "./resources/img/authors/chat1.jpg"),
                                    alt: "image missing"
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", [_vm._v("Sheela Pande")])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            {
                              staticClass:
                                "d-flex justify-content-between align-items-center",
                              attrs: { button: "" }
                            },
                            [
                              _c("span", [
                                _c("img", {
                                  staticClass: "img-fluid mr-4",
                                  attrs: {
                                    src: __webpack_require__(/*! ../../../../img/authors/chat2.jpg */ "./resources/img/authors/chat2.jpg"),
                                    alt: "image missing"
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", [_vm._v("Rahena")])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-list-group-item",
                            {
                              staticClass:
                                "d-flex justify-content-between align-items-center",
                              attrs: { button: "" }
                            },
                            [
                              _c("span", [
                                _c("img", {
                                  staticClass: "img-fluid mr-4",
                                  attrs: {
                                    src: __webpack_require__(/*! ../../../../img/authors/chat3.jpg */ "./resources/img/authors/chat3.jpg"),
                                    alt: "image missing"
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", [_vm._v("Mark borne")])
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=template&id=3f72a59c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=template&id=3f72a59c&scoped=true& ***!
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
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      [
        _c(
          "swiper",
          { ref: "mySwiper", attrs: { options: _vm.swiperOption } },
          [
            _c("swiper-slide", { staticClass: "gradient-color" }, [
              _c("div", { staticClass: "slider-content" }, [
                _c("div", { staticClass: "news-head" }, [
                  _c("h3", [_vm._v("The Need For Inc. in Energy")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "float-right" }, [
                    _vm._v("Yesterday")
                  ]),
                  _vm._v(" "),
                  _c("hr")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "news-cont" }, [
                  _c("h4", [
                    _vm._v(
                      "The strategy of adjusting and optimizing energy, using systems\n                            and\n                            procedures so as to reduce energy requirements per unit of\n                            output\n                            while holding ..."
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-right read-more" }, [
                    _c(
                      "a",
                      {
                        staticClass: "read-more",
                        attrs: { href: "javascript:void(0)" }
                      },
                      [
                        _vm._v("Read\n                            more "),
                        _c("i", { staticClass: "ti-angle-double-right" })
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("swiper-slide", { staticClass: "gradient-color" }, [
              _c("div", { staticClass: "slider-content" }, [
                _c("div", { staticClass: "news-head" }, [
                  _c("h3", [_vm._v("What to expect in the final race..")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "float-right" }, [
                    _vm._v("5min ago")
                  ]),
                  _vm._v(" "),
                  _c("hr")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "news-cont" }, [
                  _c("h4", [
                    _vm._v(
                      "The strategy of adjusting and optimizing energy, using systems\n                            and\n                            procedures so as to reduce energy per unit of output\n                            while holding ..."
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-right read-more" }, [
                    _c(
                      "a",
                      {
                        staticClass: "read-more",
                        attrs: { href: "javascript:void(0)" }
                      },
                      [
                        _vm._v("Read\n                            more "),
                        _c("i", { staticClass: "ti-angle-double-right" })
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("swiper-slide", { staticClass: "gradient-color" }, [
              _c("div", { staticClass: "slider-content" }, [
                _c("div", { staticClass: "news-head" }, [
                  _c("h3", [_vm._v("First ever Largest open Air Purifier")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "float-right" }, [
                    _vm._v("On 28th Oct")
                  ]),
                  _vm._v(" "),
                  _c("hr")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "news-cont" }, [
                  _c("h4", [
                    _vm._v(
                      "The strategy of adjusting and optimizing energy, using systems\n                            and\n                            procedures so as to reduce energy requirements per unit of\n                            output\n                            while holding ..."
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-right read-more" }, [
                    _c(
                      "a",
                      {
                        staticClass: "read-more",
                        attrs: { href: "javascript:void(0)" }
                      },
                      [
                        _vm._v("Read\n                            more "),
                        _c("i", { staticClass: "ti-angle-double-right" })
                      ]
                    )
                  ])
                ])
              ])
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=template&id=3c755116&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=template&id=3c755116&scoped=true& ***!
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
                { attrs: { deck: "", id: "notification" } },
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
                        _c("h3", { staticClass: "card-title mt-2" }, [
                          _vm._v(" Notification")
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
                                    { staticClass: "header-noti-icon" },
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
                                  { staticClass: "float-right" },
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
                                        _c("span", { staticClass: "pr-3" }, [
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
                    _c("div", { staticClass: "card-text card-height" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "mr-3 notification-icon col-1" },
                          [
                            _c("i", {
                              staticClass: "fa fa-bell",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-7" }, [
                          _c("span", { staticClass: "card-admin" }, [
                            _vm._v("Admin")
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          _c("span", { staticClass: "card-notification" }, [
                            _vm._v("Header and footers.")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "float-right mt-3 col-2 col-sm-3 px-0 card-admin"
                          },
                          [_vm._v("1 Hour ago")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "mr-3 notification-icon col-1" },
                          [
                            _c("i", {
                              staticClass: "fa fa-bell",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-7" }, [
                          _c("span", { staticClass: "card-admin" }, [
                            _vm._v("Admin")
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          _c("span", [_vm._v("Header and footers.")])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "float-right mt-3 col-2 col-sm-3 px-0 card-admin"
                          },
                          [_vm._v("1 Hour ago")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "mr-3 notification-icon col-1" },
                          [
                            _c("i", {
                              staticClass: "fa fa-bell",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-7" }, [
                          _c("span", { staticClass: "card-admin" }, [
                            _vm._v("Admin")
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          _c("span", [_vm._v("Payment Receive.")])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "float-right mt-3 col-2 col-sm-3 px-0 card-admin "
                          },
                          [_vm._v("1 Hour ago")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "mr-3 notification-icon col-1" },
                          [
                            _c("i", {
                              staticClass: "fa fa-exclamation-triangle",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-7" }, [
                          _c("span", { staticClass: "card-admin" }, [
                            _vm._v("Admin")
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          _c("span", [_vm._v("System Error.")])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "float-right mt-3 col-2 col-sm-3 px-0 card-admin"
                          },
                          [_vm._v("1 Hour ago")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "mr-3 notification-icon col-1" },
                          [
                            _c("i", {
                              staticClass: "fa fa-file",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-7" }, [
                          _c("span", { staticClass: "card-admin" }, [
                            _vm._v("Admin")
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          _c("span", [_vm._v("Junk files cleaned")])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "float-right mt-3 col-2 col-sm-3 px-0 card-admin"
                          },
                          [_vm._v("1 Hour ago")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "mr-3 notification-icon col-1" },
                          [
                            _c("i", {
                              staticClass: "fa fa-info-circle",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-7" }, [
                          _c("span", { staticClass: "card-admin" }, [
                            _vm._v("Admin")
                          ]),
                          _c("br"),
                          _vm._v(" "),
                          _c("span", [_vm._v("Apps installed")])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "float-right mt-3 col-2 col-sm-3 px-0 card-admin"
                          },
                          [_vm._v("1 Hour ago")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "card-text card-btn" },
                      [
                        _c(
                          "b-button",
                          { attrs: { href: "#", variant: "primary" } },
                          [_vm._v("View all")]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "float-right mt-2" }, [
                          _vm._v("Updated 10 minutes ago")
                        ])
                      ],
                      1
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=template&id=9794d67a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=template&id=9794d67a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card nvd3-card" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "div",
        {
          staticClass: "nvd3-chart line-chart text-center",
          attrs: { "data-x-grid": "false" }
        },
        [_c("svg")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Project Status")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/timeline.vue?vue&type=template&id=6cdc82ec&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/dashboard/dashboard_one/timeline.vue?vue&type=template&id=6cdc82ec&scoped=true& ***!
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
  return _c("div", { staticClass: "card" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("div", [
        _c("ul", { staticClass: "timeline timeline-update" }, [
          _c("li", [
            _c(
              "div",
              { staticClass: "timeline-badge primary wow lightSpeedIn center" },
              [
                _c("img", {
                  staticClass: "rounded-circle float-right",
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/authors/avatar1.jpg */ "./resources/img/authors/avatar1.jpg"),
                    height: "36",
                    width: "36",
                    alt: "avatar-image"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _vm._m(1)
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "div",
              { staticClass: "timeline-badge info wow lightSpeedIn center" },
              [
                _c("img", {
                  staticClass: "rounded-circle float-right",
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/authors/avatar.jpg */ "./resources/img/authors/avatar.jpg"),
                    height: "36",
                    width: "36",
                    alt: "avatar-image"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _vm._m(2)
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "div",
              { staticClass: "timeline-badge default wow lightSpeedIn center" },
              [
                _c("img", {
                  staticClass: "rounded-circle float-right",
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/authors/avatar2.jpg */ "./resources/img/authors/avatar2.jpg"),
                    height: "36",
                    width: "36",
                    alt: "avatar-image"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _vm._m(3)
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "div",
              { staticClass: "timeline-badge primary wow lightSpeedIn center" },
              [
                _c("img", {
                  staticClass: "rounded-circle float-right",
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/authors/avatar3.jpg */ "./resources/img/authors/avatar3.jpg"),
                    height: "36",
                    width: "36",
                    alt: "avatar-image"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _vm._m(4)
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "div",
              { staticClass: "timeline-badge info wow lightSpeedIn center" },
              [
                _c("img", {
                  staticClass: "rounded-circle float-right",
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/authors/avatar4.jpg */ "./resources/img/authors/avatar4.jpg"),
                    height: "36",
                    width: "36",
                    alt: "avatar-image"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _vm._m(5)
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "div",
              { staticClass: "timeline-badge default wow lightSpeedIn center" },
              [
                _c("img", {
                  staticClass: "rounded-circle float-right",
                  attrs: {
                    src: __webpack_require__(/*! ../../../../img/authors/avatar2.jpg */ "./resources/img/authors/avatar2.jpg"),
                    height: "36",
                    width: "36",
                    alt: "avatar-image"
                  }
                })
              ]
            ),
            _vm._v(" "),
            _vm._m(6)
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
      _c("h3", { staticClass: "card-title" }, [_vm._v("Timeline")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "timeline-card wow slideInLeft",
        staticStyle: { display: "inline-block" }
      },
      [
        _c("div", { staticClass: "timeline-heading" }, [
          _c("h4", { staticClass: "timeline-title" }, [
            _vm._v("Jade Project's Status ")
          ]),
          _vm._v(" "),
          _c("p", [
            _c("small", { staticClass: "text-primary" }, [
              _vm._v("11 hours ago")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "timeline-body" }, [
          _c("p", [
            _vm._v(
              "\n                                Jade Project team has completed their first phase.\n                            "
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-card wow slideInLeft" }, [
      _c("div", { staticClass: "timeline-heading" }, [
        _c("h4", { staticClass: "timeline-title" }, [_vm._v("Tinder Project")]),
        _vm._v(" "),
        _c("p", [
          _c("small", { staticClass: "text-primary" }, [
            _vm._v("Sept 10, 2016")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "timeline-body" }, [
        _c("p", [
          _vm._v(
            "\n                                Tinder Project's Final review has completed.\n                            "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-card wow slideInLeft" }, [
      _c("div", { staticClass: "timeline-heading" }, [
        _c("h4", { staticClass: "timeline-title" }, [
          _vm._v("A new branch in Virginia.")
        ]),
        _vm._v(" "),
        _c("p", [
          _c("small", { staticClass: "text-primary" }, [_vm._v("Jan 02, 2017")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "timeline-body" }, [
        _c("p", [
          _vm._v(
            "\n                                Planning to have a branch in virginia in the coming year.\n                            "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "timeline-card wow slideInLeft",
        staticStyle: { display: "inline-block" }
      },
      [
        _c("div", { staticClass: "timeline-heading" }, [
          _c("h4", { staticClass: "timeline-title" }, [
            _vm._v("Daily Status ")
          ]),
          _vm._v(" "),
          _c("p", [
            _c("small", { staticClass: "text-primary" }, [_vm._v("2days ago")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "timeline-body" }, [
          _c("p", [
            _vm._v(
              "\n                                Manager schedules to keep a daily project status track.\n                            "
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-card wow slideInLeft" }, [
      _c("div", { staticClass: "timeline-heading" }, [
        _c("h4", { staticClass: "timeline-title" }, [
          _vm._v("Performance report")
        ]),
        _vm._v(" "),
        _c("p", [
          _c("small", { staticClass: "text-primary" }, [_vm._v("Aug 10, 2016")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "timeline-body" }, [
        _c("p", [
          _vm._v(
            "\n                                Richard, updated his Team over view Performance report.\n                            "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-card wow slideInLeft" }, [
      _c("div", { staticClass: "timeline-heading" }, [
        _c("h4", { staticClass: "timeline-title" }, [
          _vm._v("Project Evaluation")
        ]),
        _vm._v(" "),
        _c("p", [
          _c("small", { staticClass: "text-primary" }, [_vm._v("Oct 05, 2016")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "timeline-body" }, [
        _c("p", [
          _vm._v(
            "\n                                Variations Project Evaluation is going on to highlight\n                                project.\n                            "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/index.vue?vue&type=template&id=05313406&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/pages/index.vue?vue&type=template&id=05313406& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-sm-6 col-md-6 col-xl-3 " }, [
        _c("div", { attrs: { slot: "front" }, slot: "front" }, [_vm._m(0)])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-md-6 col-xl-3" }, [
        _c("div", { attrs: { slot: "front" }, slot: "front" }, [_vm._m(1)])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-md-6 col-xl-3" }, [
        _c("div", { attrs: { slot: "front" }, slot: "front" }, [_vm._m(2)])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6 col-md-6 col-xl-3" }, [
        _c("div", { attrs: { slot: "front" }, slot: "front" }, [_vm._m(3)])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-8 col-12" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-sm-12" },
            [
              _c(
                "b-card",
                { staticClass: "main-chart", attrs: { "no-body": "" } },
                [
                  _c(
                    "b-tabs",
                    { ref: "tabs", attrs: { card: "" } },
                    [
                      _c(
                        "b-tab",
                        { attrs: { title: "Live Feed", active: "" } },
                        [
                          _c("div", { staticClass: "form-group text-right" }, [
                            _c("input", {
                              staticClass: "float-right",
                              attrs: {
                                type: "checkbox",
                                id: "toggle_real",
                                name: "my-checkbox",
                                "data-size": "small",
                                checked: ""
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "livechart-tab1 m-t-10",
                            attrs: { id: "live-chart" }
                          })
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-5" }, [_c("newsfeed")], 1),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-12 " }, [_c("project_status")], 1)
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-4  col-12" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-12 col-sm-6 col-lg-6" },
            [_c("timeline")],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-12 col-lg-6 col-sm-6" },
            [_c("chat")],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-8 col-sm-6 col-lg-6" },
        [_c("chat_history")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-xl-4 col-sm-6 col-lg-6" },
        [_c("notification")],
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
    return _c("div", { staticClass: "widget-bg-color-icon card-box" }, [
      _c("div", { staticClass: "bg-icon float-left" }, [
        _c("i", { staticClass: "ti-eye text-warning" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-right" }, [
        _c("h3", { staticClass: "text-dark" }, [_c("b", [_vm._v("3752")])]),
        _vm._v(" "),
        _c("p", [_vm._v("Daily Visits")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget-bg-color-icon card-box" }, [
      _c("div", { staticClass: "bg-icon float-left" }, [
        _c("i", { staticClass: "ti-shopping-cart text-success" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-right" }, [
        _c("h3", [
          _c("b", { attrs: { id: "widget_count3" } }, [_vm._v("3251")])
        ]),
        _vm._v(" "),
        _c("p", [_vm._v("Sales status")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget-bg-color-icon card-box" }, [
      _c("div", { staticClass: "bg-icon float-left" }, [
        _c("i", { staticClass: "ti-thumb-up text-danger" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-right" }, [
        _c("h3", { staticClass: "text-dark" }, [_c("b", [_vm._v("1532")])]),
        _vm._v(" "),
        _c("p", [_vm._v("Hits")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget-bg-color-icon card-box" }, [
      _c("div", { staticClass: "bg-icon float-left" }, [
        _c("i", { staticClass: "ti-user text-info" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-right" }, [
        _c("h3", { staticClass: "text-dark" }, [_c("b", [_vm._v("1252")])]),
        _vm._v(" "),
        _c("p", [_vm._v("Subscribers")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-7" }, [
      _c("div", { staticClass: "card real-timechart" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-6 text-center" }, [
              _c("h3", {}, [_vm._v("Real-Time Visits")]),
              _vm._v(" "),
              _c("div", { staticClass: "real-value" }, [
                _c("p", [_c("span"), _vm._v("k")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6 text-center" }, [
              _c("h3", {}, [_vm._v("Returning Visitors")]),
              _vm._v(" "),
              _c("div", { staticClass: "return-value" }, [
                _c("p", [_c("span"), _vm._v("k")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "real-chart",
            attrs: { id: "realtime-views" }
          }),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "row ratings" }, [
            _c("div", { staticClass: "col-4 text-center" }, [
              _c("h4", [_vm._v("81%")]),
              _vm._v(" "),
              _c("p", [_vm._v("Satisfied")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 text-center" }, [
              _c("h4", [_vm._v("8%")]),
              _vm._v(" "),
              _c("p", [_vm._v("Unsatisfied")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 text-center" }, [
              _c("h4", [_vm._v("11%")]),
              _vm._v(" "),
              _c("p", [_vm._v("NA")])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/plugins/scroll/vScroll.vue?vue&type=template&id=6ba02bfe&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/components/plugins/scroll/vScroll.vue?vue&type=template&id=6ba02bfe& ***!
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
  return _c(
    "div",
    {
      ref: "vscroll",
      staticClass: "ss-container",
      style: {
        height: _vm.height,
        "min-height": _vm.minHeight,
        "max-height": _vm.maxHeight
      }
    },
    [
      _c("div", { staticClass: "ss-wrapper" }, [
        _c(
          "div",
          {
            ref: "content",
            staticClass: "ss-content",
            on: { scroll: _vm.moveBar, mouseenter: _vm.moveBar }
          },
          [_vm._t("default")],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", {
        ref: "bar",
        staticClass: "ss-scroll",
        class: { "ss-grabbed": _vm.grabbed, visible: _vm.alwaysvisible }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/chat.vue":
/*!*********************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/chat.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_24a62003___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=24a62003& */ "./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=template&id=24a62003&");
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ "./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&lang=css& */ "./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_24a62003___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_24a62003___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dashboard/dashboard_one/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=template&id=24a62003&":
/*!****************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=template&id=24a62003& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_24a62003___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=template&id=24a62003& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat.vue?vue&type=template&id=24a62003&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_24a62003___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_24a62003___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/chat_history.vue":
/*!*****************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/chat_history.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_history_vue_vue_type_template_id_31435dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat_history.vue?vue&type=template&id=31435dd8&scoped=true& */ "./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=template&id=31435dd8&scoped=true&");
/* harmony import */ var _chat_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat_history.vue?vue&type=script&lang=js& */ "./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _chat_history_vue_vue_type_style_index_0_id_31435dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat_history.vue?vue&type=style&index=0&id=31435dd8&scoped=true&lang=css& */ "./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=style&index=0&id=31435dd8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_history_vue_vue_type_template_id_31435dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_history_vue_vue_type_template_id_31435dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31435dd8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dashboard/dashboard_one/chat_history.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat_history.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_history_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=style&index=0&id=31435dd8&scoped=true&lang=css&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=style&index=0&id=31435dd8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_history_vue_vue_type_style_index_0_id_31435dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat_history.vue?vue&type=style&index=0&id=31435dd8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=style&index=0&id=31435dd8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_history_vue_vue_type_style_index_0_id_31435dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_history_vue_vue_type_style_index_0_id_31435dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_history_vue_vue_type_style_index_0_id_31435dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_history_vue_vue_type_style_index_0_id_31435dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_history_vue_vue_type_style_index_0_id_31435dd8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=template&id=31435dd8&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=template&id=31435dd8&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_history_vue_vue_type_template_id_31435dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./chat_history.vue?vue&type=template&id=31435dd8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/chat_history.vue?vue&type=template&id=31435dd8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_history_vue_vue_type_template_id_31435dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_history_vue_vue_type_template_id_31435dd8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/newsfeed.vue":
/*!*************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/newsfeed.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _newsfeed_vue_vue_type_template_id_3f72a59c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newsfeed.vue?vue&type=template&id=3f72a59c&scoped=true& */ "./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=template&id=3f72a59c&scoped=true&");
/* harmony import */ var _newsfeed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsfeed.vue?vue&type=script&lang=js& */ "./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _newsfeed_vue_vue_type_style_index_0_id_3f72a59c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsfeed.vue?vue&type=style&index=0&id=3f72a59c&scoped=true&lang=css& */ "./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=style&index=0&id=3f72a59c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _newsfeed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _newsfeed_vue_vue_type_template_id_3f72a59c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _newsfeed_vue_vue_type_template_id_3f72a59c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3f72a59c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dashboard/dashboard_one/newsfeed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newsfeed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newsfeed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_newsfeed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=style&index=0&id=3f72a59c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=style&index=0&id=3f72a59c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newsfeed_vue_vue_type_style_index_0_id_3f72a59c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newsfeed.vue?vue&type=style&index=0&id=3f72a59c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=style&index=0&id=3f72a59c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newsfeed_vue_vue_type_style_index_0_id_3f72a59c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newsfeed_vue_vue_type_style_index_0_id_3f72a59c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newsfeed_vue_vue_type_style_index_0_id_3f72a59c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newsfeed_vue_vue_type_style_index_0_id_3f72a59c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_newsfeed_vue_vue_type_style_index_0_id_3f72a59c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=template&id=3f72a59c&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=template&id=3f72a59c&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newsfeed_vue_vue_type_template_id_3f72a59c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./newsfeed.vue?vue&type=template&id=3f72a59c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/newsfeed.vue?vue&type=template&id=3f72a59c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newsfeed_vue_vue_type_template_id_3f72a59c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_newsfeed_vue_vue_type_template_id_3f72a59c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/notification.vue":
/*!*****************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/notification.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_vue_vue_type_template_id_3c755116_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.vue?vue&type=template&id=3c755116&scoped=true& */ "./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=template&id=3c755116&scoped=true&");
/* harmony import */ var _notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.vue?vue&type=script&lang=js& */ "./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _notification_vue_vue_type_style_index_0_id_3c755116_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.vue?vue&type=style&index=0&id=3c755116&scoped=true&lang=css& */ "./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=style&index=0&id=3c755116&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notification_vue_vue_type_template_id_3c755116_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notification_vue_vue_type_template_id_3c755116_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c755116",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dashboard/dashboard_one/notification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./notification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=style&index=0&id=3c755116&scoped=true&lang=css&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=style&index=0&id=3c755116&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_style_index_0_id_3c755116_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./notification.vue?vue&type=style&index=0&id=3c755116&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=style&index=0&id=3c755116&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_style_index_0_id_3c755116_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_style_index_0_id_3c755116_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_style_index_0_id_3c755116_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_style_index_0_id_3c755116_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_style_index_0_id_3c755116_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=template&id=3c755116&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=template&id=3c755116&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_template_id_3c755116_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./notification.vue?vue&type=template&id=3c755116&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/notification.vue?vue&type=template&id=3c755116&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_template_id_3c755116_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notification_vue_vue_type_template_id_3c755116_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/project_status.vue":
/*!*******************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/project_status.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_status_vue_vue_type_template_id_9794d67a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_status.vue?vue&type=template&id=9794d67a&scoped=true& */ "./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=template&id=9794d67a&scoped=true&");
/* harmony import */ var _project_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project_status.vue?vue&type=script&lang=js& */ "./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _project_status_vue_vue_type_style_index_0_id_9794d67a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project_status.vue?vue&type=style&index=0&id=9794d67a&scoped=true&lang=css& */ "./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=style&index=0&id=9794d67a&scoped=true&lang=css&");
/* harmony import */ var nvd3_build_nv_d3_min_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nvd3/build/nv.d3.min.css?vue&type=style&index=1&lang=css& */ "./node_modules/nvd3/build/nv.d3.min.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _project_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _project_status_vue_vue_type_template_id_9794d67a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _project_status_vue_vue_type_template_id_9794d67a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9794d67a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dashboard/dashboard_one/project_status.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_project_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./project_status.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_project_status_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=style&index=0&id=9794d67a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=style&index=0&id=9794d67a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_project_status_vue_vue_type_style_index_0_id_9794d67a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./project_status.vue?vue&type=style&index=0&id=9794d67a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=style&index=0&id=9794d67a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_project_status_vue_vue_type_style_index_0_id_9794d67a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_project_status_vue_vue_type_style_index_0_id_9794d67a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_project_status_vue_vue_type_style_index_0_id_9794d67a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_project_status_vue_vue_type_style_index_0_id_9794d67a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_project_status_vue_vue_type_style_index_0_id_9794d67a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=template&id=9794d67a&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=template&id=9794d67a&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_project_status_vue_vue_type_template_id_9794d67a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./project_status.vue?vue&type=template&id=9794d67a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/project_status.vue?vue&type=template&id=9794d67a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_project_status_vue_vue_type_template_id_9794d67a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_project_status_vue_vue_type_template_id_9794d67a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/timeline.vue":
/*!*************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/timeline.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeline_vue_vue_type_template_id_6cdc82ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline.vue?vue&type=template&id=6cdc82ec&scoped=true& */ "./resources/components/pages/dashboard/dashboard_one/timeline.vue?vue&type=template&id=6cdc82ec&scoped=true&");
/* harmony import */ var _timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.vue?vue&type=script&lang=js& */ "./resources/components/pages/dashboard/dashboard_one/timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _css_custom_css_dashboard1_timeline_css_vue_type_style_index_0_id_6cdc82ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../css/custom_css/dashboard1_timeline.css?vue&type=style&index=0&id=6cdc82ec&scoped=true&lang=css& */ "./resources/css/custom_css/dashboard1_timeline.css?vue&type=style&index=0&id=6cdc82ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _timeline_vue_vue_type_template_id_6cdc82ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _timeline_vue_vue_type_template_id_6cdc82ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6cdc82ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/dashboard/dashboard_one/timeline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/timeline.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/timeline.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./timeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/dashboard/dashboard_one/timeline.vue?vue&type=template&id=6cdc82ec&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/components/pages/dashboard/dashboard_one/timeline.vue?vue&type=template&id=6cdc82ec&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_template_id_6cdc82ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./timeline.vue?vue&type=template&id=6cdc82ec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/dashboard/dashboard_one/timeline.vue?vue&type=template&id=6cdc82ec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_template_id_6cdc82ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_template_id_6cdc82ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/pages/index.vue":
/*!**********************************************!*\
  !*** ./resources/components/pages/index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_05313406___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=05313406& */ "./resources/components/pages/index.vue?vue&type=template&id=05313406&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/components/pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var LC_switch_lc_switch_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! LC-switch/lc_switch.css?vue&type=style&index=0&lang=css& */ "./node_modules/LC-switch/lc_switch.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _css_custom_css_dashboard1_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/custom_css/dashboard1.css?vue&type=style&index=1&lang=css& */ "./resources/css/custom_css/dashboard1.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_05313406___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_05313406___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/pages/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/pages/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/components/pages/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/pages/index.vue?vue&type=template&id=05313406&":
/*!*****************************************************************************!*\
  !*** ./resources/components/pages/index.vue?vue&type=template&id=05313406& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_05313406___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=05313406& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/pages/index.vue?vue&type=template&id=05313406&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_05313406___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_05313406___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/components/plugins/scroll/vScroll.vue":
/*!*********************************************************!*\
  !*** ./resources/components/plugins/scroll/vScroll.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vScroll_vue_vue_type_template_id_6ba02bfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vScroll.vue?vue&type=template&id=6ba02bfe& */ "./resources/components/plugins/scroll/vScroll.vue?vue&type=template&id=6ba02bfe&");
/* harmony import */ var _vScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vScroll.vue?vue&type=script&lang=js& */ "./resources/components/plugins/scroll/vScroll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vScroll.vue?vue&type=style&index=0&lang=css& */ "./resources/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _vScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vScroll_vue_vue_type_template_id_6ba02bfe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vScroll_vue_vue_type_template_id_6ba02bfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/components/plugins/scroll/vScroll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/components/plugins/scroll/vScroll.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/components/plugins/scroll/vScroll.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./vScroll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/plugins/scroll/vScroll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--5-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./vScroll.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/plugins/scroll/vScroll.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/components/plugins/scroll/vScroll.vue?vue&type=template&id=6ba02bfe&":
/*!****************************************************************************************!*\
  !*** ./resources/components/plugins/scroll/vScroll.vue?vue&type=template&id=6ba02bfe& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_template_id_6ba02bfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./vScroll.vue?vue&type=template&id=6ba02bfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/components/plugins/scroll/vScroll.vue?vue&type=template&id=6ba02bfe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_template_id_6ba02bfe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vScroll_vue_vue_type_template_id_6ba02bfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/css/custom_css/dashboard1.css?vue&type=style&index=1&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/css/custom_css/dashboard1.css?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard1_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./dashboard1.css?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/dashboard1.css?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard1_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard1_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard1_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard1_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard1_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/css/custom_css/dashboard1_timeline.css?vue&type=style&index=0&id=6cdc82ec&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/css/custom_css/dashboard1_timeline.css?vue&type=style&index=0&id=6cdc82ec&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard1_timeline_css_vue_type_style_index_0_id_6cdc82ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--5-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--5-2!./dashboard1_timeline.css?vue&type=style&index=0&id=6cdc82ec&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./resources/css/custom_css/dashboard1_timeline.css?vue&type=style&index=0&id=6cdc82ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard1_timeline_css_vue_type_style_index_0_id_6cdc82ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard1_timeline_css_vue_type_style_index_0_id_6cdc82ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard1_timeline_css_vue_type_style_index_0_id_6cdc82ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard1_timeline_css_vue_type_style_index_0_id_6cdc82ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_dashboard1_timeline_css_vue_type_style_index_0_id_6cdc82ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "./resources/img/authors/chat1.jpg":
/*!*****************************************!*\
  !*** ./resources/img/authors/chat1.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/chat1.jpg?e3ac5f631e53b03b8a9946d4fc50b85d";

/***/ }),

/***/ "./resources/img/authors/chat2.jpg":
/*!*****************************************!*\
  !*** ./resources/img/authors/chat2.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/chat2.jpg?e3ac5f631e53b03b8a9946d4fc50b85d";

/***/ }),

/***/ "./resources/img/authors/chat3.jpg":
/*!*****************************************!*\
  !*** ./resources/img/authors/chat3.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/chat3.jpg?e3ac5f631e53b03b8a9946d4fc50b85d";

/***/ }),

/***/ "./resources/img/brick-wall.png":
/*!**************************************!*\
  !*** ./resources/img/brick-wall.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/brick-wall.png?effad1520fc39d8897385d7004d2dbf4";

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

/***/ "./resources/img/pages/slider3.jpg":
/*!*****************************************!*\
  !*** ./resources/img/pages/slider3.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/laravel_vue/images/slider3.jpg?e7f9f38dfd313da441931a922ded451d";

/***/ }),

/***/ "./resources/js/jquery.flot.resize.js":
/*!********************************************!*\
  !*** ./resources/js/jquery.flot.resize.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* Flot plugin for automatically redrawing plots as the placeholder resizes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

It works by listening for changes on the placeholder div (through the jQuery
resize event plugin) - if the size changes, it will redraw the plot.

There are no options. If you need to disable the plugin for some plots, you
can just fix the size of their placeholders.

*/

/* Inline dependency:
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function ($, e, t) {
  "$:nomunge";

  e = window;
  var i = [],
      n = $.resize = $.extend($.resize, {}),
      a,
      r = false,
      s = "setTimeout",
      u = "resize",
      m = u + "-special-event",
      o = "pendingDelay",
      l = "activeDelay",
      f = "throttleWindow";
  n[o] = 200;
  n[l] = 20;
  n[f] = true;
  $.event.special[u] = {
    setup: function setup() {
      if (!n[f] && this[s]) {
        return false;
      }

      var e = $(this);
      i.push(this);
      e.data(m, {
        w: e.width(),
        h: e.height()
      });

      if (i.length === 1) {
        a = t;
        h();
      }
    },
    teardown: function teardown() {
      if (!n[f] && this[s]) {
        return false;
      }

      var e = $(this);

      for (var t = i.length - 1; t >= 0; t--) {
        if (i[t] == this) {
          i.splice(t, 1);
          break;
        }
      }

      e.removeData(m);

      if (!i.length) {
        if (r) {
          cancelAnimationFrame(a);
        } else {
          clearTimeout(a);
        }

        a = null;
      }
    },
    add: function add(e) {
      if (!n[f] && this[s]) {
        return false;
      }

      var i;

      function a(e, n, a) {
        var r = $(this),
            s = r.data(m) || {};
        s.w = n !== t ? n : r.width();
        s.h = a !== t ? a : r.height();
        i.apply(this, arguments);
      }

      if ($.isFunction(e)) {
        i = e;
        return a;
      } else {
        i = e.handler;
        e.handler = a;
      }
    }
  };

  function h(t) {
    if (r === true) {
      r = t || 1;
    }

    for (var s = i.length - 1; s >= 0; s--) {
      var l = $(i[s]);

      if (l[0] == e || l.is(":visible")) {
        var f = l.width(),
            c = l.height(),
            d = l.data(m);

        if (d && (f !== d.w || c !== d.h)) {
          l.trigger(u, [d.w = f, d.h = c]);
          r = t || true;
        }
      } else {
        d = l.data(m);
        d.w = 0;
        d.h = 0;
      }
    }

    if (a !== null) {
      if (r && (t == null || t - r < 1e3)) {
        a = e.requestAnimationFrame(h);
      } else {
        a = setTimeout(h, n[o]);
        r = false;
      }
    }
  }

  if (!e.requestAnimationFrame) {
    e.requestAnimationFrame = function () {
      return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (t, i) {
        return e.setTimeout(function () {
          t(new Date().getTime());
        }, n[l]);
      };
    }();
  }

  if (!e.cancelAnimationFrame) {
    e.cancelAnimationFrame = function () {
      return e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout;
    }();
  }
})(jQuery, this);

(function ($) {
  var options = {}; // no options

  function init(plot) {
    function onResize() {
      var placeholder = plot.getPlaceholder(); // somebody might have hidden us and we can't plot
      // when we don't have the dimensions

      if (placeholder.width() == 0 || placeholder.height() == 0) return;
      plot.resize();
      plot.setupGrid();
      plot.draw();
    }

    function bindEvents(plot, eventHolder) {
      plot.getPlaceholder().resize(onResize);
    }

    function shutdown(plot, eventHolder) {
      plot.getPlaceholder().unbind("resize", onResize);
    }

    plot.hooks.bindEvents.push(bindEvents);
    plot.hooks.shutdown.push(shutdown);
  }

  $.plot.plugins.push({
    init: init,
    options: options,
    name: 'resize',
    version: '1.0'
  });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

}]);